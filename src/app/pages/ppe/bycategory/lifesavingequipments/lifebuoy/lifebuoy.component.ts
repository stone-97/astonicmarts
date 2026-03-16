import { Component } from '@angular/core';
import { Product } from '../../../../../core/models/Product';
import { SearchService } from '../../../../../core/services/search.service';

@Component({
  selector: 'app-lifebuoy',
  templateUrl: './lifebuoy.component.html',
  styleUrl: './lifebuoy.component.css'
})
export class LifebuoyComponent {

  
    products: Product[] = [];
  
    constructor(private SearchService: SearchService) {}
  
    ngOnInit() {
      this.products = this.SearchService.getProductsByCategory('life buoy');
    }
  

}
