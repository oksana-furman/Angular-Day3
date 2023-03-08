import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BirdsComponent } from './birds/birds.component';
import { CartComponent } from './cart/cart.component';
import { CatsComponent } from './cats/cats.component';
import { DogsComponent } from './dogs/dogs.component';
import { HomeComponent } from './home/home.component';
import { ProductBirdsDetailComponent } from './product-birds-detail/product-birds-detail.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductDogsDetailComponent } from './product-dogs-detail/product-dogs-detail.component';
import { ProductsListComponent } from './products-list/products-list.component';

const routes: Routes = [{
  path: "", component: HomeComponent
}, {
  path: "products", component: ProductsListComponent
}, {
  path: "cart", component: CartComponent
}, {
  path: "dogs/:productId", component: ProductDogsDetailComponent 
}, {
  path: "cats/:productId", component: ProductDetailComponent 
}, {
  path: "birds/:productId", component: ProductBirdsDetailComponent 
}, {
  path: "dogs", component: DogsComponent
}, {
  path: "birds", component: BirdsComponent
}, {
  path: "cats", component: CatsComponent
}, {
  path: "**", redirectTo: "/"
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
