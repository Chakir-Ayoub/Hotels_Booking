import { ville } from 'src/app/models/country/country/ville.model';
import { VilleService } from './../../services/api-ville/ville.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {

  ngOnInit() {
  this.getAllCities();

  }
  constructor(private VilleService:VilleService){}
  click_Book_now:Boolean=false;
  cities:ville[];
  Is_click_Book_now(){
    this.click_Book_now=true;
  }

  getAllCities(){
    this.VilleService.getAllCities().subscribe({
      next:(items)=>{
      this.cities=items;
      }
    })
  }
}
