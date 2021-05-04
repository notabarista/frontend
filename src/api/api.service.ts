import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) {}

  getUserInfo() {
    return this.httpClient.get('/user-management/user/current');
  }

  getItems(page: number, size: number) {
    return this.httpClient.get('/catalog-service/item/findAll?page=' + page + '&size=' + size);
  }

  getSearchResults(searchTerm: string, size: number): Observable<any> {
    if (!searchTerm || searchTerm == null || searchTerm == 'null' || searchTerm == '') {
      return new Observable<any>();
    }
    return this.httpClient.get('/catalog-service/search/term/' + searchTerm + '?size=' + size);
  }

  getItemDetails(id: string) {
    return this.httpClient.get('/catalog-service/item/' + id);
  }

}
