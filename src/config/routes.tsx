import React from 'react';

import Layout from '@/layout';
import Home from '@/pages/Home';
import UserDetail from '@/pages/UserManage/UserDetail';
import UserList from '@/pages/UserManage/UserList';
import PermissionList from '@/pages/PermissionManage/PermissionList';
import RoleList from '@/pages/PermissionManage/RoleList';
import RoleDetail from '@/pages/PermissionManage/RoleDetail';

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
        path: 'permission',
        children: [
          {
            index: true,
            path: 'list',
            element: <PermissionList />,
          },
          {
            path: 'role',
            element: <RoleList />,
          },
          {
            path: 'role/detail',
            element: <RoleDetail />,
          },
        ],
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
