import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from '../../../core/services/search.service';
import { Product } from '../../../core/models/Product';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {

  product: Product | undefined;
  similarProducts: Product[] = [];

  categories: any[] = [];

  // Required for click-to-pause functionality
  isPaused: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private searchService: SearchService
  ) {}

  ngOnInit(): void {
    this.categories = this.searchService.getCategories();
    const idParam = this.route.snapshot.paramMap.get('id');
    const id = idParam ? Number(idParam) : NaN;

    if (isNaN(id)) {
      console.warn('Invalid product ID in URL:', idParam);
      return;
    }

    this.product = this.searchService.getProductById(id);

    if (!this.product) {
      console.warn(`Product with ID ${id} not found`);
      return;
    }

    console.log(`Loaded product → ID: ${id}, Name: ${this.product.name}`);

    // Only load similar products if YOU enabled it on this product
    if (this.product.showSimilar === true) {
      this.similarProducts = this.searchService.getSimilarProducts(
        this.product.category,
        this.product.id
      );

      console.log(
        `Similar products loaded: ${this.similarProducts.length} items`,
        this.similarProducts.map(p => p.name)
      );
    } else {
      console.log('Similar products disabled for this product (showSimilar !== true)');
    }
  }

  // Required method for click-to-pause
  togglePause() {
    this.isPaused = !this.isPaused;
    console.log('Scrolling paused state changed to:', this.isPaused);
  }

  selectedImage: string = '';


currentIndex = 0;

changeImage(img: string, images: string[]) {
  this.selectedImage = img;
  this.currentIndex = images.indexOf(img);
}

nextImage(images: string[]) {
  this.currentIndex = (this.currentIndex + 1) % images.length;
  this.selectedImage = images[this.currentIndex];
}

prevImage(images: string[]) {
  this.currentIndex =
    (this.currentIndex - 1 + images.length) % images.length;
  this.selectedImage = images[this.currentIndex];
}

selectedColor: string = '';
selectedSize: string | number = '';

selectColor(color: string) {
  this.selectedColor = color;
}

selectSize(size: string | number) {
  this.selectedSize = size;
}
}