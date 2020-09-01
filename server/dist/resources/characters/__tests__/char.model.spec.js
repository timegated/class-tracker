"use strict";

var _char = require("../char.model");

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Char model', () => {
  describe('schema', () => {
    test('name', () => {
      const name = _char.Char.schema.obj.name;
      expect(name).toEqual({
        type: String,
        required: true,
        trim: true,
        maxLength: 50
      });
    });
  });
});