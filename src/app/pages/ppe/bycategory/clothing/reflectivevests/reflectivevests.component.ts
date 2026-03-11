import { Component } from '@angular/core';
import { Product } from '../../../../../core/models/Product';
import { SearchService } from '../../../../../core/services/search.service';

@Component({
  selector: 'app-reflectivevests',
  templateUrl: './reflectivevests.component.html',
  styleUrl: './reflectivevests.component.css'
})
export class ReflectivevestsComponent {


  products: Product[] = [];
    
      constructor(private SearchService: SearchService) {}
    
      ngOnInit() {
        this.products = this.SearchService.getProductsByCategory('reflective vests');
      }
}
