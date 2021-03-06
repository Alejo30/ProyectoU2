import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlbumesRoutingModule } from './albumes-routing.module';
import { ListarComponent } from './listar/listar.component';
import { RegistrarComponent } from './registrar/registrar.component';
import {FormsModule} from '@angular/forms'
// Primeng
import {InputTextModule} from 'primeng/inputtext';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {MegaMenuModule} from 'primeng/megamenu';
import {TableModule} from 'primeng/table';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {CarouselModule} from 'primeng/carousel';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {DropdownModule} from 'primeng/dropdown';



@NgModule({
  declarations: [ListarComponent, RegistrarComponent],
  imports: [
    CommonModule,
    AlbumesRoutingModule,
    FormsModule,
    InputTextModule,
    CardModule,
    ButtonModule,
    MegaMenuModule,
    TableModule,
    ProgressSpinnerModule,
    CarouselModule,
    MessagesModule,
    MessageModule,
    DropdownModule
  ]
})
export class AlbumesModule { }
