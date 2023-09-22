import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from 'src/app/data/interfaces/contact';
import { ContactsService } from 'src/app/services/contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  constructor(
    private contactService: ContactsService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.contacts = this.contactService.getAll();
  }
    
  contacts: Contact[] = [];

}
