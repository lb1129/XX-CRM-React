"use strict";(self.webpackChunkl_admin=self.webpackChunkl_admin||[]).push([[51670,69155],{50312:function(e,t,n){n.d(t,{a:function(){return o},o:function(){return i}});var r=n(58467),a=n(10340),i=function(e){return 0===e},o=function(){var e=(0,r.TH)().pathname,t=(0,a.C)((function(e){return e.menuData.data})),n={};return function t(r,a){for(var i=0;i<r.length;i++){var o=r[i];if("".concat(null!==a&&void 0!==a?a:"").concat(o.path)===e){o.operateAuth&&(n=o.operateAuth);break}o.children&&o.children.length&&t(o.children,"".concat(null!==a&&void 0!==a?a:"").concat(o.path))}}(t),{operateAuth:n}}},20377:function(e,t,n){n.d(t,{l:function(){return i}});var r=n(838),a=n(92465),i=function(e){var t=a.Z.useToken();return(0,r.iv)(e(t))}},59943:function(e,t,n){n.d(t,{J:function(){return o}});var r=n(29439),a=n(47313),i=n(1355),o=function(e,t){var n=(0,a.useState)(0),o=(0,r.Z)(n,2),u=o[0],d=o[1],c=(0,a.useRef)();return(0,a.useLayoutEffect)((function(){var n=e.current;return n&&(c.current&&c.current.unobserve(n),c.current=new i.Z((function(e){d(e[0].contentRect.height-(null!==t&&void 0!==t?t:0))})),c.current.observe(n)),function(){var e;n&&(null===(e=c.current)||void 0===e||e.unobserve(n))}}),[e,t]),{height:u}}},51670:function(e,t,n){n.r(t),n.d(t,{default:function(){return Z}});var r=n(74165),a=n(15861),i=n(29439),o=n(47313),u=n(96333),d=n(59491),c=n(87785),l=n(23983),s=n(18217),f=n(14391),h=n(59943),p=n(50312),g=n(75590),v=n(58467),y=n(2135),x=n(20377);var k=n(46417),w=(0,o.forwardRef)((function(e,t){var n={disabled:(0,x.l)((function(){return{cursor:"not-allowed",color:"rgba(0, 0, 0, 0.25) !important"}}))},r=(0,o.useMemo)((function(){if(e.disabled)return n.disabled}),[e.disabled,n.disabled]),a=(0,o.useMemo)((function(){var t;return e.disabled||e.onClick?"":null!==(t=e.to)&&void 0!==t?t:""}),[e.disabled,e.to,e.onClick]);return(0,k.jsx)(y.rU,{ref:t,to:a,onClick:e.onClick,className:r,children:e.children})})),b=n(69155),Z=function(){var e=(0,o.useState)(0),t=(0,i.Z)(e,2),n=t[0],y=t[1],x=(0,o.useState)(!1),Z=(0,i.Z)(x,2),m=Z[0],S=Z[1],j=(0,o.useState)([]),C=(0,i.Z)(j,2),I=C[0],P=C[1],z=(0,o.useState)([]),N=(0,i.Z)(z,2),A=N[0],B=N[1],M=(0,o.useState)({pagination:{pageNo:1,pageSize:10},keyword:""}),R=(0,i.Z)(M,2),D=R[0],T=R[1],E=(0,o.useRef)(null),J=(0,h.J)(E,128.8+54.8).height,F=(0,p.a)().operateAuth,G=(0,g.$G)().t,K=u.Z.useApp().message,L=(0,v.s0)(),Y=[{title:"\u540d\u79f0",dataIndex:"name",key:"name",width:150,fixed:"left",render:function(e,t){return(0,k.jsx)(w,{disabled:(0,p.o)(F.detail),to:"/productManagement/productDetail/".concat(t.id),children:e})}},{title:"\u54c1\u724c",dataIndex:"brand",key:"brand",width:150},{title:"\u7c7b\u522b",dataIndex:"category",key:"category",width:150},{title:"\u4ef7\u683c",dataIndex:"price",key:"price",width:150},{title:"\u989c\u8272",dataIndex:"color",key:"color",width:150},{title:"\u6b3e\u5f0f",dataIndex:"style",key:"style",width:150,ellipsis:!0},{title:"\u662f\u5426\u542f\u7528",dataIndex:"enable",key:"enable",width:150},{title:"\u5e93\u5b58",dataIndex:"inventory",key:"inventory",width:150},{title:"\u63cf\u8ff0",dataIndex:"describe",key:"describe",width:150},{title:"\u64cd\u4f5c",dataIndex:"operation",key:"operation",width:180,fixed:"right",align:"center",render:function(e,t){return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(d.ZP,{type:"link",disabled:(0,p.o)(F.edit),onClick:function(){L("/productManagement/ProductAddOrEdit/".concat(t.id))},children:G("edit")}),(0,k.jsx)(c.Z,{type:"vertical"}),(0,k.jsx)(l.Z,{disabled:(0,p.o)(F.delete),title:G("areYouSureDelete"),onConfirm:function(){return q(t.id)},children:(0,k.jsx)(d.ZP,{type:"link",disabled:(0,p.o)(F.delete),children:G("delete")})})]})}}],_=(0,o.useMemo)((function(){return{total:n,current:D.pagination.pageNo,pageSize:D.pagination.pageSize,showTotal:function(e){return G("whatTotal",{total:e})},showSizeChanger:!0,showLessItems:!0,showQuickJumper:!0}}),[n,D,G]),q=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t?[t]:A,S(!0),e.prev=2,e.next=5,(0,b.deleteProductByIds)(n);case 5:K.success(G("whatSuccess",{what:G("delete")})),H(),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),S(!1);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}(),H=(0,o.useCallback)((0,a.Z)((0,r.Z)().mark((function e(){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return S(!0),e.prev=1,e.next=4,(0,b.getProducts)(D);case 4:t=e.sent,P(t.data.data),y(t.data.total),S(!1),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),S(!1);case 13:case"end":return e.stop()}}),e,null,[[1,10]])}))),[D]);return(0,o.useEffect)((function(){H()}),[H]),(0,k.jsx)("div",{style:{height:"100%"},ref:E,children:(0,k.jsx)(s.Z,{loading:m,columns:Y,dataSource:I,bordered:!0,rowKey:"id",scroll:{x:1200,y:J},pagination:_,onChange:function(e,t,n){T({pagination:{pageNo:e.current,pageSize:e.pageSize},keyword:D.keyword})},rowSelection:{selectedRowKeys:A,onChange:function(e){B(e)}},title:function(){return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsxs)(d.ZP.Group,{children:[(0,k.jsx)(d.ZP,{type:"primary",disabled:(0,p.o)(F.add),children:G("add")}),(0,k.jsx)(l.Z,{disabled:!A.length||(0,p.o)(F.delete),title:G("areYouSureDelete"),onConfirm:function(){return q()},children:(0,k.jsx)(d.ZP,{type:"primary",disabled:!A.length||(0,p.o)(F.delete),children:G("delete")})})]}),(0,k.jsx)("div",{style:{float:"right"},children:(0,k.jsx)(f.Z.Search,{onSearch:function(e){D.keyword!==e&&T({pagination:{pageNo:1,pageSize:D.pagination.pageSize},keyword:e})},placeholder:G("queryByName"),enterButton:!0})})]})}})})}},69155:function(e,t,n){n.r(t),n.d(t,{deleteProductByIds:function(){return u},getProductById:function(){return i},getProducts:function(){return d},saveProduct:function(){return o}});var r=n(67037),a=n(84312),i=function(e){return r.Z.get(a.j,{params:{id:e}})},o=function(e){return r.Z.post(a.j,e)},u=function(e){return r.Z.delete(a.j,{data:e})},d=function(e){return r.Z.post(a.jN,e)}}}]);