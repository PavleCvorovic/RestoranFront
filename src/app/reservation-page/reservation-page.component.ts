import {Component, OnInit, ViewChild} from '@angular/core';
import {ServisService} from '../servis.service';
import Swal from 'sweetalert2';


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
      let a=res;
      if (a==1){
        Swal.fire('Nazalost', 'Stol je vec rezervisan  !', 'warning')
a=0;
      }else {   Swal.fire('Uspjesno', 'Ocekujemo Vas '+ this.reservation.ime_gosta+ " !", 'success') ;a=0;
      }      this.newFormReservation = 0;

    }
    );


  }

  otkazi()
  {
    this.newFormReservation = 0;
  }

}
