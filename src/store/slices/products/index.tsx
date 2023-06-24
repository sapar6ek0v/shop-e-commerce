import { createSlice, current, PayloadAction } from '@reduxjs/toolkit';

import { Product } from '../../apis/products/types';
import { decreaseQuantity } from './lib/decreaseQuantity';
import { increaseQuantity } from './lib/increaseQuantity';
import { Cart, InitialState } from './types';

const initialState = {
  products: [],
  byName: 1,
  byPrice: 1,
  byPriceOrName: 1,
  cart: [],
} as InitialState;

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProducts: (state, { payload }: PayloadAction<Product[]>) => {
      state.products = payload;
    },

    setCart: (state, { payload }: PayloadAction<Cart[]>) => {
      state.cart = payload;
    },

    addToCart: (state, { payload }: PayloadAction<Product>) => {
      const cart = current(state.cart);

      state.cart = increaseQuantity(cart, payload);
    },

    deleteFromCart: (state, { payload }: PayloadAction<number>) => {
      const cart = current(state.cart);

      state.cart = decreaseQuantity(cart, payload);
    },

    sortByName: (state) => {
      const { byName } = current(state);

      state.byPriceOrName = -1;
      state.byName = -byName;
    },

    sortByPrice: (state) => {
      const { byPrice } = current(state);

      state.byPriceOrName = 1;
      state.byPrice = -byPrice;
    },
  },
  extraReducers: () => {},
});

export const {
  setProducts,
  setCart,
  addToCart,
  deleteFromCart,
  sortByName,
  sortByPrice,
} = productSlice.actions;
export default productSlice.reducer;
