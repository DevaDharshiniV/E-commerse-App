import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit{
  address = {
    name: '',
    street: '',
    city: '',
    state: '',
    zip: ''
  };

  constructor(private router: Router) {
    // super();
    this.addressForm=new FormGroup({
      name: new FormControl(),
      street: new FormControl(),
      city: new FormControl(),
      state: new FormControl(),
      zip:new FormControl()
    })

  }
  nameControl = new FormControl('', [Validators.required]);
  streetControl = new FormControl('', [Validators.required]);
  cityControl = new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]);
  stateControl = new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]);
  zipControl = new FormControl('', [Validators.required, Validators.pattern(/^\d{5}(?:[-\s]\d{4})?$/)]);
  addressForm = new FormGroup({
    name: this.nameControl,
    street: this.streetControl,
    city: this.cityControl,
    state: this.stateControl,
    zip: this.zipControl
  });

  ngOnInit(): void {
  }
  onSubmit() {
    // navigate to the payment page
    if (this.addressForm.valid) {
      console.log(this.addressForm.value);
      localStorage.setItem('address', JSON.stringify(this.addressForm.value));
      this.router.navigate(['/payment']);
    }
  }


}
