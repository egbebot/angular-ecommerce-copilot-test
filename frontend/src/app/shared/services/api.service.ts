import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { JwtService } from './jwt.service';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly apiUrl = environment.apiUrl;

  constructor(private http: HttpClient, private jwtService: JwtService) {}

  // Helper method to set headers
  private setHeaders(): HttpHeaders {
    const token = this.jwtService.getToken();
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }

    return headers;
  }

  // GET request
  get<T>(path: string): Observable<T> {
    return this.http.get<T>(`${this.apiUrl}${path}`, {
      headers: this.setHeaders(),
    });
  }

  // POST request
  post<T>(path: string, body: any): Observable<T> {
    return this.http.post<T>(`${this.apiUrl}${path}`, body, {
      headers: this.setHeaders(),
    });
  }

  // PUT request
  put<T>(path: string, body: any): Observable<T> {
    return this.http.put<T>(`${this.apiUrl}${path}`, body, {
      headers: this.setHeaders(),
    });
  }

  // DELETE request
  delete<T>(path: string): Observable<T> {
    return this.http.delete<T>(`${this.apiUrl}${path}`, {
      headers: this.setHeaders(),
    });
  }
}