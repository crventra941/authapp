import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PriceComponent } from './components/price/price.component';
import { ProtectComponent } from './components/protect/protect.component';
import { AuthGuardService } from './auth/auth-guard.service';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'prices', component: PriceComponent},
  {
    path: 'protected',
    component: ProtectComponent, canActivate: [AuthGuardService]
  },
  {path: '**', pathMatch:'full', redirectTo: '/home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
