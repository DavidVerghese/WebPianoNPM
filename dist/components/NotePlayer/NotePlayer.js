"use strict";

require("core-js/modules/es.weak-map.js");
require("core-js/modules/web.dom-collections.iterator.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/es.array.includes.js");
require("core-js/modules/es.string.includes.js");
var _react = _interopRequireWildcard(require("react"));
var Tone = _interopRequireWildcard(require("tone"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function NotePlayer(_ref) {
  let {
    note,
    sound,
    keyToPlay
  } = _ref;
  let isPlaying = false;
  (0, _react.useEffect)(() => {
    let synth;
    switch (sound) {
      case "default":
        synth = new Tone.Synth().toDestination();
        break;
      case "am":
        synth = new Tone.AMSynth().toDestination();
        break;
      case "duo":
        synth = new Tone.DuoSynth().toDestination();
        break;
      case "fm":
        synth = new Tone.FMSynth().toDestination();
        break;
      case "membrane":
        synth = new Tone.MembraneSynth().toDestination();
        break;
      default:
        synth = new Tone.MonoSynth().toDestination();
        break;
    }
    ;
    const handleKeyDown = event => {
      event.preventDefault();
      if (keyToPlay.includes(event.key) && !isPlaying) {
        synth.triggerAttackRelease(note, '1n');
        isPlaying = true;
      }
    };
    const handleKeyUp = event => {
      if (keyToPlay.includes(event.key)) {
        synth.triggerRelease();
        isPlaying = false;
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [note, keyToPlay, sound]);
}
var _default = NotePlayer;
exports.default = _default;