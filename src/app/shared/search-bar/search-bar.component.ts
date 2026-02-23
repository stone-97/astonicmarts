import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SearchService } from '../../core/services/search.service';
import { Router } from '@angular/router';
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

  constructor(
    private router: Router,
    private searchService: SearchService
  ) {}

  ngOnInit() {
    this.searchService.currentSearchQuery$.subscribe(q => {
      if (!q) this.clearSuggestions();
    });
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

    this.suggestions = DUMMY_PRODUCTS.filter(p =>
      p.name.toLowerCase().includes(term) ||
      p.category.toLowerCase().includes(term) ||
      p.brand.toLowerCase().includes(term)
    ).slice(0, 8); // limit to 8 suggestions

    this.showSuggestions = this.suggestions.length > 0;
  }

  onSearch() {
    if (this.query.trim()) {
      this.searchService.setSearchQuery(this.query.trim());
      this.router.navigate(['/search-results'], {
        queryParams: { q: this.query.trim() }
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
  
}
