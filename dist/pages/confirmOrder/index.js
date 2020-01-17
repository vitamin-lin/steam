"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _dec, _dec2, _class, _class2, _temp2; /* eslint-disable */


// import activelocalIcon from '@assets/images/icon_local_active.png'
/* eslint-enable */

var _md = require("../../npm/js-md5/src/md5.js");

var _md2 = _interopRequireDefault(_md);

var _index = require("../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = require("../../npm/@tarojs/redux/index.js");

var _action = require("../../store/confirmOrder/action.js");

var _gdt = require("../../utils/gdt.js");

var _strUtil = require("../../utils/strUtil.js");

var _api = require("../../service/api.js");

var _api2 = _interopRequireDefault(_api);

var _withSare = require("../../utils/withSare.js");

var _withSare2 = _interopRequireDefault(_withSare);

var _global = require("../../utils/global.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var right = "/assets/right.png";

var atoken = '';

/**
 * ConfirmOrder 确认订单支付流程页面
 */
var ConfirmOrder = (_dec = (0, _withSare2.default)(), _dec2 = (0, _index3.connect)(function (_ref) {
  var cOrder = _ref.cOrder;
  return {
    // payInfo: cOrder.pay_info,
    payStatus: cOrder.pay_status,
    userAddrss: cOrder.user_address,
    tPrice: cOrder.totalPrice,
    userGoods: cOrder.userGoods,
    userBuyType: cOrder.buyType,
    errTip: cOrder.errDialogTip
  };
}, function (dispatch) {
  return {
    dispatchPostOrderInfo: function dispatchPostOrderInfo(payInfo) {
      dispatch((0, _action.postOrderInfo)(payInfo));
    },
    dispatchGetAddress: function dispatchGetAddress(ainfo) {
      dispatch((0, _action.getAddress)(ainfo));
    },
    dispatchGoodsDyncPrice: function dispatchGoodsDyncPrice(goods, province, role, groupId, coupon_id, useCoupon) {
      dispatch((0, _action.getGoodsDyncPrice)(goods, province, role, groupId, coupon_id, useCoupon));
    },
    dispatchGetAllGoodInfo: function dispatchGetAllGoodInfo(arrGid, arrGNum) {
      dispatch((0, _action.getAllGoodByArrGid)(arrGid, arrGNum));
    },
    dispatchClearTotalPrice: function dispatchClearTotalPrice() {
      dispatch((0, _action.showTotalPrice)({
        total: 0,
        logistics_free: false,
        logistics_fee: 0
      }));
    },
    dispatchChangeBuyType: function dispatchChangeBuyType(t) {
      dispatch((0, _action.changeBuyType)(t));
    },
    dispatchShowErrDialog: function dispatchShowErrDialog(msg) {
      // console.log('props dispatchShowErrDialog ')
      (0, _action.showErrDialog)(msg);
    },
    dispatchPostFormIdInfo: function dispatchPostFormIdInfo(fid) {
      (0, _action.postFormIdInfo)(fid);
    },
    dispatchChangePayStatus: function dispatchChangePayStatus(ps) {
      dispatch((0, _action.changePayStatus)(ps));
    }
  };
}), _dec(_class = _dec2(_class = (_temp2 = _class2 = function (_BaseComponent) {
  _inherits(ConfirmOrder, _BaseComponent);

  function ConfirmOrder() {
    var _ref2;

    var _temp, _this2, _ret;

    _classCallCheck(this, ConfirmOrder);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref2 = ConfirmOrder.__proto__ || Object.getPrototypeOf(ConfirmOrder)).call.apply(_ref2, [this].concat(args))), _this2), _this2.$usedState = ["anonymousState__temp3", "anonymousState__temp4", "anonymousState__temp5", "anonymousState__temp6", "anonymousState__temp7", "anonymousState__temp8", "anonymousState__temp9", "anonymousState__temp10", "anonymousState__temp11", "loopArray0", "goodArr", "userAddrss", "limt", "goodArrLeg", "selectable", "right", "InputVal", "usealbeCouponCBox", "tPrice", "isIphoneX", "coupon_list", "visibleCouponList", "errTip", "alert", "totalGNum", "mid", "group_code", "pageState", "checks", "erroTip", "formId", "login", "checkCoupon", "userSelectCoupon", "isToastVisible", "toastText", "toastType", "payStatus", "dispatchChangePayStatus", "userGoods", "dispatchGoodsDyncPrice", "dispatchGetAllGoodInfo", "dispatchChangeBuyType", "dispatchClearTotalPrice", "userBuyType", "dispatchPostFormIdInfo", "dispatchGetAddress", "dispatchShowErrDialog"], _this2.config = {
      navigationBarTitleText: '确认订单'
    }, _this2.state = {
      mid: [], // 订阅消息
      group_code: '',
      pageState: 'none', // goPay, chooseAddress , chooseCoupon  页面状态，调用支付，地址选择等API时候，会重复调用onShow
      isIphoneX: 0,
      alert: false, // 地址包含先生小姐 的提示
      checks: undefined, // 定制礼品 check
      // selectable: false, // 定制礼品选项是否可以选择 通过 API ：api/fg_selectable 获取是否有首单好礼资格
      InputVal: '', // 定制礼品 文字
      erroTip: '', // 定制礼品 文字 校验错误提示信息
      formId: '', // formId
      login: true, // 授权了为true
      visibleCouponList: false, // 选择优惠券列表 prompt
      checkCoupon: undefined, // 是否选择 优惠券选项
      userSelectCoupon: null // 用户选择的优惠券
    }, _this2.$$refs = [], _temp), _possibleConstructorReturn(_this2, _ret);
  }

  _createClass(ConfirmOrder, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(ConfirmOrder.prototype.__proto__ || Object.getPrototypeOf(ConfirmOrder.prototype), "_constructor", this).call(this, props);
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {}
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

      this.setState({
        isIphoneX: (0, _global.getGlobalData)('isIphoneX') ? (0, _global.getGlobalData)('isIphoneX') : 0
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {}
  }, {
    key: "componentDidShow",
    value: function componentDidShow() {
      // this.member()
      var pageState = this.state.pageState;
      var _props = this.props,
          payStatus = _props.payStatus,
          dispatchChangePayStatus = _props.dispatchChangePayStatus;

      console.log('confirmOrder componentDidShow');
      console.log(payStatus);

      if (payStatus == 'req_pay' && pageState == 'goPay') {
        dispatchChangePayStatus('no');
      }
      if (pageState == 'goPay' || pageState == 'chooseAddress' || pageState == 'chooseCoupon') {
        this.setState({
          pageState: 'none'
        });
        return;
      }

      this.getAccessToken();

      var path = this.$router.params;

      if (path && path.from && path.from == 'detail') {
        var type = path.type,
            gid = path.gid,
            gcode = path.gcode;

        if (type == 'createTeam') {
          this.createTeamBuy(gid);
        } else if (type == 'joinTeam') {
          this.joinTeamBuy(gid, gcode);
        } else {
          this.selfBuyOneGood(gid);
        }
        /* eslint-disable */
        var app = getApp();
        /* eslint-enable */
        app.km.track('page_info_' + gid);
      } else {
        this.selfBuyMutipleGood();
      }
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

    // 授权btn埋点

  }, {
    key: "submitTrack",
    value: function submitTrack() {
      var _props2 = this.props,
          userAddrss = _props2.userAddrss,
          tPrice = _props2.tPrice,
          goodArr = _props2.userGoods;
      var _state = this.state,
          InputVal = _state.InputVal,
          checks = _state.checks;
      var selectable = tPrice.selectable;

      var isTaus = false;
      goodArr.map(function (e) {
        if (e.curType.goodInfo.is_limited_sale == 1) {
          isTaus = true;
        }
      });
      // if (!login) {
      //   this.track('submit')
      // }
      if (userAddrss.provinceName == '') {
        _index2.default.showToast({
          title: '请先填写地址哦',
          icon: 'none'
        });
        return false;
      } else if (selectable && (checks || (0, _strUtil.isUndefined)(checks)) && InputVal == '') {
        // 单个秒杀的不记录
        if (!(isTaus && goodArr.length == 1)) {
          _index2.default.showToast({
            title: '请输入宝宝名字再提交喔',
            icon: 'none'
          });
        }
      }
    }

    // ================分割线

  }, {
    key: "getAccessToken",
    value: function getAccessToken() {
      var user = 'AKA';
      var key = 'wqL!moLyV*nM4mtoFK72';
      var unixtime = Math.round(new Date().getTime() / 1000);
      var token = (0, _md2.default)("AKAwqL!moLyV*nM4mtoFK72" + unixtime);
      var aturl = 'https://www.huggiesapp.cn/api/token.php';
      return _index2.default.request({
        url: aturl,
        data: { user: user, unixtime: unixtime, token: token },
        method: 'GET',
        complete: function complete(p) {
          var res = p.data;
          if (res.errcode == 0) {
            atoken = res.rst;
          }
        }
      });
    }
    /**
     * 重新获取 当前页面订单 中商品的价格，折扣，运费信息
     * @param  {Object} updateData  变动的数据对象{updateKey, updateValue},
     */

  }, {
    key: "updateOrderGoodsDyncPrice",
    value: function updateOrderGoodsDyncPrice(updateData) {
      var _state2 = this.state,
          group_code = _state2.group_code,
          checkCoupon = _state2.checkCoupon;
      var _props3 = this.props,
          dispatchGoodsDyncPrice = _props3.dispatchGoodsDyncPrice,
          userAddrss = _props3.userAddrss,
          goodArr = _props3.userGoods;

      var provinceName = userAddrss.provinceName;
      var coupon_id = this.getCouponId();
      var role = this.getGroupInfo();
      var arrGoodInfo = goodArr.map(function (g) {
        var goodNum = g.goodNum,
            curType = g.curType;

        return {
          id: curType.id,
          amount: goodNum
        };
      });

      var lintUpdateKeys = ['arrGoodInfo', 'provinceName', 'role', 'group_code', 'coupon_id', 'useCoupon'];
      if (updateData) {
        var ukeys = Object.keys(updateData);
        console.log(ukeys);
        for (var c = 0; c < ukeys.length; c++) {
          var ukey = ukeys[c];
          if (lintUpdateKeys.includes(ukey)) {
            if (ukey == 'arrGoodInfo') {
              arrGoodInfo = updateData[ukey];
            } else if (ukey == 'provinceName') {
              provinceName = updateData[ukey];
            } else if (ukey == 'role') {
              role = updateData[ukey];
            } else if (ukey == 'group_code') {
              group_code = updateData[ukey];
            } else if (ukey == 'coupon_id') {
              coupon_id = updateData[ukey];
            } else if (ukey == 'useCoupon') {
              checkCoupon = updateData[ukey];
            }
          }
        }
      }
      if ((0, _strUtil.isUndefined)(checkCoupon)) {
        checkCoupon = -1;
      }

      dispatchGoodsDyncPrice(arrGoodInfo, provinceName, role, group_code, coupon_id, checkCoupon);
    }
    /**
     * 获取当前用户已选择的优惠券的 id,
     * 原来的逻辑是从 Storage 中获取，现在直接从 redux 中获取， tPrice,
     */

  }, {
    key: "getCouponId",
    value: function getCouponId() {
      var tPrice = this.props.tPrice;
      var coupon_id = tPrice.coupon_id,
          selectable = tPrice.selectable;
      var _state3 = this.state,
          userSelectCoupon = _state3.userSelectCoupon,
          checkCoupon = _state3.checkCoupon;

      if ((0, _strUtil.isUndefined)(checkCoupon) && !selectable || checkCoupon) {
        if (userSelectCoupon && userSelectCoupon.id >= 0) {
          return userSelectCoupon.id;
        } else {
          return parseInt(coupon_id);
        }
      } else {
        return 0;
      }
    }

    /**
     * 从详情页直接结算，购买单件商品
     * @param  {number} gid 商品id
     */

  }, {
    key: "selfBuyOneGood",
    value: function selfBuyOneGood(gid) {
      console.log('单独买');
      var _props4 = this.props,
          dispatchGetAllGoodInfo = _props4.dispatchGetAllGoodInfo,
          dispatchChangeBuyType = _props4.dispatchChangeBuyType,
          dispatchClearTotalPrice = _props4.dispatchClearTotalPrice,
          dispatchGoodsDyncPrice = _props4.dispatchGoodsDyncPrice,
          userAddrss = _props4.userAddrss;

      var arrGid = [gid];

      dispatchChangeBuyType('self');
      dispatchGetAllGoodInfo(arrGid, [{
        id: gid,
        numb: 1
      }]);
      dispatchClearTotalPrice();
      dispatchGoodsDyncPrice([{
        id: gid,
        amount: 1
      }], userAddrss.provinceName, 'self', '', '0', -1);
    }
    /**
     * 从购物车 购买多件商品
     */

  }, {
    key: "selfBuyMutipleGood",
    value: function selfBuyMutipleGood() {
      console.log('从购物车结算多样商品');
      var _props5 = this.props,
          dispatchGetAllGoodInfo = _props5.dispatchGetAllGoodInfo,
          dispatchChangeBuyType = _props5.dispatchChangeBuyType,
          dispatchClearTotalPrice = _props5.dispatchClearTotalPrice,
          dispatchGoodsDyncPrice = _props5.dispatchGoodsDyncPrice,
          userAddrss = _props5.userAddrss;

      _index2.default.getStorage({ key: 'orderList' }).then(function (res) {
        // console.log(res)
        if (res.errMsg == 'getStorage:ok') {
          var orderList = res.data;
          var arrGid = orderList.map(function (o) {
            return o.goods_id;
          });

          var app = getApp();
          app.km.track('page_info_' + arrGid.join(','));

          var arrGNumb = orderList.map(function (o) {
            return {
              id: o.goods_id,
              numb: o.number
            };
          });
          var a = orderList.map(function (o) {
            return {
              id: o.goods_id,
              amount: o.number
            };
          });
          // console.log(arrGid)
          dispatchChangeBuyType('cartMutiple');
          dispatchGetAllGoodInfo(arrGid, arrGNumb);
          dispatchClearTotalPrice();
          dispatchGoodsDyncPrice(a, userAddrss.provinceName, 'self', '', '0', -1);
        }
      });
    }
    // 创建团购

  }, {
    key: "createTeamBuy",
    value: function createTeamBuy(gid) {
      console.log('发起团购');
      var _props6 = this.props,
          dispatchGetAllGoodInfo = _props6.dispatchGetAllGoodInfo,
          dispatchChangeBuyType = _props6.dispatchChangeBuyType,
          dispatchClearTotalPrice = _props6.dispatchClearTotalPrice,
          dispatchGoodsDyncPrice = _props6.dispatchGoodsDyncPrice,
          userAddrss = _props6.userAddrss;

      var arrGid = [gid];

      dispatchChangeBuyType('createTeam');
      dispatchGetAllGoodInfo(arrGid, [{
        id: gid,
        numb: 1
      }]);
      dispatchClearTotalPrice();
      dispatchGoodsDyncPrice([{
        id: gid,
        amount: 1
      }], userAddrss.provinceName, 'sponsor', '', '0', -1);
    }

    // 参加别人的团购

  }, {
    key: "joinTeamBuy",
    value: function joinTeamBuy(gid, group_id) {
      console.log('参加他人的团购');
      var _props7 = this.props,
          dispatchGetAllGoodInfo = _props7.dispatchGetAllGoodInfo,
          dispatchChangeBuyType = _props7.dispatchChangeBuyType,
          dispatchClearTotalPrice = _props7.dispatchClearTotalPrice,
          dispatchGoodsDyncPrice = _props7.dispatchGoodsDyncPrice,
          userAddrss = _props7.userAddrss;

      var arrGid = [gid];
      var coupon_id = this.getCouponId();
      dispatchChangeBuyType('joinTeam');
      dispatchGetAllGoodInfo(arrGid, [{
        id: gid,
        numb: 1
      }]);
      dispatchClearTotalPrice();
      dispatchGoodsDyncPrice([{
        id: gid,
        amount: 1
      }], userAddrss.provinceName, 'participant', group_id, coupon_id, -1);
      this.setState({
        group_code: group_id
      });
    }
  }, {
    key: "showToastMsg",
    value: function showToastMsg(msg, type) {
      _index2.default.showToast({
        title: msg ? msg : '',
        icon: type ? type : 'none'
      });
    }
  }, {
    key: "onClickPayBtn",
    value: function onClickPayBtn(e, datas) {
      console.log('click pay btn');
      // this.track('submit')
      console.warn(e, '存储formID');
      this.setState({
        formId: e
      });
      console.warn(this.state.login);
      if (this.state.login == false) {
        return false;
      }if (datas == '') {
        this.track('submit');
      }

      var _props8 = this.props,
          userAddrss = _props8.userAddrss,
          userBuyType = _props8.userBuyType,
          tPrice = _props8.tPrice,
          payStatus = _props8.payStatus,
          dispatchPostFormIdInfo = _props8.dispatchPostFormIdInfo,
          goodArr = _props8.userGoods;
      var _state4 = this.state,
          group_code = _state4.group_code,
          checks = _state4.checks,
          InputVal = _state4.InputVal,
          erroTip = _state4.erroTip;
      var detail = e.detail;
      var formId = detail.formId;
      var selectable = tPrice.selectable;


      if (formId) {
        console.log(e);
        dispatchPostFormIdInfo(formId);
      }

      var isTaus = true;
      goodArr.map(function (g) {
        if (g.curType.goodInfo.is_limited_sale == 1) {
          isTaus = false;
        }
      });

      // 检测 首单好礼，定制文字
      if (selectable) {
        // 首单好礼可用
        if ((0, _strUtil.isUndefined)(checks) || checks) {
          // 默认选择 首单好礼，或者用户选择首单好礼
          if (InputVal == '') {
            _index2.default.showToast({
              title: erroTip !== '' ? '请输入符合格式的宝宝名字再提交喔' : '请输入宝宝名字再提交喔',
              icon: 'none'
            });
            return false;
          }
        }
      }

      var coupon_id = this.getCouponId();
      var _this = this;
      if (!userAddrss.userName) {
        this.showToastMsg('请选择收货地址！');
        return false;
      }

      var uname = userAddrss.userName;
      var reg = /[\u4e00-\u9fa5]*(先生|小姐|男士|女士|太太)+[\u4e00-\u9fa5]*/g;
      if (reg.test(uname)) {
        // this.showToastMsg('订单中不可包含先生/小姐')
        this.setState({
          alert: true
        });
        return false;
      }
      // console.warn(userAddrss, '222')
      var gInfo = goodArr.map(function (g) {
        return {
          id: g.curType.id,
          amount: g.goodNum
        };
      });
      var role = this.getGroupInfo();
      var checksPd = 0;
      if (selectable) {
        if ((0, _strUtil.isUndefined)(checks) || checks) {
          checksPd = 1;
        }
      }
      if (gInfo.length == 1 && isTaus == false) {
        checksPd = 0;
      }
      /* 防止多次点击重复提交 bug */
      if (payStatus == 'req_pay') {
        _index2.default.showToast({
          title: '订单确认中……',
          icon: 'loading'
        });
        return false;
      }

      (0, _gdt.gdtTrackClick)('COMPLETE_ORDER', {
        totalPrice: tPrice.total
      });

      this.setState({
        pageState: 'goPay'
      }, function () {
        _this.props.dispatchPostOrderInfo({
          name: userAddrss.userName,
          phone: userAddrss.telNumber,
          province: userAddrss.provinceName,
          city: userAddrss.cityName,
          district: userAddrss.countyName,
          address: userAddrss.detailInfo,
          goods: gInfo,
          role: role,
          group_code: group_code,
          is_first_gift: checksPd,
          gift_title: InputVal,
          from: userBuyType == 'cartMutiple' ? 'cart' : 'sku',
          coupon_id: coupon_id,
          mid: this.state.mid
        });
        /* gdt */
        _this.reqGDTInfo();
      });
    }
  }, {
    key: "reqGDTInfo",
    value: function reqGDTInfo() {
      var tPrice = this.props.tPrice;

      var localPr = this.getAllGoodTotalPrice();
      var unixTime = Math.floor(new Date().getTime() / 1000);
      var path = this.$router.path;

      try {
        var gdtInfo = _index2.default.getStorageSync('gdt');
        console.log('gdt token: ' + atoken);
        console.log('gdt info: ');
        console.log(gdtInfo);
        var gdt_vid = gdtInfo.gdt_vid;

        if (gdt_vid) {
          var gdtParams = {
            access_token: atoken,
            actions: [{
              user_action_set_id: '1109536311',
              url: 'http://www.qq.com' + path,
              action_time: unixTime,
              action_type: 'COMPLETE_ORDER',
              trace: {
                click_id: gdtInfo.gdt_vid
              },
              action_param: {
                value: tPrice.total ? tPrice.total : localPr
              }
            }]
          };
          (0, _gdt.postGDTInfoRedirect)(gdtParams);
        }
      } catch (e) {
        console.log(e);
      }
    }
    /**
     * 选择地址成功的回调
     * @param  {Object} res
     * 参数值参考： https://developers.weixin.qq.com/miniprogram/dev/api/open-api/address/wx.chooseAddress.html
     */

  }, {
    key: "chooseAddressSuc",
    value: function chooseAddressSuc(res) {
      console.log('选择地址成功的回调');
      var _props9 = this.props,
          dispatchGetAddress = _props9.dispatchGetAddress,
          dispatchShowErrDialog = _props9.dispatchShowErrDialog;


      dispatchGetAddress(res);
      this.updateOrderGoodsDyncPrice({ provinceName: res.provinceName });

      this.track('addsuccess', _extends({}, res));
      var uname = res.userName;
      if (uname.indexOf('张三') >= -1 || uname.indexOf('小姐') >= -1) {
        console.log('先生小姐');
        dispatchShowErrDialog('先生小姐');
      }
    }
  }, {
    key: "onClickAddressInfo",
    value: function onClickAddressInfo() {
      // console.log('address info click')
      this.track('address');
      var _this = this;
      this.setState({
        pageState: 'chooseAddress'
      }, function () {
        _index2.default.chooseAddress({
          success: function success(res) {
            _this.chooseAddressSuc(res);
          },
          complete: function complete(res) {
            console.log(res.errMsg);
            if (res.errMsg === 'chooseAddress:cancel') {
              _this.showToastMsg('用户未选择地址信息');
            } else if (res.errMsg == 'chooseAddress:fail authorize no response' || res.errMsg == 'chooseAddress:fail auth deny') {
              _index2.default.showModal({
                title: '信息授权提示',
                content: '需要访问您的通讯地址，请到小程序的设置中打开通讯地址授权',
                confirmText: '去设置'
              }).then(function (resModal) {
                console.log(resModal.confirm, resModal.cancel);
                if (resModal.confirm) {
                  wx.openSetting({
                    success: function success(resSetting) {
                      console.log(resSetting.authSetting);

                      if (resSetting.authSetting['scope.address']) {
                        wx.chooseAddress({
                          success: function success(resAddress) {
                            _this.chooseAddressSuc(resAddress);
                          }
                        });
                      }
                    }
                  });
                }
              });
            }
          }
        });
      });
    }
    /**
     * CouponList 组件的关闭事件
     */

  }, {
    key: "handleCouponListClose",
    value: function handleCouponListClose() {
      this.setState({
        visibleCouponList: false
      });
    }
    /**
     * CouponList component 事件：选择优惠券时候调用
     * @param  {number} couponItem 选择的优惠券信息
     */

  }, {
    key: "handleCouponItemSelectChange",
    value: function handleCouponItemSelectChange(couponItem) {
      var _this3 = this;

      console.log('user click couponItem: ', couponItem);
      var app = getApp();
      app.km.track('choose', null);

      var checks = this.state.checks;
      // 优惠券不可用，不再去询问价格

      if (couponItem && couponItem.use_status == 0) {
        return false;
      }

      var coupon_id = couponItem.id;
      var originCouponID = this.getCouponId();
      console.log('user curCoupon: ', originCouponID);
      // 当前coupon_id和选择的couponItem.id 相同，取消选择当前优惠券
      // selectable && checks ? false: true 首单好礼可选并选中的时候，不选择优惠券，否则，选择优惠券选项
      this.setState({
        userSelectCoupon: coupon_id == originCouponID ? { id: 0 } : couponItem,
        checkCoupon: coupon_id == originCouponID ? false : true,
        checks: coupon_id == originCouponID ? checks : false
      }, function () {
        _this3.updateOrderGoodsDyncPrice();
      });
    }

    /**
     * 点击优惠券信息，查看优惠券列表
     */

  }, {
    key: "onMoreCouponClick",
    value: function onMoreCouponClick() {
      var app = getApp();
      app.km.track('coupondetail', null);
      this.setState({
        visibleCouponList: true
      }, function () {
        app.km.track('Window-couponlist', null);
      });
    }
  }, {
    key: "closeErrDialogTip",
    value: function closeErrDialogTip() {
      var dispatchShowErrDialog = this.props.dispatchShowErrDialog;

      dispatchShowErrDialog('none');
    }
  }, {
    key: "closeAlert",
    value: function closeAlert() {
      this.setState({
        alert: false
      });
    }
  }, {
    key: "getGroupInfo",
    value: function getGroupInfo() {
      var userBuyType = this.props.userBuyType;

      var role = void 0;
      if (userBuyType == 'createTeam') {
        role = 'sponsor';
      } else if (userBuyType == 'joinTeam') {
        role = 'participant';
      } else {
        role = 'self';
      }
      return role;
    }
    /**
     * 商品数量更改
     * @param  {number} index 修改商品在 订单列表中的 索引
     * @param  {number} v 组件回传的值，表示当前商品数量，参考：https://taro-ui.aotu.io/#/docs/inputnumber
     */

  }, {
    key: "handleInputNumberChange",
    value: function handleInputNumberChange(index, v) {
      // console.log(v)
      // console.log(index)
      var goodArr = this.props.userGoods;

      var originData = goodArr[index];
      // const { curType } = originData
      goodArr[index] = Object.assign({}, originData, { goodNum: v });
      var arrGoodInfo = goodArr.map(function (g) {
        var goodNum = g.goodNum,
            curType = g.curType;

        return {
          id: curType.id,
          amount: goodNum
        };
      });

      this.updateOrderGoodsDyncPrice({
        arrGoodInfo: arrGoodInfo
      });
    }

    /**
     * 商品类型选择
     * @param  {number} index
     * @param  {Object} tag
     * @param  {Object} e
     */

  }, {
    key: "onClickTypeTag",
    value: function onClickTypeTag(index, tag, e) {
      // console.log(index)
      // console.log(tag)
      // console.log(e)
      e.stopPropagation();
      var goodArr = this.props.userGoods;


      var originData = goodArr[index];
      var typeTags = originData.typeTags;
      // console.log(typeTags)

      var curT = void 0;
      typeTags.map(function (t) {
        if (t.id == tag.name) {
          curT = t;
        }
      });
      // console.log(curT)
      var _curT = curT,
          tit = _curT.tit,
          id = _curT.id;

      var app = getApp();
      app.km.track('size', {
        gid: id,
        size: tit
      });

      goodArr[index] = Object.assign({}, originData, { curType: curT });
      var arrGoodInfo = goodArr.map(function (g) {
        var goodNum = g.goodNum,
            curType = g.curType;

        return {
          id: curType.id,
          amount: goodNum
        };
      });

      this.updateOrderGoodsDyncPrice({ arrGoodInfo: arrGoodInfo });
    }
  }, {
    key: "getAllGoodNum",
    value: function getAllGoodNum(arrGood) {
      if (!arrGood || arrGood.length == 0) {
        return 0;
      }var tNum = 0;
      arrGood.map(function (g) {
        tNum = tNum + parseInt(g.goodNum);
      });
      return tNum;
    }
  }, {
    key: "getAllGoodTotalPrice",
    value: function getAllGoodTotalPrice(arrGood) {
      if (!arrGood || arrGood.length == 0) {
        return 0;
      }var userBuyType = this.props.userBuyType;


      var tPrice = 0;
      arrGood.map(function (g) {
        if (userBuyType == 'createTeam' || userBuyType == 'joinTeam') {
          tPrice = tPrice + parseInt(g.goodNum) * parseInt(g.curType.goodInfo.group_price);
        } else {
          tPrice = tPrice + parseInt(g.goodNum) * parseInt(g.curType.goodInfo.price);
        }
      });
      return tPrice;
    }
    /**
     * 携带当前订单商品id 的 track 埋点
     * @param  {string} name 事件名称
     * @param  {object} trackInfo 事件的附加信息
     */

  }, {
    key: "track",
    value: function track(name, trackInfo) {
      var goodArr = this.props.userGoods;

      var arrGids = goodArr.map(function (g) {
        var curType = g.curType;

        return curType.id;
      });
      console.log(arrGids.join(','));
      /* eslint-disable */
      var app = getApp();
      /* eslint-enable */
      app.km.track(name + '_' + arrGids.join(','), trackInfo ? trackInfo : null);
    }
  }, {
    key: "returnLeg",
    value: function returnLeg() {
      var InputVal = this.state.InputVal;

      var arr = [];
      var brr = [];
      for (var i in InputVal) {
        if (InputVal[i].charCodeAt() > 0 && InputVal[i].charCodeAt() < 255) {
          brr.push(InputVal[i]);
        } else {
          arr.push(InputVal[i]);
        }
      }
      var num = 0;
      if (arr.length == 0) {
        num = 10;
      } else if (arr.length == 1) {
        num = 9;
      } else if (arr.length == 2) {
        num = 8;
      } else if (arr.length == 3) {
        num = 7;
      } else if (arr.length == 4) {
        num = 6;
      } else if (arr.length == 5) {
        num = 5;
      } else if (arr.length > 5) {
        num = 5;
      }
      console.warn("\u4E2A\u6570" + num, arr);
      return num;
    }

    /**
     * AtInput onChange 绑定事件
     * @tutorial https://taro-ui.aotu.io/#/docs/input
     * @param  {string} value AtInput 组件输入事件返回 输入内容
     */

  }, {
    key: "changeInput",
    value: function changeInput(value) {
      var values = value;
      var includeSpecialString = (0, _strUtil.checkString)(values);
      var emjion = (0, _strUtil.isEmojiCharacter)(values);
      var reg = (0, _strUtil.getByteLen)(values);
      var checkedInput = values;
      var eTip = '';
      if (includeSpecialString) {
        eTip = '名称不能包含特殊字符.';
      }
      if (emjion) {
        eTip = '名称不能包含表情符号喔';
        checkedInput = (0, _strUtil.subString)(values);
      } else {
        if (reg < 11) {
          checkedInput = (0, _strUtil.subString)(values);
        } else {
          checkedInput = (0, _strUtil.subString)(values);
        }
      }
      this.setState({
        erroTip: eTip,
        InputVal: checkedInput
      });
    }

    /**
     * FOG first Order gift 折扣选项中 首单好礼 点击
     * 1. 首单好礼可选 selectable==true, 优惠券选项和首单好礼二选一，互斥
     * 2. 首单好礼不可选，selectable==false 点击无反应
     */

  }, {
    key: "handleFOGClick",
    value: function handleFOGClick() {
      var _this4 = this;

      var app = getApp();
      app.km.track('sdhl', null);
      var _state5 = this.state,
          checks = _state5.checks,
          checkCoupon = _state5.checkCoupon,
          userSelectCoupon = _state5.userSelectCoupon;
      var selectable = this.props.tPrice.selectable;


      this.setState({
        checks: selectable ? (0, _strUtil.isUndefined)(checks) ? false : !checks : false,
        checkCoupon: !checks ? false : checkCoupon,
        userSelectCoupon: !checks ? { id: 0 } : userSelectCoupon
      }, function () {
        _this4.updateOrderGoodsDyncPrice();
      });
    }

    /**
     * 折扣选项中选择 优惠券
     * 首单好礼存在，并且可用的情况下，和优惠券二选一，互斥
     * 首单好礼不存在，优惠券默认选择
     */

  }, {
    key: "handleDiscountCouponClick",
    value: function handleDiscountCouponClick() {
      var _this5 = this;

      var app = getApp();
      app.km.track('usecoupon', null);
      var _state6 = this.state,
          checkCoupon = _state6.checkCoupon,
          checks = _state6.checks,
          userSelectCoupon = _state6.userSelectCoupon;
      var tPrice = this.props.tPrice;
      var coupon_list = tPrice.coupon_list,
          coupon_id = tPrice.coupon_id,
          selectable = tPrice.selectable;

      var couponUseable = this.useableCouponCheckbox();
      // 无优惠券可选，优惠券选项不可选
      if (!couponUseable) {
        return false;
      }

      var curCoupon = void 0;
      var defaultRecommandCoupon = void 0;
      coupon_list.map(function (citem) {
        if (citem.id == coupon_id) {
          defaultRecommandCoupon = citem;
        }
      });
      // 用户未主动选择优惠券，默认选择 状态下，再次点击取消
      if ((0, _strUtil.isUndefined)(checkCoupon) && couponUseable) {
        if (selectable) {
          curCoupon = defaultRecommandCoupon;
        } else {
          curCoupon = {
            id: 0
          };
        }
      } else if (!checkCoupon) {
        // 用户选择 优惠券选项
        if (userSelectCoupon && userSelectCoupon.id > 0) {
          curCoupon = userSelectCoupon;
        } else {
          curCoupon = defaultRecommandCoupon;
        }
      } else {
        // 用户取消 优惠券选项
        curCoupon = {
          id: 0 // 取消 coupon list 的选择 的优惠券
        };
      }

      this.setState({
        checkCoupon: (0, _strUtil.isUndefined)(checkCoupon) && couponUseable && !selectable ? false : !checkCoupon,
        checks: !checkCoupon ? false : checks,
        userSelectCoupon: curCoupon
      }, function () {
        _this5.updateOrderGoodsDyncPrice();
      });
    }

    /**
     * 优惠券选项是否可用, 判断当前的 coupon_list 是否有可用优惠券
     * @returns {boolean}
     */

  }, {
    key: "useableCouponCheckbox",
    value: function useableCouponCheckbox() {
      var coupon_list = this.props.tPrice.coupon_list;

      if (coupon_list && coupon_list.length > 0) {
        var useable = false;
        for (var i = 0; i < coupon_list.length; i++) {
          var citem = coupon_list[i];
          if (citem.use_status == 1) {
            useable = true;
          }
        }
        console.log('useable: ', useable);

        return useable;
      } else {
        return false;
      }
    }
  }, {
    key: "_createData",
    value: function _createData() {
      var _this6 = this;

      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __runloopRef = arguments[2];
      ;

      var _props10 = this.__props,
          tPrice = _props10.tPrice,
          userBuyType = _props10.userBuyType,
          errTip = _props10.errTip,
          userAddrss = _props10.userAddrss,
          goodArr = _props10.userGoods;
      var _state7 = this.__state,
          isIphoneX = _state7.isIphoneX,
          alert = _state7.alert,
          checks = _state7.checks,
          InputVal = _state7.InputVal,
          checkCoupon = _state7.checkCoupon,
          visibleCouponList = _state7.visibleCouponList;
      // 优惠券信息

      var discount_desc = tPrice.discount_desc,
          coupon_list = tPrice.coupon_list,
          selectable = tPrice.selectable;


      var totalGNum = this.getAllGoodNum(goodArr);
      var localGPrice = this.getAllGoodTotalPrice(goodArr); // 整数
      var usealbeCouponCBox = this.useableCouponCheckbox();
      console.log('useableCouponCheckbox: ', usealbeCouponCBox);

      var goodArrLeg = goodArr.length;
      var limt = false; //是不是秒杀


      console.log('是否有秒杀商品： ', limt);

      this.anonymousFunc0 = function (e) {
        _this6.onClickPayBtn(e, '');
      };

      var anonymousState__temp3 = !(limt && goodArrLeg == 1) && (checks || (0, _strUtil.isUndefined)(checks) && selectable) ? this.returnLeg() : null;

      this.anonymousFunc1 = function (e) {
        e.stopPropagation();
        _this6.onMoreCouponClick();
      };

      var anonymousState__temp4 = !(limt && goodArrLeg == 1) ? usealbeCouponCBox ? "\u4F18\u60E0\uFFE5" + (discount_desc && discount_desc != 0 ? Math.floor(parseInt(discount_desc)) / 100 : '0') + "\u5143" : '暂无可用优惠券' : null;
      var anonymousState__temp5 = '￥' + Math.floor(tPrice.logistics_fee) / 100;
      var anonymousState__temp6 = tPrice.total ? Math.floor(tPrice.total) / 100 : Math.floor(localGPrice) / 100;
      var anonymousState__temp7 = tPrice.total ? Math.floor(tPrice.total) / 100 : Math.floor(localGPrice) / 100;
      var anonymousState__temp8 = this.getCouponId();
      var anonymousState__temp9 = checks || (0, _strUtil.isUndefined)(checks) && selectable;
      var anonymousState__temp10 = !(limt && goodArrLeg == 1) && (checks || (0, _strUtil.isUndefined)(checks) && selectable);
      var anonymousState__temp11 = checkCoupon || (0, _strUtil.isUndefined)(checkCoupon) && !selectable && usealbeCouponCBox;
      var loopArray0 = goodArr.map(function (g, index) {
        g = {
          $original: (0, _index.internal_get_original)(g)
        };

        var _g$$original = g.$original,
            curType = _g$$original.curType,
            goodNum = _g$$original.goodNum,
            typeTags = _g$$original.typeTags;
        var goodInfo = curType.goodInfo;

        var teamPrice = userBuyType == 'createTeam' || userBuyType == 'joinTeam';
        if (goodInfo.is_limited_sale == 1) {
          limt = true;
        }
        var $loopState__temp2 = teamPrice ? Math.floor(goodInfo.group_price) / 100 : Math.floor(goodInfo.price) / 100;
        return {
          curType: curType,
          goodNum: goodNum,
          typeTags: typeTags,
          goodInfo: goodInfo,
          teamPrice: teamPrice,
          $loopState__temp2: $loopState__temp2,
          $original: g.$original
        };
      });
      Object.assign(this.__state, {
        anonymousState__temp3: anonymousState__temp3,
        anonymousState__temp4: anonymousState__temp4,
        anonymousState__temp5: anonymousState__temp5,
        anonymousState__temp6: anonymousState__temp6,
        anonymousState__temp7: anonymousState__temp7,
        anonymousState__temp8: anonymousState__temp8,
        anonymousState__temp9: anonymousState__temp9,
        anonymousState__temp10: anonymousState__temp10,
        anonymousState__temp11: anonymousState__temp11,
        loopArray0: loopArray0,
        goodArr: goodArr,
        userAddrss: userAddrss,
        limt: limt,
        goodArrLeg: goodArrLeg,
        selectable: selectable,
        right: right,
        usealbeCouponCBox: usealbeCouponCBox,
        tPrice: tPrice,
        coupon_list: coupon_list,
        errTip: errTip,
        totalGNum: totalGNum
      });
      return this.__state;
    }
  }, {
    key: "anonymousFunc0",
    value: function anonymousFunc0(e) {
      ;
    }
  }, {
    key: "anonymousFunc1",
    value: function anonymousFunc1(e) {
      e.stopPropagation();
    }
  }]);

  return ConfirmOrder;
}(_index.Component), _class2.properties = {
  "payStatus": {
    "type": null,
    "value": null
  },
  "dispatchChangePayStatus": {
    "type": null,
    "value": null
  },
  "userAddrss": {
    "type": null,
    "value": null
  },
  "tPrice": {
    "type": null,
    "value": null
  },
  "userGoods": {
    "type": null,
    "value": null
  },
  "dispatchGoodsDyncPrice": {
    "type": null,
    "value": null
  },
  "dispatchGetAllGoodInfo": {
    "type": null,
    "value": null
  },
  "dispatchChangeBuyType": {
    "type": null,
    "value": null
  },
  "dispatchClearTotalPrice": {
    "type": null,
    "value": null
  },
  "userBuyType": {
    "type": null,
    "value": null
  },
  "dispatchPostFormIdInfo": {
    "type": null,
    "value": null
  },
  "dispatchGetAddress": {
    "type": null,
    "value": null
  },
  "dispatchShowErrDialog": {
    "type": null,
    "value": null
  },
  "errTip": {
    "type": null,
    "value": null
  }
}, _class2.$$events = ["handleInputNumberChange", "onClickTypeTag", "onClickAddressInfo", "anonymousFunc0", "handleFOGClick", "changeInput", "handleDiscountCouponClick", "anonymousFunc1", "handleCouponItemSelectChange", "handleCouponListClose", "closeErrDialogTip", "closeAlert"], _temp2)) || _class) || _class);
exports.default = ConfirmOrder;

