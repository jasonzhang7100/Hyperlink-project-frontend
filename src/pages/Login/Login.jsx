import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Input from '../../components/Input';
import FormItem from '../../components/FormItem';
import validate from '../../components/Form/validate';
import ErrorMsg from '../../components/ErrorMsg';
import ButtonContinue from '../../components/ButtonContinue';
import FormTitle from '../../components/FormTitle';
import FormSubTitle from '../../components/FormSubTitle';
import FormWrapper from '../../components/FormWrapper';

const Container = styled.div`
  margin: 0 auto;
  text-align: center;
  width: 580px;
  height: 400px;
  margin-left: 600px;
  margin-top: 215px;
  background: #FFFFFF;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
  border-radius: 50px;

`;
const Container = styled.div`
  background-color: white;
  display: inline-block;
  border-radius: 20px;
  padding: 3rem 10rem;
`;

const LoginButton = styled.div`
  margin:0;
  text-align: center;
  background: #181B50;
  height:50px;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  white-space: nowrap;
  text-decoration:none;
  margin-top:150px;
`;

// const Login = () => (
//   <>
//     <Container>

//         <LoginButton>
//           <Link to="/mybooking" style={{ textDecoration: 'none' ,color:'white'}}>Search</Link>
//         </LoginButton>
//     </Container>
//   </>
// );

class Login extends React.Component{
    constructor(props) {
    super(props);

    this.state = {
      data: {
        email: {
          value: '',
          blurred: false,
        },
        password: {
          value: '',
          blurred: false,
        },
      },
      isFormSubmit: false,
    };

    this.handleDataChange = this.handleDataChange.bind(this);
    this.handleIsFormSubmitChange = this.handleIsFormSubmitChange.bind(this);
    this.handleBlurredChange = this.handleBlurredChange.bind(this);
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

  render() {
    const { data } = this.state;
    const error = this.getError(data);
    const hasError = Object.keys(error).length > 0;

    return (
      <>
        <Container>
          <FormTitle variant="primary">Guest Login</FormTitle>
          <FormSubTitle font="special">Log in to manage bookings</FormSubTitle>
          <FormWrapper
            onSubmit={(e) => {
              e.preventDefault();
              this.handleIsFormSubmitChange(true);
              if (!hasError) {
                console.log(data);
              }
            }}
          >
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
            <FormItem label="Password" htmlFor="password">
              <Input
                size="lg"
                name="password"
                id="password"
                type="password"
                value={data.password.value}
                onChange={this.handleDataChange}
                onBlur={this.handleBlurredChange}
                error={this.getErrorMessage(error, 'password')}
              />
              <ErrorMsg>{this.getErrorMessage(error, 'password')}</ErrorMsg>
            </FormItem>

            <ButtonContinue>LOGIN</ButtonContinue>
            <LoginButton>
              <Link to="/mybooking" style={{ textDecoration: 'none' ,color:'white'}}>Search</Link>
            </LoginButton>
          </FormWrapper>
        </Container>
      </>
    );
  }
}

export default Login;