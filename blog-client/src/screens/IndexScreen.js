import React, { useContext, useEffect } from 'react';
import { Link } from '@reach/router';
import { Context as BlogContext } from '../context/BlogContext';
import BlogDetail from '../components/BlogDetail';

const IndexScreen = () => {
  const { state, fetchBlogs, deleteBlog } = useContext(BlogContext);

  useEffect(() => {
    fetchBlogs();
  }, []);

  console.log(state);

  return (
    <div>
      <h1>Index Page</h1>
      <div>You are authenticated</div>
      <Link to="/create">Create</Link>
      {state.length > 0 &&
        state.map(blog => (
          <BlogDetail key={blog._id} {...blog} onDelete={deleteBlog} />
        ))}
      <Link to="account">Account</Link>
    </div>
  );
};
export default IndexScreen;
