import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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

}
