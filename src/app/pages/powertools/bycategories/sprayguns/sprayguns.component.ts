import { Component } from '@angular/core';
import { Product } from '../../../../core/models/Product';
import { SearchService } from '../../../../core/services/search.service';

@Component({
  selector: 'app-sprayguns',
  templateUrl: './sprayguns.component.html',
  styleUrl: './sprayguns.component.css'
})
export class SpraygunsComponent {

  
         products: Product[] = [];
        
          constructor(private SearchService: SearchService) {}
        
          ngOnInit() {
            this.products = this.SearchService.getProductsByCategory('spray guns');
          }
  

}
