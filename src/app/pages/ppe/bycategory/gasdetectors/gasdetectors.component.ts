import { Component } from '@angular/core';
import { Product } from '../../../../core/models/Product';
import { SearchService } from '../../../../core/services/search.service';

@Component({
  selector: 'app-gasdetectors',
  templateUrl: './gasdetectors.component.html',
  styleUrl: './gasdetectors.component.css'
})
export class GasdetectorsComponent {
   products: Product[] = [];
    
      constructor(private SearchService: SearchService) {}
    
      ngOnInit() {
        this.products = this.SearchService.getProductsByCategory('Gas Detector');
      }
  

}
