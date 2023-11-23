import { Injectable } from '@angular/core';
import { Contact } from '../data/interfaces/Contact';
import {API} from '../constants/api';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ContactsService extends ApiService {

<<<<<<< Updated upstream
  async create(contacto:Contact):Promise<boolean>{
    if(contacto.id) return false;
    const res = await fetch(API+'Contact/',{
      method:'POST',
      headers:{
        "Content-type":"application/json",
        Authorization: "Bearer "+this.auth.token
      },
      body: JSON.stringify(contacto)
    })
    return res.ok
  };

  async delete(id:number):Promise<boolean>{
    const res = await fetch(API+'Contact/'+id,{
      method:'DELETE',
      headers:{
        Authorization: "Bearer "+this.auth.token
      },
    })
    return res.ok
  };
=======
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
>>>>>>> Stashed changes

  async edit(contacto:Contact):Promise<boolean>{
    if(!contacto.id) return false;
    const res = await fetch(API+"Contact/"+contacto.id,{
      method:'PUT',
      headers:{
        "Content-type":"application/json",
        Authorization: "Bearer "+this.auth.token()
      },
      body: JSON.stringify(contacto)
    })
    return res.ok
  };

  async getAll():Promise<Contact[]>{
    const res = await this.getAuth("Contact")
    const resJson = await res.json();
    return resJson;
  };

  async getById(id:number | string):Promise<Contact | undefined>{
    const res = await this.getAuth("Contact/"+id);
    const resJson = await res.json();
    return resJson[0];
  };
}
