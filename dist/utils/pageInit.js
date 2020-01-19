"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _index = require("../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _auth = require("./auth.js");

var _auth2 = _interopRequireDefault(_auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //pageInit.js

function pageInit() {
  return function Component(Component) {
    return function (_Component) {
      _inherits(_class, _Component);

      function _class(props) {
        _classCallCheck(this, _class);

        return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));
      }

      //onLoad


      _createClass(_class, [{
        key: "componentWillMount",
        value: function componentWillMount() {}
        //初始分享信息
        // initShareMenu(this.state);


        //阻塞 didMount ， 鉴权

      }, {
        key: "componentDidMount",
        value: function () {
          var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var result;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return _auth2.default.appCheckAuth();

                  case 2:
                    result = _context.sent;

                    //授权成功
                    if (result) {
                      //调用父组件的函数
                      _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), "componentDidMount", this) && _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), "componentDidMount", this).call(this);
                    } else {
                      //授权失败
                      _index2.default.showToast({
                        title: '授权失败',
                        icon: 'none',
                        mask: true
                      });
                    }

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));

          function componentDidMount() {
            return _ref.apply(this, arguments);
          }

          return componentDidMount;
        }()

        //重写分享
        // onShareAppMessage(){
        //   let shareOptions = super.onShareAppMessage();
        //   // console.warn(shareOptions, '分享配置')
        //   //如果当前页面配置分享使用配置的
        //   if( shareOptions ) return shareOptions;
        //   //默认分享
        //   return {
        //     shareTitle: '1',
        //     sharePath: '2',
        //     shareImageUrl: '3'
        //   }
        // }

        //重新下拉刷新
        // onPullDownRefresh(){
        //     if(super.onPullDownRefresh){
        //         super.onPullDownRefresh();
        //         setTimeout(() => {
        //             Taro.stopPullDownRefresh();
        //         }, 1500)
        //     }
        // }

      }]);

      return _class;
    }(Component);
  };
}

/**
 * 初始化分享信息
 */
function initShareMenu(state) {
  console.warn(state, '初始化分享');
  // 初始化页面分享信息
  if (state && state.canShare) {
    _index2.default.showShareMenu({
      withShareTicket: false
    });
  } else {
    _index2.default.hideShareMenu();
  }
}

exports.default = pageInit;