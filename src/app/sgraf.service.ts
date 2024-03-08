import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {HttpClientModule} from "@angular/common/http";
import {NgFor} from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class SgrafService {
  ctext(arg:any){
  console.log(arg);
}
  GetDataJson()
  {
    return this.http.get('../../assets/data.json');
  }
  constructor(private http: HttpClient) { }
}
