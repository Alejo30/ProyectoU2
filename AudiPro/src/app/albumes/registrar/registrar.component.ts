import { Component, OnInit } from '@angular/core';
import {Message, SelectItem} from 'primeng/api';
import { AlbumControllerService } from '../../rest/api/albumController.service';
import { Artista } from 'src/app/rest/model/artista';
@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {
  
  artista: SelectItem[];
  selectedArtista: Artista;
  newalbum: any ={
    nombre: '',
    artista: '',
    anio: 0
  };

  msgs: Message[] = [];
  cargando: boolean;


  constructor(private albSrv: AlbumControllerService) { }

  ngOnInit(): void {
  }

  addAlbum(){
    this.albSrv.createAlbumUsingPOST(this.newalbum).subscribe(
      data => {
        console.log('OK');
      }
    )
  }
    
  show() {
    this.msgs.push({severity:'info', summary:'Info Message', detail:'PrimeNG rocks'});
}

hide() {
    this.msgs = [];
}

}
