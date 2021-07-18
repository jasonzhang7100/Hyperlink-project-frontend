import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import moment from 'moment';
import { withRouter } from 'react-router-dom';

import setDayStyles from './setDayStyles';

const DayItem = styled.span`
  display: inline-block;
  width: calc(100% / 7);
  height: 5rem;
  padding: 0.2rem 0.5rem;
  border-bottom: solid 1px #c7c7c7;
  border-right: solid 1px #c7c7c7;
  background-color: ${({ colorStyles }) => colorStyles.bgColor};
  color: ${({ colorStyles }) => colorStyles.numColor};
  font: bold 1.2rem 'Roboto';
  text-align: left;
  ${({ colorStyles }) => (colorStyles.bgColor === '#bcff2e' || colorStyles.bgColor === '#ffab2e'
    ? '&:hover {cursor: pointer;}'
    : '')}
`;

const CalendarDay = ({
  day, value, monthlySessions, history,
}) => {
  const colorStyles = setDayStyles(day, value, monthlySessions);
  const handleDayClick = (date, style) => {
    if (style.bgColor === '#bcff2e' || style.bgColor === '#ffab2e') {
      history.push('/booking', { date: date.format('YYYY-MM-DD').toString() });
    }
  };

  return (
    <DayItem
      colorStyles={colorStyles}
      onClick={() => {
        handleDayClick(day, colorStyles);
      }}
    >
      {day.format('D').toString()}
    </DayItem>
  );
};

CalendarDay.propTypes = {
  day: PropTypes.instanceOf(moment).isRequired,
  value: PropTypes.instanceOf(moment).isRequired,
  monthlySessions: PropTypes.arrayOf(PropTypes.string).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default withRouter(CalendarDay);
