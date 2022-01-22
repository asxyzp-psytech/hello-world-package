"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//IMPORTING PACKAGES AND MODULES

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
const Badge = _ref => {
  let {
    id,
    icon,
    content,
    containerClass,
    iconClass,
    badgeClass,
    containerStyle,
    badgeStyle,
    iconStyle
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    id: id,
    className: containerClass,
    style: containerStyle
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: iconClass + " " + icon,
    style: iconStyle
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: badgeClass,
    style: badgeStyle
  }, content));
}; //SETTING DEFAULT PROPS


Badge.defaultProps = {
  iconClass: '',
  badgeClass: '',
  containerClass: '',
  iconStyle: {},
  badgeStyle: {},
  containerStyle: {},
  icon: 'bi bi-archive-fill',
  content: 1
}; //SETTING PROP TYPES

Badge.propTypes = {
  id: _propTypes.default.string,
  iconClass: _propTypes.default.string,
  badgeClass: _propTypes.default.string,
  containerClass: _propTypes.default.string,
  iconStyle: _propTypes.default.object,
  badgeStyle: _propTypes.default.object,
  containerStyle: _propTypes.default.object,
  icon: _propTypes.default.string.isRequired,
  content: _propTypes.default.number.isRequired
};
var _default = Badge;
exports.default = _default;