"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _index = require("../../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import { AtGrid } from "taro-ui"
var noBegin = "/assets/images/noBegin.png";
var noGet = "/assets/images/noGet.png";
var noHave = "/assets/images/noHave.png";
var noPay = "/assets/images/noPay.png";
var shares = "/assets/images/share.png";

var Policy = (_temp2 = _class = function (_BaseComponent) {
  _inherits(Policy, _BaseComponent);

  function Policy() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Policy);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Policy.__proto__ || Object.getPrototypeOf(Policy)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["list", "__fn_onChangeId"], _this.linkGrid = function (item, index) {
      var num = index + 1;
      var app = getApp();
      if (num == 1) {
        app.km.track('unpaid', null);
      } else if (num == 2) {
        app.km.track('tobeshared', null);
      } else if (num == 3) {
        app.km.track('undeliver', null);
      } else if (num == 4) {
        app.km.track('ondeliver', null);
      } else if (num == 5) {
        app.km.track('invalid', null);
      }
      _this.__triggerPropsFn("onChangeId", [null].concat([num]));
      _index2.default.setStorage({ key: 'id', data: num });
      _index2.default.navigateTo({
        url: '/pages/order/index?id=' + num
      });
    }, _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Policy, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Policy.prototype.__proto__ || Object.getPrototypeOf(Policy.prototype), "_constructor", this).call(this, props);
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __runloopRef = arguments[2];
      ;

      var list = this.__props.list;

      Object.assign(this.__state, {
        list: list
      });
      return this.__state;
    }
  }]);

  return Policy;
}(_index.Component), _class.properties = {
  "__fn_onChangeId": {
    "type": null,
    "value": null
  },
  "list": {
    "type": null,
    "value": null
  }
}, _class.$$events = ["linkGrid"], _class.defaultProps = {
  list: [{
    image: noPay,
    value: '未付款'
  }, {
    image: shares,
    value: '待分享'
  }, {
    image: noBegin,
    value: '待发货'
  }, {
    image: noGet,
    value: '待收货'
  }, {
    image: noHave,
    value: '已失效'
  }]
}, _temp2);

// <AtGrid
// hasBorder={false}
// data={list}
// columnNum={4}
// onClick={this.linkGrid}
// className='girdBox'
// />


// {list.map((item, index) => (
//   <View key={index} className='home-policy__item'>
//     <Image
//       className='home-policy__item-img'
//       src={item.image}
//     />
//     <Text className='home-policy__item-txt'>{item.value}</Text>
//   </View>
// ))}


exports.default = Policy;

Component(require('../../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Policy));