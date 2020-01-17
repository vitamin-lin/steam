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

// {
//   title: '可设置分享标题',
//   imageUrl: '可设置分享图片路径',
//   path: '可设置分享路径'
// }
// @pageInit()
var Coupons = (_dec = (0, _withSare2.default)(), _dec(_class = (_temp2 = _class2 = function (_BaseComponent) {
  _inherits(Coupons, _BaseComponent);

  function Coupons() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Coupons);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Coupons.__proto__ || Object.getPrototypeOf(Coupons)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = [], _this.config = {
      navigationBarTitleText: '全部商品'
      // disableScroll: true
    }, _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Coupons, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Coupons.prototype.__proto__ || Object.getPrototypeOf(Coupons.prototype), "_constructor", this).call(this, props);
    }
  }, {
    key: "link",
    value: function link() {
      var app = getApp();
      app.km.track('groupnews_shopping', null);
      _index2.default.switchTab({
        url: '/pages/home/index'
      });
    }
  }, {
    key: "handleClick",
    value: function handleClick(key) {
      var app = getApp();
      app.km.track('see', null);
      _index2.default.navigateTo({
        url: '/pages/shareDetail/index?gcode=' + key
      });
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
      Object.assign(this.__state, {});
      return this.__state;
    }
  }]);

  return Coupons;
}(_index.Component), _class2.properties = {}, _class2.$$events = [], _temp2)) || _class);
exports.default = Coupons;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Coupons, true));