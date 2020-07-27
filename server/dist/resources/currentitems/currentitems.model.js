"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CurrentItem = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const currentSchema = new _mongoose.default.Schema({
  charName: {
    type: String,
    required: true
  },
  head: {
    type: String
  },
  shoulder: {
    type: String
  },
  chest: {
    type: String
  },
  legs: {
    type: String
  },
  waist: {
    type: String
  },
  hands: {
    type: String
  },
  feet: {
    type: String
  },
  wrist: {
    type: String
  },
  createdBy: {
    type: _mongoose.default.SchemaTypes.ObjectId,
    ref: "user",
    required: true
  },
  character: {
    type: _mongoose.default.SchemaTypes.ObjectId,
    ref: "characters"
  }
});

const CurrentItem = _mongoose.default.model("currentitems", currentSchema);

exports.CurrentItem = CurrentItem;