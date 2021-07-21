import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Input from '../../components/Input';
import FormItem from '../../components/FormItem';
import validate from '../../components/Form/validate';
import ErrorMsg from '../../components/ErrorMsg';
import ButtonContinue from '../../components/ButtonContinue';
import FormTitle from '../../components/FormTitle';
import FormSubTitle from '../../components/FormSubTitle';
import FormWrapper from '../../components/FormWrapper';

import { loginUser } from '../../apis/auth';
import { setToken } from '../../utils/authentication';

const Container = styled.div`
  display: inline-block;
  margin: 0 auto;
  padding: 3rem 10rem;
  border-radius: 20px;
  background-color: white;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
`;

class Login extends React.Component {
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
      error: null,
      isLoading: false,
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

  login = () => {
    this.setState({ error: null, isLoading: true }, () => {
      const { data: loginData } = this.state;
      loginUser(loginData.email.value, loginData.password.value)
        .then((data) => {
          this.setState({ isLoading: false }, () => {
            setToken(data.token);
            const { history } = this.props;
            history.replace('/mybooking');
          });
        })
        .catch((error) => this.setState({ error, isLoading: false }));
    });
  };

  render() {
    const { data, error: authError, isLoading } = this.state;
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
                console.log(data); //eslint-disable-line
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
            <ButtonContinue onClick={this.login}>LOGIN</ButtonContinue>
            {!!authError && <ErrorMsg>login fail</ErrorMsg>}
            {!!isLoading && <ErrorMsg>Isloading</ErrorMsg>}
          </FormWrapper>
        </Container>
      </>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    replace: PropTypes.func,
  }).isRequired,
};

export default Login;
