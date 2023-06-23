import { Cart } from '../types';

export const decreaseQuantity = (cart: Cart[], productId: number) => {
  let basket: Cart[] = [];

  if (cart.some((item) => item.id === productId)) {
    if (cart[productId].quantity > 1) {
      const decreaseCount = cart.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
      );
      basket = decreaseCount;
    } else {
      const filteredCart = cart.filter((item) => item.id !== productId);
      basket = filteredCart;
    }
  }
  return basket;
};
