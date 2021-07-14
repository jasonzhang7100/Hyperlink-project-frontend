import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';

const Container = styled.div`
  text-align: center;
  width: 380px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: normal;
  margin: 24px 0;
`;

const ConfirmedMessage = styled.div`
  font-size: 14px;
  margin-bottom: 30px;
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: #c7c7c7;
`;

const Confirm = () => (
  <Container>
    <FontAwesomeIcon color="#181b50" size="4x" icon={faCheckCircle} />
    <Title className="title">Booking Confirmed</Title>
    <ConfirmedMessage>
      Thank you John, we&apos;re looking forward to see you soon!
      <br />
      Confirmation email send to &nbsp;
      <a href="www.gmail.com">xxx@gmail.com</a>
    </ConfirmedMessage>

    <Line />

    <Line />
  </Container>
);

export default Confirm;
