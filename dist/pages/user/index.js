"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _dec, _class, _class2, _temp2;

var _index = require("../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _withSare = require("../../utils/withSare.js");

var _withSare2 = _interopRequireDefault(_withSare);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var biaoqian = "/assets/images/biaoqian.png";
var quan = "/assets/images/quan.png";

var User = (_dec = (0, _withSare2.default)(), _dec(_class = (_temp2 = _class2 = function (_BaseComponent) {
  _inherits(User, _BaseComponent);

  function User() {
    var _ref;

    var _temp, _this2, _ret;

    _classCallCheck(this, User);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = User.__proto__ || Object.getPrototypeOf(User)).call.apply(_ref, [this].concat(args))), _this2), _this2.$usedState = ["anonymousState__temp", "anonymousState__temp2", "state", "id", "biaoqian", "quan", "userInfo", "userLogin"], _this2.config = {
      navigationBarTitleText: '个人中心'
    }, _this2.state = {
      userInfo: '',
      userLogin: false,
      id: 0
    }, _this2.Login = function () {
      _index2.default.navigateTo({
        url: '/pages/userInfo/index'
      });
    }, _this2.$$refs = [], _temp), _possibleConstructorReturn(_this2, _ret);
  }

  _createClass(User, [{
    key: "_constructor",
    value: function _constructor() {
      _get(User.prototype.__proto__ || Object.getPrototypeOf(User.prototype), "_constructor", this).apply(this, arguments);
    }
  }, {
    key: "links",
    value: function links() {
      var app = getApp();
      app.km.track('allorder', null);
      _index2.default.setStorage({ key: 'id', data: 0 });
      _index2.default.navigateTo({
        url: '/pages/order/index?id=0'
      });
    }
  }, {
    key: "getAddress",
    value: function getAddress() {
      var app = getApp();
      app.km.track('address', null);
      var _this = this;
      _index2.default.chooseAddress({
        success: function success(res) {
          console.log(res.userName);
          console.log(res.postalCode);
          console.log(res.provinceName);
          console.log(res.cityName);
          console.log(res.countyName);
          console.log(res.detailInfo);
          console.log(res.nationalCode);
          console.log(res.telNumber);
        },
        complete: function complete(res) {
          console.log(res.errMsg);
          if (res.errMsg === 'chooseAddress:cancel') {
            // _this.showToastMsg('用户未选择地址信息')
          } else if (res.errMsg == 'chooseAddress:fail authorize no response' || res.errMsg == 'chooseAddress:fail auth deny') {
            _index2.default.showToast({
              title: '请点击小程序右上角“...” 》关于好奇官方精品商城》“...” 》设置》授权通讯地址',
              icon: 'none',
              duration: 3500
            });
          }
        }
      });
    }
  }, {
    key: "showToastMsg",
    value: function showToastMsg(msg, type) {
      _index2.default.showToast({
        title: msg ? msg : '',
        icon: type ? type : 'none'
      });
    }
  }, {
    key: "getCoupons",
    value: function getCoupons() {
      var app = getApp();
      app.km.track('coupons', null);
      _index2.default.navigateTo({
        url: '/pages/coupons/index?type=1'
      });
    }
  }, {
    key: "onChangeId",
    value: function onChangeId(e) {
      // console.warn(e)
      this.setState({
        id: e
      });
    }
  }, {
    key: "componentDidShow",
    value: function componentDidShow() {
      var userLogin = _index2.default.getStorageSync('userLogin');
      var userInfo = _index2.default.getStorageSync('userInfo');
      if (userLogin) {
        this.setState({
          userInfo: userInfo,
          userLogin: userLogin
        });
      } else {
        this.setState({
          userInfo: '',
          userLogin: false
        });
      }
    }
  }, {
    key: "onTabItemTap",
    value: function onTabItemTap(item) {
      console.log(item);
      var arrTrack = ['groupnews', 'allgd', 'index', 'shoppingcart', 'personal'];
      var app = getApp();
      app.km.track(arrTrack[item.index], null);
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __runloopRef = arguments[2];
      ;

      var id = this.__state.id;

      var state = _index2.default.$store.getState();
      var anonymousState__temp = {
        size: 25,
        color: '#FF4949',
        customStyle: 'iconAddress'
      };
      var anonymousState__temp2 = {
        size: 25,
        color: '#FF4949',
        customStyle: 'iconAddress'
      };
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        state: state,
        biaoqian: biaoqian,
        quan: quan
      });
      return this.__state;
    }
  }]);

  return User;
}(_index.Component), _class2.properties = {}, _class2.$$events = ["onChangeId", "links", "getAddress", "getCoupons"], _class2.propTypes = {}, _temp2)) || _class);
exports.default = User;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(User, true));