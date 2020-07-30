"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _wowClassicItems = _interopRequireDefault(require("wow-classic-items"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const items = new _wowClassicItems.default.Items({
  iconSrc: 'wowhead'
});
var _default = items;
exports.default = _default;