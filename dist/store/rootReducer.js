"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require("../npm/redux/lib/redux.js");

var _reducer = require("./userInfo/reducer.js");

var _reducer2 = _interopRequireDefault(_reducer);

var _reducer3 = require("./userLogin/reducer.js");

var _reducer4 = _interopRequireDefault(_reducer3);

var _reducer5 = require("./home/reducer.js");

var _reducer6 = _interopRequireDefault(_reducer5);

var _reducer7 = require("./goodDetail/reducer.js");

var _reducer8 = _interopRequireDefault(_reducer7);

var _reducer9 = require("./confirmOrder/reducer.js");

var _reducer10 = _interopRequireDefault(_reducer9);

var _reducer11 = require("./shareDetail/reducer.js");

var _reducer12 = _interopRequireDefault(_reducer11);

var _reducer13 = require("./ruleDialog/reducer.js");

var _reducer14 = _interopRequireDefault(_reducer13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
  userInfo: _reducer2.default,
  userLogin: _reducer4.default,
  idData: _reducer6.default,
  GDetail: _reducer8.default,
  cOrder: _reducer10.default,
  shareGroup: _reducer12.default,
  ruleDialog: _reducer14.default
});