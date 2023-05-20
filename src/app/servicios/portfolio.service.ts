import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  url:string = "http://localhost:8080/personas/";

  constructor(private http:HttpClient) { }
  getPersona():Observable<any> {
    return this.http.get<any>(this.url + "lista");
  }
}