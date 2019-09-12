import React from 'react';
import { Link } from '@reach/router';

const IndexScreen = () => {
  return (
    <div>
      <h1>Index Page</h1>
      <div>You are authenticated</div>
      <Link to="account">Account</Link>
    </div>
  );
};
export default IndexScreen;
