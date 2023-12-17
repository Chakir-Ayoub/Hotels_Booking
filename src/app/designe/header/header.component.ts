import { ICountry } from './../../../../node_modules/country-state-city/lib/cjs/interface.d';

import { Component, DoCheck, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Country, State, City, ICity }  from 'country-state-city';
import { AvailableSearchModule } from 'src/app/models/available-search/available-search.module';
import { CountriesModule } from 'src/app/models/countries/countries.module';
import { Hotel } from 'src/app/models/hotel/hotel.module';
import { HotelsServicesService } from 'src/app/services/hotels/hotels-services.service';
import { AuthService } from 'src/app/services/shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit ,DoCheck {

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
    private _fb: FormBuilder,
    private _hotels_services:HotelsServicesService,
    private auth:AuthService,
    private router:Router
  ){  }


  ngDoCheck(): void {
    this.LogIn=localStorage.getItem('token');
  }

  ngOnInit() {
    this.allcity=City.getCitiesOfCountry('MA');
  }

  // Search_Button() {
  //   let city = this.city.nativeElement.value;
  //   let checkInDate = this.checkInDate.nativeElement.value;
  //   let checkOutDate = this.checkOutDate.nativeElement.value;
  //   let guests = this.guests.nativeElement.value;

  //   const formattedDate1 = moment(checkInDate).format('MM-DD-YYYY');
  //   const formattedDate2 = moment(checkOutDate).format('MM-DD-YYYY');
  //   const searchParams = {
  //     checkInDate: formattedDate1,
  //     checkOutDate: formattedDate2,
  //     guests: guests,
  //     city: city
  //   };
  // //'available/:checkInDate/:checkOutDate/:guests/:city
  //   this.router.navigate(['/available/'+searchParams.checkInDate+'/'+searchParams.checkOutDate+'/'+searchParams.guests+'/'+searchParams.city]);
  //   // this._hotels_services.getHotelsDisponibles(formattedDate1,formattedDate2,guests,city).subscribe(item=>{
  //   //     this.Hotels=item;
  //   // })
  // }
  Search_Button() {
    let city = this.city.nativeElement.value;
    let checkInDate = this.checkInDate.nativeElement.value;
    let checkOutDate = this.checkOutDate.nativeElement.value;
    let guests = this.guests.nativeElement.value;

    // const formattedDate1 = moment(checkInDate).format('MM-DD-YYYY');
    // const formattedDate2 = moment(checkOutDate).format('MM-DD-YYYY');
    const searchParams = {
      checkInDate: checkInDate,
      checkOutDate: checkOutDate ,
      guests: guests,
      city: city
    };

    this.router.navigate(['home/available', searchParams.checkInDate, searchParams.checkOutDate, searchParams.guests, searchParams.city]);


  }




  logout(){
    this.auth.logout();
    this.router.navigate(['login']);
  }



}
