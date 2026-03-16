import { Component } from '@angular/core';
import { Product } from '../../../../core/models/Product';
import { SearchService } from '../../../../core/services/search.service';

@Component({
  selector: 'app-mixers',
  templateUrl: './mixers.component.html',
  styleUrl: './mixers.component.css'
})
export class MixersComponent {

   products: Product[] = [];
      
        constructor(private SearchService: SearchService) {}
      
        ngOnInit() {
          this.products = this.SearchService.getProductsByCategory('mixers');
        }

}
