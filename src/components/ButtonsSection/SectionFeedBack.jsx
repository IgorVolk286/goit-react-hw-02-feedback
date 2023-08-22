import React from 'react';
// import PropTypes from 'prop-types';
import { Statictic } from 'components/Statictic/Statictic';

export const SectionFeedBack = ({ good, neutral, bad, onChangeClick }) => {
  return (
    <section>
      <h1>Please leave feedBack</h1>
      <div>
        <button onClick={onChangeClick}>GOOD</button>
        <button>NEUTRAL</button>
        <button>BAD</button>
      </div>
      <Statictic good={good} bad={bad} neutral={neutral} />
    </section>
  );
};
