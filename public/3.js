webpackJsonp([3],{1030:function(n,e,t){var a=t(3)(t(584),t(590),!1,function(n){t(582)},null,null);n.exports=a.exports},386:function(n,e,t){"use strict";var a=t(83),s=t.n(a),i=(t(387),{bind:function(n,e){n.addEventListener("click",function(t){var a=s()({},e.value),i=s()({ele:n,type:"hit",color:"rgba(0, 0, 0, 0.15)"},a),r=i.ele;if(r){r.style.position="relative",r.style.overflow="hidden";var o=r.getBoundingClientRect(),l=r.querySelector(".waves-ripple");switch(l?l.className="waves-ripple":((l=document.createElement("span")).className="waves-ripple",l.style.height=l.style.width=Math.max(o.width,o.height)+"px",r.appendChild(l)),i.type){case"center":l.style.top=o.height/2-l.offsetHeight/2+"px",l.style.left=o.width/2-l.offsetWidth/2+"px";break;default:l.style.top=(t.pageY-o.top-l.offsetHeight/2-document.documentElement.scrollTop||document.body.scrollTop)+"px",l.style.left=(t.pageX-o.left-l.offsetWidth/2-document.documentElement.scrollLeft||document.body.scrollLeft)+"px"}return l.style.backgroundColor=i.color,l.className="waves-ripple z-active",!1}},!1)}}),r=function(n){n.directive("waves",i)};window.Vue&&(window.waves=i,Vue.use(r)),i.install=r;e.a=i},387:function(n,e,t){var a=t(388);"string"==typeof a&&(a=[[n.i,a,""]]);var s={transform:void 0};t(40)(a,s);a.locals&&(n.exports=a.locals)},388:function(n,e,t){(n.exports=t(2)(!1)).push([n.i,".waves-ripple {\r\n    position: absolute;\r\n    border-radius: 100%;\r\n    background-color: rgba(0, 0, 0, 0.15);\r\n    background-clip: padding-box;\r\n    pointer-events: none;\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n    user-select: none;\r\n    -webkit-transform: scale(0);\r\n    -ms-transform: scale(0);\r\n    transform: scale(0);\r\n    opacity: 1;\r\n}\r\n\r\n.waves-ripple.z-active {\r\n    opacity: 0;\r\n    -webkit-transform: scale(2);\r\n    -ms-transform: scale(2);\r\n    transform: scale(2);\r\n    -webkit-transition: opacity 1.2s ease-out, -webkit-transform 0.6s ease-out;\r\n    transition: opacity 1.2s ease-out, -webkit-transform 0.6s ease-out;\r\n    transition: opacity 1.2s ease-out, transform 0.6s ease-out;\r\n    transition: opacity 1.2s ease-out, transform 0.6s ease-out, -webkit-transform 0.6s ease-out;\r\n}",""])},415:function(n,e,t){"use strict";e.c=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Object(s.a)();return Object(a.a)({url:i.a.API_URL+"/userList",method:"get",query:n,params:{token:e,page:n.page}})},e.h=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Object(s.a)();return Object(a.a)({url:i.a.API_URL+"/userAll",method:"get",params:{token:n}})},e.d=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Object(s.a)();return Object(a.a)({url:i.a.API_URL+"/user/"+n.id+"/roles",method:"get",params:{token:e},data:n})},e.e=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Object(s.a)();return Object(a.a)({url:i.a.API_URL+"/giveUser/"+n.id+"/roles",method:"post",params:{token:e},data:n})},e.a=function(n){return Object(a.a)({url:i.a.API_URL+"/user",method:"post",params:{token:r},data:n})},e.f=function(n){return Object(a.a)({url:i.a.API_URL+"/resetPassword",method:"post",params:{token:r},data:n})},e.g=function(n){return Object(a.a)({url:i.a.API_URL+"/user/"+n.id,method:"put",params:{token:r},data:n})},e.b=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Object(s.a)();return Object(a.a)({url:i.a.API_URL+"/user/"+n.id,method:"delete",params:{token:e},data:n})};var a=t(118),s=t(46),i=t(117),r=Object(s.a)()},441:function(n,e,t){"use strict";e.c=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Object(s.a)();return Object(a.a)({url:i.a.API_URL+"/roleList",method:"get",params:{query:n,token:e,page:n.page}})},e.a=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Object(s.a)();return Object(a.a)({url:i.a.API_URL+"/role",method:"post",data:n,params:{token:e}})},e.g=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Object(s.a)();return Object(a.a)({url:i.a.API_URL+"/role/"+n.id,method:"put",params:{token:e},data:n})},e.b=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Object(s.a)();return Object(a.a)({url:i.a.API_URL+"/role/"+n.id,method:"delete",params:{token:e},data:n})},e.e=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Object(s.a)();return Object(a.a)({url:i.a.API_URL+"/role/"+n.id+"/permissions",method:"get",params:{token:e},data:n})},e.f=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Object(s.a)();return Object(a.a)({url:i.a.API_URL+"/giveRole/"+n.id+"/permissions",method:"post",params:{token:e},data:n})},e.d=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Object(s.a)();return Object(a.a)({url:i.a.API_URL+"/permissionAll",method:"get",params:{token:n}})};var a=t(118),s=t(46),i=t(117);Object(s.a)()},582:function(n,e,t){var a=t(583);"string"==typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);t(6)("702316e6",a,!0,{})},583:function(n,e,t){(n.exports=t(2)(!1)).push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* .fixed-width .el-button--mini {\n  padding: 10px 3px;\n  width: 70px;\n  margin-left: 0px;\n} */\n",""])},584:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=t(47),s=t.n(a),i=t(39),r=t.n(i),o=t(83),l=t.n(o),c=t(415),d=t(386),u=(t(119),t(120)),p=t(585),m=t.n(p),f=[{key:"CN",display_name:"China"},{key:"US",display_name:"USA"},{key:"JP",display_name:"Japan"},{key:"EU",display_name:"Eurozone"}],h=f.reduce(function(n,e){return n[e.key]=e.display_name,n},{});e.default={name:"userList",components:{SetRoles:m.a},directives:{waves:d.a},filters:{statusFilter:function(n){return{published:"success",draft:"info",deleted:"danger"}[n]},typeFilter:function(n){return h[n]}},data:function(){var n=this;return{tableKey:0,list:null,total:null,listLoading:!0,listQuery:{page:1},calendarTypeOptions:f,statusOptions:["published","draft","deleted"],showReviewer:!1,temp:{id:void 0,name:null,nick_name:null,remark:"",password:"",password_confirmation:"",email:"",telephone:""},password:"password",password_confirmation:"password_confirmation",passwordType:"password",dialogFormVisible:!1,passwordVisible:!0,dialogStatus:"",userNameDisabled:"false",textMap:{update:"用户编辑",create:"用户创建"},dialogPvVisible:!1,pvData:[],rules:{name:[{required:!0,message:"请输入用户名",trigger:"change"}],nick_name:[{required:!0,message:"请输入昵称",trigger:"change"}],password:[{required:!0,message:"请输入密码",trigger:"change"},{min:6,max:16,message:"密码长度必须是6-16位",trigger:"change"}],password_confirmation:[{required:!0,message:"请确认密码",trigger:"change"},{min:6,max:16,message:"密码长度必须是6-16位",trigger:"change"},{validator:function(e,t,a){t!==n.temp.password?a(new Error("两次输入密码不一致!")):a()},trigger:"change"}],email:[{type:"email",required:!0,message:"请输入正确格式的邮箱",trigger:"change"}],telephone:[{required:!0,message:"请输入有效手机号",trigger:"blur"},{validator:function(n,e,t){Object(u.c)(e)?t():t(new Error("请输入正确格式手机号"))},trigger:"change"}]},downloadLoading:!1}},created:function(){this.getList()},methods:{getList:function(){var n=this;this.listLoading=!0,Object(c.c)(this.listQuery).then(function(e){n.list=e.data.data,n.total=e.data.total,setTimeout(function(){n.listLoading=!1},1500)})},handleFilter:function(){this.listQuery.page=1,this.getList()},handleSizeChange:function(n){this.listQuery.limit=n,this.getList()},handleCurrentChange:function(n){this.listQuery.page=n,this.getList()},handleModifyStatus:function(n,e){var t=this;this.$confirm("确定要删除?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.temp=l()({},n),Object(c.b)(t.temp).then(function(e){if(0===e.data.status)t.$notify({title:"失败",message:"删除失败",type:"warning",duration:2e3});else{var a=t.list.indexOf(n);t.list.splice(a,1),t.dialogFormVisible=!1,t.$notify({title:"成功",message:"删除成功",type:"success",duration:2e3})}})}).catch(function(n){console.log(n),t.$message({type:"info",message:"已取消删除"})})},resetTemp:function(){this.temp={id:void 0,name:null,nick_name:null,remark:"",password:"",password_confirmation:"",email:"",telephone:""}},handleCreate:function(){var n=this;this.resetTemp(),this.dialogStatus="create",this.userNameDisabled=!1,this.passwordVisible=!0,this.dialogFormVisible=!0,this.password="password",this.password_confirmation="password_confirmation",this.$nextTick(function(){n.$refs.dataForm.clearValidate()})},createData:function(){var n=this;this.$refs.dataForm.validate(function(e){e&&Object(c.a)(n.temp).then(function(e){var t={id:e.data.data.id,name:e.data.data.name,nick_name:e.data.data.nick_name,telephone:e.data.data.telephone,created_at:new Date};n.list.unshift(t),n.dialogFormVisible=!1,n.$notify({title:"成功",message:"创建成功",type:"success",duration:2e3})}).catch(function(e){switch(e.response.status){case 422:var t=e.response.data.errors,a='<ul style="list-style-type:none;">';for(var s in t)a+='<li style="margin-bottom:5px;">',a+=""+t[s],a+="</li>";a+="</ul>",n.$message({showClose:!0,message:a,type:"error",dangerouslyUseHTMLString:!0,duration:0})}return r.a.reject(e)})})},handleUpdate:function(n){var e=this;this.temp=l()({},n),this.temp.timestamp=new Date(this.temp.timestamp),this.dialogStatus="update",this.userNameDisabled=!0,this.password=null,this.password_confirmation=null,this.passwordVisible=!1,this.dialogFormVisible=!0,this.$nextTick(function(){e.$refs.dataForm.clearValidate()})},updateData:function(){var n=this;this.$refs.dataForm.validate(function(e){if(e){var t=l()({},n.temp);Object(c.g)(t).then(function(){var e=!0,t=!1,a=void 0;try{for(var i,r=s()(n.list);!(e=(i=r.next()).done);e=!0){var o=i.value;if(o.id===n.temp.id){var l=n.list.indexOf(o);n.list.splice(l,1,n.temp);break}}}catch(n){t=!0,a=n}finally{try{!e&&r.return&&r.return()}finally{if(t)throw a}}n.dialogFormVisible=!1,n.$notify({title:"成功",message:"更新成功",type:"success",duration:2e3})})}})},handleSetRoles:function(n){this.$refs.roleChild.handleRoles(n)},giveUserRoles:function(){this.$refs.roleChild.giveRoles()}}}},585:function(n,e,t){var a=t(3)(t(588),t(589),!1,function(n){t(586)},"data-v-36987a8d",null);n.exports=a.exports},586:function(n,e,t){var a=t(587);"string"==typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);t(6)("64f051c1",a,!0,{})},587:function(n,e,t){(n.exports=t(2)(!1)).push([n.i,"",""])},588:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=t(39),s=t.n(a),i=t(415),r=t(441);e.default={data:function(){return{roleTemp:{id:null,roles:[]},RoleListQuery:{page:1},setRoles:"角色设置",roleDialogFormVisible:!1,checkList:[],roles:[]}},created:function(){s.a.all([this.getRolesList()])},methods:{getRolesList:function(){var n=this;Object(r.c)(this.RoleListQuery).then(function(e){n.roles=e.data.data})},handleRoles:function(n){var e=this;Object(i.d)(n).then(function(t){console.log(t.data),e.checkList=t.data.data,e.roleTemp.id=n.id,e.roleDialogFormVisible=!0})},giveRoles:function(){var n=this;this.roleTemp.roles=this.checkList,Object(i.e)(this.roleTemp).then(function(e){n.roleDialogFormVisible=!1,n.$notify({title:"成功",message:"角色设置成功",type:"success",duration:2e3})})}}}},589:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[t("el-dialog",{attrs:{title:n.setRoles,visible:n.roleDialogFormVisible},on:{"update:visible":function(e){n.roleDialogFormVisible=e}}},[t("el-form",{ref:"roleDForm",attrs:{model:n.roleTemp,"label-position":"left","label-width":"100px"}},[t("el-checkbox-group",{model:{value:n.checkList,callback:function(e){n.checkList=e},expression:"checkList"}},n._l(n.roles,function(e){return t("el-checkbox",{key:e.id,attrs:{border:"",size:"medium",label:e.name}},[n._v("\r\n            "+n._s(e.description)+"\r\n          ")])}))],1),n._v(" "),t("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(e){n.roleDialogFormVisible=!1}}},[n._v(n._s(n.$t("table.cancel")))]),n._v(" "),t("el-button",{attrs:{type:"primary"},on:{click:n.giveRoles}},[n._v(n._s(n.$t("table.confirm")))])],1)],1)],1)},staticRenderFns:[]}},590:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"app-container"},[t("div",{staticClass:"filter-container"},[t("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:n.handleFilter}},[n._v(n._s(n.$t("table.search")))]),n._v(" "),t("el-button",{staticClass:"filter-item",staticStyle:{"margin-left":"10px"},attrs:{type:"primary",icon:"el-icon-edit"},on:{click:n.handleCreate}},[n._v(n._s(n.$t("table.add")))])],1),n._v(" "),t("el-table",{directives:[{name:"loading",rawName:"v-loading",value:n.listLoading,expression:"listLoading"}],key:n.tableKey,staticStyle:{width:"100%"},attrs:{data:n.list,border:"",fit:"","highlight-current-row":""}},[t("el-table-column",{attrs:{label:n.$t("table.id"),align:"center"},scopedSlots:n._u([{key:"default",fn:function(e){return[t("span",[n._v(n._s(e.row.id))])]}}])}),n._v(" "),t("el-table-column",{attrs:{label:n.$t("user.nick_name"),align:"center"},scopedSlots:n._u([{key:"default",fn:function(e){return[t("span",[n._v(n._s(e.row.nick_name))])]}}])}),n._v(" "),t("el-table-column",{attrs:{label:n.$t("user.telephone"),align:"center"},scopedSlots:n._u([{key:"default",fn:function(e){return[t("span",[n._v(n._s(e.row.telephone))])]}}])}),n._v(" "),t("el-table-column",{attrs:{label:n.$t("table.date"),width:"150px",align:"center"},scopedSlots:n._u([{key:"default",fn:function(e){return[t("span",[n._v(n._s(n._f("parseTime")(e.row.created_at,"{y}-{m}-{d}")))])]}}])}),n._v(" "),t("el-table-column",{attrs:{label:n.$t("table.actions"),align:"center",width:"230","class-name":"small-padding fixed-width"},scopedSlots:n._u([{key:"default",fn:function(e){return[t("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(t){n.handleUpdate(e.row)}}},[n._v(n._s(n.$t("table.edit")))]),n._v(" "),t("el-button",{attrs:{type:"success",size:"mini"},on:{click:function(t){n.handleSetRoles(e.row)}}},[n._v(n._s(n.$t("table.setRoles")))]),n._v(" "),"deleted"!=e.row.status?t("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(t){n.handleModifyStatus(e.row,"deleted")}}},[n._v(n._s(n.$t("table.delete"))+"\n        ")]):n._e()]}}])})],1),n._v(" "),t("div",{staticClass:"pagination-container"},[t("el-pagination",{directives:[{name:"show",rawName:"v-show",value:n.total>0,expression:"total>0"}],attrs:{"current-page":n.listQuery.page,total:n.total,background:"",layout:"total, prev, pager, next"},on:{"current-change":n.handleCurrentChange}})],1),n._v(" "),t("el-dialog",{attrs:{title:n.textMap[n.dialogStatus],visible:n.dialogFormVisible},on:{"update:visible":function(e){n.dialogFormVisible=e}}},[t("el-form",{ref:"dataForm",staticStyle:{width:"400px","margin-left":"50px"},attrs:{rules:n.rules,model:n.temp,"label-position":"left","label-width":"100px"}},[t("el-form-item",{attrs:{label:n.$t("user.name"),prop:"name"}},[t("el-input",{attrs:{disabled:n.userNameDisabled},model:{value:n.temp.name,callback:function(e){n.$set(n.temp,"name",e)},expression:"temp.name"}})],1),n._v(" "),t("el-form-item",{attrs:{label:n.$t("user.nick_name"),prop:"nick_name"}},[t("el-input",{model:{value:n.temp.nick_name,callback:function(e){n.$set(n.temp,"nick_name",e)},expression:"temp.nick_name"}})],1),n._v(" "),t("el-form-item",{directives:[{name:"show",rawName:"v-show",value:n.passwordVisible,expression:"passwordVisible"}],attrs:{label:n.$t("user.password"),prop:n.password}},[t("el-input",{attrs:{type:n.passwordType},model:{value:n.temp.password,callback:function(e){n.$set(n.temp,"password",e)},expression:"temp.password"}})],1),n._v(" "),t("el-form-item",{directives:[{name:"show",rawName:"v-show",value:n.passwordVisible,expression:"passwordVisible"}],attrs:{label:n.$t("user.passwordRepeat"),prop:n.password_confirmation}},[t("el-input",{attrs:{type:n.passwordType},model:{value:n.temp.password_confirmation,callback:function(e){n.$set(n.temp,"password_confirmation",e)},expression:"temp.password_confirmation"}})],1),n._v(" "),t("el-form-item",{attrs:{label:n.$t("user.telephone"),prop:"telephone"}},[t("el-input",{model:{value:n.temp.telephone,callback:function(e){n.$set(n.temp,"telephone",e)},expression:"temp.telephone"}})],1),n._v(" "),t("el-form-item",{attrs:{label:n.$t("user.remark")}},[t("el-input",{attrs:{autosize:{minRows:2,maxRows:4},type:"textarea",placeholder:"备注"},model:{value:n.temp.remark,callback:function(e){n.$set(n.temp,"remark",e)},expression:"temp.remark"}})],1)],1),n._v(" "),t("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(e){n.dialogFormVisible=!1}}},[n._v(n._s(n.$t("table.cancel")))]),n._v(" "),"create"==n.dialogStatus?t("el-button",{attrs:{type:"primary"},on:{click:n.createData}},[n._v(n._s(n.$t("table.confirm")))]):t("el-button",{attrs:{type:"primary"},on:{click:n.updateData}},[n._v(n._s(n.$t("table.confirm")))])],1)],1),n._v(" "),t("set-roles",{ref:"roleChild"})],1)},staticRenderFns:[]}}});