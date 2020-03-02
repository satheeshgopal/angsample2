import { Component, OnInit } from '@angular/core';
import {Product } from './product';
import {ProductService} from './product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angsample2';
  products = [new Product(1, 'apple'), new Product(1, 'orange'), new Product(1, 'mango')];
  productCount: number = 0;

  constructor(private productService : ProductService)
  {

  }

  ngOnInit()
  {
    this.productCount = this.products.length;
  this.productService.getProducts().subscribe(item => {
    item.forEach(prod => this.products.push(prod));
    this.productCount = this.products.length;
  });
  }

  addProduct(product:Product)
  {
    this.products.push(product);
    this.productCount = this.products.length;
  }
}
