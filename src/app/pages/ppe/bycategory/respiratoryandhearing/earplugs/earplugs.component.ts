import { Component } from '@angular/core';
import { Product } from '../../../../../core/models/Product';
import { SearchService } from '../../../../../core/services/search.service';

@Component({
  selector: 'app-earplugs',
  templateUrl: './earplugs.component.html',
  styleUrl: './earplugs.component.css'
})
export class EarplugsComponent {

   
  products: Product[] = [];
        
          constructor(private SearchService: SearchService) {}
        
          ngOnInit() {
            this.products = this.SearchService.getProductsByCategory('ear plugs');
          }
  

}
