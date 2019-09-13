import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider as AuthProvider } from './context/AuthContext';
import { Provider as BlogProvider } from './context/BlogContext';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <AuthProvider>
    <BlogProvider>
      <App />
    </BlogProvider>
  </AuthProvider>,
  document.getElementById('root')
);

serviceWorker.unregister();
