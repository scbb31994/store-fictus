import { TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { AuthService } from 'src/app/services/auth.service';
import { HttpClientModule } from '@angular/common/http';

describe('LoginComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [HttpClientModule],
      providers: [AuthService]
    })
  })

  function testSetup() {
    let fixture = TestBed.createComponent(LoginComponent);
    let app = fixture.debugElement.componentInstance;
    return { app, fixture };
  }

  it('should create the login component', () => {
    const { app, fixture } = testSetup();
    expect(app).toBeTruthy();
  })

  it('should submit the form', () => {

  })

  it('should submit the form and successfully retrieve user data', () => {

  })

  it('should submit the form and return an error', () => {
    
  })

  it('should not be able to submit the form with invalidated form fields', () => {

  })
})