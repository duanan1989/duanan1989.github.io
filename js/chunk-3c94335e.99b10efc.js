(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3c94335e"],{2241:function(t,n,e){"use strict";var o=e("c31d"),i=e("2b0e"),a=e("2638"),l=e.n(a),c=e("d282"),s=e("ea8e"),r=e("b1d2"),u=e("6605"),d=e("ba31"),f=e("48f4"),g=e("ad06"),h=e("543e"),v=Object(c["a"])("button"),b=v[0],m=v[1];function p(t,n,e,o){var i,a=n.tag,c=n.icon,s=n.type,u=n.color,v=n.plain,b=n.disabled,p=n.loading,w=n.hairline,y=n.loadingText,C={};function B(t){p||b||(Object(d["a"])(o,"click",t),Object(f["a"])(o))}function O(t){Object(d["a"])(o,"touchstart",t)}u&&(C.color=v?u:r["f"],v||(C.background=u),-1!==u.indexOf("gradient")?C.border=0:C.borderColor=u);var k=[m([s,n.size,{plain:v,loading:p,disabled:b,hairline:w,block:n.block,round:n.round,square:n.square}]),(i={},i[r["c"]]=w,i)];function S(){var o,i=[];return p?i.push(t(h["a"],{class:m("loading"),attrs:{size:n.loadingSize,type:n.loadingType,color:"currentColor"}})):c&&i.push(t(g["a"],{attrs:{name:c,classPrefix:n.iconPrefix},class:m("icon")})),o=p?y:e.default?e.default():n.text,o&&i.push(t("span",{class:m("text")},[o])),i}return t(a,l()([{style:C,class:k,attrs:{type:n.nativeType,disabled:b},on:{click:B,touchstart:O}},Object(d["b"])(o)]),[t("div",{class:m("content")},[S()])])}p.props=Object(o["a"])({},f["c"],{text:String,icon:String,color:String,block:Boolean,plain:Boolean,round:Boolean,square:Boolean,loading:Boolean,hairline:Boolean,disabled:Boolean,iconPrefix:String,nativeType:String,loadingText:String,loadingType:String,tag:{type:String,default:"button"},type:{type:String,default:"default"},size:{type:String,default:"normal"},loadingSize:{type:String,default:"20px"}});var w,y=b(p),C=Object(c["a"])("dialog"),B=C[0],O=C[1],k=C[2],S=B({mixins:[Object(u["a"])()],props:{title:String,width:[Number,String],message:String,className:null,callback:Function,beforeClose:Function,messageAlign:String,cancelButtonText:String,cancelButtonColor:String,confirmButtonText:String,confirmButtonColor:String,showCancelButton:Boolean,transition:{type:String,default:"van-dialog-bounce"},showConfirmButton:{type:Boolean,default:!0},overlay:{type:Boolean,default:!0},closeOnClickOverlay:{type:Boolean,default:!1},allowHtml:{type:Boolean,default:!0}},data:function(){return{loading:{confirm:!1,cancel:!1}}},methods:{onClickOverlay:function(){this.handleAction("overlay")},handleAction:function(t){var n=this;this.$emit(t),this.value&&(this.beforeClose?(this.loading[t]=!0,this.beforeClose(t,(function(e){!1!==e&&n.loading[t]&&n.onClose(t),n.loading.confirm=!1,n.loading.cancel=!1}))):this.onClose(t))},onClose:function(t){this.close(),this.callback&&this.callback(t)},onOpened:function(){this.$emit("opened")},onClosed:function(){this.$emit("closed")},genButtons:function(){var t,n=this,e=this.$createElement,o=this.showCancelButton&&this.showConfirmButton;return e("div",{class:[r["d"],O("footer",{buttons:o})]},[this.showCancelButton&&e(y,{attrs:{size:"large",loading:this.loading.cancel,text:this.cancelButtonText||k("cancel")},class:O("cancel"),style:{color:this.cancelButtonColor},on:{click:function(){n.handleAction("cancel")}}}),this.showConfirmButton&&e(y,{attrs:{size:"large",loading:this.loading.confirm,text:this.confirmButtonText||k("confirm")},class:[O("confirm"),(t={},t[r["b"]]=o,t)],style:{color:this.confirmButtonColor},on:{click:function(){n.handleAction("confirm")}}})])},genContent:function(t,n){var e=this.$createElement;if(n)return e("div",{class:O("content")},[n]);var o=this.message,i=this.messageAlign;if(o){var a,c,s={class:O("message",(a={"has-title":t},a[i]=i,a)),domProps:(c={},c[this.allowHtml?"innerHTML":"textContent"]=o,c)};return e("div",{class:O("content")},[e("div",l()([{},s]))])}}},render:function(){var t=arguments[0];if(this.shouldRender){var n=this.message,e=this.slots(),o=this.slots("title")||this.title,i=o&&t("div",{class:O("header",{isolated:!n&&!e})},[o]);return t("transition",{attrs:{name:this.transition},on:{afterEnter:this.onOpened,afterLeave:this.onClosed}},[t("div",{directives:[{name:"show",value:this.value}],attrs:{role:"dialog","aria-labelledby":this.title||n},class:[O(),this.className],style:{width:Object(s["a"])(this.width)}},[i,this.genContent(o,e),this.genButtons()])])}}}),j=e("a142");function x(t){return document.body.contains(t)}function D(){w&&w.$destroy(),w=new(i["a"].extend(S))({el:document.createElement("div"),propsData:{lazyRender:!1}}),w.$on("input",(function(t){w.value=t}))}function U(t){return j["f"]?Promise.resolve():new Promise((function(n,e){w&&x(w.$el)||D(),Object(o["a"])(w,U.currentOptions,t,{resolve:n,reject:e})}))}U.defaultOptions={value:!0,title:"",width:"",message:"",overlay:!0,className:"",allowHtml:!0,lockScroll:!0,transition:"van-dialog-bounce",beforeClose:null,overlayClass:"",overlayStyle:null,messageAlign:"",getContainer:"body",cancelButtonText:"",cancelButtonColor:null,confirmButtonText:"",confirmButtonColor:null,showConfirmButton:!0,showCancelButton:!1,closeOnPopstate:!1,closeOnClickOverlay:!1,callback:function(t){w["confirm"===t?"resolve":"reject"](t)}},U.alert=U,U.confirm=function(t){return U(Object(o["a"])({showCancelButton:!0},t))},U.close=function(){w&&(w.value=!1)},U.setDefaultOptions=function(t){Object(o["a"])(U.currentOptions,t)},U.resetDefaultOptions=function(){U.currentOptions=Object(o["a"])({},U.defaultOptions)},U.resetDefaultOptions(),U.install=function(){i["a"].use(S)},U.Component=S,i["a"].prototype.$dialog=U;n["a"]=U},"2fcb":function(t,n,e){},6575:function(t,n,e){},"7cc2":function(t,n,e){"use strict";var o=e("6575"),i=e.n(o);i.a},bc1b:function(t,n,e){},e17f:function(t,n,e){"use strict";e("68ef"),e("a71a"),e("9d70"),e("3743"),e("4d75"),e("e3b3"),e("bc1b"),e("2fcb")},f079:function(t,n,e){"use strict";e.r(n);var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"uniondrugAddJS"},[e("router-link",{attrs:{to:"/uniondrughealthy/pagejump"}},[e("van-cell",{attrs:{title:"药联健康App页面跳转",value:"去测试","is-link":""}})],1),e("div",{staticClass:"top15"}),e("van-cell-group",{attrs:{title:"无回调方案将来会弃用"}},[e("van-cell",{attrs:{title:"获取设备信息","is-link":""},on:{click:function(n){return t.getDeviceInfo()}}}),e("van-cell",{attrs:{title:"获取用户信息","is-link":""},on:{click:function(n){return t.getUserInfo()}}})],1),e("van-cell-group",{attrs:{title:"无回调方案将来会弃用"}},[e("van-cell",{attrs:{title:"是否支持同屏","is-link":""},on:{click:function(n){return t.isCanSameScreen()}}}),e("van-cell",{attrs:{title:"获取设备信息回调","is-link":""},on:{click:function(n){return t.getDeviceInfoBack()}}}),e("van-cell",{attrs:{title:"获取用户信息回调","is-link":""},on:{click:function(n){return t.getUserInfoBack()}}})],1)],1)},i=[],a=(e("e17f"),e("2241")),l=(e("e7e5"),e("d399")),c=(e("0653"),e("34e9")),s=(e("c194"),e("7744")),r=e("2b0e");r["a"].use(s["a"]),r["a"].use(c["a"]),r["a"].use(l["a"]),r["a"].use(a["a"]);var u={name:"UniondrugAddJS",components:{},methods:{getDeviceInfo:function(){void 0==window["UnionDrugHealthy"]?Object(l["a"])("不支持"):window["UnionDrugHealthy"].getDeviceInfo()},getUserInfo:function(){void 0==window["UnionDrugHealthy"]?Object(l["a"])("不支持"):window["UnionDrugHealthy"].getUserInfo()},isCanSameScreen:function(){void 0==window["UnionDrugHealthy"]?Object(l["a"])("不支持"):window["UnionDrugHealthy"].isCanSameScreen?a["a"].alert({message:"支持同屏"}).then((function(){})):Object(l["a"])("不支持")},getDeviceInfoBack:function(){void 0==window["UnionDrugHealthy"]?Object(l["a"])("不支持"):window["UnionDrugHealthy"].getDeviceInfo((function(t){a["a"].alert({message:t}).then((function(){}))}))},getUserInfoBack:function(){void 0==window["UnionDrugHealthy"]?Object(l["a"])("不支持"):window["UnionDrugHealthy"].getUserInfo((function(t){a["a"].alert({message:t}).then((function(){}))}))}}};window["setDeviceInfo"]=function(t){a["a"].alert({message:t}).then((function(){}))},window["setUserInfo"]=function(t){a["a"].alert({message:t}).then((function(){}))};var d=u,f=(e("7cc2"),e("2877")),g=Object(f["a"])(d,o,i,!1,null,"b1effb7a",null);n["default"]=g.exports}}]);
//# sourceMappingURL=chunk-3c94335e.99b10efc.js.map