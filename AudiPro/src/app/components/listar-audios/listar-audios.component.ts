import { Component, OnInit } from '@angular/core';
import { Audio } from '../../rest/model/audio'
import { AudioControllerService } from '../../rest/api/audioController.service';
@Component({
  selector: 'app-listar-audios',
  templateUrl: './listar-audios.component.html',
  styleUrls: ['./listar-audios.component.css']
})
export class ListarAudiosComponent implements OnInit {
  audios = new Array<Audio>();
  cols: any[];
  hola="https://audipro.s3.amazonaws.com";
  constructor(private audiSrv: AudioControllerService) { }

  ngOnInit(): void {
    this.listar();
  }



  listar(){

    this.audiSrv.getAllAudiosUsingGET().subscribe(
      data =>{
        this.audios = data;
        console.log(this.audios);
        
      }
    );

    this.cols = [
      {field: 'id', header: 'Audio ID'},
      {field: 'nombre', header: 'Nombre'},
      {field: 'autor', header: 'Autor'},
      {field: 'anio', header: 'Año'}
    ];
  }

}
