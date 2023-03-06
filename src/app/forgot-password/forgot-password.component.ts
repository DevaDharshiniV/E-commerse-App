import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit{
  forgotForm: FormGroup;
  email = new FormControl('', [Validators.required, Validators.email]);
  constructor(private http: HttpClient,private auth: AuthService) {}
  ngOnInit() {
    this.forgotForm = new FormGroup({
      email: this.email
    })

  }

  getEmailErrorMessage() {
    return this.email.hasError('required') ? 'Email is required' :
      this.email.hasError('email') ? 'Not a valid email' :
        '';
  }

  forgotPassword() {
    // Check if passwords match
    if (!this.email) {
      alert('Please enter your email');
      return;
    }
    console.log(this.forgotForm.value);
    this.auth.forgotPassword(this.forgotForm.value.email);
    this.forgotForm.reset();

  }

}
