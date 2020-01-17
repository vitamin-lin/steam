"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actionType = require("./action-type.js");

var saveUserInfo = function saveUserInfo(data) {
  return {
    type: _actionType.SAVEUSERINFO,
    data: data
  };
};

exports.default = saveUserInfo;