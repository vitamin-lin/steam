"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _dec, _dec2, _class, _class2, _temp2;

var _index = require("../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = require("../../npm/@tarojs/redux/index.js");

var _action = require("../../store/userInfo/action.js");

var _action2 = _interopRequireDefault(_action);

var _api = require("../../service/api.js");

var _api2 = _interopRequireDefault(_api);

var _withSare = require("../../utils/withSare.js");

var _withSare2 = _interopRequireDefault(_withSare);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import { url } from 'inspector'

var UserInfo = (_dec = (0, _withSare2.default)(), _dec2 = (0, _index3.connect)(function (_ref) {
  var userInfo = _ref.userInfo;
  return {
    userInfo: userInfo.userInfo
  };
}, {
  dispatchSaveUserInfo: _action2.default
}), _dec(_class = _dec2(_class = (_temp2 = _class2 = function (_BaseComponent) {
  _inherits(UserInfo, _BaseComponent);

  function UserInfo() {
    var _ref2;

    var _temp, _this, _ret;

    _classCallCheck(this, UserInfo);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = UserInfo.__proto__ || Object.getPrototypeOf(UserInfo)).call.apply(_ref2, [this].concat(args))), _this), _this.$usedState = ["dispatchSaveUserInfo"], _this.config = {
      navigationBarTitleText: '好奇官方精品商城'
    }, _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(UserInfo, [{
    key: "_constructor",
    value: function _constructor() {
      _get(UserInfo.prototype.__proto__ || Object.getPrototypeOf(UserInfo.prototype), "_constructor", this).apply(this, arguments);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "sendUserInfo",
    value: function sendUserInfo(response) {
      var _this2 = this;

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
        _this2.props.dispatchSaveUserInfo(detail);
        _index2.default.setStorage({ key: 'userInfo', data: detail.userInfo });
        _index2.default.navigateBack();
      });
    }
  }, {
    key: "getUserInfo",
    value: function getUserInfo(response) {
      /* eslint-disable */
      var app = getApp();
      /* eslint-enable */
      app.km.track('authorize', null);
      //同意
      if (response.detail.userInfo) {
        this.sendUserInfo(response);
      }
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __runloopRef = arguments[2];
      ;
      Object.assign(this.__state, {});
      return this.__state;
    }
  }]);

  return UserInfo;
}(_index.Component), _class2.properties = {
  "dispatchSaveUserInfo": {
    "type": null,
    "value": null
  }
}, _class2.$$events = ["getUserInfo"], _temp2)) || _class) || _class);
exports.default = UserInfo;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(UserInfo, true));