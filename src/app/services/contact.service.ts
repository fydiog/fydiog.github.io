import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private api = `https://formspree.io/f/mbjwzgyg`

  constructor(private http:HttpClient) { }

  postEmail(input:any):Observable<any>{
    return this.http.post(this.api, input)
  }
}
