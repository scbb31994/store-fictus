import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Product } from "../models/product.model";
import { Subject } from "rxjs";

const STORE_ENDPOINT = 'https://fakestoreapi.com/';

@Injectable()
export class ProductsService {
  productsUpdated = new Subject<Product[]>();
  products: Product[] = [];

  constructor(private http: HttpClient) {}

  fetchProducts() {
    return this.http.get<Product[]>(STORE_ENDPOINT + 'products').subscribe(
      products => {
        this.products = products;
        this.productsUpdated.next(this.products)
      }
    );

  }

  getProducts() {
    return this.products;
  }

  getSingleProduct(id: number) {
    return this.products.find(product => product.id === id);
  }

  setProducts(products: Product[]) {
    this.products = products;
    this.productsUpdated.next(this.products);
  }
}