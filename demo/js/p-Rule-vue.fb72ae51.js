(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["p-Rule-vue"],{"19ab":function(t,e,a){"use strict";var r=a("40bb"),s=a.n(r);s.a},"2dd9":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-page"},[a("h2",[t._v(t._s(t.$route.meta.title)+"：目录"+t._s(t.catalog)+"，分类"+t._s(t.type))]),a("p",[t._v("你在 "),a("strong",{staticClass:"text-strong"},[t._v(t._s(t.pageTime))]),t._v(" 秒前打开本页面")]),a("h3",[t._v(t._s(t.ruleLabel)+"页签规则")]),"global"===t.ruleType?a("p",{staticClass:"rule-desc"},[t._v("页签ID: "),a("strong",[t._v("route => route.fullPath.replace(route.hash, '')`")])]):"route"===t.ruleType?a("p",{staticClass:"rule-desc"},[t._v("页签ID: "),a("strong",[t._v("route => `route-rule/${route.params.catalog}`")])]):a("p",{staticClass:"rule-desc"},[t._v("页签ID: "),a("strong",[t._v("route.path")])]),a("h4",[t._v("点击下面的链接，并观察页签和路由地址的改变")]),a("ul",{staticClass:"btn-list"},t._l(t.catalogs,function(e){return a("li",{key:e},[t._l(t.types,function(r){return a("router-link",{key:r,staticClass:"demo-btn",attrs:{to:"../"+e+"/"+r}},[t._v("\n        "+t._s(e)+"/"+t._s(r)+"\n      ")])}),a("router-link",{staticClass:"demo-btn",attrs:{to:"../"+e+"/1?query=abc"}},[t._v(t._s(e)+"/1?query=abc")]),a("router-link",{staticClass:"demo-btn",attrs:{to:"../"+e+"/1?query=def"}},[t._v(t._s(e)+"/1?query=def")])],2)}),0),a("h3",[t._v("路由信息")]),a("page-route-info")],1)},s=[],n=a("df9a"),u=a("ce92"),o={name:"Rule",mixins:[n["a"]],components:{PageRouteInfo:u["a"]},data:function(){var t=this.$route,e=t.params,a=e.catalog,r=e.type,s="default";t.meta.aliveId?s="route":t.fullPath.indexOf("/global-rule/")>-1&&(s="global");var n={default:"默认",route:"路由",global:"全局"}[s];return{ruleType:s,ruleLabel:n,catalog:a,type:r,catalogs:["a","b","c"],types:[1,2,3],link:{catalog:a,type:r},routeTab:"".concat(n,"规则").concat(a,"/").concat(r)}}},l=o,i=(a("9d0f"),a("2877")),c=Object(i["a"])(l,r,s,!1,null,"209ecc64",null);e["default"]=c.exports},"40bb":function(t,e,a){},"5ef8":function(t,e,a){},"9d0f":function(t,e,a){"use strict";var r=a("5ef8"),s=a.n(r);s.a},ce92:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",{staticClass:"route-info"},[a("tr",[a("th",{attrs:{width:"80"}},[t._v("name")]),a("td",[t._v(t._s(t.$route.name))])]),a("tr",[a("th",[t._v("path")]),a("td",[t._v(t._s(t.$route.path))])]),a("tr",[a("th",[t._v("params")]),a("td",[t._v(t._s(t.$route.params))])]),a("tr",[a("th",[t._v("query")]),a("td",[t._v(t._s(t.$route.query))])]),a("tr",[a("th",[t._v("hash")]),a("td",[t._v(t._s(t.$route.hash))])]),a("tr",[a("th",[t._v("fullPath")]),a("td",[t._v(t._s(t.$route.fullPath))])])])},s=[],n=(a("19ab"),a("2877")),u={},o=Object(n["a"])(u,r,s,!1,null,"7534a35a",null);e["a"]=o.exports},df9a:function(t,e,a){"use strict";e["a"]={data:function(){return{openTime:new Date,pageTime:0}},activated:function(){this.updatePageTime()},deactivated:function(){this.clearPageTimer()},beforeDestroy:function(){this.clearPageTimer()},methods:{calcPageTime:function(){this.pageTime=Math.floor((new Date-this.openTime)/1e3)},updatePageTime:function(){this.calcPageTime(),this.clearPageTimer(),this.pageTimer=setInterval(this.calcPageTime,1e3)},clearPageTimer:function(){clearInterval(this.pageTimer)}}}}}]);
//# sourceMappingURL=p-Rule-vue.fb72ae51.js.map