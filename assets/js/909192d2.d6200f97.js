"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[67061],{57970:(e,n,t)=>{t.r(n),t.d(n,{Badge:()=>f,Bullet:()=>l,Details:()=>h,SpecifiedBy:()=>u,assets:()=>a,contentTitle:()=>s,default:()=>p,frontMatter:()=>c,metadata:()=>i,toc:()=>j});var r=t(74848),o=t(28453),d=t(96540);const c={id:"refund-rejection-code",title:"RefundRejectionCode"},s=void 0,i={id:"enums/refund-rejection-code",title:"RefundRejectionCode",description:"Reason code that explains why we can't refund the transactions",source:"@site/docs/enums/refund-rejection-code.mdx",sourceDirName:"enums",slug:"/enums/refund-rejection-code",permalink:"/enums/refund-rejection-code",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/enums/refund-rejection-code.mdx",tags:[],version:"current",frontMatter:{id:"refund-rejection-code",title:"RefundRejectionCode"},sidebar:"schemaSidebar",previous:{title:"ReceivedDirectDebitMandateStatus",permalink:"/enums/received-direct-debit-mandate-status"},next:{title:"RejectedFundingSourceReason",permalink:"/enums/rejected-funding-source-reason"}},a={},l=()=>{const e={span:"span",...(0,o.R)()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const n={a:"a",...(0,o.R)()};return(0,r.jsxs)(r.Fragment,{children:["Specification",(0,r.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},f=e=>{const n={span:"span",...(0,o.R)()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(n.span,{className:e.class,children:e.text})})},h=({dataOpen:e,dataClose:n,children:t,startOpen:c=!1})=>{const s={details:"details",summary:"summary",...(0,o.R)()},[i,a]=(0,d.useState)(c);return(0,r.jsxs)(s.details,{...i?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,r.jsx)(s.summary,{onClick:e=>{e.preventDefault(),a((e=>!e))},style:{listStyle:"none"},children:i?e:n}),i&&t]})},j=[{value:"Values",id:"values",level:3},{value:"<code>RefundRejectionCode.<b>TransactionNotFound</b></code>",id:"refundrejectioncodetransactionnotfound",level:4},{value:"<code>RefundRejectionCode.<b>TransactionNonRefundable</b></code>",id:"refundrejectioncodetransactionnonrefundable",level:4},{value:"<code>RefundRejectionCode.<b>ServerError</b></code>",id:"refundrejectioncodeservererror",level:4},{value:"Member Of",id:"member-of",level:3}];function m(e){const n={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Reason code that explains why we can't refund the transactions"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-graphql",children:"enum RefundRejectionCode {\n  TransactionNotFound\n  TransactionNonRefundable\n  ServerError\n}\n"})}),"\n",(0,r.jsx)(n.h3,{id:"values",children:"Values"}),"\n",(0,r.jsx)(n.h4,{id:"refundrejectioncodetransactionnotfound",children:(0,r.jsx)(n.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["RefundRejectionCode.",(0,r.jsx)("b",{children:"TransactionNotFound"})]})})}),"\n",(0,r.jsx)(n.p,{children:"The transaction couldn't be found or the user doesn't have the 'canInitiatePayment' rights on the account"}),"\n",(0,r.jsx)(n.h4,{id:"refundrejectioncodetransactionnonrefundable",children:(0,r.jsx)(n.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["RefundRejectionCode.",(0,r.jsx)("b",{children:"TransactionNonRefundable"})]})})}),"\n",(0,r.jsx)(n.p,{children:"The transaction status is not Booked"}),"\n",(0,r.jsx)(n.h4,{id:"refundrejectioncodeservererror",children:(0,r.jsx)(n.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["RefundRejectionCode.",(0,r.jsx)("b",{children:"ServerError"})]})})}),"\n",(0,r.jsx)(n.p,{children:"Error server"}),"\n",(0,r.jsx)(n.h3,{id:"member-of",children:"Member Of"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/objects/refund-rejection",children:(0,r.jsx)(n.code,{children:"RefundRejection"})}),"  ",(0,r.jsx)(f,{class:"badge badge--secondary",text:"object"})]})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>s});var r=t(96540);const o={},d=r.createContext(o);function c(e){const n=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);