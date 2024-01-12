"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[96788],{50758:(e,s,a)=>{a.r(s),a.d(s,{Badge:()=>h,Bullet:()=>o,Details:()=>f,SpecifiedBy:()=>u,assets:()=>l,contentTitle:()=>r,default:()=>x,frontMatter:()=>c,metadata:()=>i,toc:()=>p});var t=a(85893),n=a(11151),d=a(67294);const c={id:"physical-card-suspended-status-info",title:"PhysicalCardSuspendedStatusInfo"},r=void 0,i={id:"objects/physical-card-suspended-status-info",title:"PhysicalCardSuspendedStatusInfo",description:"Physical Card Suspended Status Information",source:"@site/docs/objects/physical-card-suspended-status-info.mdx",sourceDirName:"objects",slug:"/objects/physical-card-suspended-status-info",permalink:"/objects/physical-card-suspended-status-info",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/objects/physical-card-suspended-status-info.mdx",tags:[],version:"current",frontMatter:{id:"physical-card-suspended-status-info",title:"PhysicalCardSuspendedStatusInfo"},sidebar:"schemaSidebar",previous:{title:"PhysicalCardRenewedStatusInfo",permalink:"/objects/physical-card-renewed-status-info"},next:{title:"PhysicalCardToActivateStatusInfo",permalink:"/objects/physical-card-to-activate-status-info"}},l={},o=()=>{const e={span:"span",...(0,n.a)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const s={a:"a",...(0,n.a)()};return(0,t.jsxs)(t.Fragment,{children:["Specification",(0,t.jsx)(s.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},h=e=>{const s={span:"span",...(0,n.a)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(s.span,{className:e.class,children:e.text})})},p=[{value:"Fields",id:"fields",level:3},{value:'<code>PhysicalCardSuspendedStatusInfo.<b>status</b></code><Bullet></Bullet><code>PhysicalCardStatus!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"physicalcardsuspendedstatusinfostatusphysicalcardstatus--",level:4},{value:'<code>PhysicalCardSuspendedStatusInfo.<b>reason</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"physicalcardsuspendedstatusinforeasonstring--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>PhysicalCardStatusInfo</code> <Badge class="badge badge--secondary"></Badge>',id:"physicalcardstatusinfo-",level:4}],f=({dataOpen:e,dataClose:s,children:a,startOpen:c=!1})=>{const r={details:"details",summary:"summary",...(0,n.a)()},[i,l]=(0,d.useState)(c);return(0,t.jsxs)(r.details,{...i?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,t.jsx)(r.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:i?e:s}),i&&a]})};function y(e){const s={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.p,{children:"Physical Card Suspended Status Information"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-graphql",children:"type PhysicalCardSuspendedStatusInfo implements PhysicalCardStatusInfo {\n  status: PhysicalCardStatus!\n  reason: String!\n}\n"})}),"\n",(0,t.jsx)(s.h3,{id:"fields",children:"Fields"}),"\n",(0,t.jsxs)(s.h4,{id:"physicalcardsuspendedstatusinfostatusphysicalcardstatus--",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["PhysicalCardSuspendedStatusInfo.",(0,t.jsx)("b",{children:"status"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(s.a,{href:"/enums/physical-card-status",children:(0,t.jsx)(s.code,{children:"PhysicalCardStatus!"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsx)(s.p,{children:"Physical Card status (always Suspended for type PhysicalCardSuspendedStatusInfo)."}),"\n"]}),"\n",(0,t.jsxs)(s.h4,{id:"physicalcardsuspendedstatusinforeasonstring--",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["PhysicalCardSuspendedStatusInfo.",(0,t.jsx)("b",{children:"reason"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(s.a,{href:"/scalars/string",children:(0,t.jsx)(s.code,{children:"String!"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsx)(s.p,{children:"Reason why the card is suspended."}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"interfaces",children:"Interfaces"}),"\n",(0,t.jsxs)(s.h4,{id:"physicalcardstatusinfo-",children:[(0,t.jsx)(s.a,{href:"/interfaces/physical-card-status-info",children:(0,t.jsx)(s.code,{children:"PhysicalCardStatusInfo"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"interface"})]}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsx)(s.p,{children:"Physical Card Status Information"}),"\n"]})]})}function x(e={}){const{wrapper:s}={...(0,n.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(y,{...e})}):y(e)}},11151:(e,s,a)=>{a.d(s,{Z:()=>r,a:()=>c});var t=a(67294);const n={},d=t.createContext(n);function c(e){const s=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),t.createElement(d.Provider,{value:s},e.children)}}}]);