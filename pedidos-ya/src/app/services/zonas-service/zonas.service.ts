import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Zona } from '../../models/zona.model';

@Injectable({ providedIn: 'root' })
export class ZonasService {
  private apiUrl = 'http://localhost:3001/zone';

  constructor(private http: HttpClient) {}

  getZonas(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  postZona(zona: Zona): Observable<any> {
    return this.http.post<any>(this.apiUrl, zona);
  }

  putZonaByData(data: Zona): Observable<any> {
  return this.http.put<any>('http://localhost:3001/zone', data);
}

  patchZona(id: number, data: Partial<Zona>): Observable<any> {
    return this.http.patch<any>(`${this.apiUrl}/${id}`, data);
  }
}
