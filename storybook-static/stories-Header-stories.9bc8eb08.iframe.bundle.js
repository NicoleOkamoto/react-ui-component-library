(self.webpackChunk_nicoleokamoto_react_ui_component_library =
  self.webpackChunk_nicoleokamoto_react_ui_component_library || []).push([
  [512],
  {
    './src/stories/Header.stories.ts': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          LoggedIn: () => LoggedIn,
          LoggedOut: () => LoggedOut,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      var _storybook_test__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        './node_modules/@storybook/test/dist/index.mjs',
      );
      const __WEBPACK_DEFAULT_EXPORT__ = {
        title: 'Example/Header',
        component: __webpack_require__('./src/stories/Header.tsx').Y,
        tags: ['autodocs'],
        parameters: { layout: 'fullscreen' },
        args: {
          onLogin: (0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.fn)(),
          onLogout: (0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.fn)(),
          onCreateAccount: (0,
          _storybook_test__WEBPACK_IMPORTED_MODULE_0__.fn)(),
        },
      };
      var LoggedIn = { args: { user: { name: 'Jane Doe' } } },
        LoggedOut = {};
      (LoggedIn.parameters = {
        ...LoggedIn.parameters,
        docs: {
          ...LoggedIn.parameters?.docs,
          source: {
            originalSource:
              "{\n  args: {\n    user: {\n      name: 'Jane Doe'\n    }\n  }\n}",
            ...LoggedIn.parameters?.docs?.source,
          },
        },
      }),
        (LoggedOut.parameters = {
          ...LoggedOut.parameters,
          docs: {
            ...LoggedOut.parameters?.docs,
            source: {
              originalSource: '{}',
              ...LoggedOut.parameters?.docs?.source,
            },
          },
        });
      const __namedExportsOrder = ['LoggedIn', 'LoggedOut'];
    },
    './node_modules/@storybook/test/dist sync recursive': (module) => {
      function webpackEmptyContext(req) {
        var e = new Error("Cannot find module '" + req + "'");
        throw ((e.code = 'MODULE_NOT_FOUND'), e);
      }
      (webpackEmptyContext.keys = () => []),
        (webpackEmptyContext.resolve = webpackEmptyContext),
        (webpackEmptyContext.id =
          './node_modules/@storybook/test/dist sync recursive'),
        (module.exports = webpackEmptyContext);
    },
    './node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./src/stories/button.css':
      (module, __webpack_exports__, __webpack_require__) => {
        'use strict';
        __webpack_require__.d(__webpack_exports__, {
          A: () => __WEBPACK_DEFAULT_EXPORT__,
        });
        var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              './node_modules/css-loader/dist/runtime/sourceMaps.js',
            ),
          _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default =
            __webpack_require__.n(
              _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__,
            ),
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              './node_modules/css-loader/dist/runtime/api.js',
            ),
          ___CSS_LOADER_EXPORT___ = __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__,
          )()(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default(),
          );
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          ".storybook-button {\n  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  font-weight: 700;\n  border: 0;\n  border-radius: 3em;\n  cursor: pointer;\n  display: inline-block;\n  line-height: 1;\n}\n.storybook-button--primary {\n  color: white;\n  background-color: #1ea7fd;\n}\n.storybook-button--secondary {\n  color: #333;\n  background-color: transparent;\n  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;\n}\n.storybook-button--small {\n  font-size: 12px;\n  padding: 10px 16px;\n}\n.storybook-button--medium {\n  font-size: 14px;\n  padding: 11px 20px;\n}\n.storybook-button--large {\n  font-size: 16px;\n  padding: 12px 24px;\n}\n",
          '',
          {
            version: 3,
            sources: ['webpack://./src/stories/button.css'],
            names: [],
            mappings:
              'AAAA;EACE,0EAA0E;EAC1E,gBAAgB;EAChB,SAAS;EACT,kBAAkB;EAClB,eAAe;EACf,qBAAqB;EACrB,cAAc;AAChB;AACA;EACE,YAAY;EACZ,yBAAyB;AAC3B;AACA;EACE,WAAW;EACX,6BAA6B;EAC7B,qDAAqD;AACvD;AACA;EACE,eAAe;EACf,kBAAkB;AACpB;AACA;EACE,eAAe;EACf,kBAAkB;AACpB;AACA;EACE,eAAe;EACf,kBAAkB;AACpB',
            sourcesContent: [
              ".storybook-button {\n  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  font-weight: 700;\n  border: 0;\n  border-radius: 3em;\n  cursor: pointer;\n  display: inline-block;\n  line-height: 1;\n}\n.storybook-button--primary {\n  color: white;\n  background-color: #1ea7fd;\n}\n.storybook-button--secondary {\n  color: #333;\n  background-color: transparent;\n  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;\n}\n.storybook-button--small {\n  font-size: 12px;\n  padding: 10px 16px;\n}\n.storybook-button--medium {\n  font-size: 14px;\n  padding: 11px 20px;\n}\n.storybook-button--large {\n  font-size: 16px;\n  padding: 12px 24px;\n}\n",
            ],
            sourceRoot: '',
          },
        ]);
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
    './node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./src/stories/header.css':
      (module, __webpack_exports__, __webpack_require__) => {
        'use strict';
        __webpack_require__.d(__webpack_exports__, {
          A: () => __WEBPACK_DEFAULT_EXPORT__,
        });
        var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              './node_modules/css-loader/dist/runtime/sourceMaps.js',
            ),
          _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default =
            __webpack_require__.n(
              _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__,
            ),
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              './node_modules/css-loader/dist/runtime/api.js',
            ),
          ___CSS_LOADER_EXPORT___ = __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__,
          )()(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default(),
          );
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          ".storybook-header {\n  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n  padding: 15px 20px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.storybook-header svg {\n  display: inline-block;\n  vertical-align: top;\n}\n\n.storybook-header h1 {\n  font-weight: 700;\n  font-size: 20px;\n  line-height: 1;\n  margin: 6px 0 6px 10px;\n  display: inline-block;\n  vertical-align: top;\n}\n\n.storybook-header button + button {\n  margin-left: 10px;\n}\n\n.storybook-header .welcome {\n  color: #333;\n  font-size: 14px;\n  margin-right: 10px;\n}\n",
          '',
          {
            version: 3,
            sources: ['webpack://./src/stories/header.css'],
            names: [],
            mappings:
              'AAAA;EACE,0EAA0E;EAC1E,2CAA2C;EAC3C,kBAAkB;EAClB,aAAa;EACb,mBAAmB;EACnB,8BAA8B;AAChC;;AAEA;EACE,qBAAqB;EACrB,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;EAChB,eAAe;EACf,cAAc;EACd,sBAAsB;EACtB,qBAAqB;EACrB,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,WAAW;EACX,eAAe;EACf,kBAAkB;AACpB',
            sourcesContent: [
              ".storybook-header {\n  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n  padding: 15px 20px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.storybook-header svg {\n  display: inline-block;\n  vertical-align: top;\n}\n\n.storybook-header h1 {\n  font-weight: 700;\n  font-size: 20px;\n  line-height: 1;\n  margin: 6px 0 6px 10px;\n  display: inline-block;\n  vertical-align: top;\n}\n\n.storybook-header button + button {\n  margin-left: 10px;\n}\n\n.storybook-header .welcome {\n  color: #333;\n  font-size: 14px;\n  margin-right: 10px;\n}\n",
            ],
            sourceRoot: '',
          },
        ]);
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
    './src/stories/Button.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      'use strict';
      __webpack_require__.d(__webpack_exports__, { $: () => Button });
      var react = __webpack_require__('./node_modules/react/index.js'),
        injectStylesIntoStyleTag = __webpack_require__(
          './node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js',
        ),
        injectStylesIntoStyleTag_default = __webpack_require__.n(
          injectStylesIntoStyleTag,
        ),
        styleDomAPI = __webpack_require__(
          './node_modules/style-loader/dist/runtime/styleDomAPI.js',
        ),
        styleDomAPI_default = __webpack_require__.n(styleDomAPI),
        insertBySelector = __webpack_require__(
          './node_modules/style-loader/dist/runtime/insertBySelector.js',
        ),
        insertBySelector_default = __webpack_require__.n(insertBySelector),
        setAttributesWithoutAttributes = __webpack_require__(
          './node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js',
        ),
        setAttributesWithoutAttributes_default = __webpack_require__.n(
          setAttributesWithoutAttributes,
        ),
        insertStyleElement = __webpack_require__(
          './node_modules/style-loader/dist/runtime/insertStyleElement.js',
        ),
        insertStyleElement_default = __webpack_require__.n(insertStyleElement),
        styleTagTransform = __webpack_require__(
          './node_modules/style-loader/dist/runtime/styleTagTransform.js',
        ),
        styleTagTransform_default = __webpack_require__.n(styleTagTransform),
        stories_button = __webpack_require__(
          './node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./src/stories/button.css',
        ),
        options = {};
      (options.styleTagTransform = styleTagTransform_default()),
        (options.setAttributes = setAttributesWithoutAttributes_default()),
        (options.insert = insertBySelector_default().bind(null, 'head')),
        (options.domAPI = styleDomAPI_default()),
        (options.insertStyleElement = insertStyleElement_default());
      injectStylesIntoStyleTag_default()(stories_button.A, options);
      stories_button.A && stories_button.A.locals && stories_button.A.locals;
      function _define_property(obj, key, value) {
        return (
          key in obj
            ? Object.defineProperty(obj, key, {
                value,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (obj[key] = value),
          obj
        );
      }
      function _object_without_properties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function _object_without_properties_loose(
            source,
            excluded,
          ) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      var Button = function (_param) {
        var _param_primary = _param.primary,
          primary = void 0 !== _param_primary && _param_primary,
          _param_size = _param.size,
          size = void 0 === _param_size ? 'medium' : _param_size,
          backgroundColor = _param.backgroundColor,
          label = _param.label,
          props = _object_without_properties(_param, [
            'primary',
            'size',
            'backgroundColor',
            'label',
          ]),
          mode = primary
            ? 'storybook-button--primary'
            : 'storybook-button--secondary';
        return react.createElement(
          'button',
          (function _object_spread(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = null != arguments[i] ? arguments[i] : {},
                ownKeys = Object.keys(source);
              'function' == typeof Object.getOwnPropertySymbols &&
                (ownKeys = ownKeys.concat(
                  Object.getOwnPropertySymbols(source).filter(function (sym) {
                    return Object.getOwnPropertyDescriptor(source, sym)
                      .enumerable;
                  }),
                )),
                ownKeys.forEach(function (key) {
                  _define_property(target, key, source[key]);
                });
            }
            return target;
          })(
            {
              type: 'button',
              className: [
                'storybook-button',
                'storybook-button--'.concat(size),
                mode,
              ].join(' '),
              style: { backgroundColor },
            },
            props,
          ),
          label,
        );
      };
      Button.__docgenInfo = {
        description: 'Primary UI component for user interaction',
        methods: [],
        displayName: 'Button',
        props: {
          primary: {
            required: !1,
            tsType: { name: 'boolean' },
            description: 'Is this the principal call to action on the page?',
            defaultValue: { value: 'false', computed: !1 },
          },
          backgroundColor: {
            required: !1,
            tsType: { name: 'string' },
            description: 'What background color to use',
          },
          size: {
            required: !1,
            tsType: {
              name: 'union',
              raw: "'small' | 'medium' | 'large'",
              elements: [
                { name: 'literal', value: "'small'" },
                { name: 'literal', value: "'medium'" },
                { name: 'literal', value: "'large'" },
              ],
            },
            description: 'How large should the button be?',
            defaultValue: { value: "'medium'", computed: !1 },
          },
          label: {
            required: !0,
            tsType: { name: 'string' },
            description: 'Button contents',
          },
          onClick: {
            required: !1,
            tsType: {
              name: 'signature',
              type: 'function',
              raw: '() => void',
              signature: { arguments: [], return: { name: 'void' } },
            },
            description: 'Optional click handler',
          },
        },
      };
    },
    './src/stories/Header.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      'use strict';
      __webpack_require__.d(__webpack_exports__, { Y: () => Header });
      var react = __webpack_require__('./node_modules/react/index.js'),
        Button = __webpack_require__('./src/stories/Button.tsx'),
        injectStylesIntoStyleTag = __webpack_require__(
          './node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js',
        ),
        injectStylesIntoStyleTag_default = __webpack_require__.n(
          injectStylesIntoStyleTag,
        ),
        styleDomAPI = __webpack_require__(
          './node_modules/style-loader/dist/runtime/styleDomAPI.js',
        ),
        styleDomAPI_default = __webpack_require__.n(styleDomAPI),
        insertBySelector = __webpack_require__(
          './node_modules/style-loader/dist/runtime/insertBySelector.js',
        ),
        insertBySelector_default = __webpack_require__.n(insertBySelector),
        setAttributesWithoutAttributes = __webpack_require__(
          './node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js',
        ),
        setAttributesWithoutAttributes_default = __webpack_require__.n(
          setAttributesWithoutAttributes,
        ),
        insertStyleElement = __webpack_require__(
          './node_modules/style-loader/dist/runtime/insertStyleElement.js',
        ),
        insertStyleElement_default = __webpack_require__.n(insertStyleElement),
        styleTagTransform = __webpack_require__(
          './node_modules/style-loader/dist/runtime/styleTagTransform.js',
        ),
        styleTagTransform_default = __webpack_require__.n(styleTagTransform),
        header = __webpack_require__(
          './node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./src/stories/header.css',
        ),
        options = {};
      (options.styleTagTransform = styleTagTransform_default()),
        (options.setAttributes = setAttributesWithoutAttributes_default()),
        (options.insert = insertBySelector_default().bind(null, 'head')),
        (options.domAPI = styleDomAPI_default()),
        (options.insertStyleElement = insertStyleElement_default());
      injectStylesIntoStyleTag_default()(header.A, options);
      header.A && header.A.locals && header.A.locals;
      var Header = function (param) {
        var user = param.user,
          onLogin = param.onLogin,
          onLogout = param.onLogout,
          onCreateAccount = param.onCreateAccount;
        return react.createElement(
          'header',
          null,
          react.createElement(
            'div',
            { className: 'storybook-header' },
            react.createElement(
              'div',
              null,
              react.createElement(
                'svg',
                {
                  width: '32',
                  height: '32',
                  viewBox: '0 0 32 32',
                  xmlns: 'http://www.w3.org/2000/svg',
                },
                react.createElement(
                  'g',
                  { fill: 'none', fillRule: 'evenodd' },
                  react.createElement('path', {
                    d: 'M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z',
                    fill: '#FFF',
                  }),
                  react.createElement('path', {
                    d: 'M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z',
                    fill: '#555AB9',
                  }),
                  react.createElement('path', {
                    d: 'M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z',
                    fill: '#91BAF8',
                  }),
                ),
              ),
              react.createElement('h1', null, 'Acme'),
            ),
            react.createElement(
              'div',
              null,
              user
                ? react.createElement(
                    react.Fragment,
                    null,
                    react.createElement(
                      'span',
                      { className: 'welcome' },
                      'Welcome, ',
                      react.createElement('b', null, user.name),
                      '!',
                    ),
                    react.createElement(Button.$, {
                      size: 'small',
                      onClick: onLogout,
                      label: 'Log out',
                    }),
                  )
                : react.createElement(
                    react.Fragment,
                    null,
                    react.createElement(Button.$, {
                      size: 'small',
                      onClick: onLogin,
                      label: 'Log in',
                    }),
                    react.createElement(Button.$, {
                      primary: !0,
                      size: 'small',
                      onClick: onCreateAccount,
                      label: 'Sign up',
                    }),
                  ),
            ),
          ),
        );
      };
      Header.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'Header',
        props: {
          user: {
            required: !1,
            tsType: {
              name: 'signature',
              type: 'object',
              raw: '{\n  name: string;\n}',
              signature: {
                properties: [
                  { key: 'name', value: { name: 'string', required: !0 } },
                ],
              },
            },
            description: '',
          },
          onLogin: {
            required: !1,
            tsType: {
              name: 'signature',
              type: 'function',
              raw: '() => void',
              signature: { arguments: [], return: { name: 'void' } },
            },
            description: '',
          },
          onLogout: {
            required: !1,
            tsType: {
              name: 'signature',
              type: 'function',
              raw: '() => void',
              signature: { arguments: [], return: { name: 'void' } },
            },
            description: '',
          },
          onCreateAccount: {
            required: !1,
            tsType: {
              name: 'signature',
              type: 'function',
              raw: '() => void',
              signature: { arguments: [], return: { name: 'void' } },
            },
            description: '',
          },
        },
      };
    },
  },
]);
