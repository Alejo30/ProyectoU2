import { Component, OnInit } from '@angular/core';
import { Audio } from '../../rest/model/audio';
import { AudioControllerService } from '../../rest/api/audioController.service';
@Component({
  selector: 'app-listar-audios',
  templateUrl: './listar-audios.component.html',
  styleUrls: ['./listar-audios.component.css'],
  styles: [`
         ui-carousel .ui-carousel-content .ui-carousel-item .car-details > .p-grid {
            border: 1px solid #b3c2ca;
            border-radius: 3px;
            margin: 0.3em;
            text-align: center;
            padding: 2em 0 2.25em 0;
        }
       ui-carousel .ui-carousel-content .ui-carousel-item .car-data .car-title {
            font-weight: 700;
            font-size: 20px;
            margin-top: 24px;
        }
        .carousel-demo .ui-carousel .ui-carousel-content .ui-carousel-item .car-data .car-subtitle {
            margin: 0.25em 0 2em 0;
        }
        .carousel-demo .ui-carousel .ui-carousel-content .ui-carousel-item .car-data button {
            margin-left: 0.5em;
        }
        .carousel-demo .ui-carousel .ui-carousel-content .ui-carousel-item .car-data button:first-child {
            margin-left: 0;
        }
        .carousel-demo .ui-carousel.custom-carousel .ui-carousel-dot-icon {
            width: 16px !important;
            height: 16px !important;
            border-radius: 50%;
        }
        .carousel-demo .ui-carousel.ui-carousel-horizontal .ui-carousel-content .ui-carousel-item.ui-carousel-item-start .car-details > .p-grid {
            margin-left: 0.6em;
        }
        .carousel-demo .ui-carousel.ui-carousel-horizontal .ui-carousel-content .ui-carousel-item.ui-carousel-item-end .car-details > .p-grid {
            margin-right: 0.6em;
        }
    `],
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
  hola="https://d1jjqsu8gmvqno.cloudfront.net";
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
