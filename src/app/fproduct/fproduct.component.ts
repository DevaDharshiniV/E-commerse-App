import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-fproduct',
  templateUrl: './fproduct.component.html',
  styleUrls: ['./fproduct.component.css']
})
export class FproductComponent implements OnInit {
  addedToCart = false;
  message = "Added to Cart!";
  product = {
    fname: 'Jaipur Kurta with Dupatta',
    details: [
      'Fabric Rayon',
      'Salwar Suits : Anarkali Kurta Pant And Solid Dupatta Set',
      'One Kurta, One Pant And One Dupatta'
      ],
    description: 'The Kurta you are seeing right now has very beautiful work which will make your beauty look more beautiful than before. This Kurta is flared Kurta style and you have the power to wear it in all aspects of your festival wedding parties and office casuals.',
    image: '../../assets/img/rc.jpg',
    price: 940
  };
  quantity = 1;
  totalPrice = 0;

  ngOnInit(): void {
    this.calculateTotalPrice();
  }

  calculateTotalPrice() {
    this.totalPrice = this.product.price * this.quantity;
  }

  addToCart() {
    this.addedToCart = true;
    const cartItem = {
      fname: this.product.fname,
      description: this.product.description,
      price: this.product.price,
      image: this.product.image,
      quantity: this.quantity
    };

    // Add the item to the shopping cart, for example using local storage
    (window as any).localStorage.setItem(this.product.fname, JSON.stringify(cartItem));
  }
}
