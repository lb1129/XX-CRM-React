"use strict";(self.webpackChunkl_admin=self.webpackChunkl_admin||[]).push([[84871],{20377:function(t,e,n){n.d(e,{l:function(){return i}});var r=n(838),o=n(92465),i=function(t){var e=o.Z.useToken();return(0,r.iv)(t(e))}},84871:function(t,e,n){n.r(e),n.d(e,{default:function(){return o}});var r=n(20377);function o(){return{wrap:(0,r.l)((function(t){return{minHeight:"100%",backgroundColor:t.token.colorBgLayout,paddingBottom:"24px"}})),header:(0,r.l)((function(){return{height:"40px",lineHeight:"40px",textAlign:"right",paddingRight:"24px",marginBottom:"32px"}})),title:(0,r.l)((function(){return{fontSize:"33px",fontWeight:600,textAlign:"center"}})),desc:(0,r.l)((function(t){return{color:t.token.colorTextDescription,marginTop:"12px",marginBottom:"40px",textAlign:"center"}})),main:(0,r.l)((function(){return{width:"368px",margin:"0 auto"}})),footer:(0,r.l)((function(t){return{textAlign:"center",margin:"48px 0 24px","&, & > a":{color:t.token.colorTextDescription}}}))}}},92465:function(t,e,n){n.d(e,{Z:function(){return v}});var r=n(29439),o=n(67531),i=n(93668),c=n(37750),a=n(89969),l=n(72387),u=n(40090),g=function(t,e){return new u.C(t).setAlpha(e).toRgbString()},s=function(t,e){return new u.C(t).lighten(e).toHexString()},f=function(t){var e=(0,c.generate)(t,{theme:"dark"});return{1:e[0],2:e[1],3:e[2],4:e[3],5:e[6],6:e[5],7:e[4],8:e[6],9:e[5],10:e[4]}},d=function(t,e){var n=t||"#000",r=e||"#fff";return{colorBgBase:n,colorTextBase:r,colorText:g(r,.85),colorTextSecondary:g(r,.65),colorTextTertiary:g(r,.45),colorTextQuaternary:g(r,.25),colorFill:g(r,.18),colorFillSecondary:g(r,.12),colorFillTertiary:g(r,.08),colorFillQuaternary:g(r,.04),colorBgElevated:s(n,12),colorBgContainer:s(n,8),colorBgLayout:s(n,0),colorBgSpotlight:s(n,26),colorBorder:s(n,26),colorBorderSecondary:s(n,19)}},h=function(t,e){var n=Object.keys(a.M).map((function(e){var n=(0,c.generate)(t[e],{theme:"dark"});return new Array(10).fill(1).reduce((function(t,r,o){return t["".concat(e,"-").concat(o+1)]=n[o],t["".concat(e).concat(o+1)]=n[o],t}),{})})).reduce((function(t,e){return t=Object.assign(Object.assign({},t),e)}),{}),r=null!==e&&void 0!==e?e:(0,i.Z)(t);return Object.assign(Object.assign(Object.assign({},r),n),(0,l.Z)(t,{generateColorPalettes:f,generateNeutralColorPalettes:d}))},p=n(9517);var x=n(23851),m=function(t,e){var n=null!==e&&void 0!==e?e:(0,i.Z)(t),r=n.fontSizeSM,o=n.controlHeight-4;return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},n),function(t){var e=t.sizeUnit,n=t.sizeStep-2;return{sizeXXL:e*(n+10),sizeXL:e*(n+6),sizeLG:e*(n+2),sizeMD:e*(n+2),sizeMS:e*(n+1),size:e*n,sizeSM:e*n,sizeXS:e*(n-1),sizeXXS:e*(n-1)}}(null!==e&&void 0!==e?e:t)),(0,x.Z)(r)),{controlHeight:o}),(0,p.Z)(Object.assign(Object.assign({},n),{controlHeight:o})))};var v={defaultConfig:o.u_,defaultSeed:o.u_.token,useToken:function(){var t=(0,o.dQ)(),e=(0,r.Z)(t,3);return{theme:e[0],token:e[1],hashId:e[2]}},defaultAlgorithm:i.Z,darkAlgorithm:h,compactAlgorithm:m}}}]);