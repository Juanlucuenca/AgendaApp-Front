import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsService } from 'src/app/services/contacts.service';
import { FormsModule } from '@angular/forms';
import { Contact } from 'src/app/data/interfaces/Contact';

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


    Contact:Contact = {
      id: 0,
      name: '',
      lastName: '',
      address: '',
      email: '',
      image: '',
      number: '',
      company: '',
      userId: 0
    }

  public agregarContacto(contacto: Contact) {
    this.cerrar.emit();
    console.log("ejecutado")
    this.service.create(contacto);
  }

  public editarContacto(contacto: Contact) {
    this.cerrar.emit();
    this.service.edit(contacto);
  }

  public closeModal(){
    this.cerrar.emit();
  }
}