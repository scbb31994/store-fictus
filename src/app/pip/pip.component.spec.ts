import { TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { PipComponent } from './pip.component';
import { ProductsService } from '../services/products.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('PdpComponent', () => {
  const fakeActivatedRoute = {
    snapshot: { data: {} },
  } as ActivatedRoute;

  beforeEach(() => {
    TestBed.configureTestingModule({
      // must import all other components being used in this spec
      declarations: [PipComponent],
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [
        ProductsService
      ],
    });
  });

  function testSetup() {
    let fixture = TestBed.createComponent(PipComponent);
    let app = fixture.debugElement.componentInstance;
    return { app, fixture };
  }

  it('should create the PIP component', () => {
    const { app } = testSetup();
    expect(app).toBeTruthy();
  });
});
