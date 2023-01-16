import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {
  //accessToken: string = "";
  //username: string = "";

  constructor (private tokenService: TokenService,
    private route: Router,
    private authService: AuthService
    ){
     /* this.authService.currentUser.subscribe(data=>{
        this.accessToken = data.accessToken;
        this.username = data.user;
      });*/
    }


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


      /* if (this.accessToken !=='' && this.username !== '')
    {
      console.log("funciona");
      return true;
    }else{
      console.log("No funciona");
      this.route.navigate(['/index'])
      return false;
    }
      //return true;
  }*/
  let currentUser = this.authService.usuarioAutenticado;
    if (currentUser && currentUser.id){
      console.log("funciona");
      return true;
  } else{
    this.route.navigate(['/index']);     // ///////
    //this.rutas.navigate(['/login']);
    return true;
  }
}

}
