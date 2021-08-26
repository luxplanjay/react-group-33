import PropTypes from 'prop-types';
import css from './PageTitle.module.css';

export const PageTitle = ({ text }) => {
  return <h1 className={css.title}>{text}</h1>;
};

PageTitle.propTypes = {
  text: PropTypes.string.isRequired,
};
