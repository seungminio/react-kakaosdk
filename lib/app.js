"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isInitialized = exports["default"] = void 0;
var __assign = void 0 && (void 0).__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
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
var getKakaoSDK = function getKakaoSDK() {
  return new Promise(function (resolve, reject) {
    var _a;
    if (typeof window === 'undefined') reject({
      message: 'unsupported platform'
    });
    var kakaoSDK = window.Kakao;
    if (kakaoSDK) {
      resolve(kakaoSDK);
      return;
    }
    var jsapi = document.createElement('script');
    jsapi.type = 'text/javascript';
    jsapi.src = 'https://developers.kakao.com/sdk/js/kakao.min.js';
    var s = document.getElementsByTagName('script')[0];
    (_a = s === null || s === void 0 ? void 0 : s.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(jsapi, s);
    jsapi.onload = function () {
      return resolve(window.Kakao);
    };
    jsapi.onabort = jsapi.onerror = reject;
  });
};
var init = function init(appKey) {
  return __awaiter(void 0, void 0, void 0, function () {
    var kakao;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          return [4, getKakaoSDK()];
        case 1:
          kakao = _a.sent();
          if (!kakao.isInitialized()) kakao.init(appKey);
          return [2];
      }
    });
  });
};
var isInitialized = function isInitialized() {
  return __awaiter(void 0, void 0, void 0, function () {
    var Kakao;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          return [4, getKakaoSDK()];
        case 1:
          Kakao = _a.sent();
          return [2, Kakao.isInitialized()];
      }
    });
  });
};
exports.isInitialized = isInitialized;
var requestAsync = function requestAsync(props) {
  if (!window.Kakao || !window.Kakao.isInitialized()) throw {
    message: 'not initialized'
  };
  return new Promise(function (resolve, reject) {
    window.Kakao.API.request(__assign(__assign({}, props), {
      success: function success(r) {
        return resolve(r);
      },
      fail: function fail(e) {
        return reject(e);
      }
    }));
  });
};
var request = function request(props) {
  requestAsync({
    url: props.url,
    data: props.data
  }).then(function (e) {
    var _a;
    (_a = props.success) === null || _a === void 0 ? void 0 : _a.call(props, e);
    return e;
  })["catch"](function (e) {
    var _a;
    (_a = props.fail) === null || _a === void 0 ? void 0 : _a.call(props, e);
    return e;
  }).then(function (e) {
    var _a;
    (_a = props.always) === null || _a === void 0 ? void 0 : _a.call(props, e);
  });
};
var app = {
  init: init,
  isInitialized: isInitialized,
  API: {
    request: request,
    requestAsync: requestAsync
  }
};
var _default = app;
exports["default"] = _default;