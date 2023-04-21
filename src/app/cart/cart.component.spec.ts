import { TestBed } from '@angular/core/testing';
import { CartComponent } from './cart.component';
import { CartService } from '../services/cart.service';
import { Subject } from 'rxjs';
import { Product } from '../models/product.model';

class MockCartService {
  totalPriceUpdated = new Subject<number>();

  addToCart(item: Product, qty: number) {
    // add price data to our cart
    this.totalPriceUpdated.next(0);
  }

  getCart() {}
}

describe('CartComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      // must import all other components being used in this spec
      declarations: [CartComponent],
      // providers: [CartService]
      providers: [
        { provide: CartService, useClass: MockCartService }
      ],
    });
  });

  function testSetup() {
    let fixture = TestBed.createComponent(CartComponent);
    let cart = fixture.debugElement.componentInstance;
    return { cart, fixture };
  }

  it('should create the cart component', () => {
    const { cart } = testSetup();
    expect(cart).toBeTruthy();
  });

  it('should render an "empty cart" message if there are no items in the cart', () => {
    const { cart, fixture } = testSetup();
    cart.totalPrice = 0;
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('total')).toBeFalsy();
    expect(compiled.getElementsByClassName('empty-cart-container')[0]).toBeTruthy()
  });

  it('should render a cart total if there are items in the cart', () => {
    const { cart, fixture } = testSetup();
    cart.totalPrice = 1;
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.getElementsByClassName('total')[0]).toBeTruthy();
    expect(compiled.getElementsByClassName('empty-cart-container')[0]).toBeFalsy()
  });
});
