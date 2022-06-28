import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroComponent } from './hero/hero.component';
import { ListadoComponent } from './listado/listado.component';
import { DbzService } from '../dbz/service/dbz.service';

@NgModule({
  declarations: [
    HeroComponent,
    ListadoComponent] ,
    exports: [
      ListadoComponent
    ],
    imports : [
      CommonModule
    ],
    providers: [DbzService]
  })
export class HeroesModule {}
