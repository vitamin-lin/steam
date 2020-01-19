"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.insertToken = exports.changeAppOnLaunch = undefined;

var _actionType = require("./action-type.js");

var constants = _interopRequireWildcard(_actionType);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

//更改登录状态
var changeAppOnLaunch = exports.changeAppOnLaunch = function changeAppOnLaunch() {
  return {
    type: constants.CHANGE_APP_ON_LAUNCH
  };
};

//写入请求token
// actions app.js

var insertToken = exports.insertToken = function insertToken(authorize) {
  return {
    type: constants.INSERT_AUTHORIZE,
    authorize: authorize
  };
};