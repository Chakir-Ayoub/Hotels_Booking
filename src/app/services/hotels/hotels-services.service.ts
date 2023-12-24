import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Hotel } from '../../models/hotel/hotel.module';
import { AvailableSearchModule } from 'src/app/models/available-search/available-search.module';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class HotelsServicesService {

  constructor(private _http:HttpClient) { }

  getAllHotels():Observable<Hotel[]>{
    return this._http.get<Hotel[]>('http://localhost:5001/api/v1/hotels');
  }

  getHotelById(id:String):Observable<Hotel>{
    return this._http.get<Hotel>(`http://localhost:5001/api/v1/hotels/${id}`);
  }

  getHotelsDisponibles(dateArrivee: any, dateDepart: any, invites: any, ville: any): Observable<Hotel[]> {
    const formattedCheckInDate = moment(dateArrivee).format('MM-DD-YYYY');
    const formattedCheckOutDate = moment(dateDepart).format('MM-DD-YYYY');

    return this._http.get<Hotel[]>('http://localhost:5001/api/v1/hotels/available', {
      params: {
        checkInDate: formattedCheckInDate,
        checkOutDate: formattedCheckOutDate,
        guests: invites,
        city: ville
      }
    });
  }

}
