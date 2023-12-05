import { HotelsServicesService } from 'src/app/services/hotels/hotels-services.service';
import { Room } from '../../models/rooms/rooms.module';
import { RoomsService } from './../../services/rooms/rooms.service';
import { Component, OnInit } from '@angular/core';
import { Hotel } from 'src/app/models/hotel/hotel.module';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit{

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


}
