import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit{
  cartItems = [];
  total = 0;
  constructor(private router: Router) {}

  ngOnInit() {
    this.cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    this.total = JSON.parse(localStorage.getItem('total')) || 0;

  }

  submitOrder() {
    const ravedTotal = this.total;


    // Perform logic to submit the order, such as sending data to a server or displaying a success message
    console.log("Order submitted!");
    // localStorage.clear();
    this.cartItems = [];
    localStorage.setItem('total', JSON.stringify(ravedTotal));
    this.total = 0;

    localStorage.setItem('totalAmount', JSON.stringify(this.total));
    this.router.navigate(['/address']);
  }
}
  // this.router.navigate(['/confirmation'], { state: { totalAmount: this.total } });
    // this.router.navigate(['/confirmation'], { queryParams: { totalAmount: tempTotal } });
    // this.router.navigate(['/confirmation'], { queryParams: { totalAmount: tempTotal } });
