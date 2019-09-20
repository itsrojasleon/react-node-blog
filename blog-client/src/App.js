import React, { Suspense, lazy, useContext, useEffect } from 'react';
import { Context as AuthContext } from './context/AuthContext';
import Spinner from './components/Spinner';

const AuthenticatedApp = lazy(() => import('./AuthenticatedApp'));
const UnauthenticatedApp = lazy(() => import('./UnauthenticatedApp'));

const App = () => {
  const { state, tryLocalSignin } = useContext(AuthContext);

  useEffect(() => {
    tryLocalSignin();
  }, []);

  return (
    <Suspense fallback={<Spinner />}>
      {state.token ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </Suspense>
  );
};
export default App;
