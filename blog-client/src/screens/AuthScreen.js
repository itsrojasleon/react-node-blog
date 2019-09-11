import React, { useContext, useEffect } from 'react';
import AuthForm from '../components/AuthForm';
import { Context as AuthContext } from '../context/AuthContext';

const AuthScreen = () => {
  const { state, signup, tryLocalSignin } = useContext(AuthContext);

  useEffect(() => {
    tryLocalSignin();
  }, []);

  return (
    <div>
      <h2>Auth Screen</h2>
      <AuthForm
        title="Signup"
        onSubmit={signup}
        errorMessage={state.errorMessage}
      />
    </div>
  );
};
export default AuthScreen;
