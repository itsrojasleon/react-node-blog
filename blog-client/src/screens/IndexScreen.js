import React, { useContext } from 'react';
import { Link } from '@reach/router';

const IndexScreen = () => {
  return (
    <div>
      <h1>Index Page</h1>
      <Link to="signup">Signup</Link>
    </div>
  );
};
export default IndexScreen;
