import { Product } from '../../apis/products/types';

export interface InitialState {
  products: Product[];
  byPriceOrName: number;
  byName: number;
  byPrice: number;
  cart: Cart[];
}

export interface Cart extends Product {
  quantity: number;
}
