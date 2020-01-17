"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _dec, _dec2, _class, _class2, _temp2;

var _action = require("../../store/home/action.js");

var _index = require("../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = require("../../npm/@tarojs/redux/index.js");

var _index4 = require("../../npm/classnames/index.js");

var _index5 = _interopRequireDefault(_index4);

var _withSare = require("../../utils/withSare.js");

var _withSare2 = _interopRequireDefault(_withSare);

var _api = require("../../service/api.js");

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var camp2 = "/assets/img/camp2.jpg";
var iconCS = "/assets/images/icon-cs_05.png";
var down = "/assets/down.png";

var zudui = "/assets/zudui.png";
var imgLucky = "/assets/lucky@2x.png";
var imgSunray = "/assets/sunray@2x.png";

// @pageInit()
var Index = (_dec = (0, _withSare2.default)(), _dec2 = (0, _index3.connect)(function (_ref) {
  var idData = _ref.idData;
  return {
    bannerArr: idData.bannerList,
    cataArr: idData.cataList
  };
}, function (dispatch) {
  return {
    dispatchGetBanner: function dispatchGetBanner() {
      dispatch((0, _action.getBanner)());
    },
    dispatchGetCatalog: function dispatchGetCatalog() {
      dispatch((0, _action.getCatalog)());
    }
  };
}), _dec(_class = _dec2(_class = (_temp2 = _class2 = function (_BaseComponent) {
  _inherits(Index, _BaseComponent);

  function Index() {
    var _ref2;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref2, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "anonymousState__temp3", "anonymousState__temp4", "loopArray0", "loopArray1", "loopArray2", "loopArray3", "loopArray4", "loopArray5", "loopArray6", "sortBannerArr", "_params", "$router", "imgSunray", "imgLucky", "zudui", "down", "iconCS", "camp2", "cata1Goods", "cata2Goods", "cata5Goods", "dialogs", "showLuckyMoney", "showLuckyMoneySavedTip", "mid", "screenWidth", "posa", "dispatchGetCatalog", "__fn_call", "bannerArr", "cataArr"], _this.config = {
      navigationBarTitleText: '好奇官方精品商城'
    }, _this.state = {
      dialogs: false,
      showLuckyMoney: false,
      showLuckyMoneySavedTip: false,
      mid: [],
      screenWidth: _index2.default.getSystemInfoSync().screenWidth,
      posa: {
        position: 'relative'
      }
    }, _this.anonymousFunc0Array = [], _this.anonymousFunc1Array = [], _this.anonymousFunc7Array = [], _this.anonymousFunc8Array = [], _this.anonymousFunc9Array = [], _this.anonymousFunc10Array = [], _this.anonymousFunc11Array = [], _this.anonymousFunc12Array = [], _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Index.prototype.__proto__ || Object.getPrototypeOf(Index.prototype), "_constructor", this).call(this, props);

      this.app = getApp();
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var paths = this.$router.path;
      var link = paths.substr(1);
      var that = this;
      _api2.default.get('api/page_tmp', {
        page: link
      }).then(function (res) {
        if (res.code == 20000) {
          that.setState({
            mid: res.data
          });
        }
      });

      var dispatchGetCatalog = this.props.dispatchGetCatalog;

      dispatchGetCatalog();
    }
  }, {
    key: "componentDidShow",
    value: function componentDidShow() {
      // console.log(
      //   `#componentDidShow 优惠券发放/检测是否已开展过：${this.state.couponChecked}`
      // )

      var that = this;
      var coupon = this.$router.params.coupon;

      // if (this.state.couponChecked) {

      _api2.default.get('api/validation', {
        id: coupon
      }).then(function (rsp) {
        console.log("#componentDidShow \u5DF2\u7ECF\u9886\u53D6\u8FC7\u4F18\u60E0\u5238\uFF0C\u4F18\u60E0\u5238\u662F\u5426\u6709\u6548\uFF1A" + rsp.data.status);

        rsp.data.status === true && that.setState({
          showLuckyMoneySavedTip: true
        });
      });
      // }
    }
  }, {
    key: "componentDidHide",
    value: function componentDidHide() {
      this.timeout1 && clearTimeout(this.timeout1);
      this.timeout2 && clearTimeout(this.timeout2);

      this.setState({
        showLuckyMoney: false,
        showLuckyMoneySavedTip: false
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.timeout1 && clearTimeout(this.timeout1);
      this.timeout2 && clearTimeout(this.timeout2);
    }
  }, {
    key: "openDia",
    value: function openDia() {
      this.app.km.track('tjxcx', null);

      this.setState({
        dialogs: true
      });
    }
  }, {
    key: "switchCase",
    value: function switchCase(_ref3) {
      var cases = _ref3.cases,
          pivot = _ref3.pivot,
          fallback = _ref3.fallback;

      var isEffectivePivot = Object.keys(cases).includes(pivot);

      if (!isEffectivePivot && this.isFunction(fallback)) {
        return fallback();
      }

      return cases[pivot]();
    }
  }, {
    key: "isFunction",
    value: function isFunction(functionToCheck) {
      return functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';
    }
  }, {
    key: "postFormIdInfo",
    value: function postFormIdInfo(fid) {
      _api2.default.post('api/form', {
        form_id: fid
      }).then(function (res) {
        console.log(res);
      });
    }
  }, {
    key: "onTapSwiperItem",
    value: function onTapSwiperItem(type, gid, child, bid) {
      this.app.km.track('indexbanner_banner' + bid, null);

      setTimeout(function () {
        _index2.default.setStorage({ key: 'webPath', data: gid });
        if (type == 'link') {
          _index2.default.navigateTo({
            url: "../webView/index?src_mini_openid=null"
          });
        } else if (type == 'mini-program') {
          if (gid == '/pages/home/index' || gid == '/pages/user/index' || gid == '/pages/all/index' || gid == '/pages/bulk/index') {
            _index2.default.switchTab({
              url: gid
            });
          } else {
            _index2.default.navigateTo({
              url: gid
            });
          }
        } else if (gid) {
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
      }, 500);
    }
  }, {
    key: "onClickGoodItem",
    value: function onClickGoodItem(gid) {
      this.app.km.track('productlist_' + gid, null);
      _index2.default.navigateTo({
        url: '../detail/index?gid=' + gid
      });
    }

    // 客服埋点

  }, {
    key: "clickCs",
    value: function clickCs() {
      this.app.km.track('customerservice', null);
    }
  }, {
    key: "onTabItemTap",
    value: function onTabItemTap(item) {
      var arrTrack = ['groupnews', 'allgd', 'index', 'shoppingcart', 'personal'];
      this.app.km.track(arrTrack[item.index], null);
    }
  }, {
    key: "onCloseDia",
    value: function onCloseDia() {
      this.app.km.track('scxcx_know', null);
      this.setState({
        dialogs: false
      });
    }
  }, {
    key: "linkPage",
    value: function linkPage() {
      this.app.km.track('faq', null);
      var Taros = _index2.default;
      setTimeout(function () {
        Taros.navigateTo({
          url: '../tempDetail/index'
        });
      }, 500);
    }

    // 控制body不滚动

  }, {
    key: "onChangeStaus",
    value: function onChangeStaus(data) {
      if (data == 1) {
        this.setState({
          posa: {
            position: 'fixed'
          }
        });
      } else {
        this.setState({
          posa: {
            position: 'relative'
          }
        });
      }
    }
  }, {
    key: "_createData",
    value: function _createData() {
      var _this2 = this;

      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __runloopRef = arguments[2];
      var $router = this.$router;

      var _params = this.$router.params;

      var that = this;
      var _props = this.__props,
          bannerArr = _props.bannerArr,
          cataArr = _props.cataArr;


      var sortBannerArr = bannerArr.sort(function (a, b) {
        return a.sort - b.sort;
      });

      var cata1Goods = cataArr['殿堂级产品系列'] ? cataArr['殿堂级产品系列'] : [];
      var cata2Goods = cataArr['畅销口碑系列'] ? cataArr['畅销口碑系列'] : [];
      var cata3Goods = cataArr['好奇棉柔巾'] ? cataArr['好奇棉柔巾'] : [];
      var cata4Goods = cataArr['好奇湿巾'] ? cataArr['好奇湿巾'] : [];
      var cata5Goods = cata3Goods.concat(cata4Goods);

      console.log("\u5C4F\u5E55\u5BBD\u5EA6\uFF1A" + this.__state.screenWidth);

      var anonymousState__temp = (0, _index.internal_inline_style)(this.__state.posa);
      var anonymousState__temp2 = (0, _index5.default)('lucky-money-saved', {
        hide: !this.__state.showLuckyMoneySavedTip
      });
      var anonymousState__temp3 = (0, _index.internal_inline_style)(function () {
        return _this2.switchCase({
          cases: {
            320: function _() {
              return {
                left: '83.5%'
              };
            },
            360: function _() {
              return {
                left: '81%'
              };
            },
            375: function _() {
              return {
                left: '80%'
              };
            },
            393: function _() {
              return {
                left: '80%'
              };
            },
            411: function _() {
              return {
                left: '77%'
              };
            },
            412: function _() {
              return {
                left: '77%'
              };
            },
            414: function _() {
              return {
                left: '77%'
              };
            }
          },
          pivot: _this2.__state.screenWidth,
          fallback: function fallback() {
            return {
              left: '80%'
            };
          }
        });
      }());
      var anonymousState__temp4 = (0, _index5.default)('lucky-money-tadda', {
        hide: !this.__state.showLuckyMoney
      });

      this.anonymousFunc2 = function (e) {
        e.detail.formId && that.postFormIdInfo(e.detail.formId);
      };

      this.anonymousFunc3 = function (e) {
        e.detail.formId && that.postFormIdInfo(e.detail.formId);
      };

      this.anonymousFunc4 = function (e) {
        console.log("\u8868\u5355\u88AB\u63D0\u4EA4\uFF1A" + e.detail.formId);
        e.detail.formId && _this2.postFormIdInfo(e.detail.formId);
      };

      this.anonymousFunc5 = function (e) {
        e.detail.formId && _this2.postFormIdInfo(e.detail.formId);
      };

      this.anonymousFunc6 = function () {
        that.app.km.track('xxhw', null);
        _index2.default.navigateTo({
          url: '../stars/index'
        });
      };

      var loopArray0 = sortBannerArr.map(function (b, __index0) {
        b = {
          $original: (0, _index.internal_get_original)(b)
        };

        _this2.anonymousFunc0Array[__index0] = function (e) {
          e.detail.formId && that.postFormIdInfo(e.detail.formId);
        };

        _this2.anonymousFunc1Array[__index0] = function (e) {
          e.stopPropagation();
          that.onTapSwiperItem(b.$original.type, b.$original.associated, b.$original.children, b.$original.id);
        };

        return {
          $original: b.$original
        };
      });
      var loopArray1 = cata1Goods.map(function (g, __index7) {
        g = {
          $original: (0, _index.internal_get_original)(g)
        };
        g = {
          $original: (0, _index.internal_get_original)(g.$original)
        };

        _this2.anonymousFunc7Array[__index7] = function (e) {
          e.detail.formId && that.postFormIdInfo(e.detail.formId);
        };

        _this2.anonymousFunc8Array[__index7] = function (e) {
          e.stopPropagation();
          _this2.onClickGoodItem(g.$original.goods_id);
        };

        var $loopState__temp6 = g.$original.lowest_price ? Math.floor(g.$original.lowest_price) / 100 : 0;
        var $loopState__temp8 = g.$original.price ? Math.floor(g.$original.price) / 100 : 0;
        return {
          $loopState__temp6: $loopState__temp6,
          $loopState__temp8: $loopState__temp8,
          $original: g.$original
        };
      });
      var loopArray2 = !!cata1Goods ? cata1Goods.map(function (g, __index7) {
        g = {
          $original: (0, _index.internal_get_original)(g)
        };
        g = {
          $original: (0, _index.internal_get_original)(g.$original)
        };

        _this2.anonymousFunc7Array[__index7] = function (e) {
          e.detail.formId && that.postFormIdInfo(e.detail.formId);
        };

        _this2.anonymousFunc8Array[__index7] = function (e) {
          e.stopPropagation();_this2.onClickGoodItem(g.$original.goods_id);
        };

        var $loopState__temp6 = g.$original.lowest_price ? Math.floor(g.$original.lowest_price) / 100 : 0;
        var $loopState__temp8 = g.$original.price ? Math.floor(g.$original.price) / 100 : 0;
        return {
          $loopState__temp6: $loopState__temp6,
          $loopState__temp8: $loopState__temp8,
          $original: g.$original
        };
      }) : [];
      var loopArray3 = cata2Goods.map(function (g, __index9) {
        g = {
          $original: (0, _index.internal_get_original)(g)
        };
        g = {
          $original: (0, _index.internal_get_original)(g.$original)
        };

        _this2.anonymousFunc9Array[__index9] = function (e) {
          e.detail.formId && that.postFormIdInfo(e.detail.formId);
        };

        _this2.anonymousFunc10Array[__index9] = function (e) {
          e.stopPropagation();
          _this2.onClickGoodItem(g.$original.goods_id);
        };

        var $loopState__temp10 = g.$original.lowest_price ? Math.floor(g.$original.lowest_price) / 100 : 0;
        var $loopState__temp12 = g.$original.price ? Math.floor(g.$original.price) / 100 : 0;
        return {
          $loopState__temp10: $loopState__temp10,
          $loopState__temp12: $loopState__temp12,
          $original: g.$original
        };
      });
      var loopArray4 = !!cata2Goods ? cata2Goods.map(function (g, __index9) {
        g = {
          $original: (0, _index.internal_get_original)(g)
        };
        g = {
          $original: (0, _index.internal_get_original)(g.$original)
        };

        _this2.anonymousFunc9Array[__index9] = function (e) {
          e.detail.formId && that.postFormIdInfo(e.detail.formId);
        };

        _this2.anonymousFunc10Array[__index9] = function (e) {
          e.stopPropagation();_this2.onClickGoodItem(g.$original.goods_id);
        };

        var $loopState__temp10 = g.$original.lowest_price ? Math.floor(g.$original.lowest_price) / 100 : 0;
        var $loopState__temp12 = g.$original.price ? Math.floor(g.$original.price) / 100 : 0;
        return {
          $loopState__temp10: $loopState__temp10,
          $loopState__temp12: $loopState__temp12,
          $original: g.$original
        };
      }) : [];
      var loopArray5 = cata5Goods.map(function (g, __index11) {
        g = {
          $original: (0, _index.internal_get_original)(g)
        };
        g = {
          $original: (0, _index.internal_get_original)(g.$original)
        };

        _this2.anonymousFunc11Array[__index11] = function (e) {
          e.detail.formId && that.postFormIdInfo(e.detail.formId);
        };

        _this2.anonymousFunc12Array[__index11] = function (e) {
          e.stopPropagation();
          _this2.onClickGoodItem(g.$original.goods_id);
        };

        var $loopState__temp14 = g.$original.lowest_price ? Math.floor(g.$original.lowest_price) / 100 : 0;
        var $loopState__temp16 = g.$original.price ? Math.floor(g.$original.price) / 100 : 0;
        return {
          $loopState__temp14: $loopState__temp14,
          $loopState__temp16: $loopState__temp16,
          $original: g.$original
        };
      });
      var loopArray6 = !!cata5Goods ? cata5Goods.map(function (g, __index11) {
        g = {
          $original: (0, _index.internal_get_original)(g)
        };
        g = {
          $original: (0, _index.internal_get_original)(g.$original)
        };

        _this2.anonymousFunc11Array[__index11] = function (e) {
          e.detail.formId && that.postFormIdInfo(e.detail.formId);
        };

        _this2.anonymousFunc12Array[__index11] = function (e) {
          e.stopPropagation();_this2.onClickGoodItem(g.$original.goods_id);
        };

        var $loopState__temp14 = g.$original.lowest_price ? Math.floor(g.$original.lowest_price) / 100 : 0;
        var $loopState__temp16 = g.$original.price ? Math.floor(g.$original.price) / 100 : 0;
        return {
          $loopState__temp14: $loopState__temp14,
          $loopState__temp16: $loopState__temp16,
          $original: g.$original
        };
      }) : [];
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        anonymousState__temp3: anonymousState__temp3,
        anonymousState__temp4: anonymousState__temp4,
        loopArray0: loopArray0,
        loopArray1: loopArray1,
        loopArray2: loopArray2,
        loopArray3: loopArray3,
        loopArray4: loopArray4,
        loopArray5: loopArray5,
        loopArray6: loopArray6,
        sortBannerArr: sortBannerArr,
        _params: _params,
        $router: $router,
        imgSunray: imgSunray,
        imgLucky: imgLucky,
        zudui: zudui,
        down: down,
        iconCS: iconCS,
        camp2: camp2,
        cata1Goods: cata1Goods,
        cata2Goods: cata2Goods,
        cata5Goods: cata5Goods
      });
      return this.__state;
    }
  }, {
    key: "anonymousFunc0",
    value: function anonymousFunc0(__index0, e) {
      ;
      this.anonymousFunc0Array[__index0] && this.anonymousFunc0Array[__index0](e);
    }
  }, {
    key: "anonymousFunc1",
    value: function anonymousFunc1(__index0, e) {
      e.stopPropagation();
      this.anonymousFunc1Array[__index0] && this.anonymousFunc1Array[__index0](e);
    }
  }, {
    key: "anonymousFunc2",
    value: function anonymousFunc2(e) {
      ;
    }
  }, {
    key: "anonymousFunc3",
    value: function anonymousFunc3(e) {
      ;
    }
  }, {
    key: "anonymousFunc4",
    value: function anonymousFunc4(e) {
      ;
    }
  }, {
    key: "anonymousFunc5",
    value: function anonymousFunc5(e) {
      ;
    }
  }, {
    key: "anonymousFunc6",
    value: function anonymousFunc6(e) {
      ;
    }
  }, {
    key: "anonymousFunc7",
    value: function anonymousFunc7(__index7, e) {
      ;
      this.anonymousFunc7Array[__index7] && this.anonymousFunc7Array[__index7](e);
    }
  }, {
    key: "anonymousFunc8",
    value: function anonymousFunc8(__index7, e) {
      e.stopPropagation();
      this.anonymousFunc8Array[__index7] && this.anonymousFunc8Array[__index7](e);
    }
  }, {
    key: "anonymousFunc9",
    value: function anonymousFunc9(__index9, e) {
      ;
      this.anonymousFunc9Array[__index9] && this.anonymousFunc9Array[__index9](e);
    }
  }, {
    key: "anonymousFunc10",
    value: function anonymousFunc10(__index9, e) {
      e.stopPropagation();
      this.anonymousFunc10Array[__index9] && this.anonymousFunc10Array[__index9](e);
    }
  }, {
    key: "anonymousFunc11",
    value: function anonymousFunc11(__index11, e) {
      ;
      this.anonymousFunc11Array[__index11] && this.anonymousFunc11Array[__index11](e);
    }
  }, {
    key: "anonymousFunc12",
    value: function anonymousFunc12(__index11, e) {
      e.stopPropagation();
      this.anonymousFunc12Array[__index11] && this.anonymousFunc12Array[__index11](e);
    }
  }]);

  return Index;
}(_index.Component), _class2.properties = {
  "dispatchGetCatalog": {
    "type": null,
    "value": null
  },
  "__fn_call": {
    "type": null,
    "value": null
  },
  "bannerArr": {
    "type": null,
    "value": null
  },
  "cataArr": {
    "type": null,
    "value": null
  }
}, _class2.$$events = ["anonymousFunc0", "anonymousFunc1", "onChangeStaus", "anonymousFunc2", "openDia", "onCloseDia", "anonymousFunc3", "clickCs", "anonymousFunc4", "linkPage", "anonymousFunc5", "anonymousFunc6", "anonymousFunc7", "anonymousFunc8", "anonymousFunc9", "anonymousFunc10", "anonymousFunc11", "anonymousFunc12"], _temp2)) || _class) || _class);
exports.default = Index;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Index, true));