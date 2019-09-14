import React, { useContext, useEffect } from 'react';
import { Context as BlogContext } from '../context/BlogContext';
import BlogForm from '../components/BlogForm';

const EditScreen = ({ location }) => {
  console.log(location);
  const { state, fetchBlogs, updateBlog } = useContext(BlogContext);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const id = location.state.id;

  const blog = state.find(b => b._id === id);

  return (
    <div>
      <BlogForm
        onSubmit={updateBlog}
        initialValues={{
          title: blog.title,
          content: blog.content,
          image: blog.image
        }}
      />
    </div>
  );
};
export default EditScreen;
