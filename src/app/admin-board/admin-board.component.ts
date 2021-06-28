import { Component, OnInit } from '@angular/core';
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

  constructor(public servis:ServisService) {
  }

  ngOnInit(): void {
    this.getMenu();
    this.getTables();
  }





  addfood(){

    this.servis.postMenuItem(this.newfood).subscribe();


  }
  addTable(){


    this.servis.addTable(this.kapacitet).subscribe();


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
    let idd: any = {
      id
    }
    idd.id = id
    if (sw == true) {
      this.servis.reserveTableAdmin(idd).subscribe()
    } else {
      this.servis.unreserveTableAdmin(idd).subscribe()
    }
  }






swichSidebar(a){
  switch(a) {
    case "1": {
this.Admintabs=1;
      break;
    }
    case "2" :{
      this.Admintabs=2;
      break;
    }
    case "3" :{
      this.Admintabs=3;
      break;
    }
    case "4" :{
      this.Admintabs=4;
      break;
    }
    case "5" :{
      this.Admintabs=5;
      break;
    }
    case "6" :{
      this.Admintabs=6;
      break;
    }
  }

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

      },
      err => {
        console.log(err);

      }
    )

  }
  delMenuItem(id){
    this.servis.delMenuItem(id).subscribe(res => {

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
