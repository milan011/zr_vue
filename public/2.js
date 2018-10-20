webpackJsonp([2],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 1%\",\"last 2 versions\",\"not ie <= 8\"]}}],\"stage-2\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"transform-vue-jsx\",\"transform-runtime\"],\"env\":{\"development\":{\"plugins\":[\"dynamic-import-node\"]}}}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/role/components/Permission.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__ = __webpack_require__("./node_modules/babel-runtime/core-js/promise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_role__ = __webpack_require__("./resources/assets/js/api/role.js");

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


// const cityOptions = ['上海', '北京', '广州', '深圳'];
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      permissionTemp: {
        id: null,
        permissions: []
      },
      rolePermission: '权限编辑',
      // dialogFormVisible: false,
      permissionDialogFormVisible: false,
      checkList: ['user_list', 'role_list'],
      permissions: []
    };
  },
  created: function created() {
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.all([this.getPermissionList()]);
  },

  methods: {
    getPermissionList: function getPermissionList() {
      var _this = this;

      Object(__WEBPACK_IMPORTED_MODULE_1__api_role__["d" /* getPermissions */])().then(function (response) {
        _this.permissions = response.data.data;
      });
    },
    handlePermission: function handlePermission(row) {
      var _this2 = this;

      /*row参数为点击的角色信息对象*/
      Object(__WEBPACK_IMPORTED_MODULE_1__api_role__["e" /* getRolePermissions */])(row).then(function (response) {
        _this2.checkList = response.data;
        _this2.permissionTemp.id = row.id;
        _this2.permissionDialogFormVisible = true;
      });

      // this.permissionDialogFormVisible = true
      /*this.$nextTick(() => {
        this.$refs['permissionDForm'].clearValidate()
      })*/
    },
    givePermissions: function givePermissions() {
      var _this3 = this;

      this.permissionTemp.permissions = this.checkList;
      // console.log(this.checkList)
      // console.log(this.permissionTemp)
      // return false
      Object(__WEBPACK_IMPORTED_MODULE_1__api_role__["f" /* giveRolePermissions */])(this.permissionTemp).then(function (response) {
        _this3.permissionDialogFormVisible = false;
        _this3.$notify({
          title: '成功',
          message: '创建成功',
          type: 'success',
          duration: 2000
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 1%\",\"last 2 versions\",\"not ie <= 8\"]}}],\"stage-2\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"transform-vue-jsx\",\"transform-runtime\"],\"env\":{\"development\":{\"plugins\":[\"dynamic-import-node\"]}}}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/role/index.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator__ = __webpack_require__("./node_modules/babel-runtime/core-js/get-iterator.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign__ = __webpack_require__("./node_modules/babel-runtime/core-js/object/assign.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_promise__ = __webpack_require__("./node_modules/babel-runtime/core-js/promise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_role__ = __webpack_require__("./resources/assets/js/api/role.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__directive_waves__ = __webpack_require__("./resources/assets/js/directive/waves/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils__ = __webpack_require__("./resources/assets/js/utils/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_Permission__ = __webpack_require__("./resources/assets/js/views/role/components/Permission.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_Permission___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__components_Permission__);



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
//
//
//
//
//
//
//
//



 // 水波纹指令


// import SwitchRoles from './components/RolePermission'

var calendarTypeOptions = [{ key: 'web', display_name: 'web' }, { key: 'api', display_name: 'api' }];

// arr to obj ,such as { web : "web", api : "api" }
var calendarTypeKeyValue = calendarTypeOptions.reduce(function (acc, cur) {
  acc[cur.key] = cur.display_name;
  return acc;
}, {});

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'RoleTable',
  components: { SwitchRoles: __WEBPACK_IMPORTED_MODULE_6__components_Permission___default.a },
  directives: {
    waves: __WEBPACK_IMPORTED_MODULE_4__directive_waves__["a" /* default */]
  },
  filters: {
    statusFilter: function statusFilter(status) {
      var statusMap = {
        published: 'success',
        draft: 'info',
        deleted: 'danger'
      };
      return statusMap[status];
    },
    typeFilter: function typeFilter(type) {
      return calendarTypeKeyValue[type];
    }
  },
  data: function data() {
    return {
      tableKey: 0,
      list: null,
      permissionList: null,
      total: null,
      listLoading: true,
      listQuery: {
        page: 1,
        importance: undefined,
        name: undefined,
        guard_name: undefined
      },
      calendarTypeOptions: calendarTypeOptions,
      showReviewer: false,
      temp: {
        id: undefined,
        name: '',
        guard_name: '',
        description: ''
      },
      // permissionTemp: {},
      dialogFormVisible: false,
      /*permissionDialogFormVisible: false,*/
      dialogStatus: '',
      textMap: {
        update: '编辑角色',
        create: '新增角色'
      },
      // rolePermission:'权限编辑',
      // dialogPvVisible: false,
      pvData: [],
      rules: {
        guard_name: [{ required: true, message: '请选择标识', trigger: 'change' }],
        name: [{ required: true, message: '请输入名称', trigger: 'blur' }],
        description: [{ required: true, message: '请输入描述', trigger: 'blur' }]
      },
      downloadLoading: false
    };
  },
  created: function created() {
    // this.getList()
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_promise___default.a.all([this.getList()]
    // this.getPermissionList()
    );
  },

  methods: {
    getList: function getList() {
      var _this = this;

      this.listLoading = true;
      Object(__WEBPACK_IMPORTED_MODULE_3__api_role__["c" /* fetchList */])(this.listQuery).then(function (response) {
        _this.list = response.data.data;
        _this.total = response.data.total;

        // Just to simulate the time of the request
        setTimeout(function () {
          _this.listLoading = false;
        }, 1.5 * 1000);
      });
    },
    handleFilter: function handleFilter() {
      this.listQuery.page = 1;
      this.getList();
    },
    handleSizeChange: function handleSizeChange(val) {
      this.listQuery.limit = val;
      this.getList();
    },
    handleCurrentChange: function handleCurrentChange(val) {
      this.listQuery.page = val;
      this.getList();
    },
    handleModifyStatus: function handleModifyStatus(row, status) {
      var _this2 = this;

      this.$confirm('确定要删除?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(function () {
        _this2.temp = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default()({}, row);
        Object(__WEBPACK_IMPORTED_MODULE_3__api_role__["b" /* deleteRole */])(_this2.temp).then(function (response) {
          // console.log(response.data);
          if (response.data.status === 0) {
            _this2.$notify({
              title: '失败',
              message: '删除失败',
              type: 'warning',
              duration: 2000
            });
          } else {
            var index = _this2.list.indexOf(row);
            _this2.list.splice(index, 1);
            _this2.dialogFormVisible = false;
            _this2.$notify({
              title: '成功',
              message: '删除成功',
              type: 'success',
              duration: 2000
            });
          }
        });
      }).catch(function () {
        _this2.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    },
    resetTemp: function resetTemp() {
      this.temp = {
        id: undefined,
        name: '',
        guard_name: '',
        description: ''
      };
    },
    handleCreate: function handleCreate() {
      var _this3 = this;

      this.resetTemp();
      this.dialogStatus = 'create';
      this.dialogFormVisible = true;
      this.$nextTick(function () {
        _this3.$refs['dataForm'].clearValidate();
      });
    },
    createData: function createData() {
      var _this4 = this;

      this.$refs['dataForm'].validate(function (valid) {
        if (valid) {
          Object(__WEBPACK_IMPORTED_MODULE_3__api_role__["a" /* createRole */])(_this4.temp).then(function (response) {
            // console.log(response.data);
            _this4.temp.id = response.data.id;
            _this4.list.unshift(_this4.temp);
            _this4.dialogFormVisible = false;
            _this4.$notify({
              title: '成功',
              message: '创建成功',
              type: 'success',
              duration: 2000
            });
          });
        }
      });
    },
    handleUpdate: function handleUpdate(row) {
      var _this5 = this;

      this.temp = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default()({}, row); // copy obj
      this.dialogStatus = 'update';
      this.dialogFormVisible = true;
      this.$nextTick(function () {
        _this5.$refs['dataForm'].clearValidate();
      });
    },
    updateData: function updateData() {
      var _this6 = this;

      this.$refs['dataForm'].validate(function (valid) {
        if (valid) {
          var tempData = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default()({}, _this6.temp);
          Object(__WEBPACK_IMPORTED_MODULE_3__api_role__["g" /* updateRole */])(tempData).then(function () {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
              for (var _iterator = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator___default()(_this6.list), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var v = _step.value;

                if (v.id === _this6.temp.id) {
                  var index = _this6.list.indexOf(v);
                  _this6.list.splice(index, 1, _this6.temp);
                  break;
                }
              }
            } catch (err) {
              _didIteratorError = true;
              _iteratorError = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                  _iterator.return();
                }
              } finally {
                if (_didIteratorError) {
                  throw _iteratorError;
                }
              }
            }

            _this6.dialogFormVisible = false;
            _this6.$notify({
              title: '成功',
              message: '更新成功',
              type: 'success',
              duration: 2000
            });
          });
        }
      });
    },
    handleDelete: function handleDelete(row) {
      this.$notify({
        title: '成功',
        message: '删除成功',
        type: 'success',
        duration: 2000
      });
      var index = this.list.indexOf(row);
      this.list.splice(index, 1);
    },
    handleSetPermission: function handleSetPermission(row) {
      this.$refs.roleChild.handlePermission(row);
    },
    giveRolePermissions: function giveRolePermissions() {
      this.$refs.roleChild.givePermissions();
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2b37abbc\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/views/role/components/Permission.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7ceb1b6c\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/views/role/index.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* .fixed-width .el-button--mini {\n  padding: 10px 3px;\n  width: 70px;\n  margin-left: 0px;\n} */\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./resources/assets/js/directive/waves/waves.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".waves-ripple {\r\n    position: absolute;\r\n    border-radius: 100%;\r\n    background-color: rgba(0, 0, 0, 0.15);\r\n    background-clip: padding-box;\r\n    pointer-events: none;\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n    user-select: none;\r\n    -webkit-transform: scale(0);\r\n    -ms-transform: scale(0);\r\n    transform: scale(0);\r\n    opacity: 1;\r\n}\r\n\r\n.waves-ripple.z-active {\r\n    opacity: 0;\r\n    -webkit-transform: scale(2);\r\n    -ms-transform: scale(2);\r\n    transform: scale(2);\r\n    -webkit-transition: opacity 1.2s ease-out, -webkit-transform 0.6s ease-out;\r\n    transition: opacity 1.2s ease-out, -webkit-transform 0.6s ease-out;\r\n    transition: opacity 1.2s ease-out, transform 0.6s ease-out;\r\n    transition: opacity 1.2s ease-out, transform 0.6s ease-out, -webkit-transform 0.6s ease-out;\r\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-2b37abbc\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/role/components/Permission.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "el-dialog",
        {
          attrs: {
            title: _vm.rolePermission,
            visible: _vm.permissionDialogFormVisible
          },
          on: {
            "update:visible": function($event) {
              _vm.permissionDialogFormVisible = $event
            }
          }
        },
        [
          _c(
            "el-form",
            {
              ref: "permissionDForm",
              attrs: {
                model: _vm.permissionTemp,
                "label-position": "left",
                "label-width": "100px"
              }
            },
            _vm._l(_vm.permissions, function(per, group_index) {
              return _c(
                "el-checkbox-group",
                {
                  key: group_index,
                  model: {
                    value: _vm.checkList,
                    callback: function($$v) {
                      _vm.checkList = $$v
                    },
                    expression: "checkList"
                  }
                },
                [
                  _c(
                    "div",
                    { staticStyle: { "margin-bottom": "12px" } },
                    [
                      _c(
                        "span",
                        {
                          staticStyle: {
                            "font-size": "16px",
                            "margin-right": "5px"
                          }
                        },
                        [_vm._v(_vm._s(group_index) + ":")]
                      ),
                      _vm._v(" "),
                      _vm._l(per, function(p) {
                        return _c(
                          "el-checkbox",
                          {
                            key: p.id,
                            attrs: { border: "", size: "medium", label: p.name }
                          },
                          [
                            _vm._v(
                              "\r\n              " +
                                _vm._s(p.description) +
                                "\r\n            "
                            )
                          ]
                        )
                      })
                    ],
                    2
                  )
                ]
              )
            })
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "dialog-footer",
              attrs: { slot: "footer" },
              slot: "footer"
            },
            [
              _c(
                "el-button",
                {
                  on: {
                    click: function($event) {
                      _vm.permissionDialogFormVisible = false
                    }
                  }
                },
                [_vm._v(_vm._s(_vm.$t("table.cancel")))]
              ),
              _vm._v(" "),
              _c(
                "el-button",
                {
                  attrs: { type: "primary" },
                  on: { click: _vm.givePermissions }
                },
                [_vm._v(_vm._s(_vm.$t("table.confirm")))]
              )
            ],
            1
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
    require("vue-hot-reload-api")      .rerender("data-v-2b37abbc", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-7ceb1b6c\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/role/index.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "app-container" },
    [
      _c(
        "div",
        { staticClass: "filter-container" },
        [
          _c(
            "el-button",
            {
              staticClass: "filter-item",
              staticStyle: { "margin-left": "10px" },
              attrs: { type: "primary", icon: "el-icon-edit" },
              on: { click: _vm.handleCreate }
            },
            [_vm._v("\n      " + _vm._s(_vm.$t("table.add")) + "\n    ")]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "el-table",
        {
          directives: [
            {
              name: "loading",
              rawName: "v-loading",
              value: _vm.listLoading,
              expression: "listLoading"
            }
          ],
          key: _vm.tableKey,
          staticStyle: { width: "100%" },
          attrs: {
            data: _vm.list,
            border: "",
            fit: "",
            "highlight-current-row": ""
          }
        },
        [
          _c("el-table-column", {
            attrs: { label: _vm.$t("table.id"), align: "center" },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(scope) {
                  return [_c("span", [_vm._v(_vm._s(scope.row.id))])]
                }
              }
            ])
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { label: _vm.$t("role.name"), align: "center" },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(scope) {
                  return [_c("span", [_vm._v(_vm._s(scope.row.name))])]
                }
              }
            ])
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { label: _vm.$t("role.guard_name"), align: "center" },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(scope) {
                  return [_c("span", [_vm._v(_vm._s(scope.row.guard_name))])]
                }
              }
            ])
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { label: _vm.$t("role.description"), align: "center" },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(scope) {
                  return [_c("span", [_vm._v(_vm._s(scope.row.description))])]
                }
              }
            ])
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: {
              label: _vm.$t("table.actions"),
              align: "center",
              "show-overflow-tooltip": "",
              "class-name": "small-padding fixed-width"
            },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(scope) {
                  return [
                    _c(
                      "el-button",
                      {
                        attrs: { type: "primary", size: "mini" },
                        on: {
                          click: function($event) {
                            _vm.handleUpdate(scope.row)
                          }
                        }
                      },
                      [_vm._v(_vm._s(_vm.$t("table.edit")))]
                    ),
                    _vm._v(" "),
                    _c(
                      "el-button",
                      {
                        attrs: { type: "success", size: "mini" },
                        on: {
                          click: function($event) {
                            _vm.handleSetPermission(scope.row)
                          }
                        }
                      },
                      [_vm._v(_vm._s(_vm.$t("table.editPermissions")))]
                    ),
                    _vm._v(" "),
                    scope.row.status != "deleted"
                      ? _c(
                          "el-button",
                          {
                            attrs: { size: "mini", type: "danger" },
                            on: {
                              click: function($event) {
                                _vm.handleModifyStatus(scope.row, "deleted")
                              }
                            }
                          },
                          [
                            _vm._v(
                              _vm._s(_vm.$t("table.delete")) + "\n        "
                            )
                          ]
                        )
                      : _vm._e()
                  ]
                }
              }
            ])
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "pagination-container" },
        [
          _c("el-pagination", {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.total > 0,
                expression: "total>0"
              }
            ],
            attrs: {
              "current-page": _vm.listQuery.page,
              total: _vm.total,
              background: "",
              layout: "total, prev, pager, next"
            },
            on: { "current-change": _vm.handleCurrentChange }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "el-dialog",
        {
          attrs: {
            title: _vm.textMap[_vm.dialogStatus],
            visible: _vm.dialogFormVisible
          },
          on: {
            "update:visible": function($event) {
              _vm.dialogFormVisible = $event
            }
          }
        },
        [
          _c(
            "el-form",
            {
              ref: "dataForm",
              staticStyle: { width: "400px" },
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
                { attrs: { label: _vm.$t("role.name"), prop: "name" } },
                [
                  _c("el-input", {
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
                {
                  attrs: {
                    label: _vm.$t("role.description"),
                    prop: "description"
                  }
                },
                [
                  _c("el-input", {
                    model: {
                      value: _vm.temp.description,
                      callback: function($$v) {
                        _vm.$set(_vm.temp, "description", $$v)
                      },
                      expression: "temp.description"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-form-item",
                {
                  attrs: {
                    label: _vm.$t("role.guard_name"),
                    prop: "guard_name"
                  }
                },
                [
                  _c(
                    "el-select",
                    {
                      staticClass: "filter-item",
                      attrs: { placeholder: "请选择标识" },
                      model: {
                        value: _vm.temp.guard_name,
                        callback: function($$v) {
                          _vm.$set(_vm.temp, "guard_name", $$v)
                        },
                        expression: "temp.guard_name"
                      }
                    },
                    _vm._l(_vm.calendarTypeOptions, function(item) {
                      return _c("el-option", {
                        key: item.key,
                        attrs: { label: item.display_name, value: item.key }
                      })
                    })
                  )
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
              attrs: { slot: "footer" },
              slot: "footer"
            },
            [
              _c(
                "el-button",
                {
                  on: {
                    click: function($event) {
                      _vm.dialogFormVisible = false
                    }
                  }
                },
                [_vm._v(_vm._s(_vm.$t("table.cancel")))]
              ),
              _vm._v(" "),
              _vm.dialogStatus == "create"
                ? _c(
                    "el-button",
                    {
                      attrs: { type: "primary" },
                      on: { click: _vm.createData }
                    },
                    [_vm._v(_vm._s(_vm.$t("table.confirm")))]
                  )
                : _c(
                    "el-button",
                    {
                      attrs: { type: "primary" },
                      on: { click: _vm.updateData }
                    },
                    [_vm._v(_vm._s(_vm.$t("table.confirm")))]
                  )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("switch-roles", { ref: "roleChild" })
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
    require("vue-hot-reload-api")      .rerender("data-v-7ceb1b6c", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2b37abbc\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/views/role/components/Permission.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2b37abbc\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/views/role/components/Permission.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-loader/node_modules/vue-style-loader/lib/addStylesClient.js")("2c8256cd", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2b37abbc\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Permission.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2b37abbc\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Permission.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-loader/node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7ceb1b6c\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/views/role/index.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7ceb1b6c\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/views/role/index.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-loader/node_modules/vue-style-loader/lib/addStylesClient.js")("a36fe452", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7ceb1b6c\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7ceb1b6c\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./resources/assets/js/api/role.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = fetchList;
/* harmony export (immutable) */ __webpack_exports__["a"] = createRole;
/* harmony export (immutable) */ __webpack_exports__["g"] = updateRole;
/* harmony export (immutable) */ __webpack_exports__["b"] = deleteRole;
/* harmony export (immutable) */ __webpack_exports__["e"] = getRolePermissions;
/* harmony export (immutable) */ __webpack_exports__["f"] = giveRolePermissions;
/* harmony export (immutable) */ __webpack_exports__["d"] = getPermissions;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_request__ = __webpack_require__("./resources/assets/js/utils/request.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_auth__ = __webpack_require__("./resources/assets/js/utils/auth.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_js__ = __webpack_require__("./resources/assets/js/config.js");




var token = Object(__WEBPACK_IMPORTED_MODULE_1__utils_auth__["a" /* getToken */])();

function fetchList(query) {
  var token = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Object(__WEBPACK_IMPORTED_MODULE_1__utils_auth__["a" /* getToken */])();

  return Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* default */])({
    // url: '/user/list',
    url: __WEBPACK_IMPORTED_MODULE_2__config_js__["a" /* ROAST_CONFIG */].API_URL + '/roleList',
    method: 'get',
    params: { query: query, token: token, page: query.page }
  });
}

function createRole(data) {
  var token = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Object(__WEBPACK_IMPORTED_MODULE_1__utils_auth__["a" /* getToken */])();

  return Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* default */])({
    url: __WEBPACK_IMPORTED_MODULE_2__config_js__["a" /* ROAST_CONFIG */].API_URL + '/role',
    method: 'post',
    data: data,
    params: { token: token }
  });
}

function updateRole(data) {
  var token = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Object(__WEBPACK_IMPORTED_MODULE_1__utils_auth__["a" /* getToken */])();

  return Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* default */])({
    url: __WEBPACK_IMPORTED_MODULE_2__config_js__["a" /* ROAST_CONFIG */].API_URL + '/role/' + data.id,
    method: 'put',
    params: { token: token },
    data: data
  });
}

function deleteRole(data) {
  var token = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Object(__WEBPACK_IMPORTED_MODULE_1__utils_auth__["a" /* getToken */])();

  return Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* default */])({
    url: __WEBPACK_IMPORTED_MODULE_2__config_js__["a" /* ROAST_CONFIG */].API_URL + '/role/' + data.id,
    method: 'delete',
    params: { token: token },
    data: data
  });
}

function getRolePermissions(data) {
  var token = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Object(__WEBPACK_IMPORTED_MODULE_1__utils_auth__["a" /* getToken */])();

  return Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* default */])({
    url: __WEBPACK_IMPORTED_MODULE_2__config_js__["a" /* ROAST_CONFIG */].API_URL + '/role/' + data.id + '/permissions',
    method: 'get',
    params: { token: token },
    data: data
  });
}

function giveRolePermissions(data) {
  var token = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Object(__WEBPACK_IMPORTED_MODULE_1__utils_auth__["a" /* getToken */])();

  return Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* default */])({
    url: __WEBPACK_IMPORTED_MODULE_2__config_js__["a" /* ROAST_CONFIG */].API_URL + '/giveRole/' + data.id + '/permissions',
    method: 'post',
    params: { token: token },
    data: data
  });
}

function getPermissions() {
  var token = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Object(__WEBPACK_IMPORTED_MODULE_1__utils_auth__["a" /* getToken */])();

  return Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* default */])({
    url: __WEBPACK_IMPORTED_MODULE_2__config_js__["a" /* ROAST_CONFIG */].API_URL + '/permissionAll',
    method: 'get',
    params: { token: token }
  });
}

