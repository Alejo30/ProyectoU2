import { Component, OnInit } from '@angular/core';
import { Album } from 'src/app/rest/model/album';
import { AlbumControllerService } from 'src/app/rest/api/albumController.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  albums = new Array<Album>();
  cols: any[];
  path="https://d26zvb8lwqy3ku.cloudfront.net";
  constructor(private albSrv: AlbumControllerService) { }

  ngOnInit(): void {
    this.listar()
  }

  listar(){
  
    this.albSrv.getAllAlbumUsingGET().subscribe(
      data =>{
        this.albums =data;
      }
    );

    this.cols = [
      {field: 'nombre', header: 'Nombre'},
      {field: 'artista', header: 'Artista'},
      {field: 'anio', header: 'Año'},
    ];
  }
}
