import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ville } from 'src/app/models/country/country/ville.model';
@Injectable({
  providedIn: 'root'
})
export class VilleService {

  constructor(private _http:HttpClient) { }

  getAllCities():Observable<ville[]>{
    return this._http.get<ville[]>("https://continentl.com/api/country-list?page=1&key=sk-IIGl6553c89f0c30244");
  }
}
