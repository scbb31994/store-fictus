import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const AUTH_ENDPOINT = 'https://fakestoreapi.com/auth/login';
@Injectable()
export class AuthService {
  loggedIn = false;

  constructor(private http: HttpClient) {}

  isAuthenticated() {
    const promise: Promise<boolean> = new Promise((resolve, reject) => {
      resolve(this.loggedIn);
    });
    return promise;
  }

  login() {
    this.loggedIn = true;
  }

  logout() {
    this.loggedIn = false;
  }

  login2(email: string, password: string) {
    const values = {
      username: email,
      password: password,
    };

    return this.http.post(AUTH_ENDPOINT, values);
  }
}
