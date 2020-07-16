"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateMe = void 0;

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