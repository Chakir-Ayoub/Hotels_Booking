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
import { HttpClientModule } from '@angular/common/http';
import {AngularFireModule} from '@angular/fire/compat';
import { LoginComponent } from './designe/login/login.component';
import { RegisterComponent } from './designe/register/register.component';
import { DashboardComponent } from './designe/dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { environment } from 'src/environements/environement';
import { ForgetPasswordComponent } from './designe/forget-password/forget-password.component';
import { VerifyEmailComponent } from './designe/verify-email/verify-email.component';
import { AvailableRommsComponent } from './designe/available-romms/available-romms.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    RoomsComponent,
    FacilitiesComponent,
    ContactUsComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    ForgetPasswordComponent,
    VerifyEmailComponent,
    AvailableRommsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [     ],
  bootstrap: [AppComponent]
})
export class AppModule { }
