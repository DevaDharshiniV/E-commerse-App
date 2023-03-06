import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginForm: FormGroup;
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.minLength(6)]);
  constructor(private http: HttpClient,private auth: AuthService){}
  ngOnInit() : void {
    this.loginForm = new FormGroup({
      email: this.email,
      password: this.password
    })

  }

  getEmailErrorMessage() {
    return this.email.hasError('required') ? 'Email is required' :
      this.email.hasError('email') ? 'Not a valid email' :
        '';
  }

  getPasswordErrorMessage() {
    return this.password.hasError('required') ? 'Password is required' :
      this.password.hasError('minlength') ? 'Password must be at least 6 characters long' :
        '';
  }


  login() {
    const email = this.loginForm.get('email').value;
  const password = this.loginForm.get('password').value;
    if (!this.email || !this.password) {
      alert('Please enter your email and password');
      return;
    }
    console.log(this.loginForm.value);
    this.auth.login(email,password);
    this.loginForm.reset();

    // Perform registration logic

  }


}
