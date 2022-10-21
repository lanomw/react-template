import React from 'react';
import { createRoot } from 'react-dom/client';

import DefaultLayout from '@/layout';

import './global.less';

const root = document.getElementById('root');
if (root) {
  createRoot(root).render(
    <React.StrictMode>
      <DefaultLayout />
    </React.StrictMode>,
  );
}
