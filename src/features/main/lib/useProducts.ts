import { useEffect } from 'react';

import { useAppDispatch } from '../../../lib/useAppDispatch';
import { useAppSelector } from '../../../lib/useAppSelector';
import { useGetAllProductsQuery } from '../../../store/apis/products';
import { setProducts } from '../../../store/slices/products';
import { sortByPriceOrName } from '../../../utils/sortByPriceOrName';

export function useProducts() {
  const dispatch = useAppDispatch();
  const { products, byName, byPrice, byPriceOrName } = useAppSelector(
    (store) => store.product
  );

  const { data, isLoading } = useGetAllProductsQuery();

  useEffect(() => {
    if (data) {
      const sortedProducts = sortByPriceOrName(
        byPriceOrName,
        byName,
        byPrice,
        data
      );

      dispatch(setProducts(sortedProducts));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, byName, byPrice, byPriceOrName]);

  return { products, isLoading };
}
