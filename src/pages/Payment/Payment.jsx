import React from 'react';
import styled from 'styled-components';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

import CheckoutForm from './Stripe';

const PaymentContainer = styled.div`
  font-family: Roboto;
  text-align: center;
`;

const PaymentTitle = styled.div`
  margin: 20px auto 20px;
  font-size: 24px;
`;

const PUBLIC_KEY =
  'pk_test_51JAT9YC8FjBDUp9B7ovNxTZYvGyOeuWnLvddN3VrH0I5sfleL0eATlWon3tn1i4MfeSHrpVS02wrqKArGD8FgQny00DW4yXprq';

const stripeTestPromise = loadStripe(PUBLIC_KEY);

const Payment = (props) => {
  const data = [];

  return (
    <PaymentContainer>
      <div>[this is progress bar......]</div>
      <PaymentTitle>Payment</PaymentTitle>
      <div>We will secure your spot once we receive your payment.</div>
      <br />
      <div>Pay with your credit card.</div>
      <Elements stripe={stripeTestPromise}>
        <CheckoutForm user={data} />
      </Elements>
    </PaymentContainer>
  );
};

export default Payment;
