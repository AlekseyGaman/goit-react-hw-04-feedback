import PropTypes from 'prop-types';
import React from 'react';

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <ul>
      {options.map(option => {
        return (
          <li key={option}>
            <button name={option} type="button" onClick={onLeaveFeedback}>
              {option}
            </button>
          </li>
        );
      })}
    </ul>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
