import React, { lazy } from 'react';

import Layout from '../components/Layout';
import { Paths } from '../config/paths';

const Login = lazy(() => import('../features/auth/Login'));

export const publicRoutes = [
  {
    path: Paths.LOGIN,
    element: <Layout><Login /></Layout>,
  },
];