// {this.state.login ? (
//   <View></View>
// ) : (
//   <View className='btnLogin' onClick={this.submitTrack}>
//     {/**1省市区没有值(必要) 2首单好礼输入框没有值 3秒杀商品 4不是首单好礼**/}
//     {((userAddrss.provinceName !== '' &&
//       (checks || isUndefined(checks)) &&
//       selectable &&
//       InputVal !== '') ||
//       (userAddrss.provinceName !== '' &&
//         !(checks || isUndefined(checks))) ||
//       (userAddrss.provinceName !== '' && !selectable) ||
//       (userAddrss.provinceName !== '' &&
//         limt &&
//         goodArrLeg == 1)) && (
//       <Button
//         openType='getUserInfo'
//         onGetUserInfo={this.getUserInfo}
//         type='text'
//         formType='submit'
//       >
//         微信登陆
//       </Button>
//     )}
//   </View>
// )}

// 判断是否登陆授权
// member() {
//   // console.warn('11111111')
//   let _this = this
//   API.get('api/member').then(res => {
//     console.warn(res, '11111')
//     if (res.code == '50011') {
//       // console.warn('asda')
//       _this.setState({
//         login: false
//       })
//     }
//   })
// }

// sendUserInfo(response) {
//   let _this = this
//   API.post('api/login2', {
//     iv: response.detail.iv,
//     encryptedData: response.detail.encryptedData
//   }).then(res => {
//     const { detail } = response
//     const { unionid, openid } = res.data
//     /* eslint-disable */
//     const app = getApp()
//     /* eslint-enable */
//     app.km.indentify(openid, unionid)
//     saveUserInfo(detail)
//     Taro.setStorage({ key: 'userInfo', data: detail.userInfo })
//     // Taro.navigateBack()
//     _this.setState(
//       {
//         login: true
//       },
//       () => {
//         // 处理授权后支付
//         _this.onClickPayBtn(this.state.formId, false)
//       }
//     )
//   })
// }

// // 授权btn
// getUserInfo(response) {
//   /* eslint-disable */
//   const app = getApp()
//   /* eslint-enable */
//   //同意
//   if (response.detail.userInfo) {
//     this.sendUserInfo(response)
//     console.warn(this.state.formId, 'formID')
//     /* eslint-enable */
//     app.km.track('authorize', null)
//   } else {
//     //拒绝,保持当前页面，直到同意
//     app.km.track('cancel', null)
//   }
// }

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(ConfirmOrder, true));