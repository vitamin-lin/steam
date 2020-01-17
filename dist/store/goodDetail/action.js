"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getGoodById = getGoodById;
exports.updateGoodDetail = updateGoodDetail;
exports.addGoodToCard = addGoodToCard;
exports.changeAddCardStatus = changeAddCardStatus;
exports.changeTypeTag = changeTypeTag;
exports.changeUserActionType = changeUserActionType;
exports.getBuyGroupList = getBuyGroupList;
exports.changeGroupList = changeGroupList;

var _index = require("../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _actionType = require("./action-type.js");

var GOOD = _interopRequireWildcard(_actionType);

var _api = require("../../service/api.js");

var _api2 = _interopRequireDefault(_api);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var isSecKillProduct = function isSecKillProduct(limitedSaleType) {
  return limitedSaleType === 1;
};

// 获取商品信息详情
function getGoodById(id) {
  var _this = this;

  return function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch) {
      var res, rd, k_index;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _api2.default.get('api/goods_info?id=' + id);

            case 2:
              res = _context.sent;
              rd = res.data;


              if (res.code === 20000) {
                dispatch(updateGoodDetail(rd, id));
                !isSecKillProduct(rd[0].is_limited_sale);

                // 判断是否有团购
                k_index = 0;

                rd.map(function (e, k) {
                  if (e.id == id) {
                    k_index = k;
                  }
                });

                if (rd[k_index].is_group == 1) {
                  dispatch(getBuyGroupList(id));
                }
              } else {
                _index2.default.navigateBack({
                  delta: 2
                });
              }

            case 5:
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

// 更新 UI 商品信息
function updateGoodDetail(gInfo, id) {
  return {
    type: GOOD.SHOW_GOOD_DETAIL,
    payload: {
      goods: gInfo,
      gid: id
    }
  };
}

// 加入购物车
function addGoodToCard(gid, num) {
  var _this2 = this;

  return function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(dispatch) {
      var res;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              dispatch(changeAddCardStatus('request'));
              _context2.next = 3;
              return _api2.default.post('api/cart', {
                goods_id: gid,
                increase: num
              });

            case 3:
              res = _context2.sent;

              dispatch(changeAddCardStatus('complete'));
              if (res.code === 20000) {
                _index2.default.showToast({
                  title: '成功加入购物车!',
                  icon: 'success'
                });
              }

            case 6:
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

function changeAddCardStatus(s) {
  return {
    type: GOOD.ADD_CARD_STATUS,
    payload: {
      status: s
    }
  };
}

function changeTypeTag(tag) {
  console.log(tag);

  return {
    type: GOOD.CHANGE_GOOD_TYPE,
    payload: {
      curType: tag
    }
  };
}

// 通过actionType 标记用户是单买，发起组队，加入组队
function changeUserActionType(ationType) {
  return {
    type: GOOD.CHAGNE_ACTION_TYPE,
    payload: {
      aType: ationType
    }
  };
}

// 获取当前商品的组队列表
function getBuyGroupList(gid) {
  var _this3 = this;

  return function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(dispatch) {
      var res;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _api2.default.get('api/group?good_id=' + gid);

            case 2:
              res = _context3.sent;

              if (res.code === 20000) {
                dispatch(changeGroupList(res.data.items, res.data.total));
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

function changeGroupList(groupList, tg) {
  console.log(groupList);
  return {
    type: GOOD.CHANGE_GROUP_LIST,
    payload: {
      arrGroup: groupList,
      tg: tg
    }
  };
}