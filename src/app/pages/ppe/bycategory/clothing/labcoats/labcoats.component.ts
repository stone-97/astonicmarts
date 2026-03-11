import { Component } from '@angular/core';
import { Product } from '../../../../../core/models/Product';
import { SearchService } from '../../../../../core/services/search.service';

@Component({
  selector: 'app-labcoats',
  templateUrl: './labcoats.component.html',
  styleUrl: './labcoats.component.css'
})
export class LabcoatsComponent {

  products: Product[] = [];
      
        constructor(private SearchService: SearchService) {}
      
        ngOnInit() {
          this.products = this.SearchService.getProductsByCategory('lab coats');
        }
}
