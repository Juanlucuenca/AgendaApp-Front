import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsService } from 'src/app/services/contacts.service';
import { Contact } from 'src/app/data/interfaces/contact';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'agregar-contacto',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './agregar-contacto.component.html',
  styleUrls: ['./agregar-contacto.component.scss']
})
export class AgregarContactoComponent {
  @Output() cerrar = new EventEmitter();
  constructor( 
    public service : ContactsService 
    ) { }


  contactForAdd: Contact = {
    id: 0,
    imgUrl: "",
    name: "",
    surname: "",
    address: "",
    phoneNumber: "",
    company: ""
  }

  public agregarContacto(contacto: Contact) {
    this.cerrar.emit();
    this.service.create(contacto);
  }

  public editarContacto(contacto: Contact) {
    this.cerrar.emit();
    this.service.edit(contacto.id);
  }

  public closeModal(){
    this.cerrar.emit();
  }
}
