import { Component, OnInit } from '@angular/core';
import { productsBirds } from '../products-birds';
import { IProducts } from '../IProducts';
import { ActivatedRoute, ParamMap, Params } from '@angular/router'; 
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-birds-detail',
  templateUrl: './product-birds-detail.component.html',
  styleUrls: ['./product-birds-detail.component.scss']
})
export class ProductBirdsDetailComponent implements OnInit {
  productBird: IProducts = {} as IProducts;
  id: number = 0;

   constructor(private route: ActivatedRoute, private cartService: CartService) { }
  addToCart() {
    // window.alert('Your pet has been added to the cart!');
    this.cartService.addToCart(this.productBird);
  }


  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['productId'];
      this.productBird = productsBirds[this.id];
    });
  }

}
