import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MegaMenuModule } from 'primeng/megamenu';
import { ChartModule } from 'primeng/chart';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { Grap1Component } from './components/grap1/grap1.component';
import { Grap2Component } from './components/grap2/grap2.component';
import { EstadisticasComponent } from './components/estadisticas/estadisticas.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ConfiguracionComponent } from './components/configuracion/configuracion.component';
import { UsersDataComponent } from './components/users-data/users-data.component';
import { SolicitudesComponent } from './solicitudes/solicitudes.component';
import { EditDataUsersComponent } from './edit-data-users/edit-data-users.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    NavBarComponent,
    Grap1Component,
    Grap2Component,
    EstadisticasComponent,
    UsuariosComponent,
    ConfiguracionComponent,
    UsersDataComponent,
    SolicitudesComponent,
    EditDataUsersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MegaMenuModule,
    ChartModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
