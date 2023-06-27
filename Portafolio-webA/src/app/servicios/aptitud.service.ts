import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AptitudService {
  urlApt:string = "https://backendmg-rnel.onrender.com/aptitud/";

  constructor(private http:HttpClient) { }
  getAptitud():Observable<any> {
    return this.http.get<any>(this.urlApt + "lista");
  }
}
