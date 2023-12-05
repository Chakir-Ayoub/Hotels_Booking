import { Component, OnInit } from '@angular/core';
import { HotelObjectModule } from 'src/app/models/hotel-object/hotel-object.module';
import { Hotel } from 'src/app/models/hotel/hotel.module';
import { HotelsServicesService } from 'src/app/services/hotels/hotels-services.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit  {
  constructor(private _hotels_services:HotelsServicesService){}
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
