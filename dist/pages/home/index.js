"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _dec, _dec2, _class, _class2, _temp2;

var _index = require("../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _withSare = require("../../utils/withSare.js");

var _withSare2 = _interopRequireDefault(_withSare);

var _pageInit = require("../../utils/pageInit.js");

var _pageInit2 = _interopRequireDefault(_pageInit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HOME = (_dec = (0, _pageInit2.default)(), _dec2 = (0, _withSare2.default)(), _dec(_class = _dec2(_class = (_temp2 = _class2 = function (_BaseComponent) {
  _inherits(HOME, _BaseComponent);

  function HOME() {
    var _ref;

    var _temp, _this2, _ret;

    _classCallCheck(this, HOME);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = HOME.__proto__ || Object.getPrototypeOf(HOME)).call.apply(_ref, [this].concat(args))), _this2), _this2.$usedState = ["anonymousState__temp", "current", "loads", "canShare"], _this2.config = {
      navigationBarTitleText: 'MARS MAKER'
      // disableScroll: true
    }, _this2.$$refs = [], _temp), _possibleConstructorReturn(_this2, _ret);
  }

  _createClass(HOME, [{
    key: "_constructor",
    value: function _constructor() {
      _get(HOME.prototype.__proto__ || Object.getPrototypeOf(HOME.prototype), "_constructor", this).apply(this, arguments);
      this.state = {
        current: 0,
        loads: true,
        canShare: true
      };
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      // API.get('api/member').then(res => {
      //   if (res.code == 20000) {
      //   }
      // })
    }
  }, {
    key: "componentDidShow",
    value: function componentDidShow() {
      var _this = this;
      var loads = _index2.default.getStorageSync('loads');
      // 如果有值
      if (loads == '') {
        setTimeout(function () {
          _this.setState({
            loads: false
          });
        }, 3000);
        _index2.default.setStorage({ key: 'loads', data: 1 });
      } else {
        _this.setState({
          loads: false
        });
      }
    }
  }, {
    key: "handleClick",
    value: function handleClick(e) {
      console.warn(e);
      if (e == 0) {
        wx.setNavigationBarTitle({
          title: '知识库'
        });
      } else {
        wx.setNavigationBarTitle({
          title: '个人中心'
        });
      }
      this.setState({
        current: e
      });
    }
  }, {
    key: "takePhoto",
    value: function takePhoto() {
      // 允许从相机和相册扫码
      wx.scanCode({
        success: function success(res) {}
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
          current = _state.current,
          loads = _state.loads;

      var anonymousState__temp = [{ title: '知识库', iconType: 'bullet-list' }, { title: '个人中心', iconType: 'user' }];
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp
      });
      return this.__state;
    }
  }]);

  return HOME;
}(_index.Component), _class2.properties = {}, _class2.$$events = ["handleClick", "takePhoto"], _temp2)) || _class) || _class);
exports.default = HOME;

// {
//   loads &&
//   <View className='loading_fc'>
//     loading....
//   </View>
// }

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(HOME, true));