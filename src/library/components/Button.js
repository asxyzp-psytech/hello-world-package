//IMPORTING PACKAGES AND MODULES
import React from 'react';
import PropTypes from 'prop-types';

/**
 * FUNCTION : Button COMPONENT
 * FUNCTIONALITY : DISPLAYING BUTTON
 * @param {String} id ID OF THE BUTTON COMPONENT
 * @param {Element} text TEXT WITHIN THE BUTTON
 * @param {String} class CLASS NAME OF THE BUTTON ELEMENT (e.g. "bg-dark text-light")
 * @param {Object} style CSS STYLES OF THE BUTTON ELEMENT
 * @returns <Button/> (JSX)
 */
const Button = ({id, classVal, style, text}) => {
  return (<button id={id} className={classVal} style={style}>{text}</button>);
};

//SETTING DEFAULT PROP VALUES
Button.defaultProps = {
    classVal: '',
    style: {},
    text: '',
};

//SETTING PROP TYPES
Button.propTypes = {
    id : PropTypes.string,
    classVal: PropTypes.string,
    style: PropTypes.object,
    text : PropTypes.string
};

export default Button;
