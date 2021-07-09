import React from 'react';
import {
  CardElement,
  ElementsConsumer,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
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

class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: undefined,
      data: {
        load: false,
        confirm: undefined,
      },
    };
  }

  setErrorMessage = (error) => {
    if (error) this.setState({ error: error.message });
    else this.setState({ error: undefined });
  };

  handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    const { stripe, elements, user } = this.props;

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      console.log('[error]', error.message);
      this.setState({ error: error.message });
    } else {
      console.log('Stripe 23 | token generated!', paymentMethod);
      // send token to backend here
      this.setState({
        error: undefined,
        data: {
          load: true,
          confirm: 'the payment is being processed......',
        },
      });
      console.log(this.state);
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
          this.setState({
            data: { confirm: 'payment successful!', load: true },
          });
        }
      } catch (error) {
        console.log('CheckoutForm.js 28 | ', error);
        this.setState({
          error: error.message,
          data: { load: false },
        });
      }
    }
  };

  render() {
    const { error, data } = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        <FormGroup>
          <FormRow>
            <CardElement
              onChange={(e) => {
                console.log(e.error);
                this.setErrorMessage(e.error);
              }}
            />
          </FormRow>
        </FormGroup>
        <Error>{error}</Error>
        <div>
          <b>Order total:</b> AU$160.00
        </div>
        <FormStatement>
          By proceeding, I agree with the terms of the license agreement,
          privacy policy and terms and conditions.
        </FormStatement>
        <Button type="submit" disabled={data.load}>
          Pay
        </Button>
        <br />
        <div>{data.confirm}</div>
      </Form>
    );
  }
}

const InjectedCheckoutForm = ({ user }) => {
  return (
    <ElementsConsumer>
      {({ elements, stripe }) => (
        <CheckoutForm elements={elements} stripe={stripe} user={user} />
      )}
    </ElementsConsumer>
  );
};

export default InjectedCheckoutForm;
