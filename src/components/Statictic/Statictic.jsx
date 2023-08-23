import React from 'react';
import PropTypes from 'prop-types';
import { Item, TitleList } from './Statictic.styled';

export const Statictic = ({
  good,
  bad,
  neutral,
  totalFeedBack,
  feedbackPercentage,
}) => {
  return (
    <div>
      <TitleList>STATICTICS</TitleList>
      <ul>
        <Item>GOOD:{good}</Item>
        <Item>NEUTRAL:{neutral}</Item>
        <Item>BAD:{bad}</Item>
        <Item>Total:{totalFeedBack()}</Item>
        <Item>Positive feedBack:{feedbackPercentage()}%</Item>
      </ul>
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
