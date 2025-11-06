import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CellService {
  private apiUrl = `${environment.apiUrl}/cells`;

  constructor(private http: HttpClient) {}

  registerCell(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, data);
  }

  updateCell(data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/update`, data);
  }

  deleteCell(data: any): Observable<any> {
    return this.http.delete(`${this.apiUrl}/delete`, { body: data });
  }
}