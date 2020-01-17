"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _dec, _class, _class2, _temp2;

var _index = require("../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _withSare = require("../../utils/withSare.js");

var _withSare2 = _interopRequireDefault(_withSare);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// {
//   title: '可设置分享标题',
//   imageUrl: '可设置分享图片路径',
//   path: '可设置分享路径'
// }
var Banner = (_dec = (0, _withSare2.default)(), _dec(_class = (_temp2 = _class2 = function (_BaseComponent) {
  _inherits(Banner, _BaseComponent);

  function Banner() {
    var _ref;

    var _temp, _this2, _ret;

    _classCallCheck(this, Banner);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = Banner.__proto__ || Object.getPrototypeOf(Banner)).call.apply(_ref, [this].concat(args))), _this2), _this2.$usedState = ["loopArray0", "banner", "sortBannerArr"], _this2.config = {
      navigationBarTitleText: '好奇官方精品商城'
    }, _this2.state = {
      banner: []
    }, _this2.anonymousFunc0Array = [], _this2.$$refs = [], _temp), _possibleConstructorReturn(_this2, _ret);
  }

  _createClass(Banner, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Banner.prototype.__proto__ || Object.getPrototypeOf(Banner.prototype), "_constructor", this).call(this, props);
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {}
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getBannerData();
    }
    // componentWillReceiveProps(nextProps, nextContext) {}

  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {}
  }, {
    key: "componentDidShow",
    value: function componentDidShow() {
      this.getBannerData();
    }
  }, {
    key: "componentDidHide",
    value: function componentDidHide() {}
  }, {
    key: "componentDidCatchError",
    value: function componentDidCatchError() {}
  }, {
    key: "componentDidNotFound",
    value: function componentDidNotFound() {}
  }, {
    key: "getBannerData",
    value: function getBannerData() {
      var _this = this;
      _index2.default.getStorage({ key: 'banner' }).then(function (res) {
        console.log(res);

        if (res.errMsg == 'getStorage:ok') {
          _this.setState({
            banner: res.data
          });
        }
      });
    }
  }, {
    key: "onClickSwiperItem",
    value: function onClickSwiperItem(type, gid, child, bid) {
      // e.stopPropagation()
      // console.log('handleTouchSwiperItem bind data: ')
      // console.log(type)
      // console.log(gid)
      // console.log(child)
      /* eslint-disable */
      var app = getApp();
      /* eslint-enable */
      app.km.track('bannerlist_banner' + bid, null);

      // setTimeout(() => {
      if (type == 'goods') {
        _index2.default.navigateTo({
          url: '../detail/index?gid=' + gid
        });
      } else if (type == 'nav') {
        _index2.default.setStorage({ key: 'banner', data: child }).then(function (res) {
          console.log(res);
          if (res.errMsg == 'setStorage:ok') {
            _index2.default.navigateTo({
              url: '../banner/index'
            });
          }
        });
      }
      // }, 500)
    }
  }, {
    key: "_createData",
    value: function _createData() {
      var _this3 = this;

      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __runloopRef = arguments[2];
      ;

      var banner = this.__state.banner;

      if (!banner || banner.length <= 0) {
        // Taro.switchTab({
        //   url: '../home/index'
        // })
        return null;
      }
      var sortBannerArr = banner.sort(function (a, b) {
        return a.sort - b.sort;
      });

      var loopArray0 = sortBannerArr.map(function (b, __index0) {
        b = {
          $original: (0, _index.internal_get_original)(b)
        };

        _this3.anonymousFunc0Array[__index0] = function (e) {
          e.stopPropagation();
          _this3.onClickSwiperItem(b.$original.type, b.$original.goods_id, b.$original.children, b.$original.id);
        };

        return {
          $original: b.$original
        };
      });
      Object.assign(this.__state, {
        loopArray0: loopArray0,
        sortBannerArr: sortBannerArr
      });
      return this.__state;
    }
  }, {
    key: "anonymousFunc0",
    value: function anonymousFunc0(__index0, e) {
      e.stopPropagation();
      this.anonymousFunc0Array[__index0] && this.anonymousFunc0Array[__index0](e);
    }
  }]);

  return Banner;
}(_index.Component), _class2.properties = {}, _class2.$$events = ["anonymousFunc0"], _temp2)) || _class);
exports.default = Banner;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Banner, true));