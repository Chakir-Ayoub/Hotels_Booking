import { HotelModule } from './../models/hotel/hotel.module';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HotelsServicesService {

  constructor(private _http:HttpClient) { }

  getAllHotels():Observable<HotelModule[]>{
    return this._http.get<HotelModule[]>('http://localhost:5001/api/v1/hotels');
  }
}
