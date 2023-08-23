import React from 'react';
import PropTypes from 'prop-types';
import { Statictic } from 'components/Statictic/Statictic';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';

import { Report } from 'notiflix/build/notiflix-report-aio';
export const SectionTitle = ({
  good,
  neutral,
  bad,
  totalFeedBack,
  onChangeClickGood,
  onChangeClickNeutral,
  onChangeClickBad,
  feedbackPercentage,
}) => {
  return (
    <section>
      <h1>Please leave feedBack</h1>
      <FeedbackOptions
        onChangeClickGood={onChangeClickGood}
        onChangeClickNeutral={onChangeClickNeutral}
        onChangeClickBad={onChangeClickBad}
      />

      {good || neutral || bad ? (
        <Statictic
          good={good}
          bad={bad}
          neutral={neutral}
          totalFeedBack={totalFeedBack}
          feedbackPercentage={feedbackPercentage}
        />
      ) : (
        Report.warning(
          ' Warning',
          '""There is no feedback"',
          'MAKE YOUR CHOOSE'
        )
      )}
    </section>
  );
};
SectionTitle.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  totalFeedBack: PropTypes.func,
  onChangeClickGood: PropTypes.func,
  onChangeClickNeutral: PropTypes.func,
  onChangeClickBad: PropTypes.func,
  feedbackPercentage: PropTypes.func,
};
