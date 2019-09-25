import React, { Suspense, lazy, useContext, useEffect } from 'react';
import { Context as BlogContext } from '../context/BlogContext';
import { Text } from '../styles';
import Spinner from '../components/Spinner';
const BlogDetail = lazy(() => import('../components/BlogDetail'));

const IndexScreen = () => {
  const { state, fetchBlogs, deleteBlog } = useContext(BlogContext);

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div style={{ marginTop: '20px' }}>
      {state.length === 0 && (
        <div>
          <Text>You don't have any blog yet</Text>
        </div>
      )}
      {state.map(blog => (
        <Suspense key={blog._id} fallback={<Spinner />}>
          <BlogDetail {...blog} onDelete={deleteBlog} />
        </Suspense>
      ))}
    </div>
  );
};
export default IndexScreen;
