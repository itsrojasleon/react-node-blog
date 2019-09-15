import React, { Suspense, lazy } from 'react';
import { Router } from '@reach/router';

import { Container } from './styles/index';

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
      <Container>
        <Router>
          <IndexScreen path="/" />
          <DetailScreen path="/:id" />
          <CreateScreen path="create" />
          <EditScreen path="/edit/:id" />
          <AccountScreen path="account" />
        </Router>
      </Container>
    </Suspense>
  );
};
export default AuthenticatedApp;
