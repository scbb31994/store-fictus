import { TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { CartService } from '../../services/cart.service';
import { AuthService } from '../../services/auth.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BehaviorSubject } from 'rxjs';

class MockAuthService {
  userLoginToken = new BehaviorSubject<string | null>(null);

  setLoginToken() {
    this.userLoginToken.next('some-token');
  }
}

describe('HeaderComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      // must import all other components being used in this spec
      declarations: [HeaderComponent],
      imports: [HttpClientTestingModule],
      providers: [
        CartService,
        { provide: AuthService, useClass: MockAuthService },
      ],
    });
  });

  function testSetup() {
    let fixture = TestBed.createComponent(HeaderComponent);
    let header = fixture.debugElement.componentInstance;
    return { header, fixture };
  }

  it('should create the header component', () => {
    const { header } = testSetup();
    expect(header).toBeTruthy();
  });

  // test NOT working
  it('should render the logout button if user is authenticated', () => {
    const { fixture } = testSetup();
    const authService = TestBed.inject(AuthService);
    authService.setLoginToken();
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('button')).toBeTruthy()
  })

  it('should not render the logout button if the user is logged out', () => {
    const { header, fixture } = testSetup();
    header.isLoggedIn = false;
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('button')).toBeFalsy();
  });
});
