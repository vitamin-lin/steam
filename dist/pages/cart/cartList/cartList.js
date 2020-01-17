"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _index = require("../../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _api = require("../../../service/api.js");

var _api2 = _interopRequireDefault(_api);

var _gdt = require("../../../utils/gdt.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import { AtSwipeAction } from 'taro-ui'

// import top from '../../../assets/images/top.png'
var carPic = "/assets/images/cartImg.jpg";
var paybtn = "/assets/images/paybtn.png";
var checked = "/assets/images/checked.png";

var SwiperBanner = (_temp2 = _class = function (_BaseComponent) {
  _inherits(SwiperBanner, _BaseComponent);

  function SwiperBanner() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, SwiperBanner);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SwiperBanner.__proto__ || Object.getPrototypeOf(SwiperBanner)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["loopArray0", "carPic", "checked", "paybtn", "list", "checkeds"], _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SwiperBanner, [{
    key: "_constructor",
    value: function _constructor() {
      _get(SwiperBanner.prototype.__proto__ || Object.getPrototypeOf(SwiperBanner.prototype), "_constructor", this).apply(this, arguments);
      this.state = {
        list: [],
        checkeds: []
      };
    }
  }, {
    key: "componentDidShow",
    value: function componentDidShow() {
      this.ajaxData();
    }
  }, {
    key: "ajaxData",
    value: function ajaxData() {
      var _this2 = this;

      _api2.default.get('api/carts').then(function (res) {
        // console.warn(e)
        var data = res.data;

        var checkList = data.map(function (e) {
          return {
            checked: true
          };
        });
        _this2.setState({
          list: data,
          checkeds: checkList
        });
      });
    }
  }, {
    key: "toLink",
    value: function toLink() {
      var app = getApp();
      app.km.track('cartshopping', null);
      _index2.default.switchTab({
        url: '/pages/home/index'
      });
    }
  }, {
    key: "pay",
    value: function pay() {
      var app = getApp();
      app.km.track('settleaccounts', null);
      // console.warn(this.state.checkeds)
      var _state = this.state,
          checkeds = _state.checkeds,
          list = _state.list;

      var datas = [];
      var gids = [];
      checkeds.map(function (e, index) {
        if (e.checked === true) {
          datas.push(_extends({}, list[index]));
        }
      });

      _index2.default.setStorage({ key: 'orderList', data: datas });
      datas.map(function (e) {
        gids.push(e.goods_id);
      });
      var gid = gids.join(',');
      (0, _gdt.gdtTrackClick)('INITIATE_CHECKOUT', {
        buyType: 'cart_checkout',
        goods_id: gid
      });
      _index2.default.navigateTo({
        url: '../confirmOrder/index?gid=' + gid
      });
    }
  }, {
    key: "changeCheck",
    value: function changeCheck(e) {
      var _state2 = this.state,
          list = _state2.list,
          checkeds = _state2.checkeds;

      var staus = checkeds[e].checked;
      if (staus) {
        checkeds[e].checked = false;
      } else {
        checkeds[e].checked = true;
      }
      this.setState({
        list: list,
        checkeds: checkeds
      });
    }
  }, {
    key: "del",
    value: function del(e) {
      var _this3 = this;

      var app = getApp();
      app.km.track('delete', null);
      _api2.default.post('api/cart_del', {
        goods_id: e.goods_id,
        decrease: e.number
      }).then(function () {
        _this3.ajaxData();
      });
    }
  }, {
    key: "_createData",
    value: function _createData() {
      var _this4 = this;

      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __runloopRef = arguments[2];
      ;
      var loopArray0 = !(this.__state.list.length === 0) ? this.__state.list.map(function (item, index) {
        item = {
          $original: (0, _index.internal_get_original)(item)
        };
        var $loopState__temp2 = item.$original.price ? Math.floor(item.$original.price) / 100 : 0;
        var $loopState__temp4 = _this4.__state.checkeds["" + index].checked;
        return {
          $loopState__temp2: $loopState__temp2,
          $loopState__temp4: $loopState__temp4,
          $original: item.$original
        };
      }) : [];
      // const { list } = this.state;
      // const { datas } = this.props
      // if(!list) return false;
      // console.warn(this.state.list, this.state.checkeds)

      Object.assign(this.__state, {
        loopArray0: loopArray0,
        carPic: carPic,
        checked: checked,
        paybtn: paybtn
      });
      return this.__state;
    }
  }]);

  return SwiperBanner;
}(_index.Component), _class.properties = {}, _class.$$events = ["toLink", "changeCheck", "del", "pay"], _class.defaultProps = {}, _temp2);
exports.default = SwiperBanner;

Component(require('../../../npm/@tarojs/taro-weapp/index.js').default.createComponent(SwiperBanner));