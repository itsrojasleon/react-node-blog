import React, { useContext } from 'react';
import { Context as AuthContext } from '../context/AuthContext';

const AccountScreen = () => {
  const { state, signout } = useContext(AuthContext);
  // console.log(state);
  return (
    <div>
      <div>Hello there</div>
      <button onClick={signout}>Signout</button>
    </div>
  );
};
export default AccountScreen;
