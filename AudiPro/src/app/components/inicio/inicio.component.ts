import { Component, OnInit } from '@angular/core';
import * as AWS from 'aws-sdk';
import { AudioproService } from '../../services/audiopro.service';
import { Audio } from 'aws-sdk/clients/alexaforbusiness';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  apiS3: any;
  nomCancion: any;
  paramsS3: any;
  archivo;
  audio: Audio;
  newaudio: any ={
    nombre: '',
    autor: '',
    anio: 0,
    genero: '',
    album: ''
  };
  constructor(private ausrv: AudioproService) {// Inicializar el proveedor de credenciales de Amazon Cognito
    AWS.config.region = 'us-east-1'; // Región
    AWS.config.credentials = new AWS.CognitoIdentityCredentials({
        IdentityPoolId: 'us-east-1:422a1383-0568-4072-9417-3bddb3b1852c',
    }); }

  ngOnInit(): void {
  }

  onChange(event){
    this.archivo = event.target.files;
  }

  guardarS3(){
    const file = this.archivo.item(0);
    console.log(file);
    console.log(this.nomCancion);
    this.apiS3 = new AWS.S3();
    this.paramsS3 = {
      Bucket: "audipro",
      Key: this.newaudio.nombre + '.mp3',
      Body: file
    };
    this.apiS3.upload(this.paramsS3, (err, data) => {
      if (err) console.log(err, err.stack);
      else{
        this.paramsS3 =null;
        alert("Registro guardado con exito")
      }
    });
    this.addAudio();
  }

  addAudio(){
    console.log(this.newaudio);
    this.ausrv.addAudio(this.newaudio).subscribe(
      data => {
        console.log('OK');
      }
    )
  }



}
