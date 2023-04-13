import { Component, OnInit } from '@angular/core';
import { Product } from '../../../models/product.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../../../services/products.service';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-pdp',
  templateUrl: './pdp.component.html',
  styleUrls: ['./pdp.component.css']
})
export class PdpComponent implements OnInit {
  product: Product;
  amount: number = 1;

  constructor(
    private cartService: CartService,
    private productsService: ProductsService,
    private route: ActivatedRoute, private router: Router
  ) {};

  ngOnInit(): void {
    // this.productsService.fetchSingleProduct(+this.route.snapshot.params['id']).subscribe(
    //   product => {
    //     this.product = product as Product;
    //   }
    // )

    const foundProduct = this.productsService.getSingleProduct(+this.route.snapshot.params['id'])
    
    if (foundProduct) {
      this.product = foundProduct;
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
