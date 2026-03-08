import { Component } from '@angular/core';
import { Product } from '../../../../core/models/Product';
import { SearchService } from '../../../../core/services/search.service';

@Component({
  selector: 'app-safetyshoes',
  templateUrl: './safetyshoes.component.html',
  styleUrl: './safetyshoes.component.css'
})
export class SafetyshoesComponent {

   products: Product[] = [];
    
      constructor(private SearchService: SearchService) {}
    
      ngOnInit() {
        this.products = this.SearchService.getProductsByCategory('Safety shoes');
      }
    
}
