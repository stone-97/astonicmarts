import { Component } from '@angular/core';
import { Product } from '../../../../core/models/Product';
import { SearchService } from '../../../../core/services/search.service';

@Component({
  selector: 'app-ppr',
  templateUrl: './ppr.component.html',
  styleUrl: './ppr.component.css'
})
export class PprComponent {

  products: Product[] = [];
        
          constructor(private SearchService: SearchService) {}

          ngOnInit() {
            this.products = this.SearchService.getProductsByCategory('ppr');
          }
  




}
