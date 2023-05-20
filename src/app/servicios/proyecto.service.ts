import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  urlPro:string = "http://localhost:8080/proyecto/";

  constructor(private http:HttpClient) { }
  getProyecto():Observable<any> {
    return this.http.get<any>(this.urlPro + "lista");
  }
}
