import { Component } from '@angular/core';
import { Product } from '../../../../../core/models/Product';
import { SearchService } from '../../../../../core/services/search.service';

@Component({
  selector: 'app-cordeddrills',
  templateUrl: './cordeddrills.component.html',
  styleUrl: './cordeddrills.component.css'
})
export class CordeddrillsComponent {

     products: Product[] = [];
      
        constructor(private SearchService: SearchService) {}
      
        ngOnInit() {
          this.products = this.SearchService.getProductsByCategory('corded drills');
        }

}
