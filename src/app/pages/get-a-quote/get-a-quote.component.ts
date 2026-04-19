import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SearchService } from '../../core/services/search.service';
import * as emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-get-a-quote',
  templateUrl: './get-a-quote.component.html',
  styleUrls: ['./get-a-quote.component.css']
})
export class GetAQuoteComponent implements OnInit {

  quoteForm!: FormGroup;

  allProducts: any[] = [];
  products: any[] = [];

  selectedProducts: any[] = [];
  totalAmount: number = 0;

  isSubmitting = false;
  successMessage = '';
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private searchService: SearchService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {

    this.quoteForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      altPhone: [''],
      companyName: [''],
      address: ['', Validators.required],
      product: [''],
      message: ['']
    });

    this.allProducts = this.searchService.getProducts();

    // ✅ RECEIVE PRODUCT FROM PRODUCT PAGE
    const nav = history.state;
    if (nav && nav.product) {
      this.addProduct(nav.product);
    }
  }

  // 🔍 SEARCH PRODUCTS
  filterProducts(event: any) {

    const term = event.target.value.toLowerCase().trim();

    if (!term) {
      this.products = [];
      return;
    }

    this.products = this.allProducts
      .filter(p => p.name.toLowerCase().includes(term))
      .sort((a, b) =>
        a.name.localeCompare(b.name, undefined, {
          numeric: true,
          sensitivity: 'base'
        })
      );
  }

  // ➕ ADD PRODUCT
  addProduct(product: any) {

    const existing = this.selectedProducts.find(p => p.id === product.id);

    if (existing) {
      existing.quantity = Number(existing.quantity) + 1;
    } else {
      this.selectedProducts = [
        ...this.selectedProducts,
        {
          ...product,
          quantity: 1
        }
      ];
    }

    this.products = [];
    this.quoteForm.patchValue({ product: '' });

    // 🔥 FORCE TOTAL UPDATE
    this.calculateTotal();
  }

  // ❌ REMOVE PRODUCT
  removeProduct(index: number) {
    this.selectedProducts.splice(index, 1);
    this.calculateTotal();
  }

  // ✅ FIXED QUANTITY HANDLER
  updateQuantity(event: any, item: any) {
    const value = parseInt(event.target.value, 10);
    item.quantity = value > 0 ? value : 1;
    this.calculateTotal();
  }

  // 🔢 CALCULATE TOTAL (FIXED)
  // 🔢 CALCULATE TOTAL (FIXED)
  calculateTotal() {
    this.totalAmount = 0;

    for (let item of this.selectedProducts) {
      this.totalAmount += Number(item.price) * Number(item.quantity);
    }

    this.cdr.detectChanges();
  }

  // 📩 SUBMIT
  submitQuote() {

    this.successMessage = '';
    this.errorMessage = '';

    if (this.quoteForm.invalid || this.selectedProducts.length === 0) {
      this.errorMessage = 'Fill all required fields and add at least one product';
      return;
    }

    this.isSubmitting = true;

    const form = this.quoteForm.value;

    const formDataCopy = { ...form };
    const totalCopy = this.totalAmount;

    const itemsList = this.selectedProducts
      .map(i => `${i.name} x${Number(i.quantity)} = ₦${Number(i.price) * Number(i.quantity)}`)
      .join(', ');

    const itemsListWA = this.selectedProducts
      .map(i => `${i.name} x${Number(i.quantity)} = ₦${Number(i.price) * Number(i.quantity)}`)
      .join('%0A');

    // ✅ SEND EMAIL IN BACKGROUND
    Promise.all([

      emailjs.send(
        'service_rxui4gr',
        'template_kuh2whe',
        {
          title: '📩 New Quote Request - Astonic Mart',
          order_id: '',
          name: form.fullName,
          phone: form.phone,
          email: form.email,
          address: form.address,
          items: itemsList,
          total: totalCopy,
          message: form.message || 'Quote request'
        },
        { publicKey: 'F4cX3cLntLb5WG5ox' }
      ),

      emailjs.send(
        'service_rxui4gr',
        'template_3ls7gg4',
        {
          name: form.fullName,
          email: form.email,
          total: totalCopy
        },
        { publicKey: 'F4cX3cLntLb5WG5ox' }
      )

    ])
      .then(() => console.log('Email sent'))
      .catch(err => console.error('Email failed', err));

    // ✅ SUCCESS ALERT
    Swal.fire({
      icon: 'success',
      title: 'Quote Submitted!',
      text: 'Click continue to open WhatsApp',
      confirmButtonText: 'Continue',
      confirmButtonColor: '#3085d6'
    }).then(() => {

      // ✅ CLOSE MODAL CLEANLY
      const modalEl = document.getElementById('quoteModal');

      if (modalEl) {
        const modalInstance = (window as any).bootstrap.Modal.getInstance(modalEl);

        if (modalInstance) {
          modalInstance.hide();
          modalInstance.dispose();
        }
      }

      document.body.classList.remove('modal-open');
      document.body.style.overflow = 'auto';

      const backdrops = document.querySelectorAll('.modal-backdrop');
      backdrops.forEach(b => b.remove());

      // ✅ RESET FORM
      this.isSubmitting = false;
      this.quoteForm.reset();
      this.selectedProducts = [];
      this.totalAmount = 0;

      // ✅ OPEN WHATSAPP
      setTimeout(() => {
        this.sendToWhatsApp(itemsListWA, formDataCopy, totalCopy);
      }, 400);

    });
  }

  // 📲 WHATSAPP
  sendToWhatsApp(itemsListWA: string, form: any, total: number) {

    const message = `
📦 *Bulk Quote Request*

👤 Full Name: ${form.fullName}
🏢 Company: ${form.companyName || 'N/A'}

📞 Phone: ${form.phone}
📧 Email: ${form.email}

📍 Address: ${form.address}

🛒 Items:
${itemsListWA}

💰 Total: ₦${total}

📝 Note: ${form.message || 'N/A'}
  `;

    const phone = '2349074375786';
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    const newWindow = window.open(url, '_blank');
    if (newWindow) newWindow.opener = null;
  }

}