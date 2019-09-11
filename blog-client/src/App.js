import React, { useContext, useEffect } from 'react';
import { Context as AuthContext } from './context/AuthContext';
import AuthenticatedApp from './AuthenticatedApp';
import UnauthenticatedApp from './UnauthenticatedApp';

const App = () => {
  const { state, tryLocalSignin } = useContext(AuthContext);

  useEffect(() => {
    tryLocalSignin();
  }, []);

  return (
    <div>{state.token ? <AuthenticatedApp /> : <UnauthenticatedApp />}</div>
  );
};
export default App;
