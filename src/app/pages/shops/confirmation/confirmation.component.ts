import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  order: any = null;

  ngOnInit() {
    const data = localStorage.getItem('lastOrder');
    this.order = data ? JSON.parse(data) : null;

    console.log('ORDER:', this.order); // debug
  }

  // ✅ FIX IMAGE HERE (IMPORTANT)
  fixImage(img: string): string {
    if (!img) return 'assets/img/placeholder.jpg';

    // remove ../../../ if present
    img = img.replace(/^(\.\.\/)+/, '');

    // allow external images
    if (img.startsWith('http')) return img;

    // ensure correct assets path
    if (!img.startsWith('assets')) {
      return 'assets/' + img;
    }

    return img;
  }
}