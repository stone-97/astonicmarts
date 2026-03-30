import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagnation',
  templateUrl: './pagnation.component.html',
  styleUrls: ['./pagnation.component.css']
})
export class PagnationComponent {

  constructor(private router: Router) {}

  products = [
    {
      id: 1,
      image: 'assets/img/product/p1.jpg',
      name: 'Industrial Drill',
      price: '$120',
      color: 'Red',
      description: 'High performance industrial drill designed for heavy duty work.',
      specification: '1200W motor, Steel body, Long durability'
    },
    {
      id: 2,
      image: 'assets/img/product/p2.jpg',
      name: 'Safety Helmet',
      price: '$35',
      color: 'Yellow',
      description: 'Durable safety helmet for construction environments.',
      specification: 'ABS shell, Adjustable strap'
    },
    {
      id: 3,
      image: 'assets/img/product/p3.jpg',
      name: 'Angle Grinder',
      price: '$80',
      color: 'Blue',
      description: 'Powerful angle grinder for cutting and grinding.',
      specification: '900W motor, 11000RPM'
    },
    {
      id: 4,
      image: 'assets/img/product/p4.jpg',
      name: 'Safety Gloves',
      price: '$12',
      color: 'Black',
      description: 'Protective gloves for industrial use.',
      specification: 'Heat resistant, Anti-slip grip'
    },
    {
      id: 5,
      image: 'assets/img/product/p5.jpg',
      name: 'Cordless Drill',
      price: '$150',
      color: 'Green',
      description: 'Rechargeable cordless drill with high torque.',
      specification: '18V battery, Fast charging'
    },
        {
      id: 6,
      image: 'assets/img/product/p5.jpg',
      name: 'Cordless Drill',
      price: '$150',
      color: 'Green',
      description: 'Rechargeable cordless drill with high torque.',
      specification: '18V battery, Fast charging'
    },
        {
      id: 7,
      image: 'assets/img/product/p5.jpg',
      name: 'Cordless Drill',
      price: '$150',
      color: 'Green',
      description: 'Rechargeable cordless drill with high torque.',
      specification: '18V battery, Fast charging'
    },
        {
      id: 8,
      image: 'assets/img/product/p5.jpg',
      name: 'Cordless Drill',
      price: '$150',
      color: 'Green',
      description: 'Rechargeable cordless drill with high torque.',
      specification: '18V battery, Fast charging'
    },
        {
      id: 9,
      image: 'assets/img/product/p5.jpg',
      name: 'Cordless Drill',
      price: '$150',
      color: 'Green',
      description: 'Rechargeable cordless drill with high torque.',
      specification: '18V battery, Fast charging'
    },
    {
      id: 10,
      image: 'assets/img/product/p5.jpg',
      name: 'Cordless Drill',
      price: '$150',
      color: 'Green',
      description: 'Rechargeable cordless drill with high torque.',
      specification: '18V battery, Fast charging'
    }
  ];

  currentPage = 1;
  itemsPerPage = 9;

  get paginatedProducts() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return this.products.slice(start, start + this.itemsPerPage);
  }

  nextPage() {
    if (this.currentPage * this.itemsPerPage < this.products.length) {
      this.currentPage++;
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  openProduct(prod:any){
    this.router.navigate(['/product', prod.id]);
  }

}