(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["p-Page-vue"],{2048:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-page"},[a("h2",{on:{click:e.click}},[e._v("RouterTab 实例页")]),a("p",[e._v("你在"),a("strong",[e._v(e._s(e.pageTime))]),e._v("秒前打开本页面")]),a("input",{attrs:{type:"text"}}),a("dl",[a("dt",[e._v("name")]),a("dd",[e._v(e._s(e.$route.name))]),a("dt",[e._v("path")]),a("dd",[e._v(e._s(e.$route.path))]),a("dt",[e._v("params")]),a("dd",[e._v(e._s(e.$route.params))]),a("dt",[e._v("query")]),a("dd",[e._v(e._s(e.$route.query))]),a("dt",[e._v("hash")]),a("dd",[e._v(e._s(e.$route.hash))]),a("dt",[e._v("fullPath")]),a("dd",[e._v(e._s(e.$route.fullPath))])])])},n=[],r=a("df9a"),s={name:"Page",mixins:[r["a"]],data:function(){return{routerTab:{title:"页面"+this.$route.params.id}}},methods:{click:function(){console.log("aaa")}}},c=s,o=(a("84ae"),a("2877")),u=Object(o["a"])(c,i,n,!1,null,"8285b30c",null);t["default"]=u.exports},"84ae":function(e,t,a){"use strict";var i=a("d6e3"),n=a.n(i);n.a},d6e3:function(e,t,a){},df9a:function(e,t,a){"use strict";t["a"]={data:function(){return{openTime:new Date,pageTime:0}},activated:function(){this.updatePageTime()},deactivated:function(){this.clearPageTimer()},beforeDestroy:function(){this.clearPageTimer()},methods:{calcPageTime:function(){this.pageTime=Math.floor((new Date-this.openTime)/1e3)},updatePageTime:function(){this.calcPageTime(),this.clearPageTimer(),this.pageTimer=setInterval(this.calcPageTime,1e3)},clearPageTimer:function(){clearInterval(this.pageTimer)}}}}}]);
//# sourceMappingURL=p-Page-vue.330a2783.js.map