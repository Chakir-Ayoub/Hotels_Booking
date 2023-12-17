import { HotelsServicesService } from 'src/app/services/hotels/hotels-services.service';
import { Room } from '../../models/rooms/rooms.module';
import { RoomsService } from './../../services/rooms/rooms.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Hotel } from 'src/app/models/hotel/hotel.module';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Country, State, City, ICity }  from 'country-state-city';
import { CountriesModule } from 'src/app/models/countries/countries.module';
import { FormGroup } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit{
  Countries:CountriesModule[]=[];
  allcity:ICity[]=[];
  SearchForm: FormGroup;
  Hotels:Hotel[]=[];
  LogIn:String;
  @ViewChild('city') city:ElementRef;
  @ViewChild('checkInDate') checkInDate:ElementRef;
  @ViewChild('checkOutDate') checkOutDate:ElementRef;
  @ViewChild('guests') guests:ElementRef;
  constructor(
              private _hotel_service:HotelsServicesService,
              private _route:ActivatedRoute,
              private _rooms_service:RoomsService){}
  hotel_ID:string
  room_ID:any;
  room:Room;
  rooms_id:Room[]=[];
  rooms:Room[]=[];
  ngOnInit(): void {
    this._route.params.subscribe((params)=>{ this.hotel_ID =params['id'];});
  this.Get_Rooms_By_Id_Hotels(this.hotel_ID);
  }

  Get_Rooms_By_Id_Hotels(id:String){
    this._hotel_service.getHotelById(id).subscribe(item=>{
      this.rooms_id=item.rooms;

      for(let id in this.rooms_id){
        this.room_ID= this.rooms_id[id];
        this._rooms_service.getRommById(this.room_ID).subscribe(item=>{
          this.room=item;
          this.rooms.push(this.room);
        })
    }
    },error=>{
      console.log(error);
    })
  }


  Search_Button() {
    let city = this.city.nativeElement.value;
    let checkInDate = this.checkInDate.nativeElement.value;
    let checkOutDate = this.checkOutDate.nativeElement.value;
    let guests = this.guests.nativeElement.value;

    // const formattedDate1 = moment(checkInDate).format('MM-DD-YYYY');
    // const formattedDate2 = moment(checkOutDate).format('MM-DD-YYYY');
    const searchParams = {
      checkInDate: checkInDate,
      checkOutDate: checkOutDate,
      guests: guests,
      city: city
    };

  }
}
