import { BookModule } from './../../models/Book/book/book.module';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private _hhtp:HttpClient) { }

  Book_Room(Book:BookModule,id:Number): Observable<BookModule>{
    const authorizationHeader = "Bearer "+localStorage.getItem("authToken");
    return this._hhtp.post<BookModule>(`https://hotel-api-12oz.onrender.com/api/v1/rooms/book/${id}`,Book,{headers:{"Authorization": authorizationHeader}});
  }
}
