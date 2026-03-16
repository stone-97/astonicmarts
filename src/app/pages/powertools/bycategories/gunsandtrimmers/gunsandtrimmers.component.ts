import { Component } from '@angular/core';
import { Product } from '../../../../core/models/Product';
import { SearchService } from '../../../../core/services/search.service';

@Component({
  selector: 'app-gunsandtrimmers',
  templateUrl: './gunsandtrimmers.component.html',
  styleUrl: './gunsandtrimmers.component.css'
})
export class GunsandtrimmersComponent {

   products: Product[] = [];
      
        constructor(private SearchService: SearchService) {}
      
        ngOnInit() {
          this.products = this.SearchService.getProductsByCategory('trimmers');
        }

}
