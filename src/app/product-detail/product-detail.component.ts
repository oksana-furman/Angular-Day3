import { Component, OnInit } from '@angular/core';
import { products } from '../products';
import { IProducts } from '../IProducts';
import { ActivatedRoute, Params } from '@angular/router'; 
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product: IProducts = {} as IProducts;
  id: number = 0;

  constructor(private route: ActivatedRoute, private cartService: CartService) { }
  addToCart() {
    window.alert('Your pet has been added to the cart!');
    this.cartService.addToCart(this.product);
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['productId'];
      this.product = products[this.id];
    });
  }

}
