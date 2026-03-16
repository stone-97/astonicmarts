import { Component } from '@angular/core';
import { Product } from '../../../../core/models/Product';
import { SearchService } from '../../../../core/services/search.service';

@Component({
  selector: 'app-trimmers',
  templateUrl: './trimmers.component.html',
  styleUrl: './trimmers.component.css'
})
export class TrimmersComponent {
  
     products: Product[] = [];
        
          constructor(private SearchService: SearchService) {}
        
          ngOnInit() {
            this.products = this.SearchService.getProductsByCategory('trimmers');
          }

}
