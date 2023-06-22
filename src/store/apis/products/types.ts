export interface Product {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
  rating: ProductRating;
}

export interface ProductRating {
  rate: number;
  count: number;
}

export enum Categories {
  ELECTRONICS = 'electronics',
  JEWERELY = 'jewelery',
  MEN_S_CLOTH = "men's clothing",
  WOMEN_S_CLOTH = "women's clothing"
}
