import {Injectable} from '@angular/core';

@Injectable()
export class ProductosService {
    private productos: Producto[] = [
            {
              nombre: "Arduino UNO",
              bio: "Microcontrolador Mas conocido de la familia arduino, ",
              img: "assets/img/arduino.png",
              aparicion: "$230",
              casa:"Microncontroladores"
            },
            {
              nombre: "Seguidor de linea",
              bio: "Robot producido por Nomada Industries, prozimamente Master..",
              img: "assets/img/kit.jpg",
              aparicion: "$3500",
              casa:"Robots"
            },
            {
              nombre: "Resistencia 10k",
              bio: "Al haber perdido la vista, los cuatro sentidos restantes de Daredevil fueron aumentados por la radiación a niveles superhumanos, en el accidente que tuvo cuando era niño. A pesar de su ceguera, puede \"ver\" a través de un \"sexto sentido\" que le sirve como un radar similar al de los murciélagos.",
              img: "assets/img/resistencia1.jpg",
              aparicion: "$0,50",
              casa: "Resistencias"
            },
            {
              nombre: "Motores pololu 10:1",
              bio: "Su principal poder es su capacidad de aumentar su fuerza hasta niveles prácticamente ilimitados a la vez que aumenta su furia. Dependiendo de qué personalidad de Hulk esté al mando en ese momento (el Hulk Banner es el más débil, pero lo compensa con su inteligencia).",
              img: "assets/img/motorespololu.jpg",
              aparicion: "$120",
              casa:"Motores"
            },
          ];

    constructor(){
        console.log('servicio listo xd');
    }
    getProductos(): Producto[]{
        return this.productos;
    }
    getProducto (index: string){
      return this.productos[index];
    }

    buscarProducto(termino: string): Producto[]{
      let productosArr: Producto[] = [];
      termino = termino.toLowerCase();
      for (let i = 0; i < this.productos.length; i++){
        let producto = this.productos[i];
        let nombre = producto.nombre.toLowerCase();
        if (nombre.indexOf(termino) >= 0 ){
          producto.idx = i;
          productosArr.push(producto);
        }
      }
      return productosArr;
    }
}
interface Producto {
    nombre: string;
    bio: string;
    img: string;
    aparicion: string;
    casa: string;
    idx?: number;
  }
