import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetalleContactoRoutingModule } from './detalle-contacto-routing.module';
import { DetalleContactoComponent } from './detalle-contacto.component';
import { AgregarContactoComponent } from 'src/app/components/agregar-contacto/agregar-contacto.component';


@NgModule({
  declarations: [
    DetalleContactoComponent
  ],
  imports: [
    CommonModule,
    DetalleContactoRoutingModule,
    AgregarContactoComponent
  ]
})
export class DetalleContactoModule { }
