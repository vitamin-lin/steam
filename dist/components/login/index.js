"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _index = require("../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _api = require("../../service/api.js");

var _api2 = _interopRequireDefault(_api);

var _action = require("../../store/userInfo/action.js");

var _action2 = _interopRequireDefault(_action);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var login = (_temp2 = _class = function (_BaseComponent) {
  _inherits(login, _BaseComponent);

  function login() {
    var _ref;

    var _temp, _this2, _ret;

    _classCallCheck(this, login);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = login.__proto__ || Object.getPrototypeOf(login)).call.apply(_ref, [this].concat(args))), _this2), _this2.$usedState = ["logins"], _this2.$$refs = [], _temp), _possibleConstructorReturn(_this2, _ret);
  }

  _createClass(login, [{
    key: "_constructor",
    value: function _constructor() {
      _get(login.prototype.__proto__ || Object.getPrototypeOf(login.prototype), "_constructor", this).apply(this, arguments);
      this.state = {
        logins: true
      };
    }
  }, {
    key: "componentDidShow",
    value: function componentDidShow() {
      this.member();
    }

    // 判断是否登陆授权

  }, {
    key: "member",
    value: function member() {
      // console.warn('11111111')
      var _this = this;
      _api2.default.get('api/member').then(function (res) {
        if (res.code == '20000') {
          _this.setState({
            logins: true
          });
        } else if (res.code == '50011') {
          _this.setState({
            logins: false
          });
        }
      });
    }
  }, {
    key: "sendUserInfo",
    value: function sendUserInfo(response) {
      _api2.default.post('api/login2', {
        iv: response.detail.iv,
        encryptedData: response.detail.encryptedData
      }).then(function (res) {
        var detail = response.detail;
        var _res$data = res.data,
            unionid = _res$data.unionid,
            openid = _res$data.openid;
        /* eslint-disable */

        var app = getApp();
        /* eslint-enable */
        app.km.indentify(openid, unionid);
        (0, _action2.default)(detail);
        _index2.default.setStorage({ key: 'userInfo', data: detail.userInfo });
        _index2.default.navigateTo({
          url: '/pages/order/index?id=0'
        });
      });
    }

    // 授权btn

  }, {
    key: "getUserInfo",
    value: function getUserInfo(response) {
      /* eslint-disable */
      var app = getApp();
      /* eslint-enable */
      //同意
      if (response.detail.userInfo) {
        this.sendUserInfo(response);
        /* eslint-enable */
        app.km.track('authorize', null);
      } else {
        //拒绝,保持当前页面，直到同意
        app.km.track('cancel', null);
        // Taro.navigateTo({
        //   url: '/pages/order/index?id=0'
        // })
      }
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __runloopRef = arguments[2];
      ;

      var logins = this.__state.logins;

      Object.assign(this.__state, {});
      return this.__state;
    }
  }]);

  return login;
}(_index.Component), _class.properties = {}, _class.$$events = ["getUserInfo"], _class.defaultProps = {}, _temp2);
exports.default = login;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(login));