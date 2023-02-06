import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string;
  password: string;

  onSubmit() {
    // validate email and password
    if (!this.email || !this.password) {
      alert('Please enter your email and password');
      return;
    }

    // perform actual login logic here, e.g. calling a backend API to check the credentials
  }

}
