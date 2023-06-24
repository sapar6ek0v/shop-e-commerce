import { Cart } from '../types';

export const decreaseQuantity = (cart: Cart[], productId: number): Cart[] => {
  let basket: Cart[] = [];
  const quantity = cart.find((item) => item.id === productId)
    ?.quantity as number;

  if (cart.some((item) => item.id === productId)) {
    if (quantity > 1) {
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
