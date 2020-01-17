"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _index = require("../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Countdown = (_temp2 = _class = function (_BaseComponent) {
  _inherits(Countdown, _BaseComponent);

  function Countdown() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Countdown);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Countdown.__proto__ || Object.getPrototypeOf(Countdown)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["hours", "minutes", "seconds", "countDownDate"], _this.state = {
      hours: 0,
      minutes: 0,
      seconds: 0
    }, _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Countdown, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Countdown.prototype.__proto__ || Object.getPrototypeOf(Countdown.prototype), "_constructor", this).call(this, props);
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
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var countDownDate = this.props.countDownDate;


      this.interval1 = setInterval(function () {
        var now = new Date().getTime();
        var distance = countDownDate - now;

        var leftDayInHours = Math.floor(distance / 86400000) * 24;
        var leftHours = leftDayInHours + Math.floor(distance % 86400000 / 3600000);

        _this2.setState({
          hours: leftHours,
          minutes: Math.floor(distance % 3600000 / 60000),
          seconds: Math.floor(distance % 60000 / 1000)
        });
      }, 1000);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearInterval(this.interval1);
    }
  }, {
    key: "componentDidHide",
    value: function componentDidHide() {
      clearInterval(this.interval1);
    }
  }]);

  return Countdown;
}(_index.Component), _class.properties = {
  "countDownDate": {
    "type": null,
    "value": null
  }
}, _class.$$events = [], _temp2);
exports.default = Countdown;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Countdown));