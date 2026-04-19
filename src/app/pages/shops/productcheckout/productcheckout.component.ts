import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../core/services/cart.service';
import { Router } from '@angular/router';
import * as emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-productcheckout',
  templateUrl: './productcheckout.component.html',
  styleUrls: ['./productcheckout.component.css']
})
export class ProductcheckoutComponent implements OnInit {

  cartItems: any[] = [];

  orderPlaced = false;
  orderId = '';
  totalAmount = 0;
  selectedPayment = 'transfer';
  isProcessing = false;

  deliveryType = '';
  deliveryMessage = '';

  formData = {
    firstName: '',
    lastName: '',
    phone: '',
    altPhone: '',
    email: '',
    company: '',
    address: '',
    city: ''
  };

  constructor(
    private cartService: CartService,
    private router: Router
  ) { }

  ngOnInit() {
    this.cartItems = this.cartService.getItems();
    this.selectedPayment = 'transfer';
  }

  getTotal() {
    return this.cartService.getTotal();
  }

  // ✅ ONLY DELIVERY LOGIC (NO CONFLICT)
  onCityChange() {
    const city = this.formData.city.toLowerCase().trim();

    if (!city) {
      this.deliveryType = '';
      this.deliveryMessage = '';
      this.selectedPayment = 'transfer';
      return;
    }

    if (city.includes('lagos')) {
      this.deliveryType = 'lagos';
      this.deliveryMessage = '🚚 Lagos Delivery: Pay on delivery. Inspect before payment.';
      this.selectedPayment = 'cod';
    }
    else if (
      city.includes('uk') || city.includes('usa') || city.includes('canada') ||
      city.includes('ghana') || city.includes('kenya') ||
      city.includes('abroad') || city.includes('international')
    ) {
      this.deliveryType = 'international';
      this.deliveryMessage = '🌍 International Delivery: Full payment required before shipping.';
      this.selectedPayment = 'online';
    }
    else {
      this.deliveryType = 'outside';
      this.deliveryMessage = '📦 Nationwide Delivery: Pay 30% now, balance on delivery.';
      this.selectedPayment = 'transfer';
    }

    // Force Angular to re-render the payment section
    setTimeout(() => {
      this.deliveryType = this.deliveryType;
      this.selectedPayment = this.selectedPayment;
    }, 50);
  }

  // ✅ PLACE ORDER WITH EMAIL
  // ✅ IMPROVED placeOrder()
  placeOrder() {

    // Validation
    if (!this.formData.firstName || !this.formData.email || !this.formData.phone) {
      Swal.fire('Error', 'Please fill all required fields', 'warning');
      return;
    }

    if (!this.deliveryType) {
      Swal.fire('Error', 'Please enter your city to see delivery options', 'warning');
      return;
    }

    // Safety checks
    if (this.deliveryType === 'international' && this.selectedPayment !== 'online') {
      Swal.fire('Error', 'International orders must be paid online', 'warning');
      return;
    }

    if (this.deliveryType === 'outside' && this.selectedPayment === 'cod') {
      Swal.fire('Error', 'Pay on delivery is not available outside Lagos', 'warning');
      return;
    }

    this.orderId = 'AST-' + Math.floor(Math.random() * 100000);
    this.totalAmount = this.getTotal();

    const order = {
      orderId: this.orderId,
      paymentMethod: this.selectedPayment,
      customer: this.formData,
      items: this.cartItems,
      total: this.totalAmount
    };

    localStorage.setItem('lastOrder', JSON.stringify(order));

    // =================== DIFFERENT FLOWS ===================

    if (this.selectedPayment === 'online') {
      // International or Optional Card Payment
      this.payWithPaystack();
      return;
    }

    if (this.selectedPayment === 'cod') {
      // Lagos - Pay on Delivery
      this.sendEmailsAfterPayment();

      Swal.fire({
        icon: 'success',
        title: 'Order Confirmed!',
        text: 'Pay when your order arrives 🚚'
      });

      this.cartService.clearCart();

      setTimeout(() => {
        this.router.navigate(['/confirmation']);
      }, 2000);

      return;
    }

    // =================== OUTSIDE LAGOS - TRANSFER ===================
    if (this.selectedPayment === 'transfer') {
      this.orderPlaced = true;        // Show bank details section
      return;
    }
  }


