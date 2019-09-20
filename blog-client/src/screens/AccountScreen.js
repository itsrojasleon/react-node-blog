import React, { Suspense, lazy, useContext, useEffect } from 'react';
import { Context as AuthContext } from '../context/AuthContext';
import { Button, UserContainer } from '../styles/index';
import Spinner from '../components/Spinner';

const UserProfile = lazy(() => import('../components/UserProfile'));

const AccountScreen = () => {
  const { state, fetchUser, signout } = useContext(AuthContext);

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <Suspense fallback={<Spinner />}>
      <UserContainer>
        <UserProfile {...state.user} />
        <Button black onClick={signout}>
          Signout
        </Button>
      </UserContainer>
    </Suspense>
  );
};
export default AccountScreen;
