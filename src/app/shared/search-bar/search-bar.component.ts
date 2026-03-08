import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SearchService } from '../../core/services/search.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../core/models/Product';
import { DUMMY_PRODUCTS } from '../../core/models/DummyProduct';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {


  query: string = '';
  suggestions: Product[] = [];
  showSuggestions: boolean = false;
  filteredProducts: Product[] = [];

  constructor(
    private router: Router,
    private searchService: SearchService
  ) {}

  ngOnInit() {
  this.suggestions = this.searchService.getProducts();
    
    
  }

  onInputChange() {
    this.updateSuggestions();
  }

  updateSuggestions() {
    const term = this.query.trim().toLowerCase();

    if (term.length < 2) {
      this.suggestions = [];
      this.showSuggestions = false;
      return;
    }

    this.suggestions = this.searchService.searchProducts(term).slice(0,8)

    this.showSuggestions = this.suggestions.length > 0;
  }

 onSearch() {
  if (this.query.trim()) {
    this.router.navigate(['/shopcategory'], {
      queryParams: { search: this.query.trim() }
    });
    this.clearSuggestions();
  }
}

  selectSuggestion(product: Product) {
    this.query = product.name;
    this.clearSuggestions();
    this.onSearch();
  }

  onBlur() {
    // Delay clearing so user can click a suggestion
    setTimeout(() => this.clearSuggestions(), 200);
  }

  clearSuggestions() {
    this.suggestions = [];
    this.showSuggestions = false;
  }

  selectProduct(product: Product){
    this.query = product.name;
    this.filteredProducts = [];

     this.router.navigate(['/shopcategory'], {
      queryParams:{
        search: product.name,
        
      }
     })

  }
  
}
