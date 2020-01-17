"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _index = require("../../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = require("../../../npm/prop-types/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var iconClose = "/assets/images/icon_close.png";
var iconTime = "/assets/images/icon-time_05.png";
var iconCheck = "/assets/images/icon-check_05.png";

var CouponList = (_temp2 = _class = function (_BaseComponent) {
  _inherits(CouponList, _BaseComponent);

  function CouponList() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, CouponList);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CouponList.__proto__ || Object.getPrototypeOf(CouponList)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "loopArray0", "couponList", "curCouponId", "iconCheck", "iconTime", "isOpened", "iconClose"], _this.config = {
      navigationBarTitleText: ''
    }, _this.state = {}, _this.anonymousFunc0Array = [], _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(CouponList, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(CouponList.prototype.__proto__ || Object.getPrototypeOf(CouponList.prototype), "_constructor", this).call(this, props);
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {}
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {}
    // componentWillReceiveProps (nextProps,nextContext) {}

  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {}
  }, {
    key: "componentDidShow",
    value: function componentDidShow() {}
  }, {
    key: "componentDidHide",
    value: function componentDidHide() {}
  }, {
    key: "componentDidCatchError",
    value: function componentDidCatchError() {}
  }, {
    key: "componentDidNotFound",
    value: function componentDidNotFound() {}
  }, {
    key: "_createData",
    value: function _createData() {
      var _this2 = this;

      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __runloopRef = arguments[2];
      ;
      var loopArray0 = void 0;

      var _props = this.__props,
          isOpened = _props.isOpened,
          couponList = _props.couponList,
          curCouponId = _props.curCouponId,
          onCouponListClose = _props.onCouponListClose,
          onCouponItemSelectChange = _props.onCouponItemSelectChange;

      var curItem = null;

      /* 优惠券列表 */
      var couponItemList = null;
      console.log('CouponList Component: ', couponList);
      // console.log('CouponList Component: id ', curCouponId)
      // console.log(
      //   'CouponList Component: onCouponItemSelectChange ',
      //   onCouponItemSelectChange
      // )

      if (couponList && couponList.length > 0) {
        loopArray0 = couponList.map(function (cItem, __index0) {
          cItem = {
            $original: (0, _index.internal_get_original)(cItem)
          };

          var _cItem$$original = cItem.$original,
              id = _cItem$$original.id,
              type = _cItem$$original.type,
              name = _cItem$$original.name,
              discount = _cItem$$original.discount,
              date_end = _cItem$$original.date_end,
              date_start = _cItem$$original.date_start,
              use_status = _cItem$$original.use_status;


          if (id == curCouponId) {
            curItem = cItem.$original;
          }

          var strDiscount = discount ? Math.floor(discount) / 100 : '';

          _this2.anonymousFunc0Array[__index0] = function (e) {
            e.stopPropagation();
            _this2.__triggerPropsFn("onCouponItemSelectChange", [null].concat([cItem.$original]));
          };

          return {
            id: id,
            type: type,
            name: name,
            discount: discount,
            date_end: date_end,
            date_start: date_start,
            use_status: use_status,
            strDiscount: strDiscount,
            $original: cItem.$original
          };
        });
      }

      this.anonymousFunc1 = function (e) {
        e.stopPropagation();
      };

      this.anonymousFunc2 = function (e) {
        e.stopPropagation();
        _this2.__triggerPropsFn("onCouponListClose", [null].concat([]));
      };

      var anonymousState__temp = curItem && curItem.discount_desc ? Math.floor(curItem.discount_desc) / 100 : '0';
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        loopArray0: loopArray0,
        couponList: couponList,
        curCouponId: curCouponId,
        iconCheck: iconCheck,
        iconTime: iconTime,
        isOpened: isOpened,
        iconClose: iconClose
      });
      return this.__state;
    }
  }, {
    key: "anonymousFunc0",
    value: function anonymousFunc0(__index0, e) {
      e.stopPropagation();
      this.anonymousFunc0Array[__index0] && this.anonymousFunc0Array[__index0](e);
    }
  }, {
    key: "anonymousFunc1",
    value: function anonymousFunc1(e) {
      e.stopPropagation();
    }
  }, {
    key: "anonymousFunc2",
    value: function anonymousFunc2(e) {
      e.stopPropagation();
    }
  }]);

  return CouponList;
}(_index.Component), _class.properties = {
  "isOpened": {
    "type": null,
    "value": null
  },
  "couponList": {
    "type": null,
    "value": null
  },
  "curCouponId": {
    "type": null,
    "value": null
  },
  "onCouponListClose": {
    "type": null,
    "value": null
  },
  "onCouponItemSelectChange": {
    "type": null,
    "value": null
  },
  "__fn_onCouponItemSelectChange": {
    "type": null,
    "value": null
  },
  "__fn_onCouponListClose": {
    "type": null,
    "value": null
  }
}, _class.$$events = ["anonymousFunc0", "anonymousFunc1", "anonymousFunc2"], _temp2);


CouponList.propTypes = {
  couponList: _index4.default.array.isRequired,
  curCouponId: _index4.default.number,
  isOpened: _index4.default.bool,
  onCouponItemSelectChange: _index4.default.func,
  onCouponListClose: _index4.default.func
};
exports.default = CouponList;

Component(require('../../../npm/@tarojs/taro-weapp/index.js').default.createComponent(CouponList));