import { Component, inject, signal } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
<<<<<<< Updated upstream
import { LoginData } from 'src/app/data/interfaces/User';
=======
import { UserLogin } from 'src/app/data/interfaces/UserLogin';
>>>>>>> Stashed changes
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
<<<<<<< Updated upstream
  authService = inject(AuthService)
  router = inject(Router);
  errorLogin = signal(false);
  cargando = signal(false);
=======
  constructor(
    private router: Router,
    private authService: AuthService
    ) { }

  public userModel: UserLogin = {
    nombreDeUsuario: '',
    contrasenia: ''
  }
>>>>>>> Stashed changes

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

  login(user: UserLogin) {
    console.log("login 1")
    this.authService.login(user);
  }


}
