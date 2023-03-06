// import { Component, OnInit, Input } from '@angular/core';
// import { ProductService } from '../product.service';
// import { ActivatedRoute } from '@angular/router';


// @Component({
//   selector: 'app-fproduct',
//   templateUrl: './fproduct.component.html',
//   styleUrls: ['./fproduct.component.css']
// })
// export class FproductComponent implements OnInit {
  // sizes=['S', 'M', 'L', 'XL'];
  // product;
  // addedToCart = false;
  // message = "Added to Cart!";
//   constructor(private productService: ProductService, private route: ActivatedRoute) { }

//   selectedSize: string;
//   ngOnInit() {
    // this.route.params.subscribe(params => {
    //   const productId = +params['id'];
    //   console.log('productId: ', productId);
    //   this.product = this.productService.getProductById(productId);
    //   this.selectedSize = this.product.sizes[0];
    // });

//   }
  // addToCart() {
  //   this.addedToCart = true;
  //   const cartItem = {
  //     fname: this.product.fname,
  //     size: this.selectedSize,
  //     price: this.product.price,
  //     image: this.product.image
  //   };

//     // Add the item to the shopping cart, for example using local storage
//     (window as any).localStorage.setItem(this.product.fname, JSON.stringify(cartItem));
//   }
// }
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
interface Product{
  id:string;
  name: string;
  description: string;
  price: number;
  productImgPath: string;
  category: {
    categoryId: string;
    category: string;
  };
}
@Component({
  selector: 'app-fproduct',
  templateUrl: './fproduct.component.html',
  styleUrls: ['./fproduct.component.css']
})
export class FproductComponent implements OnInit {

  sizes=['S', 'M', 'L', 'XL'];
  product;
  addedToCart = false;
  message = "Added to Cart!";
  productData: any;
  selectedSize = 'S';
  // constructor(private route: ActivatedRoute,private productService: ProductService){}
  constructor(private route: ActivatedRoute, private productService: ProductService) {
    this.productData = {
      id: '',
      name: '',
      description: '',
      price: 0,
      productImgPath: '',
      category: {
        categoryId: '',
        category: ''
      },
    };
  }
  ngOnInit(): void {
    this.route.params.subscribe(val => {
      this.productService.loadOnePost(val['id']).subscribe(product => {
        // console.log(post);
        this.productData=product;
      })
    })


  }
  addToCart() {
    this.addedToCart = true;
    const cartItem = {
      name: this.productData.name,
      size: this.selectedSize,
      price: this.productData.price,
      image: this.productData.productImgPath
    };
    (window as any).localStorage.setItem(this.productData.name, JSON.stringify(cartItem));
  }


}
