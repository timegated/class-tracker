"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUser = exports.updateMe = void 0;

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

const getUser = async (req, res) => {
  try {
    const user = await _user.User.findById(req.user._id).select("-password");
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};

exports.getUser = getUser;