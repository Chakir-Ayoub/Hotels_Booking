import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './designe/header/header.component';
import { FooterComponent } from './designe/footer/footer.component';
import { BodyComponent } from './designe/body/body.component';
import { RoomsComponent } from './designe/rooms/rooms.component';
import { FacilitiesComponent } from './designe/facilities/facilities.component';
import { ContactUsComponent } from './designe/contact-us/contact-us.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    RoomsComponent,
    FacilitiesComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
