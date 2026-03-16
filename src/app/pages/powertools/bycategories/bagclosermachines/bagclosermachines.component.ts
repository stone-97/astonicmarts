import { Component } from '@angular/core';
import { Product } from '../../../../core/models/Product';
import { SearchService } from '../../../../core/services/search.service';

@Component({
  selector: 'app-bagclosermachines',
  templateUrl: './bagclosermachines.component.html',
  styleUrl: './bagclosermachines.component.css'
})
export class BagclosermachinesComponent {


    products: Product[] = [];
      
        constructor(private SearchService: SearchService) {}
      
        ngOnInit() {
          this.products = this.SearchService.getProductsByCategory('bag closers');
        }
  
}
