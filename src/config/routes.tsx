import React from 'react';

import Layout from '@/layout';
import Home from '@/pages/Home';
import UserDetail from '@/pages/User/UserDetail';
import UserList from '@/pages/User/UserList';
import NotFound from '@/pages/NotFound';

import type { RouteObject } from 'react-router';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        path: '',
        element: <Home />,
      },
      {
        path: 'user',
        children: [
          {
            index: true,
            path: 'list',
            element: <UserList />,
          },
          {
            path: 'detail',
            element: <UserDetail />,
          },
        ],
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

export default routes;
