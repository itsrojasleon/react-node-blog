import React, { useContext, useEffect } from 'react';
import { Context as BlogContext } from '../context/BlogContext';
import { stringToUrl } from '../utils/string-to-url';
import { firstCapitalLetter } from '../utils/first-capital-letter';
import { Link } from '@reach/router';
import { Title, Text, Image, Edit } from '../styles/index';
import { FiEdit2 } from 'react-icons/fi';

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
      <Title>{firstCapitalLetter(blog.title)}</Title>
      <Image
        loading="lazy"
        width="100"
        height="auto"
        src={blog.image}
        alt={blog.title}
      />
      <Text>{blog.content}</Text>
      <Link to={`/edit/${stringToUrl(blog.title)}`} state={{ id: blog._id }}>
        <Edit>
          <>
            <FiEdit2 style={{ marginRight: '10px' }} /> Edit this blog
          </>
        </Edit>
      </Link>
    </div>
  );
};
export default DetailScreen;
