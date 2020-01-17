'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = userLogin;

var _actionType = require('./action-type.js');

var INITIAL_STATE = {
  //请求接口域名地址
  baseURL: 'http://frp.kmtongji.com',
  //应用首次加载
  appOnLaunch: true,
  //请求token
  token: ''
};

function userLogin() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments[1];

  switch (action.type) {
    case _actionType.CHANGE_APP_ON_LAUNCH:
      return _extends({}, state, {
        appOnLaunch: false
      });
    case _actionType.INSERT_token:
      return _extends({}, state, {
        token: action.token
      });
    default:
      return state;
  }
}