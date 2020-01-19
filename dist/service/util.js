"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reTryRequest = undefined;

var reTryRequest = exports.reTryRequest = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(params) {
    var data, url, method, req, res;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            data = params.data, url = params.url, method = params.method;
            // console.log(success)

            req = _api2.default.baseOptions({ data: data, url: url }, method);
            _context.next = 4;
            return req;

          case 4:
            res = _context.sent;
            return _context.abrupt("return", res);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function reTryRequest(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.getCurrentPageUrlWithArgs = getCurrentPageUrlWithArgs;
exports.CheckLogin = CheckLogin;

var _index = require("../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _api = require("./api.js");

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function getCurrentPageUrlWithArgs() {
  var pages = _index2.default.getCurrentPages();
  var currentPage = pages[pages.length - 1];
  var url = currentPage.route;
  var options = currentPage.options;
  var urlWithArgs = "/" + url + "?";
  for (var key in options) {
    var value = options[key];
    urlWithArgs += key + "=" + value + "&";
  }
  urlWithArgs = urlWithArgs.substring(0, urlWithArgs.length - 1);
  // console.log(urlWithArgs)

  return urlWithArgs;
}

function CheckLogin() {
  return new Promise(function (resolve, reject) {
    _index2.default.login({
      success: function success(res) {
        var code = res.code;
        if (code) {
          _api2.default.post('api/login1', { code: code }).then(function (response) {
            /* eslint-disable */
            var _response$data = response.data,
                openid = _response$data.openid,
                unionid = _response$data.unionid,
                token = _response$data.token;

            var app = getApp();
            /* eslint-enable */
            _index2.default.setStorageSync('token', token);
            // Taro.setStorageSync('expInfo', {
            //   startTime: new Date().getTime(),
            //   ttl
            // })
            console.log(response);
            resolve(response);

            // let curPath = getCurrentPageUrlWithArgs()
            // console.log(curPath)
            // if (curPath.indexOf('pages/home/index') > -1) {
            //   reTryRequest(req)
            // } else {
            //   Taro.reLaunch({
            //     url: curPath
            //   })
            // }
            // const { params } = Taro.$router
          });
        } else {
          console.log('获取用户登录失败：' + res.errMsg);
          reject(res.errMsg);
        }
      }
    });
  });
}