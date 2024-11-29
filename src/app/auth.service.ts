import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './models/User';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  readonly USERS_ENDPOINT = "https://api.escuelajs.co/api/v1/users"
  public success = false;
  readonly users: User[] = [];

  constructor(private httpClient: HttpClient, private router: Router) {
    this.getUsers().subscribe((users: User[]) => {
      this.users.push(...users)
    });
  }

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.USERS_ENDPOINT);
  }

  logout() {
    localStorage.removeItem('user');
    this.router.navigate(["/login"]);
  }

  login(email: string, password: string) {
    const user = this.users.find((user: User) => user.email === email && user.password === password);
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
      this.success = true;
    }
    return this.success;
  }

  isLoggedIn() {
    return localStorage.getItem('user') !== null;
  }

  getUser() {
    return  JSON.parse(localStorage.getItem('user') || '{  }');
  }
}
