import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from '../../core/services/search.service';
import { Subscription } from 'rxjs';
import { Product } from '../../core/models/Product';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit, OnDestroy {

  products: Product[] = [];           // Current displayed products
  private searchSubscription!: Subscription;

  currentPage = 1;
  itemsPerPage = 9;

  constructor(
    private router: Router,
    private searchService: SearchService
  ) { }

  ngOnInit(): void {
    // Subscribe to search query changes
    this.searchSubscription = this.searchService.currentSearchQuery$.subscribe(query => {
      this.filterProducts(query);
    });

    // Initial load (in case there's already a search term)
    // this.filterProducts(this.searchService.currentSearchQuery$.value ?? '');
  }

  private filterProducts(query: string): void {
    if (!query || query.trim() === '') {
      this.products = this.searchService.getProducts();
    } else {
      this.products = this.searchService.searchProducts(query);
    }

    // Reset to first page whenever search changes
    this.currentPage = 1;
  }

  // Pagination logic
  get paginatedProducts() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return this.products.slice(start, start + this.itemsPerPage);
  }

  get totalPages(): number {
    return Math.ceil(this.products.length / this.itemsPerPage);
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  openProduct(prod: any) {
    this.router.navigate(['/product', prod.id]);
  }

  ngOnDestroy(): void {
    if (this.searchSubscription) {
      this.searchSubscription.unsubscribe();
    }
  }



  



  
}