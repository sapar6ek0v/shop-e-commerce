import React, { lazy } from 'react';
import { Navigate } from 'react-router-dom';

import { Paths } from '../config/paths';

const Main = lazy(() => import('../features/main'));
const Cart = lazy(() => import('../features/cart'));

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
    path: '*',
    element: <Navigate to={Paths.LOGIN} />
  },
];