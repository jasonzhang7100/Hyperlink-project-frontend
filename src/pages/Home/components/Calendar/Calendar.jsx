import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 779.7px;
  height: 546.3px;
  margin: 50px auto;
  background-color: #eeeeee;
`;

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <Container>i am calendar</Container>;
  }
}

export default Calendar;
