import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {
  urlCont:string = "http://localhost:8080/contacto/";

  constructor(private http:HttpClient) { }
  getContacto():Observable<any> {
    return this.http.get<any>(this.urlCont + "lista");
  }
}
