"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Characters = void 0;

const mongoose = require("mongoose");

const characterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  charClass: {
    type: String,
    required: true
  },
  guild: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  items: [{
    type: mongoose.SchemaTypes.ObjectId,
    ref: "items"
  }],
  createdBy: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "user",
    required: true
  }
}, {
  timestamps: true
});
characterSchema.index({
  user: 1,
  name: 1
}, {
  unique: true
});
const Characters = mongoose.model("characters", characterSchema);
exports.Characters = Characters;