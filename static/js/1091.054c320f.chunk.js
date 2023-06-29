"use strict";(self.webpackChunkl_admin=self.webpackChunkl_admin||[]).push([[1091,69155],{3355:function(e,n,t){t.d(n,{Z:function(){return s}});t(47313);var r=t(52917),i=t(20377);var a=t(46417),s=function(e){var n=e.title,t=e.subTitle,s=e.extra,c=e.children,l=e.onBack,o={wrap:(0,i.l)((function(){return{color:"#000000d9",fontSize:"14px",position:"relative",padding:"16px 24px",backgroundColor:"#fff"}})),head:(0,i.l)((function(){return{display:"flex",justifyContent:"space-between"}})),headLeft:(0,i.l)((function(){return{display:"flex",alignItems:"center",margin:"4px 0",overflow:"hidden"}})),headBack:(0,i.l)((function(){return{marginRight:"16px",fontSize:"16px",lineHeight:1}})),headBackButton:(0,i.l)((function(e){return{display:"inline-block",transition:"color .3s",color:e.token.colorPrimary,cursor:"pointer"}})),headTitle:(0,i.l)((function(){return{marginRight:"12px",color:"#000000d9",fontWeight:600,fontSize:"20px",lineHeight:"32px",overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"}})),headSubTitle:(0,i.l)((function(){return{marginRight:"12px",color:"#00000073",fontSize:"14px",lineHeight:"1.5715",overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"}})),headExtra:(0,i.l)((function(){return{margin:"4px 0",whiteSpace:"nowrap","&>*":{marginLeft:"12px",whiteSpace:"unset"},"&>*:first-child":{marginLeft:0}}})),content:(0,i.l)((function(){return{paddingTop:"12px"}}))};return(0,a.jsxs)("div",{className:o.wrap,children:[(0,a.jsxs)("div",{className:o.head,children:[(0,a.jsxs)("div",{className:o.headLeft,children:[(0,a.jsx)("div",{className:o.headBack,children:(0,a.jsx)("div",{className:o.headBackButton,onClick:l,children:(0,a.jsx)(r.default,{})})}),(0,a.jsx)("span",{className:o.headTitle,children:n}),(0,a.jsx)("span",{className:o.headSubTitle,children:t})]}),(0,a.jsx)("div",{className:o.headExtra,children:s})]}),(0,a.jsx)("div",{className:o.content,children:c})]})}},62202:function(e,n,t){t.d(n,{y:function(){return r}});var r=Symbol("productEditDone")},31876:function(e,n,t){t.d(n,{Z:function(){return s}});var r=t(15671),i=t(43144),a=function(){function e(){(0,r.Z)(this,e),this.store=void 0,this.store=new Map}return(0,i.Z)(e,[{key:"on",value:function(e,n,t){var r={handler:n,once:!!t};if(this.store.has(e)){var i=this.store.get(e);null===i||void 0===i||i.push(r)}else this.store.set(e,[r])}},{key:"off",value:function(e,n){if(this.store.has(e)){var t=this.store.get(e),r=null===t||void 0===t?void 0:t.findIndex((function(e){return e.handler===n}));(r||0===r)&&(null===t||void 0===t||t.splice(r,1))}}},{key:"emit",value:function(e){for(var n=this,t=arguments.length,r=new Array(t>1?t-1:0),i=1;i<t;i++)r[i-1]=arguments[i];if(this.store.has(e)){var a=this.store.get(e);null===a||void 0===a||a.forEach((function(t){t.handler.apply(t,r),t.once&&n.off(e,t.handler)}))}}},{key:"once",value:function(e,n){this.on(e,n,!0)}}]),e}(),s=new a},20377:function(e,n,t){t.d(n,{l:function(){return a}});var r=t(838),i=t(92465),a=function(e){var n=i.Z.useToken();return(0,r.iv)(e(n))}},14820:function(e,n,t){t.r(n);var r=t(74165),i=t(1413),a=t(15861),s=t(29439),c=t(47313),l=t(96333),o=t(79930),u=t(59491),d=t(99613),h=t(68197),f=t(59624),p=t(40440),x=t(49375),v=t(32697),Z=t(58467),m=t(3355),j=t(75590),g=t(69155),w=t(31876),b=t(62202),y=t(46417);n.default=function(){var e=(0,Z.UO)(),n=(0,Z.s0)(),t=(0,j.$G)().t,k=l.Z.useApp().message,I=o.Z.useForm(),S=(0,s.Z)(I,1)[0],B=(0,c.useState)(!1),N=(0,s.Z)(B,2),P=N[0],T=N[1],q=(0,c.useState)(!1),C=(0,s.Z)(q,2),E=C[0],z=C[1],L=(0,c.useMemo)((function(){return e.id?t("edit"):t("add")}),[e.id,t]),R=function(){var s=(0,a.Z)((0,r.Z)().mark((function a(){var s;return(0,r.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,S.validateFields();case 3:return s=r.sent,z(!0),r.next=7,(0,g.saveProduct)(e.id?(0,i.Z)((0,i.Z)({},s),{},{id:e.id}):s);case 7:w.Z.emit(b.y),z(!1),k.success(t("whatSuccess",{what:t("save")})),n(-1),r.next=16;break;case 13:r.prev=13,r.t0=r.catch(0),z(!1);case 16:case"end":return r.stop()}}),a,null,[[0,13]])})));return function(){return s.apply(this,arguments)}}(),A=(0,c.useCallback)((0,a.Z)((0,r.Z)().mark((function n(){var t;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!e.id){n.next=13;break}return T(!0),n.prev=2,n.next=5,(0,g.getProductById)(e.id);case 5:t=n.sent,S.setFieldsValue(t.data),T(!1),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(2),T(!1);case 13:case"end":return n.stop()}}),n,null,[[2,10]])}))),[e.id,S]);return(0,c.useEffect)((function(){A()}),[A]),(0,y.jsx)(m.Z,{title:L,onBack:function(){return n(-1)},extra:(0,y.jsx)(u.ZP,{type:"primary",onClick:R,loading:E,children:t("save")}),children:(0,y.jsx)(d.Z,{loading:P,active:!0,children:(0,y.jsx)(o.Z,{form:S,children:(0,y.jsxs)(h.Z,{gutter:24,children:[(0,y.jsx)(f.Z,{span:8,children:(0,y.jsx)(o.Z.Item,{name:"name",label:"name",rules:[{required:!0}],children:(0,y.jsx)(p.Z,{})})}),(0,y.jsx)(f.Z,{span:8,children:(0,y.jsx)(o.Z.Item,{name:"brand",label:"brand",rules:[{required:!0}],children:(0,y.jsx)(p.Z,{})})}),(0,y.jsx)(f.Z,{span:8,children:(0,y.jsx)(o.Z.Item,{name:"category",label:"category",rules:[{required:!0}],children:(0,y.jsx)(p.Z,{})})}),(0,y.jsx)(f.Z,{span:8,children:(0,y.jsx)(o.Z.Item,{name:"price",label:"price",rules:[{required:!0}],children:(0,y.jsx)(x.Z,{style:{width:"100%"},min:0,precision:2})})}),(0,y.jsx)(f.Z,{span:8,children:(0,y.jsx)(o.Z.Item,{name:"color",label:"color",rules:[{required:!0}],children:(0,y.jsx)(p.Z,{})})}),(0,y.jsx)(f.Z,{span:8,children:(0,y.jsx)(o.Z.Item,{name:"inventory",label:"inventory",rules:[{required:!0}],children:(0,y.jsx)(x.Z,{style:{width:"100%"},min:0,precision:0})})}),(0,y.jsx)(f.Z,{span:8,children:(0,y.jsx)(o.Z.Item,{name:"style",label:"style",rules:[{required:!0}],children:(0,y.jsx)(p.Z,{})})}),(0,y.jsx)(f.Z,{span:8,children:(0,y.jsx)(o.Z.Item,{name:"enable",label:"enable",valuePropName:"checked",children:(0,y.jsx)(v.Z,{})})}),(0,y.jsx)(f.Z,{span:24,children:(0,y.jsx)(o.Z.Item,{name:"describe",label:"describe",children:(0,y.jsx)(p.Z.TextArea,{})})})]})})})})}},69155:function(e,n,t){t.r(n),t.d(n,{deleteProductByIds:function(){return c},getProductById:function(){return a},getProducts:function(){return l},saveProduct:function(){return s}});var r=t(67037),i=t(84312),a=function(e){return r.Z.get(i.j,{params:{id:e}})},s=function(e){return r.Z.post(i.j,e)},c=function(e){return r.Z.delete(i.j,{data:e})},l=function(e){return r.Z.post(i.jN,e)}},67440:function(e,n,t){t.r(n),t.d(n,{default:function(){return l}});var r=t(87462),i=t(47313),a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"}}]},name:"down",theme:"outlined"},s=t(17469),c=function(e,n){return i.createElement(s.Z,(0,r.Z)({},e,{ref:n,icon:a}))};var l=i.forwardRef(c)},59624:function(e,n,t){var r=t(26297);n.Z=r.Z},68197:function(e,n,t){var r=t(84268);n.Z=r.Z}}]);