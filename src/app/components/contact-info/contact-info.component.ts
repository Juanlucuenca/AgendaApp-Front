import { CommonModule } from '@angular/common';
import { Component, Input} from '@angular/core';
import { Contact } from 'src/app/data/interfaces/contact';
import { Router } from '@angular/router';

@Component({
  selector: 'contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class ContactInfoComponent {
  @Input() contact!: Contact;

  constructor(private router: Router) { }

  onNavegated(id: number): void {
    this.router.navigate(['contact', id]);
  }

}
