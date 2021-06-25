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
