import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { CartComponent } from './cart/cart.component';
import { HeroComponent } from './hero/hero.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { DogsComponent } from './dogs/dogs.component';
import { BirdsComponent } from './birds/birds.component';
import { CatsComponent } from './cats/cats.component';
import { ProductDogsDetailComponent } from './product-dogs-detail/product-dogs-detail.component';
import { ProductBirdsDetailComponent } from './product-birds-detail/product-birds-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ProductsListComponent,
    CartComponent,
    HeroComponent,
    ProductDetailComponent,
    DogsComponent,
    BirdsComponent,
    CatsComponent,
    ProductDogsDetailComponent,
    ProductBirdsDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
