import { Component } from '@angular/core';
import { Product } from '../../../../core/models/Product';
import { SearchService } from '../../../../core/services/search.service';

@Component({
  selector: 'app-combokits',
  templateUrl: './combokits.component.html',
  styleUrl: './combokits.component.css'
})
export class CombokitsComponent {

   products: Product[] = [];
  
    constructor(private SearchService: SearchService) {}
  
    ngOnInit() {
      this.products = this.SearchService.getProductsByCategory('Combo Kits');
    }

}
