import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../model/user.model';
import { AuthService } from './auth.service';
import { JwtService } from './jwt.service';
@Injectable({
  providedIn: 'root'
})
export class UserDataService {  
  private userDataSubject: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);
  userData$: Observable<User | null> = this.userDataSubject.asObservable();
  private response: any; 
  private userData: any; 

  constructor( private jwtService: JwtService) {}
 
  setUserData(data: any) {
    this.userDataSubject.next(data)
  }

  getUserData(): any {
    return this.userDataSubject.value;
  }
}
