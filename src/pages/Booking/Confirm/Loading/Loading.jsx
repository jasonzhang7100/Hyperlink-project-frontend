import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

const Container = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
`;

const rotate = keyframes`
from{
  transform: rotate(0deg);
}
to{
  transform:rotate(360deg);
}
`;

const LoadingBall = styled.div`
  animation: ${rotate} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  transform-origin: 40px 40px;
  animation-delay: ${({ animationDelay }) => animationDelay};
  &::after {
    content: " ";
    display: block;
    position: absolute;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #c7c7c7;
    margin: -4px 0 0 -4px;
    top: ${({ top }) => top};
    left: ${({ left }) => left};
  }
`;

const Loading = () => {
  const loadingBallStateTable = [
    {
      key: 1,
      animationDelay: '-0.036s',
      position: { top: '63px', left: '63px' },
    },
    {
      key: 2,
      animationDelay: '-0.072s',
      position: { top: '68px', left: '56px' },
    },
    {
      key: 3,
      animationDelay: '-0.108s',
      position: { top: '71px', left: '48px' },
    },
    {
      key: 4,
      animationDelay: '-0.144s',
      position: { top: '72px', left: '40px' },
    },
    {
      key: 5,
      animationDelay: '-0.18s',
      position: { top: '71px', left: '32px' },
    },
    {
      key: 6,
      animationDelay: '-0.216s',
      position: { top: '68px', left: '24px' },
    },
    {
      key: 7,
      animationDelay: '-0.252s',
      position: { top: '63px', left: '17px' },
    },
    {
      key: 8,
      animationDelay: '-0.288s',
      position: { top: '56px', left: '12px' },
    },
  ];
  return (
    <Container>
      {loadingBallStateTable.map((loadingBall) => {
        const { key, animationDelay, position } = loadingBall;
        return (
          <LoadingBall
            key={key}
            animationDelay={animationDelay}
            top={position.top}
            left={position.left}
          />
        );
      })}
    </Container>
  );
};

LoadingBall.propTypes = {
  animation: PropTypes.string,
  position: PropTypes.shape({
    top: PropTypes.string,
    left: PropTypes.string,
  }),
};

export default Loading;
