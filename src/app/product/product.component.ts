import { Component, OnInit } from '@angular/core';
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
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  productsArray: Product[] = [];
  categoryObj: any; constructor(private route: ActivatedRoute, private productService: ProductService) { }
  ngOnInit(): void {
    this.route.params.subscribe(val => {
      console.log(val);
      this.categoryObj = val;
      this.productService.loadCategoryPosts(val['id']).subscribe(post => {
        this.productsArray = post.map(post => {

          return {
            id: post.id,
            ...post.data,
            category: {
              categoryId: post.data.category.categoryId,
              category: post.data.category.category
            },
          };
        });
      })

    })
  }
}
