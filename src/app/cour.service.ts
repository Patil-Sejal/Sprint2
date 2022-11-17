import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourService {

  constructor(private http:HttpClient) { }
  //apiurl="https://localhost:44307/api/Courier";

  GetCourierData(){
    return this.http.get('https://localhost:7284/api/Courier');
  }
  PostCourierData(courform:any){
    return this.http.post('https://localhost:7284/api/Courier',courform)
  }
  PutCourierData(courUform:any){
    return this.http.put('https://localhost:7284/api/Courier',courUform)
  }
  DeleteCourierData(cId:any){
    return this.http.delete('https://localhost:7284/api/Courier'+"/"+cId)
  }
  GetCourierById(cId:any){
    return this.http.get('https://localhost:7284/api/Courier'+"/"+cId)
  }

}
