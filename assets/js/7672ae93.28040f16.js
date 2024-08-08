"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[79197],{69366:(e,n,t)=>{t.r(n),t.d(n,{Badge:()=>x,Bullet:()=>l,Details:()=>j,SpecifiedBy:()=>h,assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>c,metadata:()=>d,toc:()=>b});var s=t(74848),a=t(28453),r=t(96540);const c={id:"transaction-side",title:"TransactionSide"},i=void 0,d={id:"enums/transaction-side",title:"TransactionSide",description:"Transaction side",source:"@site/docs/enums/transaction-side.mdx",sourceDirName:"enums",slug:"/enums/transaction-side",permalink:"/enums/transaction-side",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/enums/transaction-side.mdx",tags:[],version:"current",frontMatter:{id:"transaction-side",title:"TransactionSide"},sidebar:"schemaSidebar",previous:{title:"TransactionReasonCode",permalink:"/enums/transaction-reason-code"},next:{title:"TransactionStatementStatusEnum",permalink:"/enums/transaction-statement-status-enum"}},o={},l=()=>{const e={span:"span",...(0,a.R)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},h=e=>{const n={a:"a",...(0,a.R)()};return(0,s.jsxs)(s.Fragment,{children:["Specification",(0,s.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},x=e=>{const n={span:"span",...(0,a.R)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(n.span,{className:e.class,children:e.text})})},j=({dataOpen:e,dataClose:n,children:t,startOpen:c=!1})=>{const i={details:"details",summary:"summary",...(0,a.R)()},[d,o]=(0,r.useState)(c);return(0,s.jsxs)(i.details,{...d?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,s.jsx)(i.summary,{onClick:e=>{e.preventDefault(),o((e=>!e))},style:{listStyle:"none"},children:d?e:n}),d&&t]})},b=[{value:"Values",id:"values",level:3},{value:"<code>TransactionSide.<b>Debit</b></code>",id:"transactionsidedebit",level:4},{value:"<code>TransactionSide.<b>Credit</b></code>",id:"transactionsidecredit",level:4},{value:"Member Of",id:"member-of",level:3}];function u(e){const n={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Transaction side"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-graphql",children:"enum TransactionSide {\n  Debit\n  Credit\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"values",children:"Values"}),"\n",(0,s.jsx)(n.h4,{id:"transactionsidedebit",children:(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["TransactionSide.",(0,s.jsx)("b",{children:"Debit"})]})})}),"\n",(0,s.jsx)(n.p,{children:"when the transaction debit the account"}),"\n",(0,s.jsx)(n.h4,{id:"transactionsidecredit",children:(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["TransactionSide.",(0,s.jsx)("b",{children:"Credit"})]})})}),"\n",(0,s.jsx)(n.p,{children:"when the transaction credit the account"}),"\n",(0,s.jsx)(n.h3,{id:"member-of",children:"Member Of"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/objects/card-transaction",children:(0,s.jsx)(n.code,{children:"CardTransaction"})}),"  ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(l,{}),(0,s.jsx)(n.a,{href:"/objects/check-transaction",children:(0,s.jsx)(n.code,{children:"CheckTransaction"})}),"  ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(l,{}),(0,s.jsx)(n.a,{href:"/objects/fee-transaction",children:(0,s.jsx)(n.code,{children:"FeeTransaction"})}),"  ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(l,{}),(0,s.jsx)(n.a,{href:"/objects/internal-credit-transfer",children:(0,s.jsx)(n.code,{children:"InternalCreditTransfer"})}),"  ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(l,{}),(0,s.jsx)(n.a,{href:"/objects/internal-direct-debit-transaction",children:(0,s.jsx)(n.code,{children:"InternalDirectDebitTransaction"})}),"  ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(l,{}),(0,s.jsx)(n.a,{href:"/objects/international-credit-transfer-transaction",children:(0,s.jsx)(n.code,{children:"InternationalCreditTransferTransaction"})}),"  ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(l,{}),(0,s.jsx)(n.a,{href:"/objects/sepacredit-transfer-transaction",children:(0,s.jsx)(n.code,{children:"SEPACreditTransferTransaction"})}),"  ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(l,{}),(0,s.jsx)(n.a,{href:"/objects/sepadirect-debit-transaction",children:(0,s.jsx)(n.code,{children:"SEPADirectDebitTransaction"})}),"  ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(l,{}),(0,s.jsx)(n.a,{href:"/interfaces/transaction",children:(0,s.jsx)(n.code,{children:"Transaction"})}),"  ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"interface"})]})]})}function m(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>i});var s=t(96540);const a={},r=s.createContext(a);function c(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);