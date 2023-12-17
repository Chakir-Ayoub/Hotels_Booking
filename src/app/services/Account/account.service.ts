import { Injectable } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { BehaviorSubject } from 'rxjs';
import { TokenService } from '../Token/token.service';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private tokenService:TokenService) { }
  private loggedIn=new BehaviorSubject<Boolean>(this.tokenService.loggedIn());

  authStatus=this.loggedIn.asObservable();

  changesStatus(value:boolean){
      this.loggedIn.next(value);
  }}
