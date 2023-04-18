import { TestBed } from "@angular/core/testing";
import { HeaderComponent } from "../header/header.component";
import { CartService } from "src/app/services/cart.service";

describe('CartItemComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      // must import all other components being used in this spec
      declarations: [HeaderComponent],
      providers: [CartService]
    })
  })

  function testSetup() {
    let fixture = TestBed.createComponent(HeaderComponent);
    let app = fixture.debugElement.componentInstance;
    return { app, fixture };
  }

  it('should create the header component', () => {
    const { app } = testSetup();
    expect(app).toBeTruthy();
  })
})