import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationModule } from '../location/location.module';
import { PhotoModule } from '../photo/photo.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class HotelModule {

  public location:LocationModule;
  public _id:String;
  public name:String;
  public photos:PhotoModule;
  public title:String;
  public desc:String;
  public numOfReviews:Number;
  public featured:Boolean;
  public user:string;
  public createdAt:Date;
  public updatedAt:Date;

 }
