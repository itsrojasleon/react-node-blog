import React, { useContext, useEffect } from 'react';
import { Context as BlogContext } from '../context/BlogContext';
import BlogForm from '../components/BlogForm';

const EditScreen = ({ location }) => {
  const { state, fetchBlogs, updateBlog } = useContext(BlogContext);

  console.log(state);

  const { id } = location.state;

  useEffect(() => {
    fetchBlogs();
  }, []);

  const blog = state.find(b => b._id === id);

  if (!blog) {
    return 'loading...';
  }

  return (
    <div>
      <BlogForm
        onSubmit={({ title, content, image }) =>
          updateBlog({ id, title, content, image })
        }
        initialValues={{
          title: blog.title,
          content: blog.content,
          image: blog.image
        }}
        text="Edit Blog"
      />
    </div>
  );
};
export default EditScreen;
