import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  registerForm: FormGroup;
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.minLength(6)]);
  confirmPassword = new FormControl('', [Validators.required, Validators.minLength(6)]);
  constructor(private http: HttpClient,private auth: AuthService) {}
  ngOnInit() {
    this.registerForm = new FormGroup({
      email: this.email,
      password: this.password,
      confirmPassword: this.confirmPassword
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

  getConfirmPasswordErrorMessage() {
    return this.confirmPassword.hasError('required') ? 'Confirm password is required' :
      this.confirmPassword.hasError('minlength') ? 'Confirm password must be at least 6 characters long' :
        '';
  }

  onSubmit() {
    // Check if passwords match
    if (!this.email || !this.password) {
      alert('Please enter your email and password');
      return;
    }
    if (this.password.value !== this.confirmPassword.value) {
      alert('Passwords do not match');
      return;
    }
    console.log(this.registerForm.value);
    this.auth.register(this.registerForm.value.email, this.registerForm.value.password);
    this.registerForm.reset();

    // Perform registration logic

  }


}
