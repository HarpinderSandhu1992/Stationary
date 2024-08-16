import { Injectable } from '@angular/core';
import { Product } from '../../product_list';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private httpClient: HttpClient) {}

  getProducts(): Observable<Product[]> {
    // GET PRODUCTS FROM DATABASE USING AN HTTP REQUEST VIA AN API
    return this.httpClient.get<Product[]>('http://localhousr:3000/products');
  }
}
