import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrarComponent } from '../audios/registrar/registrar.component';
import { ListarComponent } from '../audios/listar/listar.component';

const routes: Routes = [
  {path: 'add', component: RegistrarComponent},
  {path: 'list', component: ListarComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AudiosRoutingModule { }
