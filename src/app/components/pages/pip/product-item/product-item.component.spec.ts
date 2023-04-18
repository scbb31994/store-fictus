import { TestBed } from '@angular/core/testing';
import { ProductItemComponent } from './product-item.component';

describe('CartItemComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      // must import all other components being used in this spec
      declarations: [ProductItemComponent]
    });
  });

  function testSetup() {
    let fixture = TestBed.createComponent(ProductItemComponent);
    let app = fixture.debugElement.componentInstance;
    return { app, fixture };
  }

  it('should create the Product Item component', () => {
    const { app } = testSetup();
    expect(app).toBeTruthy();
  });
});
