import React from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';
import styled from 'styled-components';

const Form = styled.form`
  margin: 20px auto;
  max-width: 381px;
  animation: fade 200ms ease-out;
`;

const FormGroup = styled.fieldset`
  margin: 0 15px 20px;
  border-style: none;
  background-color: #bbbbc25e;
  will-change: opacity, transform;
  border-radius: 4px;
`;

const FormRow = styled.div`
  margin-left: 15px;
  padding: 11px 15px 11px 0;
`;

const FormStatement = styled.div`
  margin: 15px auto;
  font-size: 14px;
  color: #818181;
  border: none;
`;

const Button = styled.button`
  display: block;
  font-size: 16px;
  width: calc(100% - 30px);
  height: 40px;
  margin: auto;
  background-color: #0062cc;
  border-radius: 4px;
  color: #fff;
  font-weight: 600;
  cursor: pointer;
  transition: all 100ms ease-in-out;
  will-change: transform, background-color, box-shadow;
`;

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

    if (!error) {
      console.log('Stripe 23 | token generated!', paymentMethod);
      // send token to backend here
      // try {
      //   const { id } = paymentMethod;
      //   const response = await axios.post(
      //     'http://localhost:8080/stripe/charge',
      //     {
      //       amount: 999,
      //       id,
      //     }
      //   );

      //   console.log('Stripe 35 | data', response.data.success);
      //   if (response.data.success) {
      //     console.log('CheckoutForm.js 25 | payment successful!');
      //   }
      // } catch (error) {
      //   console.log('CheckoutForm.js 28 | ', error);
      // }
    } else {
      console.log(error.message);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <FormRow>
          <CardElement />
        </FormRow>
      </FormGroup>

      <FormStatement>
        By proceeding, I agree with the terms of the license agreement, privacy
        policy and terms and conditions.
      </FormStatement>
      <Button>PAY</Button>
    </Form>
  );
};

export default CheckoutForm;
