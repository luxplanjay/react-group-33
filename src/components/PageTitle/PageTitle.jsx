import css from "./PageTitle.module.css"
import PropTypes from 'prop-types';

export const PageTitle = ({text}) => {
    return <h1 className={css.title}>{text}</h1>
}

PageTitle.propTypes = {
text: PropTypes.string.isRequired

}

