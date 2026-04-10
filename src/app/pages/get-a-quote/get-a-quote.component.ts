import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from '../../core/models/Product';
import { SearchService } from '../../core/services/search.service';

@Component({
  selector: 'app-get-a-quote',
  templateUrl: './get-a-quote.component.html',
  styleUrls: ['./get-a-quote.component.css']
})
export class GetAQuoteComponent implements OnInit {

  quoteForm!: FormGroup;

  allProducts: any[] = [];
  products: any[] = [];

  isSubmitting = false;
  successMessage = '';
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private searchService: SearchService
  ) { }

  ngOnInit(): void {

    this.quoteForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      alternatePhone: [''],
      companyName: [''],
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      product: ['', Validators.required],
      message: ['']
    });

    this.allProducts = this.searchService.getProducts();
    this.products = [];
  }

  // 🔍 SEARCH PRODUCTS
  filterProducts(event: any) {
    const term = event.target.value.toLowerCase().trim();

    if (!term) {
      this.products = [];
      return;
    }

    this.products = this.allProducts.filter(p =>
      p.name.toLowerCase().includes(term)
    );
  }

  // 👇 SELECT PRODUCT
  selectProduct(product: any) {
    this.quoteForm.patchValue({
      product: product.name
    });

    this.products = [];
  }

  // 📩 SUBMIT FORM
  submitQuote() {

    this.successMessage = '';
    this.errorMessage = '';

    if (this.quoteForm.invalid) {
      this.errorMessage = 'Please fill all required fields';
      return;
    }

    this.isSubmitting = true;

    setTimeout(() => {

      // 🔥 THIS IS THE MAIN ACTION
      this.sendToWhatsApp();

      this.isSubmitting = false;
      this.successMessage = 'Opening WhatsApp...';

      this.quoteForm.reset();
      this.products = [];

    }, 500);
  }

  sendToWhatsApp() {

    const form = this.quoteForm.value;

    const message = `
📦 *New Quote Request*

👤 Name: ${form.name}
📧 Email: ${form.email}
📞 Phone: ${form.phone}
📞 Alt Phone: ${form.alternatePhone || 'N/A'}
🏢 Company: ${form.companyName || 'N/A'}

📍 Address: ${form.address}
🏙 City: ${form.city}
🗺 State: ${form.state}

🛒 Product: ${form.product}
📝 Message: ${form.message || 'N/A'}
  `;

    const phone = '2349030736173'; // 🔥 PUT YOUR NUMBER HERE

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    window.open(url, '_blank');
  }

  
}