import { Component } from '@angular/core';
import { SearchService } from '../../../../core/services/search.service';
import { Product } from '../../../../core/models/Product';

@Component({
  selector: 'app-safetyboots',
  templateUrl: './safetyboots.component.html',
  styleUrl: './safetyboots.component.css'
})
export class SafetybootsComponent {
   products: Product[] = [];
  
    constructor(private SearchService: SearchService) {}
  
    ngOnInit() {
      this.products = this.SearchService.getProductsByCategory('Safety Boot (Ankle)');
    }
  

}
