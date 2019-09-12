import React, { useContext, useEffect } from 'react';
import { Link } from '@reach/router';
import { Context as BlogContext } from '../context/BlogContext';
import { Context as AuthContext } from '../context/AuthContext';

const IndexScreen = () => {
  const { fetchBlogs } = useContext(BlogContext);
  // const { state } = useContext(AuthContext);
  // console.log(state);
  return (
    <div>
      <h1>Index Page</h1>
      <div>You are authenticated</div>
      <Link to="account">Account</Link>
    </div>
  );
};
export default IndexScreen;
