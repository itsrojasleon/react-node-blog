import React from 'react';
import { Link } from '@reach/router';
import { stringToUrl } from '../utils/string-to-url';
import { timeToRead } from '../utils/time-to-read';
import { firstCapitalLetter } from '../utils/first-capital-letter';
import { Title, Box } from '../styles/index';

const BlogDetail = ({ onDelete, title, content, image, _id }) => {
  const time = timeToRead(content);

  return (
    <Box>
      <Link to={`${stringToUrl(title)}`} state={{ id: _id }}>
        <Title margin>{firstCapitalLetter(title)}</Title>
      </Link>
      <p>{time ? time : 1} min</p>
      <button onClick={() => onDelete(_id)}>Delete</button>
    </Box>
  );
};
export default BlogDetail;
