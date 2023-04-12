import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Product } from "../models/product.model";

const STORE_ENDPOINT = 'https://fakestoreapi.com/';

@Injectable()
export class ProductsService {
  products: Product[] = [];

  constructor(private http: HttpClient) {}

  fetchProducts() {
    return this.http.get(STORE_ENDPOINT + 'products');
  }

  fetchProduct(id: number) {
    return this.http.get(STORE_ENDPOINT + `products/${id}`);
  }
}