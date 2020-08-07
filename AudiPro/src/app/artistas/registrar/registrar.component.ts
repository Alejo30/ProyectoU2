import { Component, OnInit } from '@angular/core';
import { ArtistaControllerService } from '../../rest/api/artistaController.service';
import * as AWS from 'aws-sdk';
@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {
  apiS3: any;
  archivo;
  paramsS3: any;
  newartista: any ={
    nombre: ''
  };

  cargando: boolean;

  constructor(private artSrv: ArtistaControllerService) {
    AWS.config.region = 'us-east-1'; // Región
    AWS.config.credentials = new AWS.CognitoIdentityCredentials({
        IdentityPoolId: 'us-east-1:422a1383-0568-4072-9417-3bddb3b1852c',
    });
   }

  ngOnInit(): void {
  }

  onChange(event) {
    this.archivo = event.target.files;
}
  
  guardarS3() {
    this.cargando = false
    const file = this.archivo.item(0);
    console.log(file);
    this.apiS3 = new AWS.S3();
    this.paramsS3 = {
        Bucket: "audipro/artistas",
        Key: this.newartista.nombre + '.jpg',
        Body: file
    };
    this.apiS3.upload(this.paramsS3, (err, data) => {
        if (err) console.log(err, err.stack);
        else {
            this.paramsS3 = null;
            alert("Registro guardado con exito")
            this.cargando = true
        }
    });
    this.addArtista();
}


  addArtista(){
    this.artSrv.createArtistaUsingPOST(this.newartista).subscribe(
      data => {
      }
    )
  }


}
