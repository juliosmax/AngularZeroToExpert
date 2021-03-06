import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `
    <h1>{{ title }}</h1>

    <h3>
      La base es <strong>{{ base }}</strong>
    </h3>

    <button (click)="acumular(base)">+{{ base }}</button>
    <span>{{ contador }}</span>
    <button (click)="acumular(-base)">-{{ base }}</button>
  `,
})
export class ContadorComponent {

  title: string = 'Contador app';
  contador: number = 10;
  base:number=5;

 acumular(valor:number) {
  this.contador+=valor;
 }

}
