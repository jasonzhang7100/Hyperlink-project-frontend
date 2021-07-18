import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import Input from '../../../components/Input';
import FormItem from '../../../components/FormItem';
import ErrorMsg from '../../../components/ErrorMsg';
import validate from '../../../components/Form/validate';
import ButtonContinue from '../../../components/ButtonContinue';

const Container = styled.div`
  background-color: white;
  display: inline-block;
  border-radius: 20px;
  padding: 3rem 10rem;
`;

const Title = styled.h2`
  font-family: 'Roboto';
  text-align: center;

  ${(props) => ({
    primary: css`
      font-size: 24px;
      margin: 0;
    `,
    secondary: css`
      font-size: 20px;
      margin: 45px 0px 20px 0px;
    `,
  }[props.variant])}
`;

const SubTitle = styled.p`
  font-family: 'Raleway';
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.14px;
  text-align: center;
  margin-bottom: 10px;
`;

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 15px;
`;

const ItemContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const initialData = {
  value: '',
  blurred: false,
};

class DetailEdit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // wait for value after calling backend api
      data: {
        selectedDate: initialData,
        guestNumber: initialData,
        firstName: initialData,
        lastName: initialData,
        email: initialData,
        phoneNumber: initialData,
      },
      isFormSubmit: false,
    };

    this.handleDataChange = this.handleDataChange.bind(this);
    this.handleIsFormSubmitChange = this.handleIsFormSubmitChange.bind(this);
    this.handleBlurredChange = this.handleBlurredChange.bind(this);
    // this.handleContinueClick = this.handleContinueClick.bind(this);
  }

  handleDataChange(event) {
    const { name, value } = event.target;

    this.setData(name, {
      value,
    });
  }

  handleIsFormSubmitChange(newIsFormSubmit) {
    this.setState({
      isFormSubmit: newIsFormSubmit,
    });
  }

  handleBlurredChange(event) {
    const { name } = event.target;

    this.setData(name, {
      blurred: true,
    });
  }

  setData(name, newData) {
    this.setState((prevState) => ({
      data: {
        ...prevState.data,
        [name]: {
          ...prevState.data[name],
          ...newData,
        },
      },
    }));
  }

  getErrorMessage(error, name) {
    const { data, isFormSubmit } = this.state;
    const showInputError = data[name].blurred;
    return (showInputError || isFormSubmit) && error[name];
  }

  getError() {
    const { data } = this.state;
    const error = {};
    Object.keys(data).forEach((name) => {
      const errorOfName = validate(name, data);
      if (!errorOfName) {
        return;
      }
      error[name] = errorOfName;
    });
    return error;
  }

  // handleContinueClick = (data, hasError) => {
  //   // wait for send props function from previous page
  //   const { handleFormData, handleNextStep } = this.props;
  //   const formData = {};
  //   Object.entries(data).map(([key, value]) => {
  //     formData[key] = value.value;
  //     return formData;
  //   });
  //   if (!hasError) {
  //     handleFormData(formData);
  //     handleNextStep();
  //   }
  // };

  render() {
    const { data } = this.state;

    // wait for order number from previous page
    const { orderNumber } = this.props;
    const error = this.getError(data);
    // const hasError = Object.keys(error).length > 0;

    return (
      <>
        <Container>
          <Title variant="primary">Booking Details</Title>
          <SubTitle>
            Order number
            {orderNumber}
          </SubTitle>
          <FormWrapper
            onSubmit={(e) => {
              e.preventDefault();
              this.handleIsFormSubmitChange(true);
              // this.handleContinueClick(data, hasError);
            }}
          >
            <ItemContainer>
              <FormItem label="Date" htmlFor="selectedDate">
                <Input
                  variant="sm"
                  name="selectedDate"
                  id="selectedDate"
                  placeholder="06/06/2021"
                  type="text"
                  value={data.selectedDate.value}
                  disabled
                />
              </FormItem>
              <FormItem label="Number of guests" htmlFor="guestNumber">
                <Input
                  variant="sm"
                  name="guestNumber"
                  id="guestNumber"
                  value={data.guestNumber.value}
                  type="number"
                  onChange={this.handleDataChange}
                  onBlur={this.handleBlurredChange}
                  error={this.getErrorMessage(error, 'guestNumber')}
                />
                <ErrorMsg>{this.getErrorMessage(error, 'guestNumber')}</ErrorMsg>
              </FormItem>
            </ItemContainer>
            <ItemContainer>
              <FormItem label="First Name" htmlFor="firstName">
                <Input
                  variant="sm"
                  name="firstName"
                  id="firstName"
                  type="text"
                  value={data.firstName.value}
                  onChange={this.handleDataChange}
                  onBlur={this.handleBlurredChange}
                  error={this.getErrorMessage(error, 'firstName')}
                />
                <ErrorMsg>{this.getErrorMessage(error, 'firstName')}</ErrorMsg>
              </FormItem>
              <FormItem label="Last Name" htmlFor="lastName">
                <Input
                  variant="sm"
                  name="lastName"
                  id="lastName"
                  type="text"
                  value={data.lastName.value}
                  onChange={this.handleDataChange}
                  onBlur={this.handleBlurredChange}
                  error={this.getErrorMessage(error, 'lastName')}
                />
                <ErrorMsg>{this.getErrorMessage(error, 'lastName')}</ErrorMsg>
              </FormItem>
            </ItemContainer>
            <FormItem label="Email" htmlFor="email">
              <Input
                variant="lg"
                name="email"
                id="email"
                type="email"
                value={data.email.value}
                onChange={this.handleDataChange}
                onBlur={this.handleBlurredChange}
                error={this.getErrorMessage(error, 'email')}
              />
              <ErrorMsg>{this.getErrorMessage(error, 'email')}</ErrorMsg>
            </FormItem>
            <FormItem label="Phone number" htmlFor="phoneNumber">
              <Input
                variant="lg"
                name="phoneNumber"
                id="phoneNumber"
                type="text"
                value={data.phoneNumber.value}
                onChange={this.handleDataChange}
                onBlur={this.handleBlurredChange}
                error={this.getErrorMessage(error, 'phoneNumber')}
              />
              <ErrorMsg>{this.getErrorMessage(error, 'phoneNumber')}</ErrorMsg>
            </FormItem>
            <ButtonContinue>SUBMIT</ButtonContinue>
          </FormWrapper>
        </Container>
      </>
    );
  }
}

DetailEdit.propTypes = {
  orderNumber: PropTypes.string.isRequired,
};

export default DetailEdit;
