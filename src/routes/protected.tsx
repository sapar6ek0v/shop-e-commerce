import React, { lazy } from 'react';
import { Navigate } from 'react-router-dom';

import { Paths } from '../config/paths';

const Main = lazy(() => import('../features/main'));
const Cart = lazy(() => import('../features/cart'));
const Order = lazy(() => import('../features/order'));

export const protectedRoutes = [
  {
    path: Paths.MAIN,
    element: <Main />,
  },
  {
    path: Paths.CART,
    element: <Cart />,
  },
  {
    path: Paths.ORDER,
    element: <Order />,
  },
  {
    path: '*',
    element: <Navigate to={Paths.MAIN} />
  },
];