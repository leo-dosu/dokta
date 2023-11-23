import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
  private response = 'response_data';
  

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable <any> {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post<any>(`${this.apiUrl}/login`, { email, password }, {headers})
    .pipe(
      tap(response => {
        if (response && response.token) {
          localStorage.setItem('response_data', JSON.stringify(response));
        }
      })
    );
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem(this.response);
  }

  getResponse(): any | null {
  const storedResponse = localStorage.getItem('response_data');
  // Parse the JSON string to get the object
  return storedResponse ? JSON.parse(storedResponse) : null;
  }

}
