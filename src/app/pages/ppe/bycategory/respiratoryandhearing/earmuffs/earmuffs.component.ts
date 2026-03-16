import { Component } from '@angular/core';
import { Product } from '../../../../../core/models/Product';
import { SearchService } from '../../../../../core/services/search.service';

@Component({
  selector: 'app-earmuffs',
  templateUrl: './earmuffs.component.html',
  styleUrl: './earmuffs.component.css'
})
export class EarmuffsComponent {

products: Product[] = [];
      
        constructor(private SearchService: SearchService) {}
      
        ngOnInit() {
          this.products = this.SearchService.getProductsByCategory('ear plugs');
        }

}
