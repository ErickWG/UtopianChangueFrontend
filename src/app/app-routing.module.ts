import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { GuardService } from './services/guard.service';
import { RegisterComponent } from './components/register/register.component';
import { IndexComponent } from './components/index/index.component';
import { ProductoHomeComponent } from './components/tienda/producto-home/producto-home.component';
import { ProductoHeaderComponent } from './components/tienda/producto-header/producto-header.component';
import { CarritoComponent } from './components/tienda/carrito/carrito.component';
import { InfoReciclajeComponent } from './components/info-reciclaje/info-reciclaje.component';
import { ComoReciclarComponent } from './components/como-reciclar/como-reciclar.component';
//agregando el centro de empresa
import { EmpresaListarComponent } from './components/empresa/empresa-listar/empresa-listar.component';
import { EmpresaRegistrarComponent } from './components/empresa/empresa-registrar/empresa-registrar.component';
//agregando el centro de reciclaje
import { CentroreciclajeListComponent } from './components/centroreciclaje/centroreciclaje-list/centroreciclaje-list.component';
import { CentroreciclajeRegistrarComponent } from './components/centroreciclaje/centroreciclaje-registrar/centroreciclaje-registrar.component';
//agregando el centro de material
import { MaterialListComponent } from './components/material/material-list/material-list.component';
import { CheckoutComponent } from './components/tienda/checkout/checkout.component';
import { MaterialRegistrarComponent } from './components/material/material-registrar/material-registrar.component';
import { ProductoListComponent } from './components/producto/producto-list/producto-list.component';
import { ProductoRegistrarComponent } from './components/producto/producto-registrar/producto-registrar.component';
import { ReporteVentaComponent } from './components/reportes/reporte-venta/reporte-venta.component';

//agregando el centro de 
const routes: Routes = [
  {path: 'nav', component: NavbarComponent},    /* canActivate: [GuardService]  sirve para meterle seguridad a ciertas rutas y no entren si no estas autenticado*/
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'index', component:IndexComponent},
  {path: 'home-producto', component:ProductoHomeComponent},
  {path: 'header-producto', component:ProductoHeaderComponent},
  {path: 'carrito', component:CarritoComponent},
  {path: 'infoReciclaje', component:InfoReciclajeComponent},
  {path: 'comoReciclar', component:ComoReciclarComponent},
  //agregando el centro de empresa
  {path: 'empresalist', component:EmpresaListarComponent,canActivate: [GuardService]},
  {path: 'empresaadd', component:EmpresaRegistrarComponent,canActivate: [GuardService]},
  {path: 'editempresa/:empresa', component:EmpresaRegistrarComponent,canActivate: [GuardService]},

  //agregando el centro de reciclaje
  {path: 'centrolist', component:CentroreciclajeListComponent,canActivate: [GuardService]},
  {path: 'addcentro', component:CentroreciclajeRegistrarComponent,canActivate: [GuardService]},
  //agregando el centro de material
  {path: 'materiallist', component:MaterialListComponent,canActivate: [GuardService]},
  {path: 'materialadd', component:MaterialRegistrarComponent,canActivate: [GuardService]},
  //checkout
  {path: 'checkoutt', component:CheckoutComponent,canActivate: [GuardService]},
  //producto
  {path: 'productolist', component:ProductoListComponent,canActivate: [GuardService]},
  {path: 'productoadd', component:ProductoRegistrarComponent,canActivate: [GuardService]}, 
  //REPORTE
  {path:'reporteventa',component:ReporteVentaComponent,canActivate: [GuardService]}


];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
