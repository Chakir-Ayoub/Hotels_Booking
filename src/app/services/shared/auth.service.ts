import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {GoogleAuthProvider} from '@angular/fire/auth';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  log:boolean=false;
  constructor(private fireauth:AngularFireAuth,private router:Router) { }

  login(email: string,password:string){
    this.fireauth.signInWithEmailAndPassword(email,password).then(res=>{
      localStorage.setItem('token','true');
      if(res.user?.emailVerified==true){
        this.router.navigate(['home']);
      }else{
        this.router.navigate(['verify-email']);
      }
    },err=>{
      alert('something went wrong');
      this.router.navigate(['/login']);
    })
  }

  refister(email:string,password:string){
    this.fireauth.createUserWithEmailAndPassword(email,password).then(res=>{
      alert('Registration Successful');
      this.router.navigate(['/login']);
      this.sendEmailForVerfication(res.user);
    },error=>{
      alert('Registration Successful');
      this.router.navigate(['/register'])
    })
  }

  logout(){
    this.fireauth.signOut().then(()=>{
      localStorage.removeItem('token');
      this.router.navigate(['/login']);
      localStorage.setItem('token','false');
    },err=>{
      alert(err.message);
    })
  }

  forgotPassword(email:string){
    this.fireauth.sendPasswordResetEmail(email).then(()=>{
      this.router.navigate(['/verify-email'])
    },err=>{
      alert('Something went wrong');
    })
  }

  sendEmailForVerfication(user:any){
    user.sendEmailVerfication().then((res:any)=>{
      this.router.navigate(['/verify-email']);
    },(err:any)=>{
      alert('Something went wrong. Not able to send mail');
    })
  }

  googleSignIn(){
    return this.fireauth.signInWithPopup(new GoogleAuthProvider).then(res=>{
      this.router.navigate(['/home']);
      localStorage.setItem('token',JSON.stringify(res.user?.uid));
    },err=>{
      alert(err.message);
    });
  }

}
