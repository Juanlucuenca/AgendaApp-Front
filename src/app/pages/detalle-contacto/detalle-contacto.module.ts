import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetalleContactoRoutingModule } from './detalle-contacto-routing.module';
import { DetalleContactoComponent } from './detalle-contacto.component';


@NgModule({
  declarations: [
    DetalleContactoComponent
  ],
  imports: [
    CommonModule,
    DetalleContactoRoutingModule
  ]
})
export class DetalleContactoModule { }
