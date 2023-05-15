import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { TokenService } from './token.service';
import { IniciarSessionComponent } from '../components/iniciar-session/iniciar-session.component';
import { InterceptorService } from './interceptor.service';
import { HttpRequest } from '@angular/common/http';
import { LoginUsuario } from '../model/login-usuario';

@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {
  constructor(private authService: AuthService, private rutas : Router){ }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.authService.isLogged){

        return true;
      }
    else{
      this.rutas.navigate(['/iniciar-session']);
    console.log("entre aca")
      return false;
    }
  }
  
}
