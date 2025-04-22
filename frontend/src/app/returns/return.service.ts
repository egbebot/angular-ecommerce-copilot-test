import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Return } from '../shared/models/return.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ReturnService {
  private apiUrl = `${environment.apiUrl}/returns`;

  constructor(private http: HttpClient) {}

  requestReturn(returnRequest: Return): Observable<any> {
    return this.http.post(`${this.apiUrl}/request`, returnRequest);
  }
}