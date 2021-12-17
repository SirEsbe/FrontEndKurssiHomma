import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-palvelu',
  templateUrl: './palvelu.component.html',
  styleUrls: ['./palvelu.component.css']
})
export class PalveluComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

import {Product} from './product'

export class ProductService{

  public  getProducts() {

    let products:Product[];

    products=[
      new Product(1,'Memory Card',500),
      new Product(1,'Pen Drive',750),
      new Product(1,'Power Bank',100)
    ]

    return products;
  }
}

2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28

import { Component } from '@angular/core';

import { ProductService } from './product.service';
import { Product } from './product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})

export class AppComponent
{

  products:Product[];
  productService;

  constructor(){
    this.productService=new ProductService();
  }

  getProducts() {

    this.products=this.productService.getProducts();
  }

}

