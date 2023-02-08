import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-fproduct',
  templateUrl: './fproduct.component.html',
  styleUrls: ['./fproduct.component.css']
})
export class FproductComponent implements OnInit {
  product;
  addedToCart = false;
  message = "Added to Cart!";
  constructor(private productService: ProductService, private route: ActivatedRoute) { }


  // ngOnInit() {
  //   const productId = 1; // This should come from somewhere, e.g. a route parameter
  //   this.product = this.productService.getProductById(productId);
  // }
  selectedSize: string;
  ngOnInit() {
    this.route.params.subscribe(params => {
      const productId = +params['id'];
      console.log('productId: ', productId);
      this.product = this.productService.getProductById(productId);
    });
    this.selectedSize = this.product.sizes[0];
  }
  // ngOnInit() {
  //   this.route.params.subscribe(params => {
  //     if (params['id']) {
  //       const productId = +params['id'];
  //       console.log('productId: ', productId);
  //       this.product = this.productService.getProductById(productId);
  //     } else if (params['kid']) {
  //       const productKid = +params['kid'];
  //       console.log('productKid: ', productKid);
  //       // this.product = this.productService.getProductByKid(productKid);
  //     }
  //   });
  // }
  addToCart() {
    this.addedToCart = true;
    const cartItem = {
      fname: this.product.fname,
      description: this.product.description,
      price: this.product.price,
      image: this.product.image
    };

    // Add the item to the shopping cart, for example using local storage
    (window as any).localStorage.setItem(this.product.fname, JSON.stringify(cartItem));
  }
}
