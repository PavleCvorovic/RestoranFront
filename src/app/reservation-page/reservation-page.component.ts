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
  reservation:any={
    desk_id:'',
    ime_gosta:'',
    broj_gostiju:'',
    datum:'',
    broj_telefon:''

  }

  reserveId:number
  ngOnInit(): void {
    this.getTables()
  }



  getTables(){


    this.servis.getTables().subscribe(res => {
        this.tablesfree = res;

      },
      err => {
        console.log(err);

      }
    )
  }



  rezervisi(id)
  {

      this.newFormReservation = 1;

      this.reservation.desk_id=id;
  }
  reserve(){

    this.servis.reserveTableUser(this.reservation).subscribe(res => {
      this.tablesfree = res;
      this.newFormReservation = 0;

    });
  }

  otkazi()
  {
    this.newFormReservation = 0;
  }

}
