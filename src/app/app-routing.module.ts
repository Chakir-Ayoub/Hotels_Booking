import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { BodyComponent } from './designe/body/body.component';
import { RouterModule } from '@angular/router';
import { FacilitiesComponent } from './designe/facilities/facilities.component';
import { RoomsComponent } from './designe/rooms/rooms.component';
import { ContactUsComponent } from './designe/contact-us/contact-us.component';
import { LoginComponent } from './designe/login/login.component';
import { RegisterComponent } from './designe/register/register.component';
import { VerifyEmailComponent } from './designe/verify-email/verify-email.component';
import { ForgetPasswordComponent } from './designe/forget-password/forget-password.component';

const routes: Routes=[
  {path:"",redirectTo:"/login",pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'verify-email',component:VerifyEmailComponent},
  {path:'forgot-password',component:ForgetPasswordComponent},

  {path:'home',children:
  [
    {path:'',component:BodyComponent},
    {path:'facilities',component:FacilitiesComponent},
    {path:'rooms/:id',component:RoomsComponent},
    {path:'contact-us',component:ContactUsComponent}
  ]}
]
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
