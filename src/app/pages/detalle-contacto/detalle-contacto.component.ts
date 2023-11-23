import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError } from 'rxjs';
import { Contact } from 'src/app/data/interfaces/Contact';
import { ContactsService } from 'src/app/services/contacts.service';

@Component({
  selector: 'app-detalle-contacto',
  templateUrl: './detalle-contacto.component.html',
  styleUrls: ['./detalle-contacto.component.scss']
})
export class DetalleContactoComponent {
  router = inject(Router)
  activatedRoute = inject(ActivatedRoute);
  constructor(
    private router: Router,
    private contactsService: ContactsService,
<<<<<<< Updated upstream
=======
    private activatedRouter: ActivatedRoute,
    private contactService: ContactsService,
>>>>>>> Stashed changes
    ) { }

    contact:Contact = {
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

    ngOnInit(): void {
      this.activatedRoute.params.subscribe(params =>{
        this.contactsService.getById(params['id']).then(res => {
          if(res) this.contact = res;
        })
      })
    }

  deleteContact(contactId: number) {
    this.contactService.delete(contactId);
    this.router.navigate(['contacts']);
  }

}
