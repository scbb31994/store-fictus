import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ActivatedRoute } from '@angular/router';
import { PdpComponent } from './pdp.component';
import { CartService } from '../services/cart.service';
import { ProductsService } from '../services/products.service';

describe('PdpComponent', () => {
  let productsService: ProductsService;
  let cartService: CartService;
  let httpTestingContoller = HttpTestingController;

  const fakeActivatedRoute = {
    snapshot: { data: {} },
  } as ActivatedRoute;

  beforeEach(() => {
    TestBed.configureTestingModule({
      // must import all other components being used in this spec
      declarations: [PdpComponent],
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [
        ProductsService,
        CartService,
        // { provide: ActivatedRoute, useValue: fakeActivatedRoute },
      ],
    });
    // productsService = TestBed.inject(ProductsService);
    // cartService = TestBed.inject(CartService);
    // httpTestingController = TestBed.inject(HttpTestingController);

  });

  function testSetup() {
    let fixture = TestBed.createComponent(PdpComponent);
    let app = fixture.debugElement.componentInstance;
    return { app, fixture };
  }

  it('should create the PDP component', () => {
    const { app } = testSetup();
    expect(app).toBeTruthy();
  });
});
