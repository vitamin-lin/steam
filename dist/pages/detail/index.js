"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _dec, _dec2, _class, _class2, _temp2;

var _index = require("../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = require("../../npm/@tarojs/redux/index.js");

var _index4 = require("../../npm/date-fns/isAfter/index.js");

var _index5 = _interopRequireDefault(_index4);

var _index6 = require("../../npm/classnames/index.js");

var _index7 = _interopRequireDefault(_index6);

var _action = require("../../store/goodDetail/action.js");

var _action2 = require("../../store/ruleDialog/action.js");

var _withSare = require("../../utils/withSare.js");

var _withSare2 = _interopRequireDefault(_withSare);

var _global = require("../../utils/global.js");

var _gdt = require("../../utils/gdt.js");

var _api = require("../../service/api.js");

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// assets
var iconHome = "/assets/images/home-active.png";
var iconClose = "/assets/images/icon_close.png";
var iconCart = "/assets/images/icon-cart.png";
var iconTabCart = "/assets/cart-active.png";
var iconCS = "/assets/images/icon-cs_05.png";
var iconRight = "/assets/images/icon-right_05.png";

// npm

// view component


var Detail = (_dec = (0, _withSare2.default)(), _dec2 = (0, _index3.connect)(function (_ref) {
  var GDetail = _ref.GDetail;
  return {
    cardStatus: GDetail.addCardStatus,
    curTTag: GDetail.curTag,
    tTagsArr: GDetail.typeTags,
    userAction: GDetail.actionType,
    arrGroup: GDetail.groupList,
    groupTotalNum: GDetail.totalGroup
  };
}, function (dispatch) {
  return {
    dispatchGetGood: function dispatchGetGood(id) {
      dispatch((0, _action.getGoodById)(id));
    },
    dispatchAddCard: function dispatchAddCard(gid, n) {
      dispatch((0, _action.addGoodToCard)(gid, n));
    },
    dispatchChangeTypeTag: function dispatchChangeTypeTag(tag) {
      dispatch((0, _action.changeTypeTag)(tag));
    },
    dispatchChangeUserActionType: function dispatchChangeUserActionType(t) {
      dispatch((0, _action.changeUserActionType)(t));
    },
    dispatchGetBuyGroupList: function dispatchGetBuyGroupList(gid) {
      dispatch((0, _action.getBuyGroupList)(gid));
    },
    dispatchShowRuleDialog: function dispatchShowRuleDialog(v) {
      dispatch((0, _action2.showRuleDialog)(v));
    }
  };
}), _dec(_class = _dec2(_class = (_temp2 = _class2 = function (_BaseComponent) {
  _inherits(Detail, _BaseComponent);

  function Detail() {
    var _ref2;

    var _temp, _this, _ret;

    _classCallCheck(this, Detail);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = Detail.__proto__ || Object.getPrototypeOf(Detail)).call.apply(_ref2, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp5", "anonymousState__temp6", "anonymousState__temp7", "anonymousState__temp8", "anonymousState__temp9", "anonymousState__temp10", "anonymousState__temp11", "anonymousState__temp12", "anonymousState__temp13", "anonymousState__temp14", "anonymousState__temp15", "anonymousState__temp16", "anonymousState__temp17", "anonymousState__temp18", "anonymousState__temp19", "loopArray0", "loopArray1", "dPics", "curTTag", "arrGroupConveredTimer", "swItemArr", "_params", "$router", "iconCS", "isIconCart", "iconCart", "is_group", "iconRight", "seckillMode", "groupTotalNum", "goodInfo", "isIphoneX", "iconHome", "iconTabCart", "iconClose", "userAction", "buy_count", "groupNum", "goodNum", "name", "comment", "comment2", "member_count", "isOpenSelectType", "isOpened", "posa", "mid", "dispatchGetGood", "dispatchAddCard", "cardStatus", "dispatchChangeTypeTag", "tTagsArr", "dispatchShowRuleDialog", "arrGroup"], _this.config = {
      navigationBarTitleText: '好奇官方精品商城'
    }, _this.state = {
      isIconCart: false,
      isOpenSelectType: false,
      goodNum: 1, // 单人购买数量
      groupNum: 2, // 组队产品数量
      isOpened: true, // 查看更多的组队弹窗
      isIphoneX: 0,
      posa: {
        position: 'relative'
      }
    }, _this.$setSharePath = function () {
      var gid = _this.$router.params.gid;

      return _this.$router.path + "?gid=" + gid;
    }, _this.$setShareTitle = function () {
      var curTTag = _this.props.curTTag;
      var goodInfo = curTTag.goodInfo;

      return goodInfo.share_title;
    }, _this.$setShareImageUrl = function () {
      var curTTag = _this.props.curTTag;
      var goodInfo = curTTag.goodInfo;

      var imgr = JSON.parse(goodInfo.share_images_path)[0];
      return imgr && imgr.length == 0 ? '' : imgr;
    }, _this.anonymousFunc0Array = [], _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Detail, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Detail.prototype.__proto__ || Object.getPrototypeOf(Detail.prototype), "_constructor", this).call(this, props);
      this.state = {
        goodNum: 1, // 初始化用户商品数量
        groupNum: 2,
        isIconCart: false,
        mid: []
      };

      this.handleBtnSecSnapClick = this.handleBtnSecSnapClick.bind(this);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        isIphoneX: (0, _global.getGlobalData)('isIphoneX') ? (0, _global.getGlobalData)('isIphoneX') : 0
      });

      var path = this.$router.params;
      var dispatchGetGood = this.props.dispatchGetGood;

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

      if (path && path.gid) {
        var app = getApp();
        app.km.track('page_detail_' + path.gid, null);
        dispatchGetGood(path.gid);
        // dispatchGetBuyGroupList(path.gid)
      } else {
        dispatchGetGood(1);
      }
    }

    // 分享

  }, {
    key: "onClickAddCardBtn",


    //  click handle 加入购物车按钮
    value: function onClickAddCardBtn(gid, n) {
      // console.log(gid)
      var _props = this.props,
          dispatchAddCard = _props.dispatchAddCard,
          cardStatus = _props.cardStatus;

      if (cardStatus == 'request') {
        return false;
      }
      dispatchAddCard(gid, n);
      this.setState({
        isIconCart: true
      });
    }
  }, {
    key: "handleClickAddCardBtn",
    value: function handleClickAddCardBtn() {
      this.setState({
        isOpenSelectType: true
      });
    }
  }, {
    key: "onClickAddCartTab",
    value: function onClickAddCartTab() {
      this.track('addcart2');

      this.setState({
        isOpenSelectType: true
      });
    }

    // 发起组队

  }, {
    key: "onClickTeamTab",
    value: function onClickTeamTab() {
      // console.log('onClickTeamTab')
      // const { dispatchChangeUserActionType } = this.props
      // dispatchChangeUserActionType('createTeam')
      var curTTag = this.props.curTTag;
      var id = curTTag.id;

      this.track('groupbuy');
      (0, _gdt.gdtTrackClick)('INITIATE_CHECKOUT', {
        buyType: 'groupbuy',
        goods_id: id
      });
      _index2.default.navigateTo({
        url: '../confirmOrder/index?from=detail&type=createTeam&gid=' + id
      });
    }

    // 单人购买

  }, {
    key: "onClickPayTab",
    value: function onClickPayTab() {
      this.track('singlebuy');

      // console.log('onClickPayTab')
      // const { dispatchChangeUserActionType } = this.props
      // dispatchChangeUserActionType('self')
      var curTTag = this.props.curTTag;
      var id = curTTag.id;


      (0, _gdt.gdtTrackClick)('INITIATE_CHECKOUT', {
        buyType: 'singlebuy',
        goods_id: id
      });

      _index2.default.navigateTo({
        url: '../confirmOrder/index?from=detail&gid=' + id
      });
    }
  }, {
    key: "handleBtnSecSnapClick",
    value: function handleBtnSecSnapClick(e) {
      e.stopPropagation();

      if (e.currentTarget.dataset.soldout === true) {
        return false;
      }

      this.track('ms');

      var query = "from=detail&gid=" + this.props.curTTag.id;
      var url = "../confirmOrder/index?" + query;

      _index2.default.navigateTo({ url: url });
    }
  }, {
    key: "handleBtnLjqClick",
    value: function handleBtnLjqClick(e) {
      e.stopPropagation();
      this.track('ljq');

      var query = "from=detail&gid=" + this.props.curTTag.id;
      var url = "../confirmOrder/index?" + query;

      _index2.default.navigateTo({ url: url });
    }
  }, {
    key: "onClickHomeTab",
    value: function onClickHomeTab() {
      // console.log('onClickHomeTab')
      _index2.default.switchTab({
        url: '../home/index'
      });
    }
  }, {
    key: "handleSelectTypeClose",
    value: function handleSelectTypeClose() {
      this.setState({
        isOpenSelectType: false
      });
    }

    // 选择产品型号

  }, {
    key: "onClickTypeTag",
    value: function onClickTypeTag(tag, e) {
      e.stopPropagation();
      // console.log(tag)
      // console.log(e)
      var _props2 = this.props,
          dispatchChangeTypeTag = _props2.dispatchChangeTypeTag,
          tTagsArr = _props2.tTagsArr;

      if (tag.active) {
        return false;
      }

      var curT = void 0;
      tTagsArr.map(function (t) {
        if (t.id == tag.name) {
          curT = t;
        }
      });
      var _curT = curT,
          tit = _curT.tit,
          id = _curT.id;

      var app = getApp();
      app.km.track('size', {
        gid: id,
        size: tit
      });
      // console.log(curT)
      dispatchChangeTypeTag(curT);
      this.track('page_detail');
    }

    // 确认后加入购物车

  }, {
    key: "handleClickConfirmBuyBtn",
    value: function handleClickConfirmBuyBtn() {
      var _state = this.state,
          goodNum = _state.goodNum,
          groupNum = _state.groupNum;
      var _props3 = this.props,
          curTTag = _props3.curTTag,
          userAction = _props3.userAction;

      var num = void 0;
      if (userAction == 'createTeam') {
        num = groupNum;
      } else {
        num = goodNum;
      }
      var gid = curTTag.id;
      var _props4 = this.props,
          dispatchAddCard = _props4.dispatchAddCard,
          cardStatus = _props4.cardStatus;

      if (cardStatus == 'request') {
        return false;
      }

      dispatchAddCard(gid, num);
      this.track('addcartconfirm');
      (0, _gdt.gdtTrackClick)('ADD_TO_CART', {
        goods_id: gid
      });
      this.setState({
        isIconCart: true
      });
    }

    // 确认购买，调整到确认订单页面前

  }, {
    key: "onClickConfirmBuyBtn",
    value: function onClickConfirmBuyBtn() {
      var _state2 = this.state,
          goodNum = _state2.goodNum,
          groupNum = _state2.groupNum;
      var _props5 = this.props,
          curTTag = _props5.curTTag,
          tTagsArr = _props5.tTagsArr,
          userAction = _props5.userAction;

      var num = void 0;
      if (userAction == 'createTeam') {
        num = groupNum;
      } else {
        num = goodNum;
      }

      // console.log(num)
      _index2.default.setStorage({
        key: 'userGood',
        data: { curType: curTTag, goodNum: num, typeTags: tTagsArr }
      }).then(function (res) {
        // console.log(res)
        if (res.errMsg == 'setStorage:ok') {
          if (userAction == 'self') {
            _index2.default.navigateTo({
              url: '../confirmOrder/index?from=detail'
            });
          } else if (userAction == 'createTeam') {
            _index2.default.navigateTo({
              url: '../confirmOrder/index?from=detail&type=createTeam'
            });
          }
        }
      });
    }

    // 点击 cart icon，跳转到购物车 page

  }, {
    key: "onClickCartIcon",
    value: function onClickCartIcon() {
      this.track('addcart1');
      _index2.default.switchTab({
        url: '../cart/index?f=detail'
      });
    }

    // 参加他人的组队

  }, {
    key: "onClickJoinBtn",
    value: function onClickJoinBtn(gid, group_code, isMe) {
      this.track('go');
      (0, _gdt.gdtTrackClick)('INITIATE_CHECKOUT', {
        buyType: 'groupbuy',
        goods_id: gid
      });
      // console.log(gid)
      var goodId = gid ? gid : 8;
      if (isMe == 1) {
        _index2.default.navigateTo({
          url: '../shareDetail/index?from=detail&gcode=' + group_code
        });
      } else {
        _index2.default.navigateTo({
          url: '../confirmOrder/index?from=detail&type=joinTeam&gid=' + goodId + '&gcode=' + group_code
        });
      }
    }
    // 倒计时 结束调用

  }, {
    key: "onTimeUp",
    value: function onTimeUp(group_id) {
      console.log(group_id + '该组队已结束！');
    }

    // 转换 倒计时中的 时间

  }, {
    key: "converTimerGroupList",
    value: function converTimerGroupList(arrGroup) {
      if (!arrGroup || arrGroup.length == 0) {
        return false;
      }var convGroup = arrGroup.map(function (gd) {
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
      });

      return convGroup;
    }

    // 打开弹窗，查看更多

  }, {
    key: "openDialog",
    value: function openDialog() {
      this.track('more');
      this.track('Window-grouplist');
      this.setState({
        isOpened: true
      });
    }
  }, {
    key: "closeDialog",
    value: function closeDialog() {
      this.setState({
        isOpened: false
        // Alert: false
      });
    }
  }, {
    key: "showCRuleDialog",
    value: function showCRuleDialog() {
      var dispatchShowRuleDialog = this.props.dispatchShowRuleDialog;

      this.track('grouprule');
      dispatchShowRuleDialog(true);
    }
  }, {
    key: "track",
    value: function track(name) {
      var curTTag = this.props.curTTag;

      var gid = curTTag.goodInfo.id ? curTTag.goodInfo.id : 'no_gid';
      /* eslint-disable */
      var app = getApp();
      /* eslint-enable */
      app.km.track(name + '_' + gid, null);
    }
    //跳转星选推荐

  }, {
    key: "linkStar",
    value: function linkStar() {
      this.track('comment');
      _index2.default.navigateTo({
        url: '/pages/stars/index'
      });
    }

    // 客服埋点

  }, {
    key: "clickCs",
    value: function clickCs() {
      /* eslint-disable */
      var app = getApp();
      /* eslint-enable */
      app.km.track('customerservice', null);
    }
  }, {
    key: "isSecKillProduct",
    value: function isSecKillProduct(limitedSaleType) {
      return limitedSaleType === 1;
    }
  }, {
    key: "seckillHasBegun",
    value: function seckillHasBegun(startDate) {
      if (this.isNil(startDate)) {
        return false;
      }

      return (0, _index5.default)(new Date(), new Date(this.formatDate(startDate)));
    }
  }, {
    key: "seckillOutOfDate",
    value: function seckillOutOfDate(endDate) {
      if (this.isNil(endDate)) {
        return false;
      }

      return (0, _index5.default)(new Date(), new Date(this.formatDate(endDate)));
    }

    /**
     * 专门用于将 `2019-08-28 00:00:00` 格
     * 式化成 `2019/08/28 00:00:00`，
     *
     * 否则 IOS 设备小程序无法正确解析日期。
     */

  }, {
    key: "formatDate",
    value: function formatDate(date) {
      return date.replace(/-/g, '/');
    }
  }, {
    key: "isNil",
    value: function isNil(it) {
      return it == null || it == undefined;
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

      var _state3 = this.__state,
          isIconCart = _state3.isIconCart,
          goodNum = _state3.goodNum,
          groupNum = _state3.groupNum,
          isIphoneX = _state3.isIphoneX;
      var _props6 = this.__props,
          curTTag = _props6.curTTag,
          userAction = _props6.userAction,
          arrGroup = _props6.arrGroup,
          groupTotalNum = _props6.groupTotalNum;
      var goodInfo = curTTag.goodInfo;
      var id = goodInfo.id,
          name = goodInfo.name,
          comment = goodInfo.comment,
          comment2 = goodInfo.comment2,
          price = goodInfo.price,
          banner_image_path = goodInfo.banner_image_path,
          banner_images_path = goodInfo.banner_images_path,
          detail_images_path = goodInfo.detail_images_path,
          group_price = goodInfo.group_price,
          buy_count = goodInfo.buy_count,
          member_count = goodInfo.member_count,
          is_group = goodInfo.is_group,
          is_limited_sale = goodInfo.is_limited_sale,
          ls_end_at = goodInfo.ls_end_at,
          ls_start_at = goodInfo.ls_start_at,
          sales = goodInfo.sales,
          ls_quantity = goodInfo.ls_quantity;


      var checkIfSoldOut = function checkIfSoldOut(sal, quantity) {
        return sal >= quantity;
      };

      // 待办：提供默认值，且仅在秒杀商品场景下执行
      var seckillMode = this.isSecKillProduct(is_limited_sale) && this.seckillHasBegun(ls_start_at) && !this.seckillOutOfDate(ls_end_at);

      var swItemArr = banner_images_path && JSON.parse(banner_images_path).length > 0 ? JSON.parse(banner_images_path) : [banner_image_path];

      // console.log(detail_images_path)
      var picsObj = detail_images_path ? JSON.parse(detail_images_path) : '';
      var dPics = [].concat(_toConsumableArray(picsObj));

      var arrGroupConveredTimer = arrGroup && arrGroup.length > 0 ? this.converTimerGroupList(arrGroup) : [];
      // console.log(arrGroupConveredTimer)

      var anonymousState__temp5 = (0, _index.internal_inline_style)(this.__state.posa);

      this.anonymousFunc1 = function (e) {
        e.stopPropagation();
        _this2.onClickCartIcon();
      };

      this.anonymousFunc2 = function (e) {
        e.stopPropagation();
        _this2.showCRuleDialog();
      };

      var anonymousState__temp6 = !this.isSecKillProduct(is_limited_sale) ? is_group == 1 ? group_price ? Math.floor(group_price) / 100 : '?' : price ? Math.floor(price) / 100 : '?' : null;
      var anonymousState__temp7 = is_group == 1 ? price ? Math.floor(price) / 100 : '?' : null;
      var anonymousState__temp8 = seckillMode ? new Date(this.formatDate(ls_end_at)).getTime() : null;

      this.anonymousFunc3 = function (e) {
        e.stopPropagation();
        _this2.onClickHomeTab();
      };

      var anonymousState__temp9 = seckillMode || this.seckillOutOfDate(ls_end_at) ? checkIfSoldOut(sales, ls_quantity) || this.seckillOutOfDate(ls_end_at) : null;
      var anonymousState__temp10 = seckillMode || this.seckillOutOfDate(ls_end_at) ? (0, _index7.default)('tab-sec-snap', {
        soldout: checkIfSoldOut(sales, ls_quantity)
      }) : null;
      var anonymousState__temp11 = seckillMode || this.seckillOutOfDate(ls_end_at) ? checkIfSoldOut(sales, ls_quantity) || this.seckillOutOfDate(ls_end_at) ? '已售罄' : '立即抢' : null;
      var anonymousState__temp12 = is_group == 0 ? (0, _index7.default)('tab-pay tab-sec-snap', {
        soldout: checkIfSoldOut(sales, ls_quantity)
      }) : null;

      this.anonymousFunc4 = function (e) {
        e.stopPropagation();
        _this2.onClickTeamTab();
      };

      var anonymousState__temp13 = !(seckillMode || this.seckillOutOfDate(ls_end_at) || is_group == 0) ? group_price ? Math.floor(group_price) / 100 : '组团价' : null;

      this.anonymousFunc5 = function (e) {
        e.stopPropagation();
        _this2.onClickPayTab();
      };

      var anonymousState__temp14 = !(seckillMode || this.seckillOutOfDate(ls_end_at) || is_group == 0) ? price ? Math.floor(price) / 100 : 0 : null;

      this.anonymousFunc6 = function (e) {
        e.stopPropagation();
        _this2.onClickAddCartTab();
      };

      this.anonymousFunc7 = function (e) {
        e.stopPropagation();
        _this2.handleSelectTypeClose();
      };

      this.anonymousFunc8 = function (v) {
        console.log(v);
        if (userAction == 'createTeam') {
          _this2.setState({
            groupNum: v
          });
        } else {
          if (_this2.isSecKillProduct(is_limited_sale)) {
            _index2.default.showToast({
              title: '秒杀商品只能购买一件哦',
              icon: 'none'
            });

            return false;
          }

          _this2.setState({
            goodNum: v
          });
        }
      };

      this.anonymousFunc9 = function (e) {
        e.stopPropagation();
        _this2.handleClickConfirmBuyBtn();
      };

      var anonymousState__temp15 = !this.isSecKillProduct(is_limited_sale);
      var anonymousState__temp16 = !this.isSecKillProduct(is_limited_sale);
      var anonymousState__temp17 = seckillMode || this.seckillOutOfDate(ls_end_at);
      var anonymousState__temp18 = !(seckillMode || this.seckillOutOfDate(ls_end_at) || is_group == 0);
      var anonymousState__temp19 = !(seckillMode || this.seckillOutOfDate(ls_end_at) || is_group == 0);
      var loopArray0 = dPics.map(function (url) {
        url = {
          $original: (0, _index.internal_get_original)(url)
        };
        var $loopState__temp2 = id + ':' + url.$original;
        return {
          $loopState__temp2: $loopState__temp2,
          $original: url.$original
        };
      });
      var loopArray1 = arrGroupConveredTimer.map(function (gb, __index0) {
        gb = {
          $original: (0, _index.internal_get_original)(gb)
        };

        // 判断userInfo里的openid是否相同
        var IDStaus = false;
        if (gb.$original && gb.$original.avatar) {
          var userInfoID = gb.$original.openid;
          var km_uuid = _index2.default.getStorageSync('km_uuid');
          var ID = "km_oid" + km_uuid;
          var openId = _index2.default.getStorageSync(ID);
          // console.warn(gb, userInfoID, openId, '你说呢')
          if (userInfoID == openId) {
            IDStaus = true;
          }
        }

        _this2.anonymousFunc0Array[__index0] = function (e) {
          e.stopPropagation();
          _this2.onClickJoinBtn(gb.$original.good_id, gb.$original.code, gb.$original.mine);
        };

        var $loopState__temp4 = { hours: ':', minutes: ':', seconds: '' };
        return {
          IDStaus: IDStaus,
          $loopState__temp4: $loopState__temp4,
          $original: gb.$original
        };
      });
      Object.assign(this.__state, {
        anonymousState__temp5: anonymousState__temp5,
        anonymousState__temp6: anonymousState__temp6,
        anonymousState__temp7: anonymousState__temp7,
        anonymousState__temp8: anonymousState__temp8,
        anonymousState__temp9: anonymousState__temp9,
        anonymousState__temp10: anonymousState__temp10,
        anonymousState__temp11: anonymousState__temp11,
        anonymousState__temp12: anonymousState__temp12,
        anonymousState__temp13: anonymousState__temp13,
        anonymousState__temp14: anonymousState__temp14,
        anonymousState__temp15: anonymousState__temp15,
        anonymousState__temp16: anonymousState__temp16,
        anonymousState__temp17: anonymousState__temp17,
        anonymousState__temp18: anonymousState__temp18,
        anonymousState__temp19: anonymousState__temp19,
        loopArray0: loopArray0,
        loopArray1: loopArray1,
        dPics: dPics,
        curTTag: curTTag,
        arrGroupConveredTimer: arrGroupConveredTimer,
        swItemArr: swItemArr,
        _params: _params,
        $router: $router,
        iconCS: iconCS,
        iconCart: iconCart,
        is_group: is_group,
        iconRight: iconRight,
        seckillMode: seckillMode,
        groupTotalNum: groupTotalNum,
        goodInfo: goodInfo,
        iconHome: iconHome,
        iconTabCart: iconTabCart,
        iconClose: iconClose,
        userAction: userAction,
        buy_count: buy_count,
        name: name,
        comment: comment,
        comment2: comment2,
        member_count: member_count
      });
      return this.__state;
    }
  }, {
    key: "anonymousFunc0",
    value: function anonymousFunc0(__index0, e) {
      e.stopPropagation();
      this.anonymousFunc0Array[__index0] && this.anonymousFunc0Array[__index0](e);
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
      e.stopPropagation();
    }
  }, {
    key: "anonymousFunc8",
    value: function anonymousFunc8(e) {
      ;
    }
  }, {
    key: "anonymousFunc9",
    value: function anonymousFunc9(e) {
      e.stopPropagation();
    }
  }]);

  return Detail;
}(_index.Component), _class2.properties = {
  "dispatchGetGood": {
    "type": null,
    "value": null
  },
  "curTTag": {
    "type": null,
    "value": null
  },
  "dispatchAddCard": {
    "type": null,
    "value": null
  },
  "cardStatus": {
    "type": null,
    "value": null
  },
  "dispatchChangeTypeTag": {
    "type": null,
    "value": null
  },
  "tTagsArr": {
    "type": null,
    "value": null
  },
  "userAction": {
    "type": null,
    "value": null
  },
  "dispatchShowRuleDialog": {
    "type": null,
    "value": null
  },
  "arrGroup": {
    "type": null,
    "value": null
  },
  "groupTotalNum": {
    "type": null,
    "value": null
  }
}, _class2.$$events = ["onClickTypeTag", "onTimeUp", "anonymousFunc0", "onChangeStaus", "clickCs", "anonymousFunc1", "anonymousFunc2", "openDialog", "linkStar", "anonymousFunc3", "handleBtnSecSnapClick", "handleBtnLjqClick", "anonymousFunc4", "anonymousFunc5", "anonymousFunc6", "anonymousFunc7", "anonymousFunc8", "anonymousFunc9", "closeDialog"], _temp2)) || _class) || _class);
exports.default = Detail;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Detail, true));