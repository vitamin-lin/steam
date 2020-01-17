"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = require("../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _config = require("./config.js");

var _config2 = _interopRequireDefault(_config);

var _interceptors = require("./interceptors.js");

var _interceptors2 = _interopRequireDefault(_interceptors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_interceptors2.default.forEach(function (i) {
  return _index2.default.addInterceptor(i);
});

exports.default = {
  baseOptions: function baseOptions(params) {
    var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'GET';
    var url = params.url,
        data = params.data;

    var contentType = 'application/json';
    contentType = params.contentType || contentType;
    _index2.default.showLoading({
      title: '加载中'
    });
    var option = {
      url: url.indexOf('http') !== -1 ? url : _config2.default + url,
      data: data,
      method: method,
      header: {
        'content-type': contentType,
        'x-token': _index2.default.getStorageSync("token")
      },
      success: function success() {
        _index2.default.hideLoading();
      }
    };

    _index2.default.showLoading({
      title: '加载中'
    });
    return _index2.default.request(option);
  },
  get: function get(url) {
    var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

    var option = { url: url, data: data };
    return this.baseOptions(option);
  },

  post: function post(url, data, contentType) {
    var params = { url: url, data: data, contentType: contentType };
    return this.baseOptions(params, 'POST');
  },
  put: function put(url) {
    var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

    var option = { url: url, data: data };
    return this.baseOptions(option, 'PUT');
  },
  delete: function _delete(url) {
    var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

    var option = { url: url, data: data };
    return this.baseOptions(option, 'DELETE');
  }
};