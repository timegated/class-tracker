"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.updateMe = void 0;

var _crud = require("../../utils/crud");

var _user = require("./user.model");

const updateMe = async (req, res) => {
  try {
    const user = await _user.User.findByIdAndUpdate(req.user._id, req.body, {
      new: true
    }).lean().exec();
    res.status(200).json({
      data: user
    });
  } catch (error) {
    console.error(error);
    res.status(400).end();
  }
};

exports.updateMe = updateMe;

var _default = (0, _crud.crudControllers)(_user.User);

exports.default = _default;