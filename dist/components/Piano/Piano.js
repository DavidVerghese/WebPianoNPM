"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _Key = _interopRequireDefault(require("../Key/Key"));
var Tone = _interopRequireWildcard(require("tone"));
require("./Piano.css");
var _react = _interopRequireWildcard(require("react"));
var _SelectedScaleDropdown = _interopRequireDefault(require("../SelectedScaleDropdown/SelectedScaleDropdown"));
var _SelectedSoundDropdown = _interopRequireDefault(require("../SelectedSoundDropdown/SelectedSoundDropdown"));
var _Scales = require("../Scales/Scales");
var _NotePlayer = _interopRequireDefault(require("../NotePlayer/NotePlayer"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function Piano(_ref) {
  let {
    width,
    height
  } = _ref;
  const [selectedScale, setSelectedScale] = (0, _react.useState)(_Scales.chromatic);
  const [selectedScaleName, setSelectedScaleName] = (0, _react.useState)('chromatic');
  const [selectedSound, setSelectedSound] = (0, _react.useState)('default');
  const [selectedNotes, setSelectedNotes] = (0, _react.useState)([]);
  const [defaultHeight, setDefaultHeight] = (0, _react.useState)('100px');
  const [defaultWidth, setDefaultWidth] = (0, _react.useState)('600px');
  let player = (0, _react.useRef)(null);
  (0, _react.useEffect)(() => {
    player.current = new Tone.Synth().toDestination();
    _Scales.chromatic.map(note => setSelectedNotes(current => [...current, note.keystrokes]));
  }, []);
  (0, _react.useEffect)(() => {
    if (!localStorage.getItem('selectedSound')) {
      localStorage.setItem('selectedSound', 'default');
    }
    setSelectedSound(localStorage.getItem('selectedSound'));
  }, [selectedSound]);
  (0, _react.useEffect)(() => {
    if (!localStorage.getItem('selectedScaleName')) {
      localStorage.setItem('selectedScaleName', 'Chromatic');
    }
    setSelectedScaleName(localStorage.getItem('selectedScaleName'));
    switch (selectedScaleName) {
      case "Chromatic":
        setSelectedScale(_Scales.chromatic);
        handleSelectedNoteChange(_Scales.chromatic);
        break;
      case "Major":
        setSelectedScale(_Scales.major);
        handleSelectedNoteChange(_Scales.major);
        break;
      case "Japanese":
        setSelectedScale(_Scales.japanese);
        handleSelectedNoteChange(_Scales.japanese);
        break;
      case "Major Pentatonic":
        setSelectedScale(_Scales.majorPentatonic);
        handleSelectedNoteChange(_Scales.majorPentatonic);
        break;
      case "South East Asian":
        setSelectedScale(_Scales.southEastAsian);
        handleSelectedNoteChange(_Scales.southEastAsian);
        break;
      case "Klezmer":
        setSelectedScale(_Scales.klezmer);
        handleSelectedNoteChange(_Scales.klezmer);
        break;
      case "Major Blues":
        setSelectedScale(_Scales.majorBlues);
        handleSelectedNoteChange(_Scales.majorBlues);
        break;
      case "Harmonic Minor":
        setSelectedScale(_Scales.harmonicMinor);
        handleSelectedNoteChange(_Scales.harmonicMinor);
        break;
      case "Dorian":
        setSelectedScale(_Scales.dorian);
        handleSelectedNoteChange(_Scales.dorian);
        break;
      case "Mixolodian":
        setSelectedScale(_Scales.mixolodian);
        handleSelectedNoteChange(_Scales.mixolodian);
        break;
      case "Minor":
        setSelectedScale(_Scales.minor);
        handleSelectedNoteChange(_Scales.minor);
        break;
      case "Minor Pentatonic":
        setSelectedScale(_Scales.minorPentatonic);
        handleSelectedNoteChange(_Scales.minorPentatonic);
        break;
      default:
        setSelectedScale(_Scales.minorBlues);
        handleSelectedNoteChange(_Scales.minorBlues);
        break;
    }
    ;
  }, [selectedScaleName]);
  function handleSelectedNoteChange(scale) {
    setSelectedNotes([]);
    scale.map(note => setSelectedNotes(current => [...current, note.keystrokes]));
  }
  ;
  const handleSoundChange = event => {
    setSelectedSound(event.target.value);
    localStorage.setItem('selectedSound', event.target.value);
    window.location.reload(false);
  };
  const handleScaleChange = event => {
    setSelectedScaleName(event.target.value);
    localStorage.setItem('selectedScaleName', event.target.value);
  };
  (0, _react.useEffect)(() => {
    if (width < 400) {
      console.warn('Warning: The width prop should be at least 400.');
    }
  }, [width]);
  (0, _react.useEffect)(() => {
    if (height < 40) {
      console.warn('Warning: The height prop should be at least 40.');
    }
  }, [height]);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "piano-parent"
  }, /*#__PURE__*/_react.default.createElement(_SelectedScaleDropdown.default, {
    handleScaleChange: handleScaleChange,
    selectedScaleName: selectedScaleName
  }), /*#__PURE__*/_react.default.createElement(_SelectedSoundDropdown.default, {
    handleSoundChange: handleSoundChange,
    selectedSound: selectedSound
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "piano",
    style: {
      width: width && width >= 400 ? "".concat(width, "px") : defaultWidth,
      height: height && height >= 40 ? "".concat(height, "px") : defaultHeight
    }
  }, selectedScale.map((note, key) => /*#__PURE__*/_react.default.createElement(_Key.default, {
    sound: localStorage.getItem('selectedSound'),
    key: key,
    keystrokes: note.keystrokes,
    note: note.note,
    color: note.color
  }))), selectedScale.map((note, key) => /*#__PURE__*/_react.default.createElement(_NotePlayer.default, {
    key: key,
    sound: selectedSound,
    note: note.note,
    keyToPlay: note.keystrokes
  })));
}
var _default = Piano;
exports.default = _default;