import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import BaseRouter from '@/components/BaseRouter';

import routes from '@/config/routes';

import './global.less';

const root = document.getElementById('root');

if (root) {
  createRoot(root).render(
    <React.StrictMode>
      <BrowserRouter>
        <BaseRouter routes={routes} />
      </BrowserRouter>
    </React.StrictMode>,
  );
}
