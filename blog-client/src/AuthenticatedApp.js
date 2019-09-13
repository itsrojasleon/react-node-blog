import React, { Suspense, lazy } from 'react';
import { Router } from '@reach/router';

const AccountScreen = lazy(() => import('./screens/AccountScreen'));
const IndexScreen = lazy(() => import('./screens/IndexScreen'));
const CreateScreen = lazy(() => import('./screens/CreateScreen'));
const DetailScreen = lazy(() => import('./screens/DetailScreen'));
const EditScreen = lazy(() => import('./screens/EditScreen'));

const AuthenticatedApp = () => {
  return (
    <Suspense fallback={null}>
      <Router>
        <IndexScreen path="/" />
        <DetailScreen path="/:id" />
        <CreateScreen path="create" />
        <EditScreen path="edit" />
        <AccountScreen path="account" />
      </Router>
    </Suspense>
  );
};
export default AuthenticatedApp;
