import React from 'react';
import { Link } from '@reach/router';
import { stringToUrl } from '../utils/string-to-url';
import { timeToRead } from '../utils/time-to-read';
import { firstCapitalLetter } from '../utils/first-capital-letter';
import { showSomeContent } from '../utils/show-some-content';
import { Title, Box, Content, IconContainer, Time } from '../styles/index';
import { FiTrash2 } from 'react-icons/fi';

const BlogDetail = ({ title, content, _id, onDelete }) => {
  const time = timeToRead(content);

  return (
    <Box>
      <div>
        <Link to={`${stringToUrl(title)}`} state={{ id: _id }}>
          <Title margin>{firstCapitalLetter(title)}</Title>
        </Link>
        <Content>{showSomeContent(content)}...</Content>
        <Time>{time ? time : 1} min</Time>
      </div>
      <IconContainer>
        <FiTrash2 onClick={() => onDelete(_id)} />
      </IconContainer>
    </Box>
  );
};
export default BlogDetail;
