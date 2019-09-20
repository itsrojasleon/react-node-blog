import React from 'react';
import styled from '@emotion/styled';

const Loader = styled.div`
  display: inline-block;
  position: relative;
  width: 64px;
  height: 64px;
  & > div {
    position: absolute;
    border: 4px solid rgb(160, 160, 160);
    opacity: 1;
    border-radius: 50%;
    animation: anim 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }
  & > div:nth-of-type(2) {
    animation-delay: -0.5s;
  }
  @keyframes anim {
    0% {
      top: 28px;
      left: 28px;
      width: 0;
      height: 0;
      opacity: 1;
    }
    100% {
      top: -1px;
      left: -1px;
      width: 58px;
      height: 58px;
      opacity: 0;
    }
  }
`;
const LoaderContainer = styled.div`
  text-align: center;
  margin: auto;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Spinner = () => {
  return (
    <LoaderContainer>
      <Loader>
        <div></div>
        <div></div>
      </Loader>
    </LoaderContainer>
  );
};
export default Spinner;
