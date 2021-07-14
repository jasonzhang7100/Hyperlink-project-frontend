import React from 'react';
import { CardElement, ElementsConsumer } from '@stripe/react-stripe-js';
import axios from 'axios';
import styled, { css } from 'styled-components';

import { BASE_URL, BOOKING_INFO } from '../../constant';

const Form = styled.form`
  margin: 1.25rem auto;
  max-width: 23.8rem;
  animation: fade 200ms ease-out;
`;

const FormGroup = styled.fieldset`
  margin: 0 0.94rem 1.25rem;
  border-style: none;
  background-color: #bbbbc25e;
  will-change: opacity, transform;
  border-radius: 0.25rem;
`;

const FormRow = styled.div`
  margin-left: 0.938rem;
  padding: 0.688rem 0.938rem 0.688rem 0;
`;

const FormStatement = styled.div`
  margin: 0.938rem auto;
  font-size: 0.875rem;
  color: #818181;
  border: none;
`;

const Button = styled.button`
  width: 6.5rem;
  height: 2rem;
  border: none;
  border-radius: 0.2rem;
  background-color: rgb(24, 28, 77);
  color: #fff;
  &:hover {
    cursor: pointer;
  }
  ${(props) =>
    ({
      true: css`
        background-color: grey;
      `,
    }[props.disabled || false])}
`;

const Error = styled.div`
  padding: 0.375rem 1rem;
  border-radius: 4px;
  background-color: #fdecea;
  color: red;
  margin: 0 auto 0.625rem auto;
  max-width: 22rem;
`;

const Transaction = styled(Error)`
  background-color: #eaf1fd;
  color: black;
`;

class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: undefined,
      confirmMessage: undefined,
      isButtonDisabled: false,
    };
  }

  setErrorMessage = (error) => {
    if (error) this.setState({ error: error.message });
    else this.setState({ error: undefined });
  };

  //add user details to mongodb through backend.
  addBooking = async () => {
    const json = JSON.stringify(BOOKING_INFO);
    await axios
      .post(`${BASE_URL}/api/bookings`, json, {
        headers: {
          // Overwrite Axios's automatically set Content-Type
          'Content-Type': 'application/json',
        },
      })
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        if (error.response) {
          // Request made and server responded
          this.setState({
            error: error.response.data,
            confirmMessage: undefined,
            isButtonDisabled: false,
          });
        } else if (error.request) {
          // The request was made but no response was received
          this.setState({
            error: error.request,
            confirmMessage: undefined,
            isButtonDisabled: false,
          });
        } else {
          this.setState({
            error: error.message,
            confirmMessage: undefined,
            isButtonDisabled: false,
          });
        }
      });
  };

  setPayment = async () => {
    const { stripe, elements } = this.props;

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      // when the card details are not valid.
      this.setState({
        error: error.message,
        confirmMessage: undefined,
        isButtonDisabled: false,
      });
    } else {
      //when the card details are valid.
      // send token to backend here
      this.setState({
        error: undefined,
        confirmMessage: 'the payment is being processed......',
        isButtonDisabled: true,
      });

      try {
        // send payment info to backend
        const { id } = paymentMethod;
        const { price, email } = this.props;
        const paymentPrice = price * 0.5 * 100;
        const response = await axios.post(`${BASE_URL}/api/stripe/charge`, {
          amount: paymentPrice,
          id,
          receipt_email: email,
        });

        // check whether the payment was successful.
        if (response.data.success) {
          //when payment was successful
          this.setState({
            confirmMessage: 'payment successful!',
            isButtonDisabled: true,
          });
          // after successful payment, add the user details to db.
          // this.addUser();
          // after successful payment, move to the next step.
          this.handleClick();
        }
      } catch (error) {
        // when payment was unsuccessful
        this.setState({
          error: error.message,
          confirmMessage: undefined,
          isButtonDisabled: false,
        });
      }
    }
  };

  handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    // try to add the booking details first.
    await this.addBooking();

    if (!this.state.error) {
      await this.setPayment();
    }
  };

  handleClick = () => {
    const { handlePaidStatus, handleNextStep } = this.props;
    handlePaidStatus();
    handleNextStep();
  };

  render() {
    const { error, confirmMessage, isButtonDisabled } = this.state;
    const { price } = this.props;
    const paymentPrice = price * 0.5;
    return (
      <>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <FormRow>
              <CardElement
                onChange={(e) => {
                  this.setErrorMessage(e.error);
                }}
              />
            </FormRow>
          </FormGroup>
          {error && <Error>{error}</Error>}
          {confirmMessage && <Transaction>{confirmMessage}</Transaction>}
          <div>
            Order total: AU${price}
            <br />
            <br />
            <b>Payment total (50%): AU${paymentPrice}</b>
          </div>
          <FormStatement>
            By proceeding, I agree with the terms of the license agreement,
            privacy policy and terms and conditions.
          </FormStatement>
          <Button type="submit" disabled={isButtonDisabled}>
            Pay AU${paymentPrice}
          </Button>
          <br />
        </Form>
        {/* <Button onClick={this.addBooking}>add booking (TEST)</Button> */}
      </>
    );
  }
}

const InjectedCheckoutForm = ({
  price,
  email,
  handlePaidStatus,
  handleNextStep,
}) => {
  return (
    <ElementsConsumer>
      {({ elements, stripe }) => (
        <CheckoutForm
          elements={elements}
          stripe={stripe}
          price={price}
          email={email}
          handlePaidStatus={handlePaidStatus}
          handleNextStep={handleNextStep}
        />
      )}
    </ElementsConsumer>
  );
};

export default InjectedCheckoutForm;
