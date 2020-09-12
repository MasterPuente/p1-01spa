import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../../services/productos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
buscarProducto(termino: string){
  console.log(termino);
  this.router.navigate(['/search', termino]);
}
}
