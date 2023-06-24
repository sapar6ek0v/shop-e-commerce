import { useEffect } from 'react';

import { useAppDispatch } from '../../../lib/useAppDispatch';
import { useAppSelector } from '../../../lib/useAppSelector';
import { setCart } from '../../../store/slices/products';
import { Cart } from '../../../store/slices/products/types';
import { sortByPriceOrName } from '../../../utils/sortByPriceOrName';

export function useCart() {
  const dispatch = useAppDispatch();
  const { cart, byName, byPrice, byPriceOrName } = useAppSelector(
    (store) => store.product
  );

  useEffect(() => {
    if (cart) {
      const sortedCart = sortByPriceOrName(
        byPriceOrName,
        byName,
        byPrice,
        cart
      );

      dispatch(setCart(sortedCart as Cart[]));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [byName, byPrice, byPriceOrName]);

  return { cart };
}
