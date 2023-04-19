import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subject } from 'rxjs';

const AUTH_ENDPOINT = 'https://fakestoreapi.com/auth/login';
@Injectable()
export class AuthService {
  userLoginToken = new BehaviorSubject<string | null>(null)
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

  // for testing purposes only
  setLoginToken() {
    const MOCK_TOKEN = 'login_token';
    localStorage.setItem('login_token', MOCK_TOKEN);
    this.userLoginToken.next(MOCK_TOKEN);
  }

  autoLogin() {
    // value is already a string
    const userToken = localStorage.getItem('login_token');

    if (!userToken) {
      this.userLoginToken.next(null);
    } else {
      this.userLoginToken.next(userToken);
      // handle autoLogout stuff
    }
  }

  autoLogout() {
    // if token expires
  }

  loginSuccess() {
    this.loggedIn = true;
  }

  logout() {
    this.userLoginToken.next(null);
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
