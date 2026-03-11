import { Component } from '@angular/core';
import { Product } from '../../../../../core/models/Product';
import { SearchService } from '../../../../../core/services/search.service';

@Component({
  selector: 'app-electricpressurewashers',
  templateUrl: './electricpressurewashers.component.html',
  styleUrl: './electricpressurewashers.component.css'
})
export class ElectricpressurewashersComponent {
   products: Product[] = [];
      
        constructor(private SearchService: SearchService) {}
      
        ngOnInit() {
          this.products = this.SearchService.getProductsByCategory('electric pressure washers');
        }

}
