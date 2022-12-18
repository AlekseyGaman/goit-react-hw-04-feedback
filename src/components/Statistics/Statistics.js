import PropTypes from 'prop-types';
import React from 'react';
import {
  StatisticskList,
  StatisticskItem,
  StatisticsLi,
} from './Statistics.styled';

function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <StatisticskList>
      <StatisticsLi>
        <StatisticskItem>
          Good: <span>{good}</span>
        </StatisticskItem>
      </StatisticsLi>
      <StatisticsLi>
        <StatisticskItem>
          Neutral: <span>{neutral}</span>
        </StatisticskItem>
      </StatisticsLi>
      <StatisticsLi>
        <StatisticskItem>
          Bad: <span>{bad}</span>
        </StatisticskItem>
      </StatisticsLi>
      <StatisticsLi>
        <StatisticskItem>
          Total: <span>{total}</span>
        </StatisticskItem>
      </StatisticsLi>
      <StatisticsLi>
        <StatisticskItem>
          PositivePercentage: <span>{positivePercentage}</span>
        </StatisticskItem>
      </StatisticsLi>
    </StatisticskList>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
