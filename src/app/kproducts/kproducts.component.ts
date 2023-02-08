import { Component } from '@angular/core';
interface Product {
  title: string;
  price: string;
  imgSrc: string;
  link: string;
  alt: string;
}
@Component({
  selector: 'app-kproducts',
  templateUrl: './kproducts.component.html',
  styleUrls: ['./kproducts.component.css']
})
export class KproductsComponent {
  products: Product[] = [
    {
      title: 'Purple Sequined Kurta',
      price: 'Rs. 940',
      imgSrc: '../../assets/img/pk.jpg',
      link: '/fproduct/11',
      alt: 'Purple Kurta'
    },
    {
      title: 'Pastel Green & Pink Gold Kurta',
      price: 'Rs. 520',
      imgSrc: '../../assets/img/gk.webp',
      link: '/fproduct/12',
      alt: 'Paste green Kurta'
    },
    {
      title: 'Blue Printed Kurta',
      price: 'Rs. 1200',
      imgSrc: '../../assets/img/bk.jpg',
      link: '/fproduct/13',
      alt: 'Blur Kurta'
    },
    {
      title: 'Womens Gold Rayon Kurta',
      price: 'Rs. 840',
      imgSrc: '../../assets/img/rk.webp',
      link: '/fproduct/14',
      alt: 'Rayon Kurta'

    }
  ];

}
