import React from 'react';
import { Link } from '@reach/router';
import { stringToUrl } from '../utils/string-to-url';
import { timeToRead } from '../utils/time-to-read';

const BlogDetail = ({ onDelete, title, content, image, _id }) => {
  const time = timeToRead(content);

  return (
    <div style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
      <Link to={`${stringToUrl(title)}`} state={{ id: _id }}>
        <h3>{title}</h3>
      </Link>
      <p>{time ? time : 1} min</p>
      <button onClick={() => onDelete(_id)}>Delete</button>
    </div>
  );
};
export default BlogDetail;
