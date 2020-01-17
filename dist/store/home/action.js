"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCatalog = exports.showCataLog = exports.showBanner = exports.getBanner = undefined;

var _actionType = require("./action-type.js");

var INDEX = _interopRequireWildcard(_actionType);

var _api = require("../../service/api.js");

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var getBanner = exports.getBanner = function getBanner() {
  return function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch) {
      var res;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _api2.default.get('api/main_goods');

            case 2:
              res = _context.sent;

              if (res.code === 20000) {
                dispatch(showBanner(res.data));
              }

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};

var showBanner = exports.showBanner = function showBanner(data) {
  return {
    type: INDEX.SHOW_BANNER,
    payload: {
      banner: data
    }
  };
};
var showCataLog = exports.showCataLog = function showCataLog(data) {
  return {
    type: INDEX.SHOW_CATALOG,
    payload: {
      cataList: data
    }
  };
};

var getCatalog = exports.getCatalog = function getCatalog() {
  return function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(dispatch) {
      var res;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _api2.default.get('api/catalogs');

            case 2:
              res = _context2.sent;

              if (res) {
                _context2.next = 5;
                break;
              }

              return _context2.abrupt("return", false);

            case 5:
              console.log(res);
              if (res.code === 20000) {
                dispatch(showCataLog(res.data));
                dispatch(getBanner(res.data));
              }

            case 7:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, undefined);
    }));

    return function (_x2) {
      return _ref2.apply(this, arguments);
    };
  }();
};