import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class LocationModule {

  public country:String;
  public addressLineOne:String;
  public addressLineTwo:String;
  public city:String;
  public state:String;
  public postCode:Number;
 }
