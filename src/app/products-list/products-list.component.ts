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
  product: IProducts = {} as IProducts;
  id: number = 0;

  constructor(private cartService: CartService) { }
  addToCart() {
    window.alert('Your pet has been added to the cart!');
    this.cartService.addToCart(this.product);
  }

  ngOnInit(): void {
  }

}
