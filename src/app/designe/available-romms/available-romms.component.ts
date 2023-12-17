import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { Hotel } from 'src/app/models/hotel/hotel.module';
import { Room } from 'src/app/models/rooms/rooms.module';
import { HotelsServicesService } from 'src/app/services/hotels/hotels-services.service';

@Component({
  selector: 'app-available-romms',
  templateUrl: './available-romms.component.html',
  styleUrls: ['./available-romms.component.css']
})
export class AvailableRommsComponent implements OnInit {
  constructor(private _route:ActivatedRoute,private hotel_service:HotelsServicesService){}
  checkOutDate:any;
  checkInDate:any;
  guests:any;
  city:any;
  hotel:Hotel[]=[];
  rooms:Room[]=[];

  ngOnInit(): void {

    this._route.params.subscribe((params)=>{
      this.checkOutDate =params['checkOutDate'];
      this.checkInDate=params['checkInDate'];
      this.guests=params['guests'];
      this.city=params['city'];});
      const formattedDate1 = moment(this.checkInDate).format('MM-DD-YYYY');
      const formattedDate2 = moment(this.checkOutDate).format('MM-DD-YYYY');

      this.hotel_service.getHotelsDisponibles(formattedDate2,formattedDate1,this.guests,this.city).subscribe(item=>{
        this.hotel=item;
        this.hotel.forEach(element => {
         this.rooms= element.rooms;
        },error=>{
          console.log(error);
        }
        );

      })
    }

}
