import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  url:string = "https://backendmg-rnel.onrender.com/personas/";

  constructor(private http:HttpClient) { }
  getPersona():Observable<any> {
    return this.http.get<any>(this.url + "lista");
  }
}