import { Component } from '@angular/core';
import { Product } from '../../../../../core/models/Product';
import { SearchService } from '../../../../../core/services/search.service';

@Component({
  selector: 'app-securitygears',
  templateUrl: './securitygears.component.html',
  styleUrl: './securitygears.component.css'
})
export class SecuritygearsComponent {
  
     products: Product[] = [];
      
        constructor(private SearchService: SearchService) {}
      
        ngOnInit() {
          this.products = this.SearchService.getProductsByCategory('Security gears');
        }

}
