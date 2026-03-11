import { Component } from '@angular/core';
import { Product } from '../../../../../core/models/Product';
import { SearchService } from '../../../../../core/services/search.service';

@Component({
  selector: 'app-stanchions',
  templateUrl: './stanchions.component.html',
  styleUrl: './stanchions.component.css'
})
export class StanchionsComponent {
products: Product[] = [];
    
      constructor(private SearchService: SearchService) {}
    
      ngOnInit() {
        this.products = this.SearchService.getProductsByCategory('Stanchions');
      }
}
