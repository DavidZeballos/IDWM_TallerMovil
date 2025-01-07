import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'http://localhost:5000/api';

  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    return this.http.post(`${this.apiUrl}/Auth/login`, { email, password });
  }

  register(user: any) {
    return this.http.post(`${this.apiUrl}/Auth/register`, user);
  }
}
