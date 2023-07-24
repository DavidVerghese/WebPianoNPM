"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _reactFontawesome = require("@fortawesome/react-fontawesome");
var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");
function SelectedScaleDropdown(_ref) {
  let {
    handleScaleChange,
    selectedScaleName
  } = _ref;
  const scales = ["Chromatic", "Minor", "Minor Pentatonic", "Minor Blues", "Major", "Major Pentatonic", "Mixolodian", "Harmonic Minor", "Dorian", "Major Blues", "Klezmer", "Japanese", "South East Asian"];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("label", {
    htmlFor: "scale"
  }, " Scale: ", /*#__PURE__*/React.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faMusic
  }), " "), /*#__PURE__*/React.createElement("select", {
    id: "scale",
    value: selectedScaleName,
    onChange: handleScaleChange
  }, scales.map((scale, key) => /*#__PURE__*/React.createElement("option", {
    value: scale,
    key: key
  }, scale))));
}
var _default = SelectedScaleDropdown;
exports.default = _default;