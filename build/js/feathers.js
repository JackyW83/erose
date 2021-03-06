var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

!function (e, t) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? exports.feathers = t() : e.feathers = t();
}(this, function () {
  return function (e) {
    var t = {};function n(r) {
      if (t[r]) return t[r].exports;var o = t[r] = { i: r, l: !1, exports: {} };return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports;
    }return n.m = e, n.c = t, n.d = function (e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
    }, n.r = function (e) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
    }, n.t = function (e, t) {
      if (1 & t && (e = n(e)), 8 & t) return e;if (4 & t && "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && e && e.__esModule) return e;var r = Object.create(null);if (n.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e) for (var o in e) {
        n.d(r, o, function (t) {
          return e[t];
        }.bind(null, o));
      }return r;
    }, n.n = function (e) {
      var t = e && e.__esModule ? function () {
        return e.default;
      } : function () {
        return e;
      };return n.d(t, "a", t), t;
    }, n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }, n.p = "", n(n.s = 12);
  }([function (e, t, n) {
    function r(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }var o = n(33),
        i = n(2).Unavailable,
        s = n(1)._,
        c = n(1).stripSlashes,
        a = n(2).convert;function u(e) {
      if ("ECONNREFUSED" === e.code) throw new i(e.message, s.pick(e, "address", "port", "config"));throw a(e);
    }var f = function () {
      function e(t) {
        !function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, e), this.name = c(t.name), this.options = t.options, this.connection = t.connection, this.base = "".concat(t.base, "/").concat(this.name);
      }var t, n;return t = e, (n = [{ key: "makeUrl", value: function value(e, t) {
          e = e || {};var n = this.base;if (null != t && (n += "/".concat(encodeURIComponent(t))), 0 !== Object.keys(e).length) {
            var r = o.stringify(e);n += "?".concat(r);
          }return n;
        } }, { key: "find", value: function value() {
          var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};return this.request({ url: this.makeUrl(e.query), method: "GET", headers: Object.assign({}, e.headers) }, e).catch(u);
        } }, { key: "get", value: function value(e) {
          var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};return void 0 === e ? Promise.reject(new Error("id for 'get' can not be undefined")) : this.request({ url: this.makeUrl(t.query, e), method: "GET", headers: Object.assign({}, t.headers) }, t).catch(u);
        } }, { key: "create", value: function value(e) {
          var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};return this.request({ url: this.makeUrl(t.query), body: e, method: "POST", headers: Object.assign({ "Content-Type": "application/json" }, t.headers) }, t).catch(u);
        } }, { key: "update", value: function value(e, t) {
          var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};return void 0 === e ? Promise.reject(new Error("id for 'update' can not be undefined, only 'null' when updating multiple entries")) : this.request({ url: this.makeUrl(n.query, e), body: t, method: "PUT", headers: Object.assign({ "Content-Type": "application/json" }, n.headers) }, n).catch(u);
        } }, { key: "patch", value: function value(e, t) {
          var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};return void 0 === e ? Promise.reject(new Error("id for 'patch' can not be undefined, only 'null' when updating multiple entries")) : this.request({ url: this.makeUrl(n.query, e), body: t, method: "PATCH", headers: Object.assign({ "Content-Type": "application/json" }, n.headers) }, n).catch(u);
        } }, { key: "remove", value: function value(e) {
          var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};return void 0 === e ? Promise.reject(new Error("id for 'remove' can not be undefined, only 'null' when removing multiple entries")) : this.request({ url: this.makeUrl(t.query, e), method: "DELETE", headers: Object.assign({}, t.headers) }, t).catch(u);
        } }]) && r(t.prototype, n), e;
    }();e.exports = f;
  }, function (e, t, n) {
    var r = n(5),
        o = n(14);e.exports = Object.assign({}, r, { hooks: o });
  }, function (e, t, n) {
    function r(e) {
      return (r = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
        return typeof e === "undefined" ? "undefined" : _typeof(e);
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e === "undefined" ? "undefined" : _typeof(e);
      })(e);
    }var o = n(3)("@feathersjs/errors");function i(e, t, n, s, c) {
      var a, u, f;(e = e || "Error") instanceof Error ? (u = e.message || "Error", e.errors && (a = e.errors)) : "object" === r(e) ? (u = e.message || "Error", c = e) : u = e, c && ((f = JSON.parse(JSON.stringify(c))).errors ? (a = f.errors, delete f.errors) : c.errors && (a = JSON.parse(JSON.stringify(c.errors)))), this.type = "FeathersError", this.name = t, this.message = u, this.code = n, this.className = s, this.data = f, this.errors = a || {}, o("".concat(this.name, "(").concat(this.code, "): ").concat(this.message)), o(this.errors), Error.captureStackTrace ? Error.captureStackTrace(this, i) : this.stack = new Error().stack;
    }function s(e, t) {
      e.prototype = Object.create(t.prototype), e.prototype.constructor = e;
    }function c(e, t) {
      i.call(this, e, "BadRequest", 400, "bad-request", t);
    }function a(e, t) {
      i.call(this, e, "NotAuthenticated", 401, "not-authenticated", t);
    }function u(e, t) {
      i.call(this, e, "PaymentError", 402, "payment-error", t);
    }function f(e, t) {
      i.call(this, e, "Forbidden", 403, "forbidden", t);
    }function l(e, t) {
      i.call(this, e, "NotFound", 404, "not-found", t);
    }function p(e, t) {
      i.call(this, e, "MethodNotAllowed", 405, "method-not-allowed", t);
    }function h(e, t) {
      i.call(this, e, "NotAcceptable", 406, "not-acceptable", t);
    }function d(e, t) {
      i.call(this, e, "Timeout", 408, "timeout", t);
    }function y(e, t) {
      i.call(this, e, "Conflict", 409, "conflict", t);
    }function v(e, t) {
      i.call(this, e, "LengthRequired", 411, "length-required", t);
    }function m(e, t) {
      i.call(this, e, "Unprocessable", 422, "unprocessable", t);
    }function b(e, t) {
      i.call(this, e, "TooManyRequests", 429, "too-many-requests", t);
    }function g(e, t) {
      i.call(this, e, "GeneralError", 500, "general-error", t);
    }function w(e, t) {
      i.call(this, e, "NotImplemented", 501, "not-implemented", t);
    }function O(e, t) {
      i.call(this, e, "BadGateway", 502, "bad-gateway", t);
    }function j(e, t) {
      i.call(this, e, "Unavailable", 503, "unavailable", t);
    }s(i, Error), Object.defineProperty(i.prototype, "toJSON", { value: function value() {
        return { name: this.name, message: this.message, code: this.code, className: this.className, data: this.data, errors: this.errors };
      } }), s(c, i), s(a, i), s(u, i), s(f, i), s(l, i), s(p, i), s(h, i), s(d, i), s(y, i), s(v, i), s(m, i), s(b, i), s(g, i), s(w, i), s(O, i), s(j, i);var k = { FeathersError: i, BadRequest: c, NotAuthenticated: a, PaymentError: u, Forbidden: f, NotFound: l, MethodNotAllowed: p, NotAcceptable: h, Timeout: d, Conflict: y, LengthRequired: v, Unprocessable: m, TooManyRequests: b, GeneralError: g, NotImplemented: w, BadGateway: O, Unavailable: j, 400: c, 401: a, 402: u, 403: f, 404: l, 405: p, 406: h, 408: d, 409: y, 411: v, 422: m, 429: b, 500: g, 501: w, 502: O, 503: j };e.exports = Object.assign({ convert: function convert(e) {
        if (!e) return e;var t = k[e.name],
            n = t ? new t(e.message, e.data) : new Error(e.message || e);return "object" === r(e) && Object.assign(n, e), n;
      } }, k);
  }, function (e, t, n) {
    (function (r) {
      function o(e) {
        return (o = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
          return typeof e === "undefined" ? "undefined" : _typeof(e);
        } : function (e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e === "undefined" ? "undefined" : _typeof(e);
        })(e);
      }t.log = function () {
        var e;return "object" === ("undefined" == typeof console ? "undefined" : o(console)) && console.log && (e = console).log.apply(e, arguments);
      }, t.formatArgs = function (t) {
        if (t[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + t[0] + (this.useColors ? "%c " : " ") + "+" + e.exports.humanize(this.diff), this.useColors) {
          var n = "color: " + this.color;t.splice(1, 0, n, "color: inherit");var r = 0,
              o = 0;t[0].replace(/%[a-zA-Z%]/g, function (e) {
            "%%" !== e && (r++, "%c" === e && (o = r));
          }), t.splice(o, 0, n);
        }
      }, t.save = function (e) {
        try {
          e ? t.storage.setItem("debug", e) : t.storage.removeItem("debug");
        } catch (e) {}
      }, t.load = function () {
        var e;try {
          e = t.storage.getItem("debug");
        } catch (e) {}return !e && void 0 !== r && "env" in r && (e = r.env.DEBUG), e;
      }, t.useColors = function () {
        return !("undefined" == typeof window || !window.process || "renderer" !== window.process.type && !window.process.__nwjs) || ("undefined" == typeof navigator || !navigator.userAgent || !navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) && ("undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && 31 <= parseInt(RegExp.$1, 10) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
      }, t.storage = function () {
        try {
          return localStorage;
        } catch (e) {}
      }(), t.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"], e.exports = n(16)(t), e.exports.formatters.j = function (e) {
        try {
          return JSON.stringify(e);
        } catch (e) {
          return "[UnexpectedJSONParseError]: " + e.message;
        }
      };
    }).call(this, n(6));
  }, function (e, t, n) {
    var r, o;void 0 === (o = "function" == typeof (r = function r() {
      var e = "function" == typeof Object.getOwnPropertySymbols;return { create: function create() {
          var e = Object.create(this),
              t = "string" == typeof e.__init ? e.__init : "init";return "function" == typeof e[t] && e[t].apply(e, arguments), e;
        }, mixin: function mixin(t, n) {
          for (var r = n || this, o = /\b_super\b/, i = Object.getPrototypeOf(r) || r.prototype, s = {}, c = t, a = function a(e) {
            var t = Object.getOwnPropertyDescriptor(c, e);!s[e] && t && (s[e] = t);
          }; Object.getOwnPropertyNames(c).forEach(a), e && Object.getOwnPropertySymbols(c).forEach(a), (c = Object.getPrototypeOf(c)) && Object.getPrototypeOf(c);) {}var u = function u(t) {
            var n,
                c,
                a,
                u,
                f,
                l,
                p = s[t];"function" == typeof p.value && o.test(p.value) && (p.value = (n = i, c = r[t], a = t, u = p.value, l = function l() {
              var e = this._super;this._super = f ? c : n[a];var t = u.apply(this, arguments);return this._super = e, t;
            }, (f = "function" == typeof c) && e && Object.getOwnPropertySymbols(c).forEach(function (e) {
              l[e] = c[e];
            }), l)), Object.defineProperty(r, t, p);
          };return Object.keys(s).forEach(u), e && Object.getOwnPropertySymbols(s).forEach(u), r;
        }, extend: function extend(e, t) {
          return this.mixin(e, Object.create(t || this));
        }, proxy: function proxy(e) {
          var t = this[e],
              n = Array.prototype.slice.call(arguments, 1);return n.unshift(this), t.bind.apply(t, n);
        } };
    }) ? r.apply(t, []) : r) || (e.exports = o);
  }, function (e, t, n) {
    (function (e) {
      function n(e, t, n) {
        return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
      }function r(e) {
        return (r = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
          return typeof e === "undefined" ? "undefined" : _typeof(e);
        } : function (e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e === "undefined" ? "undefined" : _typeof(e);
        })(e);
      }function o(e, t) {
        return function (e) {
          if (Array.isArray(e)) return e;
        }(e) || function (e, t) {
          var n = [],
              r = !0,
              o = !1,
              i = void 0;try {
            for (var s, c = e[Symbol.iterator](); !(r = (s = c.next()).done) && (n.push(s.value), !t || n.length !== t); r = !0) {}
          } catch (e) {
            o = !0, i = e;
          } finally {
            try {
              r || null == c.return || c.return();
            } finally {
              if (o) throw i;
            }
          }return n;
        }(e, t) || function () {
          throw new TypeError("Invalid attempt to destructure non-iterable instance");
        }();
      }t.stripSlashes = function (e) {
        return e.replace(/^(\/+)|(\/+)$/g, "");
      };var i = t._ = { each: function each(e, t) {
          e && "function" == typeof e.forEach ? e.forEach(t) : i.isObject(e) && Object.keys(e).forEach(function (n) {
            return t(e[n], n);
          });
        }, some: function some(e, t) {
          return Object.keys(e).map(function (t) {
            return [e[t], t];
          }).some(function (e) {
            var n = o(e, 2),
                r = n[0],
                i = n[1];return t(r, i);
          });
        }, every: function every(e, t) {
          return Object.keys(e).map(function (t) {
            return [e[t], t];
          }).every(function (e) {
            var n = o(e, 2),
                r = n[0],
                i = n[1];return t(r, i);
          });
        }, keys: function keys(e) {
          return Object.keys(e);
        }, values: function values(e) {
          return i.keys(e).map(function (t) {
            return e[t];
          });
        }, isMatch: function isMatch(e, t) {
          return i.keys(t).every(function (n) {
            return e[n] === t[n];
          });
        }, isEmpty: function isEmpty(e) {
          return 0 === i.keys(e).length;
        }, isObject: function isObject(e) {
          return "object" === r(e) && !Array.isArray(e) && null !== e;
        }, isObjectOrArray: function isObjectOrArray(e) {
          return "object" === r(e) && null !== e;
        }, extend: function extend() {
          return Object.assign.apply(Object, arguments);
        }, omit: function omit(e) {
          for (var t = i.extend({}, e), n = arguments.length, r = new Array(1 < n ? n - 1 : 0), o = 1; o < n; o++) {
            r[o - 1] = arguments[o];
          }return r.forEach(function (e) {
            return delete t[e];
          }), t;
        }, pick: function pick(e) {
          for (var t = arguments.length, n = new Array(1 < t ? t - 1 : 0), r = 1; r < t; r++) {
            n[r - 1] = arguments[r];
          }return n.reduce(function (t, n) {
            return void 0 !== e[n] && (t[n] = e[n]), t;
          }, {});
        }, merge: function merge(e, t) {
          return i.isObject(e) && i.isObject(t) && Object.keys(t).forEach(function (r) {
            i.isObject(t[r]) ? (e[r] || Object.assign(e, n({}, r, {})), i.merge(e[r], t[r])) : Object.assign(e, n({}, r, t[r]));
          }), e;
        } };t.isPromise = function (e) {
        return i.isObject(e) && "function" == typeof e.then;
      }, t.makeUrl = function (n) {
        var r = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
            o = "function" == typeof r.get ? r.get.bind(r) : function () {},
            i = o("env") || "production",
            s = o("host") || e.env.HOST_NAME || "localhost",
            c = "development" === i || "test" === i || void 0 === i ? "http" : "https",
            a = o("port") || e.env.PORT || 3030,
            u = "development" === i || "test" === i || void 0 === i ? ":".concat(a) : "";return n = n || "", "".concat(c, "://").concat(s).concat(u, "/").concat(t.stripSlashes(n));
      }, t.createSymbol = function (e) {
        return "undefined" != typeof Symbol ? Symbol(e) : e;
      };
    }).call(this, n(6));
  }, function (e, t) {
    var n,
        r,
        o = e.exports = {};function i() {
      throw new Error("setTimeout has not been defined");
    }function s() {
      throw new Error("clearTimeout has not been defined");
    }function c(e) {
      if (n === setTimeout) return setTimeout(e, 0);if ((n === i || !n) && setTimeout) return n = setTimeout, setTimeout(e, 0);try {
        return n(e, 0);
      } catch (t) {
        try {
          return n.call(null, e, 0);
        } catch (t) {
          return n.call(this, e, 0);
        }
      }
    }!function () {
      try {
        n = "function" == typeof setTimeout ? setTimeout : i;
      } catch (e) {
        n = i;
      }try {
        r = "function" == typeof clearTimeout ? clearTimeout : s;
      } catch (e) {
        r = s;
      }
    }();var a,
        u = [],
        f = !1,
        l = -1;function p() {
      f && a && (f = !1, a.length ? u = a.concat(u) : l = -1, u.length && h());
    }function h() {
      if (!f) {
        var e = c(p);f = !0;for (var t = u.length; t;) {
          for (a = u, u = []; ++l < t;) {
            a && a[l].run();
          }l = -1, t = u.length;
        }a = null, f = !1, function (e) {
          if (r === clearTimeout) return clearTimeout(e);if ((r === s || !r) && clearTimeout) return r = clearTimeout, clearTimeout(e);try {
            r(e);
          } catch (t) {
            try {
              return r.call(null, e);
            } catch (t) {
              return r.call(this, e);
            }
          }
        }(e);
      }
    }function d(e, t) {
      this.fun = e, this.array = t;
    }function y() {}o.nextTick = function (e) {
      var t = new Array(arguments.length - 1);if (1 < arguments.length) for (var n = 1; n < arguments.length; n++) {
        t[n - 1] = arguments[n];
      }u.push(new d(e, t)), 1 !== u.length || f || c(h);
    }, d.prototype.run = function () {
      this.fun.apply(null, this.array);
    }, o.title = "browser", o.browser = !0, o.env = {}, o.argv = [], o.version = "", o.versions = {}, o.on = y, o.addListener = y, o.once = y, o.off = y, o.removeListener = y, o.removeAllListeners = y, o.emit = y, o.prependListener = y, o.prependOnceListener = y, o.listeners = function (e) {
      return [];
    }, o.binding = function (e) {
      throw new Error("process.binding is not supported");
    }, o.cwd = function () {
      return "/";
    }, o.chdir = function (e) {
      throw new Error("process.chdir is not supported");
    }, o.umask = function () {
      return 0;
    };
  }, function (e, t, n) {
    function r(e) {
      return function (e) {
        if (Array.isArray(e)) {
          for (var t = 0, n = new Array(e.length); t < e.length; t++) {
            n[t] = e[t];
          }return n;
        }
      }(e) || function (e) {
        if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e);
      }(e) || function () {
        throw new TypeError("Invalid attempt to spread non-iterable instance");
      }();
    }var o = n(1),
        i = o.hooks,
        s = o.isPromise,
        c = o._,
        a = n(20),
        u = i.createHookObject,
        f = i.getHooks,
        l = i.processHooks,
        p = i.enableHooks,
        h = i.ACTIVATE_HOOKS,
        d = function d(e) {
      var t = e.app,
          n = e.service,
          o = e.method,
          i = e.original;return function () {
        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
            f = t.hookTypes.reduce(function (t, n) {
          var r = e[n] || [];return t[n] = Array.isArray(r) ? r : [r], t;
        }, {});return function () {
          for (var e = arguments.length, p = new Array(e), h = 0; h < e; h++) {
            p[h] = arguments[h];
          }var d = !0 === p[p.length - 1] && p.pop(),
              y = i || n[o].bind(n),
              v = u(o, { type: "before", arguments: p, service: n, app: t });return l.call(n, a.concat(f.before), v).then(function (e) {
            if (void 0 !== e.result) return e;var t,
                i,
                c = y.apply(void 0, r((t = o, i = e, n.methods[t].reduce(function (e, t) {
              return [].concat(r(e), [i[t]]);
            }, []))));if (!s(c)) throw new Error("Service method '".concat(e.method, "' for '").concat(e.path, "' service must return a promise"));return c.then(function (t) {
              return e.result = t, e;
            });
          }).then(function (e) {
            return Object.assign({}, e, { type: "after" });
          }).then(function (e) {
            var t = f.after.concat(f.finally);return l.call(n, t, e);
          }).then(function (e) {
            return d ? e : e.result;
          }).catch(function (e) {
            var t = f.error.concat(f.finally),
                r = c.omit(Object.assign({}, e.hook, v, { type: "error", original: e.hook, error: e }), "result");return l.call(n, t, r).catch(function (e) {
              return r.error = e, r;
            }).then(function (e) {
              return d ? void 0 !== e.result ? e : Promise.reject(e) : void 0 !== e.result ? e.result : Promise.reject(e.error);
            });
          });
        };
      };
    },
        y = t.hookMixin = function (e) {
      if ("function" != typeof e.hooks) {
        e.methods = Object.getOwnPropertyNames(e).filter(function (t) {
          return "function" == typeof e[t] && e[t][h];
        }).reduce(function (t, n) {
          return t[n] = e[n][h], t;
        }, e.methods || {}), Object.assign(e.methods, { find: ["params"], get: ["id", "params"], create: ["data", "params"], update: ["id", "data", "params"], patch: ["id", "data", "params"], remove: ["id", "params"] });var t = this,
            n = Object.keys(e.methods),
            o = n.reduce(function (n, o) {
          return "function" != typeof e[o] || (n[o] = function () {
            var e = this,
                n = Array.from(arguments),
                i = e._super.bind(e);return d({ app: t, service: e, method: o, original: i })({ before: f(t, e, "before", o), after: f(t, e, "after", o, !0), error: f(t, e, "error", o, !0), finally: f(t, e, "finally", o, !0) }).apply(void 0, r(n));
          }), n;
        }, {});p(e, n, t.hookTypes), e.mixin(o);
      }
    };e.exports = function () {
      return function (e) {
        Object.assign(e, { hookTypes: ["before", "after", "error", "finally"] }), p(e, e.methods, e.hookTypes), e.mixins.push(y);
      };
    }, e.exports.withHooks = d, e.exports.ACTIVATE_HOOKS = h, e.exports.activateHooks = function (e) {
      return function (t) {
        return Object.defineProperty(t, h, { value: e }), t;
      };
    };
  }, function (e, t) {
    e.exports = "3.0.0-development";
  }, function (e, t, n) {
    "use strict";
    var r = Object.prototype.hasOwnProperty,
        o = function () {
      for (var e = [], t = 0; t < 256; ++t) {
        e.push("%" + ((t < 16 ? "0" : "") + t.toString(16)).toUpperCase());
      }return e;
    }(),
        i = function i(e, t) {
      for (var n = t && t.plainObjects ? Object.create(null) : {}, r = 0; r < e.length; ++r) {
        void 0 !== e[r] && (n[r] = e[r]);
      }return n;
    };e.exports = { arrayToObject: i, assign: function assign(e, t) {
        return Object.keys(t).reduce(function (e, n) {
          return e[n] = t[n], e;
        }, e);
      }, compact: function compact(e) {
        for (var t = [{ obj: { o: e }, prop: "o" }], n = [], r = 0; r < t.length; ++r) {
          for (var o = t[r], i = o.obj[o.prop], s = Object.keys(i), c = 0; c < s.length; ++c) {
            var a = s[c],
                u = i[a];"object" == (typeof u === "undefined" ? "undefined" : _typeof(u)) && null !== u && -1 === n.indexOf(u) && (t.push({ obj: i, prop: a }), n.push(u));
          }
        }return function (e) {
          for (var t; e.length;) {
            var n = e.pop();if (t = n.obj[n.prop], Array.isArray(t)) {
              for (var r = [], o = 0; o < t.length; ++o) {
                void 0 !== t[o] && r.push(t[o]);
              }n.obj[n.prop] = r;
            }
          }return t;
        }(t);
      }, decode: function decode(e) {
        try {
          return decodeURIComponent(e.replace(/\+/g, " "));
        } catch (t) {
          return e;
        }
      }, encode: function encode(e) {
        if (0 === e.length) return e;for (var t = "string" == typeof e ? e : String(e), n = "", r = 0; r < t.length; ++r) {
          var i = t.charCodeAt(r);45 === i || 46 === i || 95 === i || 126 === i || 48 <= i && i <= 57 || 65 <= i && i <= 90 || 97 <= i && i <= 122 ? n += t.charAt(r) : i < 128 ? n += o[i] : i < 2048 ? n += o[192 | i >> 6] + o[128 | 63 & i] : i < 55296 || 57344 <= i ? n += o[224 | i >> 12] + o[128 | i >> 6 & 63] + o[128 | 63 & i] : (r += 1, i = 65536 + ((1023 & i) << 10 | 1023 & t.charCodeAt(r)), n += o[240 | i >> 18] + o[128 | i >> 12 & 63] + o[128 | i >> 6 & 63] + o[128 | 63 & i]);
        }return n;
      }, isBuffer: function isBuffer(e) {
        return null != e && !!(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e));
      }, isRegExp: function isRegExp(e) {
        return "[object RegExp]" === Object.prototype.toString.call(e);
      }, merge: function e(t, n, o) {
        if (!n) return t;if ("object" != (typeof n === "undefined" ? "undefined" : _typeof(n))) {
          if (Array.isArray(t)) t.push(n);else {
            if ("object" != (typeof t === "undefined" ? "undefined" : _typeof(t))) return [t, n];(o.plainObjects || o.allowPrototypes || !r.call(Object.prototype, n)) && (t[n] = !0);
          }return t;
        }if ("object" != (typeof t === "undefined" ? "undefined" : _typeof(t))) return [t].concat(n);var s = t;return Array.isArray(t) && !Array.isArray(n) && (s = i(t, o)), Array.isArray(t) && Array.isArray(n) ? (n.forEach(function (n, i) {
          r.call(t, i) ? t[i] && "object" == _typeof(t[i]) ? t[i] = e(t[i], n, o) : t.push(n) : t[i] = n;
        }), t) : Object.keys(n).reduce(function (t, i) {
          var s = n[i];return r.call(t, i) ? t[i] = e(t[i], s, o) : t[i] = s, t;
        }, s);
      } };
  }, function (e, t, n) {
    "use strict";
    var r = String.prototype.replace,
        o = /%20/g;e.exports = { default: "RFC3986", formatters: { RFC1738: function RFC1738(e) {
          return r.call(e, o, "+");
        }, RFC3986: function RFC3986(e) {
          return e;
        } }, RFC1738: "RFC1738", RFC3986: "RFC3986" };
  }, function (e, t, n) {
    e.exports = n(43);
  }, function (e, t, n) {
    var r = n(13),
        o = n(2),
        i = n(21),
        s = n(31),
        c = n(42),
        a = n(44);Object.assign(r, { errors: o, socketio: c, primus: a, rest: s, authentication: i }), e.exports = r;
  }, function (e, t, n) {
    var r = n(1).hooks,
        o = n(4),
        i = n(15),
        s = n(8),
        c = n(7),
        a = c.ACTIVATE_HOOKS,
        u = c.activateHooks,
        f = Object.create(null);function l() {
      var e = Object.create(f);return o.mixin(i, e), e.init(), e;
    }l.version = s, l.SKIP = r.SKIP, l.ACTIVATE_HOOKS = a, l.activateHooks = u, e.exports = l, e.exports.default = l;
  }, function (e, t, n) {
    function r(e) {
      return (r = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
        return typeof e === "undefined" ? "undefined" : _typeof(e);
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e === "undefined" ? "undefined" : _typeof(e);
      })(e);
    }var o = n(5),
        i = o._,
        s = i.each,
        c = i.pick,
        a = o.createSymbol,
        u = a("__feathersSkipHooks");t.SKIP = u, t.ACTIVATE_HOOKS = a("__feathersActivateHooks"), t.createHookObject = function (e) {
      var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
          n = {};return Object.defineProperty(n, "toJSON", { value: function value() {
          return c(this, "type", "method", "path", "params", "id", "data", "result", "error");
        } }), Object.assign(n, t, { method: e, get path() {
          var e = t.app,
              n = t.service;return n && e && e.services ? Object.keys(e.services).find(function (t) {
            return e.services[t] === n;
          }) : null;
        } });
    }, t.defaultMakeArguments = function (e) {
      var t = [];return void 0 !== e.id && t.push(e.id), e.data && t.push(e.data), t.push(e.params || {}), t;
    }, t.makeArguments = function (e) {
      switch (e.method) {case "find":
          return [e.params];case "get":case "remove":
          return [e.id, e.params];case "update":case "patch":
          return [e.id, e.data, e.params];case "create":
          return [e.data, e.params];}return t.defaultMakeArguments(e);
    }, t.convertHookData = function (e) {
      var t = {};return Array.isArray(e) ? t = { all: e } : "object" !== r(e) ? t = { all: [e] } : s(e, function (e, n) {
        t[n] = Array.isArray(e) ? e : [e];
      }), t;
    }, t.isHookObject = function (e) {
      return "object" === r(e) && "string" == typeof e.method && "string" == typeof e.type;
    }, t.getHooks = function (e, t, n, r) {
      var o = 4 < arguments.length && void 0 !== arguments[4] && arguments[4],
          i = e.__hooks[n][r] || [],
          s = t.__hooks[n][r] || [];return o ? s.concat(i) : i.concat(s);
    }, t.processHooks = function (e, n) {
      var r = this,
          o = n,
          i = function i(e) {
        if (e) {
          if (e === u) return u;if (!t.isHookObject(e)) throw new Error("".concat(o.type, " hook for '").concat(o.method, "' method returned invalid hook object"));o = e;
        }return o;
      };return e.reduce(function (e, t) {
        var n = t.bind(r);return (e = 2 === n.length ? e.then(function (e) {
          return e === u ? u : new Promise(function (t, r) {
            n(e, function (e, n) {
              return e ? r(e) : t(n);
            });
          });
        }) : e.then(function (e) {
          return e === u ? u : n(e);
        })).then(i);
      }, Promise.resolve(o)).then(function () {
        return o;
      }).catch(function (e) {
        throw e.hook = o, e;
      });
    }, t.enableHooks = function (e, n, r) {
      if ("function" == typeof e.hooks) return e;var o = {};return r.forEach(function (e) {
        o[e] = {};
      }), Object.defineProperty(e, "__hooks", { value: o }), Object.assign(e, { hooks: function hooks(e) {
          var r = this;return s(e, function (e, o) {
            if (!r.__hooks[o]) throw new Error("'".concat(o, "' is not a valid hook type"));var i = t.convertHookData(e);s(i, function (e, t) {
              if ("all" !== t && -1 === n.indexOf(t)) throw new Error("'".concat(t, "' is not a valid hook method"));
            }), n.forEach(function (e) {
              var t = r.__hooks[o][e] || (r.__hooks[o][e] = []);i.all && t.push.apply(t, i.all), i[e] && t.push.apply(t, i[e]);
            });
          }), this;
        } });
    };
  }, function (e, t, n) {
    var r = n(3)("feathers:application"),
        o = n(1).stripSlashes,
        i = n(4),
        s = n(18),
        c = n(7),
        a = n(8),
        u = i.extend({ create: null }),
        f = { init: function init() {
        Object.assign(this, { version: a, methods: ["find", "get", "create", "update", "patch", "remove"], mixins: [], services: {}, providers: [], _setup: !1, settings: {} }), this.configure(c()), this.configure(s());
      }, get: function get(e) {
        return this.settings[e];
      }, set: function set(e, t) {
        return this.settings[e] = t, this;
      }, disable: function disable(e) {
        return this.settings[e] = !1, this;
      }, disabled: function disabled(e) {
        return !this.settings[e];
      }, enable: function enable(e) {
        return this.settings[e] = !0, this;
      }, enabled: function enabled(e) {
        return !!this.settings[e];
      }, configure: function configure(e) {
        return e.call(this, this), this;
      }, service: function service(e, t) {
        if (void 0 !== t) throw new Error("Registering a new service with `app.service(path, service)` is no longer supported. Use `app.use(path, service)` instead.");var n = o(e) || "/",
            r = this.services[n];return void 0 === r && "function" == typeof this.defaultService ? this.use("/".concat(n), this.defaultService(n)).service(n) : r;
      }, use: function use(e, t) {
        var n = this,
            i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};if ("string" != typeof e) throw new Error("'".concat(e, "' is not a valid service path."));var s = o(e) || "/",
            c = "function" == typeof t.service && t.services,
            a = this.methods.concat("setup").some(function (e) {
          return t && "function" == typeof t[e];
        });if (c) {
          var f = t;return Object.keys(f.services).forEach(function (e) {
            return n.use("".concat(s, "/").concat(e), f.service(e));
          }), this;
        }if (!a) throw new Error("Invalid service object passed for path `".concat(s, "`"));var l = u.isPrototypeOf(t) ? t : u.extend(t);return r("Registering new service at `".concat(s, "`")), this.mixins.forEach(function (e) {
          return e.call(n, l, s, i);
        }), "function" == typeof l._setup && l._setup(this, s), this.providers.forEach(function (e) {
          return e.call(n, l, s, i);
        }), this._isSetup && "function" == typeof l.setup && (r("Setting up service for `".concat(s, "`")), l.setup(this, s)), this.services[s] = l, this;
      }, setup: function setup() {
        var e = this;return Object.keys(this.services).forEach(function (t) {
          var n = e.services[t];r("Setting up service for `".concat(t, "`")), "function" == typeof n.setup && n.setup(e, t);
        }), this._isSetup = !0, this;
      } };e.exports = f;
  }, function (e, t, n) {
    function r(e) {
      return function (e) {
        if (Array.isArray(e)) {
          for (var t = 0, n = new Array(e.length); t < e.length; t++) {
            n[t] = e[t];
          }return n;
        }
      }(e) || function (e) {
        if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e);
      }(e) || function () {
        throw new TypeError("Invalid attempt to spread non-iterable instance");
      }();
    }e.exports = function (e) {
      function t(e) {
        for (var t = 0, n = 0; n < e.length; n++) {
          t = (t << 5) - t + e.charCodeAt(n), t |= 0;
        }return o.colors[Math.abs(t) % o.colors.length];
      }function o(e) {
        var n;function r() {
          for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) {
            t[i] = arguments[i];
          }if (r.enabled) {
            var s = r,
                c = Number(new Date()),
                a = c - (n || c);s.diff = a, s.prev = n, s.curr = c, n = c, t[0] = o.coerce(t[0]), "string" != typeof t[0] && t.unshift("%O");var u = 0;t[0] = t[0].replace(/%([a-zA-Z%])/g, function (e, n) {
              if ("%%" === e) return e;u++;var r = o.formatters[n];if ("function" == typeof r) {
                var i = t[u];e = r.call(s, i), t.splice(u, 1), u--;
              }return e;
            }), o.formatArgs.call(s, t), (s.log || o.log).apply(s, t);
          }
        }return r.namespace = e, r.enabled = o.enabled(e), r.useColors = o.useColors(), r.color = t(e), r.destroy = i, r.extend = s, "function" == typeof o.init && o.init(r), o.instances.push(r), r;
      }function i() {
        var e = o.instances.indexOf(this);return -1 !== e && (o.instances.splice(e, 1), !0);
      }function s(e, t) {
        var n = o(this.namespace + (void 0 === t ? ":" : t) + e);return n.log = this.log, n;
      }function c(e) {
        return e.toString().substring(2, e.toString().length - 2).replace(/\.\*\?$/, "*");
      }return ((o.debug = o).default = o).coerce = function (e) {
        return e instanceof Error ? e.stack || e.message : e;
      }, o.disable = function () {
        var e = [].concat(r(o.names.map(c)), r(o.skips.map(c).map(function (e) {
          return "-" + e;
        }))).join(",");return o.enable(""), e;
      }, o.enable = function (e) {
        var t;o.save(e), o.names = [], o.skips = [];var n = ("string" == typeof e ? e : "").split(/[\s,]+/),
            r = n.length;for (t = 0; t < r; t++) {
          n[t] && ("-" === (e = n[t].replace(/\*/g, ".*?"))[0] ? o.skips.push(new RegExp("^" + e.substr(1) + "$")) : o.names.push(new RegExp("^" + e + "$")));
        }for (t = 0; t < o.instances.length; t++) {
          var i = o.instances[t];i.enabled = o.enabled(i.namespace);
        }
      }, o.enabled = function (e) {
        if ("*" === e[e.length - 1]) return !0;var t, n;for (t = 0, n = o.skips.length; t < n; t++) {
          if (o.skips[t].test(e)) return !1;
        }for (t = 0, n = o.names.length; t < n; t++) {
          if (o.names[t].test(e)) return !0;
        }return !1;
      }, o.humanize = n(17), Object.keys(e).forEach(function (t) {
        o[t] = e[t];
      }), o.instances = [], o.names = [], o.skips = [], o.formatters = {}, o.selectColor = t, o.enable(o.load()), o;
    };
  }, function (e, t) {
    var n = 36e5,
        r = 864e5;function o(e, t, n, r) {
      var o = 1.5 * n <= t;return Math.round(e / n) + " " + r + (o ? "s" : "");
    }e.exports = function (e, t) {
      t = t || {};var i = typeof e === "undefined" ? "undefined" : _typeof(e);if ("string" === i && 0 < e.length) return function (e) {
        if (!(100 < (e = String(e)).length)) {
          var t = /^((?:\d+)?\-?\d?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e);if (t) {
            var o = parseFloat(t[1]);switch ((t[2] || "ms").toLowerCase()) {case "years":case "year":case "yrs":case "yr":case "y":
                return 315576e5 * o;case "weeks":case "week":case "w":
                return 6048e5 * o;case "days":case "day":case "d":
                return o * r;case "hours":case "hour":case "hrs":case "hr":case "h":
                return o * n;case "minutes":case "minute":case "mins":case "min":case "m":
                return 6e4 * o;case "seconds":case "second":case "secs":case "sec":case "s":
                return 1e3 * o;case "milliseconds":case "millisecond":case "msecs":case "msec":case "ms":
                return o;default:
                return;}
          }
        }
      }(e);if ("number" === i && !1 === isNaN(e)) return t.long ? function (e) {
        var t = Math.abs(e);return r <= t ? o(e, t, r, "day") : n <= t ? o(e, t, n, "hour") : 6e4 <= t ? o(e, t, 6e4, "minute") : 1e3 <= t ? o(e, t, 1e3, "second") : e + " ms";
      }(e) : function (e) {
        var t = Math.abs(e);return r <= t ? Math.round(e / r) + "d" : n <= t ? Math.round(e / n) + "h" : 6e4 <= t ? Math.round(e / 6e4) + "m" : 1e3 <= t ? Math.round(e / 1e3) + "s" : e + "ms";
      }(e);throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e));
    };
  }, function (e, t, n) {
    var r = n(19).EventEmitter,
        o = n(4),
        i = t.eventHook = function () {
      return function (e) {
        var t = e.app,
            n = e.service,
            r = t.eventMappings[e.method],
            o = n._hookEvents && -1 !== n._hookEvents.indexOf(r);r && o && "error" !== e.type && (Array.isArray(e.result) ? e.result : [e.result]).forEach(function (t) {
          return n.emit(r, t, e);
        });
      };
    },
        s = t.eventMixin = function (e) {
      if (!e._serviceEvents) {
        var t = this,
            n = "function" == typeof e.on && "function" == typeof e.emit;"function" != typeof e.mixin || n || e.mixin(r.prototype), Object.defineProperties(e, { _serviceEvents: { value: Array.isArray(e.events) ? e.events.slice() : [] }, _hookEvents: { value: [] } }), Object.keys(t.eventMappings).forEach(function (n) {
          var r = t.eventMappings[n],
              o = -1 !== e._serviceEvents.indexOf(r);"function" != typeof e[n] || o || (e._serviceEvents.push(r), e._hookEvents.push(r));
        });
      }
    };e.exports = function () {
      return function (e) {
        Object.assign(e, { eventMappings: { create: "created", update: "updated", remove: "removed", patch: "patched" } }), e.hooks({ finally: i() }), o.mixin(r.prototype, e), e.mixins.push(s);
      };
    };
  }, function (e, t, n) {
    "use strict";
    var r,
        o = "object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) ? Reflect : null,
        i = o && "function" == typeof o.apply ? o.apply : function (e, t, n) {
      return Function.prototype.apply.call(e, t, n);
    };r = o && "function" == typeof o.ownKeys ? o.ownKeys : Object.getOwnPropertySymbols ? function (e) {
      return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
    } : function (e) {
      return Object.getOwnPropertyNames(e);
    };var s = Number.isNaN || function (e) {
      return e != e;
    };function c() {
      c.init.call(this);
    }((e.exports = c).EventEmitter = c).prototype._events = void 0, c.prototype._eventsCount = 0, c.prototype._maxListeners = void 0;var a = 10;function u(e) {
      return void 0 === e._maxListeners ? c.defaultMaxListeners : e._maxListeners;
    }function f(e, t, n, r) {
      var o, i, s, c;if ("function" != typeof n) throw new TypeError('The "listener" argument must be of type Function. Received type ' + (typeof n === "undefined" ? "undefined" : _typeof(n)));if (void 0 === (i = e._events) ? (i = e._events = Object.create(null), e._eventsCount = 0) : (void 0 !== i.newListener && (e.emit("newListener", t, n.listener ? n.listener : n), i = e._events), s = i[t]), void 0 === s) s = i[t] = n, ++e._eventsCount;else if ("function" == typeof s ? s = i[t] = r ? [n, s] : [s, n] : r ? s.unshift(n) : s.push(n), 0 < (o = u(e)) && s.length > o && !s.warned) {
        s.warned = !0;var a = new Error("Possible EventEmitter memory leak detected. " + s.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");a.name = "MaxListenersExceededWarning", a.emitter = e, a.type = t, a.count = s.length, c = a, console && console.warn && console.warn(c);
      }return e;
    }function l(e, t, n) {
      var r = { fired: !1, wrapFn: void 0, target: e, type: t, listener: n },
          o = function () {
        for (var e = [], t = 0; t < arguments.length; t++) {
          e.push(arguments[t]);
        }this.fired || (this.target.removeListener(this.type, this.wrapFn), this.fired = !0, i(this.listener, this.target, e));
      }.bind(r);return o.listener = n, r.wrapFn = o;
    }function p(e, t, n) {
      var r = e._events;if (void 0 === r) return [];var o = r[t];return void 0 === o ? [] : "function" == typeof o ? n ? [o.listener || o] : [o] : n ? function (e) {
        for (var t = new Array(e.length), n = 0; n < t.length; ++n) {
          t[n] = e[n].listener || e[n];
        }return t;
      }(o) : d(o, o.length);
    }function h(e) {
      var t = this._events;if (void 0 !== t) {
        var n = t[e];if ("function" == typeof n) return 1;if (void 0 !== n) return n.length;
      }return 0;
    }function d(e, t) {
      for (var n = new Array(t), r = 0; r < t; ++r) {
        n[r] = e[r];
      }return n;
    }Object.defineProperty(c, "defaultMaxListeners", { enumerable: !0, get: function get() {
        return a;
      }, set: function set(e) {
        if ("number" != typeof e || e < 0 || s(e)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");a = e;
      } }), c.init = function () {
      void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
    }, c.prototype.setMaxListeners = function (e) {
      if ("number" != typeof e || e < 0 || s(e)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");return this._maxListeners = e, this;
    }, c.prototype.getMaxListeners = function () {
      return u(this);
    }, c.prototype.emit = function (e) {
      for (var t = [], n = 1; n < arguments.length; n++) {
        t.push(arguments[n]);
      }var r = "error" === e,
          o = this._events;if (void 0 !== o) r = r && void 0 === o.error;else if (!r) return !1;if (r) {
        var s;if (0 < t.length && (s = t[0]), s instanceof Error) throw s;var c = new Error("Unhandled error." + (s ? " (" + s.message + ")" : ""));throw c.context = s, c;
      }var a = o[e];if (void 0 === a) return !1;if ("function" == typeof a) i(a, this, t);else {
        var u = a.length,
            f = d(a, u);for (n = 0; n < u; ++n) {
          i(f[n], this, t);
        }
      }return !0;
    }, c.prototype.on = c.prototype.addListener = function (e, t) {
      return f(this, e, t, !1);
    }, c.prototype.prependListener = function (e, t) {
      return f(this, e, t, !0);
    }, c.prototype.once = function (e, t) {
      if ("function" != typeof t) throw new TypeError('The "listener" argument must be of type Function. Received type ' + (typeof t === "undefined" ? "undefined" : _typeof(t)));return this.on(e, l(this, e, t)), this;
    }, c.prototype.prependOnceListener = function (e, t) {
      if ("function" != typeof t) throw new TypeError('The "listener" argument must be of type Function. Received type ' + (typeof t === "undefined" ? "undefined" : _typeof(t)));return this.prependListener(e, l(this, e, t)), this;
    }, c.prototype.off = c.prototype.removeListener = function (e, t) {
      var n, r, o, i, s;if ("function" != typeof t) throw new TypeError('The "listener" argument must be of type Function. Received type ' + (typeof t === "undefined" ? "undefined" : _typeof(t)));if (void 0 === (r = this._events)) return this;if (void 0 === (n = r[e])) return this;if (n === t || n.listener === t) 0 == --this._eventsCount ? this._events = Object.create(null) : (delete r[e], r.removeListener && this.emit("removeListener", e, n.listener || t));else if ("function" != typeof n) {
        for (o = -1, i = n.length - 1; 0 <= i; i--) {
          if (n[i] === t || n[i].listener === t) {
            s = n[i].listener, o = i;break;
          }
        }if (o < 0) return this;0 === o ? n.shift() : function (e, t) {
          for (; t + 1 < e.length; t++) {
            e[t] = e[t + 1];
          }e.pop();
        }(n, o), 1 === n.length && (r[e] = n[0]), void 0 !== r.removeListener && this.emit("removeListener", e, s || t);
      }return this;
    }, c.prototype.removeAllListeners = function (e) {
      var t, n, r;if (void 0 === (n = this._events)) return this;if (void 0 === n.removeListener) return 0 === arguments.length ? (this._events = Object.create(null), this._eventsCount = 0) : void 0 !== n[e] && (0 == --this._eventsCount ? this._events = Object.create(null) : delete n[e]), this;if (0 === arguments.length) {
        var o,
            i = Object.keys(n);for (r = 0; r < i.length; ++r) {
          "removeListener" !== (o = i[r]) && this.removeAllListeners(o);
        }return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this;
      }if ("function" == typeof (t = n[e])) this.removeListener(e, t);else if (void 0 !== t) for (r = t.length - 1; 0 <= r; r--) {
        this.removeListener(e, t[r]);
      }return this;
    }, c.prototype.listeners = function (e) {
      return p(this, e, !0);
    }, c.prototype.rawListeners = function (e) {
      return p(this, e, !1);
    }, c.listenerCount = function (e, t) {
      return "function" == typeof e.listenerCount ? e.listenerCount(t) : h.call(e, t);
    }, c.prototype.listenerCount = h, c.prototype.eventNames = function () {
      return 0 < this._eventsCount ? r(this._events) : [];
    };
  }, function (e, t, n) {
    var r = n(1)._;e.exports = [function (e) {
      var t = e.service,
          n = e.method,
          r = t.methods[n],
          o = e.arguments.reduce(function (e, t, n) {
        return e[r[n]] = t, e;
      }, {});return o.params || (o.params = {}), Object.assign(e, o), e;
    }, function (e) {
      var t = e.service,
          n = e.method,
          o = t.methods[n];if (o.includes("id") && void 0 === e.id) throw new Error("An id must be provided to the '".concat(n, "' method"));if (o.includes("data") && !r.isObjectOrArray(e.data)) throw new Error("A data object must be provided to the '".concat(n, "' method"));return e;
    }];
  }, function (e, t, n) {
    var r = n(22),
        o = n(26),
        i = { header: "Authorization", cookie: "feathers-jwt", storageKey: "feathers-jwt", jwtStrategy: "jwt", path: "/authentication", entity: "user", service: "users", timeout: 5e3 };function s() {
      var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
          t = Object.assign({}, i, e);return function () {
        var e = this;e.passport = new o(e, t), e.authenticate = e.passport.authenticate.bind(e.passport), e.logout = e.passport.logout.bind(e.passport), e.mixins.push(function (n) {
          if (e.version < "3.0.0") throw new Error("This version of @feathersjs/authentication-client only works with @feathersjs/feathers v3.0.0 or later.");n.hooks({ before: r.populateAccessToken(t) });
        }), e.rest && e.mixins.push(function (e) {
          e.hooks({ before: r.populateHeader(t) });
        });
      };
    }e.exports = s, e.exports.default = s, e.exports.defaults = i;
  }, function (e, t, n) {
    var r = { populateHeader: n(23), populateAccessToken: n(24), populateEntity: n(25) };e.exports = r;
  }, function (e, t) {
    e.exports = function () {
      var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};if (!e.header) throw new Error("You need to pass 'options.header' to the populateHeader() hook.");return function (t) {
        return "before" !== t.type ? Promise.reject(new Error("The 'populateHeader' hook should only be used as a 'before' hook.")) : (t.params.accessToken && (t.params.headers = Object.assign({}, (n = {}, r = e.header, o = e.prefix ? "".concat(e.prefix, " ").concat(t.params.accessToken) : t.params.accessToken, r in n ? Object.defineProperty(n, r, { value: o, enumerable: !0, configurable: !0, writable: !0 }) : n[r] = o, n), t.params.headers)), Promise.resolve(t));var n, r, o;
      };
    };
  }, function (e, t) {
    e.exports = function () {
      return function (e) {
        var t = e.app;return "before" !== e.type ? Promise.reject(new Error("The 'populateAccessToken' hook should only be used as a 'before' hook.")) : (Object.assign(e.params, { accessToken: t.get("accessToken") }), Promise.resolve(e));
      };
    };
  }, function (e, t) {
    e.exports = function () {
      var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};if (!e.service) throw new Error("You need to pass 'options.service' to the populateEntity() hook.");if (!e.field) throw new Error("You need to pass 'options.field' to the populateEntity() hook.");if (!e.entity) throw new Error("You need to pass 'options.entity' to the populateEntity() hook.");return function (t) {
        var n = t.app;return "after" !== t.type ? Promise.reject(new Error("The 'populateEntity' hook should only be used as an 'after' hook.")) : n.passport.verifyJWT(t.result.accessToken).then(function (t) {
          var r = t[e.field];return r ? n.service(e.service).get(r) : Promise.reject(new Error("Access token payload is missing the '".concat(e.field, "' field.")));
        }).then(function (r) {
          return t.result[e.entity] = r, n.set(e.entity, r), Promise.resolve(t);
        });
      };
    };
  }, function (e, t, n) {
    function r(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }var o = n(2),
        i = n(27),
        s = n(3),
        c = n(30),
        a = c.Storage,
        u = c.payloadIsValid,
        f = c.getCookie,
        l = c.clearCookie,
        p = s("@feathersjs/authentication-client");e.exports = function () {
      function e(t, n) {
        if (function (t, n) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }(this), t.passport) throw new Error("You have already registered authentication on this client app instance. You only need to do it once.");Object.assign(this, { options: n, app: t, payloadIsValid: u, getCookie: f, clearCookie: l, storage: t.get("storage") || this.getStorage(n.storage) }), this.setJWT = this.setJWT.bind(this), t.set("storage", this.storage), this.getJWT().then(this.setJWT), this.setupSocketListeners();
      }var t, n;return t = e, (n = [{ key: "setupSocketListeners", value: function value() {
          var e = this,
              t = this.app,
              n = t.io || t.primus,
              r = t.io ? "emit" : "send",
              o = t.io ? "reconnect" : "reconnected";if (n) {
            n.on(o, function () {
              if (p("Socket reconnected"), n.authenticated) {
                var o = { strategy: e.options.jwtStrategy, accessToken: t.get("accessToken") };e.authenticateSocket(o, n, r).then(e.setJWT).catch(function (e) {
                  p("Error re-authenticating after socket reconnect", e), n.authenticated = !1, t.emit("reauthentication-error", e);
                });
              }
            });var i = function i() {
              n.io.engine.on("upgrade", function () {
                if (p("Socket upgrading"), n.authenticated) {
                  var o = { strategy: e.options.jwtStrategy, accessToken: t.get("accessToken") };e.authenticateSocket(o, n, r).then(e.setJWT).catch(function (e) {
                    p("Error re-authenticating after socket upgrade", e), n.authenticated = !1, t.emit("reauthentication-error", e);
                  });
                }
              });
            };n.io && n.io.engine ? i() : n.on("connect", i);
          }
        } }, { key: "connected", value: function value() {
          var e = this,
              t = this.app;if (t.rest) return Promise.resolve();var n = t.io || t.primus;return n ? t.io && n.connected || t.primus && 3 === n.readyState ? (p("Socket already connected"), Promise.resolve(n)) : new Promise(function (r, o) {
            var i = t.primus ? "open" : "connect",
                s = t.io ? "disconnect" : "end",
                c = setTimeout(function () {
              p("Socket connection timed out"), o(new Error("Socket connection timed out"));
            }, e.options.timeout);p("Waiting for socket connection");var a = function a() {
              p("Socket disconnected before it could connect"), n.authenticated = !1;
            };n.once(s, a), n.once(i, function () {
              p("Socket connected"), p("Removing ".concat(s, " listener")), n.removeListener(s, a), clearTimeout(c), r(n);
            });
          }) : Promise.reject(new Error("It looks like your client connection has not been configured."));
        } }, { key: "authenticate", value: function value() {
          var e = this,
              t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
              n = this.app,
              r = Promise.resolve(t);return t.strategy || (t.accessToken ? t.strategy = this.options.jwtStrategy : r = this.getJWT().then(function (t) {
            return t ? { strategy: e.options.jwtStrategy, accessToken: t } : Promise.reject(new o.NotAuthenticated("Could not find stored JWT and no authentication strategy was given"));
          })), r.then(function (t) {
            return e.connected(n).then(function (r) {
              if (n.rest) return n.service(e.options.path).create(t).then(e.setJWT);var o = n.io ? "emit" : "send";return e.authenticateSocket(t, r, o).then(e.setJWT);
            });
          }).then(function (e) {
            return n.emit("authenticated", e), e;
          });
        } }, { key: "authenticateSocket", value: function value(e, t, n) {
          var r = this;return new Promise(function (o, i) {
            var s = setTimeout(function () {
              p("authenticateSocket timed out"), i(new Error("Authentication timed out"));
            }, r.options.timeout);p("Attempting to authenticate socket"), t[n]("authenticate", e, function (e, n) {
              if (e) return i(e);clearTimeout(s), t.authenticated = !0, p("Socket authenticated!"), o(n);
            });
          });
        } }, { key: "logoutSocket", value: function value(e, t) {
          var n = this;return new Promise(function (r, o) {
            var i = setTimeout(function () {
              p("logoutSocket timed out"), o(new Error("Logout timed out"));
            }, n.options.timeout);e[t]("logout", function (t) {
              if (clearTimeout(i), e.authenticated = !1, t) return o(t);r();
            });
          });
        } }, { key: "logout", value: function value() {
          var e = this,
              t = this.app;return t.set("accessToken", null), this.clearCookie(this.options.cookie), Promise.resolve(t.get("storage").removeItem(this.options.storageKey)).then(function () {
            if (t.io || t.primus) {
              var n = t.io ? "emit" : "send",
                  r = t.io ? t.io : t.primus;return e.logoutSocket(r, n);
            }
          }).then(function (e) {
            return t.emit("logout", e), e;
          });
        } }, { key: "setJWT", value: function value(e) {
          var t = e && e.accessToken ? e.accessToken : e;return t && (this.app.set("accessToken", t), this.app.get("storage").setItem(this.options.storageKey, t)), Promise.resolve(e);
        } }, { key: "getJWT", value: function value() {
          var e = this,
              t = this.app;return new Promise(function (n, r) {
            var o = t.get("accessToken");return o ? n(o) : Promise.resolve(e.storage.getItem(e.options.storageKey)).then(function (t) {
              var r = t || e.getCookie(e.options.cookie);return r && "null" !== r && !e.payloadIsValid(i(r)) && (r = void 0), n(r);
            }).catch(r);
          });
        } }, { key: "verifyJWT", value: function value(e) {
          if ("string" != typeof e) return Promise.reject(new Error("Token provided to verifyJWT is missing or not a string"));try {
            var t = i(e);return this.payloadIsValid(t) ? Promise.resolve(t) : Promise.reject(new Error("Invalid token: expired"));
          } catch (e) {
            return Promise.reject(new Error("Cannot decode malformed token."));
          }
        } }, { key: "getStorage", value: function value(e) {
          return e || new a();
        } }]) && r(t.prototype, n), e;
    }();
  }, function (e, t, n) {
    "use strict";
    var r = n(28);function o(e) {
      this.message = e;
    }(o.prototype = new Error()).name = "InvalidTokenError", e.exports = function (e, t) {
      if ("string" != typeof e) throw new o("Invalid token specified");var n = !0 === (t = t || {}).header ? 0 : 1;try {
        return JSON.parse(r(e.split(".")[n]));
      } catch (e) {
        throw new o("Invalid token specified: " + e.message);
      }
    }, e.exports.InvalidTokenError = o;
  }, function (e, t, n) {
    var r = n(29);e.exports = function (e) {
      var t = e.replace(/-/g, "+").replace(/_/g, "/");switch (t.length % 4) {case 0:
          break;case 2:
          t += "==";break;case 3:
          t += "=";break;default:
          throw "Illegal base64url string!";}try {
        return decodeURIComponent(r(t).replace(/(.)/g, function (e, t) {
          var n = t.charCodeAt(0).toString(16).toUpperCase();return n.length < 2 && (n = "0" + n), "%" + n;
        }));
      } catch (e) {
        return r(t);
      }
    };
  }, function (e, t) {
    function n(e) {
      this.message = e;
    }(n.prototype = new Error()).name = "InvalidCharacterError", e.exports = "undefined" != typeof window && window.atob && window.atob.bind(window) || function (e) {
      var t = String(e).replace(/=+$/, "");if (t.length % 4 == 1) throw new n("'atob' failed: The string to be decoded is not correctly encoded.");for (var r, o, i = 0, s = 0, c = ""; o = t.charAt(s++); ~o && (r = i % 4 ? 64 * r + o : o, i++ % 4) ? c += String.fromCharCode(255 & r >> (-2 * i & 6)) : 0) {
        o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(o);
      }return c;
    };
  }, function (e, t) {
    function n(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }t.Storage = function () {
      function e() {
        !function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, e), this.store = {};
      }var t, r;return t = e, (r = [{ key: "getItem", value: function value(e) {
          return this.store[e];
        } }, { key: "setItem", value: function value(e, t) {
          return this.store[e] = t;
        } }, { key: "removeItem", value: function value(e) {
          return delete this.store[e], this;
        } }]) && n(t.prototype, r), e;
    }(), t.payloadIsValid = function (e) {
      return e && (!e.exp || 1e3 * e.exp > new Date().getTime());
    }, t.getCookie = function (e) {
      if ("undefined" != typeof document) {
        var t = "; ".concat(document.cookie).split("; ".concat(e, "="));if (2 === t.length) return t.pop().split(";").shift();
      }return null;
    }, t.clearCookie = function (e) {
      return "undefined" != typeof document && (document.cookie = "".concat(e, "=;expires=Thu, 01 Jan 1970 00:00:01 GMT;")), null;
    };
  }, function (e, t, n) {
    var r = n(32),
        o = n(36),
        i = n(37),
        s = n(38),
        c = n(39),
        a = n(40),
        u = n(0),
        f = { jquery: r, superagent: o, request: i, fetch: s, axios: c, angular: a, angularHttpClient: n(41) };function l() {
      var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "",
          t = { Base: u };return Object.keys(f).forEach(function (n) {
        var r = f[n];t[n] = function (t) {
          var o = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};if (!t) throw new Error("".concat(n, " has to be provided to feathers-rest"));var i = function i(n) {
            return new r({ base: e, name: n, connection: t, options: o });
          },
              s = function s() {
            if ("function" == typeof this.defaultService) throw new Error("Only one default client provider can be configured");this.rest = t, this.defaultService = i;
          };return s.Service = r, s.service = i, s;
        };
      }), t;
    }e.exports = l, e.exports.default = l;
  }, function (e, t, n) {
    function r(e) {
      return (r = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
        return typeof e === "undefined" ? "undefined" : _typeof(e);
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e === "undefined" ? "undefined" : _typeof(e);
      })(e);
    }function o(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }function i(e, t) {
      return !t || "object" !== r(t) && "function" != typeof t ? function (e) {
        if (void 0 !== e) return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }(e) : t;
    }function s(e) {
      return (s = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }function c(e, t) {
      return (c = Object.setPrototypeOf || function (e, t) {
        return e.__proto__ = t, e;
      })(e, t);
    }var a = n(0),
        u = function (e) {
      function t() {
        return function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, t), i(this, s(t).apply(this, arguments));
      }var n, r;return function (e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && c(e, t);
      }(t, a), n = t, (r = [{ key: "request", value: function value(e, t) {
          var n = this,
              r = t.connection,
              o = void 0 === r ? {} : r,
              i = Object.assign({}, e.headers, this.options.headers, o.headers),
              s = Object.assign({ dataType: e.type || "json" }, o, e, { headers: i });return e.body && (s.data = JSON.stringify(e.body), s.contentType = "application/json"), delete s.type, delete s.body, new Promise(function (e, t) {
            n.connection.ajax(s).then(e, function (e) {
              var n = e.responseText;try {
                n = JSON.parse(n);
              } catch (t) {
                n = new Error(e.responseText);
              }n.xhr = n.response = e, t(n);
            });
          });
        } }]) && o(n.prototype, r), t;
    }();e.exports = u;
  }, function (e, t, n) {
    "use strict";
    var r = n(34),
        o = n(35),
        i = n(10);e.exports = { formats: i, parse: o, stringify: r };
  }, function (e, t, n) {
    "use strict";
    var r = n(9),
        o = n(10),
        i = { brackets: function brackets(e) {
        return e + "[]";
      }, indices: function indices(e, t) {
        return e + "[" + t + "]";
      }, repeat: function repeat(e) {
        return e;
      } },
        s = Date.prototype.toISOString,
        c = { delimiter: "&", encode: !0, encoder: r.encode, encodeValuesOnly: !1, serializeDate: function serializeDate(e) {
        return s.call(e);
      }, skipNulls: !1, strictNullHandling: !1 },
        a = function e(t, n, o, i, s, a, u, f, l, p, h, d) {
      var y = t;if ("function" == typeof u) y = u(n, y);else if (y instanceof Date) y = p(y);else if (null === y) {
        if (i) return a && !d ? a(n, c.encoder) : n;y = "";
      }if ("string" == typeof y || "number" == typeof y || "boolean" == typeof y || r.isBuffer(y)) return a ? [h(d ? n : a(n, c.encoder)) + "=" + h(a(y, c.encoder))] : [h(n) + "=" + h(String(y))];var v,
          m = [];if (void 0 === y) return m;if (Array.isArray(u)) v = u;else {
        var b = Object.keys(y);v = f ? b.sort(f) : b;
      }for (var g = 0; g < v.length; ++g) {
        var w = v[g];s && null === y[w] || (m = Array.isArray(y) ? m.concat(e(y[w], o(n, w), o, i, s, a, u, f, l, p, h, d)) : m.concat(e(y[w], n + (l ? "." + w : "[" + w + "]"), o, i, s, a, u, f, l, p, h, d)));
      }return m;
    };e.exports = function (e, t) {
      var n = e,
          s = t ? r.assign({}, t) : {};if (null !== s.encoder && void 0 !== s.encoder && "function" != typeof s.encoder) throw new TypeError("Encoder has to be a function.");var u = void 0 === s.delimiter ? c.delimiter : s.delimiter,
          f = "boolean" == typeof s.strictNullHandling ? s.strictNullHandling : c.strictNullHandling,
          l = "boolean" == typeof s.skipNulls ? s.skipNulls : c.skipNulls,
          p = "boolean" == typeof s.encode ? s.encode : c.encode,
          h = "function" == typeof s.encoder ? s.encoder : c.encoder,
          d = "function" == typeof s.sort ? s.sort : null,
          y = void 0 !== s.allowDots && s.allowDots,
          v = "function" == typeof s.serializeDate ? s.serializeDate : c.serializeDate,
          m = "boolean" == typeof s.encodeValuesOnly ? s.encodeValuesOnly : c.encodeValuesOnly;if (void 0 === s.format) s.format = o.default;else if (!Object.prototype.hasOwnProperty.call(o.formatters, s.format)) throw new TypeError("Unknown format option provided.");var b,
          g,
          w = o.formatters[s.format];"function" == typeof s.filter ? n = (g = s.filter)("", n) : Array.isArray(s.filter) && (b = g = s.filter);var O,
          j = [];if ("object" != (typeof n === "undefined" ? "undefined" : _typeof(n)) || null === n) return "";O = s.arrayFormat in i ? s.arrayFormat : "indices" in s ? s.indices ? "indices" : "repeat" : "indices";var k = i[O];b || (b = Object.keys(n)), d && b.sort(d);for (var C = 0; C < b.length; ++C) {
        var E = b[C];l && null === n[E] || (j = j.concat(a(n[E], E, k, f, l, p ? h : null, g, d, y, v, w, m)));
      }var S = j.join(u),
          x = !0 === s.addQueryPrefix ? "?" : "";return 0 < S.length ? x + S : "";
    };
  }, function (e, t, n) {
    "use strict";
    var r = n(9),
        o = Object.prototype.hasOwnProperty,
        i = { allowDots: !1, allowPrototypes: !1, arrayLimit: 20, decoder: r.decode, delimiter: "&", depth: 5, parameterLimit: 1e3, plainObjects: !1, strictNullHandling: !1 },
        s = function s(e, t, n) {
      if (e) {
        var r = n.allowDots ? e.replace(/\.([^.[]+)/g, "[$1]") : e,
            i = /(\[[^[\]]*])/g,
            s = /(\[[^[\]]*])/.exec(r),
            c = s ? r.slice(0, s.index) : r,
            a = [];if (c) {
          if (!n.plainObjects && o.call(Object.prototype, c) && !n.allowPrototypes) return;a.push(c);
        }for (var u = 0; null !== (s = i.exec(r)) && u < n.depth;) {
          if (u += 1, !n.plainObjects && o.call(Object.prototype, s[1].slice(1, -1)) && !n.allowPrototypes) return;a.push(s[1]);
        }return s && a.push("[" + r.slice(s.index) + "]"), function (e, t, n) {
          for (var r = t, o = e.length - 1; 0 <= o; --o) {
            var i,
                s = e[o];if ("[]" === s) i = (i = []).concat(r);else {
              i = n.plainObjects ? Object.create(null) : {};var c = "[" === s.charAt(0) && "]" === s.charAt(s.length - 1) ? s.slice(1, -1) : s,
                  a = parseInt(c, 10);!isNaN(a) && s !== c && String(a) === c && 0 <= a && n.parseArrays && a <= n.arrayLimit ? (i = [])[a] = r : i[c] = r;
            }r = i;
          }return r;
        }(a, t, n);
      }
    };e.exports = function (e, t) {
      var n = t ? r.assign({}, t) : {};if (null !== n.decoder && void 0 !== n.decoder && "function" != typeof n.decoder) throw new TypeError("Decoder has to be a function.");if (n.ignoreQueryPrefix = !0 === n.ignoreQueryPrefix, n.delimiter = "string" == typeof n.delimiter || r.isRegExp(n.delimiter) ? n.delimiter : i.delimiter, n.depth = "number" == typeof n.depth ? n.depth : i.depth, n.arrayLimit = "number" == typeof n.arrayLimit ? n.arrayLimit : i.arrayLimit, n.parseArrays = !1 !== n.parseArrays, n.decoder = "function" == typeof n.decoder ? n.decoder : i.decoder, n.allowDots = "boolean" == typeof n.allowDots ? n.allowDots : i.allowDots, n.plainObjects = "boolean" == typeof n.plainObjects ? n.plainObjects : i.plainObjects, n.allowPrototypes = "boolean" == typeof n.allowPrototypes ? n.allowPrototypes : i.allowPrototypes, n.parameterLimit = "number" == typeof n.parameterLimit ? n.parameterLimit : i.parameterLimit, n.strictNullHandling = "boolean" == typeof n.strictNullHandling ? n.strictNullHandling : i.strictNullHandling, "" === e || null == e) return n.plainObjects ? Object.create(null) : {};for (var c = "string" == typeof e ? function (e, t) {
        for (var n = {}, r = t.ignoreQueryPrefix ? e.replace(/^\?/, "") : e, s = t.parameterLimit === 1 / 0 ? void 0 : t.parameterLimit, c = r.split(t.delimiter, s), a = 0; a < c.length; ++a) {
          var u,
              f,
              l = c[a],
              p = l.indexOf("]="),
              h = -1 === p ? l.indexOf("=") : p + 1;f = -1 === h ? (u = t.decoder(l, i.decoder), t.strictNullHandling ? null : "") : (u = t.decoder(l.slice(0, h), i.decoder), t.decoder(l.slice(h + 1), i.decoder)), o.call(n, u) ? n[u] = [].concat(n[u]).concat(f) : n[u] = f;
        }return n;
      }(e, n) : e, a = n.plainObjects ? Object.create(null) : {}, u = Object.keys(c), f = 0; f < u.length; ++f) {
        var l = u[f],
            p = s(l, c[l], n);a = r.merge(a, p, n);
      }return r.compact(a);
    };
  }, function (e, t, n) {
    function r(e) {
      return (r = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
        return typeof e === "undefined" ? "undefined" : _typeof(e);
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e === "undefined" ? "undefined" : _typeof(e);
      })(e);
    }function o(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }function i(e, t) {
      return !t || "object" !== r(t) && "function" != typeof t ? function (e) {
        if (void 0 !== e) return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }(e) : t;
    }function s(e) {
      return (s = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }function c(e, t) {
      return (c = Object.setPrototypeOf || function (e, t) {
        return e.__proto__ = t, e;
      })(e, t);
    }var a = n(0),
        u = function (e) {
      function t() {
        return function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, t), i(this, s(t).apply(this, arguments));
      }var n, r;return function (e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && c(e, t);
      }(t, a), n = t, (r = [{ key: "request", value: function value(e, t) {
          var n = this.connection(e.method, e.url).set(this.options.headers || {}).set("Accept", "application/json").set(t.connection || {}).set(e.headers || {}).type(e.type || "json");return new Promise(function (t, r) {
            n.set(e.headers), e.body && n.send(e.body), n.end(function (e, n) {
              if (e) {
                try {
                  var o = e.response;(e = JSON.parse(e.response.text)).response = o;
                } catch (e) {}return r(e);
              }t(n && n.body);
            });
          });
        } }]) && o(n.prototype, r), t;
    }();e.exports = u;
  }, function (e, t, n) {
    function r(e) {
      return (r = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
        return typeof e === "undefined" ? "undefined" : _typeof(e);
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e === "undefined" ? "undefined" : _typeof(e);
      })(e);
    }function o(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }function i(e, t) {
      return !t || "object" !== r(t) && "function" != typeof t ? function (e) {
        if (void 0 !== e) return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }(e) : t;
    }function s(e) {
      return (s = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }function c(e, t) {
      return (c = Object.setPrototypeOf || function (e, t) {
        return e.__proto__ = t, e;
      })(e, t);
    }var a = n(0),
        u = function (e) {
      function t() {
        return function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, t), i(this, s(t).apply(this, arguments));
      }var n, r;return function (e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && c(e, t);
      }(t, a), n = t, (r = [{ key: "request", value: function value(e, t) {
          var n = this;return new Promise(function (r, o) {
            var i = t.connection,
                s = void 0 === i ? {} : i,
                c = Object.assign({}, e.headers, s.headers);n.connection(Object.assign({ json: !0 }, e, t.connection, { headers: c }), function (e, t, n) {
              return e ? o(e) : !e && 400 <= t.statusCode ? "string" == typeof n ? o(new Error(n)) : (n.response = t, o(Object.assign(new Error(n.message), n))) : void r(n);
            });
          });
        } }]) && o(n.prototype, r), t;
    }();e.exports = u;
  }, function (e, t, n) {
    function r(e) {
      return (r = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
        return typeof e === "undefined" ? "undefined" : _typeof(e);
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e === "undefined" ? "undefined" : _typeof(e);
      })(e);
    }function o(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }function i(e, t) {
      return !t || "object" !== r(t) && "function" != typeof t ? function (e) {
        if (void 0 !== e) return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }(e) : t;
    }function s(e) {
      return (s = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }function c(e, t) {
      return (c = Object.setPrototypeOf || function (e, t) {
        return e.__proto__ = t, e;
      })(e, t);
    }var a = n(0),
        u = function (e) {
      function t() {
        return function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, t), i(this, s(t).apply(this, arguments));
      }var n, r;return function (e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && c(e, t);
      }(t, a), n = t, (r = [{ key: "request", value: function value(e, t) {
          var n = Object.assign({}, e, t.connection);return n.headers = Object.assign({ Accept: "application/json" }, this.options.headers, n.headers), e.body && (n.body = JSON.stringify(e.body)), (0, this.connection)(e.url, n).then(this.checkStatus).then(function (e) {
            return 204 === e.status ? null : e.json();
          });
        } }, { key: "checkStatus", value: function value(e) {
          return e.ok ? e : e.json().then(function (t) {
            throw t.response = e, t;
          });
        } }]) && o(n.prototype, r), t;
    }();e.exports = u;
  }, function (e, t, n) {
    function r(e) {
      return (r = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
        return typeof e === "undefined" ? "undefined" : _typeof(e);
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e === "undefined" ? "undefined" : _typeof(e);
      })(e);
    }function o(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }function i(e, t) {
      return !t || "object" !== r(t) && "function" != typeof t ? function (e) {
        if (void 0 !== e) return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }(e) : t;
    }function s(e) {
      return (s = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }function c(e, t) {
      return (c = Object.setPrototypeOf || function (e, t) {
        return e.__proto__ = t, e;
      })(e, t);
    }var a = n(0),
        u = function (e) {
      function t() {
        return function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, t), i(this, s(t).apply(this, arguments));
      }var n, r;return function (e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && c(e, t);
      }(t, a), n = t, (r = [{ key: "request", value: function value(e, t) {
          var n = Object.assign({ url: e.url, method: e.method, data: e.body, headers: Object.assign({ Accept: "application/json" }, this.options.headers, e.headers) }, t.connection);return this.connection.request(n).then(function (e) {
            return e.data;
          }).catch(function (e) {
            var t = e.response || e;throw t instanceof Error ? t : t.data || t;
          });
        } }]) && o(n.prototype, r), t;
    }();e.exports = u;
  }, function (e, t, n) {
    function r(e) {
      return (r = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
        return typeof e === "undefined" ? "undefined" : _typeof(e);
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e === "undefined" ? "undefined" : _typeof(e);
      })(e);
    }function o(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }function i(e, t) {
      return !t || "object" !== r(t) && "function" != typeof t ? function (e) {
        if (void 0 !== e) return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }(e) : t;
    }function s(e) {
      return (s = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }function c(e, t) {
      return (c = Object.setPrototypeOf || function (e, t) {
        return e.__proto__ = t, e;
      })(e, t);
    }var a = n(0),
        u = function (e) {
      function t() {
        return function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, t), i(this, s(t).apply(this, arguments));
      }var n, r;return function (e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && c(e, t);
      }(t, a), n = t, (r = [{ key: "request", value: function value(e, t) {
          var n = this.connection,
              r = this.options.Headers;if (!n || !r) throw new Error("Please pass angular's 'http' (instance) and and object with 'Headers' (class) to feathers-rest");var o = e.url,
              i = t.connection,
              s = void 0 === i ? {} : i,
              c = new r(Object.assign({ Accept: "application/json" }, this.options.headers, e.headers, s.headers)),
              a = Object.assign({ method: e.method, body: e.body }, s, { headers: c });return new Promise(function (e, t) {
            n.request(o, a).subscribe(e, t);
          }).then(function (e) {
            return e.json();
          }).catch(function (e) {
            var t = e.response || e;throw t instanceof Error ? t : t.json() || t;
          });
        } }]) && o(n.prototype, r), t;
    }();e.exports = u;
  }, function (e, t, n) {
    function r(e) {
      return (r = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
        return typeof e === "undefined" ? "undefined" : _typeof(e);
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e === "undefined" ? "undefined" : _typeof(e);
      })(e);
    }function o(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }function i(e, t) {
      return !t || "object" !== r(t) && "function" != typeof t ? function (e) {
        if (void 0 !== e) return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }(e) : t;
    }function s(e) {
      return (s = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }function c(e, t) {
      return (c = Object.setPrototypeOf || function (e, t) {
        return e.__proto__ = t, e;
      })(e, t);
    }var a = n(0),
        u = function (e) {
      function t() {
        return function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, t), i(this, s(t).apply(this, arguments));
      }var n, r;return function (e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && c(e, t);
      }(t, a), n = t, (r = [{ key: "request", value: function value(e, t) {
          var n = this.connection,
              r = this.options.HttpHeaders;if (!n || !r) throw new Error("Please pass angular's 'httpClient' (instance) and and object with 'HttpHeaders' (class) to feathers-rest");var o = e.url,
              i = t.connection,
              s = void 0 === i ? {} : i,
              c = new r(Object.assign({ Accept: "application/json" }, this.options.headers, e.headers, s.headers)),
              a = Object.assign({ body: e.body }, t.connection, { headers: c });return new Promise(function (t, r) {
            n.request(e.method, o, a).subscribe(t, r);
          }).catch(function (e) {
            var t = e.error;if (t) throw "string" == typeof t ? JSON.parse(t) : t;throw e;
          });
        } }]) && o(n.prototype, r), t;
    }();e.exports = u;
  }, function (e, t, n) {
    var r = n(11);function o(e, t) {
      if (!e) throw new Error("Socket.io connection needs to be provided");var n = function n(_n) {
        var o = this,
            i = Object.keys(this.eventMappings || {}).map(function (e) {
          return o.eventMappings[e];
        }),
            s = Object.assign({}, t, { events: i, name: _n, connection: e, method: "emit" });return new r(s);
      },
          o = function o() {
        if ("function" == typeof this.defaultService) throw new Error("Only one default client provider can be configured");this.io = e, this.defaultService = n;
      };return o.Service = r, o.service = n, o;
    }e.exports = o, e.exports.default = o;
  }, function (e, t, n) {
    function r(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }var o = n(2),
        i = o.convert,
        s = o.Timeout,
        c = n(3)("@feathersjs/transport-commons/client"),
        a = ["addListener", "emit", "listenerCount", "listeners", "on", "once", "prependListener", "prependOnceListener", "removeAllListeners", "removeListener"],
        u = ["eventNames", "getMaxListeners", "setMaxListeners"];e.exports = function () {
      function e(t) {
        var n;!function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, e), this.events = t.events, this.path = t.name, this.connection = t.connection, this.method = t.method, this.timeout = t.timeout || 5e3, n = this, u.forEach(function (e) {
          n[e] = function () {
            var t;if ("function" != typeof this.connection[e]) throw new Error("Can not call '".concat(e, "' on the client service connection"));return (t = this.connection)[e].apply(t, arguments);
          };
        }), a.forEach(function (e) {
          n[e] = function (t) {
            var n;if ("function" != typeof this.connection[e]) throw new Error("Can not call '".concat(e, "' on the client service connection"));var r = "".concat(this.path, " ").concat(t);c("Calling emitter method ".concat(e, " with ") + "namespaced event '".concat(r, "'"));for (var o = arguments.length, i = new Array(1 < o ? o - 1 : 0), s = 1; s < o; s++) {
              i[s - 1] = arguments[s];
            }var a = (n = this.connection)[e].apply(n, [r].concat(i));return a === this.connection ? this : a;
          };
        });
      }var t, n;return t = e, (n = [{ key: "send", value: function value(e) {
          for (var t = this, n = arguments.length, r = new Array(1 < n ? n - 1 : 0), o = 1; o < n; o++) {
            r[o - 1] = arguments[o];
          }return new Promise(function (n, o) {
            var a,
                u = setTimeout(function () {
              return o(new s("Timeout of ".concat(t.timeout, "ms exceeded calling ").concat(e, " on ").concat(t.path), { timeout: t.timeout, method: e, path: t.path }));
            }, t.timeout);r.unshift(e, t.path), r.push(function (e, t) {
              return e = i(e), clearTimeout(u), e ? o(e) : n(t);
            }), c("Sending socket.".concat(t.method), r), (a = t.connection)[t.method].apply(a, r);
          });
        } }, { key: "find", value: function value() {
          var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};return this.send("find", e.query || {});
        } }, { key: "get", value: function value(e) {
          var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};return this.send("get", e, t.query || {});
        } }, { key: "create", value: function value(e) {
          var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};return this.send("create", e, t.query || {});
        } }, { key: "update", value: function value(e, t) {
          var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};return this.send("update", e, t, n.query || {});
        } }, { key: "patch", value: function value(e, t) {
          var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};return this.send("patch", e, t, n.query || {});
        } }, { key: "remove", value: function value(e) {
          var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};return this.send("remove", e, t.query || {});
        } }, { key: "off", value: function value(e) {
          for (var t = arguments.length, n = new Array(1 < t ? t - 1 : 0), r = 1; r < t; r++) {
            n[r - 1] = arguments[r];
          }var o;return "function" == typeof this.connection.off ? (o = this.connection).off.apply(o, ["".concat(this.path, " ").concat(e)].concat(n)) : 0 === n.length ? this.removeAllListeners(e) : this.removeListener.apply(this, [e].concat(n));
        } }]) && r(t.prototype, n), e;
    }();
  }, function (e, t, n) {
    var r = n(11);function o(e, t) {
      if (!e) throw new Error("Primus connection needs to be provided");var n = function n(_n2) {
        return new r(Object.assign({}, t, { name: _n2, connection: e, method: "send" }));
      },
          o = function o() {
        if ("function" == typeof this.defaultService) throw new Error("Only one default client provider can be configured");this.primus = e, this.defaultService = n;
      };return o.Service = r, o.service = n, o;
    }e.exports = o, e.exports.default = o;
  }]);
});

var host = 'https://zufang.xiaobb.com.cn/api/v1';
console.log(host);
var client = feathers();
var restClient = feathers.rest(host);
client.configure(restClient.axios(axios));
