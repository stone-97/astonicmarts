import { Component } from '@angular/core';
import { Product } from '../../../../../core/models/Product';
import { SearchService } from '../../../../../core/services/search.service';

@Component({
  selector: 'app-magneticdrills',
  templateUrl: './magneticdrills.component.html',
  styleUrl: './magneticdrills.component.css'
})
export class MagneticdrillsComponent {

     products: Product[] = [];
          
            constructor(private SearchService: SearchService) {}
          
            ngOnInit() {
              this.products = this.SearchService.getProductsByCategory('magnetic drills');
            }

}
