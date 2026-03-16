import { Component } from '@angular/core';
import { Product } from '../../../../core/models/Product';
import { SearchService } from '../../../../core/services/search.service';

@Component({
  selector: 'app-planers',
  templateUrl: './planers.component.html',
  styleUrl: './planers.component.css'
})
export class PlanersComponent {

   products: Product[] = [];
        
          constructor(private SearchService: SearchService) {}
        
          ngOnInit() {
            this.products = this.SearchService.getProductsByCategory('planers');
          }
  

}
