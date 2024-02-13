import { Component } from '@angular/core';
import {ProductApiService} from "../../libs/product/api/product-api.service";
import {Product} from "../../libs/product/api/product.model";
import {CartFacade} from "../../libs/cart/cart.facade";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  constructor(public cartFascade: CartFacade) {}



}
