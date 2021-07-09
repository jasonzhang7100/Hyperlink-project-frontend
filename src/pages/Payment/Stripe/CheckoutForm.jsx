import React, { useState } from 'react';
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

  ${(props) =>
    ({
      true: `
        background-color: grey;
      `,
    }[props.disabled || false])}
`;

const Error = styled.div`
  color: red;
  margin: 0 auto 10px auto;
`;

const CheckoutForm = (props) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [load, setLoad] = useState(false);
  const [confirm, setConfirm] = useState(null);

  const resetError = () => {
    setError(null);
  };

  const setErrorMessage = (error) => {
    if (error) {
      setError(error.message);
    } else {
      resetError();
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });
    if (!error) {
      console.log('Stripe 23 | token generated!', paymentMethod);
      // send token to backend here
      setLoad(true);
      setConfirm('the payment is being processed......');
      try {
        const { id } = paymentMethod;
        const response = await axios.post(
          'http://localhost:3000/api/stripe/charge',
          {
            amount: 16000,
            id,
            receipt_email: 'customer@example.com', // TO-DO: get email from booking page.
          }
        );
        console.log('Stripe 35 | data', response.data.success);
        if (response.data.success) {
          console.log('CheckoutForm.js 25 | payment successful!');
          setConfirm('payment successful!');
        }
      } catch (error) {
        console.log('CheckoutForm.js 28 | ', error);
        setError(error.message);
        setLoad(false);
      }
    } else {
      console.log(error.message);
      setError(error.message);
      setLoad(false);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <FormRow>
          <CardElement
            onChange={(e) => {
              setErrorMessage(e.error);
            }}
          />
        </FormRow>
      </FormGroup>
      <Error>{error}</Error>
      <div>
        <b>Order total:</b> AU$160.00
      </div>
      <FormStatement>
        By proceeding, I agree with the terms of the license agreement, privacy
        policy and terms and conditions.
      </FormStatement>
      <Button disabled={load}>Pay</Button>
      <br />
      <div>{confirm}</div>
    </Form>
  );
};

export default CheckoutForm;
