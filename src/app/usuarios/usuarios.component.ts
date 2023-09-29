import { Component } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent {
  items: any[]=[
    {name:"Solicitudes", icon:"book", link:"solicitudes"},
    {name:"Editar", icon:"pencil", link:"editar"},
    {name:"Esperando", icon:"clock",link:"solicitudes"}
  ];

}
