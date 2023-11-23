import { Component, OnInit } from '@angular/core';
import { UserDataService } from 'src/app/admin-module/services/user-data.service';
import { User } from '../model/user.model';
import { JwtService } from '../services/jwt.service';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  userData!: User | null;
  response: any | null = null; 

  constructor(public userDataService: UserDataService, private jwtService: JwtService, private authService: AuthService){}
    
  ngOnInit(): void{
    this.response = this.authService.getResponse();  //retrieve response
    if (this.response) {
      const user = this.response.user;
      const token = this.response.token;
      this.userDataService.setUserData(user);
   }
  }

}