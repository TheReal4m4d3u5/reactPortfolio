import React from 'react';
import { createRoot } from 'react-dom/client'; // Updated import
import App from './App'; // Ensure path is correct
import './styles/styles.css';

const root = document.getElementById('root');
createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);