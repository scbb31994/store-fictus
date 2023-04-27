import { Component, OnDestroy, OnInit } from '@angular/core';
import { Product } from './product.model';
import { ProductsService } from '../services/products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit, OnDestroy {
  products: Product[] = [];
  productsSubscription: Subscription;

  constructor(
    private productsService: ProductsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.productsSubscription = this.productsService.productsUpdated.subscribe(
      (products) => {
        this.products = products;
      }
    );
    this.products = this.productsService.getProducts();
  }

  ngOnDestroy(): void {}

  goToProduct(id: number) {
    this.router.navigate([`${id}`], { relativeTo: this.route });
  }
}
