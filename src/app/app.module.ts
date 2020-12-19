import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {YouTubePlayerModule} from '@angular/youtube-player';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { Cuerpo2Component } from './cuerpo2/cuerpo2.component';
import { AdministraccionComponent } from './administraccion/administraccion.component';
import { Controlador2Component } from './controlador2/controlador2.component';
import { LoginComponent } from './login/login.component';
import { InscripcionComponent } from './inscripcion/inscripcion.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    Cuerpo2Component,
    AdministraccionComponent,
    Controlador2Component,
    LoginComponent,
    InscripcionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    YouTubePlayerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
