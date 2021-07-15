import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Form from '../../components/Form';
import Payment from './Payment';
import Confirm from './Confirm';
import ProgressionBar from './ProgressionBar';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 100vh;
  background-color: #fff;
`;

const ButtonBar = styled.div``;

const GoBackButton = styled.button`
  width: 6.5rem;
  height: 2rem;
  margin-right: 4rem;
  border: none;
  background-color: #fff;
  &:hover {
    cursor: pointer;
  }
`;

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

class Booking extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
    };
    this.handleNextStep = this.handleNextStep.bind(this);
    this.handlePreStep = this.handlePreStep.bind(this);
  }

  handleNextStep() {
    const { step } = this.state;
    if (step < 3) this.setState({ step: step + 1 });
  }

  handlePreStep() {
    const { step } = this.state;
    const { history } = this.props;
    if (step > 1) {
      this.setState({ step: step - 1 });
    } else {
      history.push('/');
    }
  }

  render() {
    const { step } = this.state;
    const { match } = this.props;
    const { date } = match.params;
    return (
      <Container>
        <ProgressionBar step={step} />

        {step === 1 && <Form date={date} />}
        {step === 2 && <Payment />}
        {step === 3 && <Confirm />}
        <ButtonBar>
          <GoBackButton onClick={this.handlePreStep}>
            {'<'}
            {' '}
            go back
          </GoBackButton>
          <StepButton onClick={this.handleNextStep}>CONTINUE</StepButton>
        </ButtonBar>
      </Container>
    );
  }
}

Booking.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      date: PropTypes.string,
    }),
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default Booking;
