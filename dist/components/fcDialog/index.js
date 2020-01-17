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

var waterfall = (_temp2 = _class = function (_BaseComponent) {
  _inherits(waterfall, _BaseComponent);

  function waterfall() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, waterfall);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = waterfall.__proto__ || Object.getPrototypeOf(waterfall)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["__fn_onClick"], _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  // http://demotest.kmtongji.com/huggies/img/t5/bin/1.jpg

  _createClass(waterfall, [{
    key: "_constructor",
    value: function _constructor() {
      _get(waterfall.prototype.__proto__ || Object.getPrototypeOf(waterfall.prototype), "_constructor", this).apply(this, arguments);
      this.state = {};
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
    key: "funPrivatefEVww",
    value: function funPrivatefEVww() {
      this.__triggerPropsFn("onCloseDia", [].concat(Array.prototype.slice.call(arguments)));
    }
  }]);

  return waterfall;
}(_index.Component), _class.properties = {
  "onCloseDia": {
    "type": null,
    "value": null
  },
  "__fn_onClick": {
    "type": null,
    "value": null
  },
  "__fn_onCloseDia": {
    "type": null,
    "value": null
  }
}, _class.$$events = ["funPrivatefEVww"], _class.defaultProps = {}, _temp2);
exports.default = waterfall;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(waterfall));