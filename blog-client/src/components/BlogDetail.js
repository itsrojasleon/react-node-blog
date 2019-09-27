import React, { useState } from 'react';
import { Link } from '@reach/router';
import { stringToUrl } from '../utils/string-to-url';
import { timeToRead } from '../utils/time-to-read';
import { firstCapitalLetter } from '../utils/first-capital-letter';
import { showSomeContent } from '../utils/show-some-content';
import {
  Title,
  Box,
  Content,
  IconContainer,
  Time,
  ModalContainer,
  ModalContent,
  FixContainer,
  ModalButton,
  Text
} from '../styles/index';
import { FiTrash2, FiEdit2, FiMoreVertical, FiX } from 'react-icons/fi';
import Modal from './Modal';

const BlogDetail = ({ title, content, _id, onDelete }) => {
  const [showPortal, setShowPortal] = useState(false);
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
        {showPortal && (
          <Modal>
            <ModalContainer onClick={() => setShowPortal(false)}>
              <ModalContent>
                <FixContainer>
                  <FiX onClick={() => setShowPortal(false)} />
                </FixContainer>
                <Text>you can do this:</Text>
                <span>
                  <ModalButton>
                    <FiTrash2 onClick={() => onDelete(_id)} />
                    <span>Delete blog</span>
                  </ModalButton>
                  <ModalButton>
                    <FiEdit2 onClick={() => onDelete(_id)} />
                    <span>Edit Blog</span>
                  </ModalButton>
                </span>
              </ModalContent>
            </ModalContainer>
          </Modal>
        )}
        {!showPortal && <FiMoreVertical onClick={() => setShowPortal(true)} />}
      </IconContainer>
    </Box>
  );
};
export default BlogDetail;
