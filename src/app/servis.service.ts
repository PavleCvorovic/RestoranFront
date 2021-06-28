import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServisService {

  constructor(private http: HttpClient){ }

  getMenu(){
    return this.http.get("http://localhost:8000/api/food");
  }
  getTables(){
    return this.http.get("http://localhost:8000/api/desks");
  }
  getFreeTables(){
    return this.http.get("http://localhost:8000/api/desksfree");
  }

  reserveTableAdmin(id){

    return this.http.post("http://localhost:8000/api/reserveDeskAdmin",id);
  }
  unreserveTableAdmin(id){
    return this.http.post("http://localhost:8000/api/unreserveDeskAdmin",id);
  }
  delTables(id){
    return this.http.delete("http://localhost:8000/api/deskDel/" +id);
  }
  addTable(kapacitet){
    return this.http.post("http://localhost:8000/api/addDesk",kapacitet);
  }
  getSingleDish(id){
    return this.http.get("http://localhost:8000/api/food/"+id);

  }
  delMenuItem(id){
   return this.http.delete("http://localhost:8000/api/foodDel/" +id);
 }
 postMenuItem(info:any){
   return this.http.post("http://localhost:8000/api/addFood" ,info);
 }
 editMenuItem(id,editinfo:any){
   return this.http.post("http://localhost:8000/api/editFood/" +id ,editinfo);

 }


}
