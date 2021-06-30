import { AdminGuardGuard } from './../admin-guard.guard';
import { ServisService } from './../servis.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor(public fb:FormBuilder, public http:HttpClient, public router:Router, public servis:ServisService, public guard:AdminGuardGuard) { }

  ngOnInit(): void {
  }

  unos_admin = this.fb.group(
    {
      username:'',
      password:''
    }
  )

  submit()
  {
      this.http.post('http://localhost:8000/api/login', this.unos_admin.getRawValue(),{withCredentials:true})
        .subscribe((result: any)=>
      {
        this.servis.logovan = true;
        this.guard.logovan = true;
        this.router.navigate(['adminPanel']);
      });

  }

}
