
import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../../core/services/search.service';
import { Product } from '../../../core/models/Product';
import { ActivatedRoute, Router } from '@angular/router';
import { PaginationService } from '../../../core/services/pagination.service';


@Component({
  selector: 'app-shopcategories',
  templateUrl: './shopcategories.component.html',
  styleUrls: ['./shopcategories.component.css'],

})
export class ShopcategoriesComponent implements OnInit {

  products: Product[] = [];
  filteredProducts: Product[] = [];

  constructor(private searchService: SearchService, private route: ActivatedRoute, private router: Router, public paginationService: PaginationService) { }

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
      

      this.filteredProducts = this.searchService.searchProducts(query);
      // recalculate pagination after filtering
      this.paginationService.calculateTotalpages(this.filteredProducts.length);
    
    });




  }
  //end of oninit 

  openProduct(product: Product) {
    this.router.navigate(['/product', product.id]);
  }

  //pagination helpers

  get paginatedProducts(): Product[] {
    const paginated = this.paginationService.paginate(this.filteredProducts, this.paginationService.currentPage);
    console.log('paginated products for current page: ', this.paginationService.currentPage, paginated.map(p => p.name));

    return paginated
  }

  get totalPages(): number {
    return this.paginationService.totalPages;
  }

  goToPages(page: number) {
    console.log('going to page: ', page);
    this.paginationService.currentPage = page;
    this.updatePageInUrl(page);
    console.log('page successufully viewd');
    

  }

  prevPage() {
    this.paginationService.prevPage();
    this.updatePageInUrl(this.paginationService.currentPage)

  }
  nextPage() {
    this.paginationService.nextPage();
    this.updatePageInUrl(this.paginationService.currentPage);
  }

  getVisiblePages(): number[] {
    const total = this.totalPages;
    const current = this.paginationService.currentPage;
    const maxVisible = 5;

    let start = Math.max(current - 2, 1);
    let end = Math.min(start + maxVisible - 1, total);

    if (end - start < maxVisible - 1) {
      start = Math.max(end - maxVisible + 1, 1)

    }
    return Array.from({ length: end - start + 1 }, (_, i) => start + i)

  }

  updatePageInUrl(page: number) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        page
      },
      queryParamsHandling: 'merge'
    })

  }

}
