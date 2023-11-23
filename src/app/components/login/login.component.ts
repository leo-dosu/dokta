import { Component, ViewChild } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthService } from 'src/app/admin-module/services/auth.service';  
import { UserDataService } from 'src/app/admin-module/services/user-data.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginData = {
    email: '',
    password: ''
  };

  errorMessage: string | null = null;

  constructor(private authService: AuthService,private userDataService: UserDataService, private router: Router){}

  onSubmit() {
  
    if (!this.loginData.email || !this.loginData.password) {
      this.errorMessage = 'Both email and password are required.';
      return;
    }
  
    this.authService.login(this.loginData.email, this.loginData.password)
      .subscribe(response => { 
        if (this.authService.isAuthenticated()) {
          this.userDataService.setUserData(response);
          this.router.navigate(['/admin/dashboard']);
        }
      }, (error: HttpErrorResponse) => {
        if (error.status === 401) {
          // Unauthorized - invalid credentials
          this.errorMessage = 'Invalid username or password';
        } else {
          // Handle other error cases
          this.errorMessage = 'An unexpected error occurred. Please try again later.';
        }
        console.error('Login failed', error);
      });
};
}

