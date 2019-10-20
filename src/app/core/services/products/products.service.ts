import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../../environments/environment';
import { Product } from './../../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http: HttpClient
  ) { }

  getAllProducts() {
    // return this.products;
    return this.http.get<Product[]>(`${environment.api_url}/products/`);
  }

  getProduct(id: string) {
    // return this.products.find(item => id === item.id);
    return this.http.get<Product>(`${environment.api_url}/products/${id}`);
  }

  createProduct(product: Product) {
    // post(api-endpoint, body)
    return this.http.post<Product>(`${environment.api_url}/products/`, product);
  }

  updateProduct(id: string, changes: Partial<Product>) {
    return this.http.put(`${environment.api_url}/products/${id}`, changes);
  }

  deteleProduct(id: string) {
    return this.http.delete(`${environment.api_url}/products/${id}`);
  }
}
