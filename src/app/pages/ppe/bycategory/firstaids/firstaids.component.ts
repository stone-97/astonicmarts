import { Component } from '@angular/core';
import { Product } from '../../../../core/models/Product';
import { SearchService } from '../../../../core/services/search.service';

@Component({
  selector: 'app-firstaids',
  templateUrl: './firstaids.component.html',
  styleUrl: './firstaids.component.css'
})
export class FirstaidsComponent {
  products: Product[] = [];
      
        constructor(private SearchService: SearchService) {}
      
        ngOnInit() {
          this.products = this.SearchService.getProductsByCategory('first aid kits');
        }
  

}
