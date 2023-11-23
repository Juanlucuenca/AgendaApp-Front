import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactsComponent } from './contacts.component';
import { ContactInfoComponent } from 'src/app/components/contact-info/contact-info.component';
import { AgregarContactoComponent } from 'src/app/components/agregar-contacto/agregar-contacto.component';


@NgModule({
  declarations: [
    ContactsComponent,
  ],
  imports: [
    CommonModule,
    ContactsRoutingModule,
    ContactInfoComponent,
    AgregarContactoComponent
  ]
})
export class ContactsModule { }
