import { Component } from '@angular/core';
import { Product } from '../../../../core/models/Product';
import { SearchService } from '../../../../core/services/search.service';

@Component({
  selector: 'app-nailers',
  templateUrl: './nailers.component.html',
  styleUrl: './nailers.component.css'
})
export class NailersComponent {


   products: Product[] = [];
        
          constructor(private SearchService: SearchService) {}
        
          ngOnInit() {
            this.products = this.SearchService.getProductsByCategory('nailers');
          }

}
