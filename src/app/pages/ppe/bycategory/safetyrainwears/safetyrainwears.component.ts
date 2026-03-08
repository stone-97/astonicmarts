import { Component } from '@angular/core';
import { Product } from '../../../../core/models/Product';
import { SearchService } from '../../../../core/services/search.service';

@Component({
  selector: 'app-safetyrainwears',
  templateUrl: './safetyrainwears.component.html',
  styleUrl: './safetyrainwears.component.css'
})
export class SafetyrainwearsComponent {
    products: Product[] = [];
    
      constructor(private SearchService: SearchService) {}
    
      ngOnInit() {
        this.products = this.SearchService.getProductsByCategory('safety rainwears');
      }

}
