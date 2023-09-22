import { Injectable } from '@angular/core';
import { Contact } from '../data/interfaces/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  getAll() {
    return this.contacts
  }
  
  getbyId(id:number): Contact | undefined {
    return this.contacts.find(contact => contact.id === id)
  }

  create(contact: Contact) {
    this.contacts.push(contact)
  }
  edit(id: number) {
    return this.contacts.find(contact => contact.id === id)
  }
  delete(id:number) {
    this.contacts = this.contacts.filter(contact => contact.id !== id)
  }

  constructor() { }

  contacts: Contact[] = [
    {
        id: 1,
        imgUrl: "https://diagonales-assets.tadevel-cdn.com/622f88f78afbbc7b449fa7e4/t256.jpeg",
        name: "Juanito",
        surname: "Perez",
        address: "Santa Cruz 1608",
        phoneNumber: "123-456-7890",
        company: "Google Inc."
    },
    {
        id: 2,
        imgUrl: "https://diagonales-assets.tadevel-cdn.com/622f88f78afbbc7b449fa7e4/t256.jpeg",
        name: "Esteban",
        surname: "Alvarez",
        address: "Mendingo 345",
        phoneNumber: "234-567-8901",
        company: "Endava"
    },
    {
        id: 3,
        imgUrl: "https://diagonales-assets.tadevel-cdn.com/622f88f78afbbc7b449fa7e4/t256.jpeg",
        name: "Thiago",
        surname: "Pezetas",
        address: "El rio 123",
        phoneNumber: "345-678-9012",
        company: "Modo Uno"
    },
    {
        id: 4,
        imgUrl: "https://diagonales-assets.tadevel-cdn.com/622f88f78afbbc7b449fa7e4/t256.jpeg",
        name: "Cristo",
        surname: "Colonial",
        address: "El Major 345",
        phoneNumber: "456-789-0123",
        company: "Solo uno"
    },
    {
        id: 5,
        imgUrl: "",
        name: "Perez",
        surname: "Alvarez",
        address: "Ernesto Alvarez 1232",
        phoneNumber: "567-890-1234",
        company: "Tutoriales"
    }
];
}
