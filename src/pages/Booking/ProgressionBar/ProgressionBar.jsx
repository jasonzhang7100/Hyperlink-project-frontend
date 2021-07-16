import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  width: 29rem;
  margin: 5rem auto 6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StageWrapper = styled.div`
  width: max-content;
  position: relative;
`;

const Stage = styled.div`
  width: 4rem;
  height: 4rem;
  line-height: 4rem;
  border: 1px solid #181b50;
  border-radius: 50%;
  text-align: center;
  transition: all 0.2s;
  &::after {
    content: "";
    display: ${({ children }) => (children === 1 ? 'none' : 'block')};
    background-color: ${({ state, children }) => (state >= children ? '#181b50' : '#c7c7c7')};
    width: 121px;
    height: 1px;
    position: absolute;
    right: 4.5rem;
    top: 2rem;
    transition: all 0.2s;
  }

  ${({ state, children }) => ({
    true: css`
        background-color: #181b50;
        color: #fff;
      `,
    false: css`
        background-color: #fff;
        color: #181b50;
      `,
  }[state >= children])}
`;

const StageDescription = styled.div`
  font-size: 14px;
  white-space: nowrap;
  position: absolute;
  left: 2rem;
  transform: translate(-50%, 8px);
`;

const ProgressionBar = ({ step }) => {
  const stepTable = [
    { stage: 1, description: 'Booking Details' },
    { stage: 2, description: 'Payment' },
    { stage: 3, description: 'Confirm' },
  ];
  return (
    <Container>
      {stepTable.map(({ stage, description }) => (
        <StageWrapper>
          <Stage state={step}>{stage}</Stage>
          <StageDescription>{description}</StageDescription>
        </StageWrapper>
      ))}
    </Container>
  );
};

ProgressionBar.propTypes = {
  step: PropTypes.number.isRequired,
};
Stage.propTypes = {
  state: PropTypes.number.isRequired,
  children: PropTypes.number.isRequired,
};
StageDescription.propTypes = {
  children: PropTypes.string.isRequired,
};

export default ProgressionBar;
