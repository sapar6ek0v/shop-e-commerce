import { Product } from '../store/apis/products/types';
import { Cart } from '../store/slices/products/types';

export const sortByPriceOrName = (
  byPriceOrName: number,
  byName: number,
  byPrice: number,
  data: Product[] | Cart[]
) => {
  let sortedData;

  if (byPriceOrName < 0) {
    if (byName > 0) {
      sortedData = [...data].sort((a, b) => a.title.localeCompare(b.title));
    } else {
      sortedData = [...data].sort((a, b) => b.title.localeCompare(a.title));
    }
  } else {
    // eslint-disable-next-line no-lonely-if
    if (byPrice > 0) {
      sortedData = [...data].sort((a, b) => a.price - b.price);
    } else {
      sortedData = [...data].sort((a, b) => b.price - a.price);
    }
  }

  return sortedData;
};
