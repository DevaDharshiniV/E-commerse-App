import { Component } from '@angular/core';

interface Product {
  title: string;
  price: string;
  imgSrc: string;
  link: string;
  alt: string;
}
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  products: Product[] = [
    {
      title: 'Jaipur Kurta with Dupatta',
      price: 'Rs. 940',
      imgSrc: '../../assets/img/rc.jpg',
      link: '/fproduct/1',
      alt: 'Gorgeous jaipur kurta'
    },
    {
      title: 'White Kurta',
      price: 'Rs. 819',
      imgSrc: '../../assets/img/wc.jpg',
      link: '/fproduct/2',
      alt: 'Photo of a White Kurta'
    },
    {
      title: 'Black Georgette Gown',
      price: 'Rs. 1159',
      imgSrc: '../../assets/img/bc.jpg',
      link: '/fproduct/3',
      alt: 'Photo of a Black Gown'
    },
    {
      title: 'Women Lehenga Choli',
      price: 'Rs. 1899',
      imgSrc: '../../assets/img/pc.jpg',
      link: '/fproduct/4',
      alt: 'Photo of a Lehenga'

    }
  ];

}
