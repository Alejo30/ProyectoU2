import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlbumesRoutingModule } from './albumes-routing.module';
import { ListarComponent } from './listar/listar.component';
import { RegistrarComponent } from './registrar/registrar.component';


@NgModule({
  declarations: [ListarComponent, RegistrarComponent],
  imports: [
    CommonModule,
    AlbumesRoutingModule
  ]
})
export class AlbumesModule { }
