import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Hotel } from '../../models/hotel/hotel.module';
import { AvailableSearchModule } from 'src/app/models/available-search/available-search.module';

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

  // Get_available_Hotels(search: any): Observable<Hotel[]> {
  //   // Utilisez HttpParams pour convertir l'objet JSON en paramètres de requête
  //   let params = new HttpParams();
  //   Object.keys(search).forEach(key => {
  //     params = params.append(key, search[key]);
  //   });

  //   // Utilisez les paramètres de requête dans la requête GET
  //   return this._http.get<Hotel[]>('https://hotel-api-12oz.onrender.com/api/v1/hotels/available', { params });
  // }

  /** const dataset = {
  lat: '38.8993487',
  lng: '-77.0145665',
  radius: '100',
  tags: ['bier']
};

return this._httpClient.get<any>(`http://localhost:5000/location/searchDistanceAndTags?pageNo=${this.pageNumber}&size=10`, {
  headers: {token: this.apikey,
    'Content-Type':  'application/json'},
  params: dataset
}); */

Get_available_Hotels(search: any): Observable<Hotel[]> {
  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    body: search
  };
  return this._http.request<Hotel[]>('GET', 'https://hotel-api-12oz.onrender.com/api/v1/hotels/available', httpOptions);
}

}
