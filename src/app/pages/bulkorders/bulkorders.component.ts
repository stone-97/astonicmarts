import { Component } from '@angular/core';
import { CartService } from '../../core/services/cart.service';
@Component({
  selector: 'app-bulkorders',
  templateUrl: './bulkorders.component.html',
  styleUrl: './bulkorders.component.css'
})
export class BulkordersComponent {



  form = {
    name: '',
    phone: '',
    email: '',
    orderList: ''
  };

  submitBulkOrder() {
    console.log(this.form);

    // Option 1: Send to WhatsApp
    this.sendToWhatsApp();

    // Option 2 (later): Send to Email
  }

  sendToWhatsApp() {
    const message = `Hello Astonic Mart, I want to request a bulk order:

Name: ${this.form.name}
Phone: ${this.form.phone}
Email: ${this.form.email}

Order List:
${this.form.orderList}
`;

    const phoneNumber = "234XXXXXXXXXX"; // your WhatsApp number

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(url, '_blank');
  }
}
