import React from 'react';
import PropTypes from 'prop-types';

export const Statictic = ({ good, bad, neutral }) => {
  return (
    <div>
      <h3>STATICTICS</h3>
      <p>
        GOOD:<span>{good}</span>
      </p>
      <p>
        NEUTRAL:<span>{neutral}</span>
      </p>
      <p>
        BAD:<span>{bad}</span>
      </p>
    </div>
  );
};
