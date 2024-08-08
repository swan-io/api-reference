"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[39393],{63723:(e,n,t)=>{t.r(n),t.d(n,{Badge:()=>j,Bullet:()=>l,Details:()=>h,SpecifiedBy:()=>u,assets:()=>d,contentTitle:()=>r,default:()=>f,frontMatter:()=>c,metadata:()=>i,toc:()=>g});var a=t(74848),s=t(28453),o=t(96540);const c={id:"transaction-not-found-rejection",title:"TransactionNotFoundRejection"},r=void 0,i={id:"objects/transaction-not-found-rejection",title:"TransactionNotFoundRejection",description:"Rejection returned if the transaction was not found",source:"@site/docs/objects/transaction-not-found-rejection.mdx",sourceDirName:"objects",slug:"/objects/transaction-not-found-rejection",permalink:"/objects/transaction-not-found-rejection",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/objects/transaction-not-found-rejection.mdx",tags:[],version:"current",frontMatter:{id:"transaction-not-found-rejection",title:"TransactionNotFoundRejection"},sidebar:"schemaSidebar",previous:{title:"TransactionEdge",permalink:"/objects/transaction-edge"},next:{title:"TransactionStatementStatusInfoExpired",permalink:"/objects/transaction-statement-status-info-expired"}},d={},l=()=>{const e={span:"span",...(0,s.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const n={a:"a",...(0,s.R)()};return(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},j=e=>{const n={span:"span",...(0,s.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(n.span,{className:e.class,children:e.text})})},h=({dataOpen:e,dataClose:n,children:t,startOpen:c=!1})=>{const r={details:"details",summary:"summary",...(0,s.R)()},[i,d]=(0,o.useState)(c);return(0,a.jsxs)(r.details,{...i?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)(r.summary,{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"},children:i?e:n}),i&&t]})},g=[{value:"Fields",id:"fields",level:3},{value:'<code>TransactionNotFoundRejection.<b>transactionId</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"transactionnotfoundrejectiontransactionidid--",level:4},{value:'<code>TransactionNotFoundRejection.<b>message</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"transactionnotfoundrejectionmessagestring--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>Rejection</code> <Badge class="badge badge--secondary"></Badge>',id:"rejection-",level:4},{value:"Implemented By",id:"implemented-by",level:3}];function x(e){const n={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"Rejection returned if the transaction was not found"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-graphql",children:"type TransactionNotFoundRejection implements Rejection {\n  transactionId: ID!\n  message: String!\n}\n"})}),"\n",(0,a.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,a.jsxs)(n.h4,{id:"transactionnotfoundrejectiontransactionidid--",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["TransactionNotFoundRejection.",(0,a.jsx)("b",{children:"transactionId"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(n.a,{href:"/scalars/id",children:(0,a.jsx)(n.code,{children:"ID!"})})," ",(0,a.jsx)(j,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(j,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(n.h4,{id:"transactionnotfoundrejectionmessagestring--",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["TransactionNotFoundRejection.",(0,a.jsx)("b",{children:"message"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(n.a,{href:"/scalars/string",children:(0,a.jsx)(n.code,{children:"String!"})})," ",(0,a.jsx)(j,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(j,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsx)(n.h3,{id:"interfaces",children:"Interfaces"}),"\n",(0,a.jsxs)(n.h4,{id:"rejection-",children:[(0,a.jsx)(n.a,{href:"/interfaces/rejection",children:(0,a.jsx)(n.code,{children:"Rejection"})})," ",(0,a.jsx)(j,{class:"badge badge--secondary",text:"interface"})]}),"\n",(0,a.jsx)(n.h3,{id:"implemented-by",children:"Implemented By"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"/unions/return-transaction-payload",children:(0,a.jsx)(n.code,{children:"ReturnTransactionPayload"})}),"  ",(0,a.jsx)(j,{class:"badge badge--secondary",text:"union"})]})]})}function f(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(x,{...e})}):x(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>r});var a=t(96540);const s={},o=a.createContext(s);function c(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);