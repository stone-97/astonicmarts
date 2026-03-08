import { SearchService } from './../../../../core/services/search.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../../../core/models/Product';

@Component({
  selector: 'app-handgloves',
  templateUrl: './handgloves.component.html',
  styleUrls: ['./handgloves.component.css']
})
export class HandglovesComponent implements OnInit {

  products: Product[] = [];

  constructor(private SearchService: SearchService) {}

  ngOnInit() {
    this.products = this.SearchService.getProductsByCategory('Hand-glove');
  }

}