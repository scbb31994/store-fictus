import { TestBed } from "@angular/core/testing";
import { CartItemComponent } from "./cart-item.component";
import { CartService } from '../../services/cart.service'

describe('CartItemComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartItemComponent],
      providers: [CartService]
    })
  })

  function testSetup() {
    let fixture = TestBed.createComponent(CartItemComponent);
    let app = fixture.debugElement.componentInstance;
    return { app, fixture };
  }

  it('should create the cart item component', () => {
    const { app } = testSetup();
    expect(app).toBeTruthy();
  })

  it('should remove the item from the cart', () => {
    
  })
})