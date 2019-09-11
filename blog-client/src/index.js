import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider as AuthProvider } from './context/AuthContext';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <AuthProvider>
    <App />
  </AuthProvider>,
  document.getElementById('root')
);

serviceWorker.unregister();
