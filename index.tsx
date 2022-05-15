import * as React from 'react';
import { createRoot } from 'react-dom/client';
import App from './src/App';

const container = document.getElementById('root');

// @ts-ignore
createRoot(container).render(<App />);
