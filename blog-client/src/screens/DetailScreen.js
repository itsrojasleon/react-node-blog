import React, { useContext, useEffect } from 'react';
import { Context as BlogContext } from '../context/BlogContext';

const DetailScreen = ({ location }) => {
  const { state, fetchBlogs } = useContext(BlogContext);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const blog = state.find(b => b._id === location.state.id);
  if (!blog) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h2>{blog.title}</h2>
      <div>{blog.content}</div>
      <div>{blog._id}</div>
    </div>
  );
};
export default DetailScreen;
