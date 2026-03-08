import { Component } from '@angular/core';
import { Product } from '../../../../core/models/Product';
import { SearchService } from '../../../../core/services/search.service';

@Component({
  selector: 'app-emergencyeyewash',
  templateUrl: './emergencyeyewash.component.html',
  styleUrl: './emergencyeyewash.component.css'
})
export class EmergencyeyewashComponent {
    products: Product[] = [];
    
      constructor(private SearchService: SearchService) {}
    
      ngOnInit() {
        this.products = this.SearchService.getProductsByCategory('emergency eye wash staion');
      }
  

}
