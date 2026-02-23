import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  // service to implement search feature

  constructor() { }

   private searchQuerySubject = new BehaviorSubject<string>('');
 currentSearchQuery$ = this.searchQuerySubject.asObservable();

 setSearchQuery(query: string){
  this.searchQuerySubject.next(query.trim());
 }

clearSearch(){
  this.searchQuerySubject.next('');
}

}
