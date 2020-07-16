"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Item = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const itemSchema = new _mongoose.default.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    maxLength: 50
  },
  status: {
    type: String,
    required: true,
    enum: ["recieved", "not-received"],
    default: "not-received"
  },
  prio: {
    type: String,
    enum: ["slight-upgrade", "upgrade", "big-upgrade"],
    default: "slight-upgrade",
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  createdBy: {
    type: _mongoose.default.SchemaTypes.ObjectId,
    ref: "user",
    required: true
  },
  character: {
    type: _mongoose.default.SchemaTypes.ObjectId,
    ref: "characters",
    required: true
  }
}, {
  timestamps: true
});
itemSchema.index({
  characters: 1,
  name: 1
}, {
  unique: true
});

const Item = _mongoose.default.model("items", itemSchema);

exports.Item = Item;