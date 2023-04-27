import { Component, OnInit } from '@angular/core';
import { Product } from '../products/product.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../services/products.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-pdp',
  templateUrl: './pdp.component.html',
  styleUrls: ['./pdp.component.css']
})
export class PdpComponent implements OnInit {
  product: Product;
  amount: number = 1;
  ratingArray: number[] = []

  constructor(
    private cartService: CartService,
    private productsService: ProductsService,
    private route: ActivatedRoute,
    private router: Router
  ) {};

  ngOnInit(): void {
    const foundProduct = this.productsService.getSingleProduct(+this.route.snapshot.params['id'])

    
    if (foundProduct) {
      this.product = foundProduct;
      this.ratingArray = Array(Math.round(this.product.rating.rate)).fill(0).map((x, i) => i)
    }
  }

  goToProduct() {
    this.router.navigate(['/products', `${this.product.id}`], {relativeTo: this.route})
  }

  updateQuantity(operation: '-' | '+') {
    if (operation === '-') {
      if (this.amount !== 1) {
        this.amount--;
      }
    } else {
      this.amount++;
    }
  }

  addProductToCart(id: number) {
    this.cartService.addToCart(this.product, this.amount);
  }


}
