import React, { useContext, useEffect } from 'react';
import { Context as BlogContext } from '../context/BlogContext';
import { stringToUrl } from '../utils/string-to-url';
import { Link } from '@reach/router';

const DetailScreen = ({ location }) => {
  const { state, fetchBlogs, updateBlog } = useContext(BlogContext);

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
      <div>
        <Link to={`/edit/${stringToUrl(blog.title)}`} state={{ id: blog._id }}>
          Edit this blog
        </Link>
      </div>
    </div>
  );
};
export default DetailScreen;
