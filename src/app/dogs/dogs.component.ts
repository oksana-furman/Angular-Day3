import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { productsDogs } from '../products-dogs';
import { IProducts } from '../IProducts';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.scss']
})
export class DogsComponent implements OnInit {
  dogs: Array<IProducts> = productsDogs;

  constructor(private cartService: CartService) { }

  addToCart(val: IProducts) {
    // window.alert('Your pet has been added to the cart!');
    this.cartService.addToCart(val);
  }

  ngOnInit(): void {
  }

}
