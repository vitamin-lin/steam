"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // auth.js

//授权用户 token
var getAuthToken = function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
    var state, res, response, data;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            state = _index2.default.$store.getState();
            //login

            _context3.next = 3;
            return _index2.default.login();

          case 3:
            res = _context3.sent;
            _context3.next = 6;
            return _index2.default.request({
              url: _config2.default + "api/login1",
              data: {
                code: res.code
              },
              method: 'POST'
            });

          case 6:
            response = _context3.sent;

            if (!(response.code === 20000)) {
              _context3.next = 14;
              break;
            }

            console.warn(response, '返回');
            //写入token
            data = response.data;

            saveAuthToken(data);
            return _context3.abrupt("return", true);

          case 14:
            console.log('获取token失败');
            return _context3.abrupt("return", false);

          case 16:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function getAuthToken() {
    return _ref3.apply(this, arguments);
  };
}();

//写入信息


var _index = require("../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _action = require("../store/userLogin/action.js");

var _config = require("../service/config.js");

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//获取数据
var Auth = function () {
  function Auth() {
    _classCallCheck(this, Auth);
  }

  _createClass(Auth, null, [{
    key: "appCheckAuth",

    //app授权
    value: function appCheckAuth() {
      return new Promise(function (resolve) {
        var _this = this;

        var state = _index2.default.$store.getState();
        // console.warn(state.userLogin.appOnLaunch, 'asd')
        //如果有授权信息
        if (Auth.checkAuth() && !state.userLogin.appOnLaunch) {
          //直接返回
          resolve(true);
        } else {
          //判断session_key是否过期
          _index2.default.checkSession().then(_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var flag;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (Auth.checkAuth()) {
                      _context.next = 7;
                      break;
                    }

                    _context.next = 3;
                    return getAuthToken();

                  case 3:
                    flag = _context.sent;

                    if (flag) {
                      //更新app状态
                      _index2.default.$store.dispatch((0, _action.changeAppOnLaunch)());
                      resolve(true);
                    } else {
                      //提示
                      _index2.default.showToast({
                        title: '获取授权信息失败',
                        icon: 'none',
                        mask: true
                      });
                    }
                    _context.next = 9;
                    break;

                  case 7:
                    //更新app状态
                    _index2.default.$store.dispatch((0, _action.changeAppOnLaunch)());
                    //token 没有过期，直接返回
                    resolve(true);

                  case 9:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, _this);
          }))).catch(function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(err) {
              var flag;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      console.log(err);
                      _context2.next = 3;
                      return getAuthToken();

                    case 3:
                      flag = _context2.sent;

                      console.warn(flag, 'flag');
                      //判断是否 token 请求成功
                      if (flag) {
                        //更新app状态
                        _index2.default.$store.dispatch((0, _action.changeAppOnLaunch)());
                        resolve(true);
                      } else {
                        //提示
                        _index2.default.showToast({
                          title: '获取授权信息失败',
                          icon: 'none',
                          mask: true
                        });
                      }

                    case 6:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, _this);
            }));

            return function (_x) {
              return _ref2.apply(this, arguments);
            };
          }());
        }
      });
    }

    // 检查令牌是否有效 true--> 有效  false--> 无效

  }, {
    key: "checkAuth",
    value: function checkAuth() {
      var state = _index2.default.$store.getState();
      //从缓存读取授权信息
      var data = state.data || _index2.default.getStorageSync('data') || {},
          expiryTime = 0,
          nowTime = ~~(Date.now() / 1000);

      if (data.exp) {
        expiryTime = data.ttl;
      }

      return expiryTime - nowTime > 300;
    }

    //获取token

  }, {
    key: "getToken",
    value: function getToken() {
      var state = _index2.default.$store.getState();
      var data = state.data || _index2.default.getStorageSync('data');
      return data.token;
    }
  }]);

  return Auth;
}();

exports.default = Auth;
function saveAuthToken(data) {
  console.warn(data);
  // //写入状态管理
  // Taro.$store.dispatch(insertToken(data));
  //写入缓存
  _index2.default.setStorageSync('token', data.token);
}