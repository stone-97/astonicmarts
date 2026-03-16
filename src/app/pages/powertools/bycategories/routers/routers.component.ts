import { Component } from '@angular/core';
import { Product } from '../../../../core/models/Product';
import { SearchService } from '../../../../core/services/search.service';

@Component({
  selector: 'app-routers',
  templateUrl: './routers.component.html',
  styleUrl: './routers.component.css'
})
export class RoutersComponent {
  
 products: Product[] = [];
        
          constructor(private SearchService: SearchService) {}

          ngOnInit() {
            this.products = this.SearchService.getProductsByCategory('routers');
          }
  
}
