import { Component } from '@angular/core';
import { Product } from '../../../../../core/models/Product';
import { SearchService } from '../../../../../core/services/search.service';

@Component({
  selector: 'app-disposables',
  templateUrl: './disposables.component.html',
  styleUrl: './disposables.component.css'
})
export class DisposablesComponent {
  products: Product[] = [];
    
      constructor(private SearchService: SearchService) {}
    
      ngOnInit() {
        this.products = this.SearchService.getProductsByCategory('disposables');
      }

}
