(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{834:function(e,t,o){"use strict";o.r(t);var r={name:"UiForm",data:function(){return{uname:"",email:"",password:"",cpassword:"",show1:!1,show2:!1,checkbox2:!1,rules:{required:function(e){return!!e||"Required."},min:function(e){return e.length>=8||"Min 8 characters"},emailMatch:function(){return"The email and password you entered don't match"}}}},methods:{}},n=o(38),l=o(46),c=o.n(l),d=o(226),m=o(471),v=o(470),w=o(859),h=o(463),f=o(461),x=o(465),k=o(612),component=Object(n.a)(r,(function(){var e=this,t=e._self._c;return t("div",[t("div",{staticClass:"mini-spacer"},[t("v-container",[t("v-row",{attrs:{justify:"center"}},[t("v-col",{attrs:{cols:"12",sm:"10",md:"9",lg:"7"}},[t("div",{staticClass:"text-center"},[t("h2",{staticClass:"ui-title font-weight-bold"},[e._v("Form")]),e._v(" "),t("p",[e._v("\n              Here you can check Demos we created based on WrapKit. Its quite\n              easy to Create your own dream website & dashboard in No-time.\n            ")])])])],1)],1)],1),e._v(" "),t("div",[t("v-container",[t("v-row",{attrs:{justify:"center"}},[t("v-col",{attrs:{cols:"12",sm:"10",md:"9",lg:"7"}},[t("v-card",[t("v-card-text",[t("v-text-field",{attrs:{label:"User Name",placeholder:"Enter username"},model:{value:e.uname,callback:function(t){e.uname=t},expression:"uname"}}),e._v(" "),t("v-text-field",{attrs:{label:"Email",type:"email",placeholder:"Email address"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),e._v(" "),t("v-text-field",{attrs:{"append-icon":e.show1?"mdi-eye":"mdi-eye-off",rules:[e.rules.required,e.rules.min],type:e.show1?"text":"password",name:"input-10-1",label:"Password",placeholder:"Enter password",counter:""},on:{"click:append":function(t){e.show1=!e.show1}},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),e._v(" "),t("v-text-field",{attrs:{"append-icon":e.show2?"mdi-eye":"mdi-eye-off",rules:[e.rules.required,e.rules.min],type:e.show2?"text":"password",name:"input-10-1",label:"Confirm Password",placeholder:"Enter Confirm password",counter:""},on:{"click:append":function(t){e.show1=!e.show1}},model:{value:e.cpassword,callback:function(t){e.cpassword=t},expression:"cpassword"}}),e._v(" "),t("v-checkbox",{staticClass:"mt-2",attrs:{label:"Remember me","hide-details":""},model:{value:e.checkbox2,callback:function(t){e.checkbox2=t},expression:"checkbox2"}}),e._v(" "),t("div",{staticClass:"mt-10"},[t("v-btn",{staticClass:"mr-2",attrs:{color:"success",elevation:"0"}},[e._v("Save")]),e._v(" "),t("v-btn",{attrs:{color:"black",elevation:"0",dark:""}},[e._v("Cancel")])],1)],1)],1)],1)],1)],1)],1)])}),[],!1,null,null,null);t.default=component.exports;c()(component,{VBtn:d.a,VCard:m.a,VCardText:v.c,VCheckbox:w.a,VCol:h.a,VContainer:f.a,VRow:x.a,VTextField:k.a})}}]);