import React, { useContext } from 'react';
import propTypes from 'prop-types';
import ThemeContext from '../../context';
import './Button.scss';

const Button = ({ onButtonClick, title, clsNm, disabled }) => {
    const context = useContext(ThemeContext);

    return (
    <button
        disabled={disabled}
        onClick={onButtonClick}
        className={`${clsNm} theme-${context.value}` || `custom__button theme-${context.value}`}>
        {title}
    </button>
    )
}

Button.propTypes = {
    onButtonClick: propTypes.func.isRequired,
    title: propTypes.string,
    clsNm: propTypes.string,
    disabled: propTypes.bool,
};
export default Button;
