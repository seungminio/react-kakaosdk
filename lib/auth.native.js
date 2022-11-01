"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _reactNative = require("react-native");
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
var authorize = function authorize(props) {
  return __awaiter(void 0, void 0, void 0, function () {
    var redirectUri, state, scope, nonce, throughTalk;
    return __generator(this, function (_a) {
      redirectUri = props.redirectUri, state = props.state, scope = props.scope, nonce = props.nonce, throughTalk = props.throughTalk;
      console.log(redirectUri, state, scope, nonce, throughTalk);
      return [2];
    });
  });
};
var setAccessToken = function setAccessToken(accessToken) {
  console.log(accessToken);
};
var getAccessToken = function getAccessToken() {
  return '';
};
var loginAsync = function loginAsync(props) {
  return __awaiter(void 0, void 0, void 0, function () {
    var scope;
    return __generator(this, function (_a) {
      scope = props.scope;
      console.log(scope);
      return [2];
    });
  });
};
var login = function login(props) {
  var scope = props.scope,
    success = props.success,
    fail = props.fail;
  loginAsync({
    scope: scope
  }).then(function (response) {
    return success === null || success === void 0 ? void 0 : success(response);
  })["catch"](function (error) {
    return fail === null || fail === void 0 ? void 0 : fail(error);
  });
};
var logoutAsync = function logoutAsync() {
  return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
      return [2];
    });
  });
};
var logout = function logout(handler) {
  logoutAsync().then(function () {
    return handler();
  });
};
var Auth = {
  authorize: authorize,
  setAccessToken: setAccessToken,
  getAccessToken: getAccessToken,
  logout: logout,
  logoutAsync: logoutAsync,
  login: login,
  loginAsync: loginAsync
};
var _default = Auth;
exports["default"] = _default;