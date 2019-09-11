import React from 'react';
import { Router } from '@reach/router';
import IndexScreen from './screens/IndexScreen';

const AuthenticatedApp = () => {
  return (
    <Router>
      <IndexScreen path="/" />
    </Router>
  );
};
export default AuthenticatedApp;
