import { BookService } from './../../services/book/book.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { BookModule } from 'src/app/models/Book/book/book.module';
import { Hotel } from 'src/app/models/hotel/hotel.module';
import { Room } from 'src/app/models/rooms/rooms.module';
import { HotelsServicesService } from 'src/app/services/hotels/hotels-services.service';
import Swal from 'sweetalert2';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-available-romms',
  templateUrl: './available-romms.component.html',
  styleUrls: ['./available-romms.component.css']
})
export class AvailableRommsComponent implements OnInit {
  constructor(private _route:ActivatedRoute,private hotel_service:HotelsServicesService,private bookService:BookService){}
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
          Swal.fire({
            position: 'top-end',
            icon: 'warning',
            title: error.message,
            showConfirmButton: false,
            timer: 1500
          });
        }
        );

      })
    }

    Book_Room(id){
      this._route.params.subscribe((params)=>{
        this.checkOutDate =params['checkOutDate'];
        this.checkInDate=params['checkInDate'];
        this.guests=params['guests'];
        this.city=params['city'];});
        const formattedDate1 = moment(this.checkInDate).format('MM-DD-YYYY');
        const formattedDate2 = moment(this.checkOutDate).format('MM-DD-YYYY');
          this.bookService.Book_Room(new BookModule(this.checkOutDate,this.checkInDate,this.guests),id).subscribe(item=>{
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: "La réservation s'est bien passée. Un email de confirmation vous sera envoyé dans les prochaines minutes.",
              showConfirmButton: false,
              timer: 1500
            });
          },error=>{
            Swal.fire({
              position: 'top-end',
              icon: 'warning',
              title: error,
              showConfirmButton: false,
              timer: 1500
            });
          })
        }
}
