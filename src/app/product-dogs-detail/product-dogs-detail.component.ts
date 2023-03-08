import { Component, OnInit } from '@angular/core';
import { productsDogs } from '../products-dogs';
import { IProducts } from '../IProducts';
import { ActivatedRoute, ParamMap, Params } from '@angular/router'; 
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-dogs-detail',
  templateUrl: './product-dogs-detail.component.html',
  styleUrls: ['./product-dogs-detail.component.scss']
})
export class ProductDogsDetailComponent implements OnInit {
  productDog: IProducts = {} as IProducts;
  id: number = 0;

  constructor(private route: ActivatedRoute, private cartService: CartService) { }

  addToCart() {
    // window.alert('Your pet has been added to the cart!');
    this.cartService.addToCart(this.productDog);
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['productId'];
      this.productDog = productsDogs[this.id];
    });
  }

}
