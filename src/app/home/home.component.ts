import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
interface Product {
  id: string;
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
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  featuredPostsArray: Product[] =[];
  productsArray: Product[] = [];
  categoryObj: any; constructor(private route: ActivatedRoute, private productService: ProductService) { }
  ngOnInit(): void {
    this.productService.loadFeatured().subscribe(val => {
      this.featuredPostsArray = val.map(product => {
        return {
          id: product.id,
          ...product.data,
          category: {
            categoryId: product.data.category.categoryId,
            category: product.data.category.category
          }
        };
      });
    });
  }

}
