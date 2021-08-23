import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import dotenv from 'dotenv';

import './services/firebase';
import './styles/global.scss';

dotenv.config();

// carregar tag <script>, em ReactDOM essas APIs de nível superior estarão disponíveis globalmente 
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);