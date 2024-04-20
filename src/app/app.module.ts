import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { EmpresaListarComponent } from './components/empresa/empresa-listar/empresa-listar.component';
import { IndexComponent } from './components/index/index.component';
import { EmpresaRegistrarComponent } from './components/empresa/empresa-registrar/empresa-registrar.component';
import { ProductoHomeComponent } from './components/tienda/producto-home/producto-home.component';
import { ProductoHeaderComponent } from './components/tienda/producto-header/producto-header.component';
import { ProductoBoxComponent } from './components/tienda/producto-box/producto-box.component';
import { CarritoComponent } from './components/tienda/carrito/carrito.component';
import { IconocartComponent } from './components/navbar/iconocart/iconocart.component';
import { CentroreciclajeListComponent } from './components/centroreciclaje/centroreciclaje-list/centroreciclaje-list.component';
import { CentroreciclajeRegistrarComponent } from './components/centroreciclaje/centroreciclaje-registrar/centroreciclaje-registrar.component';
import { MaterialListComponent } from './components/material/material-list/material-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CheckoutComponent } from './components/tienda/checkout/checkout.component';
import { MaterialRegistrarComponent } from './components/material/material-registrar/material-registrar.component';
import { ProductoListComponent } from './components/producto/producto-list/producto-list.component';
import { ProductoRegistrarComponent } from './components/producto/producto-registrar/producto-registrar.component';
import { ReporteVentaComponent } from './components/reportes/reporte-venta/reporte-venta.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    EmpresaListarComponent,
    IndexComponent,
    EmpresaRegistrarComponent,
    ProductoHomeComponent,
    ProductoHeaderComponent,
    ProductoBoxComponent,
    CarritoComponent,
    IconocartComponent,
    CentroreciclajeListComponent,
    CentroreciclajeRegistrarComponent,
    MaterialListComponent,
    CheckoutComponent,
    MaterialRegistrarComponent,
    ProductoListComponent,
    ProductoRegistrarComponent,
    ReporteVentaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
