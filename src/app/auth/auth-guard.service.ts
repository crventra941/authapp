import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, 
  CanActivate, RouterStateSnapshot } from '@angular/router';
import { AuthService} from '../services/auth.service'
        

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private _auth: AuthService) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log(next)
    if(this._auth.isAuthenticated()){
      console.log('paso el Guard');
      return true;
    }else{
      console.error('Bloqueo por Guard');
      return false;
    }
  }
}
