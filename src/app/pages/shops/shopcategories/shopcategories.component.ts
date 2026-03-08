
import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../../core/services/search.service';
import { Product } from '../../../core/models/Product';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-shopcategories',
  templateUrl: './shopcategories.component.html',
  styleUrls: ['./shopcategories.component.css'],
 
})
export class ShopcategoriesComponent implements OnInit {

  products: Product[] = [];
  filteredProducts: Product[] = [];

  constructor(private searchService: SearchService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    
    // load all products
    this.products = this.searchService.getProducts();

    // listen to url search param
    this.route.queryParams.subscribe(params => {

      const query = params['search'];

      if (!query) {
        this.filteredProducts = this.products;
        return;
      }

      this.filteredProducts =  this.searchService.searchProducts(query);
    });
  }

  openProduct(product: Product){
  this.router.navigate(['/product', product.id]);
}

}
