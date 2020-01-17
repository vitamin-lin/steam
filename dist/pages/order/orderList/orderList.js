"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _index = require("../../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _api = require("../../../service/api.js");

var _api2 = _interopRequireDefault(_api);

var _message = require("../../../utils/message.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var botom = "/assets/images/botom.png";
var top = "/assets/images/top.png";
var carPic = "/assets/images/carPic.png";
// import payBtn from '../../../assets/images/paybtn.png'

var OrderList = (_temp2 = _class = function (_BaseComponent) {
  _inherits(OrderList, _BaseComponent);

  function OrderList() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, OrderList);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = OrderList.__proto__ || Object.getPrototypeOf(OrderList)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["loopArray0", "loopArray1", "list", "carPic", "botom", "top", "rebackWhere", "__fn_onChangePay", "__fn_onClick", "keys", "visibleReback", "onTopBox", "onBotomBox"], _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(OrderList, [{
    key: "_constructor",
    value: function _constructor() {
      _get(OrderList.prototype.__proto__ || Object.getPrototypeOf(OrderList.prototype), "_constructor", this).apply(this, arguments);
      this.state = {};
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      // console.warn(this.props.info, 'asd')
    }
  }, {
    key: "componentDidShow",
    value: function componentDidShow() {}
    // const { keys } = this.props;
    // API.get('api/orders', {
    //   status: '全部',
    //   page: 1
    // }).then(res => {
    //   console.warn(res.data, '12')
    //   this.setState({
    //     list: res.data.items
    //   })
    // })

    /**
     * 通过订单编号 重新请求支付信息
     * @param  {string} orderNumber 订单编号
     * @param  {object} item 订单信息
     */

  }, {
    key: "pay",
    value: function pay(orderNumber, item) {
      var app = getApp();
      app.km.track('centerpay', null);
      var data = [];
      item.goods.map(function (re) {
        var id = re.goods_id;
        data.push(id);
      });

      var gids = data.join(',');
      _api2.default.post('api/pay', {
        order_no: orderNumber
      }).then(function (res) {
        // let _this = this
        _index2.default.requestPayment({
          timeStamp: res.data.timeStamp,
          nonceStr: res.data.nonceStr,
          package: res.data.package,
          signType: 'MD5',
          paySign: res.data.paySign,
          success: function success(pay_resp) {
            // _this.changewatch();
            if (pay_resp.errMsg === 'requestPayment:ok') {
              if (item.is_group == 1) {
                _index2.default.navigateTo({
                  url: '/pages/shareDetail/index?order_no=' + item.order_no
                });
              } else {
                _index2.default.navigateTo({
                  url: '/pages/success/index?gids=' + gids
                });
              }
            } else {
              console.log('订单中心：用户取消支付');
            }
          },
          fail: function fail(resp) {
            console.log(resp);
          }
        });
      });
    }
    /**
     * 返回详情页 或者购物车页面
     * @param  {object} orderItem 订单item
     */

  }, {
    key: "handleRebackClick",
    value: function handleRebackClick(orderItem) {
      var rebackWhere = this.props.rebackWhere;
      var goods = orderItem.goods;
      var goods_id = goods[0].goods_id;

      var app = getApp();
      app.km.track('return', null);
      if (rebackWhere == 'sku' && goods_id) {
        _index2.default.navigateTo({
          url: '/pages/detail/index?from=order&gid=' + goods_id
        });
      } else if (rebackWhere == 'cart') {
        _index2.default.switchTab({
          url: '/pages/cart/index?from=order'
        });
      } else {
        console.log('不正确的参数， 无返回路径');
      }
    }
  }, {
    key: "changewatch",
    value: function changewatch() {
      this.__triggerPropsFn("onChangePay", [null].concat([]));
    }
  }, {
    key: "toLink",
    value: function toLink() {
      var app = getApp();
      app.km.track('centershopping', null);
      _index2.default.switchTab({
        url: '/pages/home/index'
      });
    }
  }, {
    key: "goTuan",
    value: function goTuan(item) {
      var app = getApp();
      app.km.track('centercheckresult', null);
      _index2.default.navigateTo({
        url: '/pages/shareDetail/index?order_no=' + item
      });
    }
    // 设置

  }, {
    key: "makeSez",
    value: function makeSez() {
      (0, _message.makeSes)(1);
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __runloopRef = arguments[2];
      ;

      var list = this.__props.list;

      console.log('orderList: from ', this.$router.params.from);

      var loopArray0 = list.map(function (item, index) {
        item = {
          $original: (0, _index.internal_get_original)(item)
        };
        item = {
          $original: (0, _index.internal_get_original)(item.$original)
        };
        var $loopState__temp2 = (0, _index.internal_inline_style)(item.$original.open ? { display: 'none' } : { display: 'block' });
        var $loopState__temp4 = (0, _index.internal_inline_style)(!item.$original.open ? { display: 'none' } : { display: 'block' });
        return {
          $loopState__temp2: $loopState__temp2,
          $loopState__temp4: $loopState__temp4,
          $original: item.$original
        };
      });
      var loopArray1 = !(list.length === 0) ? list.map(function (item, index) {
        item = {
          $original: (0, _index.internal_get_original)(item)
        };
        item = {
          $original: (0, _index.internal_get_original)(item.$original)
        };
        var $loopState__temp2 = (0, _index.internal_inline_style)(item.$original.open ? { display: 'none' } : { display: 'block' });
        var $loopState__temp4 = (0, _index.internal_inline_style)(!item.$original.open ? { display: 'none' } : { display: 'block' });
        return {
          $loopState__temp2: $loopState__temp2,
          $loopState__temp4: $loopState__temp4,
          $original: item.$original
        };
      }) : [];
      Object.assign(this.__state, {
        loopArray0: loopArray0,
        loopArray1: loopArray1,
        list: list,
        carPic: carPic,
        botom: botom,
        top: top
      });
      return this.__state;
    }
  }, {
    key: "funPrivatedUZjQ",
    value: function funPrivatedUZjQ() {
      this.__triggerPropsFn("onTopBox", [].concat(Array.prototype.slice.call(arguments)));
    }
  }, {
    key: "funPrivateBjmom",
    value: function funPrivateBjmom() {
      this.__triggerPropsFn("onBotomBox", [].concat(Array.prototype.slice.call(arguments)));
    }
  }]);

  return OrderList;
}(_index.Component), _class.properties = {
  "rebackWhere": {
    "type": null,
    "value": null
  },
  "__fn_onChangePay": {
    "type": null,
    "value": null
  },
  "list": {
    "type": null,
    "value": null
  },
  "onTopBox": {
    "type": null,
    "value": null
  },
  "__fn_onClick": {
    "type": null,
    "value": null
  },
  "__fn_onTopBox": {
    "type": null,
    "value": null
  },
  "keys": {
    "type": null,
    "value": null
  },
  "visibleReback": {
    "type": null,
    "value": null
  },
  "onBotomBox": {
    "type": null,
    "value": null
  },
  "__fn_onBotomBox": {
    "type": null,
    "value": null
  }
}, _class.$$events = ["toLink", "funPrivatedUZjQ", "goTuan", "handleRebackClick", "makeSez", "pay", "funPrivateBjmom"], _class.defaultProps = {
  list: []
}, _temp2);
exports.default = OrderList;

Component(require('../../../npm/@tarojs/taro-weapp/index.js').default.createComponent(OrderList));