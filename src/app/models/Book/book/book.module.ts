import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class BookModule {
 public checkInDate:Date;
 public checkOutDate:Date;
 public  guests:Number;

 constructor(checkindate:Date,checkOutDate:Date,guests:Number){
  this.checkInDate=checkindate;
  this.checkOutDate=checkOutDate;
  this.guests=guests;
 }
 }
