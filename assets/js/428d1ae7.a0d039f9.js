"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[75603],{99859:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>o,Details:()=>h,SpecifiedBy:()=>m,assets:()=>l,contentTitle:()=>r,default:()=>j,frontMatter:()=>d,metadata:()=>c,toc:()=>p});var s=n(74848),a=n(28453),i=n(96540);const d={id:"payment-status",title:"PaymentStatus"},r=void 0,c={id:"enums/payment-status",title:"PaymentStatus",description:"Payment status",source:"@site/docs/enums/payment-status.mdx",sourceDirName:"enums",slug:"/enums/payment-status",permalink:"/enums/payment-status",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/enums/payment-status.mdx",tags:[],version:"current",frontMatter:{id:"payment-status",title:"PaymentStatus"},sidebar:"schemaSidebar",previous:{title:"PaymentProduct",permalink:"/enums/payment-product"},next:{title:"PendingDigitalCardStatus",permalink:"/enums/pending-digital-card-status"}},l={},o=()=>{const e={span:"span",...(0,a.R)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},m=e=>{const t={a:"a",...(0,a.R)()};return(0,s.jsxs)(s.Fragment,{children:["Specification",(0,s.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const t={span:"span",...(0,a.R)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(t.span,{className:e.class,children:e.text})})},h=({dataOpen:e,dataClose:t,children:n,startOpen:d=!1})=>{const r={details:"details",summary:"summary",...(0,a.R)()},[c,l]=(0,i.useState)(d);return(0,s.jsxs)(r.details,{...c?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,s.jsx)(r.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:c?e:t}),c&&n]})},p=[{value:"Values",id:"values",level:3},{value:"<code>PaymentStatus.<b>ConsentPending</b></code>",id:"paymentstatusconsentpending",level:4},{value:"<code>PaymentStatus.<b>Initiated</b></code>",id:"paymentstatusinitiated",level:4},{value:"<code>PaymentStatus.<b>Rejected</b></code>",id:"paymentstatusrejected",level:4},{value:"Member Of",id:"member-of",level:3}];function x(e){const t={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"Payment status"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-graphql",children:"enum PaymentStatus {\n  ConsentPending\n  Initiated\n  Rejected\n}\n"})}),"\n",(0,s.jsx)(t.h3,{id:"values",children:"Values"}),"\n",(0,s.jsx)(t.h4,{id:"paymentstatusconsentpending",children:(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["PaymentStatus.",(0,s.jsx)("b",{children:"ConsentPending"})]})})}),"\n",(0,s.jsx)(t.p,{children:"when a consent is pending before initiating the payment"}),"\n",(0,s.jsx)(t.h4,{id:"paymentstatusinitiated",children:(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["PaymentStatus.",(0,s.jsx)("b",{children:"Initiated"})]})})}),"\n",(0,s.jsx)(t.p,{children:"when the payment has been initiated"}),"\n",(0,s.jsx)(t.h4,{id:"paymentstatusrejected",children:(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["PaymentStatus.",(0,s.jsx)("b",{children:"Rejected"})]})})}),"\n",(0,s.jsx)(t.p,{children:"when the payment has been rejected"}),"\n",(0,s.jsx)(t.h3,{id:"member-of",children:"Member Of"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"/objects/payment-consent-pending",children:(0,s.jsx)(t.code,{children:"PaymentConsentPending"})}),"  ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(o,{}),(0,s.jsx)(t.a,{href:"/inputs/payment-filters-input",children:(0,s.jsx)(t.code,{children:"PaymentFiltersInput"})}),"  ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"input"}),(0,s.jsx)(o,{}),(0,s.jsx)(t.a,{href:"/objects/payment-initiated",children:(0,s.jsx)(t.code,{children:"PaymentInitiated"})}),"  ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(o,{}),(0,s.jsx)(t.a,{href:"/objects/payment-rejected",children:(0,s.jsx)(t.code,{children:"PaymentRejected"})}),"  ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(o,{}),(0,s.jsx)(t.a,{href:"/interfaces/payment-status-info",children:(0,s.jsx)(t.code,{children:"PaymentStatusInfo"})}),"  ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"interface"})]})]})}function j(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(x,{...e})}):x(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>d,x:()=>r});var s=n(96540);const a={},i=s.createContext(a);function d(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);