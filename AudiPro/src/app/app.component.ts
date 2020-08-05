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
        label: 'Agregar Audios', icon: 'pi pi-fw pi-volume-up', routerLink: '/'
      },
      {
        label: 'Listar Audios', icon: 'pi pi-fw pi-volume-up', routerLink: 'listar'
      }
    ];
}
}
