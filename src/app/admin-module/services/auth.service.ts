import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs';
import { Constants } from 'src/app/config/constants';

import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = Constants.API_ENDPOINT;
  private tokenKey = 'auth_token';

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable <any> {
    console.log(this.apiUrl)
    return this.http.post<any>(`${this.apiUrl}/doctor/login`, { username, password }).pipe(
      
      tap(response => {
        if (response && response.token) {
          localStorage.setItem(this.tokenKey, response.token);
          
        }
      })
    );
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem(this.tokenKey);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

}
