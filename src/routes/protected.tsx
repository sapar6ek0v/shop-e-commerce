import React, { lazy } from 'react';
import { Navigate } from 'react-router-dom';

import { Paths } from '../config/paths';

const Main = lazy(() => import('../features/main'));

export const protectedRoutes = [
  {
    path: Paths.MAIN,
    element: <Main />,
  },
  {
    path: '*',
    element: <Navigate to={Paths.LOGIN} />
  },
];