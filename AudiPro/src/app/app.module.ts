import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http'
import { ListarAudiosComponent } from './components/listar-audios/listar-audios.component';
import { RegistrarAudiosComponent } from './components/registrar-audios/registrar-audios.component';
// Primeng
import {InputTextModule} from 'primeng/inputtext';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {FileUploadModule} from 'primeng/fileupload';
import {MegaMenuModule} from 'primeng/megamenu';
import {TableModule} from 'primeng/table';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {CarouselModule} from 'primeng/carousel';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {DropdownModule} from 'primeng/dropdown';
import {ToastModule} from 'primeng/toast';
import {ProgressBarModule} from 'primeng/progressbar';
// Servicios
import { AudioproService } from './services/audiopro.service';
import { AudioControllerService } from './rest/api/audioController.service';
import { HomeComponent } from './components/home/home.component';
import { ArtistaControllerService } from './rest/api/artistaController.service';
import { AlbumControllerService } from './rest/api/albumController.service';


@NgModule({
  declarations: [
    AppComponent,
    ListarAudiosComponent,
    RegistrarAudiosComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    InputTextModule,
    CardModule,
    FormsModule,
    ButtonModule,
    HttpClientModule,
    FileUploadModule,
    MegaMenuModule,
    TableModule,
    CarouselModule,
    ProgressSpinnerModule,
    MessagesModule,
    MessageModule,
    DropdownModule,
    ProgressBarModule,
    ToastModule
  ],
  providers: [AudioproService, AudioControllerService, ArtistaControllerService, AlbumControllerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
