import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';

import {FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http'

// Primeng

import {InputTextModule} from 'primeng/inputtext';
import {CardModule} from 'primeng/card';
// Servicios
import { AudioproService } from './services/audiopro.service';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputTextModule,
    CardModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AudioproService],
  bootstrap: [AppComponent]
})
export class AppModule { }
