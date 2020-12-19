import { LoginComponent } from './login/login.component';
import { AdministraccionComponent } from './administraccion/administraccion.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Cuerpo2Component } from './cuerpo2/cuerpo2.component';
import { InscripcionComponent } from './inscripcion/inscripcion.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'cuerpo2', component: Cuerpo2Component},
  {path: 'administraccion', component: AdministraccionComponent},
  {path: 'login', component: LoginComponent},
  {path: 'Inscripcion', component: InscripcionComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



  