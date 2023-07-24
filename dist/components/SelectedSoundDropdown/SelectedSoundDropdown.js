"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("./SelectedSoundDropdown.css");
function SelectedSoundDropdown(_ref) {
  let {
    handleSoundChange,
    selectedSound
  } = _ref;
  const sounds = ['default', 'am', 'duo', 'fm', 'membrane', 'mono'];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("label", {
    htmlFor: "scale"
  }, " Sound: ", /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined"
  }, "piano"), " "), /*#__PURE__*/React.createElement("select", {
    id: "scale",
    value: selectedSound,
    onChange: handleSoundChange
  }, sounds.map((tone, key) => /*#__PURE__*/React.createElement("option", {
    key: key,
    value: tone
  }, tone))));
}
var _default = SelectedSoundDropdown;
exports.default = _default;