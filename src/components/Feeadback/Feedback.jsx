import css from 'components/Feeadback/Feadback.module.css';
import PropTypes from 'prop-types';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <>
      {options.map(btnName => (
        <button
          key={btnName}
          type="button"
          className={css.btn}
          onClick={() => onLeaveFeedback(btnName)}
        >
          {btnName}
        </button>
      ))}
    </>
  );
}

FeedbackOptions.prototypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func,
};
