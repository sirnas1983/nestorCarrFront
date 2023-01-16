import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { JwtDto } from '../model/jwt-dto';
import { LoginUsuario } from '../model/login-usuario';
import { NuevoUsuario } from '../model/nuevo-usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  //authURL = 'http://localhost:8080/auth/';
  //authURL = environment.URL + 'auth/';
  authURL = environment.URL + 'login';
  //authURL = 'https://argprograma-backend.onrender.com/login';
  currentUser: BehaviorSubject<any>;


  constructor(private httpClient: HttpClient) {
    //this.currentUser = new BehaviorSubject('');
    this.currentUser = new BehaviorSubject<any>({});
  }

 public nuevo(nuevoUsuario: NuevoUsuario): Observable<any>{
   return this.httpClient.post<any>(this.authURL + 'nuevo', nuevoUsuario);
 }
/*
 public login(loginUsuario: LoginUsuario): Observable<JwtDto>{
   return this.httpClient.post<JwtDto>(this.authURL , loginUsuario)
 }
*/
login(usuario : LoginUsuario): Observable<any> {
  return this.httpClient.post(this.authURL, usuario)
  .pipe(map(data=>
    {
    this.currentUser.next(data);
    this.currentUser.subscribe(data => console.log(data));
    return data;
  }));
}


get usuarioAutenticado() {
  return this.currentUser.value;
}
}
