// Second page of Mybooking part, edit data of chosen booking
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Input from '../../../components/Input';
import FormItem from '../../../components/FormItem';
import ErrorMsg from '../../../components/ErrorMsg';
import validate from '../../../components/Form/validate';
import ButtonContinue from '../../../components/ButtonContinue';
import FormTitle from '../../../components/FormTitle';
import FormSubTitle from '../../../components/FormSubTitle';
import FormWrapper from '../../../components/FormWrapper';
import FlexRow from '../../../components/FlexRow';

// const EditBooking = ({ BookingDetails, BookingList, handleNextStep }) => {
//   const handleClick = () => {
//     handleNextStep();
//   };

//   return (
//     <>
//       <Container>
//         Here is edit booking page
//         {BookingDetails}
//         {BookingList}
//         <EditButton onClick={handleClick}>
//           Confirm
//         </EditButton>
//       </Container>
//     </>
//   );
// };


const Container = styled.div`
  display: inline-block;
  background-color: white;
  border-radius: 20px;
  padding: 3rem 12rem;
  margin: 0 auto;
`;

const initialData = (data) => ({
  value: data,
  blurred: false,
});

class EditBooking extends React.Component {
  constructor(props) {
    super(props);

    const {
      selectedDate, guestNumber, firstName, lastName, email, phoneNumber,
    } = this.props;

    this.state = {
      // wait for value after calling backend api
      data: {
        selectedDate: initialData(selectedDate),
        guestNumber: initialData(guestNumber),
        firstName: initialData(firstName),
        lastName: initialData(lastName),
        email: initialData(email),
        phoneNumber: initialData(phoneNumber),
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

  handleContinueClick = (data, hasError) => {
    // const {
    //   guestNumber, firstName, lastName, email, phoneNumber,
    // } = data;
    const { handleFormData, handleNextStep } = this.props;
    const formData = {};
    Object.entries(data).map(([key, value]) => {
      formData[key] = value.value;
      return formData;
    });

    if (!hasError) {
      // axios.put('http://localhost:3333/bookings/1', {
      //   bookingDate: date,
      //   numOfGuests: guestNumber.value,
      //   firstName: firstName.value,
      //   lastName: lastName.value,
      //   emailAddress: email.value,
      //   phoneNumber: phoneNumber.value,
      // });

      handleFormData(formData);
      handleNextStep();
    }
  };

  render() {
    const { data } = this.state;

    // wait for order number from previous page
    const { orderNumber } = this.props;
    const error = this.getError(data);
    // const hasError = Object.keys(error).length > 0;

    return (
      <>
        <Container>
          <FormTitle variant="primary">Booking Details</FormTitle>
          <FormSubTitle font="normal">
            Order number
            {orderNumber}
          </FormSubTitle>
          <FormWrapper
            onSubmit={(e) => {
              e.preventDefault();
              this.handleIsFormSubmitChange(true);
              // this.handleContinueClick(data, hasError);
            }}
          >
            <FlexRow>
              <FormItem label="Date" htmlFor="selectedDate">
                <Input
                  size="smLeft"
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
                  size="smRight"
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
            </FlexRow>
            <FlexRow>
              <FormItem label="First Name" htmlFor="firstName">
                <Input
                  size="smLeft"
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
                  size="smRight"
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
            </FlexRow>
            <FormItem label="Email" htmlFor="email">
              <Input
                size="lg"
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
                size="lg"
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

EditBooking.propTypes = {
  orderNumber: PropTypes.string.isRequired,
  selectedDate: PropTypes.string.isRequired,
  guestNumber: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phoneNumber: PropTypes.string.isRequired,
  handleFormData: PropTypes.func.isRequired,
  handleNextStep: PropTypes.func.isRequired,

  BookingList: PropTypes.arrayOf(PropTypes.object).isRequired,
  BookingDetails: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default EditBooking;
