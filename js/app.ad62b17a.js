(function(e){function t(t){for(var r,a,i=t[0],c=t[1],s=t[2],l=0,d=[];l<i.length;l++)a=i[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);f&&f(t);while(d.length)d.shift()();return u.push.apply(u,s||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,a=1;a<n.length;a++){var i=n[a];0!==o[i]&&(r=!1)}r&&(u.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={app:0},o={app:0},u=[];function i(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"b43948ec","chunk-5175e223":"39fd1be7","chunk-6eaa3234":"d1e44dd8"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-5175e223":1,"chunk-6eaa3234":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({about:"about"}[e]||e)+"."+{about:"31d6cfe0","chunk-5175e223":"f0dc2543","chunk-6eaa3234":"11c7a1b8"}[e]+".css",o=c.p+r,u=document.getElementsByTagName("link"),i=0;i<u.length;i++){var s=u[i],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===o))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){s=d[i],l=s.getAttribute("data-href");if(l===r||l===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||o,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete a[e],f.parentNode.removeChild(f),n(u)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=u);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=i(e);var d=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}o[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var f=l;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),a=n.n(r);a.a},"17a1":function(e,t,n){e.exports=n.p+"img/剑豪.fa0ebddd.png"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],u=(n("034f"),n("2877")),i={},c=Object(u["a"])(i,a,o,!1,null,null,null),s=c.exports,l=(n("d3b7"),n("8c4f")),d=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("van-swipe",{staticClass:"my-swipe",attrs:{autoplay:5e3,"indicator-color":"white"}},[r("van-swipe-item",[r("img",{staticClass:"img-home",attrs:{src:n("17a1"),alt:""}})]),r("van-swipe-item",[r("img",{staticClass:"img-home",attrs:{src:n("7fdf"),alt:""}})])],1),r("van-grid",[r("van-grid-item",{attrs:{icon:"wap-home",text:"公众号"},on:{click:function(t){return e.gotoPage("0","请搜索公众号\n古南岳")}}}),r("van-grid-item",{attrs:{icon:"shop-collect",text:"商城"},on:{click:function(t){return e.gotoPage("0","请搜索小程序\n古南岳山货")}}}),r("van-grid-item",{attrs:{icon:"fire",text:"简介"},on:{click:function(t){return e.gotoPage("1","https://mall.tsummoner.com/gunanyue/build/#/gunanyue/1")}}}),r("van-grid-item",{attrs:{icon:"cluster",text:"管理"},on:{click:function(t){return e.gotoPage("1","https://dev.tsummoner.com/gunanyueM/build/#/")}}})],1),r("div",{staticClass:"top15"}),r("van-cell-group",{attrs:{title:"药联健康App"}},[r("router-link",{attrs:{to:"/uniondrughealthy/addjs"}},[r("van-cell",{attrs:{title:"注入js","is-link":""}})],1),r("router-link",{attrs:{to:"/uniondrughealthy/pagejump"}},[r("van-cell",{attrs:{title:"页面跳转","is-link":""}})],1)],1)],1)},f=[],p=(n("b0c0"),n("4056"),n("44bf")),m=(n("4b0a"),n("2bb1")),h=(n("7844"),n("5596")),g=(n("e7e5"),n("d399")),b=(n("0653"),n("34e9")),v=(n("c194"),n("7744")),y=(n("d356"),n("48bd")),w=(n("0ec5"),n("21ab")),k=(n("3df5"),n("2830"));r["a"].use(k["a"]),r["a"].use(w["a"]),r["a"].use(y["a"]),r["a"].use(v["a"]),r["a"].use(b["a"]),r["a"].use(g["a"]),r["a"].use(h["a"]),r["a"].use(m["a"]),r["a"].use(p["a"]);var j={name:"Home",components:{},data:function(){return{}},methods:{onSelect:function(e){Object(g["a"])(e.name),this.showShare=!1},gotoPage:function(e,t){0==e?Object(g["a"])(t):1==e&&window.open(t)}}},x=j,O=(n("d61b"),Object(u["a"])(x,d,f,!1,null,"13532269",null)),P=O.exports;r["a"].use(l["a"]);var S=[{path:"/",name:"Home",component:P,meta:{title:"首页"}},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))},meta:{title:"关于"}},{path:"/uniondrughealthy/addjs",name:"UniondrugAddJS",component:function(){return n.e("chunk-6eaa3234").then(n.bind(null,"f079"))},meta:{title:"药联健康JS"}},{path:"/uniondrughealthy/pagejump",name:"UniondrugPageJump",component:function(){return n.e("chunk-5175e223").then(n.bind(null,"75f8"))},meta:{title:"药联健康页面"}}],E=new l["a"]({mode:"history",base:"/",routes:S}),_=E;_.beforeEach((function(e,t,n){e.meta.title&&(document.title=e.meta.title),n()}));var C=document.querySelector("html"),A=window.innerWidth;A>500&&(A=500),C.style.fontSize=100*A/375+"px",window.addEventListener("resize",(function(){console.log(document.body.offsetWidth),C.style.fontSize=100*A/375+"px"})),r["a"].config.productionTip=!1,new r["a"]({router:_,render:function(e){return e(s)}}).$mount("#app")},"7fdf":function(e,t,n){e.exports=n.p+"img/弦月.1011c7fe.png"},"85ec":function(e,t,n){},d61b:function(e,t,n){"use strict";var r=n("f5b9"),a=n.n(r);a.a},f5b9:function(e,t,n){}});
//# sourceMappingURL=app.ad62b17a.js.map