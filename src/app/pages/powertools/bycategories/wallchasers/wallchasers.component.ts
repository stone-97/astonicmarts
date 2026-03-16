import { Component } from '@angular/core';
import { Product } from '../../../../core/models/Product';
import { SearchService } from '../../../../core/services/search.service';

@Component({
  selector: 'app-wallchasers',
  templateUrl: './wallchasers.component.html',
  styleUrl: './wallchasers.component.css'
})
export class WallchasersComponent {

  
     products: Product[] = [];
            
              constructor(private SearchService: SearchService) {}
    
              ngOnInit() {
                this.products = this.SearchService.getProductsByCategory('wall chasers');
              }
  
}
