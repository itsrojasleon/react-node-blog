import React, { useContext } from 'react';
import AuthScreen from './screens/AuthScreen';
import { Context as AuthContext } from './context/AuthContext';

// Add logic for signup or signin

const UnauthenticatedApp = () => {
  const { state, signup } = useContext(AuthContext);

  return (
    <div>
      <AuthScreen />
    </div>
  );
};
export default UnauthenticatedApp;
