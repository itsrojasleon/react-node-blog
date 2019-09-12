import React from 'react';
import { Router } from '@reach/router';
import IndexScreen from './screens/IndexScreen';
import AccountScreen from './screens/AccountScreen';

const AuthenticatedApp = () => {
  return (
    <Router>
      <IndexScreen path="/" />
      <AccountScreen path="account" />
    </Router>
  );
};
export default AuthenticatedApp;
