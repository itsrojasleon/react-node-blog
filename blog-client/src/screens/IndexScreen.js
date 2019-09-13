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
      <h1>Index Page</h1>
      <div>You are authenticated</div>
      {state.map(blog => (
        <Suspense key={blog._id} fallback={<h2>Loading...</h2>}>
          <BlogDetail {...blog} onDelete={deleteBlog} />
        </Suspense>
      ))}
    </div>
  );
};
export default IndexScreen;
