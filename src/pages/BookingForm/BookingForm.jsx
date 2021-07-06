import React from 'react';
import styled, { css } from 'styled-components';

const Title = styled.h2`
  font-family: 'Roboto';
  font-size: 24px;
  text-align: center;

  ${(props) => ({
    primary: css`
      margin: 0;
    `,
    secondary: css`
      margin: 54px 0px 27px 0px;
    `,
  }[props.variant])}
`;

const SubTitle = styled.p`
  font-family: 'Raleway';
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.14px;
  text-align: center;
  margin: 9px 0 40px 0;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  border: none;
  border-radius: 3px;
  background-color: rgba(196, 196, 196, 0.23);
  height: 40px;
  padding: 0 10px;
  
  ${(props) => ({
    sm: css`
      width: 160px;
      margin: 0px 10px 21px 10px;
    `,
    lg: css`
      width: 360px;
      margin: 0px 0px 21px 0px;
    `,
  }[props.variant])}
`;

const Checkbox = styled.div`
  font-family: 'Raleway';
  text-align: left;
`;

export default class BookingForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        selectedDate: '',
        guestNumber: '',
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        birthDate: '',
        ageChecked: false,
        towelChecked: false,
        acknowledgeChecked: false,
      },
    };

    this.handleDataChange = this.handleDataChange.bind(this);
  }

  handleDataChange(event) {
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    const { name } = event.target;

    this.setState((prevState) => ({
      data: {
        ...prevState.data,
        [name]: value,
      },
    }));
  }

  render() {
    const { data } = this.state;

    return (
      <>
        <Title variant="primary">Booking Details</Title>
        <SubTitle>You can manage your booking with your details below.</SubTitle>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            // console.log(data);
          }}
        >
          <div>
            <Input
              variant="sm"
              name="selectedDate"
              placeholder="06/06/2021"
              type="text"
              value={data.selectedDate}
              disabled
            />
            <Input
              variant="sm"
              name="guestNumber"
              placeholder="Number of guests"
              value={data.guestNumber}
              type="number"
              onChange={this.handleDataChange}
            />
          </div>
          <div>
            <Input
              variant="sm"
              name="firstName"
              placeholder="First Name"
              type="text"
              value={data.firstName}
              onChange={this.handleDataChange}
            />
            <Input
              variant="sm"
              name="lastName"
              placeholder="Last Name"
              type="text"
              value={data.lastName}
              onChange={this.handleDataChange}
            />
          </div>
          <Input
            variant="lg"
            name="email"
            placeholder="Email"
            type="email"
            value={data.email}
            onChange={this.handleDataChange}
          />
          <Input
            variant="lg"
            name="phoneNumber"
            placeholder="Phone number"
            type="number"
            value={data.phoneNumber}
            onChange={this.handleDataChange}
          />
          <Input
            variant="lg"
            name="birthDate"
            placeholder="Date of birth"
            type="date"
            value={data.birthDate}
            onChange={this.handleDataChange}
          />
          <Title variant="secondary">Please read and select all before the payment</Title>
          <Checkbox>
            <label htmlFor="ageChecked">
              <input
                name="ageChecked"
                type="checkbox"
                id="ageChecked"
                checked={data.ageChecked}
                onChange={this.handleDataChange}
              />
              All guest in my booking are over 15 years of age
            </label>
            <br />
            <label htmlFor="towelChecked">
              <input
                name="towelChecked"
                type="checkbox"
                id="towelChecked"
                checked={data.towelChecked}
                onChange={this.handleDataChange}
              />
              I will either bring my own large bath towel or purchase one on the day
            </label>
            <br />
            <label htmlFor="acknowledgeChecked">
              <input
                name="acknowledgeChecked"
                type="checkbox"
                id="acknowledgeChecked"
                checked={data.acknowledgeChecked}
                onChange={this.handleDataChange}
              />
              I understand this is a booking enquiry and not confirmation of booking
            </label>
          </Checkbox>
        </Form>
      </>
    );
  }
}
