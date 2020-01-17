'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
                                                                                                                                                                                                                                                                   * @typedef {string} url
                                                                                                                                                                                                                                                                   *
                                                                                                                                                                                                                                                                   * 商品详情
                                                                                                                                                                                                                                                                   * @typedef   {Object} GoodItem
                                                                                                                                                                                                                                                                   * @property  {number} id 商品id
                                                                                                                                                                                                                                                                   * @property  {string} name 商品名称
                                                                                                                                                                                                                                                                   * @property  {string} custom_code 自定义类型code
                                                                                                                                                                                                                                                                   * @property  {string} catalog 商品分类 列表展示分区使用
                                                                                                                                                                                                                                                                   * @property  {string} tier  商品 tier 同类型可以在商品详情中切换
                                                                                                                                                                                                                                                                   * @property  {string} size  商品尺寸
                                                                                                                                                                                                                                                                   * @property  {number} piece 商品 套装内的商品片数
                                                                                                                                                                                                                                                                   * @property  {number} price 商品正常价格
                                                                                                                                                                                                                                                                   * @property  {number} stock 商品库存
                                                                                                                                                                                                                                                                   * @property  {string} unit 商品售卖单位
                                                                                                                                                                                                                                                                   * @property  {string} comment 商品自定义描述
                                                                                                                                                                                                                                                                   * @property  {string} comment2 商品自定义描述2
                                                                                                                                                                                                                                                                   * @property  {string} comment3 商品自定义描述3
                                                                                                                                                                                                                                                                   * @property  {number} group_price 商品组队价格
                                                                                                                                                                                                                                                                   * @property  {number} member_count 组队人数，多少人成团组队
                                                                                                                                                                                                                                                                   * @property  {url} thumbnail_path 商品缩略图，购物车，订单页面展示用
                                                                                                                                                                                                                                                                   * @property  {url} banner_image_path  产品banner 图片  首页轮播图
                                                                                                                                                                                                                                                                   * @property  {Array<url>} banner_images_path 产品banners 图片  详情轮播图
                                                                                                                                                                                                                                                                   * @property  {Array<url>} detail_images_path 产品详情描述图片
                                                                                                                                                                                                                                                                   */

var _actionType = require('./action-type.js');

var ORDER = _interopRequireWildcard(_actionType);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var initialState = {
  pay_info: '',
  pay_status: 'no',
  user_address: { provinceName: '' },
  totalPrice: {
    coupon_id: 0, // 优惠券id
    discount: '', // 订单总的优惠款项
    discount_desc: 0, // 当前所选优惠券的优惠款项
    logistics_fee: 0 // 运费
  }, // API goods_dynamic_price 返回数据
  userGoods: [], // API goods_info_many 返回数据
  buyType: 'self', // 'self' 单独购买，'cartMutiple' 多产品购买； 'joinTeam' 与他人参团买; 'createTeam' 新开团买
  errDialogTip: 'none' // 默认情况为 'none'不显示

  /**
   * 通过 arrGoods 获取 同Tier 下的 类型于数量组合
   * @param  {Array<GoodItem>} gList
   */
};function getTypesByTier(gList) {
  if (!gList || gList.length == 0) {
    return [];
  }
  var types = gList.map(function (g) {
    return {
      tit: g.size + '-' + g.piece + '片',
      id: g.id,
      goodInfo: g
    };
  });
  // console.log(types)
  return types;
}

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var _ref = arguments[1];
  var type = _ref.type,
      payload = _ref.payload;

  switch (type) {
    case ORDER.POST_ORDER:
      return _extends({}, state, payload);

    case ORDER.SHOW_ERROR_DIALOG:
      console.log('reducer SHOW_ERROR_DIALOG');
      console.log(payload.errTip);
      return _extends({}, state, { errDialogTip: payload.errTip });

    case ORDER.PAY_STATUS:
      return _extends({}, state, payload);

    case ORDER.GET_ADDRESS:
      return _extends({}, state, { user_address: payload.address });

    case ORDER.GET_GOODS_PRICE:
      return _extends({}, state, { totalPrice: payload.totalPrice });

    case ORDER.CHANGE_USER_GOODS:
      var arrGItem = payload.arrG;
      var arrGNum = payload.arrGNum;
      var arrGid = Object.keys(arrGItem);

      var arrUGS = arrGid.map(function (k) {
        var arrGood = arrGItem[k];
        var typeTs = getTypesByTier(arrGood);
        var curGitem = {};
        arrGood.map(function (g) {
          if (g.id == k) {
            curGitem = g;
          }
        });
        var curGNumItem = {};
        arrGNum.map(function (gn) {
          if (gn.id == k) {
            curGNumItem = gn;
          }
        });

        return {
          curType: {
            tit: curGitem.size + '-' + curGitem.piece + '片',
            id: curGitem.id,
            goodInfo: curGitem
          },
          typeTags: typeTs,
          goodNum: curGNumItem.numb
        };
      });
      console.log(arrUGS);
      return _extends({}, state, { userGoods: arrUGS });

    case ORDER.CHANGE_BUY_TYPE:
      return _extends({}, state, { buyType: payload.bType });

    default:
      return state;
  }
};