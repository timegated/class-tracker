"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.crudControllers = exports.removeOne = exports.updateOne = exports.createOne = exports.createItems = exports.getMany = exports.getUser = exports.getOne = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const getOne = model => async (req, res) => {
  try {
    const doc = await model.findOne({
      createdBy: req.user._id,
      _id: req.params.id
    }).lean().exec();

    if (!doc) {
      return res.status(400).end();
    }

    res.status(200).json({
      data: doc
    });
  } catch (error) {
    console.error(error);
    res.status(400).end();
  }
};

exports.getOne = getOne;

const getUser = model => async (req, res) => {
  try {
    const user = await model.findById(req.user._id).select("-password").exec();
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};

exports.getUser = getUser;

const getMany = model => async (req, res) => {
  try {
    const docs = await model.find({
      createdBy: req.user._id
    }).lean().exec();
    res.status(200).json({
      docs
    });
  } catch (error) {
    console.error(error.message);
    res.status(400).end();
  }
};

exports.getMany = getMany;

const createItems = model => async (req, res) => {
  const createdBy = req.user_id;

  try {
    const doc = await model.create(_objectSpread(_objectSpread({}, req.body), {}, {
      createdBy
    }));
  } catch (error) {
    console.error(error.message);
  }
};

exports.createItems = createItems;

const createOne = model => async (req, res) => {
  const createdBy = req.user._id;

  try {
    const doc = await model.create(_objectSpread(_objectSpread({}, req.body), {}, {
      createdBy
    }));
    res.status(201).json({
      data: doc
    });
  } catch (e) {
    console.error(e);
    res.status(400).end();
  }
};

exports.createOne = createOne;

const updateOne = model => async (req, res) => {
  try {
    const updatedDoc = await model.findOneAndUpdate({
      createdBy: req.user._id,
      _id: req.params.id
    }, req.body, {
      new: true
    }).lean().exec();

    if (!updatedDoc) {
      return res.status(400).end();
    }

    res.status(200).json({
      data: updatedDoc
    });
  } catch (error) {
    console.error(error);
    res.status(400).end();
  }
};

exports.updateOne = updateOne;

const removeOne = model => async (req, res) => {
  try {
    const removed = await model.findOneAndRemove({
      createdBy: req.user._id,
      _id: req.params.id
    });

    if (!removed) {
      return res.status(400).end();
    }

    return res.status(200).json({
      data: removed
    });
  } catch (e) {
    console.error(e);
    res.status(400).end();
  }
};

exports.removeOne = removeOne;

const crudControllers = model => ({
  removeOne: removeOne(model),
  updateOne: updateOne(model),
  getMany: getMany(model),
  getOne: getOne(model),
  createOne: createOne(model),
  getUser: getUser(model)
});

exports.crudControllers = crudControllers;