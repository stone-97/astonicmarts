import { Component } from '@angular/core';
import { Product } from '../../../../../core/models/Product';
import { SearchService } from '../../../../../core/services/search.service';

@Component({
  selector: 'app-nosemasks',
  templateUrl: './nosemasks.component.html',
  styleUrl: './nosemasks.component.css'
})
export class NosemasksComponent {

  
   products: Product[] = [];
      
        constructor(private SearchService: SearchService) {}
      
        ngOnInit() {
          this.products = this.SearchService.getProductsByCategory('nose masks');
        }
}
