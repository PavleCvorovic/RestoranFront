import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ReservationPageComponent } from './reservation-page/reservation-page.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminBoardComponent } from './admin-board/admin-board.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ReservationPageComponent,
    AdminLoginComponent,
    AdminBoardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
