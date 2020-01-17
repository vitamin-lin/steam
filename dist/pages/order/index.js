"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _dec, _class, _class2, _temp2; // 订单中心


// import more from '../../assets/more.png'


var _index = require("../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _api = require("../../service/api.js");

var _api2 = _interopRequireDefault(_api);

var _withSare = require("../../utils/withSare.js");

var _withSare2 = _interopRequireDefault(_withSare);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Order = (_dec = (0, _withSare2.default)(), _dec(_class = (_temp2 = _class2 = function (_BaseComponent) {
  _inherits(Order, _BaseComponent);

  function Order() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Order);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Order.__proto__ || Object.getPrototypeOf(Order)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "orderNumber", "buyType", "current", "heights", "list", "page", "status"], _this.config = {
      navigationBarTitleText: '订单中心',
      disableScroll: true
    }, _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Order, [{
    key: "_constructor",
    value: function _constructor() {
      _get(Order.prototype.__proto__ || Object.getPrototypeOf(Order.prototype), "_constructor", this).apply(this, arguments);
      this.state = {
        current: 0,
        heights: 0,
        list: [],
        // total: 0,
        page: 1,
        status: '全部'
      };
    }
  }, {
    key: "componentDidShow",
    value: function componentDidShow() {
      var id = parseInt(this.$router.params.id);
      this.handleClick(id);
    }
    /**
     * 请求 API.orders 获取订单列表数据
     * @param  {string} item 订单的分类类型
     * @param  {number} value AtTabs 的current 的值
     * @param  {string} orderNumber  订单编号，用于请求单个订单信息
     */

  }, {
    key: "getOrderList",
    value: function getOrderList(item, value, orderNumber) {
      var _this2 = this;

      // console.warn(item, value)
      this.setState({
        current: value
      });
      _index2.default.setStorage({ key: 'id', data: value });
      var reqParam = {
        status: item,
        page: this.state.page
      };
      if (orderNumber) {
        reqParam['order_no'] = orderNumber;
      }

      _api2.default.get('api/orders', _extends({}, reqParam)).then(function (res) {
        if (res.data.length === 0) {
          _this2.setState({
            list: []
          });
        } else {
          var returnList = res.data.items;
          if (orderNumber) {
            /* 展开单个 orderitem 的全部信息 */
            returnList[0].open = true;
          }
          _this2.setState({
            list: returnList,
            status: item
          });
          // return res.data.items
        }
      });
    }
  }, {
    key: "onTopBox",
    value: function onTopBox(index) {
      var lists = this.state.list;
      lists[index].open = true;
      this.setState({
        list: lists
      });
    }
  }, {
    key: "onBotomBox",
    value: function onBotomBox(index) {
      var lists = this.state.list;
      lists[index].open = false;
      this.setState({
        list: lists
      });
    }
  }, {
    key: "onChangePay",
    value: function onChangePay() {
      this.getOrderList('待付款', 2);
    }
  }, {
    key: "handleClick",
    value: function handleClick(value) {
      var app = getApp();
      var orderNumber = this.$router.params.orderNumber;
      // 需要统一处理list
      if (value === 0) {
        app.km.track('allorder', null);
        this.getOrderList('全部', value);
      } else if (value === 1) {
        app.km.track('unpaid', null);
        this.getOrderList('待付款', value, orderNumber);
      } else if (value === 2) {
        app.km.track('tobeshared', null);
        this.getOrderList('待分享', value);
      } else if (value === 3) {
        app.km.track('undeliver', null);
        this.getOrderList('待发货', value);
      } else if (value === 4) {
        app.km.track('ondeliver', null);
        this.getOrderList('待收货', value);
      } else if (value === 5) {
        app.km.track('invalid', null);
        this.getOrderList('已失效', value);
      }
    }
  }, {
    key: "getMore",
    value: function getMore(current) {
      var status = this.state.status;
      var newData = this.ajaxData(status, current, this.state.page + 1);
      this.setState({
        list: this.state.list.concat(newData)
      });
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      // console.warn(this.$router.params.id)
      var id = _index2.default.getStorageSync('id');
      this.setState({
        current: parseInt(id) ? parseInt(id) : 0
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this3 = this;

      var query = _index2.default.createSelectorQuery();
      query.select('.order_box').boundingClientRect(function (rect) {
        var height = rect.height * 55 / 100 + 'rpx';
        // console.log(height);
        _this3.setState({
          heights: height
        });
      }).exec();
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __runloopRef = arguments[2];
      ;

      var _$router$params = this.$router.params,
          buyType = _$router$params.buyType,
          orderNumber = _$router$params.orderNumber;

      console.log('order path query: ', orderNumber);
      var anonymousState__temp = (0, _index.internal_inline_style)({ height: this.__state.heights });
      var anonymousState__temp2 = [{ title: '全部' }, { title: '未付款' }, { title: '待分享' }, { title: '待发货' }, { title: '待收货' }, { title: '已失效' }];
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        orderNumber: orderNumber,
        buyType: buyType
      });
      return this.__state;
    }
  }]);

  return Order;
}(_index.Component), _class2.properties = {}, _class2.$$events = ["handleClick", "onBotomBox", "onTopBox", "onChangePay"], _class2.propTypes = {}, _temp2)) || _class);
exports.default = Order;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Order, true));