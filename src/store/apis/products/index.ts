import { baseApi } from '..';
import { Product } from './types';

const productsTags = baseApi.enhanceEndpoints({
  addTagTypes: ['Products', 'Categories'],
});

const productsApi = productsTags.injectEndpoints({
  endpoints: (build) => ({
    getAllCategories: build.query<string[], void>({
      query: () => '/products/categories',
      providesTags: ['Categories'],
    }),

    getAllProducts: build.query<Product[], void>({
      query: () => '/products',
      providesTags: ['Products'],
    }),
  }),
});

export const { useGetAllCategoriesQuery, useGetAllProductsQuery } = productsApi;
