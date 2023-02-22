import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductsListComponent } from './products-list/products-list.component';

const routes: Routes = [{
  path: "", component: HomeComponent
}, {
  path: "products", component: ProductsListComponent
}, {
  path: "cart", component: CartComponent
}, {
  path: "products/:productId", component: ProductDetailComponent 
}, {
  path: "**", redirectTo: "products"
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
