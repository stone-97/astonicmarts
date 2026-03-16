import { Component } from '@angular/core';
import { Product } from '../../../../core/models/Product';
import { SearchService } from '../../../../core/services/search.service';

@Component({
  selector: 'app-polishers',
  templateUrl: './polishers.component.html',
  styleUrl: './polishers.component.css'
})
export class PolishersComponent {

  
       products: Product[] = [];
      
        constructor(private SearchService: SearchService) {}
      
        ngOnInit() {
          this.products = this.SearchService.getProductsByCategory('polishers');
        }

}
