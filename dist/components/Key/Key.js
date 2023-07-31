"use strict";

require("core-js/modules/es.weak-map.js");
require("core-js/modules/web.dom-collections.iterator.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var Tone = _interopRequireWildcard(require("tone"));
require("./Key.css");
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const useTonePlayer = (note, sound) => {
  const playSound = () => {
    if (sound === "default") {
      const newPlayer = new Tone.Synth().toDestination();
      newPlayer.triggerAttackRelease(note, "8n");
    } else if (sound === "am") {
      const newPlayer = new Tone.AMSynth().toDestination();
      newPlayer.triggerAttackRelease(note, "8n");
    } else if (sound === "duo") {
      const newPlayer = new Tone.DuoSynth().toDestination();
      newPlayer.triggerAttackRelease(note, "8n");
    } else if (sound === "fm") {
      const newPlayer = new Tone.FMSynth().toDestination();
      newPlayer.triggerAttackRelease(note, "8n");
    } else if (sound === "membrane") {
      const newPlayer = new Tone.MembraneSynth().toDestination();
      newPlayer.triggerAttackRelease(note, "8n");
    } else {
      const newPlayer = new Tone.MonoSynth().toDestination();
      newPlayer.triggerAttackRelease(note, "8n");
    }
  };
  // const playSound = (note, sound) => {
  //   let newPlayer;

  //   switch(sound) {
  //     case "default":
  //       newPlayer = new Tone.Synth().toDestination();
  //       newPlayer.triggerAttackRelease(note, "8n");
  //       break;
  //     case "am":
  //       newPlayer = new Tone.AMSynth().toDestination();
  //       newPlayer.triggerAttackRelease(note, "8n");
  //       break;
  //     case "duo":
  //       newPlayer = new Tone.DuoSynth().toDestination();
  //       newPlayer.triggerAttackRelease(note, "8n");
  //       break;
  //     case "fm":
  //       newPlayer = new Tone.FMSynth().toDestination();
  //       newPlayer.triggerAttackRelease(note, "8n");
  //       break;
  //     case "membrane":
  //       newPlayer = new Tone.MembraneSynth().toDestination();
  //       newPlayer.triggerAttackRelease(note, "8n");
  //       break;
  //     default:
  //       newPlayer = new Tone.MonoSynth().toDestination();
  //       newPlayer.triggerAttackRelease(note, "8n");
  //   }
  // };

  return {
    playSound
  };
};
function Key(_ref) {
  let {
    note,
    color,
    sound,
    keystrokes
  } = _ref;
  const {
    playSound
  } = useTonePlayer(note, sound);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "key"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: color,
    onClick: playSound
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "key-info"
  }, /*#__PURE__*/_react.default.createElement("strong", null, note), /*#__PURE__*/_react.default.createElement("em", null, keystrokes[0]))));
}
;
var _default = Key;
exports.default = _default;