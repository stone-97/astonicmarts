import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from '../../core/services/search.service';
import { Subscription } from 'rxjs';
import { Product } from '../../core/models/Product';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent implements OnInit, OnDestroy {
  private searchSubscription!: Subscription;

  // Filter state
  uniqueBrands: string[] = [];
  uniqueCategories: string[] = [];
  selectedBrands: string[] = [];
  selectedCategories: string[] = [];
  minPrice: number = 0;
  maxPrice: number = Infinity;

  filteredProducts: Product[] = [];

  constructor(
    private router: Router,
    private searchService: SearchService,
  ) {}

  ngOnInit(): void {
    this.loadUniqueFilters();
    this.searchSubscription = this.searchService.currentSearchQuery$.subscribe(
      (query) => {
        this.applyFilters(query);
      },
    );

    // Initial load
    this.applyFilters(this.searchService.currentSearchQueryValue);
  }

  private loadUniqueFilters() {
    const allProducts = this.searchService.getProducts();
    this.uniqueBrands = [...new Set(allProducts.map((p) => p.brand))].sort();
    this.uniqueCategories = [
      ...new Set(allProducts.map((p) => p.category)),
    ].sort();
  }

   applyFilters(searchQuery: string = '') {
    let list = this.searchService.getProducts();

    // Search query
    if (searchQuery?.trim()) {
      list = this.searchService.searchProducts(searchQuery);
    }

    // Brand filter
    if (this.selectedBrands.length > 0) {
      list = list.filter((p) => this.selectedBrands.includes(p.brand));
    }

    // Category filter
    if (this.selectedCategories.length > 0) {
      list = list.filter((p) => this.selectedCategories.includes(p.category));
    }

    // Price filter
    if (this.minPrice > 0 || this.maxPrice < Infinity) {
      list = list.filter(
        (p) => p.price >= this.minPrice && p.price <= this.maxPrice,
      );
    }

    this.filteredProducts = list;
  }

  toggleBrandFilter(brand: string) {
    const idx = this.selectedBrands.indexOf(brand);
    if (idx > -1) this.selectedBrands.splice(idx, 1);
    else this.selectedBrands.push(brand);
    this.applyFilters(this.searchService.currentSearchQueryValue);
  }

  toggleCategoryFilter(cat: string) {
    const idx = this.selectedCategories.indexOf(cat);
    if (idx > -1) this.selectedCategories.splice(idx, 1);
    else this.selectedCategories.push(cat);
    this.applyFilters(this.searchService.currentSearchQueryValue);
  }


removeBrand(brand: string) {
  this.selectedBrands = this.selectedBrands.filter(b => b !== brand);
  this.applyFilters(this.searchService.currentSearchQueryValue);
}

removeCategory(cat: string) {
  this.selectedCategories = this.selectedCategories.filter(c => c !== cat);
  this.applyFilters(this.searchService.currentSearchQueryValue);
  }
  
  clearFilters() {
    this.selectedBrands = [];
    this.selectedCategories = [];
    this.minPrice = 0;
    this.maxPrice = Infinity;
    this.applyFilters(this.searchService.currentSearchQueryValue);
  }

  ngOnDestroy(): void {
    if (this.searchSubscription) this.searchSubscription.unsubscribe();
  }
}
