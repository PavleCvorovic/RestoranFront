import { Component, OnInit } from '@angular/core';
import {ServisService} from '../servis.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
 meni:any;

  constructor(public servis:ServisService) { }

  ngOnInit(): void {
  this.getMenu()
    console.log(this.meni);
  }



















getMenu(){

  this.servis.getMenu().subscribe(res => {
      this.meni=res;
    },
    err => {
      console.log(err);

    }
  )
}




}
