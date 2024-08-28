"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[18535],{48733:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>f,Bullet:()=>l,Details:()=>m,SpecifiedBy:()=>u,assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>p});var a=n(74848),s=n(28453),c=n(96540);const o={id:"upcoming-transaction-status-info",title:"UpcomingTransactionStatusInfo"},i=void 0,r={id:"objects/upcoming-transaction-status-info",title:"UpcomingTransactionStatusInfo",description:"Upcoming transaction status information",source:"@site/docs/objects/upcoming-transaction-status-info.mdx",sourceDirName:"objects",slug:"/objects/upcoming-transaction-status-info",permalink:"/objects/upcoming-transaction-status-info",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/objects/upcoming-transaction-status-info.mdx",tags:[],version:"current",frontMatter:{id:"upcoming-transaction-status-info",title:"UpcomingTransactionStatusInfo"},sidebar:"schemaSidebar",previous:{title:"UnsavedSepaBeneficiary",permalink:"/objects/unsaved-sepa-beneficiary"},next:{title:"UpdateAccountHolderSuccessPayload",permalink:"/objects/update-account-holder-success-payload"}},d={},l=()=>{const e={span:"span",...(0,s.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const t={a:"a",...(0,s.R)()};return(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},f=e=>{const t={span:"span",...(0,s.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(t.span,{className:e.class,children:e.text})})},m=({dataOpen:e,dataClose:t,children:n,startOpen:o=!1})=>{const i={details:"details",summary:"summary",...(0,s.R)()},[r,d]=(0,c.useState)(o);return(0,a.jsxs)(i.details,{...r?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)(i.summary,{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"},children:r?e:t}),r&&n]})},p=[{value:"Fields",id:"fields",level:3},{value:'<code>UpcomingTransactionStatusInfo.<b>status</b></code><Bullet></Bullet><code>TransactionStatus!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"upcomingtransactionstatusinfostatustransactionstatus--",level:4},{value:'<code>UpcomingTransactionStatusInfo.<b>executionDate</b></code><Bullet></Bullet><code>DateTime!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"upcomingtransactionstatusinfoexecutiondatedatetime--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>TransactionStatusInfo</code> <Badge class="badge badge--secondary"></Badge>',id:"transactionstatusinfo-",level:4}];function g(e){const t={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"Upcoming transaction status information"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-graphql",children:"type UpcomingTransactionStatusInfo implements TransactionStatusInfo {\n  status: TransactionStatus!\n  executionDate: DateTime!\n}\n"})}),"\n",(0,a.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,a.jsxs)(t.h4,{id:"upcomingtransactionstatusinfostatustransactionstatus--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["UpcomingTransactionStatusInfo.",(0,a.jsx)("b",{children:"status"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(t.a,{href:"/enums/transaction-status",children:(0,a.jsx)(t.code,{children:"TransactionStatus!"})})," ",(0,a.jsx)(f,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(f,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,a.jsx)(t.p,{children:"status of the transaction"}),"\n",(0,a.jsxs)(t.h4,{id:"upcomingtransactionstatusinfoexecutiondatedatetime--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["UpcomingTransactionStatusInfo.",(0,a.jsx)("b",{children:"executionDate"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(t.a,{href:"/scalars/date-time",children:(0,a.jsx)(t.code,{children:"DateTime!"})})," ",(0,a.jsx)(f,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(f,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsx)(t.p,{children:"The date when the transaction will be executed"}),"\n",(0,a.jsx)(t.h3,{id:"interfaces",children:"Interfaces"}),"\n",(0,a.jsxs)(t.h4,{id:"transactionstatusinfo-",children:[(0,a.jsx)(t.a,{href:"/interfaces/transaction-status-info",children:(0,a.jsx)(t.code,{children:"TransactionStatusInfo"})})," ",(0,a.jsx)(f,{class:"badge badge--secondary",text:"interface"})]}),"\n",(0,a.jsx)(t.p,{children:"Transaction Status information"})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(g,{...e})}):g(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>i});var a=n(96540);const s={},c=a.createContext(s);function o(e){const t=a.useContext(c);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),a.createElement(c.Provider,{value:t},e.children)}}}]);