'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeSes = undefined;

var _index = require('../npm/@tarojs/taro-weapp/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var makeSes = exports.makeSes = function makeSes(e) {
  console.warn(e);
  var app = getApp();
  app.km.track('Window-dysz' + e, null);
  _index2.default.showModal({
    title: '信息授权提示',
    content: '点击“去设置”开启订阅，时刻向妈妈汇报订单近况~',
    confirmText: '去设置'
  }).then(function (resModal) {
    console.log(resModal.confirm, resModal.cancel);
    if (resModal.confirm) {
      // 确定
      wx.openSetting({
        success: function success(resSetting) {
          /* eslint-enable */
          app.km.track('sz', null);
        }
      });
    } else {
      var _app = getApp();
      /* eslint-enable */
      _app.km.track('qxsz', null);
      // console.warn(app)
    }
  });
};