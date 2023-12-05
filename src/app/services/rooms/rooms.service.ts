import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Room } from 'src/app/models/rooms/rooms.module';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  constructor(private _http:HttpClient) { }

  getRommById(id:String):Observable<Room>{
    return this._http.get<Room>(`http://localhost:5001/api/v1/rooms/${id}`);
  }
}
