import React from 'react';
import AuthScreen from './screens/AuthScreen';

// Add logic for signup or signin

const UnauthenticatedApp = () => {
  return (
    <div>
      <h2>You are unauthenticated</h2>
      <AuthScreen path="signup" />
    </div>
  );
};
export default UnauthenticatedApp;
