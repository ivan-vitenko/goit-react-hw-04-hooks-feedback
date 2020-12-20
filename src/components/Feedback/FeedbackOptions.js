import React from 'react';
import s from './Feedback.module.css';

const FeedbackOptions = ({ onLeaveFeedback }) => (
  <div>
    <h2>Please leave feedback</h2>

    <ul className={s.ControlsList}>
      <li>
        <button name="good" type="button" onClick={onLeaveFeedback}>
          Good
        </button>
      </li>

      <li>
        <button name="neutral" type="button" onClick={onLeaveFeedback}>
          Neutral
        </button>
      </li>

      <li>
        <button name="bad" type="button" onClick={onLeaveFeedback}>
          Bad
        </button>
      </li>
    </ul>
  </div>
);

export default FeedbackOptions;
