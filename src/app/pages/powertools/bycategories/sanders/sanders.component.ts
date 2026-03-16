import { Component } from '@angular/core';
import { Product } from '../../../../core/models/Product';
import { SearchService } from '../../../../core/services/search.service';

@Component({
  selector: 'app-sanders',
  templateUrl: './sanders.component.html',
  styleUrl: './sanders.component.css'
})
export class SandersComponent {

   
   products: Product[] = [];
          
            constructor(private SearchService: SearchService) {}
  
            ngOnInit() {
              this.products = this.SearchService.getProductsByCategory('sanders');
            }

}
