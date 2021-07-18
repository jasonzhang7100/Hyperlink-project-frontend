import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

import CheckoutForm from './components/Stripe';

const PaymentContainer = styled.div`
  font-family: Roboto;
  text-align: center;
`;

const PaymentTitle = styled.div`
  margin: 1.25rem auto 1.25rem;
  font-size: 1.5rem;
`;

const PUBLIC_KEY = 'pk_test_51JAT9YC8FjBDUp9B7ovNxTZYvGyOeuWnLvddN3VrH0I5sfleL0eATlWon3tn1i4MfeSHrpVS02wrqKArGD8FgQny00DW4yXprq';

const stripeTestPromise = loadStripe(PUBLIC_KEY);

const Payment = ({
  date,
  formData,
  handlePaidStatus,
  handleFormData,
  handleNextStep,
}) => {
  const newFormData = {
    bookingDate: date,
    numOfGuests: formData.guestNumber,
    firstName: formData.firstName,
    lastName: formData.lastName,
    emailAddress: formData.email,
    phoneNumber: formData.phoneNumber,
    dateOfBirth: formData.birthDate,
    paidAmount: formData.price * 0.5,
  };
  return (
    <PaymentContainer>
      <PaymentTitle>Payment</PaymentTitle>
      <div>We will secure your spot once we receive your payment.</div>
      <br />
      <div>Pay with your credit card.</div>
      <Elements stripe={stripeTestPromise}>
        <CheckoutForm
          formData={newFormData}
          handlePaidStatus={handlePaidStatus}
          handleFormData={handleFormData}
          handleNextStep={handleNextStep}
        />
      </Elements>
    </PaymentContainer>
  );
};

Payment.propTypes = {
  date: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  formData: PropTypes.object.isRequired,
  handlePaidStatus: PropTypes.func.isRequired,
  handleFormData: PropTypes.func.isRequired,
  handleNextStep: PropTypes.func.isRequired,
};

export default Payment;
