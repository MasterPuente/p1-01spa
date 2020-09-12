import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html'
})
export class ProductosComponent implements OnInit {
productos: any[] = [];
  constructor(private productosService: ProductosService, private router: Router) { }

  ngOnInit(): void {
    this.productos = this.productosService.getProductos();
    console.log(this.productos);
  }

verProducto(i: number){
 this.router.navigate(['/producto', i]);
}

}

interface Producto{
  nombre:string;
  bio:string;
  img:string;
  aparicion:string;
  casa:string;
}