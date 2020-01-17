'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// const devURL = "http://localhost:3000"; // 开发环境，需要开启mock server（执行：gulp mock）
// const devURL = 'https://www.easy-mock.com/mock/5cc59123ad97307c95f389b4/api'
// const devURL = 'http://frp.kmtongji.com/'
// const devURL = 'http://test.mall.kmtongji.com/'
var devURL = 'https://test.mall.kmtongji.com/';
// const devURL = 'https://mpmall.huggiesapp.cn/'
var prodURL = 'https://mpmall.huggiesapp.cn/'; // 生产环境，线上服务器

var BASE_URL = devURL;

exports.default = BASE_URL;