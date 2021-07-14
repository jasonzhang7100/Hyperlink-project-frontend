import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StepButton = styled.button`
  width: 6.5rem;
  height: 2rem;
  border: none;
  border-radius: 0.2rem;
  background-color: rgb(24, 28, 77);
  color: #fff;
  &:hover {
    cursor: pointer;
  }
`;

const Payment = ({ price, handlePaidStatus, handleNextStep }) => {
  const handleClick = () => {
    handlePaidStatus();
    handleNextStep();
  };
  return (
    <>
      显示要付的金额
      {price}
      <StepButton onClick={handleClick}>PLACE ORDER</StepButton>
    </>
  );
};

Payment.propTypes = {
  price: PropTypes.number.isRequired,
  handlePaidStatus: PropTypes.func.isRequired,
  handleNextStep: PropTypes.func.isRequired,
};

export default Payment;
