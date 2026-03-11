import { Component } from '@angular/core';
import { Product } from '../../../../../core/models/Product';
import { SearchService } from '../../../../../core/services/search.service';

@Component({
  selector: 'app-coveralls',
  templateUrl: './coveralls.component.html',
  styleUrl: './coveralls.component.css'
})
export class CoverallsComponent {

    products: Product[] = [];
  
    constructor(private SearchService: SearchService) {}
  
    ngOnInit() {
      this.products = this.SearchService.getProductsByCategory('coveralls');
    }
  
}
