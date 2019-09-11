import React, { useContext } from 'react';
import AuthForm from '../components/AuthForm';
import { Context as AuthContext } from '../context/AuthContext';

const AuthScreen = () => {
  const { state, signup } = useContext(AuthContext);

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
