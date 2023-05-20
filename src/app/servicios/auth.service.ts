import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NuevoUsuario } from '../model/nuevo-usuario';
import { BehaviorSubject, Observable } from 'rxjs';
import { LoginUsuario } from '../model/login-usuario';
import { JwtDto } from '../model/jwt-dto';
import { TokenService } from './token.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authURL = 'http://localhost:8080/auth/';
  isLogged = false;
  isLogginFail = false;
  loginUsuario!: LoginUsuario;
  nombreUsuario!: string;
  password! : string;
  roles: string[] = [];
  errMsj!:string;

  
  constructor(private httpClient: HttpClient, private tokenService : TokenService, private rutas : Router) { }


  public register(nuevoUsuario: NuevoUsuario): Observable <any> {
    return this.httpClient.post<any>(this.authURL + 'register', nuevoUsuario);

  }
  public login(loginUsuario: LoginUsuario): void {
    this.httpClient.post<JwtDto>(this.authURL + 'login', loginUsuario).subscribe(data =>{
      this.isLogged = true;
      this.isLogginFail = false;
      this.tokenService.setToken(data.token);
      this.tokenService.setUserName(data.nombreUsuario);
      this.tokenService.setAuthorities(data.authorities);
      this.roles = data.authorities;
      this.rutas.navigate(['/portfolio'])
      }, err => {
      this.isLogged = false;
      this.isLogginFail = true;
      this.errMsj = err.error.mensaje;
      console.log(this.errMsj);
      })
  }


}

