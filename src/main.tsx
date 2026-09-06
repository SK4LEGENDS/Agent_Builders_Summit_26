import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';

console.log('%c[SYS-WARN] Sacred timeline divergence detected. To authorize TVA access, input override code.', 'color: #006400; font-weight: bold; font-family: monospace;');

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
