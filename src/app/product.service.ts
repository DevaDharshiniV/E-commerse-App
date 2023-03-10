// import { Injectable } from '@angular/core';

// // interface Product {
// //   id: number;
// //   fname: string;
// //   details: string[];
// //   description: string;
// //   image: string;
// //   price: number;
// //   sizes: string[];
// // }
// // export interface Product {
// //   id: number;
// //   fname: string;
// //   details: string[];
// //   description: string;
// //   image: string;
// //   price: number;
// //   sizes: string[];
// // }

// // export interface Kurti extends Product {
// //   kid: number;
// // }

// @Injectable({
//   providedIn: 'root'
// })


// export class ProductService {
//   private products = [
//     {
//       id: 1,
//       fname: 'Jaipur Kurta with Dupatta',
//       details: [
//         'Fabric Rayon',
//         'Salwar Suits : Anarkali Kurta Pant And Solid Dupatta Set',
//         'One Kurta, One Pant And One Dupatta'
//       ],
//       description: 'The Kurta you are seeing right now has very beautiful work which will make your beauty look more beautiful than before. This Kurta is flared Kurta style and you have the power to wear it in all aspects of your festival wedding parties and office casuals.',
//       image: '../../assets/img/rc.jpg',
//       price: 940,
//       sizes: ['S', 'M', 'L', 'XL']
//     },
//     {
//       id: 2,
//       fname: 'White Kurta',
//       details: [
//         'Fabric: Cotton',
//         'Kurta with Stitched Pant'
//       ],
//       description: 'This white kurta is made of soft and comfortable cotton fabric. It comes with a stitched pant, making it a complete and ready-to-wear outfit. Perfect for casual and formal events alike.',
//       image: '../../assets/img/wc.jpg',
//       price: 819,
//       sizes: ['S', 'M', 'L', 'XL']
//     },
//     {
//       id: 3,
//       fname: 'Black Georgette Gown',
//       details: [
//         'Fabric: Georgette',
//         'Full-length Gown'
//       ],
//       description: 'This black georgette gown is perfect for a formal event or special occasion. The full-length design and flowing fabric create a stunning look. The georgette material adds a touch of elegance and drapes beautifully.',
//       image: '../../assets/img/bc.jpg',
//       price: 1159,
//       sizes: ['S', 'M', 'L', 'XL']

