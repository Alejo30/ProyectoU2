import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtistasRoutingModule } from './artistas-routing.module';
import { RegistrarComponent } from './registrar/registrar.component';


@NgModule({
  declarations: [RegistrarComponent],
  imports: [
    CommonModule,
    ArtistasRoutingModule
  ]
})
export class ArtistasModule { }
