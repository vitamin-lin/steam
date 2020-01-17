"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.postGDTInfoRedirect = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var postGDTInfoRedirect = exports.postGDTInfoRedirect = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(params) {
    var res;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _api2.default.post('api/t_redirection', params);

          case 2:
            res = _context.sent;

            console.log(res);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function postGDTInfoRedirect(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.getAccessToken1 = getAccessToken1;
exports.postGDTInfo = postGDTInfo;
exports.gdtTrackPage = gdtTrackPage;
exports.gdtTrackClick = gdtTrackClick;

var _index = require("../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _api = require("../service/api.js");

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } // import md5 from 'js-md5'


function getAccessToken1() {
  // const user = 'AKA'
  // const key = 'wqL!moLyV*nM4mtoFK72'
  // const unixtime = Math.round(new Date().getTime() / 1000)
  // const token = md5(user + key + unixtime)
  // return Taro.request({
  //   url: 'https://www.huggiesapp.cn/api/token.php',
  //   data: { user, unixtime, token },
  //   method: 'GET'
  // })
}

function postGDTInfo(params) {
  console.log(params);
  var atoken = params.atoken,
      actions = params.actions;

  console.log(atoken);

  _index2.default.request({
    url: 'https://api.weixin.qq.com/marketing/user_actions/add?version=v1.0&access_token=' + atoken,
    header: {
      'content-type': 'application/json'
    },
    method: 'POST',
    data: { actions: actions },
    complete: function complete(res) {
      console.log('post gdt info');
      console.log(res);
    }
  });
}

function gdtTrackPage(params) {
  var uuid = _index2.default.getStorageSync('km_uuid');
  var openid = _index2.default.getStorageSync('km_oid' + uuid);
  console.log('gdt Track Page');
  console.log(openid);
  if (openid) {
    var app = getApp();
    app.gdt.track('VIEW_CONTENT', _extends({
      wechat_openid: openid
    }, params));
  }
}

function gdtTrackClick(cname, params) {
  var uuid = _index2.default.getStorageSync('km_uuid');
  var openid = _index2.default.getStorageSync('km_oid' + uuid);
  console.log('gdt Track Click');
  console.log(openid);
  if (openid) {
    var app = getApp();
    app.gdt.track(cname, _extends({
      //必须要有传入wechat_openid
      wechat_openid: openid
    }, params));
  }
}