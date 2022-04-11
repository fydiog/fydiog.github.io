import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalJSONService {

  constructor(private http:HttpClient) { }

  getLocalJSON(fileName:String):Observable<any>{
    return this.http.get(`../../assets/json/${fileName}.json`)
  }
}
