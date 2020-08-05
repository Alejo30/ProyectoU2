import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrarAudiosComponent } from './components/registrar-audios/registrar-audios.component';
import { ListarAudiosComponent } from './components/listar-audios/listar-audios.component';


const routes: Routes = [
  {
    path: '',
    component: RegistrarAudiosComponent
  },
  {
    path: 'listar',
    component: ListarAudiosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
