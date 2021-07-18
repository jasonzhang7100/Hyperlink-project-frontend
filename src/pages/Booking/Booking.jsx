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
  align-items: center;
  min-height: 100vh;
  background-color: #fff;
`;

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

class Booking extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      formData: {},
      paid: false,
    };
    this.handleNextStep = this.handleNextStep.bind(this);
    this.handlePreStep = this.handlePreStep.bind(this);
    this.handleFormData = this.handleFormData.bind(this);
    this.handlePaidStatus = this.handlePaidStatus.bind(this);
  }

  handleFormData(formData) {
    this.setState({ formData });
  }

  handlePaidStatus() {
    this.setState({ paid: true });
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
    const { step, formData, paid } = this.state;
    const { match } = this.props;
    const { date } = match.params;
    return (
      <Container>
        <ProgressionBar step={step} />

        {step === 1 && (
          <Form
            date={date}
            formData={formData}
            handleNextStep={this.handleNextStep}
            handleFormData={this.handleFormData}
          />
        )}
        {step === 2 && (
          <Payment
            price={formData.price || 0}
            email={formData.email || 'customer@example.com'}
            handlePaidStatus={this.handlePaidStatus}
            handleNextStep={this.handleNextStep}
          />
        )}
        {step === 3 && <Confirm paid={paid} formData={formData} />}
        <GoBackButton onClick={this.handlePreStep}>
          {'<'}
          {' '}
          go back
        </GoBackButton>
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
