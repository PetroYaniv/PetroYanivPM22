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

  SendDataPOST(mess:any)
  {

    return this.http.post('http://localhost:8080',mess, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });


  }

  GetServerData(){
    return this.http.get('http://localhost:8080');
  }

  constructor(private http: HttpClient) { }
}
