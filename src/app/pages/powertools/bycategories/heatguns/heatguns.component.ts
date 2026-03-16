import { Component } from '@angular/core';
import { Product } from '../../../../core/models/Product';
import { SearchService } from '../../../../core/services/search.service';

@Component({
  selector: 'app-heatguns',
  templateUrl: './heatguns.component.html',
  styleUrl: './heatguns.component.css'
})
export class HeatgunsComponent {

   products: Product[] = [];
      
        constructor(private SearchService: SearchService) {}
      
        ngOnInit() {
          this.products = this.SearchService.getProductsByCategory('heat guns');
        }
    

}
