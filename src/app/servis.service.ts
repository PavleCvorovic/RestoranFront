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
  delMenuItem(id){
   return this.http.delete("http://localhost:8000/api/foodDel/" +id);
 }

}
