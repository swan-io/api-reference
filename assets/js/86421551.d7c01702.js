"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[34387],{16698:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>m,Bullet:()=>l,Details:()=>f,SpecifiedBy:()=>u,assets:()=>d,contentTitle:()=>c,default:()=>x,frontMatter:()=>o,metadata:()=>i,toc:()=>h});var a=n(74848),s=n(28453),r=n(96540);const o={id:"transaction-statement-status-info-generated",title:"TransactionStatementStatusInfoGenerated"},c=void 0,i={id:"objects/transaction-statement-status-info-generated",title:"TransactionStatementStatusInfoGenerated",description:"No description",source:"@site/docs/objects/transaction-statement-status-info-generated.mdx",sourceDirName:"objects",slug:"/objects/transaction-statement-status-info-generated",permalink:"/objects/transaction-statement-status-info-generated",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/objects/transaction-statement-status-info-generated.mdx",tags:[],version:"current",frontMatter:{id:"transaction-statement-status-info-generated",title:"TransactionStatementStatusInfoGenerated"},sidebar:"schemaSidebar",previous:{title:"TransactionStatementStatusInfoFailed",permalink:"/objects/transaction-statement-status-info-failed"},next:{title:"TransactionStatementStatusInfoPending",permalink:"/objects/transaction-statement-status-info-pending"}},d={},l=()=>{const e={span:"span",...(0,s.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const t={a:"a",...(0,s.R)()};return(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},m=e=>{const t={span:"span",...(0,s.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(t.span,{className:e.class,children:e.text})})},f=({dataOpen:e,dataClose:t,children:n,startOpen:o=!1})=>{const c={details:"details",summary:"summary",...(0,s.R)()},[i,d]=(0,r.useState)(o);return(0,a.jsxs)(c.details,{...i?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)(c.summary,{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"},children:i?e:t}),i&&n]})},h=[{value:"Fields",id:"fields",level:3},{value:'<code>TransactionStatementStatusInfoGenerated.<b>status</b></code><Bullet></Bullet><code>TransactionStatementStatusEnum!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"transactionstatementstatusinfogeneratedstatustransactionstatementstatusenum--",level:4},{value:'<code>TransactionStatementStatusInfoGenerated.<b>url</b></code><Bullet></Bullet><code>URL!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"transactionstatementstatusinfogeneratedurlurl--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>TransactionStatementStatusInfo</code> <Badge class="badge badge--secondary"></Badge>',id:"transactionstatementstatusinfo-",level:4}];function g(e){const t={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"No description"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-graphql",children:"type TransactionStatementStatusInfoGenerated implements TransactionStatementStatusInfo {\n  status: TransactionStatementStatusEnum!\n  url: URL!\n}\n"})}),"\n",(0,a.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,a.jsxs)(t.h4,{id:"transactionstatementstatusinfogeneratedstatustransactionstatementstatusenum--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["TransactionStatementStatusInfoGenerated.",(0,a.jsx)("b",{children:"status"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(t.a,{href:"/enums/transaction-statement-status-enum",children:(0,a.jsx)(t.code,{children:"TransactionStatementStatusEnum!"})})," ",(0,a.jsx)(m,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(m,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,a.jsx)(t.p,{children:"status of the transaction statement"}),"\n",(0,a.jsxs)(t.h4,{id:"transactionstatementstatusinfogeneratedurlurl--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["TransactionStatementStatusInfoGenerated.",(0,a.jsx)("b",{children:"url"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(t.a,{href:"/scalars/url",children:(0,a.jsx)(t.code,{children:"URL!"})})," ",(0,a.jsx)(m,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(m,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsx)(t.p,{children:"temporary public url on which the file can be accessed"}),"\n",(0,a.jsx)(t.h3,{id:"interfaces",children:"Interfaces"}),"\n",(0,a.jsxs)(t.h4,{id:"transactionstatementstatusinfo-",children:[(0,a.jsx)(t.a,{href:"/interfaces/transaction-statement-status-info",children:(0,a.jsx)(t.code,{children:"TransactionStatementStatusInfo"})})," ",(0,a.jsx)(m,{class:"badge badge--secondary",text:"interface"})]})]})}function x(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(g,{...e})}):g(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>c});var a=n(96540);const s={},r=a.createContext(s);function o(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);