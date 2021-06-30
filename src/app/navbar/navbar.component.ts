import { AdminGuardGuard } from './../admin-guard.guard';
import { ServisService } from './../servis.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public servis:ServisService, public router:Router, public http:HttpClient, public guard:AdminGuardGuard) { }

  ngOnInit(): void {
  }

  odjavi()
  {
    this.http.post('http://localhost:8000/api/logout',{},{withCredentials:true})
    .subscribe(()=>
    {

      this.servis.logovan= false;
      this.guard.logovan = false;
      this.router.navigate(['adminLogin']);

    })
  }

}
