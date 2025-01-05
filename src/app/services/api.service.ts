import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'http://localhost:5000/api'; // Cambia a la URL de tu backend

  constructor(private http: HttpClient) {}

  // Registro de Usuario
  register(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/Auth/register`, user);
  }

  // Inicio de Sesión
  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/Auth/login`, { email, password });
  }

  // Obtener Historial de Compras
  getPurchaseHistory(): Observable<any> {
    const headers = this.getAuthHeaders();
    return this.http.get(`${this.apiUrl}/Purchase`, { headers });
  }

  // Obtener Productos
  getProducts(): Observable<any> {
    return this.http.get(`${this.apiUrl}/Product`);
  }

  // Eliminar Cuenta
  deleteAccount(userId: number): Observable<any> {
    const headers = this.getAuthHeaders();
    return this.http.delete(`${this.apiUrl}/Client/${userId}`, { headers });
  }

  // Helper: Obtener encabezado de autorización
  private getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
  }
}
