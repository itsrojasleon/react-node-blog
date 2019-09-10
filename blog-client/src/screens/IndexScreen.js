import React, { useContext, useState } from 'react';
import { Context as AuthContext } from '../context/AuthContext';

const IndexScreen = () => {
  const { state, signup } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  console.log(state);
  return (
    <div>
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
    </div>
  );
};
export default IndexScreen;
