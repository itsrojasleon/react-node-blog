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
  Wrapper
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
                <Wrapper>
                  <ModalButton black>
                    <Link
                      to={`/edit/${stringToUrl(title)}`}
                      state={{ id: _id }}
                    >
                      <FiEdit2 style={{ color: 'white' }} />
                      <span style={{ marginLeft: '3px', color: 'white' }}>
                        Edit Blog
                      </span>
                    </Link>
                  </ModalButton>
                  <ModalButton onClick={() => onDelete(_id)}>
                    <FiTrash2 />
                    <span style={{ marginLeft: '3px' }}>Delete Blog</span>
                  </ModalButton>
                </Wrapper>
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
