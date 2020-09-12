import { ElementSchemaRegistry } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductosService } from '../../services/productos.service';


@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {

productos: any[] = [];
termino: string;
  constructor(
    private activatedRoute: ActivatedRoute,
    private productosService: ProductosService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.termino = params['term'];
      this.productos = this.productosService.buscarProducto(params['term']);
    });
  }
  verProducto(i: number){
    this.router.navigate(['/producto', i]);
   }
}
