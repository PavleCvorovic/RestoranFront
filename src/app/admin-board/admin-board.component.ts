import { Component, OnInit } from '@angular/core';
import {ServisService} from '../servis.service';

@Component({
  selector: 'app-admin-board',
  templateUrl: './admin-board.component.html',
  styleUrls: ['./admin-board.component.css']
})
export class AdminBoardComponent implements OnInit {
  meni: any;
  Admintabs:number;
  newfood:any={
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




}
