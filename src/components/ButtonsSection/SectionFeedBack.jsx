import React from 'react';
// import PropTypes from 'prop-types';
import { Statictic } from 'components/Statictic/Statictic';

export const SectionFeedBack = ({
  good,
  neutral,
  bad,
  total,
  onChangeClickG,
  onChangeClickN,
  onChangeClickB,
  feedbackPercentage,
}) => {
  return (
    <section>
      <h1>Please leave feedBack</h1>
      <div>
        <button onClick={onChangeClickG}>GOOD</button>
        <button onClick={onChangeClickN}>NEUTRAL</button>
        <button onClick={onChangeClickB}>BAD</button>
      </div>
      <Statictic
        good={good}
        bad={bad}
        neutral={neutral}
        total={total}
        feedbackPercentage={feedbackPercentage}
      />
    </section>
  );
};
