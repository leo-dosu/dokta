import { CanActivate, CanActivateFn } from '@angular/router';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../admin-module/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}
  canActivate(): boolean {
    if (this.authService.isAuthenticated()) {
      return true;
    } else {
      // Perform any additional logic here (e.g., redirecting to the login page)
      // For simplicity, let's assume the login page has the path '/login'
      this.router.navigate(['/login']);
      return false;
    }
  }
}