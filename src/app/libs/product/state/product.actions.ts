//Create Action for products
import {createAction, props} from "@ngrx/store";
import {Product} from "../api/product.model";

export const fetchProducts = createAction(
  '[Product] Fetch Products'
)

export const fetchProductsSuccess = createAction(
  '[Product] Fetch Products Success',
  props<{products: Product[]}>()
)

export const fetchProductsFailure = createAction(
  '[Product] Fetch Products Failure',
  props<{error: string}>()
)
