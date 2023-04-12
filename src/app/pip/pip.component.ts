import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductsService } from '../services/products.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pip',
  templateUrl: './pip.component.html',
  styleUrls: ['./pip.component.css']
})
export class PipComponent implements OnInit {
  products: Product[] = [];

  constructor(private productsService: ProductsService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.productsService.fetchProducts().subscribe(
      products => {
        this.products = products as Product[];
      }
    )
  }

  goToProduct(id: number) {
    this.router.navigate([ 'products', `${id}`])
  }
}
