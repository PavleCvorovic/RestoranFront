import {Component, OnInit, ViewChild} from '@angular/core';
import Swal from 'sweetalert2';
import {ServisService} from '../servis.service';

@Component({
  selector: 'app-admin-board',
  templateUrl: './admin-board.component.html',
  styleUrls: ['./admin-board.component.css']
})
export class AdminBoardComponent implements OnInit {
  meni: any;
  dish:any;
  tables:any;
  usertables:any;
  Admintabs:number;
  tabMod:boolean=false;
  ReservationId:any;
  switchResId:boolean=false;
  newfood:any={
    naziv:'',
    opis:'',
    slika:'',
    cijena:''
  };
  res:any={
    id:'',
    desk_id:''
  }
  modfood:any={
    naziv:'',
    opis:'',
    slika:'',
    cijena:''
  };
kapacitet:any={
  kapacitet:''
};
reserveTab:boolean=false;
reserveId:number;
  reservation:any={
    desk_id:'',
    ime_gosta:'',
    broj_gostiju:'',
    datum:'',
    broj_telefon:''

  }
  @ViewChild('e') select;
  @ViewChild('f') select1;
  @ViewChild('r') select2;

  constructor(public servis:ServisService) {
  }

  ngOnInit(): void {
    this.getMenu();
    this.getTables();
    this.getallresGuest()
  }
sw(){
    this.reserveTab=true;

}
state(a){
    this.reserveId=a;
    this.res.desk_id=a;
    this.switchResId=true;
this.servis.getReservatons(a).subscribe(res=>
  {
    this.ReservationId=res;
    console.log(this.ReservationId);
  }

)
}


  addfood(){

    this.servis.postMenuItem(this.newfood).subscribe(res => {
      this.meni= res;
      Swal.fire('Uspjesno !', 'Dodali ste hranu !', 'success')


    });
    this.newfood.naziv = "";
    this.newfood.opis = "";
    this.newfood.cijena = "";
    this.newfood.slika = "";


  }
  addTable(){


    this.servis.addTable(this.kapacitet).subscribe(res => {
      this.tables= res;
      Swal.fire('Uspjesno !', 'Dodali ste sto !', 'success')


    });


  }
  getDishId(a){

    this.servis.getSingleDish(a).subscribe(res => {
        this.dish= res;


      },
      err => {
        console.log(err);

      }
    );
    this.tabMod=true;


  }
  reserveTableAdmin(id) {


this.reservation.desk_id=id;
      console.log(this.reservation)
      this.servis.reserveTableAdmin(this.reservation).subscribe(res => {
          let a=res;
          if (a==1){
            Swal.fire('Nazalost', 'Stol je vec rezervisan  !', 'warning')
            a=0;
          }else {   Swal.fire('Uspjesno', 'Ocekujemo Vas '+ this.reservation.ime_gosta+ " !", 'success') ;a=0;
          }

        }


      );


    this.reservation.desk_id='';
    this.reservation.broj_gostiju='';
    this.reservation.broj_telefon='';
    this.reservation.datum='';
    this.reservation.ime_gosta='';
    this.reservation.email='';





    }



delRes(id){

    this.servis.delRes(id).subscribe(res=>{
      this.ReservationId=res;
    })

}





swichSidebar(a){

  switch(a) {
    case "1": {
this.Admintabs=1;
this.select.nativeElement.value='';
this.select2.nativeElement.value='';
this.reserveTab=false;
this.switchResId=false;
      break;
    }
    case "2" :{
      this.Admintabs=2;
      this.select.nativeElement.value='';
      this.select2.nativeElement.value='';
      this.reserveTab=false;
      this.switchResId=false;
      break;
    }
    case "3" :{
      this.Admintabs=3;
      this.select.nativeElement.value='';
      this.select2.nativeElement.value='';
      this.reserveTab=false;
      this.switchResId=false;
      break;
    }
    case "4" :{
      this.Admintabs=4;
      this.select1.nativeElement.value='';
      this.select2.nativeElement.value='';
      this.reserveTab=false;
      this.switchResId=false;
      break;
    }
    case "5" :{
      this.Admintabs=5;
      this.select1.nativeElement.value='';
      this.select2.nativeElement.value='';
      this.reserveTab=false;
      this.switchResId=false;
      break;
    }
    case "6" :{
      this.select.nativeElement.value='';
      this.select1.nativeElement.value='';
      this.reserveTab=false;
      this.switchResId=false;

      this.Admintabs=6;
      break;
    }
    case "7" :{
      this.select.nativeElement.value='';
      this.select1.nativeElement.value='';
      this.reserveTab=false;
      this.switchResId=false;

      this.Admintabs=7;
      break;
    }
  }

}

getallresGuest(){
    this.servis.getReservatonsall().subscribe(res=>{
      this.usertables=res;
      console.log(this.usertables);
    })
}










reservetab(id){
  this.reserveId=id;
    this.reserveTab=true;
}


  getMenu() {

    this.servis.getMenu().subscribe(res => {
        this.meni = res;
      },
      err => {
        console.log(err);

      }
    )
  }

  getTables() {

    this.servis.getTables().subscribe(res => {
        this.tables = res;
      },
      err => {
        console.log(err);

      }
    )
  }
  delTables(id){

    this.servis.delTables(id).subscribe(res => {
this.tables=res;
        Swal.fire('Uspjesno !', 'Izbrisali  ste sto !', 'success')
      },
      err => {
        console.log(err);

      }
    )


  }
  delMenuItem(id){
    this.servis.delMenuItem(id).subscribe(res => {
this.meni=res;
        Swal.fire('Uspjesno !', 'Izbrisali ste hranu !', 'success')
      },
      err => {
        console.log(err);

      }
    )

  }
 editDish(){

    this.servis.editMenuItem(this.dish.id,this.modfood).subscribe();
this.tabMod=false;

 }



}
