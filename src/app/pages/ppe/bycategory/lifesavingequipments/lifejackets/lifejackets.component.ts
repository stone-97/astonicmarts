import { Component } from '@angular/core';
import { Product } from '../../../../../core/models/Product';
import { SearchService } from '../../../../../core/services/search.service';

@Component({
  selector: 'app-lifejackets',
  templateUrl: './lifejackets.component.html',
  styleUrl: './lifejackets.component.css'
})
export class LifejacketsComponent {

  products: Product[] = [];
    
      constructor(private SearchService: SearchService) {}
    
      ngOnInit() {
        this.products = this.SearchService.getProductsByCategory('life jackets');
      }
}
