import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../service/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent {

  nuevo:Personaje ={
  nombre: '',
  poder: 0
};

// @Output() onAgregarPersonaje : EventEmitter<Personaje> = new EventEmitter();
constructor(private dbzService:DbzService) {

}

 agregar() {
    if (this.nuevo.nombre.trim().length == 0) {
      return;
    }

    console.log(this.nuevo);
    // this.onAgregarPersonaje.emit(this.nuevo);
    this.dbzService.agregarPersonajes(this.nuevo);
    this.nuevo = {
      nombre: '',
      poder: 0

    }

  }
}
