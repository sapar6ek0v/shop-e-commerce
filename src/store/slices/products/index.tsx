import { createSlice, current, PayloadAction } from '@reduxjs/toolkit';

import { Product } from '../../apis/products/types';
import { decreaseQuantity } from './lib/decreaseQuantity';
import { increaseQuantity } from './lib/increaseQuantity';
import { InitialState } from './types';

const initialState = {
  cart: [],
} as InitialState;

export const productSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    addToCart: (state, { payload }: PayloadAction<Product>) => {
      const cart = current(state.cart);

      state.cart = increaseQuantity(cart, payload);
    },

    deleteFromCart: (state, { payload }: PayloadAction<number>) => {
      const cart = current(state.cart);

      state.cart = decreaseQuantity(cart, payload);
    }
  },
  extraReducers: () => { }
});

export const { addToCart, deleteFromCart } = productSlice.actions;
export default productSlice.reducer;
