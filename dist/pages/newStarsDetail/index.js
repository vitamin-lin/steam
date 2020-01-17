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

var _util = require("../../service/util.js");

var _api = require("../../service/api.js");

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var alertClose = "/assets/alertClose.png";
var alert = "/assets/alerts.png";

// const starsData = Taro.getStorageSync('starsData');

var Success = (_dec = (0, _withSare2.default)(), _dec(_class = (_temp2 = _class2 = function (_BaseComponent) {
  _inherits(Success, _BaseComponent);

  function Success() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Success);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Success.__proto__ || Object.getPrototypeOf(Success)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["products", "data", "id", "alert", "alertClose", "isOpened"], _this.config = {
      navigationBarTitleText: '好奇官方精品商城',
      disableScroll: true
    }, _this.$setSharePath = function () {
      var id = _this.state.data.id;

      return _this.$router.path + "?id=" + id + "&";
    }, _this.$setShareTitle = function () {
      var share_title = _this.state.data.share_title;

      return share_title;
    }, _this.$setShareImageUrl = function () {
      var share_image_path = _this.state.data.share_image_path;

      return share_image_path;
    }, _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Success, [{
    key: "_constructor",
    value: function _constructor() {
      _get(Success.prototype.__proto__ || Object.getPrototypeOf(Success.prototype), "_constructor", this).apply(this, arguments);
      this.state = {
        // list: [],
        isOpened: false,
        data: '',
        products: true
      };
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "componentDidShow",
    value: function componentDidShow() {
      var id = this.$router.params.id;
      this.ajaxData();
      /* eslint-disable */
      var app = getApp();
      /* eslint-enable */
      app.km.track('page_recdetail_' + id, null);
      (0, _util.CheckLogin)();
    }

    // 分享

  }, {
    key: "ajaxData",


    // 请求星选好物详情
    value: function ajaxData() {
      var _this2 = this;

      var id = this.$router.params.id;
      _api2.default.get('api/product_recommendation', {
        id: id
      }).then(function (res) {
        if (res.code == 40060) {
          _this2.setState({
            products: false
          });
        } else {
          _this2.setState({
            data: res.data
          });
        }
      });
    }
  }, {
    key: "onhandleChange",
    value: function onhandleChange(id) {
      /* eslint-disable */
      var app = getApp();
      /* eslint-enable */
      app.km.track('share_' + id, null);
      this.setState({
        isOpened: true
      });
    }
  }, {
    key: "onClose",
    value: function onClose() {
      this.setState({
        isOpened: false
      });
    }
  }, {
    key: "shareInfo",
    value: function shareInfo(gid, gid_pic, id) {
      /* eslint-disable */
      var app = getApp();
      /* eslint-enable */
      app.km.track('hwq_' + id, null);
      var version = 0;
      wx.getSystemInfo({
        success: function success(e) {
          // var a = e.model;
          version = e.version;
        }
      });
      version = version.replace(/\./g, '');
      // let titles = '好奇心钻装超值装初生号66片'
      // if (gid !== 8) {
      //   titles = '好奇铂金装倍柔亲肤纸尿裤电商箱装小号96片'
      // }
      // if (gid == 28) {
      //   titles = '好奇铂蜜桃限定款心钻装纸尿裤'
      // }
      // console.warn(gid, '121w')

      if (version < 703) {
        _index2.default.showToast({
          title: '该功能仅支持微信7.0.3以上版本',
          icon: 'none',
          mask: true
        });
      } else {
        // Taro.showToast({
        //   title : titles ,
        //   icon : 'none' ,
        //   mask : true
        // })
        if (wx.openBusinessView) {
          wx.openBusinessView({
            businessType: 'friendGoodsRecommend',
            extraData: {
              product: {
                item_code: gid //物品id 唯一
                // title: titles, // 物品名称
                // image_list: gid_pic //物品封面
              }
            },
            success: function success(res) {
              if (res.errCode === 0) {
                // wx.showToast({
                //   title: '推荐成功'
                // });
              }
            },
            fail: function fail(res) {
              console.log(res);
              // wx.showToast({
              //     title: '推荐失败',
              //     icon: 'none'
              // });
            }
          });
        }
      }
    }
  }, {
    key: "look",
    value: function look() {
      _index2.default.switchTab({
        url: '/pages/home/index'
      });
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __runloopRef = arguments[2];
      ;

      var id = this.$router.params.id;
      var data = this.__state.data;
      var products = this.__state.products;


      this.anonymousFunc0 = function (e) {
        // console.log(e)
        e.stopPropagation();
        // e.preventDefault()
        /* eslint-disable */
        var app = getApp();
        /* eslint-enable */
        app.km.track('sharefriend_' + id, null);
      };

      Object.assign(this.__state, {
        id: id,
        alert: alert,
        alertClose: alertClose
      });
      return this.__state;
    }
  }, {
    key: "anonymousFunc0",
    value: function anonymousFunc0(e) {
      e.stopPropagation();
    }
  }]);

  return Success;
}(_index.Component), _class2.properties = {}, _class2.$$events = ["onhandleChange", "anonymousFunc0", "shareInfo", "onClose", "look"], _class2.propTypes = {
  // newBooks: PropTypes.arrayOf(PropTypes.object),
  // hotBooks: PropTypes.arrayOf(PropTypes.object),
  // recommendBooks: PropTypes.arrayOf(PropTypes.object)
}, _temp2)) || _class);
exports.default = Success;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Success, true));