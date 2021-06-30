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
  newfood:any={
    naziv:'',
    opis:'',
    slika:'',
    cijena:''
  };
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
  ime_gosta:'',
  broj_gostiju:'',
  pocetak_rezervacije:'',
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
    this.getUsertables()
  }


  getUsertables(){
    this.servis.getUsertables().subscribe(res=>{
      this.usertables=res;
    })

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
this.kapacitet="";

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
  reserveTableAdmin(id,sw) {


    if (sw == true) {
      console.log(this.reservation)
      this.servis.reserveTableAdmin(this.reserveId,this.reservation).subscribe(res => {
        this.tables= res;


      })
      this.reserveTab=false;


    } else {
      let idd: any = {
        id
      }
      idd.id = id
      this.servis.unreserveTableAdmin(idd).subscribe(res => {
        this.tables= res
                    })

    }
  }






swichSidebar(a){

  switch(a) {
    case "1": {
this.Admintabs=1;
this.select.nativeElement.value='';
this.select2.nativeElement.value='';
this.reserveTab=false;
      break;
    }
    case "2" :{
      this.Admintabs=2;
      this.select.nativeElement.value='';
      this.select2.nativeElement.value='';
      this.reserveTab=false;
      break;
    }
    case "3" :{
      this.Admintabs=3;
      this.select.nativeElement.value='';
      this.select2.nativeElement.value='';
      this.reserveTab=false;
      break;
    }
    case "4" :{
      this.Admintabs=4;
      this.select1.nativeElement.value='';
      this.select2.nativeElement.value='';
      this.reserveTab=false;
      break;
    }
    case "5" :{
      this.Admintabs=5;
      this.select1.nativeElement.value='';
      this.select2.nativeElement.value='';
      this.reserveTab=false;
      break;
    }
    case "6" :{
      this.select.nativeElement.value='';
      this.select1.nativeElement.value='';
      this.reserveTab=false;

      this.Admintabs=6;
      break;
    }
    case "7" :{
      this.select.nativeElement.value='';
      this.select1.nativeElement.value='';
      this.reserveTab=false;

      this.Admintabs=7;
      break;
    }
  }

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
