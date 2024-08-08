"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[94910],{4989:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>o,Details:()=>f,SpecifiedBy:()=>g,assets:()=>l,contentTitle:()=>r,default:()=>x,frontMatter:()=>d,metadata:()=>c,toc:()=>p});var a=n(74848),s=n(28453),i=n(96540);const d={id:"pending-digital-card-status-info",title:"PendingDigitalCardStatusInfo"},r=void 0,c={id:"interfaces/pending-digital-card-status-info",title:"PendingDigitalCardStatusInfo",description:"Pending Digital Card Status Information",source:"@site/docs/interfaces/pending-digital-card-status-info.mdx",sourceDirName:"interfaces",slug:"/interfaces/pending-digital-card-status-info",permalink:"/interfaces/pending-digital-card-status-info",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/interfaces/pending-digital-card-status-info.mdx",tags:[],version:"current",frontMatter:{id:"pending-digital-card-status-info",title:"PendingDigitalCardStatusInfo"},sidebar:"schemaSidebar",previous:{title:"PaymentStatusInfo",permalink:"/interfaces/payment-status-info"},next:{title:"PhysicalCardStatusInfo",permalink:"/interfaces/physical-card-status-info"}},l={},o=()=>{const e={span:"span",...(0,s.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},g=e=>{const t={a:"a",...(0,s.R)()};return(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const t={span:"span",...(0,s.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(t.span,{className:e.class,children:e.text})})},f=({dataOpen:e,dataClose:t,children:n,startOpen:d=!1})=>{const r={details:"details",summary:"summary",...(0,s.R)()},[c,l]=(0,i.useState)(d);return(0,a.jsxs)(r.details,{...c?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)(r.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:c?e:t}),c&&n]})},p=[{value:"Fields",id:"fields",level:3},{value:'<code>PendingDigitalCardStatusInfo.<b>status</b></code><Bullet></Bullet><code>PendingDigitalCardStatus!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"pendingdigitalcardstatusinfostatuspendingdigitalcardstatus--",level:4},{value:"Member Of",id:"member-of",level:3},{value:"Implemented By",id:"implemented-by",level:3}];function h(e){const t={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"Pending Digital Card Status Information"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-graphql",children:"interface PendingDigitalCardStatusInfo {\n  status: PendingDigitalCardStatus!\n}\n"})}),"\n",(0,a.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,a.jsxs)(t.h4,{id:"pendingdigitalcardstatusinfostatuspendingdigitalcardstatus--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["PendingDigitalCardStatusInfo.",(0,a.jsx)("b",{children:"status"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(t.a,{href:"/enums/pending-digital-card-status",children:(0,a.jsx)(t.code,{children:"PendingDigitalCardStatus!"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,a.jsx)(t.p,{children:"Status of the digital card."}),"\n",(0,a.jsx)(t.h3,{id:"member-of",children:"Member Of"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"/objects/pending-digital-card",children:(0,a.jsx)(t.code,{children:"PendingDigitalCard"})}),"  ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsx)(t.h3,{id:"implemented-by",children:"Implemented By"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"/objects/digital-card-consent-pending-status-info",children:(0,a.jsx)(t.code,{children:"DigitalCardConsentPendingStatusInfo"})}),"  ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(o,{}),(0,a.jsx)(t.a,{href:"/objects/digital-card-declined-status-info",children:(0,a.jsx)(t.code,{children:"DigitalCardDeclinedStatusInfo"})}),"  ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(o,{}),(0,a.jsx)(t.a,{href:"/objects/digital-card-pending-status-info",children:(0,a.jsx)(t.code,{children:"DigitalCardPendingStatusInfo"})}),"  ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"object"})]})]})}function x(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>d,x:()=>r});var a=n(96540);const s={},i=a.createContext(s);function d(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);