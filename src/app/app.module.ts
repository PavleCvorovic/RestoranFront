import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ReservationPageComponent } from './reservation-page/reservation-page.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminBoardComponent } from './admin-board/admin-board.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from "@angular/forms";
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ReservationPageComponent,
    AdminLoginComponent,
    AdminBoardComponent,
    NavbarComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule


    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
