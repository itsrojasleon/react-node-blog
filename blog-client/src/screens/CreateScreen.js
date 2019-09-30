import React, { useContext } from 'react';
import BlogForm from '../components/BlogForm';
import { Context as BlogContext } from '../context/BlogContext';

const CreateScreen = () => {
  const { createBlog } = useContext(BlogContext);

  return (
    <div>
      <h3>Create your amazing blog.</h3>
      <BlogForm onSubmit={createBlog} text="Create Blog" />
    </div>
  );
};
export default CreateScreen;
