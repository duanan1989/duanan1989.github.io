(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a109bd54"],{2241:function(t,e,n){"use strict";var l=n("c31d"),i=n("2b0e"),o=n("2638"),a=n.n(o),r=n("d282"),c=n("ea8e"),s=n("b1d2"),u=n("6605"),g=n("ba31"),v=n("48f4"),d=n("ad06"),f=n("543e"),h=Object(r["a"])("button"),k=h[0],y=h[1];function p(t,e,n,l){var i,o=e.tag,r=e.icon,c=e.type,u=e.color,h=e.plain,k=e.disabled,p=e.loading,m=e.hairline,w=e.loadingText,b={};function D(t){p||k||(Object(g["a"])(l,"click",t),Object(v["a"])(l))}function H(t){Object(g["a"])(l,"touchstart",t)}u&&(b.color=h?u:s["f"],h||(b.background=u),-1!==u.indexOf("gradient")?b.border=0:b.borderColor=u);var P=[y([c,e.size,{plain:h,loading:p,disabled:k,hairline:m,block:e.block,round:e.round,square:e.square}]),(i={},i[s["c"]]=m,i)];function U(){var l,i=[];return p?i.push(t(f["a"],{class:y("loading"),attrs:{size:e.loadingSize,type:e.loadingType,color:"currentColor"}})):r&&i.push(t(d["a"],{attrs:{name:r,classPrefix:e.iconPrefix},class:y("icon")})),l=p?w:n.default?n.default():e.text,l&&i.push(t("span",{class:y("text")},[l])),i}return t(o,a()([{style:b,class:P,attrs:{type:e.nativeType,disabled:k},on:{click:D,touchstart:H}},Object(g["b"])(l)]),[t("div",{class:y("content")},[U()])])}p.props=Object(l["a"])({},v["c"],{text:String,icon:String,color:String,block:Boolean,plain:Boolean,round:Boolean,square:Boolean,loading:Boolean,hairline:Boolean,disabled:Boolean,iconPrefix:String,nativeType:String,loadingText:String,loadingType:String,tag:{type:String,default:"button"},type:{type:String,default:"default"},size:{type:String,default:"normal"},loadingSize:{type:String,default:"20px"}});var m,w=k(p),b=Object(r["a"])("dialog"),D=b[0],H=b[1],P=b[2],U=D({mixins:[Object(u["a"])()],props:{title:String,width:[Number,String],message:String,className:null,callback:Function,beforeClose:Function,messageAlign:String,cancelButtonText:String,cancelButtonColor:String,confirmButtonText:String,confirmButtonColor:String,showCancelButton:Boolean,transition:{type:String,default:"van-dialog-bounce"},showConfirmButton:{type:Boolean,default:!0},overlay:{type:Boolean,default:!0},closeOnClickOverlay:{type:Boolean,default:!1},allowHtml:{type:Boolean,default:!0}},data:function(){return{loading:{confirm:!1,cancel:!1}}},methods:{onClickOverlay:function(){this.handleAction("overlay")},handleAction:function(t){var e=this;this.$emit(t),this.value&&(this.beforeClose?(this.loading[t]=!0,this.beforeClose(t,(function(n){!1!==n&&e.loading[t]&&e.onClose(t),e.loading.confirm=!1,e.loading.cancel=!1}))):this.onClose(t))},onClose:function(t){this.close(),this.callback&&this.callback(t)},onOpened:function(){this.$emit("opened")},onClosed:function(){this.$emit("closed")},genButtons:function(){var t,e=this,n=this.$createElement,l=this.showCancelButton&&this.showConfirmButton;return n("div",{class:[s["d"],H("footer",{buttons:l})]},[this.showCancelButton&&n(w,{attrs:{size:"large",loading:this.loading.cancel,text:this.cancelButtonText||P("cancel")},class:H("cancel"),style:{color:this.cancelButtonColor},on:{click:function(){e.handleAction("cancel")}}}),this.showConfirmButton&&n(w,{attrs:{size:"large",loading:this.loading.confirm,text:this.confirmButtonText||P("confirm")},class:[H("confirm"),(t={},t[s["b"]]=l,t)],style:{color:this.confirmButtonColor},on:{click:function(){e.handleAction("confirm")}}})])},genContent:function(t,e){var n=this.$createElement;if(e)return n("div",{class:H("content")},[e]);var l=this.message,i=this.messageAlign;if(l){var o,r,c={class:H("message",(o={"has-title":t},o[i]=i,o)),domProps:(r={},r[this.allowHtml?"innerHTML":"textContent"]=l,r)};return n("div",{class:H("content")},[n("div",a()([{},c]))])}}},render:function(){var t=arguments[0];if(this.shouldRender){var e=this.message,n=this.slots(),l=this.slots("title")||this.title,i=l&&t("div",{class:H("header",{isolated:!e&&!n})},[l]);return t("transition",{attrs:{name:this.transition},on:{afterEnter:this.onOpened,afterLeave:this.onClosed}},[t("div",{directives:[{name:"show",value:this.value}],attrs:{role:"dialog","aria-labelledby":this.title||e},class:[H(),this.className],style:{width:Object(c["a"])(this.width)}},[i,this.genContent(l,n),this.genButtons()])])}}}),C=n("a142");function N(t){return document.body.contains(t)}function B(){m&&m.$destroy(),m=new(i["a"].extend(U))({el:document.createElement("div"),propsData:{lazyRender:!1}}),m.$on("input",(function(t){m.value=t}))}function O(t){return C["f"]?Promise.resolve():new Promise((function(e,n){m&&N(m.$el)||B(),Object(l["a"])(m,O.currentOptions,t,{resolve:e,reject:n})}))}O.defaultOptions={value:!0,title:"",width:"",message:"",overlay:!0,className:"",allowHtml:!0,lockScroll:!0,transition:"van-dialog-bounce",beforeClose:null,overlayClass:"",overlayStyle:null,messageAlign:"",getContainer:"body",cancelButtonText:"",cancelButtonColor:null,confirmButtonText:"",confirmButtonColor:null,showConfirmButton:!0,showCancelButton:!1,closeOnPopstate:!1,closeOnClickOverlay:!1,callback:function(t){m["confirm"===t?"resolve":"reject"](t)}},O.alert=O,O.confirm=function(t){return O(Object(l["a"])({showCancelButton:!0},t))},O.close=function(){m&&(m.value=!1)},O.setDefaultOptions=function(t){Object(l["a"])(O.currentOptions,t)},O.resetDefaultOptions=function(){O.currentOptions=Object(l["a"])({},O.defaultOptions)},O.resetDefaultOptions(),O.install=function(){i["a"].use(U)},O.Component=U,i["a"].prototype.$dialog=O;e["a"]=O},"2fcb":function(t,e,n){},"75f8":function(t,e,n){"use strict";n.r(e);var l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"uniondrugPageJump"},[n("router-link",{attrs:{to:"/uniondrughealthy/addjs"}},[n("van-cell",{attrs:{title:"药联健康Appjs",value:"去测试","is-link":""}})],1),n("div",{staticClass:"top15"}),n("van-cell-group",{attrs:{title:"Healthy 健康"}},[n("van-cell",{attrs:{title:"健康中心页面",value:"v1.0.0","is-link":""},on:{click:function(e){return t.gotoNewPage("UnionDrugHealthy://Healthy/Home")}}})],1),n("van-cell-group",{attrs:{title:"WebView"}},[n("van-cell",{attrs:{title:"Web页面",value:"v1.0.0","is-link":""},on:{click:function(e){return t.gotoNewPage("UnionDrugHealthy://Healthy/Web?Url=https://wwww.baidu.com")}}})],1),n("van-cell-group",{attrs:{title:"User 用户"}},[n("van-cell",{attrs:{title:"我的页面",value:"v1.0.0","is-link":""},on:{click:function(e){return t.gotoNewPage("UnionDrugHealthy://User/Home")}}}),n("van-cell",{attrs:{title:"我的服务页面",value:"v1.0.0","is-link":""},on:{click:function(e){return t.gotoNewPage("UnionDrugHealthy://User/MyService")}}}),n("van-cell",{attrs:{title:"设置页面",value:"v1.0.0","is-link":""},on:{click:function(e){return t.gotoNewPage("UnionDrugHealthy://User/SystemSet")}}}),n("van-cell",{attrs:{title:"消息通知设置页面",value:"v1.0.0","is-link":""},on:{click:function(e){return t.gotoNewPage("UnionDrugHealthy://User/MessageSet")}}}),n("van-cell",{attrs:{title:"消息列表主页面",value:"v1.0.0","is-link":""},on:{click:function(e){return t.gotoNewPage("UnionDrugHealthy://User/Message/Home")}}}),n("van-cell",{attrs:{title:"消息列表页面1",value:"v1.0.0","is-link":""},on:{click:function(e){return t.gotoNewPage("UnionDrugHealthy://User/Message/List?MessageType=logistics")}}}),n("van-cell",{attrs:{title:"消息列表页面2",value:"v1.0.0","is-link":""},on:{click:function(e){return t.gotoNewPage("UnionDrugHealthy://User/Message/List?MessageType=activity")}}}),n("van-cell",{attrs:{title:"关于我们页面",value:"v1.0.0","is-link":""},on:{click:function(e){return t.gotoNewPage("UnionDrugHealthy://User/AboutUs")}}})],1),n("van-cell-group",{attrs:{title:"Login 登录"}},[n("van-cell",{attrs:{title:"一键登录页面",value:"v1.0.0","is-link":""},on:{click:function(e){return t.gotoNewPage("UnionDrugHealthy://Login/Home")}}}),n("van-cell",{attrs:{title:"手机验证码登录页面",value:"v1.0.0","is-link":""},on:{click:function(e){return t.gotoNewPage("UnionDrugHealthy://Login/Code")}}}),n("van-cell",{attrs:{title:"绑定手机号页面",value:"v1.0.0","is-link":""},on:{click:function(e){return t.gotoNewPage("UnionDrugHealthy://Login/BindingMobile")}}})],1),n("van-cell-group",{attrs:{title:"QRCode 二维码"}},[n("van-cell",{attrs:{title:"二维码扫描页面",value:"v1.0.0","is-link":""},on:{click:function(e){return t.gotoNewPage("UnionDrugHealthy://QRCode/Scan?type=QrCode")}}})],1),n("van-cell-group",{attrs:{title:"Remind 提醒"}},[n("van-cell",{attrs:{title:"用药提醒页面",value:"v1.0.0","is-link":""},on:{click:function(e){return t.gotoNewPage("UnionDrugHealthy://Remind/Home")}}}),n("van-cell",{attrs:{title:"添加时间提醒页面",value:"v1.0.0","is-link":""},on:{click:function(e){return t.gotoNewPage("UnionDrugHealthy://Remind/AddByTime")}}}),n("van-cell",{attrs:{title:"添加药品提醒页面",value:"v1.0.0","is-link":""},on:{click:function(e){return t.gotoNewPage("UnionDrugHealthy://Remind/AddByDrug")}}}),n("van-cell",{attrs:{title:"选择药品页面",value:"v1.0.0","is-link":""},on:{click:function(e){return t.gotoNewPage("UnionDrugHealthy://Remind/ChooseDrug")}}}),n("van-cell",{attrs:{title:"添加药品页面",value:"v1.0.0","is-link":""},on:{click:function(e){return t.gotoNewPage("UnionDrugHealthy://Remind/InputDrug")}}}),n("van-cell",{attrs:{title:"搜索药品页面",value:"v1.0.0","is-link":""},on:{click:function(e){return t.gotoNewPage("UnionDrugHealthy://Remind/SearchDrug")}}}),n("van-cell",{attrs:{title:"高级提醒设置页面",value:"v1.0.0","is-link":""},on:{click:function(e){return t.gotoNewPage("UnionDrugHealthy://Remind/Set")}}}),n("van-cell",{attrs:{title:"添加编辑提醒条件",value:"v1.0.0","iis-link":""},on:{click:function(e){return t.gotoNewPage("UnionDrugHealthy://Remind/condition")}}}),n("van-cell",{attrs:{title:"提醒记录页面",value:"v1.0.0","is-link":""},on:{click:function(e){return t.gotoNewPage("UnionDrugHealthy://Remind/Record")}}})],1),n("van-cell-group",{attrs:{title:"Device 药盒"}},[n("van-cell",{attrs:{title:"我的设备页面",value:"v1.0.0","is-link":""},on:{click:function(e){return t.gotoNewPage("UnionDrugHealthy://Device/Kit")}}}),n("van-cell",{attrs:{title:"设备未绑定页面",value:"v1.0.0","is-link":""},on:{click:function(e){return t.gotoNewPage("UnionDrugHealthy://Device/Unbound")}}}),n("van-cell",{attrs:{title:"正在搜索设备页面",value:"v1.0.0","is-link":""},on:{click:function(e){return t.gotoNewPage("UnionDrugHealthy://Device/Search")}}}),n("van-cell",{attrs:{title:"设备详情页面",value:"v1.0.0","is-link":""},on:{click:function(e){return t.gotoNewPage("UnionDrugHealthy://Device/Details")}}}),n("van-cell",{attrs:{title:"帮助页面",value:"v1.0.0","is-link":""},on:{click:function(e){return t.gotoNewPage("UnionDrugHealthy://Device/Help")}}}),n("van-cell",{attrs:{title:"设备信息页面",value:"v1.0.0","is-link":""},on:{click:function(e){return t.gotoNewPage("UnionDrugHealthy://Device/Info")}}})],1),n("van-cell-group",{attrs:{title:"指尖脉搏"}},[n("van-cell",{attrs:{title:"首页",value:"v1.0.0","is-link":""},on:{click:function(e){return t.gotoNewPage("UnionDrugHealthy://Healthy/QueryPulseData")}}}),n("van-cell",{attrs:{title:"全部数据页面",value:"v1.0.0","is-link":""},on:{click:function(e){return t.gotoNewPage("UnionDrugHealthy://Healthy/AllPulseData")}}}),n("van-cell",{attrs:{title:"详情页面",value:"v1.0.0","is-link":""},on:{click:function(e){return t.gotoNewPage("UnionDrugHealthy://Healthy/PulseDetails?id=1")}}}),n("van-cell",{attrs:{title:"测量页面",value:"v1.0.0","is-link":""},on:{click:function(e){return t.gotoNewPage("UnionDrugHealthy://Healthy/PulseMeasurement")}}})],1),n("van-cell-group",{attrs:{title:"健康数据"}},[n("van-cell",{attrs:{title:"健康数据页面",value:"v1.0.0","is-link":""},on:{click:function(e){return t.gotoNewPage("UnionDrugHealthy://Healthy/Data")}}})],1),n("van-cell-group",{attrs:{title:"日历"}},[n("van-cell",{attrs:{title:"健康数据页面",value:"v1.0.0","is-link":""},on:{click:function(e){return t.gotoNewPage("UnionDrugHealthy://Calendar/Home")}}})],1),n("van-cell-group",{attrs:{title:"药品"}},[n("van-cell",{attrs:{title:"同屏录药页面",value:"v2.1.0","is-link":""},on:{click:function(e){return t.gotoNewPage("UnionDrugHealthy://Drug/Recording?roomId=123&balance=30&type=card")}}})],1),n("van-cell-group",{attrs:{title:"订单"}},[n("van-cell",{attrs:{title:"支付完成页面",value:"v2.1.0","is-link":""},on:{click:function(e){return t.gotoNewPage("UnionDrugHealthy://Order/Completion?orderNo=123")}}})],1)],1)},i=[],o=(n("e17f"),n("2241")),a=(n("e7e5"),n("d399")),r=(n("0653"),n("34e9")),c=(n("c194"),n("7744")),s=n("2b0e");s["a"].use(c["a"]),s["a"].use(r["a"]),s["a"].use(a["a"]),s["a"].use(o["a"]);var u={name:"UniondrugPageJump",components:{},methods:{gotoNewPage:function(t){window.open(t)}}},g=u,v=(n("bd31"),n("2877")),d=Object(v["a"])(g,l,i,!1,null,"d2d4391c",null);e["default"]=d.exports},9722:function(t,e,n){},bc1b:function(t,e,n){},bd31:function(t,e,n){"use strict";var l=n("9722"),i=n.n(l);i.a},e17f:function(t,e,n){"use strict";n("68ef"),n("a71a"),n("9d70"),n("3743"),n("4d75"),n("e3b3"),n("bc1b"),n("2fcb")}}]);
//# sourceMappingURL=chunk-a109bd54.532e2e77.js.map