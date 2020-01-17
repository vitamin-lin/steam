"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _index = require("../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _api = require("../../service/api.js");

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var heart = "/assets/hearts.png";
var heartInit = "/assets/heart.png";
var tits = "/assets/images/tits.png";

var waterfall = (_temp2 = _class = function (_BaseComponent) {
  _inherits(waterfall, _BaseComponent);

  function waterfall() {
    var _ref;

    var _temp, _this2, _ret;

    _classCallCheck(this, waterfall);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = waterfall.__proto__ || Object.getPrototypeOf(waterfall)).call.apply(_ref, [this].concat(args))), _this2), _this2.$usedState = ["anonymousState__temp", "tits", "leftData", "heart", "heartInit", "rightData", "datas", "recommendable_three", "data"], _this2.$$refs = [], _temp), _possibleConstructorReturn(_this2, _ret);
  }

  _createClass(waterfall, [{
    key: "_constructor",
    value: function _constructor() {
      _get(waterfall.prototype.__proto__ || Object.getPrototypeOf(waterfall.prototype), "_constructor", this).apply(this, arguments);
      this.state = {
        datas: [],
        leftData: [],
        rightData: [],
        recommendable_three: false
      };
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.ajaxData();
    }
  }, {
    key: "componentDidShow",
    value: function componentDidShow() {
      this.ajaxData();
    }
  }, {
    key: "ajaxData",
    value: function ajaxData() {
      var _this3 = this;

      var _props$data = this.props.data,
          type = _props$data.type,
          gids = _props$data.gids;

      console.warn(type, gids);
      if (gids) {
        gids = gids.split(',');
      }
      var data = {};
      if (!type && gids) {
        data = {
          type: 'paid',
          goods_id: gids
        };
      }

      if (type && !gids) {
        data = {
          type: type
        };
      }
      _api2.default.get('api/recommendations', _extends({
        recommendable_three: 1
      }, data)).then(function (res) {
        var left = [];
        var right = [];
        res.data.items.map(function (e, index) {
          console.warn(index % 2);
          if (index % 2 == 0) {
            // 偶
            right.push(e);
          } else {
            left.push(e);
          }
        });
        _this3.setState({
          datas: res.data.items,
          leftData: right,
          rightData: left,
          recommendable_three: res.data.recommendable_three
        });
        // console.warn(res.data, left, right)
      });
    }
  }, {
    key: "toLink",
    value: function toLink(id) {
      var app = (0, _index.getApp)();
      var arrPath = _index2.default.getCurrentPages();
      var curPath = arrPath[arrPath.length - 1].route;

      if (curPath == 'pages/bulk/index') {
        app.km.track('groupnews_rec_' + id, null);
      } else if (curPath == 'pages/success/index') {
        app.km.track('finish_rec_' + id, null);
      } else if (curPath == 'pages/cart/index') {
        app.km.track('cart_rec_' + id, null);
      }
      _index2.default.navigateTo({
        url: '/pages/detail/index?gid=' + id
      });
    }
  }, {
    key: "clickZan",
    value: function clickZan(index) {
      var _this = this;
      _api2.default.post('api/awesome', {
        type: 1,
        custom_id: index
      }).then(function (res) {
        if (res.code === 20000) {
          _this.ajaxData();
        }
      });
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __runloopRef = arguments[2];
      ;

      var _state = this.__state,
          datas = _state.datas,
          leftData = _state.leftData,
          rightData = _state.rightData;

      if (!datas) {
        return false;
      }var anonymousState__temp = this.__state.recommendable_three ? { recommendable_three: true } : null;
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        tits: tits,
        heart: heart,
        heartInit: heartInit
      });
      return this.__state;
    }
  }]);

  return waterfall;
}(_index.Component), _class.properties = {
  "data": {
    "type": null,
    "value": null
  }
}, _class.$$events = ["toLink", "clickZan"], _class.defaultProps = {}, _temp2);
exports.default = waterfall;
// {/* 右边 */}
// <View className='List-right' >
//   {
//     datas.map((item, index) => (
//       <View className='startsCard' key={index}>
//         <Image src={item.img} mode='widthFix' className='pic' />
//         <View className='main'>
//           <Text className='tits'>
//             好奇夏日限定蜜桃。。。。
//           </Text>
//           <Image src={heart} mode='widthFix' className='heart' />
//           <Text className='nums'>1234</Text>
//         </View>
//       </View>
//     ))
//   }
// </View>

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(waterfall));