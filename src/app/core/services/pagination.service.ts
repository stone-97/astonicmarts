import { Injectable } from '@angular/core';
import { max } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaginationService {

  currentPage: number = 1;
  itemPerPage: number = 6 //change this to show 6 product per page
  totalPages: number = 1

  constructor() { }

  /*calculate total pages based on total items
  */

  calculateTotalpages(totalItems: number): number{
    this.totalPages = Math.ceil(totalItems / this.itemPerPage);
    return this.totalPages;

  }


  /*return a slice of the item for the current page
  */
paginate<T>(items: T[], page: number = this.currentPage){
  //calculate total page 
  this.totalPages = Math.ceil(items.length / this.itemPerPage);

  //ensure current page is not out of bounds 

  this.currentPage = Math.min(Math.max(page, 1), this.totalPages || 1);

  const startIndex = (this.currentPage - 1) * this.itemPerPage;
  const endIndex = startIndex + this.itemPerPage;

  console.log(`pagination: page ${this.currentPage} of ${this.totalPages}`, {startIndex}, { endIndex});
  return items.slice(startIndex, endIndex)
}

// do to next page

nextPage():void{
  if(this,this.currentPage < 1){
    this.currentPage++;
  }
}

//go to prev page

prevPage():void{
  if (this.currentPage > 1) {
    this.currentPage--
  }
}


// set item per page

setItemPerPage(count: number):void{ 
  this.itemPerPage = count;
}

//reset pegination to page 1
reset():void{
  this.currentPage
}
}
