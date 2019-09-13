import React, { Suspense, lazy, useContext, useEffect } from 'react';
import { Provider as AuthProvider } from './context/AuthContext';
import { Provider as BlogProvider } from './context/BlogContext';
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
      <AuthProvider>
        <BlogProvider>
          {state.token ? <AuthenticatedApp /> : <UnauthenticatedApp />}
        </BlogProvider>
      </AuthProvider>
    </Suspense>
  );
};
export default App;
