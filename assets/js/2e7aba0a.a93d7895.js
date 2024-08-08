"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[63570],{20227:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>r,Details:()=>x,SpecifiedBy:()=>f,assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>d,metadata:()=>c,toc:()=>p});var i=n(74848),s=n(28453),a=n(96540);const d={id:"expired-identification-level-status-info",title:"ExpiredIdentificationLevelStatusInfo"},o=void 0,c={id:"objects/expired-identification-level-status-info",title:"ExpiredIdentificationLevelStatusInfo",description:"Describes an identification level for the process associated to this identification that has expired and is no longer considered valid",source:"@site/docs/objects/expired-identification-level-status-info.mdx",sourceDirName:"objects",slug:"/objects/expired-identification-level-status-info",permalink:"/objects/expired-identification-level-status-info",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/objects/expired-identification-level-status-info.mdx",tags:[],version:"current",frontMatter:{id:"expired-identification-level-status-info",title:"ExpiredIdentificationLevelStatusInfo"},sidebar:"schemaSidebar",previous:{title:"EnrichedTransactionInfo",permalink:"/objects/enriched-transaction-info"},next:{title:"ExpiredMerchantPaymentLinkStatusInfo",permalink:"/objects/expired-merchant-payment-link-status-info"}},l={},r=()=>{const e={span:"span",...(0,s.R)()};return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},f=e=>{const t={a:"a",...(0,s.R)()};return(0,i.jsxs)(i.Fragment,{children:["Specification",(0,i.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const t={span:"span",...(0,s.R)()};return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(t.span,{className:e.class,children:e.text})})},x=({dataOpen:e,dataClose:t,children:n,startOpen:d=!1})=>{const o={details:"details",summary:"summary",...(0,s.R)()},[c,l]=(0,a.useState)(d);return(0,i.jsxs)(o.details,{...c?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,i.jsx)(o.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:c?e:t}),c&&n]})},p=[{value:"Fields",id:"fields",level:3},{value:'<code>ExpiredIdentificationLevelStatusInfo.<b>status</b></code><Bullet></Bullet><code>SwanIdentificationStatus!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"expiredidentificationlevelstatusinfostatusswanidentificationstatus--",level:4},{value:'<code>ExpiredIdentificationLevelStatusInfo.<b>expiredAt</b></code><Bullet></Bullet><code>Date!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"expiredidentificationlevelstatusinfoexpiredatdate--",level:4},{value:"Implemented By",id:"implemented-by",level:3}];function h(e){const t={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"Describes an identification level for the process associated to this identification that has expired and is no longer considered valid"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-graphql",children:"type ExpiredIdentificationLevelStatusInfo {\n  status: SwanIdentificationStatus!\n  expiredAt: Date!\n}\n"})}),"\n",(0,i.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,i.jsxs)(t.h4,{id:"expiredidentificationlevelstatusinfostatusswanidentificationstatus--",children:[(0,i.jsx)(t.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["ExpiredIdentificationLevelStatusInfo.",(0,i.jsx)("b",{children:"status"})]})}),(0,i.jsx)(r,{}),(0,i.jsx)(t.a,{href:"/enums/swan-identification-status",children:(0,i.jsx)(t.code,{children:"SwanIdentificationStatus!"})})," ",(0,i.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,i.jsx)(u,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,i.jsxs)(t.p,{children:["Always set to ",(0,i.jsx)(t.code,{children:"Expired"})]}),"\n",(0,i.jsxs)(t.h4,{id:"expiredidentificationlevelstatusinfoexpiredatdate--",children:[(0,i.jsx)(t.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["ExpiredIdentificationLevelStatusInfo.",(0,i.jsx)("b",{children:"expiredAt"})]})}),(0,i.jsx)(r,{}),(0,i.jsx)(t.a,{href:"/scalars/date",children:(0,i.jsx)(t.code,{children:"Date!"})})," ",(0,i.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,i.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,i.jsx)(t.p,{children:"When this identification level expired"}),"\n",(0,i.jsx)(t.h3,{id:"implemented-by",children:"Implemented By"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"/unions/identification-level-status-info",children:(0,i.jsx)(t.code,{children:"IdentificationLevelStatusInfo"})}),"  ",(0,i.jsx)(u,{class:"badge badge--secondary",text:"union"})]})]})}function m(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>d,x:()=>o});var i=n(96540);const s={},a=i.createContext(s);function d(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);