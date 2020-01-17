"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseArrayQuery = parseArrayQuery;
exports.postOrderInfo = postOrderInfo;
exports.requestPayment = requestPayment;
exports.getAddress = getAddress;
exports.getGoodsDyncPrice = getGoodsDyncPrice;
exports.showTotalPrice = showTotalPrice;
exports.getAllGoodByArrGid = getAllGoodByArrGid;
exports.changeUserGoods = changeUserGoods;
exports.changeBuyType = changeBuyType;
exports.showErrDialog = showErrDialog;
exports.postFormIdInfo = postFormIdInfo;
exports.changePayStatus = changePayStatus;

var _index = require("../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _actionType = require("./action-type.js");

var ORDER = _interopRequireWildcard(_actionType);

var _api = require("../../service/api.js");

var _api2 = _interopRequireDefault(_api);

var _gdt = require("../../utils/gdt.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * @typedef {import("./reducer.js")} GoodItem
 */

function parseArrayQuery(arr) {
  try {
    var tempArr = [];
    for (var i = 0; i < arr.length; i++) {
      var key = encodeURIComponent('id[]');
      var value = encodeURIComponent(arr[i]);
      tempArr.push(key + '=' + value);
    }
    var urlParamsStr = tempArr.join('&');
    return urlParamsStr;
  } catch (err) {
    return '';
  }
}
/**
 * 提交订单
 * @param  {Object} orderInfo
 */
function postOrderInfo(orderInfo) {
  var _this = this;

  return function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch) {
      var role, goods, from, mid, arrGid, strGids, payInfo;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              console.log(orderInfo);
              role = orderInfo.role, goods = orderInfo.goods, from = orderInfo.from, mid = orderInfo.mid;
              arrGid = goods.map(function (g) {
                return g.id;
              });
              // console.log(arrGid)

              strGids = arrGid.join(',');
              // console.log(strGids)

              dispatch(changePayStatus('req_pay'));
              _context.next = 7;
              return _api2.default.post('api/order', orderInfo);

            case 7:
              payInfo = _context.sent;

              if (!(payInfo.code === 20000)) {
                _context.next = 12;
                break;
              }

              return _context.abrupt("return", dispatch(requestPayment(payInfo.data, role, strGids, from, mid)));

            case 12:
              dispatch(changePayStatus('pay_fail', payInfo.errMsg));

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, _this);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
}

/**
 * 调用微信支付
 * @param  {Object} payInfo 微信支付参数：具体如下
 * https://developers.weixin.qq.com/miniprogram/dev/api/open-api/payment/wx.requestPayment.html
 * @param  {string} ['sponsor', 'participant', 'self'] role 组队购买时的角色: 'sponsor'发起者；'participant' 参与者，参与别人的组队；'self' 非团购单独购买
 * @param  {string} strGids 下单商品的 gid，多个用,链接
 * @param  {string} from 下单来源 cart 从购物车，sku 详情页面
 */
function requestPayment(payInfo, role, strGids, from, mid) {
  console.log(payInfo);
  var group_code = payInfo.group_code;

  return function (dispatch) {
    _index2.default.requestPayment({
      timeStamp: payInfo.timeStamp,
      nonceStr: payInfo.nonceStr,
      package: payInfo.package,
      signType: payInfo.signType,
      paySign: payInfo.paySign,
      complete: function complete(resp) {
        if (resp.errMsg === 'requestPayment:ok') {
          var that = this;
          // 订阅消息执行事件
          wx.requestSubscribeMessage({
            tmplIds: mid,
            success: function success(res) {},
            fail: function fail(res) {},
            complete: function complete(res) {
              var arr = [];
              var brr = [];
              for (var k in res) {
                if (res[k] == 'reject') {
                  brr.push(res[k]);
                }
                if (k !== 'errCode') {
                  arr.push({
                    key: k,
                    val: res[k]
                  });
                }
              }
              // if(res.errCode == 20004) return false;
              if (arr.length !== 0) {
                _api2.default.post('api/subscribe', {
                  sub_data: JSON.stringify(arr)
                }).then(function (res) {
                  if (res.code == 20000) {}
                });
              }
              (0, _gdt.gdtTrackClick)('PURCHASE', {
                goods_id: strGids
              });
              if (role == 'sponsor' || role == 'participant') {
                _index2.default.navigateTo({
                  url: '../shareDetail/index?gcode=' + group_code
                });
              } else {
                _index2.default.navigateTo({
                  url: '../success/index?gids=' + strGids
                });
              }
              dispatch(changePayStatus('pay_suc'));
            }
          });
        } else if (resp.errMsg === 'requestPayment:fail cancel') {
          var _that = this;
          wx.requestSubscribeMessage({
            tmplIds: mid,
            // tmplIds: ['xlh6P0BPMQybVbxb1vyXB4762VprP2_C9BEr-3KcSqk'],
            success: function success(res) {},
            fail: function fail(res) {},
            complete: function complete(res) {
              var arr = [];
              var brr = [];
              for (var k in res) {
                if (res[k] == 'reject') {
                  brr.push(res[k]);
                }
                if (k !== 'errCode') {
                  arr.push({
                    key: k,
                    val: res[k]
                  });
                }
              }
              // if(res.errCode == 20004) return false;
              if (arr.length !== 0) {
                _api2.default.post('api/subscribe', {
                  sub_data: JSON.stringify(arr)
                }).then(function (resa) {
                  if (res.code == 20000) {}
                });
              }
              dispatch(changePayStatus('pay_fail', '用户取消支付'));
              _index2.default.navigateTo({
                url: '../order/index?id=1&buyType=' + from + '&orderNumber=' + payInfo.order_no
              });
            }
          });
        } else {
          dispatch(changePayStatus('pay_fail', resp.errMsg));
        }
      }
    });
  };
}

// 显示微信地址
function getAddress(addressInfo) {
  console.log(addressInfo);

  return {
    type: ORDER.GET_ADDRESS,
    payload: {
      address: addressInfo
    }
  };
}

/**
 * 通过 API 动态获取 订单中的商品信息：订单总价，邮费，可以使用的优惠券
 * API : http://adm.mpmall.huggiesapp.cn/#/%E5%8A%A8%E6%80%81%E8%8E%B7%E5%8F%96%E5%95%86%E5%93%81%E4%BB%B7%E6%A0%BC%E8%BF%90%E8%B4%B9
 * @param  {Array<GoodItem>} goods
 * @param  {string} province 调用微信地址后返回的 省份信息
 * @param  {string} role 组队角色
 * @param  {string} groupId 所组队的id
 * @param  {string} coupon_id 优惠券id
 * @param  {boolean} useCoupon 是否需要使用优惠券，
 * -1 第一次请求时后端选择是否使用优惠券，并且返回最合适的优惠券；
 * 1 使用coupon_id 的优惠券
 * 0 不使用优惠券
 */
function getGoodsDyncPrice(goods, province, role, groupId, coupon_id, useCoupon) {
  var _this2 = this;

  var parseGInfo = JSON.stringify(goods);
  return function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(dispatch) {
      var res;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _api2.default.get("api/goods_dynamic_price_many?goods=" + parseGInfo + "&province=" + province + "&role=" + (role ? role : 'self') + "&group_code=" + groupId + "&coupon_id=" + (coupon_id ? coupon_id : '0') + "&use_coupon=" + (useCoupon == -1 ? -1 : useCoupon ? 1 : 0));

            case 2:
              res = _context2.sent;

              if (res.code == 20000) {
                dispatch(showTotalPrice(res.data));
                _index2.default.setStorageSync('coupon_id', res.data.coupon_id);
              }

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, _this2);
    }));

    return function (_x2) {
      return _ref2.apply(this, arguments);
    };
  }();
}

