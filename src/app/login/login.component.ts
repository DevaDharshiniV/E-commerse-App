import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { DOCUMENT } from '@angular/common';
declare function VerifyLogin(): void;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  formGroup: any
  constructor() {
    // VerifyLogin();
    this.formGroup = new FormGroup({
      email: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required),
      remail: new FormControl("", Validators.required),
      rpassword: new FormControl("", Validators.required),
      cpassword: new FormControl("", Validators.required),

    })

  }
  ngOnInit(): void {

  }
 /* loginForm(): void{
    console.log(this.formGroup.value)
    if (this.formGroup.status==="VALID"){
      console.log('Success')
      //Should call API and submit form data
    }
    else{
      console.log('Error')
    }
  }
  registerForm(): void{
    console.log(this.formGroup.value)
    if (this.formGroup.status==="VALID"){
      console.log('Success')
      //Should call API and submit form data
    }
    else{
      console.log('Error')
    }
  }*/
}
