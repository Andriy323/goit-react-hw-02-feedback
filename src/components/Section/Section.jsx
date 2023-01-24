import PropTypes from 'prop-types';

const Section = ({ title, children }) => {
  return (
    <>
      <p>{title}</p>
      {children}
    </>
  );
};

export default Section;

Section.prototypes = {
  title: PropTypes.string,
};
