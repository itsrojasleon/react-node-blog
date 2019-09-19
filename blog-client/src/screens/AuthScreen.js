import React, { useState, useContext } from 'react';
import AuthForm from '../components/AuthForm';
import { Context as AuthContext } from '../context/AuthContext';
import { AuthWrapper, Instead } from '../styles/index';

const AuthScreen = () => {
  const { state, signup, signin } = useContext(AuthContext);

  // I need to show the signup form for the first time
  const [showSignup, setShowSignup] = useState(true);

  return (
    <AuthWrapper>
      {showSignup ? (
        <>
          <AuthForm
            title="Signup"
            subtitle="- Create a new Account"
            onSubmit={signup}
            errorMessage={state.errorMessage}
          />
          <Instead onClick={() => setShowSignup(false)}>
            Already have an account? Sign in instead!
          </Instead>
        </>
      ) : (
        <>
          <AuthForm
            title="Signin"
            subtitle="- Signin into your account"
            onSubmit={signin}
            errorMessage={state.errorMessage}
          />
          <Instead onClick={() => setShowSignup(true)}>
            Dont have an account? Sign up instead
          </Instead>
        </>
      )}
    </AuthWrapper>
  );
};
export default AuthScreen;
