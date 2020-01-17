"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = require("../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _util = require("./util.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
// import API from './api'


function showError(message) {
  var show = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  show && _index2.default.showToast({
    title: message,
    icon: 'none'
  });
  return Promise.reject(message);
}

var customInterceptor = function customInterceptor(chain) {
  var _this = this;

  var requestParams = chain.requestParams;
  var showToast = requestParams.showToast;

  return chain.proceed(requestParams).catch(function (res) {
    // 这个catch需要放到前面才能捕获request本身的错误，因为showError返回的也是Promise.reject
    return showError(res.errMsg, showToast);
  }).then(function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(res) {
      var resCL, retryRes;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _index2.default.hideLoading();
              // 注：公用状态码，之后要统一处理
              // 只要请求成功，不管返回什么状态码，都走这个回调

              if (!(res.data.code === 20000)) {
                _context.next = 5;
                break;
              }

              return _context.abrupt("return", res.data);

            case 5:
              if (!(res.data.code === '50011')) {
                _context.next = 9;
                break;
              }

              return _context.abrupt("return", res.data);

            case 9:
              if (!(res.data.code === '50010')) {
                _context.next = 22;
                break;
              }

              _context.next = 12;
              return (0, _util.CheckLogin)();

            case 12:
              resCL = _context.sent;

              // const resCL =
              console.log(resCL);

              if (!(resCL.code === 20000)) {
                _context.next = 20;
                break;
              }

              _context.next = 17;
              return (0, _util.reTryRequest)(requestParams);

            case 17:
              retryRes = _context.sent;

              console.log(retryRes);
              return _context.abrupt("return", retryRes);

            case 20:
              _context.next = 24;
              break;

            case 22:
              showError(res.data.message, showToast);
              return _context.abrupt("return", res.data);

            case 24:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, _this);
    }));

    return function (_x2) {
      return _ref.apply(this, arguments);
    };
  }());
};

var interceptors = [customInterceptor, _index2.default.interceptors.logInterceptor];

exports.default = interceptors;