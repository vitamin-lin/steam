"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _dec, _class, _class2, _temp2;

var _index = require("../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = require("../../npm/@tarojs/redux/index.js");

var _action = require("../../store/shareDetail/action.js");

var _action2 = require("../../store/ruleDialog/action.js");

var _global = require("../../utils/global.js");

var _gdt = require("../../utils/gdt.js");

var _message = require("../../utils/message.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var iconRule = "/assets/images/icon-rule.png";
var iconPlus = "/assets/images/icon-plus.png";
/* eslint-disable */

/* eslint-enable */
// import withShare from '../../utils/withSare'


var logPv = false;
var sharePath = 'pages/shareDetail/index';
var shareTitle = '我正在组队好奇夏日限定蜜桃裤……';
var shareImg = 'https://mpmall.huggiesapp.cn/storage/wxmall/another/project.png';

var shareTitleCom = ['快来！这款宝贝，两人组队即享全网最低价', '快来帮我组队，抢宝宝最爱网红单品'];

var shareDetail = (_dec = (0, _index3.connect)(function (_ref) {
  var shareGroup = _ref.shareGroup;
  return {
    shareGroupInfo: shareGroup.groupInfo
  };
}, function (dispatch) {
  return {
    dispatchGetGroupInfo: function dispatchGetGroupInfo(group_code, order_no) {
      dispatch((0, _action.getGroupInfo)(group_code, order_no));
    },
    dispatchShowRuleDialog: function dispatchShowRuleDialog(v) {
      dispatch((0, _action2.showRuleDialog)(v));
    }
  };
}), _dec(_class = (_temp2 = _class2 = function (_BaseComponent) {
  _inherits(shareDetail, _BaseComponent);

  function shareDetail() {
    var _ref2;

    var _temp, _this, _ret;

    _classCallCheck(this, shareDetail);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = shareDetail.__proto__ || Object.getPrototypeOf(shareDetail)).call.apply(_ref2, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "anonymousState__temp3", "shareGroupInfo", "role_status", "ct", "iconRule", "isIphoneX", "status", "userInfo", "IDStaus", "iconPlus", "infoStaus", "dispatchGetGroupInfo", "dispatchShowRuleDialog"], _this.config = {
      navigationBarTitleText: '参与组队'
    }, _this.state = {
      // pageTitel: '参与组队'
      isIphoneX: 0
    }, _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(shareDetail, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(shareDetail.prototype.__proto__ || Object.getPrototypeOf(shareDetail.prototype), "_constructor", this).call(this, props);
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      _index2.default.showShareMenu({
        withShareTicket: true
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      // const { dispatchGetGroupInfo } = this.props
      // const path = this.$router.params
      // const { gcode, order_no } = path
      // if (path && gcode) {
      //   dispatchGetGroupInfo(gcode, order_no)
      // } else if (path && order_no) {
      //   dispatchGetGroupInfo(gcode, order_no)
      // }
      this.setState({
        isIphoneX: (0, _global.getGlobalData)('isIphoneX') ? (0, _global.getGlobalData)('isIphoneX') : 0
      });
    }
    // componentWillReceiveProps (nextProps,nextContext) {}

  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {}
  }, {
    key: "componentDidShow",
    value: function componentDidShow() {
      logPv = false;
      var dispatchGetGroupInfo = this.props.dispatchGetGroupInfo;
      var params = this.$router.params;
      var gcode = params.gcode,
          order_no = params.order_no;

      this.inTime = new Date();

      this.changeTrackInfo();
      if (params && gcode) {
        dispatchGetGroupInfo(gcode, order_no);
      } else if (params && order_no) {
        dispatchGetGroupInfo(gcode, order_no);
      }
    }
  }, {
    key: "componentDidHide",
    value: function componentDidHide() {
      var stayTime = new Date().getTime() - this.inTime.getTime() + '';
      this.trackPage('hide', stayTime);
    }
  }, {
    key: "componentDidCatchError",
    value: function componentDidCatchError() {}
  }, {
    key: "componentDidNotFound",
    value: function componentDidNotFound() {}

    /* customer handle */

    // 转换 倒计时中的 时间

  }, {
    key: "converTimerGroupList",
    value: function converTimerGroupList(groupInfo) {
      if (!groupInfo) {
        return false;
      }var gd = groupInfo;
      var endtimer = gd.ended_at;
      var startTimer = new Date().getTime();
      var leftTime = endtimer - startTimer;
      var h = parseInt(leftTime / 3600000);
      var m = parseInt((leftTime - 3600000 * h) / 60000);
      var s = parseInt((leftTime - 3600000 * h - 60000 * m) / 1000);
      return Object.assign({}, gd, {
        ct: {
          h: h,
          m: m,
          s: s
        }
      });
    }
  }, {
    key: "onClickRuleTab",
    value: function onClickRuleTab() {
      var dispatchShowRuleDialog = this.props.dispatchShowRuleDialog;

      dispatchShowRuleDialog(true);
      var app = (0, _index.getApp)();
      app.km.track('invite_grouprule');
    }
  }, {
    key: "onClickInvitaionBtn",
    value: function onClickInvitaionBtn() {
      this.track('invite');
    }
  }, {
    key: "onClickCreateTab",
    value: function onClickCreateTab(gid) {
      if (!gid) {
        return false;
      }var shareGroupInfo = this.props.shareGroupInfo;
      var status = shareGroupInfo.status;

      if (status == 2) {
        this.track('invitersuccess_wyyzd');
      } else if (status == 1) {
        this.track('invite_maketeam');
      }

      _index2.default.navigateTo({
        url: '../detail/index?gid=' + gid
      });
    }
  }, {
    key: "onClickJoinTab",
    value: function onClickJoinTab(gid, group_code, role_status, status) {
      // role_status == 1 第三个人
      console.log(gid);
      console.log(group_code);
      console.log(role_status);
      console.log(status);
      if (status == 1) {
        this.track('join');
        // 第三人加入组队
        _index2.default.navigateTo({
          url: '../confirmOrder/index?f=sd&from=detail&type=joinTeam&gid=' + gid + '&gcode=' + group_code
        });
      } else if (status == 2) {
        this.track('invitersuccess_wyyzd');
        // 第三人加入组队
        _index2.default.navigateTo({
          url: '../detail/index?f=sd&gid=' + gid
        });
      }
    }
  }, {
    key: "onTimeUp",
    value: function onTimeUp() {
      _index2.default.showToast({
        title: '该拼团已失效！',
        duration: 3000,
        icon: 'none'
      });
    }
  }, {
    key: "onClickRebackHome",
    value: function onClickRebackHome() {
      this.track('backindex');
      _index2.default.switchTab({
        url: '../home/index'
      });
    }
    // 随机获取 转发标题

  }, {
    key: "getRandomShareTitle",
    value: function getRandomShareTitle() {
      var randomArr = shareTitleCom;
      var len = randomArr.length;
      var randomIndex = Math.floor(Math.random() * len);
      console.log(randomIndex);
      return randomArr[randomIndex];
    }
  }, {
    key: "onShareAppMessage",
    value: function onShareAppMessage(res) {
      console.log(res);
      var shareGroupInfo = this.props.shareGroupInfo;
      var group_code = shareGroupInfo.group_code,
          share_images_path = shareGroupInfo.share_images_path;


      var dShareTitle = this.getRandomShareTitle();
      var shareId = _index2.default.getStorageSync('km_uuid');
      var path = sharePath + "?gcode=" + group_code + "&refer_share_user=" + shareId;
      var title = dShareTitle ? dShareTitle : shareTitle;
      var imageUrl = share_images_path ? JSON.parse(share_images_path)[0] : shareImg;

      /* eslint-disable */
      var app = (0, _index.getApp)();
      /* eslint-enable */
      app.km.track('share_push', {
        shareTitle: title,
        sharePath: path,
        shareImageUrl: imageUrl
      });

      return {
        title: title,
        path: path,
        imageUrl: imageUrl,
        success: function success(e) {
          console.log('转发成功:' + JSON.stringify(e));
        },
        fail: function fail(re) {
          console.log('转发失败:' + JSON.stringify(re));
        }
      };
    }
    /* track 埋点信息 */

  }, {
    key: "changeTrackInfo",
    value: function changeTrackInfo() {
      console.log('changeTrackInfo');
      var _$router = this.$router,
          path = _$router.path,
          params = _$router.params;

      console.log(path);
      console.log(params);
      var platform = params.platform,
          refer_share_user = params.refer_share_user;

      var pf = refer_share_user ? 'share' : platform;
      var app = (0, _index.getApp)();
      if (pf) {
        app.km.register({
          sr: pf
        });
      }
      if (!refer_share_user) {
        app['refer_share_user'] = '';
      }
    }
  }, {
    key: "getAidGdt_vid",
    value: function getAidGdt_vid() {
      var params = this.$router.params;
      var weixinadinfo = params.weixinadinfo,
          gdt_vid = params.gdt_vid;

      var aid = 0;
      if (weixinadinfo) {
        var weixinadinfoArr = weixinadinfo.split('.');
        aid = weixinadinfoArr[0];
      }
      // console.log('getAidGdt_vid')
      // console.log(Taro.getStorageSync('gdt'))
      var gdtInfo = void 0;
      if (!aid || !gdt_vid) {
        gdtInfo = _index2.default.getStorageSync('gdt');
      } else {
        gdtInfo = {
          gdt_vid: gdt_vid,
          aid: aid
        };
      }
      return gdtInfo;
    }
  }, {
    key: "trackPage",
    value: function trackPage(type, stayTime) {
      var shareGroupInfo = this.props.shareGroupInfo;
      var good_id = shareGroupInfo.good_id,
          status = shareGroupInfo.status;

      var app = (0, _index.getApp)();
      var name = 'beinvited';
      if (status == 1) {
        name = 'beinvited';
      } else if (status == 2) {
        name = 'invitersuccess';
      } else if (status == 4) {
        name = 'overdue';
      }
      var st = type ? stayTime : '';
      var t = type ? type : 'show';
      var gdtInfo = this.getAidGdt_vid();

      app.km.track('page_' + name + '_' + good_id + '_' + t, _extends({
        stay_milliseconds: st
      }, gdtInfo));
      (0, _gdt.gdtTrackPage)(_extends({
        path: 'page_' + name + '_' + good_id + '_' + t,
        stay_milliseconds: st
      }, gdtInfo));
      logPv = true;
    }
  }, {
    key: "track",
    value: function track(name) {
      var shareGroupInfo = this.props.shareGroupInfo;
      var good_id = shareGroupInfo.good_id;

      var app = (0, _index.getApp)();
      app.km.track(name + '_' + good_id);
    }
    // 订阅

  }, {
    key: "makeSes",
    value: function makeSes() {
      var app = (0, _index.getApp)();
      app.km.track('dysz', null);
      (0, _message.makeSes)(2);
    }
  }, {
    key: "_createData",
    value: function _createData() {
      var _this2 = this;

      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __runloopRef = arguments[2];
      ;

      var isIphoneX = this.__state.isIphoneX;
      var shareGroupInfo = this.__props.shareGroupInfo;

      if (!shareGroupInfo) {}
      var convertedGroupInfo = this.converTimerGroupList(shareGroupInfo);
      var group_images_path = convertedGroupInfo.group_images_path,
          saved_price = convertedGroupInfo.saved_price,
          group_code = convertedGroupInfo.group_code,
          good_id = convertedGroupInfo.good_id,
          status = convertedGroupInfo.status,
          role_status = convertedGroupInfo.role_status,
          ct = convertedGroupInfo.ct,
          userInfo = convertedGroupInfo.info;


      if (good_id && !logPv) {
        this.trackPage();
      }
      // 组队成功 提示语

      // 倒计时
      var anonymousState__temp = { hours: '|', minutes: '|', seconds: '' };

      // 开团中 footer
      var toolBarDom1 = void 0;
      if (role_status == 0) {
        console.log('自己的分享进入邀请好友组队');

        this.anonymousFunc0 = function () {
          _this2.onClickInvitaionBtn();
        };
      } else {
        this.anonymousFunc1 = function (e) {
          e.stopPropagation();
          _this2.onClickRuleTab();
        };

        this.anonymousFunc2 = function (e) {
          e.stopPropagation();
          _this2.onClickJoinTab(good_id, group_code, role_status, status);
        };

        this.anonymousFunc3 = function (e) {
          e.stopPropagation();
          _this2.onClickCreateTab(good_id);
        };
      }

      var dtoolBarDom = void 0;
      if (role_status == 1) {
        this.anonymousFunc4 = function (e) {
          e.stopPropagation();
          _this2.onClickRuleTab();
        };

        this.anonymousFunc5 = function (e) {
          e.stopPropagation();
          _this2.onClickJoinTab(good_id, group_code, role_status, status);
        };
        // 第三方 看到的 其他两人组队成功 footer
      } else {
        // 组队成功两人看到的 组队成功 footer
        console.log('返回首页');

        this.anonymousFunc6 = function (e) {
          e.stopPropagation();

          _this2.onClickRebackHome();
        };
      }

      // 判断userInfo里的openid是否相同
      var IDStaus = false;
      var infoStaus = false;
      if (userInfo) {
        var userInfoID = userInfo[0].openid;
        var km_uuid = _index2.default.getStorageSync('km_uuid');
        var ID = "km_oid" + km_uuid;
        var openId = _index2.default.getStorageSync(ID);
        console.warn(userInfoID, openId, '你说呢');
        if (userInfoID == openId) {
          IDStaus = true;
        }
        if (userInfo.length > 1) {
          var InfoID = userInfo[1].openid;
          if (InfoID == openId) {
            infoStaus = true;
          }
        }
      }

      var anonymousState__temp2 = saved_price ? Math.floor(saved_price) / 100 : '';
      var anonymousState__temp3 = group_images_path ? JSON.parse(group_images_path)[0] : '';

      this.anonymousFunc7 = function () {
        _this2.onClickInvitaionBtn();
      };

      this.anonymousFunc8 = function (e) {
        e.stopPropagation();
        _this2.onClickJoinTab(good_id, group_code, role_status, status);
      };

      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        anonymousState__temp3: anonymousState__temp3,
        shareGroupInfo: shareGroupInfo,
        role_status: role_status,
        ct: ct,
        iconRule: iconRule,
        status: status,
        userInfo: userInfo,
        IDStaus: IDStaus,
        iconPlus: iconPlus,
        infoStaus: infoStaus
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
  }, {
    key: "anonymousFunc2",
    value: function anonymousFunc2(e) {
      e.stopPropagation();
    }
  }, {
    key: "anonymousFunc3",
    value: function anonymousFunc3(e) {
      e.stopPropagation();
    }
  }, {
    key: "anonymousFunc4",
    value: function anonymousFunc4(e) {
      e.stopPropagation();
    }
  }, {
    key: "anonymousFunc5",
    value: function anonymousFunc5(e) {
      e.stopPropagation();
    }
  }, {
    key: "anonymousFunc6",
    value: function anonymousFunc6(e) {
      e.stopPropagation();
    }
  }, {
    key: "anonymousFunc7",
    value: function anonymousFunc7(e) {
      ;
    }
  }, {
    key: "anonymousFunc8",
    value: function anonymousFunc8(e) {
      e.stopPropagation();
    }
  }]);

  return shareDetail;
}(_index.Component), _class2.properties = {
  "dispatchGetGroupInfo": {
    "type": null,
    "value": null
  },
  "dispatchShowRuleDialog": {
    "type": null,
    "value": null
  },
  "shareGroupInfo": {
    "type": null,
    "value": null
  }
}, _class2.$$events = ["onTimeUp", "anonymousFunc0", "anonymousFunc1", "anonymousFunc2", "anonymousFunc3", "anonymousFunc4", "anonymousFunc5", "anonymousFunc6", "anonymousFunc7", "anonymousFunc8", "makeSes"], _temp2)) || _class);
exports.default = shareDetail;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(shareDetail, true));