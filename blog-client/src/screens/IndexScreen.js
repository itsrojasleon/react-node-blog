import React, { Suspense, lazy, useContext, useEffect } from 'react';
import { Context as BlogContext } from '../context/BlogContext';
import { Text } from '../styles';
const BlogDetail = lazy(() => import('../components/BlogDetail'));

const IndexScreen = () => {
  const { state, fetchBlogs, deleteBlog } = useContext(BlogContext);

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div>
      {state.length === 0 && (
        <div>
          <Text>You don't have any blog yet</Text>
        </div>
      )}
      {state.map(blog => (
        <Suspense key={blog._id} fallback={<h2>Loading...</h2>}>
          <BlogDetail {...blog} onDelete={deleteBlog} />
        </Suspense>
      ))}
    </div>
  );
};
export default IndexScreen;
