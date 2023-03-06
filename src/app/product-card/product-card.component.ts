import { Component,Input,OnInit } from '@angular/core';
interface Product {
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
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit{
  constructor(){}
  @Input() productData!: Product;

  ngOnInit(): void{
    console.log(this.productData);
  }

}
