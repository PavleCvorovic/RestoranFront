import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservation-page',
  templateUrl: './reservation-page.component.html',
  styleUrls: ['./reservation-page.component.css']
})
export class ReservationPageComponent implements OnInit {

  constructor() { }
  pisac = ['marko','kamcsda','dsad'];
  newFormReservation = 0;

  ngOnInit(): void {
  }

  rezervisi()
  {
      this.newFormReservation = 1;
  }
  otkazi()
  {
    this.newFormReservation = 0;
  }

}
