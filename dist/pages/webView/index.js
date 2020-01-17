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

var _api = require("../../service/api.js");

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var webView = (_dec = (0, _withSare2.default)(), _dec(_class = (_temp2 = _class2 = function (_BaseComponent) {
  _inherits(webView, _BaseComponent);

  function webView() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, webView);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = webView.__proto__ || Object.getPrototypeOf(webView)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["mini_openid", "endPath", "path", "share"], _this.config = {
      navigationBarTitleText: "跳转中..."
    }, _this.$setSharePath = function () {
      // let links = `/pages/webView/index?shareLink=${this.state.path}&src_mini_openid=${this.state.mini_openid}&`
      var links = "/pages/webView/index?qrcode=" + _this.state.qrcode + "&platform=share&shareLink=hold&src_mini_openid=" + _this.state.mini_openid + "&";
      console.warn(links);
      return links;
    }, _this.$setShareTitle = function () {
      // let tit = '冬季限定 羊脂绒触感                     一起来免费领羊羊裤正装'
      var tit = '一起免费享好奇心钻装羊羊裤';
      return tit;
    }, _this.$setShareImageUrl = function () {
      return 'https://mpmall.huggiesapp.cn/storage/wxmall/h5Share.jpg';
    }, _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  // http://demotest.kmtongji.com/huggies/img/t5/bin/1.jpg

  _createClass(webView, [{
    key: "_constructor",
    value: function _constructor() {
      _get(webView.prototype.__proto__ || Object.getPrototypeOf(webView.prototype), "_constructor", this).apply(this, arguments);
      this.state = {
        path: '',
        mini_openid: '',
        share: ''
      };
    }

    // 分享

  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      // a分享给b，带着a的openid。 b点进去要带着b的openid以及a的 openid（src_mini_openid）
      var links = this.$router.params;
      var km_uuid = _index2.default.getStorageSync('km_uuid'); //
      var ID = "km_oid" + km_uuid;
      var mini_openid = _index2.default.getStorageSync(ID); // 小程序本机的openid
      var src_mini_openid = links.src_mini_openid; // 分享链接里带来的分享openid
      console.warn(links, '分享过来的srcopenid');

      var defaultPath = links.shareLink ? links.shareLink : _index2.default.getStorageSync('webPath'); // 默认链接

      // let path = `https://h5.huggiesapp.cn?qrcode=${links.qrcode}&platform=${links.platform}&mini_openid=${mini_openid}&src_mini_openid=${src_mini_openid}`
      var path = "https://h5test.huggiesapp.cn?qrcode=" + links.qrcode + "&platform=" + links.platform + "&mini_openid=" + mini_openid + "&src_mini_openid=" + src_mini_openid;
      if (links.shareLink) {
        //如果是分享的链接
        console.warn(defaultPath, 'sss');
        // path = `https://h5.huggiesapp.cn?qrcode=${links.qrcode}&platform=${links.platform}&mini_openid=${mini_openid}&src_mini_openid=${src_mini_openid}`
        path = "https://h5test.huggiesapp.cn?qrcode=" + links.qrcode + "&platform=" + links.platform + "&mini_openid=" + mini_openid + "&src_mini_openid=" + src_mini_openid;
      }

      this.setState({
        path: path,
        mini_openid: mini_openid,
        platform: links.platform,
        qrcode: links.qrcode
      });

      var params = this.convertObj(this.$router.params);

      if (mini_openid == '' || !mini_openid) {
        _api2.default.get('api/member').then(function (res) {
          _index2.default.reLaunch({
            url: "/pages/webView/index?" + params
          });
        });
      }
    }
  }, {
    key: "convertObj",
    value: function convertObj(data) {
      var _result = [];
      for (var key in data) {
        var value = data[key];
        if (key !== '/pages/webView/index') {
          if (value.constructor == Array) {
            value.forEach(function (_value) {
              _result.push(key + "=" + _value);
            });
          } else {
            _result.push(key + '=' + value);
          }
        }
      }
      return _result.join('&');
    }
  }, {
    key: "handleMessage",
    value: function handleMessage(e) {
      console.log(e, '链接');
      this.setState({
        share: e.detail.data
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
          mini_openid = _state.mini_openid,
          path = _state.path;

      var endPath = path;

      console.warn(endPath, '最终链接');
      Object.assign(this.__state, {
        endPath: endPath
      });
      return this.__state;
    }
  }]);

  return webView;
}(_index.Component), _class2.properties = {}, _class2.$$events = ["handleMessage"], _class2.defaultProps = {}, _temp2)) || _class);
exports.default = webView;
// src_mini_openid 分享openid A

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(webView, true));