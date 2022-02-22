import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  fetchToken(): Observable<any>{
    return this.http.get<any>('https://www.bungie.net/en/OAuth/Authorize?client_id=39412&response_type=code');
  }
}
