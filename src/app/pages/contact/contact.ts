import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CV } from '../../data/cv.data';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  readonly cv = CV;

  name = '';
  email = '';
  message = '';
  submitted = false;

  sendMessage(): void {
    const subject = encodeURIComponent(`Contacto desde CV Web — ${this.name || 'Visitante'}`);
    const body = encodeURIComponent(
      `Nombre: ${this.name}\nEmail: ${this.email}\n\n${this.message}`,
    );
    window.location.href = `mailto:${this.cv.email}?subject=${subject}&body=${body}`;
    this.submitted = true;
  }
}
