import { Component } from '@angular/core';
import { SearchService } from '../../../../core/services/search.service';
import { Product } from '../../../../core/models/Product';

@Component({
  selector: 'app-cuttingmachines',
  templateUrl: './cuttingmachines.component.html',
  styleUrl: './cuttingmachines.component.css'
})
export class CuttingmachinesComponent {
  
     products: Product[] = [];
    
      constructor(private SearchService: SearchService) {}
    
      ngOnInit() {
        this.products = this.SearchService.getProductsByCategory('mixers');
      }

}
