import React from 'react';
import { useRoutes } from 'react-router-dom';

import { useAppSelector } from '../lib/useAppSelector';
import { protectedRoutes } from './protected';
import { publicRoutes } from './public';


export const AppRoutes = () => {
  const { user } = useAppSelector((store) => store.auth);

  const routes = user ? protectedRoutes : publicRoutes;

  const element = useRoutes([...routes]);

  return <>{element}</>;
};