import React from 'react';
import type { RouteObject } from 'react-router';
import { useRoutes } from 'react-router';

import ErrorElement from '@/components/ErrorElement';

interface BaseRouterProps {
  routes: RouteObject[];
}

const BaseRouter = ({ routes }: BaseRouterProps) => {
  const finalRoutes = routes.map(item => ({
    ...item,
    errorElement: <ErrorElement />,
  }));

  return useRoutes(finalRoutes);
};

export default BaseRouter;
