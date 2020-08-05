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
  },
  {
    path: 'albums',
    loadChildren: () => import('./albumes/albumes.module').then(m => m.AlbumesModule)
  },
  {
    path: 'artistas',
    loadChildren: () => import('./artistas/artistas.module').then(m => m.ArtistasModule)
  },  
  {
    path: 'audios',
    loadChildren: () => import('./audios/audios.module').then(m => m.AudiosModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
