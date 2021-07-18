// Second page of Mybooking part, edit data of chosen booking
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const EditButton = styled.div`
  padding: 15px;
  background: #181B50;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 22px;
  letter-spacing: 0.46px;
  text-transform: uppercase;
  color: #FFFFFF;
  width:30px;
`;

const Container = styled.div`
text-align: center;
margin: 0 auto;
width: 580px;
height: 674px;
background: #FFFFFF;
box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
border-radius: 50px;`;
const EditBooking = ({ BookingDetails, BookingList, handleNextStep }) => {
  const handleClick = () => {
    handleNextStep();
  };

  return (
    <>
      <Container>
        Here is edit booking page
        {BookingDetails}
        {BookingList}
        <EditButton onClick={handleClick}>
          Confirm
        </EditButton>
      </Container>
    </>
  );
};

EditBooking.propTypes = {
  BookingList: PropTypes.arrayOf(PropTypes.object).isRequired,
  BookingDetails: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleNextStep: PropTypes.func.isRequired,
};

export default EditBooking;
