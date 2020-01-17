'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _actionType = require('./action-type.js');

var GOOD = _interopRequireWildcard(_actionType);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var initialState = {
  addCardStatus: 'complete', // 'request', complete
  typeTags: [{ tit: 'NB-1片', id: 1, goodInfo: {} }, { tit: 'NB-66片', id: 8, goodInfo: {} }],
  curTag: { tit: 'NB-1片', id: 1, goodInfo: {} },
  actionType: 'self', // self 单人买； createTeam 发起组团买；  joinTeam 加入别人的组队
  groupList: [], // 正在发起的组团
  totalGroup: 1 // 正在发起的总的组团人数
};

function getTypesByTier(gList, gid) {
  if (!gList || gList.length == 0) {
    return [];
  }
  var curGItem = void 0;
  var types = gList.map(function (g) {
    if (gid == g.id) {
      curGItem = g;
    }
    return {
      tit: g.size + '-' + g.piece + '片',
      id: g.id,
      goodInfo: g
    };
  });

  var curType = {
    tit: curGItem.size + '-' + curGItem.piece + '片',
    id: curGItem.id,
    goodInfo: curGItem
  };

  return {
    types: types,
    curType: curType
  };
}

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var _ref = arguments[1];
  var type = _ref.type,
      payload = _ref.payload;

  switch (type) {
    case GOOD.SHOW_GOOD_DETAIL:
      var gtInfo = getTypesByTier(payload.goods, payload.gid);
      var types = gtInfo.types,
          curType = gtInfo.curType;
      // console.log(types)

      return _extends({}, state, {
        goodDetail: payload.goods[0],
        typeTags: types,
        curTag: curType
      });

    case GOOD.ADD_CARD_STATUS:
      return _extends({}, state, { toastMsg: payload.msg });

    case GOOD.CHANGE_GOOD_TYPE:
      return _extends({}, state, { curTag: payload.curType });

    case GOOD.CHAGNE_ACTION_TYPE:
      return _extends({}, state, { actionType: payload.aType });

    case GOOD.CHANGE_GROUP_LIST:
      return _extends({}, state, { groupList: payload.arrGroup, totalGroup: payload.tg });

    default:
      return state;
  }
};