import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { observable, Observable, throwError } from 'rxjs';
import { TokenService } from './token.service';

const OAUTH_CLIENT = '39412';
const OAUTH_SECRET = '1SzJY8WyEK4DVEpUW3Th4KYCAH63S2C.gMwNrR3p.Pk';
const API_URL = 'https://www.bungie.net/en/OAuth/Authorize?client_id=39412&response_type=code';
const redirectUrl = 'https://www.jumosfoundry.net/main';

const HTTP_OPTIONS = {
  headers: new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded',
    Authorization: 'Basic ' + btoa(OAUTH_CLIENT + ':' + OAUTH_SECRET)
  })
};


@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private http: HttpClient, private tokenService: TokenService, private apiService: ApiService) { }

  login():void{
    this.tokenService.removeToken();
    this.tokenService.removeRefreshToken();

    this.apiService.fetchToken().subscribe(data => {
      this.tokenService.saveToken(data.access_token);
      this.tokenService.saveRefreshToken(data.refresh_token)
    }, error => {console.log("Something Went Wrong:", error)});


  }
}
