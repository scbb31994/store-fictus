import { TestBed } from "@angular/core/testing";
import { CartItemsComponent } from "./cart-items.component";
import { CartService } from "src/app/services/cart.service";
import { CartItemComponent } from "../cart-item/cart-item.component";

describe('CartItemComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      // must import all other components being used in this spec
      declarations: [CartItemsComponent, CartItemComponent],
      providers: [CartService]
    })
  })

  function testSetup() {
    let fixture = TestBed.createComponent(CartItemsComponent);
    let app = fixture.debugElement.componentInstance;
    return { app, fixture };
  }

  it('should create the cart items component', () => {
    const { app } = testSetup();
    expect(app).toBeTruthy();
  })

  it('should have a price tag at the bottom of the cart list', () => {

  })
})