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

var localIcon = "/assets/images/icon_local.png";
var arrowIcon = "/assets/images/Shape.png";
var pointIcon = "/assets/images/points_05.png";

var AddressWrap = (_temp2 = _class = function (_BaseComponent) {
  _inherits(AddressWrap, _BaseComponent);

  function AddressWrap() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AddressWrap);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AddressWrap.__proto__ || Object.getPrototypeOf(AddressWrap)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["localIcon", "userAddrss", "pointIcon", "arrowIcon", "__fn_onClickAddressInfo"], _this.config = {}, _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AddressWrap, [{
    key: "_constructor",
    value: function _constructor() {
      _get(AddressWrap.prototype.__proto__ || Object.getPrototypeOf(AddressWrap.prototype), "_constructor", this).apply(this, arguments);
      this.state = {};
    }
  }, {
    key: "_createData",
    value: function _createData() {
      var _this2 = this;

      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __runloopRef = arguments[2];
      ;

      var userAddrss = this.__props.userAddrss;


      this.anonymousFunc0 = function (e) {
        e.stopPropagation();
        _this2.__triggerPropsFn("onClickAddressInfo", [null].concat([]));
      };

      Object.assign(this.__state, {
        localIcon: localIcon,
        userAddrss: userAddrss,
        pointIcon: pointIcon,
        arrowIcon: arrowIcon
      });
      return this.__state;
    }
  }, {
    key: "anonymousFunc0",
    value: function anonymousFunc0(e) {
      e.stopPropagation();
    }
  }]);

  return AddressWrap;
}(_index.Component), _class.properties = {
  "userAddrss": {
    "type": null,
    "value": null
  },
  "__fn_onClickAddressInfo": {
    "type": null,
    "value": null
  }
}, _class.$$events = ["anonymousFunc0"], _class.propTypes = {}, _temp2);
exports.default = AddressWrap;

Component(require('../../../npm/@tarojs/taro-weapp/index.js').default.createComponent(AddressWrap));