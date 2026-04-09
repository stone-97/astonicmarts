import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { QuoteService } from '../../core/services/quote.service';
@Component({
  selector: 'app-get-a-quote',
  templateUrl: './get-a-quote.component.html',
  styleUrls: ['./get-a-quote.component.css']
})
export class GetAQuoteComponent implements OnInit {


  constructor(
    private fb: FormBuilder,
    private quoteService: QuoteService
  ) { }

  quoteForm!: FormGroup;

  selectedProducts: any[] = [];

  // ✅ ADD THESE
  allProducts: any[] = [];
  filteredProducts: any[] = [];

 

  ngOnInit(): void {

  this.quoteForm = this.fb.group({
  fullName: [''],
  address: [''],
  phone: [''],
  altPhone: [''],
  email: [''],
  company: [''],
  message: [''],
    productSearch: [''],
     method: ['whatsapp'] 
  
});

    // ✅ TEMP DATA (just to make it work first)
    this.allProducts = [
      { id: 1, name: 'Pressure Washer' },
      { id: 2, name: 'Drilling Machine' },
      { id: 3, name: 'Safety Helmet' }
    ];
  }

  // 🔍 SEARCH FUNCTION (HTML is calling this)
  onSearchChange() {
    const value = this.quoteForm.get('productSearch')?.value?.toLowerCase() || '';

    this.filteredProducts = this.allProducts.filter(p =>
      p.name.toLowerCase().includes(value)
    );
  }

  // ➕ SELECT PRODUCT (THIS FIXES YOUR ERROR)
  selectProduct(product: any) {

    const exists = this.selectedProducts.find(p => p.id === product.id);

    if (!exists) {
      this.selectedProducts.push({
        ...product,
        quantity: 1 // 👈 add quantity
      });
    }

    // clear search input + dropdown
    this.quoteForm.get('productSearch')?.setValue('');
    this.filteredProducts = [];
  }

  // ❌ REMOVE PRODUCT (you already have this)
  removeProduct(index: number) {
    this.selectedProducts.splice(index, 1);
  }

  submitQuote() {

    const form = this.quoteForm.value;

    if (form.method === 'whatsapp') {
      this.sendToWhatsApp(form);
    }

    else if (form.method === 'save') {
      console.log('Saved to database:', form);
    }
  }

  sendToWhatsApp(form: any) {

    let message = `Hello, I want a quote:%0A%0A`;

    message += `Name: ${form.fullName}%0A`;
    message += `Phone: ${form.phone}%0A`;
    message += `Company: ${form.company || '-'}%0A%0A`;

    message += `Products:%0A`;

    this.selectedProducts.forEach((p: any) => {
      message += `- ${p.name} (Qty: ${p.quantity || 1})%0A`;
    });

    message += `%0AMessage:%0A${form.message || '-'}`;

    const phoneNumber = '2349030736173'; // 👈 replace with your number

    const url = `https://wa.me/${phoneNumber}?text=${message}`;

    window.open(url, '_blank');
  }



  increaseQty(product: any) {
    product.quantity++;
  }

  decreaseQty(product: any) {
    if (product.quantity > 1) {
      product.quantity--;
    }
  }
}