import { Component } from '@angular/core';
import { Product } from '../../../../../core/models/Product';
import { SearchService } from '../../../../../core/services/search.service';

@Component({
  selector: 'app-bumpcaps',
  templateUrl: './bumpcaps.component.html',
  styleUrl: './bumpcaps.component.css'
})
export class BumpcapsComponent {

  products: Product[] = [];
    
      constructor(private SearchService: SearchService) {}
    
      ngOnInit() {
        this.products = this.SearchService.getProductsByCategory('bump caps');
      }

}
