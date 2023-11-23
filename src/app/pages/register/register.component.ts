<<<<<<< Updated upstream
import { Component, WritableSignal, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterData } from 'src/app/data/interfaces/User';
import { AuthService } from 'src/app/services/auth.service';

=======
import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UserRegister } from 'src/app/data/interfaces/UserRegister';
>>>>>>> Stashed changes
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  authService = inject(AuthService)
  router = inject(Router);
  errorRegister: WritableSignal<boolean> = signal(false)
  cargando = signal(false);

<<<<<<< Updated upstream
  registerData: RegisterData = {
    nombreDeUsuario: "",
    nombre: "",
    apellido: "",
    contrasenia: "",
  }

  async register(){
    this.errorRegister.set(false);
    this.cargando.set(true);
    try{
      const res = await this.authService.register(this.registerData);
      if(res.ok) {
        this.router.navigate(["/login"])
      }
      else {
        this.errorRegister.set(true);
      }
    } catch(err) {
      console.warn('Error registrando', err)
    }
    this.cargando.set(false);
=======
  constructor(private authService: AuthService) { }

  public userModel: UserRegister = {
    name: '',
    surname: '',
    password: '',
    username: ''
  }

  public register(user: UserRegister): void {
    console.log("llamada")
    this.authService.register(user)

>>>>>>> Stashed changes
  }
}
