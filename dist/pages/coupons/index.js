"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _dec, _class, _class2, _temp2;
// import { AtAccordion, AtList, AtListItem } from 'taro-ui'

var _index = require("../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _api = require("../../service/api.js");

var _api2 = _interopRequireDefault(_api);

var _withSare = require("../../utils/withSare.js");

var _withSare2 = _interopRequireDefault(_withSare);

var _global = require("../../utils/global.js");

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

    var _temp, _this2, _ret;

    _classCallCheck(this, Coupons);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = Coupons.__proto__ || Object.getPrototypeOf(Coupons)).call.apply(_ref, [this].concat(args))), _this2), _this2.$usedState = ["loopArray0", "list", "parLink", "icons", "iconbtom", "_type", "isIphoneX", "imgSrc", "imgSrcTo", "staus", "discount_desc", "coupon_id"], _this2.config = {
      navigationBarTitleText: '我的优惠券',
      disableScroll: true,
      isIphoneX: 0
    }, _this2.$$refs = [], _temp), _possibleConstructorReturn(_this2, _ret);
  }

  _createClass(Coupons, [{
    key: "_constructor",
    value: function _constructor() {
      _get(Coupons.prototype.__proto__ || Object.getPrototypeOf(Coupons.prototype), "_constructor", this).apply(this, arguments);
      this.state = {
        /* eslint-disable */
        imgSrc: 'https://mpmall.huggiesapp.cn/storage/wxmall/another/coupons/couBga.png',
        imgSrcTo: 'https://mpmall.huggiesapp.cn/storage/wxmall/another/coupons/couBg2.png',
        staus: '已使用',
        /* eslint-enable */
        icons: 'https://mpmall.huggiesapp.cn/storage/wxmall/another/coupons/iconTop.png',
        iconbtom: 'https://mpmall.huggiesapp.cn/storage/wxmall/another/coupons/iconbotom.png',
        list: [],
        discount_desc: 0,
        coupon_id: false
      };
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.resert();
      this.setState({
        isIphoneX: (0, _global.getGlobalData)('isIphoneX') ? (0, _global.getGlobalData)('isIphoneX') : 0
      });
    }
  }, {
    key: "componentDidShow",
    value: function componentDidShow() {
      // this.resert();
    }
  }, {
    key: "resert",
    value: function resert() {
      var _this3 = this;

      // coupon = {
      //  good_ids: 1,
      //  total: 20
      // }
      // coupon_id 订单需要的id
      var coupon = _index2.default.getStorageSync('coupon');
      var data = {
        good_ids: coupon.good_id,
        total: coupon.total
      };
      var parLink = this.$router.params.type;
      if (!parLink && !data.good_ids && !data.total) {
        return false;
      }var link = 'api/coupon_list';
      // 1 列表 0 check
      if (parLink == '1') {
        link = 'api/coupon';
        data = {};
      }
      _api2.default.get(link, _extends({}, data)).then(function (res) {
        var lists = res.data;
        if (parLink === '1') {
          lists = res.data.items;
        }
        var datas = lists.map(function (e) {
          return _extends({
            open: false,
            checked: false
          }, e);
        });
        // console.warn(datas)
        _this3.setState({
          list: datas
        });
      });
    }
  }, {
    key: "handleClick",
    value: function handleClick(key) {
      var app = getApp();
      app.km.track("couponrule", null);

      var list = this.state.list;

      if (list[key].open) {
        list[key].open = false;
      } else {
        list[key].open = true;
      }

      this.setState({
        list: list
      });
    }
  }, {
    key: "checked",
    value: function checked(key) {
      var _this = this;
      var list = _this.state.list;

      for (var k in list) {
        // console.warn(k, key)
        if (k == key) {
          if (list[k].checked) {
            list[k].checked = false;
            _this.changeDiscount(0, false);
          } else {
            list[k].checked = true;
            _this.changeDiscount(list[k].discount, list[k].id);
          }
        } else {
          list[k].checked = false;
        }
      }

      _this.setState({
        list: list
      });
    }
  }, {
    key: "changeDiscount",
    value: function changeDiscount(e, id) {
      // console.warn(e, '1231')
      var _this = this;
      setTimeout(function () {
        _this.setState({
          discount_desc: e,
          coupon_id: id
        });
      }, 0);
    }
  }, {
    key: "subimitData",
    value: function subimitData() {
      if (!this.state.coupon_id) {
        _index2.default.showToast({
          title: '请选择优惠券后再确认',
          icon: 'none',
          mask: true
        });
      } else {
        _index2.default.setStorageSync('coupon_id', this.state.coupon_id);
        _index2.default.navigateBack();
      }
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __runloopRef = arguments[2];
      ;
      var _type = this.$router.params.type;

      var _state = this.__state,
          list = _state.list,
          iconbtom = _state.iconbtom,
          icons = _state.icons,
          isIphoneX = _state.isIphoneX;

      var parLink = this.$router.params.type;
      // if(!isIphoneX) return false;
      var loopArray0 = list.length !== 0 ? list.map(function (item, key) {
        item = {
          $original: (0, _index.internal_get_original)(item)
        };
        var $loopState__temp2 = list.length !== 0 ? (0, _index.internal_inline_style)(parLink == '1' && item.$original.status == '1' || parLink !== '1' && item.$original.use_status == 1 ? 'background:url(https://mpmall.huggiesapp.cn/storage/wxmall/another/coupons/couBg2.png) no-repeat;background-size: 100% auto;' : 'background:url(https://mpmall.huggiesapp.cn/storage/wxmall/another/coupons/couBga.png) no-repeat;background-size: 100% auto;') : null;
        return {
          $loopState__temp2: $loopState__temp2,
          $original: item.$original
        };
      }) : [];
      Object.assign(this.__state, {
        loopArray0: loopArray0,
        parLink: parLink,
        _type: _type,
        isIphoneX: isIphoneX
      });
      return this.__state;
    }
  }]);

  return Coupons;
}(_index.Component), _class2.properties = {}, _class2.$$events = ["checked", "handleClick", "subimitData"], _temp2)) || _class);
exports.default = Coupons;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Coupons, true));