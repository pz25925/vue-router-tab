(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["p-PageLeave-vue"],{"5e6b":function(e,a,t){"use strict";t.r(a);var n=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"app-page"},[t("h2",[e._v("页面离开提示")]),t("p",[e._v("\n    修改输入框的值后，页面在页签关闭/刷新/被替换时将会确认提示\n  ")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.editValue,expression:"editValue"}],attrs:{type:"text"},domProps:{value:e.editValue},on:{input:function(a){a.target.composing||(e.editValue=a.target.value)}}})])},i=[],u={name:"PageLeave",data:function(){var e="初始值";return{value:e,editValue:e}},beforePageLeave:function(e,a,t,n){var i=("close"===n?"关闭":"refresh"===n&&"刷新")||"replace"===n&&"替换",u="您确认要".concat(i,"页签“").concat(t.title,"”吗？");this.editValue===this.value?e():confirm(u)?e():a("拒绝了页面离开")}},l=u,r=t("2877"),o=Object(r["a"])(l,n,i,!1,null,null,null);a["default"]=o.exports}}]);
//# sourceMappingURL=p-PageLeave-vue.1a4d3bc0.js.map