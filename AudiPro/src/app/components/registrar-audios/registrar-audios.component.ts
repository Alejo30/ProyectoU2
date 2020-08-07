import { Component, OnInit } from '@angular/core';
import * as AWS from 'aws-sdk';
import { ArtistaControllerService } from '../../rest/api/artistaController.service';
import { AudioControllerService } from '../../rest/api/audioController.service';
import { AlbumControllerService } from '../../rest/api/albumController.service';
import { Artista } from '../../rest/model/artista';
import { Album } from '../../rest/model/album';
@Component({
    selector: 'app-registrar-audios',
    templateUrl: './registrar-audios.component.html',
    styleUrls: ['./registrar-audios.component.css']
})
export class RegistrarAudiosComponent implements OnInit {
    artistas = new Array <Artista> ();
    artista: Artista[];
    albums = new Array <Album> ();
    album: Album[];
    apiS3: any;
    cargando: boolean;
    nomCancion: any;
    paramsS3: any;
    archivo;
    newaudio: any = {
        nombre: '',
        autor: '',
        anio: 0,
        genero: '',
        album: ''
    };
    constructor(private audiSrv: AudioControllerService, private artSvr: ArtistaControllerService, private albSrv: AlbumControllerService) {
        AWS.config.region = 'us-east-1'; // Región
        AWS.config.credentials = new AWS.CognitoIdentityCredentials({
            IdentityPoolId: 'us-east-1:422a1383-0568-4072-9417-3bddb3b1852c',
        });
    }

    ngOnInit(): void {
        this.listarArtistas();
        this.listarAlbums();
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
            Bucket: "audipro/canciones",
            Key: this.newaudio.nombre + '.mp3',
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
        this.addAudio();
    }

    addAudio() {
        this.audiSrv.createAudioUsingPOST(this.newaudio).subscribe(
            data => {}
        )
    }

    listarArtistas() {
        this.artSvr.getAllArtistasUsingGET().subscribe(
            data => {
                this.artistas = data;
                console.log(this.artistas);
            }
        )
    }

    listarAlbums() {
        this.albSrv.getAllAlbumUsingGET().subscribe(
            data => {
                this.albums = data;
                console.log(this.albums);
            }
        )
    }


}