/***/ }),

/***/ "./resources/assets/js/directive/waves/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__waves__ = __webpack_require__("./resources/assets/js/directive/waves/waves.js");


var install = function install(Vue) {
  Vue.directive('waves', __WEBPACK_IMPORTED_MODULE_0__waves__["a" /* default */]);
};

if (window.Vue) {
  window.waves = __WEBPACK_IMPORTED_MODULE_0__waves__["a" /* default */];
  Vue.use(install); // eslint-disable-line
}

__WEBPACK_IMPORTED_MODULE_0__waves__["a" /* default */].install = install;
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__waves__["a" /* default */]);

/***/ }),

/***/ "./resources/assets/js/directive/waves/waves.css":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./resources/assets/js/directive/waves/waves.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__("./node_modules/style-loader/lib/addStyles.js")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../../node_modules/css-loader/index.js!./waves.css", function() {
			var newContent = require("!!../../../../../node_modules/css-loader/index.js!./waves.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./resources/assets/js/directive/waves/waves.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__("./node_modules/babel-runtime/core-js/object/assign.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__waves_css__ = __webpack_require__("./resources/assets/js/directive/waves/waves.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__waves_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__waves_css__);



/* harmony default export */ __webpack_exports__["a"] = ({
  bind: function bind(el, binding) {
    el.addEventListener('click', function (e) {
      var customOpts = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({}, binding.value);
      var opts = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({
        ele: el, // 波纹作用元素
        type: 'hit', // hit 点击位置扩散 center中心点扩展
        color: 'rgba(0, 0, 0, 0.15)' // 波纹颜色
      }, customOpts);
      var target = opts.ele;
      if (target) {
        target.style.position = 'relative';
        target.style.overflow = 'hidden';
        var rect = target.getBoundingClientRect();
        var ripple = target.querySelector('.waves-ripple');
        if (!ripple) {
          ripple = document.createElement('span');
          ripple.className = 'waves-ripple';
          ripple.style.height = ripple.style.width = Math.max(rect.width, rect.height) + 'px';
          target.appendChild(ripple);
        } else {
          ripple.className = 'waves-ripple';
        }
        switch (opts.type) {
          case 'center':
            ripple.style.top = rect.height / 2 - ripple.offsetHeight / 2 + 'px';
            ripple.style.left = rect.width / 2 - ripple.offsetWidth / 2 + 'px';
            break;
          default:
            ripple.style.top = (e.pageY - rect.top - ripple.offsetHeight / 2 - document.documentElement.scrollTop || document.body.scrollTop) + 'px';
            ripple.style.left = (e.pageX - rect.left - ripple.offsetWidth / 2 - document.documentElement.scrollLeft || document.body.scrollLeft) + 'px';
        }
        ripple.style.backgroundColor = opts.color;
        ripple.className = 'waves-ripple z-active';
        return false;
      }
    }, false);
  }
});

/***/ }),

/***/ "./resources/assets/js/views/role/components/Permission.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-loader/node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2b37abbc\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/views/role/components/Permission.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 1%\",\"last 2 versions\",\"not ie <= 8\"]}}],\"stage-2\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"transform-vue-jsx\",\"transform-runtime\"],\"env\":{\"development\":{\"plugins\":[\"dynamic-import-node\"]}}}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/role/components/Permission.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-2b37abbc\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/role/components/Permission.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-2b37abbc"
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
Component.options.__file = "resources/assets/js/views/role/components/Permission.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2b37abbc", Component.options)
  } else {
    hotAPI.reload("data-v-2b37abbc", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/views/role/index.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-loader/node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7ceb1b6c\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/views/role/index.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 1%\",\"last 2 versions\",\"not ie <= 8\"]}}],\"stage-2\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"transform-vue-jsx\",\"transform-runtime\"],\"env\":{\"development\":{\"plugins\":[\"dynamic-import-node\"]}}}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/role/index.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-7ceb1b6c\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/role/index.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
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
Component.options.__file = "resources/assets/js/views/role/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7ceb1b6c", Component.options)
  } else {
    hotAPI.reload("data-v-7ceb1b6c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});