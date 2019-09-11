import React, { useState } from 'react';

const AuthForm = ({ onSubmit, errorMessage }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ email, password });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Email"
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Pasword"
          onChange={e => setPassword(e.target.value)}
        />
        <button onClick={() => onSubmit({ email, password })}>Signup</button>
        {errorMessage && <div>{errorMessage}</div>}
      </form>
    </div>
  );
};

export default AuthForm;
