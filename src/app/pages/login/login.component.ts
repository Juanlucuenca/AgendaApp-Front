import { Component, inject, signal } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { LoginData } from 'src/app/data/interfaces/User';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  authService = inject(AuthService)
  router = inject(Router);
  errorLogin = signal(false);
  cargando = signal(false);

  loginData: LoginData= {
    userName:"",
    password: ""
  }
  constructor() { }

  login(){
    console.log("ejecutado")
    this.errorLogin.set(false);
    this.cargando.set(true);
    this.authService.login(this.loginData).then(res => {
      console.log(res)
      if(res) {
        this.router.navigate(["/contacts"]);
      }

      else {
        this.errorLogin.set(true)
        console.log("error")
      };
      this.cargando.set(false);
    });
  }
}
