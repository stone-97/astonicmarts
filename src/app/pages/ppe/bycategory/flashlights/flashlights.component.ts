import { Component } from '@angular/core';
import { Product } from '../../../../core/models/Product';
import { SearchService } from '../../../../core/services/search.service';

@Component({
  selector: 'app-flashlights',
  templateUrl: './flashlights.component.html',
  styleUrl: './flashlights.component.css'
})
export class FlashlightsComponent {

   products: Product[] = [];
  
    constructor(private SearchService: SearchService) {}
  
    ngOnInit() {
      this.products = this.SearchService.getProductsByCategory('flashlights');
    }

}
