import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-modalnavbardash',
  templateUrl: './modalnavbardash.component.html',
  styleUrls: ['./modalnavbardash.component.scss']
})
export class ModalnavbardashComponent implements OnInit {
form: FormGroup;
isLogged = true;


  constructor( private tokenService: TokenService,
    private authService: AuthService,
    private router: Router) { }

    ngOnInit(): void {
      // TODO document why this method 'ngOnInit' is empty

    }

  close(): void {
    this.tokenService.logOut();
    this.router.navigate(['/index']);
    document.getElementById("cerrarSesion")?.click();
    document.getElementById("cerrarSesion1")?.click();
    //window.sessionStorage['tokenService'].close;
    //this.authService.logOut();
    this.tokenService.logOut;
    //this.authService.currentUser.next({});
   // window.location.reload();

    //window.sessionStorage.clear();
  }
  }


  //routerLink="/"
  /*limpiar(): void {
    this.form.reset();
  }
  onLogOut():void{

    this.tokenService.logOut();
    this.router.navigate(['/index']);
    window.location.reload();

  }
  */


