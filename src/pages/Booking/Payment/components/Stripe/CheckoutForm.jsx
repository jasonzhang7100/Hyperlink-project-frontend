import React from 'react';
import PropTypes from 'prop-types';
import { CardElement, ElementsConsumer } from '@stripe/react-stripe-js';
// import axios from 'axios';
import styled, { css } from 'styled-components';

// import { BASE_URL } from '../../constant';
import addBooking from '../../../../../apis/addBooking';

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
  cursor: pointer;

  ${(props) => ({
    true: css`
        background-color: grey;
        cursor: initial;
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

  setConfirmMessageAndButton = (confirmMessage, isButtonDisabled) => {
    this.setState({
      confirmMessage,
      isButtonDisabled,
    });
  };

  // add user details to mongodb through backend.
  // addBookingToBackend = async () => {
  //   const { formData } = this.props;
  //   this.setErrorMessage();
  //   this.setConfirmMessageAndButton('Save booking information......', true);
  //   try {
  //     const response = await addBooking(formData);
  //     this.setConfirmMessageAndButton('Booking information is Saved !!', true);
  //     return response;
  //   } catch (error) {
  //     if (error.response) {
  //       // Request made and server responded
  //       error.message = error.response.data;
  //     } else if (error.request) {
  //       // The request was made but no response was received
  //       error.message = 'The request was made but no response was received, try again later';
  //     }
  //     this.setErrorMessage(error);
  //     this.setConfirmMessageAndButton(undefined, false);
  //   }
  //   return null;
  // };

  setPayment = async () => {
    const { stripe, elements } = this.props; // eslint-disable-line

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement); // eslint-disable-line

    // eslint-disable-next-line
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      // when the card details are not valid.
      this.setErrorMessage(error);
      this.setConfirmMessageAndButton(undefined, false);
    } else {
      // when the card details are valid.
      // send token to backend here
      this.setErrorMessage();
      this.setConfirmMessageAndButton(
        'the payment is being processed......',
        true,
      );

      try {
        const { id } = paymentMethod;
        const { formData } = this.props;
        const bookingAndPayment = { ...formData, id };
        console.log(bookingAndPayment);

        // send booking info (and payment id) to backend
        const response = await addBooking(bookingAndPayment); // 需要确认：返回信息的格式！！
        // 返回格式：如果payment失败，返回success(fail) + message,
        // 如果payment成功：返回success(true) + message + booking全部字段。

        // const response = { message: 'Payment Failed', success: false };

        // const response = await axios.post(`${BASE_URL}/api/stripe/charge`, {
        //   amount: paymentPrice,
        //   id,
        //   receipt_email: emailAddress,
        // });

        // check whether the payment was successful.
        if (response.success) {
          // when payment was successful
          this.setConfirmMessageAndButton('payment successful!', true);
          // eslint-disable-next-line consistent-return
          return response; // 需要确认：返回信息的格式！！
        }
        // when payment was unsuccessful
        this.setErrorMessage(response);
        this.setConfirmMessageAndButton(undefined, false);

        // eslint-disable-next-line
      } catch (error) {
        // addBooking was unsuccessful
        if (error.response) {
          // Request made and server responded
          error.message = error.response.data;
        } else if (error.request) {
          // The request was made but no response was received
          error.message = 'The request was made but no response was received, try again later';
        }
        this.setErrorMessage(error);
        this.setConfirmMessageAndButton(undefined, false);
      }
    }
  };

  handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    const { error } = this.state;

    let paymentResponse = false; // 需要确认：返回信息的格式！！
    // let bookingRes = false;
    // eslint-disable-next-line no-unused-expressions
    !error && (paymentResponse = await this.setPayment()); // 需要确认：返回信息的格式！！
    // eslint-disable-next-line no-unused-expressions
    // paymentResponse && (bookingRes = await this.addBookingToBackend());
    // eslint-disable-next-line no-unused-expressions
    paymentResponse && this.handleClick(paymentResponse); // 需要确认：返回信息的格式！！
  };

  handleClick = (bookingRes) => {
    const { handlePaidStatus, handleNextStep, handleFormData } = this.props;
    handlePaidStatus();
    handleFormData(bookingRes);
    handleNextStep();
  };

  render() {
    // console.log(this.props.formData);
    // console.log(this.props.date);
    const { error, confirmMessage, isButtonDisabled } = this.state;
    const {
      formData: { paymentAmount },
    } = this.props;
    const paidAmount = paymentAmount * 0.5;
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
            Order total: AU$
            {paymentAmount}
            <br />
            <br />
            <b>
              Payment total (50%): AU$
              {paidAmount}
            </b>
          </div>
          <FormStatement>
            By proceeding, I agree with the terms of the license agreement,
            privacy policy and terms and conditions.
          </FormStatement>
          <Button type="submit" disabled={isButtonDisabled}>
            Pay AU$
            {paidAmount}
          </Button>
          <br />
        </Form>
        {/* <Button onClick={this.addBookingToBackend}>add booking (TEST)</Button> */}
      </>
    );
  }
}

CheckoutForm.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  formData: PropTypes.object.isRequired,
  handlePaidStatus: PropTypes.func.isRequired,
  handleFormData: PropTypes.func.isRequired,
  handleNextStep: PropTypes.func.isRequired,
};

const InjectedCheckoutForm = ({
  formData,
  handlePaidStatus,
  handleFormData,
  handleNextStep,
}) => (
  <ElementsConsumer>
    {({ elements, stripe }) => (
      <CheckoutForm
        elements={elements}
        stripe={stripe}
        formData={formData}
        handlePaidStatus={handlePaidStatus}
        handleFormData={handleFormData}
        handleNextStep={handleNextStep}
      />
    )}
  </ElementsConsumer>
);

InjectedCheckoutForm.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  formData: PropTypes.object.isRequired,
  handlePaidStatus: PropTypes.func.isRequired,
  handleFormData: PropTypes.func.isRequired,
  handleNextStep: PropTypes.func.isRequired,
};
export default InjectedCheckoutForm;
