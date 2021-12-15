import { Component } from '@angular/core';
import { Cliente } from './cliente';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})

export class PipeComponent {

  ejemplo: string = "perro";
  ejemplo2:string = "GaTo";
  ejemplo3:string = "HAMSTER";

  cliente: Cliente = {
    nombre: 'Anastasiia',
    apellido: 'Zhuravska',
    email: 'email@gmail.com'
  }

  decimal: number = 0.123456;
  amount: number = 205.15;
  fecha = new Date(1988, 3, 15);

  vector = [1,2,3,4,5,6,7];

  promiseValue = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Funcion Promice ha funcionado correctamente')
    }, 3000)
  });

}
