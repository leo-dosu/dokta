import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class JwtService {

  constructor() { }

  decodeToken(token: string | null): any {
    if (!token) {
      // Handle the case where the token is null (optional: throw an error, return a default value, etc.)
      return null;
    }
    // method to decode token
    const _decodeToken = (tokenPart: string) => {
      try {
        return JSON.parse(atob(tokenPart));
      } catch {
        return null; // Handle the case where decoding fails (optional: throw an error, return a default value, etc.)
      }
    };
  
    return token
      .split('.')
      .map((tokenPart) => _decodeToken(tokenPart))
      .reduce((acc, curr) => {
        if (!!curr) {
          acc = { ...acc, ...curr };
        }
        return acc;
      }, Object.create(null));
  }
}
