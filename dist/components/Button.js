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
 * FUNCTION : Button COMPONENT
 * FUNCTIONALITY : DISPLAYING BUTTON
 * @param {String} id ID OF THE BUTTON COMPONENT
 * @param {Element} text TEXT WITHIN THE BUTTON
 * @param {String} class CLASS NAME OF THE BUTTON ELEMENT (e.g. "bg-dark text-light")
 * @param {Object} style CSS STYLES OF THE BUTTON ELEMENT
 * @returns <Button/> (JSX)
 */
const Button = _ref => {
  let {
    id,
    classVal,
    style,
    text
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("button", {
    id: id,
    className: classVal,
    style: style
  }, text);
}; //SETTING DEFAULT PROP VALUES


Button.defaultProps = {
  classVal: '',
  style: {},
  text: ''
}; //SETTING PROP TYPES

Button.propTypes = {
  id: _propTypes.default.string,
  classVal: _propTypes.default.string,
  style: _propTypes.default.object,
  text: _propTypes.default.string
};
var _default = Button;
exports.default = _default;