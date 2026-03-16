import { Component } from '@angular/core';
import { Product } from '../../../../core/models/Product';
import { SearchService } from '../../../../core/services/search.service';

@Component({
  selector: 'app-edgebandingmachines',
  templateUrl: './edgebandingmachines.component.html',
  styleUrl: './edgebandingmachines.component.css'
})
export class EdgebandingmachinesComponent {

   products: Product[] = [];
      
        constructor(private SearchService: SearchService) {}
      
        ngOnInit() {
          this.products = this.SearchService.getProductsByCategory('edge binding machines');
        }
}
