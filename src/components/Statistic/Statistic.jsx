import PropTypes from 'prop-types';

import Notification from 'components/Notification/Notification';
import css from 'components/Statistic/Statistic.module.css';

export default function Statistics({
  total,
  good,
  bad,
  neutral,
  positivePercentage,
}) {
  return (
    <>
      {total > 0 ? (
        <div>
          <ul className={css.list}>
            <li className={css.item}>Good:{good}</li>
            <li className={css.item}>Neutral:{neutral}</li>
            <li className={css.item}>Bad:{bad}</li>
            <li className={css.item}>Total:{total}</li>
            <li className={css.item}>
              Positive feedback:{positivePercentage}%
            </li>
          </ul>
        </div>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </>
  );
}


Statistics.propTypes  = {
  total: PropTypes.number.isRequired,
  good: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
