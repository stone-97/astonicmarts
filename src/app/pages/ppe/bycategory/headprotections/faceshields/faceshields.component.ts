import { Component } from '@angular/core';
import { Product } from '../../../../../core/models/Product';
import { SearchService } from '../../../../../core/services/search.service';

@Component({
  selector: 'app-faceshields',
  templateUrl: './faceshields.component.html',
  styleUrl: './faceshields.component.css'
})
export class FaceshieldsComponent {

  products: Product[] = [];
  
    constructor(private SearchService: SearchService) {}
  
    ngOnInit() {
      this.products = this.SearchService.getProductsByCategory('face shields');
    }
  
}
