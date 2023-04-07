import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../shared/products.service';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-pdp',
  templateUrl: './pdp.component.html',
  styleUrls: ['./pdp.component.css']
})
export class PdpComponent implements OnInit {
  product: Product;

  constructor(
    private cartService: CartService,
    private productsService: ProductsService,
    private route: ActivatedRoute, private router: Router
  ) {};

  ngOnInit(): void {
    const foundProduct = this.productsService.findProduct(+this.route.snapshot.params['id']);
    if (foundProduct) {
      this.product = foundProduct
    }
  }

  goToProduct() {
    console.log('went to product')
    this.router.navigate(['/products', `${this.product.id}`], {relativeTo: this.route})
  }

  addProductToCart(id: number) {
    const foundProduct = this.productsService.findProduct(id);
    if (foundProduct) {
      this.cartService.addToCart(foundProduct);
    }
  }


}
