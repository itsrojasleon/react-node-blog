import React, { useContext } from 'react';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import { Link } from '@reach/router';

const SignupScreen = () => {
  const { signup } = useContext(AuthContext);
  return (
    <div>
      <h2>Signup</h2>
      <AuthForm onSubmit={signup} />
      <Link to="/">Home</Link>
    </div>
  );
};
export default SignupScreen;
