import React from 'react';
import s from './Feedback.module.css';

const Statistics = ({
  good,
  neutral,
  bad,
  totalFeedback,
  positiveFeedbackPercentage,
}) => (
  <div>
    <h2>Statistics</h2>

    {Boolean(totalFeedback) ? (
      <div>
        <ul className={s.StatisticList}>
          <li>Good: {good} </li>
          <li>Neutral: {neutral}</li>
          <li>Bad: {bad}</li>
        </ul>

        <div>
          <p>Total: {totalFeedback}</p>
          <p>Positive feedback: {positiveFeedbackPercentage}</p>
        </div>
      </div>
    ) : (
      <p>No feedback given</p>
    )}
  </div>
);

export default Statistics;
