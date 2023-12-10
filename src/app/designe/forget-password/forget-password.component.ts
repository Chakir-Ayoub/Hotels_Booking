import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/shared/auth.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent {
  email:string='';
  constructor(private auth:AuthService){}
  forgetPassword(){
    this.auth.forgotPassword(this.email);
    this.email='';
  }
}
