import { TestBed } from "@angular/core/testing";
import { CartComponent } from "./cart.component";
import { CartService } from '../../../services/cart.service';

describe('CartItemComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      // must import all other components being used in this spec
      declarations: [CartComponent],
      providers: [CartService]
    })
  })

  function testSetup() {
    let fixture = TestBed.createComponent(CartComponent);
    let app = fixture.debugElement.componentInstance;
    return { app, fixture };
  }

  it('should create the cart component', () => {
    const { app } = testSetup();
    expect(app).toBeTruthy();
  })

  // it('should render an "empty cart" message if there are no items in the cart', () => {
    
  // })
})