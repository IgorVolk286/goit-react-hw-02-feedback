import PropTypes from 'prop-types';

export const FeedbackOptions = ({
  onChangeClickGood,
  onChangeClickNeutral,
  onChangeClickBad,
}) => {
  return (
    <div>
      <button onClick={onChangeClickGood}>GOOD</button>
      <button onClick={onChangeClickNeutral}>NEUTRAL</button>
      <button onClick={onChangeClickBad}>BAD</button>
    </div>
  );
};
FeedbackOptions.propTypes = {
  onChangeClickGood: PropTypes.func,
  onChangeClickNeutral: PropTypes.func,
  onChangeClickBad: PropTypes.func,
};
