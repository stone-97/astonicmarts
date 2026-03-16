import { Component } from '@angular/core';
import { Product } from '../../../../../core/models/Product';
import { SearchService } from '../../../../../core/services/search.service';

@Component({
  selector: 'app-coredrills',
  templateUrl: './coredrills.component.html',
  styleUrl: './coredrills.component.css'
})
export class CoredrillsComponent {
 products: Product[] = [];
        
          constructor(private SearchService: SearchService) {}
        
          ngOnInit() {
            this.products = this.SearchService.getProductsByCategory('core drills');
          }
}
