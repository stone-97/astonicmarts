import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from '../../../core/services/search.service';
import { Product } from '../../../core/models/Product';
import { CartService } from '../../../core/services/cart.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {

  product: Product | undefined;
  similarProducts: Product[] = [];

  categories: any[] = [];
  breadcrumb: any[] = [];
  categoryMap: any = {};

  isPaused: boolean = false;
  quantity: number = 1;

  selectedImage: string = '';
  currentIndex = 0;

  selectedColor: string = '';
  selectedSize: string | number = '';
  selectedPrice: number = 0;

  
  togglePause() {
    this.isPaused = !this.isPaused;
  }

  constructor(
    private route: ActivatedRoute,
    private searchService: SearchService,
    private cartService: CartService,
    private router: Router
  ) { }

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

    this.generateBreadcrumb(this.product);

    // similar products
    if (this.product.showSimilar === true) {
      this.similarProducts = this.searchService.getSimilarProducts(
        this.product.category,
        this.product.id
      );
    }
  }

  // =========================
  // IMAGE CONTROL
  // =========================
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

  // =========================
  // SELECTION
  // =========================
  selectColor(color: string) {
    this.selectedColor = color;
  }

  selectSize(size: string | number | undefined) {
    if (!size) return;

    this.selectedSize = size;

    const found = this.product?.variations?.find(
      v => v.size === size
    );

    if (found) {
      this.selectedPrice = found.price;
    }
  }

  // =========================
  // BREADCRUMB
  // =========================
  generateBreadcrumb(product: any) {

    this.breadcrumb = [
      { name: 'Home', link: '/' },
      { name: 'Shop', link: '/shop' }
    ];

    if (product.group === 'power-tools') {
      this.breadcrumb.push({
        name: 'Power Tools',
        link: '/powertools'
      });
    }

    const category = this.categoryMap[product.category];

    if (category) {
      this.breadcrumb.push({
        name: category.name,
        link: category.link
      });
    }

    this.breadcrumb.push({
      name: product.name,
      link: null
    });
  }

  // =========================
  // CART
  // =========================
  addToCart() {
    if (!this.product) return;

    const item = {
      id: this.product.id,
      name: this.product.name,
      price: this.selectedPrice || this.product.price,
      quantity: this.quantity,
      image: this.product.images?.[0] || '',
      images: this.product.images || []
    };

    this.cartService.addToCart(item);

    // ✅ MODERN ALERT
    Swal.fire({
      icon: 'success',
      title: 'Added to Cart 🛒',
      text: `${this.product.name} added successfully`,
      showConfirmButton: true,
      confirmButtonText: 'View Cart',
      confirmButtonColor: '#ff6f00',

      showCancelButton: true,
      cancelButtonText: 'Continue Shopping',

      timer: 5000, // ⏱ 5 seconds before auto close
      timerProgressBar: true,

      width: '420px', // ✅ makes popup wider
      padding: '1.5rem',

      backdrop: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.router.navigate(['/shoppingcart']);
      }
    });
  }




  showCartPopup() {
    const popup = document.getElementById('cartPopup');
    if (!popup) return;

    popup.classList.add('show');

    // Auto hide after 3 seconds
    setTimeout(() => {
      popup.classList.remove('show');
    }, 3000);
  }




  buyNow() {
    if (!this.product) return;

    const item = {
      id: this.product.id,
      name: this.product.name,
      price: this.selectedPrice || this.product.price,
      quantity: this.quantity,

      image: this.product.images?.[0] || '',
      images: this.product.images || []
    };

    this.cartService.clearCart();
    this.cartService.addToCart(item);

    this.router.navigate(['/productcheckout']);
  }

  // =========================
  // 💬 GET QUOTE (NEW FEATURE)
  // =========================
  getQuote(product: any) {
    this.router.navigate(['/get-a-quote'], {
      state: {
        product: {
          ...product,
          price: this.selectedPrice || product.price,
          quantity: this.quantity
        }
      }
    });
  }
}