import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  padding: 0.6rem;
  padding-right: 1.5rem;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  width: 500px;
  margin-left: 50px;
  margin-top: 1rem;
  font-family: 'Roboto';
`;

const BookingDate = styled.div`
  display: flex;
  flex-direction: column;
`;

const Day = styled.div`
  font-size: 2.3rem;
`;

const Month = styled.div`
  font-size: 1rem;
  margin-top: -0.8rem;
  color: #3f51b5;
`;

const BookingContent = styled.div`

`;

const BookingMessage = styled.div`
  font-size: 0.88rem;
`;

const BookingDetails = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.88rem;
  color: #838383;
`;

const EditButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 8px 0px;
`;

const BookingId = styled.span``;
const BookingType = styled.span``;
const GuestAmount = styled.span``;

//= =================== BOOKINGINFO COMPONENT ====================
const BookingInfo = ({ date, id, guestAmount }) => {
  const day = date.split('-')[2];

  const monthIndex = parseInt(date.split('-')[1], 10);
  const monthTable = [
    'JAN',
    'FEB',
    'MAR',
    'APR',
    'MAY',
    'JUNE',
    'JULY',
    'AUG',
    'SEPT',
    'OCT',
    'NOV',
    'DEC',
  ];
  const month = monthTable[monthIndex - 1];

  return (
    <Container>
      <BookingDate>
        <Day>{day}</Day>
        <Month>{month}</Month>
      </BookingDate>

      <BookingContent>
        <BookingMessage>Your booking with Japanese Bath House</BookingMessage>
        <BookingDetails>
          <BookingId>{id}</BookingId>
          <BookingType>All Day Pass</BookingType>
          <GuestAmount>
            {guestAmount}
            {' '}
            Guest
          </GuestAmount>
        </BookingDetails>
      </BookingContent>
      <EditButton>
        <Link to="/editbooking" style={{ textDecoration: 'none', color: 'white' }}>Edit</Link>
      </EditButton>
    </Container>
  );
};

BookingInfo.propTypes = {
  date: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  guestAmount: PropTypes.number.isRequired,
};

export default BookingInfo;
