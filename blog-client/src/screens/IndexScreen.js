import React, { useContext, useEffect } from 'react';
import { Link } from '@reach/router';
import { Context as BlogContext } from '../context/BlogContext';

const IndexScreen = () => {
  const { state, fetchBlogs, deleteBlog } = useContext(BlogContext);

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
          <div
            style={{
              border: '1px solid #ccc',
              margin: '10px',
              padding: '10px'
            }}
            key={blog._id}
          >
            <div>{blog.title}</div>
            <div>{blog.content}</div>
            <div>{blog.image}</div>
            <div>{blog._id}</div>
            <button onClick={() => deleteBlog({ id: blog._id })}>
              Delete Blog
            </button>
          </div>
        ))}
      <Link to="account">Account</Link>
    </div>
  );
};
export default IndexScreen;
