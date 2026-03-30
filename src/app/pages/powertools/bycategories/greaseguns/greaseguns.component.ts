import { Component } from '@angular/core';
import { Product } from '../../../../core/models/Product';
import { SearchService } from '../../../../core/services/search.service';

@Component({
  selector: 'app-greaseguns',
  templateUrl: './greaseguns.component.html',
  styleUrl: './greaseguns.component.css'
})
export class GreasegunsComponent {

  
     products: Product[] = [];
        
          constructor(private SearchService: SearchService) {}
        
          ngOnInit() {
            this.products = this.SearchService.getProductsByCategory('grease-guns');
          }
}
