import React from 'react';
import styled, { css } from 'styled-components';
import Input from '../../components/Input';

const Title = styled.h2`
  font-family: 'Roboto';
  font-size: 24px;
  text-align: center;

  ${(props) => ({
    primary: css`
      margin: 0;
    `,
    secondary: css`
      margin: 45px 0px 25px 0px;
    `,
  }[props.variant])}
`;

const SubTitle = styled.p`
  font-family: 'Raleway';
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.14px;
  text-align: center;
  margin: 10px 0 40px 0;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormItem = styled.div`
  font-family: 'Roboto';
  display: flex;
  flex-direction: column;
`;
const ItemContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const Label = styled.label`
  margin: 0 0 5px 5px;
`;

const Checkbox = styled.div`
  font-family: 'Raleway';
  text-align: left;
`;

const CheckItem = styled.div`
  margin-bottom: 5px;
`;

class BookingForm extends React.Component {
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
          <ItemContainer>
            <FormItem>
              <Label htmlFor="selectedDate">Date</Label>
              <Input
                variant="sm"
                name="selectedDate"
                id="selectedDate"
                placeholder="06/06/2021"
                type="text"
                value={data.selectedDate}
                disabled
              />
            </FormItem>
            <FormItem>
              <Label htmlFor="guestNumber">Number of guests</Label>
              <Input
                variant="sm"
                name="guestNumber"
                id="guestNumber"
                placeholder="1"
                value={data.guestNumber}
                type="number"
                onChange={this.handleDataChange}
              />
            </FormItem>
          </ItemContainer>
          <ItemContainer>
            <FormItem>
              <Label htmlFor="firstName">First Name</Label>
              <Input
                variant="sm"
                name="firstName"
                id="firstName"
                placeholder="John"
                type="text"
                value={data.firstName}
                onChange={this.handleDataChange}
              />
            </FormItem>
            <FormItem>
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                variant="sm"
                name="lastName"
                id="lastName"
                placeholder="Mayer"
                type="text"
                value={data.lastName}
                onChange={this.handleDataChange}
              />
            </FormItem>
          </ItemContainer>
          <FormItem>
            <Label htmlFor="email">Email</Label>
            <Input
              variant="lg"
              name="email"
              id="email"
              placeholder="johnmayer19@gmail.com"
              type="email"
              value={data.email}
              onChange={this.handleDataChange}
            />
          </FormItem>
          <FormItem>
            <Label htmlFor="phoneNumber">Phone number</Label>
            <Input
              variant="lg"
              name="phoneNumber"
              id="phoneNumber"
              placeholder="0412345678"
              type="number"
              value={data.phoneNumber}
              onChange={this.handleDataChange}
            />
          </FormItem>
          <FormItem>
            <Label htmlFor="birthDate">Date of birth</Label>
            <Input
              variant="lg"
              name="birthDate"
              id="birthDate"
              type="date"
              value={data.birthDate}
              onChange={this.handleDataChange}
            />
          </FormItem>
          <Title variant="secondary">Please read and select all before the payment</Title>
          <Checkbox>
            <CheckItem>
              <input
                name="ageChecked"
                type="checkbox"
                id="ageChecked"
                checked={data.ageChecked}
                onChange={this.handleDataChange}
              />
              <Label htmlFor="ageChecked">
                All guest in my booking are over 15 years of age
              </Label>
            </CheckItem>
            <CheckItem>
              <input
                name="towelChecked"
                type="checkbox"
                id="towelChecked"
                checked={data.towelChecked}
                onChange={this.handleDataChange}
              />
              <Label htmlFor="towelChecked">
                I will either bring my own large bath towel or purchase one on the day
              </Label>
            </CheckItem>
            <CheckItem>
              <input
                name="acknowledgeChecked"
                type="checkbox"
                id="acknowledgeChecked"
                checked={data.acknowledgeChecked}
                onChange={this.handleDataChange}
              />
              <Label htmlFor="acknowledgeChecked">
                I understand this is a booking enquiry and not confirmation of booking
              </Label>
            </CheckItem>
          </Checkbox>
        </Form>
      </>
    );
  }
}

export default BookingForm;
