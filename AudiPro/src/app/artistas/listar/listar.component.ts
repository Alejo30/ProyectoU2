import { Component, OnInit } from '@angular/core';
import { ArtistaControllerService } from '../../rest/api/artistaController.service';
import { Artista } from 'src/app/rest/model/artista';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  artistas = new Array<Artista>();
  cols: any[]; 
  path="https://d26zvb8lwqy3ku.cloudfront.net";
  constructor(private artSvr: ArtistaControllerService) { }

  ngOnInit(): void {
    this.listar();
  }
  

  listar(){
  
    this.artSvr.getAllArtistasUsingGET().subscribe(
      data => {
        this.artistas = data;
      }
    )

    this.cols = [
      {field: 'nombre', header: 'Nombre'}
    ];
  }
}
