import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  url:string = "urlApi";
  constructor(private http:HttpClient) { }
  obtenerDatos():Observable<any> {
    //(this.url+"persona");
    return this.http.get('./assets/data/data.json');
  }
}