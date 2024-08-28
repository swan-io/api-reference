"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[36389],{92815:(e,n,t)=>{t.r(n),t.d(n,{Badge:()=>u,Bullet:()=>o,Details:()=>h,SpecifiedBy:()=>m,assets:()=>d,contentTitle:()=>c,default:()=>y,frontMatter:()=>i,metadata:()=>r,toc:()=>p});var a=t(74848),l=t(28453),s=t(96540);const i={id:"payment-level",title:"PaymentLevel"},c=void 0,r={id:"enums/payment-level",title:"PaymentLevel",description:"Payment Level of the account",source:"@site/docs/enums/payment-level.mdx",sourceDirName:"enums",slug:"/enums/payment-level",permalink:"/enums/payment-level",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/enums/payment-level.mdx",tags:[],version:"current",frontMatter:{id:"payment-level",title:"PaymentLevel"},sidebar:"schemaSidebar",previous:{title:"PaymentAccountType",permalink:"/enums/payment-account-type"},next:{title:"PaymentMandateCanceledReason",permalink:"/enums/payment-mandate-canceled-reason"}},d={},o=()=>{const e={span:"span",...(0,l.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},m=e=>{const n={a:"a",...(0,l.R)()};return(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const n={span:"span",...(0,l.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(n.span,{className:e.class,children:e.text})})},h=({dataOpen:e,dataClose:n,children:t,startOpen:i=!1})=>{const c={details:"details",summary:"summary",...(0,l.R)()},[r,d]=(0,s.useState)(i);return(0,a.jsxs)(c.details,{...r?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)(c.summary,{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"},children:r?e:n}),r&&t]})},p=[{value:"Values",id:"values",level:3},{value:"<code>PaymentLevel.<b>Limited</b></code>",id:"paymentlevellimited",level:4},{value:"<code>PaymentLevel.<b>Unlimited</b></code>",id:"paymentlevelunlimited",level:4},{value:"Member Of",id:"member-of",level:3}];function x(e){const n={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,l.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"Payment Level of the account"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-graphql",children:"enum PaymentLevel {\n  Limited\n  Unlimited\n}\n"})}),"\n",(0,a.jsx)(n.h3,{id:"values",children:"Values"}),"\n",(0,a.jsx)(n.h4,{id:"paymentlevellimited",children:(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["PaymentLevel.",(0,a.jsx)("b",{children:"Limited"})]})})}),"\n",(0,a.jsx)(n.p,{children:"When the account is limited to 0\u20ac within 30 days and with no IBAN"}),"\n",(0,a.jsx)(n.h4,{id:"paymentlevelunlimited",children:(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["PaymentLevel.",(0,a.jsx)("b",{children:"Unlimited"})]})})}),"\n",(0,a.jsx)(n.p,{children:"When the account holder is fully verified and then the account is unlimited with an IBAN"}),"\n",(0,a.jsx)(n.h3,{id:"member-of",children:"Member Of"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"/objects/account",children:(0,a.jsx)(n.code,{children:"Account"})}),"  ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(o,{}),(0,a.jsx)(n.a,{href:"/inputs/account-filter-input",children:(0,a.jsx)(n.code,{children:"AccountFilterInput"})}),"  ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"input"})]})]})}function y(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(x,{...e})}):x(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>c});var a=t(96540);const l={},s=a.createContext(l);function i(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);