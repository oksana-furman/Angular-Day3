import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { productsBirds } from '../products-birds';
import { IProducts } from '../IProducts';

@Component({
  selector: 'app-birds',
  templateUrl: './birds.component.html',
  styleUrls: ['./birds.component.scss']
})
export class BirdsComponent implements OnInit {
  birds: Array<IProducts> = productsBirds;

  constructor(private cartService: CartService) { }

  addToCart(val: IProducts) {
    // window.alert('Your pet has been added to the cart!');
    this.cartService.addToCart(val);
  }

  ngOnInit(): void {
  }

}
