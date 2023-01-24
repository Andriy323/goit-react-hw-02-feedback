import PropTypes from 'prop-types';
import css from 'components/Notification/Notification.module.css';

export default function Notification({ message }) {
  return <p className={css.pretitleMessage}>{message}</p>;
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
