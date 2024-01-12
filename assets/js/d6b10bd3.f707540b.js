"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[43925],{26271:(e,a,s)=>{s.r(a),s.d(a,{Badge:()=>f,Bullet:()=>l,Details:()=>x,SpecifiedBy:()=>u,assets:()=>i,contentTitle:()=>d,default:()=>b,frontMatter:()=>r,metadata:()=>c,toc:()=>h});var t=s(85893),n=s(11151),o=s(67294);const r={id:"released-transaction-status-info",title:"ReleasedTransactionStatusInfo"},d=void 0,c={id:"objects/released-transaction-status-info",title:"ReleasedTransactionStatusInfo",description:"Released card transaction status information",source:"@site/docs/objects/released-transaction-status-info.mdx",sourceDirName:"objects",slug:"/objects/released-transaction-status-info",permalink:"/objects/released-transaction-status-info",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/objects/released-transaction-status-info.mdx",tags:[],version:"current",frontMatter:{id:"released-transaction-status-info",title:"ReleasedTransactionStatusInfo"},sidebar:"schemaSidebar",previous:{title:"RejectedVerificationStatusInfo",permalink:"/objects/rejected-verification-status-info"},next:{title:"ReportDocumentFile",permalink:"/objects/report-document-file"}},i={},l=()=>{const e={span:"span",...(0,n.a)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const a={a:"a",...(0,n.a)()};return(0,t.jsxs)(t.Fragment,{children:["Specification",(0,t.jsx)(a.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},f=e=>{const a={span:"span",...(0,n.a)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(a.span,{className:e.class,children:e.text})})},h=[{value:"Fields",id:"fields",level:3},{value:'<code>ReleasedTransactionStatusInfo.<b>status</b></code><Bullet></Bullet><code>TransactionStatus!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"releasedtransactionstatusinfostatustransactionstatus--",level:4},{value:'<code>ReleasedTransactionStatusInfo.<b>releaseDate</b></code><Bullet></Bullet><code>DateTime!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"releasedtransactionstatusinforeleasedatedatetime--",level:4},{value:'<code>ReleasedTransactionStatusInfo.<b>reason</b></code><Bullet></Bullet><code>ReleasedReason!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"releasedtransactionstatusinforeasonreleasedreason--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>TransactionStatusInfo</code> <Badge class="badge badge--secondary"></Badge>',id:"transactionstatusinfo-",level:4}],x=({dataOpen:e,dataClose:a,children:s,startOpen:r=!1})=>{const d={details:"details",summary:"summary",...(0,n.a)()},[c,i]=(0,o.useState)(r);return(0,t.jsxs)(d.details,{...c?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,t.jsx)(d.summary,{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"},children:c?e:a}),c&&s]})};function j(e){const a={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.p,{children:"Released card transaction status information"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-graphql",children:"type ReleasedTransactionStatusInfo implements TransactionStatusInfo {\n  status: TransactionStatus!\n  releaseDate: DateTime!\n  reason: ReleasedReason!\n}\n"})}),"\n",(0,t.jsx)(a.h3,{id:"fields",children:"Fields"}),"\n",(0,t.jsxs)(a.h4,{id:"releasedtransactionstatusinfostatustransactionstatus--",children:[(0,t.jsx)(a.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["ReleasedTransactionStatusInfo.",(0,t.jsx)("b",{children:"status"})]})}),(0,t.jsx)(l,{}),(0,t.jsx)(a.a,{href:"/enums/transaction-status",children:(0,t.jsx)(a.code,{children:"TransactionStatus!"})})," ",(0,t.jsx)(f,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(f,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,t.jsxs)(a.blockquote,{children:["\n",(0,t.jsx)(a.p,{children:"status of the transaction"}),"\n"]}),"\n",(0,t.jsxs)(a.h4,{id:"releasedtransactionstatusinforeleasedatedatetime--",children:[(0,t.jsx)(a.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["ReleasedTransactionStatusInfo.",(0,t.jsx)("b",{children:"releaseDate"})]})}),(0,t.jsx)(l,{}),(0,t.jsx)(a.a,{href:"/scalars/date-time",children:(0,t.jsx)(a.code,{children:"DateTime!"})})," ",(0,t.jsx)(f,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(f,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsxs)(a.blockquote,{children:["\n",(0,t.jsx)(a.p,{children:"The date when the transaction was released"}),"\n"]}),"\n",(0,t.jsxs)(a.h4,{id:"releasedtransactionstatusinforeasonreleasedreason--",children:[(0,t.jsx)(a.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["ReleasedTransactionStatusInfo.",(0,t.jsx)("b",{children:"reason"})]})}),(0,t.jsx)(l,{}),(0,t.jsx)(a.a,{href:"/enums/released-reason",children:(0,t.jsx)(a.code,{children:"ReleasedReason!"})})," ",(0,t.jsx)(f,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(f,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,t.jsxs)(a.blockquote,{children:["\n",(0,t.jsx)(a.p,{children:"reason of the released transaction"}),"\n"]}),"\n",(0,t.jsx)(a.h3,{id:"interfaces",children:"Interfaces"}),"\n",(0,t.jsxs)(a.h4,{id:"transactionstatusinfo-",children:[(0,t.jsx)(a.a,{href:"/interfaces/transaction-status-info",children:(0,t.jsx)(a.code,{children:"TransactionStatusInfo"})})," ",(0,t.jsx)(f,{class:"badge badge--secondary",text:"interface"})]}),"\n",(0,t.jsxs)(a.blockquote,{children:["\n",(0,t.jsx)(a.p,{children:"Transaction Status information"}),"\n"]})]})}function b(e={}){const{wrapper:a}={...(0,n.a)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(j,{...e})}):j(e)}},11151:(e,a,s)=>{s.d(a,{Z:()=>d,a:()=>r});var t=s(67294);const n={},o=t.createContext(n);function r(e){const a=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function d(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),t.createElement(o.Provider,{value:a},e.children)}}}]);