//     },
//     {
//       id: 4,
//       fname: "Women's Net Semi-Stitched Lehenga Choli",
//       details: [
//         'Fabric: Soft and airy Net',
//         'Semi-Stitched Lehenga Choli with Dupatta'
//       ],This beautiful women's semi-stitched lehenga choli is crafted from soft and airy net fabric. It features a stylish design that is perfect for traditional events, weddings or any special occasion. The semi-stitched design allows for customization to achieve a perfect fit and the lehenga choli comes with a matching dupatta to complete the look. This attire is available in multiple sizes, so you can find the perfect fit for you. Make a statement at your next event with this stunning lehenga choli.
//       description: "",
//       image: '../../assets/img/pc.jpg',
//       price: 1899,
//       sizes: ['S', 'M', 'L', 'XL']
//     },
//     {
//       id: 11,
//       fname: 'Purple Sequined Kurta',
//       details: [
//         'Material: Polyester',
//         'Sleeve Type:Three Fourth Sleeves'
//       ],
//       description: 'This gorgeous purple kurta is made of soft and flowy georgette fabric and adorned with shimmering sequins. It comes with a stitched pant, making it a complete and ready-to-wear outfit perfect for special occasions.',
//       image: '../../assets/img/pk.jpg',
//       price: 1080,
//       sizes: ['S', 'M', 'L', 'XL']
//     },
//     {
//       id: 12,
//       fname: 'Pastel Green & Pink Gold Kurta',
//       details: [
//         'Material: Cotton',
//         'Sleeve Type: Half Sleeves',
//         'Occasion: Festive'
//       ],
//       description: 'Elegant and in trend this, pastel green & pink gold printed button down kurta is a perfect pick for upcoming festive events. Crafted with premium quality cotton material and floral pattern all over it offers a comfortable fit. Style this outfit with golden stud earrings and a pair heels to attain a glorious look.',
//       image: '../../assets/img/gk.webp',
//       price: 520,
//       sizes: ['S', 'M', 'L', 'XL']
//     },
//     {
//       id: 13,
//       fname: 'Pastel Green & Pink Gold Kurta',
//       details: [
//         'Material: Cotton',
//         'Sleeve Type: Half Sleeves',
//         'Occasion: Festive'
//       ],
//       description: 'Elegant and in trend this, pastel green & pink gold printed button down kurta is a perfect pick for upcoming festive events. Crafted with premium quality cotton material and floral pattern all over it offers a comfortable fit. Style this outfit with golden stud earrings and a pair heels to attain a glorious look.',
//       image: '../../assets/img/bk.jpg',
//       price: 1200,
//       sizes: ['S', 'M', 'L', 'XL']
//     },
//     {
//       id: 14,
//       fname: 'Womens Gold Printed Rayon Flared Kurta',
//       details: [
//         'Material: Cotton',
//         'Sleeve Type: Half Sleeves',
//         'Occasion: Festive'
//       ],
//       description: 'Elegant and in trend this, pastel green & pink gold printed button down kurta is a perfect pick for upcoming festive events. Crafted with premium quality cotton material and floral pattern all over it offers a comfortable fit. Style this outfit with golden stud earrings and a pair heels to attain a glorious look.',
//       image: '../../assets/img/rk.webp',
//       price: 840,
//       sizes: ['S', 'M', 'L', 'XL']
//     },
//     {
//       id: 21,
//       fname: 'Pink Color Net Base Party Wear Designer Gown',
//       details: [
//         'Fabric: Soft Net',
//         'Shape: Designer Gown',
//         'Occasion: Festive'
//       ],
//       description: 'Make a stunning appearance at your next party with this gorgeous pink designer gown. Crafted from delicate net material, this sleeveless gown features a fitted bodice and a flowing skirt for a flattering silhouette. Accessorize with statement earrings and high heels for a complete look.',
//       image: '../../assets/img/pg.jpg',
//       price: 1900,
//       sizes: ['S', 'M', 'L', 'XL']
//     },
//     {
//       id: 22,
//       fname: 'Olive Green Color Net Base Party Wear Designer Gown',
//       details: [
//       'Fabric: Soft Net',
//       'Shape: Designer Gown',
//       'Occasion: Festive'
//       ],
//       description: 'Make a bold statement at your next party with this stunning olive green designer gown. Made from delicate net material, this sleeveless gown has a fitted bodice and a flowing skirt for a flattering silhouette. Accessorize with statement jewelry and high heels for a complete look.',
//       image: '../../assets/img/gg.jpg',
//       price: 2000,
//       sizes: ['S', 'M', 'L', 'XL']
//       }
//     // Add additional products here...
//   ];

//   constructor() { }
//   getProductById(id: number) {
//     return this.products.find(product => product.id === id);
//   }


// }
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs';

import * as firebase from 'firebase/compat/app';

interface Product {
  name: string;
  description: string;
  price: number;
  productImgPath: string;
  category: {
    categoryId: string;
    category: string;
  };
}


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private afs: AngularFirestore){

  }


  loadFeatured() {

    return this.afs.collection('products', ref=> ref.where('isFeatured','==', true).limit(4)).snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Product;
          const id = a.payload.doc.id;
          return { id, data };
        }) as Array<{id: string, data: Product}>;
      })
    );

  }

  loadCategoryPosts(categoryId: string){
    return this.afs.collection('products', ref=> ref.where('category.categoryId', '==',categoryId).limit(4)).snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Product;
          const id = a.payload.doc.id;
          return { id, data };
        }) as Array<{id: string, data: Product}>;
      })
    );

  }

  loadOnePost( postId: string ){
    return this.afs.doc(`products/${postId}`).valueChanges();

  }


}
