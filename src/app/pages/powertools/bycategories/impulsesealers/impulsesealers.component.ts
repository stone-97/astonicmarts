import { Component } from '@angular/core';
import { Product } from '../../../../core/models/Product';
import { SearchService } from '../../../../core/services/search.service';

@Component({
  selector: 'app-impulsesealers',
  templateUrl: './impulsesealers.component.html',
  styleUrl: './impulsesealers.component.css'
})
export class ImpulsesealersComponent {

    products: Product[] = [];
      
        constructor(private SearchService: SearchService) {}
      
        ngOnInit() {
          this.products = this.SearchService.getProductsByCategory('impulse sealers');
        }

}
