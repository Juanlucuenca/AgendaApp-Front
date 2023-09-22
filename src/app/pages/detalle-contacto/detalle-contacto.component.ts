import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from 'src/app/data/interfaces/contact';
import { ContactsService } from 'src/app/services/contacts.service';

@Component({
  selector: 'app-detalle-contacto',
  templateUrl: './detalle-contacto.component.html',
  styleUrls: ['./detalle-contacto.component.scss']
})
export class DetalleContactoComponent {
  constructor(
    private contactsService: ContactsService,
    private activatedRouter: ActivatedRoute,
    ) { }

  public contactId: number = 0;
  public contact!: Contact;

  ngOnInit(): void {
    this.activatedRouter.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        const usr = this.contactsService.getbyId(Number(id));
        if(usr) {this.contact = usr;}
      }
    });
  }

}
