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
  Admintabs:number;
  tabMod:boolean=false;
  newfood:any={
    naziv:'',
    opis:'',
    slika:''
  };
  modfood:any={
    naziv:'',
    opis:'',
    slika:''
  };

  constructor(public servis:ServisService) {
  }

  ngOnInit(): void {
    this.getMenu();
  }





  addfood(){
    console.log(this.newfood.naziv)
    this.servis.postMenuItem(this.newfood).subscribe();


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
