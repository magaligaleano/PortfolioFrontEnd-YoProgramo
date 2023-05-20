import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUsuario } from 'src/app/model/login-usuario';
import { AuthService } from 'src/app/servicios/auth.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-iniciar-session',
  templateUrl: './iniciar-session.component.html',
  styleUrls: ['./iniciar-session.component.css']
})
export class IniciarSessionComponent {
  
    loginUsuario!: LoginUsuario;
    nombreUsuario!: string;
    password! : string;
    
    
    constructor( private authService: AuthService){ }
    
    
  /*  ngOnInit():void {
    if(this.tokenService.getToken()) {
    this.isLogged = true;
    this.isLogginFail = false;
    this.roles = this.tokenService.getAuthorities();
    }
    }*/
    onLogin():void {
      this.loginUsuario = new LoginUsuario(this.nombreUsuario, this.password);
      this.authService.login(this.loginUsuario);
      
    } 
  } 
    
  /*form:FormGroup;
  constructor(private formBuilder:FormBuilder, private autenticacionService:AutenticacionService, private ruta:Router) { 
    this.form = this.formBuilder.group(
      {
        email:['', [Validators.required, Validators.email]],
        password:['',[Validators.required, Validators.minLength(8)]],
        deviceInfo:this.formBuilder.group({
          deviceId: ["17867868768"],
          deviceType: ["DEVICE_TYPE_ANDROID"],
          notificationToken:["67657575eececc34"]
        })
      }
    )
  }

  ngOnInit(): void {   
  }

  get Email() {
    return this.form.get('email');
  }
  get Password() {
    return this.form.get('password');
  }
  onEnviar(event: Event) {
      event.preventDefault;
      this.autenticacionService.IniciarSesion(this.loginUsuario).subscribe(data=> {
        console.log("DATA:" + JSON.stringify(data));
        this.router.navigate(['/portfolio']);
      })
    }
  }
*/
