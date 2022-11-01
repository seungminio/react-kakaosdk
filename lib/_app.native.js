"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unlink = exports.openChannelChat = exports.openChannel = exports.manualLogin = exports.logout = exports.loginWithNewScopes = exports.login = exports.isInitialized = exports.init = exports.getProfile = exports.getAccessToken = exports["default"] = void 0;
var _reactNative = require("react-native");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __generator = void 0 && (void 0).__generator || function (thisArg, body) {
  var _ = {
      label: 0,
      sent: function sent() {
        if (t[0] & 1) throw t[1];
        return t[1];
      },
      trys: [],
      ops: []
    },
    f,
    y,
    t,
    g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;
  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];
        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;
          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };
          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;
          case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;
          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }
            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            if (t[2]) _.ops.pop();
            _.trys.pop();
            continue;
        }
        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }
    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};
var RNAKakaoSDK = _reactNative.NativeModules.RNAKakaoSDK;
var dateToSeconds = function dateToSeconds(str) {
  var v = new Date(str === null || str === void 0 ? void 0 : str.replace(' ', 'T')).getTime();
  var n = new Date().getTime();
  return Math.floor((v - n) / 1000);
};
var valueToSnakeCase = function valueToSnakeCase(data) {
  var _a, _b;
  var args = {};
  for (var _i = 0, _c = Object.keys(data); _i < _c.length; _i++) {
    var key = _c[_i];
    var nkey = key.replace(/(?:^|\.?)([A-Z])/g, function (_x, y) {
      return '_' + y.toLowerCase();
    }).replace(/^_/, '');
    if (data[key] && _typeof(data[key]) === 'object' && !((_a = data[key]) === null || _a === void 0 ? void 0 : _a.push) && ((_b = Object.keys(data[key])) === null || _b === void 0 ? void 0 : _b.length) > 0) {
      args[nkey] = valueToSnakeCase(data[key]);
    } else {
      args[nkey] = data[key];
    }
  }
  return args;
};
var init = function init(appKey) {
  return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
      RNAKakaoSDK.init(appKey);
      return [2];
    });
  });
};
exports.init = init;
var isInitialized = function isInitialized() {
  return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          return [4, RNAKakaoSDK.isInitialized()];
        case 1:
          return [2, _a.sent()];
      }
    });
  });
};
exports.isInitialized = isInitialized;
var login = function login() {
  return __awaiter(void 0, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          return [4, RNAKakaoSDK.login()];
        case 1:
          result = _a.sent();
          return [2, {
            access_token: result === null || result === void 0 ? void 0 : result.accessToken,
            refresh_token: result === null || result === void 0 ? void 0 : result.refreshToken,
            scopes: result === null || result === void 0 ? void 0 : result.scopes,
            expires_in: dateToSeconds(result === null || result === void 0 ? void 0 : result.accessTokenExpiresAt),
            refresh_token_expires_in: dateToSeconds(result === null || result === void 0 ? void 0 : result.refreshTokenExpiresAt)
          }];
      }
    });
  });
};
exports.login = login;
var manualLogin = function manualLogin() {
  return __awaiter(void 0, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          return [4, RNAKakaoSDK.manualLogin()];
        case 1:
          result = _a.sent();
          return [2, {
            access_token: result === null || result === void 0 ? void 0 : result.accessToken,
            refresh_token: result === null || result === void 0 ? void 0 : result.refreshToken,
            scopes: result === null || result === void 0 ? void 0 : result.scopes,
            expires_in: dateToSeconds(result === null || result === void 0 ? void 0 : result.accessTokenExpiresAt),
            refresh_token_expires_in: dateToSeconds(result === null || result === void 0 ? void 0 : result.refreshTokenExpiresAt)
          }];
      }
    });
  });
};
exports.manualLogin = manualLogin;
var loginWithNewScopes = function loginWithNewScopes(scopes) {
  return __awaiter(void 0, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          return [4, RNAKakaoSDK.loginWithNewScopes(scopes)];
        case 1:
          result = _a.sent();
          return [2, {
            access_token: result === null || result === void 0 ? void 0 : result.accessToken,
            refresh_token: result === null || result === void 0 ? void 0 : result.refreshToken,
            scopes: result === null || result === void 0 ? void 0 : result.scopes,
            expires_in: dateToSeconds(result === null || result === void 0 ? void 0 : result.accessTokenExpiresAt),
            refresh_token_expires_in: dateToSeconds(result === null || result === void 0 ? void 0 : result.refreshTokenExpiresAt)
          }];
      }
    });
  });
};
exports.loginWithNewScopes = loginWithNewScopes;
var logout = function logout() {
  return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          return [4, RNAKakaoSDK.logout()];
        case 1:
          _a.sent();
          return [2];
      }
    });
  });
};
exports.logout = logout;
var unlink = function unlink() {
  return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          return [4, RNAKakaoSDK.unlink()];
        case 1:
          _a.sent();
          return [2];
      }
    });
  });
};
exports.unlink = unlink;
var getAccessToken = function getAccessToken() {
  return __awaiter(void 0, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          return [4, RNAKakaoSDK.getAccessToken()];
        case 1:
          result = _a.sent();
          return [2, {
            id: result.id,
            expires_in: dateToSeconds(result === null || result === void 0 ? void 0 : result.expiresIn)
          }];
      }
    });
  });
};
exports.getAccessToken = getAccessToken;
var getProfile = function getProfile() {
  return __awaiter(void 0, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          return [4, RNAKakaoSDK.getProfile()];
        case 1:
          result = _a.sent();
          return [2, valueToSnakeCase(result)];
      }
    });
  });
};
exports.getProfile = getProfile;
var openChannel = function openChannel(id) {
  return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          return [4, RNAKakaoSDK.openChannel(id)];
        case 1:
          return [2, _a.sent()];
      }
    });
  });
};
exports.openChannel = openChannel;
var openChannelChat = function openChannelChat(id) {
  return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          return [4, RNAKakaoSDK.openChannelChat(id)];
        case 1:
          return [2, _a.sent()];
      }
    });
  });
};
exports.openChannelChat = openChannelChat;
var app = {
  init: init,
  isInitialized: isInitialized,
  getAccessToken: getAccessToken,
  getProfile: getProfile,
  login: login,
  manualLogin: manualLogin,
  loginWithNewScopes: loginWithNewScopes,
  logout: logout,
  unlink: unlink,
  openChannel: openChannel,
  openChannelChat: openChannelChat
};
var _default = app;
exports["default"] = _default;