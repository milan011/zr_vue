webpackJsonp([10],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 1%\",\"last 2 versions\",\"not ie <= 8\"]}}],\"stage-2\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"transform-vue-jsx\",\"transform-runtime\"],\"env\":{\"development\":{\"plugins\":[\"dynamic-import-node\"]}}}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/user/passwordReset.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__ = __webpack_require__("./node_modules/babel-runtime/core-js/promise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_user__ = __webpack_require__("./resources/assets/js/api/user.js");

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'passwordReset',
  data: function data() {
    var _this = this;

    var validateRepeatPass = function validateRepeatPass(rule, value, callback) {
      /*密码确认校验*/
      if (value !== _this.temp.password) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    return {
      temp: {
        id: undefined,
        name: null,
        nick_name: null,
        password: '',
        oldPassword: '',
        password_confirmation: ''
      },
      password: 'password',
      oldPassword: 'oldPassword',
      password_confirmation: 'password_confirmation',
      passwordType: 'password',
      checkList: [],
      rules: {
        password: [{ required: true, message: '请输入密码', trigger: 'change' }, { min: 6, max: 16, message: '密码长度必须是6-16位', trigger: 'change' }],
        oldPassword: [{ required: true, message: '请输入密码', trigger: 'change' }, { min: 6, max: 16, message: '密码长度必须是6-16位', trigger: 'change' }],
        password_confirmation: [{ required: true, message: '请确认密码', trigger: 'change' }, { min: 6, max: 16, message: '密码长度必须是6-16位', trigger: 'change' }, { validator: validateRepeatPass, trigger: 'change' }]
      }
    };
  },

  computed: {
    //userName() {
    //console.log(this.$store.getters.name)
    //console.log(this.nick_name = this.$store.getters.nickName)
    //this.temp.name = this.$store.getters.name
    //this.temp.nick_name = this.$store.getters.nickName
    //return this.$store.getters.name
    //},
  },
  created: function created() {
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.all([
    // this.getRolesList()
    this.temp.name = this.$store.getters.name, this.temp.nick_name = this.$store.getters.nickName]);
  },

  methods: {
    resetPassword: function resetPassword() {
      var _this2 = this;

      this.$refs['dataForm'].validate(function (valid) {
        if (valid) {
          Object(__WEBPACK_IMPORTED_MODULE_1__api_user__["f" /* resetPassword */])(_this2.temp).then(function (response) {
            console.log(response.data);
            console.log(response.data.status);
            // return false
            if (response.data.status) {
              // alert('hehe')
              _this2.$store.dispatch('LogOut').then(function () {
                location.reload(); // In order to re-instantiate the vue-router object to avoid bugs
              });
              // this.$router.push({ path: '/login' })
              /*this.$notify({
                title: '成功',
                message: '密码已重置',
                type: 'success',
                duration: 2000
              })*/
            } else {
              _this2.$notify.error({
                title: '失败',
                message: response.data.message,
                type: 'waring',
                duration: 2000
              });
            }
          }).catch(function (error) {
            // console.log(error)
            switch (error.response.status) {
              case 422:
                var errMessage = error.response.data.errors;
                var messageShow = '<ul style="list-style-type:none;">';
                for (var prop in errMessage) {
                  //console.log(prop)
                  // console.log(`errMessage.${prop} = ${errMessage[prop]}`)
                  //console.log(errMessage[prop])
                  messageShow += '<li style="margin-bottom:5px;">';
                  messageShow += '' + errMessage[prop];
                  messageShow += '</li>';
                }
                messageShow += '</ul>';

                _this2.$message({
                  showClose: true,
                  message: messageShow,
                  type: 'error',
                  dangerouslyUseHTMLString: true,
                  duration: 0
                });
                break;
            }
            //return Promise.reject(error)
          });
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-510dab23\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/views/user/passwordReset.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-510dab23\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/user/passwordReset.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "el-form",
        {
          ref: "dataForm",
          staticStyle: {
            width: "400px",
            "margin-left": "50px",
            "margin-top": "15px"
          },
          attrs: {
            rules: _vm.rules,
            model: _vm.temp,
            "label-position": "left",
            "label-width": "100px"
          }
        },
        [
          _c(
            "el-form-item",
            { attrs: { label: _vm.$t("user.name") } },
            [
              _c("el-input", {
                attrs: { disabled: true },
                model: {
                  value: _vm.temp.name,
                  callback: function($$v) {
                    _vm.$set(_vm.temp, "name", $$v)
                  },
                  expression: "temp.name"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-form-item",
            { attrs: { label: _vm.$t("user.nick_name") } },
            [
              _c("el-input", {
                attrs: { disabled: true },
                model: {
                  value: _vm.temp.nick_name,
                  callback: function($$v) {
                    _vm.$set(_vm.temp, "nick_name", $$v)
                  },
                  expression: "temp.nick_name"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-form-item",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: true,
                  expression: "true"
                }
              ],
              attrs: { label: "原密码", prop: _vm.oldPassword }
            },
            [
              _c("el-input", {
                attrs: { type: _vm.passwordType },
                model: {
                  value: _vm.temp.oldPassword,
                  callback: function($$v) {
                    _vm.$set(_vm.temp, "oldPassword", $$v)
                  },
                  expression: "temp.oldPassword"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-form-item",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: true,
                  expression: "true"
                }
              ],
              attrs: { label: "新密码", prop: _vm.password }
            },
            [
              _c("el-input", {
                attrs: { type: _vm.passwordType },
                model: {
                  value: _vm.temp.password,
                  callback: function($$v) {
                    _vm.$set(_vm.temp, "password", $$v)
                  },
                  expression: "temp.password"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-form-item",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: true,
                  expression: "true"
                }
              ],
              attrs: { label: "确认密码", prop: _vm.password_confirmation }
            },
            [
              _c("el-input", {
                attrs: { type: _vm.passwordType },
                model: {
                  value: _vm.temp.password_confirmation,
                  callback: function($$v) {
                    _vm.$set(_vm.temp, "password_confirmation", $$v)
                  },
                  expression: "temp.password_confirmation"
                }
              })
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "dialog-footer",
          staticStyle: { "margin-left": "20px" },
          attrs: { slot: "footer" },
          slot: "footer"
        },
        [
          _c(
            "el-button",
            {
              attrs: { size: "big", type: "primary" },
              on: { click: _vm.resetPassword }
            },
            [_vm._v(_vm._s(_vm.$t("table.confirm")))]
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-510dab23", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-510dab23\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/views/user/passwordReset.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-510dab23\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/views/user/passwordReset.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-loader/node_modules/vue-style-loader/lib/addStylesClient.js")("1f15406c", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-510dab23\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./passwordReset.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-510dab23\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./passwordReset.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./resources/assets/js/api/user.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = fetchList;
/* harmony export (immutable) */ __webpack_exports__["h"] = userAll;
/* unused harmony export getRoles */
/* harmony export (immutable) */ __webpack_exports__["d"] = getUserRoles;
/* harmony export (immutable) */ __webpack_exports__["e"] = giveUserRoles;
/* unused harmony export fetchArticle */
/* unused harmony export fetchPv */
/* harmony export (immutable) */ __webpack_exports__["a"] = createUser;
/* harmony export (immutable) */ __webpack_exports__["f"] = resetPassword;
/* harmony export (immutable) */ __webpack_exports__["g"] = updateUser;
/* harmony export (immutable) */ __webpack_exports__["b"] = deleteUser;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_request__ = __webpack_require__("./resources/assets/js/utils/request.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_auth__ = __webpack_require__("./resources/assets/js/utils/auth.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_js__ = __webpack_require__("./resources/assets/js/config.js");




var token = Object(__WEBPACK_IMPORTED_MODULE_1__utils_auth__["a" /* getToken */])();

function fetchList(query) {
  var token = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Object(__WEBPACK_IMPORTED_MODULE_1__utils_auth__["a" /* getToken */])();

  return Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* default */])({
    // url: '/user/list',
    url: __WEBPACK_IMPORTED_MODULE_2__config_js__["a" /* ROAST_CONFIG */].API_URL + '/userList',
    method: 'get',
    query: query,
    params: { token: token, page: query.page }
  });
}

function userAll() {
  var token = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Object(__WEBPACK_IMPORTED_MODULE_1__utils_auth__["a" /* getToken */])();

  return Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* default */])({
    // url: '/user/list',
    url: __WEBPACK_IMPORTED_MODULE_2__config_js__["a" /* ROAST_CONFIG */].API_URL + '/userAll',
    method: 'get',
    params: { token: token }
  });
}

function getRoles(query) {
  var token = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Object(__WEBPACK_IMPORTED_MODULE_1__utils_auth__["a" /* getToken */])();

  return Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* default */])({
    // url: '/user/list',
    url: __WEBPACK_IMPORTED_MODULE_2__config_js__["a" /* ROAST_CONFIG */].API_URL + '/roleList',
    method: 'get',
    query: query,
    params: { token: token, page: query.page }
  });
}

function getUserRoles(data) {
  var token = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Object(__WEBPACK_IMPORTED_MODULE_1__utils_auth__["a" /* getToken */])();

  return Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* default */])({
    url: __WEBPACK_IMPORTED_MODULE_2__config_js__["a" /* ROAST_CONFIG */].API_URL + '/user/' + data.id + '/roles',
    method: 'get',
    params: { token: token },
    data: data
  });
}

function giveUserRoles(data) {
  var token = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Object(__WEBPACK_IMPORTED_MODULE_1__utils_auth__["a" /* getToken */])();

  return Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* default */])({
    url: __WEBPACK_IMPORTED_MODULE_2__config_js__["a" /* ROAST_CONFIG */].API_URL + '/giveUser/' + data.id + '/roles',
    method: 'post',
    params: { token: token },
    data: data
  });
}

function fetchArticle(id) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* default */])({
    url: '/article/detail',
    method: 'get',
    params: { id: id }
  });
}

function fetchPv(pv) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* default */])({
    url: '/article/pv',
    method: 'get',
    params: { pv: pv }
  });
}

function createUser(data) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* default */])({
    url: __WEBPACK_IMPORTED_MODULE_2__config_js__["a" /* ROAST_CONFIG */].API_URL + '/user',
    method: 'post',
    params: { token: token },
    data: data
  });
}

