import { Component, OnInit } from '@angular/core';
import { IProducts } from '../IProducts';
import { productsBirds } from '../products-birds';
import { products } from '../products';
import { productsDogs } from '../products-dogs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  birds: Array<IProducts> = productsBirds;
  products: Array<IProducts> = products;
  dogs: Array<IProducts> = productsDogs;

  constructor() { }

  ngOnInit(): void {
  }

}
