import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LoginComponent } from './login.component';
import { AuthService } from '../../../services/auth.service';


describe('LoginComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [HttpClientTestingModule],
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