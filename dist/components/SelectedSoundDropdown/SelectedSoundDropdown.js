"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("./SelectedSoundDropdown.css");
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function SelectedSoundDropdown(_ref) {
  let {
    handleSoundChange,
    selectedSound
  } = _ref;
  const sounds = ['default', 'am', 'duo', 'fm', 'membrane', 'mono'];
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "scale"
  }, " Sound: "), /*#__PURE__*/_react.default.createElement("select", {
    id: "scale",
    value: selectedSound,
    onChange: handleSoundChange
  }, sounds.map((tone, key) => /*#__PURE__*/_react.default.createElement("option", {
    key: key,
    value: tone
  }, tone))));
}
var _default = SelectedSoundDropdown;
exports.default = _default;