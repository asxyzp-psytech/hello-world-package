//IMPORTING PACKAGES AND MODULES
import React from 'react';
import PropTypes from 'prop-types';

/**
 * FUNCTION : Badge COMPONENT
 * FUNCTIONALITY : DISPLAYING BADGE ICON & CONTENT
 * @param {String} id ID OF THE BADGE COMPONENT
 * @param {Element} icon CLASS NAME OF THE ICON
 * @param {String} content BADGE CONTENT (e.g. 4)
 * @param {String} containerClass CLASS NAME OF THE CONTAINER CONTAINING BADGE & ICON
 * @param {String} iconClass CLASS NAME OF THE ICON ELEMENT (e.g. "bg-dark text-light")
 * @param {String} badgeClass CLASS NAME OF THE BADGE CONTENT (e.g. "bg-warning text-light")
 * @param {String} containerStyle CSS STYLES OF THE CONTAINER CONTAINING BADGE & ICON
 * @param {Object} iconStyle CSS STYLES OF THE ICON ELEMENT
 * @param {Object} badgeStyle CSS STYLES OF THE BADGE CONTENT
 * @returns <Badge/> (JSX)
 */
const Badge = ({id, icon, content, containerClass, iconClass, badgeClass, containerStyle, badgeStyle, iconStyle }) => {
  return (<div id={id} className={containerClass} style={containerStyle}>
            <div className={iconClass+" "+icon} style={iconStyle}></div>
            <div className={badgeClass} style={badgeStyle}>{content}</div>
        </div>);
};

//SETTING DEFAULT PROPS
Badge.defaultProps = {
    iconClass: '',
    badgeClass: '',
    containerClass: '',
    iconStyle: {},
    badgeStyle: {},
    containerStyle: {},
    icon: 'bi bi-archive-fill',
    content: 1
};

//SETTING PROP TYPES
Badge.propTypes = {
    id : PropTypes.string,
    iconClass: PropTypes.string,
    badgeClass: PropTypes.string,
    containerClass: PropTypes.string,
    iconStyle: PropTypes.object,
    badgeStyle: PropTypes.object,
    containerStyle: PropTypes.object,
    icon: PropTypes.string.isRequired,
    content: PropTypes.number.isRequired
};

export default Badge;