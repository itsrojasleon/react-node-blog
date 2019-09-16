import React, { Suspense, lazy, useContext, useEffect } from 'react';
import { Context as BlogContext } from '../context/BlogContext';
const BlogDetail = lazy(() => import('../components/BlogDetail'));

const IndexScreen = () => {
  const { state, fetchBlogs, deleteBlog } = useContext(BlogContext);

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div>
      <h1>My blogs</h1>
      {state.map(blog => (
        <Suspense key={blog._id} fallback={<h2>Loading...</h2>}>
          <BlogDetail {...blog} onDelete={deleteBlog} />
        </Suspense>
      ))}
    </div>
  );
};
export default IndexScreen;
