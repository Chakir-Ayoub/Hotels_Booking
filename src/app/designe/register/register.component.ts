import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/shared/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  email:string='';
  password:string='';

  constructor(private auth:AuthService){}

  register(){
    if(this.email==''){
      alert('please enter email');
      return;
    }
    if(this.password==''){
      alert('please enter password');
      return;
    }

    this.auth.refister(this.email,this.password);
    this.email='';
    this.password='';
}
}
