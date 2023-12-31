import { TokenService } from './../../services/Token/token.service';
import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/shared/auth.service';
import Swal from 'sweetalert2';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email:string='';
  password:string='';
  constructor(private auth:AuthService,private tokenservice:TokenService){}
  login(){
      if(this.email==''){
        Swal.fire({
          position: 'top-end',
          icon: 'warning',
          title: "veuillez entrer votre email",
          showConfirmButton: false,
          timer: 1500
        });
        return;
      }
      if(this.password==''){
        Swal.fire({
          position: 'top-end',
          icon: 'warning',
          title: "veuillez entrer le mot de passe",
          showConfirmButton: false,
          timer: 1500
        });
        return;
      }
      this.auth.login(this.email,this.password);
      this.email='';
      this.password='';
  }

  signInWithGoogle(){
   this.auth.googleSignIn();
  }

  // openAddForm() {
  //   const dialogRef = this._dialog.open(RegisterComponent);
  //   dialogRef.afterClosed().subscribe({
  //     next: (val) => {
  //       if (val) {
  //       }
  //     },
  //   });
  // }
}
