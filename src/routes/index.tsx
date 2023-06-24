import { Navigate, useRoutes } from 'react-router-dom';

import Layout from '../components/Layout';
import { Paths } from '../config/paths';
import { useAppSelector } from '../lib/useAppSelector';
import { protectedRoutes } from './protected';
import { publicRoutes } from './public';

export const AppRoutes = () => {
  const { isLoggedIn } = useAppSelector((store) => store.auth);

  const commonRoutes = [
    {
      path: '*',
      element: <Navigate to={Paths.LOGIN} />,
    },
  ];

  const routes = isLoggedIn ? protectedRoutes : publicRoutes;

  const element = useRoutes([...routes, ...commonRoutes]);

  return <Layout>{element}</Layout>;
};
