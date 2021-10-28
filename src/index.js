import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// Importación de Contexto
import { ProovedorBD } from './contexts/contextBD'; 

ReactDOM.render(
    <ProovedorBD>
      <App />
    </ProovedorBD>,
  document.getElementById('root')
);
