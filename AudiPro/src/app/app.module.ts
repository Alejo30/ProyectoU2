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
import {ButtonModule} from 'primeng/button';
import {FileUploadModule} from 'primeng/fileupload';
import {MegaMenuModule} from 'primeng/megamenu';
import {TableModule} from 'primeng/table';
// Servicios
import { AudioproService } from './services/audiopro.service';
import { AudioControllerService } from './rest/api/audioController.service';
import { ListarAudiosComponent } from './components/listar-audios/listar-audios.component';
import { RegistrarAudiosComponent } from './components/registrar-audios/registrar-audios.component';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ListarAudiosComponent,
    RegistrarAudiosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputTextModule,
    CardModule,
    FormsModule,
    ButtonModule,
    HttpClientModule,
    FileUploadModule,
    MegaMenuModule,
    TableModule
  ],
  providers: [AudioproService, AudioControllerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
