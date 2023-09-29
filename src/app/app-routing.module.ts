import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EstadisticasComponent } from './components/estadisticas/estadisticas.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ConfiguracionComponent } from './components/configuracion/configuracion.component';
import { SolicitudesComponent } from './solicitudes/solicitudes.component';
import { EditDataUsersComponent } from './edit-data-users/edit-data-users.component';

const routes: Routes = [
  {
    path:'',component: LoginComponent
  },
  {
    path:'dashboard', component: DashboardComponent,
    children:[
      {
        path: '', component: EstadisticasComponent
      },
      {
        path: 'estadisticas', component: EstadisticasComponent
      },
      {
        path: 'usuarios', component: UsuariosComponent,
        children:[
          {
            path:'solicitudes', component: SolicitudesComponent
          },
          {
            path:'editar', component: EditDataUsersComponent
          }
        ]
      },
      {
        path: 'configuracion', component: ConfiguracionComponent
      }
    ]
  },
  {
    path:'**',redirectTo:''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
