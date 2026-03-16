import { Component } from '@angular/core';
import { Product } from '../../../../../core/models/Product';
import { SearchService } from '../../../../../core/services/search.service';

@Component({
  selector: 'app-cordlessdrillsanddrivers',
  templateUrl: './cordlessdrillsanddrivers.component.html',
  styleUrl: './cordlessdrillsanddrivers.component.css'
})
export class CordlessdrillsanddriversComponent {

  
       products: Product[] = [];
        
          constructor(private SearchService: SearchService) {}
        
          ngOnInit() {
            this.products = this.SearchService.getProductsByCategory('cordless drills');
          }
}
