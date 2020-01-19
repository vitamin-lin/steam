"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require("../npm/redux/lib/redux.js");

var _reducer = require("./userLogin/reducer.js");

var _reducer2 = _interopRequireDefault(_reducer);

var _reducer3 = require("./goodDetail/reducer.js");

var _reducer4 = _interopRequireDefault(_reducer3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
  GDetail: _reducer4.default,
  userLogin: _reducer2.default
});