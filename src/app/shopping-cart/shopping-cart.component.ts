import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})

export class ShoppingCartComponent implements OnInit{
  cartItems = [];
  total = 0;

  constructor(private router: Router) {}
  // ngOnInit() {
  //   for (let i = 0; i < localStorage.length; i++) {
  //     let key = localStorage.key(i);
  //     let item = JSON.parse(localStorage.getItem(key));
  //     this.cartItems.push(item);
  //   }
  //    this.updateTotal();
  // }
  ngOnInit() {
    for (let i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i);
      let item = JSON.parse(localStorage.getItem(key));
      if (item.image !== undefined) {
        this.cartItems.push(item);
      }
    }
    this.updateTotal();
  }



  updateTotal() {
    this.total = 0;
    this.cartItems.forEach(item => {
      this.total += item.price * item.quantity;
      localStorage.setItem(item.fname, JSON.stringify(item));
    });
  }

  removeFromCart(item) {
    const index = this.cartItems.indexOf(item);
    this.cartItems.splice(index, 1);
    localStorage.removeItem(item.fname);
    this.updateTotal();
  }

  checkout() {
    const savedCartItems = [...this.cartItems];
  const savedTotal = this.total;
    // Perform checkout logic

  this.cartItems = [];
  localStorage.clear();

  localStorage.setItem('cartItems', JSON.stringify(savedCartItems));
  localStorage.setItem('total', JSON.stringify(savedTotal));

  // Reset the total
  this.total = 0;

  // Add any additional logic for processing the checkout, such as sending data to a server or displaying a success message
  console.log("Checkout successful!",this.total);
  console.log(savedTotal);
  }
  navigateToReviewPage() {
    this.router.navigate(['/review-page']);
  }
}
