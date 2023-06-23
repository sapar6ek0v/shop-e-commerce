import { Product } from '../../apis/products/types';

export interface InitialState {
  cart: Cart[];
}

export interface Cart extends Product {
  quantity: number;
}
