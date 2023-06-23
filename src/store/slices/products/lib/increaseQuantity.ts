import { Product } from '../../../apis/products/types';
import { Cart } from '../types';

export const increaseQuantity = (cart: Cart[], product: Product) => {
  let basket: Cart[] = [];

  if (cart.some((item) => item.id === product.id)) {
    const increaseCount = cart.map((item) =>
      item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
    );
    basket = increaseCount;
  } else {
    basket = [...cart, { ...product, quantity: 1 }];
  }

  return basket;
};
