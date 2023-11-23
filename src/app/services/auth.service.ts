<<<<<<< Updated upstream
import { Injectable, Signal, WritableSignal, inject, signal } from '@angular/core';
import { API } from '../constants/api';
import { LoginData, RegisterData } from '../data/interfaces/User';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(){
    this.token.set(localStorage.getItem('token'));
  }
  router = inject(Router);
  token:WritableSignal<string | null> = signal(null);

  async login(loginData:LoginData){
    try{
      const res = await fetch(API+"authentication/authenticate", {
        method: "POST",
        headers: {
          "Content-Type":"application/json"
        },
        body: JSON.stringify(loginData)
      })
      console.log(loginData)
      console.log(res.ok)
      if(!res.ok) return false;
      const tokenRecibido = await res.text()
      console.log("LOGUEANDO",tokenRecibido)
      localStorage.setItem("token",tokenRecibido);
      this.token.set(tokenRecibido);
      return true;
    }
    catch{
      return false
    }
  }

  async register(registerData: RegisterData){
    const res = await fetch(API+"User", {
      method: "POST",
      body: JSON.stringify(registerData)
    });
    console.log("REGISTRANDO",res)
    return res
  }

  logOut(){
    this.token.set(null);
    localStorage.removeItem("token");
    this.router.navigate(["/"]);
  }
}
=======
import { Injectable, booleanAttribute } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserRegister } from '../data/interfaces/UserRegister';
import { Observable } from 'rxjs';
import { UserLogin } from '../data/interfaces/UserLogin';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private url = 'https://localhost:65214';
  userToken: string = 'jwtToken';

  constructor(private http: HttpClient) {}

  public register(user: UserRegister): Observable<boolean> {
    console.log(user)
    return this.http.post<boolean>(`${this.url}/register`, user);
  }

  async login(user: UserLogin): Promise<void> {
    console.log(user)
    const res = await fetch(`${this.url}/api/authentication/authenticate`, {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    this.userToken = await res.text();
    console.log(this.userToken)
    this.saveToken(this.userToken);
}

  saveToken(token: string): void {
    localStorage.setItem('token', token);
  }

  logout(): void {
    localStorage.removeItem('token');
  }

}
>>>>>>> Stashed changes
