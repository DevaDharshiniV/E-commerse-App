import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit{
  address: any;
  orderNumber: string;
  total: number;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    console.log("localStorage.getItem('total')");
    // retrieve the address from local storage
    this.address = JSON.parse(localStorage.getItem('address'));
    // retrieve order number and total amount from payment service or local storage
    this.orderNumber = '123456';
    this.total = JSON.parse(localStorage.getItem('total')) || 0;

  }

}
