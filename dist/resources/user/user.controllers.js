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
  const _id = req.params.id;

  try {
    const user = await (await _user.User.findById({
      _id
    })).populate("characters").execPopulate();
    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(400).json({
      msg: "request failed inside getAllUsers"
    });
  }
};

exports.getUser = getUser;