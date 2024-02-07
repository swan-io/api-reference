"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[8527],{26466:(e,s,a)=>{a.r(s),a.d(s,{Badge:()=>u,Bullet:()=>o,Details:()=>g,SpecifiedBy:()=>h,assets:()=>l,contentTitle:()=>c,default:()=>x,frontMatter:()=>r,metadata:()=>i,toc:()=>y});var d=a(85893),n=a(11151),t=a(67294);const r={id:"physical-card-renewed-status-info",title:"PhysicalCardRenewedStatusInfo"},c=void 0,i={id:"objects/physical-card-renewed-status-info",title:"PhysicalCardRenewedStatusInfo",description:"Physical Card Renewed Status Information",source:"@site/docs/objects/physical-card-renewed-status-info.mdx",sourceDirName:"objects",slug:"/objects/physical-card-renewed-status-info",permalink:"/objects/physical-card-renewed-status-info",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/objects/physical-card-renewed-status-info.mdx",tags:[],version:"current",frontMatter:{id:"physical-card-renewed-status-info",title:"PhysicalCardRenewedStatusInfo"},sidebar:"schemaSidebar",previous:{title:"PhysicalCardProcessingStatusInfo",permalink:"/objects/physical-card-processing-status-info"},next:{title:"PhysicalCardSuspendedStatusInfo",permalink:"/objects/physical-card-suspended-status-info"}},l={},o=()=>{const e={span:"span",...(0,n.a)()};return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},h=e=>{const s={a:"a",...(0,n.a)()};return(0,d.jsxs)(d.Fragment,{children:["Specification",(0,d.jsx)(s.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const s={span:"span",...(0,n.a)()};return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(s.span,{className:e.class,children:e.text})})},y=[{value:"Fields",id:"fields",level:3},{value:'<code>PhysicalCardRenewedStatusInfo.<b>status</b></code><Bullet></Bullet><code>PhysicalCardStatus!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"physicalcardrenewedstatusinfostatusphysicalcardstatus--",level:4},{value:'<code>PhysicalCardRenewedStatusInfo.<b>address</b></code><Bullet></Bullet><code>Address!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"physicalcardrenewedstatusinfoaddressaddress--",level:4},{value:'<code>PhysicalCardRenewedStatusInfo.<b>estimatedDeliveryDate</b></code><Bullet></Bullet><code>DateTime</code> <Badge class="badge badge--secondary"></Badge>',id:"physicalcardrenewedstatusinfoestimateddeliverydatedatetime-",level:4},{value:'<code>PhysicalCardRenewedStatusInfo.<b>trackingNumber</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"physicalcardrenewedstatusinfotrackingnumberstring-",level:4},{value:'<code>PhysicalCardRenewedStatusInfo.<b>shippingProvider</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"physicalcardrenewedstatusinfoshippingproviderstring-",level:4},{value:'<code>PhysicalCardRenewedStatusInfo.<b>isPINReady</b></code><Bullet></Bullet><code>Boolean!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"physicalcardrenewedstatusinfoispinreadyboolean--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>PhysicalCardStatusInfo</code> <Badge class="badge badge--secondary"></Badge>',id:"physicalcardstatusinfo-",level:4}],g=({dataOpen:e,dataClose:s,children:a,startOpen:r=!1})=>{const c={details:"details",summary:"summary",...(0,n.a)()},[i,l]=(0,t.useState)(r);return(0,d.jsxs)(c.details,{...i?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,d.jsx)(c.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:i?e:s}),i&&a]})};function f(e){const s={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(s.p,{children:"Physical Card Renewed Status Information"}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-graphql",children:"type PhysicalCardRenewedStatusInfo implements PhysicalCardStatusInfo {\n  status: PhysicalCardStatus!\n  address: Address!\n  estimatedDeliveryDate: DateTime\n  trackingNumber: String\n  shippingProvider: String\n  isPINReady: Boolean!\n}\n"})}),"\n",(0,d.jsx)(s.h3,{id:"fields",children:"Fields"}),"\n",(0,d.jsxs)(s.h4,{id:"physicalcardrenewedstatusinfostatusphysicalcardstatus--",children:[(0,d.jsx)(s.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["PhysicalCardRenewedStatusInfo.",(0,d.jsx)("b",{children:"status"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(s.a,{href:"/enums/physical-card-status",children:(0,d.jsx)(s.code,{children:"PhysicalCardStatus!"})})," ",(0,d.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(u,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,d.jsxs)(s.blockquote,{children:["\n",(0,d.jsx)(s.p,{children:"Physical Card status (always Renewed for type PhysicalCardRenewedStatusInfo)."}),"\n"]}),"\n",(0,d.jsxs)(s.h4,{id:"physicalcardrenewedstatusinfoaddressaddress--",children:[(0,d.jsx)(s.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["PhysicalCardRenewedStatusInfo.",(0,d.jsx)("b",{children:"address"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(s.a,{href:"/objects/address",children:(0,d.jsx)(s.code,{children:"Address!"})})," ",(0,d.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(u,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,d.jsxs)(s.blockquote,{children:["\n",(0,d.jsx)(s.p,{children:"address to deliver the physical card"}),"\n"]}),"\n",(0,d.jsxs)(s.h4,{id:"physicalcardrenewedstatusinfoestimateddeliverydatedatetime-",children:[(0,d.jsx)(s.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["PhysicalCardRenewedStatusInfo.",(0,d.jsx)("b",{children:"estimatedDeliveryDate"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(s.a,{href:"/scalars/date-time",children:(0,d.jsx)(s.code,{children:"DateTime"})})," ",(0,d.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsxs)(s.blockquote,{children:["\n",(0,d.jsx)(s.p,{children:"Estimated delivery date"}),"\n"]}),"\n",(0,d.jsxs)(s.h4,{id:"physicalcardrenewedstatusinfotrackingnumberstring-",children:[(0,d.jsx)(s.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["PhysicalCardRenewedStatusInfo.",(0,d.jsx)("b",{children:"trackingNumber"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(s.a,{href:"/scalars/string",children:(0,d.jsx)(s.code,{children:"String"})})," ",(0,d.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsxs)(s.blockquote,{children:["\n",(0,d.jsx)(s.p,{children:"Shipping tracking number"}),"\n"]}),"\n",(0,d.jsxs)(s.h4,{id:"physicalcardrenewedstatusinfoshippingproviderstring-",children:[(0,d.jsx)(s.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["PhysicalCardRenewedStatusInfo.",(0,d.jsx)("b",{children:"shippingProvider"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(s.a,{href:"/scalars/string",children:(0,d.jsx)(s.code,{children:"String"})})," ",(0,d.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsxs)(s.blockquote,{children:["\n",(0,d.jsx)(s.p,{children:"Name of the shipping provider (Ex: LaPoste, DHL ...)"}),"\n"]}),"\n",(0,d.jsxs)(s.h4,{id:"physicalcardrenewedstatusinfoispinreadyboolean--",children:[(0,d.jsx)(s.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["PhysicalCardRenewedStatusInfo.",(0,d.jsx)("b",{children:"isPINReady"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(s.a,{href:"/scalars/boolean",children:(0,d.jsx)(s.code,{children:"Boolean!"})})," ",(0,d.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsxs)(s.blockquote,{children:["\n",(0,d.jsxs)(s.p,{children:[(0,d.jsx)(s.code,{children:"true"})," if PIN Code is available."]}),"\n"]}),"\n",(0,d.jsx)(s.h3,{id:"interfaces",children:"Interfaces"}),"\n",(0,d.jsxs)(s.h4,{id:"physicalcardstatusinfo-",children:[(0,d.jsx)(s.a,{href:"/interfaces/physical-card-status-info",children:(0,d.jsx)(s.code,{children:"PhysicalCardStatusInfo"})})," ",(0,d.jsx)(u,{class:"badge badge--secondary",text:"interface"})]}),"\n",(0,d.jsxs)(s.blockquote,{children:["\n",(0,d.jsx)(s.p,{children:"Physical Card Status Information"}),"\n"]})]})}function x(e={}){const{wrapper:s}={...(0,n.a)(),...e.components};return s?(0,d.jsx)(s,{...e,children:(0,d.jsx)(f,{...e})}):f(e)}},11151:(e,s,a)=>{a.d(s,{Z:()=>c,a:()=>r});var d=a(67294);const n={},t=d.createContext(n);function r(e){const s=d.useContext(t);return d.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),d.createElement(t.Provider,{value:s},e.children)}}}]);