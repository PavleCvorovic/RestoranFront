import { Component, OnInit } from '@angular/core';
import {ServisService} from '../servis.service';

@Component({
  selector: 'app-admin-board',
  templateUrl: './admin-board.component.html',
  styleUrls: ['./admin-board.component.css']
})
export class AdminBoardComponent implements OnInit {
  meni: any;

  constructor(public servis:ServisService) {
  }

  ngOnInit(): void {
    this.getMenu();
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
