import { Component } from '@angular/core';
import { Product } from '../../../../../core/models/Product';
import { SearchService } from '../../../../../core/services/search.service';

@Component({
  selector: 'app-rotaryhammerdrills',
  templateUrl: './rotaryhammerdrills.component.html',
  styleUrl: './rotaryhammerdrills.component.css'
})
export class RotaryhammerdrillsComponent {

  products: Product[] = [];
            
              constructor(private SearchService: SearchService) {}
            
              ngOnInit() {
                this.products = this.SearchService.getProductsByCategory('rotary hammers');
              }

}
