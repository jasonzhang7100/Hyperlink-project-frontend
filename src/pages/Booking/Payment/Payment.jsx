import React from 'react';
import PropTypes from 'prop-types';
import ButtonContinue from '../../../components/ButtonContinue';

const Payment = ({ price, handlePaidStatus, handleNextStep }) => {
  const handleClick = () => {
    handlePaidStatus();
    handleNextStep();
  };
  return (
    <>
      显示要付的金额
      {price}
      <ButtonContinue onClick={handleClick}>PLACE ORDER</ButtonContinue>
    </>
  );
};

Payment.propTypes = {
  price: PropTypes.number.isRequired,
  handlePaidStatus: PropTypes.func.isRequired,
  handleNextStep: PropTypes.func.isRequired,
};

export default Payment;
