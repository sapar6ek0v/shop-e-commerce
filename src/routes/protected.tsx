import React, { Suspense } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import Layout from '../components/Layout';
import { Paths } from '../config/paths';
// import { lazyImport } from '@/utils/lazyImport';


const App = () => {
  return (
    <Layout>
      <Suspense
        fallback={
          <div className="h-full w-full flex items-center justify-center">
            Loading..
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </Layout>
  );
};

export const protectedRoutes = [
  {
    path: '/',
    element: <App />,
    children: [
      { path: '*', element: <Navigate to="." /> },
    ],
  },
  {
    path: '*',
    element: <Navigate to={Paths.LOGIN} />
  },
];