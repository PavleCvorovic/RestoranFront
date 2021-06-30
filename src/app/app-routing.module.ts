import { AdminGuardGuard } from './admin-guard.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomepageComponent} from './homepage/homepage.component';
import {ReservationPageComponent} from './reservation-page/reservation-page.component';
import {AdminBoardComponent} from './admin-board/admin-board.component';
import {AdminLoginComponent} from './admin-login/admin-login.component';


const routes: Routes = [
  {path: '', redirectTo: 'homepage' , pathMatch: 'full' },
  {path: 'homepage', component: HomepageComponent},
  {path: 'reservation', component: ReservationPageComponent},
  {path: 'adminLogin', component: AdminLoginComponent},
  {path: 'adminPanel', component: AdminBoardComponent, canActivate:[AdminGuardGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
