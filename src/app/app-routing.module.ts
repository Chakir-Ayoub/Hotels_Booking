import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { BodyComponent } from './designe/body/body.component';
import { RouterModule } from '@angular/router';
import { FacilitiesComponent } from './designe/facilities/facilities.component';
import { RoomsComponent } from './designe/rooms/rooms.component';
import { ContactUsComponent } from './designe/contact-us/contact-us.component';

const routes: Routes=[
  {path:"",redirectTo:"/home",pathMatch:'full'},
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
