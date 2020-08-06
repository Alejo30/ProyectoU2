import { Component } from '@angular/core';
import {MegaMenuItem} from 'primeng/api';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AudiPro';

  items: MegaMenuItem[];

  ngOnInit() {
    this.items = [
      {
        label: 'Inicio', icon: 'pi pi-fw pi-volume-up', routerLink: '/'
      },
      {
        label: 'Canciones', icon: 'pi pi-fw pi-volume-up',
        items: [
          [
              {
                  items: [{label: 'Registrar Canción', routerLink: '/'}, {label: 'Listar Canciones', routerLink:'listar'}]
              },
          ]
      ]
      },
      {
        label: 'Álbums', icon: 'pi pi-fw pi-id-card',
        items: [
          [
              {
                  items: [{label: 'Registrar Álbums', routerLink: 'albums/add'}, {label: 'Listar Álbums', routerLink:'albums/list'}]
              },
          ]
      ]
      },
      {
        label: 'Artistas', icon: 'pi pi-fw pi-users',
        items: [
          [
              {
                  items: [{label: 'Registrar Artistas', routerLink: 'artistas/add'}, {label: 'Listar Artistas', routerLink:'artistas/list'}]
              },
          ]
      ]
      }
    ];
}
}
