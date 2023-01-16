import { Component } from '@angular/core';
import { faLinkedin, faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  faLinkedin = faLinkedin
  faFacebook = faFacebook
  faInstagram = faInstagram
  faWhatsapp = faWhatsapp
}

