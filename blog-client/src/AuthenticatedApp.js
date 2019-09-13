import React, { Suspense, lazy } from 'react';
import { Router } from '@reach/router';

const AccountScreen = lazy(() => import('./screens/AccountScreen'));
const IndexScreen = lazy(() => import('./screens/IndexScreen'));
const CreateScreen = lazy(() => import('./screens/CreateScreen'));
const DetailScreen = lazy(() => import('./screens/DetailScreen'));
const EditScreen = lazy(() => import('./screens/EditScreen'));
const Header = lazy(() => import('./components/Header'));

const AuthenticatedApp = () => {
  return (
    <Suspense fallback={null}>
      <Header />
      <Router>
        <IndexScreen path="/" />
        <DetailScreen path="/:id" />
        <CreateScreen path="create" />
        <EditScreen path="/edit/:id" />
        <AccountScreen path="account" />
      </Router>
    </Suspense>
  );
};
export default AuthenticatedApp;
