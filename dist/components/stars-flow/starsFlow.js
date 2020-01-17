"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _index = require("../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _starsData = require("../../constants/starsData.js");

var _api = require("../../service/api.js");

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var hearts = "/assets/hearts.png";
var heart = "/assets/heart.png";
var tits = "/assets/images/line.png";

// console.warn(starsData)
var waterfall = (_temp2 = _class = function (_BaseComponent) {
  _inherits(waterfall, _BaseComponent);

  function waterfall() {
    var _ref;

    var _temp, _this2, _ret;

    _classCallCheck(this, waterfall);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = waterfall.__proto__ || Object.getPrototypeOf(waterfall)).call.apply(_ref, [this].concat(args))), _this2), _this2.$usedState = ["tits", "arrs", "android", "heart", "hearts", "datas", "types"], _this2.$$refs = [], _temp), _possibleConstructorReturn(_this2, _ret);
  }

  // http://demotest.kmtongji.com/huggies/img/t5/bin/1.jpg

  _createClass(waterfall, [{
    key: "_constructor",
    value: function _constructor() {
      _get(waterfall.prototype.__proto__ || Object.getPrototypeOf(waterfall.prototype), "_constructor", this).apply(this, arguments);
      this.state = {
        // 昵称，展示图，标题缩略文字，链接，点赞数
        datas: _starsData.starsData
      };
    }
  }, {
    key: "dianzna",
    value: function dianzna(index) {
      var app = getApp();
      app.km.track('like_' + index, null);
      var _this = this;
      _api2.default.post('api/awesome', {
        type: 2,
        custom_id: index
      }).then(function (res) {
        if (res.code === 20000) {
          _this.ajaxData();
        }
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.ajaxData();
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      // console.warn(this.props.info, 'asd')
      this.ajaxData();
    }
  }, {
    key: "ajaxData",
    value: function ajaxData() {
      var _this3 = this;

      var zanData = [];
      _api2.default.get('api/awesome_list', {
        type: 2
      }).then(function (res) {
        var resData = res.data; // 返回的数据

        var _loop = function _loop(k) {
          var filterData = resData.filter(function (e) {
            return e.custom_id == _starsData.starsData[k].id;
          }); // 筛选出id相同的
          var fgData = _starsData.starsData[k];
          var endData = Object.assign(fgData, filterData[0]);
          // console.warn(endData)
          if (filterData.length !== 0) {
            zanData.push(_extends({}, endData));
          }
          // console.warn(endData,'111')
        };

        for (var k in _starsData.starsData) {
          _loop(k);
        }

        _this3.setState({
          datas: zanData
        });
      });
    }
  }, {
    key: "toLink",
    value: function toLink(e) {
      console.log(e.custom_id);

      var app = getApp();
      app.km.track('rec_' + e.id, null);
      _index2.default.setStorage({ key: 'starsData', data: e });
      _index2.default.navigateTo({
        url: "/pages/starsDetail/index?id=" + e.id + "&total=" + e.awesome_total + "&gid=" + e.gid + "&gid_pic=" + e.gid_pic
      });
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __runloopRef = arguments[2];
      ;

      var types = this.__props.types;
      var datas = this.__state.datas;

      if (!datas) {
        return false;
      }var Sys = _index2.default.getSystemInfoSync();
      var android = Sys.system.indexOf(false); //true 安卓
      var arrs = [];
      // console.warn(types)
      if (types && types.recommendable_three) {
        datas.map(function (e) {
          if (e.id == '9' || e.id == '10' || e.id == '11') {
            arrs.push(e);
          }
        });
      } else {
        arrs = datas;
      }

      Object.assign(this.__state, {
        tits: tits,
        arrs: arrs,
        android: android,
        heart: heart,
        hearts: hearts
      });
      return this.__state;
    }
  }]);

  return waterfall;
}(_index.Component), _class.properties = {
  "types": {
    "type": null,
    "value": null
  }
}, _class.$$events = ["toLink", "dianzna"], _class.defaultProps = {}, _temp2);
exports.default = waterfall;
// {/* 右边 */}
// <View className='List-right' >
//   {
//     datas.map((item, index) => (
//       <View className='startsCard' key={index}>
//         <Image src={item.img} mode='widthFix' className='pic' />
//         <View className='main'>
//           <Text className='tits'>
//             好奇夏日限定蜜桃。。。。
//           </Text>
//           <Image src={heart} mode='widthFix' className='heart' />
//           <Text className='nums'>1234</Text>
//         </View>
//       </View>
//     ))
//   }
// </View>

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(waterfall));