function showTotalPrice(tp) {
  console.log(tp);
  return {
    type: ORDER.GET_GOODS_PRICE,
    payload: {
      totalPrice: tp
    }
  };
}
/**
 * 获取 多个商品的详情
 * @param  {string} arrGid  由,分隔的多个gid
 * @param  {Object} arrGNum 每个商品的 中的用户的选择的数量
 */
function getAllGoodByArrGid(arrGid, arrGNum) {
  var _this3 = this;

  var queryData = parseArrayQuery(arrGid);
  console.log(queryData);

  return function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(dispatch) {
      var res;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _api2.default.get('api/goods_info_many?' + queryData);

            case 2:
              res = _context3.sent;


              if (res.code == 20000) {
                console.log(res.data);
                dispatch(changeUserGoods(res.data, arrGNum));
              }

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, _this3);
    }));

    return function (_x3) {
      return _ref3.apply(this, arguments);
    };
  }();
}

function changeUserGoods(arrGItem, arrGNum) {
  return {
    type: ORDER.CHANGE_USER_GOODS,
    payload: {
      arrG: arrGItem,
      arrGNum: arrGNum
    }
  };
}

// 购买方式
function changeBuyType(bt) {
  return {
    type: ORDER.CHANGE_BUY_TYPE,
    payload: {
      bType: bt
    }
  };
}

// 显示错误信息
function showErrDialog(msg) {
  console.log('action showErrDialog');
  console.log(msg);
  return {
    type: ORDER.SHOW_ERROR_DIALOG,
    payload: {
      errTip: msg
    }
  };
}

// 提交formId 用于发送模板消息
function postFormIdInfo(fid) {
  _api2.default.post('api/form', {
    form_id: fid
  }).then(function (res) {
    console.log(res);
  });
}

// 支付状态 req_pay, pay_suc, pay_fail
function changePayStatus(status, info) {
  return {
    type: ORDER.PAY_STATUS,
    payload: {
      pay_status: status,
      pay_info: info
    }
  };
}