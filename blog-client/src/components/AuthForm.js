import React, { useState } from 'react';

const AuthForm = ({ signup }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>
      <form>
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
        <button onClick={() => signup({ email, password })}>Signup</button>
      </form>
    </div>
  );
};

export default AuthForm;
