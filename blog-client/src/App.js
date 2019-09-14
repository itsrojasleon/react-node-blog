import React, { Suspense, lazy, useContext, useEffect } from 'react';
import { Context as AuthContext } from './context/AuthContext';

const AuthenticatedApp = lazy(() => import('./AuthenticatedApp'));
const UnauthenticatedApp = lazy(() => import('./UnauthenticatedApp'));

const App = () => {
  const { state, tryLocalSignin } = useContext(AuthContext);

  useEffect(() => {
    tryLocalSignin();
  }, []);

  return (
    <Suspense fallback={<div>LOADING...</div>}>
      {state.token ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </Suspense>
  );
};
export default App;
