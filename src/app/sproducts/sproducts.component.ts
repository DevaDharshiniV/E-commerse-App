import { Component } from '@angular/core';
interface Product {
  title: string;
  price: string;
  imgSrc: string;
  link: string;
  alt: string;
}
@Component({
  selector: 'app-sproducts',
  templateUrl: './sproducts.component.html',
  styleUrls: ['./sproducts.component.css']
})
export class SproductsComponent {
  products: Product[] = [
    {
      title: 'Pink Color Designer Gown',
      price: 'Rs. 1900',
      imgSrc: '../../assets/img/pg.jpg',
      link: '/fproduct/21',
      alt: 'pink gown'
    },
    {
      title: 'Olive Green Designer Gown',
      price: 'Rs. 2000',
      imgSrc: '../../assets/img/gg.jpg',
      link: '/fproduct/22',
      alt: 'Olive green gown'
    }
  ];

}
