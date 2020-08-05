export * from './albumController.service';
import { AlbumControllerService } from './albumController.service';
export * from './artistaController.service';
import { ArtistaControllerService } from './artistaController.service';
export * from './audioController.service';
import { AudioControllerService } from './audioController.service';
export const APIS = [AlbumControllerService, ArtistaControllerService, AudioControllerService];
