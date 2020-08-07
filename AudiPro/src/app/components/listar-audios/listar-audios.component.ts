import { Component, OnInit } from '@angular/core';
import { Audio } from '../../rest/model/audio';
import { AudioControllerService } from '../../rest/api/audioController.service';
@Component({
  selector: 'app-listar-audios',
  templateUrl: './listar-audios.component.html',
  styleUrls: ['./listar-audios.component.css'],
})
export class ListarAudiosComponent implements OnInit {
  audios = new Array<Audio>();
  cols: any[];
  allaudios: any ={
    nombre: '',
    autor: '',
    anio: 0,
    genero: '',
    album: ''
  };
  path="https://d26zvb8lwqy3ku.cloudfront.net";
  constructor(private audiSrv: AudioControllerService) { }

  ngOnInit(): void {
    this.listar();
  }

  listar(){

    this.audiSrv.getAllAudiosUsingGET().subscribe(
      data =>{
        this.audios = data;
      }
    );

    this.cols = [
      {field: 'nombre', header: 'Nombre'},
      {field: 'autor', header: 'Autor'},
      {field: 'anio', header: 'Año'}
    ];
  }

}
