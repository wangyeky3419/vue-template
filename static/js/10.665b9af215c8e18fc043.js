webpackJsonp([10],{"3k8E":function(e,t,a){"use strict";function l(e){a("Ccrp")}Object.defineProperty(t,"__esModule",{value:!0});var r=a("Vk7R"),s=a("berH"),o=a("C7Lr"),i=l,n=o(r.a,s.a,!1,i,"data-v-ea6a57b6",null);t.default=n.exports},Ccrp:function(e,t,a){var l=a("cIhq");"string"==typeof l&&(l=[[e.i,l,""]]),l.locals&&(e.exports=l.locals);a("FIqI")("7fb65bd2",l,!0,{})},Vk7R:function(e,t,a){"use strict";t.a={name:"user-table-add",data:function(){return{form:{date:"",name:"",address:"",sex:"",age:"",tel:""},dialogVisible:!1,loading:!1,rules:{name:[{required:!0,message:"输入姓名",trigger:"change"},{min:2,max:5,message:"长度在 2 到 5 个字符",trigger:"change"}],sex:[{required:!0,message:"请选择性别",trigger:"change"}],age:[{require:!0,validator:function(e,t,a){if(!/^\d+$/.test(t))return a(new Error("请输入正确的年龄"));a()},trigger:"change"}],tel:[{required:!0,validator:function(e,t,a){var l=/^1[34578]\d{9}$/;if(!t||!l.test(t))return a(new Error("需要一个合法的手机号码"));a()},trigger:"blur"}],date:[{type:"date",required:!0,message:"请选择日期",trigger:"change"}],address:[{required:!0,message:"请输入地址",trigger:"change"},{min:2,message:"长度至少为2个字符",trigger:"change"}]}}},methods:{onSubmit:function(){var e=this,t=this;this.$refs.form.validate(function(a){if(!a)return!1;t.loading=!0,console.log("请求数据",e.form),setTimeout(function(){t.dialogVisible=!1,t.loading=!1,t.$emit("onSubmit","success"),t.$message({message:"请求成功",type:"success"})},1e3)})},onOpen:function(){this.loading=!1,this.dialogVisible=!0},onClose:function(){this.$refs.form.resetFields(),this.loading=!1,this.dialogVisible=!1}}}},berH:function(e,t,a){"use strict";var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"user-table-add"},[a("el-dialog",{attrs:{title:"新增",visible:e.dialogVisible,width:"33%","close-on-click-modal":!1,"show-message":!1},on:{"update:visible":function(t){e.dialogVisible=t},close:e.onClose}},[a("el-form",{ref:"form",attrs:{model:e.form,"label-width":"120px",rules:e.rules,"validate-on-rule-change":!1}},[a("el-form-item",{attrs:{label:"姓名：",prop:"name"}},[a("el-input",{staticClass:"inputStyle",attrs:{placeholder:"请输入姓名",clearable:""},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"性别：",prop:"sex"}},[a("el-select",{staticClass:"inputStyle",attrs:{placeholder:"请选择性别",clearable:""},model:{value:e.form.sex,callback:function(t){e.$set(e.form,"sex",t)},expression:"form.sex"}},[a("el-option",{attrs:{label:"男",value:"男"}}),e._v(" "),a("el-option",{attrs:{label:"女",value:"女"}})],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"年龄：",prop:"age"}},[a("el-input",{staticClass:"inputStyle",attrs:{clearable:"",placeholder:"请输入年龄"},model:{value:e.form.age,callback:function(t){e.$set(e.form,"age",t)},expression:"form.age"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"电话号码：",prop:"tel"}},[a("el-input",{staticClass:"inputStyle",attrs:{clearable:"",placeholder:"请输入电话号码"},model:{value:e.form.tel,callback:function(t){e.$set(e.form,"tel",t)},expression:"form.tel"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"日期：",prop:"date"}},[a("el-date-picker",{staticClass:"inputStyle",attrs:{type:"date",placeholder:"请选择日期",clearable:""},model:{value:e.form.date,callback:function(t){e.$set(e.form,"date",t)},expression:"form.date"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"地址：",prop:"address"}},[a("el-input",{staticClass:"inputStyle",attrs:{clearable:"",placeholder:"请输入地址"},model:{value:e.form.address,callback:function(t){e.$set(e.form,"address",t)},expression:"form.address"}})],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:e.onClose}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary",loading:e.loading},on:{click:e.onSubmit}},[e._v("确 定")])],1)],1)],1)},r=[],s={render:l,staticRenderFns:r};t.a=s},cIhq:function(e,t,a){t=e.exports=a("UTlt")(!0),t.push([e.i,".inputStyle[data-v-ea6a57b6]{width:90%}","",{version:3,sources:["D:/workSpace/Vue/vue项目实战/vue-element-admin-tpl/src/pages/userTable/component/userTableAdd.vue"],names:[],mappings:"AACA,6BACE,SAAW,CACZ",file:"userTableAdd.vue",sourcesContent:["\n.inputStyle[data-v-ea6a57b6] {\n  width: 90%;\n}\n"],sourceRoot:""}])}});
//# sourceMappingURL=10.665b9af215c8e18fc043.js.map