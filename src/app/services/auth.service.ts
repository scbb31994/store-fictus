import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const AUTH_ENDPOINT = 'https://fakestoreapi.com/auth/login';
@Injectable()
export class AuthService {
  loggedIn = false;
  isLoggingIn = false;

  constructor(private http: HttpClient) {}

  isAuthenticated() {
    const promise: Promise<boolean> = new Promise((resolve, reject) => {
      if (localStorage.getItem('login_token')) {
        resolve(true)
      }
      
      resolve(this.loggedIn);
    });
    return promise;
  }

  loginSuccess() {
    this.loggedIn = true;
  }

  logout() {
    this.loggedIn = false;
  }

  login(email: string, password: string) {
    const values = {
      username: email,
      password: password,
    };

    return this.http.post<{token: string}>(AUTH_ENDPOINT, values);
  }
}
