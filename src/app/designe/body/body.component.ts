import { Component, OnInit } from '@angular/core';
import { HotelObjectModule } from 'src/app/models/hotel-object/hotel-object.module';
import { Hotel } from 'src/app/models/hotel/hotel.module';
import { HotelsServicesService } from 'src/app/services/hotels/hotels-services.service';
import { AuthService } from 'src/app/services/shared/auth.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit  {
  constructor(private _hotels_services:HotelsServicesService){}
  LogIn:String;
    logo:string[]=[
      "https://www.rekrute.com/rekrute/file/jobOfferLogo/jobOfferId/43267",
      "https://agence.marketing-chine.com/wp-content/uploads/2020/08/lamamounia.png"
    ]


  ngOnInit(): void {
    this.getAllHotels();
  }
  hotels:Hotel[]=[];


  getAllHotels(){
    this._hotels_services.getAllHotels().subscribe(item=>{
      this.hotels=item;
    },error=>{
      console.log(error);
    })
  }

}
