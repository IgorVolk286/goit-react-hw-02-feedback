import PropTypes from 'prop-types';
import { WrapButtons, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({
  onChangeClickGood,
  onChangeClickNeutral,
  onChangeClickBad,
}) => {
  return (
    <WrapButtons>
      <Button onClick={onChangeClickGood}>GOOD</Button>
      <Button onClick={onChangeClickNeutral}>NEUTRAL</Button>
      <Button onClick={onChangeClickBad}>BAD</Button>
    </WrapButtons>
  );
};
FeedbackOptions.propTypes = {
  onChangeClickGood: PropTypes.func,
  onChangeClickNeutral: PropTypes.func,
  onChangeClickBad: PropTypes.func,
};
