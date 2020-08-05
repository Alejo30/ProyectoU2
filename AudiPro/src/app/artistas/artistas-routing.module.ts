import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrarComponent } from '../artistas/registrar/registrar.component';
import { ListarComponent } from '../artistas/listar/listar.component';

const routes: Routes = [
  {path: 'add', component: RegistrarComponent},
  {path: 'list', component: ListarComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArtistasRoutingModule { }
