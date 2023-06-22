import { Categories } from '../store/apis/products/types';

export const showTextByCategory = (category: Categories | string) => {
  switch (category) {
    case Categories.ELECTRONICS:
      return 'электроника';
    case Categories.JEWERELY:
      return 'ювелирная';
    case Categories.MEN_S_CLOTH:
      return 'мужская';
    case Categories.WOMEN_S_CLOTH:
      return 'Женская';
    default:
      return '';
  }
};
