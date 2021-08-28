import PropTypes from 'prop-types';
import { Title } from './PageTitle.styled';

export const PageTitle = ({ text }) => {
  return <Title>{text}</Title>;
};

PageTitle.propTypes = {
  text: PropTypes.string.isRequired,
};
