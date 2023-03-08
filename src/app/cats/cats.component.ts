import { Component, OnInit } from '@angular/core';
import { products } from '../products';
import { IProducts } from '../IProducts';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.scss']
})
export class CatsComponent implements OnInit {
  products: Array<IProducts> = products;
 
  constructor(private cartService: CartService) { }
  addToCart(val: IProducts) {
    // window.alert('Your pet has been added to the cart!');
    this.cartService.addToCart(val);
  }

  ngOnInit(): void {
  }

}
