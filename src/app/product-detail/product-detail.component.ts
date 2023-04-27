import { Component, OnInit } from '@angular/core';
import { Product } from '../products/product.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../services/products.service';
import { CartService } from '../services/cart.service';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.reducer';
import { AddToCart } from '../cart/store/cart.actions';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  product: Product;
  amount: number = 1;
  ratingArray: number[] = [];

  constructor(
    private cartService: CartService,
    private productsService: ProductsService,
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<AppState>
  ) {}

  ngOnInit() {
    const foundProduct = this.productsService.getSingleProduct(
      +this.route.snapshot.params['id']
    );

    if (foundProduct) {
      this.product = foundProduct;
      this.ratingArray = Array(Math.round(this.product.rating.rate))
        .fill(0)
        .map((x, i) => i);
    }
  }

  goToProduct() {
    this.router.navigate(['/products', `${this.product.id}`]);
  }

  updateQuantity(operation: '-' | '+') {
    if (operation === '-' && this.amount !== 1) {
      this.amount--;
    } else {
      this.amount++;
    }
  }

  addProductToCart() {
    // this.cartService.addToCart(this.product, this.amount);
    const addedCartItem = {
      ...this.product,
      qty: this.amount,
      totalPrice: this.product.price * this.amount
    }
    
    this.store.dispatch(new AddToCart(addedCartItem));

    alert(`Added ${this.amount} item(s) to cart.`);

  }
}
