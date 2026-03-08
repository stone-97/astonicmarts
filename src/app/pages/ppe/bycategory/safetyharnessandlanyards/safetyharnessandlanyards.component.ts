import { Component } from '@angular/core';
import { Product } from '../../../../core/models/Product';
import { SearchService } from '../../../../core/services/search.service';

@Component({
  selector: 'app-safetyharnessandlanyards',
  templateUrl: './safetyharnessandlanyards.component.html',
  styleUrl: './safetyharnessandlanyards.component.css'
})
export class SafetyharnessandlanyardsComponent {

    products: Product[] = [];
  
    constructor(private SearchService: SearchService) {}
  
    ngOnInit() {
      this.products = this.SearchService.getProductsByCategory('Safety Harness & Lanyards');
    }
  

}
