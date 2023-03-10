import { Component, OnInit } from '@angular/core';
import { products } from '../products';
import { IProducts } from '../IProducts';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  products: Array<IProducts> = products;
 
  constructor(private cartService: CartService) { }
  addToCart(val: IProducts) {
    // window.alert('Your pet has been added to the cart!');
    this.cartService.addToCart(val);
  }

  ngOnInit(): void {
  }

}
