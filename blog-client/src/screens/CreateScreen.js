import React, { useContext } from 'react';
import BlogForm from '../components/BlogForm';
import { Context as BlogContext } from '../context/BlogContext';

const CreateScreen = () => {
  const { createBlog } = useContext(BlogContext);

  return (
    <div>
      <h3>Create Blogs</h3>
      <BlogForm onSubmit={createBlog} />
    </div>
  );
};
export default CreateScreen;
