import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl(null, [Validators.required]),
      password: new FormControl(null, Validators.required),
    });
  }

  onSubmit() {
    this.authService
      .login(this.loginForm.value.username, this.loginForm.value.password)
      .subscribe(
        (response) => {
          alert('Login Success!');
          localStorage.setItem('login_token', response.token )
          this.authService.userLoginToken.next(response.token)
          this.authService.loginSuccess();
          this.router.navigate(['/']);
        },
        (error) => {
          alert('Login Fail\nUsername = mor_2314\nPassword = 83r5^_')
        }
      );
  }
}
