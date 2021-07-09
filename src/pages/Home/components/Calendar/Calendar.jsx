import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

import buildCalendar from './buildCalendar';
import setDayStyles from './setDayStyles';
// 获得固定的假数据
import getSessionData from './fakeData';

const Container = styled.div`
  margin: 5px auto;
  width: 785.4px;
  border-top: solid 1px #c7c7c7;
  border-left: solid 1px #c7c7c7;
`;

const CalendarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 98.4px;
  border-right: solid 1px #c7c7c7;
  color: #181b50;
  font: bold 35.4px 'Baloo';
`;

const CalendarButton = styled.div`
  margin: 0 100px;
  color: #000;
  font: 30px 'Baloo';
`;

const CalendarWeekday = styled.div`
  display: inline-block;
  width: calc(100% / 7);
  height: 39.4px;
  border-top: solid 1px #c7c7c7;
  border-bottom: solid 1px #c7c7c7;
  border-right: solid 1px #c7c7c7;
  background-color: #fff;
  font: bold 13.8px 'Roboto';
  line-height: 39.4px;
`;

const CalendarDay = styled.div`
  display: inline-block;
  width: calc(100% / 7);
  height: 81.7px;
  padding: 3px 5px;
  border-bottom: solid 1px #c7c7c7;
  border-right: solid 1px #c7c7c7;
  background-color: ${({ colorStyles }) => colorStyles.bgColor};
  color: ${({ colorStyles }) => colorStyles.numColor};
  font: bold 19.7px 'RobotoMono';
  text-align: left;
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
  }

  componentDidMount() {
    const { value, monthlySessions } = this.state;
    const { stateArr } = getSessionData(value.clone().format('M'));
    monthlySessions.push(...stateArr);
    this.setState({
      calendar: buildCalendar(value),
      monthlySessions,
    });
  }

  handleLeftClick() {
    const { value, monthlySessions } = this.state;
    const preMonth = value.clone().subtract(1, 'month');
    const preCalendar = buildCalendar(preMonth);
    const { stateArr } = getSessionData(preMonth.format('M'));
    monthlySessions.push(...stateArr);
    this.setState({
      value: preMonth,
      calendar: preCalendar,
      monthlySessions,
    });
  }

  handleRightClick() {
    const { value, monthlySessions } = this.state;
    const nextMonth = value.clone().add(1, 'month');
    const nextCalendar = buildCalendar(nextMonth);
    const { stateArr } = getSessionData(nextMonth.format('M'));
    monthlySessions.push(...stateArr);
    this.setState({
      value: nextMonth,
      calendar: nextCalendar,
      monthlySessions,
    });
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
          <CalendarWeekday>{weekday}</CalendarWeekday>
        ))}
        {calendar.map((week) => week.map((day) => (
          <CalendarDay
            colorStyles={setDayStyles(day, value, monthlySessions)}
          >
            {day.format('D').toString()}
          </CalendarDay>
        )))}
      </Container>
    );
  }
}

export default Calendar;
