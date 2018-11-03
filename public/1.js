webpackJsonp([1],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 1%\",\"last 2 versions\",\"not ie <= 8\"]}}],\"stage-2\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"transform-vue-jsx\",\"transform-runtime\"],\"env\":{\"development\":{\"plugins\":[\"dynamic-import-node\"]}}}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/user/components/SetRoles.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__ = __webpack_require__("./node_modules/babel-runtime/core-js/promise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_user__ = __webpack_require__("./resources/assets/js/api/user.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_role__ = __webpack_require__("./resources/assets/js/api/role.js");

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
      roleTemp: {
        id: null,
        roles: []
      },
      RoleListQuery: {
        page: 1
      },
      setRoles: '角色设置',
      // dialogFormVisible: false,
      roleDialogFormVisible: false,
      checkList: [],
      roles: []
    };
  },
  created: function created() {
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.all([this.getRolesList()]);
  },

  methods: {
    getRolesList: function getRolesList() {
      var _this = this;

      Object(__WEBPACK_IMPORTED_MODULE_2__api_role__["c" /* fetchList */])(this.RoleListQuery).then(function (response) {
        _this.roles = response.data.data;
      });
    },
    handleRoles: function handleRoles(row) {
      var _this2 = this;

      /*row参数为点击的用户对象*/
      Object(__WEBPACK_IMPORTED_MODULE_1__api_user__["d" /* getUserRoles */])(row).then(function (response) {
        console.log(response.data);
        _this2.checkList = response.data.data;
        _this2.roleTemp.id = row.id;
        _this2.roleDialogFormVisible = true;
      });

      // this.roleDialogFormVisible = true
      /*this.$nextTick(() => {
        this.$refs['roleDForm'].clearValidate()
      })*/
    },
    giveRoles: function giveRoles() {
      var _this3 = this;

      this.roleTemp.roles = this.checkList;
      // console.log(this.checkList)
      // console.log(this.roleTemp)
      // return false
      Object(__WEBPACK_IMPORTED_MODULE_1__api_user__["e" /* giveUserRoles */])(this.roleTemp).then(function (response) {
        _this3.roleDialogFormVisible = false;
        _this3.$notify({
          title: '成功',
          message: '角色设置成功',
          type: 'success',
          duration: 2000
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 1%\",\"last 2 versions\",\"not ie <= 8\"]}}],\"stage-2\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"transform-vue-jsx\",\"transform-runtime\"],\"env\":{\"development\":{\"plugins\":[\"dynamic-import-node\"]}}}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/user/index.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator__ = __webpack_require__("./node_modules/babel-runtime/core-js/get-iterator.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise__ = __webpack_require__("./node_modules/babel-runtime/core-js/promise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign__ = __webpack_require__("./node_modules/babel-runtime/core-js/object/assign.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_user__ = __webpack_require__("./resources/assets/js/api/user.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__directive_waves__ = __webpack_require__("./resources/assets/js/directive/waves/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils__ = __webpack_require__("./resources/assets/js/utils/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_validate__ = __webpack_require__("./resources/assets/js/utils/validate.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_SetRoles__ = __webpack_require__("./resources/assets/js/views/user/components/SetRoles.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_SetRoles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__components_SetRoles__);



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

// import { fetchList, fetchPv, createArticle, updateArticle } from '@/api/article'

 // 水波纹指令




var calendarTypeOptions = [{ key: 'CN', display_name: 'China' }, { key: 'US', display_name: 'USA' }, { key: 'JP', display_name: 'Japan' }, { key: 'EU', display_name: 'Eurozone' }];

// arr to obj ,such as { CN : "China", US : "USA" }
var calendarTypeKeyValue = calendarTypeOptions.reduce(function (acc, cur) {
  acc[cur.key] = cur.display_name;
  return acc;
}, {});

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'userList',
  components: { SetRoles: __WEBPACK_IMPORTED_MODULE_7__components_SetRoles___default.a },
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
    var _this = this;

    var validateRepeatPass = function validateRepeatPass(rule, value, callback) {
      /*密码确认校验*/
      // console.log(value)
      if (value !== _this.temp.password) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    var validateTelephone = function validateTelephone(rule, value, callback) {
      if (!Object(__WEBPACK_IMPORTED_MODULE_6__utils_validate__["a" /* isTelephone */])(value)) {
        callback(new Error('请输入正确格式手机号'));
      } else {
        callback();
      }
    };
    return {
      tableKey: 0,
      list: null,
      total: null,
      listLoading: true,
      listQuery: {
        page: 1
      },
      calendarTypeOptions: calendarTypeOptions,
      statusOptions: ['published', 'draft', 'deleted'],
      showReviewer: false,
      temp: {
        id: undefined,
        name: null,
        nick_name: null,
        remark: '',
        password: '',
        password_confirmation: '',
        email: '',
        telephone: ''
      },
      password: 'password',
      password_confirmation: 'password_confirmation',
      passwordType: 'password',
      dialogFormVisible: false,
      passwordVisible: true,
      dialogStatus: '',
      userNameDisabled: 'false',
      textMap: {
        update: '用户编辑',
        create: '用户创建'
      },
      dialogPvVisible: false,
      pvData: [],
      rules: {
        name: [{ required: true, message: '请输入用户名', trigger: 'change' }],
        nick_name: [{ required: true, message: '请输入昵称', trigger: 'change' }],
        password: [{ required: true, message: '请输入密码', trigger: 'change' }, { min: 6, max: 16, message: '密码长度必须是6-16位', trigger: 'change' }],
        password_confirmation: [{ required: true, message: '请确认密码', trigger: 'change' }, { min: 6, max: 16, message: '密码长度必须是6-16位', trigger: 'change' }, { validator: validateRepeatPass, trigger: 'change' }],
        email: [{ type: 'email', required: true, message: '请输入正确格式的邮箱', trigger: 'change' }],
        telephone: [{ required: true, message: '请输入有效手机号', trigger: 'blur' }, { validator: validateTelephone, trigger: 'change' }]
      },
      downloadLoading: false
    };
  },
  created: function created() {
    this.getList();
  },

  methods: {
    getList: function getList() {
      var _this2 = this;

      this.listLoading = true;
      Object(__WEBPACK_IMPORTED_MODULE_3__api_user__["c" /* fetchList */])(this.listQuery).then(function (response) {
        _this2.list = response.data.data;
        _this2.total = response.data.total;

        // Just to simulate the time of the request
        setTimeout(function () {
          _this2.listLoading = false;
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
      var _this3 = this;

      this.$confirm('确定要删除?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(function () {
        _this3.temp = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign___default()({}, row);
        Object(__WEBPACK_IMPORTED_MODULE_3__api_user__["b" /* deleteUser */])(_this3.temp).then(function (response) {
          // console.log(response.data);
          if (response.data.status === 0) {
            _this3.$notify({
              title: '失败',
              message: '删除失败',
              type: 'warning',
              duration: 2000
            });
          } else {
            var index = _this3.list.indexOf(row);
            _this3.list.splice(index, 1);
            _this3.dialogFormVisible = false;
            _this3.$notify({
              title: '成功',
              message: '删除成功',
              type: 'success',
              duration: 2000
            });
          }
        });
      }).catch(function (err) {
        console.log(err);
        /*switch (error.response.status) {
          case 422:
            
          break
        }*/
        _this3.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    },
    resetTemp: function resetTemp() {
      /*this.temp = {
        id: undefined,
        name: 'wxm',
        nick_name: 'wxm',
        remark: '闺女',
        password: '111111',
        password_confirmation : '111111',
        email: '',
        telephone: '13731080174'
      }*/
      this.temp = {
        id: undefined,
        name: null,
        nick_name: null,
        remark: '',
        password: '',
        password_confirmation: '',
        email: '',
        telephone: ''
      };
    },
    handleCreate: function handleCreate() {
      var _this4 = this;

      this.resetTemp();
      this.dialogStatus = 'create';
      this.userNameDisabled = false;
      this.passwordVisible = true;
      this.dialogFormVisible = true;
      this.password = 'password';
      this.password_confirmation = 'password_confirmation';
      this.$nextTick(function () {
        _this4.$refs['dataForm'].clearValidate();
      });
    },
    createData: function createData() {
      var _this5 = this;

      this.$refs['dataForm'].validate(function (valid) {
        if (valid) {
          Object(__WEBPACK_IMPORTED_MODULE_3__api_user__["a" /* createUser */])(_this5.temp).then(function (response) {
            /*console.log(response.data)
            return false*/
            var newUser = {
              id: response.data.data.id,
              name: response.data.data.name,
              nick_name: response.data.data.nick_name,
              telephone: response.data.data.telephone,
              created_at: new Date()
            };
            _this5.list.unshift(newUser);
            _this5.dialogFormVisible = false;
            _this5.$notify({
              title: '成功',
              message: '创建成功',
              type: 'success',
              duration: 2000
            });
          }).catch(function (error) {
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

                _this5.$message({
                  showClose: true,
                  message: messageShow,
                  type: 'error',
                  dangerouslyUseHTMLString: true,
                  duration: 0
                });
                /*this.$notify.erro({
                  title: '请注意',
                  message: '创建失败',
                  type: 'waring',
                  duration: 2000
                 })*/
                break;
              // 如果响应中的 http code 为 400，那么就弹出一条错误提示给用户
              /*case 400:
                  return this.$Message.error('数据过期,请重新登录')
                  break*/
            }
            return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default.a.reject(error);
          });
          /*.catch(function (error) {
            if (error.response) {
              // The request was made and the server responded with a status code
              // that falls out of the range of 2xx
              console.log(error.response.data);
              console.log(error.response.status);
              console.log(error.response.headers);
            } else if (error.request) {
              // The request was made but no response was received
              // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
              // http.ClientRequest in node.js
              console.log(error.request);
            } else {
              // Something happened in setting up the request that triggered an Error
              console.log('Error', error.message);
            }
            console.log(error.config);
          })*/
        }
      });
    },
    handleUpdate: function handleUpdate(row) {
      var _this6 = this;

      this.temp = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign___default()({}, row); // copy obj
      this.temp.timestamp = new Date(this.temp.timestamp);
      this.dialogStatus = 'update';
      this.userNameDisabled = true;
      this.password = null;
      this.password_confirmation = null;
      this.passwordVisible = false;
      this.dialogFormVisible = true;
      this.$nextTick(function () {
        _this6.$refs['dataForm'].clearValidate();
      });
    },
    updateData: function updateData() {
      var _this7 = this;

      this.$refs['dataForm'].validate(function (valid) {
        if (valid) {
          var tempData = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign___default()({}, _this7.temp);
          Object(__WEBPACK_IMPORTED_MODULE_3__api_user__["g" /* updateUser */])(tempData).then(function () {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
              for (var _iterator = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator___default()(_this7.list), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var v = _step.value;

                if (v.id === _this7.temp.id) {
                  var index = _this7.list.indexOf(v);
                  _this7.list.splice(index, 1, _this7.temp);
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

            _this7.dialogFormVisible = false;
            _this7.$notify({
              title: '成功',
              message: '更新成功',
              type: 'success',
              duration: 2000
            });
          });
        }
      });
    },
    handleSetRoles: function handleSetRoles(row) {
      this.$refs.roleChild.handleRoles(row);
    },
    giveUserRoles: function giveUserRoles() {
      this.$refs.roleChild.giveRoles();
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-04ab0ce3\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/views/user/components/SetRoles.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-36522081\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/views/user/index.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* .fixed-width .el-button--mini {\n  padding: 10px 3px;\n  width: 70px;\n  margin-left: 0px;\n} */\n", ""]);

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

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-04ab0ce3\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/user/components/SetRoles.vue":
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
          attrs: { title: _vm.setRoles, visible: _vm.roleDialogFormVisible },
          on: {
            "update:visible": function($event) {
              _vm.roleDialogFormVisible = $event
            }
          }
        },
        [
          _c(
            "el-form",
            {
              ref: "roleDForm",
              attrs: {
                model: _vm.roleTemp,
                "label-position": "left",
                "label-width": "100px"
              }
            },
            [
              _c(
                "el-checkbox-group",
                {
                  model: {
                    value: _vm.checkList,
                    callback: function($$v) {
                      _vm.checkList = $$v
                    },
                    expression: "checkList"
                  }
                },
                _vm._l(_vm.roles, function(role) {
                  return _c(
                    "el-checkbox",
                    {
                      key: role.id,
                      attrs: { border: "", size: "medium", label: role.name }
                    },
                    [
                      _vm._v(
                        "\r\n            " +
                          _vm._s(role.description) +
                          "\r\n          "
                      )
                    ]
                  )
                })
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
                      _vm.roleDialogFormVisible = false
                    }
                  }
                },
                [_vm._v(_vm._s(_vm.$t("table.cancel")))]
              ),
              _vm._v(" "),
              _c(
                "el-button",
                { attrs: { type: "primary" }, on: { click: _vm.giveRoles } },
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
    require("vue-hot-reload-api")      .rerender("data-v-04ab0ce3", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-36522081\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/user/index.vue":
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
              directives: [{ name: "waves", rawName: "v-waves" }],
              staticClass: "filter-item",
              attrs: { type: "primary", icon: "el-icon-search" },
              on: { click: _vm.handleFilter }
            },
            [_vm._v(_vm._s(_vm.$t("table.search")))]
          ),
          _vm._v(" "),
          _c(
            "el-button",
            {
              staticClass: "filter-item",
              staticStyle: { "margin-left": "10px" },
              attrs: { type: "primary", icon: "el-icon-edit" },
              on: { click: _vm.handleCreate }
            },
            [_vm._v(_vm._s(_vm.$t("table.add")))]
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
            attrs: { label: _vm.$t("user.nick_name"), align: "center" },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(scope) {
                  return [_c("span", [_vm._v(_vm._s(scope.row.nick_name))])]
                }
              }
            ])
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { label: _vm.$t("user.telephone"), align: "center" },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(scope) {
                  return [_c("span", [_vm._v(_vm._s(scope.row.telephone))])]
                }
              }
            ])
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: {
              label: _vm.$t("table.date"),
              width: "150px",
              align: "center"
            },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(scope) {
                  return [
                    _c("span", [
                      _vm._v(
                        _vm._s(
                          _vm._f("parseTime")(
                            scope.row.created_at,
                            "{y}-{m}-{d}"
                          )
                        )
                      )
                    ])
                  ]
                }
              }
            ])
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: {
              label: _vm.$t("table.actions"),
              align: "center",
              width: "230",
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
                            _vm.handleSetRoles(scope.row)
                          }
                        }
                      },
                      [_vm._v(_vm._s(_vm.$t("table.setRoles")))]
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
              staticStyle: { width: "400px", "margin-left": "50px" },
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
                { attrs: { label: _vm.$t("user.name"), prop: "name" } },
                [
                  _c("el-input", {
                    attrs: { disabled: _vm.userNameDisabled },
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
                  attrs: { label: _vm.$t("user.nick_name"), prop: "nick_name" }
                },
                [
                  _c("el-input", {
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
                      value: _vm.passwordVisible,
                      expression: "passwordVisible"
                    }
                  ],
                  attrs: { label: _vm.$t("user.password"), prop: _vm.password }
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
                      value: _vm.passwordVisible,
                      expression: "passwordVisible"
                    }
                  ],
                  attrs: {
                    label: _vm.$t("user.passwordRepeat"),
                    prop: _vm.password_confirmation
                  }
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
              ),
              _vm._v(" "),
              _c(
                "el-form-item",
                {
                  attrs: { label: _vm.$t("user.telephone"), prop: "telephone" }
                },
                [
                  _c("el-input", {
                    model: {
                      value: _vm.temp.telephone,
                      callback: function($$v) {
                        _vm.$set(_vm.temp, "telephone", $$v)
                      },
                      expression: "temp.telephone"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-form-item",
                { attrs: { label: _vm.$t("user.remark") } },
                [
                  _c("el-input", {
                    attrs: {
                      autosize: { minRows: 2, maxRows: 4 },
                      type: "textarea",
                      placeholder: "备注"
                    },
                    model: {
                      value: _vm.temp.remark,
                      callback: function($$v) {
                        _vm.$set(_vm.temp, "remark", $$v)
                      },
                      expression: "temp.remark"
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
      _c("set-roles", { ref: "roleChild" })
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
    require("vue-hot-reload-api")      .rerender("data-v-36522081", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-04ab0ce3\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/views/user/components/SetRoles.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-04ab0ce3\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/views/user/components/SetRoles.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-loader/node_modules/vue-style-loader/lib/addStylesClient.js")("588d66dc", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-04ab0ce3\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./SetRoles.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-04ab0ce3\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./SetRoles.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-loader/node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-36522081\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/views/user/index.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-36522081\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/views/user/index.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-loader/node_modules/vue-style-loader/lib/addStylesClient.js")("a1506fc8", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-36522081\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-36522081\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
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

/***/ "./resources/assets/js/api/user.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = fetchList;
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

/***/ "./resources/assets/js/views/user/components/SetRoles.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-loader/node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-04ab0ce3\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/views/user/components/SetRoles.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 1%\",\"last 2 versions\",\"not ie <= 8\"]}}],\"stage-2\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"transform-vue-jsx\",\"transform-runtime\"],\"env\":{\"development\":{\"plugins\":[\"dynamic-import-node\"]}}}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/user/components/SetRoles.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-04ab0ce3\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/user/components/SetRoles.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-04ab0ce3"
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
Component.options.__file = "resources/assets/js/views/user/components/SetRoles.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-04ab0ce3", Component.options)
  } else {
    hotAPI.reload("data-v-04ab0ce3", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/views/user/index.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-loader/node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-36522081\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/views/user/index.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 1%\",\"last 2 versions\",\"not ie <= 8\"]}}],\"stage-2\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"transform-vue-jsx\",\"transform-runtime\"],\"env\":{\"development\":{\"plugins\":[\"dynamic-import-node\"]}}}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/views/user/index.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-36522081\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/views/user/index.vue")
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
Component.options.__file = "resources/assets/js/views/user/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-36522081", Component.options)
  } else {
    hotAPI.reload("data-v-36522081", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});