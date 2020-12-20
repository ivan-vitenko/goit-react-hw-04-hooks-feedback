import { useState } from 'react';
// import React, { Component } from 'react';
import FeedbackOptions from './components/Feedback/FeedbackOptions';
import Statistics from './components/Feedback/Statistics';
import Section from './components/Feedback/Section';

import s from './components/Feedback/Feedback.module.css';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleFeedback = e => {
    const buttonName = e.target.name;

    switch (buttonName) {
      case 'good':
        setGood(state => state + 1);
        break;

      case 'neutral':
        setNeutral(state => state + 1);
        break;

      case 'bad':
        setBad(state => state + 1);
        break;

      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    if (countTotalFeedback()) {
      return Math.floor((good / countTotalFeedback()) * 100) + '%';
    }
  };

  return (
    <div className={s.Container}>
      <Section title="FeedbackOptions">
        <FeedbackOptions onLeaveFeedback={handleFeedback} />
      </Section>

      <Section title="Statistics">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          totalFeedback={countTotalFeedback()}
          positiveFeedbackPercentage={countPositiveFeedbackPercentage()}
        />
      </Section>
    </div>
  );
}

// class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   handleFeedback = e => {
//     const buttonName = e.target.name;
//     setState(prevState => ({ [buttonName]: prevState[buttonName] + 1 }));
//   };

//   countTotalFeedback = () => {
//     return good + neutral + bad;
//   };

//   countPositiveFeedbackPercentage = () => {
//     if (countTotalFeedback()) {
//       return (
//         Math.floor((good / countTotalFeedback()) * 100) + '%'
//       );
//     }
//   };

//   render() {
//     return (
//       <div className={s.Container}>
//         <Section title="FeedbackOptions">
//           <FeedbackOptions onLeaveFeedback={handleFeedback} />
//         </Section>

//         <Section title="Statistics">
//           <Statistics
//             good={good}
//             neutral={neutral}
//             bad={bad}
//             totalFeedback={countTotalFeedback()}
//             positiveFeedbackPercentage={countPositiveFeedbackPercentage()}
//           />
//         </Section>
//       </div>
//     );
//   }
// }

export default App;
