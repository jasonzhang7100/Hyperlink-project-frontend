import React from 'react';
import styled, { css } from 'styled-components';
import Input from '../Input';
import FormItem from '../FormItem';
import validate from './validate';
import ErrorMsg from '../ErrorMsg';
import propTypes from 'prop-types';

const StepButton = styled.button`
  width: 6.5rem;
  height: 2rem;
  border: none;
  border-radius: 0.2rem;
  background-color: rgb(24, 28, 77);
  color: #fff;
  &:hover {
    cursor: pointer;
  }
`;

// const Form = ({ date, handleFormData, handleNextStep }) => {
//   const formData = {
//     // 这个数据应该从input获得，这里先写死了
//     name: 'jason',
//     mobile: 123456,
//     booking: '至尊套餐',
//     // 价格应该是从booking套餐推出来的，或者推出价格的逻辑写在父级
//     price: 200,
//   };

//   const handleClick = () => {
//     handleFormData(formData);
//     handleNextStep();
//   };

//   return (
//     <>
//       这是从calendar传过来的时间（如果你要用到）:
//       {date}
//       <input placeholder="输入名字" />
//       <input placeholder="输入电话" />
//       <StepButton onClick={handleClick}>CONTINUE</StepButton>
//     </>
//   );
// };



// chen from here
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

const Checkbox = styled.div`
  font-family: 'Raleway';
  text-align: left;
`;

const initialData = {
  value: '',
  blurred: false,
  touched: false,
  focused: false,
};
class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        guestNumber: initialData,
        firstName: initialData,
        lastName: initialData,
        email: initialData,
        phoneNumber: initialData,
        birthDate: initialData,
        towelChecked: {
          value: false,
        },
      },
      isFormSubmit: false,
    };

    this.handleDataChange = this.handleDataChange.bind(this);
    this.handleIsFormSubmitChange = this.handleIsFormSubmitChange.bind(this);
    this.handleBlurredChange = this.handleBlurredChange.bind(this);
    this.handleFocusedChange = this.handleFocusedChange.bind(this);
  }

  handleDataChange(event) {
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    const { name } = event.target;

    this.setData(name, {
      value,
      touched: true,
    });
  }

  handleIsFormSubmitChange(newIsFormSubmit) {
    this.setState({
      isFormSubmit: newIsFormSubmit,
    });
  }

  handleFocusedChange(event) {
    const { name } = event.target;

    this.setData(name, {
      focused: true,
    });
  }

  handleBlurredChange(event) {
    const { name } = event.target;

    this.setData(name, {
      blurred: true,
      focused: false,
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

  render() {
    const { data } = this.state;
    const { date } = this.props;
    const error = this.getError(data);
    const hasError = Object.keys(error).length > 0;

    return (
      <>
        <Title variant="primary">Booking Details</Title>
        <SubTitle>You can manage your booking with your details below.</SubTitle>
        <FormWrapper
          onSubmit={(e) => {
            if (!hasError) {
              e.preventDefault();
              this.handleIsFormSubmitChange(true);
            }
            // console.log(data);
          }}
        >
          <ItemContainer>
            <FormItem label="Date" htmlFor="selectedDate">
              <Input
                variant="sm"
                name="selectedDate"
                id="selectedDate"
                placeholder={date}
                type="text"
                value={date}
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
                onFocus={this.handleFocusedChange}
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
                onFocus={this.handleFocusedChange}
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
                onFocus={this.handleFocusedChange}
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
              onFocus={this.handleFocusedChange}
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
              onFocus={this.handleFocusedChange}
              onBlur={this.handleBlurredChange}
              error={this.getErrorMessage(error, 'phoneNumber')}
            />
            <ErrorMsg>{this.getErrorMessage(error, 'phoneNumber')}</ErrorMsg>
          </FormItem>
          <FormItem label="Date of birth" htmlFor="birthDate">
            <Input
              variant="lg"
              name="birthDate"
              id="birthDate"
              type="date"
              value={data.birthDate.value}
              onChange={this.handleDataChange}
              onFocus={this.handleFocusedChange}
              onBlur={this.handleBlurredChange}
              error={this.getErrorMessage(error, 'birthDate')}
            />
            <ErrorMsg>{this.getErrorMessage(error, 'birthDate')}</ErrorMsg>
          </FormItem>
          <Title variant="secondary">Please read and select before the payment</Title>
          <Checkbox>
            <label htmlFor="towelChecked">
              <input
                name="towelChecked"
                type="checkbox"
                id="towelChecked"
                checked={data.towelChecked.value}
                onChange={this.handleDataChange}
              />
              I will either bring my own large bath towel or purchase one on the day
            </label>
            <ErrorMsg>{this.getErrorMessage(error, 'towelChecked')}</ErrorMsg>
          </Checkbox>
        </FormWrapper>
      </>
    );
  }
}

Form.propTypes = {
  date: PropTypes.string.isRequired,
  handleFormData: PropTypes.func.isRequired,
  handleNextStep: PropTypes.func.isRequired,
};

export default Form;
