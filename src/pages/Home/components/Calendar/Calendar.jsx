import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

import CalendarDay from './components/CalendarDay';
import buildCalendar from './buildCalendar';
// 获得固定的假数据
import getSessionData from '../../../../apis/getSessionData';

const Container = styled.div`
  margin: 0 auto;
  width: 48rem;
  border-top: solid 1px #c7c7c7;
  border-left: solid 1px #c7c7c7;
`;

const CalendarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 6rem;
  border-right: solid 1px #c7c7c7;
  color: #181b50;
  font: bold 2.2rem 'Baloo';
`;

const CalendarButton = styled.button`
  margin: 0 6rem;
  border: none;
  background-color: #fff;
  font: 2rem 'Baloo';
  &:hover {
    cursor: pointer;
  }
`;

const CalendarWeekday = styled.span`
  display: inline-block;
  width: calc(100% / 7);
  height: 2.4rem;
  border-top: solid 1px #c7c7c7;
  border-bottom: solid 1px #c7c7c7;
  border-right: solid 1px #c7c7c7;
  font: bold 0.9rem 'Roboto';
  line-height: 2.4rem;
`;

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: moment(),
      calendar: [],
      monthlySessions: [],
    };
    this.handleLeftClick = this.handleLeftClick.bind(this);
    this.handleRightClick = this.handleRightClick.bind(this);
    this.setMonthlySessions = this.setMonthlySessions.bind(this);
  }

  componentDidMount() {
    const { value } = this.state;
    this.setState({
      calendar: buildCalendar(value),
      monthlySessions: this.setMonthlySessions(value),
    });
  }

  handleLeftClick() {
    const { value } = this.state;
    const preMonth = value.clone().subtract(1, 'month');
    const preCalendar = buildCalendar(preMonth);
    this.setState({
      value: preMonth,
      calendar: preCalendar,
      monthlySessions: this.setMonthlySessions(preMonth),
    });
  }

  handleRightClick() {
    const { value } = this.state;
    const nextMonth = value.clone().add(1, 'month');
    const nextCalendar = buildCalendar(nextMonth);
    this.setState({
      value: nextMonth,
      calendar: nextCalendar,
      monthlySessions: this.setMonthlySessions(nextMonth),
    });
  }

  setMonthlySessions(monthValue) {
    const { monthlySessions } = this.state;
    const { stateArr } = getSessionData(monthValue.format('M'));
    monthlySessions.push(...stateArr);
    return monthlySessions;
  }

  render() {
    const { calendar, value, monthlySessions } = this.state;
    return (
      <Container>
        <CalendarHeader>
          <CalendarButton onClick={this.handleLeftClick}>{'<'}</CalendarButton>
          {value.clone().format('MMMM YYYY')}
          <CalendarButton onClick={this.handleRightClick}>{'>'}</CalendarButton>
        </CalendarHeader>
        {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map((weekday) => (
          <CalendarWeekday key={weekday}>{weekday}</CalendarWeekday>
        ))}
        {calendar.map((week) => week.map((day) => (
          <CalendarDay
            key={day}
            day={day}
            value={value}
            monthlySessions={monthlySessions}
          />
        )))}
      </Container>
    );
  }
}

export default Calendar;
