webpackHotUpdate("static\\development\\pages\\index.js", {

    /***/ "./pages/index.js":
    /*!************************!*\
      !*** ./pages/index.js ***!
      \************************/
    /*! exports provided: default */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* WEBPACK VAR INJECTION */
        (function (module) {/* harmony import */
            var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
            /* harmony import */
            var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
            /* harmony import */
            var _components_Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Navbar */ "./components/Navbar.js");
            /* harmony import */
            var _components_HeroLanding__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/HeroLanding */ "./components/HeroLanding.js");
            /* harmony import */
            var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
            /* harmony import */
            var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
            /* harmony import */
            var _components_SecondLanding__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/SecondLanding */ "./components/SecondLanding.js");
            /* harmony import */
            var _components_ThirdLanding__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/ThirdLanding */ "./components/ThirdLanding.js");
            /* harmony import */
            var _components_FourthLanding__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/FourthLanding */ "./components/FourthLanding.js");
            /* harmony import */
            var _components_FifthLanding__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/FifthLanding */ "./components/FifthLanding.js");
            /* harmony import */
            var _components_SixthLanding__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/SixthLanding */ "./components/SixthLanding.js");
            /* harmony import */
            var _components_SeventhLanding__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/SeventhLanding */ "./components/SeventhLanding.js");
            /* harmony import */
            var _components_Footer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");

            function _typeof(obj) {
                if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
                    _typeof = function _typeof(obj) {
                        return typeof obj;
                    };
                } else {
                    _typeof = function _typeof(obj) {
                        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
                    };
                }
                return _typeof(obj);
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            function _defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value" in descriptor) descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor);
                }
            }

            function _createClass(Constructor, protoProps, staticProps) {
                if (protoProps) _defineProperties(Constructor.prototype, protoProps);
                if (staticProps) _defineProperties(Constructor, staticProps);
                return Constructor;
            }

            function _possibleConstructorReturn(self, call) {
                if (call && (_typeof(call) === "object" || typeof call === "function")) {
                    return call;
                }
                return _assertThisInitialized(self);
            }

            function _assertThisInitialized(self) {
                if (self === void 0) {
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                }
                return self;
            }

            function _getPrototypeOf(o) {
                _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
                    return o.__proto__ || Object.getPrototypeOf(o);
                };
                return _getPrototypeOf(o);
            }

            function _inherits(subClass, superClass) {
                if (typeof superClass !== "function" && superClass !== null) {
                    throw new TypeError("Super expression must either be null or a function");
                }
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        writable: true,
                        configurable: true
                    }
                });
                if (superClass) _setPrototypeOf(subClass, superClass);
            }

            function _setPrototypeOf(o, p) {
                _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
                    o.__proto__ = p;
                    return o;
                };
                return _setPrototypeOf(o, p);
            }


            var Index =
                /*#__PURE__*/
                function (_Component) {
                    _inherits(Index, _Component);

                    function Index() {
                        _classCallCheck(this, Index);

                        return _possibleConstructorReturn(this, _getPrototypeOf(Index).apply(this, arguments));
                    }

                    _createClass(Index, [{
                        key: "componentDidMount",
                        value: function componentDidMount() {
                            var script = document.createElement("script");
                            script.src = "/static/js/script.js";
                            script.async = false;
                            document.body.appendChild(script); // if ('serviceWorker' in navigator) {
                            //     // Use the window load event to keep the page load performant
                            //     window.addEventListener('load', () => {
                            //         navigator.serviceWorker.register('/sw.js');
                            //         console.log("Masuk Gan")
                            //     });
                            // }
                        }
                    }, {
                        key: "render",
                        value: function render() {
                            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "Sigatsu - Siaga Tsunami"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
                                charSet: "UTF-8"
                            }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
                                name: "viewport",
                                content: "width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
                            }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
                                httpEquiv: "X-UA-Compatible",
                                content: "ie=edge"
                            }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
                                rel: "stylesheet",
                                href: "/static/css/hamburgers.min.css"
                            }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
                                rel: "stylesheet",
                                href: "/static/css/bootstrap.min.css"
                            }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
                                rel: "stylesheet",
                                href: "/static/css/animate.css"
                            }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
                                rel: "stylesheet",
                                href: "/static/css/main.css"
                            }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
                                rel: "stylesheet",
                                href: "/static/css/slick.css"
                            }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
                                rel: "stylesheet",
                                href: "/static/css/slick-theme.css"
                            }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
                                rel: "manifest",
                                href: "/static/manifest.json"
                            }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
                                rel: "shortcut icon",
                                href: "/favicon.ico",
                                type: "image/x-icon"
                            }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
                                rel: "icon",
                                href: "/favicon.ico",
                                type: "imag e/x-icon"
                            }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
                                href: "https://api.mapbox.com/mapbox-gl-js/v0.52.0/mapbox-gl.css",
                                rel: "stylesheet"
                            })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Navbar__WEBPACK_IMPORTED_MODULE_1__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_HeroLanding__WEBPACK_IMPORTED_MODULE_2__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_SecondLanding__WEBPACK_IMPORTED_MODULE_4__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ThirdLanding__WEBPACK_IMPORTED_MODULE_5__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_FourthLanding__WEBPACK_IMPORTED_MODULE_6__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_FifthLanding__WEBPACK_IMPORTED_MODULE_7__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_SixthLanding__WEBPACK_IMPORTED_MODULE_8__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_SeventhLanding__WEBPACK_IMPORTED_MODULE_9__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_10__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
                                src: "/static/js/jquery-min.js"
                            }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
                                src: "/static/js/jquery-ui.min.js"
                            }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
                                src: "/static/js/slick.min.js"
                            }));
                        }
                    }]);

                    return Index;
                }(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

            /* harmony default export */
            __webpack_exports__["default"] = (Index);
            (function (Component, route) {
                if (!Component) return;
                if (false) {
                }
                module.hot.accept();
                Component.__route = route;

                if (module.hot.status() === 'idle') return;

                var components = next.router.components;
                for (var r in components) {
                    if (!components.hasOwnProperty(r)) continue;

                    if (components[r].Component.__route === route) {
                        next.router.update(r, Component)
                    }
                }
            })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")

            /* WEBPACK VAR INJECTION */
        }.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

        /***/
    })

});
//# sourceMappingURL=index.js.98434171898268ed7a9c.hot-update.js.map