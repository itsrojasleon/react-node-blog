import React, { useContext, useEffect } from 'react';
import { Link } from '@reach/router';
import { Context as BlogContext } from '../context/BlogContext';

const IndexScreen = () => {
  const { state, fetchBlogs, createBlog } = useContext(BlogContext);
  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div>
      <h1>Index Page</h1>
      <div>You are authenticated</div>
      <Link to="/create">Create</Link>
      {state.length > 0 &&
        state.map(blog => (
          <div style={{ border: '1px solid #ccc' }} key={blog.title}>
            <div>{blog.title}</div>
            <div>{blog.content}</div>
            <div>{blog.image}</div>
          </div>
        ))}
      <Link to="account">Account</Link>
    </div>
  );
};
export default IndexScreen;
