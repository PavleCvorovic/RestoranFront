import { Component, OnInit } from '@angular/core';
import {ServisService} from '../servis.service';

@Component({
  selector: 'app-reservation-page',
  templateUrl: './reservation-page.component.html',
  styleUrls: ['./reservation-page.component.css']
})
export class ReservationPageComponent implements OnInit {

  constructor(public servis:ServisService) { }
  tablesfree:any;
  newFormReservation = 0;

  ngOnInit(): void {
    this.getTables()
  }



  getTables(){


    this.servis.getFreeTables().subscribe(res => {
        this.tablesfree = res;
        console.log(this.tablesfree);

      },
      err => {
        console.log(err);

      }
    )
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
