import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'authapp';

  constructor(public auth: AuthService){
      auth.handleAuthentication();
  }

  ngOnInit(){
    if(this.auth.isAuthenticated()){
      this.auth.renewTokens();
    }
  }
}
