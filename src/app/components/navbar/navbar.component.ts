import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent {

  constructor( private auth: AuthService) { }

  login(){
    this.auth.login();
   this.auth.handleAuthentication();
  }

  logout(){
    this.auth.logout();
  }

}
