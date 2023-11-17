import { Component, ViewChild } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthService } from 'src/app/admin-module/services/auth.service';
import { NgForm } from '@angular/forms';

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

  constructor(private authService: AuthService, private router: Router){}

  onSubmit() {
        this.authService.login(this.loginData.email, this.loginData.password)
      .subscribe(()=> {
        if(this.authService.isAuthenticated()){
          this.router.navigate(['/admin/dashboard']); 
        }
      })
  };
}

