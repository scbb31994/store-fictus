import { Component, OnDestroy, OnInit } from '@angular/core';
import { Product } from './product.model';
// import { ProductsService } from '../services/products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, map } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.reducer';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit, OnDestroy {
  products: Product[] = [];
  productsSubscription: Subscription;

  constructor(
    // private productsService: ProductsService,
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.productsSubscription = this.store.select('products')
      .pipe(map(productsState => productsState.products))
      .subscribe(
        (products: Product[]) => {
          this.products = products
        }
      )
      
    // this.productsSubscription = this.productsService.productsUpdated.subscribe(
    //   (products) => {
    //     this.products = products;
    //   }
    // );
    // this.products = this.productsService.getProducts();
  }

  ngOnDestroy(): void {
    this.productsSubscription.unsubscribe();
  }

  goToProduct(id: number) {
    this.router.navigate([`${id}`], { relativeTo: this.route });
  }
}