  // ✅ PAYSTACK
  payWithPaystack() {

    const handler = (window as any).PaystackPop.setup({
      key: 'pk_test_471a1c1ff03a8170fa899296864a028542971127',
      email: this.formData.email,
      amount: this.getTotal() * 100,
      currency: 'NGN',

      callback: () => {
        this.sendEmailsAfterPayment();
      },

      onClose: () => {
        Swal.fire('Cancelled', 'Payment not completed', 'warning');
      }
    });

    handler.openIframe();
  }

  // ✅ EMAIL AFTER ONLINE PAYMENT
  sendEmailsAfterPayment() {

    const itemsList = this.cartItems
      .map(i => `${i.name} x${i.quantity}`)
      .join(', ');

    console.log('Sending email to:', this.formData.email);

    Promise.all([

      emailjs.send(
        'service_rxui4gr',
        'template_kuh2whe',
        {
          title: '🛒 New Order - Astonic Mart',
          order_id: this.orderId,
          name: this.formData.firstName,
          phone: this.formData.phone,
          email: this.formData.email,
          address: this.formData.address + ', ' + this.formData.city,
          items: itemsList,
          total: this.getTotal()
        },
        { publicKey: 'F4cX3cLntLb5WG5ox' }
      ),

      emailjs.send(
        'service_rxui4gr',
        'template_3ls7gg4',
        {
          order_id: this.orderId,
          name: this.formData.firstName,
          email: this.formData.email,
          total: this.getTotal()
        },
        { publicKey: 'F4cX3cLntLb5WG5ox' }
      )

    ])
      .then((res) => {

        console.log('EMAIL SUCCESS:', res);

        this.cartService.clearCart();
        this.router.navigate(['/confirmation']);

      })
      .catch((error) => {

        console.error('EMAIL FAILED:', error);

        Swal.fire({
          icon: 'error',
          title: 'Email failed',
          text: 'Payment successful but email not sent.'
        });

      });
  }

  confirmPayment() {

    if (this.isProcessing) return;

    this.isProcessing = true;

    const itemsList = this.cartItems
      .map(i => `${i.name} x${i.quantity}`)
      .join(', ');

    Promise.all([

      emailjs.send(
        'service_rxui4gr',
        'template_kuh2whe',
        {
          order_id: this.orderId,
          name: this.formData.firstName,
          phone: this.formData.phone,
          email: this.formData.email,
          address: this.formData.address + ', ' + this.formData.city,
          items: itemsList,
          total: this.totalAmount,
          message: '💰 CUSTOMER PAID (TRANSFER)'
        },
        { publicKey: 'F4cX3cLntLb5WG5ox' }
      ),

      emailjs.send(
        'service_rxui4gr',
        'template_3ls7gg4',
        {
          order_id: this.orderId,
          name: this.formData.firstName,
          email: this.formData.email,
          total: this.totalAmount
        },
        { publicKey: 'F4cX3cLntLb5WG5ox' }
      )

    ])
      .then(() => {

        this.isProcessing = false;

        Swal.fire({
          icon: 'success',
          title: 'Payment Confirmed!',
          text: 'We will process your order shortly.'
        });

        this.cartService.clearCart();

        setTimeout(() => {
          this.router.navigate(['/confirmation']);
        }, 2000);

      })
      .catch(() => {

        this.isProcessing = false;

        Swal.fire({
          icon: 'error',
          title: 'Email failed',
          text: 'But your order is saved.'
        });

      });
  }
}