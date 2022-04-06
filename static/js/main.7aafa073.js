localStorage.removeItem("guesses")
function getRandomDate() { //line 835 was solution
    const maxDate = Date.now();
    const timestamp = Math.floor(Math.random() * maxDate);
    return new Date(timestamp);
}
var big = getRandomDate()
/*! For license information please see main.7aafa073.js.LICENSE.txt */ ! function() {
    var l = {
            7757: function(l, e, t) {
                l.exports = t(9727)
            },
            7587: function(l, e, t) {
                "use strict";
                t.d(e, {
                    N: function() {
                        return N
                    },
                    f: function() {
                        return A
                    }
                });
                var a = t(885),
                    n = t(2791),
                    r = t(3920),
                    i = t(184),
                    o = {
                        nightMode: !1,
                        highContrast: !1
                    },
                    E = {
                        theme: o,
                        setTheme: null
                    },
                    N = (0, n.createContext)(E),
                    A = function(l) {
                        var e = l.children,
                            t = (0, r._)("theme", o),
                            E = (0, a.Z)(t, 2),
                            A = E[0],
                            u = E[1],
                            _ = (0, n.useState)(A),
                            s = (0, a.Z)(_, 2),
                            c = s[0],
                            M = s[1];
                        return (0, n.useEffect)((function() {
                            u(c)
                        }), [u, c]), (0, i.jsx)(N.Provider, {
                            value: {
                                theme: c,
                                setTheme: M
                            },
                            children: e
                        })
                    }
            },
            3920: function(l, e, t) {
                "use strict";
                t.d(e, {
                    _: function() {
                        return i
                    }
                });
                var a = t(885),
                    n = t(2791),
                    r = t(5890);

                function i(l, e) {
                    var t = (0, n.useState)((function() {
                            return function(l, e) {
                                var t = localStorage.getItem(l);
                                if (t) return JSON.parse(t);
                                if (e) return e;
                                throw new Error("Local storage error")
                            }(l, e)
                        })),
                        i = (0, a.Z)(t, 2),
                        o = i[0],
                        E = i[1];
                    return (0, n.useEffect)((function() {
                        var t = null !== o && void 0 !== o && o.day ? o.day : "9999-99-99";
                        r.f <= t ? localStorage.setItem(l, JSON.stringify(o)) : localStorage.setItem(l, JSON.stringify(e))
                    }), [l, o, e]), [o, E]
                }
            },
            8278: function(l, e, t) {
                "use strict";
                t.d(e, {
                    R: function() {
                        return Q
                    },
                    Z: function() {
                        return X
                    }
                });
                var a = t(885),
                    n = t(3272),
                    r = t(9388),
                    i = t(2791),
                    o = t(1851),
                    E = t(722),
                    N = t(6138),
                    A = t(1442),
                    u = t(1736),
                    _ = t(1252);

                function s(l, e) {
                    return Object.keys(l).reduce((function(t, a) {
                        return t[a] = (0, r.pi)({
                            timeZone: e
                        }, l[a]), t
                    }), {})
                }

                function c(l, e) {
                    return Object.keys((0, r.pi)((0, r.pi)({}, l), e)).reduce((function(t, a) {
                        return t[a] = (0, r.pi)((0, r.pi)({}, l[a] || {}), e[a] || {}), t
                    }), {})
                }

                function M(l, e) {
                    if (!e) return l;
                    var t = A.C.formats;
                    return (0, r.pi)((0, r.pi)((0, r.pi)({}, t), l), {
                        date: c(s(t.date, e), s(l.date || {}, e)),
                        time: c(s(t.time, e), s(l.time || {}, e))
                    })
                }

                function f(l, e, t, a, n) {
                    var i = l.locale,
                        o = l.formats,
                        E = l.messages,
                        A = l.defaultLocale,
                        s = l.defaultFormats,
                        c = l.fallbackOnEmptyString,
                        f = l.onError,
                        d = l.timeZone,
                        p = l.defaultRichTextElements;
                    void 0 === t && (t = {
                        id: ""
                    });
                    var O = t.id,
                        R = t.defaultMessage;
                    (0, N.kG)(!!O, "[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.io/docs/tooling/linter#enforce-id)\nto autofix this issue");
                    var m = String(O),
                        h = E && Object.prototype.hasOwnProperty.call(E, m) && E[m];
                    if (Array.isArray(h) && 1 === h.length && h[0].type === _.wD.literal) return h[0].value;
                    if (!a && h && "string" === typeof h && !p) return h.replace(/'\{(.*?)\}'/gi, "{$1}");
                    if (a = (0, r.pi)((0, r.pi)({}, p), a || {}), o = M(o, d), s = M(s, d), !h) {
                        if (!1 === c && "" === h) return h;
                        if ((!R || i && i.toLowerCase() !== A.toLowerCase()) && f(new u.$6(t, i)), R) try {
                            return e.getMessageFormat(R, A, s, n).format(a)
                        } catch (g) {
                            return f(new u.X9('Error formatting default message for: "'.concat(m, '", rendering default message verbatim'), i, t, g)), "string" === typeof R ? R : m
                        }
                        return m
                    }
                    try {
                        return e.getMessageFormat(h, i, o, (0, r.pi)({
                            formatters: e
                        }, n || {})).format(a)
                    } catch (g) {
                        f(new u.X9('Error formatting message: "'.concat(m, '", using ').concat(R ? "default message" : "id", " as fallback."), i, t, g))
                    }
                    if (R) try {
                        return e.getMessageFormat(R, A, s, n).format(a)
                    } catch (g) {
                        f(new u.X9('Error formatting the default message for: "'.concat(m, '", rendering message verbatim'), i, t, g))
                    }
                    return "string" === typeof h ? h : "string" === typeof R ? R : m
                }
                var d = t(4736),
                    p = ["localeMatcher", "style", "currency", "currencyDisplay", "unit", "unitDisplay", "useGrouping", "minimumIntegerDigits", "minimumFractionDigits", "maximumFractionDigits", "minimumSignificantDigits", "maximumSignificantDigits", "compactDisplay", "currencyDisplay", "currencySign", "notation", "signDisplay", "unit", "unitDisplay", "numberingSystem"];

                function O(l, e, t) {
                    var a = l.locale,
                        n = l.formats,
                        r = l.onError;
                    void 0 === t && (t = {});
                    var i = t.format,
                        o = i && (0, d.TB)(n, "number", i, r) || {};
                    return e(a, (0, d.L6)(t, p, o))
                }

                function R(l, e, t, a) {
                    void 0 === a && (a = {});
                    try {
                        return O(l, e, a).format(t)
                    } catch (n) {
                        l.onError(new u.Rw(u.bc.FORMAT_ERROR, "Error formatting number.", n))
                    }
                    return String(t)
                }

                function m(l, e, t, a) {
                    void 0 === a && (a = {});
                    try {
                        return O(l, e, a).formatToParts(t)
                    } catch (n) {
                        l.onError(new u.Rw(u.bc.FORMAT_ERROR, "Error formatting number.", n))
                    }
                    return []
                }
                var h = t(9369),
                    g = ["numeric", "style"];

                function L(l, e, t, a, n) {
                    void 0 === n && (n = {}), a || (a = "second"), Intl.RelativeTimeFormat || l.onError(new h.u_('Intl.RelativeTimeFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-relativetimeformat"\n', h.jK.MISSING_INTL_API));
                    try {
                        return function(l, e, t) {
                            var a = l.locale,
                                n = l.formats,
                                r = l.onError;
                            void 0 === t && (t = {});
                            var i = t.format,
                                o = !!i && (0, d.TB)(n, "relative", i, r) || {};
                            return e(a, (0, d.L6)(t, g, o))
                        }(l, e, n).format(t, a)
                    } catch (r) {
                        l.onError(new u.Qe("Error formatting relative time.", l.locale, r))
                    }
                    return String(t)
                }
                var y = ["localeMatcher", "formatMatcher", "timeZone", "hour12", "weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName", "hourCycle", "dateStyle", "timeStyle", "calendar", "numberingSystem"];

                function T(l, e, t, a) {
                    var n = l.locale,
                        i = l.formats,
                        o = l.onError,
                        E = l.timeZone;
                    void 0 === a && (a = {});
                    var N = a.format,
                        A = (0, r.pi)((0, r.pi)({}, E && {
                            timeZone: E
                        }), N && (0, d.TB)(i, e, N, o)),
                        u = (0, d.L6)(a, y, A);
                    return "time" !== e || u.hour || u.minute || u.second || u.timeStyle || u.dateStyle || (u = (0, r.pi)((0, r.pi)({}, u), {
                        hour: "numeric",
                        minute: "numeric"
                    })), t(n, u)
                }

                function I(l, e) {
                    for (var t = [], a = 2; a < arguments.length; a++) t[a - 2] = arguments[a];
                    var n = t[0],
                        r = t[1],
                        i = void 0 === r ? {} : r,
                        o = "string" === typeof n ? big(n || 0) : n;
                    try {
                        return T(l, "date", e, i).format(o)
                    } catch (E) {
                        l.onError(new u.Rw(u.bc.FORMAT_ERROR, "Error formatting date.", E))
                    }
                    return String(o)
                }

                function S(l, e) {
                    for (var t = [], a = 2; a < arguments.length; a++) t[a - 2] = arguments[a];
                    var n = t[0],
                        r = t[1],
                        i = void 0 === r ? {} : r,
                        o = "string" === typeof n ? big(n || 0) : n;
                    try {
                        return T(l, "time", e, i).format(o)
                    } catch (E) {
                        l.onError(new u.Rw(u.bc.FORMAT_ERROR, "Error formatting time.", E))
                    }
                    return String(o)
                }

                function b(l, e) {
                    for (var t = [], a = 2; a < arguments.length; a++) t[a - 2] = arguments[a];
                    var n = t[0],
                        r = t[1],
                        i = t[2],
                        o = void 0 === i ? {} : i,
                        E = l.timeZone,
                        N = l.locale,
                        A = l.onError,
                        _ = (0, d.L6)(o, y, E ? {
                            timeZone: E
                        } : {});
                    try {
                        return e(N, _).formatRange(n, r)
                    } catch (s) {
                        A(new u.Rw(u.bc.FORMAT_ERROR, "Error formatting date time range.", s))
                    }
                    return String(n)
                }

                function B(l, e) {
                    for (var t = [], a = 2; a < arguments.length; a++) t[a - 2] = arguments[a];
                    var n = t[0],
                        r = t[1],
                        i = void 0 === r ? {} : r,
                        o = "string" === typeof n ? b(n || 0) : n;
                    try {
                        return T(l, "date", e, i).formatToParts(o)
                    } catch (E) {
                        l.onError(new u.Rw(u.bc.FORMAT_ERROR, "Error formatting date.", E))
                    }
                    return []
                }

                function v(l, e) {
                    for (var t = [], a = 2; a < arguments.length; a++) t[a - 2] = arguments[a];
                    var n = t[0],
                        r = t[1],
                        i = void 0 === r ? {} : r,
                        o = "string" === typeof n ? big(n || 0) : n;
                    try {
                        return T(l, "time", e, i).formatToParts(o)
                    } catch (E) {
                        l.onError(new u.Rw(u.bc.FORMAT_ERROR, "Error formatting time.", E))
                    }
                    return []
                }
                var U = ["localeMatcher", "type"];

                function G(l, e, t, a) {
                    var n = l.locale,
                        r = l.onError;
                    void 0 === a && (a = {}), Intl.PluralRules || r(new h.u_('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n', h.jK.MISSING_INTL_API));
                    var i = (0, d.L6)(a, U);
                    try {
                        return e(n, i).select(t)
                    } catch (o) {
                        r(new u.Qe("Error formatting plural.", n, o))
                    }
                    return "other"
                }
                var F = ["localeMatcher", "type", "style"],
                    P = Date.now();

                function w(l, e, t, a) {
                    void 0 === a && (a = {});
                    var n = k(l, e, t, a).reduce((function(l, e) {
                        var t = e.value;
                        return "string" !== typeof t ? l.push(t) : "string" === typeof l[l.length - 1] ? l[l.length - 1] += t : l.push(t), l
                    }), []);
                    return 1 === n.length ? n[0] : n
                }

                function k(l, e, t, a) {
                    var n = l.locale,
                        i = l.onError;
                    void 0 === a && (a = {}), Intl.ListFormat || i(new h.u_('Intl.ListFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-listformat"\n', h.jK.MISSING_INTL_API));
                    var o = (0, d.L6)(a, F);
                    try {
                        var E = {},
                            N = t.map((function(l, e) {
                                if ("object" === typeof l) {
                                    var t = function(l) {
                                        return "".concat(P, "_").concat(l, "_").concat(P)
                                    }(e);
                                    return E[t] = l, t
                                }
                                return String(l)
                            }));
                        return e(n, o).formatToParts(N).map((function(l) {
                            return "literal" === l.type ? l : (0, r.pi)((0, r.pi)({}, l), {
                                value: E[l.value] || l.value
                            })
                        }))
                    } catch (A) {
                        i(new u.Rw(u.bc.FORMAT_ERROR, "Error formatting list.", A))
                    }
                    return t
                }
                var H = ["localeMatcher", "style", "type", "fallback"];

                function C(l, e, t, a) {
                    var n = l.locale,
                        r = l.onError;
                    Intl.DisplayNames || r(new h.u_('Intl.DisplayNames is not available in this environment.\nTry polyfilling it using "@formatjs/intl-displaynames"\n', h.jK.MISSING_INTL_API));
                    var i = (0, d.L6)(a, H);
                    try {
                        return e(n, i).of(t)
                    } catch (o) {
                        r(new u.Rw(u.bc.FORMAT_ERROR, "Error formatting display name.", o))
                    }
                }

                function x(l) {
                    l.defaultRichTextElements && function(l) {
                        return "string" === typeof(l ? l[Object.keys(l)[0]] : void 0)
                    }(l.messages || {}) && console.warn('[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. \nPlease consider using "@formatjs/cli" to pre-compile your messages for performance.\nFor more details see https://formatjs.io/docs/getting-started/message-distribution')
                }
                var D = t(9774);

                function K(l) {
                    return {
                        locale: l.locale,
                        timeZone: l.timeZone,
                        fallbackOnEmptyString: l.fallbackOnEmptyString,
                        formats: l.formats,
                        textComponent: l.textComponent,
                        messages: l.messages,
                        defaultLocale: l.defaultLocale,
                        defaultFormats: l.defaultFormats,
                        onError: l.onError,
                        wrapRichTextChunksInFragment: l.wrapRichTextChunksInFragment,
                        defaultRichTextElements: l.defaultRichTextElements
                    }
                }

                function W(l) {
                    return l ? Object.keys(l).reduce((function(e, t) {
                        var a = l[t];
                        return e[t] = (0, D.Gt)(a) ? (0, E.dt)(a) : a, e
                    }), {}) : l
                }
                var V = function(l, e, t, a) {
                        for (var n = [], o = 4; o < arguments.length; o++) n[o - 4] = arguments[o];
                        var E = W(a),
                            N = f.apply(void 0, (0, r.ev)([l, e, t, E], n, !1));
                        return Array.isArray(N) ? i.Children.toArray(N) : N
                    },
                    z = function(l, e) {
                        var t = l.defaultRichTextElements,
                            a = (0, r._T)(l, ["defaultRichTextElements"]),
                            n = W(t),
                            i = function(l, e) {
                                var t = (0, d.ax)(e),
                                    a = (0, r.pi)((0, r.pi)({}, d.Z0), l),
                                    n = a.locale,
                                    i = a.defaultLocale,
                                    o = a.onError;
                                return n ? !Intl.NumberFormat.supportedLocalesOf(n).length && o ? o(new u.gb('Missing locale data for locale: "'.concat(n, '" in Intl.NumberFormat. Using default locale: "').concat(i, '" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))) : !Intl.DateTimeFormat.supportedLocalesOf(n).length && o && o(new u.gb('Missing locale data for locale: "'.concat(n, '" in Intl.DateTimeFormat. Using default locale: "').concat(i, '" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))) : (o && o(new u.OV('"locale" was not configured, using "'.concat(i, '" as fallback. See https://formatjs.io/docs/react-intl/api#intlshape for more details'))), a.locale = a.defaultLocale || "en"), x(a), (0, r.pi)((0, r.pi)({}, a), {
                                    formatters: t,
                                    formatNumber: R.bind(null, a, t.getNumberFormat),
                                    formatNumberToParts: m.bind(null, a, t.getNumberFormat),
                                    formatRelativeTime: L.bind(null, a, t.getRelativeTimeFormat),
                                    formatDate: I.bind(null, a, t.getDateTimeFormat),
                                    formatDateToParts: B.bind(null, a, t.getDateTimeFormat),
                                    formatTime: S.bind(null, a, t.getDateTimeFormat),
                                    formatDateTimeRange: b.bind(null, a, t.getDateTimeFormat),
                                    formatTimeToParts: v.bind(null, a, t.getDateTimeFormat),
                                    formatPlural: G.bind(null, a, t.getPluralRules),
                                    formatMessage: f.bind(null, a, t),
                                    $t: f.bind(null, a, t),
                                    formatList: w.bind(null, a, t.getListFormat),
                                    formatListToParts: k.bind(null, a, t.getListFormat),
                                    formatDisplayName: C.bind(null, a, t.getDisplayNames)
                                })
                            }((0, r.pi)((0, r.pi)((0, r.pi)({}, E.Z0), a), {
                                defaultRichTextElements: n
                            }), e);
                        return (0, r.pi)((0, r.pi)({}, i), {
                            formatMessage: V.bind(null, {
                                locale: i.locale,
                                timeZone: i.timeZone,
                                fallbackOnEmptyString: i.fallbackOnEmptyString,
                                formats: i.formats,
                                defaultLocale: i.defaultLocale,
                                defaultFormats: i.defaultFormats,
                                messages: i.messages,
                                onError: i.onError,
                                defaultRichTextElements: n
                            }, i.formatters)
                        })
                    },
                    Z = function(l) {
                        function e() {
                            var e = null !== l && l.apply(this, arguments) || this;
                            return e.cache = (0, d.Sn)(), e.state = {
                                cache: e.cache,
                                intl: z(K(e.props), e.cache),
                                prevConfig: K(e.props)
                            }, e
                        }
                        return (0, r.ZT)(e, l), e.getDerivedStateFromProps = function(l, e) {
                            var t = e.prevConfig,
                                a = e.cache,
                                n = K(l);
                            return (0, E.wU)(t, n) ? null : {
                                intl: z(n, a),
                                prevConfig: n
                            }
                        }, e.prototype.render = function() {
                            return (0, E.lq)(this.state.intl), i.createElement(o.zt, {
                                value: this.state.intl
                            }, this.props.children)
                        }, e.displayName = "IntlProvider", e.defaultProps = E.Z0, e
                    }(i.PureComponent),
                    j = Z,
                    J = t(3920),
                    q = t(184),
                    Y = "en-CA",
                    $ = {
                        locale: Y,
                        setLocale: null
                    },
                    Q = (0, i.createContext)($);

                function X(l) {
                    var e = l.children,
                        t = (0, J._)("locale", Y),
                        r = (0, a.Z)(t, 2),
                        o = r[0],
                        E = r[1],
                        N = (0, i.useState)(o),
                        A = (0, a.Z)(N, 2),
                        u = A[0],
                        _ = A[1];
                    return (0, i.useEffect)((function() {
                        E(u)
                    }), [E, u]), (0, q.jsx)(j, {
                        locale: u,
                        messages: n.Z[u],
                        children: (0, q.jsx)(Q.Provider, {
                            value: {
                                locale: u,
                                setLocale: _
                            },
                            children: e
                        })
                    })
                }
            },
            8336: function(l, e, t) {
                "use strict";
                t.d(e, {
                    R: function() {
                        return a
                    }
                });
                var a = {
                    name: "English",
                    helpTitle: "How to play",
                    help1: "Every day, there is a new Mystery Country. Your goal is to guess the\n  mystery country using the fewest number of guesses. Each incorrect guess\n  will appear on the globe with a colour indicating how close it is to the\n  Mystery Country. The <b>hotter</b> the colour, the closer you are to the answer.",
                    help2: "For example, if the Mystery Country is <b>Japan</b>, then the following\n  countries would appear with these colours if guessed:",
                    help3: "A new Mystery Country will be available every day!",
                    France: "France",
                    Nepal: "Nepal",
                    Mongolia: "Mongolia",
                    "South Korea": "South Korea",
                    Aux1: '<b>["Click", "Tap"]</b> the globe to play!',
                    Aux2: "Have a question?",
                    Aux3: "Check out the FAQ",
                    Footer1: "by The Abe Train",
                    Footer2: "Enjoying the game?",
                    Footer3: "Buy me a coffee",
                    Loading: "Loading...",
                    FAQTitle: "FAQ",
                    q1: "1. How is the distance between the answer and my guess calculated?",
                    a1: "Distance between countries is defined as the minimum distance between their borders.",
                    q2: "2. How can I play the game if I am colour blind or visually impaired?",
                    a2: "A high-contrast Colour Blind mode can be activated in <button>Settings</button>.",
                    q3: "3. How does the game decide what is a valid country?",
                    a3: "Globle uses this <a>framework</a> to determine what constitutes a valid guess.",
                    q4: "4. Are autonomous but not sovereign countries in the game?",
                    a4: "Some territories will appear in a neutral colour when their sovereign country is guessed, e.g. Greenland for Denmark. The location of these territories does not impact the colour of the sovereign country. Most small territories do not appear in the game, e.g. Cura\xe7ao.",
                    q5: "5. I found today's mystery country! When do I get to play again?",
                    a5: "The mystery country changes and your guesses reset at midnight in your time zone.",
                    q6: "6. Are alternative spellings for countries acceptable?",
                    a6: "There are many countries with multiple acceptable names. Some alternate spellings and previous names are accepted, e.g. Burma for Myanmar. As well, acronyms are acceptable for some multi-word countries, e.g. UAE for United Arab Emirates.",
                    q7: "7. A country is missing or a border is incorrect. What can I do about it?",
                    a7: "Geography can be a sensitive topic, and some countries' borders are disputed. If you believe a correction should be made, please politely raise an issue on {GitHub} or DM me on {Twitter}.",
                    GameTitle: "Game",
                    Game1: "Enter country name here",
                    Game2: "Enter",
                    Game3: "Enter the name of any country to make your first guess.",
                    Game4: "Drag, {click}, and zoom-in on the globe to help you find your next guess.",
                    Game5: "Invalid guess",
                    Game6: "Country already guessed",
                    Game7: "The Mystery Country is {answer}!",
                    Game8: "Closest border",
                    StatsTitle: "Statistics",
                    Stats1: "Last win",
                    Stats2: "Today's guesses",
                    Stats3: "Games won",
                    Stats4: "Current streak",
                    Stats5: "Max streak",
                    Stats6: "Average guesses",
                    Stats7: "Avg. Guesses",
                    Stats8: "Reset",
                    Stats9: "Share",
                    Stats10: "Are you sure you want to reset your score?",
                    Stats11: "Stats erased.",
                    Stats12: "Copied to clipboard!",
                    SettingsTitle: "Settings",
                    Settings1: "Day Theme",
                    Settings2: "Night Theme",
                    Settings3: "Colour Blind Mode On",
                    Settings4: "Colour Blind Mode Off",
                    Settings5: "Countries",
                    Settings6: "Cities",
                    Settings7: "Language",
                    Settings8: "Globle: Cities Edition coming soon!"
                }
            },
            3925: function(l, e, t) {
                "use strict";
                t.d(e, {
                    R: function() {
                        return a
                    }
                });
                var a = {
                    name: "Espa\xf1ol",
                    helpTitle: "Como jugar",
                    help1: "Cada d\xeda habr\xe1 un Pa\xeds Secreto. Tu objetivo es adivinar el pa\xeds secreto en el menor n\xfamero de intentos posibles. Cada respuesta incorrrecta aparecer\xe1 en el globo con un color indicando que tan cerca se encuentra del Pa\xeds Secreto. Entre m\xe1s <b>caliente</b> sea el color, m\xe1s cerca estar\xe1s de la respuesta.",
                    help2: "Por ejemplo, si el Pa\xeds Secreto es <b>Jap\xf3n</b>, entonces los siguientes pa\xedses aparecer\xedan de los siguientes colores si fueran seleccionados:",
                    France: "Francia",
                    Nepal: "Nepal",
                    Mongolia: "Mongolia",
                    "South Korea": "Corea del Sur",
                    help3: "\xa1Un nuevo Pa\xeds Secreto estar\xe1 disponible todos los d\xedas!",
                    Aux1: "\xa1Haz click en el globo para jugar!",
                    Aux2: "\xbfTienes alguna duda?",
                    Aux3: "Visita Preguntas Frecuentes.",
                    Footer1: "Creado por The Abe Train",
                    Footer2: "\xbfEstas disfrutando el juego?",
                    Footer3: "C\xf3mprame un caf\xe9!",
                    Loading: "Cargando...",
                    FAQTitle: "Preguntas Frecuentes",
                    q1: "1. \xbfC\xf3mo se calcula la distancia entre mi intento y la respuesta correcta?",
                    a1: "La distancia entre pa\xedses se define como la m\xednima distancia entre sus fronteras.",
                    q2: "2. \xbfC\xf3mo puedo jugar el juego si soy dalt\xf3nico o si tengo una discapacidad visual?",
                    a2: "Una modalidad de alto contraste puede ser activada en <button>Ajustes</button>.",
                    q3: "3. \xbfC\xf3mo decide el juego que pa\xedses son v\xe1lidos?",
                    a3: "Globle utiliza <a>este marco</a> para determinar que constituye un intento v\xe1lido.",
                    q4: "4. \xbfHay pa\xedses aut\xf3nomos no soberanos en el juego?",
                    a4: "Algunos territorios aparecer\xe1n en un color neutral cuando su pa\xeds soberano sea adivinado, por ejemplo. Groenlandia para Dinamarca. La ubicaci\xf3n de estos territorios no impacta el color del pa\xeds soberano. La mayor\xeda de los territorios peque\xf1os no aparecen en el juego,  por ejemplo. Curazao.",
                    q5: "5. \xa1Encontr\xe9 el pa\xeds secreto de hoy! \xbfCuando puedo jugar otra vez?",
                    a5: "El pais secreto cambia y tus intentos se reajustan a la media noche de tu zona horaria.",
                    q6: "",
                    a6: "",
                    q7: "6. Hace falta un pa\xeds o una frontera es incorrecta. \xbfQu\xe9 puedo hacer al respecto?",
                    a7: "La geograf\xeda puede ser un tema sensible, y las fronteras de algunos pa\xedses pueden ser disputadas. Si tu crees que una correcci\xf3n es necesaria, por favor de manera respetuosa plantea la cuestion con {GitHub} o enviame un MD en {Twitter}.",
                    GameTitle: "Juego",
                    Game1: "Ingresa el nombre del pa\xeds aqu\xed",
                    Game2: "Ingresar",
                    Game3: "Ingresa el nombre de cualquier pais para iniciar el juego.",
                    Game4: "Arrastra, haz {click}, y zoom-in en el globo para ubicar tu siguiente pa\xeds.",
                    Game5: "Intento inv\xe1lido",
                    Game6: "Pais ya adivinado",
                    Game7: "\xa1El Pa\xeds Secreto es {answer}!",
                    Game8: "Frontera m\xe1s cercana",
                    StatsTitle: "Estad\xedsticas",
                    Stats1: "\xdaltima victoria\t",
                    Stats2: "Intentos de hoy",
                    Stats3: "Victorias",
                    Stats4: "Racha actual",
                    Stats5: "Racha max",
                    Stats6: "Promedio de intentos",
                    Stats7: "Promedio de intentos",
                    Stats8: "Reajustar",
                    Stats9: "Compartir",
                    Stats10: "\xbfEst\xe1s seguro de que quieres restablecer tu puntuaci\xf3n?",
                    Stats11: "Estad\xedsticas borradas.",
                    Stats12: "Copiado",
                    SettingsTitle: "Ajustes",
                    Settings1: "Tema Diurno",
                    Settings2: "Tema Nocturno",
                    Settings3: "Modalidad de Alto Contraste Apagado",
                    Settings4: "Modalidad de Alto Contraste Activado",
                    Settings5: "Pa\xedses",
                    Settings6: "Ciudades",
                    Settings7: "Idioma",
                    Settings8: "Pr\xf3ximamente Globle Edici\xf3n de Ciudades"
                }
            },
            3272: function(l, e, t) {
                "use strict";
                var a = t(8336),
                    n = t(3925),
                    r = {
                        "en-CA": a.R,
                        "es-MX": n.R
                    };
                e.Z = r
            },
            6215: function(l, e, t) {
                "use strict";
                t.d(e, {
                    U: function() {
                        return o
                    },
                    v: function() {
                        return i
                    }
                });
                var a = t(885),
                    n = t(5890),
                    r = t(9199).R;
                r.sort((function(l, e) {
                    return l.properties.FLAG[1].localeCompare(e.properties.FLAG[1])
                }));
                var i = r[function(l, e) {
                        var t = e.split("-"),
                            n = (0, a.Z)(t, 3),
                            r = n[0],
                            i = n[1],
                            o = n[2],
                            E = Date.UTC(parseInt(r), parseInt(i) - 1, parseInt(o));
                        return Math.floor(E / parseInt("13375")) % l.length
                    }(r, n.f)],
                    o = i.properties.NAME
            },
            8333: function(l, e, t) {
                "use strict";
                t.d(e, {
                    h: function() {
                        return L
                    },
                    s: function() {
                        return y
                    }
                });
                var a = t(885),
                    n = t(7080),
                    r = t(3739),
                    i = t(2590),
                    o = t(507),
                    E = t(7036);

                function N(l) {
                    return function(e) {
                        return e < 0 ? -Math.pow(-e, l) : Math.pow(e, l)
                    }
                }

                function A(l) {
                    return l < 0 ? -Math.sqrt(-l) : Math.sqrt(l)
                }

                function u(l) {
                    return l < 0 ? -l * l : l * l
                }

                function _(l) {
                    var e = l(i.yR, i.yR),
                        t = 1;

                    function a() {
                        return 1 === t ? l(i.yR, i.yR) : .5 === t ? l(A, u) : l(N(t), N(1 / t))
                    }
                    return e.exponent = function(l) {
                        return arguments.length ? (t = +l, a()) : t
                    }, (0, E.Q)(e)
                }

                function s() {
                    var l, e, t, o, E, N = 0,
                        A = 1,
                        u = i.yR,
                        _ = !1;

                    function s(e) {
                        return null == e || isNaN(e = +e) ? E : u(0 === t ? .5 : (e = (o(e) - l) * t, _ ? Math.max(0, Math.min(1, e)) : e))
                    }

                    function c(l) {
                        return function(e) {
                            var t, n, r, i;
                            return arguments.length ? (t = e, r = (n = (0, a.Z)(t, 2))[0], i = n[1], u = l(r, i), s) : [u(0), u(1)]
                        }
                    }
                    return s.domain = function(n) {
                            var r, i;
                            return arguments.length ? (r = n, i = (0, a.Z)(r, 2), N = i[0], A = i[1], l = o(N = +N), e = o(A = +A), t = l === e ? 0 : 1 / (e - l), s) : [N, A]
                        }, s.clamp = function(l) {
                            return arguments.length ? (_ = !!l, s) : _
                        }, s.interpolator = function(l) {
                            return arguments.length ? (u = l, s) : u
                        }, s.range = c(n.Z), s.rangeRound = c(r.Z), s.unknown = function(l) {
                            return arguments.length ? (E = l, s) : E
                        },
                        function(a) {
                            return o = a, l = a(N), e = a(A), t = l === e ? 0 : 1 / (e - l), s
                        }
                }

                function c(l, e) {
                    return e.domain(l.domain()).interpolator(l.interpolator()).clamp(l.clamp()).unknown(l.unknown())
                }

                function M() {
                    var l = _(s());
                    return l.copy = function() {
                        return c(l, M()).exponent(l.exponent())
                    }, o.O.apply(l, arguments)
                }

                function f(l) {
                    for (var e = l.length / 6 | 0, t = new Array(e), a = 0; a < e;) t[a] = "#" + l.slice(6 * a, 6 * ++a);
                    return t
                }
                var d = t(5847),
                    p = function(l) {
                        return (0, d.hD)(l[l.length - 1])
                    },
                    O = p(new Array(3).concat("f0f0f0bdbdbd636363", "f7f7f7cccccc969696525252", "f7f7f7cccccc969696636363252525", "f7f7f7d9d9d9bdbdbd969696636363252525", "f7f7f7d9d9d9bdbdbd969696737373525252252525", "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525", "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525000000").map(f)),
                    R = p(new Array(3).concat("e0ecf49ebcda8856a7", "edf8fbb3cde38c96c688419d", "edf8fbb3cde38c96c68856a7810f7c", "edf8fbbfd3e69ebcda8c96c68856a7810f7c", "edf8fbbfd3e69ebcda8c96c68c6bb188419d6e016b", "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d6e016b", "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d810f7c4d004b").map(f)),
                    m = p(new Array(3).concat("fee8c8fdbb84e34a33", "fef0d9fdcc8afc8d59d7301f", "fef0d9fdcc8afc8d59e34a33b30000", "fef0d9fdd49efdbb84fc8d59e34a33b30000", "fef0d9fdd49efdbb84fc8d59ef6548d7301f990000", "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301f990000", "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301fb300007f0000").map(f)),
                    h = t(3843),
                    g = 15e6,
                    L = function(l, e, t, a) {
                        var n;
                        if ("Territory" === (null === (n = l.properties) || void 0 === n ? void 0 : n.TYPE)) return a ? "white" : "#BBBBBB";
                        if (l.properties.NAME === e.properties.NAME) return "green";
                        null == l.proximity && (l.proximity = (0, h.z)(l, e));
                        var r = function() {
                            return M.apply(null, arguments).exponent(.5)
                        }(a ? O : t ? R : m).domain([g, 0]);
                        return r(l.proximity)
                    },
                    y = function(l, e) {
                        if (l.properties.NAME === e.properties.NAME) return "\ud83d\udfe9";
                        null == l.proximity && (l.proximity = (0, h.z)(l, e));
                        var t = l.proximity / g;
                        return t < .1 ? "\ud83d\udfe5" : t < .25 ? "\ud83d\udfe7" : t < .5 ? "\ud83d\udfe8" : "\u2b1c"
                    }
            },
            5890: function(l, e, t) {
                "use strict";

                function a(l, e) {
                    var t = big,
                        a = big,
                        n = Date.UTC(t.getFullYear(), t.getMonth(), t.getDate()),
                        r = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
                    return Math.floor((r - n) / 864e5)
                }
                t.d(e, {
                    L: function() {
                        return a
                    },
                    f: function() {
                        return n
                    }
                });
                var n = (big).toLocaleDateString("en-CA")
            },
            3843: function(l, e, t) {
                "use strict";
                t.d(e, {
                    z: function() {
                        return R
                    }
                });
                var a = t(2982),
                    n = t(7762),
                    r = t(885),
                    i = t(4942),
                    o = t(5671),
                    E = t(3144);

                function N(l, e) {
                    return l === e || Math.abs(l - e) < Number.EPSILON
                }

                function A(l) {
                    if (l instanceof s) return new s(l[u], l[_]);
                    if ("lat" in l && "lng" in l) return "function" == typeof l.lat && "function" == typeof l.lng ? new s(l.lat(), l.lng()) : new s(parseFloat(l.lat), parseFloat(l.lng));
                    if ("lat" in l && "long" in l) return new s(parseFloat(l.lat), parseFloat(l.long));
                    if ("lat" in l && "lon" in l) return new s(parseFloat(l.lat), parseFloat(l.lon));
                    if ("latitude" in l && "longitude" in l) return new s(parseFloat(l.latitude), parseFloat(l.longitude));
                    if ("number" === typeof l[0] && "number" === typeof l[1]) return new s(l[1], l[0]);
                    if ("x" in l && "y" in l) return new s(parseFloat(l.y), parseFloat(l.x));
                    throw new TypeError("Cannot convert ".concat(l, " to LatLng"))
                }
                var u = "latitude",
                    _ = "longitude",
                    s = function(l) {
                        function e(l, t) {
                            var a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                            if ((0, o.Z)(this, e), l = parseFloat(l), t = parseFloat(t), Number.isNaN(l) || Number.isNaN(t)) throw TypeError("lat or lng are not numbers");
                            a || (l = Math.min(Math.max(l, -90), 90), t = 180 == t ? t : ((t + 180) % 360 + 360) % 360 - 180), Object.defineProperty(this, u, {
                                value: l
                            }), Object.defineProperty(this, _, {
                                value: t
                            }), this.length = 2, Object.freeze(this)
                        }
                        return (0, E.Z)(e, [{
                            key: "equals",
                            value: function(l) {
                                return t = l, e = A(e = this), t = A(t), N(e[u], t[u]) && N(e[_], t[_]);
                                var e, t
                            }
                        }, {
                            key: "lat",
                            value: function() {
                                return this[u]
                            }
                        }, {
                            key: "lng",
                            value: function() {
                                return this[_]
                            }
                        }, {
                            key: "x",
                            get: function() {
                                return this[_]
                            }
                        }, {
                            key: "y",
                            get: function() {
                                return this[u]
                            }
                        }, {
                            key: "0",
                            get: function() {
                                return this[_]
                            }
                        }, {
                            key: "1",
                            get: function() {
                                return this[u]
                            }
                        }, {
                            key: "long",
                            get: function() {
                                return this[_]
                            }
                        }, {
                            key: "lon",
                            get: function() {
                                return this[_]
                            }
                        }, {
                            key: "toJSON",
                            value: function() {
                                return {
                                    lat: this[u],
                                    lng: this[_]
                                }
                            }
                        }, {
                            key: "toString",
                            value: function() {
                                return "(".concat(this[u], ", ").concat(this[_], ")")
                            }
                        }, {
                            key: "toUrlValue",
                            value: function() {
                                var l = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 6;
                                return l = parseInt(l), parseFloat(this[u].toFixed(l)) + "," + parseFloat(this[_].toFixed(l))
                            }
                        }, {
                            key: l,
                            value: function() {
                                var l = this,
                                    e = 0;
                                return (0, i.Z)({
                                    next: function() {
                                        return e < l.length ? {
                                            value: l[e++],
                                            done: !1
                                        } : {
                                            done: !0
                                        }
                                    }
                                }, Symbol.iterator, (function() {
                                    return this
                                }))
                            }
                        }]), e
                    }(Symbol.iterator),
                    c = 6378137;

                function M(l) {
                    return l * Math.PI / 180
                }

                function f(l, e) {
                    var t = M(l.lat()),
                        a = M(l.lng()),
                        n = M(e.lat()),
                        r = M(e.lng());
                    return 2 * Math.asin(Math.sqrt(Math.pow(Math.sin((t - n) / 2), 2) + Math.cos(t) * Math.cos(n) * Math.pow(Math.sin((a - r) / 2), 2)))
                }

                function d(l, e) {
                    var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : c;
                    return f(l = A(l), e = A(e)) * t
                }

                function p(l) {
                    var e = (0, r.Z)(l, 2),
                        t = e[0],
                        a = e[1];
                    return new s(a, t)
                }

                function O(l) {
                    var e = l.geometry;
                    switch (e.type) {
                        case "Polygon":
                            return e.coordinates[0];
                        case "MultiPolygon":
                            var t, r = [],
                                i = (0, n.Z)(e.coordinates);
                            try {
                                for (i.s(); !(t = i.n()).done;) {
                                    var o = t.value;
                                    r = [].concat((0, a.Z)(r), (0, a.Z)(o[0]))
                                }
                            } catch (E) {
                                i.e(E)
                            } finally {
                                i.f()
                            }
                            return r;
                        default:
                            throw new Error("Country data error")
                    }
                }

                function R(l, e) {
                    var t = l.properties.NAME,
                        a = e.properties.NAME;
                    return "South Africa" === t && "Lesotho" === a || "Lesotho" === t && "South Africa" === a || "Italy" === t && "Vatican" === a || "Vatican" === t && "Italy" === a || "Italy" === t && "San Marino" === a || "San Marino" === t && "Italy" === a ? 0 : function(l, e) {
                        for (var t = 20037500, a = 0; a < l.length; a++)
                            for (var n = p(l[a]), r = 0; r < e.length; r++) {
                                var i = d(n, p(e[r]));
                                t = Math.min(t, i)
                            }
                        return t
                    }(O(l), O(e))
                }
            },
            5381: function(l, e, t) {
                "use strict";
                t.d(e, {
                    L: function() {
                        return r
                    },
                    s: function() {
                        return n
                    }
                });
                var a = t(173);

                function n(l, e) {
                    e.current.controls().autoRotate = !1;
                    var t = e.current.pointOfView().altitude;
                    l.altitude = Math.max(t, .05), e.current.pointOfView(l, 250)
                }
                var r = function(l) {
                    var e = l ? "night" : "day";
                    return a.G6 && a.x_ < "14" ? "images/safari-14-earth-".concat(e, ".jpg") : "images/earth-".concat(e, ".webp")
                }
            },
            6138: function(l, e, t) {
                "use strict";
                t.d(e, {
                    kG: function() {
                        return a
                    }
                });

                function a(l, e, t) {
                    if (void 0 === t && (t = Error), !l) throw new t(e)
                }
            },
            3531: function(l, e, t) {
                "use strict";

                function a(l, e) {
                    var t = e && e.cache ? e.cache : A,
                        a = e && e.serializer ? e.serializer : E;
                    return (e && e.strategy ? e.strategy : o)(l, {
                        cache: t,
                        serializer: a
                    })
                }

                function n(l, e, t, a) {
                    var n, r = null == (n = a) || "number" === typeof n || "boolean" === typeof n ? a : t(a),
                        i = e.get(r);
                    return "undefined" === typeof i && (i = l.call(this, a), e.set(r, i)), i
                }

                function r(l, e, t) {
                    var a = Array.prototype.slice.call(arguments, 3),
                        n = t(a),
                        r = e.get(n);
                    return "undefined" === typeof r && (r = l.apply(this, a), e.set(n, r)), r
                }

                function i(l, e, t, a, n) {
                    return t.bind(e, l, a, n)
                }

                function o(l, e) {
                    return i(l, this, 1 === l.length ? n : r, e.cache.create(), e.serializer)
                }
                t.d(e, {
                    A: function() {
                        return u
                    },
                    Z: function() {
                        return a
                    }
                });
                var E = function() {
                    return JSON.stringify(arguments)
                };

                function N() {
                    this.cache = Object.create(null)
                }
                N.prototype.get = function(l) {
                    return this.cache[l]
                }, N.prototype.set = function(l, e) {
                    this.cache[l] = e
                };
                var A = {
                        create: function() {
                            return new N
                        }
                    },
                    u = {
                        variadic: function(l, e) {
                            return i(l, this, r, e.cache.create(), e.serializer)
                        },
                        monadic: function(l, e) {
                            return i(l, this, n, e.cache.create(), e.serializer)
                        }
                    }
            },
            1252: function(l, e, t) {
                "use strict";
                t.d(e, {
                    wD: function() {
                        return n
                    },
                    VG: function() {
                        return E
                    },
                    rp: function() {
                        return A
                    },
                    Ii: function() {
                        return d
                    },
                    O4: function() {
                        return o
                    },
                    uf: function() {
                        return N
                    },
                    Wh: function() {
                        return f
                    },
                    Jo: function() {
                        return s
                    },
                    yx: function() {
                        return c
                    },
                    Wi: function() {
                        return _
                    },
                    HI: function() {
                        return M
                    },
                    pe: function() {
                        return u
                    },
                    Qc: function() {
                        return al
                    }
                });
                var a, n, r, i = t(9388);

                function o(l) {
                    return l.type === n.literal
                }

                function E(l) {
                    return l.type === n.argument
                }

                function N(l) {
                    return l.type === n.number
                }

                function A(l) {
                    return l.type === n.date
                }

                function u(l) {
                    return l.type === n.time
                }

                function _(l) {
                    return l.type === n.select
                }

                function s(l) {
                    return l.type === n.plural
                }

                function c(l) {
                    return l.type === n.pound
                }

                function M(l) {
                    return l.type === n.tag
                }

                function f(l) {
                    return !(!l || "object" !== typeof l || l.type !== r.number)
                }

                function d(l) {
                    return !(!l || "object" !== typeof l || l.type !== r.dateTime)
                }! function(l) {
                    l[l.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", l[l.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", l[l.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", l[l.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", l[l.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", l[l.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", l[l.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", l[l.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", l[l.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", l[l.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", l[l.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", l[l.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", l[l.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", l[l.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", l[l.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", l[l.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", l[l.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", l[l.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", l[l.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", l[l.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", l[l.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", l[l.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", l[l.INVALID_TAG = 23] = "INVALID_TAG", l[l.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", l[l.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", l[l.UNCLOSED_TAG = 27] = "UNCLOSED_TAG"
                }(a || (a = {})),
                function(l) {
                    l[l.literal = 0] = "literal", l[l.argument = 1] = "argument", l[l.number = 2] = "number", l[l.date = 3] = "date", l[l.time = 4] = "time", l[l.select = 5] = "select", l[l.plural = 6] = "plural", l[l.pound = 7] = "pound", l[l.tag = 8] = "tag"
                }(n || (n = {})),
                function(l) {
                    l[l.number = 0] = "number", l[l.dateTime = 1] = "dateTime"
                }(r || (r = {}));
                var p = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,
                    O = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;

                function R(l) {
                    var e = {};
                    return l.replace(O, (function(l) {
                        var t = l.length;
                        switch (l[0]) {
                            case "G":
                                e.era = 4 === t ? "long" : 5 === t ? "narrow" : "short";
                                break;
                            case "y":
                                e.year = 2 === t ? "2-digit" : "numeric";
                                break;
                            case "Y":
                            case "u":
                            case "U":
                            case "r":
                                throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");
                            case "q":
                            case "Q":
                                throw new RangeError("`q/Q` (quarter) patterns are not supported");
                            case "M":
                            case "L":
                                e.month = ["numeric", "2-digit", "short", "long", "narrow"][t - 1];
                                break;
                            case "w":
                            case "W":
                                throw new RangeError("`w/W` (week) patterns are not supported");
                            case "d":
                                e.day = ["numeric", "2-digit"][t - 1];
                                break;
                            case "D":
                            case "F":
                            case "g":
                                throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");
                            case "E":
                                e.weekday = 4 === t ? "short" : 5 === t ? "narrow" : "short";
                                break;
                            case "e":
                                if (t < 4) throw new RangeError("`e..eee` (weekday) patterns are not supported");
                                e.weekday = ["short", "long", "narrow", "short"][t - 4];
                                break;
                            case "c":
                                if (t < 4) throw new RangeError("`c..ccc` (weekday) patterns are not supported");
                                e.weekday = ["short", "long", "narrow", "short"][t - 4];
                                break;
                            case "a":
                                e.hour12 = !0;
                                break;
                            case "b":
                            case "B":
                                throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");
                            case "h":
                                e.hourCycle = "h12", e.hour = ["numeric", "2-digit"][t - 1];
                                break;
                            case "H":
                                e.hourCycle = "h23", e.hour = ["numeric", "2-digit"][t - 1];
                                break;
                            case "K":
                                e.hourCycle = "h11", e.hour = ["numeric", "2-digit"][t - 1];
                                break;
                            case "k":
                                e.hourCycle = "h24", e.hour = ["numeric", "2-digit"][t - 1];
                                break;
                            case "j":
                            case "J":
                            case "C":
                                throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");
                            case "m":
                                e.minute = ["numeric", "2-digit"][t - 1];
                                break;
                            case "s":
                                e.second = ["numeric", "2-digit"][t - 1];
                                break;
                            case "S":
                            case "A":
                                throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");
                            case "z":
                                e.timeZoneName = t < 4 ? "short" : "long";
                                break;
                            case "Z":
                            case "O":
                            case "v":
                            case "V":
                            case "X":
                            case "x":
                                throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead")
                        }
                        return ""
                    })), e
                }
                var m = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
                var h, g = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,
                    L = /^(@+)?(\+|#+)?[rs]?$/g,
                    y = /(\*)(0+)|(#+)(0+)|(0+)/g,
                    T = /^(0+)$/;

                function I(l) {
                    var e = {};
                    return "r" === l[l.length - 1] ? e.roundingPriority = "morePrecision" : "s" === l[l.length - 1] && (e.roundingPriority = "lessPrecision"), l.replace(L, (function(l, t, a) {
                        return "string" !== typeof a ? (e.minimumSignificantDigits = t.length, e.maximumSignificantDigits = t.length) : "+" === a ? e.minimumSignificantDigits = t.length : "#" === t[0] ? e.maximumSignificantDigits = t.length : (e.minimumSignificantDigits = t.length, e.maximumSignificantDigits = t.length + ("string" === typeof a ? a.length : 0)), ""
                    })), e
                }

                function S(l) {
                    switch (l) {
                        case "sign-auto":
                            return {
                                signDisplay: "auto"
                            };
                        case "sign-accounting":
                        case "()":
                            return {
                                currencySign: "accounting"
                            };
                        case "sign-always":
                        case "+!":
                            return {
                                signDisplay: "always"
                            };
                        case "sign-accounting-always":
                        case "()!":
                            return {
                                signDisplay: "always",
                                currencySign: "accounting"
                            };
                        case "sign-except-zero":
                        case "+?":
                            return {
                                signDisplay: "exceptZero"
                            };
                        case "sign-accounting-except-zero":
                        case "()?":
                            return {
                                signDisplay: "exceptZero",
                                currencySign: "accounting"
                            };
                        case "sign-never":
                        case "+_":
                            return {
                                signDisplay: "never"
                            }
                    }
                }

                function b(l) {
                    var e;
                    if ("E" === l[0] && "E" === l[1] ? (e = {
                            notation: "engineering"
                        }, l = l.slice(2)) : "E" === l[0] && (e = {
                            notation: "scientific"
                        }, l = l.slice(1)), e) {
                        var t = l.slice(0, 2);
                        if ("+!" === t ? (e.signDisplay = "always", l = l.slice(2)) : "+?" === t && (e.signDisplay = "exceptZero", l = l.slice(2)), !T.test(l)) throw new Error("Malformed concise eng/scientific notation");
                        e.minimumIntegerDigits = l.length
                    }
                    return e
                }

                function B(l) {
                    var e = S(l);
                    return e || {}
                }

                function v(l) {
                    for (var e = {}, t = 0, a = l; t < a.length; t++) {
                        var n = a[t];
                        switch (n.stem) {
                            case "percent":
                            case "%":
                                e.style = "percent";
                                continue;
                            case "%x100":
                                e.style = "percent", e.scale = 100;
                                continue;
                            case "currency":
                                e.style = "currency", e.currency = n.options[0];
                                continue;
                            case "group-off":
                            case ",_":
                                e.useGrouping = !1;
                                continue;
                            case "precision-integer":
                            case ".":
                                e.maximumFractionDigits = 0;
                                continue;
                            case "measure-unit":
                            case "unit":
                                e.style = "unit", e.unit = n.options[0].replace(/^(.*?)-/, "");
                                continue;
                            case "compact-short":
                            case "K":
                                e.notation = "compact", e.compactDisplay = "short";
                                continue;
                            case "compact-long":
                            case "KK":
                                e.notation = "compact", e.compactDisplay = "long";
                                continue;
                            case "scientific":
                                e = (0, i.pi)((0, i.pi)((0, i.pi)({}, e), {
                                    notation: "scientific"
                                }), n.options.reduce((function(l, e) {
                                    return (0, i.pi)((0, i.pi)({}, l), B(e))
                                }), {}));
                                continue;
                            case "engineering":
                                e = (0, i.pi)((0, i.pi)((0, i.pi)({}, e), {
                                    notation: "engineering"
                                }), n.options.reduce((function(l, e) {
                                    return (0, i.pi)((0, i.pi)({}, l), B(e))
                                }), {}));
                                continue;
                            case "notation-simple":
                                e.notation = "standard";
                                continue;
                            case "unit-width-narrow":
                                e.currencyDisplay = "narrowSymbol", e.unitDisplay = "narrow";
                                continue;
                            case "unit-width-short":
                                e.currencyDisplay = "code", e.unitDisplay = "short";
                                continue;
                            case "unit-width-full-name":
                                e.currencyDisplay = "name", e.unitDisplay = "long";
                                continue;
                            case "unit-width-iso-code":
                                e.currencyDisplay = "symbol";
                                continue;
                            case "scale":
                                e.scale = parseFloat(n.options[0]);
                                continue;
                            case "integer-width":
                                if (n.options.length > 1) throw new RangeError("integer-width stems only accept a single optional option");
                                n.options[0].replace(y, (function(l, t, a, n, r, i) {
                                    if (t) e.minimumIntegerDigits = a.length;
                                    else {
                                        if (n && r) throw new Error("We currently do not support maximum integer digits");
                                        if (i) throw new Error("We currently do not support exact integer digits")
                                    }
                                    return ""
                                }));
                                continue
                        }
                        if (T.test(n.stem)) e.minimumIntegerDigits = n.stem.length;
                        else if (g.test(n.stem)) {
                            if (n.options.length > 1) throw new RangeError("Fraction-precision stems only accept a single optional option");
                            n.stem.replace(g, (function(l, t, a, n, r, i) {
                                return "*" === a ? e.minimumFractionDigits = t.length : n && "#" === n[0] ? e.maximumFractionDigits = n.length : r && i ? (e.minimumFractionDigits = r.length, e.maximumFractionDigits = r.length + i.length) : (e.minimumFractionDigits = t.length, e.maximumFractionDigits = t.length), ""
                            }));
                            var r = n.options[0];
                            "w" === r ? e = (0, i.pi)((0, i.pi)({}, e), {
                                trailingZeroDisplay: "stripIfInteger"
                            }) : r && (e = (0, i.pi)((0, i.pi)({}, e), I(r)))
                        } else if (L.test(n.stem)) e = (0, i.pi)((0, i.pi)({}, e), I(n.stem));
                        else {
                            var o = S(n.stem);
                            o && (e = (0, i.pi)((0, i.pi)({}, e), o));
                            var E = b(n.stem);
                            E && (e = (0, i.pi)((0, i.pi)({}, e), E))
                        }
                    }
                    return e
                }
                var U = new RegExp("^".concat(p.source, "*")),
                    G = new RegExp("".concat(p.source, "*$"));

                function F(l, e) {
                    return {
                        start: l,
                        end: e
                    }
                }
                var P = !!String.prototype.startsWith,
                    w = !!String.fromCodePoint,
                    k = !!Object.fromEntries,
                    H = !!String.prototype.codePointAt,
                    C = !!String.prototype.trimStart,
                    x = !!String.prototype.trimEnd,
                    D = !!Number.isSafeInteger ? Number.isSafeInteger : function(l) {
                        return "number" === typeof l && isFinite(l) && Math.floor(l) === l && Math.abs(l) <= 9007199254740991
                    },
                    K = !0;
                try {
                    K = "a" === (null === (h = Y("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu").exec("a")) || void 0 === h ? void 0 : h[0])
                } catch (nl) {
                    K = !1
                }
                var W, V = P ? function(l, e, t) {
                        return l.startsWith(e, t)
                    } : function(l, e, t) {
                        return l.slice(t, t + e.length) === e
                    },
                    z = w ? String.fromCodePoint : function() {
                        for (var l = [], e = 0; e < arguments.length; e++) l[e] = arguments[e];
                        for (var t, a = "", n = l.length, r = 0; n > r;) {
                            if ((t = l[r++]) > 1114111) throw RangeError(t + " is not a valid code point");
                            a += t < 65536 ? String.fromCharCode(t) : String.fromCharCode(55296 + ((t -= 65536) >> 10), t % 1024 + 56320)
                        }
                        return a
                    },
                    Z = k ? Object.fromEntries : function(l) {
                        for (var e = {}, t = 0, a = l; t < a.length; t++) {
                            var n = a[t],
                                r = n[0],
                                i = n[1];
                            e[r] = i
                        }
                        return e
                    },
                    j = H ? function(l, e) {
                        return l.codePointAt(e)
                    } : function(l, e) {
                        var t = l.length;
                        if (!(e < 0 || e >= t)) {
                            var a, n = l.charCodeAt(e);
                            return n < 55296 || n > 56319 || e + 1 === t || (a = l.charCodeAt(e + 1)) < 56320 || a > 57343 ? n : a - 56320 + (n - 55296 << 10) + 65536
                        }
                    },
                    J = C ? function(l) {
                        return l.trimStart()
                    } : function(l) {
                        return l.replace(U, "")
                    },
                    q = x ? function(l) {
                        return l.trimEnd()
                    } : function(l) {
                        return l.replace(G, "")
                    };

                function Y(l, e) {
                    return new RegExp(l, e)
                }
                if (K) {
                    var $ = Y("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
                    W = function(l, e) {
                        var t;
                        return $.lastIndex = e, null !== (t = $.exec(l)[1]) && void 0 !== t ? t : ""
                    }
                } else W = function(l, e) {
                    for (var t = [];;) {
                        var a = j(l, e);
                        if (void 0 === a || ll(a) || el(a)) break;
                        t.push(a), e += a >= 65536 ? 2 : 1
                    }
                    return z.apply(void 0, t)
                };
                var Q = function() {
                    function l(l, e) {
                        void 0 === e && (e = {}), this.message = l, this.position = {
                            offset: 0,
                            line: 1,
                            column: 1
                        }, this.ignoreTag = !!e.ignoreTag, this.requiresOtherClause = !!e.requiresOtherClause, this.shouldParseSkeletons = !!e.shouldParseSkeletons
                    }
                    return l.prototype.parse = function() {
                        if (0 !== this.offset()) throw Error("parser can only be used once");
                        return this.parseMessage(0, "", !1)
                    }, l.prototype.parseMessage = function(l, e, t) {
                        for (var r = []; !this.isEOF();) {
                            var i = this.char();
                            if (123 === i) {
                                if ((o = this.parseArgument(l, t)).err) return o;
                                r.push(o.val)
                            } else {
                                if (125 === i && l > 0) break;
                                if (35 !== i || "plural" !== e && "selectordinal" !== e) {
                                    if (60 === i && !this.ignoreTag && 47 === this.peek()) {
                                        if (t) break;
                                        return this.error(a.UNMATCHED_CLOSING_TAG, F(this.clonePosition(), this.clonePosition()))
                                    }
                                    if (60 === i && !this.ignoreTag && X(this.peek() || 0)) {
                                        if ((o = this.parseTag(l, e)).err) return o;
                                        r.push(o.val)
                                    } else {
                                        var o;
                                        if ((o = this.parseLiteral(l, e)).err) return o;
                                        r.push(o.val)
                                    }
                                } else {
                                    var E = this.clonePosition();
                                    this.bump(), r.push({
                                        type: n.pound,
                                        location: F(E, this.clonePosition())
                                    })
                                }
                            }
                        }
                        return {
                            val: r,
                            err: null
                        }
                    }, l.prototype.parseTag = function(l, e) {
                        var t = this.clonePosition();
                        this.bump();
                        var r = this.parseTagName();
                        if (this.bumpSpace(), this.bumpIf("/>")) return {
                            val: {
                                type: n.literal,
                                value: "<".concat(r, "/>"),
                                location: F(t, this.clonePosition())
                            },
                            err: null
                        };
                        if (this.bumpIf(">")) {
                            var i = this.parseMessage(l + 1, e, !0);
                            if (i.err) return i;
                            var o = i.val,
                                E = this.clonePosition();
                            if (this.bumpIf("</")) {
                                if (this.isEOF() || !X(this.char())) return this.error(a.INVALID_TAG, F(E, this.clonePosition()));
                                var N = this.clonePosition();
                                return r !== this.parseTagName() ? this.error(a.UNMATCHED_CLOSING_TAG, F(N, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
                                    val: {
                                        type: n.tag,
                                        value: r,
                                        children: o,
                                        location: F(t, this.clonePosition())
                                    },
                                    err: null
                                } : this.error(a.INVALID_TAG, F(E, this.clonePosition())))
                            }
                            return this.error(a.UNCLOSED_TAG, F(t, this.clonePosition()))
                        }
                        return this.error(a.INVALID_TAG, F(t, this.clonePosition()))
                    }, l.prototype.parseTagName = function() {
                        var l, e = this.offset();
                        for (this.bump(); !this.isEOF() && (45 === (l = this.char()) || 46 === l || l >= 48 && l <= 57 || 95 === l || l >= 97 && l <= 122 || l >= 65 && l <= 90 || 183 == l || l >= 192 && l <= 214 || l >= 216 && l <= 246 || l >= 248 && l <= 893 || l >= 895 && l <= 8191 || l >= 8204 && l <= 8205 || l >= 8255 && l <= 8256 || l >= 8304 && l <= 8591 || l >= 11264 && l <= 12271 || l >= 12289 && l <= 55295 || l >= 63744 && l <= 64975 || l >= 65008 && l <= 65533 || l >= 65536 && l <= 983039);) this.bump();
                        return this.message.slice(e, this.offset())
                    }, l.prototype.parseLiteral = function(l, e) {
                        for (var t = this.clonePosition(), a = "";;) {
                            var r = this.tryParseQuote(e);
                            if (r) a += r;
                            else {
                                var i = this.tryParseUnquoted(l, e);
                                if (i) a += i;
                                else {
                                    var o = this.tryParseLeftAngleBracket();
                                    if (!o) break;
                                    a += o
                                }
                            }
                        }
                        var E = F(t, this.clonePosition());
                        return {
                            val: {
                                type: n.literal,
                                value: a,
                                location: E
                            },
                            err: null
                        }
                    }, l.prototype.tryParseLeftAngleBracket = function() {
                        return this.isEOF() || 60 !== this.char() || !this.ignoreTag && (X(l = this.peek() || 0) || 47 === l) ? null : (this.bump(), "<");
                        var l
                    }, l.prototype.tryParseQuote = function(l) {
                        if (this.isEOF() || 39 !== this.char()) return null;
                        switch (this.peek()) {
                            case 39:
                                return this.bump(), this.bump(), "'";
                            case 123:
                            case 60:
                            case 62:
                            case 125:
                                break;
                            case 35:
                                if ("plural" === l || "selectordinal" === l) break;
                                return null;
                            default:
                                return null
                        }
                        this.bump();
                        var e = [this.char()];
                        for (this.bump(); !this.isEOF();) {
                            var t = this.char();
                            if (39 === t) {
                                if (39 !== this.peek()) {
                                    this.bump();
                                    break
                                }
                                e.push(39), this.bump()
                            } else e.push(t);
                            this.bump()
                        }
                        return z.apply(void 0, e)
                    }, l.prototype.tryParseUnquoted = function(l, e) {
                        if (this.isEOF()) return null;
                        var t = this.char();
                        return 60 === t || 123 === t || 35 === t && ("plural" === e || "selectordinal" === e) || 125 === t && l > 0 ? null : (this.bump(), z(t))
                    }, l.prototype.parseArgument = function(l, e) {
                        var t = this.clonePosition();
                        if (this.bump(), this.bumpSpace(), this.isEOF()) return this.error(a.EXPECT_ARGUMENT_CLOSING_BRACE, F(t, this.clonePosition()));
                        if (125 === this.char()) return this.bump(), this.error(a.EMPTY_ARGUMENT, F(t, this.clonePosition()));
                        var r = this.parseIdentifierIfPossible().value;
                        if (!r) return this.error(a.MALFORMED_ARGUMENT, F(t, this.clonePosition()));
                        if (this.bumpSpace(), this.isEOF()) return this.error(a.EXPECT_ARGUMENT_CLOSING_BRACE, F(t, this.clonePosition()));
                        switch (this.char()) {
                            case 125:
                                return this.bump(), {
                                    val: {
                                        type: n.argument,
                                        value: r,
                                        location: F(t, this.clonePosition())
                                    },
                                    err: null
                                };
                            case 44:
                                return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(a.EXPECT_ARGUMENT_CLOSING_BRACE, F(t, this.clonePosition())) : this.parseArgumentOptions(l, e, r, t);
                            default:
                                return this.error(a.MALFORMED_ARGUMENT, F(t, this.clonePosition()))
                        }
                    }, l.prototype.parseIdentifierIfPossible = function() {
                        var l = this.clonePosition(),
                            e = this.offset(),
                            t = W(this.message, e),
                            a = e + t.length;
                        return this.bumpTo(a), {
                            value: t,
                            location: F(l, this.clonePosition())
                        }
                    }, l.prototype.parseArgumentOptions = function(l, e, t, o) {
                        var E, N = this.clonePosition(),
                            A = this.parseIdentifierIfPossible().value,
                            u = this.clonePosition();
                        switch (A) {
                            case "":
                                return this.error(a.EXPECT_ARGUMENT_TYPE, F(N, u));
                            case "number":
                            case "date":
                            case "time":
                                this.bumpSpace();
                                var _ = null;
                                if (this.bumpIf(",")) {
                                    this.bumpSpace();
                                    var s = this.clonePosition();
                                    if ((m = this.parseSimpleArgStyleIfPossible()).err) return m;
                                    if (0 === (f = q(m.val)).length) return this.error(a.EXPECT_ARGUMENT_STYLE, F(this.clonePosition(), this.clonePosition()));
                                    _ = {
                                        style: f,
                                        styleLocation: F(s, this.clonePosition())
                                    }
                                }
                                if ((h = this.tryParseArgumentClose(o)).err) return h;
                                var c = F(o, this.clonePosition());
                                if (_ && V(null === _ || void 0 === _ ? void 0 : _.style, "::", 0)) {
                                    var M = J(_.style.slice(2));
                                    if ("number" === A) return (m = this.parseNumberSkeletonFromString(M, _.styleLocation)).err ? m : {
                                        val: {
                                            type: n.number,
                                            value: t,
                                            location: c,
                                            style: m.val
                                        },
                                        err: null
                                    };
                                    if (0 === M.length) return this.error(a.EXPECT_DATE_TIME_SKELETON, c);
                                    var f = {
                                        type: r.dateTime,
                                        pattern: M,
                                        location: _.styleLocation,
                                        parsedOptions: this.shouldParseSkeletons ? R(M) : {}
                                    };
                                    return {
                                        val: {
                                            type: "date" === A ? n.date : n.time,
                                            value: t,
                                            location: c,
                                            style: f
                                        },
                                        err: null
                                    }
                                }
                                return {
                                    val: {
                                        type: "number" === A ? n.number : "date" === A ? n.date : n.time,
                                        value: t,
                                        location: c,
                                        style: null !== (E = null === _ || void 0 === _ ? void 0 : _.style) && void 0 !== E ? E : null
                                    },
                                    err: null
                                };
                            case "plural":
                            case "selectordinal":
                            case "select":
                                var d = this.clonePosition();
                                if (this.bumpSpace(), !this.bumpIf(",")) return this.error(a.EXPECT_SELECT_ARGUMENT_OPTIONS, F(d, (0, i.pi)({}, d)));
                                this.bumpSpace();
                                var p = this.parseIdentifierIfPossible(),
                                    O = 0;
                                if ("select" !== A && "offset" === p.value) {
                                    if (!this.bumpIf(":")) return this.error(a.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, F(this.clonePosition(), this.clonePosition()));
                                    var m;
                                    if (this.bumpSpace(), (m = this.tryParseDecimalInteger(a.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, a.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE)).err) return m;
                                    this.bumpSpace(), p = this.parseIdentifierIfPossible(), O = m.val
                                }
                                var h, g = this.tryParsePluralOrSelectOptions(l, A, e, p);
                                if (g.err) return g;
                                if ((h = this.tryParseArgumentClose(o)).err) return h;
                                var L = F(o, this.clonePosition());
                                return "select" === A ? {
                                    val: {
                                        type: n.select,
                                        value: t,
                                        options: Z(g.val),
                                        location: L
                                    },
                                    err: null
                                } : {
                                    val: {
                                        type: n.plural,
                                        value: t,
                                        options: Z(g.val),
                                        offset: O,
                                        pluralType: "plural" === A ? "cardinal" : "ordinal",
                                        location: L
                                    },
                                    err: null
                                };
                            default:
                                return this.error(a.INVALID_ARGUMENT_TYPE, F(N, u))
                        }
                    }, l.prototype.tryParseArgumentClose = function(l) {
                        return this.isEOF() || 125 !== this.char() ? this.error(a.EXPECT_ARGUMENT_CLOSING_BRACE, F(l, this.clonePosition())) : (this.bump(), {
                            val: !0,
                            err: null
                        })
                    }, l.prototype.parseSimpleArgStyleIfPossible = function() {
                        for (var l = 0, e = this.clonePosition(); !this.isEOF();) {
                            switch (this.char()) {
                                case 39:
                                    this.bump();
                                    var t = this.clonePosition();
                                    if (!this.bumpUntil("'")) return this.error(a.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, F(t, this.clonePosition()));
                                    this.bump();
                                    break;
                                case 123:
                                    l += 1, this.bump();
                                    break;
                                case 125:
                                    if (!(l > 0)) return {
                                        val: this.message.slice(e.offset, this.offset()),
                                        err: null
                                    };
                                    l -= 1;
                                    break;
                                default:
                                    this.bump()
                            }
                        }
                        return {
                            val: this.message.slice(e.offset, this.offset()),
                            err: null
                        }
                    }, l.prototype.parseNumberSkeletonFromString = function(l, e) {
                        var t = [];
                        try {
                            t = function(l) {
                                if (0 === l.length) throw new Error("Number skeleton cannot be empty");
                                for (var e = [], t = 0, a = l.split(m).filter((function(l) {
                                        return l.length > 0
                                    })); t < a.length; t++) {
                                    var n = a[t].split("/");
                                    if (0 === n.length) throw new Error("Invalid number skeleton");
                                    for (var r = n[0], i = n.slice(1), o = 0, E = i; o < E.length; o++)
                                        if (0 === E[o].length) throw new Error("Invalid number skeleton");
                                    e.push({
                                        stem: r,
                                        options: i
                                    })
                                }
                                return e
                            }(l)
                        } catch (n) {
                            return this.error(a.INVALID_NUMBER_SKELETON, e)
                        }
                        return {
                            val: {
                                type: r.number,
                                tokens: t,
                                location: e,
                                parsedOptions: this.shouldParseSkeletons ? v(t) : {}
                            },
                            err: null
                        }
                    }, l.prototype.tryParsePluralOrSelectOptions = function(l, e, t, n) {
                        for (var r, i = !1, o = [], E = new Set, N = n.value, A = n.location;;) {
                            if (0 === N.length) {
                                var u = this.clonePosition();
                                if ("select" === e || !this.bumpIf("=")) break;
                                var _ = this.tryParseDecimalInteger(a.EXPECT_PLURAL_ARGUMENT_SELECTOR, a.INVALID_PLURAL_ARGUMENT_SELECTOR);
                                if (_.err) return _;
                                A = F(u, this.clonePosition()), N = this.message.slice(u.offset, this.offset())
                            }
                            if (E.has(N)) return this.error("select" === e ? a.DUPLICATE_SELECT_ARGUMENT_SELECTOR : a.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, A);
                            "other" === N && (i = !0), this.bumpSpace();
                            var s = this.clonePosition();
                            if (!this.bumpIf("{")) return this.error("select" === e ? a.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : a.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, F(this.clonePosition(), this.clonePosition()));
                            var c = this.parseMessage(l + 1, e, t);
                            if (c.err) return c;
                            var M = this.tryParseArgumentClose(s);
                            if (M.err) return M;
                            o.push([N, {
                                value: c.val,
                                location: F(s, this.clonePosition())
                            }]), E.add(N), this.bumpSpace(), N = (r = this.parseIdentifierIfPossible()).value, A = r.location
                        }
                        return 0 === o.length ? this.error("select" === e ? a.EXPECT_SELECT_ARGUMENT_SELECTOR : a.EXPECT_PLURAL_ARGUMENT_SELECTOR, F(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !i ? this.error(a.MISSING_OTHER_CLAUSE, F(this.clonePosition(), this.clonePosition())) : {
                            val: o,
                            err: null
                        }
                    }, l.prototype.tryParseDecimalInteger = function(l, e) {
                        var t = 1,
                            a = this.clonePosition();
                        this.bumpIf("+") || this.bumpIf("-") && (t = -1);
                        for (var n = !1, r = 0; !this.isEOF();) {
                            var i = this.char();
                            if (!(i >= 48 && i <= 57)) break;
                            n = !0, r = 10 * r + (i - 48), this.bump()
                        }
                        var o = F(a, this.clonePosition());
                        return n ? D(r *= t) ? {
                            val: r,
                            err: null
                        } : this.error(e, o) : this.error(l, o)
                    }, l.prototype.offset = function() {
                        return this.position.offset
                    }, l.prototype.isEOF = function() {
                        return this.offset() === this.message.length
                    }, l.prototype.clonePosition = function() {
                        return {
                            offset: this.position.offset,
                            line: this.position.line,
                            column: this.position.column
                        }
                    }, l.prototype.char = function() {
                        var l = this.position.offset;
                        if (l >= this.message.length) throw Error("out of bound");
                        var e = j(this.message, l);
                        if (void 0 === e) throw Error("Offset ".concat(l, " is at invalid UTF-16 code unit boundary"));
                        return e
                    }, l.prototype.error = function(l, e) {
                        return {
                            val: null,
                            err: {
                                kind: l,
                                message: this.message,
                                location: e
                            }
                        }
                    }, l.prototype.bump = function() {
                        if (!this.isEOF()) {
                            var l = this.char();
                            10 === l ? (this.position.line += 1, this.position.column = 1, this.position.offset += 1) : (this.position.column += 1, this.position.offset += l < 65536 ? 1 : 2)
                        }
                    }, l.prototype.bumpIf = function(l) {
                        if (V(this.message, l, this.offset())) {
                            for (var e = 0; e < l.length; e++) this.bump();
                            return !0
                        }
                        return !1
                    }, l.prototype.bumpUntil = function(l) {
                        var e = this.offset(),
                            t = this.message.indexOf(l, e);
                        return t >= 0 ? (this.bumpTo(t), !0) : (this.bumpTo(this.message.length), !1)
                    }, l.prototype.bumpTo = function(l) {
                        if (this.offset() > l) throw Error("targetOffset ".concat(l, " must be greater than or equal to the current offset ").concat(this.offset()));
                        for (l = Math.min(l, this.message.length);;) {
                            var e = this.offset();
                            if (e === l) break;
                            if (e > l) throw Error("targetOffset ".concat(l, " is at invalid UTF-16 code unit boundary"));
                            if (this.bump(), this.isEOF()) break
                        }
                    }, l.prototype.bumpSpace = function() {
                        for (; !this.isEOF() && ll(this.char());) this.bump()
                    }, l.prototype.peek = function() {
                        if (this.isEOF()) return null;
                        var l = this.char(),
                            e = this.offset(),
                            t = this.message.charCodeAt(e + (l >= 65536 ? 2 : 1));
                        return null !== t && void 0 !== t ? t : null
                    }, l
                }();

                function X(l) {
                    return l >= 97 && l <= 122 || l >= 65 && l <= 90
                }

                function ll(l) {
                    return l >= 9 && l <= 13 || 32 === l || 133 === l || l >= 8206 && l <= 8207 || 8232 === l || 8233 === l
                }

                function el(l) {
                    return l >= 33 && l <= 35 || 36 === l || l >= 37 && l <= 39 || 40 === l || 41 === l || 42 === l || 43 === l || 44 === l || 45 === l || l >= 46 && l <= 47 || l >= 58 && l <= 59 || l >= 60 && l <= 62 || l >= 63 && l <= 64 || 91 === l || 92 === l || 93 === l || 94 === l || 96 === l || 123 === l || 124 === l || 125 === l || 126 === l || 161 === l || l >= 162 && l <= 165 || 166 === l || 167 === l || 169 === l || 171 === l || 172 === l || 174 === l || 176 === l || 177 === l || 182 === l || 187 === l || 191 === l || 215 === l || 247 === l || l >= 8208 && l <= 8213 || l >= 8214 && l <= 8215 || 8216 === l || 8217 === l || 8218 === l || l >= 8219 && l <= 8220 || 8221 === l || 8222 === l || 8223 === l || l >= 8224 && l <= 8231 || l >= 8240 && l <= 8248 || 8249 === l || 8250 === l || l >= 8251 && l <= 8254 || l >= 8257 && l <= 8259 || 8260 === l || 8261 === l || 8262 === l || l >= 8263 && l <= 8273 || 8274 === l || 8275 === l || l >= 8277 && l <= 8286 || l >= 8592 && l <= 8596 || l >= 8597 && l <= 8601 || l >= 8602 && l <= 8603 || l >= 8604 && l <= 8607 || 8608 === l || l >= 8609 && l <= 8610 || 8611 === l || l >= 8612 && l <= 8613 || 8614 === l || l >= 8615 && l <= 8621 || 8622 === l || l >= 8623 && l <= 8653 || l >= 8654 && l <= 8655 || l >= 8656 && l <= 8657 || 8658 === l || 8659 === l || 8660 === l || l >= 8661 && l <= 8691 || l >= 8692 && l <= 8959 || l >= 8960 && l <= 8967 || 8968 === l || 8969 === l || 8970 === l || 8971 === l || l >= 8972 && l <= 8991 || l >= 8992 && l <= 8993 || l >= 8994 && l <= 9e3 || 9001 === l || 9002 === l || l >= 9003 && l <= 9083 || 9084 === l || l >= 9085 && l <= 9114 || l >= 9115 && l <= 9139 || l >= 9140 && l <= 9179 || l >= 9180 && l <= 9185 || l >= 9186 && l <= 9254 || l >= 9255 && l <= 9279 || l >= 9280 && l <= 9290 || l >= 9291 && l <= 9311 || l >= 9472 && l <= 9654 || 9655 === l || l >= 9656 && l <= 9664 || 9665 === l || l >= 9666 && l <= 9719 || l >= 9720 && l <= 9727 || l >= 9728 && l <= 9838 || 9839 === l || l >= 9840 && l <= 10087 || 10088 === l || 10089 === l || 10090 === l || 10091 === l || 10092 === l || 10093 === l || 10094 === l || 10095 === l || 10096 === l || 10097 === l || 10098 === l || 10099 === l || 10100 === l || 10101 === l || l >= 10132 && l <= 10175 || l >= 10176 && l <= 10180 || 10181 === l || 10182 === l || l >= 10183 && l <= 10213 || 10214 === l || 10215 === l || 10216 === l || 10217 === l || 10218 === l || 10219 === l || 10220 === l || 10221 === l || 10222 === l || 10223 === l || l >= 10224 && l <= 10239 || l >= 10240 && l <= 10495 || l >= 10496 && l <= 10626 || 10627 === l || 10628 === l || 10629 === l || 10630 === l || 10631 === l || 10632 === l || 10633 === l || 10634 === l || 10635 === l || 10636 === l || 10637 === l || 10638 === l || 10639 === l || 10640 === l || 10641 === l || 10642 === l || 10643 === l || 10644 === l || 10645 === l || 10646 === l || 10647 === l || 10648 === l || l >= 10649 && l <= 10711 || 10712 === l || 10713 === l || 10714 === l || 10715 === l || l >= 10716 && l <= 10747 || 10748 === l || 10749 === l || l >= 10750 && l <= 11007 || l >= 11008 && l <= 11055 || l >= 11056 && l <= 11076 || l >= 11077 && l <= 11078 || l >= 11079 && l <= 11084 || l >= 11085 && l <= 11123 || l >= 11124 && l <= 11125 || l >= 11126 && l <= 11157 || 11158 === l || l >= 11159 && l <= 11263 || l >= 11776 && l <= 11777 || 11778 === l || 11779 === l || 11780 === l || 11781 === l || l >= 11782 && l <= 11784 || 11785 === l || 11786 === l || 11787 === l || 11788 === l || 11789 === l || l >= 11790 && l <= 11798 || 11799 === l || l >= 11800 && l <= 11801 || 11802 === l || 11803 === l || 11804 === l || 11805 === l || l >= 11806 && l <= 11807 || 11808 === l || 11809 === l || 11810 === l || 11811 === l || 11812 === l || 11813 === l || 11814 === l || 11815 === l || 11816 === l || 11817 === l || l >= 11818 && l <= 11822 || 11823 === l || l >= 11824 && l <= 11833 || l >= 11834 && l <= 11835 || l >= 11836 && l <= 11839 || 11840 === l || 11841 === l || 11842 === l || l >= 11843 && l <= 11855 || l >= 11856 && l <= 11857 || 11858 === l || l >= 11859 && l <= 11903 || l >= 12289 && l <= 12291 || 12296 === l || 12297 === l || 12298 === l || 12299 === l || 12300 === l || 12301 === l || 12302 === l || 12303 === l || 12304 === l || 12305 === l || l >= 12306 && l <= 12307 || 12308 === l || 12309 === l || 12310 === l || 12311 === l || 12312 === l || 12313 === l || 12314 === l || 12315 === l || 12316 === l || 12317 === l || l >= 12318 && l <= 12319 || 12320 === l || 12336 === l || 64830 === l || 64831 === l || l >= 65093 && l <= 65094
                }

                function tl(l) {
                    l.forEach((function(l) {
                        if (delete l.location, _(l) || s(l))
                            for (var e in l.options) delete l.options[e].location, tl(l.options[e].value);
                        else N(l) && f(l.style) || (A(l) || u(l)) && d(l.style) ? delete l.style.location : M(l) && tl(l.children)
                    }))
                }

                function al(l, e) {
                    void 0 === e && (e = {}), e = (0, i.pi)({
                        shouldParseSkeletons: !0,
                        requiresOtherClause: !0
                    }, e);
                    var t = new Q(l, e).parse();
                    if (t.err) {
                        var n = SyntaxError(a[t.err.kind]);
                        throw n.location = t.err.location, n.originalMessage = t.err.message, n
                    }
                    return (null === e || void 0 === e ? void 0 : e.captureLocation) || tl(t.val), t.val
                }
            },
            1736: function(l, e, t) {
                "use strict";
                t.d(e, {
                    $6: function() {
                        return u
                    },
                    OV: function() {
                        return o
                    },
                    Qe: function() {
                        return N
                    },
                    Rw: function() {
                        return r
                    },
                    X9: function() {
                        return A
                    },
                    bc: function() {
                        return a
                    },
                    gb: function() {
                        return E
                    },
                    wI: function() {
                        return i
                    }
                });
                var a, n = t(9388);
                ! function(l) {
                    l.FORMAT_ERROR = "FORMAT_ERROR", l.UNSUPPORTED_FORMATTER = "UNSUPPORTED_FORMATTER", l.INVALID_CONFIG = "INVALID_CONFIG", l.MISSING_DATA = "MISSING_DATA", l.MISSING_TRANSLATION = "MISSING_TRANSLATION"
                }(a || (a = {}));
                var r = function(l) {
                        function e(t, a, n) {
                            var r = this,
                                i = n ? n instanceof Error ? n : new Error(String(n)) : void 0;
                            return (r = l.call(this, "[@formatjs/intl Error ".concat(t, "] ").concat(a, " \n").concat(i ? "\n".concat(i.message, "\n").concat(i.stack) : "")) || this).code = t, "function" === typeof Error.captureStackTrace && Error.captureStackTrace(r, e), r
                        }
                        return (0, n.ZT)(e, l), e
                    }(Error),
                    i = function(l) {
                        function e(e, t) {
                            return l.call(this, a.UNSUPPORTED_FORMATTER, e, t) || this
                        }
                        return (0, n.ZT)(e, l), e
                    }(r),
                    o = function(l) {
                        function e(e, t) {
                            return l.call(this, a.INVALID_CONFIG, e, t) || this
                        }
                        return (0, n.ZT)(e, l), e
                    }(r),
                    E = function(l) {
                        function e(e, t) {
                            return l.call(this, a.MISSING_DATA, e, t) || this
                        }
                        return (0, n.ZT)(e, l), e
                    }(r),
                    N = function(l) {
                        function e(e, t, n) {
                            return l.call(this, a.FORMAT_ERROR, "".concat(e, " \nLocale: ").concat(t, "\n"), n) || this
                        }
                        return (0, n.ZT)(e, l), e
                    }(r),
                    A = function(l) {
                        function e(e, t, a, n) {
                            var r = l.call(this, "".concat(e, " \nMessageID: ").concat(null === a || void 0 === a ? void 0 : a.id, "\nDefault Message: ").concat(null === a || void 0 === a ? void 0 : a.defaultMessage, "\nDescription: ").concat(null === a || void 0 === a ? void 0 : a.description, " \n"), t, n) || this;
                            return r.descriptor = a, r
                        }
                        return (0, n.ZT)(e, l), e
                    }(N),
                    u = function(l) {
                        function e(e, t) {
                            var n = l.call(this, a.MISSING_TRANSLATION, 'Missing message: "'.concat(e.id, '" for locale "').concat(t, '", using ').concat(e.defaultMessage ? "default message" : "id", " as fallback.")) || this;
                            return n.descriptor = e, n
                        }
                        return (0, n.ZT)(e, l), e
                    }(r)
            },
            4736: function(l, e, t) {
                "use strict";
                t.d(e, {
                    L6: function() {
                        return o
                    },
                    Sn: function() {
                        return N
                    },
                    TB: function() {
                        return _
                    },
                    Z0: function() {
                        return E
                    },
                    ax: function() {
                        return u
                    }
                });
                var a = t(9388),
                    n = t(1442),
                    r = t(3531),
                    i = t(1736);

                function o(l, e, t) {
                    return void 0 === t && (t = {}), e.reduce((function(e, a) {
                        return a in l ? e[a] = l[a] : a in t && (e[a] = t[a]), e
                    }), {})
                }
                var E = {
                    formats: {},
                    messages: {},
                    timeZone: void 0,
                    defaultLocale: "en",
                    defaultFormats: {},
                    fallbackOnEmptyString: !0,
                    onError: function(l) {
                        0
                    }
                };

                function N() {
                    return {
                        dateTime: {},
                        number: {},
                        message: {},
                        relativeTime: {},
                        pluralRules: {},
                        list: {},
                        displayNames: {}
                    }
                }

                function A(l) {
                    return {
                        create: function() {
                            return {
                                get: function(e) {
                                    return l[e]
                                },
                                set: function(e, t) {
                                    l[e] = t
                                }
                            }
                        }
                    }
                }

                function u(l) {
                    void 0 === l && (l = {
                        dateTime: {},
                        number: {},
                        message: {},
                        relativeTime: {},
                        pluralRules: {},
                        list: {},
                        displayNames: {}
                    });
                    var e = Intl.RelativeTimeFormat,
                        t = Intl.ListFormat,
                        i = Intl.DisplayNames,
                        o = (0, r.Z)((function() {
                            for (var l, e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                            return new((l = Intl.DateTimeFormat).bind.apply(l, (0, a.ev)([void 0], e, !1)))
                        }), {
                            cache: A(l.dateTime),
                            strategy: r.A.variadic
                        }),
                        E = (0, r.Z)((function() {
                            for (var l, e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                            return new((l = Intl.NumberFormat).bind.apply(l, (0, a.ev)([void 0], e, !1)))
                        }), {
                            cache: A(l.number),
                            strategy: r.A.variadic
                        }),
                        N = (0, r.Z)((function() {
                            for (var l, e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                            return new((l = Intl.PluralRules).bind.apply(l, (0, a.ev)([void 0], e, !1)))
                        }), {
                            cache: A(l.pluralRules),
                            strategy: r.A.variadic
                        });
                    return {
                        getDateTimeFormat: o,
                        getNumberFormat: E,
                        getMessageFormat: (0, r.Z)((function(l, e, t, r) {
                            return new n.C(l, e, t, (0, a.pi)({
                                formatters: {
                                    getNumberFormat: E,
                                    getDateTimeFormat: o,
                                    getPluralRules: N
                                }
                            }, r || {}))
                        }), {
                            cache: A(l.message),
                            strategy: r.A.variadic
                        }),
                        getRelativeTimeFormat: (0, r.Z)((function() {
                            for (var l = [], t = 0; t < arguments.length; t++) l[t] = arguments[t];
                            return new(e.bind.apply(e, (0, a.ev)([void 0], l, !1)))
                        }), {
                            cache: A(l.relativeTime),
                            strategy: r.A.variadic
                        }),
                        getPluralRules: N,
                        getListFormat: (0, r.Z)((function() {
                            for (var l = [], e = 0; e < arguments.length; e++) l[e] = arguments[e];
                            return new(t.bind.apply(t, (0, a.ev)([void 0], l, !1)))
                        }), {
                            cache: A(l.list),
                            strategy: r.A.variadic
                        }),
                        getDisplayNames: (0, r.Z)((function() {
                            for (var l = [], e = 0; e < arguments.length; e++) l[e] = arguments[e];
                            return new(i.bind.apply(i, (0, a.ev)([void 0], l, !1)))
                        }), {
                            cache: A(l.displayNames),
                            strategy: r.A.variadic
                        })
                    }
                }

                function _(l, e, t, a) {
                    var n, r = l && l[e];
                    if (r && (n = r[t]), n) return n;
                    a(new i.wI("No ".concat(e, " format named: ").concat(t)))
                }
            },
            2110: function(l, e, t) {
                "use strict";
                var a = t(8309),
                    n = {
                        childContextTypes: !0,
                        contextType: !0,
                        contextTypes: !0,
                        defaultProps: !0,
                        displayName: !0,
                        getDefaultProps: !0,
                        getDerivedStateFromError: !0,
                        getDerivedStateFromProps: !0,
                        mixins: !0,
                        propTypes: !0,
                        type: !0
                    },
                    r = {
                        name: !0,
                        length: !0,
                        prototype: !0,
                        caller: !0,
                        callee: !0,
                        arguments: !0,
                        arity: !0
                    },
                    i = {
                        $$typeof: !0,
                        compare: !0,
                        defaultProps: !0,
                        displayName: !0,
                        propTypes: !0,
                        type: !0
                    },
                    o = {};

                function E(l) {
                    return a.isMemo(l) ? i : o[l.$$typeof] || n
                }
                o[a.ForwardRef] = {
                    $$typeof: !0,
                    render: !0,
                    defaultProps: !0,
                    displayName: !0,
                    propTypes: !0
                }, o[a.Memo] = i;
                var N = Object.defineProperty,
                    A = Object.getOwnPropertyNames,
                    u = Object.getOwnPropertySymbols,
                    _ = Object.getOwnPropertyDescriptor,
                    s = Object.getPrototypeOf,
                    c = Object.prototype;
                l.exports = function l(e, t, a) {
                    if ("string" !== typeof t) {
                        if (c) {
                            var n = s(t);
                            n && n !== c && l(e, n, a)
                        }
                        var i = A(t);
                        u && (i = i.concat(u(t)));
                        for (var o = E(e), M = E(t), f = 0; f < i.length; ++f) {
                            var d = i[f];
                            if (!r[d] && (!a || !a[d]) && (!M || !M[d]) && (!o || !o[d])) {
                                var p = _(t, d);
                                try {
                                    N(e, d, p)
                                } catch (O) {}
                            }
                        }
                    }
                    return e
                }
            },
            746: function(l, e) {
                "use strict";
                var t = "function" === typeof Symbol && Symbol.for,
                    a = t ? Symbol.for("react.element") : 60103,
                    n = t ? Symbol.for("react.portal") : 60106,
                    r = t ? Symbol.for("react.fragment") : 60107,
                    i = t ? Symbol.for("react.strict_mode") : 60108,
                    o = t ? Symbol.for("react.profiler") : 60114,
                    E = t ? Symbol.for("react.provider") : 60109,
                    N = t ? Symbol.for("react.context") : 60110,
                    A = t ? Symbol.for("react.async_mode") : 60111,
                    u = t ? Symbol.for("react.concurrent_mode") : 60111,
                    _ = t ? Symbol.for("react.forward_ref") : 60112,
                    s = t ? Symbol.for("react.suspense") : 60113,
                    c = t ? Symbol.for("react.suspense_list") : 60120,
                    M = t ? Symbol.for("react.memo") : 60115,
                    f = t ? Symbol.for("react.lazy") : 60116,
                    d = t ? Symbol.for("react.block") : 60121,
                    p = t ? Symbol.for("react.fundamental") : 60117,
                    O = t ? Symbol.for("react.responder") : 60118,
                    R = t ? Symbol.for("react.scope") : 60119;

                function m(l) {
                    if ("object" === typeof l && null !== l) {
                        var e = l.$$typeof;
                        switch (e) {
                            case a:
                                switch (l = l.type) {
                                    case A:
                                    case u:
                                    case r:
                                    case o:
                                    case i:
                                    case s:
                                        return l;
                                    default:
                                        switch (l = l && l.$$typeof) {
                                            case N:
                                            case _:
                                            case f:
                                            case M:
                                            case E:
                                                return l;
                                            default:
                                                return e
                                        }
                                }
                            case n:
                                return e
                        }
                    }
                }

                function h(l) {
                    return m(l) === u
                }
                e.AsyncMode = A, e.ConcurrentMode = u, e.ContextConsumer = N, e.ContextProvider = E, e.Element = a, e.ForwardRef = _, e.Fragment = r, e.Lazy = f, e.Memo = M, e.Portal = n, e.Profiler = o, e.StrictMode = i, e.Suspense = s, e.isAsyncMode = function(l) {
                    return h(l) || m(l) === A
                }, e.isConcurrentMode = h, e.isContextConsumer = function(l) {
                    return m(l) === N
                }, e.isContextProvider = function(l) {
                    return m(l) === E
                }, e.isElement = function(l) {
                    return "object" === typeof l && null !== l && l.$$typeof === a
                }, e.isForwardRef = function(l) {
                    return m(l) === _
                }, e.isFragment = function(l) {
                    return m(l) === r
                }, e.isLazy = function(l) {
                    return m(l) === f
                }, e.isMemo = function(l) {
                    return m(l) === M
                }, e.isPortal = function(l) {
                    return m(l) === n
                }, e.isProfiler = function(l) {
                    return m(l) === o
                }, e.isStrictMode = function(l) {
                    return m(l) === i
                }, e.isSuspense = function(l) {
                    return m(l) === s
                }, e.isValidElementType = function(l) {
                    return "string" === typeof l || "function" === typeof l || l === r || l === u || l === o || l === i || l === s || l === c || "object" === typeof l && null !== l && (l.$$typeof === f || l.$$typeof === M || l.$$typeof === E || l.$$typeof === N || l.$$typeof === _ || l.$$typeof === p || l.$$typeof === O || l.$$typeof === R || l.$$typeof === d)
                }, e.typeOf = m
            },
            8309: function(l, e, t) {
                "use strict";
                l.exports = t(746)
            },
            1442: function(l, e, t) {
                "use strict";
                t.d(e, {
                    C: function() {
                        return N
                    }
                });
                var a = t(9388),
                    n = t(1252),
                    r = t(3531),
                    i = t(9774);

                function o(l, e) {
                    return e ? Object.keys(l).reduce((function(t, n) {
                        var r, i;
                        return t[n] = (r = l[n], (i = e[n]) ? (0, a.pi)((0, a.pi)((0, a.pi)({}, r || {}), i || {}), Object.keys(r).reduce((function(l, e) {
                            return l[e] = (0, a.pi)((0, a.pi)({}, r[e]), i[e] || {}), l
                        }), {})) : r), t
                    }), (0, a.pi)({}, l)) : l
                }

                function E(l) {
                    return {
                        create: function() {
                            return {
                                get: function(e) {
                                    return l[e]
                                },
                                set: function(e, t) {
                                    l[e] = t
                                }
                            }
                        }
                    }
                }
                var N = function() {
                    function l(e, t, n, N) {
                        var A, u = this;
                        if (void 0 === t && (t = l.defaultLocale), this.formatterCache = {
                                number: {},
                                dateTime: {},
                                pluralRules: {}
                            }, this.format = function(l) {
                                var e = u.formatToParts(l);
                                if (1 === e.length) return e[0].value;
                                var t = e.reduce((function(l, e) {
                                    return l.length && e.type === i.du.literal && "string" === typeof l[l.length - 1] ? l[l.length - 1] += e.value : l.push(e.value), l
                                }), []);
                                return t.length <= 1 ? t[0] || "" : t
                            }, this.formatToParts = function(l) {
                                return (0, i.FK)(u.ast, u.locales, u.formatters, u.formats, l, void 0, u.message)
                            }, this.resolvedOptions = function() {
                                return {
                                    locale: Intl.NumberFormat.supportedLocalesOf(u.locales)[0]
                                }
                            }, this.getAst = function() {
                                return u.ast
                            }, "string" === typeof e) {
                            if (this.message = e, !l.__parse) throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");
                            this.ast = l.__parse(e, {
                                ignoreTag: null === N || void 0 === N ? void 0 : N.ignoreTag
                            })
                        } else this.ast = e;
                        if (!Array.isArray(this.ast)) throw new TypeError("A message must be provided as a String or AST.");
                        this.formats = o(l.formats, n), this.locales = t, this.formatters = N && N.formatters || (void 0 === (A = this.formatterCache) && (A = {
                            number: {},
                            dateTime: {},
                            pluralRules: {}
                        }), {
                            getNumberFormat: (0, r.Z)((function() {
                                for (var l, e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                                return new((l = Intl.NumberFormat).bind.apply(l, (0, a.ev)([void 0], e, !1)))
                            }), {
                                cache: E(A.number),
                                strategy: r.A.variadic
                            }),
                            getDateTimeFormat: (0, r.Z)((function() {
                                for (var l, e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                                return new((l = Intl.DateTimeFormat).bind.apply(l, (0, a.ev)([void 0], e, !1)))
                            }), {
                                cache: E(A.dateTime),
                                strategy: r.A.variadic
                            }),
                            getPluralRules: (0, r.Z)((function() {
                                for (var l, e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                                return new((l = Intl.PluralRules).bind.apply(l, (0, a.ev)([void 0], e, !1)))
                            }), {
                                cache: E(A.pluralRules),
                                strategy: r.A.variadic
                            })
                        })
                    }
                    return Object.defineProperty(l, "defaultLocale", {
                        get: function() {
                            return l.memoizedDefaultLocale || (l.memoizedDefaultLocale = (new Intl.NumberFormat).resolvedOptions().locale), l.memoizedDefaultLocale
                        },
                        enumerable: !1,
                        configurable: !0
                    }), l.memoizedDefaultLocale = null, l.__parse = n.Qc, l.formats = {
                        number: {
                            integer: {
                                maximumFractionDigits: 0
                            },
                            currency: {
                                style: "currency"
                            },
                            percent: {
                                style: "percent"
                            }
                        },
                        date: {
                            short: {
                                month: "numeric",
                                day: "numeric",
                                year: "2-digit"
                            },
                            medium: {
                                month: "short",
                                day: "numeric",
                                year: "numeric"
                            },
                            long: {
                                month: "long",
                                day: "numeric",
                                year: "numeric"
                            },
                            full: {
                                weekday: "long",
                                month: "long",
                                day: "numeric",
                                year: "numeric"
                            }
                        },
                        time: {
                            short: {
                                hour: "numeric",
                                minute: "numeric"
                            },
                            medium: {
                                hour: "numeric",
                                minute: "numeric",
                                second: "numeric"
                            },
                            long: {
                                hour: "numeric",
                                minute: "numeric",
                                second: "numeric",
                                timeZoneName: "short"
                            },
                            full: {
                                hour: "numeric",
                                minute: "numeric",
                                second: "numeric",
                                timeZoneName: "short"
                            }
                        }
                    }, l
                }()
            },
            9369: function(l, e, t) {
                "use strict";
                t.d(e, {
                    C8: function() {
                        return i
                    },
                    HR: function() {
                        return E
                    },
                    YR: function() {
                        return o
                    },
                    jK: function() {
                        return a
                    },
                    u_: function() {
                        return r
                    }
                });
                var a, n = t(9388);
                ! function(l) {
                    l.MISSING_VALUE = "MISSING_VALUE", l.INVALID_VALUE = "INVALID_VALUE", l.MISSING_INTL_API = "MISSING_INTL_API"
                }(a || (a = {}));
                var r = function(l) {
                        function e(e, t, a) {
                            var n = l.call(this, e) || this;
                            return n.code = t, n.originalMessage = a, n
                        }
                        return (0, n.ZT)(e, l), e.prototype.toString = function() {
                            return "[formatjs Error: ".concat(this.code, "] ").concat(this.message)
                        }, e
                    }(Error),
                    i = function(l) {
                        function e(e, t, n, r) {
                            return l.call(this, 'Invalid values for "'.concat(e, '": "').concat(t, '". Options are "').concat(Object.keys(n).join('", "'), '"'), a.INVALID_VALUE, r) || this
                        }
                        return (0, n.ZT)(e, l), e
                    }(r),
                    o = function(l) {
                        function e(e, t, n) {
                            return l.call(this, 'Value for "'.concat(e, '" must be of type ').concat(t), a.INVALID_VALUE, n) || this
                        }
                        return (0, n.ZT)(e, l), e
                    }(r),
                    E = function(l) {
                        function e(e, t) {
                            return l.call(this, 'The intl string context variable "'.concat(e, '" was not provided to the string "').concat(t, '"'), a.MISSING_VALUE, t) || this
                        }
                        return (0, n.ZT)(e, l), e
                    }(r)
            },
            9774: function(l, e, t) {
                "use strict";
                t.d(e, {
                    FK: function() {
                        return o
                    },
                    Gt: function() {
                        return i
                    },
                    du: function() {
                        return a
                    }
                });
                var a, n = t(1252),
                    r = t(9369);

                function i(l) {
                    return "function" === typeof l
                }

                function o(l, e, t, E, N, A, u) {
                    if (1 === l.length && (0, n.O4)(l[0])) return [{
                        type: a.literal,
                        value: l[0].value
                    }];
                    for (var _ = [], s = 0, c = l; s < c.length; s++) {
                        var M = c[s];
                        if ((0, n.O4)(M)) _.push({
                            type: a.literal,
                            value: M.value
                        });
                        else if ((0, n.yx)(M)) "number" === typeof A && _.push({
                            type: a.literal,
                            value: t.getNumberFormat(e).format(A)
                        });
                        else {
                            var f = M.value;
                            if (!N || !(f in N)) throw new r.HR(f, u);
                            var d = N[f];
                            if ((0, n.VG)(M)) d && "string" !== typeof d && "number" !== typeof d || (d = "string" === typeof d || "number" === typeof d ? String(d) : ""), _.push({
                                type: "string" === typeof d ? a.literal : a.object,
                                value: d
                            });
                            else if ((0, n.rp)(M)) {
                                var p = "string" === typeof M.style ? E.date[M.style] : (0, n.Ii)(M.style) ? M.style.parsedOptions : void 0;
                                _.push({
                                    type: a.literal,
                                    value: t.getDateTimeFormat(e, p).format(d)
                                })
                            } else if ((0, n.pe)(M)) {
                                p = "string" === typeof M.style ? E.time[M.style] : (0, n.Ii)(M.style) ? M.style.parsedOptions : void 0;
                                _.push({
                                    type: a.literal,
                                    value: t.getDateTimeFormat(e, p).format(d)
                                })
                            } else if ((0, n.uf)(M)) {
                                (p = "string" === typeof M.style ? E.number[M.style] : (0, n.Wh)(M.style) ? M.style.parsedOptions : void 0) && p.scale && (d *= p.scale || 1), _.push({
                                    type: a.literal,
                                    value: t.getNumberFormat(e, p).format(d)
                                })
                            } else {
                                if ((0, n.HI)(M)) {
                                    var O = M.children,
                                        R = M.value,
                                        m = N[R];
                                    if (!i(m)) throw new r.YR(R, "function", u);
                                    var h = m(o(O, e, t, E, N, A).map((function(l) {
                                        return l.value
                                    })));
                                    Array.isArray(h) || (h = [h]), _.push.apply(_, h.map((function(l) {
                                        return {
                                            type: "string" === typeof l ? a.literal : a.object,
                                            value: l
                                        }
                                    })))
                                }
                                if ((0, n.Wi)(M)) {
                                    if (!(g = M.options[d] || M.options.other)) throw new r.C8(M.value, d, Object.keys(M.options), u);
                                    _.push.apply(_, o(g.value, e, t, E, N))
                                } else if ((0, n.Jo)(M)) {
                                    var g;
                                    if (!(g = M.options["=".concat(d)])) {
                                        if (!Intl.PluralRules) throw new r.u_('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n', r.jK.MISSING_INTL_API, u);
                                        var L = t.getPluralRules(e, {
                                            type: M.pluralType
                                        }).select(d - (M.offset || 0));
                                        g = M.options[L] || M.options.other
                                    }
                                    if (!g) throw new r.C8(M.value, d, Object.keys(M.options), u);
                                    _.push.apply(_, o(g.value, e, t, E, N, d - (M.offset || 0)))
                                } else;
                            }
                        }
                    }
                    return function(l) {
                        return l.length < 2 ? l : l.reduce((function(l, e) {
                            var t = l[l.length - 1];
                            return t && t.type === a.literal && e.type === a.literal ? t.value += e.value : l.push(e), l
                        }), [])
                    }(_)
                }! function(l) {
                    l[l.literal = 0] = "literal", l[l.object = 1] = "object"
                }(a || (a = {}))
            },
            1725: function(l) {
                "use strict";
                var e = Object.getOwnPropertySymbols,
                    t = Object.prototype.hasOwnProperty,
                    a = Object.prototype.propertyIsEnumerable;

                function n(l) {
                    if (null === l || void 0 === l) throw new TypeError("Object.assign cannot be called with null or undefined");
                    return Object(l)
                }
                l.exports = function() {
                    try {
                        if (!Object.assign) return !1;
                        var l = new String("abc");
                        if (l[5] = "de", "5" === Object.getOwnPropertyNames(l)[0]) return !1;
                        for (var e = {}, t = 0; t < 10; t++) e["_" + String.fromCharCode(t)] = t;
                        if ("0123456789" !== Object.getOwnPropertyNames(e).map((function(l) {
                                return e[l]
                            })).join("")) return !1;
                        var a = {};
                        return "abcdefghijklmnopqrst".split("").forEach((function(l) {
                            a[l] = l
                        })), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, a)).join("")
                    } catch (n) {
                        return !1
                    }
                }() ? Object.assign : function(l, r) {
                    for (var i, o, E = n(l), N = 1; N < arguments.length; N++) {
                        for (var A in i = Object(arguments[N])) t.call(i, A) && (E[A] = i[A]);
                        if (e) {
                            o = e(i);
                            for (var u = 0; u < o.length; u++) a.call(i, o[u]) && (E[o[u]] = i[o[u]])
                        }
                    }
                    return E
                }
            },
            173: function(l, e, t) {
                "use strict";
                var a, n = t(2791),
                    r = (a = n) && "object" === typeof a && "default" in a ? a.default : a,
                    i = t(1338),
                    o = new i,
                    E = o.getBrowser(),
                    N = o.getCPU(),
                    A = o.getDevice(),
                    u = o.getEngine(),
                    _ = o.getOS(),
                    s = o.getUA(),
                    c = function(l) {
                        return o.setUA(l)
                    },
                    M = function(l) {
                        if (l) {
                            var e = new i(l);
                            return {
                                UA: e,
                                browser: e.getBrowser(),
                                cpu: e.getCPU(),
                                device: e.getDevice(),
                                engine: e.getEngine(),
                                os: e.getOS(),
                                ua: e.getUA(),
                                setUserAgent: function(l) {
                                    return e.setUA(l)
                                }
                            }
                        }
                        console.error("No userAgent string was provided")
                    },
                    f = Object.freeze({
                        ClientUAInstance: o,
                        browser: E,
                        cpu: N,
                        device: A,
                        engine: u,
                        os: _,
                        ua: s,
                        setUa: c,
                        parseUserAgent: M
                    });

                function d(l, e) {
                    var t = Object.keys(l);
                    if (Object.getOwnPropertySymbols) {
                        var a = Object.getOwnPropertySymbols(l);
                        e && (a = a.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(l, e).enumerable
                        }))), t.push.apply(t, a)
                    }
                    return t
                }

                function p(l) {
                    return p = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(l) {
                        return typeof l
                    } : function(l) {
                        return l && "function" === typeof Symbol && l.constructor === Symbol && l !== Symbol.prototype ? "symbol" : typeof l
                    }, p(l)
                }

                function O(l, e) {
                    for (var t = 0; t < e.length; t++) {
                        var a = e[t];
                        a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(l, a.key, a)
                    }
                }

                function R(l, e, t) {
                    return e in l ? Object.defineProperty(l, e, {
                        value: t,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : l[e] = t, l
                }

                function m() {
                    return m = Object.assign || function(l) {
                        for (var e = 1; e < arguments.length; e++) {
                            var t = arguments[e];
                            for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (l[a] = t[a])
                        }
                        return l
                    }, m.apply(this, arguments)
                }

                function h(l) {
                    return h = Object.setPrototypeOf ? Object.getPrototypeOf : function(l) {
                        return l.__proto__ || Object.getPrototypeOf(l)
                    }, h(l)
                }

                function g(l, e) {
                    return g = Object.setPrototypeOf || function(l, e) {
                        return l.__proto__ = e, l
                    }, g(l, e)
                }

                function L(l, e) {
                    if (null == l) return {};
                    var t, a, n = function(l, e) {
                        if (null == l) return {};
                        var t, a, n = {},
                            r = Object.keys(l);
                        for (a = 0; a < r.length; a++) t = r[a], e.indexOf(t) >= 0 || (n[t] = l[t]);
                        return n
                    }(l, e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(l);
                        for (a = 0; a < r.length; a++) t = r[a], e.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(l, t) && (n[t] = l[t])
                    }
                    return n
                }

                function y(l) {
                    if (void 0 === l) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return l
                }

                function T(l, e) {
                    return function(l) {
                        if (Array.isArray(l)) return l
                    }(l) || function(l, e) {
                        var t = null == l ? null : "undefined" !== typeof Symbol && l[Symbol.iterator] || l["@@iterator"];
                        if (null == t) return;
                        var a, n, r = [],
                            i = !0,
                            o = !1;
                        try {
                            for (t = t.call(l); !(i = (a = t.next()).done) && (r.push(a.value), !e || r.length !== e); i = !0);
                        } catch (E) {
                            o = !0, n = E
                        } finally {
                            try {
                                i || null == t.return || t.return()
                            } finally {
                                if (o) throw n
                            }
                        }
                        return r
                    }(l, e) || function(l, e) {
                        if (!l) return;
                        if ("string" === typeof l) return I(l, e);
                        var t = Object.prototype.toString.call(l).slice(8, -1);
                        "Object" === t && l.constructor && (t = l.constructor.name);
                        if ("Map" === t || "Set" === t) return Array.from(l);
                        if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return I(l, e)
                    }(l, e) || function() {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()
                }

                function I(l, e) {
                    (null == e || e > l.length) && (e = l.length);
                    for (var t = 0, a = new Array(e); t < e; t++) a[t] = l[t];
                    return a
                }
                var S = "mobile",
                    b = "tablet",
                    B = "smarttv",
                    v = "console",
                    U = "wearable",
                    G = "embedded",
                    F = void 0,
                    P = {
                        Chrome: "Chrome",
                        Firefox: "Firefox",
                        Opera: "Opera",
                        Yandex: "Yandex",
                        Safari: "Safari",
                        InternetExplorer: "Internet Explorer",
                        Edge: "Edge",
                        Chromium: "Chromium",
                        Ie: "IE",
                        MobileSafari: "Mobile Safari",
                        EdgeChromium: "Edge Chromium",
                        MIUI: "MIUI Browser",
                        SamsungBrowser: "Samsung Browser"
                    },
                    w = {
                        IOS: "iOS",
                        Android: "Android",
                        WindowsPhone: "Windows Phone",
                        Windows: "Windows",
                        MAC_OS: "Mac OS"
                    },
                    k = {
                        isMobile: !1,
                        isTablet: !1,
                        isBrowser: !1,
                        isSmartTV: !1,
                        isConsole: !1,
                        isWearable: !1
                    },
                    H = function(l) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "none";
                        return l || e
                    },
                    C = function() {
                        return !("undefined" === typeof window || !window.navigator && !navigator) && (window.navigator || navigator)
                    },
                    x = function(l) {
                        var e = C();
                        return e && e.platform && (-1 !== e.platform.indexOf(l) || "MacIntel" === e.platform && e.maxTouchPoints > 1 && !window.MSStream)
                    },
                    D = function(l, e, t, a) {
                        return function(l) {
                            for (var e = 1; e < arguments.length; e++) {
                                var t = null != arguments[e] ? arguments[e] : {};
                                e % 2 ? d(Object(t), !0).forEach((function(e) {
                                    R(l, e, t[e])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(t)) : d(Object(t)).forEach((function(e) {
                                    Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(t, e))
                                }))
                            }
                            return l
                        }({}, l, {
                            vendor: H(e.vendor),
                            model: H(e.model),
                            os: H(t.name),
                            osVersion: H(t.version),
                            ua: H(a)
                        })
                    };
                var K = function(l) {
                        return l.type === S
                    },
                    W = function(l) {
                        return l.type === b
                    },
                    V = function(l) {
                        var e = l.type;
                        return e === S || e === b
                    },
                    z = function(l) {
                        return l.type === B
                    },
                    Z = function(l) {
                        return l.type === F
                    },
                    j = function(l) {
                        return l.type === U
                    },
                    J = function(l) {
                        return l.type === v
                    },
                    q = function(l) {
                        return l.type === G
                    },
                    Y = function(l) {
                        var e = l.vendor;
                        return H(e)
                    },
                    $ = function(l) {
                        var e = l.model;
                        return H(e)
                    },
                    Q = function(l) {
                        var e = l.type;
                        return H(e, "browser")
                    },
                    X = function(l) {
                        return l.name === w.Android
                    },
                    ll = function(l) {
                        return l.name === w.Windows
                    },
                    el = function(l) {
                        return l.name === w.MAC_OS
                    },
                    tl = function(l) {
                        return l.name === w.WindowsPhone
                    },
                    al = function(l) {
                        return l.name === w.IOS
                    },
                    nl = function(l) {
                        var e = l.version;
                        return H(e)
                    },
                    rl = function(l) {
                        var e = l.name;
                        return H(e)
                    },
                    il = function(l) {
                        return l.name === P.Chrome
                    },
                    ol = function(l) {
                        return l.name === P.Firefox
                    },
                    El = function(l) {
                        return l.name === P.Chromium
                    },
                    Nl = function(l) {
                        return l.name === P.Edge
                    },
                    Al = function(l) {
                        return l.name === P.Yandex
                    },
                    ul = function(l) {
                        var e = l.name;
                        return e === P.Safari || e === P.MobileSafari
                    },
                    _l = function(l) {
                        return l.name === P.MobileSafari
                    },
                    sl = function(l) {
                        return l.name === P.Opera
                    },
                    cl = function(l) {
                        var e = l.name;
                        return e === P.InternetExplorer || e === P.Ie
                    },
                    Ml = function(l) {
                        return l.name === P.MIUI
                    },
                    fl = function(l) {
                        return l.name === P.SamsungBrowser
                    },
                    dl = function(l) {
                        var e = l.version;
                        return H(e)
                    },
                    pl = function(l) {
                        var e = l.major;
                        return H(e)
                    },
                    Ol = function(l) {
                        var e = l.name;
                        return H(e)
                    },
                    Rl = function(l) {
                        var e = l.name;
                        return H(e)
                    },
                    ml = function(l) {
                        var e = l.version;
                        return H(e)
                    },
                    hl = function() {
                        var l = C(),
                            e = l && l.userAgent && l.userAgent.toLowerCase();
                        return "string" === typeof e && /electron/.test(e)
                    },
                    gl = function(l) {
                        return "string" === typeof l && -1 !== l.indexOf("Edg/")
                    },
                    Ll = function() {
                        var l = C();
                        return l && (/iPad|iPhone|iPod/.test(l.platform) || "MacIntel" === l.platform && l.maxTouchPoints > 1) && !window.MSStream
                    },
                    yl = function() {
                        return x("iPad")
                    },
                    Tl = function() {
                        return x("iPhone")
                    },
                    Il = function() {
                        return x("iPod")
                    },
                    Sl = function(l) {
                        return H(l)
                    };

                function bl(l) {
                    var e = l || f,
                        t = e.device,
                        a = e.browser,
                        n = e.os,
                        r = e.engine,
                        i = e.ua;
                    return {
                        isSmartTV: z(t),
                        isConsole: J(t),
                        isWearable: j(t),
                        isEmbedded: q(t),
                        isMobileSafari: _l(a) || yl(),
                        isChromium: El(a),
                        isMobile: V(t) || yl(),
                        isMobileOnly: K(t),
                        isTablet: W(t) || yl(),
                        isBrowser: Z(t),
                        isDesktop: Z(t),
                        isAndroid: X(n),
                        isWinPhone: tl(n),
                        isIOS: al(n) || yl(),
                        isChrome: il(a),
                        isFirefox: ol(a),
                        isSafari: ul(a),
                        isOpera: sl(a),
                        isIE: cl(a),
                        osVersion: nl(n),
                        osName: rl(n),
                        fullBrowserVersion: dl(a),
                        browserVersion: pl(a),
                        browserName: Ol(a),
                        mobileVendor: Y(t),
                        mobileModel: $(t),
                        engineName: Rl(r),
                        engineVersion: ml(r),
                        getUA: Sl(i),
                        isEdge: Nl(a) || gl(i),
                        isYandex: Al(a),
                        deviceType: Q(t),
                        isIOS13: Ll(),
                        isIPad13: yl(),
                        isIPhone13: Tl(),
                        isIPod13: Il(),
                        isElectron: hl(),
                        isEdgeChromium: gl(i),
                        isLegacyEdge: Nl(a) && !gl(i),
                        isWindows: ll(n),
                        isMacOs: el(n),
                        isMIUI: Ml(a),
                        isSamsungBrowser: fl(a)
                    }
                }
                var Bl = z(A),
                    vl = J(A),
                    Ul = j(A),
                    Gl = q(A),
                    Fl = _l(E) || yl(),
                    Pl = El(E),
                    wl = V(A) || yl(),
                    kl = K(A),
                    Hl = W(A) || yl(),
                    Cl = Z(A),
                    xl = Z(A),
                    Dl = X(_),
                    Kl = tl(_),
                    Wl = al(_) || yl(),
                    Vl = il(E),
                    zl = ol(E),
                    Zl = ul(E),
                    jl = sl(E),
                    Jl = cl(E),
                    ql = nl(_),
                    Yl = rl(_),
                    $l = dl(E),
                    Ql = pl(E),
                    Xl = Ol(E),
                    le = Y(A),
                    ee = $(A),
                    te = Rl(u),
                    ae = ml(u),
                    ne = Sl(s),
                    re = Nl(E) || gl(s),
                    ie = Al(E),
                    oe = Q(A),
                    Ee = Ll(),
                    Ne = yl(),
                    Ae = Tl(),
                    ue = Il(),
                    _e = hl(),
                    se = gl(s),
                    ce = Nl(E) && !gl(s),
                    Me = ll(_),
                    fe = el(_),
                    de = Ml(E),
                    pe = fl(E);

                function Oe(l) {
                    var e = l || window.navigator.userAgent;
                    return M(e)
                }
                e.x_ = Ql, e.vU = zl, e.tq = wl, e.G6 = Zl
            },
            4463: function(l, e, t) {
                "use strict";
                var a = t(2791),
                    n = t(1725),
                    r = t(5296);

                function i(l) {
                    for (var e = "https://reactjs.org/docs/error-decoder.html?invariant=" + l, t = 1; t < arguments.length; t++) e += "&args[]=" + encodeURIComponent(arguments[t]);
                    return "Minified React error #" + l + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
                }
                if (!a) throw Error(i(227));
                var o = new Set,
                    E = {};

                function N(l, e) {
                    A(l, e), A(l + "Capture", e)
                }

                function A(l, e) {
                    for (E[l] = e, l = 0; l < e.length; l++) o.add(e[l])
                }
                var u = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement),
                    _ = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
                    s = Object.prototype.hasOwnProperty,
                    c = {},
                    M = {};

                function f(l, e, t, a, n, r, i) {
                    this.acceptsBooleans = 2 === e || 3 === e || 4 === e, this.attributeName = a, this.attributeNamespace = n, this.mustUseProperty = t, this.propertyName = l, this.type = e, this.sanitizeURL = r, this.removeEmptyString = i
                }
                var d = {};
                "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(l) {
                    d[l] = new f(l, 0, !1, l, null, !1, !1)
                })), [
                    ["acceptCharset", "accept-charset"],
                    ["className", "class"],
                    ["htmlFor", "for"],
                    ["httpEquiv", "http-equiv"]
                ].forEach((function(l) {
                    var e = l[0];
                    d[e] = new f(e, 1, !1, l[1], null, !1, !1)
                })), ["contentEditable", "draggable", "spellCheck", "value"].forEach((function(l) {
                    d[l] = new f(l, 2, !1, l.toLowerCase(), null, !1, !1)
                })), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach((function(l) {
                    d[l] = new f(l, 2, !1, l, null, !1, !1)
                })), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(l) {
                    d[l] = new f(l, 3, !1, l.toLowerCase(), null, !1, !1)
                })), ["checked", "multiple", "muted", "selected"].forEach((function(l) {
                    d[l] = new f(l, 3, !0, l, null, !1, !1)
                })), ["capture", "download"].forEach((function(l) {
                    d[l] = new f(l, 4, !1, l, null, !1, !1)
                })), ["cols", "rows", "size", "span"].forEach((function(l) {
                    d[l] = new f(l, 6, !1, l, null, !1, !1)
                })), ["rowSpan", "start"].forEach((function(l) {
                    d[l] = new f(l, 5, !1, l.toLowerCase(), null, !1, !1)
                }));
                var p = /[\-:]([a-z])/g;

                function O(l) {
                    return l[1].toUpperCase()
                }

                function R(l, e, t, a) {
                    var n = d.hasOwnProperty(e) ? d[e] : null;
                    (null !== n ? 0 === n.type : !a && (2 < e.length && ("o" === e[0] || "O" === e[0]) && ("n" === e[1] || "N" === e[1]))) || (function(l, e, t, a) {
                        if (null === e || "undefined" === typeof e || function(l, e, t, a) {
                                if (null !== t && 0 === t.type) return !1;
                                switch (typeof e) {
                                    case "function":
                                    case "symbol":
                                        return !0;
                                    case "boolean":
                                        return !a && (null !== t ? !t.acceptsBooleans : "data-" !== (l = l.toLowerCase().slice(0, 5)) && "aria-" !== l);
                                    default:
                                        return !1
                                }
                            }(l, e, t, a)) return !0;
                        if (a) return !1;
                        if (null !== t) switch (t.type) {
                            case 3:
                                return !e;
                            case 4:
                                return !1 === e;
                            case 5:
                                return isNaN(e);
                            case 6:
                                return isNaN(e) || 1 > e
                        }
                        return !1
                    }(e, t, n, a) && (t = null), a || null === n ? function(l) {
                        return !!s.call(M, l) || !s.call(c, l) && (_.test(l) ? M[l] = !0 : (c[l] = !0, !1))
                    }(e) && (null === t ? l.removeAttribute(e) : l.setAttribute(e, "" + t)) : n.mustUseProperty ? l[n.propertyName] = null === t ? 3 !== n.type && "" : t : (e = n.attributeName, a = n.attributeNamespace, null === t ? l.removeAttribute(e) : (t = 3 === (n = n.type) || 4 === n && !0 === t ? "" : "" + t, a ? l.setAttributeNS(a, e, t) : l.setAttribute(e, t))))
                }
                "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(l) {
                    var e = l.replace(p, O);
                    d[e] = new f(e, 1, !1, l, null, !1, !1)
                })), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(l) {
                    var e = l.replace(p, O);
                    d[e] = new f(e, 1, !1, l, "http://www.w3.org/1999/xlink", !1, !1)
                })), ["xml:base", "xml:lang", "xml:space"].forEach((function(l) {
                    var e = l.replace(p, O);
                    d[e] = new f(e, 1, !1, l, "http://www.w3.org/XML/1998/namespace", !1, !1)
                })), ["tabIndex", "crossOrigin"].forEach((function(l) {
                    d[l] = new f(l, 1, !1, l.toLowerCase(), null, !1, !1)
                })), d.xlinkHref = new f("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach((function(l) {
                    d[l] = new f(l, 1, !1, l.toLowerCase(), null, !0, !0)
                }));
                var m = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
                    h = 60103,
                    g = 60106,
                    L = 60107,
                    y = 60108,
                    T = 60114,
                    I = 60109,
                    S = 60110,
                    b = 60112,
                    B = 60113,
                    v = 60120,
                    U = 60115,
                    G = 60116,
                    F = 60121,
                    P = 60128,
                    w = 60129,
                    k = 60130,
                    H = 60131;
                if ("function" === typeof Symbol && Symbol.for) {
                    var C = Symbol.for;
                    h = C("react.element"), g = C("react.portal"), L = C("react.fragment"), y = C("react.strict_mode"), T = C("react.profiler"), I = C("react.provider"), S = C("react.context"), b = C("react.forward_ref"), B = C("react.suspense"), v = C("react.suspense_list"), U = C("react.memo"), G = C("react.lazy"), F = C("react.block"), C("react.scope"), P = C("react.opaque.id"), w = C("react.debug_trace_mode"), k = C("react.offscreen"), H = C("react.legacy_hidden")
                }
                var x, D = "function" === typeof Symbol && Symbol.iterator;

                function K(l) {
                    return null === l || "object" !== typeof l ? null : "function" === typeof(l = D && l[D] || l["@@iterator"]) ? l : null
                }

                function W(l) {
                    if (void 0 === x) try {
                        throw Error()
                    } catch (t) {
                        var e = t.stack.trim().match(/\n( *(at )?)/);
                        x = e && e[1] || ""
                    }
                    return "\n" + x + l
                }
                var V = !1;

                function z(l, e) {
                    if (!l || V) return "";
                    V = !0;
                    var t = Error.prepareStackTrace;
                    Error.prepareStackTrace = void 0;
                    try {
                        if (e)
                            if (e = function() {
                                    throw Error()
                                }, Object.defineProperty(e.prototype, "props", {
                                    set: function() {
                                        throw Error()
                                    }
                                }), "object" === typeof Reflect && Reflect.construct) {
                                try {
                                    Reflect.construct(e, [])
                                } catch (E) {
                                    var a = E
                                }
                                Reflect.construct(l, [], e)
                            } else {
                                try {
                                    e.call()
                                } catch (E) {
                                    a = E
                                }
                                l.call(e.prototype)
                            }
                        else {
                            try {
                                throw Error()
                            } catch (E) {
                                a = E
                            }
                            l()
                        }
                    } catch (E) {
                        if (E && a && "string" === typeof E.stack) {
                            for (var n = E.stack.split("\n"), r = a.stack.split("\n"), i = n.length - 1, o = r.length - 1; 1 <= i && 0 <= o && n[i] !== r[o];) o--;
                            for (; 1 <= i && 0 <= o; i--, o--)
                                if (n[i] !== r[o]) {
                                    if (1 !== i || 1 !== o)
                                        do {
                                            if (i--, 0 > --o || n[i] !== r[o]) return "\n" + n[i].replace(" at new ", " at ")
                                        } while (1 <= i && 0 <= o);
                                    break
                                }
                        }
                    } finally {
                        V = !1, Error.prepareStackTrace = t
                    }
                    return (l = l ? l.displayName || l.name : "") ? W(l) : ""
                }

                function Z(l) {
                    switch (l.tag) {
                        case 5:
                            return W(l.type);
                        case 16:
                            return W("Lazy");
                        case 13:
                            return W("Suspense");
                        case 19:
                            return W("SuspenseList");
                        case 0:
                        case 2:
                        case 15:
                            return l = z(l.type, !1);
                        case 11:
                            return l = z(l.type.render, !1);
                        case 22:
                            return l = z(l.type._render, !1);
                        case 1:
                            return l = z(l.type, !0);
                        default:
                            return ""
                    }
                }

                function j(l) {
                    if (null == l) return null;
                    if ("function" === typeof l) return l.displayName || l.name || null;
                    if ("string" === typeof l) return l;
                    switch (l) {
                        case L:
                            return "Fragment";
                        case g:
                            return "Portal";
                        case T:
                            return "Profiler";
                        case y:
                            return "StrictMode";
                        case B:
                            return "Suspense";
                        case v:
                            return "SuspenseList"
                    }
                    if ("object" === typeof l) switch (l.$$typeof) {
                        case S:
                            return (l.displayName || "Context") + ".Consumer";
                        case I:
                            return (l._context.displayName || "Context") + ".Provider";
                        case b:
                            var e = l.render;
                            return e = e.displayName || e.name || "", l.displayName || ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef");
                        case U:
                            return j(l.type);
                        case F:
                            return j(l._render);
                        case G:
                            e = l._payload, l = l._init;
                            try {
                                return j(l(e))
                            } catch (t) {}
                    }
                    return null
                }

                function J(l) {
                    switch (typeof l) {
                        case "boolean":
                        case "number":
                        case "object":
                        case "string":
                        case "undefined":
                            return l;
                        default:
                            return ""
                    }
                }

                function q(l) {
                    var e = l.type;
                    return (l = l.nodeName) && "input" === l.toLowerCase() && ("checkbox" === e || "radio" === e)
                }

                function Y(l) {
                    l._valueTracker || (l._valueTracker = function(l) {
                        var e = q(l) ? "checked" : "value",
                            t = Object.getOwnPropertyDescriptor(l.constructor.prototype, e),
                            a = "" + l[e];
                        if (!l.hasOwnProperty(e) && "undefined" !== typeof t && "function" === typeof t.get && "function" === typeof t.set) {
                            var n = t.get,
                                r = t.set;
                            return Object.defineProperty(l, e, {
                                configurable: !0,
                                get: function() {
                                    return n.call(this)
                                },
                                set: function(l) {
                                    a = "" + l, r.call(this, l)
                                }
                            }), Object.defineProperty(l, e, {
                                enumerable: t.enumerable
                            }), {
                                getValue: function() {
                                    return a
                                },
                                setValue: function(l) {
                                    a = "" + l
                                },
                                stopTracking: function() {
                                    l._valueTracker = null, delete l[e]
                                }
                            }
                        }
                    }(l))
                }

                function $(l) {
                    if (!l) return !1;
                    var e = l._valueTracker;
                    if (!e) return !0;
                    var t = e.getValue(),
                        a = "";
                    return l && (a = q(l) ? l.checked ? "true" : "false" : l.value), (l = a) !== t && (e.setValue(l), !0)
                }

                function Q(l) {
                    if ("undefined" === typeof(l = l || ("undefined" !== typeof document ? document : void 0))) return null;
                    try {
                        return l.activeElement || l.body
                    } catch (e) {
                        return l.body
                    }
                }

                function X(l, e) {
                    var t = e.checked;
                    return n({}, e, {
                        defaultChecked: void 0,
                        defaultValue: void 0,
                        value: void 0,
                        checked: null != t ? t : l._wrapperState.initialChecked
                    })
                }

                function ll(l, e) {
                    var t = null == e.defaultValue ? "" : e.defaultValue,
                        a = null != e.checked ? e.checked : e.defaultChecked;
                    t = J(null != e.value ? e.value : t), l._wrapperState = {
                        initialChecked: a,
                        initialValue: t,
                        controlled: "checkbox" === e.type || "radio" === e.type ? null != e.checked : null != e.value
                    }
                }

                function el(l, e) {
                    null != (e = e.checked) && R(l, "checked", e, !1)
                }

                function tl(l, e) {
                    el(l, e);
                    var t = J(e.value),
                        a = e.type;
                    if (null != t) "number" === a ? (0 === t && "" === l.value || l.value != t) && (l.value = "" + t) : l.value !== "" + t && (l.value = "" + t);
                    else if ("submit" === a || "reset" === a) return void l.removeAttribute("value");
                    e.hasOwnProperty("value") ? nl(l, e.type, t) : e.hasOwnProperty("defaultValue") && nl(l, e.type, J(e.defaultValue)), null == e.checked && null != e.defaultChecked && (l.defaultChecked = !!e.defaultChecked)
                }

                function al(l, e, t) {
                    if (e.hasOwnProperty("value") || e.hasOwnProperty("defaultValue")) {
                        var a = e.type;
                        if (!("submit" !== a && "reset" !== a || void 0 !== e.value && null !== e.value)) return;
                        e = "" + l._wrapperState.initialValue, t || e === l.value || (l.value = e), l.defaultValue = e
                    }
                    "" !== (t = l.name) && (l.name = ""), l.defaultChecked = !!l._wrapperState.initialChecked, "" !== t && (l.name = t)
                }

                function nl(l, e, t) {
                    "number" === e && Q(l.ownerDocument) === l || (null == t ? l.defaultValue = "" + l._wrapperState.initialValue : l.defaultValue !== "" + t && (l.defaultValue = "" + t))
                }

                function rl(l, e) {
                    return l = n({
                        children: void 0
                    }, e), (e = function(l) {
                        var e = "";
                        return a.Children.forEach(l, (function(l) {
                            null != l && (e += l)
                        })), e
                    }(e.children)) && (l.children = e), l
                }

                function il(l, e, t, a) {
                    if (l = l.options, e) {
                        e = {};
                        for (var n = 0; n < t.length; n++) e["$" + t[n]] = !0;
                        for (t = 0; t < l.length; t++) n = e.hasOwnProperty("$" + l[t].value), l[t].selected !== n && (l[t].selected = n), n && a && (l[t].defaultSelected = !0)
                    } else {
                        for (t = "" + J(t), e = null, n = 0; n < l.length; n++) {
                            if (l[n].value === t) return l[n].selected = !0, void(a && (l[n].defaultSelected = !0));
                            null !== e || l[n].disabled || (e = l[n])
                        }
                        null !== e && (e.selected = !0)
                    }
                }

                function ol(l, e) {
                    if (null != e.dangerouslySetInnerHTML) throw Error(i(91));
                    return n({}, e, {
                        value: void 0,
                        defaultValue: void 0,
                        children: "" + l._wrapperState.initialValue
                    })
                }

                function El(l, e) {
                    var t = e.value;
                    if (null == t) {
                        if (t = e.children, e = e.defaultValue, null != t) {
                            if (null != e) throw Error(i(92));
                            if (Array.isArray(t)) {
                                if (!(1 >= t.length)) throw Error(i(93));
                                t = t[0]
                            }
                            e = t
                        }
                        null == e && (e = ""), t = e
                    }
                    l._wrapperState = {
                        initialValue: J(t)
                    }
                }

                function Nl(l, e) {
                    var t = J(e.value),
                        a = J(e.defaultValue);
                    null != t && ((t = "" + t) !== l.value && (l.value = t), null == e.defaultValue && l.defaultValue !== t && (l.defaultValue = t)), null != a && (l.defaultValue = "" + a)
                }

                function Al(l) {
                    var e = l.textContent;
                    e === l._wrapperState.initialValue && "" !== e && null !== e && (l.value = e)
                }
                var ul = "http://www.w3.org/1999/xhtml",
                    _l = "http://www.w3.org/2000/svg";

                function sl(l) {
                    switch (l) {
                        case "svg":
                            return "http://www.w3.org/2000/svg";
                        case "math":
                            return "http://www.w3.org/1998/Math/MathML";
                        default:
                            return "http://www.w3.org/1999/xhtml"
                    }
                }

                function cl(l, e) {
                    return null == l || "http://www.w3.org/1999/xhtml" === l ? sl(e) : "http://www.w3.org/2000/svg" === l && "foreignObject" === e ? "http://www.w3.org/1999/xhtml" : l
                }
                var Ml, fl, dl = (fl = function(l, e) {
                    if (l.namespaceURI !== _l || "innerHTML" in l) l.innerHTML = e;
                    else {
                        for ((Ml = Ml || document.createElement("div")).innerHTML = "<svg>" + e.valueOf().toString() + "</svg>", e = Ml.firstChild; l.firstChild;) l.removeChild(l.firstChild);
                        for (; e.firstChild;) l.appendChild(e.firstChild)
                    }
                }, "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function(l, e, t, a) {
                    MSApp.execUnsafeLocalFunction((function() {
                        return fl(l, e)
                    }))
                } : fl);

                function pl(l, e) {
                    if (e) {
                        var t = l.firstChild;
                        if (t && t === l.lastChild && 3 === t.nodeType) return void(t.nodeValue = e)
                    }
                    l.textContent = e
                }
                var Ol = {
                        animationIterationCount: !0,
                        borderImageOutset: !0,
                        borderImageSlice: !0,
                        borderImageWidth: !0,
                        boxFlex: !0,
                        boxFlexGroup: !0,
                        boxOrdinalGroup: !0,
                        columnCount: !0,
                        columns: !0,
                        flex: !0,
                        flexGrow: !0,
                        flexPositive: !0,
                        flexShrink: !0,
                        flexNegative: !0,
                        flexOrder: !0,
                        gridArea: !0,
                        gridRow: !0,
                        gridRowEnd: !0,
                        gridRowSpan: !0,
                        gridRowStart: !0,
                        gridColumn: !0,
                        gridColumnEnd: !0,
                        gridColumnSpan: !0,
                        gridColumnStart: !0,
                        fontWeight: !0,
                        lineClamp: !0,
                        lineHeight: !0,
                        opacity: !0,
                        order: !0,
                        orphans: !0,
                        tabSize: !0,
                        widows: !0,
                        zIndex: !0,
                        zoom: !0,
                        fillOpacity: !0,
                        floodOpacity: !0,
                        stopOpacity: !0,
                        strokeDasharray: !0,
                        strokeDashoffset: !0,
                        strokeMiterlimit: !0,
                        strokeOpacity: !0,
                        strokeWidth: !0
                    },
                    Rl = ["Webkit", "ms", "Moz", "O"];

                function ml(l, e, t) {
                    return null == e || "boolean" === typeof e || "" === e ? "" : t || "number" !== typeof e || 0 === e || Ol.hasOwnProperty(l) && Ol[l] ? ("" + e).trim() : e + "px"
                }

                function hl(l, e) {
                    for (var t in l = l.style, e)
                        if (e.hasOwnProperty(t)) {
                            var a = 0 === t.indexOf("--"),
                                n = ml(t, e[t], a);
                            "float" === t && (t = "cssFloat"), a ? l.setProperty(t, n) : l[t] = n
                        }
                }
                Object.keys(Ol).forEach((function(l) {
                    Rl.forEach((function(e) {
                        e = e + l.charAt(0).toUpperCase() + l.substring(1), Ol[e] = Ol[l]
                    }))
                }));
                var gl = n({
                    menuitem: !0
                }, {
                    area: !0,
                    base: !0,
                    br: !0,
                    col: !0,
                    embed: !0,
                    hr: !0,
                    img: !0,
                    input: !0,
                    keygen: !0,
                    link: !0,
                    meta: !0,
                    param: !0,
                    source: !0,
                    track: !0,
                    wbr: !0
                });

                function Ll(l, e) {
                    if (e) {
                        if (gl[l] && (null != e.children || null != e.dangerouslySetInnerHTML)) throw Error(i(137, l));
                        if (null != e.dangerouslySetInnerHTML) {
                            if (null != e.children) throw Error(i(60));
                            if ("object" !== typeof e.dangerouslySetInnerHTML || !("__html" in e.dangerouslySetInnerHTML)) throw Error(i(61))
                        }
                        if (null != e.style && "object" !== typeof e.style) throw Error(i(62))
                    }
                }

                function yl(l, e) {
                    if (-1 === l.indexOf("-")) return "string" === typeof e.is;
                    switch (l) {
                        case "annotation-xml":
                        case "color-profile":
                        case "font-face":
                        case "font-face-src":
                        case "font-face-uri":
                        case "font-face-format":
                        case "font-face-name":
                        case "missing-glyph":
                            return !1;
                        default:
                            return !0
                    }
                }

                function Tl(l) {
                    return (l = l.target || l.srcElement || window).correspondingUseElement && (l = l.correspondingUseElement), 3 === l.nodeType ? l.parentNode : l
                }
                var Il = null,
                    Sl = null,
                    bl = null;

                function Bl(l) {
                    if (l = tn(l)) {
                        if ("function" !== typeof Il) throw Error(i(280));
                        var e = l.stateNode;
                        e && (e = nn(e), Il(l.stateNode, l.type, e))
                    }
                }

                function vl(l) {
                    Sl ? bl ? bl.push(l) : bl = [l] : Sl = l
                }

                function Ul() {
                    if (Sl) {
                        var l = Sl,
                            e = bl;
                        if (bl = Sl = null, Bl(l), e)
                            for (l = 0; l < e.length; l++) Bl(e[l])
                    }
                }

                function Gl(l, e) {
                    return l(e)
                }

                function Fl(l, e, t, a, n) {
                    return l(e, t, a, n)
                }

                function Pl() {}
                var wl = Gl,
                    kl = !1,
                    Hl = !1;

                function Cl() {
                    null === Sl && null === bl || (Pl(), Ul())
                }

                function xl(l, e) {
                    var t = l.stateNode;
                    if (null === t) return null;
                    var a = nn(t);
                    if (null === a) return null;
                    t = a[e];
                    l: switch (e) {
                        case "onClick":
                        case "onClickCapture":
                        case "onDoubleClick":
                        case "onDoubleClickCapture":
                        case "onMouseDown":
                        case "onMouseDownCapture":
                        case "onMouseMove":
                        case "onMouseMoveCapture":
                        case "onMouseUp":
                        case "onMouseUpCapture":
                        case "onMouseEnter":
                            (a = !a.disabled) || (a = !("button" === (l = l.type) || "input" === l || "select" === l || "textarea" === l)), l = !a;
                            break l;
                        default:
                            l = !1
                    }
                    if (l) return null;
                    if (t && "function" !== typeof t) throw Error(i(231, e, typeof t));
                    return t
                }
                var Dl = !1;
                if (u) try {
                    var Kl = {};
                    Object.defineProperty(Kl, "passive", {
                        get: function() {
                            Dl = !0
                        }
                    }), window.addEventListener("test", Kl, Kl), window.removeEventListener("test", Kl, Kl)
                } catch (fl) {
                    Dl = !1
                }

                function Wl(l, e, t, a, n, r, i, o, E) {
                    var N = Array.prototype.slice.call(arguments, 3);
                    try {
                        e.apply(t, N)
                    } catch (A) {
                        this.onError(A)
                    }
                }
                var Vl = !1,
                    zl = null,
                    Zl = !1,
                    jl = null,
                    Jl = {
                        onError: function(l) {
                            Vl = !0, zl = l
                        }
                    };

                function ql(l, e, t, a, n, r, i, o, E) {
                    Vl = !1, zl = null, Wl.apply(Jl, arguments)
                }

                function Yl(l) {
                    var e = l,
                        t = l;
                    if (l.alternate)
                        for (; e.return;) e = e.return;
                    else {
                        l = e;
                        do {
                            0 !== (1026 & (e = l).flags) && (t = e.return), l = e.return
                        } while (l)
                    }
                    return 3 === e.tag ? t : null
                }

                function $l(l) {
                    if (13 === l.tag) {
                        var e = l.memoizedState;
                        if (null === e && (null !== (l = l.alternate) && (e = l.memoizedState)), null !== e) return e.dehydrated
                    }
                    return null
                }

                function Ql(l) {
                    if (Yl(l) !== l) throw Error(i(188))
                }

                function Xl(l) {
                    if (l = function(l) {
                            var e = l.alternate;
                            if (!e) {
                                if (null === (e = Yl(l))) throw Error(i(188));
                                return e !== l ? null : l
                            }
                            for (var t = l, a = e;;) {
                                var n = t.return;
                                if (null === n) break;
                                var r = n.alternate;
                                if (null === r) {
                                    if (null !== (a = n.return)) {
                                        t = a;
                                        continue
                                    }
                                    break
                                }
                                if (n.child === r.child) {
                                    for (r = n.child; r;) {
                                        if (r === t) return Ql(n), l;
                                        if (r === a) return Ql(n), e;
                                        r = r.sibling
                                    }
                                    throw Error(i(188))
                                }
                                if (t.return !== a.return) t = n, a = r;
                                else {
                                    for (var o = !1, E = n.child; E;) {
                                        if (E === t) {
                                            o = !0, t = n, a = r;
                                            break
                                        }
                                        if (E === a) {
                                            o = !0, a = n, t = r;
                                            break
                                        }
                                        E = E.sibling
                                    }
                                    if (!o) {
                                        for (E = r.child; E;) {
                                            if (E === t) {
                                                o = !0, t = r, a = n;
                                                break
                                            }
                                            if (E === a) {
                                                o = !0, a = r, t = n;
                                                break
                                            }
                                            E = E.sibling
                                        }
                                        if (!o) throw Error(i(189))
                                    }
                                }
                                if (t.alternate !== a) throw Error(i(190))
                            }
                            if (3 !== t.tag) throw Error(i(188));
                            return t.stateNode.current === t ? l : e
                        }(l), !l) return null;
                    for (var e = l;;) {
                        if (5 === e.tag || 6 === e.tag) return e;
                        if (e.child) e.child.return = e, e = e.child;
                        else {
                            if (e === l) break;
                            for (; !e.sibling;) {
                                if (!e.return || e.return === l) return null;
                                e = e.return
                            }
                            e.sibling.return = e.return, e = e.sibling
                        }
                    }
                    return null
                }

                function le(l, e) {
                    for (var t = l.alternate; null !== e;) {
                        if (e === l || e === t) return !0;
                        e = e.return
                    }
                    return !1
                }
                var ee, te, ae, ne, re = !1,
                    ie = [],
                    oe = null,
                    Ee = null,
                    Ne = null,
                    Ae = new Map,
                    ue = new Map,
                    _e = [],
                    se = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

                function ce(l, e, t, a, n) {
                    return {
                        blockedOn: l,
                        domEventName: e,
                        eventSystemFlags: 16 | t,
                        nativeEvent: n,
                        targetContainers: [a]
                    }
                }

                function Me(l, e) {
                    switch (l) {
                        case "focusin":
                        case "focusout":
                            oe = null;
                            break;
                        case "dragenter":
                        case "dragleave":
                            Ee = null;
                            break;
                        case "mouseover":
                        case "mouseout":
                            Ne = null;
                            break;
                        case "pointerover":
                        case "pointerout":
                            Ae.delete(e.pointerId);
                            break;
                        case "gotpointercapture":
                        case "lostpointercapture":
                            ue.delete(e.pointerId)
                    }
                }

                function fe(l, e, t, a, n, r) {
                    return null === l || l.nativeEvent !== r ? (l = ce(e, t, a, n, r), null !== e && (null !== (e = tn(e)) && te(e)), l) : (l.eventSystemFlags |= a, e = l.targetContainers, null !== n && -1 === e.indexOf(n) && e.push(n), l)
                }

                function de(l) {
                    var e = en(l.target);
                    if (null !== e) {
                        var t = Yl(e);
                        if (null !== t)
                            if (13 === (e = t.tag)) {
                                if (null !== (e = $l(t))) return l.blockedOn = e, void ne(l.lanePriority, (function() {
                                    r.unstable_runWithPriority(l.priority, (function() {
                                        ae(t)
                                    }))
                                }))
                            } else if (3 === e && t.stateNode.hydrate) return void(l.blockedOn = 3 === t.tag ? t.stateNode.containerInfo : null)
                    }
                    l.blockedOn = null
                }

                function pe(l) {
                    if (null !== l.blockedOn) return !1;
                    for (var e = l.targetContainers; 0 < e.length;) {
                        var t = Xe(l.domEventName, l.eventSystemFlags, e[0], l.nativeEvent);
                        if (null !== t) return null !== (e = tn(t)) && te(e), l.blockedOn = t, !1;
                        e.shift()
                    }
                    return !0
                }

                function Oe(l, e, t) {
                    pe(l) && t.delete(e)
                }

                function Re() {
                    for (re = !1; 0 < ie.length;) {
                        var l = ie[0];
                        if (null !== l.blockedOn) {
                            null !== (l = tn(l.blockedOn)) && ee(l);
                            break
                        }
                        for (var e = l.targetContainers; 0 < e.length;) {
                            var t = Xe(l.domEventName, l.eventSystemFlags, e[0], l.nativeEvent);
                            if (null !== t) {
                                l.blockedOn = t;
                                break
                            }
                            e.shift()
                        }
                        null === l.blockedOn && ie.shift()
                    }
                    null !== oe && pe(oe) && (oe = null), null !== Ee && pe(Ee) && (Ee = null), null !== Ne && pe(Ne) && (Ne = null), Ae.forEach(Oe), ue.forEach(Oe)
                }

                function me(l, e) {
                    l.blockedOn === e && (l.blockedOn = null, re || (re = !0, r.unstable_scheduleCallback(r.unstable_NormalPriority, Re)))
                }

                function he(l) {
                    function e(e) {
                        return me(e, l)
                    }
                    if (0 < ie.length) {
                        me(ie[0], l);
                        for (var t = 1; t < ie.length; t++) {
                            var a = ie[t];
                            a.blockedOn === l && (a.blockedOn = null)
                        }
                    }
                    for (null !== oe && me(oe, l), null !== Ee && me(Ee, l), null !== Ne && me(Ne, l), Ae.forEach(e), ue.forEach(e), t = 0; t < _e.length; t++)(a = _e[t]).blockedOn === l && (a.blockedOn = null);
                    for (; 0 < _e.length && null === (t = _e[0]).blockedOn;) de(t), null === t.blockedOn && _e.shift()
                }

                function ge(l, e) {
                    var t = {};
                    return t[l.toLowerCase()] = e.toLowerCase(), t["Webkit" + l] = "webkit" + e, t["Moz" + l] = "moz" + e, t
                }
                var Le = {
                        animationend: ge("Animation", "AnimationEnd"),
                        animationiteration: ge("Animation", "AnimationIteration"),
                        animationstart: ge("Animation", "AnimationStart"),
                        transitionend: ge("Transition", "TransitionEnd")
                    },
                    ye = {},
                    Te = {};

                function Ie(l) {
                    if (ye[l]) return ye[l];
                    if (!Le[l]) return l;
                    var e, t = Le[l];
                    for (e in t)
                        if (t.hasOwnProperty(e) && e in Te) return ye[l] = t[e];
                    return l
                }
                u && (Te = document.createElement("div").style, "AnimationEvent" in window || (delete Le.animationend.animation, delete Le.animationiteration.animation, delete Le.animationstart.animation), "TransitionEvent" in window || delete Le.transitionend.transition);
                var Se = Ie("animationend"),
                    be = Ie("animationiteration"),
                    Be = Ie("animationstart"),
                    ve = Ie("transitionend"),
                    Ue = new Map,
                    Ge = new Map,
                    Fe = ["abort", "abort", Se, "animationEnd", be, "animationIteration", Be, "animationStart", "canplay", "canPlay", "canplaythrough", "canPlayThrough", "durationchange", "durationChange", "emptied", "emptied", "encrypted", "encrypted", "ended", "ended", "error", "error", "gotpointercapture", "gotPointerCapture", "load", "load", "loadeddata", "loadedData", "loadedmetadata", "loadedMetadata", "loadstart", "loadStart", "lostpointercapture", "lostPointerCapture", "playing", "playing", "progress", "progress", "seeking", "seeking", "stalled", "stalled", "suspend", "suspend", "timeupdate", "timeUpdate", ve, "transitionEnd", "waiting", "waiting"];

                function Pe(l, e) {
                    for (var t = 0; t < l.length; t += 2) {
                        var a = l[t],
                            n = l[t + 1];
                        n = "on" + (n[0].toUpperCase() + n.slice(1)), Ge.set(a, e), Ue.set(a, n), N(n, [a])
                    }
                }(0, r.unstable_now)();
                var we = 8;

                function ke(l) {
                    if (0 !== (1 & l)) return we = 15, 1;
                    if (0 !== (2 & l)) return we = 14, 2;
                    if (0 !== (4 & l)) return we = 13, 4;
                    var e = 24 & l;
                    return 0 !== e ? (we = 12, e) : 0 !== (32 & l) ? (we = 11, 32) : 0 !== (e = 192 & l) ? (we = 10, e) : 0 !== (256 & l) ? (we = 9, 256) : 0 !== (e = 3584 & l) ? (we = 8, e) : 0 !== (4096 & l) ? (we = 7, 4096) : 0 !== (e = 4186112 & l) ? (we = 6, e) : 0 !== (e = 62914560 & l) ? (we = 5, e) : 67108864 & l ? (we = 4, 67108864) : 0 !== (134217728 & l) ? (we = 3, 134217728) : 0 !== (e = 805306368 & l) ? (we = 2, e) : 0 !== (1073741824 & l) ? (we = 1, 1073741824) : (we = 8, l)
                }

                function He(l, e) {
                    var t = l.pendingLanes;
                    if (0 === t) return we = 0;
                    var a = 0,
                        n = 0,
                        r = l.expiredLanes,
                        i = l.suspendedLanes,
                        o = l.pingedLanes;
                    if (0 !== r) a = r, n = we = 15;
                    else if (0 !== (r = 134217727 & t)) {
                        var E = r & ~i;
                        0 !== E ? (a = ke(E), n = we) : 0 !== (o &= r) && (a = ke(o), n = we)
                    } else 0 !== (r = t & ~i) ? (a = ke(r), n = we) : 0 !== o && (a = ke(o), n = we);
                    if (0 === a) return 0;
                    if (a = t & ((0 > (a = 31 - Ve(a)) ? 0 : 1 << a) << 1) - 1, 0 !== e && e !== a && 0 === (e & i)) {
                        if (ke(e), n <= we) return e;
                        we = n
                    }
                    if (0 !== (e = l.entangledLanes))
                        for (l = l.entanglements, e &= a; 0 < e;) n = 1 << (t = 31 - Ve(e)), a |= l[t], e &= ~n;
                    return a
                }

                function Ce(l) {
                    return 0 !== (l = -1073741825 & l.pendingLanes) ? l : 1073741824 & l ? 1073741824 : 0
                }

                function xe(l, e) {
                    switch (l) {
                        case 15:
                            return 1;
                        case 14:
                            return 2;
                        case 12:
                            return 0 === (l = De(24 & ~e)) ? xe(10, e) : l;
                        case 10:
                            return 0 === (l = De(192 & ~e)) ? xe(8, e) : l;
                        case 8:
                            return 0 === (l = De(3584 & ~e)) && (0 === (l = De(4186112 & ~e)) && (l = 512)), l;
                        case 2:
                            return 0 === (e = De(805306368 & ~e)) && (e = 268435456), e
                    }
                    throw Error(i(358, l))
                }

                function De(l) {
                    return l & -l
                }

                function Ke(l) {
                    for (var e = [], t = 0; 31 > t; t++) e.push(l);
                    return e
                }

                function We(l, e, t) {
                    l.pendingLanes |= e;
                    var a = e - 1;
                    l.suspendedLanes &= a, l.pingedLanes &= a, (l = l.eventTimes)[e = 31 - Ve(e)] = t
                }
                var Ve = Math.clz32 ? Math.clz32 : function(l) {
                        return 0 === l ? 32 : 31 - (ze(l) / Ze | 0) | 0
                    },
                    ze = Math.log,
                    Ze = Math.LN2;
                var je = r.unstable_UserBlockingPriority,
                    Je = r.unstable_runWithPriority,
                    qe = !0;

                function Ye(l, e, t, a) {
                    kl || Pl();
                    var n = Qe,
                        r = kl;
                    kl = !0;
                    try {
                        Fl(n, l, e, t, a)
                    } finally {
                        (kl = r) || Cl()
                    }
                }

                function $e(l, e, t, a) {
                    Je(je, Qe.bind(null, l, e, t, a))
                }

                function Qe(l, e, t, a) {
                    var n;
                    if (qe)
                        if ((n = 0 === (4 & e)) && 0 < ie.length && -1 < se.indexOf(l)) l = ce(null, l, e, t, a), ie.push(l);
                        else {
                            var r = Xe(l, e, t, a);
                            if (null === r) n && Me(l, a);
                            else {
                                if (n) {
                                    if (-1 < se.indexOf(l)) return l = ce(r, l, e, t, a), void ie.push(l);
                                    if (function(l, e, t, a, n) {
                                            switch (e) {
                                                case "focusin":
                                                    return oe = fe(oe, l, e, t, a, n), !0;
                                                case "dragenter":
                                                    return Ee = fe(Ee, l, e, t, a, n), !0;
                                                case "mouseover":
                                                    return Ne = fe(Ne, l, e, t, a, n), !0;
                                                case "pointerover":
                                                    var r = n.pointerId;
                                                    return Ae.set(r, fe(Ae.get(r) || null, l, e, t, a, n)), !0;
                                                case "gotpointercapture":
                                                    return r = n.pointerId, ue.set(r, fe(ue.get(r) || null, l, e, t, a, n)), !0
                                            }
                                            return !1
                                        }(r, l, e, t, a)) return;
                                    Me(l, a)
                                }
                                Fa(l, e, a, null, t)
                            }
                        }
                }

                function Xe(l, e, t, a) {
                    var n = Tl(a);
                    if (null !== (n = en(n))) {
                        var r = Yl(n);
                        if (null === r) n = null;
                        else {
                            var i = r.tag;
                            if (13 === i) {
                                if (null !== (n = $l(r))) return n;
                                n = null
                            } else if (3 === i) {
                                if (r.stateNode.hydrate) return 3 === r.tag ? r.stateNode.containerInfo : null;
                                n = null
                            } else r !== n && (n = null)
                        }
                    }
                    return Fa(l, e, a, n, t), null
                }
                var lt = null,
                    et = null,
                    tt = null;

                function at() {
                    if (tt) return tt;
                    var l, e, t = et,
                        a = t.length,
                        n = "value" in lt ? lt.value : lt.textContent,
                        r = n.length;
                    for (l = 0; l < a && t[l] === n[l]; l++);
                    var i = a - l;
                    for (e = 1; e <= i && t[a - e] === n[r - e]; e++);
                    return tt = n.slice(l, 1 < e ? 1 - e : void 0)
                }

                function nt(l) {
                    var e = l.keyCode;
                    return "charCode" in l ? 0 === (l = l.charCode) && 13 === e && (l = 13) : l = e, 10 === l && (l = 13), 32 <= l || 13 === l ? l : 0
                }

                function rt() {
                    return !0
                }

                function it() {
                    return !1
                }

                function ot(l) {
                    function e(e, t, a, n, r) {
                        for (var i in this._reactName = e, this._targetInst = a, this.type = t, this.nativeEvent = n, this.target = r, this.currentTarget = null, l) l.hasOwnProperty(i) && (e = l[i], this[i] = e ? e(n) : n[i]);
                        return this.isDefaultPrevented = (null != n.defaultPrevented ? n.defaultPrevented : !1 === n.returnValue) ? rt : it, this.isPropagationStopped = it, this
                    }
                    return n(e.prototype, {
                        preventDefault: function() {
                            this.defaultPrevented = !0;
                            var l = this.nativeEvent;
                            l && (l.preventDefault ? l.preventDefault() : "unknown" !== typeof l.returnValue && (l.returnValue = !1), this.isDefaultPrevented = rt)
                        },
                        stopPropagation: function() {
                            var l = this.nativeEvent;
                            l && (l.stopPropagation ? l.stopPropagation() : "unknown" !== typeof l.cancelBubble && (l.cancelBubble = !0), this.isPropagationStopped = rt)
                        },
                        persist: function() {},
                        isPersistent: rt
                    }), e
                }
                var Et, Nt, At, ut = {
                        eventPhase: 0,
                        bubbles: 0,
                        cancelable: 0,
                        timeStamp: function(l) {
                            return l.timeStamp || Date.now()
                        },
                        defaultPrevented: 0,
                        isTrusted: 0
                    },
                    _t = ot(ut),
                    st = n({}, ut, {
                        view: 0,
                        detail: 0
                    }),
                    ct = ot(st),
                    Mt = n({}, st, {
                        screenX: 0,
                        screenY: 0,
                        clientX: 0,
                        clientY: 0,
                        pageX: 0,
                        pageY: 0,
                        ctrlKey: 0,
                        shiftKey: 0,
                        altKey: 0,
                        metaKey: 0,
                        getModifierState: It,
                        button: 0,
                        buttons: 0,
                        relatedTarget: function(l) {
                            return void 0 === l.relatedTarget ? l.fromElement === l.srcElement ? l.toElement : l.fromElement : l.relatedTarget
                        },
                        movementX: function(l) {
                            return "movementX" in l ? l.movementX : (l !== At && (At && "mousemove" === l.type ? (Et = l.screenX - At.screenX, Nt = l.screenY - At.screenY) : Nt = Et = 0, At = l), Et)
                        },
                        movementY: function(l) {
                            return "movementY" in l ? l.movementY : Nt
                        }
                    }),
                    ft = ot(Mt),
                    dt = ot(n({}, Mt, {
                        dataTransfer: 0
                    })),
                    pt = ot(n({}, st, {
                        relatedTarget: 0
                    })),
                    Ot = ot(n({}, ut, {
                        animationName: 0,
                        elapsedTime: 0,
                        pseudoElement: 0
                    })),
                    Rt = n({}, ut, {
                        clipboardData: function(l) {
                            return "clipboardData" in l ? l.clipboardData : window.clipboardData
                        }
                    }),
                    mt = ot(Rt),
                    ht = ot(n({}, ut, {
                        data: 0
                    })),
                    gt = {
                        Esc: "Escape",
                        Spacebar: " ",
                        Left: "ArrowLeft",
                        Up: "ArrowUp",
                        Right: "ArrowRight",
                        Down: "ArrowDown",
                        Del: "Delete",
                        Win: "OS",
                        Menu: "ContextMenu",
                        Apps: "ContextMenu",
                        Scroll: "ScrollLock",
                        MozPrintableKey: "Unidentified"
                    },
                    Lt = {
                        8: "Backspace",
                        9: "Tab",
                        12: "Clear",
                        13: "Enter",
                        16: "Shift",
                        17: "Control",
                        18: "Alt",
                        19: "Pause",
                        20: "CapsLock",
                        27: "Escape",
                        32: " ",
                        33: "PageUp",
                        34: "PageDown",
                        35: "End",
                        36: "Home",
                        37: "ArrowLeft",
                        38: "ArrowUp",
                        39: "ArrowRight",
                        40: "ArrowDown",
                        45: "Insert",
                        46: "Delete",
                        112: "F1",
                        113: "F2",
                        114: "F3",
                        115: "F4",
                        116: "F5",
                        117: "F6",
                        118: "F7",
                        119: "F8",
                        120: "F9",
                        121: "F10",
                        122: "F11",
                        123: "F12",
                        144: "NumLock",
                        145: "ScrollLock",
                        224: "Meta"
                    },
                    yt = {
                        Alt: "altKey",
                        Control: "ctrlKey",
                        Meta: "metaKey",
                        Shift: "shiftKey"
                    };

                function Tt(l) {
                    var e = this.nativeEvent;
                    return e.getModifierState ? e.getModifierState(l) : !!(l = yt[l]) && !!e[l]
                }

                function It() {
                    return Tt
                }
                var St = n({}, st, {
                        key: function(l) {
                            if (l.key) {
                                var e = gt[l.key] || l.key;
                                if ("Unidentified" !== e) return e
                            }
                            return "keypress" === l.type ? 13 === (l = nt(l)) ? "Enter" : String.fromCharCode(l) : "keydown" === l.type || "keyup" === l.type ? Lt[l.keyCode] || "Unidentified" : ""
                        },
                        code: 0,
                        location: 0,
                        ctrlKey: 0,
                        shiftKey: 0,
                        altKey: 0,
                        metaKey: 0,
                        repeat: 0,
                        locale: 0,
                        getModifierState: It,
                        charCode: function(l) {
                            return "keypress" === l.type ? nt(l) : 0
                        },
                        keyCode: function(l) {
                            return "keydown" === l.type || "keyup" === l.type ? l.keyCode : 0
                        },
                        which: function(l) {
                            return "keypress" === l.type ? nt(l) : "keydown" === l.type || "keyup" === l.type ? l.keyCode : 0
                        }
                    }),
                    bt = ot(St),
                    Bt = ot(n({}, Mt, {
                        pointerId: 0,
                        width: 0,
                        height: 0,
                        pressure: 0,
                        tangentialPressure: 0,
                        tiltX: 0,
                        tiltY: 0,
                        twist: 0,
                        pointerType: 0,
                        isPrimary: 0
                    })),
                    vt = ot(n({}, st, {
                        touches: 0,
                        targetTouches: 0,
                        changedTouches: 0,
                        altKey: 0,
                        metaKey: 0,
                        ctrlKey: 0,
                        shiftKey: 0,
                        getModifierState: It
                    })),
                    Ut = ot(n({}, ut, {
                        propertyName: 0,
                        elapsedTime: 0,
                        pseudoElement: 0
                    })),
                    Gt = n({}, Mt, {
                        deltaX: function(l) {
                            return "deltaX" in l ? l.deltaX : "wheelDeltaX" in l ? -l.wheelDeltaX : 0
                        },
                        deltaY: function(l) {
                            return "deltaY" in l ? l.deltaY : "wheelDeltaY" in l ? -l.wheelDeltaY : "wheelDelta" in l ? -l.wheelDelta : 0
                        },
                        deltaZ: 0,
                        deltaMode: 0
                    }),
                    Ft = ot(Gt),
                    Pt = [9, 13, 27, 32],
                    wt = u && "CompositionEvent" in window,
                    kt = null;
                u && "documentMode" in document && (kt = document.documentMode);
                var Ht = u && "TextEvent" in window && !kt,
                    Ct = u && (!wt || kt && 8 < kt && 11 >= kt),
                    xt = String.fromCharCode(32),
                    Dt = !1;

                function Kt(l, e) {
                    switch (l) {
                        case "keyup":
                            return -1 !== Pt.indexOf(e.keyCode);
                        case "keydown":
                            return 229 !== e.keyCode;
                        case "keypress":
                        case "mousedown":
                        case "focusout":
                            return !0;
                        default:
                            return !1
                    }
                }

                function Wt(l) {
                    return "object" === typeof(l = l.detail) && "data" in l ? l.data : null
                }
                var Vt = !1;
                var zt = {
                    color: !0,
                    date: !0,
                    datetime: !0,
                    "datetime-local": !0,
                    email: !0,
                    month: !0,
                    number: !0,
                    password: !0,
                    range: !0,
                    search: !0,
                    tel: !0,
                    text: !0,
                    time: !0,
                    url: !0,
                    week: !0
                };

                function Zt(l) {
                    var e = l && l.nodeName && l.nodeName.toLowerCase();
                    return "input" === e ? !!zt[l.type] : "textarea" === e
                }

                function jt(l, e, t, a) {
                    vl(a), 0 < (e = wa(e, "onChange")).length && (t = new _t("onChange", "change", null, t, a), l.push({
                        event: t,
                        listeners: e
                    }))
                }
                var Jt = null,
                    qt = null;

                function Yt(l) {
                    Sa(l, 0)
                }

                function $t(l) {
                    if ($(an(l))) return l
                }

                function Qt(l, e) {
                    if ("change" === l) return e
                }
                var Xt = !1;
                if (u) {
                    var la;
                    if (u) {
                        var ea = "oninput" in document;
                        if (!ea) {
                            var ta = document.createElement("div");
                            ta.setAttribute("oninput", "return;"), ea = "function" === typeof ta.oninput
                        }
                        la = ea
                    } else la = !1;
                    Xt = la && (!document.documentMode || 9 < document.documentMode)
                }

                function aa() {
                    Jt && (Jt.detachEvent("onpropertychange", na), qt = Jt = null)
                }

                function na(l) {
                    if ("value" === l.propertyName && $t(qt)) {
                        var e = [];
                        if (jt(e, qt, l, Tl(l)), l = Yt, kl) l(e);
                        else {
                            kl = !0;
                            try {
                                Gl(l, e)
                            } finally {
                                kl = !1, Cl()
                            }
                        }
                    }
                }

                function ra(l, e, t) {
                    "focusin" === l ? (aa(), qt = t, (Jt = e).attachEvent("onpropertychange", na)) : "focusout" === l && aa()
                }

                function ia(l) {
                    if ("selectionchange" === l || "keyup" === l || "keydown" === l) return $t(qt)
                }

                function oa(l, e) {
                    if ("click" === l) return $t(e)
                }

                function Ea(l, e) {
                    if ("input" === l || "change" === l) return $t(e)
                }
                var Na = "function" === typeof Object.is ? Object.is : function(l, e) {
                        return l === e && (0 !== l || 1 / l === 1 / e) || l !== l && e !== e
                    },
                    Aa = Object.prototype.hasOwnProperty;

                function ua(l, e) {
                    if (Na(l, e)) return !0;
                    if ("object" !== typeof l || null === l || "object" !== typeof e || null === e) return !1;
                    var t = Object.keys(l),
                        a = Object.keys(e);
                    if (t.length !== a.length) return !1;
                    for (a = 0; a < t.length; a++)
                        if (!Aa.call(e, t[a]) || !Na(l[t[a]], e[t[a]])) return !1;
                    return !0
                }

                function _a(l) {
                    for (; l && l.firstChild;) l = l.firstChild;
                    return l
                }

                function sa(l, e) {
                    var t, a = _a(l);
                    for (l = 0; a;) {
                        if (3 === a.nodeType) {
                            if (t = l + a.textContent.length, l <= e && t >= e) return {
                                node: a,
                                offset: e - l
                            };
                            l = t
                        }
                        l: {
                            for (; a;) {
                                if (a.nextSibling) {
                                    a = a.nextSibling;
                                    break l
                                }
                                a = a.parentNode
                            }
                            a = void 0
                        }
                        a = _a(a)
                    }
                }

                function ca(l, e) {
                    return !(!l || !e) && (l === e || (!l || 3 !== l.nodeType) && (e && 3 === e.nodeType ? ca(l, e.parentNode) : "contains" in l ? l.contains(e) : !!l.compareDocumentPosition && !!(16 & l.compareDocumentPosition(e))))
                }

                function Ma() {
                    for (var l = window, e = Q(); e instanceof l.HTMLIFrameElement;) {
                        try {
                            var t = "string" === typeof e.contentWindow.location.href
                        } catch (a) {
                            t = !1
                        }
                        if (!t) break;
                        e = Q((l = e.contentWindow).document)
                    }
                    return e
                }

                function fa(l) {
                    var e = l && l.nodeName && l.nodeName.toLowerCase();
                    return e && ("input" === e && ("text" === l.type || "search" === l.type || "tel" === l.type || "url" === l.type || "password" === l.type) || "textarea" === e || "true" === l.contentEditable)
                }
                var da = u && "documentMode" in document && 11 >= document.documentMode,
                    pa = null,
                    Oa = null,
                    Ra = null,
                    ma = !1;

                function ha(l, e, t) {
                    var a = t.window === t ? t.document : 9 === t.nodeType ? t : t.ownerDocument;
                    ma || null == pa || pa !== Q(a) || ("selectionStart" in (a = pa) && fa(a) ? a = {
                        start: a.selectionStart,
                        end: a.selectionEnd
                    } : a = {
                        anchorNode: (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection()).anchorNode,
                        anchorOffset: a.anchorOffset,
                        focusNode: a.focusNode,
                        focusOffset: a.focusOffset
                    }, Ra && ua(Ra, a) || (Ra = a, 0 < (a = wa(Oa, "onSelect")).length && (e = new _t("onSelect", "select", null, e, t), l.push({
                        event: e,
                        listeners: a
                    }), e.target = pa)))
                }
                Pe("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "), 0), Pe("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "), 1), Pe(Fe, 2);
                for (var ga = "change selectionchange textInput compositionstart compositionend compositionupdate".split(" "), La = 0; La < ga.length; La++) Ge.set(ga[La], 0);
                A("onMouseEnter", ["mouseout", "mouseover"]), A("onMouseLeave", ["mouseout", "mouseover"]), A("onPointerEnter", ["pointerout", "pointerover"]), A("onPointerLeave", ["pointerout", "pointerover"]), N("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), N("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), N("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), N("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), N("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), N("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
                var ya = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
                    Ta = new Set("cancel close invalid load scroll toggle".split(" ").concat(ya));

                function Ia(l, e, t) {
                    var a = l.type || "unknown-event";
                    l.currentTarget = t,
                        function(l, e, t, a, n, r, o, E, N) {
                            if (ql.apply(this, arguments), Vl) {
                                if (!Vl) throw Error(i(198));
                                var A = zl;
                                Vl = !1, zl = null, Zl || (Zl = !0, jl = A)
                            }
                        }(a, e, void 0, l), l.currentTarget = null
                }

                function Sa(l, e) {
                    e = 0 !== (4 & e);
                    for (var t = 0; t < l.length; t++) {
                        var a = l[t],
                            n = a.event;
                        a = a.listeners;
                        l: {
                            var r = void 0;
                            if (e)
                                for (var i = a.length - 1; 0 <= i; i--) {
                                    var o = a[i],
                                        E = o.instance,
                                        N = o.currentTarget;
                                    if (o = o.listener, E !== r && n.isPropagationStopped()) break l;
                                    Ia(n, o, N), r = E
                                } else
                                    for (i = 0; i < a.length; i++) {
                                        if (E = (o = a[i]).instance, N = o.currentTarget, o = o.listener, E !== r && n.isPropagationStopped()) break l;
                                        Ia(n, o, N), r = E
                                    }
                        }
                    }
                    if (Zl) throw l = jl, Zl = !1, jl = null, l
                }

                function ba(l, e) {
                    var t = rn(e),
                        a = l + "__bubble";
                    t.has(a) || (Ga(e, l, 2, !1), t.add(a))
                }
                var Ba = "_reactListening" + Math.random().toString(36).slice(2);

                function va(l) {
                    l[Ba] || (l[Ba] = !0, o.forEach((function(e) {
                        Ta.has(e) || Ua(e, !1, l, null), Ua(e, !0, l, null)
                    })))
                }

                function Ua(l, e, t, a) {
                    var n = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : 0,
                        r = t;
                    if ("selectionchange" === l && 9 !== t.nodeType && (r = t.ownerDocument), null !== a && !e && Ta.has(l)) {
                        if ("scroll" !== l) return;
                        n |= 2, r = a
                    }
                    var i = rn(r),
                        o = l + "__" + (e ? "capture" : "bubble");
                    i.has(o) || (e && (n |= 4), Ga(r, l, n, e), i.add(o))
                }

                function Ga(l, e, t, a) {
                    var n = Ge.get(e);
                    switch (void 0 === n ? 2 : n) {
                        case 0:
                            n = Ye;
                            break;
                        case 1:
                            n = $e;
                            break;
                        default:
                            n = Qe
                    }
                    t = n.bind(null, e, t, l), n = void 0, !Dl || "touchstart" !== e && "touchmove" !== e && "wheel" !== e || (n = !0), a ? void 0 !== n ? l.addEventListener(e, t, {
                        capture: !0,
                        passive: n
                    }) : l.addEventListener(e, t, !0) : void 0 !== n ? l.addEventListener(e, t, {
                        passive: n
                    }) : l.addEventListener(e, t, !1)
                }

                function Fa(l, e, t, a, n) {
                    var r = a;
                    if (0 === (1 & e) && 0 === (2 & e) && null !== a) l: for (;;) {
                        if (null === a) return;
                        var i = a.tag;
                        if (3 === i || 4 === i) {
                            var o = a.stateNode.containerInfo;
                            if (o === n || 8 === o.nodeType && o.parentNode === n) break;
                            if (4 === i)
                                for (i = a.return; null !== i;) {
                                    var E = i.tag;
                                    if ((3 === E || 4 === E) && ((E = i.stateNode.containerInfo) === n || 8 === E.nodeType && E.parentNode === n)) return;
                                    i = i.return
                                }
                            for (; null !== o;) {
                                if (null === (i = en(o))) return;
                                if (5 === (E = i.tag) || 6 === E) {
                                    a = r = i;
                                    continue l
                                }
                                o = o.parentNode
                            }
                        }
                        a = a.return
                    }! function(l, e, t) {
                        if (Hl) return l(e, t);
                        Hl = !0;
                        try {
                            wl(l, e, t)
                        } finally {
                            Hl = !1, Cl()
                        }
                    }((function() {
                        var a = r,
                            n = Tl(t),
                            i = [];
                        l: {
                            var o = Ue.get(l);
                            if (void 0 !== o) {
                                var E = _t,
                                    N = l;
                                switch (l) {
                                    case "keypress":
                                        if (0 === nt(t)) break l;
                                    case "keydown":
                                    case "keyup":
                                        E = bt;
                                        break;
                                    case "focusin":
                                        N = "focus", E = pt;
                                        break;
                                    case "focusout":
                                        N = "blur", E = pt;
                                        break;
                                    case "beforeblur":
                                    case "afterblur":
                                        E = pt;
                                        break;
                                    case "click":
                                        if (2 === t.button) break l;
                                    case "auxclick":
                                    case "dblclick":
                                    case "mousedown":
                                    case "mousemove":
                                    case "mouseup":
                                    case "mouseout":
                                    case "mouseover":
                                    case "contextmenu":
                                        E = ft;
                                        break;
                                    case "drag":
                                    case "dragend":
                                    case "dragenter":
                                    case "dragexit":
                                    case "dragleave":
                                    case "dragover":
                                    case "dragstart":
                                    case "drop":
                                        E = dt;
                                        break;
                                    case "touchcancel":
                                    case "touchend":
                                    case "touchmove":
                                    case "touchstart":
                                        E = vt;
                                        break;
                                    case Se:
                                    case be:
                                    case Be:
                                        E = Ot;
                                        break;
                                    case ve:
                                        E = Ut;
                                        break;
                                    case "scroll":
                                        E = ct;
                                        break;
                                    case "wheel":
                                        E = Ft;
                                        break;
                                    case "copy":
                                    case "cut":
                                    case "paste":
                                        E = mt;
                                        break;
                                    case "gotpointercapture":
                                    case "lostpointercapture":
                                    case "pointercancel":
                                    case "pointerdown":
                                    case "pointermove":
                                    case "pointerout":
                                    case "pointerover":
                                    case "pointerup":
                                        E = Bt
                                }
                                var A = 0 !== (4 & e),
                                    u = !A && "scroll" === l,
                                    _ = A ? null !== o ? o + "Capture" : null : o;
                                A = [];
                                for (var s, c = a; null !== c;) {
                                    var M = (s = c).stateNode;
                                    if (5 === s.tag && null !== M && (s = M, null !== _ && (null != (M = xl(c, _)) && A.push(Pa(c, M, s)))), u) break;
                                    c = c.return
                                }
                                0 < A.length && (o = new E(o, N, null, t, n), i.push({
                                    event: o,
                                    listeners: A
                                }))
                            }
                        }
                        if (0 === (7 & e)) {
                            if (E = "mouseout" === l || "pointerout" === l, (!(o = "mouseover" === l || "pointerover" === l) || 0 !== (16 & e) || !(N = t.relatedTarget || t.fromElement) || !en(N) && !N[Xa]) && (E || o) && (o = n.window === n ? n : (o = n.ownerDocument) ? o.defaultView || o.parentWindow : window, E ? (E = a, null !== (N = (N = t.relatedTarget || t.toElement) ? en(N) : null) && (N !== (u = Yl(N)) || 5 !== N.tag && 6 !== N.tag) && (N = null)) : (E = null, N = a), E !== N)) {
                                if (A = ft, M = "onMouseLeave", _ = "onMouseEnter", c = "mouse", "pointerout" !== l && "pointerover" !== l || (A = Bt, M = "onPointerLeave", _ = "onPointerEnter", c = "pointer"), u = null == E ? o : an(E), s = null == N ? o : an(N), (o = new A(M, c + "leave", E, t, n)).target = u, o.relatedTarget = s, M = null, en(n) === a && ((A = new A(_, c + "enter", N, t, n)).target = s, A.relatedTarget = u, M = A), u = M, E && N) l: {
                                    for (_ = N, c = 0, s = A = E; s; s = ka(s)) c++;
                                    for (s = 0, M = _; M; M = ka(M)) s++;
                                    for (; 0 < c - s;) A = ka(A),
                                    c--;
                                    for (; 0 < s - c;) _ = ka(_),
                                    s--;
                                    for (; c--;) {
                                        if (A === _ || null !== _ && A === _.alternate) break l;
                                        A = ka(A), _ = ka(_)
                                    }
                                    A = null
                                }
                                else A = null;
                                null !== E && Ha(i, o, E, A, !1), null !== N && null !== u && Ha(i, u, N, A, !0)
                            }
                            if ("select" === (E = (o = a ? an(a) : window).nodeName && o.nodeName.toLowerCase()) || "input" === E && "file" === o.type) var f = Qt;
                            else if (Zt(o))
                                if (Xt) f = Ea;
                                else {
                                    f = ia;
                                    var d = ra
                                }
                            else(E = o.nodeName) && "input" === E.toLowerCase() && ("checkbox" === o.type || "radio" === o.type) && (f = oa);
                            switch (f && (f = f(l, a)) ? jt(i, f, t, n) : (d && d(l, o, a), "focusout" === l && (d = o._wrapperState) && d.controlled && "number" === o.type && nl(o, "number", o.value)), d = a ? an(a) : window, l) {
                                case "focusin":
                                    (Zt(d) || "true" === d.contentEditable) && (pa = d, Oa = a, Ra = null);
                                    break;
                                case "focusout":
                                    Ra = Oa = pa = null;
                                    break;
                                case "mousedown":
                                    ma = !0;
                                    break;
                                case "contextmenu":
                                case "mouseup":
                                case "dragend":
                                    ma = !1, ha(i, t, n);
                                    break;
                                case "selectionchange":
                                    if (da) break;
                                case "keydown":
                                case "keyup":
                                    ha(i, t, n)
                            }
                            var p;
                            if (wt) l: {
                                switch (l) {
                                    case "compositionstart":
                                        var O = "onCompositionStart";
                                        break l;
                                    case "compositionend":
                                        O = "onCompositionEnd";
                                        break l;
                                    case "compositionupdate":
                                        O = "onCompositionUpdate";
                                        break l
                                }
                                O = void 0
                            }
                            else Vt ? Kt(l, t) && (O = "onCompositionEnd") : "keydown" === l && 229 === t.keyCode && (O = "onCompositionStart");
                            O && (Ct && "ko" !== t.locale && (Vt || "onCompositionStart" !== O ? "onCompositionEnd" === O && Vt && (p = at()) : (et = "value" in (lt = n) ? lt.value : lt.textContent, Vt = !0)), 0 < (d = wa(a, O)).length && (O = new ht(O, l, null, t, n), i.push({
                                event: O,
                                listeners: d
                            }), p ? O.data = p : null !== (p = Wt(t)) && (O.data = p))), (p = Ht ? function(l, e) {
                                switch (l) {
                                    case "compositionend":
                                        return Wt(e);
                                    case "keypress":
                                        return 32 !== e.which ? null : (Dt = !0, xt);
                                    case "textInput":
                                        return (l = e.data) === xt && Dt ? null : l;
                                    default:
                                        return null
                                }
                            }(l, t) : function(l, e) {
                                if (Vt) return "compositionend" === l || !wt && Kt(l, e) ? (l = at(), tt = et = lt = null, Vt = !1, l) : null;
                                switch (l) {
                                    case "paste":
                                    default:
                                        return null;
                                    case "keypress":
                                        if (!(e.ctrlKey || e.altKey || e.metaKey) || e.ctrlKey && e.altKey) {
                                            if (e.char && 1 < e.char.length) return e.char;
                                            if (e.which) return String.fromCharCode(e.which)
                                        }
                                        return null;
                                    case "compositionend":
                                        return Ct && "ko" !== e.locale ? null : e.data
                                }
                            }(l, t)) && (0 < (a = wa(a, "onBeforeInput")).length && (n = new ht("onBeforeInput", "beforeinput", null, t, n), i.push({
                                event: n,
                                listeners: a
                            }), n.data = p))
                        }
                        Sa(i, e)
                    }))
                }

                function Pa(l, e, t) {
                    return {
                        instance: l,
                        listener: e,
                        currentTarget: t
                    }
                }

                function wa(l, e) {
                    for (var t = e + "Capture", a = []; null !== l;) {
                        var n = l,
                            r = n.stateNode;
                        5 === n.tag && null !== r && (n = r, null != (r = xl(l, t)) && a.unshift(Pa(l, r, n)), null != (r = xl(l, e)) && a.push(Pa(l, r, n))), l = l.return
                    }
                    return a
                }

                function ka(l) {
                    if (null === l) return null;
                    do {
                        l = l.return
                    } while (l && 5 !== l.tag);
                    return l || null
                }

                function Ha(l, e, t, a, n) {
                    for (var r = e._reactName, i = []; null !== t && t !== a;) {
                        var o = t,
                            E = o.alternate,
                            N = o.stateNode;
                        if (null !== E && E === a) break;
                        5 === o.tag && null !== N && (o = N, n ? null != (E = xl(t, r)) && i.unshift(Pa(t, E, o)) : n || null != (E = xl(t, r)) && i.push(Pa(t, E, o))), t = t.return
                    }
                    0 !== i.length && l.push({
                        event: e,
                        listeners: i
                    })
                }

                function Ca() {}
                var xa = null,
                    Da = null;

                function Ka(l, e) {
                    switch (l) {
                        case "button":
                        case "input":
                        case "select":
                        case "textarea":
                            return !!e.autoFocus
                    }
                    return !1
                }

                function Wa(l, e) {
                    return "textarea" === l || "option" === l || "noscript" === l || "string" === typeof e.children || "number" === typeof e.children || "object" === typeof e.dangerouslySetInnerHTML && null !== e.dangerouslySetInnerHTML && null != e.dangerouslySetInnerHTML.__html
                }
                var Va = "function" === typeof setTimeout ? setTimeout : void 0,
                    za = "function" === typeof clearTimeout ? clearTimeout : void 0;

                function Za(l) {
                    1 === l.nodeType ? l.textContent = "" : 9 === l.nodeType && (null != (l = l.body) && (l.textContent = ""))
                }

                function ja(l) {
                    for (; null != l; l = l.nextSibling) {
                        var e = l.nodeType;
                        if (1 === e || 3 === e) break
                    }
                    return l
                }

                function Ja(l) {
                    l = l.previousSibling;
                    for (var e = 0; l;) {
                        if (8 === l.nodeType) {
                            var t = l.data;
                            if ("$" === t || "$!" === t || "$?" === t) {
                                if (0 === e) return l;
                                e--
                            } else "/$" === t && e++
                        }
                        l = l.previousSibling
                    }
                    return null
                }
                var qa = 0;
                var Ya = Math.random().toString(36).slice(2),
                    $a = "__reactFiber$" + Ya,
                    Qa = "__reactProps$" + Ya,
                    Xa = "__reactContainer$" + Ya,
                    ln = "__reactEvents$" + Ya;

                function en(l) {
                    var e = l[$a];
                    if (e) return e;
                    for (var t = l.parentNode; t;) {
                        if (e = t[Xa] || t[$a]) {
                            if (t = e.alternate, null !== e.child || null !== t && null !== t.child)
                                for (l = Ja(l); null !== l;) {
                                    if (t = l[$a]) return t;
                                    l = Ja(l)
                                }
                            return e
                        }
                        t = (l = t).parentNode
                    }
                    return null
                }

                function tn(l) {
                    return !(l = l[$a] || l[Xa]) || 5 !== l.tag && 6 !== l.tag && 13 !== l.tag && 3 !== l.tag ? null : l
                }

                function an(l) {
                    if (5 === l.tag || 6 === l.tag) return l.stateNode;
                    throw Error(i(33))
                }

                function nn(l) {
                    return l[Qa] || null
                }

                function rn(l) {
                    var e = l[ln];
                    return void 0 === e && (e = l[ln] = new Set), e
                }
                var on = [],
                    En = -1;

                function Nn(l) {
                    return {
                        current: l
                    }
                }

                function An(l) {
                    0 > En || (l.current = on[En], on[En] = null, En--)
                }

                function un(l, e) {
                    En++, on[En] = l.current, l.current = e
                }
                var _n = {},
                    sn = Nn(_n),
                    cn = Nn(!1),
                    Mn = _n;

                function fn(l, e) {
                    var t = l.type.contextTypes;
                    if (!t) return _n;
                    var a = l.stateNode;
                    if (a && a.__reactInternalMemoizedUnmaskedChildContext === e) return a.__reactInternalMemoizedMaskedChildContext;
                    var n, r = {};
                    for (n in t) r[n] = e[n];
                    return a && ((l = l.stateNode).__reactInternalMemoizedUnmaskedChildContext = e, l.__reactInternalMemoizedMaskedChildContext = r), r
                }

                function dn(l) {
                    return null !== (l = l.childContextTypes) && void 0 !== l
                }

                function pn() {
                    An(cn), An(sn)
                }

                function On(l, e, t) {
                    if (sn.current !== _n) throw Error(i(168));
                    un(sn, e), un(cn, t)
                }

                function Rn(l, e, t) {
                    var a = l.stateNode;
                    if (l = e.childContextTypes, "function" !== typeof a.getChildContext) return t;
                    for (var r in a = a.getChildContext())
                        if (!(r in l)) throw Error(i(108, j(e) || "Unknown", r));
                    return n({}, t, a)
                }

                function mn(l) {
                    return l = (l = l.stateNode) && l.__reactInternalMemoizedMergedChildContext || _n, Mn = sn.current, un(sn, l), un(cn, cn.current), !0
                }

                function hn(l, e, t) {
                    var a = l.stateNode;
                    if (!a) throw Error(i(169));
                    t ? (l = Rn(l, e, Mn), a.__reactInternalMemoizedMergedChildContext = l, An(cn), An(sn), un(sn, l)) : An(cn), un(cn, t)
                }
                var gn = null,
                    Ln = null,
                    yn = r.unstable_runWithPriority,
                    Tn = r.unstable_scheduleCallback,
                    In = r.unstable_cancelCallback,
                    Sn = r.unstable_shouldYield,
                    bn = r.unstable_requestPaint,
                    Bn = r.unstable_now,
                    vn = r.unstable_getCurrentPriorityLevel,
                    Un = r.unstable_ImmediatePriority,
                    Gn = r.unstable_UserBlockingPriority,
                    Fn = r.unstable_NormalPriority,
                    Pn = r.unstable_LowPriority,
                    wn = r.unstable_IdlePriority,
                    kn = {},
                    Hn = void 0 !== bn ? bn : function() {},
                    Cn = null,
                    xn = null,
                    Dn = !1,
                    Kn = Bn(),
                    Wn = 1e4 > Kn ? Bn : function() {
                        return Bn() - Kn
                    };

                function Vn() {
                    switch (vn()) {
                        case Un:
                            return 99;
                        case Gn:
                            return 98;
                        case Fn:
                            return 97;
                        case Pn:
                            return 96;
                        case wn:
                            return 95;
                        default:
                            throw Error(i(332))
                    }
                }

                function zn(l) {
                    switch (l) {
                        case 99:
                            return Un;
                        case 98:
                            return Gn;
                        case 97:
                            return Fn;
                        case 96:
                            return Pn;
                        case 95:
                            return wn;
                        default:
                            throw Error(i(332))
                    }
                }

                function Zn(l, e) {
                    return l = zn(l), yn(l, e)
                }

                function jn(l, e, t) {
                    return l = zn(l), Tn(l, e, t)
                }

                function Jn() {
                    if (null !== xn) {
                        var l = xn;
                        xn = null, In(l)
                    }
                    qn()
                }

                function qn() {
                    if (!Dn && null !== Cn) {
                        Dn = !0;
                        var l = 0;
                        try {
                            var e = Cn;
                            Zn(99, (function() {
                                for (; l < e.length; l++) {
                                    var t = e[l];
                                    do {
                                        t = t(!0)
                                    } while (null !== t)
                                }
                            })), Cn = null
                        } catch (t) {
                            throw null !== Cn && (Cn = Cn.slice(l + 1)), Tn(Un, Jn), t
                        } finally {
                            Dn = !1
                        }
                    }
                }
                var Yn = m.ReactCurrentBatchConfig;

                function $n(l, e) {
                    if (l && l.defaultProps) {
                        for (var t in e = n({}, e), l = l.defaultProps) void 0 === e[t] && (e[t] = l[t]);
                        return e
                    }
                    return e
                }
                var Qn = Nn(null),
                    Xn = null,
                    lr = null,
                    er = null;

                function tr() {
                    er = lr = Xn = null
                }

                function ar(l) {
                    var e = Qn.current;
                    An(Qn), l.type._context._currentValue = e
                }

                function nr(l, e) {
                    for (; null !== l;) {
                        var t = l.alternate;
                        if ((l.childLanes & e) === e) {
                            if (null === t || (t.childLanes & e) === e) break;
                            t.childLanes |= e
                        } else l.childLanes |= e, null !== t && (t.childLanes |= e);
                        l = l.return
                    }
                }

                function rr(l, e) {
                    Xn = l, er = lr = null, null !== (l = l.dependencies) && null !== l.firstContext && (0 !== (l.lanes & e) && (wi = !0), l.firstContext = null)
                }

                function ir(l, e) {
                    if (er !== l && !1 !== e && 0 !== e)
                        if ("number" === typeof e && 1073741823 !== e || (er = l, e = 1073741823), e = {
                                context: l,
                                observedBits: e,
                                next: null
                            }, null === lr) {
                            if (null === Xn) throw Error(i(308));
                            lr = e, Xn.dependencies = {
                                lanes: 0,
                                firstContext: e,
                                responders: null
                            }
                        } else lr = lr.next = e;
                    return l._currentValue
                }
                var or = !1;

                function Er(l) {
                    l.updateQueue = {
                        baseState: l.memoizedState,
                        firstBaseUpdate: null,
                        lastBaseUpdate: null,
                        shared: {
                            pending: null
                        },
                        effects: null
                    }
                }

                function Nr(l, e) {
                    l = l.updateQueue, e.updateQueue === l && (e.updateQueue = {
                        baseState: l.baseState,
                        firstBaseUpdate: l.firstBaseUpdate,
                        lastBaseUpdate: l.lastBaseUpdate,
                        shared: l.shared,
                        effects: l.effects
                    })
                }

                function Ar(l, e) {
                    return {
                        eventTime: l,
                        lane: e,
                        tag: 0,
                        payload: null,
                        callback: null,
                        next: null
                    }
                }

                function ur(l, e) {
                    if (null !== (l = l.updateQueue)) {
                        var t = (l = l.shared).pending;
                        null === t ? e.next = e : (e.next = t.next, t.next = e), l.pending = e
                    }
                }

                function _r(l, e) {
                    var t = l.updateQueue,
                        a = l.alternate;
                    if (null !== a && t === (a = a.updateQueue)) {
                        var n = null,
                            r = null;
                        if (null !== (t = t.firstBaseUpdate)) {
                            do {
                                var i = {
                                    eventTime: t.eventTime,
                                    lane: t.lane,
                                    tag: t.tag,
                                    payload: t.payload,
                                    callback: t.callback,
                                    next: null
                                };
                                null === r ? n = r = i : r = r.next = i, t = t.next
                            } while (null !== t);
                            null === r ? n = r = e : r = r.next = e
                        } else n = r = e;
                        return t = {
                            baseState: a.baseState,
                            firstBaseUpdate: n,
                            lastBaseUpdate: r,
                            shared: a.shared,
                            effects: a.effects
                        }, void(l.updateQueue = t)
                    }
                    null === (l = t.lastBaseUpdate) ? t.firstBaseUpdate = e : l.next = e, t.lastBaseUpdate = e
                }

                function sr(l, e, t, a) {
                    var r = l.updateQueue;
                    or = !1;
                    var i = r.firstBaseUpdate,
                        o = r.lastBaseUpdate,
                        E = r.shared.pending;
                    if (null !== E) {
                        r.shared.pending = null;
                        var N = E,
                            A = N.next;
                        N.next = null, null === o ? i = A : o.next = A, o = N;
                        var u = l.alternate;
                        if (null !== u) {
                            var _ = (u = u.updateQueue).lastBaseUpdate;
                            _ !== o && (null === _ ? u.firstBaseUpdate = A : _.next = A, u.lastBaseUpdate = N)
                        }
                    }
                    if (null !== i) {
                        for (_ = r.baseState, o = 0, u = A = N = null;;) {
                            E = i.lane;
                            var s = i.eventTime;
                            if ((a & E) === E) {
                                null !== u && (u = u.next = {
                                    eventTime: s,
                                    lane: 0,
                                    tag: i.tag,
                                    payload: i.payload,
                                    callback: i.callback,
                                    next: null
                                });
                                l: {
                                    var c = l,
                                        M = i;
                                    switch (E = e, s = t, M.tag) {
                                        case 1:
                                            if ("function" === typeof(c = M.payload)) {
                                                _ = c.call(s, _, E);
                                                break l
                                            }
                                            _ = c;
                                            break l;
                                        case 3:
                                            c.flags = -4097 & c.flags | 64;
                                        case 0:
                                            if (null === (E = "function" === typeof(c = M.payload) ? c.call(s, _, E) : c) || void 0 === E) break l;
                                            _ = n({}, _, E);
                                            break l;
                                        case 2:
                                            or = !0
                                    }
                                }
                                null !== i.callback && (l.flags |= 32, null === (E = r.effects) ? r.effects = [i] : E.push(i))
                            } else s = {
                                eventTime: s,
                                lane: E,
                                tag: i.tag,
                                payload: i.payload,
                                callback: i.callback,
                                next: null
                            }, null === u ? (A = u = s, N = _) : u = u.next = s, o |= E;
                            if (null === (i = i.next)) {
                                if (null === (E = r.shared.pending)) break;
                                i = E.next, E.next = null, r.lastBaseUpdate = E, r.shared.pending = null
                            }
                        }
                        null === u && (N = _), r.baseState = N, r.firstBaseUpdate = A, r.lastBaseUpdate = u, Do |= o, l.lanes = o, l.memoizedState = _
                    }
                }

                function cr(l, e, t) {
                    if (l = e.effects, e.effects = null, null !== l)
                        for (e = 0; e < l.length; e++) {
                            var a = l[e],
                                n = a.callback;
                            if (null !== n) {
                                if (a.callback = null, a = t, "function" !== typeof n) throw Error(i(191, n));
                                n.call(a)
                            }
                        }
                }
                var Mr = (new a.Component).refs;

                function fr(l, e, t, a) {
                    t = null === (t = t(a, e = l.memoizedState)) || void 0 === t ? e : n({}, e, t), l.memoizedState = t, 0 === l.lanes && (l.updateQueue.baseState = t)
                }
                var dr = {
                    isMounted: function(l) {
                        return !!(l = l._reactInternals) && Yl(l) === l
                    },
                    enqueueSetState: function(l, e, t) {
                        l = l._reactInternals;
                        var a = _E(),
                            n = sE(l),
                            r = Ar(a, n);
                        r.payload = e, void 0 !== t && null !== t && (r.callback = t), ur(l, r), cE(l, n, a)
                    },
                    enqueueReplaceState: function(l, e, t) {
                        l = l._reactInternals;
                        var a = _E(),
                            n = sE(l),
                            r = Ar(a, n);
                        r.tag = 1, r.payload = e, void 0 !== t && null !== t && (r.callback = t), ur(l, r), cE(l, n, a)
                    },
                    enqueueForceUpdate: function(l, e) {
                        l = l._reactInternals;
                        var t = _E(),
                            a = sE(l),
                            n = Ar(t, a);
                        n.tag = 2, void 0 !== e && null !== e && (n.callback = e), ur(l, n), cE(l, a, t)
                    }
                };

                function pr(l, e, t, a, n, r, i) {
                    return "function" === typeof(l = l.stateNode).shouldComponentUpdate ? l.shouldComponentUpdate(a, r, i) : !e.prototype || !e.prototype.isPureReactComponent || (!ua(t, a) || !ua(n, r))
                }

                function Or(l, e, t) {
                    var a = !1,
                        n = _n,
                        r = e.contextType;
                    return "object" === typeof r && null !== r ? r = ir(r) : (n = dn(e) ? Mn : sn.current, r = (a = null !== (a = e.contextTypes) && void 0 !== a) ? fn(l, n) : _n), e = new e(t, r), l.memoizedState = null !== e.state && void 0 !== e.state ? e.state : null, e.updater = dr, l.stateNode = e, e._reactInternals = l, a && ((l = l.stateNode).__reactInternalMemoizedUnmaskedChildContext = n, l.__reactInternalMemoizedMaskedChildContext = r), e
                }

                function Rr(l, e, t, a) {
                    l = e.state, "function" === typeof e.componentWillReceiveProps && e.componentWillReceiveProps(t, a), "function" === typeof e.UNSAFE_componentWillReceiveProps && e.UNSAFE_componentWillReceiveProps(t, a), e.state !== l && dr.enqueueReplaceState(e, e.state, null)
                }

                function mr(l, e, t, a) {
                    var n = l.stateNode;
                    n.props = t, n.state = l.memoizedState, n.refs = Mr, Er(l);
                    var r = e.contextType;
                    "object" === typeof r && null !== r ? n.context = ir(r) : (r = dn(e) ? Mn : sn.current, n.context = fn(l, r)), sr(l, t, n, a), n.state = l.memoizedState, "function" === typeof(r = e.getDerivedStateFromProps) && (fr(l, e, r, t), n.state = l.memoizedState), "function" === typeof e.getDerivedStateFromProps || "function" === typeof n.getSnapshotBeforeUpdate || "function" !== typeof n.UNSAFE_componentWillMount && "function" !== typeof n.componentWillMount || (e = n.state, "function" === typeof n.componentWillMount && n.componentWillMount(), "function" === typeof n.UNSAFE_componentWillMount && n.UNSAFE_componentWillMount(), e !== n.state && dr.enqueueReplaceState(n, n.state, null), sr(l, t, n, a), n.state = l.memoizedState), "function" === typeof n.componentDidMount && (l.flags |= 4)
                }
                var hr = Array.isArray;

                function gr(l, e, t) {
                    if (null !== (l = t.ref) && "function" !== typeof l && "object" !== typeof l) {
                        if (t._owner) {
                            if (t = t._owner) {
                                if (1 !== t.tag) throw Error(i(309));
                                var a = t.stateNode
                            }
                            if (!a) throw Error(i(147, l));
                            var n = "" + l;
                            return null !== e && null !== e.ref && "function" === typeof e.ref && e.ref._stringRef === n ? e.ref : (e = function(l) {
                                var e = a.refs;
                                e === Mr && (e = a.refs = {}), null === l ? delete e[n] : e[n] = l
                            }, e._stringRef = n, e)
                        }
                        if ("string" !== typeof l) throw Error(i(284));
                        if (!t._owner) throw Error(i(290, l))
                    }
                    return l
                }

                function Lr(l, e) {
                    if ("textarea" !== l.type) throw Error(i(31, "[object Object]" === Object.prototype.toString.call(e) ? "object with keys {" + Object.keys(e).join(", ") + "}" : e))
                }

                function yr(l) {
                    function e(e, t) {
                        if (l) {
                            var a = e.lastEffect;
                            null !== a ? (a.nextEffect = t, e.lastEffect = t) : e.firstEffect = e.lastEffect = t, t.nextEffect = null, t.flags = 8
                        }
                    }

                    function t(t, a) {
                        if (!l) return null;
                        for (; null !== a;) e(t, a), a = a.sibling;
                        return null
                    }

                    function a(l, e) {
                        for (l = new Map; null !== e;) null !== e.key ? l.set(e.key, e) : l.set(e.index, e), e = e.sibling;
                        return l
                    }

                    function n(l, e) {
                        return (l = ZE(l, e)).index = 0, l.sibling = null, l
                    }

                    function r(e, t, a) {
                        return e.index = a, l ? null !== (a = e.alternate) ? (a = a.index) < t ? (e.flags = 2, t) : a : (e.flags = 2, t) : t
                    }

                    function o(e) {
                        return l && null === e.alternate && (e.flags = 2), e
                    }

                    function E(l, e, t, a) {
                        return null === e || 6 !== e.tag ? ((e = YE(t, l.mode, a)).return = l, e) : ((e = n(e, t)).return = l, e)
                    }

                    function N(l, e, t, a) {
                        return null !== e && e.elementType === t.type ? ((a = n(e, t.props)).ref = gr(l, e, t), a.return = l, a) : ((a = jE(t.type, t.key, t.props, null, l.mode, a)).ref = gr(l, e, t), a.return = l, a)
                    }

                    function A(l, e, t, a) {
                        return null === e || 4 !== e.tag || e.stateNode.containerInfo !== t.containerInfo || e.stateNode.implementation !== t.implementation ? ((e = $E(t, l.mode, a)).return = l, e) : ((e = n(e, t.children || [])).return = l, e)
                    }

                    function u(l, e, t, a, r) {
                        return null === e || 7 !== e.tag ? ((e = JE(t, l.mode, a, r)).return = l, e) : ((e = n(e, t)).return = l, e)
                    }

                    function _(l, e, t) {
                        if ("string" === typeof e || "number" === typeof e) return (e = YE("" + e, l.mode, t)).return = l, e;
                        if ("object" === typeof e && null !== e) {
                            switch (e.$$typeof) {
                                case h:
                                    return (t = jE(e.type, e.key, e.props, null, l.mode, t)).ref = gr(l, null, e), t.return = l, t;
                                case g:
                                    return (e = $E(e, l.mode, t)).return = l, e
                            }
                            if (hr(e) || K(e)) return (e = JE(e, l.mode, t, null)).return = l, e;
                            Lr(l, e)
                        }
                        return null
                    }

                    function s(l, e, t, a) {
                        var n = null !== e ? e.key : null;
                        if ("string" === typeof t || "number" === typeof t) return null !== n ? null : E(l, e, "" + t, a);
                        if ("object" === typeof t && null !== t) {
                            switch (t.$$typeof) {
                                case h:
                                    return t.key === n ? t.type === L ? u(l, e, t.props.children, a, n) : N(l, e, t, a) : null;
                                case g:
                                    return t.key === n ? A(l, e, t, a) : null
                            }
                            if (hr(t) || K(t)) return null !== n ? null : u(l, e, t, a, null);
                            Lr(l, t)
                        }
                        return null
                    }

                    function c(l, e, t, a, n) {
                        if ("string" === typeof a || "number" === typeof a) return E(e, l = l.get(t) || null, "" + a, n);
                        if ("object" === typeof a && null !== a) {
                            switch (a.$$typeof) {
                                case h:
                                    return l = l.get(null === a.key ? t : a.key) || null, a.type === L ? u(e, l, a.props.children, n, a.key) : N(e, l, a, n);
                                case g:
                                    return A(e, l = l.get(null === a.key ? t : a.key) || null, a, n)
                            }
                            if (hr(a) || K(a)) return u(e, l = l.get(t) || null, a, n, null);
                            Lr(e, a)
                        }
                        return null
                    }

                    function M(n, i, o, E) {
                        for (var N = null, A = null, u = i, M = i = 0, f = null; null !== u && M < o.length; M++) {
                            u.index > M ? (f = u, u = null) : f = u.sibling;
                            var d = s(n, u, o[M], E);
                            if (null === d) {
                                null === u && (u = f);
                                break
                            }
                            l && u && null === d.alternate && e(n, u), i = r(d, i, M), null === A ? N = d : A.sibling = d, A = d, u = f
                        }
                        if (M === o.length) return t(n, u), N;
                        if (null === u) {
                            for (; M < o.length; M++) null !== (u = _(n, o[M], E)) && (i = r(u, i, M), null === A ? N = u : A.sibling = u, A = u);
                            return N
                        }
                        for (u = a(n, u); M < o.length; M++) null !== (f = c(u, n, M, o[M], E)) && (l && null !== f.alternate && u.delete(null === f.key ? M : f.key), i = r(f, i, M), null === A ? N = f : A.sibling = f, A = f);
                        return l && u.forEach((function(l) {
                            return e(n, l)
                        })), N
                    }

                    function f(n, o, E, N) {
                        var A = K(E);
                        if ("function" !== typeof A) throw Error(i(150));
                        if (null == (E = A.call(E))) throw Error(i(151));
                        for (var u = A = null, M = o, f = o = 0, d = null, p = E.next(); null !== M && !p.done; f++, p = E.next()) {
                            M.index > f ? (d = M, M = null) : d = M.sibling;
                            var O = s(n, M, p.value, N);
                            if (null === O) {
                                null === M && (M = d);
                                break
                            }
                            l && M && null === O.alternate && e(n, M), o = r(O, o, f), null === u ? A = O : u.sibling = O, u = O, M = d
                        }
                        if (p.done) return t(n, M), A;
                        if (null === M) {
                            for (; !p.done; f++, p = E.next()) null !== (p = _(n, p.value, N)) && (o = r(p, o, f), null === u ? A = p : u.sibling = p, u = p);
                            return A
                        }
                        for (M = a(n, M); !p.done; f++, p = E.next()) null !== (p = c(M, n, f, p.value, N)) && (l && null !== p.alternate && M.delete(null === p.key ? f : p.key), o = r(p, o, f), null === u ? A = p : u.sibling = p, u = p);
                        return l && M.forEach((function(l) {
                            return e(n, l)
                        })), A
                    }
                    return function(l, a, r, E) {
                        var N = "object" === typeof r && null !== r && r.type === L && null === r.key;
                        N && (r = r.props.children);
                        var A = "object" === typeof r && null !== r;
                        if (A) switch (r.$$typeof) {
                            case h:
                                l: {
                                    for (A = r.key, N = a; null !== N;) {
                                        if (N.key === A) {
                                            if (7 === N.tag) {
                                                if (r.type === L) {
                                                    t(l, N.sibling), (a = n(N, r.props.children)).return = l, l = a;
                                                    break l
                                                }
                                            } else if (N.elementType === r.type) {
                                                t(l, N.sibling), (a = n(N, r.props)).ref = gr(l, N, r), a.return = l, l = a;
                                                break l
                                            }
                                            t(l, N);
                                            break
                                        }
                                        e(l, N), N = N.sibling
                                    }
                                    r.type === L ? ((a = JE(r.props.children, l.mode, E, r.key)).return = l, l = a) : ((E = jE(r.type, r.key, r.props, null, l.mode, E)).ref = gr(l, a, r), E.return = l, l = E)
                                }
                                return o(l);
                            case g:
                                l: {
                                    for (N = r.key; null !== a;) {
                                        if (a.key === N) {
                                            if (4 === a.tag && a.stateNode.containerInfo === r.containerInfo && a.stateNode.implementation === r.implementation) {
                                                t(l, a.sibling), (a = n(a, r.children || [])).return = l, l = a;
                                                break l
                                            }
                                            t(l, a);
                                            break
                                        }
                                        e(l, a), a = a.sibling
                                    }(a = $E(r, l.mode, E)).return = l,
                                    l = a
                                }
                                return o(l)
                        }
                        if ("string" === typeof r || "number" === typeof r) return r = "" + r, null !== a && 6 === a.tag ? (t(l, a.sibling), (a = n(a, r)).return = l, l = a) : (t(l, a), (a = YE(r, l.mode, E)).return = l, l = a), o(l);
                        if (hr(r)) return M(l, a, r, E);
                        if (K(r)) return f(l, a, r, E);
                        if (A && Lr(l, r), "undefined" === typeof r && !N) switch (l.tag) {
                            case 1:
                            case 22:
                            case 0:
                            case 11:
                            case 15:
                                throw Error(i(152, j(l.type) || "Component"))
                        }
                        return t(l, a)
                    }
                }
                var Tr = yr(!0),
                    Ir = yr(!1),
                    Sr = {},
                    br = Nn(Sr),
                    Br = Nn(Sr),
                    vr = Nn(Sr);

                function Ur(l) {
                    if (l === Sr) throw Error(i(174));
                    return l
                }

                function Gr(l, e) {
                    switch (un(vr, e), un(Br, l), un(br, Sr), l = e.nodeType) {
                        case 9:
                        case 11:
                            e = (e = e.documentElement) ? e.namespaceURI : cl(null, "");
                            break;
                        default:
                            e = cl(e = (l = 8 === l ? e.parentNode : e).namespaceURI || null, l = l.tagName)
                    }
                    An(br), un(br, e)
                }

                function Fr() {
                    An(br), An(Br), An(vr)
                }

                function Pr(l) {
                    Ur(vr.current);
                    var e = Ur(br.current),
                        t = cl(e, l.type);
                    e !== t && (un(Br, l), un(br, t))
                }

                function wr(l) {
                    Br.current === l && (An(br), An(Br))
                }
                var kr = Nn(0);

                function Hr(l) {
                    for (var e = l; null !== e;) {
                        if (13 === e.tag) {
                            var t = e.memoizedState;
                            if (null !== t && (null === (t = t.dehydrated) || "$?" === t.data || "$!" === t.data)) return e
                        } else if (19 === e.tag && void 0 !== e.memoizedProps.revealOrder) {
                            if (0 !== (64 & e.flags)) return e
                        } else if (null !== e.child) {
                            e.child.return = e, e = e.child;
                            continue
                        }
                        if (e === l) break;
                        for (; null === e.sibling;) {
                            if (null === e.return || e.return === l) return null;
                            e = e.return
                        }
                        e.sibling.return = e.return, e = e.sibling
                    }
                    return null
                }
                var Cr = null,
                    xr = null,
                    Dr = !1;

                function Kr(l, e) {
                    var t = VE(5, null, null, 0);
                    t.elementType = "DELETED", t.type = "DELETED", t.stateNode = e, t.return = l, t.flags = 8, null !== l.lastEffect ? (l.lastEffect.nextEffect = t, l.lastEffect = t) : l.firstEffect = l.lastEffect = t
                }

                function Wr(l, e) {
                    switch (l.tag) {
                        case 5:
                            var t = l.type;
                            return null !== (e = 1 !== e.nodeType || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e) && (l.stateNode = e, !0);
                        case 6:
                            return null !== (e = "" === l.pendingProps || 3 !== e.nodeType ? null : e) && (l.stateNode = e, !0);
                        default:
                            return !1
                    }
                }

                function Vr(l) {
                    if (Dr) {
                        var e = xr;
                        if (e) {
                            var t = e;
                            if (!Wr(l, e)) {
                                if (!(e = ja(t.nextSibling)) || !Wr(l, e)) return l.flags = -1025 & l.flags | 2, Dr = !1, void(Cr = l);
                                Kr(Cr, t)
                            }
                            Cr = l, xr = ja(e.firstChild)
                        } else l.flags = -1025 & l.flags | 2, Dr = !1, Cr = l
                    }
                }

                function zr(l) {
                    for (l = l.return; null !== l && 5 !== l.tag && 3 !== l.tag && 13 !== l.tag;) l = l.return;
                    Cr = l
                }

                function Zr(l) {
                    if (l !== Cr) return !1;
                    if (!Dr) return zr(l), Dr = !0, !1;
                    var e = l.type;
                    if (5 !== l.tag || "head" !== e && "body" !== e && !Wa(e, l.memoizedProps))
                        for (e = xr; e;) Kr(l, e), e = ja(e.nextSibling);
                    if (zr(l), 13 === l.tag) {
                        if (!(l = null !== (l = l.memoizedState) ? l.dehydrated : null)) throw Error(i(317));
                        l: {
                            for (l = l.nextSibling, e = 0; l;) {
                                if (8 === l.nodeType) {
                                    var t = l.data;
                                    if ("/$" === t) {
                                        if (0 === e) {
                                            xr = ja(l.nextSibling);
                                            break l
                                        }
                                        e--
                                    } else "$" !== t && "$!" !== t && "$?" !== t || e++
                                }
                                l = l.nextSibling
                            }
                            xr = null
                        }
                    } else xr = Cr ? ja(l.stateNode.nextSibling) : null;
                    return !0
                }

                function jr() {
                    xr = Cr = null, Dr = !1
                }
                var Jr = [];

                function qr() {
                    for (var l = 0; l < Jr.length; l++) Jr[l]._workInProgressVersionPrimary = null;
                    Jr.length = 0
                }
                var Yr = m.ReactCurrentDispatcher,
                    $r = m.ReactCurrentBatchConfig,
                    Qr = 0,
                    Xr = null,
                    li = null,
                    ei = null,
                    ti = !1,
                    ai = !1;

                function ni() {
                    throw Error(i(321))
                }

                function ri(l, e) {
                    if (null === e) return !1;
                    for (var t = 0; t < e.length && t < l.length; t++)
                        if (!Na(l[t], e[t])) return !1;
                    return !0
                }

                function ii(l, e, t, a, n, r) {
                    if (Qr = r, Xr = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, Yr.current = null === l || null === l.memoizedState ? Ui : Gi, l = t(a, n), ai) {
                        r = 0;
                        do {
                            if (ai = !1, !(25 > r)) throw Error(i(301));
                            r += 1, ei = li = null, e.updateQueue = null, Yr.current = Fi, l = t(a, n)
                        } while (ai)
                    }
                    if (Yr.current = vi, e = null !== li && null !== li.next, Qr = 0, ei = li = Xr = null, ti = !1, e) throw Error(i(300));
                    return l
                }

                function oi() {
                    var l = {
                        memoizedState: null,
                        baseState: null,
                        baseQueue: null,
                        queue: null,
                        next: null
                    };
                    return null === ei ? Xr.memoizedState = ei = l : ei = ei.next = l, ei
                }

                function Ei() {
                    if (null === li) {
                        var l = Xr.alternate;
                        l = null !== l ? l.memoizedState : null
                    } else l = li.next;
                    var e = null === ei ? Xr.memoizedState : ei.next;
                    if (null !== e) ei = e, li = l;
                    else {
                        if (null === l) throw Error(i(310));
                        l = {
                            memoizedState: (li = l).memoizedState,
                            baseState: li.baseState,
                            baseQueue: li.baseQueue,
                            queue: li.queue,
                            next: null
                        }, null === ei ? Xr.memoizedState = ei = l : ei = ei.next = l
                    }
                    return ei
                }

                function Ni(l, e) {
                    return "function" === typeof e ? e(l) : e
                }

                function Ai(l) {
                    var e = Ei(),
                        t = e.queue;
                    if (null === t) throw Error(i(311));
                    t.lastRenderedReducer = l;
                    var a = li,
                        n = a.baseQueue,
                        r = t.pending;
                    if (null !== r) {
                        if (null !== n) {
                            var o = n.next;
                            n.next = r.next, r.next = o
                        }
                        a.baseQueue = n = r, t.pending = null
                    }
                    if (null !== n) {
                        n = n.next, a = a.baseState;
                        var E = o = r = null,
                            N = n;
                        do {
                            var A = N.lane;
                            if ((Qr & A) === A) null !== E && (E = E.next = {
                                lane: 0,
                                action: N.action,
                                eagerReducer: N.eagerReducer,
                                eagerState: N.eagerState,
                                next: null
                            }), a = N.eagerReducer === l ? N.eagerState : l(a, N.action);
                            else {
                                var u = {
                                    lane: A,
                                    action: N.action,
                                    eagerReducer: N.eagerReducer,
                                    eagerState: N.eagerState,
                                    next: null
                                };
                                null === E ? (o = E = u, r = a) : E = E.next = u, Xr.lanes |= A, Do |= A
                            }
                            N = N.next
                        } while (null !== N && N !== n);
                        null === E ? r = a : E.next = o, Na(a, e.memoizedState) || (wi = !0), e.memoizedState = a, e.baseState = r, e.baseQueue = E, t.lastRenderedState = a
                    }
                    return [e.memoizedState, t.dispatch]
                }

                function ui(l) {
                    var e = Ei(),
                        t = e.queue;
                    if (null === t) throw Error(i(311));
                    t.lastRenderedReducer = l;
                    var a = t.dispatch,
                        n = t.pending,
                        r = e.memoizedState;
                    if (null !== n) {
                        t.pending = null;
                        var o = n = n.next;
                        do {
                            r = l(r, o.action), o = o.next
                        } while (o !== n);
                        Na(r, e.memoizedState) || (wi = !0), e.memoizedState = r, null === e.baseQueue && (e.baseState = r), t.lastRenderedState = r
                    }
                    return [r, a]
                }

                function _i(l, e, t) {
                    var a = e._getVersion;
                    a = a(e._source);
                    var n = e._workInProgressVersionPrimary;
                    if (null !== n ? l = n === a : (l = l.mutableReadLanes, (l = (Qr & l) === l) && (e._workInProgressVersionPrimary = a, Jr.push(e))), l) return t(e._source);
                    throw Jr.push(e), Error(i(350))
                }

                function si(l, e, t, a) {
                    var n = Go;
                    if (null === n) throw Error(i(349));
                    var r = e._getVersion,
                        o = r(e._source),
                        E = Yr.current,
                        N = E.useState((function() {
                            return _i(n, e, t)
                        })),
                        A = N[1],
                        u = N[0];
                    N = ei;
                    var _ = l.memoizedState,
                        s = _.refs,
                        c = s.getSnapshot,
                        M = _.source;
                    _ = _.subscribe;
                    var f = Xr;
                    return l.memoizedState = {
                        refs: s,
                        source: e,
                        subscribe: a
                    }, E.useEffect((function() {
                        s.getSnapshot = t, s.setSnapshot = A;
                        var l = r(e._source);
                        if (!Na(o, l)) {
                            l = t(e._source), Na(u, l) || (A(l), l = sE(f), n.mutableReadLanes |= l & n.pendingLanes), l = n.mutableReadLanes, n.entangledLanes |= l;
                            for (var a = n.entanglements, i = l; 0 < i;) {
                                var E = 31 - Ve(i),
                                    N = 1 << E;
                                a[E] |= l, i &= ~N
                            }
                        }
                    }), [t, e, a]), E.useEffect((function() {
                        return a(e._source, (function() {
                            var l = s.getSnapshot,
                                t = s.setSnapshot;
                            try {
                                t(l(e._source));
                                var a = sE(f);
                                n.mutableReadLanes |= a & n.pendingLanes
                            } catch (r) {
                                t((function() {
                                    throw r
                                }))
                            }
                        }))
                    }), [e, a]), Na(c, t) && Na(M, e) && Na(_, a) || ((l = {
                        pending: null,
                        dispatch: null,
                        lastRenderedReducer: Ni,
                        lastRenderedState: u
                    }).dispatch = A = Bi.bind(null, Xr, l), N.queue = l, N.baseQueue = null, u = _i(n, e, t), N.memoizedState = N.baseState = u), u
                }

                function ci(l, e, t) {
                    return si(Ei(), l, e, t)
                }

                function Mi(l) {
                    var e = oi();
                    return "function" === typeof l && (l = l()), e.memoizedState = e.baseState = l, l = (l = e.queue = {
                        pending: null,
                        dispatch: null,
                        lastRenderedReducer: Ni,
                        lastRenderedState: l
                    }).dispatch = Bi.bind(null, Xr, l), [e.memoizedState, l]
                }

                function fi(l, e, t, a) {
                    return l = {
                        tag: l,
                        create: e,
                        destroy: t,
                        deps: a,
                        next: null
                    }, null === (e = Xr.updateQueue) ? (e = {
                        lastEffect: null
                    }, Xr.updateQueue = e, e.lastEffect = l.next = l) : null === (t = e.lastEffect) ? e.lastEffect = l.next = l : (a = t.next, t.next = l, l.next = a, e.lastEffect = l), l
                }

                function di(l) {
                    return l = {
                        current: l
                    }, oi().memoizedState = l
                }

                function pi() {
                    return Ei().memoizedState
                }

                function Oi(l, e, t, a) {
                    var n = oi();
                    Xr.flags |= l, n.memoizedState = fi(1 | e, t, void 0, void 0 === a ? null : a)
                }

                function Ri(l, e, t, a) {
                    var n = Ei();
                    a = void 0 === a ? null : a;
                    var r = void 0;
                    if (null !== li) {
                        var i = li.memoizedState;
                        if (r = i.destroy, null !== a && ri(a, i.deps)) return void fi(e, t, r, a)
                    }
                    Xr.flags |= l, n.memoizedState = fi(1 | e, t, r, a)
                }

                function mi(l, e) {
                    return Oi(516, 4, l, e)
                }

                function hi(l, e) {
                    return Ri(516, 4, l, e)
                }

                function gi(l, e) {
                    return Ri(4, 2, l, e)
                }

                function Li(l, e) {
                    return "function" === typeof e ? (l = l(), e(l), function() {
                        e(null)
                    }) : null !== e && void 0 !== e ? (l = l(), e.current = l, function() {
                        e.current = null
                    }) : void 0
                }

                function yi(l, e, t) {
                    return t = null !== t && void 0 !== t ? t.concat([l]) : null, Ri(4, 2, Li.bind(null, e, l), t)
                }

                function Ti() {}

                function Ii(l, e) {
                    var t = Ei();
                    e = void 0 === e ? null : e;
                    var a = t.memoizedState;
                    return null !== a && null !== e && ri(e, a[1]) ? a[0] : (t.memoizedState = [l, e], l)
                }

                function Si(l, e) {
                    var t = Ei();
                    e = void 0 === e ? null : e;
                    var a = t.memoizedState;
                    return null !== a && null !== e && ri(e, a[1]) ? a[0] : (l = l(), t.memoizedState = [l, e], l)
                }

                function bi(l, e) {
                    var t = Vn();
                    Zn(98 > t ? 98 : t, (function() {
                        l(!0)
                    })), Zn(97 < t ? 97 : t, (function() {
                        var t = $r.transition;
                        $r.transition = 1;
                        try {
                            l(!1), e()
                        } finally {
                            $r.transition = t
                        }
                    }))
                }

                function Bi(l, e, t) {
                    var a = _E(),
                        n = sE(l),
                        r = {
                            lane: n,
                            action: t,
                            eagerReducer: null,
                            eagerState: null,
                            next: null
                        },
                        i = e.pending;
                    if (null === i ? r.next = r : (r.next = i.next, i.next = r), e.pending = r, i = l.alternate, l === Xr || null !== i && i === Xr) ai = ti = !0;
                    else {
                        if (0 === l.lanes && (null === i || 0 === i.lanes) && null !== (i = e.lastRenderedReducer)) try {
                            var o = e.lastRenderedState,
                                E = i(o, t);
                            if (r.eagerReducer = i, r.eagerState = E, Na(E, o)) return
                        } catch (N) {}
                        cE(l, n, a)
                    }
                }
                var vi = {
                        readContext: ir,
                        useCallback: ni,
                        useContext: ni,
                        useEffect: ni,
                        useImperativeHandle: ni,
                        useLayoutEffect: ni,
                        useMemo: ni,
                        useReducer: ni,
                        useRef: ni,
                        useState: ni,
                        useDebugValue: ni,
                        useDeferredValue: ni,
                        useTransition: ni,
                        useMutableSource: ni,
                        useOpaqueIdentifier: ni,
                        unstable_isNewReconciler: !1
                    },
                    Ui = {
                        readContext: ir,
                        useCallback: function(l, e) {
                            return oi().memoizedState = [l, void 0 === e ? null : e], l
                        },
                        useContext: ir,
                        useEffect: mi,
                        useImperativeHandle: function(l, e, t) {
                            return t = null !== t && void 0 !== t ? t.concat([l]) : null, Oi(4, 2, Li.bind(null, e, l), t)
                        },
                        useLayoutEffect: function(l, e) {
                            return Oi(4, 2, l, e)
                        },
                        useMemo: function(l, e) {
                            var t = oi();
                            return e = void 0 === e ? null : e, l = l(), t.memoizedState = [l, e], l
                        },
                        useReducer: function(l, e, t) {
                            var a = oi();
                            return e = void 0 !== t ? t(e) : e, a.memoizedState = a.baseState = e, l = (l = a.queue = {
                                pending: null,
                                dispatch: null,
                                lastRenderedReducer: l,
                                lastRenderedState: e
                            }).dispatch = Bi.bind(null, Xr, l), [a.memoizedState, l]
                        },
                        useRef: di,
                        useState: Mi,
                        useDebugValue: Ti,
                        useDeferredValue: function(l) {
                            var e = Mi(l),
                                t = e[0],
                                a = e[1];
                            return mi((function() {
                                var e = $r.transition;
                                $r.transition = 1;
                                try {
                                    a(l)
                                } finally {
                                    $r.transition = e
                                }
                            }), [l]), t
                        },
                        useTransition: function() {
                            var l = Mi(!1),
                                e = l[0];
                            return di(l = bi.bind(null, l[1])), [l, e]
                        },
                        useMutableSource: function(l, e, t) {
                            var a = oi();
                            return a.memoizedState = {
                                refs: {
                                    getSnapshot: e,
                                    setSnapshot: null
                                },
                                source: l,
                                subscribe: t
                            }, si(a, l, e, t)
                        },
                        useOpaqueIdentifier: function() {
                            if (Dr) {
                                var l = !1,
                                    e = function(l) {
                                        return {
                                            $$typeof: P,
                                            toString: l,
                                            valueOf: l
                                        }
                                    }((function() {
                                        throw l || (l = !0, t("r:" + (qa++).toString(36))), Error(i(355))
                                    })),
                                    t = Mi(e)[1];
                                return 0 === (2 & Xr.mode) && (Xr.flags |= 516, fi(5, (function() {
                                    t("r:" + (qa++).toString(36))
                                }), void 0, null)), e
                            }
                            return Mi(e = "r:" + (qa++).toString(36)), e
                        },
                        unstable_isNewReconciler: !1
                    },
                    Gi = {
                        readContext: ir,
                        useCallback: Ii,
                        useContext: ir,
                        useEffect: hi,
                        useImperativeHandle: yi,
                        useLayoutEffect: gi,
                        useMemo: Si,
                        useReducer: Ai,
                        useRef: pi,
                        useState: function() {
                            return Ai(Ni)
                        },
                        useDebugValue: Ti,
                        useDeferredValue: function(l) {
                            var e = Ai(Ni),
                                t = e[0],
                                a = e[1];
                            return hi((function() {
                                var e = $r.transition;
                                $r.transition = 1;
                                try {
                                    a(l)
                                } finally {
                                    $r.transition = e
                                }
                            }), [l]), t
                        },
                        useTransition: function() {
                            var l = Ai(Ni)[0];
                            return [pi().current, l]
                        },
                        useMutableSource: ci,
                        useOpaqueIdentifier: function() {
                            return Ai(Ni)[0]
                        },
                        unstable_isNewReconciler: !1
                    },
                    Fi = {
                        readContext: ir,
                        useCallback: Ii,
                        useContext: ir,
                        useEffect: hi,
                        useImperativeHandle: yi,
                        useLayoutEffect: gi,
                        useMemo: Si,
                        useReducer: ui,
                        useRef: pi,
                        useState: function() {
                            return ui(Ni)
                        },
                        useDebugValue: Ti,
                        useDeferredValue: function(l) {
                            var e = ui(Ni),
                                t = e[0],
                                a = e[1];
                            return hi((function() {
                                var e = $r.transition;
                                $r.transition = 1;
                                try {
                                    a(l)
                                } finally {
                                    $r.transition = e
                                }
                            }), [l]), t
                        },
                        useTransition: function() {
                            var l = ui(Ni)[0];
                            return [pi().current, l]
                        },
                        useMutableSource: ci,
                        useOpaqueIdentifier: function() {
                            return ui(Ni)[0]
                        },
                        unstable_isNewReconciler: !1
                    },
                    Pi = m.ReactCurrentOwner,
                    wi = !1;

                function ki(l, e, t, a) {
                    e.child = null === l ? Ir(e, null, t, a) : Tr(e, l.child, t, a)
                }

                function Hi(l, e, t, a, n) {
                    t = t.render;
                    var r = e.ref;
                    return rr(e, n), a = ii(l, e, t, a, r, n), null === l || wi ? (e.flags |= 1, ki(l, e, a, n), e.child) : (e.updateQueue = l.updateQueue, e.flags &= -517, l.lanes &= ~n, no(l, e, n))
                }

                function Ci(l, e, t, a, n, r) {
                    if (null === l) {
                        var i = t.type;
                        return "function" !== typeof i || zE(i) || void 0 !== i.defaultProps || null !== t.compare || void 0 !== t.defaultProps ? ((l = jE(t.type, null, a, e, e.mode, r)).ref = e.ref, l.return = e, e.child = l) : (e.tag = 15, e.type = i, xi(l, e, i, a, n, r))
                    }
                    return i = l.child, 0 === (n & r) && (n = i.memoizedProps, (t = null !== (t = t.compare) ? t : ua)(n, a) && l.ref === e.ref) ? no(l, e, r) : (e.flags |= 1, (l = ZE(i, a)).ref = e.ref, l.return = e, e.child = l)
                }

                function xi(l, e, t, a, n, r) {
                    if (null !== l && ua(l.memoizedProps, a) && l.ref === e.ref) {
                        if (wi = !1, 0 === (r & n)) return e.lanes = l.lanes, no(l, e, r);
                        0 !== (16384 & l.flags) && (wi = !0)
                    }
                    return Wi(l, e, t, a, r)
                }

                function Di(l, e, t) {
                    var a = e.pendingProps,
                        n = a.children,
                        r = null !== l ? l.memoizedState : null;
                    if ("hidden" === a.mode || "unstable-defer-without-hiding" === a.mode)
                        if (0 === (4 & e.mode)) e.memoizedState = {
                            baseLanes: 0
                        }, hE(e, t);
                        else {
                            if (0 === (1073741824 & t)) return l = null !== r ? r.baseLanes | t : t, e.lanes = e.childLanes = 1073741824, e.memoizedState = {
                                baseLanes: l
                            }, hE(e, l), null;
                            e.memoizedState = {
                                baseLanes: 0
                            }, hE(e, null !== r ? r.baseLanes : t)
                        }
                    else null !== r ? (a = r.baseLanes | t, e.memoizedState = null) : a = t, hE(e, a);
                    return ki(l, e, n, t), e.child
                }

                function Ki(l, e) {
                    var t = e.ref;
                    (null === l && null !== t || null !== l && l.ref !== t) && (e.flags |= 128)
                }

                function Wi(l, e, t, a, n) {
                    var r = dn(t) ? Mn : sn.current;
                    return r = fn(e, r), rr(e, n), t = ii(l, e, t, a, r, n), null === l || wi ? (e.flags |= 1, ki(l, e, t, n), e.child) : (e.updateQueue = l.updateQueue, e.flags &= -517, l.lanes &= ~n, no(l, e, n))
                }

                function Vi(l, e, t, a, n) {
                    if (dn(t)) {
                        var r = !0;
                        mn(e)
                    } else r = !1;
                    if (rr(e, n), null === e.stateNode) null !== l && (l.alternate = null, e.alternate = null, e.flags |= 2), Or(e, t, a), mr(e, t, a, n), a = !0;
                    else if (null === l) {
                        var i = e.stateNode,
                            o = e.memoizedProps;
                        i.props = o;
                        var E = i.context,
                            N = t.contextType;
                        "object" === typeof N && null !== N ? N = ir(N) : N = fn(e, N = dn(t) ? Mn : sn.current);
                        var A = t.getDerivedStateFromProps,
                            u = "function" === typeof A || "function" === typeof i.getSnapshotBeforeUpdate;
                        u || "function" !== typeof i.UNSAFE_componentWillReceiveProps && "function" !== typeof i.componentWillReceiveProps || (o !== a || E !== N) && Rr(e, i, a, N), or = !1;
                        var _ = e.memoizedState;
                        i.state = _, sr(e, a, i, n), E = e.memoizedState, o !== a || _ !== E || cn.current || or ? ("function" === typeof A && (fr(e, t, A, a), E = e.memoizedState), (o = or || pr(e, t, o, a, _, E, N)) ? (u || "function" !== typeof i.UNSAFE_componentWillMount && "function" !== typeof i.componentWillMount || ("function" === typeof i.componentWillMount && i.componentWillMount(), "function" === typeof i.UNSAFE_componentWillMount && i.UNSAFE_componentWillMount()), "function" === typeof i.componentDidMount && (e.flags |= 4)) : ("function" === typeof i.componentDidMount && (e.flags |= 4), e.memoizedProps = a, e.memoizedState = E), i.props = a, i.state = E, i.context = N, a = o) : ("function" === typeof i.componentDidMount && (e.flags |= 4), a = !1)
                    } else {
                        i = e.stateNode, Nr(l, e), o = e.memoizedProps, N = e.type === e.elementType ? o : $n(e.type, o), i.props = N, u = e.pendingProps, _ = i.context, "object" === typeof(E = t.contextType) && null !== E ? E = ir(E) : E = fn(e, E = dn(t) ? Mn : sn.current);
                        var s = t.getDerivedStateFromProps;
                        (A = "function" === typeof s || "function" === typeof i.getSnapshotBeforeUpdate) || "function" !== typeof i.UNSAFE_componentWillReceiveProps && "function" !== typeof i.componentWillReceiveProps || (o !== u || _ !== E) && Rr(e, i, a, E), or = !1, _ = e.memoizedState, i.state = _, sr(e, a, i, n);
                        var c = e.memoizedState;
                        o !== u || _ !== c || cn.current || or ? ("function" === typeof s && (fr(e, t, s, a), c = e.memoizedState), (N = or || pr(e, t, N, a, _, c, E)) ? (A || "function" !== typeof i.UNSAFE_componentWillUpdate && "function" !== typeof i.componentWillUpdate || ("function" === typeof i.componentWillUpdate && i.componentWillUpdate(a, c, E), "function" === typeof i.UNSAFE_componentWillUpdate && i.UNSAFE_componentWillUpdate(a, c, E)), "function" === typeof i.componentDidUpdate && (e.flags |= 4), "function" === typeof i.getSnapshotBeforeUpdate && (e.flags |= 256)) : ("function" !== typeof i.componentDidUpdate || o === l.memoizedProps && _ === l.memoizedState || (e.flags |= 4), "function" !== typeof i.getSnapshotBeforeUpdate || o === l.memoizedProps && _ === l.memoizedState || (e.flags |= 256), e.memoizedProps = a, e.memoizedState = c), i.props = a, i.state = c, i.context = E, a = N) : ("function" !== typeof i.componentDidUpdate || o === l.memoizedProps && _ === l.memoizedState || (e.flags |= 4), "function" !== typeof i.getSnapshotBeforeUpdate || o === l.memoizedProps && _ === l.memoizedState || (e.flags |= 256), a = !1)
                    }
                    return zi(l, e, t, a, r, n)
                }

                function zi(l, e, t, a, n, r) {
                    Ki(l, e);
                    var i = 0 !== (64 & e.flags);
                    if (!a && !i) return n && hn(e, t, !1), no(l, e, r);
                    a = e.stateNode, Pi.current = e;
                    var o = i && "function" !== typeof t.getDerivedStateFromError ? null : a.render();
                    return e.flags |= 1, null !== l && i ? (e.child = Tr(e, l.child, null, r), e.child = Tr(e, null, o, r)) : ki(l, e, o, r), e.memoizedState = a.state, n && hn(e, t, !0), e.child
                }

                function Zi(l) {
                    var e = l.stateNode;
                    e.pendingContext ? On(0, e.pendingContext, e.pendingContext !== e.context) : e.context && On(0, e.context, !1), Gr(l, e.containerInfo)
                }
                var ji, Ji, qi, Yi = {
                    dehydrated: null,
                    retryLane: 0
                };

                function $i(l, e, t) {
                    var a, n = e.pendingProps,
                        r = kr.current,
                        i = !1;
                    return (a = 0 !== (64 & e.flags)) || (a = (null === l || null !== l.memoizedState) && 0 !== (2 & r)), a ? (i = !0, e.flags &= -65) : null !== l && null === l.memoizedState || void 0 === n.fallback || !0 === n.unstable_avoidThisFallback || (r |= 1), un(kr, 1 & r), null === l ? (void 0 !== n.fallback && Vr(e), l = n.children, r = n.fallback, i ? (l = Qi(e, l, r, t), e.child.memoizedState = {
                        baseLanes: t
                    }, e.memoizedState = Yi, l) : "number" === typeof n.unstable_expectedLoadTime ? (l = Qi(e, l, r, t), e.child.memoizedState = {
                        baseLanes: t
                    }, e.memoizedState = Yi, e.lanes = 33554432, l) : ((t = qE({
                        mode: "visible",
                        children: l
                    }, e.mode, t, null)).return = e, e.child = t)) : (l.memoizedState, i ? (n = lo(l, e, n.children, n.fallback, t), i = e.child, r = l.child.memoizedState, i.memoizedState = null === r ? {
                        baseLanes: t
                    } : {
                        baseLanes: r.baseLanes | t
                    }, i.childLanes = l.childLanes & ~t, e.memoizedState = Yi, n) : (t = Xi(l, e, n.children, t), e.memoizedState = null, t))
                }

                function Qi(l, e, t, a) {
                    var n = l.mode,
                        r = l.child;
                    return e = {
                        mode: "hidden",
                        children: e
                    }, 0 === (2 & n) && null !== r ? (r.childLanes = 0, r.pendingProps = e) : r = qE(e, n, 0, null), t = JE(t, n, a, null), r.return = l, t.return = l, r.sibling = t, l.child = r, t
                }

                function Xi(l, e, t, a) {
                    var n = l.child;
                    return l = n.sibling, t = ZE(n, {
                        mode: "visible",
                        children: t
                    }), 0 === (2 & e.mode) && (t.lanes = a), t.return = e, t.sibling = null, null !== l && (l.nextEffect = null, l.flags = 8, e.firstEffect = e.lastEffect = l), e.child = t
                }

                function lo(l, e, t, a, n) {
                    var r = e.mode,
                        i = l.child;
                    l = i.sibling;
                    var o = {
                        mode: "hidden",
                        children: t
                    };
                    return 0 === (2 & r) && e.child !== i ? ((t = e.child).childLanes = 0, t.pendingProps = o, null !== (i = t.lastEffect) ? (e.firstEffect = t.firstEffect, e.lastEffect = i, i.nextEffect = null) : e.firstEffect = e.lastEffect = null) : t = ZE(i, o), null !== l ? a = ZE(l, a) : (a = JE(a, r, n, null)).flags |= 2, a.return = e, t.return = e, t.sibling = a, e.child = t, a
                }

                function eo(l, e) {
                    l.lanes |= e;
                    var t = l.alternate;
                    null !== t && (t.lanes |= e), nr(l.return, e)
                }

                function to(l, e, t, a, n, r) {
                    var i = l.memoizedState;
                    null === i ? l.memoizedState = {
                        isBackwards: e,
                        rendering: null,
                        renderingStartTime: 0,
                        last: a,
                        tail: t,
                        tailMode: n,
                        lastEffect: r
                    } : (i.isBackwards = e, i.rendering = null, i.renderingStartTime = 0, i.last = a, i.tail = t, i.tailMode = n, i.lastEffect = r)
                }

                function ao(l, e, t) {
                    var a = e.pendingProps,
                        n = a.revealOrder,
                        r = a.tail;
                    if (ki(l, e, a.children, t), 0 !== (2 & (a = kr.current))) a = 1 & a | 2, e.flags |= 64;
                    else {
                        if (null !== l && 0 !== (64 & l.flags)) l: for (l = e.child; null !== l;) {
                            if (13 === l.tag) null !== l.memoizedState && eo(l, t);
                            else if (19 === l.tag) eo(l, t);
                            else if (null !== l.child) {
                                l.child.return = l, l = l.child;
                                continue
                            }
                            if (l === e) break l;
                            for (; null === l.sibling;) {
                                if (null === l.return || l.return === e) break l;
                                l = l.return
                            }
                            l.sibling.return = l.return, l = l.sibling
                        }
                        a &= 1
                    }
                    if (un(kr, a), 0 === (2 & e.mode)) e.memoizedState = null;
                    else switch (n) {
                        case "forwards":
                            for (t = e.child, n = null; null !== t;) null !== (l = t.alternate) && null === Hr(l) && (n = t), t = t.sibling;
                            null === (t = n) ? (n = e.child, e.child = null) : (n = t.sibling, t.sibling = null), to(e, !1, n, t, r, e.lastEffect);
                            break;
                        case "backwards":
                            for (t = null, n = e.child, e.child = null; null !== n;) {
                                if (null !== (l = n.alternate) && null === Hr(l)) {
                                    e.child = n;
                                    break
                                }
                                l = n.sibling, n.sibling = t, t = n, n = l
                            }
                            to(e, !0, t, null, r, e.lastEffect);
                            break;
                        case "together":
                            to(e, !1, null, null, void 0, e.lastEffect);
                            break;
                        default:
                            e.memoizedState = null
                    }
                    return e.child
                }

                function no(l, e, t) {
                    if (null !== l && (e.dependencies = l.dependencies), Do |= e.lanes, 0 !== (t & e.childLanes)) {
                        if (null !== l && e.child !== l.child) throw Error(i(153));
                        if (null !== e.child) {
                            for (t = ZE(l = e.child, l.pendingProps), e.child = t, t.return = e; null !== l.sibling;) l = l.sibling, (t = t.sibling = ZE(l, l.pendingProps)).return = e;
                            t.sibling = null
                        }
                        return e.child
                    }
                    return null
                }

                function ro(l, e) {
                    if (!Dr) switch (l.tailMode) {
                        case "hidden":
                            e = l.tail;
                            for (var t = null; null !== e;) null !== e.alternate && (t = e), e = e.sibling;
                            null === t ? l.tail = null : t.sibling = null;
                            break;
                        case "collapsed":
                            t = l.tail;
                            for (var a = null; null !== t;) null !== t.alternate && (a = t), t = t.sibling;
                            null === a ? e || null === l.tail ? l.tail = null : l.tail.sibling = null : a.sibling = null
                    }
                }

                function io(l, e, t) {
                    var a = e.pendingProps;
                    switch (e.tag) {
                        case 2:
                        case 16:
                        case 15:
                        case 0:
                        case 11:
                        case 7:
                        case 8:
                        case 12:
                        case 9:
                        case 14:
                            return null;
                        case 1:
                        case 17:
                            return dn(e.type) && pn(), null;
                        case 3:
                            return Fr(), An(cn), An(sn), qr(), (a = e.stateNode).pendingContext && (a.context = a.pendingContext, a.pendingContext = null), null !== l && null !== l.child || (Zr(e) ? e.flags |= 4 : a.hydrate || (e.flags |= 256)), null;
                        case 5:
                            wr(e);
                            var r = Ur(vr.current);
                            if (t = e.type, null !== l && null != e.stateNode) Ji(l, e, t, a), l.ref !== e.ref && (e.flags |= 128);
                            else {
                                if (!a) {
                                    if (null === e.stateNode) throw Error(i(166));
                                    return null
                                }
                                if (l = Ur(br.current), Zr(e)) {
                                    a = e.stateNode, t = e.type;
                                    var o = e.memoizedProps;
                                    switch (a[$a] = e, a[Qa] = o, t) {
                                        case "dialog":
                                            ba("cancel", a), ba("close", a);
                                            break;
                                        case "iframe":
                                        case "object":
                                        case "embed":
                                            ba("load", a);
                                            break;
                                        case "video":
                                        case "audio":
                                            for (l = 0; l < ya.length; l++) ba(ya[l], a);
                                            break;
                                        case "source":
                                            ba("error", a);
                                            break;
                                        case "img":
                                        case "image":
                                        case "link":
                                            ba("error", a), ba("load", a);
                                            break;
                                        case "details":
                                            ba("toggle", a);
                                            break;
                                        case "input":
                                            ll(a, o), ba("invalid", a);
                                            break;
                                        case "select":
                                            a._wrapperState = {
                                                wasMultiple: !!o.multiple
                                            }, ba("invalid", a);
                                            break;
                                        case "textarea":
                                            El(a, o), ba("invalid", a)
                                    }
                                    for (var N in Ll(t, o), l = null, o) o.hasOwnProperty(N) && (r = o[N], "children" === N ? "string" === typeof r ? a.textContent !== r && (l = ["children", r]) : "number" === typeof r && a.textContent !== "" + r && (l = ["children", "" + r]) : E.hasOwnProperty(N) && null != r && "onScroll" === N && ba("scroll", a));
                                    switch (t) {
                                        case "input":
                                            Y(a), al(a, o, !0);
                                            break;
                                        case "textarea":
                                            Y(a), Al(a);
                                            break;
                                        case "select":
                                        case "option":
                                            break;
                                        default:
                                            "function" === typeof o.onClick && (a.onclick = Ca)
                                    }
                                    a = l, e.updateQueue = a, null !== a && (e.flags |= 4)
                                } else {
                                    switch (N = 9 === r.nodeType ? r : r.ownerDocument, l === ul && (l = sl(t)), l === ul ? "script" === t ? ((l = N.createElement("div")).innerHTML = "<script><\/script>", l = l.removeChild(l.firstChild)) : "string" === typeof a.is ? l = N.createElement(t, {
                                        is: a.is
                                    }) : (l = N.createElement(t), "select" === t && (N = l, a.multiple ? N.multiple = !0 : a.size && (N.size = a.size))) : l = N.createElementNS(l, t), l[$a] = e, l[Qa] = a, ji(l, e), e.stateNode = l, N = yl(t, a), t) {
                                        case "dialog":
                                            ba("cancel", l), ba("close", l), r = a;
                                            break;
                                        case "iframe":
                                        case "object":
                                        case "embed":
                                            ba("load", l), r = a;
                                            break;
                                        case "video":
                                        case "audio":
                                            for (r = 0; r < ya.length; r++) ba(ya[r], l);
                                            r = a;
                                            break;
                                        case "source":
                                            ba("error", l), r = a;
                                            break;
                                        case "img":
                                        case "image":
                                        case "link":
                                            ba("error", l), ba("load", l), r = a;
                                            break;
                                        case "details":
                                            ba("toggle", l), r = a;
                                            break;
                                        case "input":
                                            ll(l, a), r = X(l, a), ba("invalid", l);
                                            break;
                                        case "option":
                                            r = rl(l, a);
                                            break;
                                        case "select":
                                            l._wrapperState = {
                                                wasMultiple: !!a.multiple
                                            }, r = n({}, a, {
                                                value: void 0
                                            }), ba("invalid", l);
                                            break;
                                        case "textarea":
                                            El(l, a), r = ol(l, a), ba("invalid", l);
                                            break;
                                        default:
                                            r = a
                                    }
                                    Ll(t, r);
                                    var A = r;
                                    for (o in A)
                                        if (A.hasOwnProperty(o)) {
                                            var u = A[o];
                                            "style" === o ? hl(l, u) : "dangerouslySetInnerHTML" === o ? null != (u = u ? u.__html : void 0) && dl(l, u) : "children" === o ? "string" === typeof u ? ("textarea" !== t || "" !== u) && pl(l, u) : "number" === typeof u && pl(l, "" + u) : "suppressContentEditableWarning" !== o && "suppressHydrationWarning" !== o && "autoFocus" !== o && (E.hasOwnProperty(o) ? null != u && "onScroll" === o && ba("scroll", l) : null != u && R(l, o, u, N))
                                        }
                                    switch (t) {
                                        case "input":
                                            Y(l), al(l, a, !1);
                                            break;
                                        case "textarea":
                                            Y(l), Al(l);
                                            break;
                                        case "option":
                                            null != a.value && l.setAttribute("value", "" + J(a.value));
                                            break;
                                        case "select":
                                            l.multiple = !!a.multiple, null != (o = a.value) ? il(l, !!a.multiple, o, !1) : null != a.defaultValue && il(l, !!a.multiple, a.defaultValue, !0);
                                            break;
                                        default:
                                            "function" === typeof r.onClick && (l.onclick = Ca)
                                    }
                                    Ka(t, a) && (e.flags |= 4)
                                }
                                null !== e.ref && (e.flags |= 128)
                            }
                            return null;
                        case 6:
                            if (l && null != e.stateNode) qi(0, e, l.memoizedProps, a);
                            else {
                                if ("string" !== typeof a && null === e.stateNode) throw Error(i(166));
                                t = Ur(vr.current), Ur(br.current), Zr(e) ? (a = e.stateNode, t = e.memoizedProps, a[$a] = e, a.nodeValue !== t && (e.flags |= 4)) : ((a = (9 === t.nodeType ? t : t.ownerDocument).createTextNode(a))[$a] = e, e.stateNode = a)
                            }
                            return null;
                        case 13:
                            return An(kr), a = e.memoizedState, 0 !== (64 & e.flags) ? (e.lanes = t, e) : (a = null !== a, t = !1, null === l ? void 0 !== e.memoizedProps.fallback && Zr(e) : t = null !== l.memoizedState, a && !t && 0 !== (2 & e.mode) && (null === l && !0 !== e.memoizedProps.unstable_avoidThisFallback || 0 !== (1 & kr.current) ? 0 === Ho && (Ho = 3) : (0 !== Ho && 3 !== Ho || (Ho = 4), null === Go || 0 === (134217727 & Do) && 0 === (134217727 & Ko) || pE(Go, Po))), (a || t) && (e.flags |= 4), null);
                        case 4:
                            return Fr(), null === l && va(e.stateNode.containerInfo), null;
                        case 10:
                            return ar(e), null;
                        case 19:
                            if (An(kr), null === (a = e.memoizedState)) return null;
                            if (o = 0 !== (64 & e.flags), null === (N = a.rendering))
                                if (o) ro(a, !1);
                                else {
                                    if (0 !== Ho || null !== l && 0 !== (64 & l.flags))
                                        for (l = e.child; null !== l;) {
                                            if (null !== (N = Hr(l))) {
                                                for (e.flags |= 64, ro(a, !1), null !== (o = N.updateQueue) && (e.updateQueue = o, e.flags |= 4), null === a.lastEffect && (e.firstEffect = null), e.lastEffect = a.lastEffect, a = t, t = e.child; null !== t;) l = a, (o = t).flags &= 2, o.nextEffect = null, o.firstEffect = null, o.lastEffect = null, null === (N = o.alternate) ? (o.childLanes = 0, o.lanes = l, o.child = null, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = N.childLanes, o.lanes = N.lanes, o.child = N.child, o.memoizedProps = N.memoizedProps, o.memoizedState = N.memoizedState, o.updateQueue = N.updateQueue, o.type = N.type, l = N.dependencies, o.dependencies = null === l ? null : {
                                                    lanes: l.lanes,
                                                    firstContext: l.firstContext
                                                }), t = t.sibling;
                                                return un(kr, 1 & kr.current | 2), e.child
                                            }
                                            l = l.sibling
                                        }
                                    null !== a.tail && Wn() > Zo && (e.flags |= 64, o = !0, ro(a, !1), e.lanes = 33554432)
                                }
                            else {
                                if (!o)
                                    if (null !== (l = Hr(N))) {
                                        if (e.flags |= 64, o = !0, null !== (t = l.updateQueue) && (e.updateQueue = t, e.flags |= 4), ro(a, !0), null === a.tail && "hidden" === a.tailMode && !N.alternate && !Dr) return null !== (e = e.lastEffect = a.lastEffect) && (e.nextEffect = null), null
                                    } else 2 * Wn() - a.renderingStartTime > Zo && 1073741824 !== t && (e.flags |= 64, o = !0, ro(a, !1), e.lanes = 33554432);
                                a.isBackwards ? (N.sibling = e.child, e.child = N) : (null !== (t = a.last) ? t.sibling = N : e.child = N, a.last = N)
                            }
                            return null !== a.tail ? (t = a.tail, a.rendering = t, a.tail = t.sibling, a.lastEffect = e.lastEffect, a.renderingStartTime = Wn(), t.sibling = null, e = kr.current, un(kr, o ? 1 & e | 2 : 1 & e), t) : null;
                        case 23:
                        case 24:
                            return gE(), null !== l && null !== l.memoizedState !== (null !== e.memoizedState) && "unstable-defer-without-hiding" !== a.mode && (e.flags |= 4), null
                    }
                    throw Error(i(156, e.tag))
                }

                function oo(l) {
                    switch (l.tag) {
                        case 1:
                            dn(l.type) && pn();
                            var e = l.flags;
                            return 4096 & e ? (l.flags = -4097 & e | 64, l) : null;
                        case 3:
                            if (Fr(), An(cn), An(sn), qr(), 0 !== (64 & (e = l.flags))) throw Error(i(285));
                            return l.flags = -4097 & e | 64, l;
                        case 5:
                            return wr(l), null;
                        case 13:
                            return An(kr), 4096 & (e = l.flags) ? (l.flags = -4097 & e | 64, l) : null;
                        case 19:
                            return An(kr), null;
                        case 4:
                            return Fr(), null;
                        case 10:
                            return ar(l), null;
                        case 23:
                        case 24:
                            return gE(), null;
                        default:
                            return null
                    }
                }

                function Eo(l, e) {
                    try {
                        var t = "",
                            a = e;
                        do {
                            t += Z(a), a = a.return
                        } while (a);
                        var n = t
                    } catch (r) {
                        n = "\nError generating stack: " + r.message + "\n" + r.stack
                    }
                    return {
                        value: l,
                        source: e,
                        stack: n
                    }
                }

                function No(l, e) {
                    try {
                        console.error(e.value)
                    } catch (t) {
                        setTimeout((function() {
                            throw t
                        }))
                    }
                }
                ji = function(l, e) {
                    for (var t = e.child; null !== t;) {
                        if (5 === t.tag || 6 === t.tag) l.appendChild(t.stateNode);
                        else if (4 !== t.tag && null !== t.child) {
                            t.child.return = t, t = t.child;
                            continue
                        }
                        if (t === e) break;
                        for (; null === t.sibling;) {
                            if (null === t.return || t.return === e) return;
                            t = t.return
                        }
                        t.sibling.return = t.return, t = t.sibling
                    }
                }, Ji = function(l, e, t, a) {
                    var r = l.memoizedProps;
                    if (r !== a) {
                        l = e.stateNode, Ur(br.current);
                        var i, o = null;
                        switch (t) {
                            case "input":
                                r = X(l, r), a = X(l, a), o = [];
                                break;
                            case "option":
                                r = rl(l, r), a = rl(l, a), o = [];
                                break;
                            case "select":
                                r = n({}, r, {
                                    value: void 0
                                }), a = n({}, a, {
                                    value: void 0
                                }), o = [];
                                break;
                            case "textarea":
                                r = ol(l, r), a = ol(l, a), o = [];
                                break;
                            default:
                                "function" !== typeof r.onClick && "function" === typeof a.onClick && (l.onclick = Ca)
                        }
                        for (u in Ll(t, a), t = null, r)
                            if (!a.hasOwnProperty(u) && r.hasOwnProperty(u) && null != r[u])
                                if ("style" === u) {
                                    var N = r[u];
                                    for (i in N) N.hasOwnProperty(i) && (t || (t = {}), t[i] = "")
                                } else "dangerouslySetInnerHTML" !== u && "children" !== u && "suppressContentEditableWarning" !== u && "suppressHydrationWarning" !== u && "autoFocus" !== u && (E.hasOwnProperty(u) ? o || (o = []) : (o = o || []).push(u, null));
                        for (u in a) {
                            var A = a[u];
                            if (N = null != r ? r[u] : void 0, a.hasOwnProperty(u) && A !== N && (null != A || null != N))
                                if ("style" === u)
                                    if (N) {
                                        for (i in N) !N.hasOwnProperty(i) || A && A.hasOwnProperty(i) || (t || (t = {}), t[i] = "");
                                        for (i in A) A.hasOwnProperty(i) && N[i] !== A[i] && (t || (t = {}), t[i] = A[i])
                                    } else t || (o || (o = []), o.push(u, t)), t = A;
                            else "dangerouslySetInnerHTML" === u ? (A = A ? A.__html : void 0, N = N ? N.__html : void 0, null != A && N !== A && (o = o || []).push(u, A)) : "children" === u ? "string" !== typeof A && "number" !== typeof A || (o = o || []).push(u, "" + A) : "suppressContentEditableWarning" !== u && "suppressHydrationWarning" !== u && (E.hasOwnProperty(u) ? (null != A && "onScroll" === u && ba("scroll", l), o || N === A || (o = [])) : "object" === typeof A && null !== A && A.$$typeof === P ? A.toString() : (o = o || []).push(u, A))
                        }
                        t && (o = o || []).push("style", t);
                        var u = o;
                        (e.updateQueue = u) && (e.flags |= 4)
                    }
                }, qi = function(l, e, t, a) {
                    t !== a && (e.flags |= 4)
                };
                var Ao = "function" === typeof WeakMap ? WeakMap : Map;

                function uo(l, e, t) {
                    (t = Ar(-1, t)).tag = 3, t.payload = {
                        element: null
                    };
                    var a = e.value;
                    return t.callback = function() {
                        Yo || (Yo = !0, $o = a), No(0, e)
                    }, t
                }

                function _o(l, e, t) {
                    (t = Ar(-1, t)).tag = 3;
                    var a = l.type.getDerivedStateFromError;
                    if ("function" === typeof a) {
                        var n = e.value;
                        t.payload = function() {
                            return No(0, e), a(n)
                        }
                    }
                    var r = l.stateNode;
                    return null !== r && "function" === typeof r.componentDidCatch && (t.callback = function() {
                        "function" !== typeof a && (null === Qo ? Qo = new Set([this]) : Qo.add(this), No(0, e));
                        var l = e.stack;
                        this.componentDidCatch(e.value, {
                            componentStack: null !== l ? l : ""
                        })
                    }), t
                }
                var so = "function" === typeof WeakSet ? WeakSet : Set;

                function co(l) {
                    var e = l.ref;
                    if (null !== e)
                        if ("function" === typeof e) try {
                            e(null)
                        } catch (t) {
                            xE(l, t)
                        } else e.current = null
                }

                function Mo(l, e) {
                    switch (e.tag) {
                        case 0:
                        case 11:
                        case 15:
                        case 22:
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            return;
                        case 1:
                            if (256 & e.flags && null !== l) {
                                var t = l.memoizedProps,
                                    a = l.memoizedState;
                                e = (l = e.stateNode).getSnapshotBeforeUpdate(e.elementType === e.type ? t : $n(e.type, t), a), l.__reactInternalSnapshotBeforeUpdate = e
                            }
                            return;
                        case 3:
                            return void(256 & e.flags && Za(e.stateNode.containerInfo))
                    }
                    throw Error(i(163))
                }

                function fo(l, e, t) {
                    switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                        case 22:
                            if (null !== (e = null !== (e = t.updateQueue) ? e.lastEffect : null)) {
                                l = e = e.next;
                                do {
                                    if (3 === (3 & l.tag)) {
                                        var a = l.create;
                                        l.destroy = a()
                                    }
                                    l = l.next
                                } while (l !== e)
                            }
                            if (null !== (e = null !== (e = t.updateQueue) ? e.lastEffect : null)) {
                                l = e = e.next;
                                do {
                                    var n = l;
                                    a = n.next, 0 !== (4 & (n = n.tag)) && 0 !== (1 & n) && (kE(t, l), wE(t, l)), l = a
                                } while (l !== e)
                            }
                            return;
                        case 1:
                            return l = t.stateNode, 4 & t.flags && (null === e ? l.componentDidMount() : (a = t.elementType === t.type ? e.memoizedProps : $n(t.type, e.memoizedProps), l.componentDidUpdate(a, e.memoizedState, l.__reactInternalSnapshotBeforeUpdate))), void(null !== (e = t.updateQueue) && cr(t, e, l));
                        case 3:
                            if (null !== (e = t.updateQueue)) {
                                if (l = null, null !== t.child) switch (t.child.tag) {
                                    case 5:
                                    case 1:
                                        l = t.child.stateNode
                                }
                                cr(t, e, l)
                            }
                            return;
                        case 5:
                            return l = t.stateNode, void(null === e && 4 & t.flags && Ka(t.type, t.memoizedProps) && l.focus());
                        case 6:
                        case 4:
                        case 12:
                        case 19:
                        case 17:
                        case 20:
                        case 21:
                        case 23:
                        case 24:
                            return;
                        case 13:
                            return void(null === t.memoizedState && (t = t.alternate, null !== t && (t = t.memoizedState, null !== t && (t = t.dehydrated, null !== t && he(t)))))
                    }
                    throw Error(i(163))
                }

                function po(l, e) {
                    for (var t = l;;) {
                        if (5 === t.tag) {
                            var a = t.stateNode;
                            if (e) "function" === typeof(a = a.style).setProperty ? a.setProperty("display", "none", "important") : a.display = "none";
                            else {
                                a = t.stateNode;
                                var n = t.memoizedProps.style;
                                n = void 0 !== n && null !== n && n.hasOwnProperty("display") ? n.display : null, a.style.display = ml("display", n)
                            }
                        } else if (6 === t.tag) t.stateNode.nodeValue = e ? "" : t.memoizedProps;
                        else if ((23 !== t.tag && 24 !== t.tag || null === t.memoizedState || t === l) && null !== t.child) {
                            t.child.return = t, t = t.child;
                            continue
                        }
                        if (t === l) break;
                        for (; null === t.sibling;) {
                            if (null === t.return || t.return === l) return;
                            t = t.return
                        }
                        t.sibling.return = t.return, t = t.sibling
                    }
                }

                function Oo(l, e) {
                    if (Ln && "function" === typeof Ln.onCommitFiberUnmount) try {
                        Ln.onCommitFiberUnmount(gn, e)
                    } catch (r) {}
                    switch (e.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                        case 22:
                            if (null !== (l = e.updateQueue) && null !== (l = l.lastEffect)) {
                                var t = l = l.next;
                                do {
                                    var a = t,
                                        n = a.destroy;
                                    if (a = a.tag, void 0 !== n)
                                        if (0 !== (4 & a)) kE(e, t);
                                        else {
                                            a = e;
                                            try {
                                                n()
                                            } catch (r) {
                                                xE(a, r)
                                            }
                                        }
                                    t = t.next
                                } while (t !== l)
                            }
                            break;
                        case 1:
                            if (co(e), "function" === typeof(l = e.stateNode).componentWillUnmount) try {
                                l.props = e.memoizedProps, l.state = e.memoizedState, l.componentWillUnmount()
                            } catch (r) {
                                xE(e, r)
                            }
                            break;
                        case 5:
                            co(e);
                            break;
                        case 4:
                            yo(l, e)
                    }
                }

                function Ro(l) {
                    l.alternate = null, l.child = null, l.dependencies = null, l.firstEffect = null, l.lastEffect = null, l.memoizedProps = null, l.memoizedState = null, l.pendingProps = null, l.return = null, l.updateQueue = null
                }

                function mo(l) {
                    return 5 === l.tag || 3 === l.tag || 4 === l.tag
                }

                function ho(l) {
                    l: {
                        for (var e = l.return; null !== e;) {
                            if (mo(e)) break l;
                            e = e.return
                        }
                        throw Error(i(160))
                    }
                    var t = e;
                    switch (e = t.stateNode, t.tag) {
                        case 5:
                            var a = !1;
                            break;
                        case 3:
                        case 4:
                            e = e.containerInfo, a = !0;
                            break;
                        default:
                            throw Error(i(161))
                    }
                    16 & t.flags && (pl(e, ""), t.flags &= -17);l: e: for (t = l;;) {
                        for (; null === t.sibling;) {
                            if (null === t.return || mo(t.return)) {
                                t = null;
                                break l
                            }
                            t = t.return
                        }
                        for (t.sibling.return = t.return, t = t.sibling; 5 !== t.tag && 6 !== t.tag && 18 !== t.tag;) {
                            if (2 & t.flags) continue e;
                            if (null === t.child || 4 === t.tag) continue e;
                            t.child.return = t, t = t.child
                        }
                        if (!(2 & t.flags)) {
                            t = t.stateNode;
                            break l
                        }
                    }
                    a ? go(l, t, e) : Lo(l, t, e)
                }

                function go(l, e, t) {
                    var a = l.tag,
                        n = 5 === a || 6 === a;
                    if (n) l = n ? l.stateNode : l.stateNode.instance, e ? 8 === t.nodeType ? t.parentNode.insertBefore(l, e) : t.insertBefore(l, e) : (8 === t.nodeType ? (e = t.parentNode).insertBefore(l, t) : (e = t).appendChild(l), null !== (t = t._reactRootContainer) && void 0 !== t || null !== e.onclick || (e.onclick = Ca));
                    else if (4 !== a && null !== (l = l.child))
                        for (go(l, e, t), l = l.sibling; null !== l;) go(l, e, t), l = l.sibling
                }

                function Lo(l, e, t) {
                    var a = l.tag,
                        n = 5 === a || 6 === a;
                    if (n) l = n ? l.stateNode : l.stateNode.instance, e ? t.insertBefore(l, e) : t.appendChild(l);
                    else if (4 !== a && null !== (l = l.child))
                        for (Lo(l, e, t), l = l.sibling; null !== l;) Lo(l, e, t), l = l.sibling
                }

                function yo(l, e) {
                    for (var t, a, n = e, r = !1;;) {
                        if (!r) {
                            r = n.return;
                            l: for (;;) {
                                if (null === r) throw Error(i(160));
                                switch (t = r.stateNode, r.tag) {
                                    case 5:
                                        a = !1;
                                        break l;
                                    case 3:
                                    case 4:
                                        t = t.containerInfo, a = !0;
                                        break l
                                }
                                r = r.return
                            }
                            r = !0
                        }
                        if (5 === n.tag || 6 === n.tag) {
                            l: for (var o = l, E = n, N = E;;)
                                if (Oo(o, N), null !== N.child && 4 !== N.tag) N.child.return = N, N = N.child;
                                else {
                                    if (N === E) break l;
                                    for (; null === N.sibling;) {
                                        if (null === N.return || N.return === E) break l;
                                        N = N.return
                                    }
                                    N.sibling.return = N.return, N = N.sibling
                                }a ? (o = t, E = n.stateNode, 8 === o.nodeType ? o.parentNode.removeChild(E) : o.removeChild(E)) : t.removeChild(n.stateNode)
                        }
                        else if (4 === n.tag) {
                            if (null !== n.child) {
                                t = n.stateNode.containerInfo, a = !0, n.child.return = n, n = n.child;
                                continue
                            }
                        } else if (Oo(l, n), null !== n.child) {
                            n.child.return = n, n = n.child;
                            continue
                        }
                        if (n === e) break;
                        for (; null === n.sibling;) {
                            if (null === n.return || n.return === e) return;
                            4 === (n = n.return).tag && (r = !1)
                        }
                        n.sibling.return = n.return, n = n.sibling
                    }
                }

                function To(l, e) {
                    switch (e.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                        case 22:
                            var t = e.updateQueue;
                            if (null !== (t = null !== t ? t.lastEffect : null)) {
                                var a = t = t.next;
                                do {
                                    3 === (3 & a.tag) && (l = a.destroy, a.destroy = void 0, void 0 !== l && l()), a = a.next
                                } while (a !== t)
                            }
                            return;
                        case 1:
                        case 12:
                        case 17:
                            return;
                        case 5:
                            if (null != (t = e.stateNode)) {
                                a = e.memoizedProps;
                                var n = null !== l ? l.memoizedProps : a;
                                l = e.type;
                                var r = e.updateQueue;
                                if (e.updateQueue = null, null !== r) {
                                    for (t[Qa] = a, "input" === l && "radio" === a.type && null != a.name && el(t, a), yl(l, n), e = yl(l, a), n = 0; n < r.length; n += 2) {
                                        var o = r[n],
                                            E = r[n + 1];
                                        "style" === o ? hl(t, E) : "dangerouslySetInnerHTML" === o ? dl(t, E) : "children" === o ? pl(t, E) : R(t, o, E, e)
                                    }
                                    switch (l) {
                                        case "input":
                                            tl(t, a);
                                            break;
                                        case "textarea":
                                            Nl(t, a);
                                            break;
                                        case "select":
                                            l = t._wrapperState.wasMultiple, t._wrapperState.wasMultiple = !!a.multiple, null != (r = a.value) ? il(t, !!a.multiple, r, !1) : l !== !!a.multiple && (null != a.defaultValue ? il(t, !!a.multiple, a.defaultValue, !0) : il(t, !!a.multiple, a.multiple ? [] : "", !1))
                                    }
                                }
                            }
                            return;
                        case 6:
                            if (null === e.stateNode) throw Error(i(162));
                            return void(e.stateNode.nodeValue = e.memoizedProps);
                        case 3:
                            return void((t = e.stateNode).hydrate && (t.hydrate = !1, he(t.containerInfo)));
                        case 13:
                            return null !== e.memoizedState && (zo = Wn(), po(e.child, !0)), void Io(e);
                        case 19:
                            return void Io(e);
                        case 23:
                        case 24:
                            return void po(e, null !== e.memoizedState)
                    }
                    throw Error(i(163))
                }

                function Io(l) {
                    var e = l.updateQueue;
                    if (null !== e) {
                        l.updateQueue = null;
                        var t = l.stateNode;
                        null === t && (t = l.stateNode = new so), e.forEach((function(e) {
                            var a = KE.bind(null, l, e);
                            t.has(e) || (t.add(e), e.then(a, a))
                        }))
                    }
                }

                function So(l, e) {
                    return null !== l && (null === (l = l.memoizedState) || null !== l.dehydrated) && (null !== (e = e.memoizedState) && null === e.dehydrated)
                }
                var bo = Math.ceil,
                    Bo = m.ReactCurrentDispatcher,
                    vo = m.ReactCurrentOwner,
                    Uo = 0,
                    Go = null,
                    Fo = null,
                    Po = 0,
                    wo = 0,
                    ko = Nn(0),
                    Ho = 0,
                    Co = null,
                    xo = 0,
                    Do = 0,
                    Ko = 0,
                    Wo = 0,
                    Vo = null,
                    zo = 0,
                    Zo = 1 / 0;

                function jo() {
                    Zo = Wn() + 500
                }
                var Jo, qo = null,
                    Yo = !1,
                    $o = null,
                    Qo = null,
                    Xo = !1,
                    lE = null,
                    eE = 90,
                    tE = [],
                    aE = [],
                    nE = null,
                    rE = 0,
                    iE = null,
                    oE = -1,
                    EE = 0,
                    NE = 0,
                    AE = null,
                    uE = !1;

                function _E() {
                    return 0 !== (48 & Uo) ? Wn() : -1 !== oE ? oE : oE = Wn()
                }

                function sE(l) {
                    if (0 === (2 & (l = l.mode))) return 1;
                    if (0 === (4 & l)) return 99 === Vn() ? 1 : 2;
                    if (0 === EE && (EE = xo), 0 !== Yn.transition) {
                        0 !== NE && (NE = null !== Vo ? Vo.pendingLanes : 0), l = EE;
                        var e = 4186112 & ~NE;
                        return 0 === (e &= -e) && (0 === (e = (l = 4186112 & ~l) & -l) && (e = 8192)), e
                    }
                    return l = Vn(), 0 !== (4 & Uo) && 98 === l ? l = xe(12, EE) : l = xe(l = function(l) {
                        switch (l) {
                            case 99:
                                return 15;
                            case 98:
                                return 10;
                            case 97:
                            case 96:
                                return 8;
                            case 95:
                                return 2;
                            default:
                                return 0
                        }
                    }(l), EE), l
                }

                function cE(l, e, t) {
                    if (50 < rE) throw rE = 0, iE = null, Error(i(185));
                    if (null === (l = ME(l, e))) return null;
                    We(l, e, t), l === Go && (Ko |= e, 4 === Ho && pE(l, Po));
                    var a = Vn();
                    1 === e ? 0 !== (8 & Uo) && 0 === (48 & Uo) ? OE(l) : (fE(l, t), 0 === Uo && (jo(), Jn())) : (0 === (4 & Uo) || 98 !== a && 99 !== a || (null === nE ? nE = new Set([l]) : nE.add(l)), fE(l, t)), Vo = l
                }

                function ME(l, e) {
                    l.lanes |= e;
                    var t = l.alternate;
                    for (null !== t && (t.lanes |= e), t = l, l = l.return; null !== l;) l.childLanes |= e, null !== (t = l.alternate) && (t.childLanes |= e), t = l, l = l.return;
                    return 3 === t.tag ? t.stateNode : null
                }

                function fE(l, e) {
                    for (var t = l.callbackNode, a = l.suspendedLanes, n = l.pingedLanes, r = l.expirationTimes, o = l.pendingLanes; 0 < o;) {
                        var E = 31 - Ve(o),
                            N = 1 << E,
                            A = r[E];
                        if (-1 === A) {
                            if (0 === (N & a) || 0 !== (N & n)) {
                                A = e, ke(N);
                                var u = we;
                                r[E] = 10 <= u ? A + 250 : 6 <= u ? A + 5e3 : -1
                            }
                        } else A <= e && (l.expiredLanes |= N);
                        o &= ~N
                    }
                    if (a = He(l, l === Go ? Po : 0), e = we, 0 === a) null !== t && (t !== kn && In(t), l.callbackNode = null, l.callbackPriority = 0);
                    else {
                        if (null !== t) {
                            if (l.callbackPriority === e) return;
                            t !== kn && In(t)
                        }
                        15 === e ? (t = OE.bind(null, l), null === Cn ? (Cn = [t], xn = Tn(Un, qn)) : Cn.push(t), t = kn) : 14 === e ? t = jn(99, OE.bind(null, l)) : (t = function(l) {
                            switch (l) {
                                case 15:
                                case 14:
                                    return 99;
                                case 13:
                                case 12:
                                case 11:
                                case 10:
                                    return 98;
                                case 9:
                                case 8:
                                case 7:
                                case 6:
                                case 4:
                                case 5:
                                    return 97;
                                case 3:
                                case 2:
                                case 1:
                                    return 95;
                                case 0:
                                    return 90;
                                default:
                                    throw Error(i(358, l))
                            }
                        }(e), t = jn(t, dE.bind(null, l))), l.callbackPriority = e, l.callbackNode = t
                    }
                }

                function dE(l) {
                    if (oE = -1, NE = EE = 0, 0 !== (48 & Uo)) throw Error(i(327));
                    var e = l.callbackNode;
                    if (PE() && l.callbackNode !== e) return null;
                    var t = He(l, l === Go ? Po : 0);
                    if (0 === t) return null;
                    var a = t,
                        n = Uo;
                    Uo |= 16;
                    var r = TE();
                    for (Go === l && Po === a || (jo(), LE(l, a));;) try {
                        bE();
                        break
                    } catch (E) {
                        yE(l, E)
                    }
                    if (tr(), Bo.current = r, Uo = n, null !== Fo ? a = 0 : (Go = null, Po = 0, a = Ho), 0 !== (xo & Ko)) LE(l, 0);
                    else if (0 !== a) {
                        if (2 === a && (Uo |= 64, l.hydrate && (l.hydrate = !1, Za(l.containerInfo)), 0 !== (t = Ce(l)) && (a = IE(l, t))), 1 === a) throw e = Co, LE(l, 0), pE(l, t), fE(l, Wn()), e;
                        switch (l.finishedWork = l.current.alternate, l.finishedLanes = t, a) {
                            case 0:
                            case 1:
                                throw Error(i(345));
                            case 2:
                            case 5:
                                UE(l);
                                break;
                            case 3:
                                if (pE(l, t), (62914560 & t) === t && 10 < (a = zo + 500 - Wn())) {
                                    if (0 !== He(l, 0)) break;
                                    if (((n = l.suspendedLanes) & t) !== t) {
                                        _E(), l.pingedLanes |= l.suspendedLanes & n;
                                        break
                                    }
                                    l.timeoutHandle = Va(UE.bind(null, l), a);
                                    break
                                }
                                UE(l);
                                break;
                            case 4:
                                if (pE(l, t), (4186112 & t) === t) break;
                                for (a = l.eventTimes, n = -1; 0 < t;) {
                                    var o = 31 - Ve(t);
                                    r = 1 << o, (o = a[o]) > n && (n = o), t &= ~r
                                }
                                if (t = n, 10 < (t = (120 > (t = Wn() - t) ? 120 : 480 > t ? 480 : 1080 > t ? 1080 : 1920 > t ? 1920 : 3e3 > t ? 3e3 : 4320 > t ? 4320 : 1960 * bo(t / 1960)) - t)) {
                                    l.timeoutHandle = Va(UE.bind(null, l), t);
                                    break
                                }
                                UE(l);
                                break;
                            default:
                                throw Error(i(329))
                        }
                    }
                    return fE(l, Wn()), l.callbackNode === e ? dE.bind(null, l) : null
                }

                function pE(l, e) {
                    for (e &= ~Wo, e &= ~Ko, l.suspendedLanes |= e, l.pingedLanes &= ~e, l = l.expirationTimes; 0 < e;) {
                        var t = 31 - Ve(e),
                            a = 1 << t;
                        l[t] = -1, e &= ~a
                    }
                }

                function OE(l) {
                    if (0 !== (48 & Uo)) throw Error(i(327));
                    if (PE(), l === Go && 0 !== (l.expiredLanes & Po)) {
                        var e = Po,
                            t = IE(l, e);
                        0 !== (xo & Ko) && (t = IE(l, e = He(l, e)))
                    } else t = IE(l, e = He(l, 0));
                    if (0 !== l.tag && 2 === t && (Uo |= 64, l.hydrate && (l.hydrate = !1, Za(l.containerInfo)), 0 !== (e = Ce(l)) && (t = IE(l, e))), 1 === t) throw t = Co, LE(l, 0), pE(l, e), fE(l, Wn()), t;
                    return l.finishedWork = l.current.alternate, l.finishedLanes = e, UE(l), fE(l, Wn()), null
                }

                function RE(l, e) {
                    var t = Uo;
                    Uo |= 1;
                    try {
                        return l(e)
                    } finally {
                        0 === (Uo = t) && (jo(), Jn())
                    }
                }

                function mE(l, e) {
                    var t = Uo;
                    Uo &= -2, Uo |= 8;
                    try {
                        return l(e)
                    } finally {
                        0 === (Uo = t) && (jo(), Jn())
                    }
                }

                function hE(l, e) {
                    un(ko, wo), wo |= e, xo |= e
                }

                function gE() {
                    wo = ko.current, An(ko)
                }

                function LE(l, e) {
                    l.finishedWork = null, l.finishedLanes = 0;
                    var t = l.timeoutHandle;
                    if (-1 !== t && (l.timeoutHandle = -1, za(t)), null !== Fo)
                        for (t = Fo.return; null !== t;) {
                            var a = t;
                            switch (a.tag) {
                                case 1:
                                    null !== (a = a.type.childContextTypes) && void 0 !== a && pn();
                                    break;
                                case 3:
                                    Fr(), An(cn), An(sn), qr();
                                    break;
                                case 5:
                                    wr(a);
                                    break;
                                case 4:
                                    Fr();
                                    break;
                                case 13:
                                case 19:
                                    An(kr);
                                    break;
                                case 10:
                                    ar(a);
                                    break;
                                case 23:
                                case 24:
                                    gE()
                            }
                            t = t.return
                        }
                    Go = l, Fo = ZE(l.current, null), Po = wo = xo = e, Ho = 0, Co = null, Wo = Ko = Do = 0
                }

                function yE(l, e) {
                    for (;;) {
                        var t = Fo;
                        try {
                            if (tr(), Yr.current = vi, ti) {
                                for (var a = Xr.memoizedState; null !== a;) {
                                    var n = a.queue;
                                    null !== n && (n.pending = null), a = a.next
                                }
                                ti = !1
                            }
                            if (Qr = 0, ei = li = Xr = null, ai = !1, vo.current = null, null === t || null === t.return) {
                                Ho = 1, Co = e, Fo = null;
                                break
                            }
                            l: {
                                var r = l,
                                    i = t.return,
                                    o = t,
                                    E = e;
                                if (e = Po, o.flags |= 2048, o.firstEffect = o.lastEffect = null, null !== E && "object" === typeof E && "function" === typeof E.then) {
                                    var N = E;
                                    if (0 === (2 & o.mode)) {
                                        var A = o.alternate;
                                        A ? (o.updateQueue = A.updateQueue, o.memoizedState = A.memoizedState, o.lanes = A.lanes) : (o.updateQueue = null, o.memoizedState = null)
                                    }
                                    var u = 0 !== (1 & kr.current),
                                        _ = i;
                                    do {
                                        var s;
                                        if (s = 13 === _.tag) {
                                            var c = _.memoizedState;
                                            if (null !== c) s = null !== c.dehydrated;
                                            else {
                                                var M = _.memoizedProps;
                                                s = void 0 !== M.fallback && (!0 !== M.unstable_avoidThisFallback || !u)
                                            }
                                        }
                                        if (s) {
                                            var f = _.updateQueue;
                                            if (null === f) {
                                                var d = new Set;
                                                d.add(N), _.updateQueue = d
                                            } else f.add(N);
                                            if (0 === (2 & _.mode)) {
                                                if (_.flags |= 64, o.flags |= 16384, o.flags &= -2981, 1 === o.tag)
                                                    if (null === o.alternate) o.tag = 17;
                                                    else {
                                                        var p = Ar(-1, 1);
                                                        p.tag = 2, ur(o, p)
                                                    }
                                                o.lanes |= 1;
                                                break l
                                            }
                                            E = void 0, o = e;
                                            var O = r.pingCache;
                                            if (null === O ? (O = r.pingCache = new Ao, E = new Set, O.set(N, E)) : void 0 === (E = O.get(N)) && (E = new Set, O.set(N, E)), !E.has(o)) {
                                                E.add(o);
                                                var R = DE.bind(null, r, N, o);
                                                N.then(R, R)
                                            }
                                            _.flags |= 4096, _.lanes = e;
                                            break l
                                        }
                                        _ = _.return
                                    } while (null !== _);
                                    E = Error((j(o.type) || "A React component") + " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.")
                                }
                                5 !== Ho && (Ho = 2),
                                E = Eo(E, o),
                                _ = i;do {
                                    switch (_.tag) {
                                        case 3:
                                            r = E, _.flags |= 4096, e &= -e, _.lanes |= e, _r(_, uo(0, r, e));
                                            break l;
                                        case 1:
                                            r = E;
                                            var m = _.type,
                                                h = _.stateNode;
                                            if (0 === (64 & _.flags) && ("function" === typeof m.getDerivedStateFromError || null !== h && "function" === typeof h.componentDidCatch && (null === Qo || !Qo.has(h)))) {
                                                _.flags |= 4096, e &= -e, _.lanes |= e, _r(_, _o(_, r, e));
                                                break l
                                            }
                                    }
                                    _ = _.return
                                } while (null !== _)
                            }
                            vE(t)
                        } catch (g) {
                            e = g, Fo === t && null !== t && (Fo = t = t.return);
                            continue
                        }
                        break
                    }
                }

                function TE() {
                    var l = Bo.current;
                    return Bo.current = vi, null === l ? vi : l
                }

                function IE(l, e) {
                    var t = Uo;
                    Uo |= 16;
                    var a = TE();
                    for (Go === l && Po === e || LE(l, e);;) try {
                        SE();
                        break
                    } catch (n) {
                        yE(l, n)
                    }
                    if (tr(), Uo = t, Bo.current = a, null !== Fo) throw Error(i(261));
                    return Go = null, Po = 0, Ho
                }

                function SE() {
                    for (; null !== Fo;) BE(Fo)
                }

                function bE() {
                    for (; null !== Fo && !Sn();) BE(Fo)
                }

                function BE(l) {
                    var e = Jo(l.alternate, l, wo);
                    l.memoizedProps = l.pendingProps, null === e ? vE(l) : Fo = e, vo.current = null
                }

                function vE(l) {
                    var e = l;
                    do {
                        var t = e.alternate;
                        if (l = e.return, 0 === (2048 & e.flags)) {
                            if (null !== (t = io(t, e, wo))) return void(Fo = t);
                            if (24 !== (t = e).tag && 23 !== t.tag || null === t.memoizedState || 0 !== (1073741824 & wo) || 0 === (4 & t.mode)) {
                                for (var a = 0, n = t.child; null !== n;) a |= n.lanes | n.childLanes, n = n.sibling;
                                t.childLanes = a
                            }
                            null !== l && 0 === (2048 & l.flags) && (null === l.firstEffect && (l.firstEffect = e.firstEffect), null !== e.lastEffect && (null !== l.lastEffect && (l.lastEffect.nextEffect = e.firstEffect), l.lastEffect = e.lastEffect), 1 < e.flags && (null !== l.lastEffect ? l.lastEffect.nextEffect = e : l.firstEffect = e, l.lastEffect = e))
                        } else {
                            if (null !== (t = oo(e))) return t.flags &= 2047, void(Fo = t);
                            null !== l && (l.firstEffect = l.lastEffect = null, l.flags |= 2048)
                        }
                        if (null !== (e = e.sibling)) return void(Fo = e);
                        Fo = e = l
                    } while (null !== e);
                    0 === Ho && (Ho = 5)
                }

                function UE(l) {
                    var e = Vn();
                    return Zn(99, GE.bind(null, l, e)), null
                }

                function GE(l, e) {
                    do {
                        PE()
                    } while (null !== lE);
                    if (0 !== (48 & Uo)) throw Error(i(327));
                    var t = l.finishedWork;
                    if (null === t) return null;
                    if (l.finishedWork = null, l.finishedLanes = 0, t === l.current) throw Error(i(177));
                    l.callbackNode = null;
                    var a = t.lanes | t.childLanes,
                        n = a,
                        r = l.pendingLanes & ~n;
                    l.pendingLanes = n, l.suspendedLanes = 0, l.pingedLanes = 0, l.expiredLanes &= n, l.mutableReadLanes &= n, l.entangledLanes &= n, n = l.entanglements;
                    for (var o = l.eventTimes, E = l.expirationTimes; 0 < r;) {
                        var N = 31 - Ve(r),
                            A = 1 << N;
                        n[N] = 0, o[N] = -1, E[N] = -1, r &= ~A
                    }
                    if (null !== nE && 0 === (24 & a) && nE.has(l) && nE.delete(l), l === Go && (Fo = Go = null, Po = 0), 1 < t.flags ? null !== t.lastEffect ? (t.lastEffect.nextEffect = t, a = t.firstEffect) : a = t : a = t.firstEffect, null !== a) {
                        if (n = Uo, Uo |= 32, vo.current = null, xa = qe, fa(o = Ma())) {
                            if ("selectionStart" in o) E = {
                                start: o.selectionStart,
                                end: o.selectionEnd
                            };
                            else l: if (E = (E = o.ownerDocument) && E.defaultView || window, (A = E.getSelection && E.getSelection()) && 0 !== A.rangeCount) {
                                E = A.anchorNode, r = A.anchorOffset, N = A.focusNode, A = A.focusOffset;
                                try {
                                    E.nodeType, N.nodeType
                                } catch (T) {
                                    E = null;
                                    break l
                                }
                                var u = 0,
                                    _ = -1,
                                    s = -1,
                                    c = 0,
                                    M = 0,
                                    f = o,
                                    d = null;
                                e: for (;;) {
                                    for (var p; f !== E || 0 !== r && 3 !== f.nodeType || (_ = u + r), f !== N || 0 !== A && 3 !== f.nodeType || (s = u + A), 3 === f.nodeType && (u += f.nodeValue.length), null !== (p = f.firstChild);) d = f, f = p;
                                    for (;;) {
                                        if (f === o) break e;
                                        if (d === E && ++c === r && (_ = u), d === N && ++M === A && (s = u), null !== (p = f.nextSibling)) break;
                                        d = (f = d).parentNode
                                    }
                                    f = p
                                }
                                E = -1 === _ || -1 === s ? null : {
                                    start: _,
                                    end: s
                                }
                            } else E = null;
                            E = E || {
                                start: 0,
                                end: 0
                            }
                        } else E = null;
                        Da = {
                            focusedElem: o,
                            selectionRange: E
                        }, qe = !1, AE = null, uE = !1, qo = a;
                        do {
                            try {
                                FE()
                            } catch (T) {
                                if (null === qo) throw Error(i(330));
                                xE(qo, T), qo = qo.nextEffect
                            }
                        } while (null !== qo);
                        AE = null, qo = a;
                        do {
                            try {
                                for (o = l; null !== qo;) {
                                    var O = qo.flags;
                                    if (16 & O && pl(qo.stateNode, ""), 128 & O) {
                                        var R = qo.alternate;
                                        if (null !== R) {
                                            var m = R.ref;
                                            null !== m && ("function" === typeof m ? m(null) : m.current = null)
                                        }
                                    }
                                    switch (1038 & O) {
                                        case 2:
                                            ho(qo), qo.flags &= -3;
                                            break;
                                        case 6:
                                            ho(qo), qo.flags &= -3, To(qo.alternate, qo);
                                            break;
                                        case 1024:
                                            qo.flags &= -1025;
                                            break;
                                        case 1028:
                                            qo.flags &= -1025, To(qo.alternate, qo);
                                            break;
                                        case 4:
                                            To(qo.alternate, qo);
                                            break;
                                        case 8:
                                            yo(o, E = qo);
                                            var h = E.alternate;
                                            Ro(E), null !== h && Ro(h)
                                    }
                                    qo = qo.nextEffect
                                }
                            } catch (T) {
                                if (null === qo) throw Error(i(330));
                                xE(qo, T), qo = qo.nextEffect
                            }
                        } while (null !== qo);
                        if (m = Da, R = Ma(), O = m.focusedElem, o = m.selectionRange, R !== O && O && O.ownerDocument && ca(O.ownerDocument.documentElement, O)) {
                            null !== o && fa(O) && (R = o.start, void 0 === (m = o.end) && (m = R), "selectionStart" in O ? (O.selectionStart = R, O.selectionEnd = Math.min(m, O.value.length)) : (m = (R = O.ownerDocument || document) && R.defaultView || window).getSelection && (m = m.getSelection(), E = O.textContent.length, h = Math.min(o.start, E), o = void 0 === o.end ? h : Math.min(o.end, E), !m.extend && h > o && (E = o, o = h, h = E), E = sa(O, h), r = sa(O, o), E && r && (1 !== m.rangeCount || m.anchorNode !== E.node || m.anchorOffset !== E.offset || m.focusNode !== r.node || m.focusOffset !== r.offset) && ((R = R.createRange()).setStart(E.node, E.offset), m.removeAllRanges(), h > o ? (m.addRange(R), m.extend(r.node, r.offset)) : (R.setEnd(r.node, r.offset), m.addRange(R))))), R = [];
                            for (m = O; m = m.parentNode;) 1 === m.nodeType && R.push({
                                element: m,
                                left: m.scrollLeft,
                                top: m.scrollTop
                            });
                            for ("function" === typeof O.focus && O.focus(), O = 0; O < R.length; O++)(m = R[O]).element.scrollLeft = m.left, m.element.scrollTop = m.top
                        }
                        qe = !!xa, Da = xa = null, l.current = t, qo = a;
                        do {
                            try {
                                for (O = l; null !== qo;) {
                                    var g = qo.flags;
                                    if (36 & g && fo(O, qo.alternate, qo), 128 & g) {
                                        R = void 0;
                                        var L = qo.ref;
                                        if (null !== L) {
                                            var y = qo.stateNode;
                                            qo.tag, R = y, "function" === typeof L ? L(R) : L.current = R
                                        }
                                    }
                                    qo = qo.nextEffect
                                }
                            } catch (T) {
                                if (null === qo) throw Error(i(330));
                                xE(qo, T), qo = qo.nextEffect
                            }
                        } while (null !== qo);
                        qo = null, Hn(), Uo = n
                    } else l.current = t;
                    if (Xo) Xo = !1, lE = l, eE = e;
                    else
                        for (qo = a; null !== qo;) e = qo.nextEffect, qo.nextEffect = null, 8 & qo.flags && ((g = qo).sibling = null, g.stateNode = null), qo = e;
                    if (0 === (a = l.pendingLanes) && (Qo = null), 1 === a ? l === iE ? rE++ : (rE = 0, iE = l) : rE = 0, t = t.stateNode, Ln && "function" === typeof Ln.onCommitFiberRoot) try {
                        Ln.onCommitFiberRoot(gn, t, void 0, 64 === (64 & t.current.flags))
                    } catch (T) {}
                    if (fE(l, Wn()), Yo) throw Yo = !1, l = $o, $o = null, l;
                    return 0 !== (8 & Uo) || Jn(), null
                }

                function FE() {
                    for (; null !== qo;) {
                        var l = qo.alternate;
                        uE || null === AE || (0 !== (8 & qo.flags) ? le(qo, AE) && (uE = !0) : 13 === qo.tag && So(l, qo) && le(qo, AE) && (uE = !0));
                        var e = qo.flags;
                        0 !== (256 & e) && Mo(l, qo), 0 === (512 & e) || Xo || (Xo = !0, jn(97, (function() {
                            return PE(), null
                        }))), qo = qo.nextEffect
                    }
                }

                function PE() {
                    if (90 !== eE) {
                        var l = 97 < eE ? 97 : eE;
                        return eE = 90, Zn(l, HE)
                    }
                    return !1
                }

                function wE(l, e) {
                    tE.push(e, l), Xo || (Xo = !0, jn(97, (function() {
                        return PE(), null
                    })))
                }

                function kE(l, e) {
                    aE.push(e, l), Xo || (Xo = !0, jn(97, (function() {
                        return PE(), null
                    })))
                }

                function HE() {
                    if (null === lE) return !1;
                    var l = lE;
                    if (lE = null, 0 !== (48 & Uo)) throw Error(i(331));
                    var e = Uo;
                    Uo |= 32;
                    var t = aE;
                    aE = [];
                    for (var a = 0; a < t.length; a += 2) {
                        var n = t[a],
                            r = t[a + 1],
                            o = n.destroy;
                        if (n.destroy = void 0, "function" === typeof o) try {
                            o()
                        } catch (N) {
                            if (null === r) throw Error(i(330));
                            xE(r, N)
                        }
                    }
                    for (t = tE, tE = [], a = 0; a < t.length; a += 2) {
                        n = t[a], r = t[a + 1];
                        try {
                            var E = n.create;
                            n.destroy = E()
                        } catch (N) {
                            if (null === r) throw Error(i(330));
                            xE(r, N)
                        }
                    }
                    for (E = l.current.firstEffect; null !== E;) l = E.nextEffect, E.nextEffect = null, 8 & E.flags && (E.sibling = null, E.stateNode = null), E = l;
                    return Uo = e, Jn(), !0
                }

                function CE(l, e, t) {
                    ur(l, e = uo(0, e = Eo(t, e), 1)), e = _E(), null !== (l = ME(l, 1)) && (We(l, 1, e), fE(l, e))
                }

                function xE(l, e) {
                    if (3 === l.tag) CE(l, l, e);
                    else
                        for (var t = l.return; null !== t;) {
                            if (3 === t.tag) {
                                CE(t, l, e);
                                break
                            }
                            if (1 === t.tag) {
                                var a = t.stateNode;
                                if ("function" === typeof t.type.getDerivedStateFromError || "function" === typeof a.componentDidCatch && (null === Qo || !Qo.has(a))) {
                                    var n = _o(t, l = Eo(e, l), 1);
                                    if (ur(t, n), n = _E(), null !== (t = ME(t, 1))) We(t, 1, n), fE(t, n);
                                    else if ("function" === typeof a.componentDidCatch && (null === Qo || !Qo.has(a))) try {
                                        a.componentDidCatch(e, l)
                                    } catch (r) {}
                                    break
                                }
                            }
                            t = t.return
                        }
                }

                function DE(l, e, t) {
                    var a = l.pingCache;
                    null !== a && a.delete(e), e = _E(), l.pingedLanes |= l.suspendedLanes & t, Go === l && (Po & t) === t && (4 === Ho || 3 === Ho && (62914560 & Po) === Po && 500 > Wn() - zo ? LE(l, 0) : Wo |= t), fE(l, e)
                }

                function KE(l, e) {
                    var t = l.stateNode;
                    null !== t && t.delete(e), 0 === (e = 0) && (0 === (2 & (e = l.mode)) ? e = 1 : 0 === (4 & e) ? e = 99 === Vn() ? 1 : 2 : (0 === EE && (EE = xo), 0 === (e = De(62914560 & ~EE)) && (e = 4194304))), t = _E(), null !== (l = ME(l, e)) && (We(l, e, t), fE(l, t))
                }

                function WE(l, e, t, a) {
                    this.tag = l, this.key = t, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.flags = 0, this.lastEffect = this.firstEffect = this.nextEffect = null, this.childLanes = this.lanes = 0, this.alternate = null
                }

                function VE(l, e, t, a) {
                    return new WE(l, e, t, a)
                }

                function zE(l) {
                    return !(!(l = l.prototype) || !l.isReactComponent)
                }

                function ZE(l, e) {
                    var t = l.alternate;
                    return null === t ? ((t = VE(l.tag, e, l.key, l.mode)).elementType = l.elementType, t.type = l.type, t.stateNode = l.stateNode, t.alternate = l, l.alternate = t) : (t.pendingProps = e, t.type = l.type, t.flags = 0, t.nextEffect = null, t.firstEffect = null, t.lastEffect = null), t.childLanes = l.childLanes, t.lanes = l.lanes, t.child = l.child, t.memoizedProps = l.memoizedProps, t.memoizedState = l.memoizedState, t.updateQueue = l.updateQueue, e = l.dependencies, t.dependencies = null === e ? null : {
                        lanes: e.lanes,
                        firstContext: e.firstContext
                    }, t.sibling = l.sibling, t.index = l.index, t.ref = l.ref, t
                }

                function jE(l, e, t, a, n, r) {
                    var o = 2;
                    if (a = l, "function" === typeof l) zE(l) && (o = 1);
                    else if ("string" === typeof l) o = 5;
                    else l: switch (l) {
                        case L:
                            return JE(t.children, n, r, e);
                        case w:
                            o = 8, n |= 16;
                            break;
                        case y:
                            o = 8, n |= 1;
                            break;
                        case T:
                            return (l = VE(12, t, e, 8 | n)).elementType = T, l.type = T, l.lanes = r, l;
                        case B:
                            return (l = VE(13, t, e, n)).type = B, l.elementType = B, l.lanes = r, l;
                        case v:
                            return (l = VE(19, t, e, n)).elementType = v, l.lanes = r, l;
                        case k:
                            return qE(t, n, r, e);
                        case H:
                            return (l = VE(24, t, e, n)).elementType = H, l.lanes = r, l;
                        default:
                            if ("object" === typeof l && null !== l) switch (l.$$typeof) {
                                case I:
                                    o = 10;
                                    break l;
                                case S:
                                    o = 9;
                                    break l;
                                case b:
                                    o = 11;
                                    break l;
                                case U:
                                    o = 14;
                                    break l;
                                case G:
                                    o = 16, a = null;
                                    break l;
                                case F:
                                    o = 22;
                                    break l
                            }
                            throw Error(i(130, null == l ? l : typeof l, ""))
                    }
                    return (e = VE(o, t, e, n)).elementType = l, e.type = a, e.lanes = r, e
                }

                function JE(l, e, t, a) {
                    return (l = VE(7, l, a, e)).lanes = t, l
                }

                function qE(l, e, t, a) {
                    return (l = VE(23, l, a, e)).elementType = k, l.lanes = t, l
                }

                function YE(l, e, t) {
                    return (l = VE(6, l, null, e)).lanes = t, l
                }

                function $E(l, e, t) {
                    return (e = VE(4, null !== l.children ? l.children : [], l.key, e)).lanes = t, e.stateNode = {
                        containerInfo: l.containerInfo,
                        pendingChildren: null,
                        implementation: l.implementation
                    }, e
                }

                function QE(l, e, t) {
                    this.tag = e, this.containerInfo = l, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.pendingContext = this.context = null, this.hydrate = t, this.callbackNode = null, this.callbackPriority = 0, this.eventTimes = Ke(0), this.expirationTimes = Ke(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ke(0), this.mutableSourceEagerHydrationData = null
                }

                function XE(l, e, t) {
                    var a = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
                    return {
                        $$typeof: g,
                        key: null == a ? null : "" + a,
                        children: l,
                        containerInfo: e,
                        implementation: t
                    }
                }

                function lN(l, e, t, a) {
                    var n = e.current,
                        r = _E(),
                        o = sE(n);
                    l: if (t) {
                        e: {
                            if (Yl(t = t._reactInternals) !== t || 1 !== t.tag) throw Error(i(170));
                            var E = t;do {
                                switch (E.tag) {
                                    case 3:
                                        E = E.stateNode.context;
                                        break e;
                                    case 1:
                                        if (dn(E.type)) {
                                            E = E.stateNode.__reactInternalMemoizedMergedChildContext;
                                            break e
                                        }
                                }
                                E = E.return
                            } while (null !== E);
                            throw Error(i(171))
                        }
                        if (1 === t.tag) {
                            var N = t.type;
                            if (dn(N)) {
                                t = Rn(t, N, E);
                                break l
                            }
                        }
                        t = E
                    }
                    else t = _n;
                    return null === e.context ? e.context = t : e.pendingContext = t, (e = Ar(r, o)).payload = {
                        element: l
                    }, null !== (a = void 0 === a ? null : a) && (e.callback = a), ur(n, e), cE(n, o, r), o
                }

                function eN(l) {
                    return (l = l.current).child ? (l.child.tag, l.child.stateNode) : null
                }

                function tN(l, e) {
                    if (null !== (l = l.memoizedState) && null !== l.dehydrated) {
                        var t = l.retryLane;
                        l.retryLane = 0 !== t && t < e ? t : e
                    }
                }

                function aN(l, e) {
                    tN(l, e), (l = l.alternate) && tN(l, e)
                }

                function nN(l, e, t) {
                    var a = null != t && null != t.hydrationOptions && t.hydrationOptions.mutableSources || null;
                    if (t = new QE(l, e, null != t && !0 === t.hydrate), e = VE(3, null, null, 2 === e ? 7 : 1 === e ? 3 : 0), t.current = e, e.stateNode = t, Er(e), l[Xa] = t.current, va(8 === l.nodeType ? l.parentNode : l), a)
                        for (l = 0; l < a.length; l++) {
                            var n = (e = a[l])._getVersion;
                            n = n(e._source), null == t.mutableSourceEagerHydrationData ? t.mutableSourceEagerHydrationData = [e, n] : t.mutableSourceEagerHydrationData.push(e, n)
                        }
                    this._internalRoot = t
                }

                function rN(l) {
                    return !(!l || 1 !== l.nodeType && 9 !== l.nodeType && 11 !== l.nodeType && (8 !== l.nodeType || " react-mount-point-unstable " !== l.nodeValue))
                }

                function iN(l, e, t, a, n) {
                    var r = t._reactRootContainer;
                    if (r) {
                        var i = r._internalRoot;
                        if ("function" === typeof n) {
                            var o = n;
                            n = function() {
                                var l = eN(i);
                                o.call(l)
                            }
                        }
                        lN(e, i, l, n)
                    } else {
                        if (r = t._reactRootContainer = function(l, e) {
                                if (e || (e = !(!(e = l ? 9 === l.nodeType ? l.documentElement : l.firstChild : null) || 1 !== e.nodeType || !e.hasAttribute("data-reactroot"))), !e)
                                    for (var t; t = l.lastChild;) l.removeChild(t);
                                return new nN(l, 0, e ? {
                                    hydrate: !0
                                } : void 0)
                            }(t, a), i = r._internalRoot, "function" === typeof n) {
                            var E = n;
                            n = function() {
                                var l = eN(i);
                                E.call(l)
                            }
                        }
                        mE((function() {
                            lN(e, i, l, n)
                        }))
                    }
                    return eN(i)
                }

                function oN(l, e) {
                    var t = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
                    if (!rN(e)) throw Error(i(200));
                    return XE(l, e, null, t)
                }
                Jo = function(l, e, t) {
                    var a = e.lanes;
                    if (null !== l)
                        if (l.memoizedProps !== e.pendingProps || cn.current) wi = !0;
                        else {
                            if (0 === (t & a)) {
                                switch (wi = !1, e.tag) {
                                    case 3:
                                        Zi(e), jr();
                                        break;
                                    case 5:
                                        Pr(e);
                                        break;
                                    case 1:
                                        dn(e.type) && mn(e);
                                        break;
                                    case 4:
                                        Gr(e, e.stateNode.containerInfo);
                                        break;
                                    case 10:
                                        a = e.memoizedProps.value;
                                        var n = e.type._context;
                                        un(Qn, n._currentValue), n._currentValue = a;
                                        break;
                                    case 13:
                                        if (null !== e.memoizedState) return 0 !== (t & e.child.childLanes) ? $i(l, e, t) : (un(kr, 1 & kr.current), null !== (e = no(l, e, t)) ? e.sibling : null);
                                        un(kr, 1 & kr.current);
                                        break;
                                    case 19:
                                        if (a = 0 !== (t & e.childLanes), 0 !== (64 & l.flags)) {
                                            if (a) return ao(l, e, t);
                                            e.flags |= 64
                                        }
                                        if (null !== (n = e.memoizedState) && (n.rendering = null, n.tail = null, n.lastEffect = null), un(kr, kr.current), a) break;
                                        return null;
                                    case 23:
                                    case 24:
                                        return e.lanes = 0, Di(l, e, t)
                                }
                                return no(l, e, t)
                            }
                            wi = 0 !== (16384 & l.flags)
                        }
                    else wi = !1;
                    switch (e.lanes = 0, e.tag) {
                        case 2:
                            if (a = e.type, null !== l && (l.alternate = null, e.alternate = null, e.flags |= 2), l = e.pendingProps, n = fn(e, sn.current), rr(e, t), n = ii(null, e, a, l, n, t), e.flags |= 1, "object" === typeof n && null !== n && "function" === typeof n.render && void 0 === n.$$typeof) {
                                if (e.tag = 1, e.memoizedState = null, e.updateQueue = null, dn(a)) {
                                    var r = !0;
                                    mn(e)
                                } else r = !1;
                                e.memoizedState = null !== n.state && void 0 !== n.state ? n.state : null, Er(e);
                                var o = a.getDerivedStateFromProps;
                                "function" === typeof o && fr(e, a, o, l), n.updater = dr, e.stateNode = n, n._reactInternals = e, mr(e, a, l, t), e = zi(null, e, a, !0, r, t)
                            } else e.tag = 0, ki(null, e, n, t), e = e.child;
                            return e;
                        case 16:
                            n = e.elementType;
                            l: {
                                switch (null !== l && (l.alternate = null, e.alternate = null, e.flags |= 2), l = e.pendingProps, n = (r = n._init)(n._payload), e.type = n, r = e.tag = function(l) {
                                    if ("function" === typeof l) return zE(l) ? 1 : 0;
                                    if (void 0 !== l && null !== l) {
                                        if ((l = l.$$typeof) === b) return 11;
                                        if (l === U) return 14
                                    }
                                    return 2
                                }(n), l = $n(n, l), r) {
                                    case 0:
                                        e = Wi(null, e, n, l, t);
                                        break l;
                                    case 1:
                                        e = Vi(null, e, n, l, t);
                                        break l;
                                    case 11:
                                        e = Hi(null, e, n, l, t);
                                        break l;
                                    case 14:
                                        e = Ci(null, e, n, $n(n.type, l), a, t);
                                        break l
                                }
                                throw Error(i(306, n, ""))
                            }
                            return e;
                        case 0:
                            return a = e.type, n = e.pendingProps, Wi(l, e, a, n = e.elementType === a ? n : $n(a, n), t);
                        case 1:
                            return a = e.type, n = e.pendingProps, Vi(l, e, a, n = e.elementType === a ? n : $n(a, n), t);
                        case 3:
                            if (Zi(e), a = e.updateQueue, null === l || null === a) throw Error(i(282));
                            if (a = e.pendingProps, n = null !== (n = e.memoizedState) ? n.element : null, Nr(l, e), sr(e, a, null, t), (a = e.memoizedState.element) === n) jr(), e = no(l, e, t);
                            else {
                                if ((r = (n = e.stateNode).hydrate) && (xr = ja(e.stateNode.containerInfo.firstChild), Cr = e, r = Dr = !0), r) {
                                    if (null != (l = n.mutableSourceEagerHydrationData))
                                        for (n = 0; n < l.length; n += 2)(r = l[n])._workInProgressVersionPrimary = l[n + 1], Jr.push(r);
                                    for (t = Ir(e, null, a, t), e.child = t; t;) t.flags = -3 & t.flags | 1024, t = t.sibling
                                } else ki(l, e, a, t), jr();
                                e = e.child
                            }
                            return e;
                        case 5:
                            return Pr(e), null === l && Vr(e), a = e.type, n = e.pendingProps, r = null !== l ? l.memoizedProps : null, o = n.children, Wa(a, n) ? o = null : null !== r && Wa(a, r) && (e.flags |= 16), Ki(l, e), ki(l, e, o, t), e.child;
                        case 6:
                            return null === l && Vr(e), null;
                        case 13:
                            return $i(l, e, t);
                        case 4:
                            return Gr(e, e.stateNode.containerInfo), a = e.pendingProps, null === l ? e.child = Tr(e, null, a, t) : ki(l, e, a, t), e.child;
                        case 11:
                            return a = e.type, n = e.pendingProps, Hi(l, e, a, n = e.elementType === a ? n : $n(a, n), t);
                        case 7:
                            return ki(l, e, e.pendingProps, t), e.child;
                        case 8:
                        case 12:
                            return ki(l, e, e.pendingProps.children, t), e.child;
                        case 10:
                            l: {
                                a = e.type._context,
                                n = e.pendingProps,
                                o = e.memoizedProps,
                                r = n.value;
                                var E = e.type._context;
                                if (un(Qn, E._currentValue), E._currentValue = r, null !== o)
                                    if (E = o.value, 0 === (r = Na(E, r) ? 0 : 0 | ("function" === typeof a._calculateChangedBits ? a._calculateChangedBits(E, r) : 1073741823))) {
                                        if (o.children === n.children && !cn.current) {
                                            e = no(l, e, t);
                                            break l
                                        }
                                    } else
                                        for (null !== (E = e.child) && (E.return = e); null !== E;) {
                                            var N = E.dependencies;
                                            if (null !== N) {
                                                o = E.child;
                                                for (var A = N.firstContext; null !== A;) {
                                                    if (A.context === a && 0 !== (A.observedBits & r)) {
                                                        1 === E.tag && ((A = Ar(-1, t & -t)).tag = 2, ur(E, A)), E.lanes |= t, null !== (A = E.alternate) && (A.lanes |= t), nr(E.return, t), N.lanes |= t;
                                                        break
                                                    }
                                                    A = A.next
                                                }
                                            } else o = 10 === E.tag && E.type === e.type ? null : E.child;
                                            if (null !== o) o.return = E;
                                            else
                                                for (o = E; null !== o;) {
                                                    if (o === e) {
                                                        o = null;
                                                        break
                                                    }
                                                    if (null !== (E = o.sibling)) {
                                                        E.return = o.return, o = E;
                                                        break
                                                    }
                                                    o = o.return
                                                }
                                            E = o
                                        }
                                ki(l, e, n.children, t),
                                e = e.child
                            }
                            return e;
                        case 9:
                            return n = e.type, a = (r = e.pendingProps).children, rr(e, t), a = a(n = ir(n, r.unstable_observedBits)), e.flags |= 1, ki(l, e, a, t), e.child;
                        case 14:
                            return r = $n(n = e.type, e.pendingProps), Ci(l, e, n, r = $n(n.type, r), a, t);
                        case 15:
                            return xi(l, e, e.type, e.pendingProps, a, t);
                        case 17:
                            return a = e.type, n = e.pendingProps, n = e.elementType === a ? n : $n(a, n), null !== l && (l.alternate = null, e.alternate = null, e.flags |= 2), e.tag = 1, dn(a) ? (l = !0, mn(e)) : l = !1, rr(e, t), Or(e, a, n), mr(e, a, n, t), zi(null, e, a, !0, l, t);
                        case 19:
                            return ao(l, e, t);
                        case 23:
                        case 24:
                            return Di(l, e, t)
                    }
                    throw Error(i(156, e.tag))
                }, nN.prototype.render = function(l) {
                    lN(l, this._internalRoot, null, null)
                }, nN.prototype.unmount = function() {
                    var l = this._internalRoot,
                        e = l.containerInfo;
                    lN(null, l, null, (function() {
                        e[Xa] = null
                    }))
                }, ee = function(l) {
                    13 === l.tag && (cE(l, 4, _E()), aN(l, 4))
                }, te = function(l) {
                    13 === l.tag && (cE(l, 67108864, _E()), aN(l, 67108864))
                }, ae = function(l) {
                    if (13 === l.tag) {
                        var e = _E(),
                            t = sE(l);
                        cE(l, t, e), aN(l, t)
                    }
                }, ne = function(l, e) {
                    return e()
                }, Il = function(l, e, t) {
                    switch (e) {
                        case "input":
                            if (tl(l, t), e = t.name, "radio" === t.type && null != e) {
                                for (t = l; t.parentNode;) t = t.parentNode;
                                for (t = t.querySelectorAll("input[name=" + JSON.stringify("" + e) + '][type="radio"]'), e = 0; e < t.length; e++) {
                                    var a = t[e];
                                    if (a !== l && a.form === l.form) {
                                        var n = nn(a);
                                        if (!n) throw Error(i(90));
                                        $(a), tl(a, n)
                                    }
                                }
                            }
                            break;
                        case "textarea":
                            Nl(l, t);
                            break;
                        case "select":
                            null != (e = t.value) && il(l, !!t.multiple, e, !1)
                    }
                }, Gl = RE, Fl = function(l, e, t, a, n) {
                    var r = Uo;
                    Uo |= 4;
                    try {
                        return Zn(98, l.bind(null, e, t, a, n))
                    } finally {
                        0 === (Uo = r) && (jo(), Jn())
                    }
                }, Pl = function() {
                    0 === (49 & Uo) && (function() {
                        if (null !== nE) {
                            var l = nE;
                            nE = null, l.forEach((function(l) {
                                l.expiredLanes |= 24 & l.pendingLanes, fE(l, Wn())
                            }))
                        }
                        Jn()
                    }(), PE())
                }, wl = function(l, e) {
                    var t = Uo;
                    Uo |= 2;
                    try {
                        return l(e)
                    } finally {
                        0 === (Uo = t) && (jo(), Jn())
                    }
                };
                var EN = {
                        Events: [tn, an, nn, vl, Ul, PE, {
                            current: !1
                        }]
                    },
                    NN = {
                        findFiberByHostInstance: en,
                        bundleType: 0,
                        version: "17.0.2",
                        rendererPackageName: "react-dom"
                    },
                    AN = {
                        bundleType: NN.bundleType,
                        version: NN.version,
                        rendererPackageName: NN.rendererPackageName,
                        rendererConfig: NN.rendererConfig,
                        overrideHookState: null,
                        overrideHookStateDeletePath: null,
                        overrideHookStateRenamePath: null,
                        overrideProps: null,
                        overridePropsDeletePath: null,
                        overridePropsRenamePath: null,
                        setSuspenseHandler: null,
                        scheduleUpdate: null,
                        currentDispatcherRef: m.ReactCurrentDispatcher,
                        findHostInstanceByFiber: function(l) {
                            return null === (l = Xl(l)) ? null : l.stateNode
                        },
                        findFiberByHostInstance: NN.findFiberByHostInstance || function() {
                            return null
                        },
                        findHostInstancesForRefresh: null,
                        scheduleRefresh: null,
                        scheduleRoot: null,
                        setRefreshHandler: null,
                        getCurrentFiber: null
                    };
                if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
                    var uN = __REACT_DEVTOOLS_GLOBAL_HOOK__;
                    if (!uN.isDisabled && uN.supportsFiber) try {
                        gn = uN.inject(AN), Ln = uN
                    } catch (fl) {}
                }
                e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = EN, e.createPortal = oN, e.findDOMNode = function(l) {
                    if (null == l) return null;
                    if (1 === l.nodeType) return l;
                    var e = l._reactInternals;
                    if (void 0 === e) {
                        if ("function" === typeof l.render) throw Error(i(188));
                        throw Error(i(268, Object.keys(l)))
                    }
                    return l = null === (l = Xl(e)) ? null : l.stateNode
                }, e.flushSync = function(l, e) {
                    var t = Uo;
                    if (0 !== (48 & t)) return l(e);
                    Uo |= 1;
                    try {
                        if (l) return Zn(99, l.bind(null, e))
                    } finally {
                        Uo = t, Jn()
                    }
                }, e.hydrate = function(l, e, t) {
                    if (!rN(e)) throw Error(i(200));
                    return iN(null, l, e, !0, t)
                }, e.render = function(l, e, t) {
                    if (!rN(e)) throw Error(i(200));
                    return iN(null, l, e, !1, t)
                }, e.unmountComponentAtNode = function(l) {
                    if (!rN(l)) throw Error(i(40));
                    return !!l._reactRootContainer && (mE((function() {
                        iN(null, null, l, !1, (function() {
                            l._reactRootContainer = null, l[Xa] = null
                        }))
                    })), !0)
                }, e.unstable_batchedUpdates = RE, e.unstable_createPortal = function(l, e) {
                    return oN(l, e, 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null)
                }, e.unstable_renderSubtreeIntoContainer = function(l, e, t, a) {
                    if (!rN(t)) throw Error(i(200));
                    if (null == l || void 0 === l._reactInternals) throw Error(i(38));
                    return iN(l, e, t, !1, a)
                }, e.version = "17.0.2"
            },
            4164: function(l, e, t) {
                "use strict";
                ! function l() {
                    if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE) try {
                        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)
                    } catch (e) {
                        console.error(e)
                    }
                }(), l.exports = t(4463)
            },
            1851: function(l, e, t) {
                "use strict";
                t.d(e, {
                    _y: function() {
                        return i
                    },
                    zt: function() {
                        return r
                    }
                });
                var a = t(2791);
                t(2110);
                var n = a.createContext(null),
                    r = (n.Consumer, n.Provider),
                    i = n
            },
            2606: function(l, e, t) {
                "use strict";
                t.d(e, {
                    Z: function() {
                        return N
                    }
                });
                var a = t(9388),
                    n = t(2791),
                    r = t(1851),
                    i = t(722);

                function o(l) {
                    var e = function() {
                            var l = n.useContext(r._y);
                            return (0, i.lq)(l), l
                        }(),
                        t = e.formatMessage,
                        a = e.textComponent,
                        o = void 0 === a ? n.Fragment : a,
                        E = l.id,
                        N = l.description,
                        A = l.defaultMessage,
                        u = l.values,
                        _ = l.children,
                        s = l.tagName,
                        c = void 0 === s ? o : s,
                        M = t({
                            id: E,
                            description: N,
                            defaultMessage: A
                        }, u, {
                            ignoreTag: l.ignoreTag
                        });
                    return "function" === typeof _ ? _(Array.isArray(M) ? M : [M]) : c ? n.createElement(c, null, n.Children.toArray(M)) : n.createElement(n.Fragment, null, M)
                }
                o.displayName = "FormattedMessage";
                var E = n.memo(o, (function(l, e) {
                    var t = l.values,
                        n = (0, a._T)(l, ["values"]),
                        r = e.values,
                        o = (0, a._T)(e, ["values"]);
                    return (0, i.wU)(r, t) && (0, i.wU)(n, o)
                }));
                E.displayName = "MemoizedFormattedMessage";
                var N = E
            },
            722: function(l, e, t) {
                "use strict";
                t.d(e, {
                    Z0: function() {
                        return E
                    },
                    dt: function() {
                        return N
                    },
                    lq: function() {
                        return o
                    },
                    wU: function() {
                        return A
                    }
                });
                var a = t(9388),
                    n = t(2791),
                    r = t(6138),
                    i = t(4736);

                function o(l) {
                    (0, r.kG)(l, "[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.")
                }
                var E = (0, a.pi)((0, a.pi)({}, i.Z0), {
                    textComponent: n.Fragment
                });

                function N(l) {
                    return function(e) {
                        return l(n.Children.toArray(e))
                    }
                }

                function A(l, e) {
                    if (l === e) return !0;
                    if (!l || !e) return !1;
                    var t = Object.keys(l),
                        a = Object.keys(e),
                        n = t.length;
                    if (a.length !== n) return !1;
                    for (var r = 0; r < n; r++) {
                        var i = t[r];
                        if (l[i] !== e[i] || !Object.prototype.hasOwnProperty.call(e, i)) return !1
                    }
                    return !0
                }
            },
            6374: function(l, e, t) {
                "use strict";
                t(1725);
                var a = t(2791),
                    n = 60103;
                if (60107, "function" === typeof Symbol && Symbol.for) {
                    var r = Symbol.for;
                    n = r("react.element"), r("react.fragment")
                }
                var i = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
                    o = Object.prototype.hasOwnProperty,
                    E = {
                        key: !0,
                        ref: !0,
                        __self: !0,
                        __source: !0
                    };

                function N(l, e, t) {
                    var a, r = {},
                        N = null,
                        A = null;
                    for (a in void 0 !== t && (N = "" + t), void 0 !== e.key && (N = "" + e.key), void 0 !== e.ref && (A = e.ref), e) o.call(e, a) && !E.hasOwnProperty(a) && (r[a] = e[a]);
                    if (l && l.defaultProps)
                        for (a in e = l.defaultProps) void 0 === r[a] && (r[a] = e[a]);
                    return {
                        $$typeof: n,
                        type: l,
                        key: N,
                        ref: A,
                        props: r,
                        _owner: i.current
                    }
                }
                e.jsx = N, e.jsxs = N
            },
            9117: function(l, e, t) {
                "use strict";
                var a = t(1725),
                    n = 60103,
                    r = 60106;
                e.Fragment = 60107, e.StrictMode = 60108, e.Profiler = 60114;
                var i = 60109,
                    o = 60110,
                    E = 60112;
                e.Suspense = 60113;
                var N = 60115,
                    A = 60116;
                if ("function" === typeof Symbol && Symbol.for) {
                    var u = Symbol.for;
                    n = u("react.element"), r = u("react.portal"), e.Fragment = u("react.fragment"), e.StrictMode = u("react.strict_mode"), e.Profiler = u("react.profiler"), i = u("react.provider"), o = u("react.context"), E = u("react.forward_ref"), e.Suspense = u("react.suspense"), N = u("react.memo"), A = u("react.lazy")
                }
                var _ = "function" === typeof Symbol && Symbol.iterator;

                function s(l) {
                    for (var e = "https://reactjs.org/docs/error-decoder.html?invariant=" + l, t = 1; t < arguments.length; t++) e += "&args[]=" + encodeURIComponent(arguments[t]);
                    return "Minified React error #" + l + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
                }
                var c = {
                        isMounted: function() {
                            return !1
                        },
                        enqueueForceUpdate: function() {},
                        enqueueReplaceState: function() {},
                        enqueueSetState: function() {}
                    },
                    M = {};

                function f(l, e, t) {
                    this.props = l, this.context = e, this.refs = M, this.updater = t || c
                }

                function d() {}

                function p(l, e, t) {
                    this.props = l, this.context = e, this.refs = M, this.updater = t || c
                }
                f.prototype.isReactComponent = {}, f.prototype.setState = function(l, e) {
                    if ("object" !== typeof l && "function" !== typeof l && null != l) throw Error(s(85));
                    this.updater.enqueueSetState(this, l, e, "setState")
                }, f.prototype.forceUpdate = function(l) {
                    this.updater.enqueueForceUpdate(this, l, "forceUpdate")
                }, d.prototype = f.prototype;
                var O = p.prototype = new d;
                O.constructor = p, a(O, f.prototype), O.isPureReactComponent = !0;
                var R = {
                        current: null
                    },
                    m = Object.prototype.hasOwnProperty,
                    h = {
                        key: !0,
                        ref: !0,
                        __self: !0,
                        __source: !0
                    };

                function g(l, e, t) {
                    var a, r = {},
                        i = null,
                        o = null;
                    if (null != e)
                        for (a in void 0 !== e.ref && (o = e.ref), void 0 !== e.key && (i = "" + e.key), e) m.call(e, a) && !h.hasOwnProperty(a) && (r[a] = e[a]);
                    var E = arguments.length - 2;
                    if (1 === E) r.children = t;
                    else if (1 < E) {
                        for (var N = Array(E), A = 0; A < E; A++) N[A] = arguments[A + 2];
                        r.children = N
                    }
                    if (l && l.defaultProps)
                        for (a in E = l.defaultProps) void 0 === r[a] && (r[a] = E[a]);
                    return {
                        $$typeof: n,
                        type: l,
                        key: i,
                        ref: o,
                        props: r,
                        _owner: R.current
                    }
                }

                function L(l) {
                    return "object" === typeof l && null !== l && l.$$typeof === n
                }
                var y = /\/+/g;

                function T(l, e) {
                    return "object" === typeof l && null !== l && null != l.key ? function(l) {
                        var e = {
                            "=": "=0",
                            ":": "=2"
                        };
                        return "$" + l.replace(/[=:]/g, (function(l) {
                            return e[l]
                        }))
                    }("" + l.key) : e.toString(36)
                }

                function I(l, e, t, a, i) {
                    var o = typeof l;
                    "undefined" !== o && "boolean" !== o || (l = null);
                    var E = !1;
                    if (null === l) E = !0;
                    else switch (o) {
                        case "string":
                        case "number":
                            E = !0;
                            break;
                        case "object":
                            switch (l.$$typeof) {
                                case n:
                                case r:
                                    E = !0
                            }
                    }
                    if (E) return i = i(E = l), l = "" === a ? "." + T(E, 0) : a, Array.isArray(i) ? (t = "", null != l && (t = l.replace(y, "$&/") + "/"), I(i, e, t, "", (function(l) {
                        return l
                    }))) : null != i && (L(i) && (i = function(l, e) {
                        return {
                            $$typeof: n,
                            type: l.type,
                            key: e,
                            ref: l.ref,
                            props: l.props,
                            _owner: l._owner
                        }
                    }(i, t + (!i.key || E && E.key === i.key ? "" : ("" + i.key).replace(y, "$&/") + "/") + l)), e.push(i)), 1;
                    if (E = 0, a = "" === a ? "." : a + ":", Array.isArray(l))
                        for (var N = 0; N < l.length; N++) {
                            var A = a + T(o = l[N], N);
                            E += I(o, e, t, A, i)
                        } else if (A = function(l) {
                                return null === l || "object" !== typeof l ? null : "function" === typeof(l = _ && l[_] || l["@@iterator"]) ? l : null
                            }(l), "function" === typeof A)
                            for (l = A.call(l), N = 0; !(o = l.next()).done;) E += I(o = o.value, e, t, A = a + T(o, N++), i);
                        else if ("object" === o) throw e = "" + l, Error(s(31, "[object Object]" === e ? "object with keys {" + Object.keys(l).join(", ") + "}" : e));
                    return E
                }

                function S(l, e, t) {
                    if (null == l) return l;
                    var a = [],
                        n = 0;
                    return I(l, a, "", "", (function(l) {
                        return e.call(t, l, n++)
                    })), a
                }

                function b(l) {
                    if (-1 === l._status) {
                        var e = l._result;
                        e = e(), l._status = 0, l._result = e, e.then((function(e) {
                            0 === l._status && (e = e.default, l._status = 1, l._result = e)
                        }), (function(e) {
                            0 === l._status && (l._status = 2, l._result = e)
                        }))
                    }
                    if (1 === l._status) return l._result;
                    throw l._result
                }
                var B = {
                    current: null
                };

                function v() {
                    var l = B.current;
                    if (null === l) throw Error(s(321));
                    return l
                }
                var U = {
                    ReactCurrentDispatcher: B,
                    ReactCurrentBatchConfig: {
                        transition: 0
                    },
                    ReactCurrentOwner: R,
                    IsSomeRendererActing: {
                        current: !1
                    },
                    assign: a
                };
                e.Children = {
                    map: S,
                    forEach: function(l, e, t) {
                        S(l, (function() {
                            e.apply(this, arguments)
                        }), t)
                    },
                    count: function(l) {
                        var e = 0;
                        return S(l, (function() {
                            e++
                        })), e
                    },
                    toArray: function(l) {
                        return S(l, (function(l) {
                            return l
                        })) || []
                    },
                    only: function(l) {
                        if (!L(l)) throw Error(s(143));
                        return l
                    }
                }, e.Component = f, e.PureComponent = p, e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = U, e.cloneElement = function(l, e, t) {
                    if (null === l || void 0 === l) throw Error(s(267, l));
                    var r = a({}, l.props),
                        i = l.key,
                        o = l.ref,
                        E = l._owner;
                    if (null != e) {
                        if (void 0 !== e.ref && (o = e.ref, E = R.current), void 0 !== e.key && (i = "" + e.key), l.type && l.type.defaultProps) var N = l.type.defaultProps;
                        for (A in e) m.call(e, A) && !h.hasOwnProperty(A) && (r[A] = void 0 === e[A] && void 0 !== N ? N[A] : e[A])
                    }
                    var A = arguments.length - 2;
                    if (1 === A) r.children = t;
                    else if (1 < A) {
                        N = Array(A);
                        for (var u = 0; u < A; u++) N[u] = arguments[u + 2];
                        r.children = N
                    }
                    return {
                        $$typeof: n,
                        type: l.type,
                        key: i,
                        ref: o,
                        props: r,
                        _owner: E
                    }
                }, e.createContext = function(l, e) {
                    return void 0 === e && (e = null), (l = {
                        $$typeof: o,
                        _calculateChangedBits: e,
                        _currentValue: l,
                        _currentValue2: l,
                        _threadCount: 0,
                        Provider: null,
                        Consumer: null
                    }).Provider = {
                        $$typeof: i,
                        _context: l
                    }, l.Consumer = l
                }, e.createElement = g, e.createFactory = function(l) {
                    var e = g.bind(null, l);
                    return e.type = l, e
                }, e.createRef = function() {
                    return {
                        current: null
                    }
                }, e.forwardRef = function(l) {
                    return {
                        $$typeof: E,
                        render: l
                    }
                }, e.isValidElement = L, e.lazy = function(l) {
                    return {
                        $$typeof: A,
                        _payload: {
                            _status: -1,
                            _result: l
                        },
                        _init: b
                    }
                }, e.memo = function(l, e) {
                    return {
                        $$typeof: N,
                        type: l,
                        compare: void 0 === e ? null : e
                    }
                }, e.useCallback = function(l, e) {
                    return v().useCallback(l, e)
                }, e.useContext = function(l, e) {
                    return v().useContext(l, e)
                }, e.useDebugValue = function() {}, e.useEffect = function(l, e) {
                    return v().useEffect(l, e)
                }, e.useImperativeHandle = function(l, e, t) {
                    return v().useImperativeHandle(l, e, t)
                }, e.useLayoutEffect = function(l, e) {
                    return v().useLayoutEffect(l, e)
                }, e.useMemo = function(l, e) {
                    return v().useMemo(l, e)
                }, e.useReducer = function(l, e, t) {
                    return v().useReducer(l, e, t)
                }, e.useRef = function(l) {
                    return v().useRef(l)
                }, e.useState = function(l) {
                    return v().useState(l)
                }, e.version = "17.0.2"
            },
            2791: function(l, e, t) {
                "use strict";
                l.exports = t(9117)
            },
            184: function(l, e, t) {
                "use strict";
                l.exports = t(6374)
            },
            9727: function(l) {
                var e = function(l) {
                    "use strict";
                    var e, t = Object.prototype,
                        a = t.hasOwnProperty,
                        n = "function" === typeof Symbol ? Symbol : {},
                        r = n.iterator || "@@iterator",
                        i = n.asyncIterator || "@@asyncIterator",
                        o = n.toStringTag || "@@toStringTag";

                    function E(l, e, t) {
                        return Object.defineProperty(l, e, {
                            value: t,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }), l[e]
                    }
                    try {
                        E({}, "")
                    } catch (v) {
                        E = function(l, e, t) {
                            return l[e] = t
                        }
                    }

                    function N(l, e, t, a) {
                        var n = e && e.prototype instanceof f ? e : f,
                            r = Object.create(n.prototype),
                            i = new S(a || []);
                        return r._invoke = function(l, e, t) {
                            var a = u;
                            return function(n, r) {
                                if (a === s) throw new Error("Generator is already running");
                                if (a === c) {
                                    if ("throw" === n) throw r;
                                    return B()
                                }
                                for (t.method = n, t.arg = r;;) {
                                    var i = t.delegate;
                                    if (i) {
                                        var o = y(i, t);
                                        if (o) {
                                            if (o === M) continue;
                                            return o
                                        }
                                    }
                                    if ("next" === t.method) t.sent = t._sent = t.arg;
                                    else if ("throw" === t.method) {
                                        if (a === u) throw a = c, t.arg;
                                        t.dispatchException(t.arg)
                                    } else "return" === t.method && t.abrupt("return", t.arg);
                                    a = s;
                                    var E = A(l, e, t);
                                    if ("normal" === E.type) {
                                        if (a = t.done ? c : _, E.arg === M) continue;
                                        return {
                                            value: E.arg,
                                            done: t.done
                                        }
                                    }
                                    "throw" === E.type && (a = c, t.method = "throw", t.arg = E.arg)
                                }
                            }
                        }(l, t, i), r
                    }

                    function A(l, e, t) {
                        try {
                            return {
                                type: "normal",
                                arg: l.call(e, t)
                            }
                        } catch (v) {
                            return {
                                type: "throw",
                                arg: v
                            }
                        }
                    }
                    l.wrap = N;
                    var u = "suspendedStart",
                        _ = "suspendedYield",
                        s = "executing",
                        c = "completed",
                        M = {};

                    function f() {}

                    function d() {}

                    function p() {}
                    var O = {};
                    E(O, r, (function() {
                        return this
                    }));
                    var R = Object.getPrototypeOf,
                        m = R && R(R(b([])));
                    m && m !== t && a.call(m, r) && (O = m);
                    var h = p.prototype = f.prototype = Object.create(O);

                    function g(l) {
                        ["next", "throw", "return"].forEach((function(e) {
                            E(l, e, (function(l) {
                                return this._invoke(e, l)
                            }))
                        }))
                    }

                    function L(l, e) {
                        function t(n, r, i, o) {
                            var E = A(l[n], l, r);
                            if ("throw" !== E.type) {
                                var N = E.arg,
                                    u = N.value;
                                return u && "object" === typeof u && a.call(u, "__await") ? e.resolve(u.__await).then((function(l) {
                                    t("next", l, i, o)
                                }), (function(l) {
                                    t("throw", l, i, o)
                                })) : e.resolve(u).then((function(l) {
                                    N.value = l, i(N)
                                }), (function(l) {
                                    return t("throw", l, i, o)
                                }))
                            }
                            o(E.arg)
                        }
                        var n;
                        this._invoke = function(l, a) {
                            function r() {
                                return new e((function(e, n) {
                                    t(l, a, e, n)
                                }))
                            }
                            return n = n ? n.then(r, r) : r()
                        }
                    }

                    function y(l, t) {
                        var a = l.iterator[t.method];
                        if (a === e) {
                            if (t.delegate = null, "throw" === t.method) {
                                if (l.iterator.return && (t.method = "return", t.arg = e, y(l, t), "throw" === t.method)) return M;
                                t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                            }
                            return M
                        }
                        var n = A(a, l.iterator, t.arg);
                        if ("throw" === n.type) return t.method = "throw", t.arg = n.arg, t.delegate = null, M;
                        var r = n.arg;
                        return r ? r.done ? (t[l.resultName] = r.value, t.next = l.nextLoc, "return" !== t.method && (t.method = "next", t.arg = e), t.delegate = null, M) : r : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, M)
                    }

                    function T(l) {
                        var e = {
                            tryLoc: l[0]
                        };
                        1 in l && (e.catchLoc = l[1]), 2 in l && (e.finallyLoc = l[2], e.afterLoc = l[3]), this.tryEntries.push(e)
                    }

                    function I(l) {
                        var e = l.completion || {};
                        e.type = "normal", delete e.arg, l.completion = e
                    }

                    function S(l) {
                        this.tryEntries = [{
                            tryLoc: "root"
                        }], l.forEach(T, this), this.reset(!0)
                    }

                    function b(l) {
                        if (l) {
                            var t = l[r];
                            if (t) return t.call(l);
                            if ("function" === typeof l.next) return l;
                            if (!isNaN(l.length)) {
                                var n = -1,
                                    i = function t() {
                                        for (; ++n < l.length;)
                                            if (a.call(l, n)) return t.value = l[n], t.done = !1, t;
                                        return t.value = e, t.done = !0, t
                                    };
                                return i.next = i
                            }
                        }
                        return {
                            next: B
                        }
                    }

                    function B() {
                        return {
                            value: e,
                            done: !0
                        }
                    }
                    return d.prototype = p, E(h, "constructor", p), E(p, "constructor", d), d.displayName = E(p, o, "GeneratorFunction"), l.isGeneratorFunction = function(l) {
                        var e = "function" === typeof l && l.constructor;
                        return !!e && (e === d || "GeneratorFunction" === (e.displayName || e.name))
                    }, l.mark = function(l) {
                        return Object.setPrototypeOf ? Object.setPrototypeOf(l, p) : (l.__proto__ = p, E(l, o, "GeneratorFunction")), l.prototype = Object.create(h), l
                    }, l.awrap = function(l) {
                        return {
                            __await: l
                        }
                    }, g(L.prototype), E(L.prototype, i, (function() {
                        return this
                    })), l.AsyncIterator = L, l.async = function(e, t, a, n, r) {
                        void 0 === r && (r = Promise);
                        var i = new L(N(e, t, a, n), r);
                        return l.isGeneratorFunction(t) ? i : i.next().then((function(l) {
                            return l.done ? l.value : i.next()
                        }))
                    }, g(h), E(h, o, "Generator"), E(h, r, (function() {
                        return this
                    })), E(h, "toString", (function() {
                        return "[object Generator]"
                    })), l.keys = function(l) {
                        var e = [];
                        for (var t in l) e.push(t);
                        return e.reverse(),
                            function t() {
                                for (; e.length;) {
                                    var a = e.pop();
                                    if (a in l) return t.value = a, t.done = !1, t
                                }
                                return t.done = !0, t
                            }
                    }, l.values = b, S.prototype = {
                        constructor: S,
                        reset: function(l) {
                            if (this.prev = 0, this.next = 0, this.sent = this._sent = e, this.done = !1, this.delegate = null, this.method = "next", this.arg = e, this.tryEntries.forEach(I), !l)
                                for (var t in this) "t" === t.charAt(0) && a.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = e)
                        },
                        stop: function() {
                            this.done = !0;
                            var l = this.tryEntries[0].completion;
                            if ("throw" === l.type) throw l.arg;
                            return this.rval
                        },
                        dispatchException: function(l) {
                            if (this.done) throw l;
                            var t = this;

                            function n(a, n) {
                                return o.type = "throw", o.arg = l, t.next = a, n && (t.method = "next", t.arg = e), !!n
                            }
                            for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                                var i = this.tryEntries[r],
                                    o = i.completion;
                                if ("root" === i.tryLoc) return n("end");
                                if (i.tryLoc <= this.prev) {
                                    var E = a.call(i, "catchLoc"),
                                        N = a.call(i, "finallyLoc");
                                    if (E && N) {
                                        if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                                        if (this.prev < i.finallyLoc) return n(i.finallyLoc)
                                    } else if (E) {
                                        if (this.prev < i.catchLoc) return n(i.catchLoc, !0)
                                    } else {
                                        if (!N) throw new Error("try statement without catch or finally");
                                        if (this.prev < i.finallyLoc) return n(i.finallyLoc)
                                    }
                                }
                            }
                        },
                        abrupt: function(l, e) {
                            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                                var n = this.tryEntries[t];
                                if (n.tryLoc <= this.prev && a.call(n, "finallyLoc") && this.prev < n.finallyLoc) {
                                    var r = n;
                                    break
                                }
                            }
                            r && ("break" === l || "continue" === l) && r.tryLoc <= e && e <= r.finallyLoc && (r = null);
                            var i = r ? r.completion : {};
                            return i.type = l, i.arg = e, r ? (this.method = "next", this.next = r.finallyLoc, M) : this.complete(i)
                        },
                        complete: function(l, e) {
                            if ("throw" === l.type) throw l.arg;
                            return "break" === l.type || "continue" === l.type ? this.next = l.arg : "return" === l.type ? (this.rval = this.arg = l.arg, this.method = "return", this.next = "end") : "normal" === l.type && e && (this.next = e), M
                        },
                        finish: function(l) {
                            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                                var t = this.tryEntries[e];
                                if (t.finallyLoc === l) return this.complete(t.completion, t.afterLoc), I(t), M
                            }
                        },
                        catch: function(l) {
                            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                                var t = this.tryEntries[e];
                                if (t.tryLoc === l) {
                                    var a = t.completion;
                                    if ("throw" === a.type) {
                                        var n = a.arg;
                                        I(t)
                                    }
                                    return n
                                }
                            }
                            throw new Error("illegal catch attempt")
                        },
                        delegateYield: function(l, t, a) {
                            return this.delegate = {
                                iterator: b(l),
                                resultName: t,
                                nextLoc: a
                            }, "next" === this.method && (this.arg = e), M
                        }
                    }, l
                }(l.exports);
                try {
                    regeneratorRuntime = e
                } catch (t) {
                    "object" === typeof globalThis ? globalThis.regeneratorRuntime = e : Function("r", "regeneratorRuntime = r")(e)
                }
            },
            6813: function(l, e) {
                "use strict";
                var t, a, n, r;
                if ("object" === typeof performance && "function" === typeof performance.now) {
                    var i = performance;
                    e.unstable_now = function() {
                        return i.now()
                    }
                } else {
                    var o = Date,
                        E = o.now();
                    e.unstable_now = function() {
                        return o.now() - E
                    }
                }
                if ("undefined" === typeof window || "function" !== typeof MessageChannel) {
                    var N = null,
                        A = null,
                        u = function l() {
                            if (null !== N) try {
                                var t = e.unstable_now();
                                N(!0, t), N = null
                            } catch (a) {
                                throw setTimeout(l, 0), a
                            }
                        };
                    t = function(l) {
                        null !== N ? setTimeout(t, 0, l) : (N = l, setTimeout(u, 0))
                    }, a = function(l, e) {
                        A = setTimeout(l, e)
                    }, n = function() {
                        clearTimeout(A)
                    }, e.unstable_shouldYield = function() {
                        return !1
                    }, r = e.unstable_forceFrameRate = function() {}
                } else {
                    var _ = window.setTimeout,
                        s = window.clearTimeout;
                    if ("undefined" !== typeof console) {
                        var c = window.cancelAnimationFrame;
                        "function" !== typeof window.requestAnimationFrame && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), "function" !== typeof c && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills")
                    }
                    var M = !1,
                        f = null,
                        d = -1,
                        p = 5,
                        O = 0;
                    e.unstable_shouldYield = function() {
                        return e.unstable_now() >= O
                    }, r = function() {}, e.unstable_forceFrameRate = function(l) {
                        0 > l || 125 < l ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : p = 0 < l ? Math.floor(1e3 / l) : 5
                    };
                    var R = new MessageChannel,
                        m = R.port2;
                    R.port1.onmessage = function() {
                        if (null !== f) {
                            var l = e.unstable_now();
                            O = l + p;
                            try {
                                f(!0, l) ? m.postMessage(null) : (M = !1, f = null)
                            } catch (t) {
                                throw m.postMessage(null), t
                            }
                        } else M = !1
                    }, t = function(l) {
                        f = l, M || (M = !0, m.postMessage(null))
                    }, a = function(l, t) {
                        d = _((function() {
                            l(e.unstable_now())
                        }), t)
                    }, n = function() {
                        s(d), d = -1
                    }
                }

                function h(l, e) {
                    var t = l.length;
                    l.push(e);
                    l: for (;;) {
                        var a = t - 1 >>> 1,
                            n = l[a];
                        if (!(void 0 !== n && 0 < y(n, e))) break l;
                        l[a] = e, l[t] = n, t = a
                    }
                }

                function g(l) {
                    return void 0 === (l = l[0]) ? null : l
                }

                function L(l) {
                    var e = l[0];
                    if (void 0 !== e) {
                        var t = l.pop();
                        if (t !== e) {
                            l[0] = t;
                            l: for (var a = 0, n = l.length; a < n;) {
                                var r = 2 * (a + 1) - 1,
                                    i = l[r],
                                    o = r + 1,
                                    E = l[o];
                                if (void 0 !== i && 0 > y(i, t)) void 0 !== E && 0 > y(E, i) ? (l[a] = E, l[o] = t, a = o) : (l[a] = i, l[r] = t, a = r);
                                else {
                                    if (!(void 0 !== E && 0 > y(E, t))) break l;
                                    l[a] = E, l[o] = t, a = o
                                }
                            }
                        }
                        return e
                    }
                    return null
                }

                function y(l, e) {
                    var t = l.sortIndex - e.sortIndex;
                    return 0 !== t ? t : l.id - e.id
                }
                var T = [],
                    I = [],
                    S = 1,
                    b = null,
                    B = 3,
                    v = !1,
                    U = !1,
                    G = !1;

                function F(l) {
                    for (var e = g(I); null !== e;) {
                        if (null === e.callback) L(I);
                        else {
                            if (!(e.startTime <= l)) break;
                            L(I), e.sortIndex = e.expirationTime, h(T, e)
                        }
                        e = g(I)
                    }
                }

                function P(l) {
                    if (G = !1, F(l), !U)
                        if (null !== g(T)) U = !0, t(w);
                        else {
                            var e = g(I);
                            null !== e && a(P, e.startTime - l)
                        }
                }

                function w(l, t) {
                    U = !1, G && (G = !1, n()), v = !0;
                    var r = B;
                    try {
                        for (F(t), b = g(T); null !== b && (!(b.expirationTime > t) || l && !e.unstable_shouldYield());) {
                            var i = b.callback;
                            if ("function" === typeof i) {
                                b.callback = null, B = b.priorityLevel;
                                var o = i(b.expirationTime <= t);
                                t = e.unstable_now(), "function" === typeof o ? b.callback = o : b === g(T) && L(T), F(t)
                            } else L(T);
                            b = g(T)
                        }
                        if (null !== b) var E = !0;
                        else {
                            var N = g(I);
                            null !== N && a(P, N.startTime - t), E = !1
                        }
                        return E
                    } finally {
                        b = null, B = r, v = !1
                    }
                }
                var k = r;
                e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(l) {
                    l.callback = null
                }, e.unstable_continueExecution = function() {
                    U || v || (U = !0, t(w))
                }, e.unstable_getCurrentPriorityLevel = function() {
                    return B
                }, e.unstable_getFirstCallbackNode = function() {
                    return g(T)
                }, e.unstable_next = function(l) {
                    switch (B) {
                        case 1:
                        case 2:
                        case 3:
                            var e = 3;
                            break;
                        default:
                            e = B
                    }
                    var t = B;
                    B = e;
                    try {
                        return l()
                    } finally {
                        B = t
                    }
                }, e.unstable_pauseExecution = function() {}, e.unstable_requestPaint = k, e.unstable_runWithPriority = function(l, e) {
                    switch (l) {
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                        case 5:
                            break;
                        default:
                            l = 3
                    }
                    var t = B;
                    B = l;
                    try {
                        return e()
                    } finally {
                        B = t
                    }
                }, e.unstable_scheduleCallback = function(l, r, i) {
                    var o = e.unstable_now();
                    switch ("object" === typeof i && null !== i ? i = "number" === typeof(i = i.delay) && 0 < i ? o + i : o : i = o, l) {
                        case 1:
                            var E = -1;
                            break;
                        case 2:
                            E = 250;
                            break;
                        case 5:
                            E = 1073741823;
                            break;
                        case 4:
                            E = 1e4;
                            break;
                        default:
                            E = 5e3
                    }
                    return l = {
                        id: S++,
                        callback: r,
                        priorityLevel: l,
                        startTime: i,
                        expirationTime: E = i + E,
                        sortIndex: -1
                    }, i > o ? (l.sortIndex = i, h(I, l), null === g(T) && l === g(I) && (G ? n() : G = !0, a(P, i - o))) : (l.sortIndex = E, h(T, l), U || v || (U = !0, t(w))), l
                }, e.unstable_wrapCallback = function(l) {
                    var e = B;
                    return function() {
                        var t = B;
                        B = e;
                        try {
                            return l.apply(this, arguments)
                        } finally {
                            B = t
                        }
                    }
                }
            },
            5296: function(l, e, t) {
                "use strict";
                l.exports = t(6813)
            },
            9388: function(l, e, t) {
                "use strict";
                t.d(e, {
                    ZT: function() {
                        return n
                    },
                    _T: function() {
                        return i
                    },
                    ev: function() {
                        return o
                    },
                    pi: function() {
                        return r
                    }
                });
                var a = function(l, e) {
                    return a = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(l, e) {
                        l.__proto__ = e
                    } || function(l, e) {
                        for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && (l[t] = e[t])
                    }, a(l, e)
                };

                function n(l, e) {
                    if ("function" !== typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

                    function t() {
                        this.constructor = l
                    }
                    a(l, e), l.prototype = null === e ? Object.create(e) : (t.prototype = e.prototype, new t)
                }
                var r = function() {
                    return r = Object.assign || function(l) {
                        for (var e, t = 1, a = arguments.length; t < a; t++)
                            for (var n in e = arguments[t]) Object.prototype.hasOwnProperty.call(e, n) && (l[n] = e[n]);
                        return l
                    }, r.apply(this, arguments)
                };

                function i(l, e) {
                    var t = {};
                    for (var a in l) Object.prototype.hasOwnProperty.call(l, a) && e.indexOf(a) < 0 && (t[a] = l[a]);
                    if (null != l && "function" === typeof Object.getOwnPropertySymbols) {
                        var n = 0;
                        for (a = Object.getOwnPropertySymbols(l); n < a.length; n++) e.indexOf(a[n]) < 0 && Object.prototype.propertyIsEnumerable.call(l, a[n]) && (t[a[n]] = l[a[n]])
                    }
                    return t
                }
                Object.create;

                function o(l, e, t) {
                    if (t || 2 === arguments.length)
                        for (var a, n = 0, r = e.length; n < r; n++) !a && n in e || (a || (a = Array.prototype.slice.call(e, 0, n)), a[n] = e[n]);
                    return l.concat(a || Array.prototype.slice.call(e))
                }
                Object.create
            },
            1338: function(l, e, t) {
                var a;
                ! function(n, r) {
                    "use strict";
                    var i = "function",
                        o = "undefined",
                        E = "object",
                        N = "string",
                        A = "model",
                        u = "name",
                        _ = "type",
                        s = "vendor",
                        c = "version",
                        M = "architecture",
                        f = "console",
                        d = "mobile",
                        p = "tablet",
                        O = "smarttv",
                        R = "wearable",
                        m = "embedded",
                        h = "Amazon",
                        g = "Apple",
                        L = "ASUS",
                        y = "BlackBerry",
                        T = "Firefox",
                        I = "Google",
                        S = "Huawei",
                        b = "LG",
                        B = "Microsoft",
                        v = "Motorola",
                        U = "Opera",
                        G = "Samsung",
                        F = "Sony",
                        P = "Xiaomi",
                        w = "Zebra",
                        k = "Facebook",
                        H = function(l) {
                            for (var e = {}, t = 0; t < l.length; t++) e[l[t].toUpperCase()] = l[t];
                            return e
                        },
                        C = function(l, e) {
                            return typeof l === N && -1 !== x(e).indexOf(x(l))
                        },
                        x = function(l) {
                            return l.toLowerCase()
                        },
                        D = function(l, e) {
                            if (typeof l === N) return l = l.replace(/^\s\s*/, "").replace(/\s\s*$/, ""), typeof e === o ? l : l.substring(0, 255)
                        },
                        K = function(l, e) {
                            for (var t, a, n, o, N, A, u = 0; u < e.length && !N;) {
                                var _ = e[u],
                                    s = e[u + 1];
                                for (t = a = 0; t < _.length && !N;)
                                    if (N = _[t++].exec(l))
                                        for (n = 0; n < s.length; n++) A = N[++a], typeof(o = s[n]) === E && o.length > 0 ? 2 === o.length ? typeof o[1] == i ? this[o[0]] = o[1].call(this, A) : this[o[0]] = o[1] : 3 === o.length ? typeof o[1] !== i || o[1].exec && o[1].test ? this[o[0]] = A ? A.replace(o[1], o[2]) : r : this[o[0]] = A ? o[1].call(this, A, o[2]) : r : 4 === o.length && (this[o[0]] = A ? o[3].call(this, A.replace(o[1], o[2])) : r) : this[o] = A || r;
                                u += 2
                            }
                        },
                        W = function(l, e) {
                            for (var t in e)
                                if (typeof e[t] === E && e[t].length > 0) {
                                    for (var a = 0; a < e[t].length; a++)
                                        if (C(e[t][a], l)) return "?" === t ? r : t
                                } else if (C(e[t], l)) return "?" === t ? r : t;
                            return l
                        },
                        V = {
                            ME: "4.90",
                            "NT 3.11": "NT3.51",
                            "NT 4.0": "NT4.0",
                            2e3: "NT 5.0",
                            XP: ["NT 5.1", "NT 5.2"],
                            Vista: "NT 6.0",
                            7: "NT 6.1",
                            8: "NT 6.2",
                            8.1: "NT 6.3",
                            10: ["NT 6.4", "NT 10.0"],
                            RT: "ARM"
                        },
                        z = {
                            browser: [
                                [/\b(?:crmo|crios)\/([\w\.]+)/i],
                                [c, [u, "Chrome"]],
                                [/edg(?:e|ios|a)?\/([\w\.]+)/i],
                                [c, [u, "Edge"]],
                                [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],
                                [u, c],
                                [/opios[\/ ]+([\w\.]+)/i],
                                [c, [u, "Opera Mini"]],
                                [/\bopr\/([\w\.]+)/i],
                                [c, [u, U]],
                                [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i, /(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i, /(ba?idubrowser)[\/ ]?([\w\.]+)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale|qqbrowserlite|qq)\/([-\w\.]+)/i, /(weibo)__([\d\.]+)/i],
                                [u, c],
                                [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
                                [c, [u, "UCBrowser"]],
                                [/\bqbcore\/([\w\.]+)/i],
                                [c, [u, "WeChat(Win) Desktop"]],
                                [/micromessenger\/([\w\.]+)/i],
                                [c, [u, "WeChat"]],
                                [/konqueror\/([\w\.]+)/i],
                                [c, [u, "Konqueror"]],
                                [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
                                [c, [u, "IE"]],
                                [/yabrowser\/([\w\.]+)/i],
                                [c, [u, "Yandex"]],
                                [/(avast|avg)\/([\w\.]+)/i],
                                [
                                    [u, /(.+)/, "$1 Secure Browser"], c
                                ],
                                [/\bfocus\/([\w\.]+)/i],
                                [c, [u, "Firefox Focus"]],
                                [/\bopt\/([\w\.]+)/i],
                                [c, [u, "Opera Touch"]],
                                [/coc_coc\w+\/([\w\.]+)/i],
                                [c, [u, "Coc Coc"]],
                                [/dolfin\/([\w\.]+)/i],
                                [c, [u, "Dolphin"]],
                                [/coast\/([\w\.]+)/i],
                                [c, [u, "Opera Coast"]],
                                [/miuibrowser\/([\w\.]+)/i],
                                [c, [u, "MIUI Browser"]],
                                [/fxios\/([-\w\.]+)/i],
                                [c, [u, T]],
                                [/\bqihu|(qi?ho?o?|360)browser/i],
                                [
                                    [u, "360 Browser"]
                                ],
                                [/(oculus|samsung|sailfish)browser\/([\w\.]+)/i],
                                [
                                    [u, /(.+)/, "$1 Browser"], c
                                ],
                                [/(comodo_dragon)\/([\w\.]+)/i],
                                [
                                    [u, /_/g, " "], c
                                ],
                                [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i],
                                [u, c],
                                [/(metasr)[\/ ]?([\w\.]+)/i, /(lbbrowser)/i],
                                [u],
                                [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
                                [
                                    [u, k], c
                                ],
                                [/safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(chromium|instagram)[\/ ]([-\w\.]+)/i],
                                [u, c],
                                [/\bgsa\/([\w\.]+) .*safari\//i],
                                [c, [u, "GSA"]],
                                [/headlesschrome(?:\/([\w\.]+)| )/i],
                                [c, [u, "Chrome Headless"]],
                                [/ wv\).+(chrome)\/([\w\.]+)/i],
                                [
                                    [u, "Chrome WebView"], c
                                ],
                                [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
                                [c, [u, "Android Browser"]],
                                [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
                                [u, c],
                                [/version\/([\w\.]+) .*mobile\/\w+ (safari)/i],
                                [c, [u, "Mobile Safari"]],
                                [/version\/([\w\.]+) .*(mobile ?safari|safari)/i],
                                [c, u],
                                [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
                                [u, [c, W, {
                                    "1.0": "/8",
                                    1.2: "/1",
                                    1.3: "/3",
                                    "2.0": "/412",
                                    "2.0.2": "/416",
                                    "2.0.3": "/417",
                                    "2.0.4": "/419",
                                    "?": "/"
                                }]],
                                [/(webkit|khtml)\/([\w\.]+)/i],
                                [u, c],
                                [/(navigator|netscape\d?)\/([-\w\.]+)/i],
                                [
                                    [u, "Netscape"], c
                                ],
                                [/mobile vr; rv:([\w\.]+)\).+firefox/i],
                                [c, [u, "Firefox Reality"]],
                                [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /(links) \(([\w\.]+)/i],
                                [u, c]
                            ],
                            cpu: [
                                [/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],
                                [
                                    [M, "amd64"]
                                ],
                                [/(ia32(?=;))/i],
                                [
                                    [M, x]
                                ],
                                [/((?:i[346]|x)86)[;\)]/i],
                                [
                                    [M, "ia32"]
                                ],
                                [/\b(aarch64|arm(v?8e?l?|_?64))\b/i],
                                [
                                    [M, "arm64"]
                                ],
                                [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
                                [
                                    [M, "armhf"]
                                ],
                                [/windows (ce|mobile); ppc;/i],
                                [
                                    [M, "arm"]
                                ],
                                [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],
                                [
                                    [M, /ower/, "", x]
                                ],
                                [/(sun4\w)[;\)]/i],
                                [
                                    [M, "sparc"]
                                ],
                                [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],
                                [
                                    [M, x]
                                ]
                            ],
                            device: [
                                [/\b(sch-i[89]0\d|shw-m380s|sm-[pt]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],
                                [A, [s, G],
                                    [_, p]
                                ],
                                [/\b((?:s[cgp]h|gt|sm)-\w+|galaxy nexus)/i, /samsung[- ]([-\w]+)/i, /sec-(sgh\w+)/i],
                                [A, [s, G],
                                    [_, d]
                                ],
                                [/\((ip(?:hone|od)[\w ]*);/i],
                                [A, [s, g],
                                    [_, d]
                                ],
                                [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i],
                                [A, [s, g],
                                    [_, p]
                                ],
                                [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],
                                [A, [s, S],
                                    [_, p]
                                ],
                                [/(?:huawei|honor)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}-[atu]?[ln][01259x][012359][an]?)\b(?!.+d\/s)/i],
                                [A, [s, S],
                                    [_, d]
                                ],
                                [/\b(poco[\w ]+)(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],
                                [
                                    [A, /_/g, " "],
                                    [s, P],
                                    [_, d]
                                ],
                                [/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],
                                [
                                    [A, /_/g, " "],
                                    [s, P],
                                    [_, p]
                                ],
                                [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],
                                [A, [s, "OPPO"],
                                    [_, d]
                                ],
                                [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
                                [A, [s, "Vivo"],
                                    [_, d]
                                ],
                                [/\b(rmx[12]\d{3})(?: bui|;|\))/i],
                                [A, [s, "Realme"],
                                    [_, d]
                                ],
                                [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],
                                [A, [s, v],
                                    [_, d]
                                ],
                                [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
                                [A, [s, v],
                                    [_, p]
                                ],
                                [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
                                [A, [s, b],
                                    [_, p]
                                ],
                                [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i, /\blg-?([\d\w]+) bui/i],
                                [A, [s, b],
                                    [_, d]
                                ],
                                [/(ideatab[-\w ]+)/i, /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],
                                [A, [s, "Lenovo"],
                                    [_, p]
                                ],
                                [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i],
                                [
                                    [A, /_/g, " "],
                                    [s, "Nokia"],
                                    [_, d]
                                ],
                                [/(pixel c)\b/i],
                                [A, [s, I],
                                    [_, p]
                                ],
                                [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
                                [A, [s, I],
                                    [_, d]
                                ],
                                [/droid.+ ([c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
                                [A, [s, F],
                                    [_, d]
                                ],
                                [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
                                [
                                    [A, "Xperia Tablet"],
                                    [s, F],
                                    [_, p]
                                ],
                                [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],
                                [A, [s, "OnePlus"],
                                    [_, d]
                                ],
                                [/(alexa)webm/i, /(kf[a-z]{2}wi)( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i],
                                [A, [s, h],
                                    [_, p]
                                ],
                                [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
                                [
                                    [A, /(.+)/g, "Fire Phone $1"],
                                    [s, h],
                                    [_, d]
                                ],
                                [/(playbook);[-\w\),; ]+(rim)/i],
                                [A, s, [_, p]],
                                [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
                                [A, [s, y],
                                    [_, d]
                                ],
                                [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],
                                [A, [s, L],
                                    [_, p]
                                ],
                                [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
                                [A, [s, L],
                                    [_, d]
                                ],
                                [/(nexus 9)/i],
                                [A, [s, "HTC"],
                                    [_, p]
                                ],
                                [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic|sony)[-_ ]?([-\w]*)/i],
                                [s, [A, /_/g, " "],
                                    [_, d]
                                ],
                                [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
                                [A, [s, "Acer"],
                                    [_, p]
                                ],
                                [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
                                [A, [s, "Meizu"],
                                    [_, d]
                                ],
                                [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
                                [A, [s, "Sharp"],
                                    [_, d]
                                ],
                                [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i, /(hp) ([\w ]+\w)/i, /(asus)-?(\w+)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w]+)/i, /(jolla)/i, /(oppo) ?([\w ]+) bui/i],
                                [s, A, [_, d]],
                                [/(archos) (gamepad2?)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i],
                                [s, A, [_, p]],
                                [/(surface duo)/i],
                                [A, [s, B],
                                    [_, p]
                                ],
                                [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
                                [A, [s, "Fairphone"],
                                    [_, d]
                                ],
                                [/(u304aa)/i],
                                [A, [s, "AT&T"],
                                    [_, d]
                                ],
                                [/\bsie-(\w*)/i],
                                [A, [s, "Siemens"],
                                    [_, d]
                                ],
                                [/\b(rct\w+) b/i],
                                [A, [s, "RCA"],
                                    [_, p]
                                ],
                                [/\b(venue[\d ]{2,7}) b/i],
                                [A, [s, "Dell"],
                                    [_, p]
                                ],
                                [/\b(q(?:mv|ta)\w+) b/i],
                                [A, [s, "Verizon"],
                                    [_, p]
                                ],
                                [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
                                [A, [s, "Barnes & Noble"],
                                    [_, p]
                                ],
                                [/\b(tm\d{3}\w+) b/i],
                                [A, [s, "NuVision"],
                                    [_, p]
                                ],
                                [/\b(k88) b/i],
                                [A, [s, "ZTE"],
                                    [_, p]
                                ],
                                [/\b(nx\d{3}j) b/i],
                                [A, [s, "ZTE"],
                                    [_, d]
                                ],
                                [/\b(gen\d{3}) b.+49h/i],
                                [A, [s, "Swiss"],
                                    [_, d]
                                ],
                                [/\b(zur\d{3}) b/i],
                                [A, [s, "Swiss"],
                                    [_, p]
                                ],
                                [/\b((zeki)?tb.*\b) b/i],
                                [A, [s, "Zeki"],
                                    [_, p]
                                ],
                                [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
                                [
                                    [s, "Dragon Touch"], A, [_, p]
                                ],
                                [/\b(ns-?\w{0,9}) b/i],
                                [A, [s, "Insignia"],
                                    [_, p]
                                ],
                                [/\b((nxa|next)-?\w{0,9}) b/i],
                                [A, [s, "NextBook"],
                                    [_, p]
                                ],
                                [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
                                [
                                    [s, "Voice"], A, [_, d]
                                ],
                                [/\b(lvtel\-)?(v1[12]) b/i],
                                [
                                    [s, "LvTel"], A, [_, d]
                                ],
                                [/\b(ph-1) /i],
                                [A, [s, "Essential"],
                                    [_, d]
                                ],
                                [/\b(v(100md|700na|7011|917g).*\b) b/i],
                                [A, [s, "Envizen"],
                                    [_, p]
                                ],
                                [/\b(trio[-\w\. ]+) b/i],
                                [A, [s, "MachSpeed"],
                                    [_, p]
                                ],
                                [/\btu_(1491) b/i],
                                [A, [s, "Rotor"],
                                    [_, p]
                                ],
                                [/(shield[\w ]+) b/i],
                                [A, [s, "Nvidia"],
                                    [_, p]
                                ],
                                [/(sprint) (\w+)/i],
                                [s, A, [_, d]],
                                [/(kin\.[onetw]{3})/i],
                                [
                                    [A, /\./g, " "],
                                    [s, B],
                                    [_, d]
                                ],
                                [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
                                [A, [s, w],
                                    [_, p]
                                ],
                                [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
                                [A, [s, w],
                                    [_, d]
                                ],
                                [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
                                [s, A, [_, f]],
                                [/droid.+; (shield) bui/i],
                                [A, [s, "Nvidia"],
                                    [_, f]
                                ],
                                [/(playstation [345portablevi]+)/i],
                                [A, [s, F],
                                    [_, f]
                                ],
                                [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
                                [A, [s, B],
                                    [_, f]
                                ],
                                [/smart-tv.+(samsung)/i],
                                [s, [_, O]],
                                [/hbbtv.+maple;(\d+)/i],
                                [
                                    [A, /^/, "SmartTV"],
                                    [s, G],
                                    [_, O]
                                ],
                                [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
                                [
                                    [s, b],
                                    [_, O]
                                ],
                                [/(apple) ?tv/i],
                                [s, [A, "Apple TV"],
                                    [_, O]
                                ],
                                [/crkey/i],
                                [
                                    [A, "Chromecast"],
                                    [s, I],
                                    [_, O]
                                ],
                                [/droid.+aft(\w)( bui|\))/i],
                                [A, [s, h],
                                    [_, O]
                                ],
                                [/\(dtv[\);].+(aquos)/i],
                                [A, [s, "Sharp"],
                                    [_, O]
                                ],
                                [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w ]*; *(\w[^;]*);([^;]*)/i],
                                [
                                    [s, D],
                                    [A, D],
                                    [_, O]
                                ],
                                [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
                                [
                                    [_, O]
                                ],
                                [/((pebble))app/i],
                                [s, A, [_, R]],
                                [/droid.+; (glass) \d/i],
                                [A, [s, I],
                                    [_, R]
                                ],
                                [/droid.+; (wt63?0{2,3})\)/i],
                                [A, [s, w],
                                    [_, R]
                                ],
                                [/(quest( 2)?)/i],
                                [A, [s, k],
                                    [_, R]
                                ],
                                [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
                                [s, [_, m]],
                                [/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],
                                [A, [_, d]],
                                [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
                                [A, [_, p]],
                                [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
                                [
                                    [_, p]
                                ],
                                [/(phone|mobile(?:[;\/]| safari)|pda(?=.+windows ce))/i],
                                [
                                    [_, d]
                                ],
                                [/(android[-\w\. ]{0,9});.+buil/i],
                                [A, [s, "Generic"]]
                            ],
                            engine: [
                                [/windows.+ edge\/([\w\.]+)/i],
                                [c, [u, "EdgeHTML"]],
                                [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
                                [c, [u, "Blink"]],
                                [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i],
                                [u, c],
                                [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
                                [c, u]
                            ],
                            os: [
                                [/microsoft (windows) (vista|xp)/i],
                                [u, c],
                                [/(windows) nt 6\.2; (arm)/i, /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i, /(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i],
                                [u, [c, W, V]],
                                [/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
                                [
                                    [u, "Windows"],
                                    [c, W, V]
                                ],
                                [/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i, /cfnetwork\/.+darwin/i],
                                [
                                    [c, /_/g, "."],
                                    [u, "iOS"]
                                ],
                                [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i],
                                [
                                    [u, "Mac OS"],
                                    [c, /_/g, "."]
                                ],
                                [/droid ([\w\.]+)\b.+(android[- ]x86)/i],
                                [c, u],
                                [/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i, /(blackberry)\w*\/([\w\.]*)/i, /(tizen|kaios)[\/ ]([\w\.]+)/i, /\((series40);/i],
                                [u, c],
                                [/\(bb(10);/i],
                                [c, [u, y]],
                                [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],
                                [c, [u, "Symbian"]],
                                [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],
                                [c, [u, "Firefox OS"]],
                                [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
                                [c, [u, "webOS"]],
                                [/crkey\/([\d\.]+)/i],
                                [c, [u, "Chromecast"]],
                                [/(cros) [\w]+ ([\w\.]+\w)/i],
                                [
                                    [u, "Chromium OS"], c
                                ],
                                [/(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux) ?([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i],
                                [u, c],
                                [/(sunos) ?([\w\.\d]*)/i],
                                [
                                    [u, "Solaris"], c
                                ],
                                [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux)/i, /(unix) ?([\w\.]*)/i],
                                [u, c]
                            ]
                        },
                        Z = function l(e, t) {
                            if (typeof e === E && (t = e, e = r), !(this instanceof l)) return new l(e, t).getResult();
                            var a = e || (typeof n !== o && n.navigator && n.navigator.userAgent ? n.navigator.userAgent : ""),
                                i = t ? function(l, e) {
                                    var t = {};
                                    for (var a in l) e[a] && e[a].length % 2 === 0 ? t[a] = e[a].concat(l[a]) : t[a] = l[a];
                                    return t
                                }(z, t) : z;
                            return this.getBrowser = function() {
                                var l, e = {};
                                return e.name = r, e.version = r, K.call(e, a, i.browser), e.major = typeof(l = e.version) === N ? l.replace(/[^\d\.]/g, "").split(".")[0] : r, e
                            }, this.getCPU = function() {
                                var l = {};
                                return l.architecture = r, K.call(l, a, i.cpu), l
                            }, this.getDevice = function() {
                                var l = {};
                                return l.vendor = r, l.model = r, l.type = r, K.call(l, a, i.device), l
                            }, this.getEngine = function() {
                                var l = {};
                                return l.name = r, l.version = r, K.call(l, a, i.engine), l
                            }, this.getOS = function() {
                                var l = {};
                                return l.name = r, l.version = r, K.call(l, a, i.os), l
                            }, this.getResult = function() {
                                return {
                                    ua: this.getUA(),
                                    browser: this.getBrowser(),
                                    engine: this.getEngine(),
                                    os: this.getOS(),
                                    device: this.getDevice(),
                                    cpu: this.getCPU()
                                }
                            }, this.getUA = function() {
                                return a
                            }, this.setUA = function(l) {
                                return a = typeof l === N && l.length > 255 ? D(l, 255) : l, this
                            }, this.setUA(a), this
                        };
                    Z.VERSION = "0.7.31", Z.BROWSER = H([u, c, "major"]), Z.CPU = H([M]), Z.DEVICE = H([A, s, _, f, d, O, p, R, m]), Z.ENGINE = Z.OS = H([u, c]), typeof e !== o ? (l.exports && (e = l.exports = Z), e.UAParser = Z) : t.amdO ? (a = function() {
                        return Z
                    }.call(e, t, e, l)) === r || (l.exports = a) : typeof n !== o && (n.UAParser = Z);
                    var j = typeof n !== o && (n.jQuery || n.Zepto);
                    if (j && !j.ua) {
                        var J = new Z;
                        j.ua = J.getResult(), j.ua.get = function() {
                            return J.getUA()
                        }, j.ua.set = function(l) {
                            J.setUA(l);
                            var e = J.getResult();
                            for (var t in e) j.ua[t] = e[t]
                        }
                    }
                }("object" === typeof window ? window : this)
            },
            907: function(l, e, t) {
                "use strict";

                function a(l, e) {
                    (null == e || e > l.length) && (e = l.length);
                    for (var t = 0, a = new Array(e); t < e; t++) a[t] = l[t];
                    return a
                }
                t.d(e, {
                    Z: function() {
                        return a
                    }
                })
            },
            5861: function(l, e, t) {
                "use strict";

                function a(l, e, t, a, n, r, i) {
                    try {
                        var o = l[r](i),
                            E = o.value
                    } catch (N) {
                        return void t(N)
                    }
                    o.done ? e(E) : Promise.resolve(E).then(a, n)
                }

                function n(l) {
                    return function() {
                        var e = this,
                            t = arguments;
                        return new Promise((function(n, r) {
                            var i = l.apply(e, t);

                            function o(l) {
                                a(i, n, r, o, E, "next", l)
                            }

                            function E(l) {
                                a(i, n, r, o, E, "throw", l)
                            }
                            o(void 0)
                        }))
                    }
                }
                t.d(e, {
                    Z: function() {
                        return n
                    }
                })
            },
            5671: function(l, e, t) {
                "use strict";

                function a(l, e) {
                    if (!(l instanceof e)) throw new TypeError("Cannot call a class as a function")
                }
                t.d(e, {
                    Z: function() {
                        return a
                    }
                })
            },
            3144: function(l, e, t) {
                "use strict";

                function a(l, e) {
                    for (var t = 0; t < e.length; t++) {
                        var a = e[t];
                        a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(l, a.key, a)
                    }
                }

                function n(l, e, t) {
                    return e && a(l.prototype, e), t && a(l, t), Object.defineProperty(l, "prototype", {
                        writable: !1
                    }), l
                }
                t.d(e, {
                    Z: function() {
                        return n
                    }
                })
            },
            7762: function(l, e, t) {
                "use strict";
                t.d(e, {
                    Z: function() {
                        return n
                    }
                });
                var a = t(181);

                function n(l, e) {
                    var t = "undefined" !== typeof Symbol && l[Symbol.iterator] || l["@@iterator"];
                    if (!t) {
                        if (Array.isArray(l) || (t = (0, a.Z)(l)) || e && l && "number" === typeof l.length) {
                            t && (l = t);
                            var n = 0,
                                r = function() {};
                            return {
                                s: r,
                                n: function() {
                                    return n >= l.length ? {
                                        done: !0
                                    } : {
                                        done: !1,
                                        value: l[n++]
                                    }
                                },
                                e: function(l) {
                                    throw l
                                },
                                f: r
                            }
                        }
                        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }
                    var i, o = !0,
                        E = !1;
                    return {
                        s: function() {
                            t = t.call(l)
                        },
                        n: function() {
                            var l = t.next();
                            return o = l.done, l
                        },
                        e: function(l) {
                            E = !0, i = l
                        },
                        f: function() {
                            try {
                                o || null == t.return || t.return()
                            } finally {
                                if (E) throw i
                            }
                        }
                    }
                }
            },
            4942: function(l, e, t) {
                "use strict";

                function a(l, e, t) {
                    return e in l ? Object.defineProperty(l, e, {
                        value: t,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : l[e] = t, l
                }
                t.d(e, {
                    Z: function() {
                        return a
                    }
                })
            },
            885: function(l, e, t) {
                "use strict";
                t.d(e, {
                    Z: function() {
                        return n
                    }
                });
                var a = t(181);

                function n(l, e) {
                    return function(l) {
                        if (Array.isArray(l)) return l
                    }(l) || function(l, e) {
                        var t = null == l ? null : "undefined" !== typeof Symbol && l[Symbol.iterator] || l["@@iterator"];
                        if (null != t) {
                            var a, n, r = [],
                                i = !0,
                                o = !1;
                            try {
                                for (t = t.call(l); !(i = (a = t.next()).done) && (r.push(a.value), !e || r.length !== e); i = !0);
                            } catch (E) {
                                o = !0, n = E
                            } finally {
                                try {
                                    i || null == t.return || t.return()
                                } finally {
                                    if (o) throw n
                                }
                            }
                            return r
                        }
                    }(l, e) || (0, a.Z)(l, e) || function() {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()
                }
            },
            2982: function(l, e, t) {
                "use strict";
                t.d(e, {
                    Z: function() {
                        return r
                    }
                });
                var a = t(907);
                var n = t(181);

                function r(l) {
                    return function(l) {
                        if (Array.isArray(l)) return (0, a.Z)(l)
                    }(l) || function(l) {
                        if ("undefined" !== typeof Symbol && null != l[Symbol.iterator] || null != l["@@iterator"]) return Array.from(l)
                    }(l) || (0, n.Z)(l) || function() {
                        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()
                }
            },
            181: function(l, e, t) {
                "use strict";
                t.d(e, {
                    Z: function() {
                        return n
                    }
                });
                var a = t(907);

                function n(l, e) {
                    if (l) {
                        if ("string" === typeof l) return (0, a.Z)(l, e);
                        var t = Object.prototype.toString.call(l).slice(8, -1);
                        return "Object" === t && l.constructor && (t = l.constructor.name), "Map" === t || "Set" === t ? Array.from(l) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? (0, a.Z)(l, e) : void 0
                    }
                }
            },
            1522: function(l, e, t) {
                "use strict";

                function a(l, e, t) {
                    l.prototype = e.prototype = t, t.constructor = l
                }

                function n(l, e) {
                    var t = Object.create(l.prototype);
                    for (var a in e) t[a] = e[a];
                    return t
                }

                function r() {}
                t.d(e, {
                    ZP: function() {
                        return m
                    },
                    B8: function() {
                        return y
                    }
                });
                var i = .7,
                    o = 1 / i,
                    E = "\\s*([+-]?\\d+)\\s*",
                    N = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
                    A = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
                    u = /^#([0-9a-f]{3,8})$/,
                    _ = new RegExp("^rgb\\(" + [E, E, E] + "\\)$"),
                    s = new RegExp("^rgb\\(" + [A, A, A] + "\\)$"),
                    c = new RegExp("^rgba\\(" + [E, E, E, N] + "\\)$"),
                    M = new RegExp("^rgba\\(" + [A, A, A, N] + "\\)$"),
                    f = new RegExp("^hsl\\(" + [N, A, A] + "\\)$"),
                    d = new RegExp("^hsla\\(" + [N, A, A, N] + "\\)$"),
                    p = {
                        aliceblue: 15792383,
                        antiquewhite: 16444375,
                        aqua: 65535,
                        aquamarine: 8388564,
                        azure: 15794175,
                        beige: 16119260,
                        bisque: 16770244,
                        black: 0,
                        blanchedalmond: 16772045,
                        blue: 255,
                        blueviolet: 9055202,
                        brown: 10824234,
                        burlywood: 14596231,
                        cadetblue: 6266528,
                        chartreuse: 8388352,
                        chocolate: 13789470,
                        coral: 16744272,
                        cornflowerblue: 6591981,
                        cornsilk: 16775388,
                        crimson: 14423100,
                        cyan: 65535,
                        darkblue: 139,
                        darkcyan: 35723,
                        darkgoldenrod: 12092939,
                        darkgray: 11119017,
                        darkgreen: 25600,
                        darkgrey: 11119017,
                        darkkhaki: 12433259,
                        darkmagenta: 9109643,
                        darkolivegreen: 5597999,
                        darkorange: 16747520,
                        darkorchid: 10040012,
                        darkred: 9109504,
                        darksalmon: 15308410,
                        darkseagreen: 9419919,
                        darkslateblue: 4734347,
                        darkslategray: 3100495,
                        darkslategrey: 3100495,
                        darkturquoise: 52945,
                        darkviolet: 9699539,
                        deeppink: 16716947,
                        deepskyblue: 49151,
                        dimgray: 6908265,
                        dimgrey: 6908265,
                        dodgerblue: 2003199,
                        firebrick: 11674146,
                        floralwhite: 16775920,
                        forestgreen: 2263842,
                        fuchsia: 16711935,
                        gainsboro: 14474460,
                        ghostwhite: 16316671,
                        gold: 16766720,
                        goldenrod: 14329120,
                        gray: 8421504,
                        green: 32768,
                        greenyellow: 11403055,
                        grey: 8421504,
                        honeydew: 15794160,
                        hotpink: 16738740,
                        indianred: 13458524,
                        indigo: 4915330,
                        ivory: 16777200,
                        khaki: 15787660,
                        lavender: 15132410,
                        lavenderblush: 16773365,
                        lawngreen: 8190976,
                        lemonchiffon: 16775885,
                        lightblue: 11393254,
                        lightcoral: 15761536,
                        lightcyan: 14745599,
                        lightgoldenrodyellow: 16448210,
                        lightgray: 13882323,
                        lightgreen: 9498256,
                        lightgrey: 13882323,
                        lightpink: 16758465,
                        lightsalmon: 16752762,
                        lightseagreen: 2142890,
                        lightskyblue: 8900346,
                        lightslategray: 7833753,
                        lightslategrey: 7833753,
                        lightsteelblue: 11584734,
                        lightyellow: 16777184,
                        lime: 65280,
                        limegreen: 3329330,
                        linen: 16445670,
                        magenta: 16711935,
                        maroon: 8388608,
                        mediumaquamarine: 6737322,
                        mediumblue: 205,
                        mediumorchid: 12211667,
                        mediumpurple: 9662683,
                        mediumseagreen: 3978097,
                        mediumslateblue: 8087790,
                        mediumspringgreen: 64154,
                        mediumturquoise: 4772300,
                        mediumvioletred: 13047173,
                        midnightblue: 1644912,
                        mintcream: 16121850,
                        mistyrose: 16770273,
                        moccasin: 16770229,
                        navajowhite: 16768685,
                        navy: 128,
                        oldlace: 16643558,
                        olive: 8421376,
                        olivedrab: 7048739,
                        orange: 16753920,
                        orangered: 16729344,
                        orchid: 14315734,
                        palegoldenrod: 15657130,
                        palegreen: 10025880,
                        paleturquoise: 11529966,
                        palevioletred: 14381203,
                        papayawhip: 16773077,
                        peachpuff: 16767673,
                        peru: 13468991,
                        pink: 16761035,
                        plum: 14524637,
                        powderblue: 11591910,
                        purple: 8388736,
                        rebeccapurple: 6697881,
                        red: 16711680,
                        rosybrown: 12357519,
                        royalblue: 4286945,
                        saddlebrown: 9127187,
                        salmon: 16416882,
                        sandybrown: 16032864,
                        seagreen: 3050327,
                        seashell: 16774638,
                        sienna: 10506797,
                        silver: 12632256,
                        skyblue: 8900331,
                        slateblue: 6970061,
                        slategray: 7372944,
                        slategrey: 7372944,
                        snow: 16775930,
                        springgreen: 65407,
                        steelblue: 4620980,
                        tan: 13808780,
                        teal: 32896,
                        thistle: 14204888,
                        tomato: 16737095,
                        turquoise: 4251856,
                        violet: 15631086,
                        wheat: 16113331,
                        white: 16777215,
                        whitesmoke: 16119285,
                        yellow: 16776960,
                        yellowgreen: 10145074
                    };

                function O() {
                    return this.rgb().formatHex()
                }

                function R() {
                    return this.rgb().formatRgb()
                }

                function m(l) {
                    var e, t;
                    return l = (l + "").trim().toLowerCase(), (e = u.exec(l)) ? (t = e[1].length, e = parseInt(e[1], 16), 6 === t ? h(e) : 3 === t ? new T(e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | 240 & e, (15 & e) << 4 | 15 & e, 1) : 8 === t ? g(e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, (255 & e) / 255) : 4 === t ? g(e >> 12 & 15 | e >> 8 & 240, e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | 240 & e, ((15 & e) << 4 | 15 & e) / 255) : null) : (e = _.exec(l)) ? new T(e[1], e[2], e[3], 1) : (e = s.exec(l)) ? new T(255 * e[1] / 100, 255 * e[2] / 100, 255 * e[3] / 100, 1) : (e = c.exec(l)) ? g(e[1], e[2], e[3], e[4]) : (e = M.exec(l)) ? g(255 * e[1] / 100, 255 * e[2] / 100, 255 * e[3] / 100, e[4]) : (e = f.exec(l)) ? B(e[1], e[2] / 100, e[3] / 100, 1) : (e = d.exec(l)) ? B(e[1], e[2] / 100, e[3] / 100, e[4]) : p.hasOwnProperty(l) ? h(p[l]) : "transparent" === l ? new T(NaN, NaN, NaN, 0) : null
                }

                function h(l) {
                    return new T(l >> 16 & 255, l >> 8 & 255, 255 & l, 1)
                }

                function g(l, e, t, a) {
                    return a <= 0 && (l = e = t = NaN), new T(l, e, t, a)
                }

                function L(l) {
                    return l instanceof r || (l = m(l)), l ? new T((l = l.rgb()).r, l.g, l.b, l.opacity) : new T
                }

                function y(l, e, t, a) {
                    return 1 === arguments.length ? L(l) : new T(l, e, t, null == a ? 1 : a)
                }

                function T(l, e, t, a) {
                    this.r = +l, this.g = +e, this.b = +t, this.opacity = +a
                }

                function I() {
                    return "#" + b(this.r) + b(this.g) + b(this.b)
                }

                function S() {
                    var l = this.opacity;
                    return (1 === (l = isNaN(l) ? 1 : Math.max(0, Math.min(1, l))) ? "rgb(" : "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (1 === l ? ")" : ", " + l + ")")
                }

                function b(l) {
                    return ((l = Math.max(0, Math.min(255, Math.round(l) || 0))) < 16 ? "0" : "") + l.toString(16)
                }

                function B(l, e, t, a) {
                    return a <= 0 ? l = e = t = NaN : t <= 0 || t >= 1 ? l = e = NaN : e <= 0 && (l = NaN), new U(l, e, t, a)
                }

                function v(l) {
                    if (l instanceof U) return new U(l.h, l.s, l.l, l.opacity);
                    if (l instanceof r || (l = m(l)), !l) return new U;
                    if (l instanceof U) return l;
                    var e = (l = l.rgb()).r / 255,
                        t = l.g / 255,
                        a = l.b / 255,
                        n = Math.min(e, t, a),
                        i = Math.max(e, t, a),
                        o = NaN,
                        E = i - n,
                        N = (i + n) / 2;
                    return E ? (o = e === i ? (t - a) / E + 6 * (t < a) : t === i ? (a - e) / E + 2 : (e - t) / E + 4, E /= N < .5 ? i + n : 2 - i - n, o *= 60) : E = N > 0 && N < 1 ? 0 : o, new U(o, E, N, l.opacity)
                }

                function U(l, e, t, a) {
                    this.h = +l, this.s = +e, this.l = +t, this.opacity = +a
                }

                function G(l, e, t) {
                    return 255 * (l < 60 ? e + (t - e) * l / 60 : l < 180 ? t : l < 240 ? e + (t - e) * (240 - l) / 60 : e)
                }
                a(r, m, {
                    copy: function(l) {
                        return Object.assign(new this.constructor, this, l)
                    },
                    displayable: function() {
                        return this.rgb().displayable()
                    },
                    hex: O,
                    formatHex: O,
                    formatHsl: function() {
                        return v(this).formatHsl()
                    },
                    formatRgb: R,
                    toString: R
                }), a(T, y, n(r, {
                    brighter: function(l) {
                        return l = null == l ? o : Math.pow(o, l), new T(this.r * l, this.g * l, this.b * l, this.opacity)
                    },
                    darker: function(l) {
                        return l = null == l ? i : Math.pow(i, l), new T(this.r * l, this.g * l, this.b * l, this.opacity)
                    },
                    rgb: function() {
                        return this
                    },
                    displayable: function() {
                        return -.5 <= this.r && this.r < 255.5 && -.5 <= this.g && this.g < 255.5 && -.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1
                    },
                    hex: I,
                    formatHex: I,
                    formatRgb: S,
                    toString: S
                })), a(U, (function(l, e, t, a) {
                    return 1 === arguments.length ? v(l) : new U(l, e, t, null == a ? 1 : a)
                }), n(r, {
                    brighter: function(l) {
                        return l = null == l ? o : Math.pow(o, l), new U(this.h, this.s, this.l * l, this.opacity)
                    },
                    darker: function(l) {
                        return l = null == l ? i : Math.pow(i, l), new U(this.h, this.s, this.l * l, this.opacity)
                    },
                    rgb: function() {
                        var l = this.h % 360 + 360 * (this.h < 0),
                            e = isNaN(l) || isNaN(this.s) ? 0 : this.s,
                            t = this.l,
                            a = t + (t < .5 ? t : 1 - t) * e,
                            n = 2 * t - a;
                        return new T(G(l >= 240 ? l - 240 : l + 120, n, a), G(l, n, a), G(l < 120 ? l + 240 : l - 120, n, a), this.opacity)
                    },
                    displayable: function() {
                        return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1
                    },
                    formatHsl: function() {
                        var l = this.opacity;
                        return (1 === (l = isNaN(l) ? 1 : Math.max(0, Math.min(1, l))) ? "hsl(" : "hsla(") + (this.h || 0) + ", " + 100 * (this.s || 0) + "%, " + 100 * (this.l || 0) + "%" + (1 === l ? ")" : ", " + l + ")")
                    }
                }))
            },
            9646: function(l, e, t) {
                "use strict";
                t.d(e, {
                    M: function() {
                        return i
                    },
                    Z: function() {
                        return r
                    }
                });
                var a = t(7080),
                    n = t(1449);

                function r(l, e) {
                    return ((0, n.v)(e) ? n.Z : i)(l, e)
                }

                function i(l, e) {
                    var t, n = e ? e.length : 0,
                        r = l ? Math.min(n, l.length) : 0,
                        i = new Array(r),
                        o = new Array(n);
                    for (t = 0; t < r; ++t) i[t] = (0, a.Z)(l[t], e[t]);
                    for (; t < n; ++t) o[t] = e[t];
                    return function(l) {
                        for (t = 0; t < r; ++t) o[t] = i[t](l);
                        return o
                    }
                }
            },
            1354: function(l, e) {
                "use strict";
                e.Z = function(l) {
                    return function() {
                        return l
                    }
                }
            },
            4837: function(l, e, t) {
                "use strict";

                function a(l, e) {
                    return l = +l, e = +e,
                        function(t) {
                            return l * (1 - t) + e * t
                        }
                }
                t.d(e, {
                    Z: function() {
                        return a
                    }
                })
            },
            1449: function(l, e, t) {
                "use strict";

                function a(l, e) {
                    e || (e = []);
                    var t, a = l ? Math.min(e.length, l.length) : 0,
                        n = e.slice();
                    return function(r) {
                        for (t = 0; t < a; ++t) n[t] = l[t] * (1 - r) + e[t] * r;
                        return n
                    }
                }

                function n(l) {
                    return ArrayBuffer.isView(l) && !(l instanceof DataView)
                }
                t.d(e, {
                    Z: function() {
                        return a
                    },
                    v: function() {
                        return n
                    }
                })
            },
            5847: function(l, e, t) {
                "use strict";
                t.d(e, {
                    ZP: function() {
                        return N
                    },
                    hD: function() {
                        return u
                    }
                });
                var a = t(1522);

                function n(l, e, t, a, n) {
                    var r = l * l,
                        i = r * l;
                    return ((1 - 3 * l + 3 * r - i) * e + (4 - 6 * r + 3 * i) * t + (1 + 3 * l + 3 * r - 3 * i) * a + i * n) / 6
                }
                var r = t(1354);

                function i(l, e) {
                    return function(t) {
                        return l + t * e
                    }
                }

                function o(l) {
                    return 1 === (l = +l) ? E : function(e, t) {
                        return t - e ? function(l, e, t) {
                            return l = Math.pow(l, t), e = Math.pow(e, t) - l, t = 1 / t,
                                function(a) {
                                    return Math.pow(l + a * e, t)
                                }
                        }(e, t, l) : (0, r.Z)(isNaN(e) ? t : e)
                    }
                }

                function E(l, e) {
                    var t = e - l;
                    return t ? i(l, t) : (0, r.Z)(isNaN(l) ? e : l)
                }
                var N = function l(e) {
                    var t = o(e);

                    function n(l, e) {
                        var n = t((l = (0, a.B8)(l)).r, (e = (0, a.B8)(e)).r),
                            r = t(l.g, e.g),
                            i = t(l.b, e.b),
                            o = E(l.opacity, e.opacity);
                        return function(e) {
                            return l.r = n(e), l.g = r(e), l.b = i(e), l.opacity = o(e), l + ""
                        }
                    }
                    return n.gamma = l, n
                }(1);

                function A(l) {
                    return function(e) {
                        var t, n, r = e.length,
                            i = new Array(r),
                            o = new Array(r),
                            E = new Array(r);
                        for (t = 0; t < r; ++t) n = (0, a.B8)(e[t]), i[t] = n.r || 0, o[t] = n.g || 0, E[t] = n.b || 0;
                        return i = l(i), o = l(o), E = l(E), n.opacity = 1,
                            function(l) {
                                return n.r = i(l), n.g = o(l), n.b = E(l), n + ""
                            }
                    }
                }
                var u = A((function(l) {
                    var e = l.length - 1;
                    return function(t) {
                        var a = t <= 0 ? t = 0 : t >= 1 ? (t = 1, e - 1) : Math.floor(t * e),
                            r = l[a],
                            i = l[a + 1],
                            o = a > 0 ? l[a - 1] : 2 * r - i,
                            E = a < e - 1 ? l[a + 2] : 2 * i - r;
                        return n((t - a / e) * e, o, r, i, E)
                    }
                }));
                A((function(l) {
                    var e = l.length;
                    return function(t) {
                        var a = Math.floor(((t %= 1) < 0 ? ++t : t) * e),
                            r = l[(a + e - 1) % e],
                            i = l[a % e],
                            o = l[(a + 1) % e],
                            E = l[(a + 2) % e];
                        return n((t - a / e) * e, r, i, o, E)
                    }
                }))
            },
            3739: function(l, e, t) {
                "use strict";

                function a(l, e) {
                    return l = +l, e = +e,
                        function(t) {
                            return Math.round(l * (1 - t) + e * t)
                        }
                }
                t.d(e, {
                    Z: function() {
                        return a
                    }
                })
            },
            7080: function(l, e, t) {
                "use strict";
                t.d(e, {
                    Z: function() {
                        return c
                    }
                });
                var a = t(1522),
                    n = t(5847),
                    r = t(9646);

                function i(l, e) {
                    var t = big;
                    return l = +l, e = +e,
                        function(a) {
                            return t.setTime(l * (1 - a) + e * a), t
                        }
                }
                var o = t(4837);

                function E(l, e) {
                    var t, a = {},
                        n = {};
                    for (t in null !== l && "object" === typeof l || (l = {}), null !== e && "object" === typeof e || (e = {}), e) t in l ? a[t] = c(l[t], e[t]) : n[t] = e[t];
                    return function(l) {
                        for (t in a) n[t] = a[t](l);
                        return n
                    }
                }
                var N = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
                    A = new RegExp(N.source, "g");

                function u(l, e) {
                    var t, a, n, r = N.lastIndex = A.lastIndex = 0,
                        i = -1,
                        E = [],
                        u = [];
                    for (l += "", e += "";
                        (t = N.exec(l)) && (a = A.exec(e));)(n = a.index) > r && (n = e.slice(r, n), E[i] ? E[i] += n : E[++i] = n), (t = t[0]) === (a = a[0]) ? E[i] ? E[i] += a : E[++i] = a : (E[++i] = null, u.push({
                        i: i,
                        x: (0, o.Z)(t, a)
                    })), r = A.lastIndex;
                    return r < e.length && (n = e.slice(r), E[i] ? E[i] += n : E[++i] = n), E.length < 2 ? u[0] ? function(l) {
                        return function(e) {
                            return l(e) + ""
                        }
                    }(u[0].x) : function(l) {
                        return function() {
                            return l
                        }
                    }(e) : (e = u.length, function(l) {
                        for (var t, a = 0; a < e; ++a) E[(t = u[a]).i] = t.x(l);
                        return E.join("")
                    })
                }
                var _ = t(1354),
                    s = t(1449);

                function c(l, e) {
                    var t, N = typeof e;
                    return null == e || "boolean" === N ? (0, _.Z)(e) : ("number" === N ? o.Z : "string" === N ? (t = (0, a.ZP)(e)) ? (e = t, n.ZP) : u : e instanceof a.ZP ? n.ZP : e instanceof Date ? i : (0, s.v)(e) ? s.Z : Array.isArray(e) ? r.M : "function" !== typeof e.valueOf && "function" !== typeof e.toString || isNaN(e) ? E : o.Z)(l, e)
                }
            },
            2590: function(l, e, t) {
                "use strict";

                function a(l, e) {
                    return null == l || null == e ? NaN : l < e ? -1 : l > e ? 1 : l >= e ? 0 : NaN
                }

                function n(l) {
                    var e = l,
                        t = l,
                        n = l;

                    function r(l, e) {
                        var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                            r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : l.length;
                        if (a < r) {
                            if (0 !== t(e, e)) return r;
                            do {
                                var i = a + r >>> 1;
                                n(l[i], e) < 0 ? a = i + 1 : r = i
                            } while (a < r)
                        }
                        return a
                    }
                    return 2 !== l.length && (e = function(e, t) {
                        return l(e) - t
                    }, t = a, n = function(e, t) {
                        return a(l(e), t)
                    }), {
                        left: r,
                        center: function(l, t) {
                            var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                                n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : l.length,
                                i = r(l, t, a, n - 1);
                            return i > a && e(l[i - 1], t) > -e(l[i], t) ? i - 1 : i
                        },
                        right: function(l, e) {
                            var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                                r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : l.length;
                            if (a < r) {
                                if (0 !== t(e, e)) return r;
                                do {
                                    var i = a + r >>> 1;
                                    n(l[i], e) <= 0 ? a = i + 1 : r = i
                                } while (a < r)
                            }
                            return a
                        }
                    }
                }
                t.d(e, {
                    JG: function() {
                        return d
                    },
                    ZP: function() {
                        return O
                    },
                    yR: function() {
                        return s
                    }
                });
                t(7762), t(7757);
                var r = n(a),
                    i = r.right,
                    o = (r.left, n((function(l) {
                        return null === l ? NaN : +l
                    })).center, i),
                    E = t(7080),
                    N = t(4837),
                    A = t(3739);

                function u(l) {
                    return +l
                }
                var _ = [0, 1];

                function s(l) {
                    return l
                }

                function c(l, e) {
                    return (e -= l = +l) ? function(t) {
                        return (t - l) / e
                    } : (t = isNaN(e) ? NaN : .5, function() {
                        return t
                    });
                    var t
                }

                function M(l, e, t) {
                    var a = l[0],
                        n = l[1],
                        r = e[0],
                        i = e[1];
                    return n < a ? (a = c(n, a), r = t(i, r)) : (a = c(a, n), r = t(r, i)),
                        function(l) {
                            return r(a(l))
                        }
                }

                function f(l, e, t) {
                    var a = Math.min(l.length, e.length) - 1,
                        n = new Array(a),
                        r = new Array(a),
                        i = -1;
                    for (l[a] < l[0] && (l = l.slice().reverse(), e = e.slice().reverse()); ++i < a;) n[i] = c(l[i], l[i + 1]), r[i] = t(e[i], e[i + 1]);
                    return function(e) {
                        var t = o(l, e, 1, a) - 1;
                        return r[t](n[t](e))
                    }
                }

                function d(l, e) {
                    return e.domain(l.domain()).range(l.range()).interpolate(l.interpolate()).clamp(l.clamp()).unknown(l.unknown())
                }

                function p() {
                    var l, e, t, a, n, r, i = _,
                        o = _,
                        c = E.Z,
                        d = s;

                    function p() {
                        var l = Math.min(i.length, o.length);
                        return d !== s && (d = function(l, e) {
                            var t;
                            return l > e && (t = l, l = e, e = t),
                                function(t) {
                                    return Math.max(l, Math.min(e, t))
                                }
                        }(i[0], i[l - 1])), a = l > 2 ? f : M, n = r = null, O
                    }

                    function O(e) {
                        return null == e || isNaN(e = +e) ? t : (n || (n = a(i.map(l), o, c)))(l(d(e)))
                    }
                    return O.invert = function(t) {
                            return d(e((r || (r = a(o, i.map(l), N.Z)))(t)))
                        }, O.domain = function(l) {
                            return arguments.length ? (i = Array.from(l, u), p()) : i.slice()
                        }, O.range = function(l) {
                            return arguments.length ? (o = Array.from(l), p()) : o.slice()
                        }, O.rangeRound = function(l) {
                            return o = Array.from(l), c = A.Z, p()
                        }, O.clamp = function(l) {
                            return arguments.length ? (d = !!l || s, p()) : d !== s
                        }, O.interpolate = function(l) {
                            return arguments.length ? (c = l, p()) : c
                        }, O.unknown = function(l) {
                            return arguments.length ? (t = l, O) : t
                        },
                        function(t, a) {
                            return l = t, e = a, p()
                        }
                }

                function O() {
                    return p()(s, s)
                }
            },
            507: function(l, e, t) {
                "use strict";

                function a(l, e) {
                    switch (arguments.length) {
                        case 0:
                            break;
                        case 1:
                            this.range(l);
                            break;
                        default:
                            this.range(e).domain(l)
                    }
                    return this
                }

                function n(l, e) {
                    switch (arguments.length) {
                        case 0:
                            break;
                        case 1:
                            "function" === typeof l ? this.interpolator(l) : this.range(l);
                            break;
                        default:
                            this.domain(l), "function" === typeof e ? this.interpolator(e) : this.range(e)
                    }
                    return this
                }
                t.d(e, {
                    O: function() {
                        return n
                    },
                    o: function() {
                        return a
                    }
                })
            },
            7036: function(l, e, t) {
                "use strict";
                t.d(e, {
                    Z: function() {
                        return T
                    },
                    Q: function() {
                        return y
                    }
                });
                var a = Math.sqrt(50),
                    n = Math.sqrt(10),
                    r = Math.sqrt(2);

                function i(l, e, t) {
                    var i = (e - l) / Math.max(0, t),
                        o = Math.floor(Math.log(i) / Math.LN10),
                        E = i / Math.pow(10, o);
                    return o >= 0 ? (E >= a ? 10 : E >= n ? 5 : E >= r ? 2 : 1) * Math.pow(10, o) : -Math.pow(10, -o) / (E >= a ? 10 : E >= n ? 5 : E >= r ? 2 : 1)
                }
                var o, E = t(2590),
                    N = t(507),
                    A = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;

                function u(l) {
                    if (!(e = A.exec(l))) throw new Error("invalid format: " + l);
                    var e;
                    return new _({
                        fill: e[1],
                        align: e[2],
                        sign: e[3],
                        symbol: e[4],
                        zero: e[5],
                        width: e[6],
                        comma: e[7],
                        precision: e[8] && e[8].slice(1),
                        trim: e[9],
                        type: e[10]
                    })
                }

                function _(l) {
                    this.fill = void 0 === l.fill ? " " : l.fill + "", this.align = void 0 === l.align ? ">" : l.align + "", this.sign = void 0 === l.sign ? "-" : l.sign + "", this.symbol = void 0 === l.symbol ? "" : l.symbol + "", this.zero = !!l.zero, this.width = void 0 === l.width ? void 0 : +l.width, this.comma = !!l.comma, this.precision = void 0 === l.precision ? void 0 : +l.precision, this.trim = !!l.trim, this.type = void 0 === l.type ? "" : l.type + ""
                }

                function s(l, e) {
                    if ((t = (l = e ? l.toExponential(e - 1) : l.toExponential()).indexOf("e")) < 0) return null;
                    var t, a = l.slice(0, t);
                    return [a.length > 1 ? a[0] + a.slice(2) : a, +l.slice(t + 1)]
                }

                function c(l) {
                    return (l = s(Math.abs(l))) ? l[1] : NaN
                }

                function M(l, e) {
                    var t = s(l, e);
                    if (!t) return l + "";
                    var a = t[0],
                        n = t[1];
                    return n < 0 ? "0." + new Array(-n).join("0") + a : a.length > n + 1 ? a.slice(0, n + 1) + "." + a.slice(n + 1) : a + new Array(n - a.length + 2).join("0")
                }
                u.prototype = _.prototype, _.prototype.toString = function() {
                    return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (void 0 === this.width ? "" : Math.max(1, 0 | this.width)) + (this.comma ? "," : "") + (void 0 === this.precision ? "" : "." + Math.max(0, 0 | this.precision)) + (this.trim ? "~" : "") + this.type
                };
                var f = {
                    "%": function(l, e) {
                        return (100 * l).toFixed(e)
                    },
                    b: function(l) {
                        return Math.round(l).toString(2)
                    },
                    c: function(l) {
                        return l + ""
                    },
                    d: function(l) {
                        return Math.abs(l = Math.round(l)) >= 1e21 ? l.toLocaleString("en").replace(/,/g, "") : l.toString(10)
                    },
                    e: function(l, e) {
                        return l.toExponential(e)
                    },
                    f: function(l, e) {
                        return l.toFixed(e)
                    },
                    g: function(l, e) {
                        return l.toPrecision(e)
                    },
                    o: function(l) {
                        return Math.round(l).toString(8)
                    },
                    p: function(l, e) {
                        return M(100 * l, e)
                    },
                    r: M,
                    s: function(l, e) {
                        var t = s(l, e);
                        if (!t) return l + "";
                        var a = t[0],
                            n = t[1],
                            r = n - (o = 3 * Math.max(-8, Math.min(8, Math.floor(n / 3)))) + 1,
                            i = a.length;
                        return r === i ? a : r > i ? a + new Array(r - i + 1).join("0") : r > 0 ? a.slice(0, r) + "." + a.slice(r) : "0." + new Array(1 - r).join("0") + s(l, Math.max(0, e + r - 1))[0]
                    },
                    X: function(l) {
                        return Math.round(l).toString(16).toUpperCase()
                    },
                    x: function(l) {
                        return Math.round(l).toString(16)
                    }
                };

                function d(l) {
                    return l
                }
                var p, O, R, m = Array.prototype.map,
                    h = ["y", "z", "a", "f", "p", "n", "\xb5", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];

                function g(l) {
                    var e, t, a = void 0 === l.grouping || void 0 === l.thousands ? d : (e = m.call(l.grouping, Number), t = l.thousands + "", function(l, a) {
                            for (var n = l.length, r = [], i = 0, o = e[0], E = 0; n > 0 && o > 0 && (E + o + 1 > a && (o = Math.max(1, a - E)), r.push(l.substring(n -= o, n + o)), !((E += o + 1) > a));) o = e[i = (i + 1) % e.length];
                            return r.reverse().join(t)
                        }),
                        n = void 0 === l.currency ? "" : l.currency[0] + "",
                        r = void 0 === l.currency ? "" : l.currency[1] + "",
                        i = void 0 === l.decimal ? "." : l.decimal + "",
                        E = void 0 === l.numerals ? d : function(l) {
                            return function(e) {
                                return e.replace(/[0-9]/g, (function(e) {
                                    return l[+e]
                                }))
                            }
                        }(m.call(l.numerals, String)),
                        N = void 0 === l.percent ? "%" : l.percent + "",
                        A = void 0 === l.minus ? "\u2212" : l.minus + "",
                        _ = void 0 === l.nan ? "NaN" : l.nan + "";

                    function s(l) {
                        var e = (l = u(l)).fill,
                            t = l.align,
                            s = l.sign,
                            c = l.symbol,
                            M = l.zero,
                            d = l.width,
                            p = l.comma,
                            O = l.precision,
                            R = l.trim,
                            m = l.type;
                        "n" === m ? (p = !0, m = "g") : f[m] || (void 0 === O && (O = 12), R = !0, m = "g"), (M || "0" === e && "=" === t) && (M = !0, e = "0", t = "=");
                        var g = "$" === c ? n : "#" === c && /[boxX]/.test(m) ? "0" + m.toLowerCase() : "",
                            L = "$" === c ? r : /[%p]/.test(m) ? N : "",
                            y = f[m],
                            T = /[defgprs%]/.test(m);

                        function I(l) {
                            var n, r, N, u = g,
                                c = L;
                            if ("c" === m) c = y(l) + c, l = "";
                            else {
                                var f = (l = +l) < 0 || 1 / l < 0;
                                if (l = isNaN(l) ? _ : y(Math.abs(l), O), R && (l = function(l) {
                                        l: for (var e, t = l.length, a = 1, n = -1; a < t; ++a) switch (l[a]) {
                                            case ".":
                                                n = e = a;
                                                break;
                                            case "0":
                                                0 === n && (n = a), e = a;
                                                break;
                                            default:
                                                if (!+l[a]) break l;
                                                n > 0 && (n = 0)
                                        }
                                        return n > 0 ? l.slice(0, n) + l.slice(e + 1) : l
                                    }(l)), f && 0 === +l && "+" !== s && (f = !1), u = (f ? "(" === s ? s : A : "-" === s || "(" === s ? "" : s) + u, c = ("s" === m ? h[8 + o / 3] : "") + c + (f && "(" === s ? ")" : ""), T)
                                    for (n = -1, r = l.length; ++n < r;)
                                        if (48 > (N = l.charCodeAt(n)) || N > 57) {
                                            c = (46 === N ? i + l.slice(n + 1) : l.slice(n)) + c, l = l.slice(0, n);
                                            break
                                        }
                            }
                            p && !M && (l = a(l, 1 / 0));
                            var I = u.length + l.length + c.length,
                                S = I < d ? new Array(d - I + 1).join(e) : "";
                            switch (p && M && (l = a(S + l, S.length ? d - c.length : 1 / 0), S = ""), t) {
                                case "<":
                                    l = u + l + c + S;
                                    break;
                                case "=":
                                    l = u + S + l + c;
                                    break;
                                case "^":
                                    l = S.slice(0, I = S.length >> 1) + u + l + c + S.slice(I);
                                    break;
                                default:
                                    l = S + u + l + c
                            }
                            return E(l)
                        }
                        return O = void 0 === O ? 6 : /[gprs]/.test(m) ? Math.max(1, Math.min(21, O)) : Math.max(0, Math.min(20, O)), I.toString = function() {
                            return l + ""
                        }, I
                    }
                    return {
                        format: s,
                        formatPrefix: function(l, e) {
                            var t = s(((l = u(l)).type = "f", l)),
                                a = 3 * Math.max(-8, Math.min(8, Math.floor(c(e) / 3))),
                                n = Math.pow(10, -a),
                                r = h[8 + a / 3];
                            return function(l) {
                                return t(n * l) + r
                            }
                        }
                    }
                }

                function L(l, e, t, i) {
                    var o, E = function(l, e, t) {
                        var i = Math.abs(e - l) / Math.max(0, t),
                            o = Math.pow(10, Math.floor(Math.log(i) / Math.LN10)),
                            E = i / o;
                        return E >= a ? o *= 10 : E >= n ? o *= 5 : E >= r && (o *= 2), e < l ? -o : o
                    }(l, e, t);
                    switch ((i = u(null == i ? ",f" : i)).type) {
                        case "s":
                            var N = Math.max(Math.abs(l), Math.abs(e));
                            return null != i.precision || isNaN(o = function(l, e) {
                                return Math.max(0, 3 * Math.max(-8, Math.min(8, Math.floor(c(e) / 3))) - c(Math.abs(l)))
                            }(E, N)) || (i.precision = o), R(i, N);
                        case "":
                        case "e":
                        case "g":
                        case "p":
                        case "r":
                            null != i.precision || isNaN(o = function(l, e) {
                                return l = Math.abs(l), e = Math.abs(e) - l, Math.max(0, c(e) - c(l)) + 1
                            }(E, Math.max(Math.abs(l), Math.abs(e)))) || (i.precision = o - ("e" === i.type));
                            break;
                        case "f":
                        case "%":
                            null != i.precision || isNaN(o = function(l) {
                                return Math.max(0, -c(Math.abs(l)))
                            }(E)) || (i.precision = o - 2 * ("%" === i.type))
                    }
                    return O(i)
                }

                function y(l) {
                    var e = l.domain;
                    return l.ticks = function(l) {
                        var t = e();
                        return function(l, e, t) {
                            var a, n, r, o, E = -1;
                            if (t = +t, (l = +l) === (e = +e) && t > 0) return [l];
                            if ((a = e < l) && (n = l, l = e, e = n), 0 === (o = i(l, e, t)) || !isFinite(o)) return [];
                            if (o > 0) {
                                var N = Math.round(l / o),
                                    A = Math.round(e / o);
                                for (N * o < l && ++N, A * o > e && --A, r = new Array(n = A - N + 1); ++E < n;) r[E] = (N + E) * o
                            } else {
                                o = -o;
                                var u = Math.round(l * o),
                                    _ = Math.round(e * o);
                                for (u / o < l && ++u, _ / o > e && --_, r = new Array(n = _ - u + 1); ++E < n;) r[E] = (u + E) / o
                            }
                            return a && r.reverse(), r
                        }(t[0], t[t.length - 1], null == l ? 10 : l)
                    }, l.tickFormat = function(l, t) {
                        var a = e();
                        return L(a[0], a[a.length - 1], null == l ? 10 : l, t)
                    }, l.nice = function(t) {
                        null == t && (t = 10);
                        var a, n, r = e(),
                            o = 0,
                            E = r.length - 1,
                            N = r[o],
                            A = r[E],
                            u = 10;
                        for (A < N && (n = N, N = A, A = n, n = o, o = E, E = n); u-- > 0;) {
                            if ((n = i(N, A, t)) === a) return r[o] = N, r[E] = A, e(r);
                            if (n > 0) N = Math.floor(N / n) * n, A = Math.ceil(A / n) * n;
                            else {
                                if (!(n < 0)) break;
                                N = Math.ceil(N * n) / n, A = Math.floor(A * n) / n
                            }
                            a = n
                        }
                        return l
                    }, l
                }

                function T() {
                    var l = (0, E.ZP)();
                    return l.copy = function() {
                        return (0, E.JG)(l, T())
                    }, N.o.apply(l, arguments), y(l)
                }
                p = g({
                    thousands: ",",
                    grouping: [3],
                    currency: ["$", ""]
                }), O = p.format, R = p.formatPrefix
            },
            9199: function(l) {
                "use strict";
            }
        },
        e = {};

    function t(a) {
        var n = e[a];
        if (void 0 !== n) return n.exports;
        var r = e[a] = {
            exports: {}
        };
        return l[a].call(r.exports, r, r.exports, t), r.exports
    }
    t.m = l, t.amdO = {}, t.n = function(l) {
            var e = l && l.__esModule ? function() {
                return l.default
            } : function() {
                return l
            };
            return t.d(e, {
                a: e
            }), e
        }, t.d = function(l, e) {
            for (var a in e) t.o(e, a) && !t.o(l, a) && Object.defineProperty(l, a, {
                enumerable: !0,
                get: e[a]
            })
        }, t.f = {}, t.e = function(l) {
            return Promise.all(Object.keys(t.f).reduce((function(e, a) {
                return t.f[a](l, e), e
            }), []))
        }, t.u = function(l) {
            return "static/js/" + l + "." + {
                249: "4503150d",
                254: "eb8cb9a7",
                417: "afe2b3ab",
                666: "22462254"
            }[l] + ".chunk.js"
        }, t.miniCssF = function(l) {}, t.o = function(l, e) {
            return Object.prototype.hasOwnProperty.call(l, e)
        },
        function() {
            var l = {},
                e = "globle:";
            t.l = function(a, n, r, i) {
                if (l[a]) l[a].push(n);
                else {
                    var o, E;
                    if (void 0 !== r)
                        for (var N = document.getElementsByTagName("script"), A = 0; A < N.length; A++) {
                            var u = N[A];
                            if (u.getAttribute("src") == a || u.getAttribute("data-webpack") == e + r) {
                                o = u;
                                break
                            }
                        }
                    o || (E = !0, (o = document.createElement("script")).charset = "utf-8", o.timeout = 120, t.nc && o.setAttribute("nonce", t.nc), o.setAttribute("data-webpack", e + r), o.src = a), l[a] = [n];
                    var _ = function(e, t) {
                            o.onerror = o.onload = null, clearTimeout(s);
                            var n = l[a];
                            if (delete l[a], o.parentNode && o.parentNode.removeChild(o), n && n.forEach((function(l) {
                                    return l(t)
                                })), e) return e(t)
                        },
                        s = setTimeout(_.bind(null, void 0, {
                            type: "timeout",
                            target: o
                        }), 12e4);
                    o.onerror = _.bind(null, o.onerror), o.onload = _.bind(null, o.onload), E && document.head.appendChild(o)
                }
            }
        }(), t.r = function(l) {
            "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(l, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(l, "__esModule", {
                value: !0
            })
        }, t.p = "/",
        function() {
            var l = {
                179: 0
            };
            t.f.j = function(e, a) {
                var n = t.o(l, e) ? l[e] : void 0;
                if (0 !== n)
                    if (n) a.push(n[2]);
                    else {
                        var r = new Promise((function(t, a) {
                            n = l[e] = [t, a]
                        }));
                        a.push(n[2] = r);
                        var i = t.p + t.u(e),
                            o = new Error;
                        t.l(i, (function(a) {
                            if (t.o(l, e) && (0 !== (n = l[e]) && (l[e] = void 0), n)) {
                                var r = a && ("load" === a.type ? "missing" : a.type),
                                    i = a && a.target && a.target.src;
                                o.message = "Loading chunk " + e + " failed.\n(" + r + ": " + i + ")", o.name = "ChunkLoadError", o.type = r, o.request = i, n[1](o)
                            }
                        }), "chunk-" + e, e)
                    }
            };
            var e = function(e, a) {
                    var n, r, i = a[0],
                        o = a[1],
                        E = a[2],
                        N = 0;
                    if (i.some((function(e) {
                            return 0 !== l[e]
                        }))) {
                        for (n in o) t.o(o, n) && (t.m[n] = o[n]);
                        if (E) E(t)
                    }
                    for (e && e(a); N < i.length; N++) r = i[N], t.o(l, r) && l[r] && l[r][0](), l[r] = 0
                },
                a = self.webpackChunkgloble = self.webpackChunkgloble || [];
            a.forEach(e.bind(null, 0)), a.push = e.bind(null, a.push.bind(a))
        }(),
        function() {
            "use strict";
            var l = t(2791),
                e = t(4164),
                a = t(885),
                n = t(7587),
                r = t(2982),
                i = JSON.parse('[{"name":"help","path":"M12 22c-5.52-.006-9.994-4.48-10-10v-.2C2.11 6.305 6.635 1.928 12.13 2c5.497.074 9.904 4.569 9.868 10.065C21.962 17.562 17.497 22 12 22zm-.016-2H12a8 8 0 1 0-.016 0zM13 18h-2v-2h2v2zm0-3h-2a3.583 3.583 0 0 1 1.77-3.178C13.43 11.316 14 10.88 14 10a2 2 0 1 0-4 0H8v-.09a4 4 0 1 1 8 .09a3.413 3.413 0 0 1-1.56 2.645A3.1 3.1 0 0 0 13 15z"},{"name":"info","path":"M11 11h2v6h-2zm0-4h2v2h-2z M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8s8 3.589 8 8s-3.589 8-8 8z"},{"name":"stats","path":"M16,11V3H8v6H2v12h20V11H16z M10,5h4v14h-4V5z M4,11h4v8H4V11z M20,19h-4v-6h4V19z"},{"name":"settings","path":"M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z"},{"name":"x","path":"M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55 c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55 c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505 c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55 l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719 c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z"}]'),
                o = JSON.parse('[{"name":"France","path":"M411.806,30l0.583,1.397l0.384,2.686l0.38,1.175l1.369,1.524l0.601,0.911l0.122,1.209l-0.225,0.365   l-0.883,0.885l-0.221,0.555l0.756,2.663l-0.044,0.395l-0.296,0.674l-0.04,0.279l0.122,0.207l0.463,0.238l0.174,0.197l0.328,0.767   l0.202,0.344l0.281,0.125l0.562,0.119l0.313,0.012l0.712-0.1l0.364,0.041l0.503,0.266l0.194,0.351l0.119,0.41l0.253,0.453   l1.425,1.367l0.217,0.4l0.514,1.223l0.202,0.372l0.708,0.597l3.063,1.407l0.174,0.08l0.597,0.128l0.506-0.39l1.152-2.003   l0.696-0.753l0.882-0.553l2.005-0.631l3.043-0.958l0.993,0.304l0.649,0.616l0.636,1.147l0.531,0.957l0.471,1.15l0.304,0.356   l0.538,0.075l0.514,0.169l0.305,0.559l0.435,1.439l-0.534,1.008l0.309,1.747l1.013,3.394l0.059,1.921l0.198,0.685l0.601,0.775   l0.503,0.398l1.674,0.874l0.668,0.19l0.93-0.112l1.677-0.613l0.519-0.401l0.38-0.383l0.391-0.258l0.546-0.043l0.55,0.168   l0.249,0.314l-0.059,0.485l-0.372,0.669l0.475,0.354l2.473,0.016l0.866,0.183l0.839,0.42l0.759,0.73l0.621,1.134l0.324,2.322   l0.004,2.801l0.336,2.452l1.346,1.264l0.15-0.387l0.055-0.034l0.063,0.055l0.174-0.12l0.103-0.18l0.166-0.499l0.688-1.174   l0.309-0.354l0.518-0.192l1.67-0.127l1.59,0.195l0.791,0.403l0.657,0.462l0.685,0.329l0.866-0.009l2.433-1.029l0.811-0.087   l0.744,0.357l1.27,1.413l0.815,0.474l0.791,0.71l1.049,2.256l0.704,0.331l0.281-0.278l-0.048-0.411l0.02-0.384l0.478-0.204   l0.345,0.124l0.514,0.325l0.475,0.418l0.234,0.39l-0.091,0.624l-0.376,0.433l-0.902,0.708l-0.407,0.584l-0.174,0.489l-0.206,1.088   l-0.736,2.396l-0.091,1.08l0.542,0.275l0.763-0.349l0.411-0.065l0.38,0.195l0.645,2.575l0.229,0.561l0.265,0.475l-0.012,0.391   l-0.918,0.459l-0.886,0.635l-0.701,0.656l-0.277,0.341l-0.194,0.447l-0.158,0.702l0.182,0.077l0.21,0.911l0.047,0.874l-0.277-0.026   l-0.027-0.002l2.144,1.159l0.514,0.148l0.568-0.083l2.36-0.342l5.744,1.582l0.285,0.078l1.136-0.2l5.337-2.654l1.595-0.256   l0.416-0.274l0.352-0.68l0.269-0.945l0.293-1.903l-0.04-0.41l-0.142-0.299l-0.091-0.358l0.103-0.589l0.221-0.469l4.083-4.147   l1.033-0.475l0.174,0.889l0.431,0.182l1.198-0.25l0.353,0.466l-0.052,1.046l-0.206,1.234l-0.087,1.045l-0.411-0.45l-0.233,0.055   l-0.72,1.587l-0.044,0.539l0.06,0.496l-0.036,0.638l-1.472,3.678l-0.166,0.95l0.511,0.833l1.812,0.747l0.597,1.094l0.068,0.774   l-0.099,0.513l-0.194,0.497l-0.206,0.728l-0.126,0.31l-0.34,0.399l-0.071,0.362l0.079,0.298l0.375,0.623l0.095,0.353l-0.008,2.22   l0.345,0.45l1.001,0.144l0.858-0.138l1.662-0.589l0.703-0.035l0.1-0.005l0.693,0.386l1.424,1.413l0.763,0.435l1.365,0.395   l0.455,0.438l1.63,2.369l0.57,0.554l0.696,0.52l0.882,0.26l1.729-0.483l0.827-0.021l0.799,0.795l0.74,0.911l0.265,0.886   l-0.174,0.214l-0.309,0.198l-0.119,0.837l0.091,0.543l0.186,0.232l0.637,0.125l0.273-0.085l0.201-0.299l0.162-0.324l0.142-0.158   l0.237,0.04l0.435,0.262l1.187,0.437l0.295,0.265l0.417,0.376l1.844,3.346l0.158,0.54l-0.008,0.616l-0.122,0.554l-0.04,0.527   l0.237,0.524l0.826,0.219l0.993-0.582l0.962-0.758l0.72-0.323l1.199,0.561l0.328,0.088l0.566-0.076l0.127-0.237l0.087-0.424   l0.455-0.625l0.954-0.487l0.862,0.198l0.823,0.409l0.827,0.143l0.475-0.208l0.494-0.655l0.412-0.219l0.411,0.061l0.839,0.519   l0.447,0.11l1.203,1.606l0.669,0.627l0.962,0.453l2.429,0.582l0.72,0.728l0.526,1.686l0.665-0.222l3.264-0.198l0.562-0.21   l0.372-0.566l0.463-0.176l0.087-0.316l-0.004-0.378l0.202-0.359l0.273-0.11l1.08-0.1l-0.25-0.542l2.2-0.243l1.088,0.116l1.049,0.42   l0.067,0.051l1.824,1.369l1.017,0.56l0.765,0.081l0.327,0.035l0.408-0.079l0.728-0.502l0.312-0.122l0.424,0.073l3.513,1.761   l0.657,0.636l0.237,0.489l0.103,0.487l0.008,0.328l-0.075,0.024l0.265,0.392l1.859,1.981l0.13,0.352l-0.166,0.474l-0.681,0.033   l-0.209,0.537l0.241,0.683l0.641,0.78l2.546,2.463l0.059,0.248l-0.079,0.595l0.044,0.236l0.206,0.161l0.53,0.191l0.162,0.169   l0.301,1.088l0.123,0.246l0.043,0.13l0.076,0.46l0.103,0.209l0.17-0.018l0.514-0.339l0.155-0.003l0.241,0.929l-0.194,0.742   l-0.107,0.717l0.491,0.82l0.452,0.194l1.705,0.015l1.492,0.554l0.487-0.112l0.66-0.88l-0.146-0.971l-0.289-0.948l0.222-0.814   l0.384-0.094l1.598,0.366l1.116-0.109l0.424,0.063l2.389,1.356l0.827,0.043l-0.02,2.066l0.443,1.606l0.843,0.665l1.175-0.743   l0.059-0.296l-0.122-0.306l-0.032-0.323l0.348-0.345l0.209,0.027l1.464,1.068l0.601,0.314l0.602,0.206l3.299,0.03l1.029,0.484   l0.242,0.036l0.225-0.232l0.404-0.825l0.242-0.293l0.34-0.118l0.783-0.1l0.289-0.136l0.194-0.324l0.277-0.85l0.178-0.29   l0.637-0.363l0.155-0.047l0.743-0.225l0.744,0.063l0.166,0.654l1.654,0.112l0.693,0.254l0.253,0.847l-0.285,0.184l-0.095,0.133   l-0.068,0.194l0.538,0.562l0.867,1.411l0.503,0.637l0.835,0.532l1.674,0.293l0.851,0.444l0.281,0.351l0.372,0.757l0.356,0.305   l0.382,0.087l0.148,0.034l0.459-0.118l0.447-0.193l0.483-0.103l0.424,0.072l0.811,0.29l0.368,0.055l0.467-0.121l0.898-0.492   l0.423-0.114l3.185,0.926l2.18-0.229l0.693,0.079l6.068,3.248l3.763,0.784l0.443,0.419l-0.016,0.018l-0.787,0.906l-1.195,2.27   l-1.737,4.796l-0.475,0.802l-0.234,0.201l-1.404,0.757l-0.337,0.015l-0.083,0.144l-0.178,0.171l-0.178,0.309l-0.083,0.547   l-0.083,0.321l-0.218,0.189l-0.293,0.102l-1.076,0.018l-0.435,0.144l-0.202,0.519l-0.047,1.106l-0.17,0.459l-0.412,0.552   l-0.506,0.494l-0.455,0.297l-1.049,1.259l-0.585,0.509l-0.633,0.206l-0.447,0.318l-1.615,2.529l-0.324,1.89l-0.004,2.012   l0.451,1.228v0.397l-0.957,0.758l-0.459,0.472l-0.198,0.524l-0.079,1.1l-0.194,0.561l-0.249,0.373l-0.265,0.547l-0.194,0.657   l-0.281,1.523l-0.044,0.757l0.123,0.694l0.249,0.735l0.194,0.769l-0.048,0.805l-0.526,0.846l-0.704,0.384l-0.617,0.507   l-0.265,1.209l-0.079,1.168l-0.242,0.974l-0.403,0.835l-2.421,3.4l-0.253,0.701l-0.076,0.828l-0.194,0.45l-0.261,0.347   l-0.277,0.513l-0.257,0.874l-0.242,1.119l0.119,2.364l1.654,2.923l0.083,1.785l-0.364,0.688l-1.021,1.085l-0.206,0.763l0.048,0.929   l-0.071,0.255l-0.242,0.573l-0.154,0.282l-0.253,0.246l-0.115,0.248l-0.043,0.239l0.019,0.145l0.032,0.144l-0.008,0.254   l0.198,1.061l-0.083,0.638l-0.519,0.284l-0.214,0.274l-0.546,1.847l-0.103,0.791l0.475,1.994l-0.019,0.93l-0.226,0.376   l-0.633,0.676l-0.135,0.341l0.107,1.224l0.122,0.613l0.15,0.261l0.566,0.297l0.518,0.725l0.863,1.729l0.229,0.287l0.246,0.214   l0.201,0.296l0.083,0.542l-0.091,0.204l-0.156,0.579l-0.021,0.008l-1.346,0.51l-0.918,0.513l-0.21,0.172l-1.46,1.2l0.091,0.038   l0.637,0.489l0.131-0.003l0.011,0.567l-0.166,0.324l-0.309,0.102l-0.396-0.085l-0.221,0.12l-0.052,0.179l0.083,0.228l0.273,0.385   l0.034,0.12l0.005,0.021l-0.004,0.148l-0.052,0.161l-0.067,0.095l-0.585,0.53l-0.495-0.074l-0.326-0.208l-0.173-0.111l-0.593-0.208   l-0.447,0.131l0.004,0.348l0.194,0.35l0.127,0.138l0.186,0.265l0.063,0.319l-0.122,0.53l-0.212,0.277l-0.544,0.714l-0.694,0.28   l-0.37,0.15l-1.593-0.068l-1.066-0.046l-1.013,0.214l-1.448,0.631l-0.257,0.053l-0.297-0.126l-0.154-0.204l-0.107-0.203   l-0.158-0.127l-1.123-0.354l-0.831-0.5l-0.217-0.924l0.696-1.607l-1.041,0.105l-0.439-0.071l-0.071-0.012l-0.498-0.288   l-0.902-0.189l-1.907,0.334l-0.993-0.145l-0.348-0.268l-0.348-0.089l-0.344,0.089l-0.34,0.268l-0.713,0.218l0.095,0.631   l0.396,0.783l0.186,0.674l-0.288,0.477l-0.57,0.487l-0.621,0.36l-1.005,0.225l-0.06,1.067l-0.985,0.582l-0.566,0.743l-0.475,0.883   l-0.19,0.723l4.554-0.45l0.704-0.34l0.57,0.466l0.574,0.523l0.399,0.574l-0.296,0.62l-0.36,0.231l-0.391,0.108l-0.4,0.235   l-0.558,0.757l-0.206,0.082l-0.349,0.044l-0.72,0.744l-0.245,1.158l0.155,1.399l-2.599,1.912l-1.112,1.149l-0.728,1.204   l-0.084,0.079l-2.423,2.249l-1.147,0.401l0.048,0.962l-0.55,0.285l-0.142,0.099l-0.142,0.357l-0.962,0.346l-0.36,0.356   l-0.514,0.893l0.459,1.042l-0.875,1.267l-2.554,1.951l-4.118,1.299l-1.856,1.078l-0.57,1.967l0.158,0.507l0.511,0.975l0.122,0.62   l-0.063,0.775l-0.14,0.35l-0.074,0.185l-0.265,0.481l-0.602,1.82l-0.055,0.271l0.107,0.315l0.202,0.274l0.285,0.315l0.016,0.943   l-0.147,0.463l-0.432,0.543l-0.403,0.302l-1.27,0.676l-1.009,1.141l-0.38,0.321l-2.742,1.51L550,291.511l-0.514,0.676l0.119,0.734   l0.926,1.038l-1.353,1.714l-1.334,2.293l-0.435,0.471l-0.15,0.338v0.285l0.083,0.261l0.091,0.229l0.027,0.171v0.424l0.079,0.376   l-0.071,0.366l-0.439,0.422l0.183,0.113l1.882,1.159l0.562,0.608l0.467,0.84l0.052,0.613l-0.681,1.529l-0.557,1.25l-0.127,0.433   l-0.273,1.568l-0.02,0.598l0.036,0.512l-0.166,0.369l-0.843,0.263l-0.221,0.026l-0.23-0.029l-0.301-0.097l-0.071-0.006   l-0.063,0.006l-0.063,0.02l-2.295,1.127l-0.934,0.595l-0.142,0.666l0.4,0.758l0.676,0.851l-0.119,0.474l-0.293,0.557l-0.51,1.199   l0.921-0.551l1.737-0.414l1.745-0.068l1.302,0.582l1.242-0.64l1.954-2.294l2.449-1.626l0.989-1.05l-0.198-1.276l-0.269-0.117   l-0.641,0.295l-0.4-0.209l-0.162-0.234l-0.368-0.916l-0.02-0.223l-0.352-0.942l-0.158-0.553l0.206-0.757l0.807-1.1l1.092-1.447   l1.242-1.08l1.179-0.383l1.258-0.058l1.242-0.319l3.264-2.244l2.453-0.488l2.552,0.082l5.703,1.48l0.576,0.286l0.357,0.552   l0.04,0.508l0.043,0.545l-0.273,0.929l-1.008,1.187l-0.206,0.641l0.732,1.266l1.357,1.445l0.87,1.503l-1.357,2.646l-0.665,1.98   l-0.352,1.894l0.332,0.928l3.046,0.674l0.585,0.568l-0.04,0.422l-0.269,0.422l-0.309,0.377l-0.174,0.285l0.107-0.054l0.067,0.547   l0.012,0.576l-0.055,0.054l0.016,0.427l-0.079,0.231l0.024,0.171l0.336,0.256l0.364,0.051l0.293-0.222l0.273-0.282l0.32-0.131   l0.871,0.385l2.592,2.935l0.186,0.125l0.139,0.587l0.439,1.144l0.269,1.007l0.206,0.554l0.265,0.444l-0.55,0.262l-0.403,0.506   l-0.308,0.662l-0.241,0.742l-0.523,0.881l-0.771,0.657l-0.867,0.443l-0.815,0.241l-0.946-0.008l-0.265,0.04l-0.028,0.282   l-0.04,0.38l-0.04,0.247l-0.238,0.076l-0.225-0.361l-0.252-0.152l-0.331-0.133l-1.039,0.315l-0.59,0.355l-0.487,0.809l-0.206,0.902   l-0.027,0.979l0.103,0.981l0.431,2.273l0.772,1.167l1.033,0.774l1.001,0.204l0.511,0.192l0.87,0.866l0.511,0.391l1.242,0.317   l0.47,0.331l0.234,0.814l-0.091,0.311l-0.439,0.962l-0.103,0.455l0.075,0.441l0.419,0.645l0.15,0.407l0.21,2.26l0.289,0.794   l1.749,0.982l1.666,1.262l0.128,0.204l0.247,0.393l0.265,0.68l0.309,0.612l0.51,0.389l1.638,0.719l0.296,0.228l-0.04,0.679   l-0.34,0.831l-0.791,1.425l-1.239,1.483l-0.198,0.321l0.194,1.578l0.411,1.091v0.854l-1.041,0.877l-0.728,1.334l-0.257,0.264   l-0.202-0.073l-0.479-0.584l-0.304-0.132l-1.349,0.374l-1.369,0.626l-0.495,0.474l-0.665,1.168l-0.562,0.511l-0.348,0.084   l-0.894,0.012l-0.301,0.134l-0.202,0.46l0.178,0.295l0.222,0.25l-0.075,0.337l-1.246,0.603l-1.377-0.488l-1.404-0.763l-1.341-0.228   l-0.288,0.149l-0.689,0.536l-0.332,0.19l-0.3,0.051l-0.692-0.025l-0.34,0.061l-1.327,0.766l-0.127,0.107l-0.565,0.476l-0.455,0.614   l0.673,1.031l0.623,0.54l0.06,0.381l-0.044,0.434l0.103,0.491l0.459,0.798l0.403,0.347l1.341,0.126l1.005,0.733l0.246,1.553   l-0.075,3.027l0.669,1.131l1.254,1.089l2.639,1.543l0.724,0.184l1.887-0.38l0.665,0.056l1.919,0.792l0.688,0.756l0.158,0.271   l0.083,0.318l-0.012,0.164l-0.036,0.145l0.004,0.259l-0.071,0.039l-0.19,0.85l-0.028,0.07l0.435,1.167l0.206,1.332l0.147,0.46   l1.163,2.208l0.221,0.701l-0.685,0.014l-1.38-0.412l-0.704,0.005l-0.879,0.484l-0.704,0.87l-0.273,1.093l0.431,1.142l-0.534,0.404   l-1.313,2.286l-1.951,1.502l-0.408,0.722l0.119,1.67l0.859,1.503l1.163,1.231l1.001,0.839l-1.286,0.712l-0.269,0.463l-0.321,1.672   l-0.095,0.321l-0.008,0.271l0.142,0.492l0.158,0.243l0.843,0.993l0.301,0.525l0.451,1.086l0.214,0.404l0.345,0.362l0.759,0.55   l0.352,0.414l0.242,0.525l0.127,0.5l0.174,0.467l0.36,0.411l0.51,0.21l0.455-0.075l0.459-0.155l0.514-0.044l0.482,0.141   l2.251,1.204l1.535,0.563l4.071,2.518l0.72,0.306l0.997,0.168l0.503,0.196l0.265,0.389l0.206,0.444l0.36,0.352l0.368,0.086   l1.539,0.038l6.659-1.927l1.104-0.088l1.574-1.034l1.183,0.215l-0.526,1.735l0.467,0.992l0.847,0.851l0.449,0.97l0.152,0.327   l-0.075,0.923l-0.427,0.573l-0.554,0.427l-0.419,0.473l-0.245,0.649l-0.316,1.194l-0.296,0.613l-0.855,0.954l-1.979,1.676   l-0.771,1.239l-1.658,1.835l-0.598,1.101l0.186,1.343l0.749,2.546l-0.505,0.358l-0.162,0.004l-0.159-0.024l-0.165,0.071   l-0.025,0.194l0.059,0.673l-0.034,0.186l-0.306,0.155l-0.221-0.021l-0.318,0.265l-0.321,0.385l-0.326,0.343l-0.429-0.641   l-0.738-0.427l-0.744,0.298l-0.57,0.639l-0.206,0.62l-0.058,0.604l-0.481,0.373l-0.417,0.416l-0.162,0.504l-0.288,0.629   l-0.441,0.062l-0.693-0.129l-0.791-0.298l-0.879,0.089l-0.598,0.358l-0.504,0.565l0.127,0.567l-0.689,0.783l-0.384,0.228   l-0.273-0.664l-0.728-0.169l-0.5,0.214l-0.497,0.068l-0.283,0.493l-0.293,0.226l-0.134,0.387l-0.264,1.482l0.227,1.428l0.019,0.278   l0.14,0.586l0.102,0.446l-0.513,0.33l-0.481-0.886l-0.33-0.198l-0.608-0.02l-0.665,0.416l-0.495,0.577l-0.499,0.408l-0.301,0.311   l-0.251-0.614l-0.619,0.042l-0.79-0.096l-0.698,0.104l-0.517,0.361l-0.646,0.679l-0.165,0.781l0.332,0.242l-0.022,0.026   l0.184,0.147l0.019,0.238l-1.118,1.442l-0.181,1.253l-0.847,0.581l-0.162,0.547l-0.878,0.081l-0.054-0.314l-0.119-0.179   l-0.138-0.206l-0.19,0.168l-0.072,0.393l0.155,0.678l-0.515,0.173l-0.453-0.17l-0.612-0.014l-1.371,0.392l-0.386-0.517   l-0.608-0.223l-0.405,0.252l-0.587,0.53l0.064,1.358l-0.576,0.8l0.002,0.858l-0.915,0.117l-0.741,0.105l-0.327,0.694l-0.181,0.572   l-0.355,0.39l-1.049,1l-1.048,0.626l-0.243,0.795l0.795,0.242l2.323-0.626l0.805,0.17l0.178,0.395l-0.483,0.915l-0.652,0.447   l-0.113,0.959l0.251,0.404l0.299,0.634l-0.742,0.585l-0.766,0.45l-0.43,0.103l-0.738,0.34l-0.399-0.083l-0.153-0.256l-0.084-0.413   l-0.459,0.176l-0.672-0.004l-0.911,0.118l-0.134,0.507l-0.372,0.629l-0.805,0.503l-1.015-0.267l-1.066,0.176l-1.122,0.02   l-0.778,0.284l-0.885,0.57l-0.477,0.915l0.145,0.688l0.21,0.77l-1.267,0.004l-0.512-0.48l-0.122-0.224l-0.746-0.274l-0.989-0.485   l-1.03-0.116l-1.293,0.227l-1.014,0.408l-0.556,0.31l-0.602,0.537l-0.374,1.082l-0.015,1.25l0.711,0.303l0.539-0.164l-0.204,0.499   l-0.981,0.113l-2.173,0.131l-0.351-0.188l0.556-0.31l0.621-0.229l0.491-0.393l-0.114-0.981l-0.744-0.679l-0.678,0.074l-1.815,0.246   l-0.671,0.001l-0.401-1.088l-0.949-0.178l-1.266,0.009l-0.94-0.599l0.094-0.307l0.065-0.506l0.103-0.258l-0.629-0.018l-0.61,0.16   l-1.115,0.57l0.645,0.262l0.55,1.165l0.637,0.294l0.924,0.399l-0.425,0.475l-0.884-0.096l-1.12,0.027l-0.483,0.18l-0.717,1.256   l-1.441-0.452l-1.1-0.863l-0.32-0.481l0.805-0.512l0.582-0.535l-0.254-0.4l-0.417-0.268l-0.657-0.144l-0.098-0.458l-0.18-0.392   l-0.597-0.061l-0.748-0.004l-1.711-0.777l-0.33-1.153l-0.527-0.579l-0.716-0.299l-0.804-0.086l-0.433,0.551l-0.401,0.856   l-0.925-0.396l-0.595-0.061l-0.526-0.652l-0.449-0.645l-0.36-0.71l-0.493-0.275l-0.406,0.257l-0.389,0.109l-1.697-0.15   l-0.769,0.046l-1.157-0.192l-0.544-0.055l-0.955,0.235l-0.894-0.422l0.138-0.929l0.122-0.537l0.271-0.534l0.318-0.864l-0.452-0.522   l-0.052-0.617l-0.159-0.308l-0.495-1.913l-1.711-1.115l-2.139,1.444l-2.873-0.067l-1.457,0.187l-2.312-0.119l-1.178-0.393   l-0.769-1.181l-0.32-1.248l0.787-1.459l1.187-0.671h3.408l1.059-0.328l0.729-0.592l0.791-0.965l0.489-1.184l-0.134-1.25   l-1.119,0.741l-1.075,0.393l-0.978-0.174l-0.825-0.96l-0.265-0.812l-0.025-0.451l-0.197-0.271l-0.794-0.27l-0.29-0.039   l-0.907,0.039l-0.159-0.174l-0.545-0.755l-0.237-0.15l-0.262,0.337l-0.246,0.71l-0.187,0.722l-0.065,0.393l0.205,0.998l0.346,0.436   l0.464,0.257l0.554,0.468l0.458,1.322l-0.427,1.18l-0.901,0.648l-1.115,0.12l-0.589-0.124l-2.09-1.216l-0.969,0.448l-0.405,0.331   l-0.935,0.206l-0.374,0.328l-0.311,0.727l0.181,0.276l0.379,0.963l0.102,0.673l1.281-0.097l-0.912,0.852l-0.82,0.473l-0.189-0.903   l-0.673-1.214l-1.588-0.903l-1.299-1.224l-0.589-1.39l0.096-3.095l-0.096-0.902l-0.24-0.793l-0.396-0.914l-0.533-0.778l-0.663-0.4   v0.327l1.14,1.822l0.168,0.554v3.783l0.527,1.774l1.041,1.087l1.162,0.836l0.879,0.995l-0.105,1.095l-1.112,0.06l-4.798-0.122   l-2.815-0.65l-0.998-0.59l-0.029-0.887l0.772-0.859l0.09-0.666l-0.324-0.694l-0.934-0.696l-1.614-0.661l-3.966,0.425l-7.791-0.641   l-0.928-0.204l-0.816-0.408l-1.053-0.82l-0.598-1.237l0.598-1.177l-0.062-0.183l-0.991-0.825l-2.215-0.226l-2.165,0.279   l-1.452,0.576l-0.523,0.391l-7.632,6.314l-4.508,1.998l-1.243,1.054l-2.922,3.884l-0.804,0.355l-1.529-0.76l-0.919,0.173   l-1.645,0.082l-2.592,1.095l-2.81,2.294l-0.642,0.797l-0.252,0.474l-0.523,0.451l-0.436,0.523l-0.657,0.6l-0.489,0.673   l-0.439,0.899l-0.707,0.747l-0.841,0.772l-0.377,0.971l-0.311,0.797l-0.384,0.973l-0.598,1.419l-0.274,0.971l-0.274,0.82   l-0.38,1.493l-0.274,1.119l0.109,0.521l0.492,0.298l0.053,1.044l-0.327,3.129l-0.271,2.977l-0.056,2.081l0.165,1.338l-0.218,2.156   l0.162,2.819l0.165,2.152l0.218,1.705l0.545,0.666l0.819,0.369l1.038,0.225l0.872,0.296l0.327,0.518v0.593l-0.109,0.592   l0.275,0.517l0.383,0.37l0.598,0.963l0.218,1.11l-0.022,0.187l-1.652,0.287l-1.001,0.049l-0.977-0.113l-0.788-0.251l-0.459-0.292   l-0.372-0.396l-0.301-0.485l-0.245-0.573l-0.253-0.072l-1.12-0.029l-0.408-0.088l-0.652,0.432l-1.238-0.479l-1.258,0.984   l-0.641,0.108l-0.657-0.023l-0.617,0.066l-0.613,0.366l-1.155,1.128l-0.613,0.391l-0.799,0.127l-1.5-0.232l-0.783,0.059   l-0.676,0.348l-1.615,1.281l-0.304,0.447l0.348,0.99l0.475,0.537l0.016,0.225l-1.025,0.058l-0.842-0.159l-1.761-0.605l-0.74,0.02   l-0.296,0.273l-0.321,0.839l-0.257,0.253l-0.4,0.012l-0.427-0.144l-0.775-0.442l-0.708-0.189l-0.739-0.587l-0.601-0.807   l-0.281-0.837l-0.609-0.03l-1.191-0.262l-2.227-1.051l-0.46-0.382l-1.068-0.604l-1.203,0.13l-2.366,0.743l-1.808-0.229   l-0.609,0.291l-0.182,0.27l-0.289,0.765l-0.182,0.301l-0.914,0.703l-0.645,0.692l-0.443,0.288l-0.629,0.161l-0.997,0.113   l-0.518-0.083l-0.471-0.304l-0.752-0.657l-0.364-0.8l-0.503-1.94l-0.522-0.871l-0.593-0.263l-0.716-0.04l-0.898-0.211l-2.148-1.476   l-0.803-0.337l-2.377-0.329l-0.704-0.294l0.019-0.159l-0.027-0.13l-0.075-0.106l-0.115-0.075l0.139-1.296l0.424-1.079l0.7-0.682   l0.962-0.09l-0.153-0.222l-0.322-0.47l-0.89-0.276l-0.617-0.393l0.332-1.056l-4.352-0.43l-0.419-0.197l-2.077-1.428l-0.586,0.043   l-1.124,0.432l-1.21-0.063l-0.59,2.05l-0.847,0.346l-0.554-0.725l-0.645-1.784l-0.736-1.021l-0.677-1.223l-0.321-0.174l-0.36-0.02   l-0.194-0.208l0.166-0.741l-0.898-0.245l-4.716-0.015l-1.278,0.415l-0.423-0.054l-0.657-0.482l-0.392-0.718l-0.288-0.808   l-0.376-0.749l-0.677-0.61l-0.799-0.25l-3.264-0.222l-0.293-0.177l-0.633-0.52l-0.324-0.125l-0.392,0.128l-0.36,0.294l-0.364,0.191   l-0.411-0.172l-0.609-0.608l-0.332-0.256l-1.136-0.445l-1.654-0.984l-0.657-0.116l-0.744,0.073l-0.669-0.147l-1.321-0.523   l-0.673-0.068l-1.049,0.077l-0.882,0.349l-0.182,0.75l0.083,1.115l-0.538,1.461l0.423,0.589l-0.285,0.225l-0.142,0.221   l-0.233,0.524l0.542,0.195l0.459,0.581l0.261,0.789l-0.04,0.839l-0.076,0.128l-0.256,0.428l-0.502,0.183l-1.357-0.183l-4.772,0.14   l-0.635-0.268l-1.46,0.387l-0.747,0.04l-0.766-0.15l-0.187-0.18l-0.027-0.214l0.013-0.217l-0.084-0.17l-1.058-0.906l-0.694,0.25   l-0.679,0.685l-1.074,1.523l-0.569,0.083l-0.596-0.713l-0.821-1.458l-0.611-0.304l-2.038-0.534l-0.621,0.097l-0.718,0.489   l-2.348,0.351l-2.954,1.091l-1.325,0.124l-1.511-0.601l-0.222-0.23l-0.178-0.262l-0.264-0.237l-0.488-0.14l-0.404-0.182   l-0.107-0.337l-0.049-0.368l-0.234-0.288l-0.631-0.522l-0.462-0.772l-0.223-0.901l0.085-0.906l-0.689,0.293l-1.108,0.306   l-1.026-0.122l-0.455-0.971l-2.225-1.356l-0.087-0.053l-0.588-0.557l-0.209,0.518l-0.265,0.397l-0.299,0.116l-0.332-0.34   l-1.84,1.458l-0.926,0.556l-1.169,0.091l-2.065-0.969l-0.976-0.027l-0.067,1.241l-0.337,0.115l-0.641,0.442l-0.301,0.047   l-0.37-0.245l0.006-0.311l0.054-0.338l-0.222-0.315l-0.168-0.052h-0.621l-0.253-0.117l0.008-0.195l0.073-0.226l-0.055-0.223   l-1.486-2.002l-0.681-0.572l-1.313-0.819l-0.388-0.065l-0.374,0.055l-0.376-0.047l-0.389-0.38l-0.214-0.477l0.041-0.281l0.128-0.24   l0.02-0.366l-0.158-0.409l-0.56-1.452l-1.025-0.354l-2.951,0.534l-3.051-0.253l-1.464-0.478l-1.334-1.004l-0.467-0.548   l-0.635-0.184l-1.325-0.166l-0.287-0.241l-0.633-0.405l-0.332-0.131l-1.436,0.133l-1.248-1.024l-1.316-0.732l-2.22-0.396   l-0.72-0.439l-0.647-0.749l-0.172-0.701l0.31-0.687l0.801-0.692l-0.864-0.23l-0.859,0.326l-0.659,0.748l-0.265,1.05l-0.092,1.373   l-0.327,0.708l-0.651,0.215l-1.049-0.089l-0.937-0.252l-0.847-0.49l-0.694-0.789l-0.481-1.136l0.315-0.443l1.576-1.705l0.485-0.655   l0.584-1.659l0.416-2.092l-0.147-1.922l-1.1-1.14l-0.459-0.005l-0.423,0.152l-0.425,0.075l-1.596-0.84l-1.191-0.357l-0.759-0.027   l-0.572,0.349l-0.303,0.898l-0.217,0.461l-0.418,0.242l-0.483,0.062l-0.413-0.062l-0.467-0.216l-0.19-0.24l-0.279-0.899   l-0.063-0.461l0.107-0.321l0.005-0.248l-0.377-0.272l-0.726-0.348l-0.351-0.041l-0.777,0.332l-0.823,0.11l-0.449,0.222   l-0.413,0.069l-0.091-0.2l-0.103-0.226l-0.128-1.024l-0.477-0.651l-1.098-0.537l-0.01-0.642l0.027-1.109l0.091-0.613l0.103,0.075   l0.024,0.017l0.584,0.427l0.288-0.393l0.702-0.296l3.392-0.551l0.888-1.27l0.855-0.463l0.716-0.525l0.334-0.455l0.829-1.635   l0.165-0.592l0.335-0.421l1.506-1.968l0.293-0.606l1.128-1.582l0.262-1.663l0.922-3.011l1.57-8.686l0.91-3.039l1.342-6.891   l2.47-15.102l1.05-7.511l0.262-3.331l-0.094-0.789l-0.327-1.521l0.04-0.456l1.013-1.478l0.149-0.341l0.103-0.65l0.685-2.469   l0.757-0.946l0.96-0.038l2.344,0.583l1.347-0.204l0.776-0.554l0.012-0.82l-0.947-0.999h0.523l-0.375-0.769l-2.892-2.73   l-0.416-0.178l-0.179-0.108l-0.162-0.167l-0.181-0.119l-0.263,0.024l-0.164,0.164l-0.075,0.233l-0.05,0.215l-0.09,0.092   l-0.248,0.505l-1.724,2.64l-0.433,2.375l-0.34,1.296l-0.251,0.604l2.332-26.653l1.592-8.599l0.685-11.497l0.24-0.806l1.306-2.661   l0.548-0.848l0.616-0.234l0.405,0.2l0.09,0.247l-0.02,0.411l-0.024,0.617l-0.107,0.18l-0.083,0.289v0.291l0.119,0.293l0.404,0.656   l0.335,0.425l2.564,2.006l1.615,0.913l0.594,0.184l4.635,5.18l1.072,1.598l0.447,1.643l0.098,1.085l0.508,2.025l0.713,5.039   l0.156,0.62l1.293,3.147l1.303,1.711l1.467,1.433l1.227,0.725l0.338,0.383l0.316,0.681l0.058,0.501l-0.111,0.865l0.047,1.129   l0.167,1.122l0.319,0.878l0.517,0.396l-0.153-0.746l-0.143-1.537l-0.232-0.667l0.363-1.459l-0.436-1.174l-0.85-0.872l-0.903-0.56   l1.182,0.057l0.991,0.22l0.88,0.441l0.867,0.725l-0.964-1.703l-1.523-0.758l-1.662-0.542l-1.363-1.063l-0.698-1.411l-0.486-1.72   l-1.453-10.414l-0.5-2.105l-1.276-3.434l-0.767-1.529l-0.857-1.366l-1.772-2.044l-5.425-3.96l-0.13-0.234l-0.153-1.028   l-0.243-0.234l-1.265-0.467l-2.05-2.054l-1.153-0.468l-0.722-0.151l-0.633-0.395l-0.54-0.55l-0.466-0.62l-0.711-0.544l-1.346,0.296   l-0.686-0.281l0.657-3.823l-0.007-0.704l2.545-0.784l0.748,0.033l2.439,2.892l0.436,0.29l0.457,0.433l2.682,1.254l-0.859-0.977   l-3.439-2.791l-0.991-1.188l-0.204-0.497l-0.057-0.637l-0.169-0.82l-0.254-0.796l-0.326-0.573l0.426-0.228l0.267-0.327l0.196-0.329   l0.183-0.244l0.43-0.385l0.593-0.365l0.355-0.052l0.307,0.068l0.245-0.13l0.16-0.638l-0.048-0.571l-0.226-0.571l-0.275-0.477   l-0.24-0.296l0.212-0.175l0.384-0.421l0.193-0.153l-0.627-0.421l-0.422-0.739l-0.542-1.817l0.803,0.561l0.642,0.04l0.508-0.458   l0.422-0.931v-0.339l-0.161-0.247l-0.218-0.256l-0.253-0.202l-0.729-0.274l-0.135-0.449l-0.038-0.557l-0.279-0.75l0.013-0.516   l-0.052-0.211l-0.142-0.086l-0.492-0.168l-0.131-0.092l-0.228-0.258l-0.232-0.182l0.004-0.236l0.455-0.452l-0.894-0.681   l-0.293-0.074l-0.156-0.108l0.01-0.251l0.05-0.268l-0.046-0.162l-0.205-0.043l-0.579,0.043L270,315.771l-0.346,0.024l-0.327-0.065   l-0.364-0.389l-0.042-0.463l0.245-0.54l0.38-0.468l0.357-0.243l-0.206-1.058l0.419-0.729l2.636-1.647l0.31-0.705l-0.033-0.447   l-0.173-0.471l-0.104-0.784l-0.832-1.188l-1.713-0.113l-1.42,0.858l0.043,1.749l-1.029-0.284l-0.731-0.897l-0.697-1.057   l-0.611-0.174l-0.386-0.068l-1.178-0.713l-0.866-0.753l-0.512-0.215l-2.033,0.65l-0.972-0.052l-0.416-1.183l-0.226-1.4   l-0.611-1.012l-0.882-0.619l-1.05-0.208l-2.56-0.109l-1.029-0.339l0.324-0.689l-0.623-0.597l-2.041-0.366l-1.284-1.133   l-1.084-0.295l-0.48-0.303l-0.279-0.457l-0.43-1.217L246.781,295l0.011,0.695l0.222,0.907l0.052,0.484l-0.164,0.249l-0.36-0.199   l-0.36-0.505l-0.852-4.083l0.168-0.97l-0.613-0.26l-0.303-0.623l-0.177-0.751l-0.237-0.646l-0.575-0.674l-0.589-0.511l-0.458-0.54   l-0.388-1.426l-0.508-0.411l-0.645-0.219l-0.629-0.068l-0.327-0.34l-1.134-2.325l-2.131-2.238l-1.187-0.856l-0.99-0.341   l-0.444-0.364l-0.28-0.875l-0.152-1.068l-0.046-0.959l0.095-1.212l0.26-0.575l0.982-0.716l-0.223-0.794l0.562-0.593l1.464-0.91   l0.467-0.847l0.645-2.024l0.455-0.996l0.673-0.508l-0.071-0.951l-0.428-0.995l-0.413-0.652l-0.592-0.59l-2.302-1.298l-4.415-0.783   l-1.364-0.753l0.508-0.346l0.414-0.387l0.446-0.321l1.246-0.179l0.293-0.197l0.119-0.458l0.115-0.836l0.016-0.768l-0.407-0.883   l-0.108-0.851l0.047-0.624l0.15-0.727l0.246-0.675l0.34-0.48l0.919-0.402l3.523-0.365l0.265-0.206l0.259-0.131l0.284-0.049   l0.305,0.386l0.285,0.267l1.962,0.519l0.589-0.018l-0.264-0.382l0.443,0.007l0.411,0.122l0.372,0.239l0.341,0.367h-0.782v0.418   l1.57,1.156l1.592,0.315l0.389,0.264l0.848,0.918l0.878,0.394l2.066,0.069l-0.773-0.516l-1.57-0.319l-0.666-0.546l-1.159-1.381   l-1.349-1.125l-1.319-0.804l-0.768-0.257l-0.903-0.092l-0.34-0.128l-0.536-0.551l-1.453-0.427l-5.282,0.368l-1.204,0.739   l-0.27,0.418l-0.153,0.368l-0.206,0.354l-0.396,0.367l-1.14,0.335l-0.894,0.895l-0.726,0.293l-0.754-0.013l-0.689-0.282   l-0.57-0.516l-0.933-1.088l-0.615-0.358l-0.639-0.083l-0.358,0.019l-0.285,0.064l-0.304,0.267l-0.143,0.381l-0.059,0.344   l-0.041,0.161l-1.118-0.032l-3.583-1.892v-0.386l0.879,0.131l1.644,0.788l0.869-0.147l0.657-0.776l-0.352-0.753l-0.768-0.758   l-0.581-0.795l-0.28,0.14l-0.128,0.085l-0.114,0.122l0.187,0.414l0.017,0.228l-0.204,0.551h-0.285l-0.063-1.637l-0.439-0.867   l-1.592-1.035l3.047-1.834l0.408,0.025l0.396,0.173l0.642,0.124l-0.076,0.313l-0.045,0.004l-0.161,0.103l0.282,0.352l0.368-0.428   l1.318-0.741l0.122-0.378l-0.585-0.117l-0.943-0.026l-0.628-0.251l0.349-0.802l-0.623-0.422l-0.799-0.088l-0.488-0.306l0.318-1.078   l-0.541-0.735l0.426-0.383l2.389-0.129l1.399-0.392l0.795,0.055l-0.62-0.173l-1.031,0.18l-0.701-0.007l-2.922-1.162l-0.604-0.097   l-0.498,0.064l-1.253,0.42h-1.434l-0.351,0.12l-0.22,0.203l-0.234,0.042l-0.394-0.365l0.576-0.106l0.673-0.42l0.57-0.644   l0.293-0.764l-0.592,0.584l-0.542,0.09l-0.565-0.055l-0.652,0.157l0.311,0.064l0.237,0.111l0.153,0.215l0.082,0.38l-0.967,0.014   l-0.449-0.106l-0.411-0.296l-0.061,1.357l-0.522,0.304l-1.274-0.464l-0.639,0.044l-1.994,0.692l-0.741,0.074l-0.573-0.062   l-0.5-0.249l-0.515-0.498l-0.078-0.214l-0.589-1.114l-0.143-0.057l-0.159-0.302l-0.366-0.178l-0.434-0.074l-0.117-0.06l0.055-0.079   l-0.022-0.277l-0.657-0.254l0.638-0.464l1.044-0.002l0.564,1.14h0.265l0.212-0.3l0.218-0.124l0.268,0.088l0.346,0.337l0.042-0.365   l0.22-0.831l0.595,0.708l0.97,0.316l1.042-0.102l0.813-0.536l-0.285-0.388l1.494-2.088l0.178-1.056l-0.863-1.121v0.351l0.368,0.383   l0.05,0.365l-0.227,0.284l-0.477,0.132l0.545,0.388l-0.171,0.27l-0.167,0.122l-0.444,0.03l-0.196-0.318l-1.916-1.234l0.801,0.118   l0.764,0.27l-0.453-0.659l-0.455-0.296l-1.184-0.208l0.526,0.351l-0.791,0.379l-1.978,0.21l-0.393,0.4l-0.337,0.68l-0.751,0.349   l-1.265,0.312v-0.354h0.259v-0.422l-0.498,0.088l-0.12,0.092l-0.164,0.242h-0.262l-0.146-0.693l-0.041-0.576l0.122-0.439   l0.327-0.268l-0.551-0.021l-0.402-0.298l-0.253-0.527l-0.099-0.703H201.4l0.053,0.444l0.181,0.71l0.053,0.395v1.359l0.137,0.568   l0.341,0.628l0.428,0.57l0.399,0.4l-0.096,0.39l-0.063,0.164l-0.103,0.222l-0.103-0.206l-0.396-0.57l-0.319,0.222l-0.345-0.365   l-0.408-0.589l-0.518-0.464l0.226,0.753l-0.215,0.351l-0.352-0.148l-0.183-0.744l-0.138-0.873l-0.246,0.085l-0.134,0.631   l0.231,0.755l-0.545-0.04l-0.224-0.079l-0.253-0.27l-1.204,0.659l-0.609,0.055l-0.535-0.326l0.246-0.159l0.253-0.229l-0.372-0.346   l-0.444-0.284l-0.43,0.023l-0.322,0.607l0.173,0.083l0.163,0.192l0.188,0.113l-0.416,1.909l0.215,1.621l0.632,1.315l0.851,0.996   l-0.52-0.027l-0.804-0.222l-0.243,0.249h-0.238l-0.463-1.632l-0.061-0.514l0.083-0.621l0.358-0.957l0.082-0.766l-0.095-1.323   l-0.268-0.981l-0.421-0.749l-0.548-0.626l-0.365-0.234l-0.43-0.183l-0.362-0.222l-0.15-0.347l0.085-0.738l0.461-1.593l2.877-1.34   l-0.148-0.298l-0.081-0.32l-0.033-0.405v-0.567l-0.182,0.125l-0.449,0.178l-0.178,0.12l-0.023-1.202l0.023-0.386h-0.238   l-0.299,0.602l-0.411-0.107l-0.514-0.264l-0.606,0.12l0.536,0.209l0.364,0.417l0.243,0.607l0.162,0.783l-0.19,0.041l-0.038,0.041   v0.093l-0.056,0.212l-0.455-0.333l-0.268,0.208l-0.301,0.366l-0.542,0.148l0.148,0.172l0.396,0.601l-0.534,0.262l-0.182,0.529   l-0.122,0.525l-0.349,0.238l-0.284-0.224l-1.167-1.33l-0.976-0.28l-1.682-0.458l-1.024-0.035l0.691-0.282l0.681,0.074l1.523,0.56   v-0.352l-0.606-0.37l-0.682-0.241l-1.607-0.166v-0.424l0.342-0.035l0.162-0.125l0.043-0.285v-0.528l0.131-0.225l0.651,0.1   l0.24-0.069l0.492-1.263l0.346-0.677l0.489-0.394v-0.422l-0.832,0.983l-1.05,1.001l-1.164,0.688l-0.803,0.192l0.295,0.171   l0.238,0.241l0.183,0.292v0.354l-3.137,0.789l-0.545-0.171l-0.165-0.31l-1.143-1.475l-0.548-1.165l-0.424-0.496l-0.163-0.245   l-0.146-0.427l-0.421,0.352l-0.626-0.014l-1.352-0.338l-0.991,0.046l-0.318-0.046l-0.303-0.176l-0.434-0.497l-0.178-0.106   l-1.45,0.074l-0.737-0.264l-0.322-0.779l-0.33-0.158l-1.997,1.127l-0.556-0.547l-0.814,0.016l-0.857,0.181l-0.694-0.072   l-0.053-0.19l-0.732-1.366l-0.268-0.299l-0.278-0.223l-0.134-0.341l0.157-0.662l-0.332-0.014l-0.24-0.104l-0.475-0.304   l-0.121-0.622l-0.719-0.83l-1.022-0.69l-1.012-0.2l0.346,1.169l-0.277,0.862l-0.858,0.949l-0.777-0.216l0.385,0.033l0.304-0.084   l0.222-0.26l0.134-0.502l-0.464,0.172l-0.382,0.018l-0.288,0.128l-0.197,0.494l-1.081-0.898l-0.509-0.207l-0.618-0.06l-0.465-0.265   l-0.488-0.673l-0.377-0.897l-0.117-0.929l-0.403,0.679l0.226,0.862l0.515,0.78l0.466,0.444v0.353l-0.481,0.04l-0.377,0.137   l-0.346,0.253l-0.386,0.383l-0.723-1.254l-0.536,0.148l-0.109,0.702l0.557,0.404l-0.106,0.216l-0.129,0.174v0.355h1.045v0.43   l-1.243,1.201l-0.587,0.353l-0.943,0.271l-5.613-0.271l0.022-0.432l-0.085-0.794l0.063-0.329l0.243-0.151l0.36,0.002l0.322-0.072   l0.145-0.388l-0.133-1.017l-0.57-1.463l-0.374-1.556l-0.573-1.041l-1.826-2.377l-3.392-2.691l-0.384-0.208l-0.514,0.319   l-0.47,0.575l-0.499,0.273l-1.147-1.125l-0.66-0.119l-1.293,0.077l-2.877-0.817l0.254-0.203l0.194-0.349l0.16-0.364l0.232-0.419   l0.025-0.203l0.05-0.217l0.133-0.203l0.129-0.007l0.302,0.348l0.223,0.086l12.318-2.773l2.188,0.668l0.569-0.238l0.173-0.411   l0.371-1.62l-0.172-0.649l-0.542-0.696l-0.116-0.402l-0.192-1.28l-0.516-0.526l-1.623-0.365l-0.302-0.189l-0.242-0.281l-0.17-0.341   l-0.092-0.367l-0.961,0.357l-2.039-1.312l-1.065,0.365l-0.556,1.018l-0.536,1.311l-0.676,1.091l-0.989,0.339l0.335-1.22l0.19-0.381   l-0.432-0.659l-0.235-0.489l-0.094-0.421l0.19-0.681l0.296-0.253l0.143-0.229l-0.263-0.585l-0.467-0.122l-2.299-0.096l0.102-0.604   l-0.102-0.576l0.419-0.232l0.318,0.028l0.318,0.127l0.418,0.077l0.486-0.171l0.088-0.391l-0.1-0.405l-0.067-0.211l0.68-1.794   l0.489-0.469l0.634,0.299l-0.5,2.127l1.059,0.508l3.408-0.241l0.388,0.197l0.257,0.248l0.294,0.215l0.497,0.086l0.464-0.042   l1.806-0.531l2.568-0.173l-0.243,0.241l-0.24,0.105l-0.562,0.01l0.786,0.313l3.134-0.669v-0.431l-1.199,0.084l-0.449-0.22   l-0.161-0.682l-0.354,0.45l-0.526,0.147l-0.477-0.192l-0.212-0.585l-0.24,0.068l-1.636,0.113l0.321-0.522l0.162-0.131l0.324-0.134   l0.019-0.241l0.178-0.244l0.375-0.271l0.738-0.818l-0.646,0.012l-0.869,0.633l-0.601,0.178v-0.394h0.284v-0.429h-0.284   l-0.118,0.281l-0.24,0.295l-0.141,0.247l-0.57-0.247l-1.209,0.842l-0.858,0.156l0.107-0.218l0.038-0.023l0.14-0.117l-0.285-0.393   l-0.323,0.318l-0.439,0.234l-0.514,0.143l-0.528,0.056v-0.358l2.187-2.658l0.422-0.344l3.662-2.182l-0.682,0.204l-1.198,0.69   l-0.764,0.287l-2.585,0.427l-1.187,0.512l-2.416,1.529l-1.873,0.462l-1.141,0.584l-0.747,0.099l-0.668-0.155l-1.332-0.544   l-0.743-0.124l-0.136,0.19v0.417l-0.061,0.417l-0.338,0.192l-1.933-0.021l-0.512-0.197l-0.337-0.588l-0.237-1.198l0.712-0.07   l-0.061-0.739l-0.651-1.553l-0.059-1.085l0.193-1.08l0.452-0.794l0.72-0.228v-0.36l-0.972-0.719l0.386-1.672l0.944-1.764   l0.685-1.01l0.399,0.261l0.413,0.169l-0.285-0.43l0.61-0.424l0.721-0.236l1.185-0.132l0.745,0.212l1.271,0.721l0.481-0.141   l-0.889-1.225l-0.277-0.791l0.501-0.354l1.754,0.457l0.715-0.028l-1.047-0.429l0.117-0.238l0.07-0.191l-0.084-0.184l-0.338-0.217   v-0.358h2.993l0.864-0.155l1.267-0.609l0.888-0.026l-0.528-0.326l-0.234-0.071v-0.432l1.089-0.198l1.066-0.63l1.032-0.408   l0.994,0.047l0.695,0.835l-0.283,1.28l0.896-0.099l1.168-0.707l0.404-0.12l0.469,0.092l0.867,0.347l0.512-0.007v-0.432   l-0.736-0.212l0.201-0.589l0.657-0.677l0.638-0.467l0.737-0.298l0.887-0.17l0.871,0.059l0.69,0.408l0.226-0.352l0.212,0.014   l0.189,0.269l0.157,0.43h0.237l0.256-0.274l0.156-0.344l0.025-0.436l-0.15-0.526l0.53-0.104l0.467-0.18l0.81-0.51l1.354-0.406   l0.238,0.189l-0.097,0.553l-0.137,0.421l0.043,0.295l0.449,0.173v0.358h-0.258v0.432l0.383,0.248l0.257,0.432l0.058,0.582   l-0.199,0.684l1.078-1.08l0.561-0.292l0.763,0.184l-0.382,0.349l-0.167,0.083v0.361l0.464,0.627l1.131,0.726l0.496,0.66   l0.283-0.396l-0.283-0.394l0.283-0.396l-0.177-0.361l-0.134-0.476l-0.209-1.18h0.237l0.123,0.34l0.117,0.175l0.305,0.313   l-0.099-1.012l0.112-1.114l0.302-0.649l0.47,0.366l0.166-0.267l0.084-0.276l0.025-0.316l-0.013-0.364l0.499,0.699l0.715,0.222   l1.78-0.094l0.424,0.172l0.88,0.793l0.43,0.22l0.491,0.019l1.364-0.377l-0.014,0.982l0.939,0.297l1.119-0.007l0.545-0.299   l-0.38-1.34l-0.156-0.888l0.156-0.397l1.997-0.363l-0.556-0.359l-1.323-1.659l-0.159-0.95l0.388-0.492l1.103-0.509l0.831-1.502   l0.214-0.483h0.234l0.358,0.288l1.214,0.076l1.322,0.783l0.53,0.045l-0.217,0.175l-0.103,0.156l-0.07,0.192l-0.131,0.27   l0.897,0.074l0.47-0.045l0.34-0.225l0.386-0.474l0.262-0.184l3.229-1.218l0.447-0.343h0.262l0.362,0.095l1.14-1.428l0.617,0.142   l0.248,0.838l-0.023,1.134l-0.276,1.05l-0.495,0.584l0.042,0.263l0.047,0.163l0.193,0.369l0.141-0.736l0.312-0.556l1.145-1.434   l0.942-0.809l0.338-0.433l0.397,0.185l0.71-0.867l0.486-0.149l0.47,0.312l0.273,0.528l0.024,0.61l-0.268,0.568v0.365l0.523,0.43   l-0.29,0.473l-0.493,1.511l-0.251,0.461l-0.819,1.092v0.432h0.285l1.263-2.617l0.747-1.102l0.625,0.147l0.378-0.321l0.405-0.107   l0.402,0.107l0.384,0.321l-0.288,0.397l0.15,0.055l0.092-0.002l0.039,0.071l0.007,0.272l-0.369,0.114l-0.295,0.17l-0.646,0.511   v0.362l0.501,0.433l0.981,0.383l1.941,0.092l0.76,0.284l-0.051,0.482l0.001,0.349l0.05,0.393l-0.369,0.314l-0.152,0.083v0.363   l0.561,0.364l0.691,0.607l0.585,0.68l0.253,0.581l2.492,2.158l0.38,1.73l0.156,0.462l0.059,0.297l-0.112,0.268l-0.078,0.29   l0.131,0.368l0.19,0.172l0.497,0.252l0.917,0.699l2.184,1.066l-0.112,0.523l-0.156,0.41l-0.216,0.327l-0.299,0.287l0.45,0.021   l0.368,0.204l0.323,0.344l0.322,0.433l0.533,0.442l0.102-0.541l-0.021-0.833l0.157-0.43l1.523,0.082l0.624-0.278l0.74-0.809   l0.905-1.438l0.293-0.36l0.405-0.315l0.678-0.229l2.583-1.613l0.539-0.608v-0.394l-0.324-0.04l-0.744-0.356l1.707-0.521   l0.834,0.122l0.337,0.795l0.997-0.396l1.155-0.764l0.998-0.991l0.533-1.055l0.137,0.673l0.274,0.425l0.387,0.176l0.508-0.085v0.432   l-0.285,0.234l-0.167,0.302l-0.142,0.327l-0.189,0.326l-1.068,1.186l0.676,0.547l0.713-0.488l0.782-0.813l0.866-0.432l0.183,0.311   l0.21,1.355l0.131,0.313l0.435,0.205l0.257,0.504l0.136,0.65l0.077,0.612l0.417-0.233l0.277-0.438l0.131-0.596l-0.019-0.704   l0.162,0.845l0.207,0.725l0.341,0.337l0.573-0.332v-0.391l-0.157-0.061l-0.342-0.301l0.424-0.655l0.449-0.34l0.47,0.052   l0.486,0.514l-0.265-0.358l-0.206-0.396l-0.315-0.83l1.708-0.606l1.832-0.184l0.098,0.262l0.807,1.499l0.062,0.622l0.194,0.579   l0.337,0.424l0.473,0.17l-0.162,0.57l-0.121,0.222l0.987,1.506l0.234,0.772l-0.149,1.274l0.377-0.411l1.19-0.769l-1.068-0.755   l0.205-0.455l-0.564-1.029l-0.14-0.925h0.26l0.157,0.262l0.163,0.172l0.467,0.358l-0.283-0.671l-0.346-0.355l-0.399-0.136   l-0.433-0.019l-0.358-0.34l-0.71-1.722l-0.371-0.707l0.122-0.467l0.283-0.523l0.442-0.422l0.592-0.172l0.131-0.184v-0.411   l0.068-0.408l0.343-0.186h1.439l-0.24-0.432l3.901-0.788l-0.113,0.25l-0.009,0.255l0.128,0.307l0.277,0.408l-0.951,1.559   l0.009,1.353l0.871,0.99l1.615,0.455l2.802,0.035l3.019-0.471l1.847-1.013l0.231-0.05l0.382-0.085l3.03,0.394l4.112-0.924   l1.4,0.531l-0.603-1.005l-0.854-0.445l-1.464-0.135l-0.006,0.135l-0.181,0.222l-0.212,0.094l-0.103-0.268l-0.043-0.373   l-0.131-0.326l-0.203-0.226l-1.318-0.389l-0.477-0.312l-0.203-0.354l-0.326-1.367l-1.422-1.275l-0.324-1.375l-0.019-1.607   l-0.16-1.377l-0.462-0.91l-0.923-0.239v-0.431l0.53-0.246l0.405-0.526l0.256-0.675l0.312-2.789l0.255-0.595l0.33,0.495l0.215-0.666   l0.031-0.515l-0.193-0.327l-0.458-0.123l-0.156-0.337l0.414-3.375l0.248-0.87l0.514-0.28l0.933,0.444v-0.359l-0.738-0.356h-0.86   l-0.716,0.416l-0.302,0.898l-0.12,0.24l-0.271-0.34l-0.27-0.584l-0.122-0.492l0.032-1.393l0.084-0.626l0.168-0.592l-0.539-0.11   l-0.204-0.44l0.038-0.657l0.184-0.754l0.269-0.752l0.265-0.357l0.747-0.523l-0.47-0.369l-0.093,0.083l-0.197,0.286l-0.322-0.927   l-0.257-1.103l-0.165-1.148l-0.062-1.059l0.297-0.557l0.696-0.051l1.38,0.408v-0.362l-0.81-0.246l-0.984-0.48l-0.826-0.021   l-0.299,1.109l-0.607-0.715l-0.634-2.162l-0.565-0.688l0.248-0.265l0.108-0.083l0.168-0.088l-1.1-0.874l-0.465-0.652l-0.29-0.918   h0.783v-0.363l-0.495-1.205h-0.288l-0.31,1.019l-0.709-0.454l-0.86-0.952l-0.757-0.45l0.101-0.407l0.067-0.172l0.12-0.223   l-0.533,0.129l-0.504,0.23l-0.449,0.045l-0.371-0.404l-0.118-0.768l0.145-2.004l-0.027-0.845l-0.112-0.402l-0.161-0.379   l-0.559-1.021l-0.05-0.285l-0.028-0.304l-0.134-0.458l-0.377-0.631l-0.99-1.218l-0.199-0.351l0.24-0.823l1.081-0.994l0.246-0.598   l0.173-1.85l-0.011-0.981l-0.284-0.837l-0.312-0.659l-0.212-0.572l-0.341-0.41l-1.229-0.245l-1.685-0.717l0.306-1.397l-0.074-0.881   l0.167-0.453l1.028-0.134l0.358,0.125l0.76,0.559l0.453,0.125l1.067-0.159l0.382,0.159l0.185,0.253l0.141,0.716l0.171,0.279   l0.178,0.053l0.419-0.08l0.187,0.027l0.842,0.291l2.536,0.388l2.86,0.985l0.608-0.046l0.018,0.135l0.013,0.293l0.093,0.284   l0.277,0.13l0.358-0.132l0.52-0.578l0.416-0.133l0.447,0.075l0.796,0.31l0.458,0.019l0.649-0.301l0.595-0.57l0.988-1.353   l0.551-0.424l1.769-0.554l0.698-0.068l4.598,0.845l0.31,0.173l0.152,0.426l0.19,0.977l0.838,1.795l0.171,1.024l-0.978,0.7   l-0.162,0.555l-0.094,0.555l-0.154,0.248l-0.849,0.019l-0.337,0.125l-0.246,0.298l-0.186,1.398l0.484,1.162l0.654,1.042   l0.572,1.626l2.921,3.698l0.368,0.89l0.133,1.285l-0.077,0.646l-0.171,0.459l-0.175,0.301l-0.073,0.18l0.121,0.6l0.314-0.048   l0.411-0.265l0.435-0.069l0.41,0.354l0.29,0.421l0.405,0.239l0.744-0.211v-0.402l-0.396-0.583l0.284-0.804l0.642-0.711l0.663-0.309   l5.047,0.265l4.528,1.739l6.559,0.402l1.639,0.498l0.943,0.088l1.394-0.767l0.935,0.215l1.648,0.736h2.616l0.67,0.278l1.156,0.765   l1.926,0.452l3.584,2.186l0.972-0.889l6.134-1.457l1.788-0.856l1.05-0.928l0.872-0.239l0.34-0.282l0.919-1.438l2.542-1.85   l4.766-1.085l4.764-1.085l1.76-0.906l0.738-0.662l0.635-0.88l-2.72,1.719l-3.159,0.453l-3.168-0.432l-2.739-0.937h-0.785   l-0.67-0.057l-0.879-0.285l-0.763-0.461l-0.324-0.568l-0.122-0.355l-0.542-0.369l-0.125-0.504l0.047-0.643l0.118-0.425l1.96-3.62   l1.533-5.21l0.573-0.684l1.913-1.546l0.418-0.007l0.386-0.383l5-2.319l0.389-0.552l4.791-2.882l1.324-0.406l1.505-1.036   l2.991-1.102l3.296,0.043l15.76-5.109l0.931-0.748l0.929-0.322l1.523-1.699l4.988-4.033l2.022-2.511L371,88.144l0.333-0.51   l0.854-3.161l1.309-1.772l1.315-0.183l3.788,1.862l0.374-0.029l0.324-0.326v-0.409l-0.405,0.027l-0.256-0.095l-0.199-0.255   l-0.212-0.455h0.785v-0.443l-0.742-0.015l-0.772-0.256l-0.592-0.475l-0.249-0.673l-0.368-0.767l-1.639-0.802l-0.368-0.492   l0.063-1.924l0.321-2.343l0.785-1.597l0.878,0.181l0.589,0.12V72.98l-2.113-1.674v-0.408l0.701-2.032l0.028-2.826l0.194-2.455   l1.19-0.904l-1.035-1.599l-0.208-0.839l-0.166-2.833l-0.399-2.58l-0.019-1.249l0.19-1.075l0.806-2.392l0.436-0.889l0.212-1.153   l-0.243-1.388l-0.617-2.234l-0.09-0.844l-0.01-0.308l0.929-0.743l0.33-0.141l0.798-0.074l0.728-0.274l0.645-0.667l1.106-1.549   l1.178-1.113l7.333-3.213l0.685,0.141l1.309-0.772l6.146-0.78l6.564-2.158l0.405-0.221l0.321-0.052l2.296,0.278l3.125-0.82   l1.554-0.729l0.567-0.404L411.806,30z M391.195,514.69h0.107l0.38-0.082l0.13-0.055l-0.423-0.741l-0.388-0.872l-0.396-0.556   l-0.435,0.203l-0.419,0.932l0.071,0.653l0.503,0.389L391.195,514.69z M677.27,503.979l0.978,1.421h-0.199l-0.003,0.053   L677.27,503.979z M643.17,526.738l0.318-0.587l-0.318-0.301l-0.511-0.168l-0.274-0.2l0.162-0.486l0.399-0.107l1.009,0.05   l0.287-0.152l0.29-0.228l0.365-0.204l1.542-0.299l0.52-0.231l0.396-0.299l0.221-0.109l0.168,0.044l0.097-0.052l0.037-0.415   l-0.564-0.442l-0.075-0.086l-1.426-0.708l-0.094-0.198l-0.103-0.341l-0.171-0.203l-0.539,0.472l-0.221-0.021l-0.15-0.223   l-0.059-0.371l0.187-0.19l1.15-0.691l-0.841-0.7l-0.813,0.068l-1.511,0.632l0.287-0.386l-0.234-0.441l-0.146-0.565l-0.022-0.586   l0.115-0.498l0.334,0.262l0.371-0.006l0.349-0.215l0.256-0.365l0.473,0.278l0.143-0.223l0.044-0.436l0.144-0.357l0.184-0.239   l0.074-0.23l0.178-0.173l1.234-0.192l0.33-0.341l0.081-0.513l-0.01-0.629l0.42-0.651l0.169-0.418l-0.181-0.19l-0.473-0.051   l-0.1-0.152l0.087-0.224l0.312-1.316l0.495-0.589l0.657-0.309l0.726-0.192l-0.221-0.489l0.212-1.137l-0.274-0.505v-0.387   l0.299,0.158l0.106,0.007l0.044,0.097l0.1,0.448l0.632-0.355l0.408,0.184l0.343,0.366l0.445,0.192l0.601-0.205l0.455-0.508   l0.33-0.694l0.206-0.753l-0.284-0.355l1.439-0.085l2.43-1.27l4.28-0.919l1.212-0.627l0.115-1.011l2.072-2.308l0.411-0.318   l0.903-0.157l0.91-0.009l0.414,0.123l0.346-0.029l1.982,0.564l0.804,0.45l0.261,0.263l0.237,0.348l0.203,0.419l0.353,1.011h0.262   l1.368-2.359l0.561-1.514l-0.365-1.139l0.306-1l-0.212-0.913l-0.523-0.851l-0.617-0.8l1.047-1.456l-0.006-0.453l-0.249-0.497   l-0.006-0.442l0.156-0.511l0.256-0.357l0.891-0.953l-0.131-0.257l-0.041-0.156l0.047-0.217l0.125-0.442l-0.392-0.424l-0.25-0.83   l-0.062-0.92l0.187-0.684l0.626-0.409l1.579-0.006l0.691-0.301l0.505,0.716l0.343,0.301l0.747,0.415v0.39l-0.324,0.422   l-0.066,0.562l0.187,0.6l0.433,0.526l-0.175,0.98l0.723,4.759l-0.063,1.571l-1.24,4.871l0.041,0.634l-0.078,0.735l0.037,1.508   l-0.05,0.134l-0.115,0.129l-0.103,0.173l-0.019,0.243l0.094,0.14l0.177,0.112l0.178,0.06l0.075,0.008l0.103,0.467l0.094,0.292   l-0.01,0.273l-0.187,0.424l0.308,0.25l0.131,0.347l0.103,0.402l0.237,0.419l0.305,0.245l1.035,0.465l-0.106-0.753l-0.169-0.344   l-0.579-1.352l1.109,1.646l0.365,0.905l0.159,0.996l-0.084,3.015l0.128,1.56l0.48,1.096l-0.23,0.677l-0.172,0.72l-0.103,0.812   l-0.019,0.974l0.181,1.064l0.707,2.015l0.159,1.019l-0.28,6.433l0.28,1.219l-0.103,0.428l-0.075,0.899l-0.084,0.403l-0.274,0.466   l-1.035,0.974l-0.411,0.665l-0.589,1.26l-2.626,3.824l-0.579,0.582l-0.212,0.478l-0.012,1.828l-0.327,3.571l0.333,3.505   l-0.053,3.759l-0.115,0.254l-0.287,0.125l-0.38,0.326l-0.343,0.45l-0.199,0.496h0.523l-0.106,0.912l-0.187,0.577l-0.361,0.263   l-0.399-0.04l-0.305,0.025l-0.119,0.29l0.175,0.773l-0.514-0.25l-0.576-0.138l-0.554-0.035l-0.442,0.073l0.068,0.45l-0.365,0.511   l-0.224,0.475l0.52,0.346l1.258-0.529l0.767-0.129l0.349,0.464l-0.137,0.727l-0.365,0.61l-0.551,0.418l-0.673,0.15l-0.361,0.25   l-0.286,0.531l-0.389,0.493l-0.664,0.125l0.156,0.362l0.044,0.356l-0.044,0.349l-0.156,0.362l0.442,0.177l0.113,0.397l-0.169,0.449   l-0.386,0.343l0.237,0.379l-0.598,0.262l-1.041,0.694l-0.663,0.091v0.376l0.358,0.297l0.125,0.395l-0.128,0.393l-0.355,0.312v0.318   l0.433-0.187l0.611-0.578l0.473-0.282l-0.144,0.76l-0.299,0.868l-0.33,0.764l-0.268,0.43L667.706,570l-0.492-0.164l-0.947-0.87   l-0.604-0.264l-1.19-0.185l-0.988-0.436l0.415-1.315l0.187-0.168l0.352-0.106l-0.62-0.555l-0.928-0.393l-0.549-0.445l0.508-0.728   v-0.318l-0.446,0.147l-1.128,0.898l-0.259-0.349l0.085-0.11l0.046-0.037l0.047-0.063l0.081-0.169l-0.408,0.119l-0.153,0.088   l-0.221,0.172l-0.262-0.379l-0.402-0.353l-0.972-0.308l-0.941-0.144l-0.585,0.138l-0.417-0.293l-0.308-0.343l-0.377-0.289   l-0.891-0.197l-0.096-0.187l-0.075-0.231l-0.209-0.206l-0.361-0.1h-0.306l-0.302-0.04l-0.337-0.241l0.523-0.35v-0.317l-0.486-0.175   l-0.278-0.176l-0.362,0.04l-0.536-0.14l-0.486-0.225l-0.209-0.212l0.178-0.989l-0.121-0.346l-0.58-0.22l0.281-0.669l0.253-1.048   l0.374-0.713l0.66,0.329l2.05-0.944l0.327-0.311l0.177-0.705l0.43-0.36l0.523-0.303l0.461-0.555l-0.9-0.041l-2.402-0.691   l-0.922-0.019l-0.9-0.167l-0.486-0.505l0.336-1.031l-0.95-0.008l-1.57,0.614l-0.9,0.065l0.097-0.186l0.187-0.484l-0.545,0.038   l-0.411-0.119l-0.383-0.175l-0.492-0.123l0.501-0.255l1.075-0.171l0.492-0.276l0.321-0.435l0.172-0.532l-0.069-0.477l-0.424-0.276   v-0.382l0.872-0.004l0.779-0.267l1.249-0.75l-0.187-0.489l-0.296-0.332l-0.38-0.192l-0.442-0.071l1.259-0.414l0.308-0.284   l-0.093-0.113l-0.134-0.343l-0.156-0.293l-0.141,0.046l0.458-0.728l0.065-0.009l0.11-0.259l0.336-0.432l0.078-0.329l-0.09-0.027   l-0.434-0.324l-0.221-0.467l-0.175-0.306l-0.243-0.182l-0.408-0.1l-0.767,0.076l-1.305,0.722l-0.826,0.257l-1.573,0.1l-0.679,0.163   l-0.598,0.404l-0.268-0.668l0.436-0.861l-0.162-0.699l-1.078-1.282l1.885-0.189l0.747-0.312l0.527-0.907l-0.486-0.337l0.324-0.598   l0.757-0.573l0.831-0.251l0.2-0.145l1.025-0.549l0.206-0.01l0.059-0.642l-0.224-0.352l-0.598-0.447l-0.66-1.465l-0.268-0.456   l-0.399-0.094l-1.068,0.294l-0.221-0.2l-0.284-0.655l-0.694-0.416l-0.875-0.189l-0.782,0.013l0.184-0.485l0.103-0.189l-0.287-0.252   l-0.312-0.143l-0.346-0.04l-0.365,0.05l0.386-0.082l0.315-0.164l0.607-0.428v-0.385h-1.072v-0.351l0.455-0.185l0.159-0.498   l-0.152-0.511L643.17,526.738z M268.592,327.6l-0.19,0.489l0.399,0.385l1.102,0.665l0.285,0.497l0.062,0.45l-0.31,2.331   l-0.397,1.445l-0.561,0.874l-0.676-0.309l-0.548-1.912l-0.315-0.725l-0.419-0.774l-2.245-2.548l-0.81-0.58l-0.825-0.994   l-0.635-1.06l0.17-0.493l0.086-0.572l-0.431-1.279l-0.843-1.912l1.189,0.162l1.301,0.684l1.195,0.97l0.902,1.025l0.433,0.222   l0.483-0.169l0.52-0.06l0.536,0.556l0.156,0.687l-0.063,0.623l0.028,0.536l0.424,0.41V327.6z M266.219,315.892l-0.187-0.216   l-0.168-0.067l-1.738-0.326l-3.704-2.412l-2.146,0.414l-0.587-0.239l-1.553-1.783l-0.421-0.313v-0.344l2.209-0.561l0.69,0.148   l0.282,0.219l0.186,0.298l0.017,0.329l-0.246,0.324l-0.913-0.392l-0.393-0.02l0.666,1.169l1.01-0.027l1.1-0.493l0.931-0.237v0.379   h-0.545v0.412l0.635,0.309l3.854,0.626l0.894,0.581l0.727,0.855l0.444,1.026l-0.355,0.032l-0.285,0.089L266.219,315.892z    M225.801,283.926l1.494,0.638l0.708,0.552l0.411,0.718l-0.858-0.345l-3.064-0.039l-0.441-1.024l0.298-0.502l0.702-0.121   L225.801,283.926z M231.05,269.716l0.394,0.459l1.304,0.692l0.418,0.417l0.184,0.787l0.09,1.136l-0.187,0.746l-0.632-0.372   l-0.559-1.27l-0.808-1.273l-0.972-0.673l-1.037,0.536l-0.608-0.87l-0.593-2.151l-0.649-0.845l2.184-0.121l0.695,0.121l0.781,0.496   l0.1,0.637l-0.149,0.745L231.05,269.716z M196.042,250.234l0.458,0.234l1.147-0.055l0.38,0.435l-0.16,1.055l-1.019,0.301   l-2.989-0.28l-1.982-0.598l-0.669-0.478l0.127-0.889l-0.296-0.931l-0.414-0.901l-0.226-0.817l0.323-0.317l0.154-0.359l0.254-0.007   l0.34,0.326l0.483,0.115l1.723,0.907l0.953,0.754l0.107,0.156L196.042,250.234z M121.945,184.712l0.081,0.135l0.073,0.155   l0.127,0.106l0.243-0.035v0.43l-1.966,1.035l-0.672,0.148v-0.394l0.129-0.021l0.27,0.043l0.125-0.021l-0.226-0.568l-0.369-0.117   l-0.972,0.292v-0.394l1.57-0.903l0.872-0.247L121.945,184.712z M553.95,484.403l0.262-0.17l0.349,0.437l0.046,0.768l-0.841,0.381   l-0.527,0.26l-0.536,0.17l-0.473-0.16l-0.916-0.496l-0.056-0.283l0.399-0.204l1.066,0.051l0.33-0.19l0.131-0.162l0.124-0.038   l0.106,0.026l0.473-0.032L553.95,484.403z"},{"name":"Iran","path":"M126.831,35.275l0.082,0.118l0.441,0.257l0.12,0.07l0.66,0.128l0.711,0.021l-0.092,0.182l-0.121,0.118   l0.65,0.465l0.37,0.864l0.924,3.843l0.379,0.805l0.645,0.572l-0.257,0.485l0.115,0.285l0.786,0.571l0.161,0.033l0.334-0.01   l0.241,0.066l0.11,0.157l0.067,0.181l0.108,0.14l1.112,0.763l0.169,0.204l0.102,0.285l0.252,0.414l0.311,0.377l0.285,0.161   l0.249,0.383l0.565,1.266l0.186,0.417l0.263,0.383l0.214,0.43l0.322,1.983l0.199,0.603l0.808-0.251l3.212,1.065l0.08-0.074   l0.214-0.147l0.28-0.11l0.29,0.034l0.086,0.25l-0.08,0.374l-0.006,0.34l0.303,0.147l0.43,0.086l0.411,0.259l0.175,0.426   l-0.266,0.586l0.205,0.403l0.268,0.202l0.287,0.169l0.29,0.31l0.128,0.314l0.242,0.854l0.156,0.335l0.292,0.216l0.736,0.333   l0.148,0.266l-0.068,0.409l-0.126,0.332l-0.091,0.336l0.056,0.427l0.355,0.422l0.655,0.441l0.701,0.346l0.368,0.098l0.485,0.129   l0.634,0.372l0.146,0.033l0.234,0.052l0.854,0.03l1.756,0.431l2.747,0.029l1.578,0.62l0.71,0.279l6.497,1.372l2.039,0.925   l1.791,0.453l0.303-0.041l2.054-0.271l0.538-0.262l1.603-1.165l0.597-0.292l0.408-0.092l1.197-0.048l0.747-0.244l0.328-0.043   l0.421,0.093l3.212,1.437l0.554,0.155l0.556-0.033l0.668-0.27l0.497-0.313l0.478-0.395l0.427-0.475l0.354-0.567l0.868-1.803   l0.411-0.534l0.562-0.475l1.788-0.915l0.507-0.488l0.518-1.204l0.374-0.587l0.239-0.199l0.51-0.278l0.245-0.199l0.175-0.243   l0.792-1.38l0.419-0.487l0.468-0.393l0.007-0.003l0.512-0.237l0.484-0.013l0.86,0.385l0.462,0.125l0.374-0.07l1.846-1.046   l0.211-0.119l0.322-0.383l0.159-0.295l0.519-1.51l1.115-1.788l0.105-0.397l0.3-0.342l1.475-0.906l3.072-1.201l0.358-0.204   l0.926-0.528l1.019-1.048l0.004-0.004l1.533-1.98l1.007-0.848l1.29-0.714l2.157-0.739l0.691-0.078l0.398-0.273l1.632-1.663   l0.555-0.313l3.709-2.095l1.324-1.356l0.48-0.492l0.596-0.416l0.733-0.199l2.345,0.045l0.379-0.095l0.322-0.298l0.357-0.536   l0.014,0.004l0.423,0.108l0.596,0.412l1.89,1.77l5.181,6.242l2.113,1.957l0.867,1.192l0.685,1.445l-0.325,0.104l-0.8,0.257   l-1.622,1.098l-1.931,0.389l-1.039,0.54l-0.892,0.855l-0.567,1.132l-0.057,1.367l0.414,1.066l0.752,1.068l1.756,1.709l1.762,0.733   l0.464,0.456l0.93,1.997l0.164,0.502l-0.016,0.553l-0.145,0.537l-0.005,0.019l-0.239,0.511l-0.279,0.42h-0.005l-0.003,0.009   l-1.27,0.789l-5.693,1.011l-0.105,0.256l0.006,0.299l-0.089,0.256l-1.616,1.003l-0.287,0.45l0.073,1.629l0.612,1.129l2.004,1.607   l4.082,2.024l0.389,0.328l0.082,0.327l0.144,0.576l-0.127,0.772l0.057,0.667l1.495,1.201l0.484,0.719l0.558,0.529l0.948,0.022   l1.563-0.731h0.725l0.354,0.854l0.215,1.045l0.398,0.535l0.494,0.452l0.507,0.795l0.519,0.569l0.459,0.651l0.765,0.97l0.401,0.508   l0.841,1.413l0.985,0.96l0.157,0.013l1.423,0.118l0.742-0.211l0.835-0.358l0.781-0.49l0.609-0.616l0.69-0.377l0.986,0.007   l1.991,0.416l0.09,3.457l-0.349,1.151l0.216,0.838l0.06,2.074l0.582,1.45l0.432,4.795l1.275,4.564l-0.243,0.748l-0.03,0.889   l0.133,0.844l0.236,0.601l1.089,1.778l0.01,0.405l-0.095,0.348l-0.048,0.281l0.324,1.53l0.642,1.466l1.563,2.35l2.075,2.161   l2.253,1.621l4.973,2.595l2.308,0.781l11.853,1.604l1.272-0.194l1.051-0.433l0.993-0.183l1.102,0.572l-0.294,0.047l-0.341-0.095   l-0.178-0.027l-0.241,0.313l2.572,1.003l4.01,0.926l1.445,0.564l0.976,0.928l-0.123,1.4l0.271,0.54l0.401,1.4l0.281,0.56   l0.447,0.695l0.725,2.094l0.926,1.53l1.076,1.034l2.228,1.685l1.523,1.853l0.467,0.28l0.6,0.173l3.41,2.315l0.64,0.149l0.429,0.196   l0.911,0.989l0.459,0.395l4.862,2.655l4.436,3.154l2.587,1.179l8.608,1.709l5.495,1.6l5.701,1.026l5.49,1.596l5.706-0.761   l5.071-1.86l5.302-1.314l5.492-1.048l5.261-1.077l5.279-1.575l5.093-1.576l10.232-2.298l1.38-0.231l12.134-0.692l2.215-0.532   l1.503-1.273l-0.07,1.466l-1.746,0.612l-2.193,0.273l-1.41,0.439l-0.386,0.195l-0.442-0.069l-0.826-0.259l-0.464,0.074   l-0.853,0.331l-0.474,0.099l-1.806-0.24h-1.581l0.241,0.433l0.434,0.143l1.011-0.049l-0.615,0.208l-0.243,0.031l0.745,0.994   l1.259,0.563l4.792,0.428l0.482,0.273l0.527,0.185l3.859-1.059l0.366-0.307l0.211-0.643l0.015-3.985l-0.168-0.659l-0.454-0.265   l-0.585-0.234l0.088-0.562l0.702-1.313l-0.733-1.143l-0.492-1.42l-0.687-3.267l-0.933-2.527l-0.141-0.55l-0.291-3.285l8.412,0.737   l0.612-0.033l0.558-0.238l0.57-0.551l0.57-0.383l0.672-0.032l0.71,0.094l0.682-0.002l1.099-0.365l5.216-3.033l0.698-0.108   l1.877,0.411l0.682-0.01l0.462-0.219l0.758-0.819l0.609-0.245l0.386-0.365l1.466-0.966l0.781-0.657l0.143-0.279l0.096-0.595   l0.421-0.977l0.096-0.554l0.038-0.936l-0.038-0.273l-0.14-0.256l-0.363-0.328l-0.108-0.212l-0.032-0.82l0.507-1.21l0.137-0.775   l0.169-0.616l0.401-0.649l0.924-1.008l4.63-3.198l1.44-1.614l0.242-0.408l0.163-0.531l0.373-0.206l0.433-0.072l0.331-0.127   l0.223-0.3l0.338-0.713l0.265-0.297l0.596-0.202l1.781-0.34l0.379-0.15l0.28-0.618l0.669-0.376l1.405-0.475l0.35-0.049l0.637-0.522   l0.637-0.328l2.291-1.777l0.749-0.305l1.96-0.085l6.096-1.286l0.918,0.002l1.909,0.423l1.204,0.701l0.453,0.154l1.571,0.016   l0.519,0.162l0.838,0.445l0.43,0.14l0.475,0.024l4.41-0.806l1.246,0.16l0.15,0.062l0.959,0.397l0.5,0.071l2.642-0.446l0.484-0.361   l0.309-0.618l0.108-0.727l-0.147-0.681l-0.838-0.966l0.194-0.535l1.944-1.809l1.039-0.73l1.122-0.43l2.826-0.091l0.526,0.13   l0.43,0.264l0.389,0.309l0.414,0.194l0.497-0.09l2.473-1.09l1.475-0.253l0.296,0.057l1.208,0.986l1.055,0.609l0.478,0.157   l4.639,0.872l1.224,0.507l0.628,0.099l0.558-0.312l0.43-0.385l0.997-0.665l0.366-0.396l0.621-1.084l0.095-0.103l0.268-0.292   l0.535-0.262l0.338-0.043l0.338,0.043l0.66,0.225l0.341,0.222l0.086,0.255l0.013,0.292l0.131,0.345l0.711,1.211l0.558,1.358   l0.36,0.547l1.01,1.095l0.357,1.172l0.66,0.942l0.153,0.685l-0.076,0.652l-0.609,2.067l0.781,1.04l4.436,1.768l0.487-0.069   l0.481-0.147l0.523-0.084l0.516,0.069l1.571,0.454l1.504-0.032l0.462-0.119l0.465,0.008l0.414,0.257l0.386,0.337l0.395,0.251   l0.151,0.014l0.111,0.011l0.503-0.118l0.255,0.064l0.217,0.215l0.28,0.59l0.182,0.242l0.462,0.193l0.507-0.039l0.519-0.121   l0.5-0.038l1.068,0.289l4.834,2.328l2.033,0.479l1.039,0.09l0.497,0.115l0.519,0.256l0.236,0.264l0.003,0.27l-0.067,0.279   l0.026,0.301l0.487,0.913l0.108,0.29l0.08,0.711l0.003,0.54l0.15,0.443l0.526,0.439l0.526,0.2l2.403,0.361l0.389,0.185l0.813,0.584   l0.43,0.115l2.791-0.278l0.535-0.257l0.414-0.645l0.284-0.651l0.37-0.549l0.478-0.347l0.602-0.046l0.503,0.262l1.549,1.377   l1.332,0.549l0.698,0.105l0.695-0.074l0.268-0.163l0.194-0.232l0.22-0.179l0.351-0.001l0.656,0.127l0.315-0.025l0.325-0.111   l0.411-0.514l0.076-0.58l0.169-0.27l1.848,1.035l2.393,0.551l1.217,0.561l0.433,0.314l0.411,0.134l0.895,0.136l0.341,0.191   l1.007,1.046l4.114,2.972l0.66,0.062l1.73-0.796l0.711,0.188l0.618,0.592l0.596,0.827l0.143,0.513l-0.096,0.862l0.185,0.424   l0.086,0.322l-0.128,0.347l-0.191,0.382l-0.102,0.432l0.073,0.812l0.605,2.674l0.36,0.533l1.931,1.608l0.58,0.649l0.182,0.261   l-0.038,0.188l-0.112,0.131l-0.045,0.106l-0.038,0.26l-0.092,0.319l0.089,0.277l0.507,0.134l0.201,0.208l0.249,0.2l0.261,0.131   l0.255,0.015l0.978-0.388l0.456,0.08l0.516,0.557l0.22,0.603l0.147,0.732l0.214,0.64l0.414,0.327l0.293-0.062l0.217-0.233   l0.36-0.571l0.29-0.154l0.328,0.022l4.439,1.449l2.023,1.716l1.131,0.667l2.53,0.453l1.16,0.503l0.914,1.227l1.157,2.469   l1.424,2.183l3.266,3.992l0.65,1.052l0.895,2.359l0.634,1.118l1.02,0.57l4.901-0.089l4.311-0.077l6.577-0.121l3.655-0.066   l3.161-0.056l1.533,0.27l1.252,0.171l0.252,1.306l0.255,0.591l0.115,0.355l0.051,0.482l-0.045,0.472l-0.121,0.428l-0.166,0.369   l-0.191,0.292l-0.134,0.406l0.051,0.462l0.185,0.575l-0.663,3.086l-0.178,1.878l0.44,1.096l-0.099,0.152l-0.048,0.107l-0.083,0.265   l0.296,0.128l0.245,0.198l0.191,0.231l0.128,0.225l0.124,0.401l0.054,0.399l0.013,0.887l0.102,0.371l0.449,0.747l0.462,2.375   l0.08,1.15l0.051,0.195l-0.061,0.235l-0.325,0.426l-0.153,0.262l-0.096,0.341l-0.054,0.375l-0.013,0.349l-0.118,0.412l-0.261,0.191   l-0.29,0.114l-0.194,0.181l-0.089,0.461l0.108,0.766l-0.019,0.356l-0.376,0.402l-0.628,0.518l-0.357,0.451l0.424,0.191l0.755,0.12   l0.624,0.335l0.539,0.498l0.494,0.608l0.319,0.527l0.274,0.639l0.194,0.673l0.14,1.362l0.112,0.572l0.019,0.617l-0.198,0.853   l0.198,0.279l0.006,0.375l-0.204,0.901l-0.022,0.212l0.022,0.673l-0.092,0.265l-0.421,0.414l-0.121,0.228l0.08,1.014l0.421,0.857   l0.749,1.168l0.226,0.353l0.325,1.552l0.077,0.766l-0.191,0.787l-0.411,0.714l-0.723,0.885l-0.341,0.728l-0.268,1.187l-0.169,0.387   l-0.647,0.874l-0.178,0.418l-0.143,0.776l0.143,1.945l-0.245,0.67l-0.593,0.34l-0.736,0.125l-0.656,0.016l-0.443,0.367   l-0.182,0.804l-0.025,0.806l0.022,0.367l0.172,0.164l0.15,0.363l-0.013,0.363l-0.309,0.164l-0.185,0.17l0.159,0.376l1.096,1.483   l0.086,0.16l-0.06,0.429l-0.083,0.335l0.048,0.31l0.325,0.343l-0.746,1.051l-0.223,0.539l-0.185,1.557l-0.449,1.412l-0.102,0.735   l-0.096,0.36l-0.437,0.707l-0.099,0.472l0.032,0.385l0.137,0.699l0.022,0.326l-0.134,1.328l-0.245,1.238l-0.946,0.318l-0.175,0.621   l-0.599,1.078l-0.975,0.764l-0.558,0.653l-0.038,0.886l0.102,0.969l-0.124,0.912l-0.322,0.428l-0.36,0.087l-0.401-0.033l-0.43,0.07   l-0.414,0.238l-0.201,0.25l-0.156,0.298l-1.399,1.603l-0.602,0.412l-0.768,0.217l-1.689,0.228l-0.768,0.396l-0.453,0.787   l0.328,0.047l0.264,0.149l0.198,0.257l0.265,0.892l0.274,0.261l0.755,0.348l0.373,0.339l0.3,0.434l0.487,0.972l2.288,2.982   l0.35,0.699l-2.297,0.136l-3.132,0.192l-2.18,0.13l0.214,0.795l-0.481,0.527l-1.466,0.782l-1.08,1.126l-0.972,1.265l-0.867,1.755   l-0.185,1.666l0.052,0.497l0.337,3.225l0.883,5.677l-0.067,1.458l-0.953,2.152l-0.248,1.214l0.768,2.704l1.944,1.873l2.489,1.033   l2.415,0.186l2.266-0.122l1.192,0.088l1.036,0.262l0.478,0.28l0.519,0.469l0.274,0.53l-0.033,0.057l-0.238,0.408l-0.456,0.166   l-1.463,0.098l-0.545,0.365l-0.089,0.531l0.108,0.616l0.057,0.636l-0.172,0.738l-0.322,0.421l-1.01,0.632l-0.889,0.792   l-1.173,1.598l-1.501,2.04l-1.676,2.268l-1.491,2.022l-0.188,0.515l0.045,2.909l0.449,2.351l0.883,3.012l1.045,3.555l1.074,3.663   l1.134,3.856l1.252,4.233l1.357,5.065l1.048,3.904l-0.064,2.968l-0.414,2.897l-0.185,0.607l-0.806,1.042l-0.239,0.558l0.105,0.224   l0.258,0.15l0.182,0.205l-0.265,0.8l0.064,0.374l0.153,0.357l0.121,0.389l0.054,0.789l-0.229,2.245l0.067,1.757l0.427,3.357   l-0.392,2.678l0.073,0.848l0.462,1.749l0.363,3.389l1.026,0.432l3.113,0.458l5.165,0.758l0.05,0.007l5.23,0.768l6.045,0.887   l3.558,0.518l1.693,0.247l0.793,0.315l0.605,0.481l1.102,1.407l0.214,0.668l-0.214,1.549l0.013,0.718l0.299,0.736l0.825,1.371   l0.261,0.81l0.051,1.055l0.076,0.374l0.539,1.144l0.376,1.176l0.15,0.716l0.003,0.706l-0.22,0.757l-0.589,1.169l0.134,0.42   l0.118,2.455l-0.185,0.104l-0.077,0.252l-0.045,0.648l0.041,0.039l0.076,0.191l-0.526,0.562l-2.546,3.082l-3.897,4.718   l-3.531,4.274l-2.508,3.012l-3.336,4.001l-1.743,2.092l-2.546,3.047l-4.767,5.696l-0.01,0.009l-2.342,2.749l-1.781,2.088   l2.489,2.956l1.631,1.931l2.014,2.42l2.323,2.782l2.412,2.895l2.536,3.033l0.602,0.495l0.65,0.257l0.542,0.389l0.284,0.896   l-0.057,0.691l-0.367,1.239v0.692l0.293,0.721l0.981,1.084l0.395,0.608l0.096,0.396l0.083,0.881l0.159,0.402l0.328,0.371   l0.28,0.102l0.284,0.036l0.335,0.177l0.315,0.502l0.162,0.601l0.236,0.512l0.529,0.226l0.299,0.241l0.089,0.305l-0.105,0.321   l-0.284,0.303l-0.223,0.228l-0.086,0.216l0.07,0.206l0.239,0.185l0.398,0.182l0.344,0.274l0.271,0.364l1.303,3.004l0.179,0.684   l0.073,0.591l0.159,0.527l0.889,0.996l0.883,1.937l0.895,1.102l3.18,2.896l1.281,1.665l1.957,1.819l0.975,1.129l0.57,0.311   l1.845,0.518l1.471,0.852l0.934,0.294l2.049,0.174l0.985,0.214l2.565,1.151l4.072,0.826l0.856,0.448l0.358,0.421l0.264,0.47   l0.316,0.426l0.5,0.284l0.513,0.167l0.322,0.206l0.214,0.355l0.201,0.609l0.449,0.757l1.947,2.114l0.623,0.395l5.046-1.026   l0.685,0.416l0.15,1.223l-0.452,3.593l-0.494,3.974l0.57,2.414l0.805,3.352l0.188,2.072l0.256,2.814l0.155,1.748l0.296,3.208   l0.166,1.811l-0.188,1.446l-1.62,3.655l0.605,0.735l0.153,0.377l-0.057,0.563l-0.143,0.497l-0.186,0.387l-0.304,0.231l-0.489,0.03   l1.333,1.19l0.464,0.254l0.244-0.007l0.424-0.247l0.217-0.039l0.249,0.082l0.723,0.403l0.973,0.213l0.838-0.048l1.796-0.357   l0.8-0.125l1.616-0.5l0.819-0.041l0.515,0.054l0.397-0.013l1.686-0.538l0.312,0.009l0.384,0.138l0.798,0.737l0.351,0.217   l0.762,0.278l0.28,0.179l0.328,0.36l0.441,0.65l1.05,2.333l-0.531-0.209l-0.674,0.005l-0.605,0.263l-0.338,0.557l-0.115,0.349   L695,500.785l-0.131,0.347l-0.045,0.408l0.156,3.907l0.277,0.647l0.385,0.563l0.258,0.557l-0.099,0.632l-0.462,0.421l-1.252,0.202   l-0.508,0.266l-0.225,0.545l-0.245,5.014l-0.325,1.378l-0.691,0.679l-0.311-0.014l-0.241-0.125l-0.223-0.159l-0.266-0.123   l-0.295-0.027l-0.899,0.201l-1.217-0.034l-1.201-0.185l-2.788-0.07l-2.415-0.059l-2.1-0.054l-0.335,0.098l-0.236,0.314l-0.319,0.59   l-0.207,0.159l-0.229,0.125l-0.266,0.1l-0.953,0.217l-0.263-0.02l-0.344-0.169l-0.331-0.068l-0.264,0.164l-0.244,0.257   l-0.257,0.201l-0.631,0.221l-5.159,0.549l-0.293,0.086l-0.242,0.189l-0.252,0.449l-0.178,0.164l-0.319,0.084l-0.65-0.03l-0.29,0.03   l-0.255,0.114l-0.398,0.292l-0.252,0.144l-0.602,0.24l-0.268,0.169l-0.194,0.26l-0.057,0.303l0.092,0.226l0.118,0.194l0.029,0.214   l-0.319,0.6l-0.969,0.954l-0.22,0.427l0.169,0.79l0.301,0.633l0.027,0.489l-0.669,0.356l-1.157-0.162l-1.37-0.487l-1.16-0.155   l-0.523,0.836l-0.112,0.846l-0.28,0.354l-1.276,0.215l-0.633,0.195l-0.574,0.284l-1.107,0.737l-3.719,1.059l-0.746,0.584   l-0.449,0.925l-0.261,1.065l-0.284,2.089l-0.245,1.847l-0.293,2.135l-0.389,2.853l-0.325,2.392l-0.172,0.604l-0.468,0.572   l-0.535,0.124l-0.596-0.014l-0.653,0.157l-0.65,0.901l0.153,1.259l0.341,1.355l-0.089,1.181l-0.194,0.267l-0.453,0.451   l-0.182,0.329l-0.105,0.491l-0.127,1.996l-0.185,2.925l-0.217,3.398l-0.185,2.875l-0.981,2.843l-0.196-0.498l-0.065-0.571   l-0.537-0.387l-0.095-0.209l-0.148-0.107l-0.301,0.198l-0.088,0.194l-0.045,0.548l-0.095,0.209l0.171,0.161l0.306,0.36l0.173,0.155   l-0.66-0.075l-0.499-0.202l-0.509-0.006l-0.667,0.516l0.728,0.233l0.301,0.169l0.253,0.297l-0.166,0.328l-0.482,0.622l-0.143,0.36   v0.18l-0.035,0.134l-0.243,0.233l-0.444,0.237l-1.681,0.503l0.447,0.312l-0.72,0.964l-5.185-1.786l-1.802-0.387l0.012-0.557   l-0.469-0.846l-4.306-1.545l-5.053-0.846l-4.285-1.015l-2.905-0.361l-0.509-0.28l0.474-0.44l-0.745-1.074l-0.098-0.459   l-0.008-1.915l-0.098-0.3l-1.121-1.115l-0.479-0.283l-0.542-0.068l-0.552,0.054l-2.113,0.654l-0.529,0.292l-0.294,0.465   l-0.482,0.585l-0.248,0.375l-0.008,0.224l0.095,0.217l0.12,0.693l0.151,0.093l0.211,0.022l0.341,0.168l0.266-0.004l0.13,0.088   l0.123,0.216l0.325,0.348l-0.338-0.048l-0.005,0.075l0.893,0.461l-0.087,0.437l-0.358-0.086l-0.99-0.415l-1.255-0.522l-0.625-0.351   l-1.336,0.024l-0.892-0.732l0.289-0.544l0.133-0.133l-0.449-0.206l-0.56-0.082l-1.117,0.054l-0.853,0.167l-0.181,0.067   l-0.276,0.312v0.2l0.078,0.168l0.644,0.442l-0.209,0.634l-0.84-0.007l-0.62-0.412l-0.339-0.112l-1.054-0.156l-0.241-0.18   l-0.339-0.444l-0.489-0.266l-1.132,0.071l-1.569,0.239l-1.653,0.066l-1.141,0.854l-1.298-0.45l-1.29-1.233l-1.387-0.364   l-3.568,0.222l-1.392-0.014L581,558.4l-1.466-1.492l-1.127-0.619l-1.745,0.333l-3.643,0.585l-0.866,0.136l-1.719,0.267   l-1.756,0.833l-0.652,0.147l-0.261-0.051l-0.228-0.224l-0.223-0.142l-0.266,0.061l-0.286,0.133l-0.286,0.075l-0.708-0.037   l-0.61-0.124l-0.519-0.222l-0.401-0.337l-1.425-2.284l-0.758-0.917l-1.204-0.55l-1.074,0.024l-0.286-0.14l-0.191-0.324l-0.11-0.339   l-0.166-0.275l-0.354-0.111h-2.642l-5.6-1.026l-1.919,0.307l-1.653-0.113l-0.577-0.275l0.221-0.547l-0.903,0.058l-0.989,0.196   l-0.417,0.22l-0.71,0.593l-0.467,0.12l-0.213-0.086l-0.105-0.139l-0.151,0.005l-0.361,0.337l-0.246,0.178l-0.316,0.1l-0.271-0.038   l-0.113-0.241l-0.181,0.083l-1.084,0.756l-1.137,0.178l-1.004-0.195l-0.976-0.312l-1.021-0.161l-0.828-0.387l-0.68-0.921   l-0.921-1.959l-0.958-1.164l-1.169-0.279l-1.272,0.331l-1.25,0.643l-1.051,0.857l-0.677,0.422l-0.484-0.004l0.128-1.509l0.12-0.393   l0.083-0.17l0.017-0.125l-0.048-0.267l-0.316-0.783l-0.482-0.42l-0.645-0.17l-0.77-0.028l-0.695,0.072l-1.706,0.393l-0.376-0.071   l-0.642-0.322l-0.359-0.072l-0.354,0.035l-0.612,0.16l-0.316,0.036l-0.768-0.061l-2.103-0.662l0.231-0.21l-4.125-0.273   l-0.452-0.244l-0.221-0.535l-0.176-1.677l-0.748-1.737l-0.384-1.388l-0.258-0.654l-0.306-0.276l-0.05-0.133l-0.688-0.828   l-0.135-0.028l-0.391,0.067l-0.125-0.039l-0.055-0.142l-0.083-0.405l-0.419-1.231l-0.123-0.573l-0.301-0.668l-0.068-0.409   l0.196-0.711l0.958-1.051l0.336-0.688l-0.421-1.097l-2.04-2.253l0.166-0.918l-0.228-0.213l-0.178-1.556l-0.218-0.773l-0.341-0.617   l-0.592-0.576l-0.146-0.258l-0.088-0.305l-0.113-0.787l-0.01-0.318l0.527-4.298l-0.105-1.606l-2.007-8.015l-0.422-0.619   l-1.046-0.914l-0.374-0.546l0.04-0.557l-0.948-0.633l-0.314-0.332l0.449,0.03l0.336-0.134l0.311-0.197l0.376-0.172l-0.261-0.236   l-0.04-0.325l0.108-0.338l0.193-0.283l-0.948,0.411l-0.314,0.062l-0.286-0.072l-0.181-0.162l-0.128-0.163l-0.15-0.076l-0.158-0.118   l-0.163-0.228l-0.213-0.139l-0.602,0.297l-0.181-0.118l-0.078-0.284l0.015-0.352l-0.396,0.09l-0.211-0.182l0.01-0.254l0.291-0.128   l0.151-0.121l0.542-0.587l0.266-0.216v-0.258l-0.903-0.125l-0.738-0.5l-0.499-0.723l-0.196-0.781l-0.359,0.354l-0.394,0.139   l-0.836,0.003l-0.462-0.151l-0.286-0.334l-0.231-0.333l-0.294-0.149l-3.199-0.038l-0.698-0.221l-0.211,0.259l-0.748-0.417   l-0.926-0.192l-1.924-0.102l-0.913-0.181l-1.616-0.646l-0.958-0.142l-1.907,0.109l-0.974,0.251l-0.71,0.491l-0.66,0.319   l-2.005,0.087l-0.815,0.164l-0.251,0.169l-0.514,0.51l-0.103,0.169l-0.063,0.367l-0.166,0.115l-0.238,0.051l-0.266,0.178   l-0.532,0.451l-2.072,1.255l-0.745,0.634l-0.012,0.142l-0.161,0.11l-0.562,0.487l-0.336,0.113l-1.375,0.162l-1.275,0.311   l-0.329,0.035l-1.031-0.035l-0.341,0.07l-0.457,0.327l-0.271,0.073h-1.152l-0.971-0.228l-0.309-0.008l-0.585,0.262l-1.034,0.966   l-0.391,0.212l-0.341,0.266l-1.668,1.86l0.444-0.146l0.191-0.105l0.226-0.221l0.125,0.847l-0.186,1.035l-0.366,0.979l-0.434,0.7   l-1.009,0.897l-1.162,0.589l-1.29,0.263l-1.385-0.077l-2.484-0.861l-1.415-0.188l-1.169,0.556l-0.366,0.658l-0.168,0.618   l-0.299,0.452l-0.748,0.18l-0.602,0.07l-1.355,0.399l-0.459,0.216l-2.015,1.808l-0.341,0.216l-2.966,2.413l-3.35,1.96l-0.211,0.184   l-0.193,0.227l-0.228,0.194l-0.324,0.083l-0.386-0.07l-0.522-0.308l-0.366-0.073l-2.647,0.238l-1.352-0.214l-0.527-0.784   l-0.379-0.999l-0.903-0.851l-1.377-0.271l-2.805,0.109l-1.116-0.544l-0.555-0.887l-0.457-1.103l-0.582-1.056l-0.913-0.744   l-0.655-0.126l-0.617,0.1l-0.595,0.17l-2.349,0.163l-0.647-0.072l-2.118-0.619l-0.532-0.084l-0.331-0.105l-0.592-0.472   l-0.256-0.131l-0.321-0.013l-0.637,0.133l-2.027,0.952l-1.415,0.195l-1.255,0.354l-0.677,0.027l-1.378-0.447l-0.753-0.062   l-0.723,0.391l-0.376-0.132l-1.611-1.399l-2.318-1.37l-2.993-2.265l-0.442-0.546l-0.178-0.675l-0.073-1.645l-0.246-0.688   l-0.524-0.642l-0.986-0.62l-10.485-3.576l-0.675-0.059l-0.662-0.19l-0.411-0.459l-0.326-0.551l-0.386-0.475l-1.837-0.464   l-0.286-0.343l-0.266-0.753l-0.63-0.385l-1.418-0.423l-2.484-2.235l-1.096-0.75l-1.646-0.73l-2.389-1.061l-0.635-0.671l-0.05-0.712   l0.291-0.442l0.514-0.228l0.645-0.064l0.577,0.02l0.667-0.071l0.384-0.345l-0.273-0.811l-0.492-0.426l-1.252-0.479l-0.467-0.388   l-0.243-0.414l-0.494-1.141l-0.211-0.352l-2.316-2.39l-1.014-0.807l-1.127-0.487l-5.495-1.21l-1.162-0.586l-3.638-3.385   l-1.129-0.766l-1.275-0.535l-1.465-0.2l-2.14,0.264l-0.489-0.156l-0.58-0.367l-1.103,0.08l-1.189,0.284l-1.927,0.36l-1.213-0.191   l-2.667-0.561l-0.364-0.092l-0.156-0.226l-0.038-0.332l-0.103-0.261l-0.161-0.169l-0.961-0.139l-1.317-0.398l-0.657-0.713   l-0.71-1.188l-0.737-0.476l-0.239,0.975l-0.633,0.052l-0.604-2.084l-0.606-0.872l-0.474-1.267l-1.162-1.903l-0.529-0.503   l-0.635-0.662l-0.152-0.703l0.68-1.88l-0.048-0.931l-0.632-1.034l-1.074-0.979l-0.381-0.456l-1.086-1.693l-1.016-1.078   l-0.233-0.359l-1.884-4.669l-0.253-1.1l-0.03-4.476l-0.391-1.519l-0.693-1.288l-0.785-0.936l-0.994-0.616l-1.3-0.306l-1.25-0.07   l-0.612-0.165l-0.261-0.375l-0.236-0.696l-1.45-1.84l-0.251-0.665l-0.186-0.971l0.115-0.87l0.637-0.382l0.602,0.211l0.607,0.512   l0.507,0.639l0.301,0.585l0.326-0.284l-0.04-0.257l-0.141-0.293l0.045-0.391l0.221-0.255l0.622-0.558l0.208-0.369l0.105-0.769   l-0.075-0.816l-0.301-0.508l-0.57,0.146l-0.258-1.023l-0.208-0.359l-0.376-0.324l-0.186,0.043l-0.284,0.149l-0.256,0.083   l-0.113-0.158l-0.038-0.597l-0.06-0.294l-0.113-0.191l-0.738-0.126l-2.409,0.145l-0.557,0.102l-0.818,0.486l-0.858-0.105   l-0.68-0.602l-0.273-0.984l-0.058-0.853l0.083-0.431l0.279-0.427l0.218-0.479l0.201-0.587l0.281-0.259l0.467,0.502l0.135-1.442   l0.075-0.246l-0.296-0.099l-0.193-0.212l-0.374-0.678l0.221-0.868l-0.013-1.378l-0.158-1.404l-0.241-0.962l-0.406-0.732   l-0.597-0.824l-0.472-0.228l-0.015,1.058l-0.181-0.391l-0.873-1.323l-1.626-1.345l-0.266-0.459l-0.211-0.609l-0.487-0.684   l-1.009-1.019l-1.822-0.732l-0.281-0.368l-0.193-0.706l-0.449-0.677l-0.833-0.93l-0.823-1.196l-1.4-2.572l-0.743-1.083   l-0.577-0.509l-1.272-0.781l-1.202-1.242l-0.108-0.161l-0.09-0.43l-0.028-0.652l-0.11-0.376l0.484-0.058l0.113-0.209l-0.181-0.256   l-0.417-0.207l0.334-1.206l-0.707-2.018l0.181-0.931l-0.434-0.344l-0.484-0.648l-0.406-0.727l-0.166-0.583l-0.183-0.374   l-0.449-0.315l-0.253-0.099l-0.818-0.318l-1.104-0.131l-1.149,0.174l-1.124,0.396l-9.675,6.196l-1.119,0.472l-0.994-0.217   l-0.868-1.272l-0.075-0.578l-0.013-1.609l-0.241-0.619l-0.223-0.319l-0.078-0.193l-0.118-0.152l-0.331-0.2l-0.301-0.125   l-0.291-0.071l-0.667-0.048l-0.326,0.038l-0.667,0.167l-0.371,0.039l-0.344-0.074l-0.444-0.335l-0.261-0.075l-0.637,0.107   l-1.154,0.49l-0.635,0.131l-0.805-0.058l-0.291-0.308l0.043-1.472l-0.093-0.109l-0.427-0.303l-0.13-0.209l-0.015-0.193l0.015-0.536   l0.048-0.27l0.128-0.229l-0.015-0.227l-0.371-0.247l-0.178,0.607l-0.324,0.597l-0.444,0.423l-0.527,0.076l-0.557-0.349   l-0.263-0.456l-0.331-0.36l-0.534-0.049l-0.715-0.251l-2.04-1.194l-0.422-0.397l-0.203-1.151l-0.542-0.72l-0.808-0.42l-0.991-0.259   l0.329-0.586l0.517-0.14l1.26,0.217l0.657-0.034l1.016-0.348l0.564-0.087l0.627,0.154l1.264,0.669l0.434,0.154l0.685,0.068   l0.517,0.218l0.417,0.377l0.399,0.557l0.181-0.481l0.585-1.041l0.908-1.167l0.176-0.383l0.03-0.611l-0.637,0.13l-0.459-0.3   l-0.286-0.55l-0.241-1.307l-0.364,0.169l-0.479,0.521l-0.482,0.36l0.045-0.456l0.045-0.121l0.12-0.156l-0.256-0.405l-0.263,0.064   l-0.316,0.236l-0.429,0.105l-0.183-0.131l-0.344-0.492l-0.211-0.111l-0.196,0.041l-0.289,0.166l-0.156,0.038l-0.617-0.096   l-0.557-0.163l-0.522-0.032l-0.524,0.291l-1.107-0.16l-0.878,0.552l-0.226,0.732l0.833,0.367l0.978,0.195l0.773,0.492l0.241,0.634   l-0.615,0.629l-0.519-0.009l-1.666-0.228l-0.359,0.105l-1.686,1.575l-0.123,0.16l-0.271,0.429l-0.156,0.446l0.351,0.32   l-0.125,0.256l-0.203,0.285l-0.105,0.189l0.228,0.767l0.539,0.549l0.625,0.477l0.504,0.556l0.258,0.635l0.201,0.804l0.173,1.605   l-0.06,0.448l-0.273,0.732l-0.088,0.403l0.018,0.378l0.176,0.679l0.018,0.402l-0.193,0.703l-0.409,0.635l-0.557,0.453l-0.632,0.177   l-2.093-0.248l-0.539,0.248l-0.597-0.281l-2.158,0.016l-1.31-0.723l-0.499-0.113l-0.083,0.617l0.15,0.426l0.414,0.671l0.083,0.491   l-0.09,0.351l-0.226,0.307l-0.279,0.251l-0.263,0.175l-0.708,0.214l-2.263-0.214v-0.243l-0.166,0.216l-0.033,0.088l-0.217-0.099   l-0.954-0.272l-0.459-0.28l-0.427-0.338l-0.201-0.204l-0.143-0.234l-0.274-0.694l-0.064-0.464l-0.562-1.771l-0.084-0.061   l-0.175-0.366l-0.615-0.698l-0.386-0.827l-0.061-0.247l0.067-0.396l0.242-0.297l0.296-0.267l0.225-0.308l0.08-0.38l-0.059-0.385   l-0.158-0.363l-0.202-0.302l-1.198-1.099l-0.991-1.131l-0.626-1.048l-0.288-0.247l-0.373-0.127l-0.389-0.018l-1.128,0.19   l-0.373,0.015l-0.363-0.055l-0.342-0.153l-0.247-0.262l-0.135-0.341l-0.253-1.573l-0.277-0.78l-0.395-0.702l-0.516-0.558   l-0.319-0.2l-0.344-0.118l-3.263-0.468l-0.048-1.098l0.105-17.277l-0.099-0.461l-0.33-0.201l-10.131-0.002l0.108-8.708l0.077-6.184   l4.698-12.811l0.183-0.821l-0.086-0.771l-0.422-0.649l-1.216-0.917l-0.495-0.553l-0.11-0.274l-0.159-0.636l-0.172-0.328   l-0.236-0.22l-0.558-0.366l-0.21-0.291l-1.103-1.983l-0.145-0.641v-0.006l-0.304-0.644l-1.077-0.528l-0.473-0.543l-0.703-1.585   l-0.455-0.657l-0.067-0.097l-0.596-0.248l-0.465-0.058l-0.274-0.312l-0.249-0.372l-0.397-0.252l-0.483-0.139l-0.21-0.164   l-0.029-0.288l0.064-0.508l0.121-0.395l0.183-0.32l0.164-0.354l0.048-0.508l-0.161-0.472l-0.601-0.46l-0.166-0.463l-0.3-0.148   l-0.197-0.208l-0.545-0.758l-0.116-0.203l-0.145-0.201l-0.919-0.879l-0.142-0.209l-0.205-0.493l0.005-0.181l0.124-0.139   l0.271-0.677l0.172-0.202l0.112-0.24l-0.048-0.422l-0.172-0.267l-0.824-0.631l-0.518-0.664l-0.346-0.564l-0.394-0.457l-0.66-0.348   l-1.746-0.602l-0.433-0.028l-1.412,0.783l-0.545,0.207l-1.086,0.117l-0.972-0.214l-0.938-0.494l-0.985-0.725l-0.002-0.003h-0.006   l-9.282-8.115l-1.278-1.459l-2.02-1.223l-1.416-1.149l-0.117-0.068l-2.876-1.669l-0.863-0.873l-3.073-1.468l-3.274-1.019   l-3.634,0.409l-1.805-0.219l-0.656-1.471v-0.006l0.379-0.449l0.513-0.417l0.457-0.476l0.206-0.624l-0.177-0.504l-0.445-0.398   l-0.58-0.247l-1.354-0.156l-0.43-0.37l0.03-0.448l0.62-0.347l0.679-0.061l0.516,0.04l0.5-0.1l0.65-0.493l0.832-0.828l0.424-0.519   l0.22-0.473l-0.019-0.333l-0.357-0.227l-0.137-0.343l0.021-0.302l0.186-0.707l-0.006-0.379l-0.274-0.622l-0.43-0.438l-0.981-0.797   l-1.227-1.74l-1.032-1l-0.159-0.538l-0.018-0.616l-0.094-0.75l-0.249-0.698l-0.35-0.638l-1.036-1.299l-0.094-0.073l-0.097-0.055   l-0.115-0.065l-0.038-0.021l-0.158-0.03l-0.155,0.03l-0.153,0.086l-0.57,0.545l-0.934,0.118l-0.915-0.215l-0.529-0.453l0.481-0.636   l1.463-0.896l0.379-0.557l-0.217-0.818l-0.653-0.45l-0.545-0.557l0.121-1.137l-0.666,0.167l-1.498,0.023l-0.562,0.24l-0.897,0.867   l-0.507,0.339l-0.538,0.135l-0.21-0.258l0.008-1.316l-0.104-0.274l-0.108-0.286l-1.453-1.047l-0.468-0.469l-0.421-0.601   l-0.309-0.602l-0.214-0.655l-0.132-0.75l-0.221-0.616l-0.405-0.447l-0.475-0.4l-0.414-0.461l-2.743-5.003l-0.057-0.052   l-0.067-0.031l-0.076-0.012l-0.911,0.141l-0.801-0.052l-0.699-0.397l-0.637-0.896l0.66-0.3l0.299-0.206l0.255-0.264h0.006v-0.004   l0.47-1.033l0.26-0.95l0.347-0.826l0.752-0.662l0.452-0.486l1.246-1.025l0.314-0.421v-0.415l-0.177-0.321l-0.226-0.323   l-0.148-0.425l0.062-0.345l0.433-0.705l0.153-0.336l0.411-1.794l0.062-0.921l-0.169-0.847l-0.473-0.733l-0.637-0.407l-0.688,0.004   l-0.615,0.495l-0.57-0.423l-0.395-0.808l-0.953-3.074l0.299-0.492l1.619-0.364l0.223-0.205l0.201-0.235l0.175-0.271l0.147-0.297   l0.043-1.108l-0.257-1.514l0.127-1.028l1.201,0.354l1.058,0.559l0.953,0.23l2.119,0.168l0.679,0.24l0.183-0.039l0.126-0.242   l0.083-0.399l0.008-0.4l-0.091-0.244l-0.344-0.486l-0.099-0.635l-0.014-0.705l-0.097-0.709l-0.127-0.261l-0.158-0.184l-0.151-0.227   l-0.096-0.399l-0.108-0.306l-0.226-0.271l-0.277-0.217l-0.255-0.145l-0.459-0.523l0.236-0.605l0.857-0.987l0.096-0.431   l-0.072-0.758l0.097-0.45l0.303-0.427l0.39-0.163l0.878-0.093l0.854-0.596l0.156-0.916l-0.061-0.954l0.204-0.723l0.714-0.035   l0.553,0.294l0.365,0.195l0.832,0.29l0.468-0.626l0.236-0.921l0.261-0.686l0.081-0.708l-0.285-0.974v-0.006l-0.089-0.514   l0.006-0.498l0.15-0.434l0.327-0.325l0.202-0.068l0.433-0.043l0.185-0.095l0.064-0.177l-0.086-0.463l0.032-0.177l0.425-0.705   l0.215-0.088l0.456,0.158l0.65,0.423l0.319,0.132l0.397-0.031l0.924,0.401l0.489-0.126l0.452-0.424l0.827-0.5l0.311-0.033   l0.551,0.146l0.784-0.261l0.382-0.076l0.331-0.179l0.245-0.456l-0.637-0.746l0.414-1.064l0.667-1.144l0.116-0.992l-0.465-0.392   l-1.195,0.012l-0.43-0.3l-0.083-0.595l0.274-0.48l0.382-0.458l0.161-0.381l0.065-0.154l-0.223-1.113l-0.736-0.855l-1.705-1.528   l-1.972-3.169l-0.401-1.092l-0.013-0.35l0.077-0.305l0.163-0.249l0.244-0.188l0.123-0.151l0.041-0.155l-0.045-0.161l-0.119-0.159   l-0.346-0.721l-0.268-0.766l0.14-0.039h0.148l0.942,0.288l0.086-0.523l-0.299-1.458l0.002-0.625l0.108-0.665l0.244-0.602   l0.392-0.436l0.634-0.222l2.157,0.067l0.634-0.147l1.545-0.824l1.211,0.069l0.644-0.075l0.481-0.463l0.421-0.622l0.937-0.599   l0.489-0.442l0.36-0.621l0.062-0.595l-0.229-0.509l-0.513-0.367l-0.666-0.067l-0.551,0.273l-0.527,0.369l-0.585,0.216l-1.31,0.287   l-0.661,0.025l-0.621-0.267l-0.252-0.208l-0.188-0.21l-0.132-0.263l-0.153-0.776l-0.148-0.136l-0.225-0.037l-0.95-0.364l-0.51-0.01   l-0.497,0.189l-0.596,0.342l-0.618,0.203l-1.963-0.09l-0.991,0.344l-0.319-0.033l-0.317-0.102l-0.314-0.014l-0.747,0.643   l-0.596,0.297l-0.634,0.045l-0.502-0.344l-0.344-0.071l-1.163,0.352l-0.554-0.157l-0.379-0.501l-0.787-1.962l-1.429-2.03   l-0.919-0.846l-0.838-0.159l-0.398-0.252l-1.139-1.057l-1.189-0.437l-0.683-0.251l-0.806,0.014l-1.023,0.51l-0.548,0.154   l-0.006,0.006l-0.003,0.002l-0.01,0.002l-0.609,0.419l-0.685,0.232l-0.663-0.092l-0.542-0.559l-0.006-0.002l-0.003-0.004v-0.006   l-0.201-0.614l0.182-0.786l0.379-0.784l0.379-0.605l0.127-0.765l-0.392-0.771l-0.956-1.247l-0.156-0.803l0.076-1.763l-0.143-0.733   l-0.449-0.446l-0.574-0.45l-0.175-0.46l0.746-0.484l-0.578-0.741l-0.214-0.666l-0.078-1.649l-0.15-0.886l-0.331-0.96l-0.542-0.687   l-0.781-0.057l-1.727,0.691l-0.899,0.071l-0.835-0.394l-0.354-0.406l-0.115-0.348l-0.051-0.378l-0.148-0.497l-0.247-0.368   l-0.265-0.256l-0.198-0.315l-0.029-0.543l-0.395-0.43l-0.488-0.421l-0.111-0.096l-0.448-0.577l0.062-0.611l0.137-0.093l0.382-0.151   l0.092-0.073l0.029-0.809l0.33-1.312l0.599-1.39l0.049-0.719l-0.328-0.828l-0.749-1.383l-0.456-0.62l-0.516-0.282l-0.401-0.012   l-0.36-0.115l-0.319-0.229l-0.284-0.34l-0.385-0.338l-0.446-0.076l-0.956,0.054l-0.803-0.183l-0.615-0.412l-0.242-0.671   l0.331-0.951l1.094-1.346l0.425-0.689l0.166-0.928l-0.146-0.865l-0.284-0.629l-0.175-0.683l0.172-1.029l0.338-0.427l0.051-0.419   l-0.204-0.347l-0.672-0.355l-0.35-0.383l-0.215-0.122l-0.298,0.014l-0.609,0.19l-0.287-0.062l-0.142-0.192l-0.156-0.589   l-0.119-0.251l-0.223-0.164l-0.231-0.072l-0.218-0.101l-0.182-0.259l-0.245-0.683l-0.005-0.38l0.419-1.113l0.191-0.748   l-0.191-0.654l-0.29-0.66l-0.099-0.779l0.215-0.693l0.384-0.327l0.425-0.249l0.362-0.472l0.096-1.254l-0.698-0.818l-1.775-1.143   l-0.258-0.524l-0.182-0.549l-0.28-0.353l-1.122,0.17l-0.29-0.325l-0.433-1.109l-0.475-0.361l-1.147-0.107l-0.414-0.238   l-0.191-0.636l0.411-1.157l-0.124-0.656v-0.006l-0.164-0.793l0.059-0.964l0.201-0.961l0.28-0.782l-0.121-0.665l-0.695-0.528   l-0.62-0.703l0.135-1.18l0.255-0.342l1.067-0.864l0.315-0.508l-0.07-0.365l-1.133-1.389l-0.77-0.67l-0.862-0.396l-0.84,0.097   l-0.392,0.224l-0.494,0.175l-0.433-0.045l-0.226-0.442l0.021-0.234l0.123-0.623l-0.022-0.196l-0.233-0.182l-0.201,0.042   l-0.212,0.077l-0.237-0.079l-0.344-0.443l-0.175-0.481l-0.115-0.452l-0.182-0.357l-0.333-0.238l-1.107-0.537l-0.37-0.113   l-1.998,0.235l-1.074-0.175l-0.54-0.854l0.09-0.297l0.042-0.139l0.319-0.401l0.271-0.419l-0.025-0.496l-0.155-0.551l0.056-0.498   l0.188-0.476l0.261-0.502l0.003-0.006l0.285-0.563l0.744-0.846l0.271-0.6l0.255-0.822l0.287-0.498l0.405-0.322l0.594-0.289   l0.171-0.245l-0.25-0.737l0.043-0.341l0.255-0.222l0.548-0.233l0.229-0.308l0.201-0.573l0.19-0.77l0.107-0.762l-0.132-1.882   l0.868-0.988l1.115-0.875l0.691-1.001l-0.013-0.626l-0.236-0.618l-0.379-0.531l-0.437-0.373l-0.481-0.187l-0.392,0.083   l-1.016,0.592l-1.541-0.284l-0.454-0.211l-0.282-0.199l-0.091-0.343l0.102-0.645l0.019-0.363l-0.096-0.998l0.003-0.464l0.39-1.587   l0.037-0.676l-0.284-2.004l0.143-1.561l0.006-0.817l-0.22-0.654l-0.226-0.257l-0.236-0.157l-0.558-0.18l-0.386-0.199l0.096-0.242   l0.268-0.271l0.135-0.288l-0.155-0.712l-0.153-0.472l-0.057-0.498l0.124-0.79l0.836-2.863l-0.148-1.162l-1.635-0.787l-0.5-0.484   l-0.421-0.598l-0.296-0.886l-0.134-0.3l-0.102-0.304l0.016-0.33l-0.022-0.36l-0.233-0.247l-0.28-0.217l-0.186-0.284l-0.129-0.612   l-0.096-0.268l-0.169-0.276v-0.007l0.437-0.738l0.499-0.416l0.296-0.472l-0.285-1.565l0.156-0.63l0.612-1.204l-0.252-0.978   l-1.189-0.847l-1.373-0.723l-0.797-0.614l-0.035-0.343l0.214-0.722l-0.026-0.352l-0.373-0.789l-0.105-0.34l-0.013-0.356   l0.076-0.263l0.006-0.296l-0.363-0.788l-0.182-0.846l-0.134-0.378l-0.006-0.016l-0.809-0.96l-0.188-0.482l0.344-0.482l0.628-0.394   l0.462-0.169l0.481-0.012l0.685,0.084l0.711-0.078l1.673-0.443l0.738,0.083l2.13,1.062l0.784,0.066l0.679-0.163l1.596-0.73   l0.593-0.435l0.519-0.794l0.013-0.722l-0.108-0.753l0.153-0.892l0.005-0.002l0.308-0.473l0.019-0.477l-0.105-0.514l-0.061-0.564   l0.061-0.657l0.14-0.537l1.021-2.062l0.183-0.515l0.019-0.152l0.06-0.479l-0.159-1.308l0.137-0.453l3.276-2.704L120.154,30   l0.475,0.336l0.832,1.264l0.422,0.485l1.843,0.862l0.599,0.509L126.831,35.275z M426.488,527.227l0.211,0.098l0.176,0.14   l0.148,0.185l0.113,0.238l-0.647,1.323l-0.166,0.034l-0.361-0.112l-0.361-0.189l-0.166-0.201l-0.04-0.452l-0.073-0.344l-0.013-0.32   l0.125-0.399l0.191-0.266l0.261-0.133l0.296,0.063L426.488,527.227z M411.396,521.073l-2.276-0.129l-0.236-0.014l-0.996-0.481   l-0.625-1.022l0.309-0.482l0.454-0.342l0.552-0.171l0.597,0.034l0.519,0.18l1.144,0.115l0.439,0.175l0.058,0.15l0.028,0.073v0.004   l-0.013,0.313l0.005,0.038l0.028,0.24l0.005,0.003l0.218,0.121l0.13,0.118l0.078,0.069l0.028,0.198l0.033,0.215l-0.07,0.206   l-0.065,0.206L411.396,521.073z M389.206,510.326l-0.557,0.32l-0.595,0.001l-1.756-0.306l-0.542-0.23l-0.065-0.042l-0.411-0.267   l-0.966-0.808l-0.279-0.322l0.121-0.149l0.221-0.052l0.246-0.091l0.296-0.018l2.602,0.803l2.311,0.172l0.718,0.283l0.404,0.37   l0.253,0.23l-0.447,0.121l-1.184-0.101L389.206,510.326z M481.857,509.137l0.141-0.921l0.442-0.631l0.783-0.361l1.159-0.113   l0.156,1.065l-0.926,0.814l-1.177,0.382L481.857,509.137z M478.47,503.308l0.607,0.146l0.788,0.348l0.492,0.379l0.181,0.137   l0.246,0.646l-0.497,0.283l-0.497,0.283l-1.902,0.492l-0.682,0.613l-0.7,1.549l-0.354,0.599l-1.275,1.306l-0.201,0.461   l-0.263,0.283l-1.172,0.594l-0.266,0.315l-0.264,0.17l-1.518,1.468l-0.906,0.528l-0.71-0.302l-0.672-0.684l-0.788-0.624   l-2.06,1.065l-0.572,0.489l-0.572,0.329l-0.66-0.006l-1.402-0.206l-0.625,0.139l-0.657,0.309l-1.661,1.195l-1.724,0.734   l-1.046,0.772l-0.542,0.289l-1.904,0.216l-1.352,0.372l-0.572,0.363l-0.284,0.109h-0.003l-0.09-0.017l-0.168-0.035l-0.349-0.116   h-0.314l-0.133,0.295l-0.141,0.236l-0.336,0.184l-0.376,0.116l-0.284,0.043h-0.003l-0.13-0.091l-0.11-0.076l-0.158-0.396   l-0.148-0.851l0.208-0.608l0.058-0.39l-0.161-0.18l-0.316-1.069l0.336-0.359l1.455,0.514l0.336-0.154l0.191,0.055l0.09,0.027   l0.003-0.001l1.628-0.915l4.12-1.344l0.6-0.07l0.389-0.152l0.11-0.044l0.005-0.001l1.425-0.877l0.615-0.5l2.017-0.784l0.316-0.022   l0.64,0.052l0.309-0.03l0.226-0.097l0.319-0.27l0.299-0.105l-0.093-0.232l-0.135-0.237l0.472-0.54l0.11-0.649l-0.143-1.544   l-0.241-0.591l-0.527-0.505l-0.514-0.401l-0.211-0.276l0.783-0.454l4.308,1.634l1.167-0.276l3.252-2.105l4.075-0.924   L478.47,503.308z M486.504,499.741l0.326,0.217l0.356,0.138l0.293,0.237l0.015,0.068l0.103,0.437l-0.116,0.439l-0.291,0.324   l-0.221,0.11l-0.196,0.097l-0.482,0.083l-0.973-0.378l0.07-0.872l0.572-0.788L486.504,499.741z M296.364,423.995l0.556,0.251   l0.333,0.195l-0.14,0.611l0.09,0.613L297,426.197l-0.305,0.048l-0.305-0.278l-0.305-0.778l-0.194-0.695l-0.222-0.417l0.362-0.222   L296.364,423.995z M427.11,540.383l0.156,0.301l0.05,0.612l-0.309,0.233l-0.419-0.1l-0.492-0.229l-0.121-0.381l0.402-0.218   L427.11,540.383z M468.662,514.488l0.238,0.365l0.06,0.814l-0.442,0.741l-0.627,0.37l-0.497-0.276l0.07-0.796l0.396-0.771   l0.499-0.387L468.662,514.488z M399.142,514.165l0.364,0.171l0.246,0.517l-0.399,0.403l-0.542-0.074l-0.539-0.275l-0.306-0.424   l0.246-0.376l0.615-0.021L399.142,514.165z M442.591,541.779l0.038,0.332l0.138,0.393l-0.243,0.213l-0.253,0.022l-0.173,0.106   l-0.296-0.282l-0.143,0.112l0.018-0.211l-0.103-0.209l-0.11-0.335l0.444-0.244l0.532-0.142L442.591,541.779z"},{"name":"China","path":"M137.474,392.027l0.083-0.206l-0.079-0.185l-0.229-0.371l-0.365-0.196l-0.869-0.241l-0.966-0.426l-0.164-0.137   l-0.138-0.188l-0.222-0.425l-0.139-0.182l-0.321-0.258l-1.114-0.631l-0.239-0.085l-0.173,0.015l-0.168,0.054l-0.226,0.032   l-0.191-0.049l-0.372-0.238l-0.571-0.228l-1.122-0.64l-0.827-0.243l-0.414-0.024l-0.412,0.096l0.097-0.23l0.107-0.189l0.062-0.197   l-0.039-0.257l-0.105-0.159l-0.151-0.156l-0.117-0.158l-0.003-0.165l0.071-0.063l0.103-0.012l0.11,0.005l0.092-0.014l0.081-0.071   l0.276-0.511l-0.077-0.12l-0.323-0.184l-0.303-0.49l-0.138-0.104l-0.186-0.001l-0.356,0.199l-0.193,0.048l-0.336-0.135   l-0.205-0.289l-0.179-0.318l-0.261-0.217l-0.8-0.333l-0.176-0.114l-0.054-0.035l-0.13-0.084l-0.257-0.299l-0.199-0.379   l-0.142-0.171l-0.191-0.093l-0.825-0.207l-0.244-0.027l-0.572,0.156l-0.456,0.022l-0.202,0.043l-0.462,0.294l-0.132,0.025   l-0.135-0.054l-0.246-0.065l-0.165-0.081l-0.192-0.167l-0.171-0.198l-0.106-0.175l-0.015-0.076l-0.029-0.069l-0.04-0.061   l-0.049-0.053l-0.167-0.094l-0.173-0.035l-0.177,0.008l-0.185,0.037l-0.145-0.043l-0.075-0.173l-0.075-0.433l-0.065-0.117   l-0.116-0.208l-0.273-0.15l-0.308-0.092l-0.288-0.156l-0.152-0.186l-0.081-0.212l-0.032-0.234l-0.005-0.253l-0.065-0.282   l-0.158-0.098l-0.194-0.049l-0.173-0.136l-0.047-0.133l0.016-0.116l0.029-0.11l-0.006-0.114l-0.064-0.099l-0.174-0.138   l-0.043-0.106l0.008-0.143l0.03-0.125l0.009-0.123l-0.053-0.138l-0.08-0.056l-0.214-0.025l-0.089-0.04l-0.118-0.196l-0.047-0.206   l-0.07-0.184l-0.38-0.233l-0.315-0.278l-0.164-0.086l-0.551,0.108l-0.215,0.513l-0.077,0.578l-0.143,0.308l-0.188-0.068   l-0.281-0.294l-0.188-0.094l-0.191,0.408l-0.124,0.187l-0.129,0.133l-0.017,0.017l-0.174,0.09l-0.151,0.008l-0.302-0.037   l-0.294,0.074l-0.131-0.002l-0.354-0.181l-0.091-0.081l-0.048-0.127l-0.027-0.229l0.079-0.511l0.165-0.51l0.028-0.439l-0.335-0.3   l-0.426-0.27l0.047-0.291l1.103-0.914l0.193-0.215l0.055-0.164l-0.267-0.351l-0.421-0.436l-0.207,0.008l-0.096-0.027l-0.083-0.07   l-0.063-0.097l-0.09-0.234l-0.14-0.171l-0.055-0.1l-0.007-0.131l0.029-0.127l0.005-0.116l-0.28-0.317l0.036-0.219l0.297-0.462   l0.071-0.255l0.085-0.563l0.068-0.265l0.247-0.566l0.029-0.252l-0.122-0.273l-0.132-0.132l-0.496-0.296l-0.329-0.263l-1.103-1.522   l-0.191-0.414l-0.248-0.351l-0.414-0.225l-0.085-0.028l-0.005-0.002l-0.12-0.04l-0.019-0.167l0.057-0.241l0.015-0.29l-0.27-1.226   l-0.033-0.063l-0.016-0.078l0.021-0.166l0.057-0.118l0.076-0.077l0.046-0.082l-0.039-0.134l-0.448-0.669l-0.319-0.69l0.043-0.262   l0.264-0.145l0.446-0.106l1.611-0.049l0.456-0.109l0.199-0.107l0.194-0.175l0.335-0.412l0.213-0.106l0.267,0.103l0.16,0.229   l-0.021,0.227l-0.096,0.231l-0.064,0.242l0.022,0.2l0.201,0.698l0.189,0.431l0.953,0.821l0.293,0.324l0.337,0.289l0.364,0.112   l0.371-0.204l0.154-0.033l0.282-0.133l0.152-0.042l0.13,0.015l0.302,0.079l0.102-0.01l0.186-0.265l0.126-0.795l0.114-0.302   l0.226-0.176l0.323-0.148l0.337-0.105l0.273-0.049l0.23,0.049l0.233,0.113l0.225,0.076l0.207-0.059l0.481-0.552l1.109-0.897   l0.472-0.578l0.219-0.441l0.105-0.484l-0.057-0.44l-0.267-0.309l-0.313-0.348l-0.112-0.39l-0.077-0.415l-0.218-0.42l-0.662-0.594   l-0.227-0.354l-0.007-0.505l0.07-0.256l0.05-0.711l0.081-0.256l0.247-0.369l0.098-0.205l-0.036-0.5l-0.383-0.203l-0.91-0.036   l-0.394-0.138l-0.86-0.47l-0.356-0.027l-0.394,0.18l-0.096-0.075l-0.02-0.319l-0.049-0.256l-0.143-0.178l-0.192-0.123l-0.194-0.092   l-0.419-0.126l-0.179-0.103l-0.629-1.039l-0.02-0.019l-1.038-0.996l-0.264-0.45l-0.221-0.795l0.144-2.599l-0.077-0.879   l-0.192-0.871l-0.557-1.665l0.102-1.159l0.86-0.598l1.1-0.481l0.826-0.808l0.105-0.311l0.034-0.318l-0.035-0.318l-0.104-0.313   l-0.218-0.422l-0.065-0.126l-0.329-0.317l-0.411-0.185l-0.528-0.153l-0.425-0.249l-0.578-0.772l-0.975-0.757l-0.648-0.276   l-2.58-0.443l-0.5-0.216l-0.445-0.417l-0.258-0.471l-0.7-2.609l-0.101-0.241l-0.456-0.595l-0.159-0.474l-0.101-1.047l-0.104-0.504   l-1.06-1.921l-0.399-1.035l0.098-1.09l0.319-0.703l0.199-0.761l-0.129-0.539l-0.661-0.035l-0.317,0.168l-0.511,0.571l-0.335,0.138   l-0.295-0.077l-0.258-0.216l-0.214-0.294l-0.17-0.307l-0.303-0.05l-0.15,0.012l-0.146,0.053l-0.348,0.263l-0.307,0.177   l-0.329,0.064l-1.596-0.269l-0.084-0.014l-0.405,0.018l-0.721,0.108l-0.329-0.036l-0.359-0.195l-0.528-0.442l-0.275-0.142   l-0.343-0.037l-0.829,0.105l-0.411-0.031l-0.407-0.175l-0.147-0.137l-0.24-0.323l-0.146-0.126l-0.216-0.068l-0.243,0.006   l-0.466,0.083l-0.46-0.014l-0.235-0.049l-0.211-0.09l-0.18-0.154l-0.267-0.389l-0.158-0.177l-0.208-0.091l-0.473,0.029   l-0.062-0.005l-0.158-0.013l-0.204-0.111l-0.142-0.161l-0.27-0.382l-0.366-0.275l-0.82-0.306l-0.379-0.217l-0.222-0.457l0.16-1.137   l-0.111-0.453L87,314.914l-0.419,0.433l-0.268,0.087l-0.255,0.007l-0.125,0.021l-0.123,0.039l-0.109,0.087l-0.137,0.244   l-0.082,0.082l-0.215,0.039l-0.2-0.038l-0.199-0.001l-0.418,0.298l-0.174,0.002l-0.181-0.066l-0.228-0.05l-0.263,0.033   l-0.536,0.146l-0.269-0.017l-0.316-0.285l-0.117-0.495L82.32,314.9l-0.103-0.535l-0.28-0.508l-0.323-0.189l-0.873-0.056   l-0.354-0.163l-0.347-0.341l-0.253-0.446l-0.064-0.475l0.081-0.227l0.149-0.144l0.562-0.364l0.083-0.072l0.057-0.109l0.009-0.154   l-0.094-0.251l0.011-0.149l0.151-0.184l0.206-0.094l0.145-0.116l-0.028-0.249l-0.116-0.187l-0.284-0.358l-0.088-0.21l-0.002-0.56   l0.213-1.116l-0.072-0.341l-0.048-0.23l-0.003-0.012l-1.152-2.21l-0.283-0.357l-0.67-0.608l-0.7-0.499l-0.894-0.436l-0.897-0.18   l-0.708,0.27l-0.069,0.136l-0.034,0.146l-0.071,0.098l-0.687-0.031l-0.242-0.345l-0.081-0.529l-0.022-0.581l-0.078-0.543   l-0.187-0.425l-0.302-0.304l-0.428-0.184l-1.34-0.285l-0.384-0.217l-0.322-0.29l-0.161-0.093l-0.208-0.041l-0.97,0.137   l-0.426,0.003l-0.391,0.103l-0.197,0.087l-0.164,0.118l-0.11,0.179l-0.099,0.41l-0.07,0.135l-0.152,0.061l-0.063-0.134l-0.067-0.43   l-0.086-0.171l-0.325-0.498H67.61l-0.359-0.298l-0.831-0.018l-0.305-0.276l-0.161-0.224l-0.175-0.04l-0.412,0.166l-0.728,0.185   l-0.22,0.114l-0.262-0.122l-0.152-0.238l-0.132-0.276l-0.198-0.236l-0.704-0.351l-0.36-0.266l-0.186-0.301l0.025-0.274l0.158-0.071   l0.431,0.057l0.241-0.035l0.171-0.096l0.124-0.179l0.102-0.286l0.12-0.226l0.145-0.081l0.364-0.008l0.495-0.141l0.159-0.017   l0.074,0.037l0.142,0.15l0.068,0.026l0.094-0.035l0.045-0.05l0.032-0.057l0.147-0.143l0.037-0.092l0.053-0.068l0.226-0.024   l0.061-0.034l0.256-0.236l0.118-0.15l0.137-0.099l0.18,0.023l0.075,0.11l0.445,0.977l0.122,0.082l0.216-0.021l0.896-0.223   l0.23-0.112l0.125-0.23l0.104-0.246l0.211-0.125l0.27-0.043l1.053-0.396l0.098-0.172l0.028-0.527l0.138-0.245l0.266-0.133   l0.553-0.183l-0.358-0.254l-0.323-0.315l-0.572-0.759l-0.199-0.179l-1.026-0.602l-0.342-0.316l-0.262-0.407l-0.11-0.503   l0.044-0.272l0.124-0.202l0.157-0.181l0.144-0.216l0.037-0.118l0.021-0.127l0.035-0.131l0.076-0.132l0.179-0.242l0.083-0.148   l0.039-0.134l-0.042-0.258l-0.138-0.141l-0.576-0.319l-0.082-0.078l-0.057-0.108l-0.033-0.191l0.047-0.073l0.082-0.046l0.193-0.311   l0.023-0.102l-0.096-0.087l-0.128-0.076l-0.036-0.078l0.005-0.094l-0.027-0.383l0.046-0.906l-0.14-0.397l-0.798-0.453l-0.218-0.406   l-0.22-1.653l-0.002-1.373l0.042-0.261l0.108-0.232l0.48-0.542l0.131-0.234l0.067-0.265l0.002-0.281l-0.082-0.412l-0.015-0.136   l-0.033-0.122l-0.076-0.087l-0.2-0.116l-0.082-0.075l-0.102-0.159l-0.001-0.003l-0.179-0.241l-0.181-0.135l-0.207-0.045   l-0.26,0.022l-0.256-0.035l-0.191-0.158l-0.173-0.204l-0.206-0.175l-1.919-0.738l-1.612-0.796l-0.235-0.032l-0.789,0.276   l-0.253,0.007l-0.22-0.038l-0.697-0.245l-0.193-0.004l-0.161,0.104l-0.159,0.24l-0.027,0.117l0.002,0.13l-0.016,0.12l-0.08,0.093   l-0.447,0.153l-0.087,0.072l0.009,0.279l0.144,0.24l0.09,0.226l-0.15,0.24l-0.188,0.046l-1.087-0.035l-0.177-0.107l-0.342-0.318   l-0.197-0.112l-0.41-0.162l-0.194-0.125l-0.215-0.235l-0.099-0.228l-0.108-0.603l-0.077-0.209l-0.406-0.682l-0.042-0.225   l0.071-0.638l-0.035-0.281l-0.124-0.205l-0.33-0.371l-0.137-0.216l-0.033-0.262l0.092-0.263l0.158-0.232l0.161-0.168l0.257-0.121   l0.543-0.002l0.246-0.081l0.163-0.179l0.058-0.221l-0.034-0.244l-0.115-0.246l-0.163-0.112l-0.373-0.415l-0.672-0.518l-0.126-0.189   l-0.071-0.234l-0.101-0.5l-0.104-0.203l-0.48-0.474l-0.267-0.471l-0.063-0.416l0.089-0.434l0.353-1.021l0.028-0.234l-0.014-0.3   l-0.12-0.836l0.008-0.286l2.129-0.291l0.199-0.11l0.11-0.206l0.126-0.507l0.128-0.331l0.143-0.212l0.184-0.152l0.253-0.156   l0.059-0.158l-0.255-0.788l-0.053-0.632l-0.069-0.308l-0.16-0.258l-0.22-0.136l-0.191-0.047l-0.153-0.097l-0.11-0.291l-0.014-0.285   l0.05-0.289l0.102-0.266l0.137-0.212l0.326-0.277l0.088-0.12l0.054-0.17l0.088-0.614l0.163-0.291l0.224-0.228l0.189-0.247   l0.064-0.349l0.027-0.215l0.065-0.195l0.096-0.175l0.117-0.153l0.309-0.255l0.742-0.103l0.359-0.164l0.358-0.244l0.393-0.164   l0.403-0.051l0.393,0.088l0.39,0.149l0.346,0.056l0.35-0.054l0.408-0.179l1.209-0.986l1.005-1.105l0.377-0.285l0.441-0.235   l0.19-0.142l0.581-0.59l0.214-0.093l0.249,0.015l0.954,0.246l0.353-0.093l-0.094-0.485l-0.138-0.197l-0.532-0.498l-0.082-0.226   l0.082-0.297l0.14-0.313l0.091-0.273l0.01-0.053l0.046-0.153l0.139-0.211l0.035-0.053l0.239-0.023l0.257,0.121l0.984,0.681   l0.411,0.178l0.415,0.092l0.287-0.041l0.552-0.252l0.282-0.046l0.209,0.085l0.212,0.149l0.211,0.102l0.211-0.051l0.087-0.123   l0.043-0.141l0.06-0.118l0.139-0.055l0.133-0.029l0.112-0.062l2.474-1.995l0.475-0.284l0.408,0.005l0.315,0.312l0.204,0.634   l0.059,0.842l0.081,0.281l0.125,0.189l0.319,0.301l0.11,0.161l0.027,0.266l-0.11,0.198l-0.15,0.204l-0.091,0.286l0.021,0.279   l0.183,0.657l0.097,0.258l0.192,0.208l0.256-0.021l0.522-0.225l0.243-0.027l0.246,0.018l0.734,0.186l0.248,0.016l0.242-0.054   l0.222-0.152l0.187-0.254l0.128-0.25l0.149-0.212l1.01-0.488l0.277-0.026l0.216,0.068l0.422,0.235l0.213,0.051l0.381-0.239   l0.344-0.481l0.325-0.367l0.331,0.105l0.112,0.25l0.181,0.916l0.16,0.183l0.188-0.071l0.36-0.354l0.986-0.648l0.31-0.307   l0.254-0.424l0.365-1.048l0.285-0.457l0.6-0.468l0.129-0.212l0.039-0.242l0.075-1.513l0.193-0.537l0.298-0.457l0.374-0.332   l0.448-0.252l0.177-0.188l0.095-0.301l-0.028-0.298l-0.084-0.293l-0.04-0.287l0.106-0.283l0.194-0.187l0.418-0.31l0.159-0.236   l0.295-0.295l0.444-0.188l1.218-0.277l0.309,0.058l0.606,0.312l0.343,0.119l1.407,0.09l0.656-0.205l0.36-0.02l0.632,0.135   l0.639,0.27l0.336,0.174l0.324,0.015l0.874-0.249l0.578,0.029l0.21-0.02l0.173-0.062l1.494-0.802l0.379-0.124l0.404-0.016   l1.482,0.214l0.44,0.205l0.234,0.026l0.201-0.078l1.144-0.991l0.164-0.184l0.158-0.24l0.304-0.589l0.215-0.416l0.283-0.426   l0.184-0.18l0.452-0.27l0.204-0.176l0.116-0.257l-0.032-0.273l-0.199-0.58l0.047-0.271l0.186-0.234l0.201-0.137l0.452-0.209   l1.051-0.815l0.833-0.175l0.399-0.183l0.112-0.149l0.094-0.376l0.087-0.164l0.15-0.132l0.157-0.091l1.53-0.605l1.02-0.724   l0.208-0.105l0.683-0.131l1.274-0.921l0.444-0.178l0.528-0.126l0.242-0.105l0.244-0.178l0.536-0.505l0.198-0.137l0.247-0.062   l0.716,0.23l0.266-0.005l0.228-0.089l0.893-0.618l0.734-0.279l0.638-0.456l0.507-0.125l0.535,0.014l0.504-0.073l0.405-0.386   l0.105-0.27l0.128-0.566l0.102-0.268l0.158-0.223l0.182-0.146l0.414-0.173l0.581-0.154l2.842,0.035l0.558-0.194l0.298-0.481   l-0.012-0.291L129,224.562l-0.139-0.191l-0.119-0.223l-0.054-0.249l-0.037-0.497l-0.07-0.231l0.439-0.235l0.129-0.177l0.09-0.328   l-0.214-1.101l-0.158-0.224l-0.113-0.221l-0.077-0.244l-0.255-1.221l-0.016-0.18l0.131-0.302l0.066-0.196l-0.018-0.186   l-0.118-0.269l-0.298-0.438l-0.129-0.238l-0.101-0.602l-0.091-0.24l-0.061-0.244l0.042-0.336l0.098-0.24l0.413-0.635l0.186-0.455   l0.25-0.923l0.235-0.389l0.188-0.115l0.191,0.014l0.397,0.11l0.194-0.023l0.541-0.221l0.213-0.179l0.856-0.322l0.572-0.069   l0.248-0.156l0.067-0.316l-0.131-0.274l-0.238-0.136l-0.518-0.075l-0.775-0.378l-0.384-0.317l-0.212-0.393l0.147-0.432l0.476-0.313   l0.992-0.426l0.883-0.67l0.482-0.23l0.47,0.022l0.574,0.435l0.235,0.057l0.248-0.046l0.226-0.138l0.164-0.234l0.063-0.332   l-0.06-0.292l-0.26-0.492l-0.06-0.293l-0.009-0.302l-0.037-0.301l-0.083-0.273l-0.147-0.213l-0.447-0.224l-0.425-0.115   l-0.177-0.242l0.581-1.067l0.18-0.485l0.029-0.515l-1.339-3.526l-1.339-3.54l-0.411-0.609l-0.189-0.364l-0.118-0.332v-0.002   l-0.004-0.319l-0.027-0.289l-0.07-0.268l-0.13-0.26l-0.368-0.375l-0.166-0.218l-0.07-0.29l0.081-0.59l0.308-1.138l-0.002-0.62   l-0.454-2.329l-0.028-0.565l0.084-0.65l0.302-1.201l0.174-0.344l0.043-0.182l-0.074-0.199l-0.205-0.275l-0.053-0.146l0.015-0.177   l0.232-0.293l0.394-0.184l0.736-0.173l0.179-0.128l0.062-0.211l-0.059-0.207l-0.182-0.119l-1.83-0.716l-0.58-0.463l-0.209-0.105   l-0.3-0.034l-2.025,0.44l-0.539-0.05l-1.393-0.889l-0.29-0.385l0.172-0.483l0.226-0.176l0.526-0.271l1.122-0.986l0.429-0.411   l0.472-0.212l0.501-0.036l0.808,0.135l0.81-0.324l0.844,0.049l0.283-0.041l0.185-0.174l0.212-0.569l0.229-0.194l0.252-0.033   l0.784,0.084l1.815-0.683l0.55-0.01l0.927,0.297l0.298-0.012l1.383-0.555l0.52-0.009l0.46-0.17l0.924-0.521l4.504-1.425l0.912-0.66   l0.483-0.22l0.447,0.131l0.391,0.029l0.293,0.488l0.184,0.661l0.067,0.552l0.013,0.373l0.059,0.217l0.154,0.111l0.77,0.123   l0.177,0.118l0.217,0.252l0.453,0.217l0.57-0.145l2.166-1.103l0.606-0.155l0.558,0.058l0.535,0.374l0.969,1.086l0.548,0.346   l0.724-0.128l0.515-0.854l0.332-1.152l0.218-1.461l0.029-0.637l-0.05-0.596l-0.184-0.316l-1.162-0.49l-1.702-0.249l-0.395-0.195   l-0.002-0.001h-0.002l-0.407-0.644l0.064-0.345l0.085-0.458l0.356-0.846l0.41-1.604l0.852-1.481l0.321-0.776l0.149-0.464   l0.305-1.488l0.294-2.258l0.299-1.063l0.448-0.96l0.753-1.244l0.169-0.515l0.136-0.891l0.074-0.284l0.448-0.972l1.036-3.94   l1.659-3.476l0.071-0.269l0.017-0.28l-0.057-0.288l-0.032-0.324l0.053-0.326l0.173-0.625l0.009-0.18l-0.077-0.323l-0.014-0.17   l0.035-0.185l0.123-0.354l0.034-0.195l-0.019-0.67l0.09-0.188l0.288-0.146l0.28-0.064l0.311-0.02l0.309,0.035l0.271,0.101   l0.584,0.52l0.227,0.141l1.044,0.232l0.444,0.216l1.937,1.295l4.311,1.547l1.062-0.006l0.797,0.164l0.275-0.05l0.723-0.424   l0.004-0.002l0.006-0.001l0.004-0.002l1.209-0.114l1.39,0.118l0.008-0.003l0.187-0.018l0.18,0.019l0.611,0.296l0.512,0.09   l1.075-0.273l0.538,0.04l0.404,0.226l0.367,0.373l0.226,0.493l-0.023,0.589l-0.125,0.27l-0.16,0.263l-0.101,0.25l0.048,0.23   l0.225,0.108l0.311-0.055l0.827-0.348l0.859-0.189l0.235-0.173l0.256-0.495l0.186-0.184l0.166-0.094l0.509-0.121l0.146-0.095   l0.328-0.375l0.779-0.577l0.242-0.247l0.273-0.503l0.154-0.173l0.235-0.13l0.23-0.047l0.652,0.083l1.454-0.228l0.753,0.021   l0.081-0.201l0.026-0.31l0.099-0.296l0.146-0.232l0.101-0.227l0.064-0.255l0.032-0.313l0.11-0.278l0.234-0.173l0.273-0.088   l0.517-0.058l0.14-0.144l0.054-0.246l0.045-0.343l0.12-0.551v-0.264l-0.099-0.306l-0.034-0.284l0.077-0.305l0.055-0.326   l-0.096-0.343l-0.794-1.319l-0.177-0.498v-0.003l-0.052-0.514l0.179-1.126l-0.004-0.557l-0.906-4.989l0.027-0.412l0.123-0.371   l0.208-0.446l0.166-0.637l0.278-1.874l1.498-3.699l0.325-0.533l0.411-0.298l2.516-0.375l2.106,0.193l0.619-0.326l0.448-0.552   l0.239-0.229l0.299-0.125l1.096,0.077l1.311-0.535l0.211-0.173l0.114-0.214l0.208-0.587l0.136-0.273l0.176-0.223l0.542-0.532   l0.855-1.188l0.085-0.204l-0.001-0.236l-0.129-0.73l-0.015-0.203l0.078-0.16l0.21-0.254l0.281-0.542l-0.178-0.333l-0.36-0.348   l-0.27-0.582l-0.073-0.423l-0.025-0.296l0.05-0.271l0.154-0.352l0.181-0.3l0.187-0.214l0.44-0.382l0.195-0.28l0.249-0.612   l0.241-0.198l0.315-0.026l0.67,0.214l0.327,0.036l1.595-0.646l0.517,0.121l0.438,0.243l1.394,0.406l0.436,0.176l0.432,0.071   l0.429-0.063l0.421-0.223l0.07-0.07l0.061-0.092l0.05-0.108l0.096-0.276l0.068-0.029l0.09,0.021l0.128-0.003l2.163-0.676   l1.131-0.121l0.02,0.205l0.163,0.521l0.035,0.4l-0.067,0.255l-0.097,0.245l-0.058,0.367l0.067,0.378l0.18,0.144l0.216,0.083   l0.173,0.199l0.004,0.622l-0.416,0.381l-0.894,0.44l-0.15,0.262l-0.089,0.318l0.025,0.299l0.191,0.208l0.249,0.105l0.122,0.079   l0.097,0.117l0.05,0.163l0.019,0.356l0.042,0.154l0.172,0.211l0.233,0.154l0.746,0.352l0.508-0.039l0.261,0.088l0.66,0.461   l0.29,0.361l0.05,0.437l-0.1,0.158l-0.508,0.343l-0.077,0.127l-0.063,0.186l-0.092,0.188l-0.16,0.131l-0.37,0.292l0.102,0.416   l0.353,0.391l0.38,0.214l0.132,0.003l0.268-0.061l0.119,0.005l0.105,0.07l0.186,0.217l0.311,0.164l0.368,0.293l0.2,0.096   l0.198,0.017l0.389-0.038l0.201,0.031l0.784,0.413l0.308,0.256l0.581,0.773l0.377,0.248l0.26,0.007l0.221-0.075l0.226-0.034   l0.267,0.129l0.707,0.844l0.089,0.301l-0.161,0.634l0.028,0.337l0.086,0.324l0.053,0.331l0.082,0.301l0.175,0.243l0.448,0.371   l0.222,0.079l0.286-0.032l0.323,0.113l0.749,0.777l0.34,0.248l0.295,0.014l0.655-0.098l0.312,0.084l0.176,0.152l1.282,1.76h0.003   l0.001,0.002l0.326,0.146l1.047,0.004l0.584,0.119l0.286-0.055l0.278-0.219l0.194-0.211l0.55-0.453l0.226-0.108l0.169,0.01   l0.453,0.255l0.184,0.025l0.565-0.022l0.321-0.119l0.432-0.018l0.34,0.179l0.049,0.466l-0.006,0.285l0.086,0.237l0.151,0.16   l0.191,0.051l0.158,0.095l0.099,0.243l0.088,0.284l0.129,0.219l0.19,0.097l0.399,0.085l0.182,0.184l0.088,0.226l0.103,0.482   l0.125,0.2l0.365,0.098l1.195-0.098l0.366-0.131l0.148-0.205l0.036-0.224l0.016-0.224l0.087-0.208l0.187-0.092l0.445,0.14   l0.477,0.01l0.173,0.185l0.051,0.307l-0.095,0.366l-0.043,0.307l0.075,0.357l0.135,0.331l0.138,0.231l0.42,0.437l0.492,0.339   l0.524,0.24l1.046,0.29l0.242,0.14l0.241,0.194l0.054,0.182l-0.137,0.182l-0.114,0.234l0.125,0.34l0.153,0.243l0.335,0.838   l0.147,0.23l0.37,0.304l0.158,0.226l0.027,0.507l-0.021,0.54l0.072,0.444l0.307,0.216l0.136,0.215l0.032,0.273l-0.05,0.283   l-0.117,0.244l-0.076,0.113l-0.025,0.12l0.027,0.124l2.755,4.898l0.343,0.379l0.447,0.092l0.268-0.009l0.256,0.076l0.241,0.151   l0.23,0.213l0.173,0.259l0.097,0.275l0.075,0.29l0.111,0.303l0.085,0.116l0.092,0.079l0.078,0.097L250,148.88l-0.023,0.126   l-0.132,0.252l-0.031,0.132l0.061,0.339l0.159,0.236l0.405,0.408l0.336,0.557l0.122,0.615l-0.014,0.22l-0.029,0.444l-0.154,0.704   l-0.025,0.422l0.174,0.153l0.24,0.089l0.17,0.223l-0.025,0.252l-0.11,0.362l-0.243,0.59l-0.144,0.298l-0.173,0.654l-0.124,0.307   l-0.446,1.193l-0.337,0.435l-0.111,0.25l0.034,0.333l0.562,1.855l0.298,0.454l0.235,0.438l0.108,0.745l-0.034,0.754l-0.184,0.468   l-0.125,0.094l-0.633,0.607l-2.36,3.216l-0.16,0.36l-0.515,3.833l0.24,0.282l0.743,0.548l0.173,0.335l0.105,0.473l0.176,0.424   l0.14,0.444l0.006,0.538l0.063,0.185l0.46,0.206l0.195,0.151l0.138,0.274l-0.008,0.177l-0.063,0.175l-0.03,0.267l0.177,0.464   l0.365,0.003l0.788-0.464l0.41-0.066l0.515,0.023l0.504,0.11l0.381,0.206l0.144,0.171l0.249,0.38l0.165,0.156l0.734,0.387   l1.104,0.256l0.225-0.008l0.193-0.16l0.182-0.203l0.194-0.141l0.245-0.008l0.199,0.139l0.744,0.962l0.138,0.102l0.105-0.012   l0.102-0.056l0.132-0.029l1.121,0.282l0.234-0.027l0.465-0.153l0.253-0.027l1.948,0.11l0.634-0.125l0.388-0.046l0.38,0.022   l0.37,0.095l0.371,0.171l0.965,0.7l0.285,0.07l0.555-0.151h0.198l0.517,0.187l0.185,0.003l0.556-0.088l0.197,0.03l0.511,0.213   l0.182,0.008l1.097-0.249l0.752-0.041l1.293-0.358l0.523,0.077l0.173-0.012l0.378-0.084l0.152,0.02l0.625,0.373l0.326,0.14   l0.338,0.018l0.221-0.059l0.22-0.015l0.218,0.027l0.219,0.067l0.266-0.028l0.716-0.075l0.301,0.036l0.888,0.418l0.281,0.023   l0.546-0.093l0.269,0.016l0.23,0.103l0.436,0.285l0.234,0.088l1.185,0.061l1.845,0.963l0.291,0.263l1.817,2.558l0.599,0.657   l0.539,0.206l0.945,0.138l0.511-0.006l0.512-0.248l0.185,0.021l0.187,0.08l0.149,0.104l0.934,1.03l0.204,0.289l0.299,0.689   l0.187,0.253l0.316,0.124l0.722-0.003l0.342,0.177l1.446,0.907l0.783,0.749l0.174,0.238l0.129,0.272l0.161,0.208l0.256,0.122   l2.093,0.657l0.997,0.551l0.487,0.07l3.878-0.508l0.207,0.105l-0.096,0.312l-0.335,0.457l-0.138,0.267l-0.078,0.432l-0.152,0.303   l-0.05,0.159l-0.014,0.155l0.077,0.791l-0.108,0.906l0.002,0.372l0.097,0.164l1.077,0.284l0.591,0.032l0.4,0.118l0.283,0.337   l0.611,1.386l1.169,3.744l1.589,3.46l0.097,0.567l0.046,0.717l0.108,0.652l0.22,0.582l0.386,0.506l4.367,4.359l0.276,0.359   l0.136,0.315l0.074,0.359l0.152,1.938l0.081,0.253l0.097,0.024l0.146,0.037l1.08-0.179l4.053-0.423l4.053-0.424l0.029-0.003   l3.717,0.495l3.717,0.495l4.597,0.612l4.597,0.611l4.597,0.611l4.597,0.611l1.669-0.511l3.958-1.213l0.514-0.004l4.534,0.753   l4.535,0.752l4.534,0.751l2.174-0.231l1.293,0.114l1.275,0.338l1.107,0.833l1.711,2.806l0.993,1.072l0.679,0.356l3.922,0.917   l3.922,0.916l3.922,0.915l0.35,0.166l0.005,0.001l3.32,1.783l3.32,1.78l0.335,0.056l4.414-0.873l4.414-0.874l-0.032,3.109   l0.078,0.14l1.09,0.168l3.295,0.01l0.241,0.098l0.246,0.241l0.435,0.549l0.464-0.151l2.107-2.233l0.197-0.075l0.636-0.107   l0.583-0.322l0.211-0.067l0.154-0.072l0.504-0.39l0.805-0.438l4.469-2.33l5.09-2.235l5.09-2.24l4.837-0.778l4.837-0.779   l4.837-0.779l1.445-0.233l0.65,0.065l0.962,0.269l2.453-0.039l2.948,0.563l0.359-0.026l0.387-0.135l1.116-0.593l0.375-0.031   l2.931,0.362l0.304-0.036l0.546-0.187l1.772-0.135l0.056-0.031l0.042-0.06l0.07-0.124l0.055-0.025l0.062,0.003l0.09-0.04   l1.687-1.254l2.777-1.227l0.845-0.118l0.627,0.008l0.198-0.037l0.166-0.08l0.107-0.101l0.101-0.12l0.141-0.136l0.387-0.245   l3.021-1.325l0.205-0.257l0.278-0.804l0.271-0.271l1.056-0.86l0.469-0.527l0.372-0.667l0.28-0.768l0.163-0.314l1.323-1.415   l1.548-2.157l0.449-0.433l1.389-0.795l2.745-1.114l0.711-0.582l0.309-0.131l1.204-0.106l0.37-0.184l0.335-0.326l1.773-2.185   l0.213-0.095l0.828,0.037l0.537-0.245l0.194-0.037l0.26-0.182l0.133-0.426l0.032-0.519l-0.041-0.461l-0.156-0.53l-1.039-1.863   l-0.31-0.401l-0.348-0.345l-1.274-0.868l-0.381-0.387l-1.026-1.432l-0.276-0.502l-0.178-0.587l-0.063-0.612l-0.085-0.288   l-0.197-0.257l-0.709-0.431l-0.16-0.325l0.007-0.646l0.105-0.461l0.201-0.501l0.257-0.442l0.271-0.276l0.027-0.032l0.119-0.176   l0.285-0.638l0.24-0.382l0.091-0.204l0.063-0.283l0.007-0.268l-0.049-0.543l0.011-0.255l0.117-0.397l2.119-4.359l0.25-0.368   l0.293-0.309l0.643-0.496l0.225-0.109l0.488-0.126l0.232-0.108l0.133-0.129l0.106-0.14l0.117-0.109l0.171-0.04l0.128-0.002   l0.304-0.005l1.088,0.322l3.079-0.054l0.376,0.075l0.323,0.219l0.935,0.947l0.46,0.79l0.243,0.321l0.319,0.24l1.52,0.696   l2.543,0.703l0.495,0.002l0.996,0.426l4.17,0.378l0.178,0.071l0.319,0.267l0.173,0.068l0.819,0.089l0.343-0.105l0.424-0.349   l0.715-0.762l1.155-0.83l0.585-0.645l0.277-0.115l0.672-0.062l0.497-0.127l0.433-0.212l0.385-0.339l0.352-0.504l0.213-0.415   l0.115-0.175l0.161-0.161l0.545-0.353l2.345-2.236l0.613-0.928l0.331-0.708l0.106-0.359l0.088-0.732l0.049-0.151l0.112-0.084   l1.535-0.602l0.385-0.07l0.385,0.034l1.901,0.762l0.38,0.064l2.122-0.333l2.388-0.004l1.536-0.292l1.866-0.509l0.335-0.16   l0.283-0.237l0.848-0.988l2.439-2.095l0.219-0.258l0.111-0.049l0.581,0.085l0.174-0.001l0.183-0.051l0.556-0.293l0.294-0.235   l0.685-0.984l0.241-0.544l-0.108-0.384l-0.24-0.371l-0.157-0.506l0.069-0.444l1.63-3.217l1.901-1.982l0.164-0.236l0.098-0.296   l0.227-0.517l0.154-0.117l0.245-0.185l0.471-0.15l0.703-0.094l0.166-0.073l0.711-0.61l0.224-0.279l0.113-0.063l0.193,0.006   l1.429,0.327l3.893,0.267l0.405-0.117l0.177-0.365l0.05-1.132l0.132-0.448l0.411-0.577l0.08-0.227l-0.027-0.25l-0.185-0.52   l0.895-0.219l0.214,0.092l0.113,0.03l0.094-0.02l0.523-0.381l0.134-0.032l0.157,0.19l0.289,0.682l0.2,0.245l0.545,0.323   l0.259,0.062l1.148-0.132l0.22-0.119l0.178-0.252l0.301-0.617l0.215-0.265l0.253-0.185l0.262-0.125l0.555-0.136l0.371-0.059   l0.887-0.681l0.205-0.079l0.606-0.025l0.153-0.065l0.419-0.37l0.365-0.239l0.347-0.125l0.36-0.031l0.393,0.044l0.404,0.135   l0.724,0.377l0.426,0.09l0.896-0.001l0.178-0.066l0.311-0.22l0.161-0.045l0.43,0.133l0.421,0.235l0.401,0.111l0.382-0.238   l0.435-0.77l0.272-0.337l0.343-0.121l0.237,0.118l0.088,0.237l0.05,0.275l0.123,0.228l0.187,0.068l0.17-0.101l0.283-0.357   l0.229-0.055l0.2,0.263l0.33,0.681l0.259,0.24l0.288,0.128l2.882,0.812l0.525-0.023l1.015-0.238l0.547-0.008l0.845,0.146   l0.298-0.008l0.241,0.055l0.4,0.332l0.242,0.075l0.2-0.054l0.247-0.129l0.233-0.174l0.16-0.184l0.177-0.316l0.138-0.199   l0.159-0.053l0.237,0.119l0.194,0.011l0.226-0.144l0.207-0.224l0.2-0.356l0.086-0.114l0.07-0.12l0.032-0.155l-0.042-0.133   l-0.183-0.295l-0.046-0.144l0.032-0.282l0.144-0.529l-0.008-0.369l0.011-0.114l0.036-0.101l0.009-0.084l-0.069-0.067l-0.059-0.033   l-0.054-0.049l-0.042-0.066l-0.021-0.085l0.002-0.204l0.04-0.133l0.062-0.122l0.068-0.171l-0.04-0.115l-0.155-0.044l-0.184-0.015   l-0.12-0.028l-0.099-0.123l-0.043-0.124l-0.032-0.131l-0.059-0.142l-0.161-0.212l-0.375-0.388l-0.16-0.243l-0.032-0.085   l-0.026-0.095l-0.037-0.193l-0.013-0.982l-0.074-0.33l-0.284-0.569l-0.328-0.514l-0.799-0.942l-0.476-0.371l-0.705-0.208   l-0.137-0.198l-0.103-0.275l-0.15-0.3l-0.166-0.201l-1.758-1.635l-0.439-0.131l0.078-0.239l0.269-0.387l0.059-0.165l-0.087-0.234   l-0.216-0.139l-0.453-0.143l-1.058-0.414l-0.268-0.165l-0.133-0.192l-0.063-0.286l-0.139-1.204l-0.083-0.317l-0.153-0.251   l-0.27-0.2l-0.984-0.364l-2.323-1.027l-0.612-0.631l-1.223-2.042l-0.713-0.872l-0.786-0.392l-2.182-0.147l-0.291-0.08l-0.544-0.346   l-0.269-0.083l-0.679,0.012l-0.662,0.134l-0.757,0.331l-0.276,0.035l-1.784-0.117l-0.546,0.197l-0.285,0.263l-2.428,3.226   l-0.615,0.493l-0.412,0.45l-0.414,0.754l-0.442,0.585l-0.495-0.054l-2.801-2.627l-0.253-0.157l-0.844-0.307l-1.354-0.581   l-0.353-0.071l-0.797,0.037l-2.852,0.637l-0.801,0.02l-2.094-0.468l-0.706,0.225l-1.101,0.719l-1.261,1.648l-0.661,0.423   l-0.7-0.364l-2.862-3.064l-0.274-0.377l-0.157-0.396l-0.181-1.011l-0.354-2.187l-0.003-0.162l0.251-0.297l2.654-1.272l0.33-0.31   l0.105-0.538l-0.257-3.392v-0.341l0.053-0.356l0.104-0.283l2.578-4.062l0.225-0.555l-0.005-0.308l-0.159-0.596l0.048-0.306   l2.377-5.374l2.377-5.409l0.172-0.413l2.393-5.366l0.43,0.379l3.795,2.256l2.211,0.882l2.49,0.143l3.237,1.772l0.113,0.031   l0.097-0.032l0.199-0.11l0.097,0.005l0.138,0.121l0.077,0.03l0.105,0.008l0.056,0.013l0.046-0.011l0.372-0.062l0.227-0.583   l0.123-0.106l0.295-0.254l0.978-0.497l0.428-0.319l0.185-0.194l0.202-0.262l0.195-0.204l0.704-0.344l0.225-0.171l0.223-0.248   l0.172-0.292l0.068-0.299l0.139,0.001l0.718-0.664l0.267-0.104l0.282-0.06l0.219-0.173l0.09-0.441l0.145-0.15l0.703-0.151   l0.24-0.129l0.046-0.113l0.061-0.32l0.049-0.155l0.082-0.127l0.263-0.304l0.377-0.276l0.182-0.193l0.332-0.18l0.503-0.415   l0.297-0.132l0.48,0.222l0.323-0.064l0.568-0.234l1.129-0.228l0.126-0.049l0.118-0.098l0.123-0.069l0.136,0.035l0.136,0.077   l0.167,0.056l0.316,0.047l1.146-0.127l1.108-0.365l0.215-0.138l0.167-0.174l0.314-0.41l0.569-0.556l0.169-0.227l0.14-0.272   l0.104-0.284l0.07-0.323l0.049-0.745l-0.012-0.186l-0.042-0.126l-0.107-0.158l-0.029-0.11l0.025-1.043l0.054-0.315l0.135-0.132   l0.136-0.048l0.034-0.118l-0.018-0.153l-0.083-0.378l-0.042-0.084l-0.219-0.078l-0.218-0.032l-0.719,0.163l-0.049-0.029   l-0.152-0.152l-0.105-0.06l-0.115-0.008l-0.29,0.033l-0.143-0.025l0.059-0.243l-0.098-0.105l-0.347-0.017l-0.088-0.086l0.046-0.196   l0.104-0.208l0.092-0.127l0.145-0.048l0.348,0.018l0.094-0.036l0.107-0.174l0.311-0.366l0.199-0.6l0.038-0.063l-0.006-0.121   l-0.019-0.042l-0.036-0.023l-0.053-0.067l-0.041-0.133l0.04-0.089l0.07-0.081l0.045-0.106l0.249-1.028l-0.015-0.199l0.094-0.184   l0.108-0.063l0.122-0.033l0.139-0.096l0.104-0.165l0.066-0.158l0.088-0.118l0.174-0.046l0.106-0.098l0.106-0.426l0.097-0.097   l0.139-0.021l0.157-0.054l0.284-0.157l0.164-0.2l0.446-0.729l0.094-0.242l0.112-0.74l-0.009-0.384l-0.188-0.404l0.207-0.219   l0.138-0.334l0.023-0.364l-0.136-0.318l0.625-0.737l0.236-0.426l0.116-0.155l0.894-0.681l0.305-0.405l0.002-0.431l0.204-0.037   l0.14-0.126l0.084-0.214l0.028-0.299l0.044-0.258l0.08-0.25l0.04-0.257l-0.08-0.281l0.101-0.031l0.065-0.054l0.143-0.162   l-0.309-0.494l0.046-0.29l0.115-0.062l0.341,0.094l0.142-0.047l-0.002-0.124l-0.061-0.178l-0.039-0.206l0.116-0.452l0.039-0.104   l0.104-0.09l0.247-0.084l0.113-0.085l0.257-0.525l0.097-0.082l0.269-0.148l-0.033-0.342l-0.142-0.374l-0.055-0.249l0.541-0.124   l0.111-0.124l0.045-0.124l0.036-0.141l0.083-0.173l0.175-0.369l-0.025-0.192l-0.073-0.208l0.035-0.415l0.17-0.296l0.566-0.642   l0.122-0.249l0.007-0.452l0.036-0.353l0.092-0.337l0.237-0.538l0.165-0.284l0.088-0.096l0.16-0.036l0.356,0.058l0.134-0.083   l0.18-0.263l1.56-1.701l0.624-0.481l0.384-0.435l0.218-0.139l0.299-0.051l0.122-0.069l0.076-0.161l0.05-0.186l0.056-0.142   l0.139-0.163l0.101-0.028l0.111,0.019l0.167-0.023l0.164-0.102l0.093-0.137l0.077-0.145l0.115-0.127l0.139-0.043l0.525,0.043   l0.256-0.104l0.164-0.257l0.243-0.629l0.252-0.379l0.058-0.154l0.008-0.244l-0.046-0.199l-0.073-0.193l-0.053-0.213l0.01-0.262   l0.094-0.227l0.14-0.101l0.158-0.067l0.148-0.119l0.091-0.178l0.154-0.408l0.142-0.169l-0.055-0.123l-0.035-0.151v-0.157   l0.049-0.136l0.096-0.178l-0.01-0.073l-0.065-0.055l-0.064-0.123l-0.058-0.146l-0.146-0.275l-0.028-0.157l0.012-0.164l0.053-0.296   l0.012-0.176l-0.217-0.355l-0.951-0.786l-0.217-0.501l-0.026-0.172l-0.049-0.101l-0.033-0.11l0.025-0.205l0.057-0.071l0.11-0.085   l0.102-0.114l0.046-0.166l0.047-0.322l0.238-0.449l0.102-0.3v-0.576l0.025-0.083l0.107-0.263l0.025-0.169l0.008-0.211l0.037-0.167   l0.18-0.447l-0.188-0.152l-0.599-0.31l-0.518-0.131l-0.783-0.553l-0.541-0.253l-0.314-0.35l-0.115-0.056l-0.273,0.055l-0.459,0.26   l-0.247,0.091l-1.206,0.116l-0.215,0.071l-0.498,0.338l-0.251,0.1l-0.714-0.014l-0.379-0.101l-0.26-0.197l-0.156-0.242   l-0.101-0.221l-0.042-0.261l0.028-0.364l0.045-0.173l0.185-0.465l-0.015-0.216l-0.085-0.354l0.023-0.196l-0.149-0.499l0.372-0.422   l1.02-0.484l0.243-0.166l0.478-0.506l0.372-0.146l0.167-0.102l0.147-0.146l0.063-0.168l0.057-0.196l0.132-0.111l0.276-0.146   l0.119-0.162l0.058-0.145l0.047-0.151l0.085-0.183l0.09-0.115l0.338-0.327l0.661-0.97l0.875-0.893l0.987-0.778l0.424-0.486   l0.7-1.174l0.421-0.413l0.822-0.535l0.074-0.182l-0.05-0.322l0.224-0.219l0.323-0.127l2.045-0.186l1.097,0.293l0.585-0.042   l0.567-0.193l0.525-0.296l0.321-0.33l0.143-0.069l0.188-0.008l0.545,0.137l0.085-0.01l0.515-0.059l0.604-0.178l1.459-1.045   l2.807-0.867l1.54,0.015l0.64,0.006l0.299-0.163l0.449-0.438l0.237-0.152l0.645-0.091l0.77-0.356l0.261-0.064l0.239,0.089   l0.229,0.223l0.244,0.341l0.248,0.203l0.267-0.028l0.521-0.234l4.397-0.175l1.617-0.635l1.71-0.11l0.12-0.062l0.179-0.269   l0.263-0.149l0.356-0.42l0.202-0.142l0.28-0.031l0.365,0.037l0.347,0.115l0.311,0.297l0.142,0.057l0.449,0.082l0.133,0.052   l0.45,0.32l0.115,0.018l0.045-0.151l0.006-0.341l0.098-0.308l0.222-0.044l0.236,0.149l0.138,0.269l-0.092,0.066l-0.077,0.087   l-0.147,0.238l0.253,0.112l0.215-0.192l0.351-0.642l0.253-0.104l0.286,0.231l0.432,0.595l0.272,0.189l0.344,0.12l1.336,0.167   l0.298,0.12l1.064,0.637l0.217,0.26l0.231,0.51l0.082,0.145l0.142,0.134l0.291,0.096l0.15,0.1l0.355,0.498l0.244,0.202l0.209-0.097   l0.198-0.232l0.277-0.162l0.301-0.078l0.271,0.02l0.23,0.117l0.253,0.205l0.204,0.254l0.128,0.422l0.188,0.365l0.05,0.072   l0.189,0.635l0.197,0.247l0.269,0.252l0.277,0.198l0.518,0.142l0.527,0.274l0.314,0.063h1.268l0.129,0.03l0.307,0.178l0.109,0.108   l0.092,0.186l0.005,0.14l-0.015,0.123l0.03,0.135l0.248,0.261l0.307,0.021l0.612-0.14l0.234,0.149l0.295,0.633l0.249,0.107   l0.296-0.182l-0.05-0.313l-0.143-0.37l0.014-0.352l0.195-0.245l0.243-0.159l1.135-0.317l0.614-0.028l0.608,0.107l3.403,2.111   l0.321,0.072l0.228,0.139l0.26,0.62l0.247,0.154l0.71-0.311l0.422-0.061l0.188,0.301l0.138,0.429l0.322,0.333l0.622,0.452   l-0.105,0.543l-0.05,0.121l-0.099,0.096l-0.255,0.089l-0.11,0.061l-0.203,0.261l-0.157,0.346l-0.007,0.301l0.252,0.13l0.261-0.062   l0.507-0.272l1.142-0.205l0.222,0.144l0.077,0.196l-0.021,0.134l-0.049,0.132l-0.006,0.189l0.046,0.155l0.072,0.125l1.24,1.58   l0.094,0.009l0.252-0.264l0.117-0.07l0.553-0.015l0.242,0.146l0.181,0.392l-0.431,0.192l-0.193,0.132l-0.157,0.186l0.304,0.57   l0.076,0.313l-0.181,0.138l-0.282,0.025l-0.284,0.106l-0.224,0.232l-0.109,0.401l0.047,0.388l0.153,0.454l0.208,0.336l0.213,0.038   l0.13-0.061l0.128-0.028l0.094-0.08l0.039-0.217l0.069-0.152l0.16,0.037l0.992,0.852l0.475,0.271l-0.021,0.402l-0.111,0.463   l-0.003,0.362l0.186,0.043l0.34-0.02l0.331,0.048l0.147,0.246l0.082,0.276l0.187,0.33l0.351,0.483l0.08,0.268l-0.073,0.358   l-0.323,0.766l0.325,0.252l0.869,0.284l0.205,0.222l-0.535,0.202l-0.904,0.673l-0.033,0.26l0.084,0.261l0.182,0.118l0.202,0.031   l1.161,0.481l0.459,0.081l0.423,0.159l0.281,0.406l-0.053,0.326l-0.357,0.952l-0.061,0.231v0.114l-0.259,0.069l-0.277,0.131   l-0.223,0.237l-0.091,0.385l0.077,0.282l2.285,4.423l0.164,0.143l0.579,0.188l0.024,0.104l0.111,0.16l0.027,0.104l-0.035,0.101   l-0.079,0.121l-0.081,0.09l-0.039,0.007l0.095,0.41l0.1,0.248l-0.009,0.25l-0.223,0.407l-0.326,0.46l0.02,0.215l0.268,0.253   l0.849,0.309l0.36,0.21l0.26,0.475l-0.326,0.562l-0.101,0.33l-0.039,0.422l0.125,0.306l0.29,0.125l0.577,0.04l0.15,0.052   l0.134,0.109l0.085,0.179l-0.006,0.255l-0.129,0.273l-0.195,0.104l-0.22,0.042l-0.197,0.082l-0.186,0.188l-0.146,0.255   l-0.077,0.305l0.019,0.345l0.167,0.425l0.251,0.255l0.272-0.005L657,72.666l0.025-0.19l-0.042-0.132l-0.049-0.114l0.005-0.132   l0.068-0.138l0.091-0.109l0.101-0.086l0.102-0.063l0.194-0.073l0.228-0.015l0.199,0.101l0.102,0.274l-0.039,0.223l-0.111,0.272   l-0.236,0.424l-0.349,0.459l-0.084,0.201l-0.043,0.244l-0.015,0.266l0.018,0.526l0.047,0.33l0.151,0.687l0.032,0.395l0.067,0.4   l0.166,0.278l0.393,0.372l0.579,0.994l0.167,0.094l0.721,0.642l0.379,0.503l0.866,2.068l0.23,0.242l0.284,0.19l0.239,0.234   l0.103,0.374l-0.01,0.13l-0.026,0.133l-0.038,0.125l-0.046,0.105l-0.04,0.137l0.018,0.117l0.037,0.112l0.021,0.123l0.068,0.156   l0.364,0.52l0.191,0.17l0.167,0.406l0.095,0.486l-0.026,0.411l-0.09,0.181l-0.262,0.349l-0.114,0.201l-0.151,0.451l-0.087,0.192   l-0.155,0.206l0.178,0.259l0.504,0.449l0.106,0.196l0.013,0.395l-0.01,0.206l-0.044,0.139l-0.102,0.16l-0.093,0.208l-0.064,0.222   l-0.013,0.213l0.271,0.524l0.568,0.402l1.965,0.981l0.139,0.209l-0.009,0.395l-0.035,0.34l-0.069,0.319l-0.118,0.334l-0.719,1.178   l-0.226,0.667l0.088,0.924l0.308,0.563l0.14,0.329l-0.02,0.261l-0.129,0.279l-0.105,0.399l-0.056,0.435l0.016,0.385l0.346,0.568   l1.196,0.4l0.404,0.49l0.071,0.392l0.008,0.314l0.034,0.305l0.154,0.364l0.208,0.21l0.543,0.257l0.225,0.189l0.223,0.279   l0.24,0.231l0.269,0.157l0.596,0.081l0.151-0.015l0.107-0.071l0.12-0.187l0.081-0.093l0.085-0.032l0.141-0.004l0.268,0.079   l0.236,0.198l0.39,0.509l0.229,0.202l0.287,0.089l1.198,0.045l0.303-0.05l0.23-0.167l0.254-0.129l0.594,0.244l0.276-0.056   l0.091-0.114l0.138-0.266l0.08-0.097l0.13-0.07l1.899-0.159l0.876,0.229l0.074-0.05l0.351-0.547l0.064-0.034l0.169,0.144   l0.537,0.328l0.287,0.116l0.307,0.043l0.117,0.05l0.054,0.128l0.018,0.174l0.002,0.19l-0.044,0.216l-0.103,0.083l-0.126,0.035   l-0.112,0.077l-0.172,0.318l-0.044,0.313l0.112,0.238l0.299,0.095l0.263-0.057l0.495-0.206l0.29,0.014l0.257,0.139l0.511,0.386   l0.578,0.144l0.186,0.177l0.407,0.947l0.185,0.261l0.237,0.166l0.311,0.057l0.234-0.093l0.398-0.455l0.257-0.163l0.271-0.019   l0.313,0.085l0.303,0.185l0.495,0.542l0.282,0.051l0.239-0.15l0.126-0.348l-0.02-0.708l0.082-0.252l0.28-0.098l0.585,0.059   l0.289,0.104l0.247,0.182l0.195,0.238l0.091,0.213l0.028,0.27l0.021,0.83l0.078,0.31l0.145,0.23l0.226,0.185l0.537,0.097   l0.566-0.085l0.475,0.087l0.27,0.611l0.028,0.579l0.048,0.169l0.157,0.198l0.231,0.116l0.551,0.059l0.191,0.121l0.044,0.227   l-0.044,0.776l0.237,0.047l0.234,0.116l0.425,0.31l-0.102,0.39l0.02,0.341l0.147,0.239l0.541,0.182l0.256,0.22l0.46,0.524   l1.86,1.54l0.538,0.311l0.501-0.097l0.504-0.261l0.551-0.189l0.599-0.004l0.29,0.089l0.123,0.204l0.118,0.272l0.283,0.141   l0.331,0.035l0.271-0.042l0.68-0.317l0.004-0.001l0.287-0.035l0.268,0.096l0.025,0.23l-0.111,0.275l-0.44,0.781l-1.071,2.749   l-0.04,0.335l0.125,0.307l0.245,0.175l0.271,0.08l0.241,0.115l0.142,0.278l0.007,0.191l-0.068,0.327l-0.015,0.183l0.026,0.194   l0.097,0.337l0.023,0.104l0.146,0.086l0.867-0.372l0.322,0.03l0.166,0.198l0.007,0.304l-0.149,0.344l-0.093,0.307l0.056,0.311   l0.231,0.488l0.115,0.319l0.067,0.134l0.12,0.139l0.149,0.093l0.125,0.047l0.087,0.106l0.034,0.272l-0.013,0.402l-0.051,0.209   l-0.516,0.641l-0.056,0.126l-0.06,0.195l-0.123,0.606l-0.071,0.089l-0.192,0.109l-0.252,0.248l-0.369,0.466l-0.129,0.33   l0.016,0.244l0.069,0.262l0.043,0.383l0.087,0.23l1.981,2.073l0.562,0.735l0.393,1.074l0.007,0.519l-0.046,0.652l0.04,0.558   l0.27,0.236l0.201,0.066l0.452,0.299l0.235,0.085l0.455,0.035l0.221-0.024l0.287-0.079l0.431-0.268l0.486-0.203l2.357-0.562   l0.255,0.024l0.386,0.113l0.371,0.218l0.342,0.308l0.447,0.583l0.083,0.065l0.104,0.04l0.105,0.013l0.104-0.008l0.104-0.03   l0.102-0.051l0.599-0.467l0.22-0.026l0.876,0.287l0.211-0.004l0.418-0.087l0.212,0.008l0.116,0.042l0.333,0.194l0.104,0.032   l0.119,0.008l0.118-0.022l0.096-0.056l0.276-0.247l0.104-0.052l0.666-0.132l0.723,0.052l0.315,0.09l0.505-0.01l0.309-0.095   l0.15-0.082l0.55-0.418l0.154-0.059l0.77-0.129l0.386,0.02l0.386,0.093l0.596,0.324l0.255,0.063l0.553-0.013l0.133-0.06   l0.122-0.096l0.108-0.113l0.198-0.271l0.07-0.141l0.022-0.137l-0.018-0.147l-0.081-0.293l0.002-0.103l0.029-0.099l0.056-0.109   l0.295-0.454l0.581-0.712l0.104-0.194l0.049-0.222l-0.01-0.136l-0.037-0.115l-0.046-0.11l-0.036-0.121l-0.006-0.14l0.032-0.124   l0.056-0.109l0.074-0.093l0.164-0.12l0.188-0.045l0.19,0.024l0.178,0.081l0.276,0.249l0.139,0.095l0.167,0.018l0.184-0.059   l0.167-0.104l0.144-0.156l0.229-0.415l0.126-0.161l0.855-0.625l0.005-0.07l0.95-0.436l0.092-0.073l0.074-0.08l0.053-0.08   l0.04-0.092l0.04-0.117l0.112-0.225l0.164-0.154l0.187-0.1l1.055-0.306l0.436-0.02l0.442,0.111l0.112,0.073l0.204,0.182   l0.122,0.053l0.252,0.02l0.632-0.105l0.19,0.007l0.192,0.05l0.426,0.196l0.146,0.031l0.687-0.1l0.222-0.103l0.18-0.2l0.137-0.33   l0.065-0.208l0.08-0.175l0.102-0.15l0.132-0.126l0.18-0.096l0.374-0.113l0.178-0.103l0.173-0.205l0.252-0.503l0.153-0.223   l0.188-0.108l0.665,0.008l0.206-0.077l0.393-0.241l0.205-0.085l0.112-0.017l0.673,0.034l0.333-0.091l0.181-0.111l0.48-0.509   l0.179-0.126l0.187-0.08l0.667-0.136l1.02-0.417l1.822-0.296l0.218-0.073l0.216,0.188l0.539,0.445l0.206,0.073l0.209,0.012   l0.208-0.058l0.2-0.109l0.19-0.142l0.304,0.711l0.474,0.512l0.564,0.314l0.449,0.093l0.202-0.032l-0.178,0.185l-0.177,0.556   l-0.05,1.432l-0.229,0.467l-0.167,0.098l-0.696,0.695l-0.218,0.352l-0.089,0.522l0.085,0.406l0.39,0.699l-0.154,0.308l0.129,0.257   l0.268,0.177l0.261,0.066l0.136,0.162l0.111,0.371l0.074,0.409l0.027,0.272l0.227,0.493l0.83,0.91l-0.053,0.384l0.084,0.125   l-0.534,0.799l-0.13,0.119l-0.239,0.122l-0.07,0.298l-0.006,0.374l-0.04,0.353l-0.164,0.232l-0.497,0.409l-0.105,0.218l-0.123,0.15   l-0.492,0.769l-0.042,0.178l-0.244,0.094l-0.394,0.446l-0.179,0.146l-0.144,0.026l-0.4-0.02l-0.245-0.157l-0.149,0.031   l-0.145,0.077l-0.123,0.043l-0.274,0.014l-0.242,0.05l-0.223,0.104l-0.227,0.174l-0.151,0.199l-0.249,0.511l-0.14,0.203   l-0.476,0.278l-0.22,0.183l-0.091,0.285l-0.061,0.394l-0.115,0.253l-0.067,0.229l0.088,0.324l0.074,0.131l0.205,0.281l0.076,0.054   l0.046,0.086l-0.019,0.194l-0.065,0.346l0.102,0.29l0.198,0.298l0.125,0.331l-0.115,0.388l-0.227,0.154l-0.581,0.066l-0.243,0.177   l-0.113,0.244l-0.304,0.947l-0.074,0.102l-0.076,0.076l-0.056,0.115l-0.024,0.223v0.68l-0.048,0.331l-0.479,1.206l-0.043,0.241   l0.054,0.221l0.164,0.273l0.099,0.291l-0.033,0.319l-0.18,0.692l-0.125,0.756l-0.108,0.317l-0.077,0.134l-0.119,0.207l-0.234,0.23   l-0.532,0.344l-0.202,0.275l-0.041,0.171l-0.028,0.413l-0.05,0.152l-0.482,0.801l-0.04,0.158l0.022,0.225l0.075,0.202l0.081,0.059   l0.101,0.009l0.13,0.055l0.208,0.173l0.24,0.27l0.14,0.318l-0.089,0.319l-0.511,0.29l-0.198,0.235l0.125,0.32l0.122-0.111   l0.126-0.01l0.12,0.077l0.102,0.155l-0.252,0.182l0.003,0.173l0.089,0.218l0.006,0.312l-0.14,0.134l-0.232,0.103l-0.161,0.13   l0.063,0.212l-0.091,0.099l-0.184,0.28l-0.074,0.058l-0.101-0.053l-0.094-0.23l-0.076-0.052l-0.144,0.051l-0.08,0.124l-0.054,0.163   l-0.075,0.164l-0.103,0.143l-0.283,0.309l-0.237,0.144l-0.241,0.02l-0.129,0.117l0.102,0.438l0.26,0.583l0.008,0.254l-0.285,0.668   l-0.415,1.438l-0.094,0.109l-0.25-0.161l-0.115,0.024l-0.085,0.105l-0.035,0.168l-0.009,0.234l-0.035,0.105l-0.187,0.166   l-0.023,0.07l0.019,0.07l-0.002,0.057l-0.07,0.025l-0.109-0.027l-0.068-0.067l-0.056-0.076l-0.077-0.052l-0.234,0.004l-0.195,0.145   l-0.132,0.281l-0.049,0.403l-0.049,0.063l-0.103,0.08l-0.087,0.135v0.232l0.074,0.15l0.222,0.145l0.09,0.148l-0.299,0.163   l-0.159,0.642l-0.315,0.312l0.097,0.17l0.283,0.09l0.126,0.112l0.042,0.215l-0.098,0.17l-0.296,0.229l0.062,0.077l0.109,0.188   l0.062,0.077l-0.213,0.082l-0.186,0.033l-0.163,0.087l-0.141,0.24l0.114,0.324l-0.132,0.115l-0.438,0.004l-0.139,0.083   l-0.365,0.302l-0.356,0.116l-0.308,0.221l-0.349,0.083l-0.439,0.194l-0.146,0.115l-0.107,0.167l-0.448,0.943l-0.079,0.255   l-0.05,0.272l-0.018,0.285l-0.287,1.576l0.055,0.363l-0.104,0.339l0.102,0.463l0.16,0.502l0.074,0.451l-0.022,0.226l-0.042,0.162   l-0.069,0.132l-0.188,0.245l-0.288,0.275l-0.268,0.143l-0.292,0.375l-0.353,0.158l-0.299,0.314l-0.145,0.072l-0.364-0.056   l-0.922-0.501l-4.925-1.401l-4.925-1.403l-0.009-0.003l-0.214-0.092l-0.208-0.145l-0.192-0.184l-0.16-0.205l-0.136-0.293   l-0.09-0.302l-0.11-0.265l-0.2-0.181l-0.397,0.077l-0.371,0.452l-0.703,1.438l-0.134,0.107l-0.502-0.015l-0.254,0.051l-0.19,0.128   l-0.143,0.217l-0.112,0.326l-0.003,0.276l0.198,0.381l-0.029,0.321l-0.122,0.224l-1.557,1.491l-0.065,0.055l-0.153,0.152   l-0.104,0.199l-0.104,0.16l-0.161,0.037l-0.783-0.145l-0.236,0.006l-0.185,0.064l-0.15,0.115l-0.463,0.453l-0.163,0.096l-0.771,0.3   l-0.209,0.027l-0.199-0.082l-0.191-0.14l-0.153-0.063l-0.161,0.007l-0.501,0.161l-0.07,0.058l-0.048,0.122l0.01,0.244l-0.036,0.126   l-0.159,0.194l-0.187,0.098l-0.204,0.034l-0.212,0.002l-0.432,0.197l-0.037,0.267l0.469,0.787l0.407,0.292l0.157,0.166l0.503,1.033   l1.124,4.984l1.124,4.958l-0.034,0.128l-0.112,0.072l-0.184,0.164l-0.199,0.237l-0.053,0.145l-0.002,0.215l-0.07,0.29l0.014,0.241   l0.118,0.529l-0.012,0.273l-0.277,0.758l-0.227,0.959l-0.028,0.282l0.085,0.871l-0.033,0.376l0.001,0.121l0.027,0.146l0.09,0.284   l0.029,0.151l-0.008,0.136l-0.065,0.284l-0.014,0.107l0.025,0.141l0.095,0.284l0.014,0.113l-0.071,0.222l-0.227,0.397l-0.056,0.254   l0.07,0.183l0.973,0.81l0.1,0.083l0.143,0.197l0.04,0.198l0.046,0.707l-0.01,0.201l-0.128,0.241l-0.135,0.14l-0.111,0.179   l-0.062,0.355l-0.005,0.586l-0.049,0.279l-0.138,0.216l-0.367,0.328l-0.164,0.208l-0.108,0.244l-0.021,0.313l0.088,0.204   l0.112,0.187l0.056,0.267l-0.067,0.285l-0.165,0.201l-0.397,0.286l-0.088,0.108l-0.029,0.109l-0.012,0.118l-0.035,0.135   l-0.084,0.111l-0.208,0.078l-0.097,0.073l-0.081,0.159l-0.035,0.189l-0.01,0.405l0.096,0.436l0.187,0.461l0.042,0.387l-0.329,0.214   l-0.391-0.022l-0.177,0.027l-0.171,0.145l-0.077,0.21l-0.027,0.225l-0.081,0.155l-1.542-0.016l-0.449-0.221l-0.252-0.077   l-0.281,0.05l-0.144,0.193l-0.099,0.244l-0.149,0.201l-0.044-0.021l-0.927-0.047l-0.709,0.18l-1.081,0.562l-0.949,0.701   l-0.311,0.596l0.273,0.294l0.388,0.035l0.411-0.058l0.335,0.019l0.259,0.185l0.276,0.31l0.235,0.366l0.14,0.353l0.002,0.461   l-0.192,0.248l-0.417,0.342l-0.063-0.288l-0.064-0.605l-0.034-0.166l-0.171-0.176l-0.195,0.012l-0.185,0.148l-0.144,0.234   l0.18,0.237l-0.035,0.228l-0.174,0.085l-0.241-0.187l-0.055-0.163l0.041-0.298l-0.026-0.121l-0.082-0.076l-0.088-0.006   l-0.099,0.009l-0.124-0.033l-0.772-0.678l-0.087-0.263l-0.617-0.635l-0.222-0.536l-0.009-0.596l0.161-1.31l-0.198-0.546   l-0.511-0.092l-0.605,0.017l-0.471-0.222l0.145-0.117l0.124-0.221l0.09-0.25l0.035-0.205l-0.137-0.141l-0.308,0.076l-0.532,0.233   l-0.442,0.021l-0.142-0.021l-0.163-0.075l-0.109-0.108l-0.342-0.463l-0.084-0.074l-0.152-0.029l-0.13,0.028l-0.209,0.14   l-0.124,0.052l0.049,0.116l0.068,0.088l0.086,0.063l0.105,0.04l-0.156,0.071l-0.342,0.04l-0.129,0.11l-0.047,0.164l-0.01,0.356   l-0.058,0.161l-0.083,0.159l-0.398,1.094l-0.046,0.466l-0.062,0.216l-0.181,0.394l-0.138,0.322l-0.046,0.175l-0.019,0.192   l0.022,0.287l0.077,0.105l0.115,0.054l0.136,0.132l0.012,0.121l-0.093,0.099l-0.081,0.135l0.05,0.223l-0.29,0.066l-0.108,0.214   l0.053,0.208l0.191,0.048v0.095l-0.301,0.324l-0.057,0.526l0.025,0.601l-0.054,0.552l-0.289,0.514l-0.364,0.068l-0.427-0.115   l-0.473-0.039l0.044,0.189l-0.013,0.205l-0.077,0.166l-0.277,0.111l-0.033,0.112l-0.009,0.15l-0.06,0.155l-0.101,0.085   l-0.115,0.027l-0.095-0.054l-0.039-0.158l-0.071-0.116l-0.319-0.178l-0.073-0.125l-0.548-0.466l-0.173,0.001l-0.143,0.078   l-0.122,0.088l-0.104,0.032l-0.16-0.068l-0.102-0.191l-0.124-0.045l-0.136,0.038l-0.018,0.109l0.059,0.14l0.095,0.132l-0.161,0.095   l-0.129-0.189l-0.125,0.068l-0.095,0.225l-0.038,0.277l-0.081,0.036l-0.606,0.131l-0.08,0.067l-0.056,0.103l-0.035,0.13   l0.007,0.138l0.063,0.056l0.069,0.039l0.022,0.081l-0.068,0.228l-0.115,0.088l-0.365-0.002v0.114l0.111,0.01l0.098,0.037   l0.094,0.062l0.083,0.091l-0.134,0.102l-0.022,0.113l0.007,0.123l-0.041,0.132l-0.094,0.065l-0.122,0.044l-0.099,0.081   l-0.029,0.175l0.069,0.108l0.254,0.021l0.056,0.137l-0.035,0.088l-0.078,0.086l-0.089,0.079l-0.212,0.24l-0.336,0.302l-0.319,0.372   l-0.161,0.111l-0.193-0.017l-0.269-0.161l-0.014,0.27l-0.115,0.202l-0.303,0.32l-0.2,0.104l-0.27,0.033l-0.24,0.067l-0.102,0.203   l-0.167,0.608l-0.414,0.139l-0.23-0.063l-0.748-0.205l-1.088-0.057l-0.132,0.266l-0.303,0.068l-0.845-0.068l-0.117,0.046   l-0.111,0.109l-0.159,0.239l-0.105,0.054l-0.125-0.089l-0.109-0.022l-0.468,0.182l-0.159-0.022l-0.388-0.195l-0.525,0.03   l-0.232-0.188l-0.264-0.088l-1.152-0.097l-1.828,0.515l-0.519,0.012l-0.227,0.07l-0.149,0.212l-0.012,0.225l0.221,1.3l0.089,0.237   l0.111,0.215l0.378,0.123l0.068,0.29l0.535,1.031l0.12,0.318l0.048,0.333l0.304,0.287l0.432,0.356l0.303,0.141l0.205,0.254   l0.14,0.309l0.021,0.271l0.223,0.328l-0.174,0.586l-1.154,2.119l-0.448,0.424l-0.477-0.042l0.161-0.216l-0.161-0.093l-0.179,0.161   l-0.271,0.007l-0.195-0.156l0.042-0.332l-0.192,0.105l-0.111,0.034l-0.098-0.027l-0.041-0.167l0.018-0.271l-0.008-0.269   l-0.124-0.162l-0.098,0.147l-0.094,0.108l-0.116,0.055l-0.34-0.31l-0.46,0.069l-0.25,0.081l-0.109,0.108l-0.076,0.247l-0.184,0.092   l-0.226-0.04l-0.209-0.145l-0.291,0.101l-1.068-0.031l-0.312-0.121l-0.051,0.006l-0.125,0.205l-0.099,0.047l-0.087-0.045   l-0.375-0.264l-0.438-0.119l-0.159-0.161l-0.021-0.339l-0.193,0.105l-0.196-0.058l-0.198-0.109l-0.191-0.051l-0.193,0.062   l-0.159,0.102l-0.178,0.074l-0.252-0.021l-0.043-0.035l-0.061-0.069l-0.084-0.07l-0.108-0.042l-0.089,0.011l-0.197,0.081   l-0.107,0.021l-0.443-0.051l-0.212-0.066l-0.196-0.09l0.069-0.036l0.095-0.073l0.07-0.096l-0.009-0.105l-0.085-0.084l-0.077,0.009   l-0.082,0.047l-0.104,0.028l-0.156-0.038l-0.255-0.193l-0.169-0.078l-0.077,0.059l-0.148,0.311l-0.085,0.069l-0.061-0.035   l-0.045-0.07l-0.059-0.07l-0.104-0.03l-0.153,0.1l-0.088,0.029l-0.073-0.145l-0.084-0.048l-0.101-0.028l-0.082-0.012l0.151-0.277   l0.209-0.204l0.242-0.141l0.247-0.099l-0.154-0.148l-0.59-0.233l-0.19-0.032l0.053-0.149l0.032-0.059l-0.347-0.144l-0.17-0.115   l-0.108-0.153l-0.045-0.221l0.04-0.148l0.12-0.068l0.192,0.022l-0.094-0.194l-0.244-0.389l-0.047-0.203l-0.108,0.016l-0.38-0.31   l-0.209-0.171l-0.256-0.053l-0.141,0.009l-0.062-0.085l-0.012-0.333l-0.111-0.111l-0.241,0.074l-0.242,0.171l-0.109,0.173   l-0.143,0.399l-0.633,0.265l-0.143,0.377l-0.087,0.137l-0.195-0.13l-0.338-0.375l-0.161-0.117l-0.167-0.065h-0.18l-0.194,0.08   l0.087,0.181l0.141,0.115l0.164,0.099l0.156,0.131l-0.178,0.107l-0.364,0.338l-0.122,0.072l-0.4-0.023l-0.182,0.041l-0.179,0.362   l-0.397,0.423l-0.006,0.185l0.122,0.206l0.041,0.198l-0.041,0.203l-0.209,0.418l-0.187,0.683l-0.392,0.631l-0.071,0.194   l0.079,0.381l0.157,0.476v0.387l-0.39,0.114v-0.111l0.069-0.045l0.031-0.049l0.019-0.056l0.035-0.066l-0.326-0.006l-0.358,0.273   l-0.559,0.678l-0.123,0.19l-0.263,0.623l-0.126,0.177l-0.285,0.283l-0.13,0.166l-0.285,0.658l-0.109,0.173l-0.159,0.142   l-1.282,0.764l-0.268,0.251l0.163,0.279l-0.133,0.206l-0.169,0.162l-0.115,0.155l0.031,0.194l-0.121,0.044l-0.109,0.056   l-0.091,0.081l-0.072,0.115l0.03,0.132l-0.07,0.18l-0.23,0.359l-0.192,0.141l-0.215,0.039l-0.198,0.065l-0.13,0.221l0.182-0.019   l0.152,0.016l0.06,0.071l-0.085,0.147l-0.144,0.077l-0.349,0.042l-0.166,0.131l-0.152,0.077l-0.138-0.1l-0.133-0.151l-0.122-0.077   l-0.185,0.027l-0.141,0.072l-0.465,0.327l-0.11,0.016l-0.484-0.223l-0.095-0.024l-0.112,0.008l-0.07,0.06l-0.045,0.104   l-0.055,0.099l-0.101,0.044l-0.346,0.071l-0.026,0.019l-0.236,0.169l-0.435,0.558l0.323,0.396l0.105,0.227l-0.158,0.1l-0.665,0.013   l-0.021-0.043l-0.088-0.127l-0.156-0.137l-0.167-0.046l-0.132,0.098l-0.053,0.293l-0.023,0.324l-0.078,0.167l-0.151,0.062   l-0.469,0.013l-0.146,0.032l-0.11,0.087l-0.105,0.173l-0.033,0.114l-0.007,0.209l-0.037,0.094l-0.105,0.069l-0.197-0.036   l-0.084,0.069l-0.042,0.207l-0.002,0.011l0.025,0.189l-0.044,0.112l-0.253-0.01l-0.071-0.039l-0.137-0.132l-0.101-0.042   l-0.085,0.01l-0.219,0.073l-0.153-0.055l-0.17-0.074l-0.169,0.018l-0.182,0.074l-0.07,0.166l-0.07,0.149l-0.099,0.111l-0.155,0.055   l-0.294,0.13l-0.395,0.129l-0.322,0.149l-0.226,0.166l-0.209,0.13l-0.283,0.129l-0.182,0.112l-0.267,0.092l-0.282,0.111   l-0.111,0.185v0.204l0.14,0.185l0.126,0.185l0.084,0.185l-0.057,0.148l-0.17,0.055l-0.223,0.018l-0.226-0.018l-0.306,0.055   l-0.275-0.029l-0.107-0.035l-0.09-0.048l-0.031-0.071l-0.108-0.158l-0.115-0.106l-0.055,0.085l-0.077,0.184l-0.384,0.505   l-0.555,0.558l-0.238,0.157l-0.261,0.064l-0.177,0.131l-0.112,0.306l-0.094,0.342l-0.119,0.243l-0.22,0.111l-0.571,0.127   l-0.174,0.121l-0.181,0.207l-0.456,0.293l-0.181,0.163l-0.035,0.077l-0.017,0.17l-0.018,0.057l-0.064,0.048l-0.12,0.025   l-0.047,0.028l-1.615,1.535l-0.177,0.18l-0.133,0.137l-0.015,0.188l0.064,0.437l0.017,0.383l-0.03,0.144l-0.102,0.18l-0.503,0.56   l-0.055,0.103l-0.044,0.203l-0.055,0.097l-0.085,0.065l-0.073,0.01l-0.075-0.003l-0.083,0.029l-0.727,0.713l-0.533,0.255   l-0.202,0.28l-0.216,0.135l-0.34-0.276l-0.24,0.232l-0.13,0.092l-0.163,0.079l-0.486,0.127l-0.14,0.083l-0.12-0.07l-0.083-0.081   l-0.146-0.201l-0.145-0.094l-0.13,0.055l-0.118,0.109l-0.109,0.073l-0.262,0.024l-0.308-0.022l-0.297-0.07l-0.222-0.124H622.1   l-0.392,0.284l-0.6-0.18l-0.57-0.384l-0.301-0.324l0.155-0.604l-0.188,0.071l-0.104,0.158l-0.053,0.22l-0.042,0.256l-0.238,0.806   l-0.044,0.36l-0.071,0.122l-0.313,0.197l-0.005,0.032v-0.024l-0.108-0.084l-0.033-0.05l-0.039-0.086l-0.063-0.094l-0.098-0.073   l-0.227-0.017l-0.199,0.104l-0.159,0.163l-0.406,0.628l-0.203,0.153l-0.196-0.126l-0.022-0.159l0.022-0.746l0.03-0.077l0.058-0.07   l0.033-0.098l-0.046-0.167l-0.062-0.017l-0.097,0.031l-0.055,0.077l0.061,0.119l-0.191,0.304l-0.251,0.065l-0.285,0.005   l-0.286,0.129l-0.125-0.123l-0.204-0.279l-0.134-0.1l-0.102,0.191l-0.079-0.056l-0.05-0.149l-0.008-0.087l-0.083,0.045   l-0.076,0.071l-0.025,0.1l0.072,0.131l0.12,0.156l0.122,0.225l0.021,0.199l-0.185,0.086l-0.295-0.099h-0.147l-0.065,0.146   l0.025,0.153l0.065,0.048l0.098,0.01l0.243,0.077l0.079,0.002l0.066,0.018l0.089,0.089l0.07,0.155l-0.037,0.096l-0.484,0.314   l-0.553,0.206l-0.52,0.013l-0.231-0.372l-0.091,0.064l-0.474,0.162l-0.207,0.025l-0.115-0.024l-0.147-0.071l-0.085-0.014   l-0.039,0.045l-0.058,0.093l-0.098,0.076l-0.162-0.005v0.109l0.212,0.135l-0.044,0.19l-0.321,0.368l-0.217-0.118l-0.83,0.204   l-0.26-0.178l-0.684,0.669l-0.095,0.174l-0.121,0.033l-0.66,0.326l-0.161,0.177l-0.094,0.077l-0.13,0.047l-0.043-0.066   l-0.135-0.118l-0.142-0.065l-0.066,0.094l-0.068,0.258l-0.551,0.608l-0.124-0.127l-0.089-0.116l-0.079-0.047l-0.1,0.079v0.056   l0.045,0.062l0.043,0.078l-0.011,0.106l-0.052,0.07l-0.049,0.001l-0.053-0.009l-0.073,0.038l-0.503,0.393l-0.292,0.154   l-0.258,0.063l-0.376-0.018l-0.198,0.038l-0.147,0.225l-0.31,0.114l-0.127,0.086l-0.13,0.146l-0.163,0.147l-0.173,0.115   l-0.153,0.047l-0.072,0.111l-0.075,0.218l-0.11,0.154l-0.181-0.083l-0.008,0.068l-0.014,0.036l-0.047,0.087l-0.058,0.365   l-0.472,0.503l-0.946,0.737l0.019,0.176l-0.069,0.2l-0.075,0.163l0.006,0.068l0.355,0.014l0.159,0.054l0.145,0.121l-0.227-0.002   l-0.172,0.063l-0.613,0.546l-0.106,0.041l-0.094,0.005l-0.088,0.032l-0.097,0.121l0.135,0.346l-0.101,0.108l-0.615-0.047   l-0.086,0.06l-0.104,0.134l-0.135,0.133l-0.185,0.061l-0.153-0.052l-0.138-0.094l-0.146-0.044l-0.18,0.101l0.153,0.065l0.124,0.107   l0.083,0.142l0.033,0.174l-0.496-0.269l-0.265-0.092l-0.329-0.037l0.125,0.309l0.477,0.263l0.171,0.233l-0.005,0.149l-0.082,0.122   l-0.183,0.171l-0.13,0.087l-0.135-0.041l-0.412-0.37l-0.276-0.496l-0.166-0.219l-0.312-0.168l-0.229,0.049l-0.052,0.155   l0.212,0.154v0.109l-0.321-0.076l-0.343-0.033l-0.105,0.018l-0.398,0.181l0.153,0.012l0.076,0.056l0.02,0.098l-0.017,0.141   l-0.042,0.156l-0.054,0.059l-0.214,0.073l-0.278,0.034l-0.138,0.048l-0.053,0.125l0.058,0.06l0.29,0.139l0.464,0.002l0.199,0.069   l0.191,0.173l0.113,0.258l0.014,0.273l-0.097,0.148l-0.228-0.12l-0.241,0.193l-0.835-0.075l-0.321,0.07l-0.459,0.453l-0.083,0.007   l-0.068,0.172l-0.157,0.069l-1.187-0.098l-0.401,0.028l-0.647,0.386l-0.304-0.102l-0.273-0.049l-0.216,0.333l0.091-0.011   l0.216,0.011l-0.523,0.693l-0.215,0.1l-0.299-0.097l-0.133-0.22l-0.101-0.232l-0.203-0.136l0.109-0.149l0.112-0.056l0.059-0.106   l-0.05-0.294l-0.08-0.133l-0.112-0.135l-0.075-0.176l0.036-0.26l0.29-0.234l0.138-0.175l-0.043-0.186h-0.658l-0.048-0.096   l0.113-0.217l0.246-0.332l0.122-0.057l0.575-0.102l0.105,0.03l0.149,0.137l0.099,0.04l0.099-0.006l0.169-0.075l0.254-0.059   l0.396-0.258l0.322,0.013l0.158-0.03l0.068-0.132l-0.025-0.111l-0.105-0.235l-0.024-0.155l0.085-0.212l0.205-0.167l0.255-0.089   l0.234,0.025l0.088,0.061l0.059,0.079l0.121,0.209l0.1,0.056l0.152,0.012l0.292-0.018l0.216-0.065l0.681-0.432l0.972-0.295   l0.473-0.271l0.178-0.439l-0.099-0.267l-0.36-0.317l-0.082-0.264l-0.136,0.043l-0.263-0.111l-0.159-0.166l0.173-0.125l-0.022-0.068   l-0.029-0.162l-0.019-0.069l0.279-0.048l0.076-0.17l-0.328-0.246l-0.16-0.162l0.25-0.16l0.283,0.034l0.056,0.007l0.057,0.107   l0.13-0.028l0.246-0.123l0.426-0.318l0.207-0.217l0.025-0.116l-0.079-0.158l0.251-0.362l0.132-0.149l0.166-0.089l0.13,0.002   l0.523,0.098l0.317-0.086l0.561-0.364l0.316-0.058l-0.133-0.261l-0.1,0.029l-0.11,0.146l-0.159,0.086l-0.201,0.032l-0.363,0.144   l-0.206,0.033l-0.966-0.188l-0.426,0.033l0.113,0.354l-1.911,0.141l-0.261-0.04l-0.384-0.356l-0.345-1.242l-0.287-0.512   l-0.182-0.109l-0.231-0.061l-0.515-0.029l-0.154,0.043l-0.238,0.199l-0.15,0.057l-0.072-0.023l-0.196-0.129l-0.111-0.048   l-0.406,0.011l-0.102-0.061l-0.05-0.143l0.058-0.115l0.112-0.074l0.115-0.028l0.13-0.298l0.357-0.333l0.166-0.17l0.23-0.065   l0.63,0.015l0.766-0.202l0.237-0.251l-0.077-0.201l0.388-0.104l0.314,0.515l0.084-0.065l0.032-0.064l0.012-0.078l0.027-0.103   l-0.021-0.036l-0.112-0.12l-0.022-0.045l0.031-0.048l0.102-0.102l0.021-0.049l0.031-0.046l0.057-0.056l0.031-0.081l-0.041-0.118   l-0.102-0.086l-0.081,0.023l-0.071,0.054l-0.064,0.009l-0.131-0.112l-0.181-0.392l-0.306-0.259l-0.014-0.043l-0.032-0.041   l-0.029-0.061l0.191-0.112l0.118-0.117l0.031-0.206l-0.111-0.129l-0.068-0.27l-0.009-0.076l0.444-0.203l0.294-0.556l0.344,0.043   l0.564-0.19l0.225-0.369l0.554-0.381l0.251-0.066l0.309,0.054l0.229,0.074l0.224-0.038l0.286-0.283l0.047-0.129l0.016-0.135   l0.051-0.106l0.299-0.09l0.212-0.207l0.216-0.092l0.072-0.108l0.009-0.137l-0.07-0.123l-0.113-0.046l-0.304-0.015l-0.124-0.031   l0.606-0.281l0.555-0.529l0.041-0.357l0.708-0.333l0.121-0.48l-0.169-0.454l0.277-0.017l0.256-0.122l0.229-0.191l0.371-0.267   l0.121-0.319l0.059-0.199l0.021-0.197l-0.014-0.125l0.006-0.118l-0.029-0.272l0.255-0.234l0.585-0.394l0.348-0.419l-0.084-0.693   h0.434l0.092-0.05l0.01-0.116l-0.014-0.133l0.019-0.098l0.16-0.111l0.158-0.065l0.097-0.106l-0.014-0.236l0.169-0.203l-0.089-0.308   l-0.207-0.307l-0.575-0.52l-0.548-0.12l-0.295-0.258l-0.145-0.301l0.344-0.44l0.03-0.493l-0.127-0.225l-0.254,0.246l-0.171,0.075   l-0.149-0.29l-0.47-0.531l-0.205-0.165l-1.719-0.923l-0.285-0.108l-0.237-0.257l-0.083-0.41l-0.036-0.81l-0.05-0.089l-0.088-0.212   l-0.028-0.214l0.131-0.099l0.129-0.055l0.113-0.135l0.18-0.331l-0.077-0.093l-0.474,0.326l-0.211,0.21l-0.336,0.376l0.026,0.406   l-0.123,0.284l-0.122,0.254l-0.213,0.343l-0.511,0.011l-1.126,0.036l-0.226,0.066l-0.084-0.06l-0.439-0.325l-0.209-0.181   l-0.344-0.077l-0.337-0.022l-0.105-0.081l-0.046-0.116l-0.026-0.122l-0.054-0.099l-0.128-0.076l-0.271-0.08l-0.111-0.096   l-0.265-0.135l-0.273,0.172l-0.246,0.27l-0.183,0.158l-0.155,0.005l-0.133-0.057l-0.102-0.11l-0.074-0.154l-0.155,0.213   l-0.224-0.31l-0.279-0.055l-0.277,0.126l-0.231,0.238l-0.147,0.085l-0.134,0.111l-0.121,0.126l-0.1,0.133l-0.057,0.042   l-0.254,0.117l-0.041,0.037l0.002,0.088l0.012,0.102l-0.011,0.08l0.001,0.247l-0.165,0.15l0.03,0.224l-0.209,0.09l-0.09-0.254   l-0.139-0.181l-0.279-0.099l-0.158,0.027l-0.102,0.067l-0.13,0.133l-0.082,0.17l0.043,0.188l0.016,0.156l-0.121,0.133l-0.159,0.133   l-0.086,0.154l0.037,0.224l0.187,0.048l0.224-0.03l0.21,0.046l0.18,0.081l0.119,0.172l-0.284,0.06l-0.374,0.09l-0.254,0.269   l-0.194,0.03l-0.314,0.06l-0.119,0.07l-0.193,0.027l-0.226-0.066l-0.254,0.135l-0.065,0.255l-0.036,0.252l-0.089,0.324   l-0.115,0.278l-0.112,0.118l-0.21,0.089l-0.792,0.723l-0.241,0.228l-0.104,0.284l-0.044,0.179l-0.075,0.105l-0.292,0.128   l-0.14,0.011l-0.191,0.138l-0.08,0.225l0.016,0.27l-0.013,0.14l-0.151,0.129l-0.249,0.036l-0.186,0.133l-0.075,0.29l0.096,0.1   l0.224-0.061l0.239-0.061l0.031,0.253l-0.298,0.195l-0.343,0.15l-0.372,0.255l-0.009,0.283l0.004,0.237l0.06,0.275l-0.019,0.36   l-0.14,0.264l-0.232,0.252l-0.241,0.196l-0.166,0.098l-0.472,0.003l-0.411,0.037l-0.276,0.071l-0.278,0.109l-0.221,0.24   l-0.319,0.248l-0.169,0.038l-0.236,0.136l-0.357,0.123l-0.056,0.007l-0.065,0.043l-0.32,0.176l-0.414,0.167l-1.904,0.644   l-0.396,0.301L578,255.9l0.002,0.192l-0.413,0.049l-0.286,0.125l-0.443,0.196l-0.21,0.142l-0.204,0.191l-0.281-0.028l-0.469,0.258   l-0.536,0.033l-0.456,0.319l-0.199,0.068l-0.353,0.032l-0.206,0.077l-0.205,0.122l-0.121,0.282l-0.057,0.198l0.057,0.245   l0.066,0.397l-0.398,0.022l-0.325-0.024l-0.423,0.288l-0.202,0.254l-0.291,0.271l-0.204,0.166l-0.137,0.185l-0.067,0.059   l-0.116,0.238l-0.289,1.094l-0.133,0.343l-0.197,0.329l-0.044-0.019l-0.152-0.018l-0.251,0.051l-0.251,0.144l-0.166,0.222   l0.005,0.284l0.268-0.235l0.117-0.066l-0.056,0.117l-0.044,0.122l-0.033,0.131l-0.021,0.14l0.151-0.146l0.223-0.464l0.088-0.046   l0.127,0.082l-0.22,0.586l-0.063,0.616l0.162,0.059l0.298,0.496l0.09,0.326l-0.101,0.313l-0.189,0.405l-0.269,0.271l-0.337,0.114   l-0.255-0.083l-0.21,0.126l-0.629,0.889l-0.402,0.486l-0.356,0.429l-0.261,0.272l-0.268,0.338l-0.251,0.148l-0.603,0.595   l-0.16,0.121l-0.177,0.075l-0.182,0.015v-0.108l0.426-0.298l0.114-0.1l0.063-0.139l0.035-0.152l0.064-0.132l0.155-0.077   l-0.276,0.017l-0.486,0.226l-0.25,0.056l0.055-0.182l-0.159-0.217l0.027-0.2l-0.168,0.092l-0.209,0.466l-0.276,0.175l-0.229,0.173   l-0.241,0.053l-0.531,0.013l-0.459-0.091l-0.432-0.091l-0.336-0.019l-0.331,0.186l-0.336,0.019l-0.378-0.032l-0.087,0.144   l0.11,0.215l-0.192,0.126l-0.284,0.204l-0.204,0.062l-0.67,0.509L560.661,270l-0.224,0.124l-0.182,0.164l-0.206-0.003l-0.294-0.14   l-0.365-0.036l-0.369-0.147l-0.319-0.344l-0.23-0.487l-0.18-0.367l-0.344-0.549l-0.5-0.432l-0.578-0.242l-0.197-0.012l-0.615,0.054   l-0.482,0.059l-0.516,0.16l-0.835,0.727l-0.617,0.539l-0.224,0.117l-0.251-0.073l0.032,0.268l0.095,0.069l0.126,0.145l0.155,0.153   l0.068,0.333l0.094,0.276l0.089,0.397l0.019,0.26l-0.362-0.017l-0.156-0.031l-0.312-0.159l0.028,0.133l0.014,0.026l0.036,0.049   l-1.412,2.464l-0.064,0.275l-0.024,0.275l-0.034,0.871l-0.164,0.331l-0.017,0.27l0.036,0.221l-0.085,0.198l-0.107,0.321   l0.254,0.128l0.164,0.401l0.992,2.006l0.544,0.977l0.994,1.219l0.377,0.333l0.713,0.357l0.47,0.176l0.245,0.335l0.161,0.228   l0.13-0.054l0.206,0.022l0.351,0.235l0.175,0.108l0.046,0.175l-0.061,0.107l0.145,0.152l0.188,0.034l0.034,0.028l0.124-0.051   l0.135-0.09l0.131-0.053l0.304,0.141l0.789-0.036l1.089,0.246l1.268,0.235l0.282,0.054l0.267,0.085l0.245,0.116l0.205,0.083   l0.245,0.218l0.102,0.066l0.087-0.024l0.071-0.056l0.052-0.031l0.13-0.055l0.119-0.133l0.18-0.311l0.186-0.206l0.443-0.296   l1.194-0.136l0.51,0.048l0.222,0.002l0.17-0.013l0.658,0.421l0.586,0.375l-0.286,0.568l0.194,0.121l0.16,0.227l0.195,0.533   l0.263,0.479l0.586,0.217l0.499,0.505l0.277,0.853l0.439,0.42l0.579,0.303l0.41,0.478l0.187,0.768l-0.044,0.629l-0.429-0.048   l-0.322-0.365l-0.783-0.526l-0.574-0.045l-0.366,0.265l-0.109,0.26l-0.024,0.201l-0.166,0.517l-0.207,0.291l-0.179,0.321   l-0.076,0.249l-0.025,0.289l-0.112,0.597l-0.15,2.186l0.055,0.598l0.133,0.577l0.127,0.213l0.205,0.085l0.275,0.069l0.174,0.171   l0.143,0.219l0.18,0.21l0.638,0.376l0.346,0.316l1.603,0.591l1.744,0.237l0.384-0.181l0.559-0.082l0.159,0.021l0.282-0.06   l1.101,0.06l0.635-0.057l0.609-0.146l0.094-0.216l0.146-0.192l0.969-0.757l0.225-0.222l-0.12-0.501l-0.263-0.53l-0.195-0.31   l0.143-0.235l0.265-0.151l0.528-0.197l0.672-0.409l0.108-0.122l0.127-0.007l0.575-0.258l1.446-1.018l1.245-1.229l0.282-0.493   l-0.182-0.469l-0.143-0.073l-0.172-0.03l-0.351-0.002l-0.138-0.031l-0.141-0.067l-0.082-0.066l0.049-0.031h1.04l0.641-0.121   l0.198-0.14l0.061-0.031l0.222-0.077l0.364-0.373l0.229-0.137l1.05-0.195l0.095-0.043l0.329-0.251l0.472-0.098l0.442-0.19   l0.346-0.272l0.375-0.187l0.531,0.062l0.415,0.177l0.17,0.019l0.111-0.03l0.221-0.135l0.133-0.03l0.246,0.037l0.299,0.111   l0.169,0.184l-0.135,0.254l0.137,0.211l0.181,0.188l0.209,0.136l0.218,0.052l0.122,0.049l0.069,0.12l0.053,0.146l0.066,0.129   l0.12,0.09l0.124,0.001l0.126-0.034l0.135-0.012l0.528,0.076l0.279,0.101l0.12,0.168l-0.069,0.18l-0.116,0.176l-0.023,0.182   l0.208,0.199l-0.147,0.166l-0.013,0.225l0.088,0.227l0.15,0.173l0.184,0.078l0.225,0.027l1.32-0.087l0.414-0.137l0.337-0.282   l-0.157-0.297l-0.075-0.094l0.205,0.074l0.242,0.147l0.232,0.183l0.178,0.183l-0.355,0.029l-0.193,0.17l0.003,0.241l0.227,0.243   l0.259,0.182l0.252,0.239l0.194,0.287l0.077,0.328l0.07,0.121l0.165,0.072l0.348,0.046l0.169,0.049l0.144,0.12l0.232,0.273   l0.241,0.06l0.679-0.18l0.277-0.03l-0.241-0.264l-0.233-0.067l-0.531,0.126l0.061-0.147l0.111-0.114l0.119-0.077l0.095-0.041   l0.154-0.016l0.111,0.04l0.086,0.054l0.08,0.028l0.826,0.157l2.325-0.036l0.22,0.065v0.088l-0.093,0.074l-0.051,0.109v0.117   l0.059,0.099l0.085,0.026l0.348-0.026l0.106-0.121l-0.222-0.536l0.039-0.121l0.152-0.093l0.246-0.44l0.105-0.149l0.205-0.084   l0.201-0.046l0.116-0.105l-0.052-0.26h0.07l0.099,0.14l0.147,0.054l0.163-0.044l0.14-0.15l0.2,0.173l0.14,0.253l0.008,0.261   l-0.193,0.198l-0.064,0.246l0.131,0.383l0.234,0.335l0.239,0.213l0.165-0.202l0.135-0.214l0.164-0.152l0.24-0.024l0.186,0.125   l0.19,0.385l0.203,0.082h1.818l0.051-0.021l0.052-0.043l0.058-0.038l0.077-0.003l0.047,0.042l0.031,0.126l0.035,0.027l0.934,0.148   l0.239-0.04l0.105-0.152l0.13-0.051l0.596,0.065l0.174-0.014l0.088,0.074l0.006,0.286l-0.111,0.215l-0.259-0.142l-0.47,0.195   l-0.334,0.26l-0.087,0.041l-0.075,0.072l0.23,0.436l0.041,0.269l-0.42-0.339l-0.09-0.01l-0.006,0.127l0.124,0.514l0.075,0.119   l0.263,0.327l0.055,0.092l0.022,0.227l0.07,0.156l0.121,0.097l0.174,0.049v0.097l-0.495,0.058l-0.123,0.047l-0.125,0.173   l0.064,0.106l0.094,0.112l-0.032,0.189l-0.349-0.173l-0.379,0.02l-0.31,0.217l-0.135,0.421h-0.071l0.016-0.495l-0.016-0.095   l-0.119-0.035l-0.072,0.097l-0.037,0.155l-0.029,0.276l-0.062,0.254l0.001,0.133l0.047,0.069l0.079,0.038l0.075,0.068l0.033,0.164   l-0.097,0.123l-0.422,0.293l-0.101,0.214l0.077,0.215l0.171,0.038l0.144-0.113l-0.007-0.228l0.281-0.044l0.587,0.146l0.306-0.103   l-0.166,1.18l0.083,0.263l-0.071,0.165l-0.103,0.157l-0.112,0.073l-0.1-0.088l0.018-0.161l0.101-0.151l0.041-0.119l-0.16-0.061   l-0.052,0.089l-0.188,0.094l-0.234,0.076l-0.189,0.031l-0.107-0.024l-0.109-0.042l-0.099-0.024l-0.073,0.036l-0.041,0.109   l0.014,0.111l0.046,0.087l0.058,0.035l0.099,0.04l0.091,0.1l0.064,0.126l0.014,0.121l-0.061,0.085l-0.117,0.055l-0.207,0.053   l-0.058,0.001l-0.044-0.031l-0.039-0.04l-0.049-0.018l-0.066,0.026l-0.022,0.06l-0.006,0.066l-0.017,0.042l-0.052,0.055   l-0.114,0.173l-0.066,0.062l-0.401,0.087l-1.353-0.28l-0.169-0.101l-0.052-0.233l0.047-0.262l0.136-0.185h0.781l-0.146-0.112   l-0.473-0.177l-0.414-0.321l-0.135-0.066l0.18-0.574l0.013-0.277l-0.154-0.118l-0.182,0.125l-0.023,0.288l0.014,0.324l-0.071,0.232   l-0.164,0.002l-0.207-0.089l-0.179,0.014l-0.076,0.31l-0.076,0.176l-0.178,0.139l-0.207,0.09l-0.157,0.033l0.027-0.266   l-0.007-0.354l0.032-0.309l0.138-0.133l0.045-0.031l-0.053-0.066l-0.108-0.066l-0.117-0.03l-0.285,0.01l-0.484-0.097l-0.398-0.01   l-0.129,0.11l0.096,0.246l0.299,0.419l-0.392,0.264l-1.462,0.411l-0.103,0.067l-0.238,0.2l-0.046,0.076l-0.02,0.135l-0.058,0.144   l-0.088,0.114l-0.103,0.046l-0.221,0.044l-0.419,0.192l-0.25,0.046v-0.087l0.279-0.155l0.114-0.038v-0.097l-0.294,0.037   l-0.235,0.124l-0.146,0.235l-0.035,0.368l0.121,0.389l0.025,0.207l-0.102,0.087l-0.144-0.037l-0.102-0.094l-0.066-0.125   l-0.039-0.129l-0.127,0.068l-0.113-0.011l-0.146-0.057l-0.11,0.047l-0.15,0.121l-0.127,0.025l-0.253-0.091l-0.08-0.198l0.076-0.2   l0.216-0.09l0.169-0.009l0.116-0.036l0.088-0.074l0.091-0.126l0.111-0.104l0.252-0.094l0.108-0.087l0.028-0.176l-0.216-0.017   l-0.286,0.068l-0.185,0.077l-0.095,0.1l-0.086,0.127l-0.094,0.109l-0.121,0.051l-0.152-0.032l-0.044-0.085l-0.022-0.1l-0.089-0.073   l-0.282,0.006l-0.074,0.174l0.057,0.204l0.105,0.098l0.039,0.076l-0.052,0.17l-0.145,0.285l-0.097,0.055l-0.14,0.01l-0.266-0.017   l-0.213,0.101l-0.14,0.216l0.018,0.205l0.252,0.065l-0.186,0.083l-0.191-0.004l-0.395-0.079l-0.218,0.008l-1.771,0.61l-0.336,0.249   l-0.434,0.487l-0.108,0.09l-0.197-0.001l-0.229-0.249l-0.113,0.048l-0.019,0.101l0.037,0.286l-0.018,0.103l-0.101,0.078l-0.1-0.009   l-0.097-0.044l-0.087-0.026l-0.608-0.024l-0.18-0.072l0.087-0.22l-0.036-0.117l-0.127-0.048l-0.188-0.008l-0.145-0.06l-0.316-0.257   l-0.16-0.06l-0.3,0.098l-0.603,0.378l-0.229,0.005l-0.037,0.122l-0.005,0.071l0.035,0.047l0.086,0.049l-0.116,0.268l-0.057,0.302   l0.09,0.213l0.322-0.005l0.171-0.139l0.224-0.461l0.146-0.178l0.271-0.116l0.161,0.096l0.342,0.509l0.119,0.064l0.099,0l0.07,0.053   l0.027,0.22l0.055,0.067l0.124-0.021l0.133-0.08l0.075-0.111h0.077l-0.025,0.232l-0.108,0.162l-0.122,0.144l-0.055,0.179   l0.018,0.131l0.137,0.402l-0.177,0.034l-0.168,0.004l-0.15,0.058l-0.13,0.193l0.07,0.155l0.005,0.122l-0.035,0.104l-0.089,0.192   l-0.088,0.129l-0.095,0.114l-0.077,0.048l-0.201-0.126l-0.064-0.514l-0.199-0.139l0.064-0.32l-0.285-0.122l-0.39,0.006   l-0.248,0.061l-0.031,0.05l-0.083,0.18l-0.039,0.058l-0.061,0.034l-0.144,0.054l-0.055,0.051l-0.312,0.584l0.047,0.229l0.214,0.302   l0.143,0.264l-0.169,0.111l-0.154-0.031l-0.279-0.137l-0.08-0.024l-0.161,0.077l-0.046,0.118l0.057,0.142l0.15,0.153l-0.084,0.186   l0.065,0.154l0.115,0.162l0.059,0.213l0.134,0.88l0.066,0.183l0.13,0.261l-0.091,0.172l-0.781,0.385l-0.044-0.016l-0.037-0.051   l-0.044-0.029l-0.262,0.19l-0.322-0.084l-0.154,0.029l-0.065,0.196l-0.11,0.116l-0.25,0.04l-0.459-0.01l-0.133,0.049l-0.298,0.242   l-0.157,0.092l-0.591,0.185L583,312.979l-0.16-0.128l-0.166-0.101l-0.177-0.06l-0.193-0.006v-0.086l0.186-0.16l0.043-0.165   l0.014-0.185l0.105-0.217l0.138-0.227l0.301-0.778l-0.148-0.305l-0.105-0.13l-0.186-0.053l-0.124-0.554l-0.061-0.118l-0.226,0.146   l-0.146,0.415l0.018,0.424l0.268,0.175l-0.162,0.22l-0.229-0.068l-0.229-0.144l-0.158-0.007l-0.044-0.034l-0.025-0.034   l-0.029-0.026l-0.056-0.01l0.031-0.32l-0.366,0.04l-0.478,0.143l-0.309-0.011l-0.055-0.11l-0.011-0.074l-0.037-0.039l-0.124-0.012   l-0.049,0.044l-0.056,0.098l-0.022,0.099l0.05,0.045l0.169,0.071l0.044,0.169l-0.045,0.204l-0.18,0.372l-0.033,0.247l0.037,0.257   l0.119,0.219l0.188,0.119l0.215,0.059l0.207,0.089l0.163,0.211l0.039,0.222l-0.013,0.524l0.052,0.211l0.122,0.128l0.133-0.011   l0.365-0.204l-0.006,0.379l0.15-0.011l0.364-0.281l0.066-0.064l0.014-0.118l0.033-0.06l0.119,0.107l0.087,0.13l0.025,0.099   l-0.02,0.09l-0.052,0.104l-0.163,0.147l-0.453,0.133l-0.199,0.157l-0.472,0.532l-0.111,0.192l-0.054-0.243l0.101-0.176l0.116-0.16   l-0.008-0.192l-0.232,0.096l-0.064,0.072l-0.196,0.272l-0.041,0.082l-0.069,0.053l-0.323,0.002l-0.113,0.044l-0.509,0.534   l-0.152,0.276l-0.216,1.16l-0.191,0.446l-0.373-0.064l-0.229-0.299l-0.135-0.102l-0.138,0.06l-0.196,0.167l-0.091,0.12l0.352,0.355   l0.05,0.081l-0.055,0.077l-0.254,0.26l-0.076,0.13l-0.013,0.153l0.028,0.113l0.043,0.111l0.019,0.146l-0.044,0.131l-0.101,0.06   l-0.117,0.037l-0.089,0.062l-0.195,0.099l-0.192-0.135l-0.104-0.272l0.068-0.315l-0.322,0.14l-0.46,0.76l-0.307,0.242l0.047-0.332   l0.004-0.133l-0.051-0.105l-0.129-0.055l-0.156,0.018l-0.132,0.075l-0.053,0.113l-0.064,0.092l-0.146,0.076l-0.169,0.051   l-0.127,0.019l-0.111,0.07l-0.075,0.166l-0.082,0.333l-0.34,0.835l-0.048,0.262l-0.044,0.1l-0.299,0.378l-0.057,0.14l-0.026,0.335   l-0.038,0.143l-0.084,0.143l-0.331,0.379l-0.099,0.186l-0.066,0.097l-0.431,0.151l-0.382-0.015l-0.08,0.015l-0.054,0.111   l-0.023,0.18v0.321l-0.036,0.085l-0.16,0.244l-0.191,0.67l-0.193,1.218l-0.143,0.281l-0.247,0.117l-0.248,0.034l-0.385,0.133   l-0.337,0.116l-0.242,0.029l-0.089,0.029l-0.097,0.083l-0.061,0.133l-0.038,0.324l-0.052,0.115l-0.073,0.224v0.365l0.047,0.364   l0.072,0.222l-0.166,1.04l0.05,0.64l0.099,0.343l-0.146,0.254l0.071,0.094l-0.057,0.144l-0.018,0.223l0.04,0.204l0.126,0.087   l0.073-0.092l0.126-0.425l0.095-0.142l0.141-0.027l0.561,0.113l0.231-0.022l0.149-0.068l0.114-0.117l0.132-0.17l0.128,0.086   l0.199,0.21l0.137,0.081l0.156,0.033l0.303,0.016l0.158,0.054l0.238,0.188l0.124,0.235l-0.017,0.236l-0.183,0.187l0.851,0.947   l0.645,0.461l0.126,0.188l0.106,0.08l0.359,0.168v0.066l0.005,0.067l0.022,0.059l0.049,0.037l0.122,0.031l0.304-0.031l0.227,0.037   l0.266,0.097l0.253,0.136l0.498,0.447l0.35,0.155l0.406,0.063l0.486,0.012l0.395,0.096l0.486,0.236l0.453,0.293l0.631,0.574   l0.447,0.246l1.376,0.493l0.196,0.162l0.078,0.289l0.03,0.335l0.085,0.298l0.279,0.551l0.119,0.413l0.089,0.3l0.088,0.214   l0.003,0.344l0.26,0.471l0.06,0.22l0.056,0.1l0.077,0.107l0.068,0.131l0.155,0.896l0.26,0.731l0.061,0.265l-0.008,0.134   l-0.16,0.116l0.014,0.132l0.084,0.13l0.134,0.06l0.141,0.128l0.135,0.291l0.086,0.316l-0.014,0.205l0.163,0.156l0.207,0.134   l0.18,0.161l0.075,0.241l0.011,0.523l0.066,0.55l-0.102-0.066l-0.086-0.008l-0.069,0.051l-0.06,0.115l0.478,0.534l0.148,0.217   l0.274,0.634l0.113,0.2l0.617,0.75l0.075,0.15l0.201,0.527l0.042,0.203l0.07,1.018l0.06,0.175l0.145,0.232l0.17,0.201l0.138,0.086   l0.149,0.025l0.197,0.077l0.14,0.131l-0.03,0.187l-0.055,0.042l-0.064,0.024l-0.055,0.036l-0.022,0.083l0.026,0.068l0.113,0.127   l0.021,0.05l-0.01,0.209l-0.039,0.042l-0.111,0.008l0.623,0.539l0.246,0.369l-0.167,0.393l0.229,0.04l0.073,0.184l0.007,0.514   l0.072,0.323l0.088,0.061l0.144-0.057l0.238-0.034l0.257,0.085l0.064,0.169l-0.082,0.484l0.002,0.203l0.216,1.602l-0.034,0.421   l-0.277,0.547l-0.316,0.216l0.102,0.489l-0.011,0.402l-0.116-0.092l-0.08-0.098l-0.019-0.096l0.063-0.089l-0.077-0.092   l-0.112,0.203l0.002,0.158l0.38,0.358l0.484,0.153l0.052,0.398l0.37,0.335l0.353,0.136l0.517,0.357l0.25,0.147l0.266,0.182   l0.226,0.107l0.142,0.2l0.024,0.311h0.077l0.142-0.127l0.419,0.158l0.187,0.107l0.201,0.12l0.267,0.08l0.641,0.334l0.933,0.441   l0.399,0.401l0.133,0.44l0.169,1.114l0.019,0.183l0.018,0.066l-0.04,0.023l-0.159,0.052l-0.277,0.041l-0.119,0.036l-0.066,0.098   l0.081,0.057l0.347,0.782l0.299,0.065l0.068,0.17l0.011,0.234l0.127,0.261l0.069,0.021l0.076-0.038l0.071-0.055l0.055-0.028   l0.064,0.029l0.101,0.125l0.069,0.028l0.097-0.028l0.387,0.023l0.265,0.081l0.453,0.206l0.692,0.322l0.314,0.271l0.392,0.228   l0.108,0.12l0.419,0.284l0.388,0.331l0.264,0.24l0.037,0.33l0.256,0.308l0.307,0.545l-0.003,0.504l0.307,0.525l0.23,0.427   l0.094,0.368l-0.176,0.27l-0.485,0.21l-0.619-0.004l-0.773-0.275l-0.522-0.119l-0.31-0.04l-0.232-0.117l-0.542-0.215l-0.372-0.226   l-0.257-0.109l-0.255-0.073l-0.132-0.056l-0.108-0.126l-0.084-0.124l-0.064-0.057l-0.166-0.06l-0.727-0.395l-1.116-0.568   l-0.351-0.098l-0.663,0.329l-0.483,0.389l-0.793,0.538l-0.322-0.073l-0.274-0.155l-0.254-0.078l-0.391-0.019l-0.312,0.085   l-0.308-0.145l-0.114-0.259l0.029-0.31v-0.099l0.019-0.124l-0.039-0.106l-0.177-0.045l-0.074-0.046l-0.095-0.244l-0.061-0.111   l-0.663-0.874l-0.409-0.416l-0.76-0.179l-1.237-0.547l-0.78,0.004l-0.488-0.079l-0.358,0.002l-0.712,0.394l-0.75,0.365l-0.694,0.72   l-0.376,0.307l-0.491,0.158l-0.542,0.002l-0.504-0.087l-0.467-0.158l-0.427-0.212l-0.366-0.265l-0.317-0.335l-0.8-1.238   l-0.104-0.203l-0.042-0.202l0.029-0.258l0.115-0.513l0.011-0.28l-0.245,0.258l-0.146-0.21l-0.15-0.686l-0.137-0.215l-0.227-0.24   l-0.269-0.196l-0.263-0.081l-0.149-0.02l-0.271-0.077l-0.16-0.003l-0.583,0.1l-0.176-0.116l-0.18-0.232l-0.227-0.175l-0.317,0.057   l0.409,0.248l0.133,0.119l0.202,0.281l0.077,0.185l-0.078,0.082l-0.028,0.11l-0.243,0.579l-0.063,0.204l-0.15,0.114l-0.18,0.082   l-0.157,0.107l0.245,0.101l0.199-0.078l0.164-0.17l0.135-0.172l0.213-0.195l0.124,0.025l0.122,0.145l0.205,0.161l0.282,0.063   l0.265,0.016l0.113,0.081l-0.281,0.483l0.007,0.251l0.091,0.227l0.141,0.166l0.8,0.365l0.129,0.132l0.455,0.423l0.355,0.365   l0.257,0.366l0.198,0.289l0.314,0.249l0.367,0.097l1.043,0.41l0.536,0.108l0.585-0.062l1.258-0.633l0.872-0.178l0.159-0.073   l0.267-0.098l-0.018-0.276l0.014-0.244l0.159-0.049l0.547,0.085l0.978,0.364l0.744-0.099l0.226,0.008l0.684,0.266l0.334,0.833   l0.313,0.561l0.197,0.601l-0.193,0.253l-0.637-0.199l-0.146-0.162l-0.124-0.184l-0.119-0.139l0.041,0.388l0.121,0.241l0.192,0.155   l0.945,0.326l0.718,0.192l0.602,0.072l0.365,0.089l0.374,0.109l0.603,0.252l0.876,0.525l0.762,0.758l0.374,0.362l0.856,1.27   l0.233,0.184l0.226,0.179l0.644,0.328l0.343,0.349l1.112,0.801l0.966,0.402l0.434,0.301l0.625,0.417l0.592,0.889l1.127,1.525   l0.835,1.547l0.301,0.886l-0.196,0.536l-0.596,0.226l-1.093,0.051l-0.883,0.091l-1.151,0.129l-0.998,0.264l-0.576,0.247   l-0.403,0.19l-0.518,0.209l-0.679,0.71l-0.193,0.137l-0.779,0.183l-0.484,0.187l-0.216,0.13l-0.285,0.256l-0.213,0.118   l-0.118,0.117l-0.078,0.133l-0.057,0.126l-0.065,0.11l-0.108,0.089l-0.215,0.052l-0.622,0.083l-0.308,0.154l-0.25,0.173   l-0.231,0.192l-0.327,0.48l-0.195,0.444l-0.032,0.262l0.04,0.18l0.069,0.114l0.012,0.115l-0.122,0.182l-0.081,0.038l-0.226,0.022   l-0.078,0.03l0.111,0.166l0.051,0.055l0.069,0.048v0.081l-0.163,0.013l-0.142,0.066l-0.426,0.503l-0.213,0.327l-0.238,0.114   l-0.264,0.039l-0.202-0.163l-0.177-0.276l-0.102-0.427l-0.202-0.213l-0.328-0.238l-0.353-0.099l-0.541-0.06l-1.585,0.034   l-0.553,0.18l-0.162,0.29l-0.099,0.177l-0.11,0.428l-0.098,0.403l-0.112,0.227l-0.163,0.064l-0.252-0.074l-0.295-0.219   l-0.352-0.103l-0.309,0.01l-0.205,0.121l-0.498,0.734l-0.551,0.445l0.361-0.023l0.238-0.225l0.343-0.238l0.224-0.446l0.276-0.099   l0.239-0.014l0.216,0.199l0.19,0.187l0.215,0.111l0.201-0.001l0.188-0.115l0.117-0.198l0.109-0.199l0.185-0.334l0.334-0.832   l0.302-0.077l0.541-0.041l1.095,0.07l0.34,0.174l0.064,0.301l0.312,0.846l0.156,0.262l0.304,0.12l0.101,0.137l-0.487,0.455   l-0.287,0.409l-0.251,0.267l-0.155,0.143l0.019,0.165l0.244,0.26l0.33,0.231l0.21,0.054l0.253,0.013l0.357-0.093l0.113,0.003   l0.079,0.045l0.136,0.151l0.093,0.073l-0.097-0.304l-0.216-0.096l-0.572,0.043l-0.296-0.059l-0.265-0.155l-0.207-0.227l0.188-0.186   l0.432-0.568l0.57-0.538l0.703,0.162l0.171,0.37l0.278,0.138l0.448,0.061l0.347-0.211l0.347-0.08l0.068-0.05l0.387-0.2l1.299-0.94   l0.222-0.247l0.237-0.316l0.404-0.155l0.778-0.142l0.669,0.134l0.726,0.172l0.591,0.421l0.875,0.956l0.54,0.775l0.367,0.646   l0.411,0.675l0.225,0.306l0.171,0.237l0.22,0.232l0.328,0.203l0.289,0.085l-0.118,0.236l0.117-0.02l0.202-0.136l0.197-0.009   l0.33,0.132l0.224,0.151l0.378,0.145l0.265,0.105l0.294,0.12l0.177,0.058l0.234,0.409l0.159,0.005l0.145-0.02l0.218-0.023   l0.844,0.038l0.129-0.029l0.215-0.128l0.217-0.099l0.263,0.042l0.082,0.251l-0.245,0.169l-0.522,0.261l-0.458,0.203l-0.511,0.167   l-0.192,0.156l-0.331,0.255l-0.14,0.238l-0.252,0.273l-0.191-0.114l-0.138,0.097l-0.08,0.225l-0.041,0.372l-0.315,0.272   l-0.658,0.449l-0.665,0.833l-0.154,0.217l-0.19,0.122l-0.23,0.079l-0.213-0.002l-0.139,0.031l-0.136-0.001l-0.167,0.113   l-0.188,0.028l-0.206-0.111l-0.492,0.548l-0.094-0.038l-0.028-0.197l-0.037-0.234l-0.066-0.038l-0.133-0.004l-0.169,0.06   l-0.101,0.077l-0.086,0.099l-0.108,0.078l-0.169,0.013v0.081l0.055,0.051l0.099,0.172l-0.019,0.15l-0.16,0.102l-0.151,0.177   l0.168,0.366l-0.001,0.317l0.254-0.072l0.095-0.365l0.071-0.336l0.285-0.118l-0.054,0.103l-0.094,0.259l0.248,0.052l-0.022,0.187   l-0.165,0.2l-0.183,0.094l-0.038,0.029l-0.011,0.064l0.025,0.064l0.068,0.161l0.141-0.037l0.131-0.065l0.122-0.112l0.132-0.131   l0.075-0.093l0.122-0.187l0.057-0.15l0.066-0.168l0.113-0.15l0.131-0.046l0.235-0.065l0.461-0.157l0.372-0.199l-0.014-0.128   l0.084-0.047l0.204-0.136l0.126-0.056l0.155,0.002l0.008,0.039v0.084l0.014,0.088l0.053,0.056l0.072-0.013l0.093-0.053l0.205-0.1   l0.028,0.132l-0.104,0.281l0.046,0.169l0.037,0.122l0.156,0.094l0.135-0.083l0.245-0.186l0.106-0.318l0.105-0.175l0.191,0.05   l-0.029-0.156l-0.094-0.08l-0.124-0.052l-0.131-0.075l-0.16,0.085l-0.193,0.028l-0.193-0.03l-0.084-0.031l-0.151,0.045l0.039-0.233   l0.293-0.168l0.247-0.327l0.252-0.079l0.183-0.116l0.221-0.005l0.157-0.148l0.138,0.049l0.221-0.052l0.183-0.174l0.13,0.083   l0.174,0.302l0.124,0.067l0.144,0.048l0.055,0.119l-0.003,0.318l-0.082,0.113l-0.158,0.05l-0.097,0.067l0.098,0.165l-0.313,0.095   l-0.133,0.086l0.022,0.133l0.111,0.066l0.151,0.063l0.097,0.087l-0.047,0.139l0.031,0.095l0.32,0.398l-0.018,0.13l-0.069,0.094   l-0.062,0.115l-0.005,0.194l-0.111-0.168l-0.127-0.086l-0.071,0.031l-0.085,0.093l0.074,0.122l-0.085,0.131l-0.066,0.103   l0.065,0.122l-0.058,0.234l-0.001,0.186l0.122,0.134l0.028-0.008l0.023,0.105l-0.001,0.095l-0.072,0.062l-0.182,0.004l0.03,0.049   l0.047,0.128l-0.173,0.084l0.061,0.182l0.185,0.183l0.201,0.082l0.109-0.041l0.148-0.184l0.133-0.041l0.014,0.047l0.116,0.229   l0.064,0.078l-0.282,0.02l-0.151,0.079l-0.029,0.163l0.075,0.269l-0.162-0.089l-0.037,0.17l0.003,0.075l0.034,0.109l-0.236,0.001   l-0.321,0.113l-0.602,0.337l-0.317-0.005l-0.308-0.085l0.031-0.439l0.02-0.177l0.058-0.364l0.011-0.29l0.067-0.346l-0.024-0.162   l0.102-0.086l0.11-0.058l0.119-0.03l0.133-0.003l-0.112-0.196l-0.155,0.022l-0.136,0.11l-0.06,0.064l-0.13-0.127l-0.003-0.182   l0.133-0.408l-0.147-0.007l-0.122,0.024l-0.102,0.063l-0.093,0.104l0.138,0.285l0.08,0.538l-0.04,0.551l-0.177,0.318l-0.146,0.36   l-0.078,0.074l-0.164,0.179l-0.225,0.102l-0.383-0.02l-0.205-0.094l-0.119-0.247l-0.031-0.197l0.028-0.652l0.047-0.177l0.099-0.244   l-0.16-0.086l-0.176,0.067l0.046,0.219l-0.068,0.266l0.107,0.694l-0.039,0.288l-0.16-0.228l-0.094-0.277l-0.201-0.832l-0.053-0.109   l-0.11-0.068l-0.127,0.012l-0.012,0.108l0.059,0.137l0.08,0.098l-0.131,0.077l-0.138,0.006l-0.279-0.082v0.088l0.119,0.165   l-0.066,0.26l-0.154,0.249l-0.136,0.131v0.089l0.077,0.166l-0.093,0.134l-0.142,0.038l-0.075-0.121l-0.047-0.155l-0.102,0.076   l-0.11,0.193l-0.058,0.199l-0.283-0.144l-0.132,0.01l-0.127,0.134l0.394,0.178l-0.046,0.025l-0.009,0.008l-0.005,0.013   l-0.023,0.042h0.23v0.089l-0.169,0.035l-0.149,0.051l-0.146,0.096l-0.155,0.171l1.077,0.027l0.36-0.138l1.05,0.023l0.035,0.115   l0.001,0.209l-0.036,0.226l-0.076,0.166l-0.176,0.101l-0.16-0.044l-0.157-0.094l-0.167-0.052l-0.221,0.048l-0.075,0.13l0.02,0.397   l0.068,0.032l0.119-0.044l0.047-0.094l-0.149-0.115l0.202-0.148l0.68,0.117l0.277-0.146l0.451,0.317l0.091,0.125l-0.157,0.049   l-0.16,0.134l-0.089,0.185l0.064,0.205l0.05,0.036l0.058,0.012l0.127-0.004l0.051,0.023l-0.005,0.053l-0.015,0.059l0.015,0.042   l0.09,0.03l0.196,0.028l0.094,0.031l-0.229,0.155l-0.091,0.117l-0.06,0.169l-0.63-0.223l-0.263-0.137l-0.203-0.266l-0.024,0.321   l-0.164,0.106l-0.187-0.073l-0.088-0.214l-0.106-0.036l-0.229-0.017l-0.216,0.087l-0.068,0.275l0.148-0.088l0.031,0.132   l0.047,0.104l0.066,0.054l0.093-0.025l0.105,0.142l0.166,0.076l0.185,0.058l0.163,0.085l0.111-0.066l0.128-0.022l0.104,0.032   l0.069,0.141l0.111-0.007l0.025,0.048l-0.013,0.082l-0.058,0.124l-0.014,0.064l0.024,0.182l0.053,0.013l0.076-0.051l0.078-0.009   l0.165,0.101l0.066,0.059l0.086,0.105l-0.182,0.173l-0.08,0.055l-0.124,0.037v0.088h0.304v0.096l-0.13,0.035l-0.097,0.05   l-0.08,0.071l-0.075,0.101l-0.03,0.034l-0.044,0.033l-0.046,0.046l-0.04,0.072l0.056,0.105l0.03,0.082l-0.011,0.077l-0.18,0.145   l-1.164,0.314l-1.716-0.148l-0.192-0.067l-0.159-0.101l-0.158-0.143l-0.087-0.1l-0.04-0.058l-0.053-0.045l-0.129-0.062   l-0.113-0.024l-0.254-0.023l-0.097-0.049l-0.036-0.079l-0.083-0.277l-0.034-0.086l-0.112-0.12l-0.073-0.029l-0.079,0l-0.124-0.028   l-0.186-0.08l-0.122-0.097l-0.058-0.079l-0.022-0.078l-0.042-0.064l-0.11-0.043v0.081l0.196,0.336l0.138,0.085l0.244,0.027   l0.143,0.075l0.138,0.171l0.103,0.194l0.043,0.137l0.109,0.096l0.51,0.187l0.152,0.199l-0.007,0.279l-0.138,0.11l-0.182,0.068   l-0.135,0.159l0.784-0.218l0.423-0.051l0.185,0.182l0.368-0.189l0.464,0.091l0.398,0.307l0.228,0.112l0.175,0.418l0.055,0.325   l0.091,0.361l0.125,0.263l0.268,0.333l0.096,0.263l-0.348,0.033l-0.181-0.016l-0.158,0.03l-0.107,0.149l0.11-0.016l0.268-0.023   l0.449,0.043l0.262,0.153l-0.084,0.152l-0.18,0.144l-0.008,0.145l0.103,0.152l0.165,0.139l0.095,0.297l0.185,0.229l-0.042,0.2   l0.034,0.104l0.028,0.111l0.077-0.031l0.077,0.016l0.098,0.118l-0.166,0.224l-0.23,0.472l-0.152,0.188l-0.253,0.175l-0.084-0.045   l0.028-0.521l-0.148-0.047l-0.294-0.222l-0.221-0.065l-0.249-0.075l-0.305,0.027l-0.189,0.151l-0.098,0.038l-0.074,0.054   l-0.045,0.079l-0.014,0.109h-0.071l-0.103-0.091l-0.133-0.009l-0.113,0.083l-0.039,0.185l0.066,0.103l0.114,0.028l0.083,0.054   l-0.031,0.174l-0.09,0.127l-0.103,0.031l-0.124,0.015l-0.153,0.082l-0.11,0.134l-0.042,0.142l-0.025,0.161l-0.055,0.184   l0.166-0.053l0.066-0.041l0.025,0.143l-0.03,0.148l-0.066,0.136l-0.083,0.106l-0.107,0.092l-0.064,0.018l-0.065-0.016l-0.113-0.014   l-0.044-0.055l-0.191-0.296l-0.137-0.02l-0.106-0.057l-0.143-0.351l-0.153-0.226l-0.413-0.168l0.268-0.403l-0.136-0.461   l-0.381-0.331l0.081-0.153l0.082-0.111l0.146,0.055l0.155-0.013l0.136-0.078l0.096-0.14l-0.381,0.09l-0.191-0.019l-0.34-0.277   l-0.171-0.035l-0.083,0.094l0.083,0.228l-0.279,0.208l-0.159,0.489l-0.473,0.159l-0.185,0.019l-0.062-0.254h-0.086l-0.274,0.042   l-0.112,0.046l0.165,0.247l0.21,0.07l0.236,0.023l0.485-0.08l0.094,0.237l-0.06,0.391l-0.06,0.213l-0.119,0.248l-0.095,0.189   l-0.166,0.236l-0.367,0.235l-0.249,0.283l-0.249,0.295l-0.083,0.224l-0.013,0.449l-0.083,0.319l-0.142,0.26l-0.178,0.236   l-0.496,0.07l-0.26-0.141l-0.209-0.078l-0.274,0.025l-0.41,0.096l-0.213-0.053l-0.223-0.115l-0.208-0.153l-0.171-0.164   l-0.187-0.112l-0.266-0.069l-0.516-0.042l-0.464,0.058l-0.169-0.029l-0.18-0.156l-0.059-0.528l-0.09-0.258l-0.197,0.036   l0.169,0.164l0.065,0.131l-0.001,0.56l0.022,0.151l0.078,0.098l0.173,0.035h0.619l0.166,0.029l0.381,0.154l0.354,0.341l0.136,0.096   l0.959,0.251l0.135,0.09l0.079,0.184l0.108,0.212l-0.013,0.195l0.065,0.26l-0.182,0.312l-0.286,0.117l-0.221,0.182l-0.13,0.377   l-0.299,0.416l-0.325,0.507l-0.208,0.221l-0.208,0.039l-0.192-0.177l-0.391-0.339l-0.197-0.129l0.017,0.224l0.097,0.148   l0.308,0.291l0.013,0.093l0.075,0.229l-0.117,0.117l-0.026,0.117l0.063,0.108l0.029-0.001l-0.104,0.438l-0.35,0.213l-0.195,0.191   l-0.13,0.156l-0.117,0.143l0.104,0.259l0.091,0.259l0.052,0.169l0.169,0.116l0.212,0.05l0.111,0.001l0.169,0.11l0.058,0.166   l-0.044,0.193l-0.141,0.188l-0.109,0.07l-0.063,0.002l-0.045,0.021l-0.099,0.257l-0.017,0.106l0.036,0.098l0.108,0.103   l-0.108,0.201l-0.047,0.06l-0.144-0.008l-0.713-0.277l-0.155-0.015l-0.011,0.23l-0.06,0.255l-0.139,0.196l-0.254,0.062v0.079   l0.139,0.02l0.193,0.051l0.15,0.072l0.021,0.083l-0.036,0.07l-0.01,0.089l0.007,0.185l-0.022,0.103l-0.052,0.052l-0.053,0.029   l-0.035,0.037l-0.064,0.051l-0.051,0.056l-0.042,0.067l0.025,0.017l0.03,0.1l0.037,0.191l-0.056,0.118l-0.101,0.076l-0.044,0.097   l0.11,0.183l-0.213,0.056l-0.199,0.138l-0.148,0.053l-0.056-0.2l-0.041-0.287l-0.107-0.036l-0.15,0.049l-0.173-0.033l-0.034,0.158   l0.005,0.042l0.014,0.108l0.1,0.309l-0.254-0.135l-0.345-0.663l-0.328-0.167l-0.158,0.027l-0.174,0.052l-0.168,0.013l-0.125-0.091   l-0.044-0.192l0.081-0.15l0.14-0.109l0.133-0.07l-0.093-0.045l-0.012-0.018l0.003,0.015l-0.044,0.049l-0.086-0.095l0.078-0.036   l0.038-0.043l0.031-0.175l-0.23,0.112l-0.072,0.062l-0.05-0.099l-0.052-0.063l-0.137-0.098l0.019,0.103l0.003,0.057l0.013,0.042   l0.05,0.058l-0.146,0.051l-0.116-0.045l-0.118-0.072l-0.16-0.029l0.041,0.096l0.039,0.072l0.055,0.055l0.091,0.047v0.087   l-0.204,0.19l-0.073-0.03l-0.071-0.154l-0.194-0.188l-0.041,0.129l0.011,0.122l0.028,0.106l0.003,0.086l-0.05,0.089l-0.182,0.219   l0.003,0.126l0.022,0.095l0.055,0.059l0.113,0.02l0.108-0.033l0.04-0.077l0.014-0.084l0.032-0.059l0.338-0.204l0.195-0.074   l0.084,0.052l0.068,0.17l0.312,0.161l0.099,0.147l0.144-0.135l0.164-0.117v0.079h0.071l0.017-0.053l0.017-0.035l0.051-0.086   l0.199,0.223l0.007,0.197l-0.206,0.371l0.256-0.089l0.185,0.102l0.177,0.182l0.225,0.154v0.079l-0.171,0.007l-0.249-0.043   l-0.122,0.037l0.386,0.094v0.087l-0.301,0.095l-0.085-0.095l-0.077,0.095l0.162,0.079v0.087h-0.085v0.079h0.24l-0.198,0.095   l-0.222,0.003l-0.851-0.177l-0.088-0.042l-0.146-0.182l-0.078-0.039l-0.13,0.004l0.04,0.141l0.06,0.098l0.067,0.088l0.064,0.108   l0.162,0.442l-0.077,0.079l-0.155-0.192l-0.143,0.093l-0.147,0.186l-0.18,0.086v0.087l0.286,0.039l0.159,0.209l-0.005,0.26   l-0.202,0.193l-0.084-0.095l-0.158,0.067l-0.259,0.035l-0.504-0.007l0.434,0.233l0.142,0.027l0.162-0.031l0.136-0.045l0.11,0.012   l0.09,0.143l-0.049,0.036l-0.052,0.085l-0.053,0.06l0.084,0.174l-0.099,0.054l-0.051,0.055l-0.057,0.041l-0.109,0.024l-0.099-0.024   l-0.366-0.15l-0.24-0.023l-0.243,0.022l-0.137,0.109l0.08,0.24l-0.125,0.07l-0.077,0.054l-0.082,0.036l-0.139,0.012l-0.047-0.026   l-0.064-0.059l-0.088-0.061l-0.112-0.026h-0.269l0.263,0.133l-0.125,0.161l-0.216,0.21l-0.007,0.283l0.104,0.103l0.157,0.083   l0.174,0.055l0.15,0.02l0.099,0.046l0.13,0.099l0.162,0.091l0.196,0.023l-0.097,0.162l-0.144,0.157l-0.104,0.169l0.028,0.198   l0.138,0.091l0.185,0.009l0.159,0.028l0.066,0.147l-0.058,0.14l-0.132,0.037l-0.152,0.011l-0.122,0.064l-0.064,0.154l0.017,0.176   l0.077,0.186l0.116,0.184l0.155-0.094v0.094l-0.401,0.224l-0.098,0.078l-0.112,0.061l-0.059-0.052l0.015-0.109l0.115-0.115   l-0.079-0.087l-0.587,0.39l-0.146,0.051h-0.622l-0.127,0.065l-0.086,0.162l-0.047,0.21l-0.016,0.206l-0.581,0.472l-0.42-0.006   l-0.13-0.098l-0.035-0.241l0.038-0.14l0.064-0.011l0.074,0.021l0.063-0.043l0.012-0.099l-0.031-0.242l0.019-0.092l0.167-0.149   l0.226-0.09l0.459-0.108l0.18-0.081l0.268-0.201l0.177-0.071l-0.024-0.059l-0.037-0.145l-0.022-0.056l0.108-0.071l0.157-0.356   l0.127-0.171l0.009,0.027l0.063,0.026l0.117,0.026l0.047-0.021l-0.004-0.048l-0.017-0.057l0.017-0.046l0.517-0.723l0.023-0.144   l-0.138-0.045l-0.595,0.133l-0.777-0.088l-0.24,0.06l-0.017,0.139l0.135,0.282l-0.131,0.336l-0.252,0.284l-0.157,0.29l0.154,0.348   l-0.249,0.056l-0.257,0.023l-0.036-0.433l-0.036-0.023l-0.242-0.323l-0.109,0.046l-0.187,0.223l-0.128,0.077L576.638,437   l0.122-0.786l0.105-0.114l0.323-0.181l-0.133-0.071l-0.143-0.025l-0.142,0.024l-0.13,0.072l0.064-0.334l0.2-0.117l0.224-0.087   l0.13-0.25l-0.299,0.037l-0.243,0.1l-0.185,0.163l-0.129,0.228l-0.061,0.209l0.007,0.128l0.033,0.122l0.02,0.195l-0.047,0.179   l-0.116,0.091l-0.149,0.008l-0.145-0.073v-0.078l0.028-0.182l-0.075-0.293l-0.159-0.271l-0.222-0.12l-0.075,0.068l-0.064,0.157   l-0.044,0.174l-0.014,0.12l0.033,0.169l0.066,0.113l0.299,0.308l0.112,0.068l0.081,0.083l0.032,0.167l-0.06,0.088l-0.134-0.026   l-0.193-0.106l-0.178-0.173l-0.188-0.237l-0.202-0.162l-0.22,0.054l-0.07-0.209l0.026-0.147l-0.009-0.122l-0.179-0.129   l-0.094-0.002l-0.149,0.031l-0.102,0.084l0.044,0.147l-0.089,0.125l-0.158,0.099l-0.063,0.123l-0.02,0.151l0.014,0.153l0.036,0.131   l0.048,0.084l0.134,0.062l0.146-0.008l0.138,0.008l0.114,0.111l0.025,0.139l-0.02,0.173l-0.075,0.302l-0.359-0.234l-0.104-0.026   l-0.164,0.052l-0.038,0.078l0.049,0.255l0.099,0.266l0.432,0.307l0.085,0.26h0.07l0.146-0.221l0.214-0.139l0.229-0.112l0.193-0.141   l0.141,0.095l0.152,0.034l0.332-0.034h-0.085l0.141-0.009l0.079,0.042l0.008,0.087l-0.074,0.13l0.138,0.044l0.262,0.051   l0.149,0.077l-0.03,0.165l0.005,0.065l0.025,0.116l-0.122-0.114l-0.041-0.058l-0.1,0.169l0.047,0.207l0.15,0.173l0.22,0.062   l-0.038,0.053l-0.02,0.043l-0.032,0.038l-0.065,0.04l0.106,0.062l0.09,0.097l0.113,0.185l0.062,0.16l0.013,0.113l-0.024,0.107   l-0.051,0.138l-0.039,0.009l-0.148-0.015l-0.045,0.006l-0.007,0.049l0.016,0.168l-0.008,0.042l-0.223,0.083l-0.114-0.009   l-0.112-0.303l-0.163-0.154l-0.214-0.103l-0.221-0.039l-0.107-0.058l-0.286-0.413l-0.123-0.075l-0.076,0.05l-0.068,0.15   l-0.059,0.034l-0.116,0.108l-0.058,0.038l-0.166-0.081l-0.066-0.006l-0.229,0.049l-0.094,0.065l-0.055,0.137l0.076,0.216   l0.238,0.053l0.251-0.048l0.116-0.088l0.049-0.055l0.103,0.055l0.096,0.088l0.066,0.106l0.014,0.928l0.111,0.195l0.265,0.032   l-0.024,0.057l-0.031,0.144l-0.022,0.058l0.163,0.004l0.446-0.068l0.129-0.068l0.015-0.395l0.068-0.167l0.183,0.09l0.108-0.127   l0.052-0.144l0.03-0.139l0.05-0.115l0.067-0.061l0.318-0.197l0.102,0.188l0.13,0.122l0.057,0.121l-0.127,0.18l0.178,0.012   l0.275,0.184l0.166,0.055l0.155-0.023l0.299-0.127l0.171-0.022v0.093l-0.699,0.582l-0.122,0.069l-0.257-0.179l-0.317-0.01   l-0.29,0.136l-0.183,0.265l0.067,0.013l0.165,0.065l-0.144,0.08l-0.091-0.038l-0.091-0.078l-0.138-0.042l-0.124,0.028l-0.235,0.118   l-0.151,0.027h-0.28l-0.238,0.031l-0.218,0.102l-0.228,0.219l0.199,0.063l0.187,0.102l-0.039,0.131l0.039,0.128l-0.179,0.049   l-0.175,0.075l-0.135,0.11l-0.052,0.157l-0.077,0.105l-0.152,0.074l-0.094,0.125l0.091,0.26l-0.438,0.263l-0.269,0.355   l-0.216,0.403l-0.278,0.404l-0.233,0.45l-0.166,0.184l-0.26,0.014l-0.043-0.05l-0.116-0.215l-0.073-0.087l-0.115-0.058l-0.25-0.06   l-0.107-0.046l-0.34-0.249l-0.186-0.075l-0.564-0.061l-0.18-0.096l-0.318-0.344l-0.196-0.155l-0.169-0.058l-0.451-0.088   l-0.108-0.051l-0.355-0.255l-0.188-0.091l-0.114-0.034v0.079l0.254,0.207l0.232,0.255l0.236,0.153l0.274-0.099l0.155,0.139   l0.063,0.147l0.094,0.41l0.095,0.182l0.226,0.286l0.065,0.142l0.043,0.35l0.092,0.05l0.466,0.079l0.381,0.16l0.191,0.049   l0.349-0.013l0.365-0.107l0.353-0.176l0.555-0.383l0.077-0.095l0.036-0.106l0.02-0.239l0.028-0.085l0.168-0.108l0.399-0.014   l0.137-0.058l0.6,0.337l0.329,0.102l0.301-0.086l0.23,0.247l0.06,0.094l0.019,0.128l-0.039,0.157l-0.271,0.585l-0.108,0.135   l-0.127,0.106l-0.158,0.07l-0.191,0.024l-0.08,0.085l-0.188,0.61l-0.179-0.412l-0.111-0.1l-0.089,0.162l0.13,0.122l0.014,0.266   l0.044,0.264l0.227,0.121l0.055,0.069l0.006,0.157l-0.027,0.297l0.043,0.023l0.077,0.031l0.047,0.055l-0.047,0.101l-0.229,0.261   l-0.03,0.121l-0.008,0.36l-0.035,0.076l-0.031,0.018l-0.032,0.039l-0.05,0.033l-0.083,0.004l-0.056-0.029l-0.038-0.097   l-0.327-0.203l-0.143,0.001l-0.062,0.196l-0.19,0.006l-0.153,0.03l-0.113,0.096l-0.086-0.049l-0.066-0.021l-0.165-0.023   l0.077,0.294l0.043,0.387l0.083,0.238l0.183-0.148l-0.044,0.303l0.019,0.265l0.129,0.197l0.282,0.1l0.053-0.059l0.053-0.119   l0.087-0.061l0.163,0.111l0.109,0.041l0.11-0.066l0.086-0.11l0.042-0.086l-0.125,0.467l0.044,0.176l0.236,0.049l-0.065,0.095   l-0.05,0.058l-0.069,0.025l-0.119-0.006l0.172,0.082l0.093,0.017l0.113-0.006l-0.141,0.121l-0.065,0.032l-0.102,0.018v0.086   l0.293-0.061l0.058,0.02l-0.042,0.127v0.077l0.131,0.009l0.124,0.059l0.064,0.101l-0.051,0.138l-0.108,0.145l0.03,0.019l0.098-0.01   l0.1,0.06l0.126,0.286l0.008,0.224l-0.099,0.182l-0.192,0.163l0.197,0.017l0.089,0.025l0.101,0.043l-0.585,0.15l-0.265,0.021   l0.041-0.107l0.055-0.097l0.065-0.079l0.071-0.051l-0.126-0.378l-0.122-0.218l0.052-0.087l0.083-0.078l0.037-0.095l-0.039-0.048   l-0.152-0.245l-0.003-0.057l-0.087,0.014l-0.077,0.037l-0.063,0.055l-0.044,0.065l-0.044-0.04l-0.031-0.021l-0.077-0.032   l-0.03,0.141l-0.017,0.202l0.018,0.184l0.068,0.08l0.16,0.029l0.023,0.073l-0.069,0.197l-0.087,0.146l-0.21,0.039l-0.256,0.002   l-0.227,0.035l0.09-0.151l0.075-0.203l0.054-0.211l0.019-0.171l-0.025-0.052l-0.059-0.035l-0.052-0.045l-0.017-0.082l0.033-0.092   l0.105-0.103l0.029-0.124l0.021-0.026l-0.028-0.006l-0.438,0.001l-0.089,0.107l-0.057,0.207l-0.07,0.138l-0.13-0.102l-0.028-0.158   l0.141-0.384l0.04-0.19l-0.081-0.053l-0.859-0.14l-0.107-0.078l-0.042-0.161l0.036-0.138l0.281-0.504l-0.135,0.075l-0.047,0.034   l-0.05,0.061l-0.085-0.092l0.039-0.193l-0.15-0.115l-0.231-0.023l-0.197,0.081l0.183,0.216l-0.122,0.119l-0.37,0.093l-0.066,0.162   l-0.036,0.384l-0.091,0.186l-0.26,0.381l-0.096,0.087l-0.161,0.057l-0.359,0.066l-0.133,0.094l-0.116,0.107l-0.37,0.237   l-0.135,0.045l-0.16,0.076l0.08,0.169l0.536,0.554l0.094,0.164l0.036,0.196l0.053,0.11l0.112-0.053l0.105-0.158l0.033-0.202h0.091   l0.224,0.52l-0.245,0.128l-0.111,0.085l-0.116,0.129l0.133,0.179l0.04,0.146l0.051,0.045l0.17-0.121l0.108-0.129l0.1-0.19   l0.074-0.222l0.02-0.221l0.126,0.093l0.124,0.066l0.097-0.013l0.047-0.146l0.122,0.06l0.053,0.043l0.057,0.067h-0.079l0.064,0.118   l0.248,0.349l0.061,0.053l0.131,0.035l0.133,0.057l0.061,0.116l-0.098,0.202l-0.232,0.055l-0.481-0.043l-0.099,0.121l0.185,0.534   l-0.086,0.122l-0.29,0.044l-0.146-0.176l-0.152-0.04l-0.189,0.087l-0.224,0.049l-0.195,0.073l-0.124-0.189l-0.128-0.192   l-0.129-0.175l-0.293,0.09l-0.162,0.214l0.027,0.171l0.114,0.124l0.064,0.154l0.056,0.065l0.05,0.086l0.052,0.128l0.145-0.067   l0.074,0.05l-0.036,0.102l-0.182,0.085l-0.194-0.023l-0.149-0.083l-0.116-0.03l-0.088,0.136l0.055,0.044l0.031,0.04l0.029,0.042   l0.039,0.045l-0.11-0.032l-0.279-0.138l0.104-0.262l0.059-0.08l-0.164-0.131l-0.13,0.061l-0.083,0.182l-0.017,0.229l-0.174-0.197   l0.056-0.227l0.278-0.345l0.119-0.218l-0.003-0.163l-0.13-0.103l-0.256-0.035l-0.537,0.069l-0.204-0.052l0.121-0.231l0.227-0.115   l0.282-0.065l0.027-0.237l-0.494-0.06l-0.738,0.233l-0.121,0.074l-0.128,0.012l-0.237,0.171l-0.122,0.199l0.217,0.095l0.307,0.039   l0.03,0.107l-0.052,0.162l0.068,0.204l0.064-0.107l0.136-0.083l0.173-0.033l0.169,0.044l0.13,0.139l-0.028,0.131l-0.188,0.25   l-0.075,0.189l0.001,0.225l-0.02,0.072l-0.049,0.055l-0.088,0.056l-0.156,0.037l-0.206-0.014l-0.199-0.046l-0.203,0.072   l-0.113,0.03l-0.099,0.143l0.002,0.16l0.124,0.216l0.202,0.198l0.202,0.09l0.446,0.139l-0.077,0.094l0.14,0.103l0.147,0.046   l0.151-0.019l0.146-0.09l0.119-0.355l0.077-0.167l0.077,0.041l-0.008,0.122l-0.044,0.205l-0.069,0.192l-0.077,0.085l-0.039,0.085   l0.046,0.192l0.113,0.328l0.18-0.06l0.051-0.026l-0.098,0.162l-0.185,0.129l-0.177,0.037l-0.08-0.119l-0.071-0.136l-0.172-0.03   l-0.417,0.042l-0.119,0.195l0.1,0.382l0.274,0.264l0.405-0.16l0.037,0.064l0.007,0.023l-0.016,0.022l-0.029,0.061l0.034,0.018   l0.022-0.001l0.01,0.014l0.004,0.062l-0.274,0.087l-0.312,0.01l-0.299-0.073l-0.235-0.16l-0.119-0.03l-0.329,0.13l-0.133,0.035   l-0.149-0.049l-0.113-0.08l-0.121-0.038l-0.164,0.074l0.029,0.217l-0.206,0.123l-0.29,0.082l-0.229,0.098l-0.113-0.038   l-0.071-0.061l-0.019-0.099l0.041-0.15l0.068-0.072l0.197-0.069l0.052-0.03l-0.003-0.191l-0.102-0.204l-0.146-0.179l-0.135-0.115   l0.022,0.419l-0.022,0.099l-0.076,0.039l-0.045-0.094l-0.006-0.152l0.042-0.134l-0.061-0.06l-0.062-0.08l-0.108-0.2l-0.069,0.157   l-0.199,0.209l-0.042,0.107l0.08,0.088l0.166,0.126l0.128,0.147l-0.026,0.149l-0.226,0.097l-0.307-0.012l-0.321-0.086l-0.269-0.13   l0.462,0.367l0.08,0.152l0.008,0.178l-0.03,0.147l-0.001,0.152l0.166,0.35l0.061,0.064l0.028-0.083l0.039-0.043l0.089-0.004   l0.102,0.008l0.08-0.004l0.213-0.132l0.124-0.111l0.048-0.105l0.105,0.064l0.046,0.082l0.014,0.104l-0.003,0.139l0.044,0.117   l0.1-0.002l0.166-0.073l0.182,0.094l0.039,0.063l0.011,0.137l-0.174,0.331l-0.019,0.056l-0.168,0.053l-0.133,0.136l-0.243,0.368   l-0.151,0.119l-0.109-0.062l-0.105-0.144l-0.141-0.13l-0.135,0.184l-0.069,0.186l-0.024,0.205l-0.004,0.242l0.076,0.136   l0.154,0.007l0.117,0.052l-0.03,0.273l-0.169,0.272l-0.296,0.286l-0.335,0.217l-0.29,0.067l-0.044,0.025l-0.046,0.043l-0.037-0.01   l-0.027-0.136l-0.008-0.1l0.006-0.111l0.035-0.09l0.08-0.038l0.188-0.05l-0.079-0.109l-0.791-0.487l-0.171-0.033l-0.127-0.044   l-0.334-0.182l-0.195-0.029l0.052-0.167l0.022-0.178l0.003-0.382l-0.041-0.125l-0.098,0.085l-0.126,0.159l-0.12,0.097l0.238,0.596   l-0.193,0.222l-0.282,0.204l-0.32,0.098l-0.301-0.099l-0.087,0.042l-0.116-0.017l-0.262-0.118l-0.048,0.163l-0.077,0.128   l-0.11,0.05l-0.151-0.071l-0.091,0.403l-0.258,0.029l-0.279-0.187l-0.149-0.245l0.005-0.27l0.113-0.038l0.152,0.027l0.122-0.066   l-0.007-0.135l-0.13-0.084l-0.18-0.039l-0.153,0.002l0.108-0.228l0.042-0.182l-0.07-0.192l-0.237-0.258l-0.034,0.383l-0.075,0.05   h-0.064l-0.043,0.021l-0.045,0.289l-0.074,0.171l-0.099,0.152l-0.106,0.125l-0.028,0.171l-0.079-0.009l-0.125-0.162l-0.542-0.247   l-0.085,0.247l0.088,0.272l-0.084,0.191l-0.184,0.07l-0.205-0.093l0.072-0.227l-0.191,0.115l-0.199,0.233l0.044,0.127l0.475,0.074   l0.263,0.103l0.159,0.154l-0.157,0.222l-0.086,0.089l-0.109,0.036l-0.149,0.004l-0.052,0.026l-0.028,0.063l-0.084,0.12l0.091,0.064   l0.144,0.138l0.017,0.111l-0.29-0.015l-0.953-0.398l-0.5-0.132l-0.473,0.113l0.23,0.067l0.226,0.019l0.211,0.061l0.184,0.192   l-0.967-0.229l-0.276,0.052v0.085l0.943,0.8l0.37,0.142l0.929-0.122l0.342-0.142l0.12-0.082l0.146,0.076l0.051,0.094l-0.006,0.117   l-0.069,0.298l-0.057,0.057l-0.064,0.036l-0.069,0.091l-0.091,0.297l0.094,0.041l0.149-0.096l0.08-0.115l0.097-0.079l0.213-0.024   l0.213,0.092l0.097,0.27l0.036,0.068l0.16,0.121l0.036,0.065l0.011,0.245l0.023,0.109l0.043,0.108l-0.201,0.012l-0.272,0.148   l-0.146-0.068l-0.141,0.113l-0.238,0.314l-0.163,0.167l-0.088,0.045l-0.224,0.071l-0.081,0.054l-0.032,0.074l-0.044,0.223   l-0.042,0.088l-0.123,0.028l-0.059-0.174l-0.047-0.363l-0.169-0.118l-0.13,0.058l-0.127,0.14l-0.154,0.129l0.284,0.099l0.061,0.206   l-0.082,0.255l-0.33,0.527l-0.063,0.149l-0.024,0.165l0.022,0.153l0.035,0.13l0.008,0.128l-0.065,0.151l-0.355-0.089l-0.262,0.144   l-0.464,0.538l-0.296,0.264l-0.074,0.144l-0.025,0.223l-0.052,0.172l-0.12,0.098l-0.13-0.007l-0.083-0.139l0.098-0.385l0.605-0.632   l0.076-0.251l-0.132-0.079l-0.28,0.165l-0.053-0.125l0.144-0.08l0.072-0.074l-0.022-0.1l-0.044-0.075l-0.079-0.233h-0.07   l-0.08,0.409l-0.293,0.044l-0.361-0.158l-0.285-0.201l0.044,0.183l0.099,0.111l0.142,0.047l0.187-0.003l-0.229,0.47l-0.014,0.228   l0.088,0.316l-0.266,0.274l-0.259,0.275l-0.17,0.434l-0.091,0.421l0.005,0.345l0.15,0.224l-0.225,0.239l-0.077,0.15l-0.237,0.317   l-0.024-0.236l-0.023-0.268l0.165-0.262l-0.021-0.433l-0.022-0.229l-0.069-0.23l-0.11-0.227l-0.128-0.173l-0.162-0.123   l-0.219-0.076l-0.71-0.02l-0.224-0.057l-0.279-0.225l-0.154-0.038l-0.108,0.171l0.029,0.243l0.197,0.037l0.257-0.038l0.212,0.019   l0.352,0.469l-0.108,0.514l-0.301,0.548l-0.33,0.153l-0.588-0.239l-0.153,0.032l-0.09,0.083l-0.072,0.106l-0.102,0.11l-0.299,0.086   l-0.171-0.173l-0.129-0.172l-0.172,0.09l0.17,0.248l-0.075,0.19l-0.156,0.315l0.049,0.415l-0.094,0.098l-0.049,0.301l0.175,0.237   l-0.249,0.255l-0.205,0.125l-0.034-0.233l-0.005-0.192l0.097-0.219l-0.096-0.172l-0.069-0.264l-0.049,0.1l-0.189,0.244l0.098,0.154   l0.037,0.152l-0.014,0.131l-0.377,0.106l-0.127,0.058l-0.27,0.117l-0.253,0.426l-0.328,0.223l-0.172,0.046l-0.066-0.173l0.023-0.12   l0.035-0.18l-0.086-0.194l0.036-0.221l-0.015-0.202l-0.107-0.154l-0.12-0.033l-0.151-0.021l-0.115-0.07l-0.122,0.033l-0.058,0.133   l-0.1,0.041l-0.273,0.053l-0.23,0.306l-0.163,0.056l-0.262-0.171l-0.113-0.163l0.264-0.257l-0.152-0.072l-0.124,0.022l-0.086,0.101   l-0.032,0.164l-0.061,0.087l-0.263,0.197l-0.061,0.142l0.025,0.102l0.055,0.062l0.055,0.086l0.025,0.167l-0.033,0.166l-0.088,0.155   l-0.232,0.274l-0.06,0.168l0.052,0.172l0.208,0.291l-0.068,0.291l-1.057,1.243l-0.23-0.01l-0.072,0.013l-0.16-0.024l-0.22-0.056   l-0.228-0.053l-0.137,0.036l-0.259,0.031l-0.407-0.181l-0.6-0.27l-0.125-0.132l-0.05-0.154l-0.116-0.086l-0.13-0.017l-0.097,0.05   l-0.016,0.09l0.016,0.416l0.113,0.193l0.216,0.251l0.235,0.22l0.169,0.093l0.231-0.054l0.379,0.02l0.216-0.227l0.343-0.022   l0.206,0.237l0.2,0.045l0.034-0.18l0.21,0.055l0.192,0.357l0.033,0.302l0.097,0.4l0.103,0.057l0.092-0.048l0.119,0.043   l-0.236,0.292l-0.337-0.259l-0.259-0.3l-0.291-0.233l-0.434-0.058l0.135,0.122l0.18,0.07l0.157,0.088l0.069,0.181l-0.109,0.067   l-0.183,0.106l-0.205,0.186l-0.107,0.259l-0.17,0.377l-0.11-0.013l-0.087-0.122l-0.159-0.054l-0.016-0.151l0.034-0.15l0.016-0.23   l-0.075-0.213l-0.26-0.076l-0.211-0.025l-0.601,0.145l-0.09,0.013l0.005,0.219l0.2,0.194l0.163-0.117l0.133-0.077l0.122-0.081   l0.12-0.014l0.321,0.078l0.018,0.101l-0.034,0.16l-0.357,0.233l-0.281,0.405l-0.13,0.439l0.204,0.276l-0.036,0.25l0.072,0.373   l0.095,0.213l-0.174,0.157l-0.293,0.094l-0.039,0.381l-0.269,0.346l-0.409-0.099l-0.365,0.123l-0.529,0.104l-0.301-0.112   l-0.167-0.17l-0.45-0.14l-0.107-0.193l-0.303,0.064l-0.312-0.082l-0.239-0.03l-0.143,0.115l0.383,0.162l0.197,0.015l0.193-0.093   l0.137,0.108l-0.399,0.323l-0.285,0.155l-0.073,0.129l-0.164,0.147l-0.329,0.394l-0.295,0.204l-0.173,0.107l-0.182,0.077   l-0.202,0.086l-0.125-0.293l0.075-0.229l0.367-0.323l-0.416-0.145l-0.508-0.324l-0.003,0.13l0.333,0.302l0.181,0.099l-0.125,0.268   l-0.254,0.155l-0.067,0.042l-0.118,0.011l-0.128,0.071l-0.162,0.087l-0.171,0.017l-0.347,0.239l-0.091,0.153l-0.21-0.034   l-0.07,0.019l-0.334,0.204l-0.229-0.064l-0.324,0.194l-0.132,0.108l-0.195,0.287l-0.18,0.007l-0.138-0.103l-0.027-0.191   l-0.056-0.211l-0.028-0.131l0.079-0.03l0.05,0.069l0.022,0.096l0.058,0.105l0.08,0.025l0.013-0.121l-0.022-0.165l-0.032-0.108   l-0.058-0.083l-0.072-0.055l-0.091-0.03l-0.06-0.046l-0.099-0.082l-0.148-0.112l-0.298-0.125l-0.451,0.012l0.074-0.229   l-0.219-0.104l-0.02-0.128l0.115-0.147l0.142-0.089l0.099,0.035h0.084l0.071-0.224l0.07-0.112l-0.039-0.029l-0.434,0.064   l-0.1,0.059l-0.187,0.243l-0.15,0.132l-0.158,0.054l-0.627,0.111l-0.069,0.038l-0.043,0.068l-0.103,0.227l-0.05,0.049l-0.234-0.045   l-0.078-0.112l0.042-0.151l0.116-0.158l0.008-0.101l-0.157-0.035l-0.319,0.006l-0.105-0.065l-0.318-0.288l-0.196-0.066   l-0.097,0.027l-0.046,0.115l-0.092,0.026l-0.072-0.007l-0.202-0.077l0.142,0.213l0.099,0.087l0.111,0.035l0.103-0.027l0.105-0.12   l0.099-0.028l0.213,0.125l0.148,0.264l-0.022,0.24l-0.296,0.049v0.092l0.12,0.022l0.306-0.022l0.108,0.024l0.172,0.111l0.11,0.026   l0.219,0.002l0.074-0.023l0.135-0.064l0.102-0.076l0.073-0.086l0.082-0.068l0.13-0.021l-0.235,0.198l-0.397,0.492l-0.196,0.228   l-0.135,0.268l-0.035,0.31l0.358,0.336l0.115-0.279l0.018-0.125l0.214,0.027l0.044,0.097l-0.104,0.17l-0.208,0.217l0.019,0.255   l0.125,0.203l-0.442,0.003l-0.159-0.103l-0.35-0.136l-0.299-0.165l-0.3,0.005l-0.193,0.127l-0.305,0.007l-0.235-0.055l-0.139-0.122   l-0.148-0.162l-0.11-0.193l0.138-0.169l0.088-0.022l0.345,0.022l0.098-0.023l0.138-0.112l0.163-0.051l-0.02-0.12l-0.126-0.202   l-0.283,0.066l-0.13,0.118l-0.122,0.118l-0.378-0.306l-0.469-0.037l-0.431,0.044l-0.2-0.003l-0.007-0.21l0.292-0.186l0.503-0.223   l0.194-0.146l0.053-0.111l-0.125-0.049l-0.049-0.071l0.013-0.161l0.075-0.271l-0.151,0.018l-0.131,0.094l-0.227,0.264l-0.184,0.319   l-0.117,0.154l-0.16,0.065l-0.16-0.059l-0.241,0.037l-0.261,0.132l0.017,0.176l0.066,0.271l-0.249-0.093l-0.087-0.211l-0.2-0.022   l-0.24,0.114l-0.12,0.025l-0.403,0.051l-0.172,0.176l-0.053,0.071l-0.052,0.175l-0.05,0.097l-0.162,0.126l-0.051,0.079l0.048,0.131   l0.099,0.111l-0.021,0.11l-0.12,0.018l-0.11,0.039l-0.11,0.019l-0.071,0.059l-0.081,0.099l-0.06,0.009l-0.099-0.051l-0.129-0.042   l-0.058-0.091l0.022-0.15l-0.048-0.161l-0.074-0.165l-0.047-0.142l-0.169-0.09l-0.113,0.21l-0.155-0.06l-0.159-0.182l-0.14-0.052   l-0.161,0.058l0.089,0.121l0.13,0.072l0.049,0.141l-0.091,0.079l0.029,0.1l0.11,0.091l0.141,0.001l0.081-0.119l0.189,0.082   l0.119,0.091l0.107,0.161l0.097,0.142l0.128,0.102l-0.183,0.141l-0.133,0.094l-0.157,0.229l-0.26,0.498l0.037,0.24l0.157,0.212   l-0.262,0.167l-0.14-0.042l-0.039-0.1l0.102-0.169l-0.027-0.22l-0.238-0.133l-0.38-0.004l-0.292,0.117l-0.36-0.064l-0.232,0.098   l-0.117-0.242l-0.017-0.22l0.003-0.24l-0.057-0.271l0.142-0.119l0.043-0.18l-0.169-0.212l0.035-0.27l0.12-0.209l0.294-0.157   l0.191-0.092l0.075-0.042l0.127-0.018l0.05-0.053l0.041-0.14l-0.049-0.121l-0.109-0.061l-0.1-0.041l-0.065-0.027l-0.09-0.06   l-0.108,0l-0.062,0.066l-0.083,0.238l-0.086,0.115l-0.235,0.072l-0.197-0.184l-0.241-0.023l-0.132,0.139l-0.222,0.088l-0.212,0.088   l-0.087,0.147l-0.233,0.061l-0.166,0.118l-0.262,0.088l-0.182,0.007l0.019,0.182l0.069,0.191l-0.212,0.096l-0.114-0.009   l-0.111-0.052l-0.118-0.079l0.019,0.23l-0.076,0.132l-0.127,0.156l-0.072,0.13l0.08,0.081l0.32,0.023l-0.13-0.011l0.281,0.013   l0.162-0.047l0.122-0.075l0.105-0.01l0.088,0.14l-0.144,0.098l-0.19,0.332l-0.161,0.072l-0.198,0.056l-0.172,0.135l-0.133,0.165   l-0.077,0.147l0.076,0.136l0.082,0.016l0.1-0.04l0.129-0.028l0.003-0.027l0.03-0.061l0.053-0.06l0.069-0.027l0.045,0.028   l0.086,0.12l0.058,0.027l0.146,0.045l0.232,0.117l0.207,0.162l0.069,0.178l-0.115,0.12l-0.225,0.108l-0.194,0.138l-0.321,0.077   l-0.141,0.119l-0.157,0.192l-0.161,0.007l-0.106-0.146l-0.012-0.008l-0.068-0.045l-0.007-0.074l-0.014-0.125l-0.068-0.061   l-0.005-0.005l0.002-0.007l0.036-0.119l-0.042-0.114l0.092-0.093l0.028-0.06l-0.021-0.153l-0.063-0.06v-0.084l-0.095-0.067   l-0.102-0.123l-0.073-0.107l-0.1-0.013l-0.018-0.002l-0.056,0.038l-0.04-0.107l0.006-0.024l0.013-0.044l-0.062-0.1l-0.099-0.13   l-0.114-0.038l-0.063-0.084l-0.146-0.023h-0.002l-0.175,0.039l-0.22,0.068l-0.231,0.085l-0.126-0.087l-0.007-0.005l-0.005,0.008   l-0.04,0.076l-0.083-0.046l-0.001,0l-0.003,0.002l-0.131,0.098l0.02,0.107l-0.056,0.03l-0.294-0.061l-0.075,0.061l-0.226,0.153   l-0.129,0.13l-0.096,0.05l-0.103,0.009l-0.236-0.013h-0.191l-0.111-0.095l-0.128,0.042l-0.091,0.106l-0.058,0.168l-0.119-0.015   l-0.105,0.015l-0.133,0.129l-0.035-0.015l-0.063-0.068h-0.192l-0.103,0.061l-0.037,0.022l0.006,0.047l-0.141,0.022l-0.1,0.06   l-0.036,0.123l-0.15,0.002l-0.037-0.046l-0.007-0.01l-0.026-0.03l-0.004-0.004l-0.001-0.001l-0.191-0.102l-0.218-0.099   l-0.134-0.015l-0.035-0.023h-0.156l-0.077-0.054l-0.04,0.118l-0.095,0.057l-0.034,0.155l-0.001,0.133l-0.012,0.122l-0.135,0.018   l-0.122,0.023l-0.111-0.02l-0.021,0.013l-0.035,0.022l-0.007,0.1l-0.219,0.306l-0.1-0.253l-0.081-0.06l-0.073-0.204l-0.02-0.204   l0.178-0.033l0.136-0.086l-0.159-0.19l-0.409-0.31l-0.112-0.122l-0.13-0.188l-0.108-0.211l-0.155-0.326l-0.063-0.375l-0.233-0.133   l-0.094-0.765l-0.075-0.228l-0.155-0.095l-0.365-0.026l-0.141,0.026l-0.053,0.046l-0.044,0.072l-0.075,0.058h-0.138l-0.213-0.145   l0.03-0.222l0.072-0.261l-0.083-0.26l-0.133-0.183l-0.124-0.232l-0.174-0.457l-0.072,0.171l-0.008,0.176l0.031,0.168l0.049,0.149   l-0.132-0.135l-0.037-0.235l0.03-0.26l0.061-0.209l-0.085,0.084l-0.055,0.099l-0.022,0.112l-0.042-0.105l0.216-0.549l0.066-0.274   l0.022-0.287l0.059-0.244l0.157-0.439h-0.085l-0.159,0.332l-0.052,0.162l-0.033,0.391l-0.083,0.397l-0.058,0.152l-0.019-0.14   l0.001-0.187l0.033-0.194l0.069-0.159l-0.017-0.176l0.028-0.168l0.137-0.412l-0.204,0.316l-0.142,0.685l-0.119,0.183l0.066-0.231   l0.02-0.258l-0.009-0.526l-0.213,0.299l-0.116,0.114l-0.135,0.013l-0.105-0.114l-0.044-0.185l-0.005-0.335l0.091-0.309l0.227-0.258   l0.291-0.176l0.624-0.131l0.62-0.288l0.32-0.066l0.127,0.05l0.145,0.096l0.157,0.055l0.298-0.125l0.186,0.041l0.331,0.134   l-0.191-0.151l-0.173-0.056l-0.417-0.044l-0.178-0.063l-0.289-0.152l-0.189-0.03l-0.331,0.09l-0.537,0.4l-0.376,0.09l-0.064,0.056   l-0.416,0.224l-0.1,0.018l-0.058,0.14l-0.138,0.104l-0.176,0.055l-0.169-0.008l-0.556-0.326l-0.313-0.094l-0.213,0.168l0.233,0.219   l0.364,0.039l0.337,0.133l0.239,0.382l0.017,0.376l-0.143,0.441l-0.116,0.224l0.037,0.078l-0.003,0.062l-0.116,0.074l-0.066-0.01   l-0.243-0.116l-0.186-0.036l-1.058,0.413l-0.327,0.045l-1.071-0.22v0.092l0.248,0.06l0.263,0.023l0.066,0.039l0.217,0.174   l0.104,0.039l0.23-0.046l0.22-0.08l0.208-0.027l0.198,0.111l0.656,0.797l0.16,0.143l0.614,0.36l-0.349,0.153l-0.13,0.089   l-0.14,0.192l-0.153-0.122l-0.549-0.221l0.198,0.236l0.663,0.276l0.144,0.113l0.113,0.204l0.452,0.349l0.416,0.404l0.122,0.295   l0.4,0.481l-0.05,0.635l-0.365,0.527l-0.183,0.525l0.059,0.511l0.074,0.185l0.266,0.116l0.325,0.014l-0.124,0.241l-0.025,0.11   l-0.006,0.193l-0.05,0.118l-0.105,0.081l-0.107,0.108l0.013,0.194l0.028,0.223l0.074,0.039l0.071,0.123l-0.026,0.19l-0.299,0.051   l-0.094,0.18l-0.162-0.034l-0.177,0.107l0.074,0.124l0.005,0.008l-0.02,0.028l-0.075,0.105l-0.275,0.241l-0.153,0.202l-0.278-0.035   l-0.38-0.345l-0.075-0.276l-0.081-0.204l-0.536-0.517l-0.025-0.088l-0.024-0.223l-0.036-0.107l-0.062-0.079l-0.547-0.432   l-0.304-0.348l-0.235-0.39l-0.146-0.656l-0.122-0.265l-0.615-1.042l-0.139-0.141l-0.077,0.844l0.019,0.234l0.062,0.109l0.267,0.198   l0.431,0.457l0.857,1.414l0.172,0.252l0.117,0.253l0.289,0.305l0.119,0.164l0.424,0.618l-0.446,0.099l-0.133-0.001l-0.287-0.148   l-0.141-0.026l-0.116,0.03l-0.054,0.079l-0.037,0.109l-0.102,0.179l-0.039,0.096l-0.046,0.06l-0.053,0.026l-0.114,0.016   l-0.141,0.261l-0.05,0.149l0.105,0.254l-0.01,0.141l-0.042,0.127l-0.046,0.079l-0.188,0.136l-0.186-0.026l-0.22-0.013l-0.185,0.067   l-0.236,0.198l-0.202-0.148l-0.235-0.354l-0.093-0.407l0.053-0.174l0.104-0.215l-0.071-0.155l0.104-0.21l-0.094-0.134l-0.066-0.189   l-0.033-0.205l0.003-0.185l-0.289,0.143l-0.088,0.737l-0.22,0.32l-0.354-0.27l-0.068,0.211l0.017,0.303l-0.051,0.236l-0.017,0.295   l0.025,0.278l0,0.168l0.05,0.227l-0.017,0.219l-0.025,0.093l0.025,0.059l0.084,0.135l-0.034,0.143l-0.101,0.084l-0.172,0.047   l-0.077,0.003l-0.061,0.013l-0.026,0.107l-0.013,0.097l-0.056,0.163l-0.016,0.073l-0.078,0.111l-0.176,0.2l-0.32,0.126l-0.195,0.11   l-0.364-0.23l-0.094-0.226l-0.137-0.473l-0.084-0.193l-0.122-0.154l-0.168-0.064l-0.127,0.056l-0.08,0.107l-0.083,0.069   l-0.134-0.057l-0.508,0.242l-0.04,0.079l-0.03,0.349l-0.081,0.08l-0.276-0.018l-0.063,0.018l-0.047,0.055l-0.061,0.13l-0.061,0.065   l-0.458,0.25l0.028,0.326l-0.164,0.328l-0.284,0.253l-0.327,0.101l-0.32-0.073l-1.219-0.678l-0.194-0.204l-0.124-0.284   l-0.044-0.399l0.147-0.203l0.649-0.328l0.138-0.262h-0.085l-0.196,0.124l-0.368,0.126l-0.357,0.034l-0.16-0.154l-0.025-0.093   l-0.112-0.168l-0.025-0.118l0.01-0.098l0.051-0.149l0.126-0.605l0.052-0.149l-0.218,0.123l-0.151,0.292l-0.083,0.356l-0.011,0.313   l0.154,0.5l0.199,0.366l0.033,0.092l-0.032,0.305l0.007,0.17l0.064,0.073l0.044,0.069l0.036,0.16l0.036,0.317l-0.025,0.123   l-0.105,0.198l-0.055,0.354l-0.074,0.092l-0.1,0.072l-0.105,0.113l-0.353,0.113l-0.52,0.186l-0.468,0.028l-0.204-0.282   l-0.115-0.072l-0.224-0.083l-0.164-0.13l0.075-0.214l0.113-0.198l0.047-0.243l-0.025-0.244l-0.094-0.201l-0.118,0.244l-0.108,0.106   l-0.987,0.224l-0.434,0.013l-0.215-0.029l-0.171-0.086l-0.067-0.174l0.066-0.194l0.276-0.34l0.044-0.264h-0.077l-0.177,0.297   l-0.29,0.313l-0.271,0.124l-0.199-0.499l-0.199-0.311l-0.251-0.282l-0.243-0.141l-0.016,0.317l0.019,0.387l0.058,0.37l0.094,0.266   l0.188,0.186l0.291,0.173l0.325,0.118l0.285,0.023l-0.094,0.128l-0.876,0.546l-0.1,0.039l-0.019,0.086l0.001,0.086l-0.04,0.039   l-0.055,0.033l-0.13,0.159l-0.086,0.057l-0.099,0.017l-0.329-0.017l-0.022-0.087l0.061-0.168l0.13-0.102l0.182,0.108h0.077   l-0.016-0.136l-0.066-0.086l-0.1-0.058l-0.127-0.053l-0.149,0.108l-0.077-0.143l-0.005-0.25l0.069-0.215l-0.145,0.18l-0.174,0.107   l-0.146-0.015l-0.068-0.188l-0.205,0.078l-0.135,0.004l-0.363-0.165l-0.052,0.051l-0.229-0.07l-0.259-0.156l0.198,0.241   l0.736,0.434l0.135,0.248l0.081,0.366l-0.067,0.308l-0.303,0.075l0.152,0.046l0.137,0.061l0.109,0.093l0.066,0.141l-0.451,0.019   l-0.224-0.023l-0.175-0.086l-0.254,0.239l-0.279,0.55l-0.163,0.216l-0.123,0.095l-0.113,0.04l-0.122-0.039l-0.15-0.141   l-0.063-0.116l-0.05-0.138l-0.062-0.125l-0.104-0.074l-0.012,0.164l0.014,0.156l0.05,0.143l0.103,0.118l-0.202,0.049l-0.239,0.093   l-0.213,0.023l-0.121-0.166h-0.07l-0.05,0.116l-0.137,0.077l-0.171,0.043l-0.15,0.013l-0.09-0.056l-0.011-0.136l0.063-0.306   l-0.196,0.042l-0.127-0.152l-0.135-0.479l-0.089,0.155l-0.138,0.17l-0.011,0.098l0.05,0.129l0.174,0.166l0.08,0.121l-0.568-0.09   l-0.283,0.003l-0.148,0.177l0.151-0.07l0.152-0.003l0.315,0.073l-0.122,0.085l-0.348,0.157l-0.072,0.067l-0.137,0.168l-0.587,0.448   l-0.285,0.137l-0.163-0.065l0.182-0.09l0.127-0.16l0.238-0.414l-0.243-0.085l-0.274-0.134l-0.265-0.089l-0.221,0.05l-0.072-0.141   l-0.158,0.01l-0.39,0.131v0.083h0.155l-0.046,0.061l-0.029,0.032l0.076,0.081l0.142-0.078l0.166-0.025l0.168,0.026l0.144,0.077   l-0.473,0.166l-0.26,0.113l-0.204,0.129l-0.109-0.071l-0.16-0.021l-0.357,0.009v-0.091l0.471-0.158v-0.076l-0.037-0.04   l-0.033-0.051l-0.08,0.071l-0.102,0.063l-0.111,0.038l-0.108-0.005l-0.102-0.058l-0.01-0.061l0.01-0.064l-0.044-0.067l-0.464-0.217   l-0.077-0.115l-0.049,0.16l-0.131,0.081l-0.292,0.092l0.11,0.073l0.074,0.215l0.133,0.052l-0.143,0.277l-0.1,0.096l-0.144,0.035   v0.09l0.177-0.007l0.145-0.056l0.099-0.099l0.036-0.136l0.077-0.123l0.174-0.064l0.185,0.018l0.113,0.127l-0.282,0.04l-0.213,0.156   l-0.362,0.385l-0.306-0.097l-0.28,0.131l-0.271,0.196l-0.271,0.102l-0.041,0.025l-0.14,0.114l-0.084,0.035l-0.005-0.018   l-0.194-0.054l-0.254-0.037l-0.268-0.114l-0.177-0.026l-0.253,0.076l-0.274,0.182l-0.443,0.414l-0.168,0.213l-0.156,0.26   l-0.129,0.292l-0.089,0.306h-0.07l0.044-0.658l0.091-0.275l0.167-0.137l-0.147,0.002l-0.102,0.068l-0.075,0.115l-0.064,0.139   l-0.017-0.188l-0.069-0.111l-0.044-0.109l0.053-0.181l0.094-0.053l0.304-0.082l0.235-0.217l0.365-0.049l0.348-0.125l0.124-0.381   h-0.072l-0.37,0.314l-1.038,0.46l-0.214,0.433l-0.011,0.537l0.045,0.127l0.267,0.46l-0.077,0.276l-0.221,0.006l-0.473-0.207   l0.022,0.077l0.034,0.07l0.044,0.06l0.052,0.05l-1.214,0.102l-0.206,0.061l-0.177,0.104l-0.186,0.147h-0.077l0.03-0.176   l0.097-0.247l0.02-0.157l-0.044-0.146l-0.073-0.124l-0.014-0.093l0.131-0.05l-0.017-0.071l-0.03-0.044l-0.043-0.03l-0.056-0.028   l0.034-0.011l0.029,0.001l0.018-0.012l-0.004-0.053h0.07l0.101,0.047l0.117,0.027l0.11,0.052l0.072,0.122h0.07l0.017-0.101   l0.021-0.059l0.047-0.089v-0.09h-0.085l-0.064,0.071l-0.08-0.007l-0.102-0.039l-0.138-0.025v-0.076l0.47-0.257v-0.083l-0.094-0.01   l-0.061,0.018l-0.044,0.035l-0.039,0.04v-0.241l-0.16,0.201l-0.105,0.214l-0.09,0.068l-0.109-0.242l-0.005-0.157l0.152-0.68h-0.07   l-0.132,0.244l-0.21-0.117l-0.362-0.46l0.11-0.153l0.051-0.048l0.072-0.04v-0.09l-0.351,0.199l0.154,0.398l0.252,0.474   l-0.055,0.429l-0.041-0.034l-0.106-0.049l0.07,0.166l-0.164-0.043l-0.263-0.164l-0.191-0.042v0.082l0.15,0.067l0.173,0.132   l0.109,0.159l-0.04,0.148v0.076l0.124,0.086l0.125,0.116l0.097,0.13l0.041,0.128l0.023,0.052l0.104,0.091l0.028,0.069l-0.008,0.104   l-0.028,0.082l-0.033,0.06l-0.016,0.043l-0.009,0.18l-0.033,0.207l-0.061,0.17l-0.09,0.071l-0.122,0.049l-0.316,0.236l-0.155,0.204   l-0.209,0.106l-0.396,0.143l-0.124,0.081l-0.538,0.686l-0.033,0.062l-0.098-0.085l-0.052-0.18l-0.019-0.213l0.008-0.185   l-0.102,0.133l-0.055,0.148l-0.075,0.306l-0.071,0.167l-0.238,0.413l-0.155-0.076v0.076l0.133,0.106l0.004,0.185l-0.047,0.228   l-0.019,0.233l0.055,0.213l0.198,0.356l0.064,0.176l-0.113-0.127l-0.035-0.046h-0.084l0.044,0.108l0.014,0.069l-0.014,0.067   l-0.044,0.095l0.045,0.012l0.025-0.001l0.011,0.014l0.003,0.057l0.052-0.008l0.008-0.015l-0.007-0.026l0.018-0.034l0.08,0.017   l0.03,0.018l0.036-0.001l0.092-0.034v0.158l0.228-0.057l0.854-0.018l0.155-0.122l0.214-0.095l0.182,0.013l0.068,0.203l0.077-0.083   l0.075,0.111l0.066,0.046l0.053-0.033l0.036-0.125l0.195,0.277l0.186,0.435l0.076,0.474l-0.141,0.393l-0.152,0.061l-0.165-0.075   l-0.142-0.153l-0.088-0.17l-0.016-0.186l0.01-0.5l-0.072-0.224l-0.091,0.191l-0.058,0.073l-0.083,0.066l0.133,0.188l-0.01,0.132   l-0.109,0.096l-0.169,0.081l0.077,0.083l-0.043,0.016l-0.02-0.001l-0.008,0.014l-0.005,0.061l0.338,0.159l-0.091,0.225   l-0.233,0.281l-0.091,0.326l0.078-0.04l0.065-0.054l0.051-0.069l0.038-0.084h0.077l0.017,0.159l-0.014,0.143l-0.052,0.116   l-0.105,0.079l0.13,0.07l0.152-0.009l0.145-0.06l0.121-0.083v0.255l0.102-0.146l0.1,0.007l0.097,0.095l0.088,0.119l-0.057,0.113   l0.063,0.137l0.125,0.115l0.188,0.071l0.202,0.111l0.099,0.038l0.072,0.004l0.166-0.015l0.07,0.011l0.185,0.176l0.184,0.305   l0.257,0.6l-0.213,0.526l-0.148,0.266l-0.222,0.115l-0.083,0.067l-0.191,0.427l-0.585,0.689l-0.077,0.053l-0.263-0.054   l-0.166,0.004l-0.075,0.091l-0.126,0.219l-0.279,0.115l-0.29,0.082l-0.156,0.12l-0.166-0.135l-0.105-0.063l-0.122-0.049   l-0.096-0.019l-0.33,0.019l-0.129,0.038l-0.045,0.085l-0.017,0.085l-0.039,0.038l-0.682,0.06l-0.203-0.06l-0.187-0.212   l-0.084-0.034l-0.091-0.014l-0.088-0.039l-0.069-0.063l-0.03-0.087l-0.04-0.074l-0.099-0.047l-0.125-0.018l-0.122,0.011   l-0.063,0.045l-0.111,0.161l-0.066,0.04l-0.056-0.006l-0.065-0.023l-0.042-0.026l0.009-0.019l-0.299,0.067l-0.169,0.106   l-0.074,0.194l-0.034,0.051l-0.085,0.093l-0.102,0.071l-0.087-0.013l-0.03-0.111l0.03-0.138l0.051-0.117l0.027-0.045l0.051-0.255   l0.027-0.281l-0.025-0.103l-0.105-0.192l-0.025-0.121l-0.357-0.17l-0.132-0.12l0.179-0.078l-0.307-0.285l0.033-0.045l0.149-0.01   l0.103-0.038l0.065-0.078l0.026-0.128h0.085l0.128,0.15l0.35,0.277l0.139,0.157l0.19,0.339l0.086,0.037l0.034-0.249l0.079-0.155   l0.155-0.196l0.106-0.208l-0.064-0.191l-0.292-0.229l-0.133-0.137l-0.083-0.166l-0.022,0.076l-0.029,0.069l-0.022,0.077l-0.005,0.1   l-0.164-0.11l-0.05-0.159l-0.019-0.191l-0.075-0.201l-0.011,0.421l-0.033,0.199l-0.11,0.122l-0.028-0.148l-0.06-0.171l-0.075-0.157   l-0.077-0.101l-0.15-0.062l-0.375-0.038l-0.164-0.064l-0.087-0.063l-0.061-0.062l-0.029-0.084l0.017-0.128l0.052-0.105l0.069-0.022   l0.065,0.003l0.044-0.034l0.027-0.12l0.017-0.291l0.034-0.176h-0.077l-0.155,0.496h-0.076l-0.025-0.417l-0.191-0.329l-0.296-0.182   l-0.34,0.019l0.066-0.189l-0.017-0.182l0.015-0.16l0.16-0.129l0.107-0.022l0.053,0.032l0.062,0.048l0.134,0.025l0.099-0.024   l0.077-0.061l0.17-0.163l0.033,0.052l0.072,0.055l0.05,0.058l0.032-0.064l0.053-0.08l0.059-0.067l0.052-0.029l0.036-0.047   l-0.017-0.089l-0.065-0.054l-0.286,0.145l-0.175-0.006l-0.147,0.026l-0.083,0.183h-0.077l-0.301-0.47l-0.043-0.239l0.19-0.208   l-0.111-0.117l-0.06-0.197l0.024-0.182l0.146-0.076v-0.09l-0.24-0.248v-0.083h0.085v-0.075l-0.074-0.105l-0.087-0.048l-0.086,0.028   l-0.071,0.125l0.085,0.572l-0.121-0.088l-0.164-0.225l-0.108-0.101l0.028,0.123l0.125,0.291l-0.322-0.334l-0.27-0.552l-0.05-0.565   l0.34-0.378l-0.139-0.184l0.019-0.25l0.191-0.559l0.037,0.025l0.088,0.033l0.036,0.025l-0.021-0.283l-0.112-0.313l-0.163-0.286   l-0.174-0.202l0.073-0.185l0.218-0.384l0.096-0.101l0.18-0.06l0.092,0.067l0.091,0.108l0.177,0.059l-0.061-0.189l0.093-0.161   l0.138-0.141l0.069-0.132l-0.033-0.679l-0.052-0.116v-0.083l0.088-0.146l0.005-0.23l-0.093-0.453l0.121,0.028l0.083,0.065   l0.041,0.102l-0.005,0.137l0.146-0.051l0.041-0.101l0.006-0.107l0.039-0.072l0.1-0.02l0.285,0.02l0.936-0.083v-0.091l-0.218-0.248   l0.145-0.281l0.26-0.284l0.122-0.258l-0.202,0.056l-0.1-0.137l0.03-0.18l0.194-0.071v-0.091l-0.299,0.045l-0.351,0.096   l-0.317-0.016l-0.199-0.292l-0.155,0.166v0.091h0.085v0.067l-0.094,0.117l-0.036,0.067l-0.03,0.081h-0.077l-0.13-0.182   l-0.041-0.307l0.017-0.681l-0.195,0.1l-0.149-0.063l-0.056-0.144l0.091-0.143v-0.082l-0.285,0.084v0.004l-0.003,0.358l0.141,0.409   l0.146,0.225v0.091h-0.085v-0.091h-0.07l-0.204,0.232l-0.372-0.113l-0.667-0.452l0.116-0.093l0.094-0.384l0.099-0.188l-0.041-0.085   l-0.018-0.177l-0.018-0.077l0.04-0.042l0.035-0.045l0.014-0.064l-0.011-0.099l-0.206,0.103l-0.244,0.162l-0.135,0.198l0.122,0.208   l-0.08,0.017l-0.075-0.012l-0.074-0.035l-0.088-0.053v-0.082l0.054-0.097l0.008-0.139l-0.03-0.125l-0.066-0.055l-0.022-0.055   l0.141-0.36l-0.238,0.194l-0.104,0.041l-0.044-0.114l-0.017-0.125l-0.045-0.109l-0.074-0.087l-0.097-0.058l0.038-0.243l0.04-0.089   l-0.078-0.106l0.08-0.155l0.155-0.151l0.146-0.095v-0.076l-0.126,0.023l-0.095-0.014l-0.063-0.061l-0.019-0.114l-0.849,0.749   l0.061,0.039l0.033,0.043l0.026,0.043l0.033,0.042l-0.036,0.005l-0.08-0.006l-0.037,0.001v0.083l0.075-0.025l0.16-0.031   l0.073-0.028l0.013,0.234l-0.166,0.099l-0.245-0.004l-0.227-0.078v0.083l0.738,0.267l0.121,0.107l0.03,0.089l0.334,0.461   l-0.019,0.067l-0.069,0.043l-0.046,0.055l0.016,0.381l-0.016,0.125l-0.044,0.062l-0.155,0.162l-0.031,0.063l-0.111,0.139   l-0.509,0.211l-0.155,0.103l-0.06-0.11l-0.012-0.098l0.023-0.097l0.049-0.103l-0.094,0.077l-0.105,0.136l-0.083,0.143l-0.035,0.098   l-0.067,0.086l-0.157,0.033l-0.913-0.014l-0.097-0.056l-0.163-0.267l-0.06,0.256l-0.188,0.192l-0.241,0.076l-0.215-0.094   l-0.055,0.053l-0.04,0.025l-0.029,0.025l-0.03,0.056h-0.07l-0.018-0.329l0.018-0.328l-0.133,0.163l-0.083,0.281l-0.058,0.386   l-0.483-0.002l-0.168-0.073l-0.087-0.183l-0.058,0.134l0.004,0.117l0.049,0.097l0.083,0.076l-0.199,0.026l-0.478-0.287   l-0.216-0.078l-0.309-0.067l-0.117-0.159l0.044-0.194l0.185-0.169l0.254-0.072l0.31-0.043l0.26-0.077l0.111-0.174l-0.005-0.526   l-0.072-0.603h-0.077l-0.052,0.146l-0.094,0.005l-0.1-0.09l-0.069-0.137h-0.071l-0.084,0.117l-0.111,0.031l-0.09-0.064   l-0.033-0.168h-0.076l-0.039,0.055l-0.116,0.105l0.039-0.135l0.055-0.097l0.136-0.176v-0.09l-0.207,0.086l-0.392,0.262   l-0.241,0.075l-0.251,0.035l-0.127-0.003l-0.163-0.032l-0.188-0.071l-0.082-0.085l-0.161-0.351l-0.054-0.175l-0.048-0.074   l-0.066-0.017l-0.182,0.031l-0.068-0.014l-0.138-0.148l-0.023-0.019v-0.114l0.058-0.044l0.069-0.028l0.034-0.063l-0.059-0.323   l-0.032-0.018l0.046-0.078l0.022-0.02l0.029-0.011l0.065-0.05l0.116-0.049l0.346-0.041l0.065-0.111l0.019-0.048l-0.082,0.03   l-0.142,0.019l-0.077,0.034l0.064-0.175l-0.105,0.034l-0.085,0.054l-0.064,0.073l-0.055,0.09h-0.071l-0.091-0.075v-0.083   l0.063-0.089l0.099-0.327h-0.071l-0.127,0.167l-0.034,0.075l-0.061-0.129l0.009-0.108l0.052-0.093l0.07-0.086l-0.233,0.045   l-0.447-0.082l-0.247,0.038l0.106,0.053l0.364,0.122l-0.041,0.053l-0.013,0.039l-0.004,0.053l-0.019,0.096l0.208-0.033l0.112,0.193   l0.011,0.281l-0.1,0.234l-0.065,0.07l-0.077,0.061l-0.062-0.016l-0.028-0.162l-0.002-0.14l-0.022-0.138l-0.07-0.073l-0.146,0.056   l0.063,0.068l0.022,0.042l-0.007,0.14l-0.037-0.044l-0.017-0.012l-0.027-0.006l-0.067-0.021l0.07,0.083l-0.037,0.051l-0.039,0.016   l-0.039,0.005l-0.039,0.02h0.23v0.082h-0.077v0.076l0.267,0.16l0.2,0.17l0.049,0.216l-0.199,0.293l0.241-0.03l0.107,0.005   l0.109,0.025l-0.13,0.219l-0.181-0.025l-0.21-0.121l-0.215-0.073l-0.103,0.031l-0.06,0.072l-0.045,0.082l-0.061,0.064l-0.112,0.035   l-0.191,0.003l-0.084,0.052l0.077,0.159l-0.134-0.119L451.436,500l-0.042-0.186l-0.185-0.065v-0.091l0.249-0.059l0.081,0.028   l0.057,0.122h0.07v-0.507l-0.103,0.092l-0.025,0.051l-0.019,0.106h-0.077l-0.216-0.209l0.031-0.252l0.105-0.251l0.002-0.203   l-0.079,0.04l-0.075-0.04l-0.122,0.292l-0.072,0.126l-0.123,0.082l-0.098-0.122l-0.229-0.099l-0.058-0.12l0.109,0.001l0.093-0.02   l0.183-0.065v-0.076l-0.202-0.066l-0.145,0.023l-0.071-0.017l0.032-0.189l0.073-0.139l0.104-0.109l0.094-0.132l0.044-0.21h-0.083   l-0.03,0.07l-0.077,0.1l-0.047,0.079l-0.071-0.236l-0.007-0.097h-0.077l0.008,0.155l-0.01,0.153l-0.029,0.145l-0.047,0.13h-0.077   l-0.061-0.112l-0.017-0.054h-0.077l0.113,0.245l0.047,0.143l-0.005,0.118l-0.387,0.076l-0.008-0.179l0.042-0.143l0.113-0.26   l-0.305,0.08l-0.126-0.159l0.022-0.225l0.146-0.113l0.185-0.104l0.243-0.493l0.152-0.16v-0.075l-0.146-0.072l-0.318-0.262   l-0.005,0.079l-0.02,0.054l-0.03,0.048l-0.023,0.062l-0.049-0.033l-0.042-0.015l-0.141-0.034l0.042,0.041l0.035,0.016l0.034,0.007   l0.043,0.018l-0.119,0.055l-0.113-0.026l-0.075-0.101l-0.008-0.17l0.058-0.073l0.1-0.051l0.078-0.093l-0.006-0.2h-0.07l-0.002,0.04   l0.005,0.081l-0.003,0.039h-0.083l-0.017-0.046l-0.061-0.113l-0.028,0.2l-0.055,0.142l-0.09,0.114l-0.136,0.121l-0.047-0.026   l-0.185-0.05v0.076l0.064,0.037l0.028,0.038l0.025,0.044l0.039,0.056l-0.193,0.055l-0.191,0.106l-0.074,0.131l0.148,0.124   l-0.321-0.082l-0.028-0.294l0.193-0.706l-0.086,0.058l-0.063,0.073l-0.045,0.09l-0.03,0.113l-0.008,0.358l-0.097,0.275l0.078,0.208   l0.158,0.193l0.17,0.133l-0.035,0.007l-0.12-0.007l0.012,0.056l0.021,0.038l0.025,0.033l0.019,0.048l0.119-0.085l0.1,0.07   l0.066,0.139l0.025,0.118l-0.036,0.137l-0.066,0.103l-0.054,0.128l0.002,0.214l-0.105-0.042l-0.071-0.009l-0.062,0.015   l-0.079,0.035l0.135,0.042l0.129,0.059l0.114,0.073l0.093,0.083v0.076h-0.155l0.003,0.05l0.025,0.034l0.013,0.003l0.029,0.003   l-0.015,0.007l-0.029-0.007h-0.182v0.083l0.098,0.016l0.112,0.053l0.099,0.015v0.082l-0.042,0.056l-0.007,0l0.017,0.014   l0.032,0.096l0.089-0.352l0.08-0.152l0.146-0.078l-0.029,0.108l-0.052,0.059l-0.051,0.038l-0.03,0.046l-0.01,0.113l0.032,0.106   l-0.022,0.113l0.059-0.053l0.044-0.025l0.035-0.027l0.023-0.062l0.046-0.005l0.017,0.016l0.008,0.072l0.033-0.069l0.122-0.179   h0.077l0.064,0.244l-0.093,0.084l-0.136,0.067l-0.066,0.194l0.108-0.074l0.047-0.017l-0.069,0.177l-0.123,0.062l-0.142-0.016   l-0.13-0.057v0.09l0.061,0.019l0.042,0.024l0.05,0.022l0.087,0.01l-0.029,0.12l-0.042,0.076l-0.066,0.042l-0.102,0.019l0.053,0.122   l0.025,0.044l-0.321,0.144l-0.105,0.022l-0.013-0.073l0.019-0.142l0.083-0.099l0.181,0.057v-0.076l-0.155-0.173l-0.147,0.21   l-0.076,0.069l-0.094,0.06l0.074,0.105l0.014,0.069l-0.046,0.045l-0.103,0.03v0.083l0.034,0.005l0.112-0.005v0.076l-0.577,0.062   l-0.203-0.036l-0.141-0.186l0.011-0.247l0.182-0.059l0.16,0.073l-0.052,0.151l0.176-0.017l0.077-0.133l0.056-0.356h-0.07   l-0.057,0.065l-0.055,0.017l-0.059-0.025l-0.068-0.057v-0.084l0.055-0.059l0.069-0.049l0.085-0.037l0.1-0.022l-0.026-0.099   l0.076-0.073l0.129-0.049l0.13-0.029v-0.083l-0.538,0.098l-0.156-0.014l0.158-0.182l0.039-0.102l-0.036-0.132l-0.033,0.065   l-0.083,0.102l-0.044,0.081l-0.018-0.063h-0.012l-0.042-0.02l-0.061,0.148l-0.135-0.001l-0.547-0.299l-0.019-0.115l0.061-0.231   l-0.224,0.197l-0.115,0.341l0.016,0.364l0.169,0.262h-0.24l0.052,0.126l0.032,0.048l-0.086,0.04l-0.064,0.067l-0.047,0.095   l-0.036,0.123l0.177,0.005l0.055-0.005v0.091l-0.077,0.046l-0.199,0.171l-0.04,0.07l-0.025,0.165l-0.067,0.056l-0.099,0.018   l-0.119,0.055l-0.365,0.317l-0.174,0.09l-0.008-0.158l0.102-0.192l0.29-0.426l0.079-0.213l0.009-0.081l-0.003-0.082l-0.036-0.095   l-0.087-0.116l-0.169-0.158l0.012-0.079l0.118-0.145l-0.242,0.104l-0.075,0.062l-0.006-0.039l0.006-0.127l-0.048,0.017   l-0.058,0.048l-0.041,0.025l0.084,0.067l0.047,0.086v0.094l-0.053,0.085v0.076h0.07l-0.384,0.331l-0.208,0.051l-0.257-0.126   l-0.077,0.082l0.044,0.118l-0.046,0.032l-0.083-0.044l-0.07-0.107l-0.101,0.195l-0.147,0.005l-0.162-0.056l-0.138,0.015   l0.122,0.201l-0.067,0.108l-0.16,0.007l-0.282-0.193l-0.169-0.041l-0.168,0.012l-0.125,0.071l0.409,0.305l0.138,0.035l-0.237,0.018   l-0.084,0.151l0.028,0.172l0.097,0.082l0.158-0.031l0.129-0.06l0.152-0.037l0.221,0.037v0.091l-0.423,0.049l-0.301,0.137   l-0.52,0.471h-0.077l0.017-0.191l0.083-0.157l0.21-0.241v-0.067l-0.532-0.549l-0.15-0.042l-0.394-0.428l-0.322-0.241l-0.139-0.135   l-0.125-0.209l-0.052-0.151l-0.085-0.115l-0.235-0.103l-0.382-0.099l-0.201-0.027l-0.173,0.008l-0.174,0.068l-0.443,0.332   l-0.208,0.086l-0.664,0.147h-0.23l-0.474-0.064l-0.203,0.026l-0.074,0.065l-0.094,0.194l-0.095,0.068l-0.096,0.003l-0.115-0.031   l-0.197-0.079l-0.145-0.07l-0.045-0.428l-0.126-0.188l-0.225-0.062l-0.182,0.081l-0.306,0.323l-0.393,0.238l-0.165-0.16   l-0.044-0.043l-0.299-0.885l-0.346-0.361l-0.326,0.038l-0.359,0.121l-0.45-0.12l-0.878-0.779l-0.328-0.205l-0.477-0.101   l-0.236-0.079l-0.156-0.167l-0.022-0.251l0.118-0.195l0.162-0.18l0.105-0.204l-0.01-0.252l-0.123-0.177l-0.198-0.096l-0.234-0.006   l-0.198,0.083l-0.181,0.11l-0.197,0.037l-0.244-0.132l-0.152-0.19l-0.096-0.171l-0.137-0.131l-0.274-0.068l-0.469,0.012   l-0.199-0.03l-0.232-0.122l-0.055-0.054l-0.088-0.128l-0.065-0.048l-0.156-0.054l-0.073,0.016l-0.369,0.416l-0.171,0.131   l-0.177-0.008l-0.066-0.074l-0.04-0.106l-0.016-0.115l0.001-0.103l0.223-0.576l0.058-0.286l-0.009-0.323l-0.024-0.051l-0.099-0.121   l-0.03-0.066l-0.004-0.1l0.035-0.198l-0.002-0.088l-0.059-0.141l-0.084-0.121l-0.071-0.135l-0.03-0.181l0.138-0.18l0.099-0.095   l0.027-0.121l-0.263-0.898l-0.067-0.156l-0.187-0.163l-0.451-0.022l-0.25-0.09l-0.153-0.161l-0.06-0.189l-0.023-0.453l-0.017-0.072   l-0.069-0.298v-0.128l0.039-0.135l0.125-0.184l0.051-0.101l0.259-1.251l0.095-0.254l0.123-0.153l0.222-0.027l0.135,0.155   l0.119,0.211l0.184,0.139l0.244-0.004l0.139-0.127l0.198-0.63l0.084-0.187l0.243-0.382l0.101-0.223l0.046-0.385l0.08-0.216   l0.134-0.121l0.374-0.22l0.082-0.15l-0.101-0.157l-0.242-0.025l-0.264,0.025l-0.167-0.005l0.008-0.03l-0.182-0.319l-0.337-0.272   l-0.122-0.163l-0.078-0.074l-0.121-0.03l-0.101,0.037l-0.091,0.167l-0.081,0.046l-0.253-0.04l-0.127-0.149l-0.084-0.195   l-0.114-0.177l-0.167-0.105l-0.566-0.143l-0.178-0.077l-0.152-0.046l-0.111,0.072l-0.048,0.276l-0.178,0.1l-1.611,0.432   l-0.218,0.033l-0.224,0.001l-0.24-0.044l-0.242-0.113l-0.078-0.144l-0.046-0.452l-0.233-0.426l-0.366-0.234l-0.429-0.11   l-0.617-0.074l-0.887,0.069l-0.105,0.059l-0.181,0.378l-0.144,0.092l-0.185,0.058l-0.358,0.041l-0.108-0.014l-0.193-0.052   l-0.121,0.018l-0.067,0.064l-0.04,0.099l-0.049,0.09l-0.095,0.038l-0.206-0.155l-0.638-0.724l-0.15-0.234h-0.001l-0.002-0.002   v-0.002l-0.126-0.125l-0.13-0.063l-0.132-0.042l-0.135-0.066l-0.215-0.224l-0.118-0.076l-0.287,0.007l-0.318-0.098l-0.802-0.034   l-0.163-0.069l-0.135-0.194l-0.05-0.229l-0.001-0.061l-0.005-0.458l-0.074-0.237l-0.079-0.094l-0.047-0.056l-0.49-0.33   l-0.108-0.142l-0.23-0.483l-0.149-0.278l-0.056-0.066l-0.129-0.065l-0.088,0.012l-0.085,0.032l-0.109-0.007l-0.156-0.075   l-0.182-0.124l-0.177-0.156l-0.133-0.17l-0.09-0.232l-0.049-0.217l-0.09-0.141l-0.209-0.006l-0.154,0.092l-0.391,0.353   l-0.109,0.128l-0.094,0.236l-0.043,0.233l-0.072,0.202l-0.188,0.14l-0.128,0.022l-0.081-0.027l-0.066-0.041l-0.087-0.021   l-0.036-0.014l-0.084-0.064l-0.032-0.013l-0.06,0.026l-0.029,0.048l-0.021,0.052l-0.04,0.036l-0.921,0.262l-0.163,0.069   l-0.35,0.246l-0.388,0.203l-0.41,0.376l-0.115,0.068l-0.159-0.018l-0.297-0.18l-0.157-0.017l-0.122,0.1l-0.037,0.173l-0.014,0.197   l-0.048,0.171l-0.287,0.244l-0.277,0.044l-0.153,0.131l0.329,1.615l0.011,0.247l-0.049,0.123l-0.559,0.343l-0.128,0.141   l-0.393,0.561l-0.146,0.148l-0.165,0.109l-0.199,0.075l-0.232,0.015l-0.381-0.121l-0.218-0.027l-0.061,0.034l-0.115,0.137   l-0.066,0.027l-0.104-0.025l-0.054-0.042l-0.045-0.049l-0.066-0.045l-0.039-0.055l0.016-0.067l-0.004-0.056l-0.1-0.02l-0.026,0.039   l-0.202,0.227l-0.732,0.608l-0.222,0.242l-0.986,0.646l-0.073,0.048l-0.173,0.028l-0.169-0.075l-0.236-0.149l-0.622-0.29   l-0.143-0.169l-0.081-0.244l-0.01-0.264l0.049-0.262l0.091-0.24l-0.316-0.008l-0.963,0.346l-0.33,0.027l-0.138,0.038l-0.153,0.109   l-0.083,0.106l-0.135,0.249l-0.105,0.105l-0.237,0.319l-0.112,0.346l-0.073,0.745l-0.046,0.188l-0.151,0.363l-0.051,0.185v0.193   l0.021,0.176l-0.023,0.16l-0.129,0.146l-0.164,0.1l-0.097-0.115l-0.116-0.101l-0.173-0.044l-0.095-0.061l-0.161-0.31l-0.093-0.131   l-0.067-0.031l-0.181-0.023l-0.066-0.022l-0.256-0.293l-0.089-0.042l-0.076-0.079l-0.226-0.363l-0.049-0.106l-0.126-0.148   l-0.767-0.697l-0.769-0.944l-0.131-0.072l-0.488,0.283l-0.156,0.098l-0.085,0.15l-0.065,0.184l-0.096,0.195l-0.24,0.298   l-0.029,0.119l0.061,0.52l0.011,0.096l-0.053,0.115l-0.362,0.54l-0.12,0.073l-0.206-0.033l-0.139-0.092l-0.29-0.326l-0.414-0.693   l-0.075-0.172l-0.022-0.217l0.019-0.213l-0.026-0.171l-0.161-0.09l-0.097-0.142l-0.115-0.127l-0.132-0.109l-0.146-0.085   l-0.256-0.091l-0.135,0.03l-0.449,0.794l-0.198,0.549l-0.086,0.121l-0.187,0.158l-0.679,0.36l-0.302,0.238l-0.133,0.357l0.029,0.1   l0.137,0.172l0.012,0.125l-0.042,0.095l-0.574,0.401l-0.191,0.085l-0.182,0.033l-0.16,0.11l0.008,0.167l0.048,0.197l-0.046,0.199   l-0.181,0.127l-0.228-0.002l-0.225-0.089l-0.368-0.271l-0.418-0.117l-0.193-0.098l-0.101-0.124l-0.39-0.774l-0.07-0.22l-0.09-0.206   l-0.151-0.177l-0.209-0.11l-0.477-0.111l-0.219-0.092l-0.67-0.555l-0.233-0.096l-0.452-0.081l-0.224-0.081l-0.072-0.063   l-0.169-0.195l-0.051-0.043l-0.119,0.028l-0.066,0.083l-0.052,0.092l-0.084,0.056l-0.256-0.011l-0.078-0.147l-0.029-0.223   l-0.119-0.236l-0.243-0.187l-0.301-0.1l-0.284,0.042l-0.194,0.244v0.001l-0.118,0.434l-0.09,0.201l-0.139,0.159l-0.117,0.034   l-0.13-0.008l-0.118,0.011l-0.078,0.092l0.005,0.138l0.08,0.089l0.106,0.07l0.067,0.082l0.044,0.101l0.021,0.024l-0.084,0.163   l-1.408,1.472l-0.113,0.224l-0.067,0.413l-0.06,0.209l-0.15,0.192l-0.164-0.022l-0.192-0.105l-0.249-0.054l-0.198,0.054   l-0.206,0.125l-0.115,0.163h-0.128l-0.076-0.101l-0.008-0.111l-0.052-0.101l-0.111-0.073l-0.109-0.04l-0.694-0.167l-0.222-0.017   l-0.235,0.028l-0.242,0.101l-0.493,0.012l-0.201,0.076l-0.115,0.215l-0.048,0.249l-0.106,0.159l-0.287-0.055l-0.281-0.282   l-0.373-0.807l-0.338-0.286l-0.05-0.006h-0.1l-0.324,0.055l-0.272,0.155l-0.232,0.203l-0.16,0.198l-0.107,0.268l-0.011,0.247   l0.018,0.238l-0.023,0.243l-0.029,0.017l-0.197,0.204l-0.013,0.052l-0.03,0.195l-0.156,0.509l-0.056,0.096l-0.15,0.069   l-0.139-0.022L370.3,492.1l-0.144,0.001l-0.117,0.064l-0.101,0.099l-0.181,0.221l0.028,0.21l0.349,0.424l0.141,0.213l0.061,0.327   l-0.058,0.236l-0.077,0.216l0.005,0.27l0.108,0.254l0.308,0.505l0.093,0.252l0.073,0.487l0.108,0.17l0.247,0.156l0.402,0.116   l0.078,0.107l0.021,0.095l0.007,0.094l0.032,0.104l0.259,0.354l0.142,0.308l0.056,0.086l0.282,0.258l0.005,0.119l-0.225,0.681   l-0.042,0.217l0.006,0.185l0.048,0.074l0.185,0.163l0.064,0.101l0.009,0.119l-0.037,0.254l0.041,0.128l0.168,0.12l0.212,0.059   l0.162,0.099l0.026,0.243l-0.143,0.216l-0.236,0.07l-0.246,0.035l-0.167,0.107l-0.016,0.201l0.153,0.486l-0.045,0.23l-0.165,0.26   l-0.047,1.202l-0.113,0.452l-0.005,0.207l0.084,0.205l0.159,0.145l0.589,0.22l0.143,0.087l0.126,0.109l0.09,0.132l0.04,0.156   l-0.01,0.126l-0.015,0.037l-0.025,0.062l-0.068,0.078l-0.091,0.061l-0.104,0.019l-0.254-0.054l-0.153,0.139l0.04,0.137l0.075,0.172   l-0.02,0.121l-0.019,0.119l-0.122,0.09l-0.209,0.069l-0.222,0.038l-0.155-0.008l-0.181-0.13l-0.205-0.379l-0.17-0.147l-0.217-0.003   l-0.446,0.195l-0.167-0.028l-0.051-0.115l0.042-0.116l0.064-0.115l0.018-0.11l-0.048-0.134l-0.048-0.039l-0.077-0.007l-0.382-0.13   l-0.243-0.046l-0.254-0.003l-1.286,0.247l-0.218,0.081l-0.548,0.377l-0.24,0.105l-0.197,0.024l-0.176-0.065l-0.174-0.163   l-0.108-0.163l-0.163-0.333l-0.129-0.144l0.114-0.449l0.015-0.168l-0.022-0.045l-0.101-0.106l-0.023-0.075l0.174-0.246l0.135-0.347   l-0.019-0.098l-0.026-0.001l-0.049,0.011l-0.209-0.153l-0.326-0.178l-0.087-0.063l-0.036-0.257l0.221-0.989l-0.013-0.358   l-0.136-0.199l-0.176-0.013l-0.054-0.187l0.04-0.221l0.112-0.17l0.07-0.143l-0.081-0.138l0.024-0.177l-0.084-0.25l-0.138-0.224   l-0.146-0.097l-0.098-0.127l-0.032-0.597l-0.068-0.191l-0.408-0.084l-0.16,0.057l-0.152,0.091l-0.14,0.112l-0.567,0.414   l-0.209,0.089l-1.096,0.327l-0.482,0.241l-0.429,0.383l-0.457,0.685l-0.596,0.65l-0.48,0.255l-0.002,0.003l-0.176,0.187   l-0.272,0.131l-0.565,0.17l-0.292,0.025l-0.553-0.107l-0.259,0.06l-0.199,0.022l-0.15-0.103l-0.104-0.181l-0.056-0.207   l-0.342-0.286l-0.175-0.109l-0.231-0.048l-0.241,0.017l-0.175,0.074l-0.135,0.138l-0.137,0.213l-0.002,0.003l-0.145,0.148   l-0.162,0.097l-0.352,0.129l-0.157,0.094l-0.366,0.287l-0.122,0.065l-0.279-0.103l-0.387-0.559l-0.233-0.16l-0.119-0.155   l-0.082-0.251l-0.044-0.268l-0.005-0.203l0.035-0.174l0.07-0.207l0.103-0.204l0.133-0.169l0.118-0.065l0.114-0.024l0.086-0.039   l0.029-0.112l-0.04-0.069l-0.087-0.091l-0.165-0.138l-0.432-0.132l-0.969-0.02l-0.408-0.227l-0.118-0.2l-0.125-0.681l-0.194-0.43   l-0.047-0.206l0.025-0.279l0.397-0.885l0.118-0.469l-0.172-0.395l-0.121-0.129l-0.062-0.158l0.007-0.167l0.085-0.159l-0.855-0.151   l-0.215,0.035l-0.063,0.098l-0.006,0.244l-0.091,0.093l-0.143,0.021l-0.086-0.064l-0.067-0.097l-0.086-0.079l-0.687-0.358   l-0.176-0.047l-0.225,0.114l-0.113,0.175l-0.112,0.097l-0.227-0.119l-0.052-0.071l-0.104-0.212l-0.089-0.098l-0.098-0.059   l-1.07-0.268l-0.384,0.041l-0.166-0.012l-0.586-0.243l-0.155,0.022l-0.68,0.288l-0.395,0.04l-0.873-0.088l-0.46-0.118l-0.52-0.24   l-0.248-0.262l0.346-0.185l-0.178-0.196l0.079-0.244l0.373-0.497l0.077-0.197l0.138-0.595l0.083-0.137l0.204-0.245l0.053-0.152   l-0.022-0.15l-0.065-0.086l-0.036-0.088l0.064-0.159l0.449-0.23l0.706-0.746l0.095-0.138l0.049-0.139l-0.016-0.131l-0.11-0.207   l-0.028-0.125l0.033-0.246l0.117-0.414l-0.027-0.263l-0.534-1.362l0.001-0.314l0.102-0.11l0.116-0.078l0.127-0.054l0.138-0.04   l0.095-0.083l0.225-0.471l0.28-0.342l0.123-0.195l0.028-0.214l-0.064-0.552l0.025-0.141l0.187-0.074l0.618,0.326l0.349,0.018   l0.257-0.217l-0.039-0.281l-0.406-0.563l-0.095-0.207l0.014-0.199l0.039-0.188l-0.022-0.171l-0.168-0.103l-0.848-0.032   l-0.251-0.164l-0.341-0.463l-0.194-0.127l-0.223,0.039l-0.135,0.171l-0.092,0.195l-0.104,0.106l-0.205,0.053l-0.105,0.057   l-0.241,0.208l-0.128,0.067l-0.094-0.006l-0.08-0.051l-0.084-0.071l-0.028-0.081l-0.004-0.227l-0.058-0.043l-0.105,0.011   l-0.025-0.004l-0.046-0.015l-0.166-0.016l-0.287-0.092l-0.098-0.013l-0.428,0.058l-0.195-0.002l-0.225-0.098l-0.179-0.216   l-0.069-0.237l-0.076-0.173l-0.193-0.021l-0.215,0.026l-0.222-0.027l-0.422-0.122l-0.842-0.089l0.013-0.405l0.572-1.051   l-0.16-0.317l-0.408,0.011l-0.08-0.031l-0.002-0.125l0.101-0.069l0.132-0.049l0.091-0.063l0.094-0.225l0.025-0.234l-0.03-0.245   l-0.159-0.489l-0.131-0.249l-0.171-0.17l-0.213,0.005l-0.229,0.073l-0.111-0.082l-0.216-0.643l0.04-0.175l0.135-0.134l0.532-0.322   l0.078-0.082l0.081-0.17l-0.015-0.07l-0.072-0.058l-0.471-0.754l-0.087-0.209l-0.014-0.625l-0.067-0.189l-0.173-0.134l-0.447-0.077   l-0.34-0.113l-0.264-0.001l-0.105-0.032l-0.136-0.118l-0.001-0.076l0.054-0.07l0.035-0.099l-0.082-0.911l0.007-0.161l0.092-0.309   l0.018-0.106l-0.099-0.202l-0.078-0.098l0.05-0.104l0.188-0.083l0.219-0.066l0.199-0.085l0.552-0.479l1.026-0.703l0.195-0.381   l-0.074-0.357l-0.014-0.03l-0.118,0.083l-0.421,0.124l-1.154,0.095l-0.39,0.179l-0.468,0.076l-0.316,0.164l-0.174,0.055   l-0.134,0.091l-0.17-0.079l-0.308-0.147l-0.45-0.339l-0.325-0.081l-0.448-0.03l-0.446,0.027l-0.191,0.07l-0.356,0.217l-0.188,0.068   l-0.424-0.008l-0.839-0.214l-0.426-0.016l-0.866,0.212l-2.435,0.978l-0.151,0.102l-0.456,0.528l-0.209,0.169l-0.156,0.045   l-0.165,0.017l-0.246,0.082l-0.222,0.154l-0.581,0.581l-0.225,0.104l-0.241,0.076l-0.094,0.05l-0.116,0.061l-0.14,0.208   l-0.056-0.239l-0.048-0.113l-0.063-0.099l-0.421-0.302l-0.449-0.2l-0.187-0.237l2.164-2.262l0.14-0.275l0.034-0.296l-0.049-0.128   l-0.16-0.22l-0.034-0.145l0.035-0.134l0.074-0.084l0.083-0.068l0.063-0.094l-0.064-0.449l-0.836-0.307l-0.071-0.319l0.174-0.132   l0.234-0.026l0.173-0.07l-0.014-0.264l-0.083-0.125l-0.208-0.153l-0.06-0.148l-0.021-0.125l-0.036-0.132l-0.056-0.12l-0.084-0.086   l-0.176-0.037l-0.268,0.004l-0.918,0.138l-0.071-0.097l0.007-0.287l0.28-1.687l-0.065-1.57l0.037-0.271l0.001-0.001l0.767-0.516   l0.436-0.378l0.242-0.162l0.249-0.047l0.46,0.09l0.248-0.002l0.19-0.102l0.088-0.25l-0.136-0.195l-0.418-0.336l-0.179-0.375   l-0.056-0.414l0.021-0.854l-0.063-0.452l0.046-0.111l0.204-0.067l0.18-0.141l0.187-0.288l0.26-0.564l0.271-0.988l0.256-0.3   l0.415,0.219l0.13,0.206l0.08,0.177l0.115,0.099l0.238-0.024l0.236-0.137l0.515-0.673l0.182-0.128l0.466-0.236l0.129-0.133   l0.2-0.531l0.149-0.273l0.161-0.124l0.208-0.037l0.042-0.092l-0.021-0.178l0.02-0.477l-0.035-0.123l-0.047-0.109l-0.06-0.33   l0.004-0.084l0.055-0.084l0.208-0.194l0.126-0.156l0.059-0.196l-0.01-0.612l0.019-0.157l0.115-0.02l0.93,0.333l0.167,0.093   l0.333,0.335l0.145,0.026l0.256-0.089l0.233-0.119l0.164-0.136l0.115-0.188l0.143-0.553l0.061-0.157l0.431-0.537l0.035-0.102   l0.004-0.156l0.023-0.146l0.068-0.083l0.085-0.066l0.08-0.094l0.151-0.432l0.098-0.21l0.15-0.14l0.267-0.314l0.129-0.092   l0.197-0.009l0.144,0.064l0.258,0.218l0.323,0.125l0.107,0.059l0.11,0.014l0.181-0.074l0.586-0.463l0.08-0.124l0.061-0.157   l0.025-0.169l-0.029-0.159l-0.059-0.075l-0.139-0.053l-0.057-0.049l-0.104-0.243l-0.371-0.566l-0.103-0.118l-0.136-0.039   l-0.133,0.022l-0.114-0.02l-0.08-0.161l0.02-0.28l-0.051-0.23l-0.213-0.447l-0.074-0.217l-0.02-0.219l0.053-0.191l0.145-0.132   l0.443-0.11l0.194-0.073l0.072,0.018l-0.016,0.452l0.074,0.146l0.155-0.012l0.412-0.341l0.067-0.104l-0.002-0.263l0.067-0.074   l0.089-0.068l0.06-0.121l-0.046-0.205l-0.277-0.608l-0.1-0.112l-0.227,0.043l-0.068-0.123l0.027-0.215l0.056-0.24l0.094-0.266   l0.452-0.536l0.11-0.215l0.069-0.233l0.042-0.244l0.044-1.646l0.077-0.426l0.233-0.422l0.08-0.242l-0.055-0.267l-0.041-0.122   l-0.004-0.11l0.007-0.105l-0.01-0.106l-0.164-0.411l0.027-0.263l0.168-0.471l0.013-0.261l-0.09-0.233l-0.275-0.407l-0.041-0.248   l0.047-0.135l0.164-0.194l0.036-0.131l-0.007-0.115l-0.261-1.116l0.09-0.239l0.125-0.217l0.069-0.224l-0.073-0.256l-0.168-0.174   l-0.156-0.055l-0.129-0.071l-0.098-0.225l-0.115-0.834l0.012-0.411l0.075-0.371l0.271-0.855l0.04-0.421l-0.117-0.404l-0.071-0.054   l-0.083-0.006l-0.073-0.032l-0.033-0.134l-0.069-1.131l0.032-0.522l0.12-0.515l-0.028-0.266l-0.057-0.112l-0.096-0.14l-0.111-0.124   l-0.098-0.063l-0.138,0.009l-0.104,0.07l-0.105,0.091l-0.136,0.073l-0.296,0.013l-0.159-0.151l-0.237-0.498l-0.24-0.176   l-0.338,0.164l-0.201-0.176l-0.592-0.303l-0.136-0.043l-0.116,0.109l-0.029,0.242l0.008,0.473l-0.06,0.417l-0.109,0.401   l-0.219,0.302l-0.4,0.119l-0.384-0.175l-0.215-0.428l-0.241-0.997l-0.185-0.41l-0.381-0.602l-0.029-0.118l0.11-0.304l-0.035-0.075   l-0.071-0.065l-0.048-0.12l0.007-0.254l0.025-0.168l-0.046-0.123l-0.387-0.252l-0.188-0.229l-0.064-0.228l0.188-0.136l0.226-0.114   l0.007-0.19l-0.13-0.215l-0.191-0.19l-0.401-0.22l-0.073-0.146l0.129-0.278l0.046-0.266l0.062-1.155l-0.012-0.242l-0.094-0.212   l-0.042-0.04l-0.751-0.716l-0.195-0.112l-0.456-0.073l-0.07-0.131l0.102-0.364l-0.01-0.211l-0.16-0.15l-0.385-0.234l-0.535-0.726   l-0.435-0.19l-0.7,0.337l-0.362-0.109l-0.287-0.388l-0.457-1.357l-0.33-0.3l-0.332,0.166l-0.311,0.211l-0.268-0.164l-0.254-0.397   l-0.241-0.167l-0.209,0.115l-0.156,0.449l-0.124,0.219l-0.168,0.461l-0.153,0.203l-0.035,0.145l-0.066,0.106l-0.177,0.19   l-0.054,0.115l0.016,0.115l0.039,0.118l0.025,0.121v0.486l-0.051,0.258l-0.126,0.144l-0.226,0.005l-0.209-0.036l-0.157,0.052   l-0.074,0.273l-0.094,0.13l-0.405,0.234l-0.117,0.228l-0.433-0.234l-0.629-0.5l-0.101-0.113l-0.116-0.318l-0.088-0.044   l-0.108,0.002l-0.119-0.046l-0.76-0.663l-0.42-0.11l-0.515,0.233l-0.402,0.257l-0.358,0.085l-0.36-0.079l-0.408-0.233l-0.147-0.944   l-0.513-0.648l-0.798-0.519l-0.798-0.908l-0.969-0.26l-0.627,0.324l-0.342,0.649l-0.114,0.584l-0.058,0.768l-0.194,0.094   l-0.375-0.862l-0.399-0.389l0.456-0.584l-0.362-0.61l0.761-0.429l1.083-0.844l-0.061-0.619l-0.18-0.654l-0.599-0.722l-0.146-0.273   l-0.118-0.565l-0.092-0.243l-0.199-0.182l-0.165-0.017l-0.09-0.091l-0.01-0.142l0.073-0.171l-1.031-0.543l-0.172-0.789   l-0.798,0.261l-0.969,0.652l-0.234-1.06l0.101-0.194l0.115-0.17l0.186-0.115l1.204-0.338l0.125-0.111l0.169-0.392l0.277-0.435   l-0.007-0.169l-0.185-0.221l-0.145-0.071l-0.157,0.061l-0.216,0.179l-0.411,0.253l-0.368,0.007l-0.338-0.204l-0.33-0.383   l-0.116-0.217l-0.171-0.661l-0.102-0.187l-0.763-0.011l-0.684,0.065l-0.684,0.065l-1.026,0.458l-0.761-0.375l-0.221,0.095   l-0.358,0.066l0.029,0.867l-0.342,0.718l-0.798-0.131l-0.615-0.277l-0.12,0.029l-0.099,0.003l-0.096,0.021l-0.121,0.085   l-0.035,0.114l0.015,0.132l-0.021,0.099l-0.394,0.039l-0.039,0.154l0.122,0.471l-0.014,0.302l-0.115,0.079l-0.412-0.065   l-0.097,0.182l-0.207-0.327l-0.033-0.496l-0.233,0.114l-0.167,0.61l-0.433-0.114l-0.733,0.038l-0.367,0.305l0.081,0.777   l-0.641-0.087l-0.097-0.073l-0.026-0.105l-0.014-0.114l-0.056-0.1l-0.092-0.06l-0.092-0.033l-0.845-0.146l-0.202-0.074l-0.581-0.35   l-0.663-0.171l-0.193-0.079l-0.197-0.116l0.113,0.246l0.194,0.221l0.073,0.114l-0.253-0.076l-0.845-0.393l-0.421-0.123   l-0.438,0.015l-0.188,0.032l-0.251-0.003l-0.171-0.104l0.07-0.508l-0.128-0.216l-0.591-0.703l-0.405-0.284l-0.431-0.167   l-0.345,0.037l-0.195,0.178l-0.612,0.93l-0.157,0.132l-0.187,0.076l-0.263,0.057l-0.595,0.004l-0.294,0.044l-0.267,0.14   l-0.117,0.142l-0.184,0.34l-0.119,0.123l-0.136,0.047l-0.411-0.025l-0.189,0.648l0.433,0.496l0.433,0.457l-0.633,0.609   l-0.466,0.571l-0.866,0.038l-0.433,0.419l-0.633,0.19l-0.596,0.244l-0.174,0.144l-0.22,0.108l-0.192,0.124l-0.173-0.024   l-0.241,0.003l-0.226,0.044l-0.129,0.103l-0.005,0.1l0.036,0.074l0.025,0.073l-0.04,0.102l-0.099,0.038l-0.138,0.002l-0.117,0.035   l-0.041,0.135l-0.089,0.086l-0.665,0.209l-0.178,0.105l-0.78,0.702l-0.192,0.061l-0.185-0.093l-0.164-0.05l-0.17,0.122   l-0.185,0.172l-0.202,0.102l-0.208,0.002l-0.627-0.087l-1.194,0.091l-1.028,0.617l-0.433,0.266l-0.6,0.531l-0.5,0.265l-0.367,0.303   l-0.365,0.3l-0.064,0.43l-0.151,0.476l-0.222,0.436l-0.267,0.308l-1.046,0.745l-0.293,0.34l-0.165,0.155l-0.434,0.149l-0.206,0.115   l-0.161,0.178l-0.274,0.393l-0.171,0.17l-0.176,0.108l-0.168,0.055l-0.165,0.016l-0.171-0.011l-0.055-0.056l-0.028-0.098   l-0.042-0.064l-0.103,0.048l-0.704,0.472l-0.331,0.287l-0.269,0.35l-0.199,0.434l0.019,0.186l0.173,0.069l0.397,0.048l0.137,0.135   v0.161l-0.118,0.389h0.002l-0.037,0.347l-0.288,0.368l-0.384,0.299l-0.315,0.139l-0.274,0.05l-0.137,0.074l-0.298,0.333   l-0.165,0.117l-0.548,0.172l-0.408,0.298l-0.13,0.027l-0.116-0.099l-0.146-0.319l-0.131-0.028l-0.133,0.174l-0.062,0.273   l-0.087,0.221l-0.202,0.017l-0.116-0.167l-0.058-0.201l-0.062-0.021l-0.135,0.374l-0.152,0.224l-0.171-0.089l-0.153-0.238   l-0.192-0.467l-0.103-0.185l-0.109-0.034l-0.116,0.206l-0.002,0.126l0.044,0.116l0.021,0.117l-0.067,0.135l-0.087,0.042   l-0.129,0.014l-0.948-0.083l-0.223,0.024l-0.418,0.215l-0.651,0.674l-0.42,0.189l-0.259,0.022l-0.492-0.09l-0.496,0.024   l-0.176-0.067l-0.392-0.246l-0.465-0.119l-1.595,0.056l-0.063-0.901l0.012-0.293l0.099-0.314l0.133-0.256l0.044-0.25l-0.168-0.295   l-0.184-0.141l-0.239-0.11l-0.249-0.069l-0.466-0.06l-0.453-0.189l-0.414-0.004l-0.164-0.026l-0.113-0.039l-0.2-0.069l-0.876-0.459   l-0.36-0.331l-0.22-0.449l-0.232,0.238l-0.267,0.018l-0.289-0.044l-0.294,0.055l-0.213,0.168l-0.476,0.556l-0.16,0.246   l-0.002,0.002l-0.304,0.296l-0.46,0.114l-0.488-0.051l-0.381-0.196l-0.165-0.162l-0.578-0.486l-0.663-0.146l-0.704-0.044   l-0.378-0.099l-0.321-0.084l-0.487-0.326l-0.186-0.042l-0.186,0.043l-0.33,0.18l-0.277,0.03l-0.25,0.061l-0.738-0.106l-0.198-0.004   l-0.197,0.026l0.118-0.671l0.335-0.38l0.373-0.042l0.224-0.423l0.335-0.127l-0.112-0.423l-0.447-0.169l-0.485-0.042l-0.559-0.423   h-0.447l-0.335-0.212h-0.373l-0.277,0.557l-0.43-0.071l-0.336-0.486v-0.466l-0.41-0.296l-0.298,0.127l-0.261,0.296l-0.261,0.042   l-0.335-0.169l-0.596-0.127l-0.91,0.316l-0.214,0.033l-0.216,0.126l-0.412-0.095l-0.394,0.232l-0.087-0.039l-0.121,0.062   l-0.101,0.11l-0.174,0.249l-0.101,0.113l-0.381,0.244l-0.172,0.147l-0.082,0.206l-0.201,0.365l-0.43,0.196l-1.358,0.247   l-0.208,0.066l-0.203,0.128l-0.526,0.677l-0.223,0.178l-0.226,0.086l-0.187,0.174l-0.161,0.213l-0.264,0.467h-0.002l-0.041,0.078   l-0.535,1.016l-0.386,0.516l-0.414,0.318l-0.462,0.214l-0.383,0.253l-0.094,0.469l-0.208,0.519l-0.477,0.83l-0.324,0.491   l-0.031,0.159l-0.059-0.043l-0.112-0.052l-0.042-0.009l-0.04-0.008l-0.122-0.029l-0.311,0.127l-0.148,0.098l-0.128,0.179   l-0.072,0.196l-0.194,0.04l-0.153,0.196l0.025,0.138l-0.138,0.155l-0.163,0.092l-0.061,0.161l0.026,0.138l0.055,0.113l0.033,0.068   l-0.19,0.186l-0.098,0.269l-0.073,0.303l0.147,0.513l0.194,0.488l0.179,0.303l-0.284,0.236l-0.239-0.202l-0.404-0.034l-0.258,0.195   l-0.314-0.215l-0.143-0.127l-0.24-0.318l-0.125-0.08l-0.132-0.061l-0.145-0.096l-0.247-0.288l-0.156-0.339l-0.061-0.372   l0.032-0.392l0.004-0.21l-0.18-0.258l-0.007-0.179l0.081-0.184l0.218-0.333l0.178-0.458l0.256-0.423l0.546-2.412l0.013-0.199   l-0.04-0.23l-0.099-0.195l-0.27-0.292l-0.093-0.162l-0.011-0.213l0.112-0.421l-0.022-0.223v-0.002h-0.002l-0.165-0.207   l-0.258-0.222l-0.504-0.345l-0.289-0.086l-0.658-0.095l-0.23-0.179l-0.24-0.288l-0.187-0.01l-0.466,0.366l-0.249,0.244   l-0.154,0.249l-0.171,0.137l-0.302-0.094l-0.222,0.061l-0.632,0.47l-0.001,0.002h-0.001l-0.238,0.155l-2.048,0.312l-0.26,0.109   l-0.135,0.037l-0.133-0.004l-0.277-0.041l-0.124,0.041l-0.179,0.243l-0.027,0.311l0.084,0.311l0.151,0.241l-0.254-0.057   l-0.486-0.271l-0.259-0.087l-0.134,0.015l-0.298,0.122l-0.152,0.027l-0.136-0.028l-0.24-0.122l-0.12-0.038l-0.888-0.042   l-0.22-0.124l-0.122,0.023l-0.133,0.2l-0.176,0.352l-0.213,0.308l-0.266,0.244l-0.335,0.161l-0.298,0.027l-0.248-0.099l-0.21-0.084   l-0.27-0.048l-0.17,0.053l-0.352,0.191l-0.188-0.005l-0.093-0.075l-0.06-0.105l-0.043-0.102l-0.053-0.062l-0.223-0.063   l-0.193,0.021l-0.441,0.109l-1.005,0.285l-0.2,0.006v-0.194l0.131-0.214l0.053-0.174l-0.243-0.075l-0.317,0.114l-0.248,0.228   l-0.265,0.16l-0.652-0.175l-0.576,0.067l-0.297-0.017l-0.445-0.24l-0.617-0.818l-0.356-0.38l-0.281-0.172l-0.192-0.013   l-0.075,0.023l-0.134,0.042l-0.338,0.056l-0.29-0.026l-0.245-0.116l-0.183-0.211l-0.099-0.309v-0.002l-0.314-0.255l-0.798,0.034   l-0.342-0.121l-0.086-0.173l0.043-0.384l-0.048-0.155l-0.159-0.146l-0.204-0.135l-0.222-0.09l-0.205-0.014l-0.142,0.073   l-0.253,0.227l-0.168,0.041l-0.175-0.08l-0.156-0.148l-0.154-0.11l-0.181,0.032l-0.106,0.143l-0.033,0.19l-0.006,0.206   l-0.027,0.192l-0.084,0.173l-0.098,0.128l-0.069,0.147l0.003,0.225l0.004,0.299l-0.071,0.244l-0.153,0.186l-0.243,0.132   l-0.415,0.214l-0.153,0.012l-0.222-0.091l-0.382-0.32l-0.102-0.053l-0.105,0.016l-0.091,0.05l-0.091,0.037l-0.111-0.021   l-0.108-0.078l-0.267-0.341l-0.188-0.145l-0.216-0.051l-0.232-0.025l-0.228-0.066l-0.005-0.003l-0.002-0.001l-0.167-0.097   l-0.079-0.154l-0.078-0.372l-0.082-0.144l-0.084-0.097l-0.025-0.12l0.097-0.217l0.073-0.256l-0.013-0.319l-0.113-0.25l-0.227-0.045   l-0.987,1.024l0.016,0.129l0.129,0.193l0.036,0.1l-0.009,0.068l-0.05,0.217v0.107l-0.022,0.082l0.018,0.075l0.115,0.08h0.001v0.002   l0.099,0.117l-0.001,0.104l-0.033,0.111l0.006,0.141l0.056,0.098l0.075,0.077l0.057,0.089l0.007,0.134l-0.064,0.051l-0.357,0.359   l-0.158,0.073l-0.08,0.013l-0.036,0.006l-0.283-0.03l-0.523,0.061l-0.199-0.079l-0.13-0.318l0.007-0.263l0.05-0.257l0.003-0.248   l-0.143-0.237l-0.397-0.355l-0.121-0.174l-0.089-0.297l-0.007-0.155l0.014-0.124l-0.022-0.12l-0.197-0.265l-0.053-0.283   l-0.042-0.134l-0.171-0.2l-0.242-0.148l-0.5-0.226l-0.296-0.194l-0.25-0.235l-0.214-0.281l-0.179-0.331l-0.02-0.57l-0.057-0.28   l-0.156,0.03l-0.036,0.105l0.002,0.124l-0.013,0.112l-0.078,0.075l-0.24,0.088l-0.089,0.075l-0.309,0.472l-0.146,0.004   l-0.152-0.159l-0.229-0.157l-0.245-0.064l-0.261-0.033l-0.261,0.004l-0.247,0.045l-0.329-0.168l-0.171-0.063l-0.185,0.008   l-0.157,0.098l-0.267,0.293l-0.173,0.081l-0.195-0.02l-0.119-0.096l-0.103-0.112l-0.149-0.069l-0.131,0.022l-0.316,0.145   l-0.153,0.037l-0.183-0.013l-0.221-0.048l-0.206-0.085l-0.364-0.335l-0.215,0.045l-0.231,0.114l-0.28-0.004l-0.249-0.152   l-0.081-0.189l0.019-0.166l0.043-0.384v-0.251l-0.092-0.704l0.069-0.127l0.292-0.177l0.069-0.173l0.001-0.242l0.017-0.075   l0.067-0.094l0.195-0.081l0.083-0.063l0.069-0.117l0.036-0.106l0.125-0.645l-0.08-0.152l-0.556-0.178l-0.417-0.294l-0.228-0.091   l-0.258,0.06l-0.077,0.073l-0.074,0.11l-0.109,0.223l-0.076,0.105l-0.095,0.047l-0.105,0.029l-0.337,0.184l-0.068,0.078   l-0.142,0.303l-0.09,0.081l-0.111,0.036l-0.123-0.017l-0.186-0.061l-0.137-0.024l-0.626,0.04l-0.136-0.019l-0.145-0.06   l-0.197-0.158l-0.296-0.342l-0.215-0.113l-0.518-0.025l-0.148-0.107l0.059-0.598l-0.134-0.106l-0.214-0.044l-0.222-0.083   l-0.077-0.094l-0.109-0.227l-0.102-0.059l-0.627-0.106l-0.225-0.081l-0.185-0.112l-0.193-0.083l-0.259,0.007l-0.282-0.085   l-0.147-0.251l-0.171-0.592l-0.095-0.117l-0.24-0.208l-0.187-0.316l-0.116-0.102l-0.139-0.059l-0.77-0.161l-0.576-0.34   l-0.112-0.182l-0.21-0.343l0.28-1.104l-0.123-0.167l-0.253-0.083l-0.257-0.157l-0.065-0.408l-0.04-0.124l-0.069-0.091l-0.25-0.249   l-0.065-0.248l0.107-0.213l0.153-0.203l0.073-0.215l-0.07-0.183l-0.153-0.021l-0.181,0.026l-0.154-0.037l-0.08-0.14l-0.07-0.351   l-0.106-0.125l-0.2-0.005l-0.215,0.086l-0.202,0.036l-0.155-0.158l-0.102-0.135l-0.132-0.03l-0.143,0.039l-0.14,0.075l-0.029-0.172   l-0.068-0.1l-0.105-0.056l-0.14-0.036l-0.14,0.001l-0.212,0.031l-0.35,0.096l-0.068,0.068l-0.096,0.173l-0.082,0.042l-0.269,0.081   l-0.505,0.25l-0.256,0.033l-0.286-0.029l-0.29,0.011l-0.274,0.096l-0.231,0.226l-0.083,0.213l-0.049,0.227l-0.084,0.182   l-0.012,0.005l-0.178,0.073l-0.168-0.009l-0.46-0.087l-0.133-0.081l-0.12-0.102l-0.288-0.039l-0.139-0.057l-0.075-0.105   l-0.028-0.131l-0.023-0.281l-0.108-0.487l-0.109-0.196l-0.199-0.14l-0.312-0.128l-0.125-0.11l-0.102-0.366l-0.118-0.097   l-0.145-0.072l-0.135-0.127l-0.055-0.181l0.013-0.159l-0.025-0.144l-0.342-0.284l-0.02-0.164l0.029-0.192l-0.029-0.234   l-0.308-0.316l-0.725,0.156l-0.19-0.283l0.018-0.154l0.06-0.087l0.067-0.071l0.039-0.108l-0.028-0.195l-0.094-0.171l-0.263-0.27   l-0.084-0.05l-0.192-0.066l-0.088-0.054l-0.031-0.059l-0.041-0.173l-0.041-0.068l-0.155-0.119l-0.13-0.051l-0.136-0.006   l-0.264,0.029l-0.299,0.075l-0.078,0.033l-0.056,0.14l-0.033,0.183l-0.068,0.14l-0.166,0.011l-0.118-0.094l-0.154-0.316   l-0.091-0.133l-0.645-0.567l-0.131-0.024l-0.252,0.038l-0.115-0.016l-0.093-0.071l-0.165-0.195l-0.107-0.049l-0.222,0.095   l-0.256,0.194l-0.236,0.083l-0.161-0.237l-0.077-0.159l-0.118-0.076l-0.137-0.046l-0.136-0.073l-0.124-0.118l-0.211-0.328   l-0.686-0.54l-0.104-0.221l0.033-0.156l0.051-0.129l-0.002-0.106l-0.132-0.087l-0.117-0.008l-0.233,0.074l-0.119,0.004   l-0.197-0.141l-0.868-1.089l-0.199-0.12l-0.548-0.172l-0.212-0.112l-0.205-0.153l-0.182-0.182l-0.148-0.195l-0.174-0.111   l-0.173-0.001l-0.174,0.027l-0.186-0.03l-0.093-0.076l-0.135-0.216l-0.094-0.08l-0.253-0.065l-0.232-0.001l-0.229-0.036   l-0.51-0.324l-0.209,0.039l-0.203,0.078l-0.231-0.035l-0.105-0.147l-0.105-0.266l-0.074-0.275l-0.013-0.178l0.265-0.496l0.053-0.25   l-0.173-0.166l-0.296-0.107l-0.208-0.148l-0.123-0.228l-0.033-0.347l0.126-0.753l-0.05-0.201l-0.176-0.094l-0.264-0.026   l-0.478,0.032l-0.107,0.036l-0.11,0.056l-0.109,0.039l-0.111-0.019l-0.078-0.07l-0.136-0.193l-0.101-0.073l-0.223-0.045   l-0.388,0.031l-0.484-0.212l-0.245,0.039l-0.241,0.09l-0.254,0.043l-0.245-0.064l-1.377-0.631l-0.246-0.078l-0.254,0.035   l-0.074,0.081l-0.035,0.114l-0.06,0.111l-0.152,0.071l-0.215,0.039l-0.084,0.054l-0.055,0.108l-0.128,0.504l-0.128,0.047   l-0.298-0.046l-0.229-0.124l-0.415-0.409l-0.212-0.087l-0.225,0.069l-0.03,0.17l0.027,0.207l-0.058,0.182l-0.12,0.188l-0.04,0.208   l0.011,0.459l0.017,0.115l0.073,0.211l0.01,0.112l-0.039,0.125l-0.142,0.24l-0.051,0.409l-0.082,0.214l-0.133,0.179l-0.18,0.128   l-0.146,0.022l-0.184-0.01l-0.176,0.013l-0.122,0.089l-0.007,0.096l0.092,0.203l0.016,0.089l-0.044,0.202l-0.047,0.103   l-0.012,0.027l-0.11,0.084l-0.199,0.062l-0.156,0.109l0.018,0.366l-0.118,0.186l-0.253,0.049l-0.525-0.245l-0.266,0.006   l-0.304,0.076l-0.146-0.121l-0.005-0.022l-0.116-0.576l-0.086-0.199l-0.26-0.433l-0.145-0.425l-0.13-0.256l-0.146-0.218   L137.474,392.027z M477.237,523.54l0.066,0.069l0.207,0.431l-0.162,0.075l-0.127-0.069l-0.179-0.015l-0.181,0.027l-0.13,0.058   l-0.591,0.628l-0.293,0.397l-0.127,0.13l-0.202,0.06l-0.18-0.062l-0.146-0.146l-0.091-0.189l-0.037-0.28l0.081-0.147l0.175-0.057   l0.243-0.009l-0.169-0.165l-0.24,0.008l-0.228,0.109l-0.135,0.138l0.103,0.145l0.107,0.31l0.099,0.111l-0.163,0.283l-0.055,0.158   l-0.021,0.264l-0.05,0.13l-0.122,0.152l-0.149,0.123l-0.136,0.045v0.075l0.048,0.13l-0.078,0.119l-0.141,0.099l-0.144,0.069   l-0.091,0.012l-0.206-0.028l-0.09,0.016l-0.037,0.062l-0.104,0.225l-0.049,0.049l-0.134,0.087l0.011,0.2l0.061,0.22l0.021,0.148   l-0.134,0.175l-0.279,0.088l-0.052,0.191l-0.046,0.384l-0.125,0.405l-0.173,0.369l-0.195,0.277l-0.099,0.258l-0.051-0.022   l-0.082-0.072l-0.221,0.136l-0.052,0.021h-0.389l-0.089-0.037l-0.06-0.081l-0.073-0.08l-0.128-0.032v0.074l0.12,0.121l0.088,0.137   l0.111,0.112l0.191,0.047l0.13-0.047l0.066-0.077l0.053-0.015l0.099,0.138l0.021,0.1l-0.021,0.391l0.084-0.18l0.148-0.571h0.077   l-0.139,0.589l-0.031,0.423l-0.045,0.119l-0.178,0.185l-0.19,0.261l-0.144,0.298l-0.092,0.349l-0.032,0.407l0.011,0.097   l0.049,0.104l0.011,0.085l-0.048,0.103l-0.103,0.024l-0.103,0.001l-0.049,0.038l-0.03,0.063l-0.07,0.023l-0.082,0.012l-0.055,0.028   l-0.028,0.081l-0.021,0.229l-0.029,0.092l-0.05,0.046l-0.15,0.095l-0.074,0.073l-0.035,0.107l0.049,0.088l0.069,0.071l0.036,0.055   l0.066-0.016l0.159,0.006l0.179,0.042l0.136,0.094l0.09-0.117l0.018-0.099l-0.031-0.315l-0.071-0.3l0.003-0.161l0.111-0.07   l0.075,0.159l0.276,0.992l-0.174,0.03l-0.134-0.005l-0.098,0.022l-0.065,0.115h-0.071l-0.199-0.061l-0.211,0.247l-0.292,0.631   l0.073,0.135l-0.048,0.138l-0.122,0.124l-0.142,0.093l-0.168-0.146l-0.5,0.125l-0.105-0.104l0.115-0.09l0.263-0.061l0.478-0.05   v-0.088l-0.084-0.075h-0.071l-0.193,0.159l-0.598,0.133l-0.22,0.198h-0.077l-0.342-0.064l-0.494,0.311l-0.795,0.733l-0.406,0.298   l-0.202,0.196l-0.171,0.418l-0.198,0.028l-0.413-0.118v0.074l0.135,0.117l0.316,0.082l0.096,0.135l-0.014,0.158l-0.13,0.448   l-0.018,0.216h-0.077l-0.007-0.247l-0.085-0.132l-0.098,0.006l-0.049,0.169l0.047,0.174l0.076,0.14l0.017,0.113l-0.139,0.095   l-0.159,0.02l-0.352-0.02l-0.3-0.09v-0.187l0.083-0.014l0.126,0.032l0.15,0.012l0.151-0.07l0.07-0.104l0.04-0.14l0.006-0.141   l-0.039-0.111l-0.036,0.066l-0.091,0.121l-0.035,0.065l-0.034-0.05l-0.121-0.113l-0.002,0.041l0.005,0.082l-0.004,0.04l-0.12-0.073   l-0.052,0.048l-0.042,0.1l-0.096,0.081l-0.081,0.023l-0.044,0.002l-0.061-0.012l-0.378-0.019l-0.193,0.031l-0.183,0.08   l-0.528,0.301l-0.116-0.043l-0.042-0.069l-0.022-0.073l-0.058-0.052l-0.213-0.037l-0.22,0.014l-0.194,0.044l-0.146,0.053   l0.044,0.266l-0.265,0.833l0.059,0.367l-0.158-0.001l-0.05-0.081l-0.02-0.097l-0.079-0.05l-0.088,0.028l-0.298,0.201v0.089   l0.179-0.025l0.089,0.006l0.203,0.1l0.066,0.003l0.19-0.018l0.053,0.015l0.025,0.095l-0.033,0.09l-0.077,0.108l-0.042,0.114   l-0.102,0.117l-0.116,0.091l-0.086,0.037l-0.119-0.061l-0.072-0.143l-0.08-0.285l-0.153,0.089l-0.392,0.122l-0.081,0.078   l-0.031,0.043l-0.147,0.1l-0.046,0.057l0.017,0.063l0.108,0.188l0.03,0.082l-0.163-0.06l-0.155-0.004l-0.132,0.049l-0.09,0.097   h-0.077l0.015-0.091l0.063-0.193l-0.026-0.097l-0.051-0.053l-0.053-0.041l-0.023-0.058l-0.014-0.043h-0.053l-0.011-0.038   l0.023-0.056l0.054-0.039l0.052-0.02l0.024-0.003l0.024-0.086l0.033-0.059l0.004-0.07l-0.061-0.118l-0.101,0.166l-0.152,0.096   l-0.105,0.108l0.05,0.207l-0.262-0.039l-0.363,0.249l-0.155-0.136l0.147-0.104l0.076-0.104l0.09-0.078l0.192-0.032l0.007-0.093   l-0.042-0.169l-0.072-0.081l-0.082,0.172l-0.138-0.235l-0.204-0.177l-0.258-0.111l-1.205-0.182l-1.306-0.016l-0.311,0.071   l-0.198,0.138l-0.119,0.004l-0.147-0.142l-0.065-0.172l-0.017-0.173l-0.032-0.144l-0.117-0.08l0.077-0.163l-0.158,0.035   l-0.123-0.036l-0.109-0.057l-0.112-0.031l-1.029,0.017l-0.111-0.018l-0.135-0.073l-0.127-0.115l-0.077-0.112l-0.092-0.1   l-0.175-0.079l-0.582-0.212l-0.112-0.078l-0.083-0.127l-0.426-0.297l-0.402-0.213l-0.227-0.078l-0.231-0.047l-0.503-0.032   l-0.178-0.062l-0.114-0.124l-0.087-0.206l-0.036-0.268l0.061-0.208l0.087-0.186l0.042-0.202l0.07-0.939l-0.04-0.437l-0.116-0.434   l-0.172-0.388l-0.212-0.299l-0.141-0.137l-0.108-0.129l-0.041-0.159l0.057-0.228l0.207-0.419l0.075-0.213l0.028-0.275l-0.03-0.244   l-0.036-0.111l-0.05-0.047l-0.039-0.064v-0.427l-0.31-0.996l0.157-0.111l0.172-0.159l0.143-0.187l0.07-0.197l0.18,0.05l0.051,0.024   v-0.074l-0.084-0.071l-0.047-0.13l-0.022-0.253l-0.068-0.186l-0.157-0.038l-0.179,0.003l-0.138-0.062l-0.004-0.124l0.101-0.119   l0.082-0.132l-0.124-0.312l0.053-0.136l0.107-0.103l0.094-0.057l-0.024-0.047l-0.029-0.082l0.055-0.01l0.146,0.018l0.022-0.055   l-0.016-0.075l0.042-0.056l0.118-0.029v-0.081l-0.09-0.112l0.037-0.09l0.079-0.082l0.044-0.088l0.035-0.149l0.088-0.029   l0.228,0.053l0.166-0.025l0.261-0.107l0.122-0.024l0.087-0.065l0.222-0.346l0.089-0.032l0.223-0.16l0.109-0.061l0.479-0.164   l0.38-0.425l0.24-0.155l0.146,0.171h0.085v-0.082l-0.046-0.183l0.179-0.246l0.409-0.398l0.108-0.234l0.071-0.118l0.084-0.05   l0.579-0.089l0.134-0.048l0.277-0.163l0.17-0.059l0.119-0.109l0.042-0.024l0.011-0.014l0.26-0.075l0.403-0.346l0.156-0.24   l-0.01-0.242l0.071-0.075l0.083,0.022l0.288-0.084l0.169-0.021l0.156,0.027l0.119,0.055l0.195,0.164h0.078l-0.104-0.188   l-0.188-0.211l-0.078-0.155l0.221-0.027v-0.074h-0.084v-0.09l0.101-0.018l0.053-0.026l0.078-0.12h-0.113l-0.092-0.013l-0.088-0.027   l-0.094-0.042l-0.138,0.18l-0.288,0.197l-0.288,0.152l-0.143,0.047l-0.183,0.118l-0.074,0.068l-0.053,0.067h-0.077l0.044-0.216   l-0.044-0.572l0.04-0.183l0.099-0.103l0.127-0.072l0.122-0.094l0.039-0.057l0.073-0.132l0.043-0.057l0.094-0.077l0.061-0.01   l0.053,0.002l0.069-0.042l0.148-0.121l0.034-0.07l0.011-0.135l0.028-0.15l0.073-0.03l0.101,0.009l0.108-0.034l0.268-0.226   l0.087,0.026l0.032,0.237l0.08,0.094l0.188,0.026l0.35,0.007l0.305,0.238l0.191,0.098l0.169-0.048l0.182-0.091l0.133,0.097   l0.083,0.188l0.027,0.184h0.084l0.08-0.122l0.164-0.072l0.197-0.059l0.177-0.083l0.067,0.113l0.137-0.014l0.189-0.044l0.226,0.021   v-0.075l-0.593-0.163l-0.103-0.084l-0.052-0.274l0.111-0.08l0.329,0.018l0.034-0.084l-0.059-0.122l-0.087-0.07l-0.043,0.074   l-0.039,0.032l-0.073-0.068l-0.057-0.124l0.013-0.132l0.615-0.403l0.162-0.1l0.181-0.057l0.166-0.001l0.112,0.068h0.072   l0.108-0.119l0.181-0.057l0.21-0.012l0.203,0.016l0.094-0.042l0.069-0.007l0.075,0.049l0.031,0.105l-0.096,0.152l0.064,0.08v0.082   l-0.039,0.069l-0.046,0.104h0.085l0.135-0.248l0.296,0.045l0.497,0.277l0.033-0.171l0.013-0.196l0.048-0.113l0.136,0.076   l0.081,0.139l0.039,0.179l-0.002,0.183l-0.033,0.15l0.217-0.126l0.178-0.145l0.113-0.172l0.033-0.208l0.135-0.004l0.221-0.061   l0.069,0.02l0.064,0.052l0.032-0.022l0.021-0.048l0.037-0.026l0.091,0.017l0.008,0.042l-0.013,0.055l0.028,0.051l0.142,0.137   l0.172,0.23l0.036,0.192l-0.273,0.017l0.096,0.157l0.157,0.107l0.184,0.036l0.182-0.053v-0.075l-0.159-0.106l0.102-0.09   l0.152-0.097l-0.011-0.2l0.415-0.199l0.203-0.055l0.092-0.006l0.15,0.013l0.147,0.05l0.083,0.108l0.146-0.112l0.16-0.27   l0.144-0.119l-0.122,0.048l-0.176,0.156l-0.088,0.058l-0.119,0.023l-0.416-0.023l0.529-0.206l0.168-0.13l0.087-0.14l0.138-0.379   l0.083-0.139l0.16,0.079l0.425,0.136l0.153,0.024l0.118,0.036l0.142,0.075l0.18,0.062l0.221-0.001l0.166-0.074l0.246-0.217   l0.091-0.047l0.224,0.038l0.16,0.1l0.114,0.134l0.088,0.147v0.075l-0.097,0.149l0.079,0.133l0.25,0.218l0.06,0.172l0.045,0.342   l0.05,0.151h0.077l-0.038-0.104l-0.012-0.027l-0.028-0.041v-0.075h0.077v-0.09l-0.036-0.08l-0.058-0.266l-0.027-0.058l-0.112-0.026   l-0.074-0.073l-0.047-0.106l-0.04-0.131l0.004-0.017l-0.058-0.31l-0.017-0.048l-0.019-0.238l0.017-0.101l0.074-0.109l0.471,0.404   l0.075-0.037l0.442,0.227l0.291,0.1l0.358,0.04v0.09h-0.077v0.075l0.169,0.084l0.168,0.134l0.154,0.047l0.128-0.176l0.055,0.234   l0.207,0.43l0.046,0.203l0.035,0.048l0.081-0.031l0.078-0.08l0.038-0.101l-0.021-0.112l-0.033-0.087l-0.006-0.081l0.061-0.095   l-0.159-0.218l-0.03-0.214l-0.063-0.162l-0.25-0.065l-0.091-0.051l-0.007-0.116l0.024-0.126l-0.003-0.082l-0.066-0.145l0.036-0.124   l0.269-0.332l0.125-0.042l0.407,0.03l0.134-0.104l0.212-0.458l0.081-0.104l0.081,0.124l0.293,0.942l0.153,0.136l0.321,0.197   l0.248,0.329l0.155,0.118l0.923,0.161l0.229-0.026l0.033-0.03l0.008-0.033l0.029-0.002l0.09,0.065l0.185-0.155l0.157,0.204   l0.481,1.556l0.069,0.699l0.155,0.705l0.036,0.331l-0.063,0.329l0.025,0.092L477.237,523.54z M488.016,499.657l0.304-0.002   l0.117,0.046l0.085,0.122v0.09l-0.085,0.187l-0.208,0.111l-0.593,0.124h-0.105l-0.114,0.016l-0.138,0.061l-0.105,0.08l-0.194,0.191   l-0.088,0.06l-0.462,0.076l-0.148-0.043l0.008-0.035l0.077-0.037l0.063-0.046l0.222-0.386l0.034-0.209l-0.111-0.243l0.135-0.042   l0.414-0.033l0.138-0.047l0.225-0.107l0.14-0.021l0.036,0.026l0.033,0.059l0.047,0.06l0.076,0.03l0.065-0.012l0.055-0.064   L488.016,499.657z M495.744,498.985l0.104,0.175l-0.036,0.124l-0.091,0.123l-0.061,0.167l0.135,0.184l0.005,0.108l-0.301,0.087   l-0.083,0.171l-0.105,0.039l-0.309,0.006l-0.145-0.025l-0.127-0.071l-0.077,0.086l-0.112,0.212l-0.049,0.042l-0.108-0.041   l-0.069-0.095l-0.012-0.123l0.068-0.123l0.403-0.262l0.091-0.149l-0.135-0.213l0.248-0.06l0.479-0.262L495.744,498.985z    M497.992,498.235l0.21,0.059l0.064,0.145l-0.064,0.146l-0.348,0.118l-0.127,0.115l-0.091,0.114l-0.169,0.137l0.033,0.196   l0.076,0.225l0.039,0.166l-0.083,0.237l-0.099,0.183l-0.011,0.181l0.194,0.23l-0.124,0.124l-0.107,0.018l-0.286-0.052l-0.039-0.022   l-0.036-0.053l-0.025-0.069l-0.028-0.166l-0.045-0.017h-0.065l-0.076-0.046l-0.031-0.196l0.376-0.423l0.077-0.344l-0.168,0.065   l-0.26,0.064l-0.239,0.01l-0.106-0.099l0.062-0.172l0.144-0.162l0.265-0.214l0.193,0.019l0.143-0.498l0.205,0.071l0.135-0.072   l0.153-0.025l0.33,0.006H497.992z M504.189,495.146l0.085,0.069l0.03,0.042l0.012,0.05l0.035,0.089l-0.931-0.06l-0.159-0.148   l0.387-0.542l0.104-0.057l0.119-0.035l0.107-0.051l0.057-0.108l0.055-0.007l0.016,0.018v0.033l0.014,0.039l0.022,0.049l0.03,0.043   l0.041,0.038l0.061,0.038l0.155-0.091l-0.026,0.152L504.189,495.146z M503.887,493.553l-0.122,0.331l-0.202,0.371l-0.255,0.294   l-0.278,0.096l-0.112-0.076l-0.117-0.167l-0.052-0.203l0.086-0.184l0.084-0.039l0.12-0.028l0.101-0.038l0.046-0.066l0.017-0.096   l0.048-0.083l0.074-0.066l0.092-0.048l0.055,0.148l0.085-0.037l0.133-0.092L503.887,493.553z M506.477,485.874l0.106,0.152   l-0.001,0.12l-0.093,0.08l-0.167,0.029l-0.244-0.051l-0.155-0.134l-0.101-0.191l-0.08-0.219l-0.084,0.175l-0.17-0.124l-0.123-0.194   l-0.164-0.435h-0.077l-0.009,0.294l-0.195-0.066l-0.247-0.225l-0.362-0.415l-0.067-0.187l0.101-0.123l0.315-0.048l0.483,0.139   l0.138,0.097l0.444,0.567l0.223,0.145l0.297,0.059l0.039,0.075l0.127,0.36L506.477,485.874z M545.848,477.401l0.213,0.148   l0.134-0.085l0.077-0.177l0.191-0.005l-0.037,0.212l0.131,0.062l0.087,0.133l-0.05,0.371l-0.097,0.249l-0.247-0.052l-0.273-0.094   l-0.385,0.079l-0.283-0.121l-0.096-0.021l-0.13-0.043l-0.131,0.007l-0.262,0.003l-0.24-0.035l-0.058-0.102l0.115-0.148l0.164-0.137   l0.165-0.078l0.075,0.047l0.058,0.09l0.072,0.083l0.111,0.032l0.084-0.036l0.107-0.024l0.121-0.038l0.077-0.217l0.054-0.119   l0.158-0.054l0.088,0.039L545.848,477.401z M550.346,473.942l0.399,0.039l0.255,0.121l-0.119,0.295l-0.229-0.048l-0.133,0.116   l-0.086,0.264l0.037,0.331l-0.143,0.059l-0.253-0.087l-0.138,0.06l-0.13,0.169l-0.038,0.235l-0.027,0.238l0.096,0.077l0.087,0.239   l-0.646,0.123l-0.611-0.017l0.196-0.277l0.354-0.32l0.279-0.702l-0.079-0.07l-0.127-0.056l-0.131-0.026l-0.089,0.026l-0.11,0.057   l-0.067-0.052l0.022-0.132l0.388-0.361l-0.012-0.228l0.041,0.006l-0.074-0.247l0.149-0.092h0.208l0.105,0.031l0.07,0.215   l0.171,0.044l0.147,0.105L550.346,473.942z M571.135,445.45l0.729,0.274l0.356,0.229l0.042,0.228l-0.162,0.138h-0.108l-0.108-0.058   l-0.29-0.06l-0.384-0.131l-0.113-0.064l-0.13-0.043l-0.195-0.024l-0.178-0.054l-0.077-0.138l-0.044-0.178l-0.105-0.139   l-0.123-0.127l-0.101-0.143l-0.097-0.498l0.135,0.114l0.251,0.409l0.161,0.12l0.166,0.069L571.135,445.45z M593.211,418.696   l0.102,0.236l0.236,0.252l-0.07,0.212l-0.128,0.012l-0.122-0.008l-0.112-0.034l-0.103-0.066l-0.028,0.095l-0.023,0.04l0.003,0.043   l0.048,0.101l-0.076,0.079l-0.138-0.036l-0.008,0.12l-0.182,0.048l-0.182,0.142l-0.221,0.008l-0.174,0.024l-0.055-0.213   l0.096-0.174l-0.033-0.086l-0.109-0.058l-0.06-0.149l-0.077-0.119l0.019-0.139l-0.056-0.157l-0.079-0.117l0.052-0.056l0.112-0.038   l0.344-0.096l0.252-0.236l0.187-0.267l0.055-0.134l0.022-0.114l0.222-0.138l0.292,0.063l0.141,0.268l0.015,0.15l-0.095,0.173   L593.211,418.696z M604.341,390.505l-0.395,0.285v0.082l0.226,0.082l0.092,0.015l-0.14,0.095l-0.029,0.104l0.005,0.104   l-0.034,0.096l-0.138,0.07l-0.162-0.022l-0.157-0.057l-0.412-0.087l-0.268-0.137l-0.458-0.345l0.118-0.145l0.044-0.042l0.089-0.066   l0.096-0.045l0.203-0.067l0.285-0.029l0.064-0.016l0.149-0.118l0.324-0.09l0.19-0.106l0.155,0.187l-0.072,0.082l0.019,0.07   l0.084,0.057L604.341,390.505z M606.154,388.624l0.136,0.057l0.063,0.138l0.075,0.35l-0.216-0.049l-0.456-0.194l-0.179-0.034   l-0.475,0.168l-0.233,0.014l-0.143-0.183l0.052-0.01l0.111-0.072l-0.103-0.047l-0.048-0.074l-0.011-0.104v-0.134l0.043-0.136   l0.039-0.037l0.08-0.007l0.041,0.151l0.099,0.004l0.134-0.017l0.296,0.186l0.129-0.028l0.23-0.215l-0.007,0.181l0.07,0.077   l0.122,0.015L606.154,388.624z M599.801,376.502l0.182,0.029l0.159,0.09l0.114,0.158l0.044,0.235l-0.05,0.225l-0.127,0.205   l-0.171,0.136l-0.185,0.018l-0.128-0.13l-0.115-0.244l-0.216-0.636l0.116-0.078L599.801,376.502z M577.648,366.517l0.234,0.571   l0.005,0.121l-0.131-0.027l-0.357-0.35l-0.172-0.088l-0.321-0.095l-0.117-0.068l-0.11-0.003l-0.036-0.016l-0.055-0.104l0.014-0.054   l0.033-0.043l0.008-0.072l-0.011-0.31l0.088-0.177l0.125-0.139l0.107-0.196l-0.34-0.103l-0.447-0.221l-0.344-0.289l-0.038-0.309   l0.392-0.274l0.391,0.019l0.328,0.216l0.21,0.314l0.477,1.297L577.648,366.517z M605.275,268.314l0.105-0.207l0.274-0.226   l0.314-0.185l0.227-0.08l-0.11,0.146l-0.034,0.15l-0.011,0.095l0.097,0.31l0.058,0.098l-0.155,0.099l-0.143-0.121l-0.239,0.132   l-0.24,0.077L605.275,268.314z M608.837,267.316l0.296,0.023l0.639-0.134l0.264,0.085l-0.028,0.202l-0.158,0.178l-0.395,0.244   l0.017-0.118l0.005-0.092l0.013-0.089l0.043-0.109l-0.158-0.045l-0.539-0.054V267.316z M609.385,266.908l-0.468,0.104l-0.644-0.043   l-0.597-0.2l-0.321-0.37l0.357-0.016l0.112,0.016l0.432,0.184l0.67,0.086l0.219,0.092L609.385,266.908z M595.101,263.799   l0.225,0.171l0.091,0.185l-0.083,0.134l-0.304,0.012v0.1l0.105,0.05l0.073,0.086l0.041,0.118l0.006,0.094l-0.028,0.352   l-0.135,0.178l-0.206,0.045l-0.569-0.038l-0.184-0.061l-0.009-0.146l0.205-0.276l0.198-0.166l0.089-0.107l0.022-0.127l-0.072-0.129   l-0.124-0.045l-0.14,0.017l-0.128,0.058l-0.15,0.186l-0.158,0.281l-0.194,0.249l-0.263,0.093l-0.097-0.027l-0.056-0.067   l-0.021-0.119l0.012-0.187l0.035-0.225l0.047-0.085l0.327-0.143l0.092-0.027l0.092-0.04l0.103-0.089l0.052-0.099l0.029-0.113   l0.045-0.107l0.105-0.082l0.135-0.016l0.406,0.116l0.281-0.029L595.101,263.799z M612.555,263.199l0.042-0.376l0.246-0.124   l0.315,0.074l0.254,0.217l-0.114,0.321l-0.274,0.155l-0.294-0.03L612.555,263.199z M472.544,508.149l0.116,0.059l0.134,0.018   l0.113,0.045l0.052,0.145l-0.024,0.132l-0.066,0.128l-0.169,0.217l-0.23,0.167l-0.153-0.064l-0.138-0.178l-0.181-0.173l0.31-0.361   l0.167-0.145l0.148-0.067L472.544,508.149z M471.996,507.197l-0.042,0.176l-0.192,0.407l-0.069,0.204l0.017,0.118l0.039,0.14   l0.005,0.115l-0.103,0.048l-0.101-0.033l-0.06-0.086l-0.029-0.121l-0.005-0.135l-0.076-0.113l-0.182-0.151l-0.217-0.131   l-0.184-0.056h-0.887l-0.332,0.116l-0.396,0.19l-0.363,0.097l-0.235-0.162l0.182-0.084l0.04-0.138l-0.069-0.154l-0.152-0.128   l0.215-0.067l0.116-0.015l0.139,0.006v-0.082l-0.124-0.007l-0.064-0.045l-0.013-0.081l0.041-0.116l0.193,0.083l0.223,0.016   l0.193-0.055l0.094-0.135l-0.148,0.055l-0.16,0.038l-0.142-0.027l-0.091-0.138l0.625-0.002l0.325-0.076l0.209-0.181l0.12,0.388   l0.088,0.19l0.108,0.093l0.062-0.131l0.101-0.071l0.135-0.033l0.166-0.014h-0.077l0.237-0.007l0.127-0.075l0.1-0.099l0.16-0.076   l0.218,0.001l0.141,0.11l0.076,0.191L471.996,507.197z M472.782,505.326l-0.198,0.16l-0.255,0.575l-0.133,0.222l-0.249,0.093   l-0.255-0.083l-0.168-0.183l0.014-0.204l-0.119-0.032l-0.086-0.046l-0.062-0.07l-0.05-0.101h-0.071l0.071,0.166l-0.201-0.007   l-0.135-0.063l-0.047-0.115l0.075-0.155l-0.097,0.007l-0.195-0.015l-0.095,0.008v-0.075l0.188-0.024l0.119-0.087l0.088-0.093   l0.108-0.045l0.29-0.042l0.136,0.029l-0.041,0.134l-0.286,0.019l-0.086,0.036l0.179,0.074l0.156,0.009l0.127-0.046l0.251-0.16   l0.066-0.03l0.063-0.014l0.061,0.004l0.073,0.021l0.187,0.111l0.028,0.023l-0.149,0.178l-0.061,0.102l-0.029,0.142h0.084   l0.253-0.416l0.189-0.143l0.26,0.047V505.326z M557.406,463.978l0.221,0.132l0.292,0.113l0.286,0.057l0.207-0.039l0.01,0.155   l0.079,0.243l-0.006,0.111l-0.089,0.133l-0.104,0.062l-0.088,0.082l-0.035,0.186l-0.079,0.247l-0.196,0.097l-0.254-0.017   l-0.249-0.098l-0.124-0.084l-0.087-0.093l-0.039-0.094l0.023-0.09l0.108-0.064l0.135-0.026l0.109-0.065l0.036-0.177l-0.271,0.147   l-0.086-0.02l-0.03-0.173l0.036-0.178l0.16-0.327L557.406,463.978z M577.261,451.732l-0.136-0.161l-0.18,0.042l-0.158,0.165   l-0.066,0.211l0.086,0.251l0.377,0.209l0.077,0.225l-0.288-0.08l-0.299,0.056l-0.256,0.156l-0.16,0.217l-0.005,0.149l0.03,0.134   l-0.03,0.071l-0.197-0.036l-0.201-0.076l-0.207-0.122l-0.123-0.176l0.054-0.238l0.037-0.042l0.09-0.071l0.031-0.049l0.005-0.051   v-0.083l-0.007-0.076l-0.018-0.02l-0.114,0.069l-0.121,0.023l-0.122-0.023l-0.113-0.069l0.105-0.167l0.096-0.082l0.111-0.02   l0.594,0.085l0.202-0.046l0.135-0.198l-0.221-0.109l-0.368,0.07l-0.115-0.14l0.016-0.108l0.146-0.453l-0.039-0.124l-0.094-0.005   l-0.108,0.071l-0.075,0.104l-0.112-0.212l0.068-0.231l0.169-0.226l0.191-0.195l0.169-0.037l0.057-0.049l0.147-0.082l0.206,0.004   l-0.054,0.089l-0.013,0.205l0.05,0.23l0.133,0.161l0.133-0.078l0.11,0.024l0.107,0.094l0.112,0.132l-0.181,0.139l0.149,0.098   l0.284,0.086l0.219,0.105l-0.136,0.132L577.261,451.732z M601.157,406.063l0.015,0.149l-0.005,0.08l-0.261,0.505l-0.115-0.002   l-0.146-0.108l-0.267-0.013l0.13-0.277l-0.133-0.215l-0.191-0.211l-0.039-0.27l0.149-0.167l0.249-0.081l0.264-0.002l0.188,0.073   l0.099,0.114l0.04,0.114L601.157,406.063z M603.259,398.085l0.382,0.476l0.111,0.305l-0.271,0.246l0.077-0.267l-0.052,0.024   l-0.179,0.056v-0.169l-0.119,0.12l-0.072,0.048l-0.058-0.002l-0.028-0.055l-0.022-0.172l-0.022-0.068l-0.066-0.087l-0.074-0.073   l-0.057-0.085l-0.024-0.12l-0.1-0.079l-0.214,0.018l-0.193,0.06l-0.042,0.049l-0.09-0.013l-0.057,0.008l-0.041-0.014l-0.035-0.078   l-0.005-0.098l0.028-0.118l0.045-0.099l0.044-0.042l0.061-0.069l0.091-0.153l0.131-0.153l0.184-0.07l0.153-0.026l0.107-0.036   l0.083,0.014l0.083,0.128l0.019,0.102l-0.032,0.171l0.013,0.091l0.05,0.075l0.157,0.136L603.259,398.085z M606.112,396.125   l-0.033,0.094l-0.063,0.075l-0.044,0.077l0.035,0.103l0.092,0.117l0.017,0.068l-0.004,0.122l-0.118-0.024l-0.086-0.049   l-0.134-0.141l-0.094-0.156l0.024-0.105l0.071-0.085l0.042-0.096l-0.02-0.16l-0.06-0.112l-0.093-0.08l-0.23-0.131l-0.094-0.095   l-0.052-0.122l0.017-0.146l0.039-0.072l0.052-0.056l0.061-0.04l0.072-0.022l0.052,0.178l0.144,0.041l0.337-0.033l0.133-0.054   l0.069,0.003l0.03,0.091l-0.005,0.118l-0.018,0.079l-0.049,0.057l-0.09,0.055l0.164,0.142l-0.018,0.148L606.112,396.125z    M600.3,393.606l0.039,0.198l0.088,0.065l0.102,0.035l0.08,0.112l0.015,0.273l-0.081,0.292l-0.155,0.233l-0.204,0.095l-0.13-0.018   l-0.144-0.053l-0.127-0.086l-0.083-0.115l-0.017-0.088l0.019-0.064l0.035-0.06l0.033-0.076l0.009-0.082l-0.017-0.168l0.003-0.084   l0.03-0.143l0.116-0.357l0.061-0.052l0.133,0.016l0.133,0.056L600.3,393.606z M605.345,394.284l-0.009,0.179l-0.065,0.064   l-0.088,0.032l-0.071,0.082l-0.045,0.143l-0.022,0.136l-0.01,0.306l-0.074,0.244l-0.179-0.08l-0.365-0.391l-0.186-0.115   l-0.503-0.206l-0.459-0.078l-0.512-0.184l-0.244-0.042l-0.137,0.022l-0.186,0.112l-0.16,0.07l-0.047,0.035l-0.054,0.027   l-0.076,0.001l-0.097-0.04l-0.01-0.053l0.024-0.054l0.005-0.039l-0.011-0.048l0.026-0.141l-0.015-0.08l-0.039-0.019l-0.151-0.042   l-0.042-0.02l-0.169-0.204l-0.039-0.083l-0.018-0.101l0.022-0.064l0.04-0.062l0.034-0.095l0.005-0.071l-0.031-0.223l-0.142-0.296   l-0.027-0.166l0.13-0.073l1.277,0.006l0.18,0.05l0.16,0.102l0.169,0.159l0.096,0.032l0.272,0.011l0.056,0.043l0.043,0.197   l0.1,0.048l0.127-0.016l0.115,0.003l0.288,0.104l0.107,0.065l0.075,0.085l0.049,0.088l0.073,0.069l0.152,0.028l0.227-0.016   l0.086,0.062l0.034,0.181l0.046,0.088l0.207,0.131L605.345,394.284z M599.873,373.411l0.848,0.392l0.692,0.507l0.074,0.483   l-0.099,0.347l-0.735,0.285l-0.696,0.228l-0.385-0.099l-0.385-0.253l-0.601-0.253l-0.227-0.137l-0.289-0.156l-0.792-0.196   l-0.488-0.103l-0.342-0.324l-0.27-0.194l-0.372-0.153l-0.906-0.449l-0.329-0.271l-0.349-0.095l-0.343-0.19l-0.131-0.211   l-0.193-0.434l-0.695-0.447l-0.214-0.252l-0.214-0.233l-0.117-0.136l0.058-0.155l0.155-0.123l0.273-0.323l0.507-0.155l0.662,0.156   l0.448,0.156l0.272,0.078l0.427,0.214l0.582,0.331l0.29,0.272l0.387,0.292l0.407,0.195l0.387,0.292l0.232,0.214l0.174,0.136   l0.251,0.175l0.657,0.293L599.873,373.411z M479.343,570l-0.028-0.009l-0.014-0.025l0.039-0.088l0.035-0.041l0.092-0.001   l0.011,0.035l-0.011,0.048l-0.033,0.034L479.343,570z M485.759,566.845l-0.116-0.014l0.004-0.033l0.09-0.014l0.051,0.039   L485.759,566.845z M455.621,507.392l-0.056-0.01l-0.062-0.241l0.106-0.228l0.259-0.057l0.153,0.175l-0.097,0.228l-0.171,0.062   l-0.083,0.032L455.621,507.392z M587.47,286.08l0.101,0.23l0.017,0.217l-0.048,0.156l-0.09-0.018l-0.109-0.096l-0.121-0.061   l-0.044-0.147l0.052-0.41h0.085L587.47,286.08z M585.867,285.488l0.138-0.018l0.077,0.123l-0.002,0.199l-0.031,0.142l-0.051,0.026   l-0.033-0.019l-0.069-0.096l-0.085-0.205L585.867,285.488z M587.149,285.473l0.082,0.165l-0.077,0.078l-0.128-0.025l-0.098-0.059   l-0.063-0.069l-0.046-0.097l-0.03-0.055l0.022-0.077l0.158,0.014L587.149,285.473z M587.606,282.748l0.139,0.073l0.006,0.082   l-0.136,0.025l-0.076-0.002l-0.09-0.053l-0.089-0.198l0.044-0.172L587.606,282.748z M588.127,281.051l-0.073,0.011l-0.001-0.092   l0.031-0.065l0.052-0.093l0.141-0.127l0.157,0.016l0.028,0.12l-0.088,0.079l-0.045,0.007l-0.044,0.012l-0.081,0.054   L588.127,281.051z M589.347,279.667l-0.076-0.015l-0.007-0.107l0.123-0.042l0.077,0.124l-0.016,0.052l-0.067-0.017L589.347,279.667   z M615.003,269.394l0.047,0.085l0.124,0.303l-0.003,0.193l-0.117,0.142l-0.144,0.126l-0.135,0.065l-0.122-0.107l-0.053-0.098   l0.033-0.19l0.056-0.087l0.134,0.027l-0.002-0.086l-0.063-0.077l-0.094-0.026l-0.086-0.035l0.003-0.073l0.278-0.045l0.092-0.088   L615.003,269.394z M483.911,561.138l-0.003-0.002l0.011-0.053l0.023-0.016l0.032-0.002l0.028,0.02l0.017,0.042l-0.008,0.012   l-0.029,0.036l-0.04-0.005L483.911,561.138z M496.759,559.595l-0.055-0.027l-0.055-0.071l0.011-0.033l0.029-0.003l0.052,0.037   l0.039,0.069L496.759,559.595z M492.21,557.62l-0.068-0.056l-0.014-0.041l0.022-0.046l0.03-0.006l0.055,0.06l0.02,0.049   L492.21,557.62z M492.215,556.34l0.034,0.013l0.005,0.001l0.005,0.008l0.04,0.052l-0.007,0.041l-0.057-0.003l-0.02-0.031V556.34z    M471.134,511.92l0.056,0.191l0.019,0.251l-0.025,0.18l-0.053,0.04l-0.072,0.022l-0.086,0.047l-0.064-0.028l-0.041-0.086   l-0.1-0.402l-0.039-0.109l-0.104-0.053l-0.101-0.144l0.05-0.091l0.09,0.003l0.038-0.021v-0.044l0.041-0.006l0.064,0.053   l0.055,0.063l0.172,0.043L471.134,511.92z M502.905,496.397l0.033,0.027l0.053,0.058l-0.022,0.056l-0.057,0.075l-0.04,0.12   l-0.084,0.135l-0.105,0.073l-0.088-0.034l-0.182-0.125l-0.055-0.065l-0.044-0.025l-0.047-0.162l0.113-0.248l0.181-0.106   l0.112-0.042l0.115,0.04l0.083,0.144L502.905,496.397z M508.494,495.478l0.047,0.177l-0.13,0.232l-0.184-0.073l-0.104-0.161   l-0.031-0.137l0.104-0.008l0.129-0.032L508.494,495.478z M514.551,494.784l-0.017,0.084l-0.032,0.066l-0.906,0.283l-0.178-0.05   l0.114-0.078l0.621-0.224l0.128-0.025l0.113-0.064l0.028-0.061l0.036-0.053l0.064-0.026l0.066,0.008l-0.008,0.074L514.551,494.784z    M505.118,494.279l-0.085-0.036l-0.013-0.081l0.076-0.073l0.536-0.161l0.093,0.017l0.064,0.068l-0.02,0.09l-0.043,0.083   l0.062,0.131l0.17,0.034l-0.099,0.128l-0.614,0.131l-0.164-0.077l0.042-0.128L505.118,494.279z M506.815,490.103l0.13,0.022   l0.167-0.006l0.094,0.08l0,0.101l-0.051,0.123l-0.123,0.028l-0.001,0.137l-0.123,0.05l-0.116,0.057l-0.101-0.08l-0.021-0.188   l0.016-0.21L506.815,490.103z M505.948,486.401l0.144,0.084l0.048,0.18l0.107,0.241l0.024,0.024l0.324,0.169l0.359,0.349   l0.107,0.385l-0.037,0.288l-0.156,0.072L506.58,488l-0.455-0.542l-0.42-0.337l-0.384-0.277l-0.168-0.169l0-0.144l0.289-0.059   l0.265-0.108L505.948,486.401z M505.749,483.717l0,0.145l0.181,0.133l0.096,0.325l-0.001,0.313l-0.096,0.072l-0.241-0.205   l-0.156-0.302l-0.048-0.374l0.109-0.217L505.749,483.717z M544.988,476.284l0.108,0.008l0.047,0.098l-0.064,0.108l-0.088,0.095   l-0.033,0.057l-0.058,0.121l-0.191,0.117l-0.227-0.034l-0.155-0.109l-0.014-0.115l0.119-0.048l0.127-0.067l0.11-0.117l0.077-0.062   l0.047,0.002l0.083-0.015L544.988,476.284z M573.916,455.827l0.113,0.01l0.074,0.047l-0.049,0.076l-0.112,0.044l-0.059,0.116   l0.005,0.169l-0.074,0.089h-0.149l-0.132-0.076l-0.073-0.136l0.023-0.113l-0.003-0.093l-0.107-0.063l-0.117,0.041l-0.045,0.053   l-0.314-0.088l-0.133-0.138l-0.054-0.184l0.021-0.087l0.088-0.031l0.043-0.033l0.138-0.139l0.065,0.02l0.061,0.069l0.059,0.002   l0.057,0.043l0.054,0.126l0.07,0.129l0.106,0.095l0.122,0.063l0.127,0.015l0.107-0.027L573.916,455.827z M571.601,451.35   l-0.007,0.07l0.069,0.111l-0.033,0.103l-0.063,0.359l-0.1,0.322l-0.047,0.28l0.048,0.219l0.002,0.15l-0.101,0.05l-0.139,0.051   l-0.126,0.088h-0.065l-0.097-0.26l-0.03-0.139l-0.046-0.114l-0.001-0.239l0.251-0.688l0.015-0.07l0.028-0.043l0.032-0.023   l0.089-0.106l0.035-0.052l0.118-0.126l0.131-0.026L571.601,451.35z M574.775,444.544l0.135,0.244l0.058,0.128l-0.059,0.1   l-0.209,0.079l-0.624-0.205l-0.128-0.191l0.237-0.301l0.277-0.108l0.156,0.088L574.775,444.544z M582.698,434.02l-0.094-0.113   l0.019-0.122l0.022-0.05l0.045,0.004l0.123-0.105l0.088-0.024l0.068,0.01l0.05,0.03l0.025,0.036l0.063,0.038l0.066,0.093   l0.056,0.154l0.043,0.048l0.074,0.024l0.017,0.036l-0.375,0.145L582.698,434.02z M591.156,427.149l0.104,0.082l0.127,0.083   l0.104,0.083l-0.001,0.104l-0.116-0.013l-0.208-0.049l-0.093,0.022l0.034,0.105l0.08,0.105l-0.105,0.022l-0.092-0.094l-0.103-0.152   l-0.045-0.117l0.083-0.104L591.156,427.149z M592.374,422.226l0.077,0.012l0.014,0.108l-0.005,0.09l-0.02,0.03l-0.024,0.027   l-0.057,0.02l-0.06-0.018l-0.023,0.034l0.02,0.194l-0.041,0.091l-0.127,0.004l-0.142-0.075l-0.102-0.006l-0.095,0.056l-0.155,0.034   h-0.208l-0.022-0.129l0.204-0.208l0.216-0.039l0.182,0.018l0.086-0.039l-0.047-0.051l0.012-0.047l0.057-0.022l0.105-0.02   L592.374,422.226z M590.876,421.121l-0.052-0.014l-0.051-0.077l0.056-0.122l0.222-0.179l0.061-0.019l0.063,0.019l0.058,0.009   l0.346-0.04l0.182,0.081l0.138,0.15l-0.006,0.113l-0.151,0.072l-0.255,0.066l-0.117-0.02l-0.109-0.09l-0.131-0.032L590.876,421.121   z M600.078,405.932l0.028,0.074l0.031,0.104l-0.072,0.116l-0.085,0.12l-0.13,0.033l-0.054-0.062l-0.12-0.106l-0.138-0.096   l-0.135-0.042l-0.111,0.001l-0.078-0.015l-0.035-0.064l0.009-0.106l0.028-0.141l0.043-0.079l0.073,0.006l0.54,0.097l0.146,0.099   L600.078,405.932z M605.087,396.988l0.085,0.291l0.029,0.15l-0.072,0.097l-0.145-0.037l-0.262-0.17l-0.08-0.076l-0.159-0.106   l-0.156-0.231l-0.055-0.052l-0.011-0.11l0.182-0.128l0.265-0.01l0.147,0.052l0.315,0.18l-0.018,0.058L605.087,396.988z    M601.323,395.326l0.166,0.195l0.076,0.144l-0.012,0.138l-0.207,0.11l-0.317-0.054l-0.142-0.227l0.083-0.214l0.124-0.135   l0.091-0.067l0.074,0.019l0.042,0.064L601.323,395.326z M605.551,391.438l-0.188,0.037l-0.152-0.016l-0.117,0.002l-0.12,0.045   l-0.129,0.019l-0.065-0.004l0.008-0.067l0.103-0.094l0.17-0.057l0.119-0.103l0.064-0.11l0.061-0.05l0.089-0.02l0.115,0.001   l0.459-0.046l0.196,0.034l0.088,0.114l0.033,0.147l-0.024,0.141l-0.144,0.059l-0.128-0.14l-0.011-0.149l-0.033-0.029l-0.064,0.021   l-0.202,0.189L605.551,391.438z M607.63,385.148l-0.033,0.087l0.053,0.128l-0.072,0.034l-0.358-0.017l-0.066,0.017l-0.146-0.01   l-0.088,0.046l-0.04,0.036l-0.027,0.031l-0.062,0.001l-0.114-0.036l-0.149-0.016l-0.053-0.078l0.061-0.144l0.024-0.162   l-0.063-0.144l0.008-0.066l0.123,0.027l0.195,0.137l0.169,0.177l0.13,0.034l0.135-0.028l0.064-0.029l0.087-0.029l0.169-0.032   L607.63,385.148z M598.948,376.52l0.133,0.193l0.091,0.231l-0.025,0.22l-0.155,0.06l-0.167-0.131l-0.353-0.361l-1.377-0.947   l-0.162-0.163l0.076-0.059l0.129,0.022l0.177,0.006l0.827,0.327l0.389,0.218l0.23,0.189L598.948,376.52z M563.521,269.648   l0.18,0.273l0.001,0.163l-0.616,1.055l-0.906,0.768l-0.131,0.006l-0.254-0.23l0.12-0.122l-0.229-0.398l-0.014-0.521l0.102-0.533   l0.11-0.111l0.432,0.055l0.377,0.635l0.205-0.08l0.367-0.37l0.21-0.212l-0.159-0.278L563.521,269.648z M484.819,560.538   l-0.016-0.035l0.031,0.011L484.819,560.538z"},{"name":"South Korea","path":"M410.215,30l2.405,4.767l3.755,7.441l0.747,3.261l1.914,4.937l7.111,14.083l5.544,14.76l0.904,1.604   l2.89,3.582l1.108,3.006l13.422,19.221l5.21,7.593l6.239,6.923l0.885,0.725l4.181,4.924l0.216,2.078l0.02,2.5l0.498,2.118   l2.851,1.588l0.826,1.704l2.353,7.67l1.049,1.776l1.258,0.756l1.055,1.094l3.664,7.214l2.202,2.771l0.76,1.525l0.295,1.616   l0.557,1.566l3.886,4.28l1.239,3.508l1.101,7.657l1.514,4.21l4.129,5.76l0.315,1.207l-0.472,1.166l-0.747,1.113l-0.472,1.088   l-0.033,0.977l0.583,3.155l0.708,9.004l0.747,4.154l2.674,8.477l0.216,4.147l-0.839,3.834l-1.815,3.481l-1.475,4.128l0.02,0.167   l0.413,3.943l1.101,4.112l0.439,4.142l-0.498,8.547l-0.492,1.836l-2.49,3.016l-0.97,1.697l-0.426,1.977l-0.341,12.07l0.275,1.636   l0.492,0.909l0.537,0.365l0.432,0.503l0.465,3.393l0.596,2.596l0.649,0.454l0.433,0.56l-0.302,1.557l-0.649,0.876l-0.839,0.405   l-0.793,0.26l-1.342,1.109l-0.074,1.363l1.697,1.576l1.22,1.369l1.286,1.573l1.633,0.281l2.068-1.623l5.118-5.608l0.984-1.651   l1.329,1.059l0.295,1.711l0.57,1.779l0.419,1.981l-1.257,1.97l-2.904,5.78l-0.221,2.588l-0.862,6.804l-2.087,5.907l0.116,3.693   l-2.136,6.412l-1.574,3.115l-0.686,1.557l0.67,1.768l0.742,0.887l0.538,0.954l-0.305,2.157l-0.172,2.556l-0.544,3.841l-0.819,1.626   l-1.324,1.787l-1.219,0.66l-0.531-1.742l-0.472-2.27l-1.042-1.703l-1.121-0.29l-0.668,1.933l1.101,0.254l0.655,0.833l0.315,1.22   l0.072,1.404l-0.354,1.328l-0.826,0.31l-0.924,0.085l-0.642,0.644l0.118,0.708l0.103,1.838l0.328,1.896l-0.751,1.215l-0.682,1.215   l0.672,0.949l0.538,0.543l-0.11,1.342l-1.656,0.544l-1.559,0.941l-2.238,2.221l-1.894-0.071l-0.409,1.415l-0.139,1.819   l-0.476,0.944l-0.544,0.808l0.455,1.345l0.026,0.554l-0.911,1.849l-1.281,2.729l-1.432,1.727l-0.774,1.613l-0.543,1.096   l-1.244-0.025l-0.919-0.04l-1.133,0.186l-0.832-0.048l-0.876,0.395l-0.962,0.113l-0.077,1.384l0.643,0.959l0.106,1.15l-0.413,1.31   l-1.803,0.843l-1.459-1.271l-0.883-0.732l-0.657-0.81l-2.111,2.265l-0.961,1.804l-0.308,1.921l-0.653,0.46l-0.386-0.967   l-0.961-1.042l0.08,0.93l0.192,2l-0.615-0.001l-0.271-0.662l-0.346-0.156l-0.825,0.554l-0.784,0.492l-0.538-0.663l-0.651-2.216   l0.269-1.997l0.615-2.535l0.116-1.421l-0.384-0.346l-0.73,1.076l-2.458,4.34l-1.113,0.077l-0.077-1.997l0.077-1.882l-0.536-0.078   l-0.699,1.561l-0.569,2.359l-1.996-0.23l-5.303,0.086l-0.305-1.808l-0.539-0.959l-0.732,2.731l-0.807,0.386l-1.875-0.846   l-0.877-1.647l-0.963-0.112l-1.239,0.957v-4.306l-0.334-0.357l-0.688,0.284l-0.583,0.906l-0.046,1.522l-1.278-1.001l-0.996-1.443   l-1.101-0.894l-1.619,0.649l0.354-1.391l-0.668-1.976l0.315-0.734l-0.806-2.591l-0.472-0.273l-0.924,0.842l-1.003,1.58l-0.02,1.054   l1.022,2.137l0.57,2.605l0.334,0.913l0.688,1.186l1.343,1.814l0.197,0.913l-0.38,1.309l0.636,0.088l0.996,0.432l0.57,0.152   l-0.708,0.472l-0.708,0.188l-1.632,0.004l-0.859-0.2l-0.242-0.52l-0.039-0.657l-0.269-0.633l-0.773-0.817l-0.55-0.448l-4.345-1.534   l-1.219-0.076l-2.667,0.509l-0.727,0.361l0.052,0.693l0.931,1.313l-1.494,0.3l-2.759,1.393l-3.165,0.865l-0.413,1.245l-0.157,1.353   l-0.859,0.888v0.668l8.035-4.274l1.363-0.092l0.275,1.729l0.485,1.268l0.164,1.128l-0.649,1.308l-1.029,0.576l-1.573,0.264   l-1.573-0.072l-1.042-0.432l-0.544,0.96l0.374,0.464l0.727,0.424l0.544,0.84l0.079,0.512l0.026,0.736l-0.105,2.047l-0.603,4.02   l0.741,0.707l0.708-0.236l0.557-0.783l0.249-0.967l1.088,1.279l-1.121,2.013l-2.032,2.652l-1.803,0.543l-2.42-0.162l0.041-1.501   l1.553-0.021l0.662-0.12l0.4-0.659l-5.001-0.563l-1.042-0.415l-1.154-1.606l-0.164-0.807l0.826-0.519l1.855-0.719l-1.828-3.677   l-1.317,1.303l-1.324,2.558l-1.868,0.12l-1.704-2.294l-0.891-0.572l-1.828-0.188l-0.806,0.488l-0.446,1.187l-0.164,1.507   l0.039,1.454l-1.704-0.288l-3.742,0.168l-1.475-0.823l-0.17-0.531l-0.02-1.439l-0.085-0.38l-0.374-0.096l-0.898,0.164l-1.16-0.268   l-1.894-0.164l-0.668-0.364l-0.374-0.787l0.039-0.772l0.203-0.74l0.131-0.66l-0.131-7.284l0.131-1.173l0.236-0.544l0.413-0.721   l0.354-0.945l0.098-1.205l-1.258,1.509l-1.036,1.761l-1.278,1.321l-1.933,0.168l1.475,3.481l-1.003,0.68l-2.182-0.048l-2.084,1.32   l-0.845-2.36l-0.511-0.964l-0.904-0.7l-0.236,3.168l-0.865,2.504l-1.684,1.511l-2.15,0.192l-0.859-0.34l-0.767-0.196l-0.636,0.072   l-0.491,0.464l-1.199-0.991l-0.839-0.228l-0.531-0.148l-3.264,0.032l-1.088-0.184l-0.432-0.5l-0.197-0.748l-0.472-0.952   l-0.924-0.736l-0.216,0.756l0.138,1.176l0.177,0.516l-0.583,1.811l-0.321,0.62l-0.747,0.863l-3.047,2.438l-1.691,0.755   l-1.213-1.043l-1.52-3.101l-1.258-0.504l-0.878,1.255l-0.433,1.966l0.092,1.642l0.747,1.738l1.245,2.245l1.429,1.956l1.278,0.822   l0.904,1.173l0.845,0.407l1.003-0.631l2.497-2.347l1.73-0.232l1.475,0.288l1.376,0.088l1.514-0.811l-0.092,1.936l-0.262,1.373   l-0.799,2.773l-0.924,4.894l-0.668,1.132l-2.831,0.949l-2.241-1.124l-1.796-0.383l-1.475,3.237l-0.472-0.311l-0.118,0.028   l-0.111,0.179l-0.4,0.104l0.629,1.291l0.472,1.379l0.59,4.374l-0.367,0.812l-0.832-0.462l-1.317-1.386l-1.927-0.239l-1.435-0.793   l-0.924-1.446l-0.393-2.191l0.492-2.073l1.049-2.041l0.76-1.93l-0.374-1.655l-0.649-0.922l-1.278-2.765l-0.334-0.216l-0.452-0.012   l-0.472-0.072l-0.393-0.423l-0.039-0.503l0.138-0.591l0.236-0.375l-1.219-2.571l-0.21-0.958l0.072-0.579l0.354-0.959l0.079-0.503   l-0.177-0.551l-0.374-0.431l-0.374-0.124l-0.177,0.408l-0.275,0.22l-1.376,3.499l-0.531,0.743l-0.275,0.192l-0.413,0.048   l-2.746,0.97l-1.599,0.2l-3.48-0.088l-1.311,0.391l1.062,0.874l2.077,0.91l1.711,0.503v0.618l-3.421,1.093l-1.73,0.973   l-0.295,1.336l0.688,0.562l1.514-0.61l0.806,0.347l0.57,0.933l-0.17,0.343l-0.432,0.112l-0.223,0.263l1.121,3.899l2.327,2.088   l2.517,1.618l1.724,2.478l-0.826-0.127l-1.416-0.008l-0.603,0.135l3.46,1.334l0.447,1.084l0.228,2.039l-0.737,0.738l-0.829,0.705   l-1.573-0.076l-0.996,0.251l-3.664-2.285l-1.18-0.382l-1.042,0.199l-1.298,0.597l-1.101,0.788l-0.465,0.748l0.19,0.31l0.963,2.029   l1.129,0.248l0.682,0.453l3.061-0.799l1.675,1.428l-3.82,3.509l-1.357,1.929l-1.476-0.677l-2.321,1.762l0.243,1.704l1.029,1.121   l-2.228,0.011l-3.289-4.352l-1.134-2.333l-3.021-3.273l-0.924,0.211l-3.192,1.671l0.321,1.002l0.229,0.39l-1.311-0.453   l-1.265-0.246l-1.081-0.569l-0.747-1.404l-0.098-1.436l0.511-0.836l1.789-1.062l0.577-0.513l1.625-2.154l1.003-2.11l0.577-0.725   l1.173-0.573l-0.079,1.633l-0.393,1.585l-1.18,2.858l2.359-0.155l1.973-0.72l1.18-1.632l-0.026-2.891l-0.472-1.131l-0.623-0.645   l-0.478-0.757l-0.072-1.482l0.433-0.777l2.32-2.571l0.839,0.442l0.551,0.598l0.138,0.765l-0.426,0.932l0.485,1.279l0.688,0.892   l0.924,0.303l1.245-0.466l0.524-0.681l1.101-2.367l0.629-1.02l-1.121-1.67l-0.432-1.746l-0.57-0.79l-1.527,1.192l-1.756,0.746   l-1.455-1.216l-1.986-3.211l-1.14,1.795l-1.625,4.182l-1.127,1.379l-1.16,0.47l-0.983-0.052l-2.019-0.418l-0.95,0.335l-0.885,0.813   l-1.455,1.924l-0.649,0.55l-2.949,1.725l-1.593,1.215l-1.022,0.597l-0.983,0.259l-0.609,0.314l-0.138,0.808l0.039,1.079   l-0.151,1.142l-0.531,0.804l-0.747,0.875l-0.374,1.043l0.603,1.273l-4.443,4.375l0.144,4.039l-0.754,0.671l-2.143-1.073   l-0.708,0.854l-0.334,0.958l0.039,1.049l0.452,1.14l-1.042-0.33l-2.254-1.609l-3.093-0.906l-0.708-0.429l-0.629-1.872l0.334-4.95   l-0.308-1.917l0.446-1.221l-0.098-1.504l-0.531-1.317l-0.918-0.689l-0.872,0.251l-0.878,0.828l-0.675,1.059l-0.269,0.931   l0.328,1.353l0.511,1.177l0.026,0.823l-2.484,0.831l0.321,1.193l1.802,2.294l-3.087,1.793l-1.16,1.069l1.199,0.477l0.275,0.219   l0.079,0.477l-0.092,0.477l-0.262,0.215l-0.491-0.099l-0.747-0.453l-0.393-0.107l-1.062,0.159l-0.216,0.449l-0.013,0.727   l-0.413,0.965l-0.629,0.425l-2.386,0.604l-0.898,0.758l-0.321,0.631l-1.96,6.589l-0.164,0.944v1.127l-1.966-0.421l-3.709,1.222   l-0.931-0.19l-0.111-1.15l0.76-2.345l-0.151-1.107l-0.734-0.631l-1.016-0.202l-2.104,0.107v-0.607l0.426-0.564l0.138-0.389   l0.157-1.536l0.275-0.052l0.361,0.119l0.347-0.238l1.14-2.073l0.216-0.997l-0.308-0.997l-0.4-0.318l-0.59-0.207l-1.199-0.143   l-0.865-0.238l-0.118-0.528l0.236-0.481l0.184-0.139l0.033-1.252l0.302-1.204l-0.144-0.644l-1.291,0.429l0.354-2.357l1.606-1.185   l2.143-0.414l2.005-0.048l-0.367-0.756l-0.498-0.581l-0.629-0.406l-0.76-0.262l1.271-0.891l0.786-1.042l0.026-0.915l-0.983-0.545   l-0.36,0.143l-0.727,0.907l-0.511,0.346l-0.669-0.008l-1.042-0.645l-0.544-0.016l-0.491,0.446l-0.334,0.668l-0.275,0.883   l-0.714,0.159l-0.688-0.024l-0.786-0.135l-1.724,0.032l-0.944,0.167l-1.186,0.469l-0.151-1.552l-0.688-0.899l-1.914-0.943   l0.026-0.31l-0.4-0.788l-0.485-0.474l-0.243,0.629l-0.236,0.374l-0.57,0.33l-0.649,0.131l-0.511-0.199l-1.671-1.6l-0.21-0.1   l-0.275-0.983l0.138-0.283l0.328-0.131l0.315-0.541l0.321,0.458l0.806,0.012l0.583-0.47l-0.334-1.003l-2.156-1.059l-1.671-1.227   l-0.138-2.82l0.701-3.136l0.845-2.181l0.085-0.742l-0.066-0.909l0.118-0.766l0.655-0.319l0.603,0.06l0.629,0.18l0.472,0.323   l0.531,1.168l2.458,3.684l-0.767,1.012l-0.236,0.98l0.138,1l0.262,1.076l1.665,4.68l1.003,0.601l3.991,0.669l1.711,1.182   l0.924-0.084l0.655-1.7l-0.904,0.135l-0.478-0.239l-1.657-0.361l-0.781-1.222l-1.025-1.027l0.285-2.249l-1.063,0.195l-0.514,1.384   l-0.836,0.075l-0.506-1.828l-0.248-2.444l0.612-1.394l-0.464-1.713l2.203-0.218l3.375,0.738l0.439,0.783l-0.213,1.273l0.02,0.395   l-0.033,0.378l0.19,0.59l0.839,0.543l0.488,0.661l1.05,0.686l1.445,0.573l0.874,0.848l1.122,0.808l0.853,0.56l0.349-0.432   l-1.686-2.23l1.002-0.218l1.488,0.858l1.919,1.049l2.322,0.742l1.685-0.432l-1.697-0.287l-1.376-0.872l-2.418-2.127l0.59-0.729   l-1.743-1.275l-2.635-3.38l-1.461-0.694l-2.005-0.403l-2.382,0.154l-1.642-1.068l-2.029,0.549l-1.862-0.614l-0.245-0.931   l1.152-1.444l1.128-0.463l2.4,0.375l3.062-1.37l3.682,2.717l1.239-0.239l0.315,0.215l0.197,0.199l0.216,0.172l0.374,0.144   l-0.354-1.887l0.157-1.723l0.963-1.261l1.973-0.491l3.69,1.105l1.887,0.14l-0.57-1.245l1.245-0.627l0.668-0.14l0.839,0.044   l-1.199-1.381l-1.829-0.335l-4.181,0.375l0.315-0.95l-0.105-0.647l-0.21-0.671v-1.022l0.295-0.647l0.426-0.479l0.354-0.599   l0.026-1.019l-0.649-1.45l-1.108-0.336l-1.199,0.563l-0.885,1.222l-0.098,0.815l0.531,1.653l0.118,0.887l-0.138,0.132l-0.963,1.932   l-0.905,3.344l-0.839,1.141l-1.599,0.144v-0.227l-0.505-0.383l0.328-0.523l0.433-1.022l0.334-0.519l-1.095-0.559l-0.734,0.327   l-0.708,0.623l-1.062,0.331l-2.143-0.479l-0.682,0.323l-0.135,1.013l-1.104-0.019l-1.737,0.575l-0.845-0.431l-0.275-1.041   l0.577-0.974l1.645-1.645l0.596-0.902l0.334-0.711l0.138-0.667l0.033-0.763l-0.216-1.466l0.275-0.723l1.042-0.919l-1.003-0.791   l-0.878-1.642l-0.479-1.922l0.157-1.615l1.121-1.031l1.52-1.044l0.472-0.864l-2.012-0.48l-0.918,0.168l-0.537,0.468l-0.432,0.488   l-0.609,0.22l-0.786,0.404l0.118,0.96l0.393,1.128l0.026,0.919l-1.127,1.027l-1.455,0.1l-1.409-0.46l-1.009-0.667l0.767-0.528   l0.334-0.144l-0.708-0.508l-0.603-0.612l-0.498-0.732l-0.393-0.888l0.924-0.476l0.904,0.048l2.012,0.428l-0.243-2.112l2.248-2.236   l-0.596-2.061l-2.294-3.182l-1.416-1.297l-1.54-0.529l0.636,2.21l-0.557,1.265l-1.14,0.04l-1.14-1.497l0.754-1.049l-2.071-2.755   l-0.288-1.634l1.16-1.35l1.645-0.22l1.462,0.749l0.642,1.559l1.022-0.657l0.57-1.13l0.649-2.252l0.57,1.122l0.105,0.946   l-0.216,1.819l-0.36,0.921l-0.098,0.569l0.157,0.585h0.321l0.374-0.14l0.249,0.168l0.321,1.298l0.079,0.557l0.295,0.32l0.963,0.577   l0.78,0.276l1.357,0.048l0.61,0.348l-0.465,1.121l0.131,1.081l0.577,1.004l0.859,0.884l2.032-4.607l0.21-1.561l-0.039-1.754   l-0.393-0.629l-1.514-0.38l-0.642-0.361l-0.531-0.541l-0.826-2.212l-2.641-3.09l-0.609-1.423l0.177-0.481l0.374-0.405l0.38-0.533   l0.177-0.91l-0.852-0.602l-0.413-0.782l0.157-1.364l-1.036,0.409l-1.068,0.173l-2.294,0.028l0.898-1.111l1.475-0.341l1.671-0.092   l1.461-0.357l-0.478-0.184l-0.256-0.225l-0.295-0.197l-0.629-0.124l0.393-0.891l0.472-0.522l0.518-0.401l0.524-0.57l0.275-0.747   l-0.131-0.646l-0.256-0.622l-0.138-0.683l0.275-1.538l0.701-1.518l1.77-2.704l0.472,0.49l1.18,1.535l1.422,0.434l0.721-0.048   l-0.197-0.723l-2.654-3.022l-0.393-1.053l0.59-2.336l1.383-2.892l2.182-5.102l1.84-2.652l2.627-0.943l2.993-0.617l2.56-0.139   l1.181-0.947l1.134-1.639l1.604-0.412l1.437,1.615l1.475,1.824l1.081,0.362l-1.049-3.697l-0.747-1.68l-1.219-0.701l-11.426,1.869   l-3.98-2.483l0.242-2.665l0.066-1.066l1.886-0.939l1.646-1.627l1.524-1.748l2.417-1.411l2.965-1.636l2.252-3.148l0.343-2.963   l1.237-0.737l0.915-0.579l0.486-0.423l2.889-0.292l2.827,0.35l1.792,1.384l1.284,0.323l0.859,1.486l0.334-0.808l0.275-1.123   l0.118-1.167l-1.076-0.858l-0.741-0.542l-1.54-0.765l-1.749-1.194l-1.421-1.065l-0.747-0.38l0.216-0.857l0.668-0.922l0.669-0.55   l0.734-0.17l4.496,0.291l0.983-0.081l0.727-0.38l0.492-0.894l0.184-0.732l0.387-0.506l1.108-0.19l0.354-0.324l-0.419-0.728   l-0.859-0.748l-0.95-0.352l-0.255,0.202l-5.918,2.395l-1.986,0.097l-3.899-0.255l-3.85-0.305l-0.036-1.711l-0.244-2.355   l-0.744-0.649l-2.403-0.825l-3.544,0.556l-0.348-3.001l7.299-0.787l3.969-0.495l4.015-0.237l1.298-0.782l1.383,0.405l1.691-0.867   l2.969-2.256l3.768-1.503l1.592-1.143l0.144-1.439l-4.719,1.459l-1.658,0.511l-1.625,1.123l-1.363,1.313l-1.507,0.725l-1.796,0.304   l-1.684,0.745l-1.225-0.599l-0.413-0.693l-0.131-0.911l-0.419-1.252l-0.668-1.082l-1.357-1.788l-0.728-1.212l1.121-0.908   l-0.524-0.624l-1.101-0.462l-1.008-0.337l-1.843-3.171l-1.416-0.616l-1.071,0.62l-0.507-0.004l-0.041-1.098l-1.82-1.166   l-1.572,0.248l-0.489,1.878l-0.268,0.645l-0.551-0.507l0.321-2.913l2.734-1.389l2.415-0.763l3.378,0.975l-1.193-1.973l-0.675-0.776   l-0.898-0.658l-0.537-0.126l-0.642,0.378l-0.459-0.252l-0.603-0.658l-0.498-0.707l1.691-4.656l0.97-2.053l1.18-0.785l-0.891-1.094   l-3.421-1.049l-1.232-0.655l1.212-1.123l3.585-0.87l0.747-1.042l-0.518-1.327l-1.271-0.334l-2.654-0.016l-0.551-0.383l-0.95-1.16   l-0.649-0.574v-0.676h1.049l-1.207-2.243l1.459-0.809l1.662-0.504l1.549-2.263l3.316-0.925l1.569-0.84h-4.699l-1.134,0.648   l-1.737,2.591l-1.278,0.244l-0.799-0.974l-0.734-1.85l-0.465-1.899l0.052-1.121l1.678-1.969l0.78-1.215l-0.256-0.546l-1.544,0.559   l-0.697-0.657l-0.632-0.42l-0.382-0.079l-0.374-0.921l0.352-0.84l-0.068-0.919l-0.405-1.723l-0.49-0.731l-0.035-0.42l1.111-0.07   l1.61-0.749l1.68,0.055l0.125-1.222l0.483-1.081l-0.657-0.871l-0.955-0.199l-1.293-1.281l0.818-1.176l1.133-0.913l-0.767-1.392   l-1.931-0.363l-0.39-1.677l0.617-1.236l1.884-0.3l-1.081-1.235l-0.374-0.622l-0.249-0.883l-0.675,0.577l-1.14,1.247l-1.278,0.548   l-0.256,0.711l0.046,0.707l0.569,0.874l0.1,1.703l-0.593,1.958l0.354,2.628l-0.855,2.243l-0.729,0.917l-1.491-1.165l-1.557-0.069   l-1.549-1.021l0.388-5.422l0.478-1.959l-0.925-0.441l0.279-2.547l-0.865-1.039l-1.298,0.229l-0.727,1.308l-0.197,1.607   l-0.583,1.177l-1.835,0.029l0.754,1.545l1.468,2.349l0.531,1.654l-0.885,0.751l0.118,0.829l1.357,1.841l-1.232,0.245l-1.042,0.596   l-0.872,0.857l-0.701,1.041l0.013-0.735l-0.092-0.747l-0.184-0.678l-0.275-0.58l1.108-2.45l-2.366-3.889l0.708-1.949l-0.609-2.743   l-1.488,0.834l-2.13,2.697l-1.573,0.584l-0.924,0.184l-0.826,0.327l-0.826,0.057l-0.976-0.568l-0.236-0.466l-0.334-0.936   l-0.124-0.924l0.393-0.417l3.323,0.033l0.846-0.576l-0.02-1.517l-0.865-1.578l-1.239-0.609l-1.298-0.38l-1.042-0.859l-0.413,1.202   l-0.236,2.502l-0.452,1.161l-0.944,0.858l-0.314-0.809l0.098-2.518l-0.157-2.446l0.223-0.679l2.064-2.627l0.406-0.917l0.321-1.285   l0.256,0.974l0.347,0.876l0.433,0.827l0.557,0.818l0.426-0.401l0.531,0.041l0.609,0.213l0.688,0.147l-0.845-1.195l-0.859-1.547   l2.294,0.688l0.944-0.246l0.609-1.195l-2.058-0.147l-1.265-0.573l-0.151-1.253l1.33-2.146l-1.822-1.511l0.118-1.401l1.389-1.131   l1.966-0.709l-0.511,2.458l0.197,0.68l1.107,0.238l1.999-0.037l0.537-0.373l0.524-0.905l0.144-2.266l-0.203-3.045l0.374-2.485   l1.874-0.578l-0.242,1.39l0.059,2.177l0.354,2.205l1.003,2.651l-0.492,0.934l-0.786,0.836l-0.492,0.872l0.026,0.926l0.505,1.482   l0.066,0.401l-0.439,0.475l-1.448,0.95l-0.301,0.262l0.079,0.868l0.262,0.917l0.426,0.536l0.577-0.266l1.357-1.252l1.016-0.029   l2.32,1.596l-1.665-3.61l-0.59-2.248l0.859-1.007l1.298,1.663l0.793,0.516l0.367-1.089l0.341-0.34l0.839-0.34l1.612-0.41v-0.627   l-0.642-0.098l-1.553-0.651v-0.627l1.94-0.455l1.14-1.856l0.295-2.262l-0.629-1.673l-0.701-0.234l-2.11-0.037l-1.042-0.422   l-0.78-0.951l-0.256-0.935l0.387-0.328l1.16,0.841l0.531-1.563l-0.57-0.927l-1.239-0.377l-1.475,0.111l0.596-0.775l0.799-0.558   l0.865-0.148l0.786,0.447l0.767,0.591l0.675,0.135l0.308-0.312l-0.354-0.759v-0.751l2.969-0.049l1.422,0.501l0.603,1.333   l-0.406,0.825l-0.773,0.874l-0.472,1.144l0.511,1.632l0.708-0.709l0.911-0.496l0.786,0.016l0.334,0.845l0.092,0.705l0.374,0.64   l0.085,0.689l-0.144,0.262l-0.727,0.869l-0.229,0.623v4.499l0.269,1.302l0.59,0.913l0.59,0.344l0.262-0.471l0.328-2.506l1.475-4.81   l0.341-2.369l0.433-0.558l0.976,0.664l1.396,1.55l0.57,1.09l0.413,1.008l0.609,0.664l1.147,0.049v-0.623l-0.577-0.766l-0.701-2.054   l-0.616-1.025l-4.935-5.225l-0.354-0.283l0.275-1.087l0.688,0.123l0.826,0.78l1.285,1.608l0.682,0.607l0.826,0.377l1.003,0.004   l0.754-0.443l0.072-0.693l-0.551-0.648l-1.14-0.283l-1.533-0.739l-1.668-1.564l-0.752-2.329l-0.175-1.562l1.475-0.041l1.284,0.62   l1.154,1.014l1.612,1.153l1.539,1.065l0.631,0.645l1.222,0.834l1.178,0.651l0.805,1.376l-0.38,1.363l-0.782,0.922l0.157,0.722   l0.799,1.534l0.098,0.943l-0.295,1.656l0.885-0.615l0.354-0.746l0.216-0.836l-0.306-2.472l0.328-0.817l0.511-0.861l0.745-1.404   l1.329-0.623l1.247-0.012l1.395,0.179l1.543,0.566l1.953,0.525l1.4,0.92l1.697,1.747l0.118,2.153l-1.265,4.352l0.963-0.639   l1.514-1.955l0.826-0.152l0.577,0.828l0.334,1.483l0.177,2.876l-0.085,0.614l-0.374,1.368l-0.079,0.794l0.157,0.827l0.714,1.203   l0.682,3.131l-0.229,0.896l-1.324,0.405l0.242,0.847l0.315,0.577l0.465,0.393l0.669,0.307l0.472-2.258l0.793-1.342l0.406-1.432   l-0.669-2.521l1.632,0.475l1.711,0.213l-2.766-3.071l-0.826-1.691l1.645-0.737l1.481-0.246l3.5-1.413l2.576-1.967l1.212-0.574   l0.872-0.984l0.551-2.443l-0.157-0.435l-0.747-0.792l-0.144-0.209l0.432-0.406l0.433-0.053l0.413,0.016l1.121-0.623l0.714-0.107   l0.531-0.353l0.21-1.169l-4.817,1.354l-0.728,1.03l0.256,3.117l-0.583,0.705l-1.874,0.615l-2.667-0.373l-3.165-1.849l-2.857-2.813   l-1.087-2.694l4.822-0.531v-0.628l-0.334-0.16l-0.76-0.583l0.904-0.119l0.859,0.049l0.786,0.271l0.695,0.542l-0.341-1.921   l-1.101-1.712l-0.8-1.963l0.59-2.662l-0.911-0.411l-0.701,0.933l-0.433,1.606l-0.144,1.622l-0.374,1.761l-0.767,0.406l-0.76-0.763   l-1.54,0.32l-1.553,0.398l-3.709-1.117l0.025-1.143l-0.349-1.004l0.292-1.359l-0.157-1.73l0.934-1.714l1.113-1.53l1.282-0.618   l1.371-0.525l2.038-0.032l2.176-0.592l0.452-0.674l0.124-1.871l-0.498-0.366l-1.121,0.613l-1.671,1.452l-1.042-0.214l-0.767-0.452   l-0.413-0.798l0.007-1.234l-1.914,0.979l-1.553,1.11l-2.871,3.116l-0.741,0.592l-0.931,0.333l-0.865-0.029l-0.524-0.518   l0.033-0.929l0.492-0.904l1.186-1.677l-2.346,0.543l-0.747-0.234l-0.256-1.382l0.432-1.024l0.983-0.58l1.121-0.382l0.813-0.457   l0.977-1.337l-0.256-0.346l-2.156,0.3l-0.714-0.44l-0.564-1.086l-0.537-1.358l-0.649-1.26l0.36-0.103l0.229-0.161l0.511-0.486   l0.59,0.453l0.891-0.049l1.566-0.403l1.278,0.354l1.068,0.663l1.055,0.342l1.239-0.609l-0.098,1.128l0.098,1.095l0.393,0.848   l0.767,0.383l0.845-0.333l0.393-0.951l0.4-2.169l1.357-2.034l1.114,0.156l1.258,0.762l1.776-0.259l-0.38-0.828l-0.491-0.614   l-0.623-0.412l-0.754-0.222l-1.119,0.042l-0.511-0.772l-1.203-0.219l-0.97,0.308l-0.965-0.055l-1.524-0.304l-2.523-0.8   l-3.505-2.665l-0.186-1.169l1.56-2.273l1.061-1.073l-0.232-0.688l-4.221-0.54l-1.966,2.511l-2.034-1.556l0.829-1.842l1.067-1.609   l-0.67-1.138l-1.442-0.784l-1.322-0.701l0.186-1.853l-0.264-1.455l0.785-1.362l2.31-0.698l0.691-0.354l0.172-0.845l-1.086-0.296   l-0.294,0.884l-1.657,0.181l-0.431-1.014l-0.177-1.858l0.394-2.457l-0.393-0.893l-0.628-1.502l-0.713-1.18L265.823,135l-0.92-0.9   l-0.018-1.372l-0.332-2.051l-0.865-3.204l-1.16-8.367l0.315-1.376l1.068-0.199l4.437,1.592l1.416-0.307l1.18-0.555l1.049-0.207   l1.075,0.721l0.4,1.202l0.157,1.877l-0.118,1.926l-0.439,1.317l-0.033,2.385l2.471,2.074l3.133,1.32l1.946,0.12l-1.514-1.568   l-4.64-3.353l1.35-3.612l0.4-2.163l-0.341-1.525l-0.76-1.596l-0.066-0.872l-0.092-1.164l0.367-2.045l0.845-1.63l-0.603-0.759   l-0.793,0.112l-1.222,0.836l-0.559-8.774l0.424-2.432l0.97-0.71l1.49-0.164l2.077-0.792l3.204-2.56l6.879-10.532l1.407-1.433   l3.105-2.412l1.328-1.537l1.635-4.053l1.095-2.715l0.993-1.268l0.471-0.602l4.416-3.645l5.131-3.22l5.398-2.193l5.194-0.562   l2.564,0.273l9.929-0.87l7.637,2.32l2.426-0.223l4.732-1.437l15.535-1.363l0.662,0.451l1.028,1.49l0.99,1.002l1.107,0.284   l5.323-1.122l8.448,0.493l5.485-0.435l5.527-1.973l5.144-3.332l4.286-4.502l1.864-2.672l1.556-2.853l1.049-3.173l0.349-3.651   l-0.682-3.522l-0.175-1.796l0.508-1.331l2.197-1.744L410.215,30z M252.413,249.967l0.606,1.852l1.088,1.678l0.459,1.564   l-0.767-0.358l-3.578,0.204l-1.16-0.187l-0.22-1.497l0.388-0.533l0.619-0.57l0.327-0.887l-1.92,1.214l-0.898-0.432l0.249-1.495   l1.455-2.017l-0.55-0.619l-1.101,1.304l-0.373-0.9l-0.845,0.453l0.44-2.404l-0.309-3.67l-0.371-2.219l-0.832-2.8l0.696-0.913   l1.427-1.328l1.535-0.524l1.071,1.718l0.144,0.616l-0.35,0.735l-0.614,0.493l0.072,0.689l1.357,3.076l0.216,0.979l-0.354,0.816   l0.416,0.719l0.914,0.542l0.716,1.25h-1.691v0.62l0.551,0.11l1.14,0.64l-0.089,0.631l-0.081,0.496L252.413,249.967z    M243.542,114.238l1.586-0.025l1.475,0.232l0.747,0.846l-0.531,1.808l-1.429,1.235l-1.77,0.116l-3.355-0.721l-0.741,0.29   l-0.904,0.481l-0.78,0.021l-0.321-1.107l0.177-0.348l0.924-2.811l0.99-0.962l1.134-0.307l1.291,0.332L243.542,114.238z    M295.952,542.968l0.609,1.253l-0.373,0.428l-0.78,0.228l-0.557,0.668l0.039,0.562l0.511,0.891v0.522l-0.275,0.518l-0.688,0.907   l-0.138,0.283l-1.453,1.681l-2.736,2.187l-0.849,1.823l-1.211,2.128l-0.058,0.853l-0.536,1.254l-1.986,0.231l-0.767,0.404   l-2.115-0.186l-3.088,2.442l-8.139,1.497l-2.722,2.317l-3.333,0.742l-3.569-0.357l-4.079,0.761l-3.391-1.02l-7.653,0.11   l-2.387,1.118l-1.421,2.519L241.51,570l-1.298-0.623l-1.833-2.972l-2.442-0.831l-2.37-2.485l-0.826-3.026l1.435-3.921l1.357-2.432   l0.839-0.855l2.798-1.66l2.39-4.159l2.198-0.564l1.016-2.197l3.768-1.302l8.216-2.358l2.058-1.775l7.852-0.824l5.344-2.333   l1.28,0.362l6.508-1.051l3.773-0.313l2.497,0.421l0.954,1.436l1.186,0.928l3.886,1.545l1.18,1.199l0.793,2.892l0.78,1.131   l0.374-0.44l0.511-0.42L295.952,542.968z M314.23,445.295l2.517-0.298l1.311,0.099l1.101,0.533l0.878,1.586l-0.262,1.816   l-1.062,1.486l-1.488,0.612l-3.323,0.612l-1.285-0.183l-0.944-0.461l-1.927-1.295v-0.727l0.439-0.544l0.079-0.453l-0.315-0.437   l-0.754-0.509l1.114-0.823l1.284-0.525L314.23,445.295z M250.371,443.856l0.124,1.344l-0.216,1.503l-0.433,1.455l-1.586,3.401   l-0.642,1.033l-0.799,0.54l-0.138-0.302l-1.376-1.303l-0.636-0.397v0.612l-0.328,1.565l-7.668,4.185l-0.924,0.318l-3.388,0.286   l-0.937-0.238l-0.177-0.85l0.452-0.715l0.596-0.595l0.229-0.5l-0.433-0.603l-2.32-1.461v2.065l-1.691-1.997l1.003-3.261   l2.294-2.639l2.248-0.167l0.727-2.111l0.472-0.751l0.747-0.835l0.865-0.477l0.767-0.131l0.583-0.433l0.223-1.384l0.944,1.161   l1.278,0.131l1.14-0.752l0.492-1.488l-0.616-1.221l-2.071-1.635l0.537-0.812l1.304-0.096l1.33,0.728l1.154,0.919l0.858,0.454   l0.197,0.274l0.236,0.617l0.387,0.672l0.537,0.434l0.367-0.119l1.822-1.15l0.072,0.847L250.371,443.856z M363.278,425.649   l0.839,0.215l0.734,1.164l0.577,1.434l0.682,2.453l0.072,1.43l-0.243,1.39l-0.583,1.345l-0.806,0.828l-0.904,0.072l-0.904-0.486   l-2.851-2.906l-0.334-1.131l0.485-1.8l0.354-0.47l1.507-1.143l0.269-0.586l0.609-2.486l-1.219-1.299l0.144-0.793l0.878-0.407   l1.003-0.116l0.865,0.391l0.216,0.917l-0.413,1.08L363.278,425.649z M218.88,422.831l0.963,0.873l0.249,0.407l0.105,0.749   l-0.177,0.769l-0.334,0.717l-1.219,1.646l-0.564,0.414l-0.557,0.048l-0.826-0.076l-0.007-0.307l-1.167-0.685l-1.265-0.538   l-0.354,0.131l-0.727-1.634l0.55-0.757l2.379-0.957l1.461-2.009l0.498-0.255l0.301,0.199L218.88,422.831z M220.342,416.203   l0.033,2.082l-0.374-0.172l-0.917-0.259l-0.406-0.239l-0.695,0.921l-1.101,0.008l-1.009-0.215l-0.446,0.255l-0.164,1.316   l-0.433,1.156l-0.701,0.865l-0.957,0.435l-0.944-0.112l-0.695-0.658l-0.419-1.041l-0.138-1.292l0.242-1.22l0.642-0.862l0.885-0.574   l0.983-0.383l1.094,0.423l1.442-0.315l2.635-1.009l0.537-0.072l0.387,0.064l0.295,0.287L220.342,416.203z M224.274,403.182   l0.347-1.303l0.786-0.196l0.898,0.619l0.636,1.107l0.19,1.414l-0.249,1.37l-0.616,1.174l-0.937,0.811l-1.16,0.348l-0.669-0.256   l-0.524-0.455l-0.682-0.248l-2.628,0.591l-0.99,0.02v-0.611l0.793-0.695l1.448-2.317l1.101-1.007l0.518,0.032l0.767,0.212   l0.669-0.012L224.274,403.182z M386.432,412.863l0.413,1.113l-0.236,0.982l-0.446,1.041l-0.236,1.281l0.223,2.022l-0.066,1.156   l-0.459,0.503l-0.642,0.363l0.682,1.989l-0.334,0.996l-1.239,0.231l-1.18-0.71l-1.271-0.558l-1.494,0.693l-1.311,0.175   l-0.799-1.897l-0.904-3.96l-1.324-0.718l-1.055,0.73l-0.714,1.651l-0.269,2.046l-0.491,0.861l-1.14,0.036l-1.206-0.415   l-0.734-0.482l-0.498-0.881l-0.118-0.726l-0.02-0.857l-0.177-1.244l-2.222-7.242l-0.295-1.749l0.216-1.725l0.924-1.766l0.616-0.451   l0.629-0.116l0.485-0.328l0.38-2.17l0.472-0.619l1.291-1.011l1.062-0.516l1.219,0.376l1.068,0.955l0.623,1.227l-0.111,1.291   l-0.708,1.234l-1.809,1.893l0.328,0.679l0.374,1.717l0.452,0.894l0.688,0.479l1.724,0.579l0.97,1.736l1.56-0.275l1.979-0.778   l1.868-0.399l2.713,0.455L386.432,412.863z M441.11,407.569l-0.092,1.162l-0.36,1.234l-0.708,0.687l-1.094-0.463l0.446,1.317   l1.042,2.219l0.216,1.52l-0.616,0.243l-1.409-0.487l-1.514-0.798l-0.918-0.663l-0.249,1.369l-0.249,0.742l-1.396,1.628   l-0.452,1.272l0.957,0.734l1.324,0.554l0.669,0.754l-1.258,1.108l-5.833,1.81l-1.756,0.12l2.753-2.001l-1.14-0.542l-0.433-0.869   l0.066-1.168l0.406-1.436l-2.497,1.28l-0.741-0.514l-0.36-1.129l0.046-1.133l0.505-0.515l2.005-0.407l0.57-1.081l0.039-1.529   l0.432-1.729l-1.101-0.671l-0.826,1.022l-2.89,1.281l-1.278,1.05l-0.918-1.429l-1.147-1.262l-0.937-1.413l-0.249-1.869l0.518-1.126   l1.062-1.039l1.225-0.799l1.049-0.448l3.015-0.623l0.826,0.016l1.324,0.559l1.055,0.691l1.081,0.531l1.494,0.104v-0.611   l-1.494-0.983l-0.852-1.466l-0.38-1.675l-0.085-1.571l1.062,0.132l5.643-3.215l-0.963-1.804l0.452-1.792l1.239-0.992l1.422,0.56   l0.354,0.816l0.026,0.952l-0.524,3.648l0.039,0.576l0.374,1.156l0.491,0.923l0.354,0.951l-0.02,1.291l-0.321,1.171l-1.271,3.336   l1.632-0.575l0.78-0.539l0.262,0.192L441.11,407.569z M228.671,389.664l-0.433,0.112l-2.143-0.572l-0.767,0.124l-0.295-0.22   l-0.197-0.216l-0.21-0.168l-0.354-0.06l0.629-3.123l0.426-0.913l0.557-0.32l0.957-0.32l0.885-0.433l0.393-0.633l0.609-1.338   l1.455-0.946l1.652-0.393l1.232,0.333l-2.451,1.43l-0.564,0.829l-0.066,0.986l0.354,1.013l1.081,1.75l-0.865,0.36l-0.904,0.885   l-0.688,1.033L228.671,389.664z M265.128,143.538l0.316,0.326l0.315,0.496l0.427,0.404l0.333,0.684l0.2,0.532l-0.438,0.183   l-0.68,0.507l-0.275,0.368l-1.407,0.338l-0.623-0.104l-0.856,0.403l-1.881,0.823l-1.014,0.911l-0.561,0.993l-3.511,2.654   l-0.791-0.18l-0.738,0.085l-0.32-0.08l-0.337-1.237l-0.637-0.404l-0.293,0.321l-0.266,0.091L252,151.445l0.137-0.357l-0.201-0.494   l-0.49-0.063l-0.324,0.429l-0.498,0.392l-0.601-0.272l-0.866-0.218l0.512-0.509l-0.178-0.55l-0.881-0.84l-0.215-0.529l0.309-0.752   l0.479-0.145l0.666,0.347l3.649-2.559l2.613-0.286l1.776,0.043l1.637-0.865l0.56-2.275l1.141-0.423l0.93,0.94l0.452,0.178   l0.465,0.264l0.459,0.19l0.452,0.025l0.485,0.095L265.128,143.538z M614.658,140.35l1.376,1.041l-0.098,2.578l-0.891,2.871   l-0.937,1.907l-1.534,0.772l-2.051-0.4l-1.992-1.197l-1.324-1.598l-0.419-2.069l0.682-1.545l1.448-0.967l2.864-0.488l1.914-0.707   L614.658,140.35z M248.49,125.171l1.003,0.795l0.773,0.878l0.157,0.969l-0.852,1.101l-1.632,0.099l-5.466-4.264l0.708-0.646   l0.334-0.808l0.459-1.914l0.249-0.493l0.393-0.522l0.452-0.381l0.465-0.116l0.301,0.17l0.197,0.311l0.118,0.431l0.249,1.864   l0.092,0.352l0.387,0.671l0.511,0.572L248.49,125.171z M260.66,135.165l-0.616,0.07l-0.485-0.223l-0.846-0.918l-0.609-0.372   l-0.432,0.153l-0.334,0.343l-0.308,0.19l-4.234,0.232l-1.573-0.736l-1.652-2.213l2.477-0.65l0.59-0.393l0.682-1.072l-0.092-0.493   l-0.452-0.31l-0.413-0.555l-2.87-5.483l-0.177-0.833l0.295-1.094l-0.079-4.825l0.334-1.099l0.78-0.294l1.901-2.211l1.468-0.382   l1.285,0.929l1.212,1.439l1.219,1.12l2.589,1.306l1.029,1.036l0.413,1.637l-0.092,0.82l-0.419,1.38l-0.092,0.613l0.184,0.688   l0.747,1.375l0.17,0.754l0.262,3.66l-0.262,0.853l0.446,0.546l0.452,1.088l0.256,0.447l-1.042,0.625l-0.904,2.143L260.66,135.165z    M117.704,96.076l0.885,1.102l-0.131,1.496l-1.114,0.819l-1.566-0.947l-2.051,0.179l-0.426,0.204l0.033,1.072l0.786,0.395   l0.944,0.17l0.439,0.39l-1.645,1.296l-3.29-0.461l-2.451-2.098l0.839-3.616L111,96.808l4.47-1.571L117.704,96.076z    M325.188,490.465l0.472,0.419l0.577,0.162l0.21,0.332l-0.098,0.478l-1.14-0.553l-1.101-0.257l-0.197-0.304l-0.275-0.664   l-0.177-0.811l-0.302-0.214l-0.249-0.308l-0.197-0.664l0.118-0.392l-0.039-0.451l0.059-0.404l0.256-0.083l0.295,0.099l0.374-0.119   l0.216-0.253l0.118-0.036l0.197,0.415l-0.275,0.902l0.138,1.004L325.188,490.465z M343.132,448.53l0.361,0.97v0.576l-0.609,0.656   l-1.468,0.953l-1.285,0.393l-0.459-0.262l-0.033-0.834l-0.544-0.572l-0.813-0.262l-0.374-0.505l0.216-0.389l-0.878-0.56   l-0.537-0.401l0.288-0.731l-0.052-0.548l-0.138-0.437l0.393-0.223l0.57,0.246l0.603,0.35l1.127,0.286l0.02,0.254l0.374-0.095   l0.727-0.723l0.741-0.04L343.132,448.53z M363.35,443.021l0.531,0.294l0.354,0.561l-0.177,0.608l-1.003,0.346l-0.655,0.028   l-0.17-0.171l-0.262-0.394l-0.747-0.417l-1.173-0.394l-0.786-0.608l-0.361-0.831l-0.393-0.604l-0.662-0.358l-0.57-0.688   l0.433-0.835l1.357-0.648l1.475-0.199l1.049,0.78l1.219,2.379l-0.144,0.684l0.039,0.35L363.35,443.021z M227.826,434.244   l0.184,0.183l0.151,0.498l-0.072,1.015l-0.249,1.086l-0.072,0.943l-0.452,0.489l-0.649,0.481l-0.675,0.641l-1.586,0.943   l-0.878,0.135l-0.931-0.271l-0.288-0.501l0.465-0.163l0.492-0.024l0.406-0.41l0.478-0.366l-0.079-0.334l-1.789-0.398l0.433-0.517   l1.114-0.171l1.167-0.036l0.917-0.704l0.4-0.955l-0.393-0.979l-0.806-1.294l-0.511-1.644l0.61-0.458l0.983,0.792l0.583,0.609   l0.99,0.557L227.826,434.244z M222.832,436.91l-0.767,0.354l-0.649-0.545l-0.314-3.395l0.288-1.887l0.675-0.86l1.029,2.258   l0.859,1.254l0.675,1.373l-0.223,1.146l-0.727,0.247L222.832,436.91z M175.134,425.266l0.924-0.239l0.157,0.398l-0.708,0.701   l-0.374,0.446l-0.21,0.558l-1.271,1.486l-0.249,0.689l-0.531,0.888l-0.413,0.569l-0.328,0.362l-0.786-0.331l-0.518-1.402   l0.085-1.307l0.446-1.191l0.537-1.052l0.583-0.921l0.675-0.502l0.662-0.132l0.361,0.283l0.269,0.709L175.134,425.266z    M233.783,420.921l0.275,0.857l0.033,1.048l-0.465,0.937l-1.022,0.1l-0.944-0.937l-0.747-1.088l-0.865-0.012l-0.433,0.387   l-0.282,0.135l-0.603,0.052l-0.57-0.419l-0.138-0.837l-0.734-1.348l-1.586-1.675l-0.334-0.814l0.78,0.207l0.636,0.004l0.596-0.307   l0.859-0.088l1.016,0.156l0.754,0.335l0.478,0.523l0.708,0.359l0.957,0.064l0.786,0.191l0.537,0.491l0.288,0.538l-0.059,0.491   L233.783,420.921z M233.351,415.09l-0.256,0.255l-0.275,0.63l0.17,1.324l-0.485,0.519l-0.963,0.255l-0.937-0.534l-1.049-0.902   l-1.35-0.503l-0.99-0.583l0.793-0.666l2.005-0.331l1.173-0.511l0.61-0.503l0.773,0.343l0.583,0.798L233.351,415.09z    M226.161,412.112l-0.675-0.934l-0.557-1.022l0.242-0.779l1.18-0.595l0.963-0.1l0.767,0.435l0.747-0.024l0.216-0.591l-0.157-1.15   l0.767-0.751l1.055,0.02l0.511-0.052l0.4,0.224l0.387,0.559l0.085,0.607l-1.081,0.695l0.393,1.525l-0.197,0.926l-0.57,0.355   l-0.793-0.036l-0.505,0.575l0.02,1.094l-0.262,0.934l-0.859,0.487l-0.727-0.06l-0.177-0.579l0.033-0.391L226.161,412.112z    M386.688,409.909l0.328,0.26l0.446,0.675l-0.852,0.216l-3.644-0.962l-1.992,0.643l-1.167-0.14l-1.199-0.731l-0.708-1.398   l0.551-1.514l1.101-1.426l0.701-1.342l0.734-0.947l1.278-0.348l0.413,1.087l-0.564,1.586l-0.282,1.083l0.079,0.903l0.426,0.292   l0.472-1.066l0.944-1.498l0.773-0.132l0.236,0.687l0.413,0.391l0.4,0.224l0.184,1.178l0.459,1.629L386.688,409.909z    M239.61,402.926l-0.714,0.312l-0.983-0.032l-0.4-0.887l0.164-0.935l0.629-0.344h1.376l0.472,0.192l0.02,0.424l-0.262,1.015   L239.61,402.926z M234.131,389.928l0.203,0.44l0.079,0.504l-0.02,0.96l-0.341,0.312l-0.406,0.228l-0.433-0.164l-0.721-0.8   l-0.328-0.224l-0.432,0.216l-0.387-0.04l-0.118-0.428l-0.308-0.156l-0.4,0.012l-0.111-0.216l0.583-0.444L230.762,390l-0.36,0.064   l-0.347-0.104l0.151-0.444l0.623-0.412l0.518-0.08l0.701,0.324l1.029-0.084l0.714,0.204L234.131,389.928z M448.699,392.546   l-0.354,2.032l-0.531,0.728l-0.413,0.14l-0.197-0.428l-0.393-1.72l-0.609-0.64l-0.216-0.504l0.098-0.696l-0.275-0.816l-0.426-0.776   l0.223-0.708l0.852-0.484l0.924-0.096l0.806,0.24l0.551,1.241L448.699,392.546z M240.547,338.4l-0.354-0.371l-0.256-0.653   l0.157-0.629l0.845-0.443l-0.118-0.161l-0.4-0.258l0.197-0.234l0.446-0.25l0.301-0.427l0.485-0.081l0.288-0.133l-0.138-0.544   l0.347,0.016l0.911,0.165l0.61-0.496l0.295-0.327l0.347,0.266l0.17,0.593l-0.301,0.737l-1.481,1.282l-0.996,1.112l-0.629,0.487   l-0.262,0.242L240.547,338.4z M227.806,172.563l-0.57,0.321l-0.334-0.115l0.007-0.362l0.249-1.655l0.452-1.367l0.59-0.819   l0.649,0.449l0.564,0.959l0.577,0.473l1.986,1.046l0.609,0.675l-0.334,0.626l-1.022,1.045l-0.727,0.309l-0.944,0.144l-0.799-0.366   l-0.524-0.914l-0.21-0.514L227.806,172.563z M258.746,167.405l0.832,0.556l0.315,1.223l-0.354,0.42l-0.865,0.296l-0.334,0.667   l-0.066,0.622l-0.701,0.823l-0.911,0.222l-0.623-0.461l-0.662,0.066l-0.524-0.329l-0.184-1.276l0.151-1.309l0.662-0.922   l1.422-0.758L258.746,167.405z M269.206,169.814l0.197,0.469l0.197,0.865l-0.426,0.93l-4.109,3.279l-1.868,0.234l0.02-0.51   l0.878-1.193l0.118-0.683l-0.367-0.589l1.049-1.198l0.033-1.21l-0.433-1.495l-0.596-1.038l-0.583-0.671l0.177-0.206l1.324,0.642   l1.134-0.997l0.256,0.082l-0.236,0.877l0.334,0.795l0.944,0.544l1.534,0.642L269.206,169.814z M194.658,126.786l0.885,0.116   l0.564,0.592l-0.249,1.105l-0.767,0.762l-0.465,0.223l-0.262-0.563l-0.433-1.258l0.098-0.878L194.658,126.786z M116.4,109.708   l0.642,0.332l0.112,0.639l-0.361,0.913l-0.249,1.045l-0.328,0.879l-0.596,0.328l-0.629-0.054l-0.531,0.191l-0.413,0.431   l-0.216,0.079v-0.27l0.013-0.133l-0.262-0.498l-0.642-0.838l0.243-0.801l1.357-1.083l0.865-0.905l0.406-0.324L116.4,109.708z    M149.516,487.697l-0.393-0.253l-1.573-1.448l-0.898-0.554l-0.197-0.756l0.393-1.025l0.616-0.57l0.891,0.301l0.708,0.878   l1.153,2.385l0.079,0.771l-0.249,0.435l-0.354-0.067L149.516,487.697z M268,476.018l0.701,0.297l0.668,0.84l-0.197,0.432   l-0.334-0.305l-0.288-0.048l-0.144,0.38l-0.301-0.119l-0.734-0.404l-0.754,0.02l-0.433,0.424l-0.275,0.523l-0.898,0.61   l-0.799,0.724L263,480.124l-1.54-0.067l-0.858-1.14l-0.059-1.473l0.708-1.445l1.429-0.998h1.226l1.592,1.018l0.472,0.059   l0.668-0.206l0.905,0.016L268,476.018z M273.885,477.515l0.321,0.178l0.275,0.475l-0.256,0.293l-0.354,0.055l-0.118,0.578v0.982   l-0.406,0.764l-0.793,0.218l-0.413-0.245l-0.144-0.451l-0.387-0.309l-0.413-0.091l-0.177-1.306l0.511-2.245l0.177-1.252   l-0.531-0.495l-0.157-0.448l0.668-0.642l0.039-0.333l0.688,0.008l1.363,0.701l0.19,0.951l-0.767,0.661l-0.138,0.741   L273.885,477.515z M292.996,473.19l0.773,0.701l0.485,0.547l-0.21,1.22l-0.197,0.523l-0.511,0.907l-0.944,0.511l-1.199,0.103   l-0.885-0.459l-0.727-0.657l-0.531,0.063l-0.275,0.487l-0.301-0.178l-0.328-1.497l0.498-1.01l0.131-0.927l0.315-0.737l0.57-0.547   l1.147-0.567l1.376,0.353L292.996,473.19z M269.062,471.197l0.328,0.475l0.066,0.852l-0.557,0.471l-0.282,1.109l-1.173,0.063   l-0.649,0.135l0.393,0.697l-0.406,0.341l-1.225-0.333l-0.636-0.594l-0.157-0.392l-0.341-0.123l-0.38-0.079l-0.079-0.325   l0.413-1.165l0.236-0.436l0.033-0.297l-0.157-0.234l0.066-0.214l0.295-0.147l0.19-0.21l-0.052-0.277l-0.413-0.678l0.269-0.234   l0.636,0.206l0.623,0.337l1.678,0.285l0.865,0.452L269.062,471.197z M226.908,462.451l-0.079,1.083l0.131,0.702l-0.38,0.559   l-0.78,0.099l-0.452,0.377l-0.354-0.167l-0.334-0.523l-0.275,0.012l-0.138,0.484l-0.511,0.075l-1.665-0.694l-0.564-0.809   l-0.052-0.531l0.341-0.464l0.039-0.48l0.603-0.401l2.772,0.583l1.16-0.179L226.908,462.451z M288.526,462.391l-0.341,0.353   l-0.728,0.151l-0.393-0.563l-0.164-0.75l-0.433-0.591l-0.623-0.266l-0.826,0.123l-0.963,0.341l-0.773-0.008l-0.308-0.159   l-0.308-0.202l-1.783-0.79l-0.111-0.329l0.826-0.107l0.806-0.238l0.354-0.206l0.295-0.143l0.636,0.099l0.734,0.345l0.891-0.373   l1.088-0.889l0.819-0.206l0.472,0.361l0.583,0.155l0.341-0.024l0.341-0.063l0.898,0.095l1.14,0.278l0.708,0.417l-0.157,0.714   l-0.465,0.548l-0.125,0.333l-0.079,0.678l-0.505,0.556l-0.695-0.135l-0.747,0.139L288.526,462.391z M307.67,458.844l0.275,0.238   l0.157,0.456l-0.491,0.103l-0.682-0.345l-0.8-0.179l-0.577,0.226l0.21,0.266l0.491,0.282l-0.583,0.583l-1.422,1.119l-0.826,0.373   l-0.079-0.861l0.4-0.607l0.511-0.341l-0.288-0.389l-1.763-0.365l0.236-0.389l-0.19-0.492l-0.537-0.326l-1.35-0.127l-0.524-0.179   l-0.229-0.155l0.19-0.183l0.596-0.119l0.465-0.318l0.747-0.905l0.799-0.667l-0.065-0.254l0.256,0.087l0.57,0.556l0.524,0.786   l0.301,0.881l0.629,0.278l1.101-0.349l0.806-0.091l0.374,0.329l0.275,0.445L307.67,458.844z M281.285,462.323l0.157,0.603   l0.452,1.087l-0.275,0.262l-0.393-0.055l-0.393-0.111l-0.721-0.313l-0.616-0.401l-0.341,0.067l-0.079,0.571l-0.387,0.226   l-0.708-0.325l-1.219-0.286l-1.514-0.531l-0.013-0.631l0.747-0.571l-0.197-0.718l-0.695-0.186l-0.839,0.218l-1.049-0.29   l-0.944-0.619l-0.564-0.714l-0.236-1.06l-0.079-1.207l0.066-1.231l0.321-1.231l0.636-0.941l0.865-0.417l0.465-0.107l1.416-0.143   l0.924,0.306l0.865,0.588l0.957,1.132l0.747,1.882l0.223,1.544l0.256,0.714l0.439,0.595l0.249,0.833L281.285,462.323z    M281.167,455.132l-0.393-0.028l-0.354-0.361l0.295-0.58l0.374-0.572l0.557-1.231l1.134-1.502l1.593-0.882l1.671-0.397l1.003,0.175   l0.38,0.584l0.065,0.644l-0.419,0.433l0.065,0.234l0.747,0.457l0.616,0.691l0.537,0.782l0.072,0.596l-0.59,0.099l-1.652-0.508   l-0.688,0.171l-0.406,0.6l-2.123,0.993l-0.747,1.005l-0.236,1.048l-0.433,0.306l-0.524-0.611l0.013-1.008l-0.17-0.85   L281.167,455.132z M404.553,430.055l0.203,0.219l-0.118,0.522l-0.773,0.956l-0.347,0.231L403,432.058l-0.76-0.171l-0.629,0.091   l-0.859,0.426l-0.419,0.394l-0.478,0.103l-0.079-0.366l0.282-0.625l-0.079-0.506l-0.354-0.354l-0.301-0.068l-0.354-0.271   l0.033-0.49l0.216-0.446l0.033-0.534l0.321-0.311l0.544-0.135l2.549,1.362l0.007,0.605l0.367,0.04L404.553,430.055z    M411.899,412.361l0.768-0.316l1.24-0.311l1.406-0.091l0.787,0.773l0.212,1.259l-0.427,0.787l0.293,0.471l-0.35,0.59l-0.81-0.327   l-0.32,0.195l0.023,0.247l0.662,0.13l0.663,0.548l-0.325,0.591l-0.822,1.033l-1.333,0.015l-0.584-0.747l-0.315-0.767l-0.674-0.026   l0.158-0.643l-0.222-0.643l-1.039-0.154l-0.371-0.299l0.771-0.613l0.146-0.747l-0.779-0.616l-1.451-0.502l-0.92,0.29l-0.546-0.028   l-0.173-0.645l0.648-0.713l0.945-0.24l1.241,0.505l0.948,0.726L411.899,412.361z M400.149,410.787l1.206,1.349l0.452,0.762   l-0.321,0.527h-0.865l-0.406,0.216l0.059,0.694l-0.242,0.299l-0.76-0.216l-0.472-0.231l-0.885-0.619l-0.511-0.766l0.098-0.531   l0.55-0.902l1.081-0.818L400.149,410.787z M247.199,408.048l1.527,0.539l0.164,2.08l-1.579,1.461l-0.865-0.327l0.511-0.579   l0.256-0.563l-0.21-0.391l-2.248-1.238l-0.334-0.18l-2.379,0.387l-1.055,0.519l-1.193,0.192l-0.957-0.327l-0.492-0.639l0.433-0.515   l1.278-0.084l1.638-0.599l0.288-0.367l0.262-0.272l0.079-0.415l1.009-0.311l0.36-0.611l0.039-0.719l-0.629-0.863l-0.269-0.971   l0.878-0.456l1.396,0.336l1.435,0.727l1.022,1.031l-0.105,0.579l-0.701,0.092l-1.226,0.815l-0.151,0.455l0.046,0.579l0.111,0.459   l0.518,0.164L247.199,408.048z M238.626,390.068l0.151-0.48l-0.55-0.168l-2.064-0.348l-0.459-0.4l-0.708-0.068l-0.347-0.072   l-0.347-0.316l-0.459-0.232l-0.432-0.533l-0.865-2.022l0.492-0.793l1.022-0.344l0.944,0.348l0.754,0.505l0.682-0.236l0.773-0.409   l0.498,0.248l0.17,0.432l0.393-0.016l0.498-0.144l0.203,0.641l-0.557,0.565l-0.74,0.048l-0.315,0.364v0.525l0.885,0.913l0.747,0.34   l0.839,0.056l0.478,0.681l0.242,0.873l0.406,0.552l0.144,0.752l-0.314,0.952l-0.315,0.256l-0.21-0.308l-0.937-0.216l-0.393-0.504   l-0.321-0.58L238.626,390.068z M691.765,170.946l0.119,0.091l-0.066,0.152l-0.125-0.08L691.765,170.946z"},{"name":"Mongolia","path":"M695.871,206.121l-4.862,10.904l-0.349,0.838l-4.83,10.99l-4.83,10.921l-0.097,0.622l0.323,1.212l0.009,0.626   l-0.456,1.128l-5.24,8.255l-0.212,0.574l-0.107,0.723v0.694l0.523,6.893l-0.214,1.093l-0.67,0.63l-5.392,2.585l-0.511,0.604   l0.007,0.329l0.72,4.443l0.369,2.054l0.319,0.805l0.556,0.766l5.815,6.227l1.422,0.74l1.343-0.859l2.563-3.349l2.237-1.461   l1.433-0.456l4.255,0.951l1.628-0.042l5.796-1.295l1.619-0.074l0.718,0.143l2.75,1.182l1.714,0.623l0.513,0.319l5.691,5.338   l1.006,0.109l0.899-1.189l0.841-1.532l0.837-0.915l1.25-1.001l4.933-6.554l0.58-0.534l1.11-0.402l3.625,0.238l0.561-0.072   l1.538-0.673l1.346-0.273l1.379-0.024l0.547,0.169l1.105,0.703l0.592,0.163l4.434,0.298l1.598,0.797l1.449,1.771l2.486,4.15   l1.245,1.282l4.72,2.087l2.001,0.74l0.549,0.407l0.31,0.511l0.168,0.644l0.283,2.445l0.128,0.582l0.271,0.389l0.544,0.336   l2.15,0.842l0.92,0.291l0.439,0.282l0.176,0.476l-0.119,0.336l-0.547,0.786l-0.159,0.486l0.891,0.266l3.573,3.322l0.338,0.409   l0.304,0.61l0.209,0.56l0.278,0.402l1.432,0.422l0.968,0.754l1.622,1.914l0.666,1.044l0.576,1.156l0.151,0.67l0.027,1.995   l0.075,0.393l0.053,0.193l0.065,0.173l0.326,0.495l0.762,0.789l0.328,0.43l0.119,0.289l0.065,0.266l0.088,0.252l0.202,0.251   l0.245,0.057l0.374,0.03l0.315,0.089l0.081,0.233l-0.138,0.348l-0.126,0.247l-0.081,0.271l-0.005,0.414l0.043,0.172l0.086,0.134   l0.111,0.1l0.119,0.068l0.14,0.137l-0.018,0.17l-0.074,0.205l-0.021,0.231l0.015,0.75l-0.294,1.074l-0.064,0.573l0.094,0.293   l0.372,0.6l0.084,0.271l-0.065,0.315l-0.143,0.244l-0.176,0.23l-0.407,0.722l-0.419,0.455l-0.46,0.292l-0.395-0.022l-0.483-0.242   l-0.323,0.107l-0.281,0.404l-0.359,0.642l-0.326,0.373l-0.474,0.353l-0.503,0.262l-0.406,0.109l-0.491-0.152l-0.812-0.675   l-0.49-0.112l-0.605,0.017l-1.716-0.296l-1.111,0.017l-2.062,0.484l-1.066,0.046l-5.855-1.651l-0.585-0.261l-0.526-0.489   l-0.67-1.383l-0.407-0.534l-0.465,0.111l-0.574,0.727L747,313.766l-0.38-0.139l-0.251-0.463l-0.102-0.559l-0.178-0.482l-0.482-0.24   l-0.696,0.245l-0.553,0.685l-0.883,1.564l-0.776,0.483l-0.815-0.225l-0.856-0.478l-0.875-0.27l-0.327,0.092l-0.631,0.446   l-0.363,0.133l-1.821,0.003l-0.865-0.184l-1.472-0.765l-0.82-0.275l-0.799-0.09l-0.732,0.064l-0.706,0.253l-0.742,0.485   l-0.851,0.752l-0.311,0.132l-1.232,0.05l-0.416,0.161l-1.802,1.383l-0.754,0.119l-1.127,0.275l-0.532,0.254l-0.513,0.376   l-0.437,0.539l-0.611,1.254l-0.361,0.512l-0.447,0.241l-2.332,0.268l-0.525-0.126l-1.108-0.656l-0.406-0.498l-0.587-1.387   l-0.319-0.387l-0.273,0.065l-1.063,0.774l-0.19,0.041l-0.231-0.061l-0.435-0.187l-1.819,0.445l0.376,1.056l0.055,0.507   l-0.162,0.462l-0.834,1.173l-0.269,0.911l-0.102,2.299l-0.359,0.741l-0.823,0.238l-7.909-0.543l-2.903-0.665l-0.392-0.012   l-0.231,0.128l-0.454,0.567l-1.445,1.24l-0.338,0.149l-1.429,0.192l-0.958,0.305l-0.497,0.376l-0.314,0.238l-0.461,1.051   l-0.2,0.602l-0.333,0.479l-3.863,4.026l-3.312,6.537l-0.14,0.902l0.319,1.028l0.487,0.754l0.219,0.781l-0.49,1.104l-1.391,2   l-0.597,0.477l-1.129,0.596l-0.371,0.104l-0.354,0.002l-1.182-0.172l-0.226,0.099l-0.445,0.524l-4.957,4.257l-1.724,2.008   l-0.575,0.481l-0.68,0.325l-3.792,1.035l-3.121,0.593l-4.852,0.008l-4.312,0.677l-0.773-0.13l-3.863-1.549l-0.782-0.069   l-0.782,0.142l-3.119,1.222l-0.228,0.171l-0.1,0.306l-0.178,1.487l-0.216,0.729l-0.673,1.439l-1.246,1.885l-4.764,4.542   l-1.108,0.717l-0.328,0.328l-0.233,0.355l-0.433,0.844l-0.716,1.023l-0.782,0.689l-0.88,0.432l-1.01,0.259l-1.365,0.126   l-0.563,0.233l-1.189,1.31l-2.346,1.686l-1.453,1.548l-0.861,0.71l-0.697,0.213l-1.664-0.181l-0.352-0.137l-0.649-0.542   l-0.361-0.144l-8.473-0.767l-2.023-0.866l-1.006-0.005l-5.168-1.428l-3.088-1.414l-0.649-0.487l-0.495-0.653l-0.934-1.604   l-1.899-1.924l-0.656-0.444l-0.763-0.153l-6.257,0.109l-2.211-0.655l-0.618,0.011l-0.26,0.004l-0.347,0.081l-0.238,0.222   l-0.216,0.285l-0.271,0.262l-0.471,0.22l-0.991,0.256l-0.456,0.22l-1.307,1.007l-0.594,0.627l-0.509,0.748l-4.305,8.858   l-0.238,0.807l-0.021,0.518l0.1,1.102l-0.014,0.544l-0.128,0.576l-0.186,0.414l-0.487,0.776l-0.58,1.296l-0.242,0.358l-0.055,0.065   l-0.552,0.561l-0.523,0.898l-0.409,1.017l-0.214,0.937l-0.014,1.312l0.326,0.66l1.441,0.875l0.399,0.521l0.174,0.584l0.128,1.243   l0.361,1.192l0.561,1.021l2.085,2.909l0.775,0.787l2.589,1.764l0.706,0.7l0.63,0.815l2.111,3.786l0.316,1.076l0.083,0.937   l-0.064,1.054l-0.271,0.867l-0.528,0.371l-0.395,0.076l-1.091,0.499l-1.683-0.076l-0.433,0.194l-3.602,4.44l-0.68,0.661   l-0.751,0.374l-2.446,0.215l-0.628,0.267l-1.445,1.183l-5.577,2.264l-2.822,1.615l-0.913,0.88l-3.145,4.383l-2.689,2.875   l-0.331,0.638l-0.568,1.561l-0.756,1.355l-0.953,1.072l-2.147,1.747l-0.552,0.551l-0.566,1.633l-0.416,0.521l-6.138,2.693   l-0.787,0.499l-0.288,0.276l-0.205,0.244l-0.216,0.204l-0.338,0.162l-0.402,0.075l-1.274-0.016l-1.716,0.239l-5.644,2.494   l-3.428,2.548l-0.183,0.081l-0.126-0.006l-0.112,0.05l-0.143,0.253l-0.086,0.122l-0.114,0.062l-3.602,0.275l-1.11,0.379   l-0.618,0.074l-5.956-0.735l-0.763,0.062l-2.268,1.205l-0.786,0.275l-0.729,0.052l-5.99-1.145l-4.984,0.08l-1.955-0.546   l-1.321-0.132l-2.937,0.474l-9.828,1.584l-9.828,1.582l-9.828,1.581l-10.342,4.552l-10.342,4.541l-9.08,4.734l-1.636,0.889   l-1.025,0.793l-0.314,0.146l-0.428,0.136l-1.184,0.655l-1.293,0.217l-0.399,0.153l-4.28,4.537l-0.943,0.308l-0.883-1.116l-0.5-0.49   l-0.491-0.198l-6.696-0.021l-2.216-0.342l-0.159-0.284l0.064-6.317l-8.968,1.776l-8.968,1.774l-0.68-0.113l-6.747-3.616   l-6.747-3.623l-0.009-0.002l-0.711-0.337l-7.969-1.859l-7.969-1.861l-7.969-1.863l-1.379-0.723l-2.018-2.179l-3.476-5.702   l-2.249-1.693l-2.591-0.687l-2.627-0.231l-4.417,0.469l-9.214-1.527l-9.214-1.528l-9.214-1.529l-1.045,0.007l-8.043,2.465   l-3.391,1.038l-9.341-1.241l-9.342-1.241l-9.341-1.242l-9.341-1.243l-7.553-1.005l-7.553-1.006l-0.06,0.006l-8.235,0.86   l-8.235,0.86l-2.194,0.363l-0.297-0.074l-0.197-0.049l-0.164-0.514l-0.309-3.937l-0.15-0.729l-0.276-0.639l-0.561-0.729   l-8.874-8.857l-0.785-1.028l-0.447-1.183l-0.219-1.326l-0.093-1.456l-0.197-1.152l-3.228-7.031l-2.375-7.609l-1.241-2.816   l-0.575-0.685l-0.813-0.24l-1.201-0.064l-2.189-0.577l-0.197-0.334l-0.005-0.756l0.219-1.841l-0.157-1.608l0.029-0.315l0.102-0.323   l0.309-0.617l0.159-0.879l0.281-0.542l0.68-0.929l0.195-0.634l-0.421-0.213l-7.881,1.033l-0.989-0.143l-2.025-1.119l-4.253-1.336   l-0.521-0.248l-0.328-0.422l-0.262-0.552l-0.354-0.484l-1.59-1.523l-2.938-1.844l-0.694-0.36l-1.467,0.005l-0.642-0.252   l-0.38-0.513l-0.609-1.399l-0.414-0.587l-1.897-2.093l-0.302-0.211l-0.38-0.162l-0.376-0.044l-1.041,0.503l-1.039,0.012   l-1.921-0.281l-1.096-0.419l-1.217-1.336l-3.692-5.198l-0.592-0.535l-3.749-1.956l-2.408-0.124l-0.475-0.178l-0.887-0.58   l-0.468-0.21l-0.547-0.034l-1.11,0.188l-0.57-0.047l-1.804-0.849l-0.611-0.072l-1.454,0.152l-0.541,0.056l-0.445-0.136   l-0.442-0.054l-0.447,0.03l-0.449,0.119l-0.687-0.037l-0.663-0.284l-1.27-0.759l-0.309-0.04l-0.768,0.17l-0.352,0.023l-1.063-0.156   l-2.627,0.728l-1.529,0.084l-2.23,0.506l-0.371-0.015l-1.039-0.434l-0.399-0.061l-1.129,0.178l-0.376-0.007l-1.051-0.38h-0.402   l-1.127,0.306l-0.58-0.143l-1.961-1.421l-0.754-0.348l-0.751-0.194l-0.773-0.046l-0.789,0.093l-1.289,0.254l-3.958-0.224   l-0.513,0.056l-0.944,0.311l-0.476,0.054l-2.277-0.574l-0.269,0.059l-0.207,0.115l-0.214,0.024l-0.281-0.207l-1.512-1.955   l-0.404-0.283l-0.497,0.015l-0.395,0.286l-0.371,0.413l-0.392,0.325l-0.456,0.017l-2.244-0.521l-1.491-0.787l-0.335-0.317   l-0.506-0.772l-0.292-0.348l-0.775-0.418l-1.025-0.224l-1.046-0.045l-0.832,0.133l-1.602,0.943l-0.742-0.007l-0.359-0.943   l0.062-0.542l0.128-0.356l0.017-0.36l-0.281-0.557l-0.397-0.307l-0.934-0.419l-0.128-0.375l-0.012-1.092l-0.285-0.903l-0.357-0.861   l-0.214-0.962l-0.352-0.681l-1.51-1.113l-0.487-0.573l1.046-7.789l0.326-0.731l4.795-6.534l1.286-1.233l0.254-0.192l0.373-0.951   l0.069-1.533l-0.219-1.513l-0.478-0.89l-0.606-0.921l-1.141-3.77l-0.069-0.678l0.226-0.508l0.685-0.885l0.906-2.423l0.252-0.624   l0.352-1.328l0.292-0.606l0.494-1.199l0.223-0.736l0.05-0.513l-0.345-0.452l-0.487-0.181l-0.354-0.311l0.05-0.858l0.314-1.43   l0.059-0.902l0.029-0.448l-0.247-1.249l-0.682-1.132l-0.823-0.83l-0.323-0.48l-0.124-0.689l0.064-0.268l0.269-0.513l0.048-0.256   l-0.086-0.349l-0.159-0.197l-0.188-0.16l-0.174-0.235l-0.226-0.616l-0.152-0.589l-0.197-0.558l-0.352-0.526l-0.468-0.434   l-0.49-0.307l-0.521-0.153l-0.544,0.017l-0.908-0.186l-0.697-0.77l-5.599-9.953l-0.055-0.252l0.05-0.244l0.155-0.23l0.238-0.496   l0.102-0.575l-0.064-0.555l-0.276-0.438l-0.623-0.44l-0.147-0.901l0.043-1.097l-0.055-1.03l-0.321-0.46l-0.751-0.617l-0.299-0.467   l-0.68-1.702l-0.312-0.494l-0.254-0.691l0.231-0.476l0.278-0.369l-0.109-0.371l-0.49-0.393l-0.492-0.285l-2.125-0.589l-1.065-0.488   l-1-0.688l-0.853-0.888l-0.281-0.47l-0.273-0.673l-0.152-0.726l0.088-0.624l0.193-0.744l-0.103-0.624l-0.351-0.376l-0.969-0.021   l-0.905-0.284l-0.379,0.188l-0.176,0.423l-0.032,0.456l-0.074,0.455l-0.301,0.417l-0.743,0.267l-2.427,0.199l-0.742-0.199   l-0.254-0.406l-0.209-0.98l-0.178-0.46l-0.371-0.373l-0.811-0.173l-0.385-0.197l-0.262-0.444l-0.178-0.577l-0.202-0.493   l-0.321-0.193l-0.388-0.103l-0.307-0.325l-0.175-0.481l0.013-0.579l-0.1-0.948l-0.692-0.363l-0.877,0.035l-0.651,0.242   l-1.148,0.045l-0.373-0.051l-0.92-0.517l-0.344-0.021l-0.46,0.22l-1.117,0.921l-0.393,0.428l-0.566,0.444l-0.581,0.112   l-1.186-0.241l-2.127-0.009l-0.662-0.297l-0.002-0.004h-0.006l-2.604-3.577l-0.357-0.31l-0.634-0.171l-1.33,0.199l-0.599-0.028   l-0.692-0.503l-1.521-1.579l-0.656-0.23l-0.58,0.064l-0.452-0.161l-0.91-0.753l-0.355-0.494l-0.168-0.612l-0.107-0.673   l-0.175-0.659l-0.057-0.685l0.327-1.288l-0.181-0.611l-1.436-1.716l-0.542-0.263l-0.46,0.07l-0.448,0.153l-0.528-0.013   l-0.765-0.505l-1.18-1.571l-0.626-0.521l-1.593-0.839l-0.409-0.063l-0.79,0.078l-0.403-0.034l-0.407-0.195l-0.749-0.595   l-0.632-0.333l-0.378-0.442l-0.214-0.142l-0.242-0.011l-0.544,0.124l-0.269-0.006l-0.773-0.435l-0.718-0.795l-0.207-0.845   l0.751-0.592l0.326-0.266l0.188-0.383l0.128-0.377l0.156-0.258l1.032-0.697l0.203-0.32l-0.102-0.888l-0.59-0.733l-1.341-0.937   l-0.53-0.179l-1.032,0.079l-1.516-0.716l-0.474-0.312l-0.349-0.429l-0.086-0.314l-0.038-0.724l-0.102-0.331l-0.197-0.238   l-0.247-0.161l-0.506-0.213l-0.388-0.423L30,239.194l0.182-0.646l0.305-0.532l1.816-0.894l0.845-0.775l-0.008-1.264l-0.352-0.404   l-0.44-0.169l-0.366-0.292l-0.137-0.767l0.118-0.745l0.197-0.497l0.136-0.517l-0.071-0.814l-0.331-1.059l-0.04-0.416l0.476,0.205   l0.418,0.036l2.337-0.349l0.43-0.244l0.402-0.56l0.846-0.839l1.812-1.123l0.815-0.821l0.102-0.911l-0.442-1.036l-0.314-1.082   l0.466-1.042l0.226-0.393l0.371-1.164l0.299-0.486l0.58-0.371l4.113-0.759l0.533-0.002l1.132,0.379l0.559,0.053l1.457-0.102   l0.439-0.161l0.964-0.631l0.332-0.137l0.037-0.005l0.409,0.06L51,218.189l0.598,0.842l0.483,0.455l0.547,0.143l3.478,0.245   l0.108-0.205l-0.471-1.136l0.03-1.332l0.059-0.562l0.218-0.381l0.477-0.126l0.447,0.203l0.247,0.452l0.181,0.558l0.245,0.516   l0.229,0.355l0.164,0.388l0.183,0.344l0.291,0.223l0.891-0.166l3.373-1.493l0.794-0.666l0.468-0.848l-0.323-0.892l-0.537-0.988   l0.21-0.835l0.669-0.444l0.823,0.18l1.346,1.288l0.661,0.438l0.748-0.031l0.596-0.614l0.478-0.895l0.529-0.688l0.776,0.006   l1.034-0.701l2.208-0.792l1.518-0.814l0.462-0.414l0.235-0.541l-0.256-0.64l-0.41-0.285l-1.029-0.51l-0.288-0.447l0.021-0.313   l0.335-0.403l0.037-0.383l-0.106-0.212l-0.411-0.365l-0.132-0.245l-0.001-0.45l0.133-1.385l0.064-0.334l0.215-0.187l0.793-0.691   l1.22-0.445l3.352-0.107l1.236-0.29l1.133-0.58l0.617-0.919l0.02-0.39l0.037-0.751l0.143-0.935l0.359-0.717l0.706-0.481   l3.018-0.656l0.932-0.428l2.781-2.163l0.461-0.184l0.944-0.102l0.461-0.154l1.155-0.995l1.006-0.136l1.978,0.446l1.001-0.024   l0.414-0.134l0.402-0.21l0.364-0.321l0.297-0.461l0.109-0.506l0.005-1.034l0.207-0.4l0.825-0.499l1.783-0.544l0.854-0.669   l1.645-2.096l0.611-0.593l0.849-0.41l2.708-0.032l0.773-0.239l2.225-1.221l0.861,0.007l1.947,0.413l0.773-0.232l0.385-0.603   l0.174-0.742l0.238-0.742l0.568-0.611l2.315-0.941l0.62-0.638l1.16-2.191l0.609-0.598l1.614-1l1.712-0.634l1.743-0.206l3.744,0.76   l2.211-0.101l1.93-1.122l1.189-2.591l0.059-0.677l0.01-0.645l0.097-0.574l0.311-0.456l0.466-0.283l0.585-0.173l0.544,0.102   l0.352,0.546l0.44,1.415l0.559,0.925l0.727,0.575l0.956,0.359l0.877,0.641l1.317,2.011l0.872,0.493l0.509-0.056l0.537-0.229   l0.509-0.372l0.411-0.475l0.261-0.589l0.157-1.208l0.157-0.584l0.825-0.628l1.417-0.273l1.457,0.111l0.934,0.53l0.283,1.298   l-0.014,1.737l0.426,1.437l0.254,0.724l0.195,0.418l0.264,0.255l0.454,0.232l1.434,0.401l0.787-0.023l1.132-0.013l5.363-0.346   l2.641,0.893l8.065,0.353l8.065,0.353l0.485,0.279l0.338,0.462l0.112,0.563l0.036,1.322l0.92,2.3l0.178,0.89l0.109,3.726   l0.278,1.865l0.233,0.92l0.323,0.751l0.535,0.616l1.914,0.837l0.385,0.358l0.157,0.458l0.086,0.519l0.157,0.545l0.271,0.434   l0.991,0.96l0.24,0.446l0.411,1.029l0.257,0.361l0.485,0.163l0.609-0.094l2.194-0.807l4.03-0.198l0.739,0.189l0.618,0.568   l0.54,1.145l0.404,0.821l0.155,0.229l1.105,0.639l6.402-0.078l1.036,0.316l1.044,0.873l0.38,0.421l0.357,0.305l0.078,0.067   l0.461,0.196l0.459-0.103l0.38-0.397l0.599-0.96l0.478-0.325l2.22-0.333l0.941-0.447l0.863-1.237l0.661-0.668l0.925-0.302   l0.901,0.185l0.578,0.79v0.006l0.283,1l0.418,0.722l0.544,0.218l0.656-0.499l0.25-0.447l0.29-0.392l0.314-0.333l0.338-0.272   l0.33-0.183l0.345-0.031l0.347,0.074l0.342,0.137l0.002,0.002l0.005,0.002l0.002,0.002l3.433,1.558l1.048,0.82l0.97,1.013   l0.528,0.332l0.611,0.09l0.604-0.203l1.143-0.794l0.594-0.275l0.658-0.017l0.473,0.227l0.354,0.496l0.316,0.786l0.347,0.645   l0.392,0.151l0.442-0.192l0.497-0.374l1.248-1.297l0.499-0.144l6.148,0.967l0.844,0.764l0.837,1.5l0.345,0.374l0.644,0.245   l0.342,0.13l0.454,0.304l0.209,0.635l0.551,0.911l1.198,0.576l1.317,0.283l0.906,0.02l0.958-0.307l1.091-0.544l1.928-1.397   l1.567-1.214l0.711-0.883l0.176-1.086l-0.219-0.671l-0.197-0.436l0.078-0.28l1.74-0.473l2.102-1.012l0.523-0.113l0.487,0.19   l0.763,0.894l0.442,0.281l0.402-0.242l0.625-0.853l0.727-0.684l3.262-1.788l1.324-1.462l3.609-7.899l0.157-0.562l0.069-0.705   l-0.05-0.611l-0.19-1.136l0.102-1.199l0.735-2.146l0.055-1.18l0.002-0.002v-0.004l-0.166-0.929l-0.416-0.69l-0.554-0.466   l-0.592-0.256l-1.431-0.254l-0.63-0.228l-1.745-1.374l-0.497-0.51l-0.349-0.691l-1.122-2.945l-0.701-1.865l0.078-0.782l0.984-1.443   l-0.128-0.412l-0.727-0.58l-0.328-0.422l-0.209-0.445l-0.235-0.394l-1.091-0.718l-0.835-0.862l-0.625-1.087l-0.05-1.12l1.467-3.135   l0.357-1.22l0.209-1.237l0.128-0.535l0.661-1.711l0.062-0.565l-0.083-0.774l-0.271-1.265l-0.014-0.542l0.164-0.657l0.252-0.49   l0.654-0.872l0.283-0.484l1.06-2.455l0.44-0.816l0.257-0.337l0.364-0.105l1.027-0.571l0.609-0.043l1.9,0.394l0.219-0.653   l0.09-0.874l-0.219-1.608l0.09-0.866l0.24-0.669l0.568-1.249l0.233-0.728l1.35-2.355l2.135-1.036l4.455-1.28l0.751-0.626   l0.72-0.818l0.654-0.954l1.507-3.168l0.347-1.769l0.195-0.569l0.882-1.216l0.183-0.526l0.055-0.635l0.017-1.266l0.138-0.62   l0.708-0.819l0.949-0.039l0.23,0.183l0.571,0.454l0.276,1.205l0.466,0.827l0.699,0.478l3.994,1.456l0.784,0.461l0.533,0.61   l0.43,0.688l0.475,0.595l0.656,0.348l5.358,1.595l2.817,0.104l0.698,0.301l1.709,1.6l1.488,1.796l1.593,1.482l2.025,0.659   l2.123-0.257l2.577,0.462l6.914-0.025l1.385,0.82l1.56,0.474l9.904,5.135l1.094,0.947l0.96,0.245l0.965,0.011l0.939,0.212   l0.877,0.835l0.822,1.071l0.799,0.485l0.865-0.004l2.168-0.824l1.02-0.109l1,0.212l1.699,0.738l1.217-0.087l0.623,0.069   l0.426,0.212l1.222,0.939l0.609,0.214l1.842-0.129l0.433,0.149l0.803,0.71l0.428,0.242l1.771,0.133l0.54,0.324l0.382,0.375   l2.13,1.501l0.219,0.614l-0.324,0.764l-1.012,1.696l-0.034,0.346l0.135,0.364l0.183,0.672l0.055,0.633l-0.029,0.609l-0.152,1.245   l0.1,1.363l0.434,1.467l0.612,1.353l0.63,1.021l0.237,0.489l0.032,0.525l-0.126,0.517l-0.238,0.458l0.557,0.945l-0.175,1.005   l-0.44,1.021l-0.223,0.998l0.316,1.11l0.664,0.731l1.423,1.111l0.503,1.069l-0.21,0.824l-0.539,0.769l-0.481,0.898l-0.1,1.061   l0.25,1.099l0.472,0.968l0.568,0.664l1.036,0.43l2.281,0.316l0.949,0.768l1.69,3.195l0.718,0.576l0.04,0.011l3.291,0.873   l2.865,2.157l0.926,0.432l1.075,0.264l3.586-0.486l1.649,0.437l0.885,1.893l0.297,1.057l0.544,0.626l0.686,0.256l2.312-0.247   l0.727,0.169l0.811,0.381l1.379,1.013l1.552,0.727l1.533,0.083l2.696-1.972l1.384,0.052l2.957,1.292l1.507,0.271l1.89-0.254   l1.758-0.781l1.135-1.314l0.495-0.801l1.205-0.914l0.647-0.632l0.638-0.623l0.657-0.409l1.571-0.458l2.365,0.136l0.77-0.169   l0.506-0.344l0.907-0.885l0.579-0.177l2.128,0.02l0.666-0.205l1.392-0.923l0.519-0.212l0.751-0.125l2.665,0.352l0.647-0.06   l0.634-0.177l0.588-0.289l2.516-2.164l0.868-0.527l1.154-0.14l7.147,1.969l3.218-0.252l0.628,0.164l1.108,0.485l1.139,0.257   l1.239,0.007l0.617,0.138l1.243,1.023l0.1,0.239v0.333l0.027,0.343l0.086,0.285l0.178,0.164l1.826,0.233l0.59,0.27l0.926,0.717   l0.485,0.264l0.519,0.076l4.484-1.357l2.494-0.283l2.491,0.317l2.062,0.706l0.969,0.573l3.408,2.963l0.856,0.459l0.208,0.332   l0.352,1.34l0.186,0.345l0.463,0.519l0.17,0.249l0.13,0.378l0.212,0.847l0.2,0.378l0.303,0.282l0.7,0.339l0.32,0.226l1.147,1.132   l0.637,0.459l0.752,0.322l0.689-0.067l0.587-0.311l0.562-0.087l1.362,1.213l8.401,0.15l0.352,0.164l0.136,0.063l0.838,0.621   l0.483,0.155l0.719-0.096l0.271,0.018l1.086,0.377l1.111,0.072l0.229,0.362l-0.089,0.925l-0.189,0.609l-0.204,0.492l-0.126,0.542   l0.053,0.754l0.406,1.704l0.132,1.316l-0.021,0.454l-0.126,0.432l-0.518,1.343l0.014,0.456l0.277,0.242l0.539,0.075l0.918-0.074   l0.3,0.264l-0.19,0.786l-0.052,0.561l0.24,0.552l0.39,0.458l1.691,1.241l0.466,0.255l1.92,0.245l0.609,0.275l0.326,0.357   l0.207,0.452l0.178,0.489l0.227,0.472l1.328,1.633l3.193,2.825l1.481,1.023l0.734,0.06l0.885,0.073l3.281-0.618l2.482,0.022   l1.645-0.292l2.357,0.739l0.577-0.042l2.359-0.62l2.9,0.286l0.58,0.212l0.561,0.325l1.258,0.496l0.466,0.215l0.908-0.097   l0.261,0.193l0.083,0.211l0.095,0.629l0.105,0.264l0.402,0.224l0.561,0.242l4.883-0.372l1.298,0.532l0.754,0.832l0.333,0.031   l1.861,0.464l6.172,1.821l1.003-0.12l0.996-0.411l0.944-0.662l0.83-0.871l0.359-0.493l0.233-0.251l0.254,0.06l1.174,1.318   l0.414,0.284l1.31,0.36l2.194,1.372l0.951,0.302l0.991,0.078l0.996-0.111l2.522-0.87l2.865-1.582l3.98-2.966l3.105-1.103   l0.418-0.281l0.673-0.867l0.402-0.332l0.559-0.102l0.514,0.19l1.025,0.56l0.573,0.117l0.566-0.009l0.561-0.131l2.598-1.391   l1.025-0.351l8.492-0.548l2.213-0.993l7.035-3.16l0.944-0.176l2.553,0.277l2.004,1.076l0.692,0.165l0.742-0.053l0.998-0.304   l2.092-1.073l1.336-1.237l0.487-0.339l0.516-0.246l0.53-0.147l1.17-0.051l0.395-0.262l0.247-0.772l0.059-1.265l0.069-0.556   l0.238-0.654l1.593-3.202l0.597-0.876l0.685-0.715l4.671-3.582l0.616-0.846l0.373-0.401l1.193-0.85l0.402-0.422l1.191-0.971   l3.97-2.101l0.48-0.109l0.982,0.171l0.483-0.002l0.299-0.135l2.836-2.862l0.464-0.293l0.963-0.297l0.464-0.247l1.448-1.458   l1.883-1.145l1.983-0.744l1.074,0.164l2.116,1.097l1.106,0.281l4.293-0.625l2.163,0.547l5.603,3.301l0.411,0.412l0.295,0.465   l0.497,1.042l0.316,0.478l3.376,3.789l3.647,2.726l0.44,0.155l1.434-0.013l0.525,0.155l0.818,0.011l1.602-0.245l2.42,0.57   l0.756-0.004l0.796-0.256l6.963-4.056l1.88-0.572l1.892,0.02l1.907,0.747l6.324,2.546l0.96,0.873l0.832,1.195L695.871,206.121z"},{"name":"Nepal","path":"M765.377,355.574l2.255,0.531l1.217,0.457l0.747,0.608l0.179,1.209l-1.09,1.897l0.461,4.217l-0.94,2.604 l-1.315,2.63l-2.18,8.59l-5.648,9.659l-2.312,5.171l-0.113,1.094l0.113,0.983l0.432,2.002l0.244,0.45l0.818,0.858l0.169,0.439 l-0.211,0.879l-0.409,0.582l-0.474,0.519l-0.343,0.683l-0.78,2.339l-0.226,1.143l0.094,1.418l0.395,1.111l1.128,1.994l0.235,1.158 l-0.554,2.507l-2.215,5.004l-1.393,3.147l-0.352,7.157l-1.33,2.978l-0.15,0.86l0.141,0.823l0.432,0.776l1.438,1.393l1.654,3.662 l1.626,1.05l1.405,0.654l1.193,1.113l1.903,2.679l1.814,3.311l1.363,3.574l0.785,1.576l2.034,3.103l0.78,1.591l0.357,1.754 l0.338,4.386l0.799,4.037l0.113,1.926l-0.141,1.931l-0.376,2.025l-1.522,4.47l-4.088,8.062l-1.323,4.355l-0.665,2.189l-0.061,1.034 l0.282,1.271l-0.733,4.157l-2.716,4.901l-3.425,3.635l-2.833,0.336l-1.297-1.259l-2.932-1.773l-1.292-1.201l-0.569-0.971 l-0.592-1.773l-0.427-0.829l-0.23,0.053l-2.19-1.805l-0.08-0.399l-1.612,0.404l-2.772,2.351l-1.56,0.016l-1.682-0.876l-1.541-0.556 l-1.165,0.462l-0.611,2.151l-0.658,1.548l-1.334,0.682l-1.513-0.194l-1.212-1.076l-1.489-0.808l-1.959,0.682l-0.991,0.763 l-2.251,1.734l-3.364,1.51l-3.176-0.881l-6.522-3.725l-2.791-0.53l-3.016,0.168l-2.932,0.845l-2.528,1.516l-1.043,1.458 l-1.701,3.655l-1.109,0.97l-1.231-0.225l-3.825-1.72l-1.193-0.739l-0.818-1.327l-0.625-1.568l-0.94-0.949l-2.786,0.866 l-4.858,0.546l-2.612-1.07l-2.091-2.775l-1.508-3.406l-0.911-2.971h-0.019l-1.043-5.02l-0.052-1.718l-0.282-1.933l-1.038,0.042 l-1.316,1.098l-2.749,2.878l-1.161,0.882l-3.391,1.187l-2.548,0.892l-2.833,1.685l-0.935,2.284l-1.757,2.01l-2.227,1.475 l-2.312,0.672l-0.836-0.157l-3.214-1.265l-1.245,0.184l-0.681,1.008l-0.601,1.201l-0.954,0.75l-1.673-0.372l-6.352-3.867 l-6.132-2.813l-1.814-1.102h-0.019l-1.222-1.444l-1.245-1.124l-1.428-0.782l-1.767-0.42l-2.786-1.129l-5.563-3.026l-2.725-0.993 h-0.803l-1.969,0.257l-0.653-0.089l-0.634-0.714l-0.038-1.44l-0.658-0.699l-1.541-0.305l-1.94,0.3l-3.449,1.188l-2.025,1.303 l-0.639,0.194l-0.954-0.179l-0.554-0.426l-0.437-0.478l-0.606-0.336l-1.377-0.41l-0.573-0.072l-0.142-0.018l-2.067,0.126 l-0.564-0.231l-0.47-0.426l-6.273-3.937l-2.758-0.915l-3.242,1.025l-2.143,0.237l-1.588,0.93l-6.212,5.386l-1.964,1.161 l-1.475,0.242l-0.63-0.567l-0.169-0.793l-0.019-0.893l-0.174-0.856l-0.719-0.641l-0.879,0.237l-0.916,0.373l-0.818-0.221 l-4.905-3.905l-1.287-1.588l-0.968-3.586l0.672-7.533l-0.709-3.479l-1.278-1.553l-7.128-3.991l-0.982-0.342l-7.194,2.849 l-3.98,2.159l-3.28,1.784l-1.645,0.516l-1.668-0.505l-1.574-0.084l-1.513,1.368l-1.263,1.537l-0.194,0.236l-1.471,1.1l-3.153,0.963 l-1.372,0.037l-8.396-2.231l-2.659-2.789l-0.014-3.516l-0.319-3.08l-3.561-1.496l-2.058,0.221l-5.112,2.017l-2.312-0.211 l-0.155-1.369l0.108-1.548l-1.565-0.795l-1.151-0.158l-1.128-0.316l-2.096-1.096l-0.771-1.844l-0.517-2.129l-1.32-1.945 l-2.044-1.175l-4.529-1.524l-2.133-1.297l-0.014-0.01l-0.968-1.598l-1.414-0.322l-1.494,0.538l-1.231,0.949l-1.024,0.016 l-10.952-2.996l-1.179-0.828l-0.526-2.195l0.808-2.332l1.287-2.338l0.897-2.212l0.493-4.06l-0.197-3.914l-0.86-3.815l-1.48-3.716 l-2.307-3.421l-2.683-1.898l-26.152-4.819l-1.973-1.275l-1.71-2.445l-0.897-1.916l-1.226-0.948l-2.753,0.445l-0.855-0.265 l-0.977-2.494l-0.85-0.943l-2.185-0.879l-0.977-0.58l-0.855-0.877l-0.399-1.878l-1.602-0.368l-1.814,0.752l-4.609,5.72 l-1.931,1.324l-2.894,0.111l-3.627-0.651l-1.175-0.397l-0.089,0.026l-2.016,0.598l-4.215,0.296l-1.767,0.709l0.785,1.636 l2.589,2.932l0.225,0.958l0.362,1.042l-0.023,0.836l-0.897,0.344l-0.526,0.397l-0.648,0.968l-0.115-0.117l-0.487-0.496 l-4.182-1.524l-12.602-6.795l-6.634-2.494l-9.952-1.345l-8.542-0.074l-2.368,0.847l-0.461,0.996l-0.188,1.249l0.179,1.191 l1.377,1.89l-0.127,1.233l-0.62,1.286l-1.964,2.937l-1.527,1.56l-1.771,1l-2.039,0.101l-2.086-0.735l-0.916-1.021l-0.573-1.439 l-1.048-1.952l-1.123-1.286l-4.511-3.832l-3.35-1.334l-11.121,0.085l-5.756-1.427l-4.172-2.362l-2.274-0.736l-11.286-0.76 l-2.039-2.379l-0.987-3.892l-0.874-7.674l-1.109-3.949l-1.579-2.568l-0.527-0.211l-1.977-0.79l-11.455,2.971l-7.771,0.902 l-3.524-1.104l-4.91-5.015l-7.048-3.541l-10.854-9.025l-3.966-1.573l-1.551-0.901l-1.701-1.821l-1.823-1.558l-0.127-0.043 l-2.091-0.702l-4.666-0.468L204.218,351l-3.665,4.346l-2.081,1.445l-2.504-0.194l-2.528-1.512l-2.518-1.898l-4.548-2.632 l-3.613-3.895l-1.95-1.614l-2.138-0.782l-4.581-1.075l-1.79-1.394l-0.023-0.011l-1.175-1.894l-1.842-1.309l-8.044-4.163 l-1.386-1.121l-0.381-0.961l-0.099-1.076l-0.428-1.481l-1.179-1.894l-1.63-1.777l-1.936-1.404l-2.077-0.743l-1.391,0.192 l-0.587,0.946l-0.381,1.276l-0.832,1.207l-1.311,0.669l-1.513,0.25l-0.987-0.464l0.291-1.465l-1.485-0.368l-0.573-0.794 l0.362-0.845l1.381-0.565l-1.236-2.489l-5.277-6.108l-1.236-2.875l-1.851-6.143l-1.879-2.397l-2.124-1.129l-9.026-1.74 l-4.242-0.818l-0.658-1.119l-0.169-1.285l-0.32-1.109l-1.071-0.615l-1.41,0.481l-1.757-0.043l-1.804-0.363l-1.461-0.481 l-1.691-1.234l-0.437-1.454l-0.136-1.555l-0.738-1.55l-1.297-0.577l-3.726-0.011l-1.691-0.326l-1.522-0.936l-3.467-3.645 l-1.494-1.006l-2.847-0.81l-1.56-0.746l-0.949-1.204l-1.804-3.46l-1.156-0.84l-3.374-0.613l-1.56-0.535l-1.616-0.838l-0.611-0.827 l0.047-0.966l0.15-0.9l-0.291-0.613l-1.945-0.063l-1.532-0.05l-1.823,1.026l-0.902,1.416l-0.244,1.78l0.771,6.591l-0.451,1.367 l-1.785-0.974l-3.843-4.656l-1.654-0.987l-1.823-0.094l-1.748,0.476l-1.757,0.252l-1.823-0.752l-1.034-1.309l-2.481-5.135 l-0.695-0.589l-1.654-0.407l-0.742-0.359l-0.695-0.774l-0.949-1.663l-0.517-0.67l-1.532-0.957l-3.204-0.555l-1.738-0.622 l-1.316-1.04l-3.035-4.074l-2.941-1.74l-0.801-0.163l-1.661-0.338l-1.673-1.333L30,250.505l0.075-2.09l0.254-1.884l0.601-1.753 l1.128-1.694l1.41-1.125l1.522-0.784l1.297-1.018l0.771-1.799v-0.019l-0.291-3.414l0.761-4.638l1.776-3.955l2.81-1.369l1.55,0.212 l1.898,0.016l1.748-0.511l1.128-1.377l-0.235-1.606l-1.522-4.356l0.46-1.513l1.569-0.207l1.146,0.904l0.865,0.202l1.87-6.838 l0.367-2.421l-0.244-1.964l-0.667-0.579l-0.836,0.04l-0.78-0.137l-0.498-1.08l-0.667-4.215l-1.926-3.413l-0.658-1.75l0.357-1.853 l0.968-0.739l2.65-0.871l0.545-0.958l0.254-1.346l0.62-0.683l0.818-0.588l0.827-1.077l0.028-0.014l1.823-1.398l0.78-0.804 l0.648-0.942l0.038-0.532l-0.235-0.583l-0.132-0.643l0.329-0.724l0.498-0.405l1.128-0.616l0.517-0.389l2.049-2.312l1.081-2.159 l0.141-2.3l-0.836-2.733l-1.24-2.801l-0.865-2.634l-0.009-2.659l1.334-2.895l2.387-1.954l5.422-1.467l1.936-1.63l4.652-5.898 l2.02-3.278l1.212-3.778l0.771-1.8l1.353-0.765l3.28-0.423l1.739-0.553l1.156-0.749l2.368-2.257l3.242-2.23l0.902-0.993 l2.725-4.391l1.269-1.336l5.469-4.187l1.804-2.76l-1.203-2.804l1.269-1.25l1.593-1.919l1.452-1.076l0.888,1.294l0.879,1.859 l1.593,0.397l6.122-2.093l0.714-0.043l0.954,0.848l1.175,1.75l1.043,2.054l1.16,3.417l2.086,3.476l0.691,1.602l0.932,4.626 l0.036,0.178l1.175,0.971l2.439-0.613l2.138-0.049l4.219,1.97l2.03-0.391l0.949-1.498l-0.141-2.942l1.255-0.874l1.598-0.499 l0.883-0.673l0.1-0.221l0.374-0.827l0.357-1.624l-0.132-0.717l-0.742-1.635l0.056-0.771l0.977-0.712l1.414-0.103l1.48,0.081 l1.17-0.179l1.442-1.027l1.071-1.44l0.658-1.717l0.413-3.283l1.142-1.93l0.315-1l-0.085-0.903l-0.583-1.692l-0.136-0.925 l-0.089-3.684l0.32-1.671l0.963-1.513l0.465-1.459l-0.216-1.666l0.24-1.367l1.809-0.556l1.701,0.703l3.336,3.283l1.842,0.996 l2.391,0.37l1.029-0.376l1.024-4.045l0.442-0.866l0.677-0.43l1.729-0.31l1.222-0.566l0.479-0.893l0.282-0.915l0.592-0.648 l2.039-0.278l1.973,0.627l11.06,5.065l1.969,0.512l2.044-0.343l1.936-0.724l1.964-0.316l3.89,1.704l3.12-0.25l1.795,0.359 l0.808,0.588l1.09,1.552l0.63,0.566l0.893,0.152l0.874-0.31l0.883-0.452l0.86-0.288l3.839-0.256l2.124,0.212l1.414,0.751 l0.404,1.617l-1.01,6.045l0.263,2.79l0.991,1.827l1.668,1.185l2.378,0.859l1.391,1.332l-0.428,2.011l-2.128,3.983l0.103,1.429 l0.592,2.21l0.846,2.134l0.846,1.184l1.856,0.282l1.63-0.63l1.682-0.309l4.097,2.6l1.842,0.288l1.865,0.011l2.035,0.527l0.752,0.64 l1.085,1.731l0.747,0.608l1.494,0.239l1.4-0.217l1.391,0.011l1.396,0.895l1.189,1.568L249,136.92l1.649,1.226l1.706,0.9 l4.403,1.377l1.598,0.96l6.973,8.746l1.579,1.132l0.958-0.033l1.87-0.596l0.94,0.065l1.062,0.699l0.019,0.856l-0.413,1.034 l-0.263,1.256l0.836,1.779l5.507,4.338l1.691,2.635l0.996,0.947l1.09,0.587l1.1,0.371l0.944,0.611l0.62,1.274l1.292,1.901 l1.898-0.67l2.058-1.56l1.785-0.765l0.855,0.398l1.325,1.566l0.747,0.573l0.926,0.13l2.02-0.308l1.052,0.195l5.182,4.557 l0.728,1.065l1.236,2.534l0.949,0.759l1.33-0.089l0.545-1.124l0.263-1.467l0.446-1.121l0.63-0.265l2.401-0.6l2.124-0.232 l1.095,0.049l1.043,0.408l1.245,0.959l0.329,0.543l0.329,1.386l0.244,0.476l0.705,0.438l1.541,0.532l0.677,0.405l2.114,2.169 l0.752,1.375l0.225,1.563l-0.31,0.869l-0.536,0.572l-0.479,0.702l-0.141,1.236l1.522,2.27l5.822-1.255l2.476,2.537l0.235,1.878 l-0.235,1.543l0.164,1.316l2.749,2.281l0.197,1.154l-0.103,1.275l0.442,1.458l1.081,1.019l1.16,0.582l0.944,0.776l0.822,2.942 l1.001,0.884l2.509,1.026l1.598,1.123l0.874,1.576l0.865,3.912l0.188,2.258l0.226,1.052l0.606,0.845l1.113,0.455l2.312,0.312 l0.968,0.815l1.071,0.651l3.693,0.697l1.349,0.073l1.43-0.589l0.092-0.038l0.672-1.461l0.395-1.824l0.667-1.712l1.856-1.814 l2.204-0.773l2.331-0.091l2.298,0.231l2.053-0.261l4.06-2.006l2.161-0.646l0.658-0.337l0.775-1.39l0.55-0.547l2.814-0.77 l1.706-0.248l1.128-0.005l1.128,0.291l0.846,0.452l0.545,0.8l0.235,1.384l1.128-0.603l1.151-0.312l1.057,0.242l0.818,1.088 l1.245,1.266l1.621-0.285l1.729-0.689l1.607,0.038l0.855,1.002l0.564,2.821l0.639,1.128l1.24,0.296l1.452-0.21l1.226,0.17 l0.564,1.469l-0.587,1.728l-1.226,1.633l-0.86,1.714l0.522,1.993l2.011,1.995l0.554,0.731l0.319,0.992l0.522,3.279l2.067,1.258 l2.035,0.666l0.987,1.343l-2.246,8.868l1.688,2.758l0.896,1.464l4.623,2.729l6.183,1.293l1.118,0.472l0.935,0.821l1.499,2.542 l1.931,1.668l0.766,0.944l1.372,4.755l1.184,2.018l2.265,0.683l2.077-0.059l1.551,0.67l1.485,0.903l1.804,0.654l5.037,0.849 l0.818,0.471l0.874,1.821l0.62,0.755l1.786,0.664l1.715,0.356l1.076,0.849l-0.475,4.802l1.189,0.856l4.163,0.203l1.729,0.907 l2.378,2.745l1.579,1.27l1.165,0.481l1.09,0.15l5.032-0.321l1.104,0.193l1.494,0.492l0.987,0.139l0.888-0.289l0.724-0.653 l1.137-2.434l0.545-0.623l2.711-1.479l0.846-0.23l0.766-0.375l0.606-0.84l0.874-1.793l0.592-0.886l0.62-0.586l2.077-0.479 l1.828,0.728l3.35,2.366l4.464,1.432l0.639,1.223l-1.006,5.181l-0.291,0.853l-0.554,0.939l-0.662,0.508l-1.565,0.655l-0.54,0.751 l-0.141,0.604l-0.009,1.94l-0.555,1.39l-2.344,1.424l-0.555,1.018l0.738,5.652v2.013l-0.348,3.081l-0.15,1.334l0.653,1.516 l2.001,1.225l2.251,0.029l1.856-0.918l1.729-0.357l2.923,2.689l1.654,0.68l1.771,0.389l1.471,0.101l1.231-0.299l2.537-1.16 l1.052-0.176l1.193,0.555l0.827,0.899l0.959,0.768l1.565,0.163l1.386-0.651l2.142-2.355l1.259-0.79l1.485-0.064l1.372,0.507 l2.641,1.347l1.987-0.363l2.1-0.032l2.096,0.262l1.964,0.518l1.837,1.259l1.222,1.275l1.17-0.032l2.481-3.793l0.714-0.6 l1.926-0.707l0.63-0.603l0.103-0.902l-0.019-0.993l0.287-0.843l1.255-0.24l0.461,2.25l0.16,4.578l1.438,2.656l1.72,2.253 l2.011,1.887l2.378,1.562l4.013,1.818l1.945,1.191l1.372,1.607l0.334,1.074l0.428,2.27l1.579,2.128l0.178,0.967l-0.113,0.993 l0.056,1.243l0.714,2.388l0.968,1.4l3.186,2.853l1.147,1.905l-0.028,1.992l-0.404,2.066l-0.056,2.117l1.043,2.557l1.597,0.638 l4.201-0.489l2.269,0.244l0.289-0.048l0.646-0.107l1.269-0.59l2.866-2.887l0.517-0.407l-0.056-1.077l-0.46-0.718l-0.601-0.617 l-0.451-0.785l-0.047-1.136l0.268-0.888l0.009-0.835l-0.794-0.936v-0.016h-0.009l-0.921-0.644l-0.141-0.599l0.174-0.657v-0.857 l0.399-1.741l0.07-0.548l-0.287-0.807l-1.034-1.547l-0.132-1.036l7.931-8.223l1.823,0.362l0.911,2.009l0.103,2.56l-0.583,2.056 l-0.775,1.744l0.202,0.966l0.672,0.78l0.663,1.161l0.625,2.991l0.639,1.235l1.339,0.782l0.014,0.005l0.042,0.021l1.832,0.532 l1.861,0.197l1.734,0.407l1.508,1.165l2.143,2.737l0.865,0.628l0.893,0.17l0.733-0.298l0.733-0.399l0.846-0.133l0.818,0.425 l3.068,2.569l1.781,0.728l1.231-0.096l3.331-1.723l1.95-1.058l1.231-1.497l0.573-1.956l-0.028-2.398l-0.023-1.804l0.554-1.181 l0.785-1.027l0.677-1.389l0.216-1.544l0.047-1.653l0.263-1.526l0.855-1.148l1.452-0.253l1.236,0.884l1.25,1.188l1.405,0.642 l1.349-0.33l2.03-1.824l1.137-0.583l1.644,0.115l1.781,0.719l1.64,1.081l1.278,1.169l0.385,1.243l-0.343,3.08l0.691,1.387 l2.744,0.969l6.409-0.277l2.518,2.049v0.016l0.794,2.479l1.471,1.694l1.969,0.933l2.331,0.208l2.716-0.447l1.079-0.333l0.603-0.186 l1.541,0.101l2.26,1.38l2.861,3.052l4.957,6.567l3.571,1.931l2.382,0.133l4.628-0.537l5.239,1.402l2.129-1.286l1.992-1.828 l2.547-0.914l1.955,0.6l-0.423,1.397l-1.052,1.721v1.556l1.607-0.048l8.072-2.292l3.543-0.874l1.551-0.165l1.795,0.505l0.423,0.494 l0.348,0.823l0.479,0.845l0.752,0.6l1.513,0.042l2.829-1.535l1.362-0.422l2.171,0.388l1.689,0.671l1.994,0.792l2.396-0.218 l2.688-1.296l2.133-1.96l1.71-2.471l1.41-2.828l1.067-1.606l0.982-0.181l1.767,1l7.132,0.34l0.968,0.308l1.926,0.983l1.095,0.229 l1.217-0.218l2.392-0.978l1.076-0.122l2.077,0.702l3.904,2.179L765.377,355.574z"}]'),
                E = JSON.parse('[{"name":"twitter","path":"M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"},{"name":"github","path":"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"},{"name":"coffee","path":"M1.55747 1.25866C1.74689 0.927047 2.0206 0.65139 2.35087 0.459621C2.68114 0.267853 3.05623 0.166787 3.43813 0.166664H14.5618C14.9437 0.166787 15.3188 0.267853 15.6491 0.459621C15.9793 0.65139 16.253 0.927047 16.4425 1.25866L17.6807 3.42533C18.3827 4.65383 17.7338 6.13691 16.4999 6.55291C16.5053 6.64175 16.5042 6.73058 16.4977 6.8205L15.5693 19.8205C15.5304 20.3671 15.2858 20.8787 14.8848 21.2522C14.4837 21.6257 13.9561 21.8333 13.4081 21.8333H4.5908C4.04279 21.8333 3.51512 21.6257 3.11409 21.2522C2.71306 20.8787 2.46846 20.3671 2.42955 19.8205L1.50113 6.8205C1.4946 6.73145 1.49352 6.64209 1.49788 6.55291C0.26505 6.13691 -0.383867 4.65383 0.31705 3.42533L1.55638 1.25866H1.55747ZM3.66347 6.66666L3.8953 9.91666H14.1046L14.3365 6.66666H3.66347ZM4.36005 16.4167L4.59188 19.6667H13.4081L13.6399 16.4167H4.36005ZM15.8001 4.5L14.5618 2.33333H3.43813L2.19988 4.5H15.8001Z"}]');

            function N(l) {
                var e = [].concat((0, r.Z)(o), (0, r.Z)(i), (0, r.Z)(E)).find((function(e) {
                    return e.name === l
                }));
                return (null === e || void 0 === e ? void 0 : e.path) || ""
            }
            var A = t(2606),
                u = t(184);

            function _() {
                var e = (0, l.useContext)(n.N).theme.nightMode;
                return (0, u.jsxs)("footer", {
                    className: "pt-8 pb-4 text-xs flex items-end justify-between w-full",
                    children: [(0, u.jsxs)("span", {
                        className: "max-w-[40%] space-x-1",
                        children: [(0, u.jsx)("a", {
                            href: "https://the-abe-train.com",
                            children: (0, u.jsx)(A.Z, {
                                id: "Footer1"
                            })
                        }), (0, u.jsx)("a", {
                            href: "https://twitter.com/theAbeTrain",
                            "aria-label": "Twitter",
                            className: "inline",
                            children: (0, u.jsx)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: 14,
                                viewBox: "0 0 24 24",
                                fill: e ? "rgb(209 213 219)" : "rgb(17 24 39)",
                                className: "inline",
                                children: (0, u.jsx)("path", {
                                    d: N("twitter")
                                })
                            })
                        }), (0, u.jsx)("a", {
                            href: "https://github.com/the-abe-train",
                            "aria-label": "Github",
                            className: "inline",
                            children: (0, u.jsx)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: 14,
                                viewBox: "0 0 24 24",
                                fill: e ? "rgb(209 213 219)" : "rgb(17 24 39)",
                                className: "inline",
                                children: (0, u.jsx)("path", {
                                    d: N("github")
                                })
                            })
                        })]
                    }), (0, u.jsxs)("div", {
                        className: "flex flex-col sm:flex-row justify-start",
                        children: [(0, u.jsx)("span", {
                            children: (0, u.jsx)(A.Z, {
                                id: "Footer2"
                            })
                        }), (0, u.jsxs)("span", {
                            className: "flex justify-end",
                            children: [(0, u.jsx)("a", {
                                className: "underline mx-1",
                                target: "_blank",
                                rel: "noreferrer",
                                href: "https://www.buymeacoffee.com/theabetrain",
                                children: (0, u.jsx)(A.Z, {
                                    id: "Footer3"
                                })
                            }), (0, u.jsx)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: 14,
                                viewBox: "0 0 24 24",
                                fill: e ? "rgb(209 213 219)" : "rgb(17 24 39)",
                                children: (0, u.jsx)("path", {
                                    d: N("coffee")
                                })
                            })]
                        })]
                    })]
                })
            }
            var s = t(173),
                c = t(5381),
                M = (0, l.lazy)((function() {
                    return t.e(666).then(t.bind(t, 666))
                }));

            function f(e) {
                var t = e.children,
                    r = e.setScreen,
                    i = e.screen,
                    o = 150,
                    E = {
                        width: "".concat(o, "px"),
                        clipPath: "circle(".concat(75, "px at ").concat(75, "px ").concat(75, "px)")
                    },
                    N = (0, l.useRef)(null),
                    f = (0, l.useContext)(n.N).theme.nightMode;

                function d() {
                    r("Game")
                }(0, l.useEffect)((function() {
                    setTimeout((function() {
                        N.current && (N.current.controls().autoRotate = !0)
                    }), 500)
                }), [N]);
                return (0, u.jsxs)("div", {
                    className: "dark:text-gray-300 flex flex-col",
                    children: [t, (0, u.jsxs)("div", {
                        className: "w-fit flex flex-col justify-center align-middle mx-auto",
                        tabIndex: 0,
                        onKeyPress: function(l) {
                            ["Enter", " ", "Return"].includes(l.key) && d()
                        },
                        children: [(0, u.jsx)("div", {
                            className: "mx-auto cursor-pointer",
                            style: E,
                            onClick: d,
                            onTouchStart: d,
                            children: (0, u.jsx)(l.Suspense, {
                                fallback: (0, u.jsx)("p", {
                                    children: (0, u.jsx)(A.Z, {
                                        id: "Loading"
                                    })
                                }),
                                children: (0, u.jsx)(M, {
                                    ref: N,
                                    globeImageUrl: (0, c.L)(f),
                                    width: o,
                                    height: o,
                                    backgroundColor: "#00000000",
                                    onGlobeClick: d
                                })
                            })
                        }), (0, u.jsx)("b", {
                            className: "text-center",
                            children: (0, u.jsx)(A.Z, {
                                id: "Aux1",
                                values: {
                                    b: function(l) {
                                        try {
                                            var e = JSON.parse(l),
                                                t = (0, a.Z)(e, 2),
                                                n = t[0],
                                                r = t[1];
                                            return s.tq ? (0, u.jsx)("b", {
                                                children: r
                                            }) : (0, u.jsx)("b", {
                                                children: n
                                            })
                                        } catch (i) {
                                            return (0, u.jsx)("b", {
                                                children: l
                                            })
                                        }
                                    }
                                }
                            })
                        })]
                    }), ("Help" === i || "Settings" === i) && (0, u.jsxs)("span", {
                        className: "mt-10 mb-4",
                        children: [(0, u.jsx)(A.Z, {
                            id: "Aux2"
                        }), " ", (0, u.jsx)("button", {
                            className: "underline cursor-pointer inline",
                            onClick: function() {
                                return r("Info")
                            },
                            children: (0, u.jsx)(A.Z, {
                                id: "Aux3"
                            })
                        })]
                    }), ("Help" === i || "Info" === i) && (0, u.jsx)("div", {
                        className: "flex-grow flex items-end",
                        children: (0, u.jsx)(_, {})
                    })]
                })
            }
            var d = t(6215),
                p = t(3920),
                O = t(5890),
                R = t(3843),
                m = t(8333),
                h = (0, l.lazy)((function() {
                    return Promise.all([t.e(666), t.e(417)]).then(t.bind(t, 1417))
                })),
                g = (0, l.lazy)((function() {
                    return t.e(254).then(t.bind(t, 254))
                })),
                L = (0, l.lazy)((function() {
                    return t.e(249).then(t.bind(t, 2249))
                })),
                y = t(9199).R;

            function T(e) {
                var t = e.reSpin,
                    n = e.setShowStats,
                    i = (0, p._)("guesses", {
                        day: O.f,
                        countries: []
                    }),
                    o = (0, a.Z)(i, 2),
                    E = o[0],
                    N = o[1],
                    A = {
                        gamesWon: 0,
                        lastWin: new Date(0).toLocaleDateString("en-CA"),
                        currentStreak: 0,
                        maxStreak: 0,
                        usedGuesses: [],
                        emojiGuesses: ""
                    },
                    _ = (0, p._)("statistics", A),
                    s = (0, a.Z)(_, 2),
                    c = s[0],
                    M = s[1],
                    f = [],
                    T = [];
                O.f <= E.day && (T = (f = E.countries).map((function(l) {
                    var e = y.find((function(e) {
                        return e.properties.NAME === l
                    }));
                    if (!e) throw new Error("Country mapping broken");
                    return e.proximity = (0, R.z)(e, d.v), e
                })));
                var I = f.includes(d.U),
                    S = (0, l.useState)(T),
                    b = (0, a.Z)(S, 2),
                    B = b[0],
                    v = b[1],
                    U = (0, l.useState)(I),
                    G = (0, a.Z)(U, 2),
                    F = G[0],
                    P = G[1],
                    w = (0, l.useRef)(null);
                (0, l.useEffect)((function() {
                    var l = B.map((function(l) {
                        return l.properties.NAME
                    }));
                    N({
                        day: O.f,
                        countries: l
                    })
                }), [B, N]), (0, l.useEffect)((function() {
                    if (F && c.lastWin !== O.f) {
                        for (var l = O.f, e = c.gamesWon + 1, t = (0, O.L)(c.lastWin, l) > 1 ? 1 : c.currentStreak + 1, a = t > c.maxStreak ? t : c.maxStreak, i = [].concat((0, r.Z)(c.usedGuesses), [B.length]), o = [], E = 0; E < B.length; E += 8) o.push(B.slice(E, E + 8));
                        var N = o.map((function(l) {
                            return l.map((function(l) {
                                return (0, m.s)(l, B[B.length - 1])
                            })).join("")
                        })).join("\n");
                        M({
                            lastWin: l,
                            gamesWon: e,
                            currentStreak: t,
                            maxStreak: a,
                            usedGuesses: i,
                            emojiGuesses: N
                        }), setTimeout((function() {
                            return n(!0)
                        }), 3e3)
                    }
                }), [F, B, n, M, c]);
                return (0, u.jsxs)(l.Suspense, {
                    fallback: (0, u.jsx)("p", {
                        children: "Loading"
                    }),
                    children: [(0, u.jsx)(g, {
                        guesses: B,
                        setGuesses: v,
                        win: F,
                        setWin: P
                    }), !t && (0, u.jsxs)("div", {
                        children: [(0, u.jsx)(h, {
                            guesses: B,
                            globeRef: w
                        }), (0, u.jsx)(L, {
                            guesses: B,
                            win: F,
                            globeRef: w
                        })]
                    })]
                })
            }

            function I(e) {
                var t = e.setScreen,
                    a = e.setReSpin,
                    r = e.setShowStats;
                var i = (0, l.useContext)(n.N).theme.nightMode ? "rgb(209 213 219)" : "black";
                return (0, u.jsxs)("header", {
                    className: "mt-8 h-10 relative dark:text-gray-300 z-10",
                    children: [(0, u.jsxs)("div", {
                        className: "relative h-full",
                        children: [(0, u.jsx)("div", {
                            className: "space-x-1 flex absolute left-0 bottom-1",
                            children: (0, u.jsx)("button", {
                                onClick: function() {
                                    return t("Help")
                                },
                                "aria-label": "Help",
                                children: (0, u.jsx)("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    height: "24",
                                    viewBox: "0 0 24 24",
                                    width: "24",
                                    children: (0, u.jsx)("path", {
                                        fill: i,
                                        d: N("help")
                                    })
                                })
                            })
                        }), (0, u.jsx)("button", {
                            className: "absolute bottom-0 left-1/2 transform -translate-x-1/2 ",
                            onClick: function() {
                                a(!0), t("Game")
                            },
                            children: (0, u.jsx)("h1", {
                                className: "text-4xl font-extrabold",
                                style: {
                                    fontFamily: "'Montserrat'"
                                },
                                children: "GLOBLE"
                            })
                        }), (0, u.jsxs)("div", {
                            className: "space-x-1 flex absolute right-0 bottom-1",
                            children: [(0, u.jsx)("button", {
                                onClick: function() {
                                    return r(!0)
                                },
                                "aria-label": "Statistics",
                                children: (0, u.jsx)("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    height: "24",
                                    viewBox: "0 0 24 24",
                                    width: "24",
                                    children: (0, u.jsx)("path", {
                                        fill: i,
                                        d: N("stats")
                                    })
                                })
                            }), (0, u.jsx)("button", {
                                onClick: function() {
                                    return t("Settings")
                                },
                                "aria-label": "Settings",
                                children: (0, u.jsx)("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    height: "24",
                                    viewBox: "0 0 24 24",
                                    width: "24",
                                    children: (0, u.jsx)("path", {
                                        fill: i,
                                        d: N("settings")
                                    })
                                })
                            })]
                        })]
                    }), (0, u.jsx)("hr", {
                        className: "bottom-0",
                        style: {
                            borderColor: i
                        }
                    })]
                })
            }

            function S(e) {
                var t = e.show,
                    n = e.children,
                    r = e.background,
                    i = (0, l.useState)(!1),
                    o = (0, a.Z)(i, 2),
                    E = o[0],
                    N = o[1],
                    A = (0, l.useState)(!1),
                    _ = (0, a.Z)(A, 2),
                    s = _[0],
                    c = _[1];
                return (0, l.useEffect)((function() {
                    t && (c(!0), setTimeout((function() {
                        return N(!0)
                    }), 150)), t || (N(!1), setTimeout((function() {
                        return c(!1)
                    }), 150))
                }), [t]), s ? (0, u.jsx)("div", {
                    style: {
                        transition: "all 250ms linear",
                        opacity: E ? "1" : "0"
                    },
                    className: r,
                    children: n
                }) : null
            }
            var b = t(4942);

            function B(l, e) {
                var t = Object.keys(l);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(l);
                    e && (a = a.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(l, e).enumerable
                    }))), t.push.apply(t, a)
                }
                return t
            }
            var v = t(9199).R;

            function U(e) {
                var t = e.countryName,
                    a = e.width,
                    r = (0, l.useContext)(n.N).theme.nightMode,
                    i = (0, l.useContext)(n.N).theme.highContrast,
                    o = v.find((function(l) {
                        return l.properties.NAME === t
                    }));
                if (!o) throw new Error("Country in Help screen not found in Country Data");
                var E = function(l) {
                        for (var e = 1; e < arguments.length; e++) {
                            var t = null != arguments[e] ? arguments[e] : {};
                            e % 2 ? B(Object(t), !0).forEach((function(e) {
                                (0, b.Z)(l, e, t[e])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(t)) : B(Object(t)).forEach((function(e) {
                                Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(t, e))
                            }))
                        }
                        return l
                    }({}, o),
                    _ = v.find((function(l) {
                        return "Japan" === l.properties.NAME
                    }));
                if (!_) throw new Error("Country in Help screen not found in Country Data");
                E.proximity = (0, R.z)(E, _);
                var s = N(t),
                    c = (0, m.h)(E, _, r, i);
                return (0, u.jsxs)("figure", {
                    className: "flex space-x-6 md:flex-col md:justify-left md:space-x-0 bg-transparent",
                    children: [(0, u.jsx)("svg", {
                        version: "1.1",
                        xmlns: "http://www.w3.org/2000/svg",
                        x: "0px",
                        y: "0px",
                        viewBox: "0 0 800 600",
                        width: a,
                        height: .75 * a,
                        children: (0, u.jsx)("g", {
                            id: t,
                            children: (0, u.jsx)("path", {
                                fill: c,
                                d: s,
                                stroke: "black"
                            })
                        })
                    }), (0, u.jsx)("figcaption", {
                        className: "text-left sm:text-center font-bold my-auto",
                        children: (0, u.jsx)(A.Z, {
                            id: t
                        })
                    })]
                })
            }

            function G() {
                var e = (0, l.useContext)(n.N).theme.nightMode,
                    t = (0, l.useState)(!1),
                    r = (0, a.Z)(t, 2),
                    i = r[0],
                    o = r[1],
                    E = (0, l.useState)(!1),
                    N = (0, a.Z)(E, 2),
                    _ = N[0],
                    c = N[1],
                    M = (0, l.useState)(!1),
                    f = (0, a.Z)(M, 2),
                    d = f[0],
                    p = f[1],
                    O = (0, l.useState)(!1),
                    R = (0, a.Z)(O, 2),
                    m = R[0],
                    h = R[1],
                    g = s.tq ? 125 : 150;
                (0, l.useEffect)((function() {
                    var l = setTimeout((function() {
                            return o(!0)
                        }), 1e3),
                        e = setTimeout((function() {
                            return c(!0)
                        }), 2e3),
                        t = setTimeout((function() {
                            return p(!0)
                        }), 3e3),
                        a = setTimeout((function() {
                            return h(!0)
                        }), 4e3);
                    return function() {
                        clearTimeout(l), clearTimeout(e), clearTimeout(t), clearTimeout(a)
                    }
                }), []);
                var L = [{
                    name: "France",
                    show: i
                }, {
                    name: "Nepal",
                    show: _
                }, {
                    name: "Mongolia",
                    show: d
                }, {
                    name: "South Korea",
                    show: m
                }];
                return (0, u.jsxs)("div", {
                    className: "my-2 space-y-7",
                    children: [(0, u.jsx)("h2", {
                        className: "text-center text-2xl my-5 font-extrabold",
                        style: {
                            fontFamily: "'Montserrat'"
                        },
                        children: (0, u.jsx)(A.Z, {
                            id: "helpTitle"
                        })
                    }), (0, u.jsx)("p", {
                        children: (0, u.jsx)(A.Z, {
                            id: "help1",
                            values: {
                                b: function(l) {
                                    return (0, u.jsx)("b", {
                                        className: e ? "text-purple-400" : "text-red-800",
                                        children: l
                                    })
                                }
                            }
                        })
                    }), (0, u.jsx)("p", {
                        children: (0, u.jsx)(A.Z, {
                            id: "help2",
                            values: {
                                b: function(l) {
                                    return (0, u.jsx)("b", {
                                        children: l
                                    })
                                }
                            }
                        })
                    }), (0, u.jsx)("div", {
                        className: "block mx-4",
                        children: (0, u.jsx)("div", {
                            className: "flex flex-col md:flex-row justify-start items-center space-x-3",
                            style: {
                                minHeight: s.tq ? 3 * g : g
                            },
                            children: L.map((function(l, e) {
                                return (0, u.jsx)(S, {
                                    show: l.show,
                                    background: "bg-transparent",
                                    children: (0, u.jsx)(U, {
                                        countryName: l.name,
                                        width: g
                                    }, e)
                                }, e)
                            }))
                        })
                    }), (0, u.jsx)("p", {
                        children: (0, u.jsx)(A.Z, {
                            id: "help3"
                        })
                    })]
                })
            }
            var F = t(8278);

            function P(e) {
                var t = e.setScreen,
                    n = (0, l.useContext)(F.R),
                    r = [{
                        q: (0, u.jsx)(A.Z, {
                            id: "q1"
                        }),
                        a: (0, u.jsxs)("dd", {
                            children: [(0, u.jsx)(A.Z, {
                                id: "a1"
                            }), " "]
                        }, 2)
                    }, {
                        q: (0, u.jsx)(A.Z, {
                            id: "q2"
                        }),
                        a: (0, u.jsx)("dd", {
                            children: (0, u.jsx)(A.Z, {
                                id: "a2",
                                values: {
                                    button: function(l) {
                                        return (0, u.jsx)("button", {
                                            className: "underline",
                                            onClick: function(l) {
                                                return t("Settings")
                                            },
                                            children: l
                                        })
                                    }
                                }
                            })
                        }, 2)
                    }, {
                        q: (0, u.jsx)(A.Z, {
                            id: "q3"
                        }),
                        a: (0, u.jsx)("dd", {
                            children: (0, u.jsx)(A.Z, {
                                id: "a3",
                                values: {
                                    a: function(l) {
                                        return (0, u.jsx)("a", {
                                            className: "underline",
                                            href: "https://www.sporcle.com/blog/2013/01/what-is-a-country/",
                                            children: l
                                        })
                                    }
                                }
                            })
                        }, 2)
                    }, {
                        q: (0, u.jsx)(A.Z, {
                            id: "q4"
                        }),
                        a: (0, u.jsx)("dd", {
                            children: (0, u.jsx)(A.Z, {
                                id: "a4"
                            })
                        }, 2)
                    }, {
                        q: (0, u.jsx)(A.Z, {
                            id: "q5"
                        }),
                        a: (0, u.jsx)("dd", {
                            children: (0, u.jsx)(A.Z, {
                                id: "a5"
                            })
                        }, 2)
                    }, {
                        q: (0, u.jsx)(A.Z, {
                            id: "q6"
                        }),
                        a: (0, u.jsx)("dd", {
                            children: (0, u.jsx)(A.Z, {
                                id: "a6"
                            })
                        }, 2)
                    }, {
                        q: (0, u.jsx)(A.Z, {
                            id: "q7"
                        }),
                        a: (0, u.jsx)("dd", {
                            children: (0, u.jsx)(A.Z, {
                                id: "a7",
                                values: {
                                    GitHub: (0, u.jsx)("a", {
                                        className: "underline",
                                        href: "https://github.com/the-abe-train/globle",
                                        children: "GitHub"
                                    }),
                                    Twitter: (0, u.jsx)("a", {
                                        className: "underline",
                                        href: "https://twitter.com/theAbeTrain",
                                        "aria-label": "Twitter",
                                        children: "Twitter"
                                    })
                                }
                            })
                        }, 2)
                    }];
                return "en-CA" !== n.locale && r.splice(5, 1), (0, u.jsxs)("div", {
                    className: "my-2 space-y-7",
                    children: [(0, u.jsx)("h2", {
                        className: "text-center text-2xl my-5 font-extrabold",
                        style: {
                            fontFamily: "'Montserrat'"
                        },
                        children: (0, u.jsx)(A.Z, {
                            id: "FAQTitle"
                        })
                    }), (0, u.jsx)("dl", {
                        className: "space-y-8",
                        children: r.map((function(e, t) {
                            return function(e, t) {
                                var n = e.q,
                                    r = e.a,
                                    i = (0, l.useState)(!1),
                                    o = (0, a.Z)(i, 2),
                                    E = o[0],
                                    N = o[1],
                                    A = (0, u.jsx)("dt", {
                                        className: "font-bold cursor-pointer pb-3",
                                        onClick: function(l) {
                                            return N(!E)
                                        },
                                        children: n
                                    }, 1);
                                return E ? (0, u.jsx)("div", {
                                    className: "",
                                    children: [A, r]
                                }, t) : (0, u.jsx)("div", {
                                    children: A
                                }, t)
                            }(e, t)
                        }))
                    })]
                })
            }
            var w = t(3272),
                k = {
                    "en-CA": "English",
                    "es-MX": "Espa\xf1ol"
                },
                H = Object.keys(w.Z);

            function C() {
                var e = (0, l.useState)(!1),
                    t = (0, a.Z)(e, 2),
                    n = t[0],
                    r = t[1],
                    i = (0, l.useContext)(F.R);
                return (0, u.jsxs)("label", {
                    className: "flex justify-between items-center",
                    children: [(0, u.jsx)("span", {
                        className: "text-lg",
                        children: (0, u.jsx)(A.Z, {
                            id: "Settings7"
                        })
                    }), (0, u.jsxs)("div", {
                        className: "relative",
                        children: [(0, u.jsxs)("button", {
                            onClick: function() {
                                return r(!n)
                            },
                            className: "text-white bg-blue-700 hover:bg-blue-800  focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm  px-4 py-2.5 text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-32 justify-between ",
                            type: "button",
                            children: [(0, u.jsx)("span", {
                                children: (0, u.jsx)(A.Z, {
                                    id: "name"
                                })
                            }), (0, u.jsx)("svg", {
                                className: "ml-2 w-4 h-4",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: (0, u.jsx)("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: "2",
                                    d: "M19 9l-7 7-7-7"
                                })
                            })]
                        }), n && (0, u.jsx)("div", {
                            className: "z-10 w-32 text-base list-none bg-white rounded divide-y  divide-gray-100 shadow dark:bg-gray-700 absolute top-full transition ",
                            children: (0, u.jsx)("ul", {
                                className: "py-1",
                                "aria-labelledby": "dropdownButton",
                                children: H.map((function(l, e) {
                                    var t = l;
                                    return (0, u.jsx)("li", {
                                        className: "block py-2 px-4 text-sm text-gray-700  hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200  dark:hover:text-white",
                                        onClick: function() {
                                            return function(l) {
                                                i.setLocale && i.setLocale(l)
                                            }(t)
                                        },
                                        children: k[l]
                                    }, e)
                                }))
                            })
                        })]
                    })]
                })
            }

            function x(l) {
                return l.checked ? (0, u.jsxs)("div", {
                    className: "relative cursor-pointer ",
                    children: [(0, u.jsx)("div", {
                        className: "block bg-gray-100 w-14 h-8 rounded-full border-2 border-gray-500"
                    }), (0, u.jsx)("div", {
                        className: "dot absolute left-1 top-1  bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-6 h-6 rounded-full transition"
                    })]
                }) : (0, u.jsxs)("div", {
                    className: "relative cursor-pointer ",
                    children: [(0, u.jsx)("div", {
                        className: "block bg-gray-100  w-14 h-8 rounded-full border-2 border-gray-500"
                    }), (0, u.jsx)("div", {
                        className: "dot absolute left-1 top-1  bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-6 h-6 rounded-full transition translate-x-full"
                    })]
                })
            }

            function D() {
                var e = (0, l.useContext)(n.N),
                    t = (0, l.useState)(!e.theme.nightMode),
                    r = (0, a.Z)(t, 2),
                    i = r[0],
                    o = r[1],
                    E = (0, l.useState)(!e.theme.highContrast),
                    N = (0, a.Z)(E, 2),
                    _ = N[0],
                    s = N[1],
                    c = (0, l.useContext)(F.R).locale,
                    M = (0, l.useState)(!0),
                    f = (0, a.Z)(M, 2),
                    d = f[0],
                    p = f[1],
                    O = e.setTheme;
                (0, l.useEffect)((function() {
                    O && O({
                        nightMode: !i,
                        highContrast: !_
                    })
                }), [i, _, O]);
                var R = [{
                    name: "theme",
                    setToggle: o,
                    toggle: i,
                    on: w.Z[c].Settings1,
                    off: w.Z[c].Settings2
                }, {
                    name: "accessibility",
                    setToggle: s,
                    toggle: _,
                    on: w.Z[c].Settings3,
                    off: w.Z[c].Settings4
                }, {
                    name: "scope",
                    setToggle: p,
                    toggle: d,
                    on: w.Z[c].Settings5,
                    off: w.Z[c].Settings6
                }];
                return (0, u.jsxs)("div", {
                    className: "flex-col space-y-8 mx-auto my-10 w-fit",
                    children: [(0, u.jsx)(C, {}), R.map((function(l, e) {
                        var t = l.name,
                            a = l.toggle,
                            n = l.setToggle,
                            r = l.on,
                            i = l.off;
                        return (0, u.jsxs)("label", {
                            htmlFor: t,
                            className: "flex items-center justify-between space-x-8",
                            onKeyPress: function(l) {
                                return function(l, e, t) {
                                    ["Enter", " ", "Return"].includes(l.key) && t(!e)
                                }(l, a, n)
                            },
                            tabIndex: 0,
                            children: [(0, u.jsx)("span", {
                                className: "text-lg",
                                children: a ? r : i
                            }), (0, u.jsx)("input", {
                                id: t,
                                type: "checkbox",
                                className: "sr-only relative focus-visible:ring",
                                checked: a,
                                onChange: function() {
                                    return n(!a)
                                },
                                tabIndex: -1,
                                "aria-hidden": "true"
                            }), (0, u.jsx)(x, {
                                checked: a
                            })]
                        }, e)
                    })), !d && (0, u.jsx)("p", {
                        className: "text-red-700",
                        children: (0, u.jsx)(A.Z, {
                            id: "Settings8"
                        })
                    })]
                })
            }
            var K = t(5861),
                W = t(7757),
                V = t.n(W);

            function z(e) {
                var t = e.setShowStats,
                    n = (0, l.useContext)(F.R).locale,
                    r = {
                        gamesWon: 0,
                        lastWin: new Date(0).toLocaleDateString("en-CA"),
                        currentStreak: 0,
                        maxStreak: 0,
                        usedGuesses: [],
                        emojiGuesses: ""
                    },
                    i = (0, p._)("statistics", r),
                    o = (0, a.Z)(i, 2),
                    E = o[0],
                    _ = o[1],
                    c = E.gamesWon,
                    M = E.lastWin,
                    f = E.currentStreak,
                    d = E.maxStreak,
                    R = E.usedGuesses,
                    m = E.emojiGuesses,
                    h = R.reduce((function(l, e) {
                        return l + e
                    }), 0),
                    g = Math.round(h / R.length * 100) / 100,
                    L = 0 === R.length ? "--" : g,
                    y = M === O.f ? R[R.length - 1] : "--",
                    T = M >= "2022-01-01" ? M : "--",
                    I = s.tq ? w.Z[n].Stats7 : w.Z[n].Stats6,
                    b = [{
                        label: w.Z[n].Stats1,
                        value: T
                    }, {
                        label: w.Z[n].Stats2,
                        value: y
                    }, {
                        label: w.Z[n].Stats3,
                        value: c
                    }, {
                        label: w.Z[n].Stats4,
                        value: f
                    }, {
                        label: w.Z[n].Stats5,
                        value: d
                    }, {
                        label: I,
                        value: L
                    }],
                    B = (0, l.useRef)(null);
                (0, l.useEffect)((function() {
                    function l(l) {
                        var e, a = l.target;
                        null !== (e = B.current) && void 0 !== e && e.contains(a) || t(!1)
                    }
                    return document.addEventListener("click", l),
                        function() {
                            document.removeEventListener("click", l)
                        }
                }), [t]);
                var v = (0, l.useState)(""),
                    U = (0, a.Z)(v, 2),
                    G = U[0],
                    P = U[1],
                    k = (0, l.useState)(!1),
                    H = (0, a.Z)(k, 2),
                    C = H[0],
                    x = H[1],
                    D = (0, l.useState)(!1),
                    W = (0, a.Z)(D, 2),
                    z = W[0],
                    Z = W[1];
                var j = (0, l.useState)(!1),
                    J = (0, a.Z)(j, 2),
                    q = J[0],
                    Y = J[1],
                    $ = big.toLocaleDateString("en-CA", {
                        year: "numeric",
                        month: "short",
                        day: "numeric"
                    }),
                    Q = "Invalid Date" === $ ? O.f : $;

                function X() {
                    return (X = (0, K.Z)(V().mark((function l() {
                        var e;
                        return V().wrap((function(l) {
                            for (;;) switch (l.prev = l.next) {
                                case 0:
                                    if (e = "\ud83c\udf0e ".concat(Q, " \ud83c\udf0d\n").concat(w.Z[n].Stats2, ": ").concat(y, "\n").concat(w.Z[n].Stats4, ": ").concat(f, "\n").concat(w.Z[n].Stats7, ": ").concat(L, "\n\n#globle"), m && (e = "\ud83c\udf0e ".concat(Q, " \ud83c\udf0d\n\ud83d\udd25 ").concat(f, " | ").concat(w.Z[n].Stats7, ": ").concat(L, "\n").concat(M === O.f ? m : "--", " = ").concat(y, "\n\n#globle")), !("canShare" in navigator) || !s.tq || s.vU) {
                                        l.next = 8;
                                        break
                                    }
                                    return l.next = 5, navigator.share({
                                        title: "Globle Stats",
                                        text: e
                                    });
                                case 5:
                                case 14:
                                    return l.abrupt("return", l.sent);
                                case 8:
                                    if (P(w.Z[n].Stats12), Y(!0), setTimeout((function() {
                                            return Y(!1)
                                        }), 2e3), !("clipboard" in navigator)) {
                                        l.next = 17;
                                        break
                                    }
                                    return l.next = 14, navigator.clipboard.writeText(e);
                                case 17:
                                    return l.abrupt("return", document.execCommand("copy", !0, e));
                                case 18:
                                case "end":
                                    return l.stop()
                            }
                        }), l)
                    })))).apply(this, arguments)
                }
                return (0, u.jsxs)("div", {
                    ref: B,
                    children: [(0, u.jsx)("button", {
                        className: "absolute top-3 right-4",
                        onClick: function() {
                            return t(!1)
                        },
                        children: (0, u.jsx)("svg", {
                            x: "0px",
                            y: "0px",
                            viewBox: "0 0 460.775 460.775",
                            width: "12px",
                            className: " dark:fill-gray-300",
                            children: (0, u.jsx)("path", {
                                d: N("x")
                            })
                        })
                    }), (0, u.jsx)("h2", {
                        className: "text-3xl text-center font-extrabold dark:text-gray-300",
                        style: {
                            fontFamily: "'Montserrat'"
                        },
                        children: (0, u.jsx)(A.Z, {
                            id: "StatsTitle"
                        })
                    }), (0, u.jsx)("table", {
                        cellPadding: "4rem",
                        className: "mx-auto dark:text-gray-300",
                        width: "100%",
                        children: (0, u.jsx)("tbody", {
                            children: b.map((function(l, e) {
                                return (0, u.jsxs)("tr", {
                                    children: [(0, u.jsx)("td", {
                                        className: "pt-4 border-b-2 border-dotted border-slate-700  text-lg font-medium",
                                        children: l.label
                                    }), (0, u.jsx)("td", {
                                        className: "pt-4 border-b-2 border-dotted border-slate-700  text-lg font-medium",
                                        children: l.value
                                    })]
                                }, e)
                            }))
                        })
                    }), (0, u.jsxs)("div", {
                        className: "py-6 flex w-full justify-around",
                        children: [(0, u.jsx)("button", {
                            className: "bg-red-700 text-white rounded-md px-6 py-2 block text-base font-medium hover:bg-red-900 focus:outline-none focus:ring-2 focus:ring-red-300 sm:mx-4",
                            onClick: function() {
                                P(w.Z[n].Stats10), Z(!1), x(!0)
                            },
                            children: (0, u.jsx)(A.Z, {
                                id: "Stats8"
                            })
                        }), (0, u.jsx)("button", {
                            className: "bg-blue-700 hover:bg-blue-900 dark:bg-purple-800 dark:hover:bg-purple-900 text-white rounded-md px-8 py-2 block text-base font-medium  focus:outline-none focus:ring-2 focus:ring-blue-300  justify-around sm:flex-grow sm:mx-10",
                            onClick: function() {
                                return X.apply(this, arguments)
                            },
                            children: (0, u.jsx)(A.Z, {
                                id: "Stats9"
                            })
                        })]
                    }), (0, u.jsxs)(S, {
                        show: C,
                        background: "border-4 border-sky-300 dark:border-slate-700 bg-sky-100  dark:bg-slate-900 drop-shadow-xl  absolute z-10 top-32 w-fit inset-x-0 mx-auto py-4 px-4 rounded-md space-y-2",
                        children: [(0, u.jsx)("p", {
                            className: "text-gray-900 dark:text-gray-300",
                            children: G
                        }), (0, u.jsxs)("div", {
                            className: "py-4 flex justify-center sm:space-x-8",
                            children: [(0, u.jsx)("button", {
                                className: "bg-red-700 text-white rounded-md px-6 py-2 block  text-base font-medium hover:bg-red-900 disabled:bg-red-900 focus:outline-none focus:ring-2 focus:ring-red-300",
                                onClick: function() {
                                    _(r), x(!1), setTimeout((function() {
                                        P(w.Z[n].Stats11), Y(!0)
                                    }), 200), setTimeout((function() {
                                        return Y(!1)
                                    }), 2200)
                                },
                                disabled: z,
                                children: "Yes"
                            }), (0, u.jsx)("button", {
                                className: "bg-blue-700 text-white rounded-md px-6 py-2 block  text-base font-medium hover:bg-blue-900 disabled:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-300",
                                onClick: function() {
                                    return x(!1)
                                },
                                disabled: z,
                                children: "No"
                            })]
                        })]
                    }), (0, u.jsx)(S, {
                        show: q,
                        background: "border-4 border-sky-300 dark:border-slate-700  bg-sky-100 dark:bg-slate-900 drop-shadow-xl  absolute z-10 top-32 w-fit inset-x-0 mx-auto py-4 px-4 rounded-md space-y-2",
                        children: (0, u.jsx)("p", {
                            className: "text-gray-900 dark:text-gray-300",
                            children: G
                        })
                    })]
                })
            }
            var Z = function() {
                    var e = (0, l.useState)("Help"),
                        t = (0, a.Z)(e, 2),
                        r = t[0],
                        i = t[1],
                        o = (0, l.useState)(!1),
                        E = (0, a.Z)(o, 2),
                        N = E[0],
                        A = E[1],
                        _ = (0, l.useState)(!1),
                        s = (0, a.Z)(_, 2),
                        c = s[0],
                        M = s[1],
                        d = (0, l.useContext)(n.N);
                    (0, l.useEffect)((function() {
                        "Game" === r && A(!0)
                    }), [r]), (0, l.useEffect)((function() {
                        N && setTimeout((function() {
                            return A(!1)
                        }), 1)
                    }), [N]);
                    var p = d.theme.nightMode ? "dark" : "";
                    return (0, u.jsxs)("div", {
                        className: "max-w-xs sm:max-w-md md:max-w-2xl mx-auto \n      z-20 absolute top-0 bottom-0 left-0 right-0 block ".concat(p),
                        children: [(0, u.jsx)(I, {
                            setScreen: i,
                            setReSpin: A,
                            setShowStats: M
                        }), (0, u.jsx)(S, {
                            show: c,
                            background: "border-4 border-sky-300 dark:border-slate-700 bg-sky-100  dark:bg-slate-900 drop-shadow-xl  absolute z-10 top-32 w-full sm:w-fit inset-x-0 mx-auto py-6 px-6 rounded-md  space-y-2",
                            children: (0, u.jsx)(z, {
                                setShowStats: M
                            })
                        }), "Help" === r ? (0, u.jsx)(f, {
                            screen: r,
                            setScreen: i,
                            children: (0, u.jsx)(G, {})
                        }) : "Info" === r ? (0, u.jsx)(f, {
                            screen: r,
                            setScreen: i,
                            children: (0, u.jsx)(P, {
                                setScreen: i
                            })
                        }) : "Settings" === r ? (0, u.jsx)(f, {
                            screen: r,
                            setScreen: i,
                            children: (0, u.jsx)(D, {})
                        }) : (0, u.jsx)(T, {
                            reSpin: N,
                            setShowStats: M
                        })]
                    })
                },
                j = F.Z;

            function J() {
                var e = (0, l.useContext)(n.N).theme.nightMode;
                return (0, u.jsxs)("div", {
                    className: "fixed top-0 bottom-0 left-0 right-0 ",
                    children: [(0, u.jsx)("div", {
                        style: e ? {
                            background: "radial-gradient(ellipse at top, #160152, black),\n    radial-gradient(ellipse at bottom, #7D3074, black) no-repeat fixed",
                            margin: 0
                        } : {
                            background: "radial-gradient(ellipse at top, rgba(63, 201, 255, 0.7), transparent),\n      radial-gradient(ellipse at bottom, rgba(255, 196, 87, 0.7), transparent) no-repeat fixed",
                            margin: 0
                        },
                        className: "absolute top-0 bottom-0 left-0 right-0 block z-0 h-full"
                    }), (0, u.jsx)("div", {
                        style: e ? {
                            background: "transparent url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/stars.png) repeat",
                            opacity: .5
                        } : {
                            backgroundImage: "url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/131045/clouds.png), url(https://assets.codepen.io/557388/clouds.png)",
                            backgroundRepeat: "repeat repeat",
                            marginTop: "8rem",
                            opacity: .2
                        },
                        className: "absolute top-0 bottom-0 left-0 right-0 block z-10"
                    })]
                })
            }
            e.render((0, u.jsx)(l.StrictMode, {
                children: (0, u.jsx)(n.f, {
                    children: (0, u.jsxs)(j, {
                        children: [(0, u.jsx)(Z, {}), (0, u.jsx)(J, {})]
                    })
                })
            }), document.getElementById("root"))
        }()
}();
//# sourceMappingURL=main.7aafa073.js.map