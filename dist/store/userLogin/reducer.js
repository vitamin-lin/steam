'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = app;

var _actionType = require('./action-type.js');

var constants = _interopRequireWildcard(_actionType);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var devURL = 'https://test.mall.kmtongji.com/';
// const devURL = 'https://mpmall.huggiesapp.cn/'
var prodURL = 'https://mpmall.huggiesapp.cn/'; // 生产环境，线上服务器

var INITIAL_STATE = {
  //请求接口域名地址
  baseURL: devURL,
  //应用首次加载
  appOnLaunch: true,
  //请求token
  authorize: ''
};

function app() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments[1];

  switch (action.type) {
    case constants.CHANGE_APP_ON_LAUNCH:
      return _extends({}, state, {
        appOnLaunch: false
      });
    case constants.INSERT_AUTHORIZE:
      return _extends({}, state, {
        authorize: action.authorize
      });
    default:
      return state;
  }
}