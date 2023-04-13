import { Component, OnDestroy, OnInit } from '@angular/core';
import { Product } from '../../../models/product.model';
import { ProductsService } from '../../../services/products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pip',
  templateUrl: './pip.component.html',
  styleUrls: ['./pip.component.css'],
})
export class PipComponent implements OnInit, OnDestroy {
  products: Product[] = [];
  productsSubscription: Subscription;

  constructor(
    private productsService: ProductsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.productsSubscription = this.productsService.productsUpdated.subscribe(
      products => {
        this.products = products;
      }
    )
    
    this.products = this.productsService.getProducts();
  }

  ngOnDestroy(): void {}

  goToProduct(id: number) {
    this.router.navigate(['products', `${id}`]);
  }
}
