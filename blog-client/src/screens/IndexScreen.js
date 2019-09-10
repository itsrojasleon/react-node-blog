import React, { useContext } from 'react';
import { Context as AuthContext } from '../context/AuthContext';

const IndexScreen = () => {
  const { state } = useContext(AuthContext);
  console.log(state);
  return <div>Hello there</div>;
};
export default IndexScreen;
