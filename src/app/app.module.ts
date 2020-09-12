import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { APP_ROUTING } from './app.routes';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { DesignsComponent } from './components/designs/designs.component';
import { ProductosComponent } from './components/productos/productos.component';

import { ProductosService} from './services/productos.service';
import { ProductoComponent } from './components/producto/producto.component';

import {FormsModule} from '@angular/forms';
import { BuscadorComponent } from './components/buscador/buscador.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    DesignsComponent,
    ProductosComponent,
    ProductoComponent,
    BuscadorComponent
  ],
  imports: [
    BrowserModule, APP_ROUTING, FormsModule
  ],
  providers: [ProductosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
