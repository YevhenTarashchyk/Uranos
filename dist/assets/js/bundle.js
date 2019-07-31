!(function(e) {
  const t = {};
  function n(r) {
    if (t[r]) return t[r].exports;
    const i = (t[r] = { i: r, l: !1, exports: {} });
    return e[r].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function(e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
    }),
    (n.r = function(e) {
      typeof Symbol !== 'undefined' &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (n.t = function(e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && typeof e === 'object' && e && e.__esModule) return e;
      const r = Object.create(null);
      if (
        (n.r(r),
        Object.defineProperty(r, 'default', { enumerable: !0, value: e }),
        2 & t && typeof e !== 'string')
      )
        for (const i in e)
          n.d(
            r,
            i,
            function(t) {
              return e[t];
            }.bind(null, i)
          );
      return r;
    }),
    (n.n = function(e) {
      const t =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return n.d(t, 'a', t), t;
    }),
    (n.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = ''),
    n((n.s = 1));
})([
  function(e, t, n) {
    n.r(t),
      function(e) {
        for (
          /** !
           * @fileOverview Kickass library to create and place poppers near their reference elements.
           * @version 1.15.0
           * @license
           * Copyright (c) 2016 Federico Zivolo and contributors
           *
           * Permission is hereby granted, free of charge, to any person obtaining a copy
           * of this software and associated documentation files (the "Software"), to deal
           * in the Software without restriction, including without limitation the rights
           * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
           * copies of the Software, and to permit persons to whom the Software is
           * furnished to do so, subject to the following conditions:
           *
           * The above copyright notice and this permission notice shall be included in all
           * copies or substantial portions of the Software.
           *
           * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
           * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
           * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
           * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
           * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
           * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
           * SOFTWARE.
           */
          var n =
              typeof window !== 'undefined' && typeof document !== 'undefined',
            r = ['Edge', 'Trident', 'Firefox'],
            i = 0,
            o = 0;
          o < r.length;
          o += 1
        )
          if (n && navigator.userAgent.indexOf(r[o]) >= 0) {
            i = 1;
            break;
          }
        const s =
          n && window.Promise
            ? function(e) {
                let t = !1;
                return function() {
                  t ||
                    ((t = !0),
                    window.Promise.resolve().then(function() {
                      (t = !1), e();
                    }));
                };
              }
            : function(e) {
                let t = !1;
                return function() {
                  t ||
                    ((t = !0),
                    setTimeout(function() {
                      (t = !1), e();
                    }, i));
                };
              };
        function a(e) {
          return e && {}.toString.call(e) === '[object Function]';
        }
        function l(e, t) {
          if (e.nodeType !== 1) return [];
          const n = e.ownerDocument.defaultView.getComputedStyle(e, null);
          return t ? n[t] : n;
        }
        function u(e) {
          return e.nodeName === 'HTML' ? e : e.parentNode || e.host;
        }
        function c(e) {
          if (!e) return document.body;
          switch (e.nodeName) {
            case 'HTML':
            case 'BODY':
              return e.ownerDocument.body;
            case '#document':
              return e.body;
          }
          const t = l(e);
          const n = t.overflow;
          const r = t.overflowX;
          const i = t.overflowY;
          return /(auto|scroll|overlay)/.test(n + i + r) ? e : c(u(e));
        }
        const f =
          n && !(!window.MSInputMethodContext || !document.documentMode);
        const d = n && /MSIE 10/.test(navigator.userAgent);
        function h(e) {
          return e === 11 ? f : e === 10 ? d : f || d;
        }
        function p(e) {
          if (!e) return document.documentElement;
          for (
            var t = h(10) ? document.body : null, n = e.offsetParent || null;
            n === t && e.nextElementSibling;

          )
            n = (e = e.nextElementSibling).offsetParent;
          const r = n && n.nodeName;
          return r && r !== 'BODY' && r !== 'HTML'
            ? ['TH', 'TD', 'TABLE'].indexOf(n.nodeName) !== -1 &&
              l(n, 'position') === 'static'
              ? p(n)
              : n
            : e
            ? e.ownerDocument.documentElement
            : document.documentElement;
        }
        function g(e) {
          return e.parentNode !== null ? g(e.parentNode) : e;
        }
        function m(e, t) {
          if (!(e && e.nodeType && t && t.nodeType))
            return document.documentElement;
          const n =
            e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING;
          const r = n ? e : t;
          const i = n ? t : e;
          const o = document.createRange();
          o.setStart(r, 0), o.setEnd(i, 0);
          let s;
          let a;
          const l = o.commonAncestorContainer;
          if ((e !== l && t !== l) || r.contains(i))
            return (a = (s = l).nodeName) === 'BODY' ||
              (a !== 'HTML' && p(s.firstElementChild) !== s)
              ? p(l)
              : l;
          const u = g(e);
          return u.host ? m(u.host, t) : m(e, g(t).host);
        }
        function v(e) {
          const t =
            (arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : 'top') === 'top'
              ? 'scrollTop'
              : 'scrollLeft';
          const n = e.nodeName;
          if (n === 'BODY' || n === 'HTML') {
            const r = e.ownerDocument.documentElement;
            return (e.ownerDocument.scrollingElement || r)[t];
          }
          return e[t];
        }
        function y(e, t) {
          const n = t === 'x' ? 'Left' : 'Top';
          const r = n === 'Left' ? 'Right' : 'Bottom';
          return (
            parseFloat(e[`border${n}Width`], 10) +
            parseFloat(e[`border${r}Width`], 10)
          );
        }
        function b(e, t, n, r) {
          return Math.max(
            t[`offset${e}`],
            t[`scroll${e}`],
            n[`client${e}`],
            n[`offset${e}`],
            n[`scroll${e}`],
            h(10)
              ? parseInt(n[`offset${e}`]) +
                  parseInt(r[`margin${e === 'Height' ? 'Top' : 'Left'}`]) +
                  parseInt(r[`margin${e === 'Height' ? 'Bottom' : 'Right'}`])
              : 0
          );
        }
        function _(e) {
          const t = e.body;
          const n = e.documentElement;
          const r = h(10) && getComputedStyle(n);
          return { height: b('Height', t, n, r), width: b('Width', t, n, r) };
        }
        const w = function(e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        };
        const x = (function() {
          function e(e, t) {
            for (let n = 0; n < t.length; n++) {
              const r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                'value' in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
          };
        })();
        const E = function(e, t, n) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        };
        const T =
          Object.assign ||
          function(e) {
            for (let t = 1; t < arguments.length; t++) {
              const n = arguments[t];
              for (const r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          };
        function C(e) {
          return T({}, e, {
            right: e.left + e.width,
            bottom: e.top + e.height,
          });
        }
        function S(e) {
          let t = {};
          try {
            if (h(10)) {
              t = e.getBoundingClientRect();
              const n = v(e, 'top');
              const r = v(e, 'left');
              (t.top += n), (t.left += r), (t.bottom += n), (t.right += r);
            } else t = e.getBoundingClientRect();
          } catch (e) {}
          const i = {
            left: t.left,
            top: t.top,
            width: t.right - t.left,
            height: t.bottom - t.top,
          };
          const o = e.nodeName === 'HTML' ? _(e.ownerDocument) : {};
          const s = o.width || e.clientWidth || i.right - i.left;
          const a = o.height || e.clientHeight || i.bottom - i.top;
          let u = e.offsetWidth - s;
          let c = e.offsetHeight - a;
          if (u || c) {
            const f = l(e);
            (u -= y(f, 'x')), (c -= y(f, 'y')), (i.width -= u), (i.height -= c);
          }
          return C(i);
        }
        function D(e, t) {
          const n =
            arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const r = h(10);
          const i = t.nodeName === 'HTML';
          const o = S(e);
          const s = S(t);
          const a = c(e);
          const u = l(t);
          const f = parseFloat(u.borderTopWidth, 10);
          const d = parseFloat(u.borderLeftWidth, 10);
          n &&
            i &&
            ((s.top = Math.max(s.top, 0)), (s.left = Math.max(s.left, 0)));
          let p = C({
            top: o.top - s.top - f,
            left: o.left - s.left - d,
            width: o.width,
            height: o.height,
          });
          if (((p.marginTop = 0), (p.marginLeft = 0), !r && i)) {
            const g = parseFloat(u.marginTop, 10);
            const m = parseFloat(u.marginLeft, 10);
            (p.top -= f - g),
              (p.bottom -= f - g),
              (p.left -= d - m),
              (p.right -= d - m),
              (p.marginTop = g),
              (p.marginLeft = m);
          }
          return (
            (r && !n ? t.contains(a) : t === a && a.nodeName !== 'BODY') &&
              (p = (function(e, t) {
                const n =
                  arguments.length > 2 &&
                  void 0 !== arguments[2] &&
                  arguments[2];
                const r = v(t, 'top');
                const i = v(t, 'left');
                const o = n ? -1 : 1;
                return (
                  (e.top += r * o),
                  (e.bottom += r * o),
                  (e.left += i * o),
                  (e.right += i * o),
                  e
                );
              })(p, t)),
            p
          );
        }
        function A(e) {
          if (!e || !e.parentElement || h()) return document.documentElement;
          for (var t = e.parentElement; t && l(t, 'transform') === 'none'; )
            t = t.parentElement;
          return t || document.documentElement;
        }
        function N(e, t, n, r) {
          const i =
            arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
          let o = { top: 0, left: 0 };
          const s = i ? A(e) : m(e, t);
          if (r === 'viewport')
            o = (function(e) {
              const t =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
              const n = e.ownerDocument.documentElement;
              const r = D(e, n);
              const i = Math.max(n.clientWidth, window.innerWidth || 0);
              const o = Math.max(n.clientHeight, window.innerHeight || 0);
              const s = t ? 0 : v(n);
              const a = t ? 0 : v(n, 'left');
              return C({
                top: s - r.top + r.marginTop,
                left: a - r.left + r.marginLeft,
                width: i,
                height: o,
              });
            })(s, i);
          else {
            let a = void 0;
            r === 'scrollParent'
              ? (a = c(u(t))).nodeName === 'BODY' &&
                (a = e.ownerDocument.documentElement)
              : (a = r === 'window' ? e.ownerDocument.documentElement : r);
            const f = D(a, s, i);
            if (
              a.nodeName !== 'HTML' ||
              (function e(t) {
                const n = t.nodeName;
                if (n === 'BODY' || n === 'HTML') return !1;
                if (l(t, 'position') === 'fixed') return !0;
                const r = u(t);
                return !!r && e(r);
              })(s)
            )
              o = f;
            else {
              const d = _(e.ownerDocument);
              const h = d.height;
              const p = d.width;
              (o.top += f.top - f.marginTop),
                (o.bottom = h + f.top),
                (o.left += f.left - f.marginLeft),
                (o.right = p + f.left);
            }
          }
          const g = typeof (n = n || 0) === 'number';
          return (
            (o.left += g ? n : n.left || 0),
            (o.top += g ? n : n.top || 0),
            (o.right -= g ? n : n.right || 0),
            (o.bottom -= g ? n : n.bottom || 0),
            o
          );
        }
        function k(e, t, n, r, i) {
          const o =
            arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
          if (e.indexOf('auto') === -1) return e;
          const s = N(n, r, o, i);
          const a = {
            top: { width: s.width, height: t.top - s.top },
            right: { width: s.right - t.right, height: s.height },
            bottom: { width: s.width, height: s.bottom - t.bottom },
            left: { width: t.left - s.left, height: s.height },
          };
          const l = Object.keys(a)
            .map(function(e) {
              return T({ key: e }, a[e], {
                area: ((t = a[e]), t.width * t.height),
              });
              let t;
            })
            .sort(function(e, t) {
              return t.area - e.area;
            });
          const u = l.filter(function(e) {
            const t = e.width;
            const r = e.height;
            return t >= n.clientWidth && r >= n.clientHeight;
          });
          const c = u.length > 0 ? u[0].key : l[0].key;
          const f = e.split('-')[1];
          return c + (f ? `-${f}` : '');
        }
        function I(e, t, n) {
          const r =
            arguments.length > 3 && void 0 !== arguments[3]
              ? arguments[3]
              : null;
          return D(n, r ? A(t) : m(t, n), r);
        }
        function O(e) {
          const t = e.ownerDocument.defaultView.getComputedStyle(e);
          const n =
            parseFloat(t.marginTop || 0) + parseFloat(t.marginBottom || 0);
          const r =
            parseFloat(t.marginLeft || 0) + parseFloat(t.marginRight || 0);
          return { width: e.offsetWidth + r, height: e.offsetHeight + n };
        }
        function L(e) {
          const t = {
            left: 'right',
            right: 'left',
            bottom: 'top',
            top: 'bottom',
          };
          return e.replace(/left|right|bottom|top/g, function(e) {
            return t[e];
          });
        }
        function j(e, t, n) {
          n = n.split('-')[0];
          const r = O(e);
          const i = { width: r.width, height: r.height };
          const o = ['right', 'left'].indexOf(n) !== -1;
          const s = o ? 'top' : 'left';
          const a = o ? 'left' : 'top';
          const l = o ? 'height' : 'width';
          const u = o ? 'width' : 'height';
          return (
            (i[s] = t[s] + t[l] / 2 - r[l] / 2),
            (i[a] = n === a ? t[a] - r[u] : t[L(a)]),
            i
          );
        }
        function P(e, t) {
          return Array.prototype.find ? e.find(t) : e.filter(t)[0];
        }
        function H(e, t, n) {
          return (
            (void 0 === n
              ? e
              : e.slice(
                  0,
                  (function(e, t, n) {
                    if (Array.prototype.findIndex)
                      return e.findIndex(function(e) {
                        return e[t] === n;
                      });
                    const r = P(e, function(e) {
                      return e[t] === n;
                    });
                    return e.indexOf(r);
                  })(e, 'name', n)
                )
            ).forEach(function(e) {
              e.function &&
                console.warn(
                  '`modifier.function` is deprecated, use `modifier.fn`!'
                );
              const n = e.function || e.fn;
              e.enabled &&
                a(n) &&
                ((t.offsets.popper = C(t.offsets.popper)),
                (t.offsets.reference = C(t.offsets.reference)),
                (t = n(t, e)));
            }),
            t
          );
        }
        function q(e, t) {
          return e.some(function(e) {
            const n = e.name;
            return e.enabled && n === t;
          });
        }
        function R(e) {
          for (
            let t = [!1, 'ms', 'Webkit', 'Moz', 'O'],
              n = e.charAt(0).toUpperCase() + e.slice(1),
              r = 0;
            r < t.length;
            r++
          ) {
            const i = t[r];
            const o = i ? `${i}${n}` : e;
            if (void 0 !== document.body.style[o]) return o;
          }
          return null;
        }
        function M(e) {
          const t = e.ownerDocument;
          return t ? t.defaultView : window;
        }
        function W(e, t, n, r) {
          (n.updateBound = r),
            M(e).addEventListener('resize', n.updateBound, { passive: !0 });
          const i = c(e);
          return (
            (function e(t, n, r, i) {
              const o = t.nodeName === 'BODY';
              const s = o ? t.ownerDocument.defaultView : t;
              s.addEventListener(n, r, { passive: !0 }),
                o || e(c(s.parentNode), n, r, i),
                i.push(s);
            })(i, 'scroll', n.updateBound, n.scrollParents),
            (n.scrollElement = i),
            (n.eventsEnabled = !0),
            n
          );
        }
        function F() {
          let e;
          let t;
          this.state.eventsEnabled &&
            (cancelAnimationFrame(this.scheduleUpdate),
            (this.state =
              ((e = this.reference),
              (t = this.state),
              M(e).removeEventListener('resize', t.updateBound),
              t.scrollParents.forEach(function(e) {
                e.removeEventListener('scroll', t.updateBound);
              }),
              (t.updateBound = null),
              (t.scrollParents = []),
              (t.scrollElement = null),
              (t.eventsEnabled = !1),
              t)));
        }
        function B(e) {
          return e !== '' && !isNaN(parseFloat(e)) && isFinite(e);
        }
        function U(e, t) {
          Object.keys(t).forEach(function(n) {
            let r = '';
            ['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(n) !==
              -1 &&
              B(t[n]) &&
              (r = 'px'),
              (e.style[n] = t[n] + r);
          });
        }
        const $ = n && /Firefox/i.test(navigator.userAgent);
        function z(e, t, n) {
          const r = P(e, function(e) {
            return e.name === t;
          });
          const i =
            !!r &&
            e.some(function(e) {
              return e.name === n && e.enabled && e.order < r.order;
            });
          if (!i) {
            const o = `\`${t}\``;
            const s = `\`${n}\``;
            console.warn(
              `${s} modifier is required by ${o} modifier in order to work, be sure to include it before ${o}!`
            );
          }
          return i;
        }
        const V = [
          'auto-start',
          'auto',
          'auto-end',
          'top-start',
          'top',
          'top-end',
          'right-start',
          'right',
          'right-end',
          'bottom-end',
          'bottom',
          'bottom-start',
          'left-end',
          'left',
          'left-start',
        ];
        const K = V.slice(3);
        function Q(e) {
          const t =
            arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          const n = K.indexOf(e);
          const r = K.slice(n + 1).concat(K.slice(0, n));
          return t ? r.reverse() : r;
        }
        const X = {
          FLIP: 'flip',
          CLOCKWISE: 'clockwise',
          COUNTERCLOCKWISE: 'counterclockwise',
        };
        function Y(e, t, n, r) {
          const i = [0, 0];
          const o = ['right', 'left'].indexOf(r) !== -1;
          const s = e.split(/(\+|\-)/).map(function(e) {
            return e.trim();
          });
          const a = s.indexOf(
            P(s, function(e) {
              return e.search(/,|\s/) !== -1;
            })
          );
          s[a] &&
            s[a].indexOf(',') === -1 &&
            console.warn(
              'Offsets separated by white space(s) are deprecated, use a comma (,) instead.'
            );
          const l = /\s*,\s*|\s+/;
          let u =
            a !== -1
              ? [
                  s.slice(0, a).concat([s[a].split(l)[0]]),
                  [s[a].split(l)[1]].concat(s.slice(a + 1)),
                ]
              : [s];
          return (
            (u = u.map(function(e, r) {
              const i = (r === 1 ? !o : o) ? 'height' : 'width';
              let s = !1;
              return e
                .reduce(function(e, t) {
                  return e[e.length - 1] === '' && ['+', '-'].indexOf(t) !== -1
                    ? ((e[e.length - 1] = t), (s = !0), e)
                    : s
                    ? ((e[e.length - 1] += t), (s = !1), e)
                    : e.concat(t);
                }, [])
                .map(function(e) {
                  return (function(e, t, n, r) {
                    const i = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
                    const o = +i[1];
                    const s = i[2];
                    if (!o) return e;
                    if (s.indexOf('%') === 0) {
                      let a = void 0;
                      switch (s) {
                        case '%p':
                          a = n;
                          break;
                        case '%':
                        case '%r':
                        default:
                          a = r;
                      }
                      return (C(a)[t] / 100) * o;
                    }
                    if (s === 'vh' || s === 'vw')
                      return (
                        ((s === 'vh'
                          ? Math.max(
                              document.documentElement.clientHeight,
                              window.innerHeight || 0
                            )
                          : Math.max(
                              document.documentElement.clientWidth,
                              window.innerWidth || 0
                            )) /
                          100) *
                        o
                      );
                    return o;
                  })(e, i, t, n);
                });
            })).forEach(function(e, t) {
              e.forEach(function(n, r) {
                B(n) && (i[t] += n * (e[r - 1] === '-' ? -1 : 1));
              });
            }),
            i
          );
        }
        const G = {
          placement: 'bottom',
          positionFixed: !1,
          eventsEnabled: !0,
          removeOnDestroy: !1,
          onCreate() {},
          onUpdate() {},
          modifiers: {
            shift: {
              order: 100,
              enabled: !0,
              fn(e) {
                const t = e.placement;
                const n = t.split('-')[0];
                const r = t.split('-')[1];
                if (r) {
                  const i = e.offsets;
                  const o = i.reference;
                  const s = i.popper;
                  const a = ['bottom', 'top'].indexOf(n) !== -1;
                  const l = a ? 'left' : 'top';
                  const u = a ? 'width' : 'height';
                  const c = {
                    start: E({}, l, o[l]),
                    end: E({}, l, o[l] + o[u] - s[u]),
                  };
                  e.offsets.popper = T({}, s, c[r]);
                }
                return e;
              },
            },
            offset: {
              order: 200,
              enabled: !0,
              fn(e, t) {
                const n = t.offset;
                const r = e.placement;
                const i = e.offsets;
                const o = i.popper;
                const s = i.reference;
                const a = r.split('-')[0];
                let l = void 0;
                return (
                  (l = B(+n) ? [+n, 0] : Y(n, o, s, a)),
                  a === 'left'
                    ? ((o.top += l[0]), (o.left -= l[1]))
                    : a === 'right'
                    ? ((o.top += l[0]), (o.left += l[1]))
                    : a === 'top'
                    ? ((o.left += l[0]), (o.top -= l[1]))
                    : a === 'bottom' && ((o.left += l[0]), (o.top += l[1])),
                  (e.popper = o),
                  e
                );
              },
              offset: 0,
            },
            preventOverflow: {
              order: 300,
              enabled: !0,
              fn(e, t) {
                let n = t.boundariesElement || p(e.instance.popper);
                e.instance.reference === n && (n = p(n));
                const r = R('transform');
                const i = e.instance.popper.style;
                const o = i.top;
                const s = i.left;
                const a = i[r];
                (i.top = ''), (i.left = ''), (i[r] = '');
                const l = N(
                  e.instance.popper,
                  e.instance.reference,
                  t.padding,
                  n,
                  e.positionFixed
                );
                (i.top = o), (i.left = s), (i[r] = a), (t.boundaries = l);
                const u = t.priority;
                let c = e.offsets.popper;
                const f = {
                  primary(e) {
                    let n = c[e];
                    return (
                      c[e] < l[e] &&
                        !t.escapeWithReference &&
                        (n = Math.max(c[e], l[e])),
                      E({}, e, n)
                    );
                  },
                  secondary(e) {
                    const n = e === 'right' ? 'left' : 'top';
                    let r = c[n];
                    return (
                      c[e] > l[e] &&
                        !t.escapeWithReference &&
                        (r = Math.min(
                          c[n],
                          l[e] - (e === 'right' ? c.width : c.height)
                        )),
                      E({}, n, r)
                    );
                  },
                };
                return (
                  u.forEach(function(e) {
                    const t =
                      ['left', 'top'].indexOf(e) !== -1
                        ? 'primary'
                        : 'secondary';
                    c = T({}, c, f[t](e));
                  }),
                  (e.offsets.popper = c),
                  e
                );
              },
              priority: ['left', 'right', 'top', 'bottom'],
              padding: 5,
              boundariesElement: 'scrollParent',
            },
            keepTogether: {
              order: 400,
              enabled: !0,
              fn(e) {
                const t = e.offsets;
                const n = t.popper;
                const r = t.reference;
                const i = e.placement.split('-')[0];
                const o = Math.floor;
                const s = ['top', 'bottom'].indexOf(i) !== -1;
                const a = s ? 'right' : 'bottom';
                const l = s ? 'left' : 'top';
                const u = s ? 'width' : 'height';
                return (
                  n[a] < o(r[l]) && (e.offsets.popper[l] = o(r[l]) - n[u]),
                  n[l] > o(r[a]) && (e.offsets.popper[l] = o(r[a])),
                  e
                );
              },
            },
            arrow: {
              order: 500,
              enabled: !0,
              fn(e, t) {
                let n;
                if (!z(e.instance.modifiers, 'arrow', 'keepTogether')) return e;
                let r = t.element;
                if (typeof r === 'string') {
                  if (!(r = e.instance.popper.querySelector(r))) return e;
                } else if (!e.instance.popper.contains(r))
                  return (
                    console.warn(
                      'WARNING: `arrow.element` must be child of its popper element!'
                    ),
                    e
                  );
                const i = e.placement.split('-')[0];
                const o = e.offsets;
                const s = o.popper;
                const a = o.reference;
                const u = ['left', 'right'].indexOf(i) !== -1;
                const c = u ? 'height' : 'width';
                const f = u ? 'Top' : 'Left';
                const d = f.toLowerCase();
                const h = u ? 'left' : 'top';
                const p = u ? 'bottom' : 'right';
                const g = O(r)[c];
                a[p] - g < s[d] && (e.offsets.popper[d] -= s[d] - (a[p] - g)),
                  a[d] + g > s[p] && (e.offsets.popper[d] += a[d] + g - s[p]),
                  (e.offsets.popper = C(e.offsets.popper));
                const m = a[d] + a[c] / 2 - g / 2;
                const v = l(e.instance.popper);
                const y = parseFloat(v[`margin${f}`], 10);
                const b = parseFloat(v[`border${f}Width`], 10);
                let _ = m - e.offsets.popper[d] - y - b;
                return (
                  (_ = Math.max(Math.min(s[c] - g, _), 0)),
                  (e.arrowElement = r),
                  (e.offsets.arrow =
                    (E((n = {}), d, Math.round(_)), E(n, h, ''), n)),
                  e
                );
              },
              element: '[x-arrow]',
            },
            flip: {
              order: 600,
              enabled: !0,
              fn(e, t) {
                if (q(e.instance.modifiers, 'inner')) return e;
                if (e.flipped && e.placement === e.originalPlacement) return e;
                const n = N(
                  e.instance.popper,
                  e.instance.reference,
                  t.padding,
                  t.boundariesElement,
                  e.positionFixed
                );
                let r = e.placement.split('-')[0];
                let i = L(r);
                let o = e.placement.split('-')[1] || '';
                let s = [];
                switch (t.behavior) {
                  case X.FLIP:
                    s = [r, i];
                    break;
                  case X.CLOCKWISE:
                    s = Q(r);
                    break;
                  case X.COUNTERCLOCKWISE:
                    s = Q(r, !0);
                    break;
                  default:
                    s = t.behavior;
                }
                return (
                  s.forEach(function(a, l) {
                    if (r !== a || s.length === l + 1) return e;
                    (r = e.placement.split('-')[0]), (i = L(r));
                    const u = e.offsets.popper;
                    const c = e.offsets.reference;
                    const f = Math.floor;
                    const d =
                      (r === 'left' && f(u.right) > f(c.left)) ||
                      (r === 'right' && f(u.left) < f(c.right)) ||
                      (r === 'top' && f(u.bottom) > f(c.top)) ||
                      (r === 'bottom' && f(u.top) < f(c.bottom));
                    const h = f(u.left) < f(n.left);
                    const p = f(u.right) > f(n.right);
                    const g = f(u.top) < f(n.top);
                    const m = f(u.bottom) > f(n.bottom);
                    const v =
                      (r === 'left' && h) ||
                      (r === 'right' && p) ||
                      (r === 'top' && g) ||
                      (r === 'bottom' && m);
                    const y = ['top', 'bottom'].indexOf(r) !== -1;
                    const b =
                      !!t.flipVariations &&
                      ((y && o === 'start' && h) ||
                        (y && o === 'end' && p) ||
                        (!y && o === 'start' && g) ||
                        (!y && o === 'end' && m));
                    const _ =
                      !!t.flipVariationsByContent &&
                      ((y && o === 'start' && p) ||
                        (y && o === 'end' && h) ||
                        (!y && o === 'start' && m) ||
                        (!y && o === 'end' && g));
                    const w = b || _;
                    (d || v || w) &&
                      ((e.flipped = !0),
                      (d || v) && (r = s[l + 1]),
                      w &&
                        (o = (function(e) {
                          return e === 'end'
                            ? 'start'
                            : e === 'start'
                            ? 'end'
                            : e;
                        })(o)),
                      (e.placement = r + (o ? `-${o}` : '')),
                      (e.offsets.popper = T(
                        {},
                        e.offsets.popper,
                        j(e.instance.popper, e.offsets.reference, e.placement)
                      )),
                      (e = H(e.instance.modifiers, e, 'flip')));
                  }),
                  e
                );
              },
              behavior: 'flip',
              padding: 5,
              boundariesElement: 'viewport',
              flipVariations: !1,
              flipVariationsByContent: !1,
            },
            inner: {
              order: 700,
              enabled: !1,
              fn(e) {
                const t = e.placement;
                const n = t.split('-')[0];
                const r = e.offsets;
                const i = r.popper;
                const o = r.reference;
                const s = ['left', 'right'].indexOf(n) !== -1;
                const a = ['top', 'left'].indexOf(n) === -1;
                return (
                  (i[s ? 'left' : 'top'] =
                    o[n] - (a ? i[s ? 'width' : 'height'] : 0)),
                  (e.placement = L(t)),
                  (e.offsets.popper = C(i)),
                  e
                );
              },
            },
            hide: {
              order: 800,
              enabled: !0,
              fn(e) {
                if (!z(e.instance.modifiers, 'hide', 'preventOverflow'))
                  return e;
                const t = e.offsets.reference;
                const n = P(e.instance.modifiers, function(e) {
                  return e.name === 'preventOverflow';
                }).boundaries;
                if (
                  t.bottom < n.top ||
                  t.left > n.right ||
                  t.top > n.bottom ||
                  t.right < n.left
                ) {
                  if (!0 === e.hide) return e;
                  (e.hide = !0), (e.attributes['x-out-of-boundaries'] = '');
                } else {
                  if (!1 === e.hide) return e;
                  (e.hide = !1), (e.attributes['x-out-of-boundaries'] = !1);
                }
                return e;
              },
            },
            computeStyle: {
              order: 850,
              enabled: !0,
              fn(e, t) {
                const n = t.x;
                const r = t.y;
                const i = e.offsets.popper;
                const o = P(e.instance.modifiers, function(e) {
                  return e.name === 'applyStyle';
                }).gpuAcceleration;
                void 0 !== o &&
                  console.warn(
                    'WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!'
                  );
                const s = void 0 !== o ? o : t.gpuAcceleration;
                const a = p(e.instance.popper);
                const l = S(a);
                const u = { position: i.position };
                const c = (function(e, t) {
                  const n = e.offsets;
                  const r = n.popper;
                  const i = n.reference;
                  const o = Math.round;
                  const s = Math.floor;
                  const a = function(e) {
                    return e;
                  };
                  const l = o(i.width);
                  const u = o(r.width);
                  const c = ['left', 'right'].indexOf(e.placement) !== -1;
                  const f = e.placement.indexOf('-') !== -1;
                  const d = t ? (c || f || l % 2 == u % 2 ? o : s) : a;
                  const h = t ? o : a;
                  return {
                    left: d(
                      l % 2 == 1 && u % 2 == 1 && !f && t ? r.left - 1 : r.left
                    ),
                    top: h(r.top),
                    bottom: h(r.bottom),
                    right: d(r.right),
                  };
                })(e, window.devicePixelRatio < 2 || !$);
                const f = n === 'bottom' ? 'top' : 'bottom';
                const d = r === 'right' ? 'left' : 'right';
                const h = R('transform');
                let g = void 0;
                let m = void 0;
                if (
                  ((m =
                    f === 'bottom'
                      ? a.nodeName === 'HTML'
                        ? -a.clientHeight + c.bottom
                        : -l.height + c.bottom
                      : c.top),
                  (g =
                    d === 'right'
                      ? a.nodeName === 'HTML'
                        ? -a.clientWidth + c.right
                        : -l.width + c.right
                      : c.left),
                  s && h)
                )
                  (u[h] = `translate3d(${g}px, ${m}px, 0)`),
                    (u[f] = 0),
                    (u[d] = 0),
                    (u.willChange = 'transform');
                else {
                  const v = f === 'bottom' ? -1 : 1;
                  const y = d === 'right' ? -1 : 1;
                  (u[f] = m * v), (u[d] = g * y), (u.willChange = `${f}, ${d}`);
                }
                const b = { 'x-placement': e.placement };
                return (
                  (e.attributes = T({}, b, e.attributes)),
                  (e.styles = T({}, u, e.styles)),
                  (e.arrowStyles = T({}, e.offsets.arrow, e.arrowStyles)),
                  e
                );
              },
              gpuAcceleration: !0,
              x: 'bottom',
              y: 'right',
            },
            applyStyle: {
              order: 900,
              enabled: !0,
              fn(e) {
                let t;
                let n;
                return (
                  U(e.instance.popper, e.styles),
                  (t = e.instance.popper),
                  (n = e.attributes),
                  Object.keys(n).forEach(function(e) {
                    !1 !== n[e]
                      ? t.setAttribute(e, n[e])
                      : t.removeAttribute(e);
                  }),
                  e.arrowElement &&
                    Object.keys(e.arrowStyles).length &&
                    U(e.arrowElement, e.arrowStyles),
                  e
                );
              },
              onLoad(e, t, n, r, i) {
                const o = I(i, t, e, n.positionFixed);
                const s = k(
                  n.placement,
                  o,
                  t,
                  e,
                  n.modifiers.flip.boundariesElement,
                  n.modifiers.flip.padding
                );
                return (
                  t.setAttribute('x-placement', s),
                  U(t, { position: n.positionFixed ? 'fixed' : 'absolute' }),
                  n
                );
              },
              gpuAcceleration: void 0,
            },
          },
        };
        const J = (function() {
          function e(t, n) {
            const r = this;
            const i =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {};
            w(this, e),
              (this.scheduleUpdate = function() {
                return requestAnimationFrame(r.update);
              }),
              (this.update = s(this.update.bind(this))),
              (this.options = T({}, e.Defaults, i)),
              (this.state = {
                isDestroyed: !1,
                isCreated: !1,
                scrollParents: [],
              }),
              (this.reference = t && t.jquery ? t[0] : t),
              (this.popper = n && n.jquery ? n[0] : n),
              (this.options.modifiers = {}),
              Object.keys(T({}, e.Defaults.modifiers, i.modifiers)).forEach(
                function(t) {
                  r.options.modifiers[t] = T(
                    {},
                    e.Defaults.modifiers[t] || {},
                    i.modifiers ? i.modifiers[t] : {}
                  );
                }
              ),
              (this.modifiers = Object.keys(this.options.modifiers)
                .map(function(e) {
                  return T({ name: e }, r.options.modifiers[e]);
                })
                .sort(function(e, t) {
                  return e.order - t.order;
                })),
              this.modifiers.forEach(function(e) {
                e.enabled &&
                  a(e.onLoad) &&
                  e.onLoad(r.reference, r.popper, r.options, e, r.state);
              }),
              this.update();
            const o = this.options.eventsEnabled;
            o && this.enableEventListeners(), (this.state.eventsEnabled = o);
          }
          return (
            x(e, [
              {
                key: 'update',
                value() {
                  return function() {
                    if (!this.state.isDestroyed) {
                      let e = {
                        instance: this,
                        styles: {},
                        arrowStyles: {},
                        attributes: {},
                        flipped: !1,
                        offsets: {},
                      };
                      (e.offsets.reference = I(
                        this.state,
                        this.popper,
                        this.reference,
                        this.options.positionFixed
                      )),
                        (e.placement = k(
                          this.options.placement,
                          e.offsets.reference,
                          this.popper,
                          this.reference,
                          this.options.modifiers.flip.boundariesElement,
                          this.options.modifiers.flip.padding
                        )),
                        (e.originalPlacement = e.placement),
                        (e.positionFixed = this.options.positionFixed),
                        (e.offsets.popper = j(
                          this.popper,
                          e.offsets.reference,
                          e.placement
                        )),
                        (e.offsets.popper.position = this.options.positionFixed
                          ? 'fixed'
                          : 'absolute'),
                        (e = H(this.modifiers, e)),
                        this.state.isCreated
                          ? this.options.onUpdate(e)
                          : ((this.state.isCreated = !0),
                            this.options.onCreate(e));
                    }
                  }.call(this);
                },
              },
              {
                key: 'destroy',
                value() {
                  return function() {
                    return (
                      (this.state.isDestroyed = !0),
                      q(this.modifiers, 'applyStyle') &&
                        (this.popper.removeAttribute('x-placement'),
                        (this.popper.style.position = ''),
                        (this.popper.style.top = ''),
                        (this.popper.style.left = ''),
                        (this.popper.style.right = ''),
                        (this.popper.style.bottom = ''),
                        (this.popper.style.willChange = ''),
                        (this.popper.style[R('transform')] = '')),
                      this.disableEventListeners(),
                      this.options.removeOnDestroy &&
                        this.popper.parentNode.removeChild(this.popper),
                      this
                    );
                  }.call(this);
                },
              },
              {
                key: 'enableEventListeners',
                value() {
                  return function() {
                    this.state.eventsEnabled ||
                      (this.state = W(
                        this.reference,
                        this.options,
                        this.state,
                        this.scheduleUpdate
                      ));
                  }.call(this);
                },
              },
              {
                key: 'disableEventListeners',
                value() {
                  return F.call(this);
                },
              },
            ]),
            e
          );
        })();
        (J.Utils = (typeof window !== 'undefined' ? window : e).PopperUtils),
          (J.placements = V),
          (J.Defaults = G),
          (t.default = J);
      }.call(this, n(8));
  },
  function(e, t, n) {
    n.r(t);
    n(2), n(6), n(7), n(0), n(9);
  },
  function(e, t, n) {
    let r = n(3);
    typeof r === 'string' && (r = [[e.i, r, '']]);
    const i = { hmr: !0, transform: void 0, insertInto: void 0 };
    n(4)(r, i);
    r.locals && (e.exports = r.locals);
  },
  function(e, t, n) {},
  function(e, t, n) {
    let r;
    let i;
    const o = {};
    const s =
      ((r = function() {
        return window && document && document.all && !window.atob;
      }),
      function() {
        return void 0 === i && (i = r.apply(this, arguments)), i;
      });
    const a = (function(e) {
      const t = {};
      return function(e, n) {
        if (typeof e === 'function') return e();
        if (void 0 === t[e]) {
          let r = function(e, t) {
            return t ? t.querySelector(e) : document.querySelector(e);
          }.call(this, e, n);
          if (window.HTMLIFrameElement && r instanceof window.HTMLIFrameElement)
            try {
              r = r.contentDocument.head;
            } catch (e) {
              r = null;
            }
          t[e] = r;
        }
        return t[e];
      };
    })();
    let l = null;
    let u = 0;
    const c = [];
    const f = n(5);
    function d(e, t) {
      for (let n = 0; n < e.length; n++) {
        const r = e[n];
        const i = o[r.id];
        if (i) {
          i.refs++;
          for (var s = 0; s < i.parts.length; s++) i.parts[s](r.parts[s]);
          for (; s < r.parts.length; s++) i.parts.push(y(r.parts[s], t));
        } else {
          const a = [];
          for (s = 0; s < r.parts.length; s++) a.push(y(r.parts[s], t));
          o[r.id] = { id: r.id, refs: 1, parts: a };
        }
      }
    }
    function h(e, t) {
      for (var n = [], r = {}, i = 0; i < e.length; i++) {
        const o = e[i];
        const s = t.base ? o[0] + t.base : o[0];
        const a = { css: o[1], media: o[2], sourceMap: o[3] };
        r[s] ? r[s].parts.push(a) : n.push((r[s] = { id: s, parts: [a] }));
      }
      return n;
    }
    function p(e, t) {
      const n = a(e.insertInto);
      if (!n)
        throw new Error(
          "Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid."
        );
      const r = c[c.length - 1];
      if (e.insertAt === 'top')
        r
          ? r.nextSibling
            ? n.insertBefore(t, r.nextSibling)
            : n.appendChild(t)
          : n.insertBefore(t, n.firstChild),
          c.push(t);
      else if (e.insertAt === 'bottom') n.appendChild(t);
      else {
        if (typeof e.insertAt !== 'object' || !e.insertAt.before)
          throw new Error(
            "[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n"
          );
        const i = a(e.insertAt.before, n);
        n.insertBefore(t, i);
      }
    }
    function g(e) {
      if (e.parentNode === null) return !1;
      e.parentNode.removeChild(e);
      const t = c.indexOf(e);
      t >= 0 && c.splice(t, 1);
    }
    function m(e) {
      const t = document.createElement('style');
      if (
        (void 0 === e.attrs.type && (e.attrs.type = 'text/css'),
        void 0 === e.attrs.nonce)
      ) {
        const r = (function() {
          0;

          return n.nc;
        })();
        r && (e.attrs.nonce = r);
      }
      return v(t, e.attrs), p(e, t), t;
    }
    function v(e, t) {
      Object.keys(t).forEach(function(n) {
        e.setAttribute(n, t[n]);
      });
    }
    function y(e, t) {
      let n;
      let r;
      let i;
      let o;
      if (t.transform && e.css) {
        if (
          !(o =
            typeof t.transform === 'function'
              ? t.transform(e.css)
              : t.transform.default(e.css))
        )
          return function() {};
        e.css = o;
      }
      if (t.singleton) {
        const s = u++;
        (n = l || (l = m(t))),
          (r = w.bind(null, n, s, !1)),
          (i = w.bind(null, n, s, !0));
      } else
        e.sourceMap &&
        typeof URL === 'function' &&
        typeof URL.createObjectURL === 'function' &&
        typeof URL.revokeObjectURL === 'function' &&
        typeof Blob === 'function' &&
        typeof btoa === 'function'
          ? ((n = (function(e) {
              const t = document.createElement('link');
              return (
                void 0 === e.attrs.type && (e.attrs.type = 'text/css'),
                (e.attrs.rel = 'stylesheet'),
                v(t, e.attrs),
                p(e, t),
                t
              );
            })(t)),
            (r = function(e, t, n) {
              let r = n.css;
              const i = n.sourceMap;
              const o = void 0 === t.convertToAbsoluteUrls && i;
              (t.convertToAbsoluteUrls || o) && (r = f(r));
              i &&
                (r += `\n/*# sourceMappingURL=data:application/json;base64,${btoa(
                  unescape(encodeURIComponent(JSON.stringify(i)))
                )} */`);
              const s = new Blob([r], { type: 'text/css' });
              const a = e.href;
              (e.href = URL.createObjectURL(s)), a && URL.revokeObjectURL(a);
            }.bind(null, n, t)),
            (i = function() {
              g(n), n.href && URL.revokeObjectURL(n.href);
            }))
          : ((n = m(t)),
            (r = function(e, t) {
              const n = t.css;
              const r = t.media;
              r && e.setAttribute('media', r);
              if (e.styleSheet) e.styleSheet.cssText = n;
              else {
                for (; e.firstChild; ) e.removeChild(e.firstChild);
                e.appendChild(document.createTextNode(n));
              }
            }.bind(null, n)),
            (i = function() {
              g(n);
            }));
      return (
        r(e),
        function(t) {
          if (t) {
            if (
              t.css === e.css &&
              t.media === e.media &&
              t.sourceMap === e.sourceMap
            )
              return;
            r((e = t));
          } else i();
        }
      );
    }
    e.exports = function(e, t) {
      if (typeof DEBUG !== 'undefined' && DEBUG && typeof document !== 'object')
        throw new Error(
          'The style-loader cannot be used in a non-browser environment'
        );
      ((t = t || {}).attrs = typeof t.attrs === 'object' ? t.attrs : {}),
        t.singleton || typeof t.singleton === 'boolean' || (t.singleton = s()),
        t.insertInto || (t.insertInto = 'head'),
        t.insertAt || (t.insertAt = 'bottom');
      const n = h(e, t);
      return (
        d(n, t),
        function(e) {
          for (var r = [], i = 0; i < n.length; i++) {
            const s = n[i];
            (a = o[s.id]).refs--, r.push(a);
          }
          e && d(h(e, t), t);
          for (i = 0; i < r.length; i++) {
            var a;
            if ((a = r[i]).refs === 0) {
              for (let l = 0; l < a.parts.length; l++) a.parts[l]();
              delete o[a.id];
            }
          }
        }
      );
    };
    let b;
    const _ =
      ((b = []),
      function(e, t) {
        return (b[e] = t), b.filter(Boolean).join('\n');
      });
    function w(e, t, n, r) {
      const i = n ? '' : r.css;
      if (e.styleSheet) e.styleSheet.cssText = _(t, i);
      else {
        const o = document.createTextNode(i);
        const s = e.childNodes;
        s[t] && e.removeChild(s[t]),
          s.length ? e.insertBefore(o, s[t]) : e.appendChild(o);
      }
    }
  },
  function(e, t) {
    e.exports = function(e) {
      const t = typeof window !== 'undefined' && window.location;
      if (!t) throw new Error('fixUrls requires window.location');
      if (!e || typeof e !== 'string') return e;
      const n = `${t.protocol}//${t.host}`;
      const r = n + t.pathname.replace(/\/[^\/]*$/, '/');
      return e.replace(
        /url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,
        function(e, t) {
          let i;
          const o = t
            .trim()
            .replace(/^"(.*)"$/, function(e, t) {
              return t;
            })
            .replace(/^'(.*)'$/, function(e, t) {
              return t;
            });
          return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o)
            ? e
            : ((i =
                o.indexOf('//') === 0
                  ? o
                  : o.indexOf('/') === 0
                  ? n + o
                  : r + o.replace(/^\.\//, '')),
              `url(${JSON.stringify(i)})`);
        }
      );
    };
  },
  function(e, t) {
    const n = document.querySelector('.burger_btn').children;
    const r = document.getElementsByClassName('mask')[0];
    const i = banner.querySelector('.container');
    const o = about.querySelector('.container');
    const s = document.getElementsByTagName('header')[0];
    const a = s.querySelector('.row');
    const l = document.getElementsByClassName('menu_item');
    const u = header_content.querySelector('.navigation');
    const c = Array.from(n);
    burger_btn.addEventListener('click', function() {
      c.map(function(e) {
        return (function() {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          for (let r = 0; r < t.length; r++) {
            const i = t[r].dataset;
            t[r].classList.toggle(''.concat(i.action, '--active'));
          }
        })(e, r, a, u);
      });
    }),
      (window.onresize = function() {
        c.map(function(e) {
          return (function() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
              t[n] = arguments[n];
            for (let r = 0; r < t.length; r++) {
              const i = t[r].dataset;
              t[r].classList.remove(''.concat(i.action, '--active'));
            }
          })(e, r, a, u);
        }),
          window.innerWidth < 992
            ? i.classList.replace('container', 'container-fluid')
            : i.classList.replace('container-fluid', 'container'),
          window.innerWidth < 768
            ? o.classList.replace('container', 'container-fluid')
            : o.classList.replace('container-fluid', 'container');
      }),
      window.addEventListener('scroll', function() {
        (window.pageYOffset || document.documentElement.scrollTop) >= 1
          ? (s.classList.add('header--fixed'),
            (header_content.style.padding = '10px 0 4px 0'),
            (u.style.top = '-7px'))
          : (s.classList.remove('header--fixed'),
            (header_content.style.padding = ''),
            (u.style.top = ''));
      });
    for (let f = 0; f < l.length; f++)
      l[f].addEventListener('click', function(e) {
        for (let t = 0; t < l.length; t++) {
          const n = l[t].dataset;
          const r = l[t].parentNode.dataset;
          l[t].classList.remove(''.concat(n.action, '--active')),
            l[t].parentNode.classList.remove(''.concat(r.action, '--active'));
        }
        d(this, this.parentNode);
      });
    function d() {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      for (let r = 0; r < t.length; r++) {
        const i = t[r].dataset;
        t[r].classList.add(''.concat(i.action, '--active'));
      }
    }
  },
  function(e, t, n) {
    let r;
    /*! jQuery v3.4.1 -ajax,-ajax/jsonp,-ajax/load,-ajax/parseXML,-ajax/script,-ajax/var/location,-ajax/var/nonce,-ajax/var/rquery,-ajax/xhr,-manipulation/_evalUrl,-event/ajax,-effects,-effects/Tween,-effects/animatedSelector | (c) JS Foundation and other contributors | jquery.org/license */ !(function(
      t,
      n
    ) {
      typeof e.exports === 'object'
        ? (e.exports = t.document
            ? n(t, !0)
            : function(e) {
                if (!e.document)
                  throw new Error('jQuery requires a window with a document');
                return n(e);
              })
        : n(t);
    })(typeof window !== 'undefined' ? window : this, function(n, i) {
      const o = [];
      const s = n.document;
      const a = Object.getPrototypeOf;
      const l = o.slice;
      const u = o.concat;
      const c = o.push;
      const f = o.indexOf;
      const d = {};
      const h = d.toString;
      const p = d.hasOwnProperty;
      const g = p.toString;
      const m = g.call(Object);
      const v = {};
      const y = function(e) {
        return typeof e === 'function' && typeof e.nodeType !== 'number';
      };
      const b = function(e) {
        return e != null && e === e.window;
      };
      const _ = { type: !0, src: !0, nonce: !0, noModule: !0 };
      function w(e, t, n) {
        let r;
        let i;
        const o = (n = n || s).createElement('script');
        if (((o.text = e), t))
          for (r in _)
            (i = t[r] || (t.getAttribute && t.getAttribute(r))) &&
              o.setAttribute(r, i);
        n.head.appendChild(o).parentNode.removeChild(o);
      }
      function x(e) {
        return e == null
          ? `${e}`
          : typeof e === 'object' || typeof e === 'function'
          ? d[h.call(e)] || 'object'
          : typeof e;
      }
      const E =
        '3.4.1 -ajax,-ajax/jsonp,-ajax/load,-ajax/parseXML,-ajax/script,-ajax/var/location,-ajax/var/nonce,-ajax/var/rquery,-ajax/xhr,-manipulation/_evalUrl,-event/ajax,-effects,-effects/Tween,-effects/animatedSelector';
      var T = function(e, t) {
        return new T.fn.init(e, t);
      };
      const C = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
      function S(e) {
        const t = !!e && 'length' in e && e.length;
        const n = x(e);
        return (
          !y(e) &&
          !b(e) &&
          (n === 'array' ||
            t === 0 ||
            (typeof t === 'number' && t > 0 && t - 1 in e))
        );
      }
      (T.fn = T.prototype = {
        jquery: E,
        constructor: T,
        length: 0,
        toArray() {
          return l.call(this);
        },
        get(e) {
          return e == null
            ? l.call(this)
            : e < 0
            ? this[e + this.length]
            : this[e];
        },
        pushStack(e) {
          const t = T.merge(this.constructor(), e);
          return (t.prevObject = this), t;
        },
        each(e) {
          return T.each(this, e);
        },
        map(e) {
          return this.pushStack(
            T.map(this, function(t, n) {
              return e.call(t, n, t);
            })
          );
        },
        slice() {
          return this.pushStack(l.apply(this, arguments));
        },
        first() {
          return this.eq(0);
        },
        last() {
          return this.eq(-1);
        },
        eq(e) {
          const t = this.length;
          const n = +e + (e < 0 ? t : 0);
          return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
        },
        end() {
          return this.prevObject || this.constructor();
        },
        push: c,
        sort: o.sort,
        splice: o.splice,
      }),
        (T.extend = T.fn.extend = function() {
          let e;
          let t;
          let n;
          let r;
          let i;
          let o;
          let s = arguments[0] || {};
          let a = 1;
          const l = arguments.length;
          let u = !1;
          for (
            typeof s === 'boolean' && ((u = s), (s = arguments[a] || {}), a++),
              typeof s === 'object' || y(s) || (s = {}),
              a === l && ((s = this), a--);
            a < l;
            a++
          )
            if ((e = arguments[a]) != null)
              for (t in e)
                (r = e[t]),
                  t !== '__proto__' &&
                    s !== r &&
                    (u && r && (T.isPlainObject(r) || (i = Array.isArray(r)))
                      ? ((n = s[t]),
                        (o =
                          i && !Array.isArray(n)
                            ? []
                            : i || T.isPlainObject(n)
                            ? n
                            : {}),
                        (i = !1),
                        (s[t] = T.extend(u, o, r)))
                      : void 0 !== r && (s[t] = r));
          return s;
        }),
        T.extend({
          expando: `jQuery${(E + Math.random()).replace(/\D/g, '')}`,
          isReady: !0,
          error(e) {
            throw new Error(e);
          },
          noop() {},
          isPlainObject(e) {
            let t;
            let n;
            return !(
              !e ||
              h.call(e) !== '[object Object]' ||
              ((t = a(e)) &&
                (typeof (n = p.call(t, 'constructor') && t.constructor) !==
                  'function' ||
                  g.call(n) !== m))
            );
          },
          isEmptyObject(e) {
            let t;
            for (t in e) return !1;
            return !0;
          },
          globalEval(e, t) {
            w(e, { nonce: t && t.nonce });
          },
          each(e, t) {
            let n;
            let r = 0;
            if (S(e))
              for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
            else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
            return e;
          },
          trim(e) {
            return e == null ? '' : `${e}`.replace(C, '');
          },
          makeArray(e, t) {
            const n = t || [];
            return (
              e != null &&
                (S(Object(e))
                  ? T.merge(n, typeof e === 'string' ? [e] : e)
                  : c.call(n, e)),
              n
            );
          },
          inArray(e, t, n) {
            return t == null ? -1 : f.call(t, e, n);
          },
          merge(e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++)
              e[i++] = t[r];
            return (e.length = i), e;
          },
          grep(e, t, n) {
            for (var r = [], i = 0, o = e.length, s = !n; i < o; i++)
              !t(e[i], i) !== s && r.push(e[i]);
            return r;
          },
          map(e, t, n) {
            let r;
            let i;
            let o = 0;
            const s = [];
            if (S(e))
              for (r = e.length; o < r; o++)
                (i = t(e[o], o, n)) != null && s.push(i);
            else for (o in e) (i = t(e[o], o, n)) != null && s.push(i);
            return u.apply([], s);
          },
          guid: 1,
          support: v,
        }),
        typeof Symbol === 'function' &&
          (T.fn[Symbol.iterator] = o[Symbol.iterator]),
        T.each(
          'Boolean Number String Function Array Date RegExp Object Error Symbol'.split(
            ' '
          ),
          function(e, t) {
            d[`[object ${t}]`] = t.toLowerCase();
          }
        );
      const D = (function(e) {
        let t;
        let n;
        let r;
        let i;
        let o;
        let s;
        let a;
        let l;
        let u;
        let c;
        let f;
        let d;
        let h;
        let p;
        let g;
        let m;
        let v;
        let y;
        let b;
        const _ = `sizzle${1 * new Date()}`;
        const w = e.document;
        let x = 0;
        let E = 0;
        const T = le();
        const C = le();
        const S = le();
        const D = le();
        let A = function(e, t) {
          return e === t && (f = !0), 0;
        };
        const N = {}.hasOwnProperty;
        let k = [];
        const I = k.pop;
        const O = k.push;
        let L = k.push;
        const j = k.slice;
        const P = function(e, t) {
          for (let n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
          return -1;
        };
        const H =
          'checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped';
        const q = '[\\x20\\t\\r\\n\\f]';
        const R = '(?:\\\\.|[\\w-]|[^\0-\\xa0])+';
        const M = `\\[${q}*(${R})(?:${q}*([*^$|!~]?=)${q}*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(${R}))|)${q}*\\]`;
        const W = `:(${R})(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|${M})*)|.*)\\)|)`;
        const F = new RegExp(`${q}+`, 'g');
        const B = new RegExp(`^${q}+|((?:^|[^\\\\])(?:\\\\.)*)${q}+$`, 'g');
        const U = new RegExp(`^${q}*,${q}*`);
        const $ = new RegExp(`^${q}*([>+~]|${q})${q}*`);
        const z = new RegExp(`${q}|>`);
        const V = new RegExp(W);
        const K = new RegExp(`^${R}$`);
        const Q = {
          ID: new RegExp(`^#(${R})`),
          CLASS: new RegExp(`^\\.(${R})`),
          TAG: new RegExp(`^(${R}|[*])`),
          ATTR: new RegExp(`^${M}`),
          PSEUDO: new RegExp(`^${W}`),
          CHILD: new RegExp(
            `^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(${q}*(even|odd|(([+-]|)(\\d*)n|)${q}*(?:([+-]|)${q}*(\\d+)|))${q}*\\)|)`,
            'i'
          ),
          bool: new RegExp(`^(?:${H})$`, 'i'),
          needsContext: new RegExp(
            `^${q}*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(${q}*((?:-\\d)?\\d*)${q}*\\)|)(?=[^-]|$)`,
            'i'
          ),
        };
        const X = /HTML$/i;
        const Y = /^(?:input|select|textarea|button)$/i;
        const G = /^h\d$/i;
        const J = /^[^{]+\{\s*\[native \w/;
        const Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/;
        const ee = /[+~]/;
        const te = new RegExp(`\\\\([\\da-f]{1,6}${q}?|(${q})|.)`, 'ig');
        const ne = function(e, t, n) {
          const r = `0x${t}` - 65536;
          return r != r || n
            ? t
            : r < 0
            ? String.fromCharCode(r + 65536)
            : String.fromCharCode((r >> 10) | 55296, (1023 & r) | 56320);
        };
        const re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g;
        const ie = function(e, t) {
          return t
            ? e === '\0'
              ? '�'
              : `${e.slice(0, -1)}\\${e.charCodeAt(e.length - 1).toString(16)} `
            : `\\${e}`;
        };
        const oe = function() {
          d();
        };
        const se = _e(
          function(e) {
            return !0 === e.disabled && e.nodeName.toLowerCase() === 'fieldset';
          },
          { dir: 'parentNode', next: 'legend' }
        );
        try {
          L.apply((k = j.call(w.childNodes)), w.childNodes),
            k[w.childNodes.length].nodeType;
        } catch (t) {
          L = {
            apply: k.length
              ? function(e, t) {
                  O.apply(e, j.call(t));
                }
              : function(e, t) {
                  for (var n = e.length, r = 0; (e[n++] = t[r++]); );
                  e.length = n - 1;
                },
          };
        }
        function ae(e, t, r, i) {
          let o;
          let a;
          let u;
          let c;
          let f;
          let p;
          let v;
          let y = t && t.ownerDocument;
          const x = t ? t.nodeType : 9;
          if (
            ((r = r || []),
            typeof e !== 'string' || !e || (x !== 1 && x !== 9 && x !== 11))
          )
            return r;
          if (
            !i &&
            ((t ? t.ownerDocument || t : w) !== h && d(t), (t = t || h), g)
          ) {
            if (x !== 11 && (f = Z.exec(e)))
              if ((o = f[1])) {
                if (x === 9) {
                  if (!(u = t.getElementById(o))) return r;
                  if (u.id === o) return r.push(u), r;
                } else if (
                  y &&
                  (u = y.getElementById(o)) &&
                  b(t, u) &&
                  u.id === o
                )
                  return r.push(u), r;
              } else {
                if (f[2]) return L.apply(r, t.getElementsByTagName(e)), r;
                if (
                  (o = f[3]) &&
                  n.getElementsByClassName &&
                  t.getElementsByClassName
                )
                  return L.apply(r, t.getElementsByClassName(o)), r;
              }
            if (
              n.qsa &&
              !D[`${e} `] &&
              (!m || !m.test(e)) &&
              (x !== 1 || t.nodeName.toLowerCase() !== 'object')
            ) {
              if (((v = e), (y = t), x === 1 && z.test(e))) {
                for (
                  (c = t.getAttribute('id'))
                    ? (c = c.replace(re, ie))
                    : t.setAttribute('id', (c = _)),
                    a = (p = s(e)).length;
                  a--;

                )
                  p[a] = `#${c} ${be(p[a])}`;
                (v = p.join(',')), (y = (ee.test(e) && ve(t.parentNode)) || t);
              }
              try {
                return L.apply(r, y.querySelectorAll(v)), r;
              } catch (t) {
                D(e, !0);
              } finally {
                c === _ && t.removeAttribute('id');
              }
            }
          }
          return l(e.replace(B, '$1'), t, r, i);
        }
        function le() {
          const e = [];
          return function t(n, i) {
            return (
              e.push(`${n} `) > r.cacheLength && delete t[e.shift()],
              (t[`${n} `] = i)
            );
          };
        }
        function ue(e) {
          return (e[_] = !0), e;
        }
        function ce(e) {
          let t = h.createElement('fieldset');
          try {
            return !!e(t);
          } catch (e) {
            return !1;
          } finally {
            t.parentNode && t.parentNode.removeChild(t), (t = null);
          }
        }
        function fe(e, t) {
          for (let n = e.split('|'), i = n.length; i--; )
            r.attrHandle[n[i]] = t;
        }
        function de(e, t) {
          let n = t && e;
          const r =
            n &&
            e.nodeType === 1 &&
            t.nodeType === 1 &&
            e.sourceIndex - t.sourceIndex;
          if (r) return r;
          if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
          return e ? 1 : -1;
        }
        function he(e) {
          return function(t) {
            return t.nodeName.toLowerCase() === 'input' && t.type === e;
          };
        }
        function pe(e) {
          return function(t) {
            const n = t.nodeName.toLowerCase();
            return (n === 'input' || n === 'button') && t.type === e;
          };
        }
        function ge(e) {
          return function(t) {
            return 'form' in t
              ? t.parentNode && !1 === t.disabled
                ? 'label' in t
                  ? 'label' in t.parentNode
                    ? t.parentNode.disabled === e
                    : t.disabled === e
                  : t.isDisabled === e || (t.isDisabled !== !e && se(t) === e)
                : t.disabled === e
              : 'label' in t && t.disabled === e;
          };
        }
        function me(e) {
          return ue(function(t) {
            return (
              (t = +t),
              ue(function(n, r) {
                for (var i, o = e([], n.length, t), s = o.length; s--; )
                  n[(i = o[s])] && (n[i] = !(r[i] = n[i]));
              })
            );
          });
        }
        function ve(e) {
          return e && void 0 !== e.getElementsByTagName && e;
        }
        for (t in ((n = ae.support = {}),
        (o = ae.isXML = function(e) {
          const t = e.namespaceURI;
          const n = (e.ownerDocument || e).documentElement;
          return !X.test(t || (n && n.nodeName) || 'HTML');
        }),
        (d = ae.setDocument = function(e) {
          let t;
          let i;
          const s = e ? e.ownerDocument || e : w;
          return (
            s !== h &&
              s.nodeType === 9 &&
              s.documentElement &&
              ((p = (h = s).documentElement),
              (g = !o(h)),
              w !== h &&
                (i = h.defaultView) &&
                i.top !== i &&
                (i.addEventListener
                  ? i.addEventListener('unload', oe, !1)
                  : i.attachEvent && i.attachEvent('onunload', oe)),
              (n.attributes = ce(function(e) {
                return (e.className = 'i'), !e.getAttribute('className');
              })),
              (n.getElementsByTagName = ce(function(e) {
                return (
                  e.appendChild(h.createComment('')),
                  !e.getElementsByTagName('*').length
                );
              })),
              (n.getElementsByClassName = J.test(h.getElementsByClassName)),
              (n.getById = ce(function(e) {
                return (
                  (p.appendChild(e).id = _),
                  !h.getElementsByName || !h.getElementsByName(_).length
                );
              })),
              n.getById
                ? ((r.filter.ID = function(e) {
                    const t = e.replace(te, ne);
                    return function(e) {
                      return e.getAttribute('id') === t;
                    };
                  }),
                  (r.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && g) {
                      const n = t.getElementById(e);
                      return n ? [n] : [];
                    }
                  }))
                : ((r.filter.ID = function(e) {
                    const t = e.replace(te, ne);
                    return function(e) {
                      const n =
                        void 0 !== e.getAttributeNode &&
                        e.getAttributeNode('id');
                      return n && n.value === t;
                    };
                  }),
                  (r.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && g) {
                      let n;
                      let r;
                      let i;
                      let o = t.getElementById(e);
                      if (o) {
                        if ((n = o.getAttributeNode('id')) && n.value === e)
                          return [o];
                        for (i = t.getElementsByName(e), r = 0; (o = i[r++]); )
                          if ((n = o.getAttributeNode('id')) && n.value === e)
                            return [o];
                      }
                      return [];
                    }
                  })),
              (r.find.TAG = n.getElementsByTagName
                ? function(e, t) {
                    return void 0 !== t.getElementsByTagName
                      ? t.getElementsByTagName(e)
                      : n.qsa
                      ? t.querySelectorAll(e)
                      : void 0;
                  }
                : function(e, t) {
                    let n;
                    const r = [];
                    let i = 0;
                    const o = t.getElementsByTagName(e);
                    if (e === '*') {
                      for (; (n = o[i++]); ) n.nodeType === 1 && r.push(n);
                      return r;
                    }
                    return o;
                  }),
              (r.find.CLASS =
                n.getElementsByClassName &&
                function(e, t) {
                  if (void 0 !== t.getElementsByClassName && g)
                    return t.getElementsByClassName(e);
                }),
              (v = []),
              (m = []),
              (n.qsa = J.test(h.querySelectorAll)) &&
                (ce(function(e) {
                  (p.appendChild(
                    e
                  ).innerHTML = `<a id='${_}'></a><select id='${_}-\r\\' msallowcapture=''><option selected=''></option></select>`),
                    e.querySelectorAll("[msallowcapture^='']").length &&
                      m.push(`[*^$]=${q}*(?:''|"")`),
                    e.querySelectorAll('[selected]').length ||
                      m.push(`\\[${q}*(?:value|${H})`),
                    e.querySelectorAll(`[id~=${_}-]`).length || m.push('~='),
                    e.querySelectorAll(':checked').length || m.push(':checked'),
                    e.querySelectorAll(`a#${_}+*`).length || m.push('.#.+[+~]');
                }),
                ce(function(e) {
                  e.innerHTML =
                    "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                  const t = h.createElement('input');
                  t.setAttribute('type', 'hidden'),
                    e.appendChild(t).setAttribute('name', 'D'),
                    e.querySelectorAll('[name=d]').length &&
                      m.push(`name${q}*[*^$|!~]?=`),
                    e.querySelectorAll(':enabled').length !== 2 &&
                      m.push(':enabled', ':disabled'),
                    (p.appendChild(e).disabled = !0),
                    e.querySelectorAll(':disabled').length !== 2 &&
                      m.push(':enabled', ':disabled'),
                    e.querySelectorAll('*,:x'),
                    m.push(',.*:');
                })),
              (n.matchesSelector = J.test(
                (y =
                  p.matches ||
                  p.webkitMatchesSelector ||
                  p.mozMatchesSelector ||
                  p.oMatchesSelector ||
                  p.msMatchesSelector)
              )) &&
                ce(function(e) {
                  (n.disconnectedMatch = y.call(e, '*')),
                    y.call(e, "[s!='']:x"),
                    v.push('!=', W);
                }),
              (m = m.length && new RegExp(m.join('|'))),
              (v = v.length && new RegExp(v.join('|'))),
              (t = J.test(p.compareDocumentPosition)),
              (b =
                t || J.test(p.contains)
                  ? function(e, t) {
                      const n = e.nodeType === 9 ? e.documentElement : e;
                      const r = t && t.parentNode;
                      return (
                        e === r ||
                        !(
                          !r ||
                          r.nodeType !== 1 ||
                          !(n.contains
                            ? n.contains(r)
                            : e.compareDocumentPosition &&
                              16 & e.compareDocumentPosition(r))
                        )
                      );
                    }
                  : function(e, t) {
                      if (t)
                        for (; (t = t.parentNode); ) if (t === e) return !0;
                      return !1;
                    }),
              (A = t
                ? function(e, t) {
                    if (e === t) return (f = !0), 0;
                    let r =
                      !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return (
                      r ||
                      (1 &
                        (r =
                          (e.ownerDocument || e) === (t.ownerDocument || t)
                            ? e.compareDocumentPosition(t)
                            : 1) ||
                      (!n.sortDetached && t.compareDocumentPosition(e) === r)
                        ? e === h || (e.ownerDocument === w && b(w, e))
                          ? -1
                          : t === h || (t.ownerDocument === w && b(w, t))
                          ? 1
                          : c
                          ? P(c, e) - P(c, t)
                          : 0
                        : 4 & r
                        ? -1
                        : 1)
                    );
                  }
                : function(e, t) {
                    if (e === t) return (f = !0), 0;
                    let n;
                    let r = 0;
                    const i = e.parentNode;
                    const o = t.parentNode;
                    const s = [e];
                    const a = [t];
                    if (!i || !o)
                      return e === h
                        ? -1
                        : t === h
                        ? 1
                        : i
                        ? -1
                        : o
                        ? 1
                        : c
                        ? P(c, e) - P(c, t)
                        : 0;
                    if (i === o) return de(e, t);
                    for (n = e; (n = n.parentNode); ) s.unshift(n);
                    for (n = t; (n = n.parentNode); ) a.unshift(n);
                    for (; s[r] === a[r]; ) r++;
                    return r
                      ? de(s[r], a[r])
                      : s[r] === w
                      ? -1
                      : a[r] === w
                      ? 1
                      : 0;
                  })),
            h
          );
        }),
        (ae.matches = function(e, t) {
          return ae(e, null, null, t);
        }),
        (ae.matchesSelector = function(e, t) {
          if (
            ((e.ownerDocument || e) !== h && d(e),
            n.matchesSelector &&
              g &&
              !D[`${t} `] &&
              (!v || !v.test(t)) &&
              (!m || !m.test(t)))
          )
            try {
              const r = y.call(e, t);
              if (
                r ||
                n.disconnectedMatch ||
                (e.document && e.document.nodeType !== 11)
              )
                return r;
            } catch (e) {
              D(t, !0);
            }
          return ae(t, h, null, [e]).length > 0;
        }),
        (ae.contains = function(e, t) {
          return (e.ownerDocument || e) !== h && d(e), b(e, t);
        }),
        (ae.attr = function(e, t) {
          (e.ownerDocument || e) !== h && d(e);
          const i = r.attrHandle[t.toLowerCase()];
          let o =
            i && N.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !g) : void 0;
          return void 0 !== o
            ? o
            : n.attributes || !g
            ? e.getAttribute(t)
            : (o = e.getAttributeNode(t)) && o.specified
            ? o.value
            : null;
        }),
        (ae.escape = function(e) {
          return `${e}`.replace(re, ie);
        }),
        (ae.error = function(e) {
          throw new Error(`Syntax error, unrecognized expression: ${e}`);
        }),
        (ae.uniqueSort = function(e) {
          let t;
          const r = [];
          let i = 0;
          let o = 0;
          if (
            ((f = !n.detectDuplicates),
            (c = !n.sortStable && e.slice(0)),
            e.sort(A),
            f)
          ) {
            for (; (t = e[o++]); ) t === e[o] && (i = r.push(o));
            for (; i--; ) e.splice(r[i], 1);
          }
          return (c = null), e;
        }),
        (i = ae.getText = function(e) {
          let t;
          let n = '';
          let r = 0;
          const o = e.nodeType;
          if (o) {
            if (o === 1 || o === 9 || o === 11) {
              if (typeof e.textContent === 'string') return e.textContent;
              for (e = e.firstChild; e; e = e.nextSibling) n += i(e);
            } else if (o === 3 || o === 4) return e.nodeValue;
          } else for (; (t = e[r++]); ) n += i(t);
          return n;
        }),
        ((r = ae.selectors = {
          cacheLength: 50,
          createPseudo: ue,
          match: Q,
          attrHandle: {},
          find: {},
          relative: {
            '>': { dir: 'parentNode', first: !0 },
            ' ': { dir: 'parentNode' },
            '+': { dir: 'previousSibling', first: !0 },
            '~': { dir: 'previousSibling' },
          },
          preFilter: {
            ATTR(e) {
              return (
                (e[1] = e[1].replace(te, ne)),
                (e[3] = (e[3] || e[4] || e[5] || '').replace(te, ne)),
                e[2] === '~=' && (e[3] = ` ${e[3]} `),
                e.slice(0, 4)
              );
            },
            CHILD(e) {
              return (
                (e[1] = e[1].toLowerCase()),
                e[1].slice(0, 3) === 'nth'
                  ? (e[3] || ae.error(e[0]),
                    (e[4] = +(e[4]
                      ? e[5] + (e[6] || 1)
                      : 2 * (e[3] === 'even' || e[3] === 'odd'))),
                    (e[5] = +(e[7] + e[8] || e[3] === 'odd')))
                  : e[3] && ae.error(e[0]),
                e
              );
            },
            PSEUDO(e) {
              let t;
              const n = !e[6] && e[2];
              return Q.CHILD.test(e[0])
                ? null
                : (e[3]
                    ? (e[2] = e[4] || e[5] || '')
                    : n &&
                      V.test(n) &&
                      (t = s(n, !0)) &&
                      (t = n.indexOf(')', n.length - t) - n.length) &&
                      ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                  e.slice(0, 3));
            },
          },
          filter: {
            TAG(e) {
              const t = e.replace(te, ne).toLowerCase();
              return e === '*'
                ? function() {
                    return !0;
                  }
                : function(e) {
                    return e.nodeName && e.nodeName.toLowerCase() === t;
                  };
            },
            CLASS(e) {
              let t = T[`${e} `];
              return (
                t ||
                ((t = new RegExp(`(^|${q})${e}(${q}|$)`)) &&
                  T(e, function(e) {
                    return t.test(
                      (typeof e.className === 'string' && e.className) ||
                        (void 0 !== e.getAttribute &&
                          e.getAttribute('class')) ||
                        ''
                    );
                  }))
              );
            },
            ATTR(e, t, n) {
              return function(r) {
                let i = ae.attr(r, e);
                return i == null
                  ? t === '!='
                  : !t ||
                      ((i += ''),
                      t === '='
                        ? i === n
                        : t === '!='
                        ? i !== n
                        : t === '^='
                        ? n && i.indexOf(n) === 0
                        : t === '*='
                        ? n && i.indexOf(n) > -1
                        : t === '$='
                        ? n && i.slice(-n.length) === n
                        : t === '~='
                        ? ` ${i.replace(F, ' ')} `.indexOf(n) > -1
                        : t === '|=' &&
                          (i === n || i.slice(0, n.length + 1) === `${n}-`));
              };
            },
            CHILD(e, t, n, r, i) {
              const o = e.slice(0, 3) !== 'nth';
              const s = e.slice(-4) !== 'last';
              const a = t === 'of-type';
              return r === 1 && i === 0
                ? function(e) {
                    return !!e.parentNode;
                  }
                : function(t, n, l) {
                    let u;
                    let c;
                    let f;
                    let d;
                    let h;
                    let p;
                    let g = o !== s ? 'nextSibling' : 'previousSibling';
                    const m = t.parentNode;
                    const v = a && t.nodeName.toLowerCase();
                    const y = !l && !a;
                    let b = !1;
                    if (m) {
                      if (o) {
                        for (; g; ) {
                          for (d = t; (d = d[g]); )
                            if (
                              a
                                ? d.nodeName.toLowerCase() === v
                                : d.nodeType === 1
                            )
                              return !1;
                          p = g = e === 'only' && !p && 'nextSibling';
                        }
                        return !0;
                      }
                      if (((p = [s ? m.firstChild : m.lastChild]), s && y)) {
                        for (
                          b =
                            (h =
                              (u =
                                (c =
                                  (f = (d = m)[_] || (d[_] = {}))[d.uniqueID] ||
                                  (f[d.uniqueID] = {}))[e] || [])[0] === x &&
                              u[1]) && u[2],
                            d = h && m.childNodes[h];
                          (d = (++h && d && d[g]) || (b = h = 0) || p.pop());

                        )
                          if (d.nodeType === 1 && ++b && d === t) {
                            c[e] = [x, h, b];
                            break;
                          }
                      } else if (
                        (y &&
                          (b = h =
                            (u =
                              (c =
                                (f = (d = t)[_] || (d[_] = {}))[d.uniqueID] ||
                                (f[d.uniqueID] = {}))[e] || [])[0] === x &&
                            u[1]),
                        !1 === b)
                      )
                        for (
                          ;
                          (d = (++h && d && d[g]) || (b = h = 0) || p.pop()) &&
                          ((a
                            ? d.nodeName.toLowerCase() !== v
                            : d.nodeType !== 1) ||
                            !++b ||
                            (y &&
                              ((c =
                                (f = d[_] || (d[_] = {}))[d.uniqueID] ||
                                (f[d.uniqueID] = {}))[e] = [x, b]),
                            d !== t));

                        );
                      return (b -= i) === r || (b % r == 0 && b / r >= 0);
                    }
                  };
            },
            PSEUDO(e, t) {
              let n;
              const i =
                r.pseudos[e] ||
                r.setFilters[e.toLowerCase()] ||
                ae.error(`unsupported pseudo: ${e}`);
              return i[_]
                ? i(t)
                : i.length > 1
                ? ((n = [e, e, '', t]),
                  r.setFilters.hasOwnProperty(e.toLowerCase())
                    ? ue(function(e, n) {
                        for (var r, o = i(e, t), s = o.length; s--; )
                          e[(r = P(e, o[s]))] = !(n[r] = o[s]);
                      })
                    : function(e) {
                        return i(e, 0, n);
                      })
                : i;
            },
          },
          pseudos: {
            not: ue(function(e) {
              const t = [];
              const n = [];
              const r = a(e.replace(B, '$1'));
              return r[_]
                ? ue(function(e, t, n, i) {
                    for (var o, s = r(e, null, i, []), a = e.length; a--; )
                      (o = s[a]) && (e[a] = !(t[a] = o));
                  })
                : function(e, i, o) {
                    return (
                      (t[0] = e), r(t, null, o, n), (t[0] = null), !n.pop()
                    );
                  };
            }),
            has: ue(function(e) {
              return function(t) {
                return ae(e, t).length > 0;
              };
            }),
            contains: ue(function(e) {
              return (
                (e = e.replace(te, ne)),
                function(t) {
                  return (t.textContent || i(t)).indexOf(e) > -1;
                }
              );
            }),
            lang: ue(function(e) {
              return (
                K.test(e || '') || ae.error(`unsupported lang: ${e}`),
                (e = e.replace(te, ne).toLowerCase()),
                function(t) {
                  let n;
                  do {
                    if (
                      (n = g
                        ? t.lang
                        : t.getAttribute('xml:lang') || t.getAttribute('lang'))
                    )
                      return (
                        (n = n.toLowerCase()) === e || n.indexOf(`${e}-`) === 0
                      );
                  } while ((t = t.parentNode) && t.nodeType === 1);
                  return !1;
                }
              );
            }),
            target(t) {
              const n = e.location && e.location.hash;
              return n && n.slice(1) === t.id;
            },
            root(e) {
              return e === p;
            },
            focus(e) {
              return (
                e === h.activeElement &&
                (!h.hasFocus || h.hasFocus()) &&
                !!(e.type || e.href || ~e.tabIndex)
              );
            },
            enabled: ge(!1),
            disabled: ge(!0),
            checked(e) {
              const t = e.nodeName.toLowerCase();
              return (
                (t === 'input' && !!e.checked) ||
                (t === 'option' && !!e.selected)
              );
            },
            selected(e) {
              return (
                e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
              );
            },
            empty(e) {
              for (e = e.firstChild; e; e = e.nextSibling)
                if (e.nodeType < 6) return !1;
              return !0;
            },
            parent(e) {
              return !r.pseudos.empty(e);
            },
            header(e) {
              return G.test(e.nodeName);
            },
            input(e) {
              return Y.test(e.nodeName);
            },
            button(e) {
              const t = e.nodeName.toLowerCase();
              return (t === 'input' && e.type === 'button') || t === 'button';
            },
            text(e) {
              let t;
              return (
                e.nodeName.toLowerCase() === 'input' &&
                e.type === 'text' &&
                ((t = e.getAttribute('type')) == null ||
                  t.toLowerCase() === 'text')
              );
            },
            first: me(function() {
              return [0];
            }),
            last: me(function(e, t) {
              return [t - 1];
            }),
            eq: me(function(e, t, n) {
              return [n < 0 ? n + t : n];
            }),
            even: me(function(e, t) {
              for (let n = 0; n < t; n += 2) e.push(n);
              return e;
            }),
            odd: me(function(e, t) {
              for (let n = 1; n < t; n += 2) e.push(n);
              return e;
            }),
            lt: me(function(e, t, n) {
              for (let r = n < 0 ? n + t : t < n ? t : n; --r >= 0; ) e.push(r);
              return e;
            }),
            gt: me(function(e, t, n) {
              for (let r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
              return e;
            }),
          },
        }).pseudos.nth = r.pseudos.eq),
        { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
          r.pseudos[t] = he(t);
        for (t in { submit: !0, reset: !0 }) r.pseudos[t] = pe(t);
        function ye() {}
        function be(e) {
          for (var t = 0, n = e.length, r = ''; t < n; t++) r += e[t].value;
          return r;
        }
        function _e(e, t, n) {
          const r = t.dir;
          const i = t.next;
          const o = i || r;
          const s = n && o === 'parentNode';
          const a = E++;
          return t.first
            ? function(t, n, i) {
                for (; (t = t[r]); )
                  if (t.nodeType === 1 || s) return e(t, n, i);
                return !1;
              }
            : function(t, n, l) {
                let u;
                let c;
                let f;
                const d = [x, a];
                if (l) {
                  for (; (t = t[r]); )
                    if ((t.nodeType === 1 || s) && e(t, n, l)) return !0;
                } else
                  for (; (t = t[r]); )
                    if (t.nodeType === 1 || s)
                      if (
                        ((c =
                          (f = t[_] || (t[_] = {}))[t.uniqueID] ||
                          (f[t.uniqueID] = {})),
                        i && i === t.nodeName.toLowerCase())
                      )
                        t = t[r] || t;
                      else {
                        if ((u = c[o]) && u[0] === x && u[1] === a)
                          return (d[2] = u[2]);
                        if (((c[o] = d)[2] = e(t, n, l))) return !0;
                      }
                return !1;
              };
        }
        function we(e) {
          return e.length > 1
            ? function(t, n, r) {
                for (let i = e.length; i--; ) if (!e[i](t, n, r)) return !1;
                return !0;
              }
            : e[0];
        }
        function xe(e, t, n, r, i) {
          for (var o, s = [], a = 0, l = e.length, u = t != null; a < l; a++)
            (o = e[a]) && ((n && !n(o, r, i)) || (s.push(o), u && t.push(a)));
          return s;
        }
        function Ee(e, t, n, r, i, o) {
          return (
            r && !r[_] && (r = Ee(r)),
            i && !i[_] && (i = Ee(i, o)),
            ue(function(o, s, a, l) {
              let u;
              let c;
              let f;
              const d = [];
              const h = [];
              const p = s.length;
              const g =
                o ||
                (function(e, t, n) {
                  for (let r = 0, i = t.length; r < i; r++) ae(e, t[r], n);
                  return n;
                })(t || '*', a.nodeType ? [a] : a, []);
              const m = !e || (!o && t) ? g : xe(g, d, e, a, l);
              let v = n ? (i || (o ? e : p || r) ? [] : s) : m;
              if ((n && n(m, v, a, l), r))
                for (u = xe(v, h), r(u, [], a, l), c = u.length; c--; )
                  (f = u[c]) && (v[h[c]] = !(m[h[c]] = f));
              if (o) {
                if (i || e) {
                  if (i) {
                    for (u = [], c = v.length; c--; )
                      (f = v[c]) && u.push((m[c] = f));
                    i(null, (v = []), u, l);
                  }
                  for (c = v.length; c--; )
                    (f = v[c]) &&
                      (u = i ? P(o, f) : d[c]) > -1 &&
                      (o[u] = !(s[u] = f));
                }
              } else (v = xe(v === s ? v.splice(p, v.length) : v)), i ? i(null, s, v, l) : L.apply(s, v);
            })
          );
        }
        function Te(e) {
          for (
            var t,
              n,
              i,
              o = e.length,
              s = r.relative[e[0].type],
              a = s || r.relative[' '],
              l = s ? 1 : 0,
              c = _e(
                function(e) {
                  return e === t;
                },
                a,
                !0
              ),
              f = _e(
                function(e) {
                  return P(t, e) > -1;
                },
                a,
                !0
              ),
              d = [
                function(e, n, r) {
                  const i =
                    (!s && (r || n !== u)) ||
                    ((t = n).nodeType ? c(e, n, r) : f(e, n, r));
                  return (t = null), i;
                },
              ];
            l < o;
            l++
          )
            if ((n = r.relative[e[l].type])) d = [_e(we(d), n)];
            else {
              if ((n = r.filter[e[l].type].apply(null, e[l].matches))[_]) {
                for (i = ++l; i < o && !r.relative[e[i].type]; i++);
                return Ee(
                  l > 1 && we(d),
                  l > 1 &&
                    be(
                      e
                        .slice(0, l - 1)
                        .concat({ value: e[l - 2].type === ' ' ? '*' : '' })
                    ).replace(B, '$1'),
                  n,
                  l < i && Te(e.slice(l, i)),
                  i < o && Te((e = e.slice(i))),
                  i < o && be(e)
                );
              }
              d.push(n);
            }
          return we(d);
        }
        return (
          (ye.prototype = r.filters = r.pseudos),
          (r.setFilters = new ye()),
          (s = ae.tokenize = function(e, t) {
            let n;
            let i;
            let o;
            let s;
            let a;
            let l;
            let u;
            const c = C[`${e} `];
            if (c) return t ? 0 : c.slice(0);
            for (a = e, l = [], u = r.preFilter; a; ) {
              for (s in ((n && !(i = U.exec(a))) ||
                (i && (a = a.slice(i[0].length) || a), l.push((o = []))),
              (n = !1),
              (i = $.exec(a)) &&
                ((n = i.shift()),
                o.push({ value: n, type: i[0].replace(B, ' ') }),
                (a = a.slice(n.length))),
              r.filter))
                !(i = Q[s].exec(a)) ||
                  (u[s] && !(i = u[s](i))) ||
                  ((n = i.shift()),
                  o.push({ value: n, type: s, matches: i }),
                  (a = a.slice(n.length)));
              if (!n) break;
            }
            return t ? a.length : a ? ae.error(e) : C(e, l).slice(0);
          }),
          (a = ae.compile = function(e, t) {
            let n;
            let i;
            let o;
            let a;
            let l;
            let c;
            const f = [];
            const p = [];
            let m = S[`${e} `];
            if (!m) {
              for (t || (t = s(e)), n = t.length; n--; )
                (m = Te(t[n]))[_] ? f.push(m) : p.push(m);
              (m = S(
                e,
                ((i = p),
                (a = (o = f).length > 0),
                (l = i.length > 0),
                (c = function(e, t, n, s, c) {
                  let f;
                  let p;
                  let m;
                  let v = 0;
                  let y = '0';
                  const b = e && [];
                  let _ = [];
                  const w = u;
                  const E = e || (l && r.find.TAG('*', c));
                  const T = (x += w == null ? 1 : Math.random() || 0.1);
                  const C = E.length;
                  for (
                    c && (u = t === h || t || c);
                    y !== C && (f = E[y]) != null;
                    y++
                  ) {
                    if (l && f) {
                      for (
                        p = 0, t || f.ownerDocument === h || (d(f), (n = !g));
                        (m = i[p++]);

                      )
                        if (m(f, t || h, n)) {
                          s.push(f);
                          break;
                        }
                      c && (x = T);
                    }
                    a && ((f = !m && f) && v--, e && b.push(f));
                  }
                  if (((v += y), a && y !== v)) {
                    for (p = 0; (m = o[p++]); ) m(b, _, t, n);
                    if (e) {
                      if (v > 0)
                        for (; y--; ) b[y] || _[y] || (_[y] = I.call(s));
                      _ = xe(_);
                    }
                    L.apply(s, _),
                      c &&
                        !e &&
                        _.length > 0 &&
                        v + o.length > 1 &&
                        ae.uniqueSort(s);
                  }
                  return c && ((x = T), (u = w)), b;
                }),
                a ? ue(c) : c)
              )).selector = e;
            }
            return m;
          }),
          (l = ae.select = function(e, t, n, i) {
            let o;
            let l;
            let u;
            let c;
            let f;
            const d = typeof e === 'function' && e;
            const h = !i && s((e = d.selector || e));
            if (((n = n || []), h.length === 1)) {
              if (
                (l = h[0] = h[0].slice(0)).length > 2 &&
                (u = l[0]).type === 'ID' &&
                t.nodeType === 9 &&
                g &&
                r.relative[l[1].type]
              ) {
                if (
                  !(t = (r.find.ID(u.matches[0].replace(te, ne), t) || [])[0])
                )
                  return n;
                d && (t = t.parentNode), (e = e.slice(l.shift().value.length));
              }
              for (
                o = Q.needsContext.test(e) ? 0 : l.length;
                o-- && ((u = l[o]), !r.relative[(c = u.type)]);

              )
                if (
                  (f = r.find[c]) &&
                  (i = f(
                    u.matches[0].replace(te, ne),
                    (ee.test(l[0].type) && ve(t.parentNode)) || t
                  ))
                ) {
                  if ((l.splice(o, 1), !(e = i.length && be(l))))
                    return L.apply(n, i), n;
                  break;
                }
            }
            return (
              (d || a(e, h))(
                i,
                t,
                !g,
                n,
                !t || (ee.test(e) && ve(t.parentNode)) || t
              ),
              n
            );
          }),
          (n.sortStable =
            _.split('')
              .sort(A)
              .join('') === _),
          (n.detectDuplicates = !!f),
          d(),
          (n.sortDetached = ce(function(e) {
            return 1 & e.compareDocumentPosition(h.createElement('fieldset'));
          })),
          ce(function(e) {
            return (
              (e.innerHTML = "<a href='#'></a>"),
              e.firstChild.getAttribute('href') === '#'
            );
          }) ||
            fe('type|href|height|width', function(e, t, n) {
              if (!n)
                return e.getAttribute(t, t.toLowerCase() === 'type' ? 1 : 2);
            }),
          (n.attributes &&
            ce(function(e) {
              return (
                (e.innerHTML = '<input/>'),
                e.firstChild.setAttribute('value', ''),
                e.firstChild.getAttribute('value') === ''
              );
            })) ||
            fe('value', function(e, t, n) {
              if (!n && e.nodeName.toLowerCase() === 'input')
                return e.defaultValue;
            }),
          ce(function(e) {
            return e.getAttribute('disabled') == null;
          }) ||
            fe(H, function(e, t, n) {
              let r;
              if (!n)
                return !0 === e[t]
                  ? t.toLowerCase()
                  : (r = e.getAttributeNode(t)) && r.specified
                  ? r.value
                  : null;
            }),
          ae
        );
      })(n);
      (T.find = D),
        (T.expr = D.selectors),
        (T.expr[':'] = T.expr.pseudos),
        (T.uniqueSort = T.unique = D.uniqueSort),
        (T.text = D.getText),
        (T.isXMLDoc = D.isXML),
        (T.contains = D.contains),
        (T.escapeSelector = D.escape);
      const A = function(e, t, n) {
        for (var r = [], i = void 0 !== n; (e = e[t]) && e.nodeType !== 9; )
          if (e.nodeType === 1) {
            if (i && T(e).is(n)) break;
            r.push(e);
          }
        return r;
      };
      const N = function(e, t) {
        for (var n = []; e; e = e.nextSibling)
          e.nodeType === 1 && e !== t && n.push(e);
        return n;
      };
      const k = T.expr.match.needsContext;
      function I(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
      }
      const O = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
      function L(e, t, n) {
        return y(t)
          ? T.grep(e, function(e, r) {
              return !!t.call(e, r, e) !== n;
            })
          : t.nodeType
          ? T.grep(e, function(e) {
              return (e === t) !== n;
            })
          : typeof t !== 'string'
          ? T.grep(e, function(e) {
              return f.call(t, e) > -1 !== n;
            })
          : T.filter(t, e, n);
      }
      (T.filter = function(e, t, n) {
        const r = t[0];
        return (
          n && (e = `:not(${e})`),
          t.length === 1 && r.nodeType === 1
            ? T.find.matchesSelector(r, e)
              ? [r]
              : []
            : T.find.matches(
                e,
                T.grep(t, function(e) {
                  return e.nodeType === 1;
                })
              )
        );
      }),
        T.fn.extend({
          find(e) {
            let t;
            let n;
            const r = this.length;
            const i = this;
            if (typeof e !== 'string')
              return this.pushStack(
                T(e).filter(function() {
                  for (t = 0; t < r; t++) if (T.contains(i[t], this)) return !0;
                })
              );
            for (n = this.pushStack([]), t = 0; t < r; t++) T.find(e, i[t], n);
            return r > 1 ? T.uniqueSort(n) : n;
          },
          filter(e) {
            return this.pushStack(L(this, e || [], !1));
          },
          not(e) {
            return this.pushStack(L(this, e || [], !0));
          },
          is(e) {
            return !!L(
              this,
              typeof e === 'string' && k.test(e) ? T(e) : e || [],
              !1
            ).length;
          },
        });
      let j;
      const P = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
      ((T.fn.init = function(e, t, n) {
        let r;
        let i;
        if (!e) return this;
        if (((n = n || j), typeof e === 'string')) {
          if (
            !(r =
              e[0] === '<' && e[e.length - 1] === '>' && e.length >= 3
                ? [null, e, null]
                : P.exec(e)) ||
            (!r[1] && t)
          )
            return !t || t.jquery
              ? (t || n).find(e)
              : this.constructor(t).find(e);
          if (r[1]) {
            if (
              ((t = t instanceof T ? t[0] : t),
              T.merge(
                this,
                T.parseHTML(
                  r[1],
                  t && t.nodeType ? t.ownerDocument || t : s,
                  !0
                )
              ),
              O.test(r[1]) && T.isPlainObject(t))
            )
              for (r in t) y(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
            return this;
          }
          return (
            (i = s.getElementById(r[2])) && ((this[0] = i), (this.length = 1)),
            this
          );
        }
        return e.nodeType
          ? ((this[0] = e), (this.length = 1), this)
          : y(e)
          ? void 0 !== n.ready
            ? n.ready(e)
            : e(T)
          : T.makeArray(e, this);
      }).prototype = T.fn),
        (j = T(s));
      const H = /^(?:parents|prev(?:Until|All))/;
      const q = { children: !0, contents: !0, next: !0, prev: !0 };
      function R(e, t) {
        for (; (e = e[t]) && e.nodeType !== 1; );
        return e;
      }
      T.fn.extend({
        has(e) {
          const t = T(e, this);
          const n = t.length;
          return this.filter(function() {
            for (let e = 0; e < n; e++) if (T.contains(this, t[e])) return !0;
          });
        },
        closest(e, t) {
          let n;
          let r = 0;
          const i = this.length;
          const o = [];
          const s = typeof e !== 'string' && T(e);
          if (!k.test(e))
            for (; r < i; r++)
              for (n = this[r]; n && n !== t; n = n.parentNode)
                if (
                  n.nodeType < 11 &&
                  (s
                    ? s.index(n) > -1
                    : n.nodeType === 1 && T.find.matchesSelector(n, e))
                ) {
                  o.push(n);
                  break;
                }
          return this.pushStack(o.length > 1 ? T.uniqueSort(o) : o);
        },
        index(e) {
          return e
            ? typeof e === 'string'
              ? f.call(T(e), this[0])
              : f.call(this, e.jquery ? e[0] : e)
            : this[0] && this[0].parentNode
            ? this.first().prevAll().length
            : -1;
        },
        add(e, t) {
          return this.pushStack(T.uniqueSort(T.merge(this.get(), T(e, t))));
        },
        addBack(e) {
          return this.add(
            e == null ? this.prevObject : this.prevObject.filter(e)
          );
        },
      }),
        T.each(
          {
            parent(e) {
              const t = e.parentNode;
              return t && t.nodeType !== 11 ? t : null;
            },
            parents(e) {
              return A(e, 'parentNode');
            },
            parentsUntil(e, t, n) {
              return A(e, 'parentNode', n);
            },
            next(e) {
              return R(e, 'nextSibling');
            },
            prev(e) {
              return R(e, 'previousSibling');
            },
            nextAll(e) {
              return A(e, 'nextSibling');
            },
            prevAll(e) {
              return A(e, 'previousSibling');
            },
            nextUntil(e, t, n) {
              return A(e, 'nextSibling', n);
            },
            prevUntil(e, t, n) {
              return A(e, 'previousSibling', n);
            },
            siblings(e) {
              return N((e.parentNode || {}).firstChild, e);
            },
            children(e) {
              return N(e.firstChild);
            },
            contents(e) {
              return void 0 !== e.contentDocument
                ? e.contentDocument
                : (I(e, 'template') && (e = e.content || e),
                  T.merge([], e.childNodes));
            },
          },
          function(e, t) {
            T.fn[e] = function(n, r) {
              let i = T.map(this, t, n);
              return (
                e.slice(-5) !== 'Until' && (r = n),
                r && typeof r === 'string' && (i = T.filter(r, i)),
                this.length > 1 &&
                  (q[e] || T.uniqueSort(i), H.test(e) && i.reverse()),
                this.pushStack(i)
              );
            };
          }
        );
      const M = /[^\x20\t\r\n\f]+/g;
      function W(e) {
        return e;
      }
      function F(e) {
        throw e;
      }
      function B(e, t, n, r) {
        let i;
        try {
          e && y((i = e.promise))
            ? i
                .call(e)
                .done(t)
                .fail(n)
            : e && y((i = e.then))
            ? i.call(e, t, n)
            : t.apply(void 0, [e].slice(r));
        } catch (e) {
          n.apply(void 0, [e]);
        }
      }
      (T.Callbacks = function(e) {
        let t;
        let n;
        e =
          typeof e === 'string'
            ? ((t = e),
              (n = {}),
              T.each(t.match(M) || [], function(e, t) {
                n[t] = !0;
              }),
              n)
            : T.extend({}, e);
        let r;
        let i;
        let o;
        let s;
        let a = [];
        let l = [];
        let u = -1;
        const c = function() {
          for (s = s || e.once, o = r = !0; l.length; u = -1)
            for (i = l.shift(); ++u < a.length; )
              !1 === a[u].apply(i[0], i[1]) &&
                e.stopOnFalse &&
                ((u = a.length), (i = !1));
          e.memory || (i = !1), (r = !1), s && (a = i ? [] : '');
        };
        var f = {
          add() {
            return (
              a &&
                (i && !r && ((u = a.length - 1), l.push(i)),
                (function t(n) {
                  T.each(n, function(n, r) {
                    y(r)
                      ? (e.unique && f.has(r)) || a.push(r)
                      : r && r.length && x(r) !== 'string' && t(r);
                  });
                })(arguments),
                i && !r && c()),
              this
            );
          },
          remove() {
            return (
              T.each(arguments, function(e, t) {
                for (var n; (n = T.inArray(t, a, n)) > -1; )
                  a.splice(n, 1), n <= u && u--;
              }),
              this
            );
          },
          has(e) {
            return e ? T.inArray(e, a) > -1 : a.length > 0;
          },
          empty() {
            return a && (a = []), this;
          },
          disable() {
            return (s = l = []), (a = i = ''), this;
          },
          disabled() {
            return !a;
          },
          lock() {
            return (s = l = []), i || r || (a = i = ''), this;
          },
          locked() {
            return !!s;
          },
          fireWith(e, t) {
            return (
              s ||
                ((t = [e, (t = t || []).slice ? t.slice() : t]),
                l.push(t),
                r || c()),
              this
            );
          },
          fire() {
            return f.fireWith(this, arguments), this;
          },
          fired() {
            return !!o;
          },
        };
        return f;
      }),
        T.extend({
          Deferred(e) {
            const t = [
              [
                'notify',
                'progress',
                T.Callbacks('memory'),
                T.Callbacks('memory'),
                2,
              ],
              [
                'resolve',
                'done',
                T.Callbacks('once memory'),
                T.Callbacks('once memory'),
                0,
                'resolved',
              ],
              [
                'reject',
                'fail',
                T.Callbacks('once memory'),
                T.Callbacks('once memory'),
                1,
                'rejected',
              ],
            ];
            let r = 'pending';
            var i = {
              state() {
                return r;
              },
              always() {
                return o.done(arguments).fail(arguments), this;
              },
              catch(e) {
                return i.then(null, e);
              },
              pipe() {
                let e = arguments;
                return T.Deferred(function(n) {
                  T.each(t, function(t, r) {
                    const i = y(e[r[4]]) && e[r[4]];
                    o[r[1]](function() {
                      const e = i && i.apply(this, arguments);
                      e && y(e.promise)
                        ? e
                            .promise()
                            .progress(n.notify)
                            .done(n.resolve)
                            .fail(n.reject)
                        : n[`${r[0]}With`](this, i ? [e] : arguments);
                    });
                  }),
                    (e = null);
                }).promise();
              },
              then(e, r, i) {
                let o = 0;
                function s(e, t, r, i) {
                  return function() {
                    let a = this;
                    let l = arguments;
                    const u = function() {
                      let n;
                      let u;
                      if (!(e < o)) {
                        if ((n = r.apply(a, l)) === t.promise())
                          throw new TypeError('Thenable self-resolution');
                        (u =
                          n &&
                          (typeof n === 'object' || typeof n === 'function') &&
                          n.then),
                          y(u)
                            ? i
                              ? u.call(n, s(o, t, W, i), s(o, t, F, i))
                              : (o++,
                                u.call(
                                  n,
                                  s(o, t, W, i),
                                  s(o, t, F, i),
                                  s(o, t, W, t.notifyWith)
                                ))
                            : (r !== W && ((a = void 0), (l = [n])),
                              (i || t.resolveWith)(a, l));
                      }
                    };
                    var c = i
                      ? u
                      : function() {
                          try {
                            u();
                          } catch (n) {
                            T.Deferred.exceptionHook &&
                              T.Deferred.exceptionHook(n, c.stackTrace),
                              o <= e + 1 &&
                                (r !== F && ((a = void 0), (l = [n])),
                                t.rejectWith(a, l));
                          }
                        };
                    e
                      ? c()
                      : (T.Deferred.getStackHook &&
                          (c.stackTrace = T.Deferred.getStackHook()),
                        n.setTimeout(c));
                  };
                }
                return T.Deferred(function(n) {
                  t[0][3].add(s(0, n, y(i) ? i : W, n.notifyWith)),
                    t[1][3].add(s(0, n, y(e) ? e : W)),
                    t[2][3].add(s(0, n, y(r) ? r : F));
                }).promise();
              },
              promise(e) {
                return e != null ? T.extend(e, i) : i;
              },
            };
            var o = {};
            return (
              T.each(t, function(e, n) {
                const s = n[2];
                const a = n[5];
                (i[n[1]] = s.add),
                  a &&
                    s.add(
                      function() {
                        r = a;
                      },
                      t[3 - e][2].disable,
                      t[3 - e][3].disable,
                      t[0][2].lock,
                      t[0][3].lock
                    ),
                  s.add(n[3].fire),
                  (o[n[0]] = function() {
                    return (
                      o[`${n[0]}With`](this === o ? void 0 : this, arguments),
                      this
                    );
                  }),
                  (o[`${n[0]}With`] = s.fireWith);
              }),
              i.promise(o),
              e && e.call(o, o),
              o
            );
          },
          when(e) {
            let t = arguments.length;
            let n = t;
            const r = Array(n);
            const i = l.call(arguments);
            const o = T.Deferred();
            const s = function(e) {
              return function(n) {
                (r[e] = this),
                  (i[e] = arguments.length > 1 ? l.call(arguments) : n),
                  --t || o.resolveWith(r, i);
              };
            };
            if (
              t <= 1 &&
              (B(e, o.done(s(n)).resolve, o.reject, !t),
              o.state() === 'pending' || y(i[n] && i[n].then))
            )
              return o.then();
            for (; n--; ) B(i[n], s(n), o.reject);
            return o.promise();
          },
        });
      const U = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
      (T.Deferred.exceptionHook = function(e, t) {
        n.console &&
          n.console.warn &&
          e &&
          U.test(e.name) &&
          n.console.warn(`jQuery.Deferred exception: ${e.message}`, e.stack, t);
      }),
        (T.readyException = function(e) {
          n.setTimeout(function() {
            throw e;
          });
        });
      const $ = T.Deferred();
      function z() {
        s.removeEventListener('DOMContentLoaded', z),
          n.removeEventListener('load', z),
          T.ready();
      }
      (T.fn.ready = function(e) {
        return (
          $.then(e).catch(function(e) {
            T.readyException(e);
          }),
          this
        );
      }),
        T.extend({
          isReady: !1,
          readyWait: 1,
          ready(e) {
            (!0 === e ? --T.readyWait : T.isReady) ||
              ((T.isReady = !0) !== e && --T.readyWait > 0) ||
              $.resolveWith(s, [T]);
          },
        }),
        (T.ready.then = $.then),
        s.readyState === 'complete' ||
        (s.readyState !== 'loading' && !s.documentElement.doScroll)
          ? n.setTimeout(T.ready)
          : (s.addEventListener('DOMContentLoaded', z),
            n.addEventListener('load', z));
      var V = function(e, t, n, r, i, o, s) {
        let a = 0;
        const l = e.length;
        let u = n == null;
        if (x(n) === 'object')
          for (a in ((i = !0), n)) V(e, t, a, n[a], !0, o, s);
        else if (
          void 0 !== r &&
          ((i = !0),
          y(r) || (s = !0),
          u &&
            (s
              ? (t.call(e, r), (t = null))
              : ((u = t),
                (t = function(e, t, n) {
                  return u.call(T(e), n);
                }))),
          t)
        )
          for (; a < l; a++) t(e[a], n, s ? r : r.call(e[a], a, t(e[a], n)));
        return i ? e : u ? t.call(e) : l ? t(e[0], n) : o;
      };
      const K = /^-ms-/;
      const Q = /-([a-z])/g;
      function X(e, t) {
        return t.toUpperCase();
      }
      function Y(e) {
        return e.replace(K, 'ms-').replace(Q, X);
      }
      const G = function(e) {
        return e.nodeType === 1 || e.nodeType === 9 || !+e.nodeType;
      };
      function J() {
        this.expando = T.expando + J.uid++;
      }
      (J.uid = 1),
        (J.prototype = {
          cache(e) {
            let t = e[this.expando];
            return (
              t ||
                ((t = {}),
                G(e) &&
                  (e.nodeType
                    ? (e[this.expando] = t)
                    : Object.defineProperty(e, this.expando, {
                        value: t,
                        configurable: !0,
                      }))),
              t
            );
          },
          set(e, t, n) {
            let r;
            const i = this.cache(e);
            if (typeof t === 'string') i[Y(t)] = n;
            else for (r in t) i[Y(r)] = t[r];
            return i;
          },
          get(e, t) {
            return void 0 === t
              ? this.cache(e)
              : e[this.expando] && e[this.expando][Y(t)];
          },
          access(e, t, n) {
            return void 0 === t || (t && typeof t === 'string' && void 0 === n)
              ? this.get(e, t)
              : (this.set(e, t, n), void 0 !== n ? n : t);
          },
          remove(e, t) {
            let n;
            const r = e[this.expando];
            if (void 0 !== r) {
              if (void 0 !== t) {
                n = (t = Array.isArray(t)
                  ? t.map(Y)
                  : (t = Y(t)) in r
                  ? [t]
                  : t.match(M) || []).length;
                for (; n--; ) delete r[t[n]];
              }
              (void 0 === t || T.isEmptyObject(r)) &&
                (e.nodeType
                  ? (e[this.expando] = void 0)
                  : delete e[this.expando]);
            }
          },
          hasData(e) {
            const t = e[this.expando];
            return void 0 !== t && !T.isEmptyObject(t);
          },
        });
      const Z = new J();
      const ee = new J();
      const te = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/;
      const ne = /[A-Z]/g;
      function re(e, t, n) {
        let r;
        let i;
        if (void 0 === n && e.nodeType === 1)
          if (
            ((r = `data-${t.replace(ne, '-$&').toLowerCase()}`),
            typeof (n = e.getAttribute(r)) === 'string')
          ) {
            try {
              n =
                (i = n) === 'true' ||
                (i !== 'false' &&
                  (i === 'null'
                    ? null
                    : i === `${+i}`
                    ? +i
                    : te.test(i)
                    ? JSON.parse(i)
                    : i));
            } catch (e) {}
            ee.set(e, t, n);
          } else n = void 0;
        return n;
      }
      T.extend({
        hasData(e) {
          return ee.hasData(e) || Z.hasData(e);
        },
        data(e, t, n) {
          return ee.access(e, t, n);
        },
        removeData(e, t) {
          ee.remove(e, t);
        },
        _data(e, t, n) {
          return Z.access(e, t, n);
        },
        _removeData(e, t) {
          Z.remove(e, t);
        },
      }),
        T.fn.extend({
          data(e, t) {
            let n;
            let r;
            let i;
            const o = this[0];
            const s = o && o.attributes;
            if (void 0 === e) {
              if (
                this.length &&
                ((i = ee.get(o)), o.nodeType === 1 && !Z.get(o, 'hasDataAttrs'))
              ) {
                for (n = s.length; n--; )
                  s[n] &&
                    (r = s[n].name).indexOf('data-') === 0 &&
                    ((r = Y(r.slice(5))), re(o, r, i[r]));
                Z.set(o, 'hasDataAttrs', !0);
              }
              return i;
            }
            return typeof e === 'object'
              ? this.each(function() {
                  ee.set(this, e);
                })
              : V(
                  this,
                  function(t) {
                    let n;
                    if (o && void 0 === t)
                      return void 0 !== (n = ee.get(o, e))
                        ? n
                        : void 0 !== (n = re(o, e))
                        ? n
                        : void 0;
                    this.each(function() {
                      ee.set(this, e, t);
                    });
                  },
                  null,
                  t,
                  arguments.length > 1,
                  null,
                  !0
                );
          },
          removeData(e) {
            return this.each(function() {
              ee.remove(this, e);
            });
          },
        }),
        T.extend({
          queue(e, t, n) {
            let r;
            if (e)
              return (
                (t = `${t || 'fx'}queue`),
                (r = Z.get(e, t)),
                n &&
                  (!r || Array.isArray(n)
                    ? (r = Z.access(e, t, T.makeArray(n)))
                    : r.push(n)),
                r || []
              );
          },
          dequeue(e, t) {
            t = t || 'fx';
            const n = T.queue(e, t);
            let r = n.length;
            let i = n.shift();
            const o = T._queueHooks(e, t);
            i === 'inprogress' && ((i = n.shift()), r--),
              i &&
                (t === 'fx' && n.unshift('inprogress'),
                delete o.stop,
                i.call(
                  e,
                  function() {
                    T.dequeue(e, t);
                  },
                  o
                )),
              !r && o && o.empty.fire();
          },
          _queueHooks(e, t) {
            const n = `${t}queueHooks`;
            return (
              Z.get(e, n) ||
              Z.access(e, n, {
                empty: T.Callbacks('once memory').add(function() {
                  Z.remove(e, [`${t}queue`, n]);
                }),
              })
            );
          },
        }),
        T.fn.extend({
          queue(e, t) {
            let n = 2;
            return (
              typeof e !== 'string' && ((t = e), (e = 'fx'), n--),
              arguments.length < n
                ? T.queue(this[0], e)
                : void 0 === t
                ? this
                : this.each(function() {
                    const n = T.queue(this, e, t);
                    T._queueHooks(this, e),
                      e === 'fx' && n[0] !== 'inprogress' && T.dequeue(this, e);
                  })
            );
          },
          dequeue(e) {
            return this.each(function() {
              T.dequeue(this, e);
            });
          },
          clearQueue(e) {
            return this.queue(e || 'fx', []);
          },
          promise(e, t) {
            let n;
            let r = 1;
            const i = T.Deferred();
            const o = this;
            let s = this.length;
            const a = function() {
              --r || i.resolveWith(o, [o]);
            };
            for (
              typeof e !== 'string' && ((t = e), (e = void 0)), e = e || 'fx';
              s--;

            )
              (n = Z.get(o[s], `${e}queueHooks`)) &&
                n.empty &&
                (r++, n.empty.add(a));
            return a(), i.promise(t);
          },
        });
      const ie = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
      const oe = new RegExp(`^(?:([+-])=|)(${ie})([a-z%]*)$`, 'i');
      const se = ['Top', 'Right', 'Bottom', 'Left'];
      const ae = s.documentElement;
      let le = function(e) {
        return T.contains(e.ownerDocument, e);
      };
      const ue = { composed: !0 };
      ae.getRootNode &&
        (le = function(e) {
          return (
            T.contains(e.ownerDocument, e) ||
            e.getRootNode(ue) === e.ownerDocument
          );
        });
      const ce = function(e, t) {
        return (
          (e = t || e).style.display === 'none' ||
          (e.style.display === '' && le(e) && T.css(e, 'display') === 'none')
        );
      };
      const fe = function(e, t, n, r) {
        let i;
        let o;
        const s = {};
        for (o in t) (s[o] = e.style[o]), (e.style[o] = t[o]);
        for (o in ((i = n.apply(e, r || [])), t)) e.style[o] = s[o];
        return i;
      };
      const de = {};
      function he(e, t) {
        for (var n, r, i, o, s, a, l, u = [], c = 0, f = e.length; c < f; c++)
          (r = e[c]).style &&
            ((n = r.style.display),
            t
              ? (n === 'none' &&
                  ((u[c] = Z.get(r, 'display') || null),
                  u[c] || (r.style.display = '')),
                r.style.display === '' &&
                  ce(r) &&
                  (u[c] =
                    ((l = s = o = void 0),
                    (s = (i = r).ownerDocument),
                    (a = i.nodeName),
                    (l = de[a]) ||
                      ((o = s.body.appendChild(s.createElement(a))),
                      (l = T.css(o, 'display')),
                      o.parentNode.removeChild(o),
                      l === 'none' && (l = 'block'),
                      (de[a] = l)))))
              : n !== 'none' && ((u[c] = 'none'), Z.set(r, 'display', n)));
        for (c = 0; c < f; c++) u[c] != null && (e[c].style.display = u[c]);
        return e;
      }
      T.fn.extend({
        show() {
          return he(this, !0);
        },
        hide() {
          return he(this);
        },
        toggle(e) {
          return typeof e === 'boolean'
            ? e
              ? this.show()
              : this.hide()
            : this.each(function() {
                ce(this) ? T(this).show() : T(this).hide();
              });
        },
      });
      const pe = /^(?:checkbox|radio)$/i;
      const ge = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i;
      const me = /^$|^module$|\/(?:java|ecma)script/i;
      const ve = {
        option: [1, "<select multiple='multiple'>", '</select>'],
        thead: [1, '<table>', '</table>'],
        col: [2, '<table><colgroup>', '</colgroup></table>'],
        tr: [2, '<table><tbody>', '</tbody></table>'],
        td: [3, '<table><tbody><tr>', '</tr></tbody></table>'],
        _default: [0, '', ''],
      };
      function ye(e, t) {
        let n;
        return (
          (n =
            void 0 !== e.getElementsByTagName
              ? e.getElementsByTagName(t || '*')
              : void 0 !== e.querySelectorAll
              ? e.querySelectorAll(t || '*')
              : []),
          void 0 === t || (t && I(e, t)) ? T.merge([e], n) : n
        );
      }
      function be(e, t) {
        for (let n = 0, r = e.length; n < r; n++)
          Z.set(e[n], 'globalEval', !t || Z.get(t[n], 'globalEval'));
      }
      (ve.optgroup = ve.option),
        (ve.tbody = ve.tfoot = ve.colgroup = ve.caption = ve.thead),
        (ve.th = ve.td);
      let _e;
      let we;
      const xe = /<|&#?\w+;/;
      function Ee(e, t, n, r, i) {
        for (
          var o,
            s,
            a,
            l,
            u,
            c,
            f = t.createDocumentFragment(),
            d = [],
            h = 0,
            p = e.length;
          h < p;
          h++
        )
          if ((o = e[h]) || o === 0)
            if (x(o) === 'object') T.merge(d, o.nodeType ? [o] : o);
            else if (xe.test(o)) {
              for (
                s = s || f.appendChild(t.createElement('div')),
                  a = (ge.exec(o) || ['', ''])[1].toLowerCase(),
                  l = ve[a] || ve._default,
                  s.innerHTML = l[1] + T.htmlPrefilter(o) + l[2],
                  c = l[0];
                c--;

              )
                s = s.lastChild;
              T.merge(d, s.childNodes), ((s = f.firstChild).textContent = '');
            } else d.push(t.createTextNode(o));
        for (f.textContent = '', h = 0; (o = d[h++]); )
          if (r && T.inArray(o, r) > -1) i && i.push(o);
          else if (
            ((u = le(o)), (s = ye(f.appendChild(o), 'script')), u && be(s), n)
          )
            for (c = 0; (o = s[c++]); ) me.test(o.type || '') && n.push(o);
        return f;
      }
      (_e = s.createDocumentFragment().appendChild(s.createElement('div'))),
        (we = s.createElement('input')).setAttribute('type', 'radio'),
        we.setAttribute('checked', 'checked'),
        we.setAttribute('name', 't'),
        _e.appendChild(we),
        (v.checkClone = _e.cloneNode(!0).cloneNode(!0).lastChild.checked),
        (_e.innerHTML = '<textarea>x</textarea>'),
        (v.noCloneChecked = !!_e.cloneNode(!0).lastChild.defaultValue);
      const Te = /^key/;
      const Ce = /^(?:mouse|pointer|contextmenu|drag|drop)|click/;
      const Se = /^([^.]*)(?:\.(.+)|)/;
      function De() {
        return !0;
      }
      function Ae() {
        return !1;
      }
      function Ne(e, t) {
        return (
          (e ===
            (function() {
              try {
                return s.activeElement;
              } catch (e) {}
            })()) ==
          (t === 'focus')
        );
      }
      function ke(e, t, n, r, i, o) {
        let s;
        let a;
        if (typeof t === 'object') {
          for (a in (typeof n !== 'string' && ((r = r || n), (n = void 0)), t))
            ke(e, a, n, r, t[a], o);
          return e;
        }
        if (
          (r == null && i == null
            ? ((i = n), (r = n = void 0))
            : i == null &&
              (typeof n === 'string'
                ? ((i = r), (r = void 0))
                : ((i = r), (r = n), (n = void 0))),
          !1 === i)
        )
          i = Ae;
        else if (!i) return e;
        return (
          o === 1 &&
            ((s = i),
            ((i = function(e) {
              return T().off(e), s.apply(this, arguments);
            }).guid = s.guid || (s.guid = T.guid++))),
          e.each(function() {
            T.event.add(this, t, i, r, n);
          })
        );
      }
      function Ie(e, t, n) {
        n
          ? (Z.set(e, t, !1),
            T.event.add(e, t, {
              namespace: !1,
              handler(e) {
                let r;
                let i;
                let o = Z.get(this, t);
                if (1 & e.isTrigger && this[t]) {
                  if (o.length)
                    (T.event.special[t] || {}).delegateType &&
                      e.stopPropagation();
                  else if (
                    ((o = l.call(arguments)),
                    Z.set(this, t, o),
                    (r = n(this, t)),
                    this[t](),
                    o !== (i = Z.get(this, t)) || r
                      ? Z.set(this, t, !1)
                      : (i = {}),
                    o !== i)
                  )
                    return (
                      e.stopImmediatePropagation(), e.preventDefault(), i.value
                    );
                } else
                  o.length &&
                    (Z.set(this, t, {
                      value: T.event.trigger(
                        T.extend(o[0], T.Event.prototype),
                        o.slice(1),
                        this
                      ),
                    }),
                    e.stopImmediatePropagation());
              },
            }))
          : void 0 === Z.get(e, t) && T.event.add(e, t, De);
      }
      (T.event = {
        global: {},
        add(e, t, n, r, i) {
          let o;
          let s;
          let a;
          let l;
          let u;
          let c;
          let f;
          let d;
          let h;
          let p;
          let g;
          const m = Z.get(e);
          if (m)
            for (
              n.handler && ((n = (o = n).handler), (i = o.selector)),
                i && T.find.matchesSelector(ae, i),
                n.guid || (n.guid = T.guid++),
                (l = m.events) || (l = m.events = {}),
                (s = m.handle) ||
                  (s = m.handle = function(t) {
                    return void 0 !== T && T.event.triggered !== t.type
                      ? T.event.dispatch.apply(e, arguments)
                      : void 0;
                  }),
                u = (t = (t || '').match(M) || ['']).length;
              u--;

            )
              (h = g = (a = Se.exec(t[u]) || [])[1]),
                (p = (a[2] || '').split('.').sort()),
                h &&
                  ((f = T.event.special[h] || {}),
                  (h = (i ? f.delegateType : f.bindType) || h),
                  (f = T.event.special[h] || {}),
                  (c = T.extend(
                    {
                      type: h,
                      origType: g,
                      data: r,
                      handler: n,
                      guid: n.guid,
                      selector: i,
                      needsContext: i && T.expr.match.needsContext.test(i),
                      namespace: p.join('.'),
                    },
                    o
                  )),
                  (d = l[h]) ||
                    (((d = l[h] = []).delegateCount = 0),
                    (f.setup && !1 !== f.setup.call(e, r, p, s)) ||
                      (e.addEventListener && e.addEventListener(h, s))),
                  f.add &&
                    (f.add.call(e, c),
                    c.handler.guid || (c.handler.guid = n.guid)),
                  i ? d.splice(d.delegateCount++, 0, c) : d.push(c),
                  (T.event.global[h] = !0));
        },
        remove(e, t, n, r, i) {
          let o;
          let s;
          let a;
          let l;
          let u;
          let c;
          let f;
          let d;
          let h;
          let p;
          let g;
          const m = Z.hasData(e) && Z.get(e);
          if (m && (l = m.events)) {
            for (u = (t = (t || '').match(M) || ['']).length; u--; )
              if (
                ((h = g = (a = Se.exec(t[u]) || [])[1]),
                (p = (a[2] || '').split('.').sort()),
                h)
              ) {
                for (
                  f = T.event.special[h] || {},
                    d = l[(h = (r ? f.delegateType : f.bindType) || h)] || [],
                    a =
                      a[2] &&
                      new RegExp(`(^|\\.)${p.join('\\.(?:.*\\.|)')}(\\.|$)`),
                    s = o = d.length;
                  o--;

                )
                  (c = d[o]),
                    (!i && g !== c.origType) ||
                      (n && n.guid !== c.guid) ||
                      (a && !a.test(c.namespace)) ||
                      (r && r !== c.selector && (r !== '**' || !c.selector)) ||
                      (d.splice(o, 1),
                      c.selector && d.delegateCount--,
                      f.remove && f.remove.call(e, c));
                s &&
                  !d.length &&
                  ((f.teardown && !1 !== f.teardown.call(e, p, m.handle)) ||
                    T.removeEvent(e, h, m.handle),
                  delete l[h]);
              } else for (h in l) T.event.remove(e, h + t[u], n, r, !0);
            T.isEmptyObject(l) && Z.remove(e, 'handle events');
          }
        },
        dispatch(e) {
          let t;
          let n;
          let r;
          let i;
          let o;
          let s;
          const a = T.event.fix(e);
          const l = new Array(arguments.length);
          const u = (Z.get(this, 'events') || {})[a.type] || [];
          const c = T.event.special[a.type] || {};
          for (l[0] = a, t = 1; t < arguments.length; t++) l[t] = arguments[t];
          if (
            ((a.delegateTarget = this),
            !c.preDispatch || !1 !== c.preDispatch.call(this, a))
          ) {
            for (
              s = T.event.handlers.call(this, a, u), t = 0;
              (i = s[t++]) && !a.isPropagationStopped();

            )
              for (
                a.currentTarget = i.elem, n = 0;
                (o = i.handlers[n++]) && !a.isImmediatePropagationStopped();

              )
                (a.rnamespace &&
                  !1 !== o.namespace &&
                  !a.rnamespace.test(o.namespace)) ||
                  ((a.handleObj = o),
                  (a.data = o.data),
                  void 0 !==
                    (r = (
                      (T.event.special[o.origType] || {}).handle || o.handler
                    ).apply(i.elem, l)) &&
                    !1 === (a.result = r) &&
                    (a.preventDefault(), a.stopPropagation()));
            return c.postDispatch && c.postDispatch.call(this, a), a.result;
          }
        },
        handlers(e, t) {
          let n;
          let r;
          let i;
          let o;
          let s;
          const a = [];
          const l = t.delegateCount;
          let u = e.target;
          if (l && u.nodeType && !(e.type === 'click' && e.button >= 1))
            for (; u !== this; u = u.parentNode || this)
              if (
                u.nodeType === 1 &&
                (e.type !== 'click' || !0 !== u.disabled)
              ) {
                for (o = [], s = {}, n = 0; n < l; n++)
                  void 0 === s[(i = `${(r = t[n]).selector} `)] &&
                    (s[i] = r.needsContext
                      ? T(i, this).index(u) > -1
                      : T.find(i, this, null, [u]).length),
                    s[i] && o.push(r);
                o.length && a.push({ elem: u, handlers: o });
              }
          return (
            (u = this),
            l < t.length && a.push({ elem: u, handlers: t.slice(l) }),
            a
          );
        },
        addProp(e, t) {
          Object.defineProperty(T.Event.prototype, e, {
            enumerable: !0,
            configurable: !0,
            get: y(t)
              ? function() {
                  if (this.originalEvent) return t(this.originalEvent);
                }
              : function() {
                  if (this.originalEvent) return this.originalEvent[e];
                },
            set(t) {
              Object.defineProperty(this, e, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: t,
              });
            },
          });
        },
        fix(e) {
          return e[T.expando] ? e : new T.Event(e);
        },
        special: {
          load: { noBubble: !0 },
          click: {
            setup(e) {
              const t = this || e;
              return (
                pe.test(t.type) &&
                  t.click &&
                  I(t, 'input') &&
                  Ie(t, 'click', De),
                !1
              );
            },
            trigger(e) {
              const t = this || e;
              return (
                pe.test(t.type) && t.click && I(t, 'input') && Ie(t, 'click'),
                !0
              );
            },
            _default(e) {
              const t = e.target;
              return (
                (pe.test(t.type) &&
                  t.click &&
                  I(t, 'input') &&
                  Z.get(t, 'click')) ||
                I(t, 'a')
              );
            },
          },
          beforeunload: {
            postDispatch(e) {
              void 0 !== e.result &&
                e.originalEvent &&
                (e.originalEvent.returnValue = e.result);
            },
          },
        },
      }),
        (T.removeEvent = function(e, t, n) {
          e.removeEventListener && e.removeEventListener(t, n);
        }),
        (T.Event = function(e, t) {
          if (!(this instanceof T.Event)) return new T.Event(e, t);
          e && e.type
            ? ((this.originalEvent = e),
              (this.type = e.type),
              (this.isDefaultPrevented =
                e.defaultPrevented ||
                (void 0 === e.defaultPrevented && !1 === e.returnValue)
                  ? De
                  : Ae),
              (this.target =
                e.target && e.target.nodeType === 3
                  ? e.target.parentNode
                  : e.target),
              (this.currentTarget = e.currentTarget),
              (this.relatedTarget = e.relatedTarget))
            : (this.type = e),
            t && T.extend(this, t),
            (this.timeStamp = (e && e.timeStamp) || Date.now()),
            (this[T.expando] = !0);
        }),
        (T.Event.prototype = {
          constructor: T.Event,
          isDefaultPrevented: Ae,
          isPropagationStopped: Ae,
          isImmediatePropagationStopped: Ae,
          isSimulated: !1,
          preventDefault() {
            const e = this.originalEvent;
            (this.isDefaultPrevented = De),
              e && !this.isSimulated && e.preventDefault();
          },
          stopPropagation() {
            const e = this.originalEvent;
            (this.isPropagationStopped = De),
              e && !this.isSimulated && e.stopPropagation();
          },
          stopImmediatePropagation() {
            const e = this.originalEvent;
            (this.isImmediatePropagationStopped = De),
              e && !this.isSimulated && e.stopImmediatePropagation(),
              this.stopPropagation();
          },
        }),
        T.each(
          {
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            char: !0,
            code: !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which(e) {
              const t = e.button;
              return e.which == null && Te.test(e.type)
                ? e.charCode != null
                  ? e.charCode
                  : e.keyCode
                : !e.which && void 0 !== t && Ce.test(e.type)
                ? 1 & t
                  ? 1
                  : 2 & t
                  ? 3
                  : 4 & t
                  ? 2
                  : 0
                : e.which;
            },
          },
          T.event.addProp
        ),
        T.each({ focus: 'focusin', blur: 'focusout' }, function(e, t) {
          T.event.special[e] = {
            setup() {
              return Ie(this, e, Ne), !1;
            },
            trigger() {
              return Ie(this, e), !0;
            },
            delegateType: t,
          };
        }),
        T.each(
          {
            mouseenter: 'mouseover',
            mouseleave: 'mouseout',
            pointerenter: 'pointerover',
            pointerleave: 'pointerout',
          },
          function(e, t) {
            T.event.special[e] = {
              delegateType: t,
              bindType: t,
              handle(e) {
                let n;
                const r = e.relatedTarget;
                const i = e.handleObj;
                return (
                  (r && (r === this || T.contains(this, r))) ||
                    ((e.type = i.origType),
                    (n = i.handler.apply(this, arguments)),
                    (e.type = t)),
                  n
                );
              },
            };
          }
        ),
        T.fn.extend({
          on(e, t, n, r) {
            return ke(this, e, t, n, r);
          },
          one(e, t, n, r) {
            return ke(this, e, t, n, r, 1);
          },
          off(e, t, n) {
            let r;
            let i;
            if (e && e.preventDefault && e.handleObj)
              return (
                (r = e.handleObj),
                T(e.delegateTarget).off(
                  r.namespace ? `${r.origType}.${r.namespace}` : r.origType,
                  r.selector,
                  r.handler
                ),
                this
              );
            if (typeof e === 'object') {
              for (i in e) this.off(i, t, e[i]);
              return this;
            }
            return (
              (!1 !== t && typeof t !== 'function') || ((n = t), (t = void 0)),
              !1 === n && (n = Ae),
              this.each(function() {
                T.event.remove(this, e, n, t);
              })
            );
          },
        });
      const Oe = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi;
      const Le = /<script|<style|<link/i;
      const je = /checked\s*(?:[^=]|=\s*.checked.)/i;
      const Pe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
      function He(e, t) {
        return (
          (I(e, 'table') &&
            I(t.nodeType !== 11 ? t : t.firstChild, 'tr') &&
            T(e).children('tbody')[0]) ||
          e
        );
      }
      function qe(e) {
        return (e.type = `${e.getAttribute('type') !== null}/${e.type}`), e;
      }
      function Re(e) {
        return (
          (e.type || '').slice(0, 5) === 'true/'
            ? (e.type = e.type.slice(5))
            : e.removeAttribute('type'),
          e
        );
      }
      function Me(e, t) {
        let n;
        let r;
        let i;
        let o;
        let s;
        let a;
        let l;
        let u;
        if (t.nodeType === 1) {
          if (
            Z.hasData(e) &&
            ((o = Z.access(e)), (s = Z.set(t, o)), (u = o.events))
          )
            for (i in (delete s.handle, (s.events = {}), u))
              for (n = 0, r = u[i].length; n < r; n++)
                T.event.add(t, i, u[i][n]);
          ee.hasData(e) &&
            ((a = ee.access(e)), (l = T.extend({}, a)), ee.set(t, l));
        }
      }
      function We(e, t, n, r) {
        t = u.apply([], t);
        let i;
        let o;
        let s;
        let a;
        let l;
        let c;
        let f = 0;
        const d = e.length;
        const h = d - 1;
        const p = t[0];
        const g = y(p);
        if (
          g ||
          (d > 1 && typeof p === 'string' && !v.checkClone && je.test(p))
        )
          return e.each(function(i) {
            const o = e.eq(i);
            g && (t[0] = p.call(this, i, o.html())), We(o, t, n, r);
          });
        if (
          d &&
          ((o = (i = Ee(t, e[0].ownerDocument, !1, e, r)).firstChild),
          i.childNodes.length === 1 && (i = o),
          o || r)
        ) {
          for (a = (s = T.map(ye(i, 'script'), qe)).length; f < d; f++)
            (l = i),
              f !== h &&
                ((l = T.clone(l, !0, !0)), a && T.merge(s, ye(l, 'script'))),
              n.call(e[f], l, f);
          if (a)
            for (
              c = s[s.length - 1].ownerDocument, T.map(s, Re), f = 0;
              f < a;
              f++
            )
              (l = s[f]),
                me.test(l.type || '') &&
                  !Z.access(l, 'globalEval') &&
                  T.contains(c, l) &&
                  (l.src && (l.type || '').toLowerCase() !== 'module'
                    ? T._evalUrl &&
                      !l.noModule &&
                      T._evalUrl(l.src, {
                        nonce: l.nonce || l.getAttribute('nonce'),
                      })
                    : w(l.textContent.replace(Pe, ''), l, c));
        }
        return e;
      }
      function Fe(e, t, n) {
        for (var r, i = t ? T.filter(t, e) : e, o = 0; (r = i[o]) != null; o++)
          n || r.nodeType !== 1 || T.cleanData(ye(r)),
            r.parentNode &&
              (n && le(r) && be(ye(r, 'script')), r.parentNode.removeChild(r));
        return e;
      }
      T.extend({
        htmlPrefilter(e) {
          return e.replace(Oe, '<$1></$2>');
        },
        clone(e, t, n) {
          let r;
          let i;
          let o;
          let s;
          let a;
          let l;
          let u;
          const c = e.cloneNode(!0);
          const f = le(e);
          if (
            !(
              v.noCloneChecked ||
              (e.nodeType !== 1 && e.nodeType !== 11) ||
              T.isXMLDoc(e)
            )
          )
            for (s = ye(c), r = 0, i = (o = ye(e)).length; r < i; r++)
              (a = o[r]),
                (u = (l = s[r]).nodeName.toLowerCase()) === 'input' &&
                pe.test(a.type)
                  ? (l.checked = a.checked)
                  : (u !== 'input' && u !== 'textarea') ||
                    (l.defaultValue = a.defaultValue);
          if (t)
            if (n)
              for (
                o = o || ye(e), s = s || ye(c), r = 0, i = o.length;
                r < i;
                r++
              )
                Me(o[r], s[r]);
            else Me(e, c);
          return (
            (s = ye(c, 'script')).length > 0 && be(s, !f && ye(e, 'script')), c
          );
        },
        cleanData(e) {
          for (
            var t, n, r, i = T.event.special, o = 0;
            void 0 !== (n = e[o]);
            o++
          )
            if (G(n)) {
              if ((t = n[Z.expando])) {
                if (t.events)
                  for (r in t.events)
                    i[r] ? T.event.remove(n, r) : T.removeEvent(n, r, t.handle);
                n[Z.expando] = void 0;
              }
              n[ee.expando] && (n[ee.expando] = void 0);
            }
        },
      }),
        T.fn.extend({
          detach(e) {
            return Fe(this, e, !0);
          },
          remove(e) {
            return Fe(this, e);
          },
          text(e) {
            return V(
              this,
              function(e) {
                return void 0 === e
                  ? T.text(this)
                  : this.empty().each(function() {
                      (this.nodeType !== 1 &&
                        this.nodeType !== 11 &&
                        this.nodeType !== 9) ||
                        (this.textContent = e);
                    });
              },
              null,
              e,
              arguments.length
            );
          },
          append() {
            return We(this, arguments, function(e) {
              (this.nodeType !== 1 &&
                this.nodeType !== 11 &&
                this.nodeType !== 9) ||
                He(this, e).appendChild(e);
            });
          },
          prepend() {
            return We(this, arguments, function(e) {
              if (
                this.nodeType === 1 ||
                this.nodeType === 11 ||
                this.nodeType === 9
              ) {
                const t = He(this, e);
                t.insertBefore(e, t.firstChild);
              }
            });
          },
          before() {
            return We(this, arguments, function(e) {
              this.parentNode && this.parentNode.insertBefore(e, this);
            });
          },
          after() {
            return We(this, arguments, function(e) {
              this.parentNode &&
                this.parentNode.insertBefore(e, this.nextSibling);
            });
          },
          empty() {
            for (var e, t = 0; (e = this[t]) != null; t++)
              e.nodeType === 1 &&
                (T.cleanData(ye(e, !1)), (e.textContent = ''));
            return this;
          },
          clone(e, t) {
            return (
              (e = e != null && e),
              (t = t == null ? e : t),
              this.map(function() {
                return T.clone(this, e, t);
              })
            );
          },
          html(e) {
            return V(
              this,
              function(e) {
                let t = this[0] || {};
                let n = 0;
                const r = this.length;
                if (void 0 === e && t.nodeType === 1) return t.innerHTML;
                if (
                  typeof e === 'string' &&
                  !Le.test(e) &&
                  !ve[(ge.exec(e) || ['', ''])[1].toLowerCase()]
                ) {
                  e = T.htmlPrefilter(e);
                  try {
                    for (; n < r; n++)
                      (t = this[n] || {}).nodeType === 1 &&
                        (T.cleanData(ye(t, !1)), (t.innerHTML = e));
                    t = 0;
                  } catch (e) {}
                }
                t && this.empty().append(e);
              },
              null,
              e,
              arguments.length
            );
          },
          replaceWith() {
            const e = [];
            return We(
              this,
              arguments,
              function(t) {
                const n = this.parentNode;
                T.inArray(this, e) < 0 &&
                  (T.cleanData(ye(this)), n && n.replaceChild(t, this));
              },
              e
            );
          },
        }),
        T.each(
          {
            appendTo: 'append',
            prependTo: 'prepend',
            insertBefore: 'before',
            insertAfter: 'after',
            replaceAll: 'replaceWith',
          },
          function(e, t) {
            T.fn[e] = function(e) {
              for (
                var n, r = [], i = T(e), o = i.length - 1, s = 0;
                s <= o;
                s++
              )
                (n = s === o ? this : this.clone(!0)),
                  T(i[s])[t](n),
                  c.apply(r, n.get());
              return this.pushStack(r);
            };
          }
        );
      const Be = new RegExp(`^(${ie})(?!px)[a-z%]+$`, 'i');
      const Ue = function(e) {
        let t = e.ownerDocument.defaultView;
        return (t && t.opener) || (t = n), t.getComputedStyle(e);
      };
      const $e = new RegExp(se.join('|'), 'i');
      function ze(e, t, n) {
        let r;
        let i;
        let o;
        let s;
        const a = e.style;
        return (
          (n = n || Ue(e)) &&
            ((s = n.getPropertyValue(t) || n[t]) !== '' ||
              le(e) ||
              (s = T.style(e, t)),
            !v.pixelBoxStyles() &&
              Be.test(s) &&
              $e.test(t) &&
              ((r = a.width),
              (i = a.minWidth),
              (o = a.maxWidth),
              (a.minWidth = a.maxWidth = a.width = s),
              (s = n.width),
              (a.width = r),
              (a.minWidth = i),
              (a.maxWidth = o))),
          void 0 !== s ? `${s}` : s
        );
      }
      function Ve(e, t) {
        return {
          get() {
            if (!e()) return (this.get = t).apply(this, arguments);
            delete this.get;
          },
        };
      }
      !(function() {
        function e() {
          if (c) {
            (u.style.cssText =
              'position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0'),
              (c.style.cssText =
                'position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%'),
              ae.appendChild(u).appendChild(c);
            const e = n.getComputedStyle(c);
            (r = e.top !== '1%'),
              (l = t(e.marginLeft) === 12),
              (c.style.right = '60%'),
              (a = t(e.right) === 36),
              (i = t(e.width) === 36),
              (c.style.position = 'absolute'),
              (o = t(c.offsetWidth / 3) === 12),
              ae.removeChild(u),
              (c = null);
          }
        }
        function t(e) {
          return Math.round(parseFloat(e));
        }
        let r;
        let i;
        let o;
        let a;
        let l;
        var u = s.createElement('div');
        var c = s.createElement('div');
        c.style &&
          ((c.style.backgroundClip = 'content-box'),
          (c.cloneNode(!0).style.backgroundClip = ''),
          (v.clearCloneStyle = c.style.backgroundClip === 'content-box'),
          T.extend(v, {
            boxSizingReliable() {
              return e(), i;
            },
            pixelBoxStyles() {
              return e(), a;
            },
            pixelPosition() {
              return e(), r;
            },
            reliableMarginLeft() {
              return e(), l;
            },
            scrollboxSize() {
              return e(), o;
            },
          }));
      })();
      const Ke = ['Webkit', 'Moz', 'ms'];
      const Qe = s.createElement('div').style;
      const Xe = {};
      function Ye(e) {
        return (
          T.cssProps[e] ||
          Xe[e] ||
          (e in Qe
            ? e
            : (Xe[e] =
                (function(e) {
                  for (
                    let t = e[0].toUpperCase() + e.slice(1), n = Ke.length;
                    n--;

                  )
                    if ((e = Ke[n] + t) in Qe) return e;
                })(e) || e))
        );
      }
      let Ge;
      let Je;
      const Ze = /^(none|table(?!-c[ea]).+)/;
      const et = /^--/;
      const tt = {
        position: 'absolute',
        visibility: 'hidden',
        display: 'block',
      };
      const nt = { letterSpacing: '0', fontWeight: '400' };
      function rt(e, t, n) {
        const r = oe.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || 'px') : t;
      }
      function it(e, t, n, r, i, o) {
        let s = t === 'width' ? 1 : 0;
        let a = 0;
        let l = 0;
        if (n === (r ? 'border' : 'content')) return 0;
        for (; s < 4; s += 2)
          n === 'margin' && (l += T.css(e, n + se[s], !0, i)),
            r
              ? (n === 'content' && (l -= T.css(e, `padding${se[s]}`, !0, i)),
                n !== 'margin' && (l -= T.css(e, `border${se[s]}Width`, !0, i)))
              : ((l += T.css(e, `padding${se[s]}`, !0, i)),
                n !== 'padding'
                  ? (l += T.css(e, `border${se[s]}Width`, !0, i))
                  : (a += T.css(e, `border${se[s]}Width`, !0, i)));
        return (
          !r &&
            o >= 0 &&
            (l +=
              Math.max(
                0,
                Math.ceil(
                  e[`offset${t[0].toUpperCase()}${t.slice(1)}`] -
                    o -
                    l -
                    a -
                    0.5
                )
              ) || 0),
          l
        );
      }
      function ot(e, t, n) {
        const r = Ue(e);
        let i =
          (!v.boxSizingReliable() || n) &&
          T.css(e, 'boxSizing', !1, r) === 'border-box';
        let o = i;
        let s = ze(e, t, r);
        const a = `offset${t[0].toUpperCase()}${t.slice(1)}`;
        if (Be.test(s)) {
          if (!n) return s;
          s = 'auto';
        }
        return (
          ((!v.boxSizingReliable() && i) ||
            s === 'auto' ||
            (!parseFloat(s) && T.css(e, 'display', !1, r) === 'inline')) &&
            e.getClientRects().length &&
            ((i = T.css(e, 'boxSizing', !1, r) === 'border-box'),
            (o = a in e) && (s = e[a])),
          `${(s = parseFloat(s) || 0) +
            it(e, t, n || (i ? 'border' : 'content'), o, r, s)}px`
        );
      }
      T.extend({
        cssHooks: {
          opacity: {
            get(e, t) {
              if (t) {
                const n = ze(e, 'opacity');
                return n === '' ? '1' : n;
              }
            },
          },
        },
        cssNumber: {
          animationIterationCount: !0,
          columnCount: !0,
          fillOpacity: !0,
          flexGrow: !0,
          flexShrink: !0,
          fontWeight: !0,
          gridArea: !0,
          gridColumn: !0,
          gridColumnEnd: !0,
          gridColumnStart: !0,
          gridRow: !0,
          gridRowEnd: !0,
          gridRowStart: !0,
          lineHeight: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0,
        },
        cssProps: {},
        style(e, t, n, r) {
          if (e && e.nodeType !== 3 && e.nodeType !== 8 && e.style) {
            let i;
            let o;
            let s;
            const a = Y(t);
            const l = et.test(t);
            const u = e.style;
            if (
              (l || (t = Ye(a)),
              (s = T.cssHooks[t] || T.cssHooks[a]),
              void 0 === n)
            )
              return s && 'get' in s && void 0 !== (i = s.get(e, !1, r))
                ? i
                : u[t];
            (o = typeof n) == 'string' &&
              (i = oe.exec(n)) &&
              i[1] &&
              ((n = (function(e, t, n, r) {
                let i;
                let o;
                let s = 20;
                const a = function() {
                  return T.css(e, t, '');
                };
                let l = a();
                let u = (n && n[3]) || (T.cssNumber[t] ? '' : 'px');
                let c =
                  e.nodeType &&
                  (T.cssNumber[t] || (u !== 'px' && +l)) &&
                  oe.exec(T.css(e, t));
                if (c && c[3] !== u) {
                  for (l /= 2, u = u || c[3], c = +l || 1; s--; )
                    T.style(e, t, c + u),
                      (1 - o) * (1 - (o = a() / l || 0.5)) <= 0 && (s = 0),
                      (c /= o);
                  (c *= 2), T.style(e, t, c + u), (n = n || []);
                }
                return (
                  n &&
                    ((c = +c || +l || 0),
                    (i = n[1] ? c + (n[1] + 1) * n[2] : +n[2])),
                  i
                );
              })(e, t, i)),
              (o = 'number')),
              n != null &&
                n == n &&
                (o !== 'number' ||
                  l ||
                  (n += (i && i[3]) || (T.cssNumber[a] ? '' : 'px')),
                v.clearCloneStyle ||
                  n !== '' ||
                  t.indexOf('background') !== 0 ||
                  (u[t] = 'inherit'),
                (s && 'set' in s && void 0 === (n = s.set(e, n, r))) ||
                  (l ? u.setProperty(t, n) : (u[t] = n)));
          }
        },
        css(e, t, n, r) {
          let i;
          let o;
          let s;
          const a = Y(t);
          return (
            et.test(t) || (t = Ye(a)),
            (s = T.cssHooks[t] || T.cssHooks[a]) &&
              'get' in s &&
              (i = s.get(e, !0, n)),
            void 0 === i && (i = ze(e, t, r)),
            i === 'normal' && t in nt && (i = nt[t]),
            n === '' || n
              ? ((o = parseFloat(i)), !0 === n || isFinite(o) ? o || 0 : i)
              : i
          );
        },
      }),
        T.each(['height', 'width'], function(e, t) {
          T.cssHooks[t] = {
            get(e, n, r) {
              if (n)
                return !Ze.test(T.css(e, 'display')) ||
                  (e.getClientRects().length && e.getBoundingClientRect().width)
                  ? ot(e, t, r)
                  : fe(e, tt, function() {
                      return ot(e, t, r);
                    });
            },
            set(e, n, r) {
              let i;
              const o = Ue(e);
              const s = !v.scrollboxSize() && o.position === 'absolute';
              const a =
                (s || r) && T.css(e, 'boxSizing', !1, o) === 'border-box';
              let l = r ? it(e, t, r, a, o) : 0;
              return (
                a &&
                  s &&
                  (l -= Math.ceil(
                    e[`offset${t[0].toUpperCase()}${t.slice(1)}`] -
                      parseFloat(o[t]) -
                      it(e, t, 'border', !1, o) -
                      0.5
                  )),
                l &&
                  (i = oe.exec(n)) &&
                  (i[3] || 'px') !== 'px' &&
                  ((e.style[t] = n), (n = T.css(e, t))),
                rt(0, n, l)
              );
            },
          };
        }),
        (T.cssHooks.marginLeft = Ve(v.reliableMarginLeft, function(e, t) {
          if (t)
            return `${parseFloat(ze(e, 'marginLeft')) ||
              e.getBoundingClientRect().left -
                fe(e, { marginLeft: 0 }, function() {
                  return e.getBoundingClientRect().left;
                })}px`;
        })),
        T.each({ margin: '', padding: '', border: 'Width' }, function(e, t) {
          (T.cssHooks[e + t] = {
            expand(n) {
              for (
                var r = 0,
                  i = {},
                  o = typeof n === 'string' ? n.split(' ') : [n];
                r < 4;
                r++
              )
                i[e + se[r] + t] = o[r] || o[r - 2] || o[0];
              return i;
            },
          }),
            e !== 'margin' && (T.cssHooks[e + t].set = rt);
        }),
        T.fn.extend({
          css(e, t) {
            return V(
              this,
              function(e, t, n) {
                let r;
                let i;
                const o = {};
                let s = 0;
                if (Array.isArray(t)) {
                  for (r = Ue(e), i = t.length; s < i; s++)
                    o[t[s]] = T.css(e, t[s], !1, r);
                  return o;
                }
                return void 0 !== n ? T.style(e, t, n) : T.css(e, t);
              },
              e,
              t,
              arguments.length > 1
            );
          },
        }),
        (T.fn.delay = function(e, t) {
          return (
            (e = (T.fx && T.fx.speeds[e]) || e),
            (t = t || 'fx'),
            this.queue(t, function(t, r) {
              const i = n.setTimeout(t, e);
              r.stop = function() {
                n.clearTimeout(i);
              };
            })
          );
        }),
        (Ge = s.createElement('input')),
        (Je = s.createElement('select').appendChild(s.createElement('option'))),
        (Ge.type = 'checkbox'),
        (v.checkOn = Ge.value !== ''),
        (v.optSelected = Je.selected),
        ((Ge = s.createElement('input')).value = 't'),
        (Ge.type = 'radio'),
        (v.radioValue = Ge.value === 't');
      let st;
      const at = T.expr.attrHandle;
      T.fn.extend({
        attr(e, t) {
          return V(this, T.attr, e, t, arguments.length > 1);
        },
        removeAttr(e) {
          return this.each(function() {
            T.removeAttr(this, e);
          });
        },
      }),
        T.extend({
          attr(e, t, n) {
            let r;
            let i;
            const o = e.nodeType;
            if (o !== 3 && o !== 8 && o !== 2)
              return void 0 === e.getAttribute
                ? T.prop(e, t, n)
                : ((o === 1 && T.isXMLDoc(e)) ||
                    (i =
                      T.attrHooks[t.toLowerCase()] ||
                      (T.expr.match.bool.test(t) ? st : void 0)),
                  void 0 !== n
                    ? n === null
                      ? void T.removeAttr(e, t)
                      : i && 'set' in i && void 0 !== (r = i.set(e, n, t))
                      ? r
                      : (e.setAttribute(t, `${n}`), n)
                    : i && 'get' in i && (r = i.get(e, t)) !== null
                    ? r
                    : (r = T.find.attr(e, t)) == null
                    ? void 0
                    : r);
          },
          attrHooks: {
            type: {
              set(e, t) {
                if (!v.radioValue && t === 'radio' && I(e, 'input')) {
                  const n = e.value;
                  return e.setAttribute('type', t), n && (e.value = n), t;
                }
              },
            },
          },
          removeAttr(e, t) {
            let n;
            let r = 0;
            const i = t && t.match(M);
            if (i && e.nodeType === 1)
              for (; (n = i[r++]); ) e.removeAttribute(n);
          },
        }),
        (st = {
          set(e, t, n) {
            return !1 === t ? T.removeAttr(e, n) : e.setAttribute(n, n), n;
          },
        }),
        T.each(T.expr.match.bool.source.match(/\w+/g), function(e, t) {
          const n = at[t] || T.find.attr;
          at[t] = function(e, t, r) {
            let i;
            let o;
            const s = t.toLowerCase();
            return (
              r ||
                ((o = at[s]),
                (at[s] = i),
                (i = n(e, t, r) != null ? s : null),
                (at[s] = o)),
              i
            );
          };
        });
      const lt = /^(?:input|select|textarea|button)$/i;
      const ut = /^(?:a|area)$/i;
      function ct(e) {
        return (e.match(M) || []).join(' ');
      }
      function ft(e) {
        return (e.getAttribute && e.getAttribute('class')) || '';
      }
      function dt(e) {
        return Array.isArray(e)
          ? e
          : (typeof e === 'string' && e.match(M)) || [];
      }
      T.fn.extend({
        prop(e, t) {
          return V(this, T.prop, e, t, arguments.length > 1);
        },
        removeProp(e) {
          return this.each(function() {
            delete this[T.propFix[e] || e];
          });
        },
      }),
        T.extend({
          prop(e, t, n) {
            let r;
            let i;
            const o = e.nodeType;
            if (o !== 3 && o !== 8 && o !== 2)
              return (
                (o === 1 && T.isXMLDoc(e)) ||
                  ((t = T.propFix[t] || t), (i = T.propHooks[t])),
                void 0 !== n
                  ? i && 'set' in i && void 0 !== (r = i.set(e, n, t))
                    ? r
                    : (e[t] = n)
                  : i && 'get' in i && (r = i.get(e, t)) !== null
                  ? r
                  : e[t]
              );
          },
          propHooks: {
            tabIndex: {
              get(e) {
                const t = T.find.attr(e, 'tabindex');
                return t
                  ? parseInt(t, 10)
                  : lt.test(e.nodeName) || (ut.test(e.nodeName) && e.href)
                  ? 0
                  : -1;
              },
            },
          },
          propFix: { for: 'htmlFor', class: 'className' },
        }),
        v.optSelected ||
          (T.propHooks.selected = {
            get(e) {
              const t = e.parentNode;
              return t && t.parentNode && t.parentNode.selectedIndex, null;
            },
            set(e) {
              const t = e.parentNode;
              t &&
                (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
            },
          }),
        T.each(
          [
            'tabIndex',
            'readOnly',
            'maxLength',
            'cellSpacing',
            'cellPadding',
            'rowSpan',
            'colSpan',
            'useMap',
            'frameBorder',
            'contentEditable',
          ],
          function() {
            T.propFix[this.toLowerCase()] = this;
          }
        ),
        T.fn.extend({
          addClass(e) {
            let t;
            let n;
            let r;
            let i;
            let o;
            let s;
            let a;
            let l = 0;
            if (y(e))
              return this.each(function(t) {
                T(this).addClass(e.call(this, t, ft(this)));
              });
            if ((t = dt(e)).length)
              for (; (n = this[l++]); )
                if (((i = ft(n)), (r = n.nodeType === 1 && ` ${ct(i)} `))) {
                  for (s = 0; (o = t[s++]); )
                    r.indexOf(` ${o} `) < 0 && (r += `${o} `);
                  i !== (a = ct(r)) && n.setAttribute('class', a);
                }
            return this;
          },
          removeClass(e) {
            let t;
            let n;
            let r;
            let i;
            let o;
            let s;
            let a;
            let l = 0;
            if (y(e))
              return this.each(function(t) {
                T(this).removeClass(e.call(this, t, ft(this)));
              });
            if (!arguments.length) return this.attr('class', '');
            if ((t = dt(e)).length)
              for (; (n = this[l++]); )
                if (((i = ft(n)), (r = n.nodeType === 1 && ` ${ct(i)} `))) {
                  for (s = 0; (o = t[s++]); )
                    for (; r.indexOf(` ${o} `) > -1; )
                      r = r.replace(` ${o} `, ' ');
                  i !== (a = ct(r)) && n.setAttribute('class', a);
                }
            return this;
          },
          toggleClass(e, t) {
            const n = typeof e;
            const r = n === 'string' || Array.isArray(e);
            return typeof t === 'boolean' && r
              ? t
                ? this.addClass(e)
                : this.removeClass(e)
              : y(e)
              ? this.each(function(n) {
                  T(this).toggleClass(e.call(this, n, ft(this), t), t);
                })
              : this.each(function() {
                  let t;
                  let i;
                  let o;
                  let s;
                  if (r)
                    for (i = 0, o = T(this), s = dt(e); (t = s[i++]); )
                      o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                  else
                    (void 0 !== e && n !== 'boolean') ||
                      ((t = ft(this)) && Z.set(this, '__className__', t),
                      this.setAttribute &&
                        this.setAttribute(
                          'class',
                          t || !1 === e
                            ? ''
                            : Z.get(this, '__className__') || ''
                        ));
                });
          },
          hasClass(e) {
            let t;
            let n;
            let r = 0;
            for (t = ` ${e} `; (n = this[r++]); )
              if (n.nodeType === 1 && ` ${ct(ft(n))} `.indexOf(t) > -1)
                return !0;
            return !1;
          },
        });
      const ht = /\r/g;
      T.fn.extend({
        val(e) {
          let t;
          let n;
          let r;
          const i = this[0];
          return arguments.length
            ? ((r = y(e)),
              this.each(function(n) {
                let i;
                this.nodeType === 1 &&
                  ((i = r ? e.call(this, n, T(this).val()) : e) == null
                    ? (i = '')
                    : typeof i === 'number'
                    ? (i += '')
                    : Array.isArray(i) &&
                      (i = T.map(i, function(e) {
                        return e == null ? '' : `${e}`;
                      })),
                  ((t =
                    T.valHooks[this.type] ||
                    T.valHooks[this.nodeName.toLowerCase()]) &&
                    'set' in t &&
                    void 0 !== t.set(this, i, 'value')) ||
                    (this.value = i));
              }))
            : i
            ? (t =
                T.valHooks[i.type] || T.valHooks[i.nodeName.toLowerCase()]) &&
              'get' in t &&
              void 0 !== (n = t.get(i, 'value'))
              ? n
              : typeof (n = i.value) === 'string'
              ? n.replace(ht, '')
              : n == null
              ? ''
              : n
            : void 0;
        },
      }),
        T.extend({
          valHooks: {
            option: {
              get(e) {
                const t = T.find.attr(e, 'value');
                return t != null ? t : ct(T.text(e));
              },
            },
            select: {
              get(e) {
                let t;
                let n;
                let r;
                const i = e.options;
                const o = e.selectedIndex;
                const s = e.type === 'select-one';
                const a = s ? null : [];
                const l = s ? o + 1 : i.length;
                for (r = o < 0 ? l : s ? o : 0; r < l; r++)
                  if (
                    ((n = i[r]).selected || r === o) &&
                    !n.disabled &&
                    (!n.parentNode.disabled || !I(n.parentNode, 'optgroup'))
                  ) {
                    if (((t = T(n).val()), s)) return t;
                    a.push(t);
                  }
                return a;
              },
              set(e, t) {
                for (
                  var n, r, i = e.options, o = T.makeArray(t), s = i.length;
                  s--;

                )
                  ((r = i[s]).selected =
                    T.inArray(T.valHooks.option.get(r), o) > -1) && (n = !0);
                return n || (e.selectedIndex = -1), o;
              },
            },
          },
        }),
        T.each(['radio', 'checkbox'], function() {
          (T.valHooks[this] = {
            set(e, t) {
              if (Array.isArray(t))
                return (e.checked = T.inArray(T(e).val(), t) > -1);
            },
          }),
            v.checkOn ||
              (T.valHooks[this].get = function(e) {
                return e.getAttribute('value') === null ? 'on' : e.value;
              });
        }),
        (v.focusin = 'onfocusin' in n);
      const pt = /^(?:focusinfocus|focusoutblur)$/;
      const gt = function(e) {
        e.stopPropagation();
      };
      T.extend(T.event, {
        trigger(e, t, r, i) {
          let o;
          let a;
          let l;
          let u;
          let c;
          let f;
          let d;
          let h;
          const g = [r || s];
          let m = p.call(e, 'type') ? e.type : e;
          let v = p.call(e, 'namespace') ? e.namespace.split('.') : [];
          if (
            ((a = h = l = r = r || s),
            r.nodeType !== 3 &&
              r.nodeType !== 8 &&
              !pt.test(m + T.event.triggered) &&
              (m.indexOf('.') > -1 &&
                ((m = (v = m.split('.')).shift()), v.sort()),
              (c = m.indexOf(':') < 0 && `on${m}`),
              ((e = e[T.expando]
                ? e
                : new T.Event(m, typeof e === 'object' && e)).isTrigger = i
                ? 2
                : 3),
              (e.namespace = v.join('.')),
              (e.rnamespace = e.namespace
                ? new RegExp(`(^|\\.)${v.join('\\.(?:.*\\.|)')}(\\.|$)`)
                : null),
              (e.result = void 0),
              e.target || (e.target = r),
              (t = t == null ? [e] : T.makeArray(t, [e])),
              (d = T.event.special[m] || {}),
              i || !d.trigger || !1 !== d.trigger.apply(r, t)))
          ) {
            if (!i && !d.noBubble && !b(r)) {
              for (
                u = d.delegateType || m, pt.test(u + m) || (a = a.parentNode);
                a;
                a = a.parentNode
              )
                g.push(a), (l = a);
              l === (r.ownerDocument || s) &&
                g.push(l.defaultView || l.parentWindow || n);
            }
            for (o = 0; (a = g[o++]) && !e.isPropagationStopped(); )
              (h = a),
                (e.type = o > 1 ? u : d.bindType || m),
                (f =
                  (Z.get(a, 'events') || {})[e.type] && Z.get(a, 'handle')) &&
                  f.apply(a, t),
                (f = c && a[c]) &&
                  f.apply &&
                  G(a) &&
                  ((e.result = f.apply(a, t)),
                  !1 === e.result && e.preventDefault());
            return (
              (e.type = m),
              i ||
                e.isDefaultPrevented() ||
                (d._default && !1 !== d._default.apply(g.pop(), t)) ||
                !G(r) ||
                (c &&
                  y(r[m]) &&
                  !b(r) &&
                  ((l = r[c]) && (r[c] = null),
                  (T.event.triggered = m),
                  e.isPropagationStopped() && h.addEventListener(m, gt),
                  r[m](),
                  e.isPropagationStopped() && h.removeEventListener(m, gt),
                  (T.event.triggered = void 0),
                  l && (r[c] = l))),
              e.result
            );
          }
        },
        simulate(e, t, n) {
          const r = T.extend(new T.Event(), n, { type: e, isSimulated: !0 });
          T.event.trigger(r, null, t);
        },
      }),
        T.fn.extend({
          trigger(e, t) {
            return this.each(function() {
              T.event.trigger(e, t, this);
            });
          },
          triggerHandler(e, t) {
            const n = this[0];
            if (n) return T.event.trigger(e, t, n, !0);
          },
        }),
        v.focusin ||
          T.each({ focus: 'focusin', blur: 'focusout' }, function(e, t) {
            const n = function(e) {
              T.event.simulate(t, e.target, T.event.fix(e));
            };
            T.event.special[t] = {
              setup() {
                const r = this.ownerDocument || this;
                const i = Z.access(r, t);
                i || r.addEventListener(e, n, !0), Z.access(r, t, (i || 0) + 1);
              },
              teardown() {
                const r = this.ownerDocument || this;
                const i = Z.access(r, t) - 1;
                i
                  ? Z.access(r, t, i)
                  : (r.removeEventListener(e, n, !0), Z.remove(r, t));
              },
            };
          });
      let mt;
      const vt = /\[\]$/;
      const yt = /\r?\n/g;
      const bt = /^(?:submit|button|image|reset|file)$/i;
      const _t = /^(?:input|select|textarea|keygen)/i;
      function wt(e, t, n, r) {
        let i;
        if (Array.isArray(t))
          T.each(t, function(t, i) {
            n || vt.test(e)
              ? r(e, i)
              : wt(
                  `${e}[${typeof i === 'object' && i != null ? t : ''}]`,
                  i,
                  n,
                  r
                );
          });
        else if (n || x(t) !== 'object') r(e, t);
        else for (i in t) wt(`${e}[${i}]`, t[i], n, r);
      }
      (T.param = function(e, t) {
        let n;
        const r = [];
        const i = function(e, t) {
          const n = y(t) ? t() : t;
          r[r.length] = `${encodeURIComponent(e)}=${encodeURIComponent(
            n == null ? '' : n
          )}`;
        };
        if (e == null) return '';
        if (Array.isArray(e) || (e.jquery && !T.isPlainObject(e)))
          T.each(e, function() {
            i(this.name, this.value);
          });
        else for (n in e) wt(n, e[n], t, i);
        return r.join('&');
      }),
        T.fn.extend({
          serialize() {
            return T.param(this.serializeArray());
          },
          serializeArray() {
            return this.map(function() {
              const e = T.prop(this, 'elements');
              return e ? T.makeArray(e) : this;
            })
              .filter(function() {
                const e = this.type;
                return (
                  this.name &&
                  !T(this).is(':disabled') &&
                  _t.test(this.nodeName) &&
                  !bt.test(e) &&
                  (this.checked || !pe.test(e))
                );
              })
              .map(function(e, t) {
                const n = T(this).val();
                return n == null
                  ? null
                  : Array.isArray(n)
                  ? T.map(n, function(e) {
                      return { name: t.name, value: e.replace(yt, '\r\n') };
                    })
                  : { name: t.name, value: n.replace(yt, '\r\n') };
              })
              .get();
          },
        }),
        T.fn.extend({
          wrapAll(e) {
            let t;
            return (
              this[0] &&
                (y(e) && (e = e.call(this[0])),
                (t = T(e, this[0].ownerDocument)
                  .eq(0)
                  .clone(!0)),
                this[0].parentNode && t.insertBefore(this[0]),
                t
                  .map(function() {
                    for (var e = this; e.firstElementChild; )
                      e = e.firstElementChild;
                    return e;
                  })
                  .append(this)),
              this
            );
          },
          wrapInner(e) {
            return y(e)
              ? this.each(function(t) {
                  T(this).wrapInner(e.call(this, t));
                })
              : this.each(function() {
                  const t = T(this);
                  const n = t.contents();
                  n.length ? n.wrapAll(e) : t.append(e);
                });
          },
          wrap(e) {
            const t = y(e);
            return this.each(function(n) {
              T(this).wrapAll(t ? e.call(this, n) : e);
            });
          },
          unwrap(e) {
            return (
              this.parent(e)
                .not('body')
                .each(function() {
                  T(this).replaceWith(this.childNodes);
                }),
              this
            );
          },
        }),
        (T.expr.pseudos.hidden = function(e) {
          return !T.expr.pseudos.visible(e);
        }),
        (T.expr.pseudos.visible = function(e) {
          return !!(
            e.offsetWidth ||
            e.offsetHeight ||
            e.getClientRects().length
          );
        }),
        (v.createHTMLDocument =
          (((mt = s.implementation.createHTMLDocument('').body).innerHTML =
            '<form></form><form></form>'),
          mt.childNodes.length === 2)),
        (T.parseHTML = function(e, t, n) {
          return typeof e !== 'string'
            ? []
            : (typeof t === 'boolean' && ((n = t), (t = !1)),
              t ||
                (v.createHTMLDocument
                  ? (((r = (t = s.implementation.createHTMLDocument(
                      ''
                    )).createElement('base')).href = s.location.href),
                    t.head.appendChild(r))
                  : (t = s)),
              (o = !n && []),
              (i = O.exec(e))
                ? [t.createElement(i[1])]
                : ((i = Ee([e], t, o)),
                  o && o.length && T(o).remove(),
                  T.merge([], i.childNodes)));
          let r;
          let i;
          let o;
        }),
        (T.offset = {
          setOffset(e, t, n) {
            let r;
            let i;
            let o;
            let s;
            let a;
            let l;
            const u = T.css(e, 'position');
            const c = T(e);
            const f = {};
            u === 'static' && (e.style.position = 'relative'),
              (a = c.offset()),
              (o = T.css(e, 'top')),
              (l = T.css(e, 'left')),
              (u === 'absolute' || u === 'fixed') &&
              (o + l).indexOf('auto') > -1
                ? ((s = (r = c.position()).top), (i = r.left))
                : ((s = parseFloat(o) || 0), (i = parseFloat(l) || 0)),
              y(t) && (t = t.call(e, n, T.extend({}, a))),
              t.top != null && (f.top = t.top - a.top + s),
              t.left != null && (f.left = t.left - a.left + i),
              'using' in t ? t.using.call(e, f) : c.css(f);
          },
        }),
        T.fn.extend({
          offset(e) {
            if (arguments.length)
              return void 0 === e
                ? this
                : this.each(function(t) {
                    T.offset.setOffset(this, e, t);
                  });
            let t;
            let n;
            const r = this[0];
            return r
              ? r.getClientRects().length
                ? ((t = r.getBoundingClientRect()),
                  (n = r.ownerDocument.defaultView),
                  { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset })
                : { top: 0, left: 0 }
              : void 0;
          },
          position() {
            if (this[0]) {
              let e;
              let t;
              let n;
              const r = this[0];
              let i = { top: 0, left: 0 };
              if (T.css(r, 'position') === 'fixed')
                t = r.getBoundingClientRect();
              else {
                for (
                  t = this.offset(),
                    n = r.ownerDocument,
                    e = r.offsetParent || n.documentElement;
                  e &&
                  (e === n.body || e === n.documentElement) &&
                  T.css(e, 'position') === 'static';

                )
                  e = e.parentNode;
                e &&
                  e !== r &&
                  e.nodeType === 1 &&
                  (((i = T(e).offset()).top += T.css(e, 'borderTopWidth', !0)),
                  (i.left += T.css(e, 'borderLeftWidth', !0)));
              }
              return {
                top: t.top - i.top - T.css(r, 'marginTop', !0),
                left: t.left - i.left - T.css(r, 'marginLeft', !0),
              };
            }
          },
          offsetParent() {
            return this.map(function() {
              for (
                var e = this.offsetParent;
                e && T.css(e, 'position') === 'static';

              )
                e = e.offsetParent;
              return e || ae;
            });
          },
        }),
        T.each(
          { scrollLeft: 'pageXOffset', scrollTop: 'pageYOffset' },
          function(e, t) {
            const n = t === 'pageYOffset';
            T.fn[e] = function(r) {
              return V(
                this,
                function(e, r, i) {
                  let o;
                  if (
                    (b(e) ? (o = e) : e.nodeType === 9 && (o = e.defaultView),
                    void 0 === i)
                  )
                    return o ? o[t] : e[r];
                  o
                    ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset)
                    : (e[r] = i);
                },
                e,
                r,
                arguments.length
              );
            };
          }
        ),
        T.each(['top', 'left'], function(e, t) {
          T.cssHooks[t] = Ve(v.pixelPosition, function(e, n) {
            if (n)
              return (n = ze(e, t)), Be.test(n) ? `${T(e).position()[t]}px` : n;
          });
        }),
        T.each({ Height: 'height', Width: 'width' }, function(e, t) {
          T.each(
            { padding: `inner${e}`, content: t, '': `outer${e}` },
            function(n, r) {
              T.fn[r] = function(i, o) {
                const s = arguments.length && (n || typeof i !== 'boolean');
                const a = n || (!0 === i || !0 === o ? 'margin' : 'border');
                return V(
                  this,
                  function(t, n, i) {
                    let o;
                    return b(t)
                      ? r.indexOf('outer') === 0
                        ? t[`inner${e}`]
                        : t.document.documentElement[`client${e}`]
                      : t.nodeType === 9
                      ? ((o = t.documentElement),
                        Math.max(
                          t.body[`scroll${e}`],
                          o[`scroll${e}`],
                          t.body[`offset${e}`],
                          o[`offset${e}`],
                          o[`client${e}`]
                        ))
                      : void 0 === i
                      ? T.css(t, n, a)
                      : T.style(t, n, i, a);
                  },
                  t,
                  s ? i : void 0,
                  s
                );
              };
            }
          );
        }),
        T.each(
          'blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu'.split(
            ' '
          ),
          function(e, t) {
            T.fn[t] = function(e, n) {
              return arguments.length > 0
                ? this.on(t, null, e, n)
                : this.trigger(t);
            };
          }
        ),
        T.fn.extend({
          hover(e, t) {
            return this.mouseenter(e).mouseleave(t || e);
          },
        }),
        T.fn.extend({
          bind(e, t, n) {
            return this.on(e, null, t, n);
          },
          unbind(e, t) {
            return this.off(e, null, t);
          },
          delegate(e, t, n, r) {
            return this.on(t, e, n, r);
          },
          undelegate(e, t, n) {
            return arguments.length === 1
              ? this.off(e, '**')
              : this.off(t, e || '**', n);
          },
        }),
        (T.proxy = function(e, t) {
          let n;
          let r;
          let i;
          if ((typeof t === 'string' && ((n = e[t]), (t = e), (e = n)), y(e)))
            return (
              (r = l.call(arguments, 2)),
              ((i = function() {
                return e.apply(t || this, r.concat(l.call(arguments)));
              }).guid = e.guid = e.guid || T.guid++),
              i
            );
        }),
        (T.holdReady = function(e) {
          e ? T.readyWait++ : T.ready(!0);
        }),
        (T.isArray = Array.isArray),
        (T.parseJSON = JSON.parse),
        (T.nodeName = I),
        (T.isFunction = y),
        (T.isWindow = b),
        (T.camelCase = Y),
        (T.type = x),
        (T.now = Date.now),
        (T.isNumeric = function(e) {
          const t = T.type(e);
          return (
            (t === 'number' || t === 'string') && !isNaN(e - parseFloat(e))
          );
        }),
        void 0 ===
          (r = function() {
            return T;
          }.apply(t, [])) || (e.exports = r);
      const xt = n.jQuery;
      const Et = n.$;
      return (
        (T.noConflict = function(e) {
          return (
            n.$ === T && (n.$ = Et), e && n.jQuery === T && (n.jQuery = xt), T
          );
        }),
        i || (n.jQuery = n.$ = T),
        T
      );
    });
  },
  function(e, t) {
    let n;
    n = (function() {
      return this;
    })();
    try {
      n = n || new Function('return this')();
    } catch (e) {
      typeof window === 'object' && (n = window);
    }
    e.exports = n;
  },
  function(e, t, n) {
    /*!
     * Bootstrap v4.3.1 (https://getbootstrap.com/)
     * Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
     */
    !(function(e, t, n) {
      function r(e, t) {
        for (let n = 0; n < t.length; n++) {
          const r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function i(e, t, n) {
        return t && r(e.prototype, t), n && r(e, n), e;
      }
      function o(e) {
        for (let t = 1; t < arguments.length; t++) {
          var n = arguments[t] != null ? arguments[t] : {};
          let r = Object.keys(n);
          typeof Object.getOwnPropertySymbols === 'function' &&
            (r = r.concat(
              Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable;
              })
            )),
            r.forEach(function(t) {
              let r;
              let i;
              let o;
              (r = e),
                (o = n[(i = t)]),
                i in r
                  ? Object.defineProperty(r, i, {
                      value: o,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (r[i] = o);
            });
        }
        return e;
      }
      (t = t && t.hasOwnProperty('default') ? t.default : t),
        (n = n && n.hasOwnProperty('default') ? n.default : n);
      const s = 'transitionend';
      var a = {
        TRANSITION_END: 'bsTransitionEnd',
        getUID(e) {
          for (; (e += ~~(1e6 * Math.random())), document.getElementById(e); );
          return e;
        },
        getSelectorFromElement(e) {
          let t = e.getAttribute('data-target');
          if (!t || t === '#') {
            const n = e.getAttribute('href');
            t = n && n !== '#' ? n.trim() : '';
          }
          try {
            return document.querySelector(t) ? t : null;
          } catch (e) {
            return null;
          }
        },
        getTransitionDurationFromElement(e) {
          if (!e) return 0;
          let n = t(e).css('transition-duration');
          let r = t(e).css('transition-delay');
          const i = parseFloat(n);
          const o = parseFloat(r);
          return i || o
            ? ((n = n.split(',')[0]),
              (r = r.split(',')[0]),
              1e3 * (parseFloat(n) + parseFloat(r)))
            : 0;
        },
        reflow(e) {
          return e.offsetHeight;
        },
        triggerTransitionEnd(e) {
          t(e).trigger(s);
        },
        supportsTransitionEnd() {
          return Boolean(s);
        },
        isElement(e) {
          return (e[0] || e).nodeType;
        },
        typeCheckConfig(e, t, n) {
          for (const r in n)
            if (Object.prototype.hasOwnProperty.call(n, r)) {
              const i = n[r];
              const o = t[r];
              const s =
                o && a.isElement(o)
                  ? 'element'
                  : ((l = o),
                    {}.toString
                      .call(l)
                      .match(/\s([a-z]+)/i)[1]
                      .toLowerCase());
              if (!new RegExp(i).test(s))
                throw new Error(
                  `${e.toUpperCase()}: Option "${r}" provided type "${s}" but expected type "${i}".`
                );
            }
          let l;
        },
        findShadowRoot(e) {
          if (!document.documentElement.attachShadow) return null;
          if (typeof e.getRootNode !== 'function')
            return e instanceof ShadowRoot
              ? e
              : e.parentNode
              ? a.findShadowRoot(e.parentNode)
              : null;
          const t = e.getRootNode();
          return t instanceof ShadowRoot ? t : null;
        },
      };
      (t.fn.emulateTransitionEnd = function(e) {
        const n = this;
        let r = !1;
        return (
          t(this).one(a.TRANSITION_END, function() {
            r = !0;
          }),
          setTimeout(function() {
            r || a.triggerTransitionEnd(n);
          }, e),
          this
        );
      }),
        (t.event.special[a.TRANSITION_END] = {
          bindType: s,
          delegateType: s,
          handle(e) {
            if (t(e.target).is(this))
              return e.handleObj.handler.apply(this, arguments);
          },
        });
      const l = 'alert';
      const u = 'bs.alert';
      const c = `.${u}`;
      const f = t.fn[l];
      const d = {
        CLOSE: `close${c}`,
        CLOSED: `closed${c}`,
        CLICK_DATA_API: `click${c}.data-api`,
      };
      const h = (function() {
        function e(e) {
          this._element = e;
        }
        const n = e.prototype;
        return (
          (n.close = function(e) {
            let t = this._element;
            e && (t = this._getRootElement(e)),
              this._triggerCloseEvent(t).isDefaultPrevented() ||
                this._removeElement(t);
          }),
          (n.dispose = function() {
            t.removeData(this._element, u), (this._element = null);
          }),
          (n._getRootElement = function(e) {
            const n = a.getSelectorFromElement(e);
            let r = !1;
            return (
              n && (r = document.querySelector(n)),
              r || (r = t(e).closest('.alert')[0]),
              r
            );
          }),
          (n._triggerCloseEvent = function(e) {
            const n = t.Event(d.CLOSE);
            return t(e).trigger(n), n;
          }),
          (n._removeElement = function(e) {
            const n = this;
            if ((t(e).removeClass('show'), t(e).hasClass('fade'))) {
              const r = a.getTransitionDurationFromElement(e);
              t(e)
                .one(a.TRANSITION_END, function(t) {
                  return n._destroyElement(e, t);
                })
                .emulateTransitionEnd(r);
            } else this._destroyElement(e);
          }),
          (n._destroyElement = function(e) {
            t(e)
              .detach()
              .trigger(d.CLOSED)
              .remove();
          }),
          (e._jQueryInterface = function(n) {
            return this.each(function() {
              const r = t(this);
              let i = r.data(u);
              i || ((i = new e(this)), r.data(u, i)),
                n === 'close' && i[n](this);
            });
          }),
          (e._handleDismiss = function(e) {
            return function(t) {
              t && t.preventDefault(), e.close(this);
            };
          }),
          i(e, null, [
            {
              key: 'VERSION',
              get() {
                return '4.3.1';
              },
            },
          ]),
          e
        );
      })();
      t(document).on(
        d.CLICK_DATA_API,
        '[data-dismiss="alert"]',
        h._handleDismiss(new h())
      ),
        (t.fn[l] = h._jQueryInterface),
        (t.fn[l].Constructor = h),
        (t.fn[l].noConflict = function() {
          return (t.fn[l] = f), h._jQueryInterface;
        });
      const p = 'button';
      const g = 'bs.button';
      const m = `.${g}`;
      const v = '.data-api';
      const y = t.fn[p];
      const b = 'active';
      const _ = '[data-toggle^="button"]';
      const w = '.btn';
      const x = {
        CLICK_DATA_API: `click${m}${v}`,
        FOCUS_BLUR_DATA_API: `focus${m}${v} blur${m}${v}`,
      };
      const E = (function() {
        function e(e) {
          this._element = e;
        }
        const n = e.prototype;
        return (
          (n.toggle = function() {
            let e = !0;
            let n = !0;
            const r = t(this._element).closest('[data-toggle="buttons"]')[0];
            if (r) {
              const i = this._element.querySelector(
                'input:not([type="hidden"])'
              );
              if (i) {
                if (i.type === 'radio')
                  if (i.checked && this._element.classList.contains(b)) e = !1;
                  else {
                    const o = r.querySelector('.active');
                    o && t(o).removeClass(b);
                  }
                if (e) {
                  if (
                    i.hasAttribute('disabled') ||
                    r.hasAttribute('disabled') ||
                    i.classList.contains('disabled') ||
                    r.classList.contains('disabled')
                  )
                    return;
                  (i.checked = !this._element.classList.contains(b)),
                    t(i).trigger('change');
                }
                i.focus(), (n = !1);
              }
            }
            n &&
              this._element.setAttribute(
                'aria-pressed',
                !this._element.classList.contains(b)
              ),
              e && t(this._element).toggleClass(b);
          }),
          (n.dispose = function() {
            t.removeData(this._element, g), (this._element = null);
          }),
          (e._jQueryInterface = function(n) {
            return this.each(function() {
              let r = t(this).data(g);
              r || ((r = new e(this)), t(this).data(g, r)),
                n === 'toggle' && r[n]();
            });
          }),
          i(e, null, [
            {
              key: 'VERSION',
              get() {
                return '4.3.1';
              },
            },
          ]),
          e
        );
      })();
      t(document)
        .on(x.CLICK_DATA_API, _, function(e) {
          e.preventDefault();
          let n = e.target;
          t(n).hasClass('btn') || (n = t(n).closest(w)),
            E._jQueryInterface.call(t(n), 'toggle');
        })
        .on(x.FOCUS_BLUR_DATA_API, _, function(e) {
          const n = t(e.target).closest(w)[0];
          t(n).toggleClass('focus', /^focus(in)?$/.test(e.type));
        }),
        (t.fn[p] = E._jQueryInterface),
        (t.fn[p].Constructor = E),
        (t.fn[p].noConflict = function() {
          return (t.fn[p] = y), E._jQueryInterface;
        });
      const T = 'carousel';
      const C = 'bs.carousel';
      const S = `.${C}`;
      const D = '.data-api';
      const A = t.fn[T];
      const N = {
        interval: 5e3,
        keyboard: !0,
        slide: !1,
        pause: 'hover',
        wrap: !0,
        touch: !0,
      };
      const k = {
        interval: '(number|boolean)',
        keyboard: 'boolean',
        slide: '(boolean|string)',
        pause: '(string|boolean)',
        wrap: 'boolean',
        touch: 'boolean',
      };
      const I = 'next';
      const O = 'prev';
      const L = {
        SLIDE: `slide${S}`,
        SLID: `slid${S}`,
        KEYDOWN: `keydown${S}`,
        MOUSEENTER: `mouseenter${S}`,
        MOUSELEAVE: `mouseleave${S}`,
        TOUCHSTART: `touchstart${S}`,
        TOUCHMOVE: `touchmove${S}`,
        TOUCHEND: `touchend${S}`,
        POINTERDOWN: `pointerdown${S}`,
        POINTERUP: `pointerup${S}`,
        DRAG_START: `dragstart${S}`,
        LOAD_DATA_API: `load${S}${D}`,
        CLICK_DATA_API: `click${S}${D}`,
      };
      const j = 'active';
      const P = '.active.carousel-item';
      const H = '.carousel-indicators';
      const q = { TOUCH: 'touch', PEN: 'pen' };
      const R = (function() {
        function e(e, t) {
          (this._items = null),
            (this._interval = null),
            (this._activeElement = null),
            (this._isPaused = !1),
            (this._isSliding = !1),
            (this.touchTimeout = null),
            (this.touchStartX = 0),
            (this.touchDeltaX = 0),
            (this._config = this._getConfig(t)),
            (this._element = e),
            (this._indicatorsElement = this._element.querySelector(H)),
            (this._touchSupported =
              'ontouchstart' in document.documentElement ||
              navigator.maxTouchPoints > 0),
            (this._pointerEvent = Boolean(
              window.PointerEvent || window.MSPointerEvent
            )),
            this._addEventListeners();
        }
        const n = e.prototype;
        return (
          (n.next = function() {
            this._isSliding || this._slide(I);
          }),
          (n.nextWhenVisible = function() {
            !document.hidden &&
              t(this._element).is(':visible') &&
              t(this._element).css('visibility') !== 'hidden' &&
              this.next();
          }),
          (n.prev = function() {
            this._isSliding || this._slide(O);
          }),
          (n.pause = function(e) {
            e || (this._isPaused = !0),
              this._element.querySelector(
                '.carousel-item-next, .carousel-item-prev'
              ) && (a.triggerTransitionEnd(this._element), this.cycle(!0)),
              clearInterval(this._interval),
              (this._interval = null);
          }),
          (n.cycle = function(e) {
            e || (this._isPaused = !1),
              this._interval &&
                (clearInterval(this._interval), (this._interval = null)),
              this._config.interval &&
                !this._isPaused &&
                (this._interval = setInterval(
                  (document.visibilityState
                    ? this.nextWhenVisible
                    : this.next
                  ).bind(this),
                  this._config.interval
                ));
          }),
          (n.to = function(e) {
            const n = this;
            this._activeElement = this._element.querySelector(P);
            const r = this._getItemIndex(this._activeElement);
            if (!(e > this._items.length - 1 || e < 0))
              if (this._isSliding)
                t(this._element).one(L.SLID, function() {
                  return n.to(e);
                });
              else {
                if (r === e) return this.pause(), void this.cycle();
                const i = r < e ? I : O;
                this._slide(i, this._items[e]);
              }
          }),
          (n.dispose = function() {
            t(this._element).off(S),
              t.removeData(this._element, C),
              (this._items = null),
              (this._config = null),
              (this._element = null),
              (this._interval = null),
              (this._isPaused = null),
              (this._isSliding = null),
              (this._activeElement = null),
              (this._indicatorsElement = null);
          }),
          (n._getConfig = function(e) {
            return (e = o({}, N, e)), a.typeCheckConfig(T, e, k), e;
          }),
          (n._handleSwipe = function() {
            const e = Math.abs(this.touchDeltaX);
            if (!(e <= 40)) {
              const t = e / this.touchDeltaX;
              t > 0 && this.prev(), t < 0 && this.next();
            }
          }),
          (n._addEventListeners = function() {
            const e = this;
            this._config.keyboard &&
              t(this._element).on(L.KEYDOWN, function(t) {
                return e._keydown(t);
              }),
              this._config.pause === 'hover' &&
                t(this._element)
                  .on(L.MOUSEENTER, function(t) {
                    return e.pause(t);
                  })
                  .on(L.MOUSELEAVE, function(t) {
                    return e.cycle(t);
                  }),
              this._config.touch && this._addTouchEventListeners();
          }),
          (n._addTouchEventListeners = function() {
            const e = this;
            if (this._touchSupported) {
              const n = function(t) {
                e._pointerEvent && q[t.originalEvent.pointerType.toUpperCase()]
                  ? (e.touchStartX = t.originalEvent.clientX)
                  : e._pointerEvent ||
                    (e.touchStartX = t.originalEvent.touches[0].clientX);
              };
              const r = function(t) {
                e._pointerEvent &&
                  q[t.originalEvent.pointerType.toUpperCase()] &&
                  (e.touchDeltaX = t.originalEvent.clientX - e.touchStartX),
                  e._handleSwipe(),
                  e._config.pause === 'hover' &&
                    (e.pause(),
                    e.touchTimeout && clearTimeout(e.touchTimeout),
                    (e.touchTimeout = setTimeout(function(t) {
                      return e.cycle(t);
                    }, 500 + e._config.interval)));
              };
              t(this._element.querySelectorAll('.carousel-item img')).on(
                L.DRAG_START,
                function(e) {
                  return e.preventDefault();
                }
              ),
                this._pointerEvent
                  ? (t(this._element).on(L.POINTERDOWN, function(e) {
                      return n(e);
                    }),
                    t(this._element).on(L.POINTERUP, function(e) {
                      return r(e);
                    }),
                    this._element.classList.add('pointer-event'))
                  : (t(this._element).on(L.TOUCHSTART, function(e) {
                      return n(e);
                    }),
                    t(this._element).on(L.TOUCHMOVE, function(t) {
                      let n;
                      (n = t).originalEvent.touches &&
                      n.originalEvent.touches.length > 1
                        ? (e.touchDeltaX = 0)
                        : (e.touchDeltaX =
                            n.originalEvent.touches[0].clientX - e.touchStartX);
                    }),
                    t(this._element).on(L.TOUCHEND, function(e) {
                      return r(e);
                    }));
            }
          }),
          (n._keydown = function(e) {
            if (!/input|textarea/i.test(e.target.tagName))
              switch (e.which) {
                case 37:
                  e.preventDefault(), this.prev();
                  break;
                case 39:
                  e.preventDefault(), this.next();
              }
          }),
          (n._getItemIndex = function(e) {
            return (
              (this._items =
                e && e.parentNode
                  ? [].slice.call(
                      e.parentNode.querySelectorAll('.carousel-item')
                    )
                  : []),
              this._items.indexOf(e)
            );
          }),
          (n._getItemByDirection = function(e, t) {
            const n = e === I;
            const r = e === O;
            const i = this._getItemIndex(t);
            const o = this._items.length - 1;
            if (((r && i === 0) || (n && i === o)) && !this._config.wrap)
              return t;
            const s = (i + (e === O ? -1 : 1)) % this._items.length;
            return s === -1
              ? this._items[this._items.length - 1]
              : this._items[s];
          }),
          (n._triggerSlideEvent = function(e, n) {
            const r = this._getItemIndex(e);
            const i = this._getItemIndex(this._element.querySelector(P));
            const o = t.Event(L.SLIDE, {
              relatedTarget: e,
              direction: n,
              from: i,
              to: r,
            });
            return t(this._element).trigger(o), o;
          }),
          (n._setActiveIndicatorElement = function(e) {
            if (this._indicatorsElement) {
              const n = [].slice.call(
                this._indicatorsElement.querySelectorAll('.active')
              );
              t(n).removeClass(j);
              const r = this._indicatorsElement.children[this._getItemIndex(e)];
              r && t(r).addClass(j);
            }
          }),
          (n._slide = function(e, n) {
            let r;
            let i;
            let o;
            const s = this;
            const l = this._element.querySelector(P);
            const u = this._getItemIndex(l);
            const c = n || (l && this._getItemByDirection(e, l));
            const f = this._getItemIndex(c);
            const d = Boolean(this._interval);
            if (
              ((o =
                e === I
                  ? ((r = 'carousel-item-left'),
                    (i = 'carousel-item-next'),
                    'left')
                  : ((r = 'carousel-item-right'),
                    (i = 'carousel-item-prev'),
                    'right')),
              c && t(c).hasClass(j))
            )
              this._isSliding = !1;
            else if (
              !this._triggerSlideEvent(c, o).isDefaultPrevented() &&
              l &&
              c
            ) {
              (this._isSliding = !0),
                d && this.pause(),
                this._setActiveIndicatorElement(c);
              const h = t.Event(L.SLID, {
                relatedTarget: c,
                direction: o,
                from: u,
                to: f,
              });
              if (t(this._element).hasClass('slide')) {
                t(c).addClass(i),
                  a.reflow(c),
                  t(l).addClass(r),
                  t(c).addClass(r);
                const p = parseInt(c.getAttribute('data-interval'), 10);
                this._config.interval = p
                  ? ((this._config.defaultInterval =
                      this._config.defaultInterval || this._config.interval),
                    p)
                  : this._config.defaultInterval || this._config.interval;
                const g = a.getTransitionDurationFromElement(l);
                t(l)
                  .one(a.TRANSITION_END, function() {
                    t(c)
                      .removeClass(`${r} ${i}`)
                      .addClass(j),
                      t(l).removeClass(`${j} ${i} ${r}`),
                      (s._isSliding = !1),
                      setTimeout(function() {
                        return t(s._element).trigger(h);
                      }, 0);
                  })
                  .emulateTransitionEnd(g);
              } else
                t(l).removeClass(j),
                  t(c).addClass(j),
                  (this._isSliding = !1),
                  t(this._element).trigger(h);
              d && this.cycle();
            }
          }),
          (e._jQueryInterface = function(n) {
            return this.each(function() {
              let r = t(this).data(C);
              let i = o({}, N, t(this).data());
              typeof n === 'object' && (i = o({}, i, n));
              const s = typeof n === 'string' ? n : i.slide;
              if (
                (r || ((r = new e(this, i)), t(this).data(C, r)),
                typeof n === 'number')
              )
                r.to(n);
              else if (typeof s === 'string') {
                if (void 0 === r[s])
                  throw new TypeError(`No method named "${s}"`);
                r[s]();
              } else i.interval && i.ride && (r.pause(), r.cycle());
            });
          }),
          (e._dataApiClickHandler = function(n) {
            const r = a.getSelectorFromElement(this);
            if (r) {
              const i = t(r)[0];
              if (i && t(i).hasClass('carousel')) {
                const s = o({}, t(i).data(), t(this).data());
                const l = this.getAttribute('data-slide-to');
                l && (s.interval = !1),
                  e._jQueryInterface.call(t(i), s),
                  l &&
                    t(i)
                      .data(C)
                      .to(l),
                  n.preventDefault();
              }
            }
          }),
          i(e, null, [
            {
              key: 'VERSION',
              get() {
                return '4.3.1';
              },
            },
            {
              key: 'Default',
              get() {
                return N;
              },
            },
          ]),
          e
        );
      })();
      t(document).on(
        L.CLICK_DATA_API,
        '[data-slide], [data-slide-to]',
        R._dataApiClickHandler
      ),
        t(window).on(L.LOAD_DATA_API, function() {
          for (
            let e = [].slice.call(
                document.querySelectorAll('[data-ride="carousel"]')
              ),
              n = 0,
              r = e.length;
            n < r;
            n++
          ) {
            const i = t(e[n]);
            R._jQueryInterface.call(i, i.data());
          }
        }),
        (t.fn[T] = R._jQueryInterface),
        (t.fn[T].Constructor = R),
        (t.fn[T].noConflict = function() {
          return (t.fn[T] = A), R._jQueryInterface;
        });
      const M = 'collapse';
      const W = 'bs.collapse';
      const F = `.${W}`;
      const B = t.fn[M];
      const U = { toggle: !0, parent: '' };
      const $ = { toggle: 'boolean', parent: '(string|element)' };
      const z = {
        SHOW: `show${F}`,
        SHOWN: `shown${F}`,
        HIDE: `hide${F}`,
        HIDDEN: `hidden${F}`,
        CLICK_DATA_API: `click${F}.data-api`,
      };
      const V = 'show';
      const K = 'collapse';
      const Q = 'collapsing';
      const X = 'collapsed';
      const Y = '[data-toggle="collapse"]';
      const G = (function() {
        function e(e, t) {
          (this._isTransitioning = !1),
            (this._element = e),
            (this._config = this._getConfig(t)),
            (this._triggerArray = [].slice.call(
              document.querySelectorAll(
                `[data-toggle="collapse"][href="#${e.id}"],[data-toggle="collapse"][data-target="#${e.id}"]`
              )
            ));
          for (
            let n = [].slice.call(document.querySelectorAll(Y)),
              r = 0,
              i = n.length;
            r < i;
            r++
          ) {
            const o = n[r];
            const s = a.getSelectorFromElement(o);
            const l = [].slice
              .call(document.querySelectorAll(s))
              .filter(function(t) {
                return t === e;
              });
            s !== null &&
              l.length > 0 &&
              ((this._selector = s), this._triggerArray.push(o));
          }
          (this._parent = this._config.parent ? this._getParent() : null),
            this._config.parent ||
              this._addAriaAndCollapsedClass(this._element, this._triggerArray),
            this._config.toggle && this.toggle();
        }
        const n = e.prototype;
        return (
          (n.toggle = function() {
            t(this._element).hasClass(V) ? this.hide() : this.show();
          }),
          (n.show = function() {
            let n;
            let r;
            const i = this;
            if (
              !(
                this._isTransitioning ||
                t(this._element).hasClass(V) ||
                (this._parent &&
                  (n = [].slice
                    .call(this._parent.querySelectorAll('.show, .collapsing'))
                    .filter(function(e) {
                      return typeof i._config.parent === 'string'
                        ? e.getAttribute('data-parent') === i._config.parent
                        : e.classList.contains(K);
                    })).length === 0 &&
                  (n = null),
                n &&
                  (r = t(n)
                    .not(this._selector)
                    .data(W)) &&
                  r._isTransitioning)
              )
            ) {
              const o = t.Event(z.SHOW);
              if ((t(this._element).trigger(o), !o.isDefaultPrevented())) {
                n &&
                  (e._jQueryInterface.call(t(n).not(this._selector), 'hide'),
                  r || t(n).data(W, null));
                const s = this._getDimension();
                t(this._element)
                  .removeClass(K)
                  .addClass(Q),
                  (this._element.style[s] = 0),
                  this._triggerArray.length &&
                    t(this._triggerArray)
                      .removeClass(X)
                      .attr('aria-expanded', !0),
                  this.setTransitioning(!0);
                const l = `scroll${s[0].toUpperCase() + s.slice(1)}`;
                const u = a.getTransitionDurationFromElement(this._element);
                t(this._element)
                  .one(a.TRANSITION_END, function() {
                    t(i._element)
                      .removeClass(Q)
                      .addClass(K)
                      .addClass(V),
                      (i._element.style[s] = ''),
                      i.setTransitioning(!1),
                      t(i._element).trigger(z.SHOWN);
                  })
                  .emulateTransitionEnd(u),
                  (this._element.style[s] = `${this._element[l]}px`);
              }
            }
          }),
          (n.hide = function() {
            const e = this;
            if (!this._isTransitioning && t(this._element).hasClass(V)) {
              const n = t.Event(z.HIDE);
              if ((t(this._element).trigger(n), !n.isDefaultPrevented())) {
                const r = this._getDimension();
                (this._element.style[r] = `${
                  this._element.getBoundingClientRect()[r]
                }px`),
                  a.reflow(this._element),
                  t(this._element)
                    .addClass(Q)
                    .removeClass(K)
                    .removeClass(V);
                const i = this._triggerArray.length;
                if (i > 0)
                  for (let o = 0; o < i; o++) {
                    const s = this._triggerArray[o];
                    const l = a.getSelectorFromElement(s);
                    l !== null &&
                      (t([].slice.call(document.querySelectorAll(l))).hasClass(
                        V
                      ) ||
                        t(s)
                          .addClass(X)
                          .attr('aria-expanded', !1));
                  }
                this.setTransitioning(!0), (this._element.style[r] = '');
                const u = a.getTransitionDurationFromElement(this._element);
                t(this._element)
                  .one(a.TRANSITION_END, function() {
                    e.setTransitioning(!1),
                      t(e._element)
                        .removeClass(Q)
                        .addClass(K)
                        .trigger(z.HIDDEN);
                  })
                  .emulateTransitionEnd(u);
              }
            }
          }),
          (n.setTransitioning = function(e) {
            this._isTransitioning = e;
          }),
          (n.dispose = function() {
            t.removeData(this._element, W),
              (this._config = null),
              (this._parent = null),
              (this._element = null),
              (this._triggerArray = null),
              (this._isTransitioning = null);
          }),
          (n._getConfig = function(e) {
            return (
              ((e = o({}, U, e)).toggle = Boolean(e.toggle)),
              a.typeCheckConfig(M, e, $),
              e
            );
          }),
          (n._getDimension = function() {
            return t(this._element).hasClass('width') ? 'width' : 'height';
          }),
          (n._getParent = function() {
            let n;
            const r = this;
            a.isElement(this._config.parent)
              ? ((n = this._config.parent),
                void 0 !== this._config.parent.jquery &&
                  (n = this._config.parent[0]))
              : (n = document.querySelector(this._config.parent));
            const i = `[data-toggle="collapse"][data-parent="${this._config.parent}"]`;
            const o = [].slice.call(n.querySelectorAll(i));
            return (
              t(o).each(function(t, n) {
                r._addAriaAndCollapsedClass(e._getTargetFromElement(n), [n]);
              }),
              n
            );
          }),
          (n._addAriaAndCollapsedClass = function(e, n) {
            const r = t(e).hasClass(V);
            n.length &&
              t(n)
                .toggleClass(X, !r)
                .attr('aria-expanded', r);
          }),
          (e._getTargetFromElement = function(e) {
            const t = a.getSelectorFromElement(e);
            return t ? document.querySelector(t) : null;
          }),
          (e._jQueryInterface = function(n) {
            return this.each(function() {
              const r = t(this);
              let i = r.data(W);
              const s = o({}, U, r.data(), typeof n === 'object' && n ? n : {});
              if (
                (!i && s.toggle && /show|hide/.test(n) && (s.toggle = !1),
                i || ((i = new e(this, s)), r.data(W, i)),
                typeof n === 'string')
              ) {
                if (void 0 === i[n])
                  throw new TypeError(`No method named "${n}"`);
                i[n]();
              }
            });
          }),
          i(e, null, [
            {
              key: 'VERSION',
              get() {
                return '4.3.1';
              },
            },
            {
              key: 'Default',
              get() {
                return U;
              },
            },
          ]),
          e
        );
      })();
      t(document).on(z.CLICK_DATA_API, Y, function(e) {
        e.currentTarget.tagName === 'A' && e.preventDefault();
        const n = t(this);
        const r = a.getSelectorFromElement(this);
        const i = [].slice.call(document.querySelectorAll(r));
        t(i).each(function() {
          const e = t(this);
          const r = e.data(W) ? 'toggle' : n.data();
          G._jQueryInterface.call(e, r);
        });
      }),
        (t.fn[M] = G._jQueryInterface),
        (t.fn[M].Constructor = G),
        (t.fn[M].noConflict = function() {
          return (t.fn[M] = B), G._jQueryInterface;
        });
      const J = 'dropdown';
      const Z = 'bs.dropdown';
      const ee = `.${Z}`;
      const te = '.data-api';
      const ne = t.fn[J];
      const re = new RegExp('38|40|27');
      const ie = {
        HIDE: `hide${ee}`,
        HIDDEN: `hidden${ee}`,
        SHOW: `show${ee}`,
        SHOWN: `shown${ee}`,
        CLICK: `click${ee}`,
        CLICK_DATA_API: `click${ee}${te}`,
        KEYDOWN_DATA_API: `keydown${ee}${te}`,
        KEYUP_DATA_API: `keyup${ee}${te}`,
      };
      const oe = 'disabled';
      const se = 'show';
      const ae = 'dropdown-menu-right';
      const le = '[data-toggle="dropdown"]';
      const ue = '.dropdown-menu';
      const ce = {
        offset: 0,
        flip: !0,
        boundary: 'scrollParent',
        reference: 'toggle',
        display: 'dynamic',
      };
      const fe = {
        offset: '(number|string|function)',
        flip: 'boolean',
        boundary: '(string|element)',
        reference: '(string|element)',
        display: 'string',
      };
      const de = (function() {
        function e(e, t) {
          (this._element = e),
            (this._popper = null),
            (this._config = this._getConfig(t)),
            (this._menu = this._getMenuElement()),
            (this._inNavbar = this._detectNavbar()),
            this._addEventListeners();
        }
        const r = e.prototype;
        return (
          (r.toggle = function() {
            if (!this._element.disabled && !t(this._element).hasClass(oe)) {
              const r = e._getParentFromElement(this._element);
              const i = t(this._menu).hasClass(se);
              if ((e._clearMenus(), !i)) {
                const o = { relatedTarget: this._element };
                const s = t.Event(ie.SHOW, o);
                if ((t(r).trigger(s), !s.isDefaultPrevented())) {
                  if (!this._inNavbar) {
                    if (void 0 === n)
                      throw new TypeError(
                        "Bootstrap's dropdowns require Popper.js (https://popper.js.org/)"
                      );
                    let l = this._element;
                    this._config.reference === 'parent'
                      ? (l = r)
                      : a.isElement(this._config.reference) &&
                        ((l = this._config.reference),
                        void 0 !== this._config.reference.jquery &&
                          (l = this._config.reference[0])),
                      this._config.boundary !== 'scrollParent' &&
                        t(r).addClass('position-static'),
                      (this._popper = new n(
                        l,
                        this._menu,
                        this._getPopperConfig()
                      ));
                  }
                  'ontouchstart' in document.documentElement &&
                    t(r).closest('.navbar-nav').length === 0 &&
                    t(document.body)
                      .children()
                      .on('mouseover', null, t.noop),
                    this._element.focus(),
                    this._element.setAttribute('aria-expanded', !0),
                    t(this._menu).toggleClass(se),
                    t(r)
                      .toggleClass(se)
                      .trigger(t.Event(ie.SHOWN, o));
                }
              }
            }
          }),
          (r.show = function() {
            if (
              !(
                this._element.disabled ||
                t(this._element).hasClass(oe) ||
                t(this._menu).hasClass(se)
              )
            ) {
              const n = { relatedTarget: this._element };
              const r = t.Event(ie.SHOW, n);
              const i = e._getParentFromElement(this._element);
              t(i).trigger(r),
                r.isDefaultPrevented() ||
                  (t(this._menu).toggleClass(se),
                  t(i)
                    .toggleClass(se)
                    .trigger(t.Event(ie.SHOWN, n)));
            }
          }),
          (r.hide = function() {
            if (
              !this._element.disabled &&
              !t(this._element).hasClass(oe) &&
              t(this._menu).hasClass(se)
            ) {
              const n = { relatedTarget: this._element };
              const r = t.Event(ie.HIDE, n);
              const i = e._getParentFromElement(this._element);
              t(i).trigger(r),
                r.isDefaultPrevented() ||
                  (t(this._menu).toggleClass(se),
                  t(i)
                    .toggleClass(se)
                    .trigger(t.Event(ie.HIDDEN, n)));
            }
          }),
          (r.dispose = function() {
            t.removeData(this._element, Z),
              t(this._element).off(ee),
              (this._element = null),
              (this._menu = null) !== this._popper &&
                (this._popper.destroy(), (this._popper = null));
          }),
          (r.update = function() {
            (this._inNavbar = this._detectNavbar()),
              this._popper !== null && this._popper.scheduleUpdate();
          }),
          (r._addEventListeners = function() {
            const e = this;
            t(this._element).on(ie.CLICK, function(t) {
              t.preventDefault(), t.stopPropagation(), e.toggle();
            });
          }),
          (r._getConfig = function(e) {
            return (
              (e = o({}, this.constructor.Default, t(this._element).data(), e)),
              a.typeCheckConfig(J, e, this.constructor.DefaultType),
              e
            );
          }),
          (r._getMenuElement = function() {
            if (!this._menu) {
              const t = e._getParentFromElement(this._element);
              t && (this._menu = t.querySelector(ue));
            }
            return this._menu;
          }),
          (r._getPlacement = function() {
            const e = t(this._element.parentNode);
            let n = 'bottom-start';
            return (
              e.hasClass('dropup')
                ? ((n = 'top-start'),
                  t(this._menu).hasClass(ae) && (n = 'top-end'))
                : e.hasClass('dropright')
                ? (n = 'right-start')
                : e.hasClass('dropleft')
                ? (n = 'left-start')
                : t(this._menu).hasClass(ae) && (n = 'bottom-end'),
              n
            );
          }),
          (r._detectNavbar = function() {
            return t(this._element).closest('.navbar').length > 0;
          }),
          (r._getOffset = function() {
            const e = this;
            const t = {};
            return (
              typeof this._config.offset === 'function'
                ? (t.fn = function(t) {
                    return (
                      (t.offsets = o(
                        {},
                        t.offsets,
                        e._config.offset(t.offsets, e._element) || {}
                      )),
                      t
                    );
                  })
                : (t.offset = this._config.offset),
              t
            );
          }),
          (r._getPopperConfig = function() {
            const e = {
              placement: this._getPlacement(),
              modifiers: {
                offset: this._getOffset(),
                flip: { enabled: this._config.flip },
                preventOverflow: { boundariesElement: this._config.boundary },
              },
            };
            return (
              this._config.display === 'static' &&
                (e.modifiers.applyStyle = { enabled: !1 }),
              e
            );
          }),
          (e._jQueryInterface = function(n) {
            return this.each(function() {
              let r = t(this).data(Z);
              if (
                (r ||
                  ((r = new e(this, typeof n === 'object' ? n : null)),
                  t(this).data(Z, r)),
                typeof n === 'string')
              ) {
                if (void 0 === r[n])
                  throw new TypeError(`No method named "${n}"`);
                r[n]();
              }
            });
          }),
          (e._clearMenus = function(n) {
            if (!n || (n.which !== 3 && (n.type !== 'keyup' || n.which === 9)))
              for (
                let r = [].slice.call(document.querySelectorAll(le)),
                  i = 0,
                  o = r.length;
                i < o;
                i++
              ) {
                const s = e._getParentFromElement(r[i]);
                const a = t(r[i]).data(Z);
                const l = { relatedTarget: r[i] };
                if ((n && n.type === 'click' && (l.clickEvent = n), a)) {
                  const u = a._menu;
                  if (
                    t(s).hasClass(se) &&
                    !(
                      n &&
                      ((n.type === 'click' &&
                        /input|textarea/i.test(n.target.tagName)) ||
                        (n.type === 'keyup' && n.which === 9)) &&
                      t.contains(s, n.target)
                    )
                  ) {
                    const c = t.Event(ie.HIDE, l);
                    t(s).trigger(c),
                      c.isDefaultPrevented() ||
                        ('ontouchstart' in document.documentElement &&
                          t(document.body)
                            .children()
                            .off('mouseover', null, t.noop),
                        r[i].setAttribute('aria-expanded', 'false'),
                        t(u).removeClass(se),
                        t(s)
                          .removeClass(se)
                          .trigger(t.Event(ie.HIDDEN, l)));
                  }
                }
              }
          }),
          (e._getParentFromElement = function(e) {
            let t;
            const n = a.getSelectorFromElement(e);
            return n && (t = document.querySelector(n)), t || e.parentNode;
          }),
          (e._dataApiKeydownHandler = function(n) {
            if (
              (/input|textarea/i.test(n.target.tagName)
                ? !(
                    n.which === 32 ||
                    (n.which !== 27 &&
                      ((n.which !== 40 && n.which !== 38) ||
                        t(n.target).closest(ue).length))
                  )
                : re.test(n.which)) &&
              (n.preventDefault(),
              n.stopPropagation(),
              !this.disabled && !t(this).hasClass(oe))
            ) {
              const r = e._getParentFromElement(this);
              const i = t(r).hasClass(se);
              if (i && (!i || (n.which !== 27 && n.which !== 32))) {
                const o = [].slice.call(
                  r.querySelectorAll(
                    '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)'
                  )
                );
                if (o.length !== 0) {
                  let s = o.indexOf(n.target);
                  n.which === 38 && s > 0 && s--,
                    n.which === 40 && s < o.length - 1 && s++,
                    s < 0 && (s = 0),
                    o[s].focus();
                }
              } else {
                if (n.which === 27) {
                  const a = r.querySelector(le);
                  t(a).trigger('focus');
                }
                t(this).trigger('click');
              }
            }
          }),
          i(e, null, [
            {
              key: 'VERSION',
              get() {
                return '4.3.1';
              },
            },
            {
              key: 'Default',
              get() {
                return ce;
              },
            },
            {
              key: 'DefaultType',
              get() {
                return fe;
              },
            },
          ]),
          e
        );
      })();
      t(document)
        .on(ie.KEYDOWN_DATA_API, le, de._dataApiKeydownHandler)
        .on(ie.KEYDOWN_DATA_API, ue, de._dataApiKeydownHandler)
        .on(`${ie.CLICK_DATA_API} ${ie.KEYUP_DATA_API}`, de._clearMenus)
        .on(ie.CLICK_DATA_API, le, function(e) {
          e.preventDefault(),
            e.stopPropagation(),
            de._jQueryInterface.call(t(this), 'toggle');
        })
        .on(ie.CLICK_DATA_API, '.dropdown form', function(e) {
          e.stopPropagation();
        }),
        (t.fn[J] = de._jQueryInterface),
        (t.fn[J].Constructor = de),
        (t.fn[J].noConflict = function() {
          return (t.fn[J] = ne), de._jQueryInterface;
        });
      const he = 'modal';
      const pe = 'bs.modal';
      const ge = `.${pe}`;
      const me = t.fn[he];
      const ve = { backdrop: !0, keyboard: !0, focus: !0, show: !0 };
      const ye = {
        backdrop: '(boolean|string)',
        keyboard: 'boolean',
        focus: 'boolean',
        show: 'boolean',
      };
      const be = {
        HIDE: `hide${ge}`,
        HIDDEN: `hidden${ge}`,
        SHOW: `show${ge}`,
        SHOWN: `shown${ge}`,
        FOCUSIN: `focusin${ge}`,
        RESIZE: `resize${ge}`,
        CLICK_DISMISS: `click.dismiss${ge}`,
        KEYDOWN_DISMISS: `keydown.dismiss${ge}`,
        MOUSEUP_DISMISS: `mouseup.dismiss${ge}`,
        MOUSEDOWN_DISMISS: `mousedown.dismiss${ge}`,
        CLICK_DATA_API: `click${ge}.data-api`,
      };
      const _e = 'modal-open';
      const we = 'fade';
      const xe = 'show';
      const Ee = '.modal-dialog';
      const Te = '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top';
      const Ce = '.sticky-top';
      const Se = (function() {
        function e(e, t) {
          (this._config = this._getConfig(t)),
            (this._element = e),
            (this._dialog = e.querySelector(Ee)),
            (this._backdrop = null),
            (this._isShown = !1),
            (this._isBodyOverflowing = !1),
            (this._ignoreBackdropClick = !1),
            (this._isTransitioning = !1),
            (this._scrollbarWidth = 0);
        }
        const n = e.prototype;
        return (
          (n.toggle = function(e) {
            return this._isShown ? this.hide() : this.show(e);
          }),
          (n.show = function(e) {
            const n = this;
            if (!this._isShown && !this._isTransitioning) {
              t(this._element).hasClass(we) && (this._isTransitioning = !0);
              const r = t.Event(be.SHOW, { relatedTarget: e });
              t(this._element).trigger(r),
                this._isShown ||
                  r.isDefaultPrevented() ||
                  ((this._isShown = !0),
                  this._checkScrollbar(),
                  this._setScrollbar(),
                  this._adjustDialog(),
                  this._setEscapeEvent(),
                  this._setResizeEvent(),
                  t(this._element).on(
                    be.CLICK_DISMISS,
                    '[data-dismiss="modal"]',
                    function(e) {
                      return n.hide(e);
                    }
                  ),
                  t(this._dialog).on(be.MOUSEDOWN_DISMISS, function() {
                    t(n._element).one(be.MOUSEUP_DISMISS, function(e) {
                      t(e.target).is(n._element) &&
                        (n._ignoreBackdropClick = !0);
                    });
                  }),
                  this._showBackdrop(function() {
                    return n._showElement(e);
                  }));
            }
          }),
          (n.hide = function(e) {
            const n = this;
            if (
              (e && e.preventDefault(), this._isShown && !this._isTransitioning)
            ) {
              const r = t.Event(be.HIDE);
              if (
                (t(this._element).trigger(r),
                this._isShown && !r.isDefaultPrevented())
              ) {
                this._isShown = !1;
                const i = t(this._element).hasClass(we);
                if (
                  (i && (this._isTransitioning = !0),
                  this._setEscapeEvent(),
                  this._setResizeEvent(),
                  t(document).off(be.FOCUSIN),
                  t(this._element).removeClass(xe),
                  t(this._element).off(be.CLICK_DISMISS),
                  t(this._dialog).off(be.MOUSEDOWN_DISMISS),
                  i)
                ) {
                  const o = a.getTransitionDurationFromElement(this._element);
                  t(this._element)
                    .one(a.TRANSITION_END, function(e) {
                      return n._hideModal(e);
                    })
                    .emulateTransitionEnd(o);
                } else this._hideModal();
              }
            }
          }),
          (n.dispose = function() {
            [window, this._element, this._dialog].forEach(function(e) {
              return t(e).off(ge);
            }),
              t(document).off(be.FOCUSIN),
              t.removeData(this._element, pe),
              (this._config = null),
              (this._element = null),
              (this._dialog = null),
              (this._backdrop = null),
              (this._isShown = null),
              (this._isBodyOverflowing = null),
              (this._ignoreBackdropClick = null),
              (this._isTransitioning = null),
              (this._scrollbarWidth = null);
          }),
          (n.handleUpdate = function() {
            this._adjustDialog();
          }),
          (n._getConfig = function(e) {
            return (e = o({}, ve, e)), a.typeCheckConfig(he, e, ye), e;
          }),
          (n._showElement = function(e) {
            const n = this;
            const r = t(this._element).hasClass(we);
            (this._element.parentNode &&
              this._element.parentNode.nodeType === Node.ELEMENT_NODE) ||
              document.body.appendChild(this._element),
              (this._element.style.display = 'block'),
              this._element.removeAttribute('aria-hidden'),
              this._element.setAttribute('aria-modal', !0),
              t(this._dialog).hasClass('modal-dialog-scrollable')
                ? (this._dialog.querySelector('.modal-body').scrollTop = 0)
                : (this._element.scrollTop = 0),
              r && a.reflow(this._element),
              t(this._element).addClass(xe),
              this._config.focus && this._enforceFocus();
            const i = t.Event(be.SHOWN, { relatedTarget: e });
            const o = function() {
              n._config.focus && n._element.focus(),
                (n._isTransitioning = !1),
                t(n._element).trigger(i);
            };
            if (r) {
              const s = a.getTransitionDurationFromElement(this._dialog);
              t(this._dialog)
                .one(a.TRANSITION_END, o)
                .emulateTransitionEnd(s);
            } else o();
          }),
          (n._enforceFocus = function() {
            const e = this;
            t(document)
              .off(be.FOCUSIN)
              .on(be.FOCUSIN, function(n) {
                document !== n.target &&
                  e._element !== n.target &&
                  t(e._element).has(n.target).length === 0 &&
                  e._element.focus();
              });
          }),
          (n._setEscapeEvent = function() {
            const e = this;
            this._isShown && this._config.keyboard
              ? t(this._element).on(be.KEYDOWN_DISMISS, function(t) {
                  t.which === 27 && (t.preventDefault(), e.hide());
                })
              : this._isShown || t(this._element).off(be.KEYDOWN_DISMISS);
          }),
          (n._setResizeEvent = function() {
            const e = this;
            this._isShown
              ? t(window).on(be.RESIZE, function(t) {
                  return e.handleUpdate(t);
                })
              : t(window).off(be.RESIZE);
          }),
          (n._hideModal = function() {
            const e = this;
            (this._element.style.display = 'none'),
              this._element.setAttribute('aria-hidden', !0),
              this._element.removeAttribute('aria-modal'),
              (this._isTransitioning = !1),
              this._showBackdrop(function() {
                t(document.body).removeClass(_e),
                  e._resetAdjustments(),
                  e._resetScrollbar(),
                  t(e._element).trigger(be.HIDDEN);
              });
          }),
          (n._removeBackdrop = function() {
            this._backdrop &&
              (t(this._backdrop).remove(), (this._backdrop = null));
          }),
          (n._showBackdrop = function(e) {
            const n = this;
            const r = t(this._element).hasClass(we) ? we : '';
            if (this._isShown && this._config.backdrop) {
              if (
                ((this._backdrop = document.createElement('div')),
                (this._backdrop.className = 'modal-backdrop'),
                r && this._backdrop.classList.add(r),
                t(this._backdrop).appendTo(document.body),
                t(this._element).on(be.CLICK_DISMISS, function(e) {
                  n._ignoreBackdropClick
                    ? (n._ignoreBackdropClick = !1)
                    : e.target === e.currentTarget &&
                      (n._config.backdrop === 'static'
                        ? n._element.focus()
                        : n.hide());
                }),
                r && a.reflow(this._backdrop),
                t(this._backdrop).addClass(xe),
                !e)
              )
                return;
              if (!r) return void e();
              const i = a.getTransitionDurationFromElement(this._backdrop);
              t(this._backdrop)
                .one(a.TRANSITION_END, e)
                .emulateTransitionEnd(i);
            } else if (!this._isShown && this._backdrop) {
              t(this._backdrop).removeClass(xe);
              const o = function() {
                n._removeBackdrop(), e && e();
              };
              if (t(this._element).hasClass(we)) {
                const s = a.getTransitionDurationFromElement(this._backdrop);
                t(this._backdrop)
                  .one(a.TRANSITION_END, o)
                  .emulateTransitionEnd(s);
              } else o();
            } else e && e();
          }),
          (n._adjustDialog = function() {
            const e =
              this._element.scrollHeight >
              document.documentElement.clientHeight;
            !this._isBodyOverflowing &&
              e &&
              (this._element.style.paddingLeft = `${this._scrollbarWidth}px`),
              this._isBodyOverflowing &&
                !e &&
                (this._element.style.paddingRight = `${this._scrollbarWidth}px`);
          }),
          (n._resetAdjustments = function() {
            (this._element.style.paddingLeft = ''),
              (this._element.style.paddingRight = '');
          }),
          (n._checkScrollbar = function() {
            const e = document.body.getBoundingClientRect();
            (this._isBodyOverflowing = e.left + e.right < window.innerWidth),
              (this._scrollbarWidth = this._getScrollbarWidth());
          }),
          (n._setScrollbar = function() {
            const e = this;
            if (this._isBodyOverflowing) {
              const n = [].slice.call(document.querySelectorAll(Te));
              const r = [].slice.call(document.querySelectorAll(Ce));
              t(n).each(function(n, r) {
                const i = r.style.paddingRight;
                const o = t(r).css('padding-right');
                t(r)
                  .data('padding-right', i)
                  .css(
                    'padding-right',
                    `${parseFloat(o) + e._scrollbarWidth}px`
                  );
              }),
                t(r).each(function(n, r) {
                  const i = r.style.marginRight;
                  const o = t(r).css('margin-right');
                  t(r)
                    .data('margin-right', i)
                    .css(
                      'margin-right',
                      `${parseFloat(o) - e._scrollbarWidth}px`
                    );
                });
              const i = document.body.style.paddingRight;
              const o = t(document.body).css('padding-right');
              t(document.body)
                .data('padding-right', i)
                .css(
                  'padding-right',
                  `${parseFloat(o) + this._scrollbarWidth}px`
                );
            }
            t(document.body).addClass(_e);
          }),
          (n._resetScrollbar = function() {
            const e = [].slice.call(document.querySelectorAll(Te));
            t(e).each(function(e, n) {
              const r = t(n).data('padding-right');
              t(n).removeData('padding-right'),
                (n.style.paddingRight = r || '');
            });
            const n = [].slice.call(document.querySelectorAll(`${Ce}`));
            t(n).each(function(e, n) {
              const r = t(n).data('margin-right');
              void 0 !== r &&
                t(n)
                  .css('margin-right', r)
                  .removeData('margin-right');
            });
            const r = t(document.body).data('padding-right');
            t(document.body).removeData('padding-right'),
              (document.body.style.paddingRight = r || '');
          }),
          (n._getScrollbarWidth = function() {
            const e = document.createElement('div');
            (e.className = 'modal-scrollbar-measure'),
              document.body.appendChild(e);
            const t = e.getBoundingClientRect().width - e.clientWidth;
            return document.body.removeChild(e), t;
          }),
          (e._jQueryInterface = function(n, r) {
            return this.each(function() {
              let i = t(this).data(pe);
              const s = o(
                {},
                ve,
                t(this).data(),
                typeof n === 'object' && n ? n : {}
              );
              if (
                (i || ((i = new e(this, s)), t(this).data(pe, i)),
                typeof n === 'string')
              ) {
                if (void 0 === i[n])
                  throw new TypeError(`No method named "${n}"`);
                i[n](r);
              } else s.show && i.show(r);
            });
          }),
          i(e, null, [
            {
              key: 'VERSION',
              get() {
                return '4.3.1';
              },
            },
            {
              key: 'Default',
              get() {
                return ve;
              },
            },
          ]),
          e
        );
      })();
      t(document).on(be.CLICK_DATA_API, '[data-toggle="modal"]', function(e) {
        let n;
        const r = this;
        const i = a.getSelectorFromElement(this);
        i && (n = document.querySelector(i));
        const s = t(n).data(pe) ? 'toggle' : o({}, t(n).data(), t(this).data());
        (this.tagName !== 'A' && this.tagName !== 'AREA') || e.preventDefault();
        var l = t(n).one(be.SHOW, function(e) {
          e.isDefaultPrevented() ||
            l.one(be.HIDDEN, function() {
              t(r).is(':visible') && r.focus();
            });
        });
        Se._jQueryInterface.call(t(n), s, this);
      }),
        (t.fn[he] = Se._jQueryInterface),
        (t.fn[he].Constructor = Se),
        (t.fn[he].noConflict = function() {
          return (t.fn[he] = me), Se._jQueryInterface;
        });
      const De = [
        'background',
        'cite',
        'href',
        'itemtype',
        'longdesc',
        'poster',
        'src',
        'xlink:href',
      ];
      const Ae = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:\/?#]*(?:[\/?#]|$))/gi;
      const Ne = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i;
      function ke(e, t, n) {
        if (e.length === 0) return e;
        if (n && typeof n === 'function') return n(e);
        for (
          var r = new window.DOMParser().parseFromString(e, 'text/html'),
            i = Object.keys(t),
            o = [].slice.call(r.body.querySelectorAll('*')),
            s = function(e, n) {
              const r = o[e];
              const s = r.nodeName.toLowerCase();
              if (i.indexOf(r.nodeName.toLowerCase()) === -1)
                return r.parentNode.removeChild(r), 'continue';
              const a = [].slice.call(r.attributes);
              const l = [].concat(t['*'] || [], t[s] || []);
              a.forEach(function(e) {
                (function(e, t) {
                  const n = e.nodeName.toLowerCase();
                  if (t.indexOf(n) !== -1)
                    return (
                      De.indexOf(n) === -1 ||
                      Boolean(e.nodeValue.match(Ae) || e.nodeValue.match(Ne))
                    );
                  for (
                    let r = t.filter(function(e) {
                        return e instanceof RegExp;
                      }),
                      i = 0,
                      o = r.length;
                    i < o;
                    i++
                  )
                    if (n.match(r[i])) return !0;
                  return !1;
                })(e, l) || r.removeAttribute(e.nodeName);
              });
            },
            a = 0,
            l = o.length;
          a < l;
          a++
        )
          s(a);
        return r.body.innerHTML;
      }
      const Ie = 'tooltip';
      const Oe = 'bs.tooltip';
      const Le = `.${Oe}`;
      const je = t.fn[Ie];
      const Pe = 'bs-tooltip';
      const He = new RegExp(`(^|\\s)${Pe}\\S+`, 'g');
      const qe = ['sanitize', 'whiteList', 'sanitizeFn'];
      const Re = {
        animation: 'boolean',
        template: 'string',
        title: '(string|element|function)',
        trigger: 'string',
        delay: '(number|object)',
        html: 'boolean',
        selector: '(string|boolean)',
        placement: '(string|function)',
        offset: '(number|string|function)',
        container: '(string|element|boolean)',
        fallbackPlacement: '(string|array)',
        boundary: '(string|element)',
        sanitize: 'boolean',
        sanitizeFn: '(null|function)',
        whiteList: 'object',
      };
      const Me = {
        AUTO: 'auto',
        TOP: 'top',
        RIGHT: 'right',
        BOTTOM: 'bottom',
        LEFT: 'left',
      };
      const We = {
        animation: !0,
        template:
          '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: 'hover focus',
        title: '',
        delay: 0,
        html: !1,
        selector: !1,
        placement: 'top',
        offset: 0,
        container: !1,
        fallbackPlacement: 'flip',
        boundary: 'scrollParent',
        sanitize: !0,
        sanitizeFn: null,
        whiteList: {
          '*': ['class', 'dir', 'id', 'lang', 'role', /^aria-[\w-]*$/i],
          a: ['target', 'href', 'title', 'rel'],
          area: [],
          b: [],
          br: [],
          col: [],
          code: [],
          div: [],
          em: [],
          hr: [],
          h1: [],
          h2: [],
          h3: [],
          h4: [],
          h5: [],
          h6: [],
          i: [],
          img: ['src', 'alt', 'title', 'width', 'height'],
          li: [],
          ol: [],
          p: [],
          pre: [],
          s: [],
          small: [],
          span: [],
          sub: [],
          sup: [],
          strong: [],
          u: [],
          ul: [],
        },
      };
      const Fe = 'show';
      const Be = {
        HIDE: `hide${Le}`,
        HIDDEN: `hidden${Le}`,
        SHOW: `show${Le}`,
        SHOWN: `shown${Le}`,
        INSERTED: `inserted${Le}`,
        CLICK: `click${Le}`,
        FOCUSIN: `focusin${Le}`,
        FOCUSOUT: `focusout${Le}`,
        MOUSEENTER: `mouseenter${Le}`,
        MOUSELEAVE: `mouseleave${Le}`,
      };
      const Ue = 'fade';
      const $e = 'show';
      const ze = 'hover';
      const Ve = 'focus';
      const Ke = (function() {
        function e(e, t) {
          if (void 0 === n)
            throw new TypeError(
              "Bootstrap's tooltips require Popper.js (https://popper.js.org/)"
            );
          (this._isEnabled = !0),
            (this._timeout = 0),
            (this._hoverState = ''),
            (this._activeTrigger = {}),
            (this._popper = null),
            (this.element = e),
            (this.config = this._getConfig(t)),
            (this.tip = null),
            this._setListeners();
        }
        const r = e.prototype;
        return (
          (r.enable = function() {
            this._isEnabled = !0;
          }),
          (r.disable = function() {
            this._isEnabled = !1;
          }),
          (r.toggleEnabled = function() {
            this._isEnabled = !this._isEnabled;
          }),
          (r.toggle = function(e) {
            if (this._isEnabled)
              if (e) {
                const n = this.constructor.DATA_KEY;
                let r = t(e.currentTarget).data(n);
                r ||
                  ((r = new this.constructor(
                    e.currentTarget,
                    this._getDelegateConfig()
                  )),
                  t(e.currentTarget).data(n, r)),
                  (r._activeTrigger.click = !r._activeTrigger.click),
                  r._isWithActiveTrigger()
                    ? r._enter(null, r)
                    : r._leave(null, r);
              } else {
                if (t(this.getTipElement()).hasClass($e))
                  return void this._leave(null, this);
                this._enter(null, this);
              }
          }),
          (r.dispose = function() {
            clearTimeout(this._timeout),
              t.removeData(this.element, this.constructor.DATA_KEY),
              t(this.element).off(this.constructor.EVENT_KEY),
              t(this.element)
                .closest('.modal')
                .off('hide.bs.modal'),
              this.tip && t(this.tip).remove(),
              (this._isEnabled = null),
              (this._timeout = null),
              (this._hoverState = null),
              (this._activeTrigger = null) !== this._popper &&
                this._popper.destroy(),
              (this._popper = null),
              (this.element = null),
              (this.config = null),
              (this.tip = null);
          }),
          (r.show = function() {
            const e = this;
            if (t(this.element).css('display') === 'none')
              throw new Error('Please use show on visible elements');
            const r = t.Event(this.constructor.Event.SHOW);
            if (this.isWithContent() && this._isEnabled) {
              t(this.element).trigger(r);
              const i = a.findShadowRoot(this.element);
              const o = t.contains(
                i !== null ? i : this.element.ownerDocument.documentElement,
                this.element
              );
              if (r.isDefaultPrevented() || !o) return;
              const s = this.getTipElement();
              const l = a.getUID(this.constructor.NAME);
              s.setAttribute('id', l),
                this.element.setAttribute('aria-describedby', l),
                this.setContent(),
                this.config.animation && t(s).addClass(Ue);
              const u =
                typeof this.config.placement === 'function'
                  ? this.config.placement.call(this, s, this.element)
                  : this.config.placement;
              const c = this._getAttachment(u);
              this.addAttachmentClass(c);
              const f = this._getContainer();
              t(s).data(this.constructor.DATA_KEY, this),
                t.contains(
                  this.element.ownerDocument.documentElement,
                  this.tip
                ) || t(s).appendTo(f),
                t(this.element).trigger(this.constructor.Event.INSERTED),
                (this._popper = new n(this.element, s, {
                  placement: c,
                  modifiers: {
                    offset: this._getOffset(),
                    flip: { behavior: this.config.fallbackPlacement },
                    arrow: { element: '.arrow' },
                    preventOverflow: {
                      boundariesElement: this.config.boundary,
                    },
                  },
                  onCreate(t) {
                    t.originalPlacement !== t.placement &&
                      e._handlePopperPlacementChange(t);
                  },
                  onUpdate(t) {
                    return e._handlePopperPlacementChange(t);
                  },
                })),
                t(s).addClass($e),
                'ontouchstart' in document.documentElement &&
                  t(document.body)
                    .children()
                    .on('mouseover', null, t.noop);
              const d = function() {
                e.config.animation && e._fixTransition();
                const n = e._hoverState;
                (e._hoverState = null),
                  t(e.element).trigger(e.constructor.Event.SHOWN),
                  n === 'out' && e._leave(null, e);
              };
              if (t(this.tip).hasClass(Ue)) {
                const h = a.getTransitionDurationFromElement(this.tip);
                t(this.tip)
                  .one(a.TRANSITION_END, d)
                  .emulateTransitionEnd(h);
              } else d();
            }
          }),
          (r.hide = function(e) {
            const n = this;
            const r = this.getTipElement();
            const i = t.Event(this.constructor.Event.HIDE);
            const o = function() {
              n._hoverState !== Fe &&
                r.parentNode &&
                r.parentNode.removeChild(r),
                n._cleanTipClass(),
                n.element.removeAttribute('aria-describedby'),
                t(n.element).trigger(n.constructor.Event.HIDDEN),
                n._popper !== null && n._popper.destroy(),
                e && e();
            };
            if ((t(this.element).trigger(i), !i.isDefaultPrevented())) {
              if (
                (t(r).removeClass($e),
                'ontouchstart' in document.documentElement &&
                  t(document.body)
                    .children()
                    .off('mouseover', null, t.noop),
                (this._activeTrigger.click = !1),
                (this._activeTrigger[Ve] = !1),
                (this._activeTrigger[ze] = !1),
                t(this.tip).hasClass(Ue))
              ) {
                const s = a.getTransitionDurationFromElement(r);
                t(r)
                  .one(a.TRANSITION_END, o)
                  .emulateTransitionEnd(s);
              } else o();
              this._hoverState = '';
            }
          }),
          (r.update = function() {
            this._popper !== null && this._popper.scheduleUpdate();
          }),
          (r.isWithContent = function() {
            return Boolean(this.getTitle());
          }),
          (r.addAttachmentClass = function(e) {
            t(this.getTipElement()).addClass(`${Pe}-${e}`);
          }),
          (r.getTipElement = function() {
            return (
              (this.tip = this.tip || t(this.config.template)[0]), this.tip
            );
          }),
          (r.setContent = function() {
            const e = this.getTipElement();
            this.setElementContent(
              t(e.querySelectorAll('.tooltip-inner')),
              this.getTitle()
            ),
              t(e).removeClass(`${Ue} ${$e}`);
          }),
          (r.setElementContent = function(e, n) {
            typeof n !== 'object' || (!n.nodeType && !n.jquery)
              ? this.config.html
                ? (this.config.sanitize &&
                    (n = ke(n, this.config.whiteList, this.config.sanitizeFn)),
                  e.html(n))
                : e.text(n)
              : this.config.html
              ? t(n)
                  .parent()
                  .is(e) || e.empty().append(n)
              : e.text(t(n).text());
          }),
          (r.getTitle = function() {
            let e = this.element.getAttribute('data-original-title');
            return (
              e ||
                (e =
                  typeof this.config.title === 'function'
                    ? this.config.title.call(this.element)
                    : this.config.title),
              e
            );
          }),
          (r._getOffset = function() {
            const e = this;
            const t = {};
            return (
              typeof this.config.offset === 'function'
                ? (t.fn = function(t) {
                    return (
                      (t.offsets = o(
                        {},
                        t.offsets,
                        e.config.offset(t.offsets, e.element) || {}
                      )),
                      t
                    );
                  })
                : (t.offset = this.config.offset),
              t
            );
          }),
          (r._getContainer = function() {
            return !1 === this.config.container
              ? document.body
              : a.isElement(this.config.container)
              ? t(this.config.container)
              : t(document).find(this.config.container);
          }),
          (r._getAttachment = function(e) {
            return Me[e.toUpperCase()];
          }),
          (r._setListeners = function() {
            const e = this;
            this.config.trigger.split(' ').forEach(function(n) {
              if (n === 'click')
                t(e.element).on(
                  e.constructor.Event.CLICK,
                  e.config.selector,
                  function(t) {
                    return e.toggle(t);
                  }
                );
              else if (n !== 'manual') {
                const r =
                  n === ze
                    ? e.constructor.Event.MOUSEENTER
                    : e.constructor.Event.FOCUSIN;
                const i =
                  n === ze
                    ? e.constructor.Event.MOUSELEAVE
                    : e.constructor.Event.FOCUSOUT;
                t(e.element)
                  .on(r, e.config.selector, function(t) {
                    return e._enter(t);
                  })
                  .on(i, e.config.selector, function(t) {
                    return e._leave(t);
                  });
              }
            }),
              t(this.element)
                .closest('.modal')
                .on('hide.bs.modal', function() {
                  e.element && e.hide();
                }),
              this.config.selector
                ? (this.config = o({}, this.config, {
                    trigger: 'manual',
                    selector: '',
                  }))
                : this._fixTitle();
          }),
          (r._fixTitle = function() {
            const e = typeof this.element.getAttribute('data-original-title');
            (this.element.getAttribute('title') || e !== 'string') &&
              (this.element.setAttribute(
                'data-original-title',
                this.element.getAttribute('title') || ''
              ),
              this.element.setAttribute('title', ''));
          }),
          (r._enter = function(e, n) {
            const r = this.constructor.DATA_KEY;
            (n = n || t(e.currentTarget).data(r)) ||
              ((n = new this.constructor(
                e.currentTarget,
                this._getDelegateConfig()
              )),
              t(e.currentTarget).data(r, n)),
              e && (n._activeTrigger[e.type === 'focusin' ? Ve : ze] = !0),
              t(n.getTipElement()).hasClass($e) || n._hoverState === Fe
                ? (n._hoverState = Fe)
                : (clearTimeout(n._timeout),
                  (n._hoverState = Fe),
                  n.config.delay && n.config.delay.show
                    ? (n._timeout = setTimeout(function() {
                        n._hoverState === Fe && n.show();
                      }, n.config.delay.show))
                    : n.show());
          }),
          (r._leave = function(e, n) {
            const r = this.constructor.DATA_KEY;
            (n = n || t(e.currentTarget).data(r)) ||
              ((n = new this.constructor(
                e.currentTarget,
                this._getDelegateConfig()
              )),
              t(e.currentTarget).data(r, n)),
              e && (n._activeTrigger[e.type === 'focusout' ? Ve : ze] = !1),
              n._isWithActiveTrigger() ||
                (clearTimeout(n._timeout),
                (n._hoverState = 'out'),
                n.config.delay && n.config.delay.hide
                  ? (n._timeout = setTimeout(function() {
                      n._hoverState === 'out' && n.hide();
                    }, n.config.delay.hide))
                  : n.hide());
          }),
          (r._isWithActiveTrigger = function() {
            for (const e in this._activeTrigger)
              if (this._activeTrigger[e]) return !0;
            return !1;
          }),
          (r._getConfig = function(e) {
            const n = t(this.element).data();
            return (
              Object.keys(n).forEach(function(e) {
                qe.indexOf(e) !== -1 && delete n[e];
              }),
              typeof (e = o(
                {},
                this.constructor.Default,
                n,
                typeof e === 'object' && e ? e : {}
              )).delay === 'number' &&
                (e.delay = { show: e.delay, hide: e.delay }),
              typeof e.title === 'number' && (e.title = e.title.toString()),
              typeof e.content === 'number' &&
                (e.content = e.content.toString()),
              a.typeCheckConfig(Ie, e, this.constructor.DefaultType),
              e.sanitize &&
                (e.template = ke(e.template, e.whiteList, e.sanitizeFn)),
              e
            );
          }),
          (r._getDelegateConfig = function() {
            const e = {};
            if (this.config)
              for (const t in this.config)
                this.constructor.Default[t] !== this.config[t] &&
                  (e[t] = this.config[t]);
            return e;
          }),
          (r._cleanTipClass = function() {
            const e = t(this.getTipElement());
            const n = e.attr('class').match(He);
            n !== null && n.length && e.removeClass(n.join(''));
          }),
          (r._handlePopperPlacementChange = function(e) {
            const t = e.instance;
            (this.tip = t.popper),
              this._cleanTipClass(),
              this.addAttachmentClass(this._getAttachment(e.placement));
          }),
          (r._fixTransition = function() {
            const e = this.getTipElement();
            const n = this.config.animation;
            e.getAttribute('x-placement') === null &&
              (t(e).removeClass(Ue),
              (this.config.animation = !1),
              this.hide(),
              this.show(),
              (this.config.animation = n));
          }),
          (e._jQueryInterface = function(n) {
            return this.each(function() {
              let r = t(this).data(Oe);
              const i = typeof n === 'object' && n;
              if (
                (r || !/dispose|hide/.test(n)) &&
                (r || ((r = new e(this, i)), t(this).data(Oe, r)),
                typeof n === 'string')
              ) {
                if (void 0 === r[n])
                  throw new TypeError(`No method named "${n}"`);
                r[n]();
              }
            });
          }),
          i(e, null, [
            {
              key: 'VERSION',
              get() {
                return '4.3.1';
              },
            },
            {
              key: 'Default',
              get() {
                return We;
              },
            },
            {
              key: 'NAME',
              get() {
                return Ie;
              },
            },
            {
              key: 'DATA_KEY',
              get() {
                return Oe;
              },
            },
            {
              key: 'Event',
              get() {
                return Be;
              },
            },
            {
              key: 'EVENT_KEY',
              get() {
                return Le;
              },
            },
            {
              key: 'DefaultType',
              get() {
                return Re;
              },
            },
          ]),
          e
        );
      })();
      (t.fn[Ie] = Ke._jQueryInterface),
        (t.fn[Ie].Constructor = Ke),
        (t.fn[Ie].noConflict = function() {
          return (t.fn[Ie] = je), Ke._jQueryInterface;
        });
      const Qe = 'popover';
      const Xe = 'bs.popover';
      const Ye = `.${Xe}`;
      const Ge = t.fn[Qe];
      const Je = 'bs-popover';
      const Ze = new RegExp(`(^|\\s)${Je}\\S+`, 'g');
      const et = o({}, Ke.Default, {
        placement: 'right',
        trigger: 'click',
        content: '',
        template:
          '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
      });
      const tt = o({}, Ke.DefaultType, {
        content: '(string|element|function)',
      });
      const nt = {
        HIDE: `hide${Ye}`,
        HIDDEN: `hidden${Ye}`,
        SHOW: `show${Ye}`,
        SHOWN: `shown${Ye}`,
        INSERTED: `inserted${Ye}`,
        CLICK: `click${Ye}`,
        FOCUSIN: `focusin${Ye}`,
        FOCUSOUT: `focusout${Ye}`,
        MOUSEENTER: `mouseenter${Ye}`,
        MOUSELEAVE: `mouseleave${Ye}`,
      };
      const rt = (function(e) {
        let n;
        let r;
        function o() {
          return e.apply(this, arguments) || this;
        }
        (r = e),
          ((n = o).prototype = Object.create(r.prototype)),
          ((n.prototype.constructor = n).__proto__ = r);
        const s = o.prototype;
        return (
          (s.isWithContent = function() {
            return this.getTitle() || this._getContent();
          }),
          (s.addAttachmentClass = function(e) {
            t(this.getTipElement()).addClass(`${Je}-${e}`);
          }),
          (s.getTipElement = function() {
            return (
              (this.tip = this.tip || t(this.config.template)[0]), this.tip
            );
          }),
          (s.setContent = function() {
            const e = t(this.getTipElement());
            this.setElementContent(e.find('.popover-header'), this.getTitle());
            let n = this._getContent();
            typeof n === 'function' && (n = n.call(this.element)),
              this.setElementContent(e.find('.popover-body'), n),
              e.removeClass('fade show');
          }),
          (s._getContent = function() {
            return (
              this.element.getAttribute('data-content') || this.config.content
            );
          }),
          (s._cleanTipClass = function() {
            const e = t(this.getTipElement());
            const n = e.attr('class').match(Ze);
            n !== null && n.length > 0 && e.removeClass(n.join(''));
          }),
          (o._jQueryInterface = function(e) {
            return this.each(function() {
              let n = t(this).data(Xe);
              const r = typeof e === 'object' ? e : null;
              if (
                (n || !/dispose|hide/.test(e)) &&
                (n || ((n = new o(this, r)), t(this).data(Xe, n)),
                typeof e === 'string')
              ) {
                if (void 0 === n[e])
                  throw new TypeError(`No method named "${e}"`);
                n[e]();
              }
            });
          }),
          i(o, null, [
            {
              key: 'VERSION',
              get() {
                return '4.3.1';
              },
            },
            {
              key: 'Default',
              get() {
                return et;
              },
            },
            {
              key: 'NAME',
              get() {
                return Qe;
              },
            },
            {
              key: 'DATA_KEY',
              get() {
                return Xe;
              },
            },
            {
              key: 'Event',
              get() {
                return nt;
              },
            },
            {
              key: 'EVENT_KEY',
              get() {
                return Ye;
              },
            },
            {
              key: 'DefaultType',
              get() {
                return tt;
              },
            },
          ]),
          o
        );
      })(Ke);
      (t.fn[Qe] = rt._jQueryInterface),
        (t.fn[Qe].Constructor = rt),
        (t.fn[Qe].noConflict = function() {
          return (t.fn[Qe] = Ge), rt._jQueryInterface;
        });
      const it = 'scrollspy';
      const ot = 'bs.scrollspy';
      const st = `.${ot}`;
      const at = t.fn[it];
      const lt = { offset: 10, method: 'auto', target: '' };
      const ut = {
        offset: 'number',
        method: 'string',
        target: '(string|element)',
      };
      const ct = {
        ACTIVATE: `activate${st}`,
        SCROLL: `scroll${st}`,
        LOAD_DATA_API: `load${st}.data-api`,
      };
      const ft = 'active';
      const dt = '.nav, .list-group';
      const ht = '.nav-link';
      const pt = '.list-group-item';
      const gt = '.dropdown-item';
      const mt = 'position';
      const vt = (function() {
        function e(e, n) {
          const r = this;
          (this._element = e),
            (this._scrollElement = e.tagName === 'BODY' ? window : e),
            (this._config = this._getConfig(n)),
            (this._selector = `${this._config.target} ${ht},${this._config.target} ${pt},${this._config.target} ${gt}`),
            (this._offsets = []),
            (this._targets = []),
            (this._activeTarget = null),
            (this._scrollHeight = 0),
            t(this._scrollElement).on(ct.SCROLL, function(e) {
              return r._process(e);
            }),
            this.refresh(),
            this._process();
        }
        const n = e.prototype;
        return (
          (n.refresh = function() {
            const e = this;
            const n =
              this._scrollElement === this._scrollElement.window
                ? 'offset'
                : mt;
            const r = this._config.method === 'auto' ? n : this._config.method;
            const i = r === mt ? this._getScrollTop() : 0;
            (this._offsets = []),
              (this._targets = []),
              (this._scrollHeight = this._getScrollHeight()),
              [].slice
                .call(document.querySelectorAll(this._selector))
                .map(function(e) {
                  let n;
                  const o = a.getSelectorFromElement(e);
                  if ((o && (n = document.querySelector(o)), n)) {
                    const s = n.getBoundingClientRect();
                    if (s.width || s.height) return [t(n)[r]().top + i, o];
                  }
                  return null;
                })
                .filter(function(e) {
                  return e;
                })
                .sort(function(e, t) {
                  return e[0] - t[0];
                })
                .forEach(function(t) {
                  e._offsets.push(t[0]), e._targets.push(t[1]);
                });
          }),
          (n.dispose = function() {
            t.removeData(this._element, ot),
              t(this._scrollElement).off(st),
              (this._element = null),
              (this._scrollElement = null),
              (this._config = null),
              (this._selector = null),
              (this._offsets = null),
              (this._targets = null),
              (this._activeTarget = null),
              (this._scrollHeight = null);
          }),
          (n._getConfig = function(e) {
            if (
              typeof (e = o({}, lt, typeof e === 'object' && e ? e : {}))
                .target !== 'string'
            ) {
              let n = t(e.target).attr('id');
              n || ((n = a.getUID(it)), t(e.target).attr('id', n)),
                (e.target = `#${n}`);
            }
            return a.typeCheckConfig(it, e, ut), e;
          }),
          (n._getScrollTop = function() {
            return this._scrollElement === window
              ? this._scrollElement.pageYOffset
              : this._scrollElement.scrollTop;
          }),
          (n._getScrollHeight = function() {
            return (
              this._scrollElement.scrollHeight ||
              Math.max(
                document.body.scrollHeight,
                document.documentElement.scrollHeight
              )
            );
          }),
          (n._getOffsetHeight = function() {
            return this._scrollElement === window
              ? window.innerHeight
              : this._scrollElement.getBoundingClientRect().height;
          }),
          (n._process = function() {
            const e = this._getScrollTop() + this._config.offset;
            const t = this._getScrollHeight();
            const n = this._config.offset + t - this._getOffsetHeight();
            if ((this._scrollHeight !== t && this.refresh(), n <= e)) {
              const r = this._targets[this._targets.length - 1];
              this._activeTarget !== r && this._activate(r);
            } else {
              if (
                this._activeTarget &&
                e < this._offsets[0] &&
                this._offsets[0] > 0
              )
                return (this._activeTarget = null), void this._clear();
              for (let i = this._offsets.length; i--; )
                this._activeTarget !== this._targets[i] &&
                  e >= this._offsets[i] &&
                  (void 0 === this._offsets[i + 1] ||
                    e < this._offsets[i + 1]) &&
                  this._activate(this._targets[i]);
            }
          }),
          (n._activate = function(e) {
            (this._activeTarget = e), this._clear();
            const n = this._selector.split(',').map(function(t) {
              return `${t}[data-target="${e}"],${t}[href="${e}"]`;
            });
            const r = t([].slice.call(document.querySelectorAll(n.join(','))));
            r.hasClass('dropdown-item')
              ? (r
                  .closest('.dropdown')
                  .find('.dropdown-toggle')
                  .addClass(ft),
                r.addClass(ft))
              : (r.addClass(ft),
                r
                  .parents(dt)
                  .prev(`${ht}, ${pt}`)
                  .addClass(ft),
                r
                  .parents(dt)
                  .prev('.nav-item')
                  .children(ht)
                  .addClass(ft)),
              t(this._scrollElement).trigger(ct.ACTIVATE, {
                relatedTarget: e,
              });
          }),
          (n._clear = function() {
            [].slice
              .call(document.querySelectorAll(this._selector))
              .filter(function(e) {
                return e.classList.contains(ft);
              })
              .forEach(function(e) {
                return e.classList.remove(ft);
              });
          }),
          (e._jQueryInterface = function(n) {
            return this.each(function() {
              let r = t(this).data(ot);
              if (
                (r ||
                  ((r = new e(this, typeof n === 'object' && n)),
                  t(this).data(ot, r)),
                typeof n === 'string')
              ) {
                if (void 0 === r[n])
                  throw new TypeError(`No method named "${n}"`);
                r[n]();
              }
            });
          }),
          i(e, null, [
            {
              key: 'VERSION',
              get() {
                return '4.3.1';
              },
            },
            {
              key: 'Default',
              get() {
                return lt;
              },
            },
          ]),
          e
        );
      })();
      t(window).on(ct.LOAD_DATA_API, function() {
        for (
          let e = [].slice.call(
              document.querySelectorAll('[data-spy="scroll"]')
            ),
            n = e.length;
          n--;

        ) {
          const r = t(e[n]);
          vt._jQueryInterface.call(r, r.data());
        }
      }),
        (t.fn[it] = vt._jQueryInterface),
        (t.fn[it].Constructor = vt),
        (t.fn[it].noConflict = function() {
          return (t.fn[it] = at), vt._jQueryInterface;
        });
      const yt = 'bs.tab';
      const bt = `.${yt}`;
      const _t = t.fn.tab;
      const wt = {
        HIDE: `hide${bt}`,
        HIDDEN: `hidden${bt}`,
        SHOW: `show${bt}`,
        SHOWN: `shown${bt}`,
        CLICK_DATA_API: `click${bt}.data-api`,
      };
      const xt = 'active';
      const Et = '.active';
      const Tt = '> li > .active';
      const Ct = (function() {
        function e(e) {
          this._element = e;
        }
        const n = e.prototype;
        return (
          (n.show = function() {
            const e = this;
            if (
              !(
                (this._element.parentNode &&
                  this._element.parentNode.nodeType === Node.ELEMENT_NODE &&
                  t(this._element).hasClass(xt)) ||
                t(this._element).hasClass('disabled')
              )
            ) {
              let n;
              let r;
              const i = t(this._element).closest('.nav, .list-group')[0];
              const o = a.getSelectorFromElement(this._element);
              if (i) {
                const s = i.nodeName === 'UL' || i.nodeName === 'OL' ? Tt : Et;
                r = (r = t.makeArray(t(i).find(s)))[r.length - 1];
              }
              const l = t.Event(wt.HIDE, { relatedTarget: this._element });
              const u = t.Event(wt.SHOW, { relatedTarget: r });
              if (
                (r && t(r).trigger(l),
                t(this._element).trigger(u),
                !u.isDefaultPrevented() && !l.isDefaultPrevented())
              ) {
                o && (n = document.querySelector(o)),
                  this._activate(this._element, i);
                const c = function() {
                  const n = t.Event(wt.HIDDEN, { relatedTarget: e._element });
                  const i = t.Event(wt.SHOWN, { relatedTarget: r });
                  t(r).trigger(n), t(e._element).trigger(i);
                };
                n ? this._activate(n, n.parentNode, c) : c();
              }
            }
          }),
          (n.dispose = function() {
            t.removeData(this._element, yt), (this._element = null);
          }),
          (n._activate = function(e, n, r) {
            const i = this;
            const o = (!n || (n.nodeName !== 'UL' && n.nodeName !== 'OL')
              ? t(n).children(Et)
              : t(n).find(Tt))[0];
            const s = r && o && t(o).hasClass('fade');
            const l = function() {
              return i._transitionComplete(e, o, r);
            };
            if (o && s) {
              const u = a.getTransitionDurationFromElement(o);
              t(o)
                .removeClass('show')
                .one(a.TRANSITION_END, l)
                .emulateTransitionEnd(u);
            } else l();
          }),
          (n._transitionComplete = function(e, n, r) {
            if (n) {
              t(n).removeClass(xt);
              const i = t(n.parentNode).find('> .dropdown-menu .active')[0];
              i && t(i).removeClass(xt),
                n.getAttribute('role') === 'tab' &&
                  n.setAttribute('aria-selected', !1);
            }
            if (
              (t(e).addClass(xt),
              e.getAttribute('role') === 'tab' &&
                e.setAttribute('aria-selected', !0),
              a.reflow(e),
              e.classList.contains('fade') && e.classList.add('show'),
              e.parentNode && t(e.parentNode).hasClass('dropdown-menu'))
            ) {
              const o = t(e).closest('.dropdown')[0];
              if (o) {
                const s = [].slice.call(o.querySelectorAll('.dropdown-toggle'));
                t(s).addClass(xt);
              }
              e.setAttribute('aria-expanded', !0);
            }
            r && r();
          }),
          (e._jQueryInterface = function(n) {
            return this.each(function() {
              const r = t(this);
              let i = r.data(yt);
              if (
                (i || ((i = new e(this)), r.data(yt, i)), typeof n === 'string')
              ) {
                if (void 0 === i[n])
                  throw new TypeError(`No method named "${n}"`);
                i[n]();
              }
            });
          }),
          i(e, null, [
            {
              key: 'VERSION',
              get() {
                return '4.3.1';
              },
            },
          ]),
          e
        );
      })();
      t(document).on(
        wt.CLICK_DATA_API,
        '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
        function(e) {
          e.preventDefault(), Ct._jQueryInterface.call(t(this), 'show');
        }
      ),
        (t.fn.tab = Ct._jQueryInterface),
        (t.fn.tab.Constructor = Ct),
        (t.fn.tab.noConflict = function() {
          return (t.fn.tab = _t), Ct._jQueryInterface;
        });
      const St = 'toast';
      const Dt = 'bs.toast';
      const At = `.${Dt}`;
      const Nt = t.fn[St];
      const kt = {
        CLICK_DISMISS: `click.dismiss${At}`,
        HIDE: `hide${At}`,
        HIDDEN: `hidden${At}`,
        SHOW: `show${At}`,
        SHOWN: `shown${At}`,
      };
      const It = 'show';
      const Ot = 'showing';
      const Lt = { animation: 'boolean', autohide: 'boolean', delay: 'number' };
      const jt = { animation: !0, autohide: !0, delay: 500 };
      const Pt = (function() {
        function e(e, t) {
          (this._element = e),
            (this._config = this._getConfig(t)),
            (this._timeout = null),
            this._setListeners();
        }
        const n = e.prototype;
        return (
          (n.show = function() {
            const e = this;
            t(this._element).trigger(kt.SHOW),
              this._config.animation && this._element.classList.add('fade');
            const n = function() {
              e._element.classList.remove(Ot),
                e._element.classList.add(It),
                t(e._element).trigger(kt.SHOWN),
                e._config.autohide && e.hide();
            };
            if (
              (this._element.classList.remove('hide'),
              this._element.classList.add(Ot),
              this._config.animation)
            ) {
              const r = a.getTransitionDurationFromElement(this._element);
              t(this._element)
                .one(a.TRANSITION_END, n)
                .emulateTransitionEnd(r);
            } else n();
          }),
          (n.hide = function(e) {
            const n = this;
            this._element.classList.contains(It) &&
              (t(this._element).trigger(kt.HIDE),
              e
                ? this._close()
                : (this._timeout = setTimeout(function() {
                    n._close();
                  }, this._config.delay)));
          }),
          (n.dispose = function() {
            clearTimeout(this._timeout),
              (this._timeout = null),
              this._element.classList.contains(It) &&
                this._element.classList.remove(It),
              t(this._element).off(kt.CLICK_DISMISS),
              t.removeData(this._element, Dt),
              (this._element = null),
              (this._config = null);
          }),
          (n._getConfig = function(e) {
            return (
              (e = o(
                {},
                jt,
                t(this._element).data(),
                typeof e === 'object' && e ? e : {}
              )),
              a.typeCheckConfig(St, e, this.constructor.DefaultType),
              e
            );
          }),
          (n._setListeners = function() {
            const e = this;
            t(this._element).on(
              kt.CLICK_DISMISS,
              '[data-dismiss="toast"]',
              function() {
                return e.hide(!0);
              }
            );
          }),
          (n._close = function() {
            const e = this;
            const n = function() {
              e._element.classList.add('hide'),
                t(e._element).trigger(kt.HIDDEN);
            };
            if ((this._element.classList.remove(It), this._config.animation)) {
              const r = a.getTransitionDurationFromElement(this._element);
              t(this._element)
                .one(a.TRANSITION_END, n)
                .emulateTransitionEnd(r);
            } else n();
          }),
          (e._jQueryInterface = function(n) {
            return this.each(function() {
              const r = t(this);
              let i = r.data(Dt);
              if (
                (i ||
                  ((i = new e(this, typeof n === 'object' && n)),
                  r.data(Dt, i)),
                typeof n === 'string')
              ) {
                if (void 0 === i[n])
                  throw new TypeError(`No method named "${n}"`);
                i[n](this);
              }
            });
          }),
          i(e, null, [
            {
              key: 'VERSION',
              get() {
                return '4.3.1';
              },
            },
            {
              key: 'DefaultType',
              get() {
                return Lt;
              },
            },
            {
              key: 'Default',
              get() {
                return jt;
              },
            },
          ]),
          e
        );
      })();
      (t.fn[St] = Pt._jQueryInterface),
        (t.fn[St].Constructor = Pt),
        (t.fn[St].noConflict = function() {
          return (t.fn[St] = Nt), Pt._jQueryInterface;
        }),
        (function() {
          if (void 0 === t)
            throw new TypeError(
              "Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript."
            );
          const e = t.fn.jquery.split(' ')[0].split('.');
          if (
            (e[0] < 2 && e[1] < 9) ||
            (e[0] === 1 && e[1] === 9 && e[2] < 1) ||
            e[0] >= 4
          )
            throw new Error(
              "Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0"
            );
        })(),
        (e.Util = a),
        (e.Alert = h),
        (e.Button = E),
        (e.Carousel = R),
        (e.Collapse = G),
        (e.Dropdown = de),
        (e.Modal = Se),
        (e.Popover = rt),
        (e.Scrollspy = vt),
        (e.Tab = Ct),
        (e.Toast = Pt),
        (e.Tooltip = Ke),
        Object.defineProperty(e, '__esModule', { value: !0 });
    })(t, n(10), n(0));
  },
  function(e, t, n) {
    let r;
    /*!
     * jQuery JavaScript Library v3.4.1
     * https://jquery.com/
     *
     * Includes Sizzle.js
     * https://sizzlejs.com/
     *
     * Copyright JS Foundation and other contributors
     * Released under the MIT license
     * https://jquery.org/license
     *
     * Date: 2019-05-01T21:04Z
     */
    /*!
     * jQuery JavaScript Library v3.4.1
     * https://jquery.com/
     *
     * Includes Sizzle.js
     * https://sizzlejs.com/
     *
     * Copyright JS Foundation and other contributors
     * Released under the MIT license
     * https://jquery.org/license
     *
     * Date: 2019-05-01T21:04Z
     */
    !(function(t, n) {
      typeof e.exports === 'object'
        ? (e.exports = t.document
            ? n(t, !0)
            : function(e) {
                if (!e.document)
                  throw new Error('jQuery requires a window with a document');
                return n(e);
              })
        : n(t);
    })(typeof window !== 'undefined' ? window : this, function(n, i) {
      const o = [];
      const s = n.document;
      const a = Object.getPrototypeOf;
      const l = o.slice;
      const u = o.concat;
      const c = o.push;
      const f = o.indexOf;
      const d = {};
      const h = d.toString;
      const p = d.hasOwnProperty;
      const g = p.toString;
      const m = g.call(Object);
      const v = {};
      const y = function(e) {
        return typeof e === 'function' && typeof e.nodeType !== 'number';
      };
      const b = function(e) {
        return e != null && e === e.window;
      };
      const _ = { type: !0, src: !0, nonce: !0, noModule: !0 };
      function w(e, t, n) {
        let r;
        let i;
        const o = (n = n || s).createElement('script');
        if (((o.text = e), t))
          for (r in _)
            (i = t[r] || (t.getAttribute && t.getAttribute(r))) &&
              o.setAttribute(r, i);
        n.head.appendChild(o).parentNode.removeChild(o);
      }
      function x(e) {
        return e == null
          ? `${e}`
          : typeof e === 'object' || typeof e === 'function'
          ? d[h.call(e)] || 'object'
          : typeof e;
      }
      var E = function(e, t) {
        return new E.fn.init(e, t);
      };
      const T = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
      function C(e) {
        const t = !!e && 'length' in e && e.length;
        const n = x(e);
        return (
          !y(e) &&
          !b(e) &&
          (n === 'array' ||
            t === 0 ||
            (typeof t === 'number' && t > 0 && t - 1 in e))
        );
      }
      (E.fn = E.prototype = {
        jquery: '3.4.1',
        constructor: E,
        length: 0,
        toArray() {
          return l.call(this);
        },
        get(e) {
          return e == null
            ? l.call(this)
            : e < 0
            ? this[e + this.length]
            : this[e];
        },
        pushStack(e) {
          const t = E.merge(this.constructor(), e);
          return (t.prevObject = this), t;
        },
        each(e) {
          return E.each(this, e);
        },
        map(e) {
          return this.pushStack(
            E.map(this, function(t, n) {
              return e.call(t, n, t);
            })
          );
        },
        slice() {
          return this.pushStack(l.apply(this, arguments));
        },
        first() {
          return this.eq(0);
        },
        last() {
          return this.eq(-1);
        },
        eq(e) {
          const t = this.length;
          const n = +e + (e < 0 ? t : 0);
          return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
        },
        end() {
          return this.prevObject || this.constructor();
        },
        push: c,
        sort: o.sort,
        splice: o.splice,
      }),
        (E.extend = E.fn.extend = function() {
          let e;
          let t;
          let n;
          let r;
          let i;
          let o;
          let s = arguments[0] || {};
          let a = 1;
          const l = arguments.length;
          let u = !1;
          for (
            typeof s === 'boolean' && ((u = s), (s = arguments[a] || {}), a++),
              typeof s === 'object' || y(s) || (s = {}),
              a === l && ((s = this), a--);
            a < l;
            a++
          )
            if ((e = arguments[a]) != null)
              for (t in e)
                (r = e[t]),
                  t !== '__proto__' &&
                    s !== r &&
                    (u && r && (E.isPlainObject(r) || (i = Array.isArray(r)))
                      ? ((n = s[t]),
                        (o =
                          i && !Array.isArray(n)
                            ? []
                            : i || E.isPlainObject(n)
                            ? n
                            : {}),
                        (i = !1),
                        (s[t] = E.extend(u, o, r)))
                      : void 0 !== r && (s[t] = r));
          return s;
        }),
        E.extend({
          expando: `jQuery${`3.4.1${Math.random()}`.replace(/\D/g, '')}`,
          isReady: !0,
          error(e) {
            throw new Error(e);
          },
          noop() {},
          isPlainObject(e) {
            let t;
            let n;
            return (
              !(!e || h.call(e) !== '[object Object]') &&
              (!(t = a(e)) ||
                (typeof (n = p.call(t, 'constructor') && t.constructor) ===
                  'function' &&
                  g.call(n) === m))
            );
          },
          isEmptyObject(e) {
            let t;
            for (t in e) return !1;
            return !0;
          },
          globalEval(e, t) {
            w(e, { nonce: t && t.nonce });
          },
          each(e, t) {
            let n;
            let r = 0;
            if (C(e))
              for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
            else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
            return e;
          },
          trim(e) {
            return e == null ? '' : `${e}`.replace(T, '');
          },
          makeArray(e, t) {
            const n = t || [];
            return (
              e != null &&
                (C(Object(e))
                  ? E.merge(n, typeof e === 'string' ? [e] : e)
                  : c.call(n, e)),
              n
            );
          },
          inArray(e, t, n) {
            return t == null ? -1 : f.call(t, e, n);
          },
          merge(e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++)
              e[i++] = t[r];
            return (e.length = i), e;
          },
          grep(e, t, n) {
            for (var r = [], i = 0, o = e.length, s = !n; i < o; i++)
              !t(e[i], i) !== s && r.push(e[i]);
            return r;
          },
          map(e, t, n) {
            let r;
            let i;
            let o = 0;
            const s = [];
            if (C(e))
              for (r = e.length; o < r; o++)
                (i = t(e[o], o, n)) != null && s.push(i);
            else for (o in e) (i = t(e[o], o, n)) != null && s.push(i);
            return u.apply([], s);
          },
          guid: 1,
          support: v,
        }),
        typeof Symbol === 'function' &&
          (E.fn[Symbol.iterator] = o[Symbol.iterator]),
        E.each(
          'Boolean Number String Function Array Date RegExp Object Error Symbol'.split(
            ' '
          ),
          function(e, t) {
            d[`[object ${t}]`] = t.toLowerCase();
          }
        );
      const S =
        /*!
         * Sizzle CSS Selector Engine v2.3.4
         * https://sizzlejs.com/
         *
         * Copyright JS Foundation and other contributors
         * Released under the MIT license
         * https://js.foundation/
         *
         * Date: 2019-04-08
         */
        (function(e) {
          let t;
          let n;
          let r;
          let i;
          let o;
          let s;
          let a;
          let l;
          let u;
          let c;
          let f;
          let d;
          let h;
          let p;
          let g;
          let m;
          let v;
          let y;
          let b;
          const _ = `sizzle${1 * new Date()}`;
          const w = e.document;
          let x = 0;
          let E = 0;
          const T = le();
          const C = le();
          const S = le();
          const D = le();
          let A = function(e, t) {
            return e === t && (f = !0), 0;
          };
          const N = {}.hasOwnProperty;
          let k = [];
          const I = k.pop;
          const O = k.push;
          let L = k.push;
          const j = k.slice;
          const P = function(e, t) {
            for (let n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
            return -1;
          };
          const H =
            'checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped';
          const q = '[\\x20\\t\\r\\n\\f]';
          const R = '(?:\\\\.|[\\w-]|[^\0-\\xa0])+';
          const M = `\\[${q}*(${R})(?:${q}*([*^$|!~]?=)${q}*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(${R}))|)${q}*\\]`;
          const W = `:(${R})(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|${M})*)|.*)\\)|)`;
          const F = new RegExp(`${q}+`, 'g');
          const B = new RegExp(`^${q}+|((?:^|[^\\\\])(?:\\\\.)*)${q}+$`, 'g');
          const U = new RegExp(`^${q}*,${q}*`);
          const $ = new RegExp(`^${q}*([>+~]|${q})${q}*`);
          const z = new RegExp(`${q}|>`);
          const V = new RegExp(W);
          const K = new RegExp(`^${R}$`);
          const Q = {
            ID: new RegExp(`^#(${R})`),
            CLASS: new RegExp(`^\\.(${R})`),
            TAG: new RegExp(`^(${R}|[*])`),
            ATTR: new RegExp(`^${M}`),
            PSEUDO: new RegExp(`^${W}`),
            CHILD: new RegExp(
              `^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(${q}*(even|odd|(([+-]|)(\\d*)n|)${q}*(?:([+-]|)${q}*(\\d+)|))${q}*\\)|)`,
              'i'
            ),
            bool: new RegExp(`^(?:${H})$`, 'i'),
            needsContext: new RegExp(
              `^${q}*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(${q}*((?:-\\d)?\\d*)${q}*\\)|)(?=[^-]|$)`,
              'i'
            ),
          };
          const X = /HTML$/i;
          const Y = /^(?:input|select|textarea|button)$/i;
          const G = /^h\d$/i;
          const J = /^[^{]+\{\s*\[native \w/;
          const Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/;
          const ee = /[+~]/;
          const te = new RegExp(`\\\\([\\da-f]{1,6}${q}?|(${q})|.)`, 'ig');
          const ne = function(e, t, n) {
            const r = `0x${t}` - 65536;
            return r != r || n
              ? t
              : r < 0
              ? String.fromCharCode(r + 65536)
              : String.fromCharCode((r >> 10) | 55296, (1023 & r) | 56320);
          };
          const re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g;
          const ie = function(e, t) {
            return t
              ? e === '\0'
                ? '�'
                : `${e.slice(0, -1)}\\${e
                    .charCodeAt(e.length - 1)
                    .toString(16)} `
              : `\\${e}`;
          };
          const oe = function() {
            d();
          };
          const se = _e(
            function(e) {
              return (
                !0 === e.disabled && e.nodeName.toLowerCase() === 'fieldset'
              );
            },
            { dir: 'parentNode', next: 'legend' }
          );
          try {
            L.apply((k = j.call(w.childNodes)), w.childNodes),
              k[w.childNodes.length].nodeType;
          } catch (e) {
            L = {
              apply: k.length
                ? function(e, t) {
                    O.apply(e, j.call(t));
                  }
                : function(e, t) {
                    for (var n = e.length, r = 0; (e[n++] = t[r++]); );
                    e.length = n - 1;
                  },
            };
          }
          function ae(e, t, r, i) {
            let o;
            let a;
            let u;
            let c;
            let f;
            let p;
            let v;
            let y = t && t.ownerDocument;
            const x = t ? t.nodeType : 9;
            if (
              ((r = r || []),
              typeof e !== 'string' || !e || (x !== 1 && x !== 9 && x !== 11))
            )
              return r;
            if (
              !i &&
              ((t ? t.ownerDocument || t : w) !== h && d(t), (t = t || h), g)
            ) {
              if (x !== 11 && (f = Z.exec(e)))
                if ((o = f[1])) {
                  if (x === 9) {
                    if (!(u = t.getElementById(o))) return r;
                    if (u.id === o) return r.push(u), r;
                  } else if (
                    y &&
                    (u = y.getElementById(o)) &&
                    b(t, u) &&
                    u.id === o
                  )
                    return r.push(u), r;
                } else {
                  if (f[2]) return L.apply(r, t.getElementsByTagName(e)), r;
                  if (
                    (o = f[3]) &&
                    n.getElementsByClassName &&
                    t.getElementsByClassName
                  )
                    return L.apply(r, t.getElementsByClassName(o)), r;
                }
              if (
                n.qsa &&
                !D[`${e} `] &&
                (!m || !m.test(e)) &&
                (x !== 1 || t.nodeName.toLowerCase() !== 'object')
              ) {
                if (((v = e), (y = t), x === 1 && z.test(e))) {
                  for (
                    (c = t.getAttribute('id'))
                      ? (c = c.replace(re, ie))
                      : t.setAttribute('id', (c = _)),
                      a = (p = s(e)).length;
                    a--;

                  )
                    p[a] = `#${c} ${be(p[a])}`;
                  (v = p.join(',')),
                    (y = (ee.test(e) && ve(t.parentNode)) || t);
                }
                try {
                  return L.apply(r, y.querySelectorAll(v)), r;
                } catch (t) {
                  D(e, !0);
                } finally {
                  c === _ && t.removeAttribute('id');
                }
              }
            }
            return l(e.replace(B, '$1'), t, r, i);
          }
          function le() {
            const e = [];
            return function t(n, i) {
              return (
                e.push(`${n} `) > r.cacheLength && delete t[e.shift()],
                (t[`${n} `] = i)
              );
            };
          }
          function ue(e) {
            return (e[_] = !0), e;
          }
          function ce(e) {
            let t = h.createElement('fieldset');
            try {
              return !!e(t);
            } catch (e) {
              return !1;
            } finally {
              t.parentNode && t.parentNode.removeChild(t), (t = null);
            }
          }
          function fe(e, t) {
            for (let n = e.split('|'), i = n.length; i--; )
              r.attrHandle[n[i]] = t;
          }
          function de(e, t) {
            let n = t && e;
            const r =
              n &&
              e.nodeType === 1 &&
              t.nodeType === 1 &&
              e.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
            return e ? 1 : -1;
          }
          function he(e) {
            return function(t) {
              return t.nodeName.toLowerCase() === 'input' && t.type === e;
            };
          }
          function pe(e) {
            return function(t) {
              const n = t.nodeName.toLowerCase();
              return (n === 'input' || n === 'button') && t.type === e;
            };
          }
          function ge(e) {
            return function(t) {
              return 'form' in t
                ? t.parentNode && !1 === t.disabled
                  ? 'label' in t
                    ? 'label' in t.parentNode
                      ? t.parentNode.disabled === e
                      : t.disabled === e
                    : t.isDisabled === e || (t.isDisabled !== !e && se(t) === e)
                  : t.disabled === e
                : 'label' in t && t.disabled === e;
            };
          }
          function me(e) {
            return ue(function(t) {
              return (
                (t = +t),
                ue(function(n, r) {
                  for (var i, o = e([], n.length, t), s = o.length; s--; )
                    n[(i = o[s])] && (n[i] = !(r[i] = n[i]));
                })
              );
            });
          }
          function ve(e) {
            return e && void 0 !== e.getElementsByTagName && e;
          }
          for (t in ((n = ae.support = {}),
          (o = ae.isXML = function(e) {
            const t = e.namespaceURI;
            const n = (e.ownerDocument || e).documentElement;
            return !X.test(t || (n && n.nodeName) || 'HTML');
          }),
          (d = ae.setDocument = function(e) {
            let t;
            let i;
            const s = e ? e.ownerDocument || e : w;
            return s !== h && s.nodeType === 9 && s.documentElement
              ? ((p = (h = s).documentElement),
                (g = !o(h)),
                w !== h &&
                  (i = h.defaultView) &&
                  i.top !== i &&
                  (i.addEventListener
                    ? i.addEventListener('unload', oe, !1)
                    : i.attachEvent && i.attachEvent('onunload', oe)),
                (n.attributes = ce(function(e) {
                  return (e.className = 'i'), !e.getAttribute('className');
                })),
                (n.getElementsByTagName = ce(function(e) {
                  return (
                    e.appendChild(h.createComment('')),
                    !e.getElementsByTagName('*').length
                  );
                })),
                (n.getElementsByClassName = J.test(h.getElementsByClassName)),
                (n.getById = ce(function(e) {
                  return (
                    (p.appendChild(e).id = _),
                    !h.getElementsByName || !h.getElementsByName(_).length
                  );
                })),
                n.getById
                  ? ((r.filter.ID = function(e) {
                      const t = e.replace(te, ne);
                      return function(e) {
                        return e.getAttribute('id') === t;
                      };
                    }),
                    (r.find.ID = function(e, t) {
                      if (void 0 !== t.getElementById && g) {
                        const n = t.getElementById(e);
                        return n ? [n] : [];
                      }
                    }))
                  : ((r.filter.ID = function(e) {
                      const t = e.replace(te, ne);
                      return function(e) {
                        const n =
                          void 0 !== e.getAttributeNode &&
                          e.getAttributeNode('id');
                        return n && n.value === t;
                      };
                    }),
                    (r.find.ID = function(e, t) {
                      if (void 0 !== t.getElementById && g) {
                        let n;
                        let r;
                        let i;
                        let o = t.getElementById(e);
                        if (o) {
                          if ((n = o.getAttributeNode('id')) && n.value === e)
                            return [o];
                          for (
                            i = t.getElementsByName(e), r = 0;
                            (o = i[r++]);

                          )
                            if ((n = o.getAttributeNode('id')) && n.value === e)
                              return [o];
                        }
                        return [];
                      }
                    })),
                (r.find.TAG = n.getElementsByTagName
                  ? function(e, t) {
                      return void 0 !== t.getElementsByTagName
                        ? t.getElementsByTagName(e)
                        : n.qsa
                        ? t.querySelectorAll(e)
                        : void 0;
                    }
                  : function(e, t) {
                      let n;
                      const r = [];
                      let i = 0;
                      const o = t.getElementsByTagName(e);
                      if (e === '*') {
                        for (; (n = o[i++]); ) n.nodeType === 1 && r.push(n);
                        return r;
                      }
                      return o;
                    }),
                (r.find.CLASS =
                  n.getElementsByClassName &&
                  function(e, t) {
                    if (void 0 !== t.getElementsByClassName && g)
                      return t.getElementsByClassName(e);
                  }),
                (v = []),
                (m = []),
                (n.qsa = J.test(h.querySelectorAll)) &&
                  (ce(function(e) {
                    (p.appendChild(
                      e
                    ).innerHTML = `<a id='${_}'></a><select id='${_}-\r\\' msallowcapture=''><option selected=''></option></select>`),
                      e.querySelectorAll("[msallowcapture^='']").length &&
                        m.push(`[*^$]=${q}*(?:''|"")`),
                      e.querySelectorAll('[selected]').length ||
                        m.push(`\\[${q}*(?:value|${H})`),
                      e.querySelectorAll(`[id~=${_}-]`).length || m.push('~='),
                      e.querySelectorAll(':checked').length ||
                        m.push(':checked'),
                      e.querySelectorAll(`a#${_}+*`).length ||
                        m.push('.#.+[+~]');
                  }),
                  ce(function(e) {
                    e.innerHTML =
                      "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    const t = h.createElement('input');
                    t.setAttribute('type', 'hidden'),
                      e.appendChild(t).setAttribute('name', 'D'),
                      e.querySelectorAll('[name=d]').length &&
                        m.push(`name${q}*[*^$|!~]?=`),
                      e.querySelectorAll(':enabled').length !== 2 &&
                        m.push(':enabled', ':disabled'),
                      (p.appendChild(e).disabled = !0),
                      e.querySelectorAll(':disabled').length !== 2 &&
                        m.push(':enabled', ':disabled'),
                      e.querySelectorAll('*,:x'),
                      m.push(',.*:');
                  })),
                (n.matchesSelector = J.test(
                  (y =
                    p.matches ||
                    p.webkitMatchesSelector ||
                    p.mozMatchesSelector ||
                    p.oMatchesSelector ||
                    p.msMatchesSelector)
                )) &&
                  ce(function(e) {
                    (n.disconnectedMatch = y.call(e, '*')),
                      y.call(e, "[s!='']:x"),
                      v.push('!=', W);
                  }),
                (m = m.length && new RegExp(m.join('|'))),
                (v = v.length && new RegExp(v.join('|'))),
                (t = J.test(p.compareDocumentPosition)),
                (b =
                  t || J.test(p.contains)
                    ? function(e, t) {
                        const n = e.nodeType === 9 ? e.documentElement : e;
                        const r = t && t.parentNode;
                        return (
                          e === r ||
                          !(
                            !r ||
                            r.nodeType !== 1 ||
                            !(n.contains
                              ? n.contains(r)
                              : e.compareDocumentPosition &&
                                16 & e.compareDocumentPosition(r))
                          )
                        );
                      }
                    : function(e, t) {
                        if (t)
                          for (; (t = t.parentNode); ) if (t === e) return !0;
                        return !1;
                      }),
                (A = t
                  ? function(e, t) {
                      if (e === t) return (f = !0), 0;
                      let r =
                        !e.compareDocumentPosition - !t.compareDocumentPosition;
                      return (
                        r ||
                        (1 &
                          (r =
                            (e.ownerDocument || e) === (t.ownerDocument || t)
                              ? e.compareDocumentPosition(t)
                              : 1) ||
                        (!n.sortDetached && t.compareDocumentPosition(e) === r)
                          ? e === h || (e.ownerDocument === w && b(w, e))
                            ? -1
                            : t === h || (t.ownerDocument === w && b(w, t))
                            ? 1
                            : c
                            ? P(c, e) - P(c, t)
                            : 0
                          : 4 & r
                          ? -1
                          : 1)
                      );
                    }
                  : function(e, t) {
                      if (e === t) return (f = !0), 0;
                      let n;
                      let r = 0;
                      const i = e.parentNode;
                      const o = t.parentNode;
                      const s = [e];
                      const a = [t];
                      if (!i || !o)
                        return e === h
                          ? -1
                          : t === h
                          ? 1
                          : i
                          ? -1
                          : o
                          ? 1
                          : c
                          ? P(c, e) - P(c, t)
                          : 0;
                      if (i === o) return de(e, t);
                      for (n = e; (n = n.parentNode); ) s.unshift(n);
                      for (n = t; (n = n.parentNode); ) a.unshift(n);
                      for (; s[r] === a[r]; ) r++;
                      return r
                        ? de(s[r], a[r])
                        : s[r] === w
                        ? -1
                        : a[r] === w
                        ? 1
                        : 0;
                    }),
                h)
              : h;
          }),
          (ae.matches = function(e, t) {
            return ae(e, null, null, t);
          }),
          (ae.matchesSelector = function(e, t) {
            if (
              ((e.ownerDocument || e) !== h && d(e),
              n.matchesSelector &&
                g &&
                !D[`${t} `] &&
                (!v || !v.test(t)) &&
                (!m || !m.test(t)))
            )
              try {
                const r = y.call(e, t);
                if (
                  r ||
                  n.disconnectedMatch ||
                  (e.document && e.document.nodeType !== 11)
                )
                  return r;
              } catch (e) {
                D(t, !0);
              }
            return ae(t, h, null, [e]).length > 0;
          }),
          (ae.contains = function(e, t) {
            return (e.ownerDocument || e) !== h && d(e), b(e, t);
          }),
          (ae.attr = function(e, t) {
            (e.ownerDocument || e) !== h && d(e);
            const i = r.attrHandle[t.toLowerCase()];
            let o =
              i && N.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !g) : void 0;
            return void 0 !== o
              ? o
              : n.attributes || !g
              ? e.getAttribute(t)
              : (o = e.getAttributeNode(t)) && o.specified
              ? o.value
              : null;
          }),
          (ae.escape = function(e) {
            return `${e}`.replace(re, ie);
          }),
          (ae.error = function(e) {
            throw new Error(`Syntax error, unrecognized expression: ${e}`);
          }),
          (ae.uniqueSort = function(e) {
            let t;
            const r = [];
            let i = 0;
            let o = 0;
            if (
              ((f = !n.detectDuplicates),
              (c = !n.sortStable && e.slice(0)),
              e.sort(A),
              f)
            ) {
              for (; (t = e[o++]); ) t === e[o] && (i = r.push(o));
              for (; i--; ) e.splice(r[i], 1);
            }
            return (c = null), e;
          }),
          (i = ae.getText = function(e) {
            let t;
            let n = '';
            let r = 0;
            const o = e.nodeType;
            if (o) {
              if (o === 1 || o === 9 || o === 11) {
                if (typeof e.textContent === 'string') return e.textContent;
                for (e = e.firstChild; e; e = e.nextSibling) n += i(e);
              } else if (o === 3 || o === 4) return e.nodeValue;
            } else for (; (t = e[r++]); ) n += i(t);
            return n;
          }),
          ((r = ae.selectors = {
            cacheLength: 50,
            createPseudo: ue,
            match: Q,
            attrHandle: {},
            find: {},
            relative: {
              '>': { dir: 'parentNode', first: !0 },
              ' ': { dir: 'parentNode' },
              '+': { dir: 'previousSibling', first: !0 },
              '~': { dir: 'previousSibling' },
            },
            preFilter: {
              ATTR(e) {
                return (
                  (e[1] = e[1].replace(te, ne)),
                  (e[3] = (e[3] || e[4] || e[5] || '').replace(te, ne)),
                  e[2] === '~=' && (e[3] = ` ${e[3]} `),
                  e.slice(0, 4)
                );
              },
              CHILD(e) {
                return (
                  (e[1] = e[1].toLowerCase()),
                  e[1].slice(0, 3) === 'nth'
                    ? (e[3] || ae.error(e[0]),
                      (e[4] = +(e[4]
                        ? e[5] + (e[6] || 1)
                        : 2 * (e[3] === 'even' || e[3] === 'odd'))),
                      (e[5] = +(e[7] + e[8] || e[3] === 'odd')))
                    : e[3] && ae.error(e[0]),
                  e
                );
              },
              PSEUDO(e) {
                let t;
                const n = !e[6] && e[2];
                return Q.CHILD.test(e[0])
                  ? null
                  : (e[3]
                      ? (e[2] = e[4] || e[5] || '')
                      : n &&
                        V.test(n) &&
                        (t = s(n, !0)) &&
                        (t = n.indexOf(')', n.length - t) - n.length) &&
                        ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                    e.slice(0, 3));
              },
            },
            filter: {
              TAG(e) {
                const t = e.replace(te, ne).toLowerCase();
                return e === '*'
                  ? function() {
                      return !0;
                    }
                  : function(e) {
                      return e.nodeName && e.nodeName.toLowerCase() === t;
                    };
              },
              CLASS(e) {
                let t = T[`${e} `];
                return (
                  t ||
                  ((t = new RegExp(`(^|${q})${e}(${q}|$)`)) &&
                    T(e, function(e) {
                      return t.test(
                        (typeof e.className === 'string' && e.className) ||
                          (void 0 !== e.getAttribute &&
                            e.getAttribute('class')) ||
                          ''
                      );
                    }))
                );
              },
              ATTR(e, t, n) {
                return function(r) {
                  let i = ae.attr(r, e);
                  return i == null
                    ? t === '!='
                    : !t ||
                        ((i += ''),
                        t === '='
                          ? i === n
                          : t === '!='
                          ? i !== n
                          : t === '^='
                          ? n && i.indexOf(n) === 0
                          : t === '*='
                          ? n && i.indexOf(n) > -1
                          : t === '$='
                          ? n && i.slice(-n.length) === n
                          : t === '~='
                          ? ` ${i.replace(F, ' ')} `.indexOf(n) > -1
                          : t === '|=' &&
                            (i === n || i.slice(0, n.length + 1) === `${n}-`));
                };
              },
              CHILD(e, t, n, r, i) {
                const o = e.slice(0, 3) !== 'nth';
                const s = e.slice(-4) !== 'last';
                const a = t === 'of-type';
                return r === 1 && i === 0
                  ? function(e) {
                      return !!e.parentNode;
                    }
                  : function(t, n, l) {
                      let u;
                      let c;
                      let f;
                      let d;
                      let h;
                      let p;
                      let g = o !== s ? 'nextSibling' : 'previousSibling';
                      const m = t.parentNode;
                      const v = a && t.nodeName.toLowerCase();
                      const y = !l && !a;
                      let b = !1;
                      if (m) {
                        if (o) {
                          for (; g; ) {
                            for (d = t; (d = d[g]); )
                              if (
                                a
                                  ? d.nodeName.toLowerCase() === v
                                  : d.nodeType === 1
                              )
                                return !1;
                            p = g = e === 'only' && !p && 'nextSibling';
                          }
                          return !0;
                        }
                        if (((p = [s ? m.firstChild : m.lastChild]), s && y)) {
                          for (
                            b =
                              (h =
                                (u =
                                  (c =
                                    (f = (d = m)[_] || (d[_] = {}))[
                                      d.uniqueID
                                    ] || (f[d.uniqueID] = {}))[e] || [])[0] ===
                                  x && u[1]) && u[2],
                              d = h && m.childNodes[h];
                            (d = (++h && d && d[g]) || (b = h = 0) || p.pop());

                          )
                            if (d.nodeType === 1 && ++b && d === t) {
                              c[e] = [x, h, b];
                              break;
                            }
                        } else if (
                          (y &&
                            (b = h =
                              (u =
                                (c =
                                  (f = (d = t)[_] || (d[_] = {}))[d.uniqueID] ||
                                  (f[d.uniqueID] = {}))[e] || [])[0] === x &&
                              u[1]),
                          !1 === b)
                        )
                          for (
                            ;
                            (d =
                              (++h && d && d[g]) || (b = h = 0) || p.pop()) &&
                            ((a
                              ? d.nodeName.toLowerCase() !== v
                              : d.nodeType !== 1) ||
                              !++b ||
                              (y &&
                                ((c =
                                  (f = d[_] || (d[_] = {}))[d.uniqueID] ||
                                  (f[d.uniqueID] = {}))[e] = [x, b]),
                              d !== t));

                          );
                        return (b -= i) === r || (b % r == 0 && b / r >= 0);
                      }
                    };
              },
              PSEUDO(e, t) {
                let n;
                const i =
                  r.pseudos[e] ||
                  r.setFilters[e.toLowerCase()] ||
                  ae.error(`unsupported pseudo: ${e}`);
                return i[_]
                  ? i(t)
                  : i.length > 1
                  ? ((n = [e, e, '', t]),
                    r.setFilters.hasOwnProperty(e.toLowerCase())
                      ? ue(function(e, n) {
                          for (var r, o = i(e, t), s = o.length; s--; )
                            e[(r = P(e, o[s]))] = !(n[r] = o[s]);
                        })
                      : function(e) {
                          return i(e, 0, n);
                        })
                  : i;
              },
            },
            pseudos: {
              not: ue(function(e) {
                const t = [];
                const n = [];
                const r = a(e.replace(B, '$1'));
                return r[_]
                  ? ue(function(e, t, n, i) {
                      for (var o, s = r(e, null, i, []), a = e.length; a--; )
                        (o = s[a]) && (e[a] = !(t[a] = o));
                    })
                  : function(e, i, o) {
                      return (
                        (t[0] = e), r(t, null, o, n), (t[0] = null), !n.pop()
                      );
                    };
              }),
              has: ue(function(e) {
                return function(t) {
                  return ae(e, t).length > 0;
                };
              }),
              contains: ue(function(e) {
                return (
                  (e = e.replace(te, ne)),
                  function(t) {
                    return (t.textContent || i(t)).indexOf(e) > -1;
                  }
                );
              }),
              lang: ue(function(e) {
                return (
                  K.test(e || '') || ae.error(`unsupported lang: ${e}`),
                  (e = e.replace(te, ne).toLowerCase()),
                  function(t) {
                    let n;
                    do {
                      if (
                        (n = g
                          ? t.lang
                          : t.getAttribute('xml:lang') ||
                            t.getAttribute('lang'))
                      )
                        return (
                          (n = n.toLowerCase()) === e ||
                          n.indexOf(`${e}-`) === 0
                        );
                    } while ((t = t.parentNode) && t.nodeType === 1);
                    return !1;
                  }
                );
              }),
              target(t) {
                const n = e.location && e.location.hash;
                return n && n.slice(1) === t.id;
              },
              root(e) {
                return e === p;
              },
              focus(e) {
                return (
                  e === h.activeElement &&
                  (!h.hasFocus || h.hasFocus()) &&
                  !!(e.type || e.href || ~e.tabIndex)
                );
              },
              enabled: ge(!1),
              disabled: ge(!0),
              checked(e) {
                const t = e.nodeName.toLowerCase();
                return (
                  (t === 'input' && !!e.checked) ||
                  (t === 'option' && !!e.selected)
                );
              },
              selected(e) {
                return (
                  e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                );
              },
              empty(e) {
                for (e = e.firstChild; e; e = e.nextSibling)
                  if (e.nodeType < 6) return !1;
                return !0;
              },
              parent(e) {
                return !r.pseudos.empty(e);
              },
              header(e) {
                return G.test(e.nodeName);
              },
              input(e) {
                return Y.test(e.nodeName);
              },
              button(e) {
                const t = e.nodeName.toLowerCase();
                return (t === 'input' && e.type === 'button') || t === 'button';
              },
              text(e) {
                let t;
                return (
                  e.nodeName.toLowerCase() === 'input' &&
                  e.type === 'text' &&
                  ((t = e.getAttribute('type')) == null ||
                    t.toLowerCase() === 'text')
                );
              },
              first: me(function() {
                return [0];
              }),
              last: me(function(e, t) {
                return [t - 1];
              }),
              eq: me(function(e, t, n) {
                return [n < 0 ? n + t : n];
              }),
              even: me(function(e, t) {
                for (let n = 0; n < t; n += 2) e.push(n);
                return e;
              }),
              odd: me(function(e, t) {
                for (let n = 1; n < t; n += 2) e.push(n);
                return e;
              }),
              lt: me(function(e, t, n) {
                for (let r = n < 0 ? n + t : n > t ? t : n; --r >= 0; )
                  e.push(r);
                return e;
              }),
              gt: me(function(e, t, n) {
                for (let r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
                return e;
              }),
            },
          }).pseudos.nth = r.pseudos.eq),
          { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
            r.pseudos[t] = he(t);
          for (t in { submit: !0, reset: !0 }) r.pseudos[t] = pe(t);
          function ye() {}
          function be(e) {
            for (var t = 0, n = e.length, r = ''; t < n; t++) r += e[t].value;
            return r;
          }
          function _e(e, t, n) {
            const r = t.dir;
            const i = t.next;
            const o = i || r;
            const s = n && o === 'parentNode';
            const a = E++;
            return t.first
              ? function(t, n, i) {
                  for (; (t = t[r]); )
                    if (t.nodeType === 1 || s) return e(t, n, i);
                  return !1;
                }
              : function(t, n, l) {
                  let u;
                  let c;
                  let f;
                  const d = [x, a];
                  if (l) {
                    for (; (t = t[r]); )
                      if ((t.nodeType === 1 || s) && e(t, n, l)) return !0;
                  } else
                    for (; (t = t[r]); )
                      if (t.nodeType === 1 || s)
                        if (
                          ((c =
                            (f = t[_] || (t[_] = {}))[t.uniqueID] ||
                            (f[t.uniqueID] = {})),
                          i && i === t.nodeName.toLowerCase())
                        )
                          t = t[r] || t;
                        else {
                          if ((u = c[o]) && u[0] === x && u[1] === a)
                            return (d[2] = u[2]);
                          if (((c[o] = d), (d[2] = e(t, n, l)))) return !0;
                        }
                  return !1;
                };
          }
          function we(e) {
            return e.length > 1
              ? function(t, n, r) {
                  for (let i = e.length; i--; ) if (!e[i](t, n, r)) return !1;
                  return !0;
                }
              : e[0];
          }
          function xe(e, t, n, r, i) {
            for (var o, s = [], a = 0, l = e.length, u = t != null; a < l; a++)
              (o = e[a]) && ((n && !n(o, r, i)) || (s.push(o), u && t.push(a)));
            return s;
          }
          function Ee(e, t, n, r, i, o) {
            return (
              r && !r[_] && (r = Ee(r)),
              i && !i[_] && (i = Ee(i, o)),
              ue(function(o, s, a, l) {
                let u;
                let c;
                let f;
                const d = [];
                const h = [];
                const p = s.length;
                const g =
                  o ||
                  (function(e, t, n) {
                    for (let r = 0, i = t.length; r < i; r++) ae(e, t[r], n);
                    return n;
                  })(t || '*', a.nodeType ? [a] : a, []);
                const m = !e || (!o && t) ? g : xe(g, d, e, a, l);
                let v = n ? (i || (o ? e : p || r) ? [] : s) : m;
                if ((n && n(m, v, a, l), r))
                  for (u = xe(v, h), r(u, [], a, l), c = u.length; c--; )
                    (f = u[c]) && (v[h[c]] = !(m[h[c]] = f));
                if (o) {
                  if (i || e) {
                    if (i) {
                      for (u = [], c = v.length; c--; )
                        (f = v[c]) && u.push((m[c] = f));
                      i(null, (v = []), u, l);
                    }
                    for (c = v.length; c--; )
                      (f = v[c]) &&
                        (u = i ? P(o, f) : d[c]) > -1 &&
                        (o[u] = !(s[u] = f));
                  }
                } else (v = xe(v === s ? v.splice(p, v.length) : v)), i ? i(null, s, v, l) : L.apply(s, v);
              })
            );
          }
          function Te(e) {
            for (
              var t,
                n,
                i,
                o = e.length,
                s = r.relative[e[0].type],
                a = s || r.relative[' '],
                l = s ? 1 : 0,
                c = _e(
                  function(e) {
                    return e === t;
                  },
                  a,
                  !0
                ),
                f = _e(
                  function(e) {
                    return P(t, e) > -1;
                  },
                  a,
                  !0
                ),
                d = [
                  function(e, n, r) {
                    const i =
                      (!s && (r || n !== u)) ||
                      ((t = n).nodeType ? c(e, n, r) : f(e, n, r));
                    return (t = null), i;
                  },
                ];
              l < o;
              l++
            )
              if ((n = r.relative[e[l].type])) d = [_e(we(d), n)];
              else {
                if ((n = r.filter[e[l].type].apply(null, e[l].matches))[_]) {
                  for (i = ++l; i < o && !r.relative[e[i].type]; i++);
                  return Ee(
                    l > 1 && we(d),
                    l > 1 &&
                      be(
                        e
                          .slice(0, l - 1)
                          .concat({ value: e[l - 2].type === ' ' ? '*' : '' })
                      ).replace(B, '$1'),
                    n,
                    l < i && Te(e.slice(l, i)),
                    i < o && Te((e = e.slice(i))),
                    i < o && be(e)
                  );
                }
                d.push(n);
              }
            return we(d);
          }
          return (
            (ye.prototype = r.filters = r.pseudos),
            (r.setFilters = new ye()),
            (s = ae.tokenize = function(e, t) {
              let n;
              let i;
              let o;
              let s;
              let a;
              let l;
              let u;
              const c = C[`${e} `];
              if (c) return t ? 0 : c.slice(0);
              for (a = e, l = [], u = r.preFilter; a; ) {
                for (s in ((n && !(i = U.exec(a))) ||
                  (i && (a = a.slice(i[0].length) || a), l.push((o = []))),
                (n = !1),
                (i = $.exec(a)) &&
                  ((n = i.shift()),
                  o.push({ value: n, type: i[0].replace(B, ' ') }),
                  (a = a.slice(n.length))),
                r.filter))
                  !(i = Q[s].exec(a)) ||
                    (u[s] && !(i = u[s](i))) ||
                    ((n = i.shift()),
                    o.push({ value: n, type: s, matches: i }),
                    (a = a.slice(n.length)));
                if (!n) break;
              }
              return t ? a.length : a ? ae.error(e) : C(e, l).slice(0);
            }),
            (a = ae.compile = function(e, t) {
              let n;
              const i = [];
              const o = [];
              let a = S[`${e} `];
              if (!a) {
                for (t || (t = s(e)), n = t.length; n--; )
                  (a = Te(t[n]))[_] ? i.push(a) : o.push(a);
                (a = S(
                  e,
                  (function(e, t) {
                    const n = t.length > 0;
                    const i = e.length > 0;
                    const o = function(o, s, a, l, c) {
                      let f;
                      let p;
                      let m;
                      let v = 0;
                      let y = '0';
                      const b = o && [];
                      let _ = [];
                      const w = u;
                      const E = o || (i && r.find.TAG('*', c));
                      const T = (x += w == null ? 1 : Math.random() || 0.1);
                      const C = E.length;
                      for (
                        c && (u = s === h || s || c);
                        y !== C && (f = E[y]) != null;
                        y++
                      ) {
                        if (i && f) {
                          for (
                            p = 0,
                              s || f.ownerDocument === h || (d(f), (a = !g));
                            (m = e[p++]);

                          )
                            if (m(f, s || h, a)) {
                              l.push(f);
                              break;
                            }
                          c && (x = T);
                        }
                        n && ((f = !m && f) && v--, o && b.push(f));
                      }
                      if (((v += y), n && y !== v)) {
                        for (p = 0; (m = t[p++]); ) m(b, _, s, a);
                        if (o) {
                          if (v > 0)
                            for (; y--; ) b[y] || _[y] || (_[y] = I.call(l));
                          _ = xe(_);
                        }
                        L.apply(l, _),
                          c &&
                            !o &&
                            _.length > 0 &&
                            v + t.length > 1 &&
                            ae.uniqueSort(l);
                      }
                      return c && ((x = T), (u = w)), b;
                    };
                    return n ? ue(o) : o;
                  })(o, i)
                )).selector = e;
              }
              return a;
            }),
            (l = ae.select = function(e, t, n, i) {
              let o;
              let l;
              let u;
              let c;
              let f;
              const d = typeof e === 'function' && e;
              const h = !i && s((e = d.selector || e));
              if (((n = n || []), h.length === 1)) {
                if (
                  (l = h[0] = h[0].slice(0)).length > 2 &&
                  (u = l[0]).type === 'ID' &&
                  t.nodeType === 9 &&
                  g &&
                  r.relative[l[1].type]
                ) {
                  if (
                    !(t = (r.find.ID(u.matches[0].replace(te, ne), t) || [])[0])
                  )
                    return n;
                  d && (t = t.parentNode),
                    (e = e.slice(l.shift().value.length));
                }
                for (
                  o = Q.needsContext.test(e) ? 0 : l.length;
                  o-- && ((u = l[o]), !r.relative[(c = u.type)]);

                )
                  if (
                    (f = r.find[c]) &&
                    (i = f(
                      u.matches[0].replace(te, ne),
                      (ee.test(l[0].type) && ve(t.parentNode)) || t
                    ))
                  ) {
                    if ((l.splice(o, 1), !(e = i.length && be(l))))
                      return L.apply(n, i), n;
                    break;
                  }
              }
              return (
                (d || a(e, h))(
                  i,
                  t,
                  !g,
                  n,
                  !t || (ee.test(e) && ve(t.parentNode)) || t
                ),
                n
              );
            }),
            (n.sortStable =
              _.split('')
                .sort(A)
                .join('') === _),
            (n.detectDuplicates = !!f),
            d(),
            (n.sortDetached = ce(function(e) {
              return 1 & e.compareDocumentPosition(h.createElement('fieldset'));
            })),
            ce(function(e) {
              return (
                (e.innerHTML = "<a href='#'></a>"),
                e.firstChild.getAttribute('href') === '#'
              );
            }) ||
              fe('type|href|height|width', function(e, t, n) {
                if (!n)
                  return e.getAttribute(t, t.toLowerCase() === 'type' ? 1 : 2);
              }),
            (n.attributes &&
              ce(function(e) {
                return (
                  (e.innerHTML = '<input/>'),
                  e.firstChild.setAttribute('value', ''),
                  e.firstChild.getAttribute('value') === ''
                );
              })) ||
              fe('value', function(e, t, n) {
                if (!n && e.nodeName.toLowerCase() === 'input')
                  return e.defaultValue;
              }),
            ce(function(e) {
              return e.getAttribute('disabled') == null;
            }) ||
              fe(H, function(e, t, n) {
                let r;
                if (!n)
                  return !0 === e[t]
                    ? t.toLowerCase()
                    : (r = e.getAttributeNode(t)) && r.specified
                    ? r.value
                    : null;
              }),
            ae
          );
        })(n);
      (E.find = S),
        (E.expr = S.selectors),
        (E.expr[':'] = E.expr.pseudos),
        (E.uniqueSort = E.unique = S.uniqueSort),
        (E.text = S.getText),
        (E.isXMLDoc = S.isXML),
        (E.contains = S.contains),
        (E.escapeSelector = S.escape);
      const D = function(e, t, n) {
        for (var r = [], i = void 0 !== n; (e = e[t]) && e.nodeType !== 9; )
          if (e.nodeType === 1) {
            if (i && E(e).is(n)) break;
            r.push(e);
          }
        return r;
      };
      const A = function(e, t) {
        for (var n = []; e; e = e.nextSibling)
          e.nodeType === 1 && e !== t && n.push(e);
        return n;
      };
      const N = E.expr.match.needsContext;
      function k(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
      }
      const I = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
      function O(e, t, n) {
        return y(t)
          ? E.grep(e, function(e, r) {
              return !!t.call(e, r, e) !== n;
            })
          : t.nodeType
          ? E.grep(e, function(e) {
              return (e === t) !== n;
            })
          : typeof t !== 'string'
          ? E.grep(e, function(e) {
              return f.call(t, e) > -1 !== n;
            })
          : E.filter(t, e, n);
      }
      (E.filter = function(e, t, n) {
        const r = t[0];
        return (
          n && (e = `:not(${e})`),
          t.length === 1 && r.nodeType === 1
            ? E.find.matchesSelector(r, e)
              ? [r]
              : []
            : E.find.matches(
                e,
                E.grep(t, function(e) {
                  return e.nodeType === 1;
                })
              )
        );
      }),
        E.fn.extend({
          find(e) {
            let t;
            let n;
            const r = this.length;
            const i = this;
            if (typeof e !== 'string')
              return this.pushStack(
                E(e).filter(function() {
                  for (t = 0; t < r; t++) if (E.contains(i[t], this)) return !0;
                })
              );
            for (n = this.pushStack([]), t = 0; t < r; t++) E.find(e, i[t], n);
            return r > 1 ? E.uniqueSort(n) : n;
          },
          filter(e) {
            return this.pushStack(O(this, e || [], !1));
          },
          not(e) {
            return this.pushStack(O(this, e || [], !0));
          },
          is(e) {
            return !!O(
              this,
              typeof e === 'string' && N.test(e) ? E(e) : e || [],
              !1
            ).length;
          },
        });
      let L;
      const j = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
      ((E.fn.init = function(e, t, n) {
        let r;
        let i;
        if (!e) return this;
        if (((n = n || L), typeof e === 'string')) {
          if (
            !(r =
              e[0] === '<' && e[e.length - 1] === '>' && e.length >= 3
                ? [null, e, null]
                : j.exec(e)) ||
            (!r[1] && t)
          )
            return !t || t.jquery
              ? (t || n).find(e)
              : this.constructor(t).find(e);
          if (r[1]) {
            if (
              ((t = t instanceof E ? t[0] : t),
              E.merge(
                this,
                E.parseHTML(
                  r[1],
                  t && t.nodeType ? t.ownerDocument || t : s,
                  !0
                )
              ),
              I.test(r[1]) && E.isPlainObject(t))
            )
              for (r in t) y(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
            return this;
          }
          return (
            (i = s.getElementById(r[2])) && ((this[0] = i), (this.length = 1)),
            this
          );
        }
        return e.nodeType
          ? ((this[0] = e), (this.length = 1), this)
          : y(e)
          ? void 0 !== n.ready
            ? n.ready(e)
            : e(E)
          : E.makeArray(e, this);
      }).prototype = E.fn),
        (L = E(s));
      const P = /^(?:parents|prev(?:Until|All))/;
      const H = { children: !0, contents: !0, next: !0, prev: !0 };
      function q(e, t) {
        for (; (e = e[t]) && e.nodeType !== 1; );
        return e;
      }
      E.fn.extend({
        has(e) {
          const t = E(e, this);
          const n = t.length;
          return this.filter(function() {
            for (let e = 0; e < n; e++) if (E.contains(this, t[e])) return !0;
          });
        },
        closest(e, t) {
          let n;
          let r = 0;
          const i = this.length;
          const o = [];
          const s = typeof e !== 'string' && E(e);
          if (!N.test(e))
            for (; r < i; r++)
              for (n = this[r]; n && n !== t; n = n.parentNode)
                if (
                  n.nodeType < 11 &&
                  (s
                    ? s.index(n) > -1
                    : n.nodeType === 1 && E.find.matchesSelector(n, e))
                ) {
                  o.push(n);
                  break;
                }
          return this.pushStack(o.length > 1 ? E.uniqueSort(o) : o);
        },
        index(e) {
          return e
            ? typeof e === 'string'
              ? f.call(E(e), this[0])
              : f.call(this, e.jquery ? e[0] : e)
            : this[0] && this[0].parentNode
            ? this.first().prevAll().length
            : -1;
        },
        add(e, t) {
          return this.pushStack(E.uniqueSort(E.merge(this.get(), E(e, t))));
        },
        addBack(e) {
          return this.add(
            e == null ? this.prevObject : this.prevObject.filter(e)
          );
        },
      }),
        E.each(
          {
            parent(e) {
              const t = e.parentNode;
              return t && t.nodeType !== 11 ? t : null;
            },
            parents(e) {
              return D(e, 'parentNode');
            },
            parentsUntil(e, t, n) {
              return D(e, 'parentNode', n);
            },
            next(e) {
              return q(e, 'nextSibling');
            },
            prev(e) {
              return q(e, 'previousSibling');
            },
            nextAll(e) {
              return D(e, 'nextSibling');
            },
            prevAll(e) {
              return D(e, 'previousSibling');
            },
            nextUntil(e, t, n) {
              return D(e, 'nextSibling', n);
            },
            prevUntil(e, t, n) {
              return D(e, 'previousSibling', n);
            },
            siblings(e) {
              return A((e.parentNode || {}).firstChild, e);
            },
            children(e) {
              return A(e.firstChild);
            },
            contents(e) {
              return void 0 !== e.contentDocument
                ? e.contentDocument
                : (k(e, 'template') && (e = e.content || e),
                  E.merge([], e.childNodes));
            },
          },
          function(e, t) {
            E.fn[e] = function(n, r) {
              let i = E.map(this, t, n);
              return (
                e.slice(-5) !== 'Until' && (r = n),
                r && typeof r === 'string' && (i = E.filter(r, i)),
                this.length > 1 &&
                  (H[e] || E.uniqueSort(i), P.test(e) && i.reverse()),
                this.pushStack(i)
              );
            };
          }
        );
      const R = /[^\x20\t\r\n\f]+/g;
      function M(e) {
        return e;
      }
      function W(e) {
        throw e;
      }
      function F(e, t, n, r) {
        let i;
        try {
          e && y((i = e.promise))
            ? i
                .call(e)
                .done(t)
                .fail(n)
            : e && y((i = e.then))
            ? i.call(e, t, n)
            : t.apply(void 0, [e].slice(r));
        } catch (e) {
          n.apply(void 0, [e]);
        }
      }
      (E.Callbacks = function(e) {
        e =
          typeof e === 'string'
            ? (function(e) {
                const t = {};
                return (
                  E.each(e.match(R) || [], function(e, n) {
                    t[n] = !0;
                  }),
                  t
                );
              })(e)
            : E.extend({}, e);
        let t;
        let n;
        let r;
        let i;
        let o = [];
        let s = [];
        let a = -1;
        const l = function() {
          for (i = i || e.once, r = t = !0; s.length; a = -1)
            for (n = s.shift(); ++a < o.length; )
              !1 === o[a].apply(n[0], n[1]) &&
                e.stopOnFalse &&
                ((a = o.length), (n = !1));
          e.memory || (n = !1), (t = !1), i && (o = n ? [] : '');
        };
        var u = {
          add() {
            return (
              o &&
                (n && !t && ((a = o.length - 1), s.push(n)),
                (function t(n) {
                  E.each(n, function(n, r) {
                    y(r)
                      ? (e.unique && u.has(r)) || o.push(r)
                      : r && r.length && x(r) !== 'string' && t(r);
                  });
                })(arguments),
                n && !t && l()),
              this
            );
          },
          remove() {
            return (
              E.each(arguments, function(e, t) {
                for (var n; (n = E.inArray(t, o, n)) > -1; )
                  o.splice(n, 1), n <= a && a--;
              }),
              this
            );
          },
          has(e) {
            return e ? E.inArray(e, o) > -1 : o.length > 0;
          },
          empty() {
            return o && (o = []), this;
          },
          disable() {
            return (i = s = []), (o = n = ''), this;
          },
          disabled() {
            return !o;
          },
          lock() {
            return (i = s = []), n || t || (o = n = ''), this;
          },
          locked() {
            return !!i;
          },
          fireWith(e, n) {
            return (
              i ||
                ((n = [e, (n = n || []).slice ? n.slice() : n]),
                s.push(n),
                t || l()),
              this
            );
          },
          fire() {
            return u.fireWith(this, arguments), this;
          },
          fired() {
            return !!r;
          },
        };
        return u;
      }),
        E.extend({
          Deferred(e) {
            const t = [
              [
                'notify',
                'progress',
                E.Callbacks('memory'),
                E.Callbacks('memory'),
                2,
              ],
              [
                'resolve',
                'done',
                E.Callbacks('once memory'),
                E.Callbacks('once memory'),
                0,
                'resolved',
              ],
              [
                'reject',
                'fail',
                E.Callbacks('once memory'),
                E.Callbacks('once memory'),
                1,
                'rejected',
              ],
            ];
            let r = 'pending';
            var i = {
              state() {
                return r;
              },
              always() {
                return o.done(arguments).fail(arguments), this;
              },
              catch(e) {
                return i.then(null, e);
              },
              pipe() {
                let e = arguments;
                return E.Deferred(function(n) {
                  E.each(t, function(t, r) {
                    const i = y(e[r[4]]) && e[r[4]];
                    o[r[1]](function() {
                      const e = i && i.apply(this, arguments);
                      e && y(e.promise)
                        ? e
                            .promise()
                            .progress(n.notify)
                            .done(n.resolve)
                            .fail(n.reject)
                        : n[`${r[0]}With`](this, i ? [e] : arguments);
                    });
                  }),
                    (e = null);
                }).promise();
              },
              then(e, r, i) {
                let o = 0;
                function s(e, t, r, i) {
                  return function() {
                    let a = this;
                    let l = arguments;
                    const u = function() {
                      let n;
                      let u;
                      if (!(e < o)) {
                        if ((n = r.apply(a, l)) === t.promise())
                          throw new TypeError('Thenable self-resolution');
                        (u =
                          n &&
                          (typeof n === 'object' || typeof n === 'function') &&
                          n.then),
                          y(u)
                            ? i
                              ? u.call(n, s(o, t, M, i), s(o, t, W, i))
                              : (o++,
                                u.call(
                                  n,
                                  s(o, t, M, i),
                                  s(o, t, W, i),
                                  s(o, t, M, t.notifyWith)
                                ))
                            : (r !== M && ((a = void 0), (l = [n])),
                              (i || t.resolveWith)(a, l));
                      }
                    };
                    var c = i
                      ? u
                      : function() {
                          try {
                            u();
                          } catch (n) {
                            E.Deferred.exceptionHook &&
                              E.Deferred.exceptionHook(n, c.stackTrace),
                              e + 1 >= o &&
                                (r !== W && ((a = void 0), (l = [n])),
                                t.rejectWith(a, l));
                          }
                        };
                    e
                      ? c()
                      : (E.Deferred.getStackHook &&
                          (c.stackTrace = E.Deferred.getStackHook()),
                        n.setTimeout(c));
                  };
                }
                return E.Deferred(function(n) {
                  t[0][3].add(s(0, n, y(i) ? i : M, n.notifyWith)),
                    t[1][3].add(s(0, n, y(e) ? e : M)),
                    t[2][3].add(s(0, n, y(r) ? r : W));
                }).promise();
              },
              promise(e) {
                return e != null ? E.extend(e, i) : i;
              },
            };
            var o = {};
            return (
              E.each(t, function(e, n) {
                const s = n[2];
                const a = n[5];
                (i[n[1]] = s.add),
                  a &&
                    s.add(
                      function() {
                        r = a;
                      },
                      t[3 - e][2].disable,
                      t[3 - e][3].disable,
                      t[0][2].lock,
                      t[0][3].lock
                    ),
                  s.add(n[3].fire),
                  (o[n[0]] = function() {
                    return (
                      o[`${n[0]}With`](this === o ? void 0 : this, arguments),
                      this
                    );
                  }),
                  (o[`${n[0]}With`] = s.fireWith);
              }),
              i.promise(o),
              e && e.call(o, o),
              o
            );
          },
          when(e) {
            let t = arguments.length;
            let n = t;
            const r = Array(n);
            const i = l.call(arguments);
            const o = E.Deferred();
            const s = function(e) {
              return function(n) {
                (r[e] = this),
                  (i[e] = arguments.length > 1 ? l.call(arguments) : n),
                  --t || o.resolveWith(r, i);
              };
            };
            if (
              t <= 1 &&
              (F(e, o.done(s(n)).resolve, o.reject, !t),
              o.state() === 'pending' || y(i[n] && i[n].then))
            )
              return o.then();
            for (; n--; ) F(i[n], s(n), o.reject);
            return o.promise();
          },
        });
      const B = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
      (E.Deferred.exceptionHook = function(e, t) {
        n.console &&
          n.console.warn &&
          e &&
          B.test(e.name) &&
          n.console.warn(`jQuery.Deferred exception: ${e.message}`, e.stack, t);
      }),
        (E.readyException = function(e) {
          n.setTimeout(function() {
            throw e;
          });
        });
      const U = E.Deferred();
      function $() {
        s.removeEventListener('DOMContentLoaded', $),
          n.removeEventListener('load', $),
          E.ready();
      }
      (E.fn.ready = function(e) {
        return (
          U.then(e).catch(function(e) {
            E.readyException(e);
          }),
          this
        );
      }),
        E.extend({
          isReady: !1,
          readyWait: 1,
          ready(e) {
            (!0 === e ? --E.readyWait : E.isReady) ||
              ((E.isReady = !0),
              (!0 !== e && --E.readyWait > 0) || U.resolveWith(s, [E]));
          },
        }),
        (E.ready.then = U.then),
        s.readyState === 'complete' ||
        (s.readyState !== 'loading' && !s.documentElement.doScroll)
          ? n.setTimeout(E.ready)
          : (s.addEventListener('DOMContentLoaded', $),
            n.addEventListener('load', $));
      var z = function(e, t, n, r, i, o, s) {
        let a = 0;
        const l = e.length;
        let u = n == null;
        if (x(n) === 'object')
          for (a in ((i = !0), n)) z(e, t, a, n[a], !0, o, s);
        else if (
          void 0 !== r &&
          ((i = !0),
          y(r) || (s = !0),
          u &&
            (s
              ? (t.call(e, r), (t = null))
              : ((u = t),
                (t = function(e, t, n) {
                  return u.call(E(e), n);
                }))),
          t)
        )
          for (; a < l; a++) t(e[a], n, s ? r : r.call(e[a], a, t(e[a], n)));
        return i ? e : u ? t.call(e) : l ? t(e[0], n) : o;
      };
      const V = /^-ms-/;
      const K = /-([a-z])/g;
      function Q(e, t) {
        return t.toUpperCase();
      }
      function X(e) {
        return e.replace(V, 'ms-').replace(K, Q);
      }
      const Y = function(e) {
        return e.nodeType === 1 || e.nodeType === 9 || !+e.nodeType;
      };
      function G() {
        this.expando = E.expando + G.uid++;
      }
      (G.uid = 1),
        (G.prototype = {
          cache(e) {
            let t = e[this.expando];
            return (
              t ||
                ((t = {}),
                Y(e) &&
                  (e.nodeType
                    ? (e[this.expando] = t)
                    : Object.defineProperty(e, this.expando, {
                        value: t,
                        configurable: !0,
                      }))),
              t
            );
          },
          set(e, t, n) {
            let r;
            const i = this.cache(e);
            if (typeof t === 'string') i[X(t)] = n;
            else for (r in t) i[X(r)] = t[r];
            return i;
          },
          get(e, t) {
            return void 0 === t
              ? this.cache(e)
              : e[this.expando] && e[this.expando][X(t)];
          },
          access(e, t, n) {
            return void 0 === t || (t && typeof t === 'string' && void 0 === n)
              ? this.get(e, t)
              : (this.set(e, t, n), void 0 !== n ? n : t);
          },
          remove(e, t) {
            let n;
            const r = e[this.expando];
            if (void 0 !== r) {
              if (void 0 !== t) {
                n = (t = Array.isArray(t)
                  ? t.map(X)
                  : (t = X(t)) in r
                  ? [t]
                  : t.match(R) || []).length;
                for (; n--; ) delete r[t[n]];
              }
              (void 0 === t || E.isEmptyObject(r)) &&
                (e.nodeType
                  ? (e[this.expando] = void 0)
                  : delete e[this.expando]);
            }
          },
          hasData(e) {
            const t = e[this.expando];
            return void 0 !== t && !E.isEmptyObject(t);
          },
        });
      const J = new G();
      const Z = new G();
      const ee = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/;
      const te = /[A-Z]/g;
      function ne(e, t, n) {
        let r;
        if (void 0 === n && e.nodeType === 1)
          if (
            ((r = `data-${t.replace(te, '-$&').toLowerCase()}`),
            typeof (n = e.getAttribute(r)) === 'string')
          ) {
            try {
              n = (function(e) {
                return (
                  e === 'true' ||
                  (e !== 'false' &&
                    (e === 'null'
                      ? null
                      : e === `${+e}`
                      ? +e
                      : ee.test(e)
                      ? JSON.parse(e)
                      : e))
                );
              })(n);
            } catch (e) {}
            Z.set(e, t, n);
          } else n = void 0;
        return n;
      }
      E.extend({
        hasData(e) {
          return Z.hasData(e) || J.hasData(e);
        },
        data(e, t, n) {
          return Z.access(e, t, n);
        },
        removeData(e, t) {
          Z.remove(e, t);
        },
        _data(e, t, n) {
          return J.access(e, t, n);
        },
        _removeData(e, t) {
          J.remove(e, t);
        },
      }),
        E.fn.extend({
          data(e, t) {
            let n;
            let r;
            let i;
            const o = this[0];
            const s = o && o.attributes;
            if (void 0 === e) {
              if (
                this.length &&
                ((i = Z.get(o)), o.nodeType === 1 && !J.get(o, 'hasDataAttrs'))
              ) {
                for (n = s.length; n--; )
                  s[n] &&
                    (r = s[n].name).indexOf('data-') === 0 &&
                    ((r = X(r.slice(5))), ne(o, r, i[r]));
                J.set(o, 'hasDataAttrs', !0);
              }
              return i;
            }
            return typeof e === 'object'
              ? this.each(function() {
                  Z.set(this, e);
                })
              : z(
                  this,
                  function(t) {
                    let n;
                    if (o && void 0 === t)
                      return void 0 !== (n = Z.get(o, e))
                        ? n
                        : void 0 !== (n = ne(o, e))
                        ? n
                        : void 0;
                    this.each(function() {
                      Z.set(this, e, t);
                    });
                  },
                  null,
                  t,
                  arguments.length > 1,
                  null,
                  !0
                );
          },
          removeData(e) {
            return this.each(function() {
              Z.remove(this, e);
            });
          },
        }),
        E.extend({
          queue(e, t, n) {
            let r;
            if (e)
              return (
                (t = `${t || 'fx'}queue`),
                (r = J.get(e, t)),
                n &&
                  (!r || Array.isArray(n)
                    ? (r = J.access(e, t, E.makeArray(n)))
                    : r.push(n)),
                r || []
              );
          },
          dequeue(e, t) {
            t = t || 'fx';
            const n = E.queue(e, t);
            let r = n.length;
            let i = n.shift();
            const o = E._queueHooks(e, t);
            i === 'inprogress' && ((i = n.shift()), r--),
              i &&
                (t === 'fx' && n.unshift('inprogress'),
                delete o.stop,
                i.call(
                  e,
                  function() {
                    E.dequeue(e, t);
                  },
                  o
                )),
              !r && o && o.empty.fire();
          },
          _queueHooks(e, t) {
            const n = `${t}queueHooks`;
            return (
              J.get(e, n) ||
              J.access(e, n, {
                empty: E.Callbacks('once memory').add(function() {
                  J.remove(e, [`${t}queue`, n]);
                }),
              })
            );
          },
        }),
        E.fn.extend({
          queue(e, t) {
            let n = 2;
            return (
              typeof e !== 'string' && ((t = e), (e = 'fx'), n--),
              arguments.length < n
                ? E.queue(this[0], e)
                : void 0 === t
                ? this
                : this.each(function() {
                    const n = E.queue(this, e, t);
                    E._queueHooks(this, e),
                      e === 'fx' && n[0] !== 'inprogress' && E.dequeue(this, e);
                  })
            );
          },
          dequeue(e) {
            return this.each(function() {
              E.dequeue(this, e);
            });
          },
          clearQueue(e) {
            return this.queue(e || 'fx', []);
          },
          promise(e, t) {
            let n;
            let r = 1;
            const i = E.Deferred();
            const o = this;
            let s = this.length;
            const a = function() {
              --r || i.resolveWith(o, [o]);
            };
            for (
              typeof e !== 'string' && ((t = e), (e = void 0)), e = e || 'fx';
              s--;

            )
              (n = J.get(o[s], `${e}queueHooks`)) &&
                n.empty &&
                (r++, n.empty.add(a));
            return a(), i.promise(t);
          },
        });
      const re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
      const ie = new RegExp(`^(?:([+-])=|)(${re})([a-z%]*)$`, 'i');
      const oe = ['Top', 'Right', 'Bottom', 'Left'];
      const se = s.documentElement;
      let ae = function(e) {
        return E.contains(e.ownerDocument, e);
      };
      const le = { composed: !0 };
      se.getRootNode &&
        (ae = function(e) {
          return (
            E.contains(e.ownerDocument, e) ||
            e.getRootNode(le) === e.ownerDocument
          );
        });
      const ue = function(e, t) {
        return (
          (e = t || e).style.display === 'none' ||
          (e.style.display === '' && ae(e) && E.css(e, 'display') === 'none')
        );
      };
      const ce = function(e, t, n, r) {
        let i;
        let o;
        const s = {};
        for (o in t) (s[o] = e.style[o]), (e.style[o] = t[o]);
        for (o in ((i = n.apply(e, r || [])), t)) e.style[o] = s[o];
        return i;
      };
      function fe(e, t, n, r) {
        let i;
        let o;
        let s = 20;
        const a = r
          ? function() {
              return r.cur();
            }
          : function() {
              return E.css(e, t, '');
            };
        let l = a();
        let u = (n && n[3]) || (E.cssNumber[t] ? '' : 'px');
        let c =
          e.nodeType &&
          (E.cssNumber[t] || (u !== 'px' && +l)) &&
          ie.exec(E.css(e, t));
        if (c && c[3] !== u) {
          for (l /= 2, u = u || c[3], c = +l || 1; s--; )
            E.style(e, t, c + u),
              (1 - o) * (1 - (o = a() / l || 0.5)) <= 0 && (s = 0),
              (c /= o);
          (c *= 2), E.style(e, t, c + u), (n = n || []);
        }
        return (
          n &&
            ((c = +c || +l || 0),
            (i = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
            r && ((r.unit = u), (r.start = c), (r.end = i))),
          i
        );
      }
      const de = {};
      function he(e) {
        let t;
        const n = e.ownerDocument;
        const r = e.nodeName;
        let i = de[r];
        return (
          i ||
          ((t = n.body.appendChild(n.createElement(r))),
          (i = E.css(t, 'display')),
          t.parentNode.removeChild(t),
          i === 'none' && (i = 'block'),
          (de[r] = i),
          i)
        );
      }
      function pe(e, t) {
        for (var n, r, i = [], o = 0, s = e.length; o < s; o++)
          (r = e[o]).style &&
            ((n = r.style.display),
            t
              ? (n === 'none' &&
                  ((i[o] = J.get(r, 'display') || null),
                  i[o] || (r.style.display = '')),
                r.style.display === '' && ue(r) && (i[o] = he(r)))
              : n !== 'none' && ((i[o] = 'none'), J.set(r, 'display', n)));
        for (o = 0; o < s; o++) i[o] != null && (e[o].style.display = i[o]);
        return e;
      }
      E.fn.extend({
        show() {
          return pe(this, !0);
        },
        hide() {
          return pe(this);
        },
        toggle(e) {
          return typeof e === 'boolean'
            ? e
              ? this.show()
              : this.hide()
            : this.each(function() {
                ue(this) ? E(this).show() : E(this).hide();
              });
        },
      });
      const ge = /^(?:checkbox|radio)$/i;
      const me = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i;
      const ve = /^$|^module$|\/(?:java|ecma)script/i;
      const ye = {
        option: [1, "<select multiple='multiple'>", '</select>'],
        thead: [1, '<table>', '</table>'],
        col: [2, '<table><colgroup>', '</colgroup></table>'],
        tr: [2, '<table><tbody>', '</tbody></table>'],
        td: [3, '<table><tbody><tr>', '</tr></tbody></table>'],
        _default: [0, '', ''],
      };
      function be(e, t) {
        let n;
        return (
          (n =
            void 0 !== e.getElementsByTagName
              ? e.getElementsByTagName(t || '*')
              : void 0 !== e.querySelectorAll
              ? e.querySelectorAll(t || '*')
              : []),
          void 0 === t || (t && k(e, t)) ? E.merge([e], n) : n
        );
      }
      function _e(e, t) {
        for (let n = 0, r = e.length; n < r; n++)
          J.set(e[n], 'globalEval', !t || J.get(t[n], 'globalEval'));
      }
      (ye.optgroup = ye.option),
        (ye.tbody = ye.tfoot = ye.colgroup = ye.caption = ye.thead),
        (ye.th = ye.td);
      let we;
      let xe;
      const Ee = /<|&#?\w+;/;
      function Te(e, t, n, r, i) {
        for (
          var o,
            s,
            a,
            l,
            u,
            c,
            f = t.createDocumentFragment(),
            d = [],
            h = 0,
            p = e.length;
          h < p;
          h++
        )
          if ((o = e[h]) || o === 0)
            if (x(o) === 'object') E.merge(d, o.nodeType ? [o] : o);
            else if (Ee.test(o)) {
              for (
                s = s || f.appendChild(t.createElement('div')),
                  a = (me.exec(o) || ['', ''])[1].toLowerCase(),
                  l = ye[a] || ye._default,
                  s.innerHTML = l[1] + E.htmlPrefilter(o) + l[2],
                  c = l[0];
                c--;

              )
                s = s.lastChild;
              E.merge(d, s.childNodes), ((s = f.firstChild).textContent = '');
            } else d.push(t.createTextNode(o));
        for (f.textContent = '', h = 0; (o = d[h++]); )
          if (r && E.inArray(o, r) > -1) i && i.push(o);
          else if (
            ((u = ae(o)), (s = be(f.appendChild(o), 'script')), u && _e(s), n)
          )
            for (c = 0; (o = s[c++]); ) ve.test(o.type || '') && n.push(o);
        return f;
      }
      (we = s.createDocumentFragment().appendChild(s.createElement('div'))),
        (xe = s.createElement('input')).setAttribute('type', 'radio'),
        xe.setAttribute('checked', 'checked'),
        xe.setAttribute('name', 't'),
        we.appendChild(xe),
        (v.checkClone = we.cloneNode(!0).cloneNode(!0).lastChild.checked),
        (we.innerHTML = '<textarea>x</textarea>'),
        (v.noCloneChecked = !!we.cloneNode(!0).lastChild.defaultValue);
      const Ce = /^key/;
      const Se = /^(?:mouse|pointer|contextmenu|drag|drop)|click/;
      const De = /^([^.]*)(?:\.(.+)|)/;
      function Ae() {
        return !0;
      }
      function Ne() {
        return !1;
      }
      function ke(e, t) {
        return (
          (e ===
            (function() {
              try {
                return s.activeElement;
              } catch (e) {}
            })()) ==
          (t === 'focus')
        );
      }
      function Ie(e, t, n, r, i, o) {
        let s;
        let a;
        if (typeof t === 'object') {
          for (a in (typeof n !== 'string' && ((r = r || n), (n = void 0)), t))
            Ie(e, a, n, r, t[a], o);
          return e;
        }
        if (
          (r == null && i == null
            ? ((i = n), (r = n = void 0))
            : i == null &&
              (typeof n === 'string'
                ? ((i = r), (r = void 0))
                : ((i = r), (r = n), (n = void 0))),
          !1 === i)
        )
          i = Ne;
        else if (!i) return e;
        return (
          o === 1 &&
            ((s = i),
            ((i = function(e) {
              return E().off(e), s.apply(this, arguments);
            }).guid = s.guid || (s.guid = E.guid++))),
          e.each(function() {
            E.event.add(this, t, i, r, n);
          })
        );
      }
      function Oe(e, t, n) {
        n
          ? (J.set(e, t, !1),
            E.event.add(e, t, {
              namespace: !1,
              handler(e) {
                let r;
                let i;
                let o = J.get(this, t);
                if (1 & e.isTrigger && this[t]) {
                  if (o.length)
                    (E.event.special[t] || {}).delegateType &&
                      e.stopPropagation();
                  else if (
                    ((o = l.call(arguments)),
                    J.set(this, t, o),
                    (r = n(this, t)),
                    this[t](),
                    o !== (i = J.get(this, t)) || r
                      ? J.set(this, t, !1)
                      : (i = {}),
                    o !== i)
                  )
                    return (
                      e.stopImmediatePropagation(), e.preventDefault(), i.value
                    );
                } else
                  o.length &&
                    (J.set(this, t, {
                      value: E.event.trigger(
                        E.extend(o[0], E.Event.prototype),
                        o.slice(1),
                        this
                      ),
                    }),
                    e.stopImmediatePropagation());
              },
            }))
          : void 0 === J.get(e, t) && E.event.add(e, t, Ae);
      }
      (E.event = {
        global: {},
        add(e, t, n, r, i) {
          let o;
          let s;
          let a;
          let l;
          let u;
          let c;
          let f;
          let d;
          let h;
          let p;
          let g;
          const m = J.get(e);
          if (m)
            for (
              n.handler && ((n = (o = n).handler), (i = o.selector)),
                i && E.find.matchesSelector(se, i),
                n.guid || (n.guid = E.guid++),
                (l = m.events) || (l = m.events = {}),
                (s = m.handle) ||
                  (s = m.handle = function(t) {
                    return void 0 !== E && E.event.triggered !== t.type
                      ? E.event.dispatch.apply(e, arguments)
                      : void 0;
                  }),
                u = (t = (t || '').match(R) || ['']).length;
              u--;

            )
              (h = g = (a = De.exec(t[u]) || [])[1]),
                (p = (a[2] || '').split('.').sort()),
                h &&
                  ((f = E.event.special[h] || {}),
                  (h = (i ? f.delegateType : f.bindType) || h),
                  (f = E.event.special[h] || {}),
                  (c = E.extend(
                    {
                      type: h,
                      origType: g,
                      data: r,
                      handler: n,
                      guid: n.guid,
                      selector: i,
                      needsContext: i && E.expr.match.needsContext.test(i),
                      namespace: p.join('.'),
                    },
                    o
                  )),
                  (d = l[h]) ||
                    (((d = l[h] = []).delegateCount = 0),
                    (f.setup && !1 !== f.setup.call(e, r, p, s)) ||
                      (e.addEventListener && e.addEventListener(h, s))),
                  f.add &&
                    (f.add.call(e, c),
                    c.handler.guid || (c.handler.guid = n.guid)),
                  i ? d.splice(d.delegateCount++, 0, c) : d.push(c),
                  (E.event.global[h] = !0));
        },
        remove(e, t, n, r, i) {
          let o;
          let s;
          let a;
          let l;
          let u;
          let c;
          let f;
          let d;
          let h;
          let p;
          let g;
          const m = J.hasData(e) && J.get(e);
          if (m && (l = m.events)) {
            for (u = (t = (t || '').match(R) || ['']).length; u--; )
              if (
                ((h = g = (a = De.exec(t[u]) || [])[1]),
                (p = (a[2] || '').split('.').sort()),
                h)
              ) {
                for (
                  f = E.event.special[h] || {},
                    d = l[(h = (r ? f.delegateType : f.bindType) || h)] || [],
                    a =
                      a[2] &&
                      new RegExp(`(^|\\.)${p.join('\\.(?:.*\\.|)')}(\\.|$)`),
                    s = o = d.length;
                  o--;

                )
                  (c = d[o]),
                    (!i && g !== c.origType) ||
                      (n && n.guid !== c.guid) ||
                      (a && !a.test(c.namespace)) ||
                      (r && r !== c.selector && (r !== '**' || !c.selector)) ||
                      (d.splice(o, 1),
                      c.selector && d.delegateCount--,
                      f.remove && f.remove.call(e, c));
                s &&
                  !d.length &&
                  ((f.teardown && !1 !== f.teardown.call(e, p, m.handle)) ||
                    E.removeEvent(e, h, m.handle),
                  delete l[h]);
              } else for (h in l) E.event.remove(e, h + t[u], n, r, !0);
            E.isEmptyObject(l) && J.remove(e, 'handle events');
          }
        },
        dispatch(e) {
          let t;
          let n;
          let r;
          let i;
          let o;
          let s;
          const a = E.event.fix(e);
          const l = new Array(arguments.length);
          const u = (J.get(this, 'events') || {})[a.type] || [];
          const c = E.event.special[a.type] || {};
          for (l[0] = a, t = 1; t < arguments.length; t++) l[t] = arguments[t];
          if (
            ((a.delegateTarget = this),
            !c.preDispatch || !1 !== c.preDispatch.call(this, a))
          ) {
            for (
              s = E.event.handlers.call(this, a, u), t = 0;
              (i = s[t++]) && !a.isPropagationStopped();

            )
              for (
                a.currentTarget = i.elem, n = 0;
                (o = i.handlers[n++]) && !a.isImmediatePropagationStopped();

              )
                (a.rnamespace &&
                  !1 !== o.namespace &&
                  !a.rnamespace.test(o.namespace)) ||
                  ((a.handleObj = o),
                  (a.data = o.data),
                  void 0 !==
                    (r = (
                      (E.event.special[o.origType] || {}).handle || o.handler
                    ).apply(i.elem, l)) &&
                    !1 === (a.result = r) &&
                    (a.preventDefault(), a.stopPropagation()));
            return c.postDispatch && c.postDispatch.call(this, a), a.result;
          }
        },
        handlers(e, t) {
          let n;
          let r;
          let i;
          let o;
          let s;
          const a = [];
          const l = t.delegateCount;
          let u = e.target;
          if (l && u.nodeType && !(e.type === 'click' && e.button >= 1))
            for (; u !== this; u = u.parentNode || this)
              if (
                u.nodeType === 1 &&
                (e.type !== 'click' || !0 !== u.disabled)
              ) {
                for (o = [], s = {}, n = 0; n < l; n++)
                  void 0 === s[(i = `${(r = t[n]).selector} `)] &&
                    (s[i] = r.needsContext
                      ? E(i, this).index(u) > -1
                      : E.find(i, this, null, [u]).length),
                    s[i] && o.push(r);
                o.length && a.push({ elem: u, handlers: o });
              }
          return (
            (u = this),
            l < t.length && a.push({ elem: u, handlers: t.slice(l) }),
            a
          );
        },
        addProp(e, t) {
          Object.defineProperty(E.Event.prototype, e, {
            enumerable: !0,
            configurable: !0,
            get: y(t)
              ? function() {
                  if (this.originalEvent) return t(this.originalEvent);
                }
              : function() {
                  if (this.originalEvent) return this.originalEvent[e];
                },
            set(t) {
              Object.defineProperty(this, e, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: t,
              });
            },
          });
        },
        fix(e) {
          return e[E.expando] ? e : new E.Event(e);
        },
        special: {
          load: { noBubble: !0 },
          click: {
            setup(e) {
              const t = this || e;
              return (
                ge.test(t.type) &&
                  t.click &&
                  k(t, 'input') &&
                  Oe(t, 'click', Ae),
                !1
              );
            },
            trigger(e) {
              const t = this || e;
              return (
                ge.test(t.type) && t.click && k(t, 'input') && Oe(t, 'click'),
                !0
              );
            },
            _default(e) {
              const t = e.target;
              return (
                (ge.test(t.type) &&
                  t.click &&
                  k(t, 'input') &&
                  J.get(t, 'click')) ||
                k(t, 'a')
              );
            },
          },
          beforeunload: {
            postDispatch(e) {
              void 0 !== e.result &&
                e.originalEvent &&
                (e.originalEvent.returnValue = e.result);
            },
          },
        },
      }),
        (E.removeEvent = function(e, t, n) {
          e.removeEventListener && e.removeEventListener(t, n);
        }),
        (E.Event = function(e, t) {
          if (!(this instanceof E.Event)) return new E.Event(e, t);
          e && e.type
            ? ((this.originalEvent = e),
              (this.type = e.type),
              (this.isDefaultPrevented =
                e.defaultPrevented ||
                (void 0 === e.defaultPrevented && !1 === e.returnValue)
                  ? Ae
                  : Ne),
              (this.target =
                e.target && e.target.nodeType === 3
                  ? e.target.parentNode
                  : e.target),
              (this.currentTarget = e.currentTarget),
              (this.relatedTarget = e.relatedTarget))
            : (this.type = e),
            t && E.extend(this, t),
            (this.timeStamp = (e && e.timeStamp) || Date.now()),
            (this[E.expando] = !0);
        }),
        (E.Event.prototype = {
          constructor: E.Event,
          isDefaultPrevented: Ne,
          isPropagationStopped: Ne,
          isImmediatePropagationStopped: Ne,
          isSimulated: !1,
          preventDefault() {
            const e = this.originalEvent;
            (this.isDefaultPrevented = Ae),
              e && !this.isSimulated && e.preventDefault();
          },
          stopPropagation() {
            const e = this.originalEvent;
            (this.isPropagationStopped = Ae),
              e && !this.isSimulated && e.stopPropagation();
          },
          stopImmediatePropagation() {
            const e = this.originalEvent;
            (this.isImmediatePropagationStopped = Ae),
              e && !this.isSimulated && e.stopImmediatePropagation(),
              this.stopPropagation();
          },
        }),
        E.each(
          {
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            char: !0,
            code: !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which(e) {
              const t = e.button;
              return e.which == null && Ce.test(e.type)
                ? e.charCode != null
                  ? e.charCode
                  : e.keyCode
                : !e.which && void 0 !== t && Se.test(e.type)
                ? 1 & t
                  ? 1
                  : 2 & t
                  ? 3
                  : 4 & t
                  ? 2
                  : 0
                : e.which;
            },
          },
          E.event.addProp
        ),
        E.each({ focus: 'focusin', blur: 'focusout' }, function(e, t) {
          E.event.special[e] = {
            setup() {
              return Oe(this, e, ke), !1;
            },
            trigger() {
              return Oe(this, e), !0;
            },
            delegateType: t,
          };
        }),
        E.each(
          {
            mouseenter: 'mouseover',
            mouseleave: 'mouseout',
            pointerenter: 'pointerover',
            pointerleave: 'pointerout',
          },
          function(e, t) {
            E.event.special[e] = {
              delegateType: t,
              bindType: t,
              handle(e) {
                let n;
                const r = this;
                const i = e.relatedTarget;
                const o = e.handleObj;
                return (
                  (i && (i === r || E.contains(r, i))) ||
                    ((e.type = o.origType),
                    (n = o.handler.apply(this, arguments)),
                    (e.type = t)),
                  n
                );
              },
            };
          }
        ),
        E.fn.extend({
          on(e, t, n, r) {
            return Ie(this, e, t, n, r);
          },
          one(e, t, n, r) {
            return Ie(this, e, t, n, r, 1);
          },
          off(e, t, n) {
            let r;
            let i;
            if (e && e.preventDefault && e.handleObj)
              return (
                (r = e.handleObj),
                E(e.delegateTarget).off(
                  r.namespace ? `${r.origType}.${r.namespace}` : r.origType,
                  r.selector,
                  r.handler
                ),
                this
              );
            if (typeof e === 'object') {
              for (i in e) this.off(i, t, e[i]);
              return this;
            }
            return (
              (!1 !== t && typeof t !== 'function') || ((n = t), (t = void 0)),
              !1 === n && (n = Ne),
              this.each(function() {
                E.event.remove(this, e, n, t);
              })
            );
          },
        });
      const Le = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi;
      const je = /<script|<style|<link/i;
      const Pe = /checked\s*(?:[^=]|=\s*.checked.)/i;
      const He = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
      function qe(e, t) {
        return (
          (k(e, 'table') &&
            k(t.nodeType !== 11 ? t : t.firstChild, 'tr') &&
            E(e).children('tbody')[0]) ||
          e
        );
      }
      function Re(e) {
        return (e.type = `${e.getAttribute('type') !== null}/${e.type}`), e;
      }
      function Me(e) {
        return (
          (e.type || '').slice(0, 5) === 'true/'
            ? (e.type = e.type.slice(5))
            : e.removeAttribute('type'),
          e
        );
      }
      function We(e, t) {
        let n;
        let r;
        let i;
        let o;
        let s;
        let a;
        let l;
        let u;
        if (t.nodeType === 1) {
          if (
            J.hasData(e) &&
            ((o = J.access(e)), (s = J.set(t, o)), (u = o.events))
          )
            for (i in (delete s.handle, (s.events = {}), u))
              for (n = 0, r = u[i].length; n < r; n++)
                E.event.add(t, i, u[i][n]);
          Z.hasData(e) &&
            ((a = Z.access(e)), (l = E.extend({}, a)), Z.set(t, l));
        }
      }
      function Fe(e, t) {
        const n = t.nodeName.toLowerCase();
        n === 'input' && ge.test(e.type)
          ? (t.checked = e.checked)
          : (n !== 'input' && n !== 'textarea') ||
            (t.defaultValue = e.defaultValue);
      }
      function Be(e, t, n, r) {
        t = u.apply([], t);
        let i;
        let o;
        let s;
        let a;
        let l;
        let c;
        let f = 0;
        const d = e.length;
        const h = d - 1;
        const p = t[0];
        const g = y(p);
        if (
          g ||
          (d > 1 && typeof p === 'string' && !v.checkClone && Pe.test(p))
        )
          return e.each(function(i) {
            const o = e.eq(i);
            g && (t[0] = p.call(this, i, o.html())), Be(o, t, n, r);
          });
        if (
          d &&
          ((o = (i = Te(t, e[0].ownerDocument, !1, e, r)).firstChild),
          i.childNodes.length === 1 && (i = o),
          o || r)
        ) {
          for (a = (s = E.map(be(i, 'script'), Re)).length; f < d; f++)
            (l = i),
              f !== h &&
                ((l = E.clone(l, !0, !0)), a && E.merge(s, be(l, 'script'))),
              n.call(e[f], l, f);
          if (a)
            for (
              c = s[s.length - 1].ownerDocument, E.map(s, Me), f = 0;
              f < a;
              f++
            )
              (l = s[f]),
                ve.test(l.type || '') &&
                  !J.access(l, 'globalEval') &&
                  E.contains(c, l) &&
                  (l.src && (l.type || '').toLowerCase() !== 'module'
                    ? E._evalUrl &&
                      !l.noModule &&
                      E._evalUrl(l.src, {
                        nonce: l.nonce || l.getAttribute('nonce'),
                      })
                    : w(l.textContent.replace(He, ''), l, c));
        }
        return e;
      }
      function Ue(e, t, n) {
        for (var r, i = t ? E.filter(t, e) : e, o = 0; (r = i[o]) != null; o++)
          n || r.nodeType !== 1 || E.cleanData(be(r)),
            r.parentNode &&
              (n && ae(r) && _e(be(r, 'script')), r.parentNode.removeChild(r));
        return e;
      }
      E.extend({
        htmlPrefilter(e) {
          return e.replace(Le, '<$1></$2>');
        },
        clone(e, t, n) {
          let r;
          let i;
          let o;
          let s;
          const a = e.cloneNode(!0);
          const l = ae(e);
          if (
            !(
              v.noCloneChecked ||
              (e.nodeType !== 1 && e.nodeType !== 11) ||
              E.isXMLDoc(e)
            )
          )
            for (s = be(a), r = 0, i = (o = be(e)).length; r < i; r++)
              Fe(o[r], s[r]);
          if (t)
            if (n)
              for (
                o = o || be(e), s = s || be(a), r = 0, i = o.length;
                r < i;
                r++
              )
                We(o[r], s[r]);
            else We(e, a);
          return (
            (s = be(a, 'script')).length > 0 && _e(s, !l && be(e, 'script')), a
          );
        },
        cleanData(e) {
          for (
            var t, n, r, i = E.event.special, o = 0;
            void 0 !== (n = e[o]);
            o++
          )
            if (Y(n)) {
              if ((t = n[J.expando])) {
                if (t.events)
                  for (r in t.events)
                    i[r] ? E.event.remove(n, r) : E.removeEvent(n, r, t.handle);
                n[J.expando] = void 0;
              }
              n[Z.expando] && (n[Z.expando] = void 0);
            }
        },
      }),
        E.fn.extend({
          detach(e) {
            return Ue(this, e, !0);
          },
          remove(e) {
            return Ue(this, e);
          },
          text(e) {
            return z(
              this,
              function(e) {
                return void 0 === e
                  ? E.text(this)
                  : this.empty().each(function() {
                      (this.nodeType !== 1 &&
                        this.nodeType !== 11 &&
                        this.nodeType !== 9) ||
                        (this.textContent = e);
                    });
              },
              null,
              e,
              arguments.length
            );
          },
          append() {
            return Be(this, arguments, function(e) {
              (this.nodeType !== 1 &&
                this.nodeType !== 11 &&
                this.nodeType !== 9) ||
                qe(this, e).appendChild(e);
            });
          },
          prepend() {
            return Be(this, arguments, function(e) {
              if (
                this.nodeType === 1 ||
                this.nodeType === 11 ||
                this.nodeType === 9
              ) {
                const t = qe(this, e);
                t.insertBefore(e, t.firstChild);
              }
            });
          },
          before() {
            return Be(this, arguments, function(e) {
              this.parentNode && this.parentNode.insertBefore(e, this);
            });
          },
          after() {
            return Be(this, arguments, function(e) {
              this.parentNode &&
                this.parentNode.insertBefore(e, this.nextSibling);
            });
          },
          empty() {
            for (var e, t = 0; (e = this[t]) != null; t++)
              e.nodeType === 1 &&
                (E.cleanData(be(e, !1)), (e.textContent = ''));
            return this;
          },
          clone(e, t) {
            return (
              (e = e != null && e),
              (t = t == null ? e : t),
              this.map(function() {
                return E.clone(this, e, t);
              })
            );
          },
          html(e) {
            return z(
              this,
              function(e) {
                let t = this[0] || {};
                let n = 0;
                const r = this.length;
                if (void 0 === e && t.nodeType === 1) return t.innerHTML;
                if (
                  typeof e === 'string' &&
                  !je.test(e) &&
                  !ye[(me.exec(e) || ['', ''])[1].toLowerCase()]
                ) {
                  e = E.htmlPrefilter(e);
                  try {
                    for (; n < r; n++)
                      (t = this[n] || {}).nodeType === 1 &&
                        (E.cleanData(be(t, !1)), (t.innerHTML = e));
                    t = 0;
                  } catch (e) {}
                }
                t && this.empty().append(e);
              },
              null,
              e,
              arguments.length
            );
          },
          replaceWith() {
            const e = [];
            return Be(
              this,
              arguments,
              function(t) {
                const n = this.parentNode;
                E.inArray(this, e) < 0 &&
                  (E.cleanData(be(this)), n && n.replaceChild(t, this));
              },
              e
            );
          },
        }),
        E.each(
          {
            appendTo: 'append',
            prependTo: 'prepend',
            insertBefore: 'before',
            insertAfter: 'after',
            replaceAll: 'replaceWith',
          },
          function(e, t) {
            E.fn[e] = function(e) {
              for (
                var n, r = [], i = E(e), o = i.length - 1, s = 0;
                s <= o;
                s++
              )
                (n = s === o ? this : this.clone(!0)),
                  E(i[s])[t](n),
                  c.apply(r, n.get());
              return this.pushStack(r);
            };
          }
        );
      const $e = new RegExp(`^(${re})(?!px)[a-z%]+$`, 'i');
      const ze = function(e) {
        let t = e.ownerDocument.defaultView;
        return (t && t.opener) || (t = n), t.getComputedStyle(e);
      };
      const Ve = new RegExp(oe.join('|'), 'i');
      function Ke(e, t, n) {
        let r;
        let i;
        let o;
        let s;
        const a = e.style;
        return (
          (n = n || ze(e)) &&
            ((s = n.getPropertyValue(t) || n[t]) !== '' ||
              ae(e) ||
              (s = E.style(e, t)),
            !v.pixelBoxStyles() &&
              $e.test(s) &&
              Ve.test(t) &&
              ((r = a.width),
              (i = a.minWidth),
              (o = a.maxWidth),
              (a.minWidth = a.maxWidth = a.width = s),
              (s = n.width),
              (a.width = r),
              (a.minWidth = i),
              (a.maxWidth = o))),
          void 0 !== s ? `${s}` : s
        );
      }
      function Qe(e, t) {
        return {
          get() {
            if (!e()) return (this.get = t).apply(this, arguments);
            delete this.get;
          },
        };
      }
      !(function() {
        function e() {
          if (c) {
            (u.style.cssText =
              'position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0'),
              (c.style.cssText =
                'position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%'),
              se.appendChild(u).appendChild(c);
            const e = n.getComputedStyle(c);
            (r = e.top !== '1%'),
              (l = t(e.marginLeft) === 12),
              (c.style.right = '60%'),
              (a = t(e.right) === 36),
              (i = t(e.width) === 36),
              (c.style.position = 'absolute'),
              (o = t(c.offsetWidth / 3) === 12),
              se.removeChild(u),
              (c = null);
          }
        }
        function t(e) {
          return Math.round(parseFloat(e));
        }
        let r;
        let i;
        let o;
        let a;
        let l;
        var u = s.createElement('div');
        var c = s.createElement('div');
        c.style &&
          ((c.style.backgroundClip = 'content-box'),
          (c.cloneNode(!0).style.backgroundClip = ''),
          (v.clearCloneStyle = c.style.backgroundClip === 'content-box'),
          E.extend(v, {
            boxSizingReliable() {
              return e(), i;
            },
            pixelBoxStyles() {
              return e(), a;
            },
            pixelPosition() {
              return e(), r;
            },
            reliableMarginLeft() {
              return e(), l;
            },
            scrollboxSize() {
              return e(), o;
            },
          }));
      })();
      const Xe = ['Webkit', 'Moz', 'ms'];
      const Ye = s.createElement('div').style;
      const Ge = {};
      function Je(e) {
        const t = E.cssProps[e] || Ge[e];
        return (
          t ||
          (e in Ye
            ? e
            : (Ge[e] =
                (function(e) {
                  for (
                    let t = e[0].toUpperCase() + e.slice(1), n = Xe.length;
                    n--;

                  )
                    if ((e = Xe[n] + t) in Ye) return e;
                })(e) || e))
        );
      }
      const Ze = /^(none|table(?!-c[ea]).+)/;
      const et = /^--/;
      const tt = {
        position: 'absolute',
        visibility: 'hidden',
        display: 'block',
      };
      const nt = { letterSpacing: '0', fontWeight: '400' };
      function rt(e, t, n) {
        const r = ie.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || 'px') : t;
      }
      function it(e, t, n, r, i, o) {
        let s = t === 'width' ? 1 : 0;
        let a = 0;
        let l = 0;
        if (n === (r ? 'border' : 'content')) return 0;
        for (; s < 4; s += 2)
          n === 'margin' && (l += E.css(e, n + oe[s], !0, i)),
            r
              ? (n === 'content' && (l -= E.css(e, `padding${oe[s]}`, !0, i)),
                n !== 'margin' && (l -= E.css(e, `border${oe[s]}Width`, !0, i)))
              : ((l += E.css(e, `padding${oe[s]}`, !0, i)),
                n !== 'padding'
                  ? (l += E.css(e, `border${oe[s]}Width`, !0, i))
                  : (a += E.css(e, `border${oe[s]}Width`, !0, i)));
        return (
          !r &&
            o >= 0 &&
            (l +=
              Math.max(
                0,
                Math.ceil(
                  e[`offset${t[0].toUpperCase()}${t.slice(1)}`] -
                    o -
                    l -
                    a -
                    0.5
                )
              ) || 0),
          l
        );
      }
      function ot(e, t, n) {
        const r = ze(e);
        let i =
          (!v.boxSizingReliable() || n) &&
          E.css(e, 'boxSizing', !1, r) === 'border-box';
        let o = i;
        let s = Ke(e, t, r);
        const a = `offset${t[0].toUpperCase()}${t.slice(1)}`;
        if ($e.test(s)) {
          if (!n) return s;
          s = 'auto';
        }
        return (
          ((!v.boxSizingReliable() && i) ||
            s === 'auto' ||
            (!parseFloat(s) && E.css(e, 'display', !1, r) === 'inline')) &&
            e.getClientRects().length &&
            ((i = E.css(e, 'boxSizing', !1, r) === 'border-box'),
            (o = a in e) && (s = e[a])),
          `${(s = parseFloat(s) || 0) +
            it(e, t, n || (i ? 'border' : 'content'), o, r, s)}px`
        );
      }
      function st(e, t, n, r, i) {
        return new st.prototype.init(e, t, n, r, i);
      }
      E.extend({
        cssHooks: {
          opacity: {
            get(e, t) {
              if (t) {
                const n = Ke(e, 'opacity');
                return n === '' ? '1' : n;
              }
            },
          },
        },
        cssNumber: {
          animationIterationCount: !0,
          columnCount: !0,
          fillOpacity: !0,
          flexGrow: !0,
          flexShrink: !0,
          fontWeight: !0,
          gridArea: !0,
          gridColumn: !0,
          gridColumnEnd: !0,
          gridColumnStart: !0,
          gridRow: !0,
          gridRowEnd: !0,
          gridRowStart: !0,
          lineHeight: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0,
        },
        cssProps: {},
        style(e, t, n, r) {
          if (e && e.nodeType !== 3 && e.nodeType !== 8 && e.style) {
            let i;
            let o;
            let s;
            const a = X(t);
            const l = et.test(t);
            const u = e.style;
            if (
              (l || (t = Je(a)),
              (s = E.cssHooks[t] || E.cssHooks[a]),
              void 0 === n)
            )
              return s && 'get' in s && void 0 !== (i = s.get(e, !1, r))
                ? i
                : u[t];
            (o = typeof n) === 'string' &&
              (i = ie.exec(n)) &&
              i[1] &&
              ((n = fe(e, t, i)), (o = 'number')),
              n != null &&
                n == n &&
                (o !== 'number' ||
                  l ||
                  (n += (i && i[3]) || (E.cssNumber[a] ? '' : 'px')),
                v.clearCloneStyle ||
                  n !== '' ||
                  t.indexOf('background') !== 0 ||
                  (u[t] = 'inherit'),
                (s && 'set' in s && void 0 === (n = s.set(e, n, r))) ||
                  (l ? u.setProperty(t, n) : (u[t] = n)));
          }
        },
        css(e, t, n, r) {
          let i;
          let o;
          let s;
          const a = X(t);
          return (
            et.test(t) || (t = Je(a)),
            (s = E.cssHooks[t] || E.cssHooks[a]) &&
              'get' in s &&
              (i = s.get(e, !0, n)),
            void 0 === i && (i = Ke(e, t, r)),
            i === 'normal' && t in nt && (i = nt[t]),
            n === '' || n
              ? ((o = parseFloat(i)), !0 === n || isFinite(o) ? o || 0 : i)
              : i
          );
        },
      }),
        E.each(['height', 'width'], function(e, t) {
          E.cssHooks[t] = {
            get(e, n, r) {
              if (n)
                return !Ze.test(E.css(e, 'display')) ||
                  (e.getClientRects().length && e.getBoundingClientRect().width)
                  ? ot(e, t, r)
                  : ce(e, tt, function() {
                      return ot(e, t, r);
                    });
            },
            set(e, n, r) {
              let i;
              const o = ze(e);
              const s = !v.scrollboxSize() && o.position === 'absolute';
              const a =
                (s || r) && E.css(e, 'boxSizing', !1, o) === 'border-box';
              let l = r ? it(e, t, r, a, o) : 0;
              return (
                a &&
                  s &&
                  (l -= Math.ceil(
                    e[`offset${t[0].toUpperCase()}${t.slice(1)}`] -
                      parseFloat(o[t]) -
                      it(e, t, 'border', !1, o) -
                      0.5
                  )),
                l &&
                  (i = ie.exec(n)) &&
                  (i[3] || 'px') !== 'px' &&
                  ((e.style[t] = n), (n = E.css(e, t))),
                rt(0, n, l)
              );
            },
          };
        }),
        (E.cssHooks.marginLeft = Qe(v.reliableMarginLeft, function(e, t) {
          if (t)
            return `${parseFloat(Ke(e, 'marginLeft')) ||
              e.getBoundingClientRect().left -
                ce(e, { marginLeft: 0 }, function() {
                  return e.getBoundingClientRect().left;
                })}px`;
        })),
        E.each({ margin: '', padding: '', border: 'Width' }, function(e, t) {
          (E.cssHooks[e + t] = {
            expand(n) {
              for (
                var r = 0,
                  i = {},
                  o = typeof n === 'string' ? n.split(' ') : [n];
                r < 4;
                r++
              )
                i[e + oe[r] + t] = o[r] || o[r - 2] || o[0];
              return i;
            },
          }),
            e !== 'margin' && (E.cssHooks[e + t].set = rt);
        }),
        E.fn.extend({
          css(e, t) {
            return z(
              this,
              function(e, t, n) {
                let r;
                let i;
                const o = {};
                let s = 0;
                if (Array.isArray(t)) {
                  for (r = ze(e), i = t.length; s < i; s++)
                    o[t[s]] = E.css(e, t[s], !1, r);
                  return o;
                }
                return void 0 !== n ? E.style(e, t, n) : E.css(e, t);
              },
              e,
              t,
              arguments.length > 1
            );
          },
        }),
        (E.Tween = st),
        (st.prototype = {
          constructor: st,
          init(e, t, n, r, i, o) {
            (this.elem = e),
              (this.prop = n),
              (this.easing = i || E.easing._default),
              (this.options = t),
              (this.start = this.now = this.cur()),
              (this.end = r),
              (this.unit = o || (E.cssNumber[n] ? '' : 'px'));
          },
          cur() {
            const e = st.propHooks[this.prop];
            return e && e.get ? e.get(this) : st.propHooks._default.get(this);
          },
          run(e) {
            let t;
            const n = st.propHooks[this.prop];
            return (
              this.options.duration
                ? (this.pos = t = E.easing[this.easing](
                    e,
                    this.options.duration * e,
                    0,
                    1,
                    this.options.duration
                  ))
                : (this.pos = t = e),
              (this.now = (this.end - this.start) * t + this.start),
              this.options.step &&
                this.options.step.call(this.elem, this.now, this),
              n && n.set ? n.set(this) : st.propHooks._default.set(this),
              this
            );
          },
        }),
        (st.prototype.init.prototype = st.prototype),
        (st.propHooks = {
          _default: {
            get(e) {
              let t;
              return e.elem.nodeType !== 1 ||
                (e.elem[e.prop] != null && e.elem.style[e.prop] == null)
                ? e.elem[e.prop]
                : (t = E.css(e.elem, e.prop, '')) && t !== 'auto'
                ? t
                : 0;
            },
            set(e) {
              E.fx.step[e.prop]
                ? E.fx.step[e.prop](e)
                : e.elem.nodeType !== 1 ||
                  (!E.cssHooks[e.prop] && e.elem.style[Je(e.prop)] == null)
                ? (e.elem[e.prop] = e.now)
                : E.style(e.elem, e.prop, e.now + e.unit);
            },
          },
        }),
        (st.propHooks.scrollTop = st.propHooks.scrollLeft = {
          set(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
          },
        }),
        (E.easing = {
          linear(e) {
            return e;
          },
          swing(e) {
            return 0.5 - Math.cos(e * Math.PI) / 2;
          },
          _default: 'swing',
        }),
        (E.fx = st.prototype.init),
        (E.fx.step = {});
      let at;
      let lt;
      const ut = /^(?:toggle|show|hide)$/;
      const ct = /queueHooks$/;
      function ft() {
        lt &&
          (!1 === s.hidden && n.requestAnimationFrame
            ? n.requestAnimationFrame(ft)
            : n.setTimeout(ft, E.fx.interval),
          E.fx.tick());
      }
      function dt() {
        return (
          n.setTimeout(function() {
            at = void 0;
          }),
          (at = Date.now())
        );
      }
      function ht(e, t) {
        let n;
        let r = 0;
        const i = { height: e };
        for (t = t ? 1 : 0; r < 4; r += 2 - t)
          i[`margin${(n = oe[r])}`] = i[`padding${n}`] = e;
        return t && (i.opacity = i.width = e), i;
      }
      function pt(e, t, n) {
        for (
          var r,
            i = (gt.tweeners[t] || []).concat(gt.tweeners['*']),
            o = 0,
            s = i.length;
          o < s;
          o++
        )
          if ((r = i[o].call(n, t, e))) return r;
      }
      function gt(e, t, n) {
        let r;
        let i;
        let o = 0;
        const s = gt.prefilters.length;
        const a = E.Deferred().always(function() {
          delete l.elem;
        });
        var l = function() {
          if (i) return !1;
          for (
            var t = at || dt(),
              n = Math.max(0, u.startTime + u.duration - t),
              r = 1 - (n / u.duration || 0),
              o = 0,
              s = u.tweens.length;
            o < s;
            o++
          )
            u.tweens[o].run(r);
          return (
            a.notifyWith(e, [u, r, n]),
            r < 1 && s
              ? n
              : (s || a.notifyWith(e, [u, 1, 0]), a.resolveWith(e, [u]), !1)
          );
        };
        var u = a.promise({
          elem: e,
          props: E.extend({}, t),
          opts: E.extend(
            !0,
            { specialEasing: {}, easing: E.easing._default },
            n
          ),
          originalProperties: t,
          originalOptions: n,
          startTime: at || dt(),
          duration: n.duration,
          tweens: [],
          createTween(t, n) {
            const r = E.Tween(
              e,
              u.opts,
              t,
              n,
              u.opts.specialEasing[t] || u.opts.easing
            );
            return u.tweens.push(r), r;
          },
          stop(t) {
            let n = 0;
            const r = t ? u.tweens.length : 0;
            if (i) return this;
            for (i = !0; n < r; n++) u.tweens[n].run(1);
            return (
              t
                ? (a.notifyWith(e, [u, 1, 0]), a.resolveWith(e, [u, t]))
                : a.rejectWith(e, [u, t]),
              this
            );
          },
        });
        const c = u.props;
        for (
          !(function(e, t) {
            let n;
            let r;
            let i;
            let o;
            let s;
            for (n in e)
              if (
                ((i = t[(r = X(n))]),
                (o = e[n]),
                Array.isArray(o) && ((i = o[1]), (o = e[n] = o[0])),
                n !== r && ((e[r] = o), delete e[n]),
                (s = E.cssHooks[r]) && ('expand' in s))
              )
                for (n in ((o = s.expand(o)), delete e[r], o))
                  (n in e) || ((e[n] = o[n]), (t[n] = i));
              else t[r] = i;
          })(c, u.opts.specialEasing);
          o < s;
          o++
        )
          if ((r = gt.prefilters[o].call(u, e, c, u.opts)))
            return (
              y(r.stop) &&
                (E._queueHooks(u.elem, u.opts.queue).stop = r.stop.bind(r)),
              r
            );
        return (
          E.map(c, pt, u),
          y(u.opts.start) && u.opts.start.call(e, u),
          u
            .progress(u.opts.progress)
            .done(u.opts.done, u.opts.complete)
            .fail(u.opts.fail)
            .always(u.opts.always),
          E.fx.timer(E.extend(l, { elem: e, anim: u, queue: u.opts.queue })),
          u
        );
      }
      (E.Animation = E.extend(gt, {
        tweeners: {
          '*': [
            function(e, t) {
              const n = this.createTween(e, t);
              return fe(n.elem, e, ie.exec(t), n), n;
            },
          ],
        },
        tweener(e, t) {
          y(e) ? ((t = e), (e = ['*'])) : (e = e.match(R));
          for (var n, r = 0, i = e.length; r < i; r++)
            (n = e[r]),
              (gt.tweeners[n] = gt.tweeners[n] || []),
              gt.tweeners[n].unshift(t);
        },
        prefilters: [
          function(e, t, n) {
            let r;
            let i;
            let o;
            let s;
            let a;
            let l;
            let u;
            let c;
            const f = 'width' in t || 'height' in t;
            const d = this;
            const h = {};
            const p = e.style;
            let g = e.nodeType && ue(e);
            let m = J.get(e, 'fxshow');
            for (r in (n.queue ||
              ((s = E._queueHooks(e, 'fx')).unqueued == null &&
                ((s.unqueued = 0),
                (a = s.empty.fire),
                (s.empty.fire = function() {
                  s.unqueued || a();
                })),
              s.unqueued++,
              d.always(function() {
                d.always(function() {
                  s.unqueued--, E.queue(e, 'fx').length || s.empty.fire();
                });
              })),
            t))
              if (((i = t[r]), ut.test(i))) {
                if (
                  (delete t[r],
                  (o = o || i === 'toggle'),
                  i === (g ? 'hide' : 'show'))
                ) {
                  if (i !== 'show' || !m || void 0 === m[r]) continue;
                  g = !0;
                }
                h[r] = (m && m[r]) || E.style(e, r);
              }
            if ((l = !E.isEmptyObject(t)) || !E.isEmptyObject(h))
              for (r in (f &&
                e.nodeType === 1 &&
                ((n.overflow = [p.overflow, p.overflowX, p.overflowY]),
                (u = m && m.display) == null && (u = J.get(e, 'display')),
                (c = E.css(e, 'display')) === 'none' &&
                  (u
                    ? (c = u)
                    : (pe([e], !0),
                      (u = e.style.display || u),
                      (c = E.css(e, 'display')),
                      pe([e]))),
                (c === 'inline' || (c === 'inline-block' && u != null)) &&
                  E.css(e, 'float') === 'none' &&
                  (l ||
                    (d.done(function() {
                      p.display = u;
                    }),
                    u == null &&
                      ((c = p.display), (u = c === 'none' ? '' : c))),
                  (p.display = 'inline-block'))),
              n.overflow &&
                ((p.overflow = 'hidden'),
                d.always(function() {
                  (p.overflow = n.overflow[0]),
                    (p.overflowX = n.overflow[1]),
                    (p.overflowY = n.overflow[2]);
                })),
              (l = !1),
              h))
                l ||
                  (m
                    ? 'hidden' in m && (g = m.hidden)
                    : (m = J.access(e, 'fxshow', { display: u })),
                  o && (m.hidden = !g),
                  g && pe([e], !0),
                  d.done(function() {
                    for (r in (g || pe([e]), J.remove(e, 'fxshow'), h))
                      E.style(e, r, h[r]);
                  })),
                  (l = pt(g ? m[r] : 0, r, d)),
                  r in m ||
                    ((m[r] = l.start), g && ((l.end = l.start), (l.start = 0)));
          },
        ],
        prefilter(e, t) {
          t ? gt.prefilters.unshift(e) : gt.prefilters.push(e);
        },
      })),
        (E.speed = function(e, t, n) {
          const r =
            e && typeof e === 'object'
              ? E.extend({}, e)
              : {
                  complete: n || (!n && t) || (y(e) && e),
                  duration: e,
                  easing: (n && t) || (t && !y(t) && t),
                };
          return (
            E.fx.off
              ? (r.duration = 0)
              : typeof r.duration !== 'number' &&
                (r.duration in E.fx.speeds
                  ? (r.duration = E.fx.speeds[r.duration])
                  : (r.duration = E.fx.speeds._default)),
            (r.queue != null && !0 !== r.queue) || (r.queue = 'fx'),
            (r.old = r.complete),
            (r.complete = function() {
              y(r.old) && r.old.call(this), r.queue && E.dequeue(this, r.queue);
            }),
            r
          );
        }),
        E.fn.extend({
          fadeTo(e, t, n, r) {
            return this.filter(ue)
              .css('opacity', 0)
              .show()
              .end()
              .animate({ opacity: t }, e, n, r);
          },
          animate(e, t, n, r) {
            const i = E.isEmptyObject(e);
            const o = E.speed(t, n, r);
            const s = function() {
              const t = gt(this, E.extend({}, e), o);
              (i || J.get(this, 'finish')) && t.stop(!0);
            };
            return (
              (s.finish = s),
              i || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
            );
          },
          stop(e, t, n) {
            const r = function(e) {
              const t = e.stop;
              delete e.stop, t(n);
            };
            return (
              typeof e !== 'string' && ((n = t), (t = e), (e = void 0)),
              t && !1 !== e && this.queue(e || 'fx', []),
              this.each(function() {
                let t = !0;
                let i = e != null && `${e}queueHooks`;
                const o = E.timers;
                const s = J.get(this);
                if (i) s[i] && s[i].stop && r(s[i]);
                else for (i in s) s[i] && s[i].stop && ct.test(i) && r(s[i]);
                for (i = o.length; i--; )
                  o[i].elem !== this ||
                    (e != null && o[i].queue !== e) ||
                    (o[i].anim.stop(n), (t = !1), o.splice(i, 1));
                (!t && n) || E.dequeue(this, e);
              })
            );
          },
          finish(e) {
            return (
              !1 !== e && (e = e || 'fx'),
              this.each(function() {
                let t;
                const n = J.get(this);
                const r = n[`${e}queue`];
                const i = n[`${e}queueHooks`];
                const o = E.timers;
                const s = r ? r.length : 0;
                for (
                  n.finish = !0,
                    E.queue(this, e, []),
                    i && i.stop && i.stop.call(this, !0),
                    t = o.length;
                  t--;

                )
                  o[t].elem === this &&
                    o[t].queue === e &&
                    (o[t].anim.stop(!0), o.splice(t, 1));
                for (t = 0; t < s; t++)
                  r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish;
              })
            );
          },
        }),
        E.each(['toggle', 'show', 'hide'], function(e, t) {
          const n = E.fn[t];
          E.fn[t] = function(e, r, i) {
            return e == null || typeof e === 'boolean'
              ? n.apply(this, arguments)
              : this.animate(ht(t, !0), e, r, i);
          };
        }),
        E.each(
          {
            slideDown: ht('show'),
            slideUp: ht('hide'),
            slideToggle: ht('toggle'),
            fadeIn: { opacity: 'show' },
            fadeOut: { opacity: 'hide' },
            fadeToggle: { opacity: 'toggle' },
          },
          function(e, t) {
            E.fn[e] = function(e, n, r) {
              return this.animate(t, e, n, r);
            };
          }
        ),
        (E.timers = []),
        (E.fx.tick = function() {
          let e;
          let t = 0;
          const n = E.timers;
          for (at = Date.now(); t < n.length; t++)
            (e = n[t])() || n[t] !== e || n.splice(t--, 1);
          n.length || E.fx.stop(), (at = void 0);
        }),
        (E.fx.timer = function(e) {
          E.timers.push(e), E.fx.start();
        }),
        (E.fx.interval = 13),
        (E.fx.start = function() {
          lt || ((lt = !0), ft());
        }),
        (E.fx.stop = function() {
          lt = null;
        }),
        (E.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
        (E.fn.delay = function(e, t) {
          return (
            (e = (E.fx && E.fx.speeds[e]) || e),
            (t = t || 'fx'),
            this.queue(t, function(t, r) {
              const i = n.setTimeout(t, e);
              r.stop = function() {
                n.clearTimeout(i);
              };
            })
          );
        }),
        (function() {
          let e = s.createElement('input');
          const t = s
            .createElement('select')
            .appendChild(s.createElement('option'));
          (e.type = 'checkbox'),
            (v.checkOn = e.value !== ''),
            (v.optSelected = t.selected),
            ((e = s.createElement('input')).value = 't'),
            (e.type = 'radio'),
            (v.radioValue = e.value === 't');
        })();
      let mt;
      const vt = E.expr.attrHandle;
      E.fn.extend({
        attr(e, t) {
          return z(this, E.attr, e, t, arguments.length > 1);
        },
        removeAttr(e) {
          return this.each(function() {
            E.removeAttr(this, e);
          });
        },
      }),
        E.extend({
          attr(e, t, n) {
            let r;
            let i;
            const o = e.nodeType;
            if (o !== 3 && o !== 8 && o !== 2)
              return void 0 === e.getAttribute
                ? E.prop(e, t, n)
                : ((o === 1 && E.isXMLDoc(e)) ||
                    (i =
                      E.attrHooks[t.toLowerCase()] ||
                      (E.expr.match.bool.test(t) ? mt : void 0)),
                  void 0 !== n
                    ? n === null
                      ? void E.removeAttr(e, t)
                      : i && 'set' in i && void 0 !== (r = i.set(e, n, t))
                      ? r
                      : (e.setAttribute(t, `${n}`), n)
                    : i && 'get' in i && (r = i.get(e, t)) !== null
                    ? r
                    : (r = E.find.attr(e, t)) == null
                    ? void 0
                    : r);
          },
          attrHooks: {
            type: {
              set(e, t) {
                if (!v.radioValue && t === 'radio' && k(e, 'input')) {
                  const n = e.value;
                  return e.setAttribute('type', t), n && (e.value = n), t;
                }
              },
            },
          },
          removeAttr(e, t) {
            let n;
            let r = 0;
            const i = t && t.match(R);
            if (i && e.nodeType === 1)
              for (; (n = i[r++]); ) e.removeAttribute(n);
          },
        }),
        (mt = {
          set(e, t, n) {
            return !1 === t ? E.removeAttr(e, n) : e.setAttribute(n, n), n;
          },
        }),
        E.each(E.expr.match.bool.source.match(/\w+/g), function(e, t) {
          const n = vt[t] || E.find.attr;
          vt[t] = function(e, t, r) {
            let i;
            let o;
            const s = t.toLowerCase();
            return (
              r ||
                ((o = vt[s]),
                (vt[s] = i),
                (i = n(e, t, r) != null ? s : null),
                (vt[s] = o)),
              i
            );
          };
        });
      const yt = /^(?:input|select|textarea|button)$/i;
      const bt = /^(?:a|area)$/i;
      function _t(e) {
        return (e.match(R) || []).join(' ');
      }
      function wt(e) {
        return (e.getAttribute && e.getAttribute('class')) || '';
      }
      function xt(e) {
        return Array.isArray(e)
          ? e
          : (typeof e === 'string' && e.match(R)) || [];
      }
      E.fn.extend({
        prop(e, t) {
          return z(this, E.prop, e, t, arguments.length > 1);
        },
        removeProp(e) {
          return this.each(function() {
            delete this[E.propFix[e] || e];
          });
        },
      }),
        E.extend({
          prop(e, t, n) {
            let r;
            let i;
            const o = e.nodeType;
            if (o !== 3 && o !== 8 && o !== 2)
              return (
                (o === 1 && E.isXMLDoc(e)) ||
                  ((t = E.propFix[t] || t), (i = E.propHooks[t])),
                void 0 !== n
                  ? i && 'set' in i && void 0 !== (r = i.set(e, n, t))
                    ? r
                    : (e[t] = n)
                  : i && 'get' in i && (r = i.get(e, t)) !== null
                  ? r
                  : e[t]
              );
          },
          propHooks: {
            tabIndex: {
              get(e) {
                const t = E.find.attr(e, 'tabindex');
                return t
                  ? parseInt(t, 10)
                  : yt.test(e.nodeName) || (bt.test(e.nodeName) && e.href)
                  ? 0
                  : -1;
              },
            },
          },
          propFix: { for: 'htmlFor', class: 'className' },
        }),
        v.optSelected ||
          (E.propHooks.selected = {
            get(e) {
              const t = e.parentNode;
              return t && t.parentNode && t.parentNode.selectedIndex, null;
            },
            set(e) {
              const t = e.parentNode;
              t &&
                (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
            },
          }),
        E.each(
          [
            'tabIndex',
            'readOnly',
            'maxLength',
            'cellSpacing',
            'cellPadding',
            'rowSpan',
            'colSpan',
            'useMap',
            'frameBorder',
            'contentEditable',
          ],
          function() {
            E.propFix[this.toLowerCase()] = this;
          }
        ),
        E.fn.extend({
          addClass(e) {
            let t;
            let n;
            let r;
            let i;
            let o;
            let s;
            let a;
            let l = 0;
            if (y(e))
              return this.each(function(t) {
                E(this).addClass(e.call(this, t, wt(this)));
              });
            if ((t = xt(e)).length)
              for (; (n = this[l++]); )
                if (((i = wt(n)), (r = n.nodeType === 1 && ` ${_t(i)} `))) {
                  for (s = 0; (o = t[s++]); )
                    r.indexOf(` ${o} `) < 0 && (r += `${o} `);
                  i !== (a = _t(r)) && n.setAttribute('class', a);
                }
            return this;
          },
          removeClass(e) {
            let t;
            let n;
            let r;
            let i;
            let o;
            let s;
            let a;
            let l = 0;
            if (y(e))
              return this.each(function(t) {
                E(this).removeClass(e.call(this, t, wt(this)));
              });
            if (!arguments.length) return this.attr('class', '');
            if ((t = xt(e)).length)
              for (; (n = this[l++]); )
                if (((i = wt(n)), (r = n.nodeType === 1 && ` ${_t(i)} `))) {
                  for (s = 0; (o = t[s++]); )
                    for (; r.indexOf(` ${o} `) > -1; )
                      r = r.replace(` ${o} `, ' ');
                  i !== (a = _t(r)) && n.setAttribute('class', a);
                }
            return this;
          },
          toggleClass(e, t) {
            const n = typeof e;
            const r = n === 'string' || Array.isArray(e);
            return typeof t === 'boolean' && r
              ? t
                ? this.addClass(e)
                : this.removeClass(e)
              : y(e)
              ? this.each(function(n) {
                  E(this).toggleClass(e.call(this, n, wt(this), t), t);
                })
              : this.each(function() {
                  let t;
                  let i;
                  let o;
                  let s;
                  if (r)
                    for (i = 0, o = E(this), s = xt(e); (t = s[i++]); )
                      o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                  else
                    (void 0 !== e && n !== 'boolean') ||
                      ((t = wt(this)) && J.set(this, '__className__', t),
                      this.setAttribute &&
                        this.setAttribute(
                          'class',
                          t || !1 === e
                            ? ''
                            : J.get(this, '__className__') || ''
                        ));
                });
          },
          hasClass(e) {
            let t;
            let n;
            let r = 0;
            for (t = ` ${e} `; (n = this[r++]); )
              if (n.nodeType === 1 && ` ${_t(wt(n))} `.indexOf(t) > -1)
                return !0;
            return !1;
          },
        });
      const Et = /\r/g;
      E.fn.extend({
        val(e) {
          let t;
          let n;
          let r;
          const i = this[0];
          return arguments.length
            ? ((r = y(e)),
              this.each(function(n) {
                let i;
                this.nodeType === 1 &&
                  ((i = r ? e.call(this, n, E(this).val()) : e) == null
                    ? (i = '')
                    : typeof i === 'number'
                    ? (i += '')
                    : Array.isArray(i) &&
                      (i = E.map(i, function(e) {
                        return e == null ? '' : `${e}`;
                      })),
                  ((t =
                    E.valHooks[this.type] ||
                    E.valHooks[this.nodeName.toLowerCase()]) &&
                    'set' in t &&
                    void 0 !== t.set(this, i, 'value')) ||
                    (this.value = i));
              }))
            : i
            ? (t =
                E.valHooks[i.type] || E.valHooks[i.nodeName.toLowerCase()]) &&
              'get' in t &&
              void 0 !== (n = t.get(i, 'value'))
              ? n
              : typeof (n = i.value) === 'string'
              ? n.replace(Et, '')
              : n == null
              ? ''
              : n
            : void 0;
        },
      }),
        E.extend({
          valHooks: {
            option: {
              get(e) {
                const t = E.find.attr(e, 'value');
                return t != null ? t : _t(E.text(e));
              },
            },
            select: {
              get(e) {
                let t;
                let n;
                let r;
                const i = e.options;
                const o = e.selectedIndex;
                const s = e.type === 'select-one';
                const a = s ? null : [];
                const l = s ? o + 1 : i.length;
                for (r = o < 0 ? l : s ? o : 0; r < l; r++)
                  if (
                    ((n = i[r]).selected || r === o) &&
                    !n.disabled &&
                    (!n.parentNode.disabled || !k(n.parentNode, 'optgroup'))
                  ) {
                    if (((t = E(n).val()), s)) return t;
                    a.push(t);
                  }
                return a;
              },
              set(e, t) {
                for (
                  var n, r, i = e.options, o = E.makeArray(t), s = i.length;
                  s--;

                )
                  ((r = i[s]).selected =
                    E.inArray(E.valHooks.option.get(r), o) > -1) && (n = !0);
                return n || (e.selectedIndex = -1), o;
              },
            },
          },
        }),
        E.each(['radio', 'checkbox'], function() {
          (E.valHooks[this] = {
            set(e, t) {
              if (Array.isArray(t))
                return (e.checked = E.inArray(E(e).val(), t) > -1);
            },
          }),
            v.checkOn ||
              (E.valHooks[this].get = function(e) {
                return e.getAttribute('value') === null ? 'on' : e.value;
              });
        }),
        (v.focusin = 'onfocusin' in n);
      const Tt = /^(?:focusinfocus|focusoutblur)$/;
      const Ct = function(e) {
        e.stopPropagation();
      };
      E.extend(E.event, {
        trigger(e, t, r, i) {
          let o;
          let a;
          let l;
          let u;
          let c;
          let f;
          let d;
          let h;
          const g = [r || s];
          let m = p.call(e, 'type') ? e.type : e;
          let v = p.call(e, 'namespace') ? e.namespace.split('.') : [];
          if (
            ((a = h = l = r = r || s),
            r.nodeType !== 3 &&
              r.nodeType !== 8 &&
              !Tt.test(m + E.event.triggered) &&
              (m.indexOf('.') > -1 &&
                ((v = m.split('.')), (m = v.shift()), v.sort()),
              (c = m.indexOf(':') < 0 && `on${m}`),
              ((e = e[E.expando]
                ? e
                : new E.Event(m, typeof e === 'object' && e)).isTrigger = i
                ? 2
                : 3),
              (e.namespace = v.join('.')),
              (e.rnamespace = e.namespace
                ? new RegExp(`(^|\\.)${v.join('\\.(?:.*\\.|)')}(\\.|$)`)
                : null),
              (e.result = void 0),
              e.target || (e.target = r),
              (t = t == null ? [e] : E.makeArray(t, [e])),
              (d = E.event.special[m] || {}),
              i || !d.trigger || !1 !== d.trigger.apply(r, t)))
          ) {
            if (!i && !d.noBubble && !b(r)) {
              for (
                u = d.delegateType || m, Tt.test(u + m) || (a = a.parentNode);
                a;
                a = a.parentNode
              )
                g.push(a), (l = a);
              l === (r.ownerDocument || s) &&
                g.push(l.defaultView || l.parentWindow || n);
            }
            for (o = 0; (a = g[o++]) && !e.isPropagationStopped(); )
              (h = a),
                (e.type = o > 1 ? u : d.bindType || m),
                (f =
                  (J.get(a, 'events') || {})[e.type] && J.get(a, 'handle')) &&
                  f.apply(a, t),
                (f = c && a[c]) &&
                  f.apply &&
                  Y(a) &&
                  ((e.result = f.apply(a, t)),
                  !1 === e.result && e.preventDefault());
            return (
              (e.type = m),
              i ||
                e.isDefaultPrevented() ||
                (d._default && !1 !== d._default.apply(g.pop(), t)) ||
                !Y(r) ||
                (c &&
                  y(r[m]) &&
                  !b(r) &&
                  ((l = r[c]) && (r[c] = null),
                  (E.event.triggered = m),
                  e.isPropagationStopped() && h.addEventListener(m, Ct),
                  r[m](),
                  e.isPropagationStopped() && h.removeEventListener(m, Ct),
                  (E.event.triggered = void 0),
                  l && (r[c] = l))),
              e.result
            );
          }
        },
        simulate(e, t, n) {
          const r = E.extend(new E.Event(), n, { type: e, isSimulated: !0 });
          E.event.trigger(r, null, t);
        },
      }),
        E.fn.extend({
          trigger(e, t) {
            return this.each(function() {
              E.event.trigger(e, t, this);
            });
          },
          triggerHandler(e, t) {
            const n = this[0];
            if (n) return E.event.trigger(e, t, n, !0);
          },
        }),
        v.focusin ||
          E.each({ focus: 'focusin', blur: 'focusout' }, function(e, t) {
            const n = function(e) {
              E.event.simulate(t, e.target, E.event.fix(e));
            };
            E.event.special[t] = {
              setup() {
                const r = this.ownerDocument || this;
                const i = J.access(r, t);
                i || r.addEventListener(e, n, !0), J.access(r, t, (i || 0) + 1);
              },
              teardown() {
                const r = this.ownerDocument || this;
                const i = J.access(r, t) - 1;
                i
                  ? J.access(r, t, i)
                  : (r.removeEventListener(e, n, !0), J.remove(r, t));
              },
            };
          });
      const St = n.location;
      let Dt = Date.now();
      const At = /\?/;
      E.parseXML = function(e) {
        let t;
        if (!e || typeof e !== 'string') return null;
        try {
          t = new n.DOMParser().parseFromString(e, 'text/xml');
        } catch (e) {
          t = void 0;
        }
        return (
          (t && !t.getElementsByTagName('parsererror').length) ||
            E.error(`Invalid XML: ${e}`),
          t
        );
      };
      const Nt = /\[\]$/;
      const kt = /\r?\n/g;
      const It = /^(?:submit|button|image|reset|file)$/i;
      const Ot = /^(?:input|select|textarea|keygen)/i;
      function Lt(e, t, n, r) {
        let i;
        if (Array.isArray(t))
          E.each(t, function(t, i) {
            n || Nt.test(e)
              ? r(e, i)
              : Lt(
                  `${e}[${typeof i === 'object' && i != null ? t : ''}]`,
                  i,
                  n,
                  r
                );
          });
        else if (n || x(t) !== 'object') r(e, t);
        else for (i in t) Lt(`${e}[${i}]`, t[i], n, r);
      }
      (E.param = function(e, t) {
        let n;
        const r = [];
        const i = function(e, t) {
          const n = y(t) ? t() : t;
          r[r.length] = `${encodeURIComponent(e)}=${encodeURIComponent(
            n == null ? '' : n
          )}`;
        };
        if (e == null) return '';
        if (Array.isArray(e) || (e.jquery && !E.isPlainObject(e)))
          E.each(e, function() {
            i(this.name, this.value);
          });
        else for (n in e) Lt(n, e[n], t, i);
        return r.join('&');
      }),
        E.fn.extend({
          serialize() {
            return E.param(this.serializeArray());
          },
          serializeArray() {
            return this.map(function() {
              const e = E.prop(this, 'elements');
              return e ? E.makeArray(e) : this;
            })
              .filter(function() {
                const e = this.type;
                return (
                  this.name &&
                  !E(this).is(':disabled') &&
                  Ot.test(this.nodeName) &&
                  !It.test(e) &&
                  (this.checked || !ge.test(e))
                );
              })
              .map(function(e, t) {
                const n = E(this).val();
                return n == null
                  ? null
                  : Array.isArray(n)
                  ? E.map(n, function(e) {
                      return { name: t.name, value: e.replace(kt, '\r\n') };
                    })
                  : { name: t.name, value: n.replace(kt, '\r\n') };
              })
              .get();
          },
        });
      const jt = /%20/g;
      const Pt = /#.*$/;
      const Ht = /([?&])_=[^&]*/;
      const qt = /^(.*?):[ \t]*([^\r\n]*)$/gm;
      const Rt = /^(?:GET|HEAD)$/;
      const Mt = /^\/\//;
      const Wt = {};
      const Ft = {};
      const Bt = '*/'.concat('*');
      const Ut = s.createElement('a');
      function $t(e) {
        return function(t, n) {
          typeof t !== 'string' && ((n = t), (t = '*'));
          let r;
          let i = 0;
          const o = t.toLowerCase().match(R) || [];
          if (y(n))
            for (; (r = o[i++]); )
              r[0] === '+'
                ? ((r = r.slice(1) || '*'), (e[r] = e[r] || []).unshift(n))
                : (e[r] = e[r] || []).push(n);
        };
      }
      function zt(e, t, n, r) {
        const i = {};
        const o = e === Ft;
        function s(a) {
          let l;
          return (
            (i[a] = !0),
            E.each(e[a] || [], function(e, a) {
              const u = a(t, n, r);
              return typeof u !== 'string' || o || i[u]
                ? o
                  ? !(l = u)
                  : void 0
                : (t.dataTypes.unshift(u), s(u), !1);
            }),
            l
          );
        }
        return s(t.dataTypes[0]) || (!i['*'] && s('*'));
      }
      function Vt(e, t) {
        let n;
        let r;
        const i = E.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && E.extend(!0, e, r), e;
      }
      (Ut.href = St.href),
        E.extend({
          active: 0,
          lastModified: {},
          etag: {},
          ajaxSettings: {
            url: St.href,
            type: 'GET',
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
              St.protocol
            ),
            global: !0,
            processData: !0,
            async: !0,
            contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
            accepts: {
              '*': Bt,
              text: 'text/plain',
              html: 'text/html',
              xml: 'application/xml, text/xml',
              json: 'application/json, text/javascript',
            },
            contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
            responseFields: {
              xml: 'responseXML',
              text: 'responseText',
              json: 'responseJSON',
            },
            converters: {
              '* text': String,
              'text html': !0,
              'text json': JSON.parse,
              'text xml': E.parseXML,
            },
            flatOptions: { url: !0, context: !0 },
          },
          ajaxSetup(e, t) {
            return t ? Vt(Vt(e, E.ajaxSettings), t) : Vt(E.ajaxSettings, e);
          },
          ajaxPrefilter: $t(Wt),
          ajaxTransport: $t(Ft),
          ajax(e, t) {
            typeof e === 'object' && ((t = e), (e = void 0)), (t = t || {});
            let r;
            let i;
            let o;
            let a;
            let l;
            let u;
            let c;
            let f;
            let d;
            let h;
            const p = E.ajaxSetup({}, t);
            const g = p.context || p;
            const m = p.context && (g.nodeType || g.jquery) ? E(g) : E.event;
            const v = E.Deferred();
            const y = E.Callbacks('once memory');
            let b = p.statusCode || {};
            const _ = {};
            const w = {};
            let x = 'canceled';
            var T = {
              readyState: 0,
              getResponseHeader(e) {
                let t;
                if (c) {
                  if (!a)
                    for (a = {}; (t = qt.exec(o)); )
                      a[`${t[1].toLowerCase()} `] = (
                        a[`${t[1].toLowerCase()} `] || []
                      ).concat(t[2]);
                  t = a[`${e.toLowerCase()} `];
                }
                return t == null ? null : t.join(', ');
              },
              getAllResponseHeaders() {
                return c ? o : null;
              },
              setRequestHeader(e, t) {
                return (
                  c == null &&
                    ((e = w[e.toLowerCase()] = w[e.toLowerCase()] || e),
                    (_[e] = t)),
                  this
                );
              },
              overrideMimeType(e) {
                return c == null && (p.mimeType = e), this;
              },
              statusCode(e) {
                let t;
                if (e)
                  if (c) T.always(e[T.status]);
                  else for (t in e) b[t] = [b[t], e[t]];
                return this;
              },
              abort(e) {
                const t = e || x;
                return r && r.abort(t), C(0, t), this;
              },
            };
            if (
              (v.promise(T),
              (p.url = `${e || p.url || St.href}`.replace(
                Mt,
                `${St.protocol}//`
              )),
              (p.type = t.method || t.type || p.method || p.type),
              (p.dataTypes = (p.dataType || '*').toLowerCase().match(R) || [
                '',
              ]),
              p.crossDomain == null)
            ) {
              u = s.createElement('a');
              try {
                (u.href = p.url),
                  (u.href = u.href),
                  (p.crossDomain =
                    `${Ut.protocol}//${Ut.host}` != `${u.protocol}//${u.host}`);
              } catch (e) {
                p.crossDomain = !0;
              }
            }
            if (
              (p.data &&
                p.processData &&
                typeof p.data !== 'string' &&
                (p.data = E.param(p.data, p.traditional)),
              zt(Wt, p, t, T),
              c)
            )
              return T;
            for (d in ((f = E.event && p.global) &&
              E.active++ == 0 &&
              E.event.trigger('ajaxStart'),
            (p.type = p.type.toUpperCase()),
            (p.hasContent = !Rt.test(p.type)),
            (i = p.url.replace(Pt, '')),
            p.hasContent
              ? p.data &&
                p.processData &&
                (p.contentType || '').indexOf(
                  'application/x-www-form-urlencoded'
                ) === 0 &&
                (p.data = p.data.replace(jt, '+'))
              : ((h = p.url.slice(i.length)),
                p.data &&
                  (p.processData || typeof p.data === 'string') &&
                  ((i += (At.test(i) ? '&' : '?') + p.data), delete p.data),
                !1 === p.cache &&
                  ((i = i.replace(Ht, '$1')),
                  (h = `${At.test(i) ? '&' : '?'}_=${Dt++}${h}`)),
                (p.url = i + h)),
            p.ifModified &&
              (E.lastModified[i] &&
                T.setRequestHeader('If-Modified-Since', E.lastModified[i]),
              E.etag[i] && T.setRequestHeader('If-None-Match', E.etag[i])),
            ((p.data && p.hasContent && !1 !== p.contentType) ||
              t.contentType) &&
              T.setRequestHeader('Content-Type', p.contentType),
            T.setRequestHeader(
              'Accept',
              p.dataTypes[0] && p.accepts[p.dataTypes[0]]
                ? p.accepts[p.dataTypes[0]] +
                    (p.dataTypes[0] !== '*' ? `, ${Bt}; q=0.01` : '')
                : p.accepts['*']
            ),
            p.headers))
              T.setRequestHeader(d, p.headers[d]);
            if (p.beforeSend && (!1 === p.beforeSend.call(g, T, p) || c))
              return T.abort();
            if (
              ((x = 'abort'),
              y.add(p.complete),
              T.done(p.success),
              T.fail(p.error),
              (r = zt(Ft, p, t, T)))
            ) {
              if (((T.readyState = 1), f && m.trigger('ajaxSend', [T, p]), c))
                return T;
              p.async &&
                p.timeout > 0 &&
                (l = n.setTimeout(function() {
                  T.abort('timeout');
                }, p.timeout));
              try {
                (c = !1), r.send(_, C);
              } catch (e) {
                if (c) throw e;
                C(-1, e);
              }
            } else C(-1, 'No Transport');
            function C(e, t, s, a) {
              let u;
              let d;
              let h;
              let _;
              let w;
              let x = t;
              c ||
                ((c = !0),
                l && n.clearTimeout(l),
                (r = void 0),
                (o = a || ''),
                (T.readyState = e > 0 ? 4 : 0),
                (u = (e >= 200 && e < 300) || e === 304),
                s &&
                  (_ = (function(e, t, n) {
                    for (
                      var r, i, o, s, a = e.contents, l = e.dataTypes;
                      l[0] === '*';

                    )
                      l.shift(),
                        void 0 === r &&
                          (r =
                            e.mimeType || t.getResponseHeader('Content-Type'));
                    if (r)
                      for (i in a)
                        if (a[i] && a[i].test(r)) {
                          l.unshift(i);
                          break;
                        }
                    if (l[0] in n) o = l[0];
                    else {
                      for (i in n) {
                        if (!l[0] || e.converters[`${i} ${l[0]}`]) {
                          o = i;
                          break;
                        }
                        s || (s = i);
                      }
                      o = o || s;
                    }
                    if (o) return o !== l[0] && l.unshift(o), n[o];
                  })(p, T, s)),
                (_ = (function(e, t, n, r) {
                  let i;
                  let o;
                  let s;
                  let a;
                  let l;
                  const u = {};
                  const c = e.dataTypes.slice();
                  if (c[1])
                    for (s in e.converters)
                      u[s.toLowerCase()] = e.converters[s];
                  for (o = c.shift(); o; )
                    if (
                      (e.responseFields[o] && (n[e.responseFields[o]] = t),
                      !l &&
                        r &&
                        e.dataFilter &&
                        (t = e.dataFilter(t, e.dataType)),
                      (l = o),
                      (o = c.shift()))
                    )
                      if (o === '*') o = l;
                      else if (l !== '*' && l !== o) {
                        if (!(s = u[`${l} ${o}`] || u[`* ${o}`]))
                          for (i in u)
                            if (
                              (a = i.split(' '))[1] === o &&
                              (s = u[`${l} ${a[0]}`] || u[`* ${a[0]}`])
                            ) {
                              !0 === s
                                ? (s = u[i])
                                : !0 !== u[i] && ((o = a[0]), c.unshift(a[1]));
                              break;
                            }
                        if (!0 !== s)
                          if (s && e.throws) t = s(t);
                          else
                            try {
                              t = s(t);
                            } catch (e) {
                              return {
                                state: 'parsererror',
                                error: s
                                  ? e
                                  : `No conversion from ${l} to ${o}`,
                              };
                            }
                      }
                  return { state: 'success', data: t };
                })(p, _, T, u)),
                u
                  ? (p.ifModified &&
                      ((w = T.getResponseHeader('Last-Modified')) &&
                        (E.lastModified[i] = w),
                      (w = T.getResponseHeader('etag')) && (E.etag[i] = w)),
                    e === 204 || p.type === 'HEAD'
                      ? (x = 'nocontent')
                      : e === 304
                      ? (x = 'notmodified')
                      : ((x = _.state), (d = _.data), (u = !(h = _.error))))
                  : ((h = x), (!e && x) || ((x = 'error'), e < 0 && (e = 0))),
                (T.status = e),
                (T.statusText = `${t || x}`),
                u ? v.resolveWith(g, [d, x, T]) : v.rejectWith(g, [T, x, h]),
                T.statusCode(b),
                (b = void 0),
                f &&
                  m.trigger(u ? 'ajaxSuccess' : 'ajaxError', [T, p, u ? d : h]),
                y.fireWith(g, [T, x]),
                f &&
                  (m.trigger('ajaxComplete', [T, p]),
                  --E.active || E.event.trigger('ajaxStop')));
            }
            return T;
          },
          getJSON(e, t, n) {
            return E.get(e, t, n, 'json');
          },
          getScript(e, t) {
            return E.get(e, void 0, t, 'script');
          },
        }),
        E.each(['get', 'post'], function(e, t) {
          E[t] = function(e, n, r, i) {
            return (
              y(n) && ((i = i || r), (r = n), (n = void 0)),
              E.ajax(
                E.extend(
                  { url: e, type: t, dataType: i, data: n, success: r },
                  E.isPlainObject(e) && e
                )
              )
            );
          };
        }),
        (E._evalUrl = function(e, t) {
          return E.ajax({
            url: e,
            type: 'GET',
            dataType: 'script',
            cache: !0,
            async: !1,
            global: !1,
            converters: { 'text script': function() {} },
            dataFilter(e) {
              E.globalEval(e, t);
            },
          });
        }),
        E.fn.extend({
          wrapAll(e) {
            let t;
            return (
              this[0] &&
                (y(e) && (e = e.call(this[0])),
                (t = E(e, this[0].ownerDocument)
                  .eq(0)
                  .clone(!0)),
                this[0].parentNode && t.insertBefore(this[0]),
                t
                  .map(function() {
                    for (var e = this; e.firstElementChild; )
                      e = e.firstElementChild;
                    return e;
                  })
                  .append(this)),
              this
            );
          },
          wrapInner(e) {
            return y(e)
              ? this.each(function(t) {
                  E(this).wrapInner(e.call(this, t));
                })
              : this.each(function() {
                  const t = E(this);
                  const n = t.contents();
                  n.length ? n.wrapAll(e) : t.append(e);
                });
          },
          wrap(e) {
            const t = y(e);
            return this.each(function(n) {
              E(this).wrapAll(t ? e.call(this, n) : e);
            });
          },
          unwrap(e) {
            return (
              this.parent(e)
                .not('body')
                .each(function() {
                  E(this).replaceWith(this.childNodes);
                }),
              this
            );
          },
        }),
        (E.expr.pseudos.hidden = function(e) {
          return !E.expr.pseudos.visible(e);
        }),
        (E.expr.pseudos.visible = function(e) {
          return !!(
            e.offsetWidth ||
            e.offsetHeight ||
            e.getClientRects().length
          );
        }),
        (E.ajaxSettings.xhr = function() {
          try {
            return new n.XMLHttpRequest();
          } catch (e) {}
        });
      const Kt = { 0: 200, 1223: 204 };
      let Qt = E.ajaxSettings.xhr();
      (v.cors = !!Qt && 'withCredentials' in Qt),
        (v.ajax = Qt = !!Qt),
        E.ajaxTransport(function(e) {
          let t;
          let r;
          if (v.cors || (Qt && !e.crossDomain))
            return {
              send(i, o) {
                let s;
                const a = e.xhr();
                if (
                  (a.open(e.type, e.url, e.async, e.username, e.password),
                  e.xhrFields)
                )
                  for (s in e.xhrFields) a[s] = e.xhrFields[s];
                for (s in (e.mimeType &&
                  a.overrideMimeType &&
                  a.overrideMimeType(e.mimeType),
                e.crossDomain ||
                  i['X-Requested-With'] ||
                  (i['X-Requested-With'] = 'XMLHttpRequest'),
                i))
                  a.setRequestHeader(s, i[s]);
                (t = function(e) {
                  return function() {
                    t &&
                      ((t = r = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null),
                      e === 'abort'
                        ? a.abort()
                        : e === 'error'
                        ? typeof a.status !== 'number'
                          ? o(0, 'error')
                          : o(a.status, a.statusText)
                        : o(
                            Kt[a.status] || a.status,
                            a.statusText,
                            (a.responseType || 'text') !== 'text' ||
                              typeof a.responseText !== 'string'
                              ? { binary: a.response }
                              : { text: a.responseText },
                            a.getAllResponseHeaders()
                          ));
                  };
                }),
                  (a.onload = t()),
                  (r = a.onerror = a.ontimeout = t('error')),
                  void 0 !== a.onabort
                    ? (a.onabort = r)
                    : (a.onreadystatechange = function() {
                        a.readyState === 4 &&
                          n.setTimeout(function() {
                            t && r();
                          });
                      }),
                  (t = t('abort'));
                try {
                  a.send((e.hasContent && e.data) || null);
                } catch (e) {
                  if (t) throw e;
                }
              },
              abort() {
                t && t();
              },
            };
        }),
        E.ajaxPrefilter(function(e) {
          e.crossDomain && (e.contents.script = !1);
        }),
        E.ajaxSetup({
          accepts: {
            script:
              'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript',
          },
          contents: { script: /\b(?:java|ecma)script\b/ },
          converters: {
            'text script': function(e) {
              return E.globalEval(e), e;
            },
          },
        }),
        E.ajaxPrefilter('script', function(e) {
          void 0 === e.cache && (e.cache = !1),
            e.crossDomain && (e.type = 'GET');
        }),
        E.ajaxTransport('script', function(e) {
          let t;
          let n;
          if (e.crossDomain || e.scriptAttrs)
            return {
              send(r, i) {
                (t = E('<script>')
                  .attr(e.scriptAttrs || {})
                  .prop({ charset: e.scriptCharset, src: e.url })
                  .on(
                    'load error',
                    (n = function(e) {
                      t.remove(),
                        (n = null),
                        e && i(e.type === 'error' ? 404 : 200, e.type);
                    })
                  )),
                  s.head.appendChild(t[0]);
              },
              abort() {
                n && n();
              },
            };
        });
      let Xt;
      const Yt = [];
      const Gt = /(=)\?(?=&|$)|\?\?/;
      E.ajaxSetup({
        jsonp: 'callback',
        jsonpCallback() {
          const e = Yt.pop() || `${E.expando}_${Dt++}`;
          return (this[e] = !0), e;
        },
      }),
        E.ajaxPrefilter('json jsonp', function(e, t, r) {
          let i;
          let o;
          let s;
          const a =
            !1 !== e.jsonp &&
            (Gt.test(e.url)
              ? 'url'
              : typeof e.data === 'string' &&
                (e.contentType || '').indexOf(
                  'application/x-www-form-urlencoded'
                ) === 0 &&
                Gt.test(e.data) &&
                'data');
          if (a || e.dataTypes[0] === 'jsonp')
            return (
              (i = e.jsonpCallback = y(e.jsonpCallback)
                ? e.jsonpCallback()
                : e.jsonpCallback),
              a
                ? (e[a] = e[a].replace(Gt, `$1${i}`))
                : !1 !== e.jsonp &&
                  (e.url += `${(At.test(e.url) ? '&' : '?') + e.jsonp}=${i}`),
              (e.converters['script json'] = function() {
                return s || E.error(`${i} was not called`), s[0];
              }),
              (e.dataTypes[0] = 'json'),
              (o = n[i]),
              (n[i] = function() {
                s = arguments;
              }),
              r.always(function() {
                void 0 === o ? E(n).removeProp(i) : (n[i] = o),
                  e[i] && ((e.jsonpCallback = t.jsonpCallback), Yt.push(i)),
                  s && y(o) && o(s[0]),
                  (s = o = void 0);
              }),
              'script'
            );
        }),
        (v.createHTMLDocument =
          (((Xt = s.implementation.createHTMLDocument('').body).innerHTML =
            '<form></form><form></form>'),
          Xt.childNodes.length === 2)),
        (E.parseHTML = function(e, t, n) {
          return typeof e !== 'string'
            ? []
            : (typeof t === 'boolean' && ((n = t), (t = !1)),
              t ||
                (v.createHTMLDocument
                  ? (((r = (t = s.implementation.createHTMLDocument(
                      ''
                    )).createElement('base')).href = s.location.href),
                    t.head.appendChild(r))
                  : (t = s)),
              (o = !n && []),
              (i = I.exec(e))
                ? [t.createElement(i[1])]
                : ((i = Te([e], t, o)),
                  o && o.length && E(o).remove(),
                  E.merge([], i.childNodes)));
          let r;
          let i;
          let o;
        }),
        (E.fn.load = function(e, t, n) {
          let r;
          let i;
          let o;
          const s = this;
          const a = e.indexOf(' ');
          return (
            a > -1 && ((r = _t(e.slice(a))), (e = e.slice(0, a))),
            y(t)
              ? ((n = t), (t = void 0))
              : t && typeof t === 'object' && (i = 'POST'),
            s.length > 0 &&
              E.ajax({ url: e, type: i || 'GET', dataType: 'html', data: t })
                .done(function(e) {
                  (o = arguments),
                    s.html(
                      r
                        ? E('<div>')
                            .append(E.parseHTML(e))
                            .find(r)
                        : e
                    );
                })
                .always(
                  n &&
                    function(e, t) {
                      s.each(function() {
                        n.apply(this, o || [e.responseText, t, e]);
                      });
                    }
                ),
            this
          );
        }),
        E.each(
          [
            'ajaxStart',
            'ajaxStop',
            'ajaxComplete',
            'ajaxError',
            'ajaxSuccess',
            'ajaxSend',
          ],
          function(e, t) {
            E.fn[t] = function(e) {
              return this.on(t, e);
            };
          }
        ),
        (E.expr.pseudos.animated = function(e) {
          return E.grep(E.timers, function(t) {
            return e === t.elem;
          }).length;
        }),
        (E.offset = {
          setOffset(e, t, n) {
            let r;
            let i;
            let o;
            let s;
            let a;
            let l;
            const u = E.css(e, 'position');
            const c = E(e);
            const f = {};
            u === 'static' && (e.style.position = 'relative'),
              (a = c.offset()),
              (o = E.css(e, 'top')),
              (l = E.css(e, 'left')),
              (u === 'absolute' || u === 'fixed') &&
              (o + l).indexOf('auto') > -1
                ? ((s = (r = c.position()).top), (i = r.left))
                : ((s = parseFloat(o) || 0), (i = parseFloat(l) || 0)),
              y(t) && (t = t.call(e, n, E.extend({}, a))),
              t.top != null && (f.top = t.top - a.top + s),
              t.left != null && (f.left = t.left - a.left + i),
              'using' in t ? t.using.call(e, f) : c.css(f);
          },
        }),
        E.fn.extend({
          offset(e) {
            if (arguments.length)
              return void 0 === e
                ? this
                : this.each(function(t) {
                    E.offset.setOffset(this, e, t);
                  });
            let t;
            let n;
            const r = this[0];
            return r
              ? r.getClientRects().length
                ? ((t = r.getBoundingClientRect()),
                  (n = r.ownerDocument.defaultView),
                  { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset })
                : { top: 0, left: 0 }
              : void 0;
          },
          position() {
            if (this[0]) {
              let e;
              let t;
              let n;
              const r = this[0];
              let i = { top: 0, left: 0 };
              if (E.css(r, 'position') === 'fixed')
                t = r.getBoundingClientRect();
              else {
                for (
                  t = this.offset(),
                    n = r.ownerDocument,
                    e = r.offsetParent || n.documentElement;
                  e &&
                  (e === n.body || e === n.documentElement) &&
                  E.css(e, 'position') === 'static';

                )
                  e = e.parentNode;
                e &&
                  e !== r &&
                  e.nodeType === 1 &&
                  (((i = E(e).offset()).top += E.css(e, 'borderTopWidth', !0)),
                  (i.left += E.css(e, 'borderLeftWidth', !0)));
              }
              return {
                top: t.top - i.top - E.css(r, 'marginTop', !0),
                left: t.left - i.left - E.css(r, 'marginLeft', !0),
              };
            }
          },
          offsetParent() {
            return this.map(function() {
              for (
                var e = this.offsetParent;
                e && E.css(e, 'position') === 'static';

              )
                e = e.offsetParent;
              return e || se;
            });
          },
        }),
        E.each(
          { scrollLeft: 'pageXOffset', scrollTop: 'pageYOffset' },
          function(e, t) {
            const n = t === 'pageYOffset';
            E.fn[e] = function(r) {
              return z(
                this,
                function(e, r, i) {
                  let o;
                  if (
                    (b(e) ? (o = e) : e.nodeType === 9 && (o = e.defaultView),
                    void 0 === i)
                  )
                    return o ? o[t] : e[r];
                  o
                    ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset)
                    : (e[r] = i);
                },
                e,
                r,
                arguments.length
              );
            };
          }
        ),
        E.each(['top', 'left'], function(e, t) {
          E.cssHooks[t] = Qe(v.pixelPosition, function(e, n) {
            if (n)
              return (n = Ke(e, t)), $e.test(n) ? `${E(e).position()[t]}px` : n;
          });
        }),
        E.each({ Height: 'height', Width: 'width' }, function(e, t) {
          E.each(
            { padding: `inner${e}`, content: t, '': `outer${e}` },
            function(n, r) {
              E.fn[r] = function(i, o) {
                const s = arguments.length && (n || typeof i !== 'boolean');
                const a = n || (!0 === i || !0 === o ? 'margin' : 'border');
                return z(
                  this,
                  function(t, n, i) {
                    let o;
                    return b(t)
                      ? r.indexOf('outer') === 0
                        ? t[`inner${e}`]
                        : t.document.documentElement[`client${e}`]
                      : t.nodeType === 9
                      ? ((o = t.documentElement),
                        Math.max(
                          t.body[`scroll${e}`],
                          o[`scroll${e}`],
                          t.body[`offset${e}`],
                          o[`offset${e}`],
                          o[`client${e}`]
                        ))
                      : void 0 === i
                      ? E.css(t, n, a)
                      : E.style(t, n, i, a);
                  },
                  t,
                  s ? i : void 0,
                  s
                );
              };
            }
          );
        }),
        E.each(
          'blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu'.split(
            ' '
          ),
          function(e, t) {
            E.fn[t] = function(e, n) {
              return arguments.length > 0
                ? this.on(t, null, e, n)
                : this.trigger(t);
            };
          }
        ),
        E.fn.extend({
          hover(e, t) {
            return this.mouseenter(e).mouseleave(t || e);
          },
        }),
        E.fn.extend({
          bind(e, t, n) {
            return this.on(e, null, t, n);
          },
          unbind(e, t) {
            return this.off(e, null, t);
          },
          delegate(e, t, n, r) {
            return this.on(t, e, n, r);
          },
          undelegate(e, t, n) {
            return arguments.length === 1
              ? this.off(e, '**')
              : this.off(t, e || '**', n);
          },
        }),
        (E.proxy = function(e, t) {
          let n;
          let r;
          let i;
          if ((typeof t === 'string' && ((n = e[t]), (t = e), (e = n)), y(e)))
            return (
              (r = l.call(arguments, 2)),
              ((i = function() {
                return e.apply(t || this, r.concat(l.call(arguments)));
              }).guid = e.guid = e.guid || E.guid++),
              i
            );
        }),
        (E.holdReady = function(e) {
          e ? E.readyWait++ : E.ready(!0);
        }),
        (E.isArray = Array.isArray),
        (E.parseJSON = JSON.parse),
        (E.nodeName = k),
        (E.isFunction = y),
        (E.isWindow = b),
        (E.camelCase = X),
        (E.type = x),
        (E.now = Date.now),
        (E.isNumeric = function(e) {
          const t = E.type(e);
          return (
            (t === 'number' || t === 'string') && !isNaN(e - parseFloat(e))
          );
        }),
        void 0 ===
          (r = function() {
            return E;
          }.apply(t, [])) || (e.exports = r);
      const Jt = n.jQuery;
      const Zt = n.$;
      return (
        (E.noConflict = function(e) {
          return (
            n.$ === E && (n.$ = Zt), e && n.jQuery === E && (n.jQuery = Jt), E
          );
        }),
        i || (n.jQuery = n.$ = E),
        E
      );
    });
  },
]);
