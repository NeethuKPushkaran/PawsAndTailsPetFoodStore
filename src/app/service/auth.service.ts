import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private localStorageKey = 'user';

  login(username: string, password: string): void {
    // In a real application, you should perform authentication on the server
    // Here, we are storing the username in local storage for simplicity
    localStorage.setItem(this.localStorageKey, JSON.stringify({ username, password }));
  }

  logout(): void {
    localStorage.removeItem(this.localStorageKey);
  }

  getUser(): { username: string; password: string } | null {
    const userString = localStorage.getItem(this.localStorageKey);
    return userString ? JSON.parse(userString) : null;
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem(this.localStorageKey);
  }

  constructor() { }
}
