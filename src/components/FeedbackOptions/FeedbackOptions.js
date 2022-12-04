import PropTypes from 'prop-types';
import React from 'react';
import {
  FeedbackList,
  FeedbackButton,
  FeedbackItem,
} from './FeedbackOptions.styled';

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <FeedbackList>
      {options.map(option => {
        return (
          <FeedbackItem key={option}>
            <FeedbackButton
              name={option}
              type="button"
              onClick={onLeaveFeedback}
            >
              {option}
            </FeedbackButton>
          </FeedbackItem>
        );
      })}
    </FeedbackList>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
