(function(e){function t(t){for(var r,o,i=t[0],c=t[1],s=t[2],l=0,d=[];l<i.length;l++)o=i[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);f&&f(t);while(d.length)d.shift()();return u.push.apply(u,s||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,o=1;o<n.length;o++){var i=n[o];0!==a[i]&&(r=!1)}r&&(u.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={app:0},a={app:0},u=[];function i(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"b43948ec","chunk-3c94335e":"99b10efc","chunk-a109bd54":"532e2e77"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-3c94335e":1,"chunk-a109bd54":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({about:"about"}[e]||e)+"."+{about:"31d6cfe0","chunk-3c94335e":"f6b3ab15","chunk-a109bd54":"030ed041"}[e]+".css",a=c.p+r,u=document.getElementsByTagName("link"),i=0;i<u.length;i++){var s=u[i],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===a))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){s=d[i],l=s.getAttribute("data-href");if(l===r||l===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||a,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete o[e],f.parentNode.removeChild(f),n(u)},f.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=u);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=i(e);var d=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",d.name="ChunkLoadError",d.type=r,d.request=o,n[1](d)}a[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var f=l;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),o=n.n(r);o.a},"17a1":function(e,t,n){e.exports=n.p+"img/剑豪.e4605479.png"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],u=(n("034f"),n("2877")),i={},c=Object(u["a"])(i,o,a,!1,null,null,null),s=c.exports,l=(n("d3b7"),n("8c4f")),d=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("van-swipe",{staticClass:"my-swipe",attrs:{autoplay:5e3,"indicator-color":"white"}},[r("van-swipe-item",[r("img",{attrs:{src:n("17a1"),alt:"",width:"100%",height:"100%"}})]),r("van-swipe-item",[r("img",{attrs:{src:n("7fdf"),alt:"",width:"100%",height:"100%"}})])],1),r("van-grid",[r("van-grid-item",{attrs:{icon:"wap-home",text:"公众号"},on:{click:function(t){return e.gotoPage("0","请搜索公众号\n古南岳")}}}),r("van-grid-item",{attrs:{icon:"shop-collect",text:"商城"},on:{click:function(t){return e.gotoPage("0","请搜索小程序\n古南岳山货")}}}),r("van-grid-item",{attrs:{icon:"fire",text:"简介"},on:{click:function(t){return e.gotoPage("1","https://mall.tsummoner.com/gunanyue/build/#/gunanyue/1")}}}),r("van-grid-item",{attrs:{icon:"cluster",text:"管理"},on:{click:function(t){return e.gotoPage("1","https://dev.tsummoner.com/gunanyueM/build/#/")}}})],1),r("div",{staticClass:"top15"}),r("van-cell-group",{attrs:{title:"药联健康App"}},[r("router-link",{attrs:{to:"/uniondrughealthy/addjs"}},[r("van-cell",{attrs:{title:"注入js","is-link":""}})],1),r("router-link",{attrs:{to:"/uniondrughealthy/pagejump"}},[r("van-cell",{attrs:{title:"页面跳转","is-link":""}})],1)],1)],1)},f=[],p=(n("b0c0"),n("4056"),n("44bf")),h=(n("4b0a"),n("2bb1")),m=(n("7844"),n("5596")),g=(n("e7e5"),n("d399")),b=(n("0653"),n("34e9")),v=(n("c194"),n("7744")),y=(n("d356"),n("48bd")),w=(n("0ec5"),n("21ab")),k=(n("3df5"),n("2830"));r["a"].use(k["a"]),r["a"].use(w["a"]),r["a"].use(y["a"]),r["a"].use(v["a"]),r["a"].use(b["a"]),r["a"].use(g["a"]),r["a"].use(m["a"]),r["a"].use(h["a"]),r["a"].use(p["a"]);var j={name:"Home",components:{},data:function(){return{}},methods:{onSelect:function(e){Object(g["a"])(e.name),this.showShare=!1},gotoPage:function(e,t){0==e?Object(g["a"])(t):1==e&&window.open(t)}}},x=j,O=(n("9b73"),Object(u["a"])(x,d,f,!1,null,"852db052",null)),P=O.exports;r["a"].use(l["a"]);var S=[{path:"/",name:"Home",component:P,meta:{title:"首页"}},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))},meta:{title:"关于"}},{path:"/uniondrughealthy/addjs",name:"UniondrugAddJS",component:function(){return n.e("chunk-3c94335e").then(n.bind(null,"f079"))},meta:{title:"药联健康JS"}},{path:"/uniondrughealthy/pagejump",name:"UniondrugPageJump",component:function(){return n.e("chunk-a109bd54").then(n.bind(null,"75f8"))},meta:{title:"药联健康页面"}}],E=new l["a"]({mode:"history",base:"/",routes:S}),_=E;_.beforeEach((function(e,t,n){e.meta.title&&(document.title=e.meta.title),n()}));var C=document.querySelector("html");C.style.fontSize=window.innerWidth/375+"px",window.addEventListener("resize",(function(){console.log(document.body.offsetWidth),C.style.fontSize=window.innerWidth/375+"px"})),r["a"].config.productionTip=!1,new r["a"]({router:_,render:function(e){return e(s)}}).$mount("#app")},"7fdf":function(e,t,n){e.exports=n.p+"img/弦月.b75ba217.png"},"85ec":function(e,t,n){},"9b73":function(e,t,n){"use strict";var r=n("bad3"),o=n.n(r);o.a},bad3:function(e,t,n){}});
//# sourceMappingURL=app.98e1add2.js.map