"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getGroupInfo = getGroupInfo;
exports.changeGroupStates = changeGroupStates;

var _index = require("../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _actionType = require("./action-type.js");

var SHARE = _interopRequireWildcard(_actionType);

var _api = require("../../service/api.js");

var _api2 = _interopRequireDefault(_api);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function getGroupInfo(group_code, order_no) {
  var _this = this;

  return function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(disaptch) {
      var api, res;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              api = void 0;

              if (order_no) {
                api = 'group_info?order_no=' + order_no;
              } else {
                api = 'group_info?group_code=' + group_code;
              }
              _context.next = 4;
              return _api2.default.get('api/' + api);

            case 4:
              res = _context.sent;

              if (res.code == 20000) {
                disaptch(changeGroupStates(res.data));
              }

            case 6:
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

function changeGroupStates(gInfo) {
  return {
    type: SHARE.CHANGE_GROUP_STATES,
    payload: {
      gInfo: gInfo
    }
  };
}