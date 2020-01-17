"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

// import top from '../../../assets/images/top.png'


var _index = require("../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _api = require("../../service/api.js");

var _api2 = _interopRequireDefault(_api);

var _message = require("../../utils/message.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SwiperBanner = (_temp2 = _class = function (_BaseComponent) {
  _inherits(SwiperBanner, _BaseComponent);

  function SwiperBanner() {
    var _ref;

    var _temp, _this2, _ret;

    _classCallCheck(this, SwiperBanner);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = SwiperBanner.__proto__ || Object.getPrototypeOf(SwiperBanner)).call.apply(_ref, [this].concat(args))), _this2), _this2.$usedState = ["anonymousState__temp", "open", "total", "closes", "lists", "total_discount", "data", "path", "__fn_onChangeStaus"], _this2.$$refs = [], _temp), _possibleConstructorReturn(_this2, _ret);
  }

  _createClass(SwiperBanner, [{
    key: "_constructor",
    value: function _constructor() {
      _get(SwiperBanner.prototype.__proto__ || Object.getPrototypeOf(SwiperBanner.prototype), "_constructor", this).apply(this, arguments);
      this.state = {
        total: 0,
        lists: [],
        total_discount: 0,
        open: false
      };
    }
  }, {
    key: "componentDidShow",
    value: function componentDidShow() {
      this.ajaxData();
    }
  }, {
    key: "filter",
    value: function filter(str) {
      // 特殊字符转义
      str += ''; // 隐式转换
      str = str.replace(/%/g, '%25');
      str = str.replace(/\+/g, '%2B');
      str = str.replace(/ /g, '%20');
      str = str.replace(/\//g, '%2F');
      str = str.replace(/\?/g, '%3F');
      str = str.replace(/&/g, '%26');
      str = str.replace(/\=/g, '%3D');
      str = str.replace(/#/g, '%23');
      return str;
    }
  }, {
    key: "formateObjToParamStr",
    value: function formateObjToParamStr(paramObj) {
      var sdata = [];
      for (var attr in paramObj) {
        sdata.push(attr + "=" + this.filter(paramObj[attr]));
      }
      return sdata.join('&');
    }
  }, {
    key: "ajaxData",
    value: function ajaxData() {
      var _this3 = this;

      var _props$data = this.props.data,
          gid = _props$data.gid,
          wx_openid = _props$data.wx_openid;
      var _props$path = this.props.path,
          path = _props$path.path,
          params = _props$path.params;

      var parseData = this.formateObjToParamStr(params);
      var dataPath = path + "?" + parseData;
      dataPath = dataPath.substr(1);

      var _this = this;
      _api2.default.post('api/coupon', {
        page: dataPath
      }).then(function (res) {
        // console.warn(res)
        if (res.code == 20000) {
          // console.warn(res.data.coupon, res.data.total, 'sssss')
          var app = getApp();
          /* eslint-enable */
          if (!(res.data.total == 0)) {
            app.km.track('Window-coupon', null);
            _this3.__triggerPropsFn("onChangeStaus", [null].concat([1]));
          }
          _this.setState({
            total: res.data.total,
            lists: res.data.coupon,
            total_discount: res.data.total_discount
          });
        }
      });
    }

    //立即使用

  }, {
    key: "closeDia",
    value: function closeDia() {
      var app = getApp();
      /* eslint-enable */
      app.km.track('ljsy', null);
      this.setState({
        total: 0
      });
      this.__triggerPropsFn("onChangeStaus", [null].concat([]));
      // let that = this
      // console.warn(this.props.mid, '关闭')
      // 订阅消息执行事件
      // wx.requestSubscribeMessage({
      //   tmplIds: this.props.mid,
      //   // tmplIds: ['xlh6P0BPMQybVbxb1vyXB4762VprP2_C9BEr-3KcSqk'],
      //   success(res) {
      //     console.log('允许使用订阅消息:')
      //     console.warn(res)
      //     let arr = [];
      //     let brr = [];
      //     for(let k in res) {
      //       console.warn(k,'asdas')
      //       if(res[k] == 'reject') {
      //         brr.push(res[k] )
      //       }
      //       if(k !== 'errCode') {
      //         arr.push({
      //           key: k,
      //           val: res[k]
      //         })
      //       }
      //     }
      //     // if(arr.length !== 0 && (arr.length == brr.length) ) {
      //     //   if(arr[0].val == 'reject') {
      //     //     that.setState({
      //     //       open: true
      //     //     })
      //     //   }
      //     // }
      //     console.warn(brr, '看返回')
      //     if(brr.length > 0) {
      //       const app = getApp()
      //       /* eslint-enable */
      //       app.km.track('Window-dytx', null)
      //       that.setState({
      //         open: true
      //       })
      //     }
      //     if(res.errCode == 20004) return false;
      //     console.warn(arr,'报错')
      //     if(arr.length !== 0) {
      //       API.post('api/subscribe', {
      //         sub_data: JSON.stringify(arr)
      //       }).then(res => {
      //         if (res.code == 20000) {
      //         }
      //       })
      //     }
      //   },

      //   fail(res) {
      //     console.log('fail  失败:')
      //     console.log(res)
      //     const app = getApp()
      //     /* eslint-enable */
      //     app.km.track('Window-dytx', null)
      //     that.setState({
      //       open: true
      //     })
      //   },

      //   complete(res) {
      //     console.log('complete  调用完成：')
      //     console.warn('complete', res)
      //     if(res.errCode == 20004) {
      //       console.log('fail  失败:')
      //       that.setState({
      //         open: true
      //       })
      //     }
      //   }
      // })
    }
  }, {
    key: "makesz",
    value: function makesz() {
      var app = getApp();
      /* eslint-enable */
      app.km.track('yhq_dytx', null);
      (0, _message.makeSes)();
    }
  }, {
    key: "close",
    value: function close() {
      this.setState({
        open: false
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
          lists = _state.lists,
          total = _state.total,
          total_discount = _state.total_discount,
          open = _state.open;
      // const { mid } = this.props.data
      // console.warn(mid, '555')

      var styleDeta = lists && lists.length == 1 ? 'background:url(https://mpmall.huggiesapp.cn/storage/wxmall/share/curtain2.png) no-repeat;background-size: 100% auto;' : 'background:url(https://mpmall.huggiesapp.cn/storage/wxmall/share/curtain.png) no-repeat;background-size: 100% auto;';
      var closes = lists && lists.length == 1 ? 'close2' : 'close';

      this.anonymousFunc0 = function (e) {
        e.stopPropagation();
      };

      var anonymousState__temp = (0, _index.internal_inline_style)(styleDeta);
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        closes: closes
      });
      return this.__state;
    }
  }, {
    key: "anonymousFunc0",
    value: function anonymousFunc0(e) {
      e.stopPropagation();
    }
  }]);

  return SwiperBanner;
}(_index.Component), _class.properties = {
  "data": {
    "type": null,
    "value": null
  },
  "path": {
    "type": null,
    "value": null
  },
  "__fn_onChangeStaus": {
    "type": null,
    "value": null
  }
}, _class.$$events = ["anonymousFunc0", "close", "makesz", "closeDia"], _class.defaultProps = {}, _temp2);

// onTouchMove={e => {
//   e.stopPropagation()
// }}


exports.default = SwiperBanner;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(SwiperBanner));