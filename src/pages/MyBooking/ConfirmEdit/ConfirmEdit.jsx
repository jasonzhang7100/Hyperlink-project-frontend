// Third page of Mybooking part, Confirm edit of booking
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Confirm from '../../Booking/Confirm';
import GoBack from '../../../components/ButtonGoBack';

const Container = styled.div`
display: inline-block;
background-color: white;
border-radius: 20px;
padding: 3rem 12rem;
margin: 0 auto;
hight:100px;
border: 1px solid #C7C7C7;
box-sizing: border-box;
border-radius: 20px;`;

class ConfirmEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const { formData } = this.props;
    const { handleNextStep } = this.props;
    console.log(formData);
    return (
      <>
        <Container>
          <Confirm
            formData={formData}
            ConfirmTitle="Booking changes submmitted"
          />
          <GoBack onClick={handleNextStep}>My Bookings</GoBack>
        </Container>
      </>
    );
  }
}

ConfirmEdit.propTypes = {
  handleNextStep: PropTypes.func.isRequired,
  formData: PropTypes.arrayOf(PropTypes.string),
};

ConfirmEdit.defaultProps = {
  formData: [],
};
export default ConfirmEdit;
