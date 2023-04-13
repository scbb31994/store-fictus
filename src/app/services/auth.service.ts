export class AuthService {
  loggedIn = false;

  isAuthenticated() {
    const promise: Promise<boolean> = new Promise((resolve, reject) => {
      resolve(this.loggedIn);
    })
    return promise;
  }

  login() {
    this.loggedIn = true;
  }

  logout() {
    this.loggedIn = false;
  }
}