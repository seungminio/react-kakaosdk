"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Kakao = void 0;
var _app = _interopRequireDefault(require("./app"));
var _auth = _interopRequireDefault(require("./auth"));
var _link = _interopRequireDefault(require("./link"));
var _story = _interopRequireDefault(require("./story"));
var _channel = _interopRequireDefault(require("./channel"));
var _navi = _interopRequireDefault(require("./navi"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var _a = require('../package.json'),
  name = _a.name,
  version = _a.version,
  homepage = _a.homepage;
console.log("\n   ___  ______________  ___   ________\n  / _ |/ ___/_  __/ _ )/ _ | / __/ __/\n / __ / /__  / / / _  / __ |_\\ \\/ _/  \n/_/ |_\\___/ /_/ /____/_/ |_/___/___/ \n \n".concat(name, " ").concat(version, " :: Actbase Opensources.\nContact us -> project@actbase.io\n> https://actbase.io/opensource\n> ").concat(homepage, "\n"));
var Kakao = {
  init: _app["default"].init,
  isInitialized: _app["default"].isInitialized,
  API: _app["default"].API,
  Auth: _auth["default"],
  Link: _link["default"],
  Story: _story["default"],
  Channel: _channel["default"],
  Navi: _navi["default"]
};
exports.Kakao = Kakao;
var _default = Kakao;
exports["default"] = _default;