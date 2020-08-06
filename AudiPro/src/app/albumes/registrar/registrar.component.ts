import { Component, OnInit } from '@angular/core';
import {Message, SelectItem} from 'primeng/api';
import * as AWS from 'aws-sdk';
import { AlbumControllerService } from '../../rest/api/albumController.service';
import { Artista } from 'src/app/rest/model/artista';
import { ArtistaControllerService } from 'src/app/rest/api/artistaController.service';
@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {
  artistas = new Array <Artista> ();
  artista: Artista[];
  archivo;
  apiS3: any;
  paramsS3: any;
  newalbum: any ={
    nombre: '',
    artista: '',
    anio: 0
  };

  msgs: Message[] = [];
  cargando: boolean;


  constructor(private albSrv: AlbumControllerService, private artSvr: ArtistaControllerService) {
    AWS.config.region = 'us-east-1'; // Región
    AWS.config.credentials = new AWS.CognitoIdentityCredentials({
        IdentityPoolId: 'us-east-1:422a1383-0568-4072-9417-3bddb3b1852c',
    });
   }

  ngOnInit(): void {
    this.listarArtistas();
  }

  guardarS3() {
    this.cargando = false
    const file = this.archivo.item(0);
    console.log(file);
    this.apiS3 = new AWS.S3();
    this.paramsS3 = {
        Bucket: "audipro/albums",
        Key: this.newalbum.nombre + '.jpg',
        Body: file
    };
    this.apiS3.upload(this.paramsS3, (err, data) => {
        if (err) console.log(err, err.stack);
        else {
            this.paramsS3 = null;
            alert("Registro guardado con exito")
            this.show();
            this.cargando = true

        }
    });
    this.addAlbum();
}


  addAlbum(){
    this.albSrv.createAlbumUsingPOST(this.newalbum).subscribe(
      data => {
        console.log('OK');
      }
    )
  }

  listarArtistas() {
    this.artSvr.getAllArtistasUsingGET().subscribe(
        data => {
            this.artistas = data;
            console.log(this.artistas);
        }
    );
}

onChange(event) {
  this.archivo = event.target.files;
}


  show() {
    this.msgs.push({severity:'info', summary:'Info Message', detail:'PrimeNG rocks'});
}

hide() {
    this.msgs = [];
}

}
