import React from 'react';
import styled from 'styled-components';

import Calendar from './components/Calendar';

const Container = styled.div`
  width: 900px;
  height: 880px;
  border-radius: 50px;
  margin: 0 auto;
  background-color: #fff;
  text-align: center;
`;

const Title = styled.div``;

const Legend = styled.div`
  display: flex;
  justify-content: space-around;
`;

const LegendImg = styled.div``;

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container>
        <Title>
          <h2>Day Pass Availability</h2>
          <h3>Please click on the date you wish to book</h3>
        </Title>
        <Legend>
          <LegendImg>Available</LegendImg>
          <LegendImg>limited</LegendImg>
          <LegendImg>Fully Booked</LegendImg>
          <LegendImg>Closed</LegendImg>
        </Legend>
        <Calendar />
      </Container>
    );
  }
}

export default Home;
