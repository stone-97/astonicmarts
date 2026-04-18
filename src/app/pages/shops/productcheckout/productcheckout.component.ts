import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../core/services/cart.service';
import { Router } from '@angular/router';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-productcheckout',
  templateUrl: './productcheckout.component.html',
  styleUrls: ['./productcheckout.component.css']
})
export class ProductcheckoutComponent implements OnInit {

  cartItems: any[] = [];

  orderPlaced: boolean = false;
  orderId: string = '';
  totalAmount: number = 0;
  selectedPayment: string = 'transfer';
  isProcessing: boolean = false;
  formData = {
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    address: '',
    city: ''
  };

  constructor(
    private cartService: CartService,
    private router: Router
  ) { }

  ngOnInit() {
    this.cartItems = this.cartService.getCart();
  }

  getTotal() {
    return this.cartService.getTotal();
  }

  // ============================
  // ✅ PLACE ORDER
  // ============================
  placeOrder() {

    if (!this.formData.email || !this.formData.firstName || !this.formData.phone) {
      alert('Please fill all required fields');
      return;
    }

    this.orderId = 'AST-' + Math.floor(Math.random() * 100000);
    this.totalAmount = this.getTotal() + 2000;

    const order = {
      orderId: this.orderId,
      paymentMethod: this.selectedPayment,
      customer: this.formData,
      items: this.cartItems,
      total: this.totalAmount
    };

    localStorage.setItem('lastOrder', JSON.stringify(order));

    // If Paystack
    if (this.selectedPayment === 'online') {
      this.payWithPaystack();
      return;
    }

    const itemsList = this.cartItems
      .map(i => `${i.name} x${i.quantity}`)
      .join(', ');

    // ============================
    // EMAIL TO ADMIN (NEW ORDER)
    // ============================
    emailjs.send(
      'service_rxui4gr',
      'template_kuh2whe',
      {
        message: '🆕 NEW ORDER', // ✅ FIX ADDED HERE
        order_id: this.orderId,
        name: this.formData.firstName + ' ' + this.formData.lastName,
        phone: this.formData.phone,
        email: this.formData.email,
        address: this.formData.address + ', ' + this.formData.city,
        items: itemsList,
        total: this.totalAmount
      },
      {
        publicKey: 'F4cX3cLntLb5WG5ox'
      }
    );

    // ============================
    // EMAIL TO CUSTOMER
    // ============================
    emailjs.send(
      'service_rxui4gr',
      'template_3ls7gg4',
      {
        order_id: this.orderId,
        name: this.formData.firstName,
        email: this.formData.email,
        total: this.totalAmount
      },
      {
        publicKey: 'F4cX3cLntLb5WG5ox'
      }
    );

    // ============================
    // BANK TRANSFER FLOW
    // ============================
    this.orderPlaced = true;
    this.cartService.clearCart();

    Swal.fire({
      icon: 'success',
      title: 'Order Placed!',
      text: 'Please make payment using the bank details below.',
      confirmButtonColor: '#3085d6'
    });
  }

  // ============================
  // 🎉 SUCCESS MESSAGE FLOW
  // ============================
  showSuccessAndRedirect() {

    this.orderPlaced = true;
    this.cartService.clearCart();

    Swal.fire({
      icon: 'success',
      title: 'Order Successful!',
      html: `
      <p><strong>Order ID:</strong> ${this.orderId}</p>
      <p><strong>Total:</strong> ₦${this.totalAmount}</p>
    `,
      timer: 3000,
      showConfirmButton: false
    });

    setTimeout(() => {
      this.router.navigate(['/confirmation']);
    }, 3000);
  }
  // ============================
  // PAYSTACK
  // ============================
  payWithPaystack() {

    this.totalAmount = this.getTotal() + 2000;

    const handler = (window as any).PaystackPop.setup({
      key: 'pk_test_471a1c1ff03a8170fa899296864a028542971127',
      email: this.formData.email,
      amount: this.totalAmount * 100,
      currency: 'NGN',

      callback: (response: any) => {

        Swal.fire({
          icon: 'success',
          title: 'Payment Successful!',
          html: `Reference: <strong>${response.reference}</strong>`,
          confirmButtonColor: '#28a745'
        });

        const itemsList = this.cartItems
          .map(i => `${i.name} x${i.quantity}`)
          .join(', ');

        // ADMIN EMAIL (ONLINE PAYMENT)
        emailjs.send(
          'service_rxui4gr',
          'template_kuh2whe',
          {
            message: '💳 ONLINE PAYMENT SUCCESSFUL',
            order_id: this.orderId,
            name: this.formData.firstName + ' ' + this.formData.lastName,
            phone: this.formData.phone,
            email: this.formData.email,
            address: this.formData.address + ', ' + this.formData.city,
            items: itemsList,
            total: this.totalAmount
          },
          {
            publicKey: 'F4cX3cLntLb5WG5ox'
          }
        );

        // CUSTOMER EMAIL
        emailjs.send(
          'service_rxui4gr',
          'template_3ls7gg4',
          {
            order_id: this.orderId,
            name: this.formData.firstName,
            email: this.formData.email,
            total: this.totalAmount
          },
          {
            publicKey: 'F4cX3cLntLb5WG5ox'
          }
        );

        this.showSuccessAndRedirect();
      },

      onClose: () => {
        Swal.fire({
          icon: 'warning',
          title: 'Payment Cancelled',
          text: 'You cancelled the payment.',
        });
      }
    });

    handler.openIframe();
  }

  // ============================
  // CONFIRM PAYMENT
  // ============================
  confirmPayment() {

    // 🔒 STOP MULTIPLE CLICKS
    if (this.isProcessing) return;
    this.isProcessing = true;

    const order = JSON.parse(localStorage.getItem('lastOrder') || '{}');

    const itemsList = order.items
      ?.map((i: any) => `${i.name} x${i.quantity}`)
      .join(', ');

    // 🔄 LOADING
    Swal.fire({
      title: 'Processing...',
      text: 'Sending notification...',
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      }
    });

    emailjs.send(
      'service_rxui4gr',
      'template_kuh2whe',
      {
        message: '💰 CUSTOMER HAS MADE PAYMENT',
        order_id: order.orderId,
        name: order.customer.firstName + ' ' + order.customer.lastName,
        phone: order.customer.phone,
        email: order.customer.email,
        address: order.customer.address + ', ' + order.customer.city,
        items: itemsList,
        total: order.total
      },
      {
        publicKey: 'F4cX3cLntLb5WG5ox'
      }
    )
      .then(() => {

        this.isProcessing = false; // 🔓 UNLOCK

        Swal.fire({
          icon: 'success',
          title: 'Payment Notified!',
          text: 'We will confirm your payment shortly.',
          timer: 2500,
          showConfirmButton: false
        });

        setTimeout(() => {
          this.router.navigate(['/confirmation']);
        }, 2500);
      })
      .catch(() => {

        this.isProcessing = false; // 🔓 UNLOCK

        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Failed to send notification. Please try again.'
        });
      });
  }
}