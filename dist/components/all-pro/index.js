"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _index = require("../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = require("../../npm/classnames/index.js");

var _index4 = _interopRequireDefault(_index3);

var _api = require("../../service/api.js");

var _api2 = _interopRequireDefault(_api);

var _gdt = require("../../utils/gdt.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cart = "/assets/cart2.png";
var winer = "/assets/winer.png";

var waterfall = (_temp2 = _class = function (_BaseComponent) {
  _inherits(waterfall, _BaseComponent);

  function waterfall() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, waterfall);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = waterfall.__proto__ || Object.getPrototypeOf(waterfall)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp5", "anonymousState__temp6", "anonymousState__temp7", "anonymousState__temp10", "anonymousState__temp11", "anonymousState__temp12", "anonymousState__temp13", "anonymousState__temp14", "anonymousState__temp15", "anonymousState__temp16", "anonymousState__temp17", "loopArray0", "loopArray1", "loopArray2", "leftData", "winer", "cart", "rightData", "datas", "tab", "size", "serie", "seriesP"], _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(waterfall, [{
    key: "_constructor",
    value: function _constructor() {
      _get(waterfall.prototype.__proto__ || Object.getPrototypeOf(waterfall.prototype), "_constructor", this).apply(this, arguments);

      this.state = {
        datas: [],
        leftData: [],
        rightData: [],
        tab: 0,
        size: '',
        serie: '',
        seriesP: []
      };

      this.noData = this.noData.bind(this);
      this.handleTabClick = this.handleTabClick.bind(this);
      this.handleSerieClick = this.handleSerieClick.bind(this);
      this.handleSizeClick = this.handleSizeClick.bind(this);

      this.app = (0, _index.getApp)();
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.ajaxData();
      this.ajaxSerise();
    }
  }, {
    key: "componentDidShow",
    value: function componentDidShow() {
      this.ajaxData();
      this.ajaxSerise();
    }
  }, {
    key: "ajaxSerise",
    value: function ajaxSerise() {
      var _this2 = this;

      _api2.default.get('api/series').then(function (res) {
        _this2.setState({
          seriesP: res.data
        });
      });
    }
  }, {
    key: "ajaxData",
    value: function ajaxData() {
      var _this3 = this;

      _api2.default.post('api/goods').then(function (res) {
        var left = [];
        var right = [];
        res.data.map(function (e, index) {
          // console.warn(index % 2)
          if (index % 2 == 0) {
            // 偶
            right.push(e);
          } else {
            left.push(e);
          }
        });
        _this3.setState({
          datas: res.data,
          leftData: right,
          rightData: left
        });
        // console.warn(res.data, left, right)
      });
    }
  }, {
    key: "toLink",
    value: function toLink(id) {
      var app = (0, _index.getApp)();
      app.km.track("gdlist_" + id, null);
      _index2.default.navigateTo({
        url: '/pages/detail/index?gid=' + id
      });
    }
  }, {
    key: "addCart",
    value: function addCart(id) {
      var app = (0, _index.getApp)();
      app.km.track("gdlist_cart_" + id, null);
      (0, _gdt.gdtTrackClick)('ADD_TO_CART', {
        goods_id: id
      });
      _api2.default.post('api/cart', {
        goods_id: id,
        increase: 1
      }).then(function (res) {
        if (res.code == '20000') {
          // console.warn('成功')
          _index2.default.showToast({
            title: '成功加入购物车',
            icon: 'success'
          });
        }
      });
    }
  }, {
    key: "noData",
    value: function noData() {
      return !this.state.datas;
    }
  }, {
    key: "handleTabClick",
    value: function handleTabClick(e) {
      var _this4 = this;

      var that = this;

      this.setState({
        tab: e.currentTarget.dataset.index
      }, function () {
        if (_this4.state.tab === 0) {
          _api2.default.post('api/goods', {
            series: _this4.state.serie
          }).then(function (res) {
            var left = [];
            var right = [];
            res.data.map(function (e, index) {
              // console.warn(index % 2)
              if (index % 2 == 0) {
                // 偶
                right.push(e);
              } else {
                left.push(e);
              }
            });

            _this4.setState({
              datas: res.data,
              leftData: right,
              rightData: left
            });

            that.app.km.track('series', null);
            // console.warn(res.data, left, right)
          });
        }

        if (_this4.state.tab === 1) {
          _api2.default.post('api/goods', {
            size: _this4.state.size
          }).then(function (res) {
            var left = [];
            var right = [];
            res.data.map(function (e, index) {
              // console.warn(index % 2)
              if (index % 2 == 0) {
                // 偶
                right.push(e);
              } else {
                left.push(e);
              }
            });

            _this4.setState({
              datas: res.data,
              leftData: right,
              rightData: left
            });

            that.app.km.track('size', null);

            // console.warn(res.data, left, right)
          });
        }

        if (_this4.state.tab === 2) {
          _api2.default.post('api/goods', {
            order_sales: 1
          }).then(function (res) {
            var left = [];
            var right = [];

            res.data.map(function (e, index) {
              // console.warn(index % 2)
              if (index % 2 == 0) {
                // 偶
                right.push(e);
              } else {
                left.push(e);
              }
            });

            _this4.setState({
              datas: res.data,
              leftData: right,
              rightData: left
            });

            that.app.km.track('sales', null);

            // console.warn(res.data, left, right)
          });
        }
      });
    }
  }, {
    key: "handleSerieClick",
    value: function handleSerieClick(e) {
      var _this5 = this;

      var that = this;

      this.setState({
        serie: e.currentTarget.dataset.name
      }, function () {
        _api2.default.post("api/goods", {
          series: _this5.state.serie
        }).then(function (res) {
          var left = [];
          var right = [];
          res.data.map(function (e, index) {
            // console.warn(index % 2)
            if (index % 2 == 0) {
              // 偶
              right.push(e);
            } else {
              left.push(e);
            }
          });
          _this5.setState({
            datas: res.data,
            leftData: right,
            rightData: left
          });

          if (e.currentTarget.dataset.name === '铂金装') {
            that.app.km.track('biz', null);
          }

          if (e.currentTarget.dataset.name === '心钻装') {
            that.app.km.track('xzz', null);
          }

          if (e.currentTarget.dataset.name === '湿巾棉柔巾') {
            that.app.km.track('sjmrj', null);
          }

          // console.warn(res.data, left, right)
        });
      });
    }
  }, {
    key: "handleSizeClick",
    value: function handleSizeClick(e) {
      var _this6 = this;

      var that = this;

      this.setState({
        size: e.currentTarget.dataset.name
      }, function () {
        _api2.default.post("api/goods", {
          size: _this6.state.size
        }).then(function (res) {
          var left = [];
          var right = [];
          res.data.map(function (e, index) {
            // console.warn(index % 2)
            if (index % 2 == 0) {
              // 偶
              right.push(e);
            } else {
              left.push(e);
            }
          });

          _this6.setState({
            datas: res.data,
            leftData: right,
            rightData: left
          });

          that.app.km.track(e.currentTarget.dataset.name.toLowerCase(), null);
          // console.warn(res.data, left, right)
        });
      });
    }
  }, {
    key: "isSecKillProduct",
    value: function isSecKillProduct(limitedSaleType) {
      return limitedSaleType === 1;
    }
  }, {
    key: "componentDidHide",
    value: function componentDidHide() {
      this.setState({
        tab: 0,
        size: '',
        serie: ''
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "_createData",
    value: function _createData() {
      var _this7 = this;

      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __runloopRef = arguments[2];
      ;

      var _state = this.__state,
          leftData = _state.leftData,
          rightData = _state.rightData;


      var anonymousState__temp5 = (0, _index4.default)('tab', {
        active: this.__state.tab === 0
      });
      var anonymousState__temp6 = (0, _index4.default)('tab', {
        active: this.__state.tab === 1
      });
      var anonymousState__temp7 = (0, _index4.default)('tab', {
        active: this.__state.tab === 2
      });
      var anonymousState__temp10 = this.__state.tab === 1 ? (0, _index4.default)('method', {
        active: this.__state.size === 'NB'
      }) : null;
      var anonymousState__temp11 = this.__state.tab === 1 ? (0, _index4.default)('method', {
        active: this.__state.size === 'S'
      }) : null;
      var anonymousState__temp12 = this.__state.tab === 1 ? (0, _index4.default)('method', {
        active: this.__state.size === 'M'
      }) : null;
      var anonymousState__temp13 = this.__state.tab === 1 ? (0, _index4.default)('method', {
        active: this.__state.size === 'L'
      }) : null;
      var anonymousState__temp14 = this.__state.tab === 1 ? (0, _index4.default)('method', {
        active: this.__state.size === 'XL'
      }) : null;
      var anonymousState__temp15 = this.__state.tab === 1 ? (0, _index4.default)('method', {
        active: this.__state.size === 'XXL'
      }) : null;
      var anonymousState__temp16 = (0, _index.internal_inline_style)({
        paddingTop: this.__state.tab === 2 && '30Px'
      });
      var anonymousState__temp17 = this.noData();
      var loopArray0 = leftData.map(function (item, index) {
        item = {
          $original: (0, _index.internal_get_original)(item)
        };
        var $loopState__temp2 = _this7.isSecKillProduct(item.$original.is_limited_sale) ? item.$original.price / 100 : item.$original.group_price ? item.$original.group_price / 100 : item.$original.price / 100;
        return {
          $loopState__temp2: $loopState__temp2,
          $original: item.$original
        };
      });
      var loopArray1 = rightData.map(function (item, index) {
        item = {
          $original: (0, _index.internal_get_original)(item)
        };
        var $loopState__temp4 = _this7.isSecKillProduct(item.$original.is_limited_sale) ? item.$original.price / 100 : item.$original.group_price ? item.$original.group_price / 100 : item.$original.price / 100;
        return {
          $loopState__temp4: $loopState__temp4,
          $original: item.$original
        };
      });
      var loopArray2 = this.__state.tab === 0 ? this.__state.seriesP.map(function (e) {
        e = {
          $original: (0, _index.internal_get_original)(e)
        };
        var $loopState__temp9 = _this7.__state.tab === 0 ? (0, _index4.default)('method', {
          active: _this7.__state.serie === e.$original
        }) : null;
        return {
          $loopState__temp9: $loopState__temp9,
          $original: e.$original
        };
      }) : [];
      Object.assign(this.__state, {
        anonymousState__temp5: anonymousState__temp5,
        anonymousState__temp6: anonymousState__temp6,
        anonymousState__temp7: anonymousState__temp7,
        anonymousState__temp10: anonymousState__temp10,
        anonymousState__temp11: anonymousState__temp11,
        anonymousState__temp12: anonymousState__temp12,
        anonymousState__temp13: anonymousState__temp13,
        anonymousState__temp14: anonymousState__temp14,
        anonymousState__temp15: anonymousState__temp15,
        anonymousState__temp16: anonymousState__temp16,
        anonymousState__temp17: anonymousState__temp17,
        loopArray0: loopArray0,
        loopArray1: loopArray1,
        loopArray2: loopArray2,
        winer: winer,
        cart: cart
      });
      return this.__state;
    }
  }]);

  return waterfall;
}(_index.Component), _class.properties = {}, _class.$$events = ["toLink", "addCart", "handleTabClick", "handleSerieClick", "handleSizeClick"], _class.defaultProps = {}, _temp2);
exports.default = waterfall;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(waterfall));