import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductsService } from '../shared/products.service';
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
    this.products = this.productsService.fetchProducts();
  }

  goToProduct(id: number) {
    console.log('hit the div')
    console.log(this.route.snapshot)
    this.router.navigate([ 'products', `${id}`])
  }
}
