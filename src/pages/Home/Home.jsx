import React from 'react';
import styled from 'styled-components';

import Calendar from './components/Calendar';

const Container = styled.div`
  overflow: hidden;
  width: 900px;
  height: 880px;
  border-radius: 50px;
  margin: 0 auto;
  background-color: #fff;
  text-align: center;
`;

const Title = styled.h1`
  margin-top: 61px;
  margin-bottom: 10px;
  color: #171a4f;
  font: bold 36px 'Baloo';
`;

const Info = styled.div`
  font: 16px 'Roboto';
`;

const Legend = styled.div`
  display: flex;
  align-items: center;
  margin-left: 80px;
  height: 100px;
`;

const LegendImg = styled.span`
  display: inline-block;
  margin: 0 12px 0 70px;
  width: 19px;
  height: 19px;
  background-color: ${({ color }) => color};
`;

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
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
  }
}

export default Home;
