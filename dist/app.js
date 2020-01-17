"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require("./npm/@tarojs/async-await/index.js");

var _index = require("./npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = require("./npm/@tarojs/redux/index.js");

var _index4 = require("./store/index.js");

var _index5 = _interopRequireDefault(_index4);

var _global = require("./utils/global.js");

require("./utils/kmConf.js");

require("./utils/km.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable */

// import { View, Text, ScrollView } from '@tarojs/components'

/* eslint-enable */

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

var store = (0, _index5.default)();

(0, _index3.setStore)(store);

var _App = function (_BaseComponent) {
  _inherits(_App, _BaseComponent);

  function _App() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, _App);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = _App.__proto__ || Object.getPrototypeOf(_App)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      /* eslint-disable */
      isPhoneX: 0
      /* eslint-enable */
    }, _this.config = {
      pages: [
      // 'pages/home/index',
      // 'pages/confirmOrder/index',
      // 'pages/shareDetail/index',
      // 'pages/coupons/index',
      // 'pages/detail/index',
      'pages/bulk/index',
      // 'pages/stars/index',
      // 'pages/starsDetail/index',
      // 'pages/newStarsDetail/index',
      // 'pages/banner/index',
      'pages/user/index'],
      window: {
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: '#fff',
        navigationBarTitleText: 'WeChat',
        navigationBarTextStyle: 'black',
        backgroundColor: '#f1f1f1'
      },
      tabBar: {
        list: [{
          pagePath: 'pages/bulk/index',
          text: '组队资讯',
          iconPath: './assets/cate.png',
          selectedIconPath: './assets/cate-active.png'
        },
        // {
        //   pagePath: 'pages/all/index',
        //   text: '全部商品',
        //   iconPath: './assets/all.png',
        //   selectedIconPath: './assets/all-active.png'
        // },
        // {
        //   pagePath: 'pages/home/index',
        //   text: '首页',
        //   iconPath: './assets/home.png',
        //   selectedIconPath: './assets/home-active.png'
        // },
        // {
        //   pagePath: 'pages/cart/index',
        //   text: '购物车',
        //   iconPath: './assets/cart.png',
        //   selectedIconPath: './assets/cart-active.png'
        // },
        {
          pagePath: 'pages/user/index',
          text: '我的',
          iconPath: './assets/user.png',
          selectedIconPath: './assets/user-active.png'
        }],
        color: '#a7a7a7',
        selectedColor: '#242424',
        backgroundColor: '#ffffff',
        borderStyle: 'white'
      },

      networkTimeout: {
        request: 1000000,
        connectSocket: 100000,
        uploadFile: 100000,
        downloadFile: 100000

        // debug: true
      } }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(_App, [{
    key: "componentWillMount",
    value: function componentWillMount() {}
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      //将redux状态挂载到 Taro 对象上，Taro.$store直接获取操作
      this.checkMobilePhone();
      _index2.default.$store = store;
    }
  }, {
    key: "componentDidShow",
    value: function componentDidShow() {}
  }, {
    key: "componentDidHide",
    value: function componentDidHide() {}
  }, {
    key: "componentCatchError",
    value: function componentCatchError() {}
  }, {
    key: "componentDidCatchError",
    value: function componentDidCatchError() {}
  }, {
    key: "checkMobilePhone",
    value: function checkMobilePhone() {
      // var self = this
      _index2.default.getSystemInfo({
        success: function success(e) {
          var a = e.model;
          // Taro.showToast({
          //   title : a ,
          //   icon : 'none' ,
          //   mask : true
          // })
          if (-1 != a.search('iPhone X') || -1 != a.search('iPhone XS') || -1 != a.search('iPhone XS Max') || -1 != a.search('iPhone XR')) {
            //找到
            (0, _global.setGlobalData)('isIphoneX', 1);
            // console.warn('我是X系列')
          } else {
            (0, _global.setGlobalData)('isIphoneX', 0);
            // console.warn('我不是X')
          }
        }
      });
    }

    // 在 App 类中的 render() 函数没有实际作用
    // 请勿修改此函数

  }, {
    key: "_createData",
    value: function _createData() {}
  }]);

  return _App;
}(_index.Component);

exports.default = _App;

App(require('./npm/@tarojs/taro-weapp/index.js').default.createApp(_App));
_index2.default.initPxTransform({
  "designWidth": 750,
  "deviceRatio": {
    "640": 1.17,
    "750": 1,
    "828": 0.905
  }
});