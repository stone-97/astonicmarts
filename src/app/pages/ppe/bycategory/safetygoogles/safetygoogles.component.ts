import { Component } from '@angular/core';
import { Product } from '../../../../core/models/Product';
import { SearchService } from '../../../../core/services/search.service';

@Component({
  selector: 'app-safetygoogles',
  templateUrl: './safetygoogles.component.html',
  styleUrl: './safetygoogles.component.css'
})
export class SafetygooglesComponent {
   products: Product[] = [];
  
    constructor(private SearchService: SearchService) {}
  
    ngOnInit() {
      this.products = this.SearchService.getProductsByCategory('Safety Goggle');
    }

}
