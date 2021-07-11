import React from 'react';
import styled from 'styled-components';

import Calendar from './components/Calendar';

const Container = styled.div`
  overflow: hidden;
  width: 58rem;
  height: 58rem;
  border-radius: 4rem;
  margin: 5rem auto;
  background-color: #fff;
  text-align: center;
`;

const Title = styled.h1`
  margin-top: 4rem;
  margin-bottom: 0.7rem;
  color: #171a4f;
  font: bold 36px 'Baloo';
`;

const Info = styled.div`
  font: 1rem 'Roboto';
`;

const Legend = styled.div`
  display: flex;
  align-items: center;
  margin-left: 6rem;
  height: 6rem;
`;

const LegendImg = styled.span`
  display: inline-block;
  margin: 0 1rem 0 4rem;
  width: 1.2rem;
  height: 1.2rem;
  background-color: ${({ color }) => color};
`;

const Home = () => (
  <Container>
    <Title>Day Pass Availability</Title>
    <Info>Please click on the date you wish to book</Info>
    <Legend>
      <LegendImg color="#bcff2e" />
      Available
      <LegendImg color="#ffab2e" />
      limited
      <LegendImg color="#ff2e2e" />
      Fully Booked
      <LegendImg color="#818181" />
      Closed
    </Legend>
    <Calendar />
  </Container>
);

export default Home;
