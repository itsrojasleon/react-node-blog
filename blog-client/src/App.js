import React from 'react';
import { Router } from '@reach/router';
import IndexScreen from './screens/IndexScreen';
import SignupScreen from './screens/SignupScreen';

const App = () => {
  return (
    <Router>
      <IndexScreen path="/" />
      <SignupScreen path="signup" />
    </Router>
  );
};
export default App;
