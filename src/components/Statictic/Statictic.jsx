import React from 'react';
import PropTypes from 'prop-types';

export const Statictic = ({
  good,
  bad,
  neutral,
  totalFeedBack,
  feedbackPercentage,
}) => {
  return (
    <div>
      <h3>STATICTICS</h3>
      <p>GOOD:{good}</p>
      <p>NEUTRAL:{neutral}</p>
      <p>BAD:{bad}</p>
      <p>Total:{totalFeedBack()}</p>
      <p>Positive feedBack:{feedbackPercentage()}%</p>
    </div>
  );
};
Statictic.propTypes = {
  good: PropTypes.number,
  bad: PropTypes.number,
  neutral: PropTypes.number,
  totalFeedBack: PropTypes.func,
  feedbackPercentage: PropTypes.func,
};
