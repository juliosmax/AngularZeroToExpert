import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

 private _personajes: Personaje[] = [{
    nombre: 'Goku',
    poder: 15000
  },
  {
    nombre: 'Vegeta',
    poder: 8500
  },
  {
    nombre: 'Krillin',
    poder: 600
  }
  ]

  get personajes():Personaje[] {
    return [...this._personajes];
  }

  agregarPersonajes(personaje:Personaje):void{
    this._personajes.push(personaje);
  }

  constructor() {
    console.log('Inicializando el servicio');
   }
}
