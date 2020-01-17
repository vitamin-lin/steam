"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _index = require("../../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _starsData = require("../../../constants/starsData.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var heart = "/assets/hearts.png";

// @pageInit()
// 前4个和最后2个：id=8, 其余两个 id=17
var Success = (_temp2 = _class = function (_BaseComponent) {
  _inherits(Success, _BaseComponent);

  function Success() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Success);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Success.__proto__ || Object.getPrototypeOf(Success)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "list", "gid", "id", "details", "heart", "total", "datas", "__fn_onClick"], _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Success, [{
    key: "_constructor",
    value: function _constructor() {
      _get(Success.prototype.__proto__ || Object.getPrototypeOf(Success.prototype), "_constructor", this).apply(this, arguments);
      this.state = {};
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "linkToDetail",
    value: function linkToDetail(gid, id) {
      /* eslint-disable */
      var app = getApp();
      /* eslint-enable */
      app.km.track('recdetail_rec.' + id + '_gid.' + gid, null);
      _index2.default.navigateTo({
        url: '/pages/detail/index?gid=' + gid
      });
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __runloopRef = arguments[2];
      ;

      var datas = this.__props.datas;

      if (!datas) {
        return false;
      }var _props$datas = this.__props.datas,
          id = _props$datas.id,
          total = _props$datas.total,
          gid = _props$datas.gid;

      var piclist = _starsData.starsData.filter(function (e) {
        return e.id == id;
      });
      if (!piclist[0]) {
        return false;
      }
      var list = piclist[0].banner;
      var height = piclist[0].height + 'rpx';
      var details = piclist[0].details;
      // let idStaus = id > 8

      var anonymousState__temp = (0, _index.internal_inline_style)({ maxHeight: '1105rpx', height: height });
      var anonymousState__temp2 = (0, _index.internal_inline_style)({ height: height });
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        list: list,
        gid: gid,
        id: id,
        details: details,
        heart: heart,
        total: total
      });
      return this.__state;
    }
  }, {
    key: "funPrivateLuPOq",
    value: function funPrivateLuPOq() {
      this.__triggerPropsFn("onhandleChange", [].concat(Array.prototype.slice.call(arguments)));
    }
  }]);

  return Success;
}(_index.Component), _class.properties = {
  "datas": {
    "type": null,
    "value": null
  },
  "onhandleChange": {
    "type": null,
    "value": null
  },
  "__fn_onClick": {
    "type": null,
    "value": null
  },
  "__fn_onhandleChange": {
    "type": null,
    "value": null
  }
}, _class.$$events = ["funPrivateLuPOq", "linkToDetail"], _class.propTypes = {
  // newBooks: PropTypes.arrayOf(PropTypes.object),
  // hotBooks: PropTypes.arrayOf(PropTypes.object),
  // recommendBooks: PropTypes.arrayOf(PropTypes.object)
}, _temp2);
exports.default = Success;
// <Image src={e} mode='widthFix'></Image>

// <View className={idStaus ? 'heartID' : 'heart'}>
// <Image src={heart} mode='widthFix' />
// <Text className='nums'>{total}</Text>
// </View>

Component(require('../../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Success));