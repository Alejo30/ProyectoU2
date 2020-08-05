import { Component, OnInit } from '@angular/core';
import {Message} from 'primeng/api';
import { ArtistaControllerService } from '../../rest/api/artistaController.service';
@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {

  newartista: any ={
    nombre: ''
  };

  msgs: Message[] = [];
  cargando: boolean;

  constructor(private artSrv: ArtistaControllerService) { }

  ngOnInit(): void {
  }

  addArtista(){
    this.artSrv.createArtistaUsingPOST(this.newartista).subscribe(
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