function resetPassword(data) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* default */])({
    url: __WEBPACK_IMPORTED_MODULE_2__config_js__["a" /* ROAST_CONFIG */].API_URL + '/resetPassword',
    method: 'post',
    params: { token: token },
    data: data
  });
}

function updateUser(data) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* default */])({
    url: __WEBPACK_IMPORTED_MODULE_2__config_js__["a" /* ROAST_CONFIG */].API_URL + '/user/' + data.id,
    method: 'put',
    params: { token: token },
    data: data
  });
}
function deleteUser(data) {
  var token = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Object(__WEBPACK_IMPORTED_MODULE_1__utils_auth__["a" /* getToken */])();

  return Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* default */])({
    url: __WEBPACK_IMPORTED_MODULE_2__config_js__["a" /* ROAST_CONFIG */].API_URL + '/user/' + data.id,
    method: 'delete',
    params: { token: token },
    data: data
  });
}

/***/ }),

/***/ "./resources/assets/js/views/user/passwordReset.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-loader/node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-510dab23\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/views/user/passwordReset.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 1%\",\"last 2 versions\",\"not ie <= 8\"]}}],\"stage-2\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"transform-vue-jsx\",\"transform-runtime\"],\"env\":{\"development\":{\"plugins\":[\"dynamic-import-node\"]}}}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/user/passwordReset.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-510dab23\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/user/passwordReset.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-510dab23"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/views/user/passwordReset.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-510dab23", Component.options)
  } else {
    hotAPI.reload("data-v-510dab23", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});