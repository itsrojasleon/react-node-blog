import React, { Suspense, lazy, useContext, useEffect } from 'react';
import { Context as AuthContext } from '../context/AuthContext';
import { Button, UserContainer } from '../styles/index';

const UserProfile = lazy(() => import('../components/UserProfile'));

const AccountScreen = () => {
  const { state, fetchUser, signout } = useContext(AuthContext);

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <Suspense fallback={<h1>Loading...</h1>}>
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
