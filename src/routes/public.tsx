import { lazy } from 'react';

import { Paths } from '../config/paths';

const Login = lazy(() => import('../features/auth/Login'));

export const publicRoutes = [
  {
    path: Paths.LOGIN,
    element: <Login />,
  },
];
