import { Component } from '@angular/core';
import { Product } from '../../../../../core/models/Product';
import { SearchService } from '../../../../../core/services/search.service';

@Component({
  selector: 'app-drillpresses',
  templateUrl: './drillpresses.component.html',
  styleUrl: './drillpresses.component.css'
})
export class DrillpressesComponent {


   products: Product[] = [];
          
            constructor(private SearchService: SearchService) {}
          
            ngOnInit() {
              this.products = this.SearchService.getProductsByCategory('drill press');
            }

}
