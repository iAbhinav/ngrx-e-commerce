import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {FormsModule} from '@angular/forms';
import {HomePage} from './home.page';
import {HomePageRoutingModule} from './home-routing.module';
import {ProductViewComponent} from "../../components/product-view/product-view.component";
import {ProductsComponent} from "../../components/products/products.component";
import {CartComponent} from "../../components/cart/cart.component";
import {SexyModule} from "@qid/sexy";
import {ProductModule} from "../../libs/product/product.module";
import {CartModule} from "../../libs/cart/cart.module";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    SexyModule,
    ProductModule,
    CartModule

  ],
    declarations: [HomePage, ProductViewComponent, ProductsComponent, CartComponent]
})
export class HomePageModule {
}
