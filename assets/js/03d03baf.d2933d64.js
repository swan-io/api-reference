"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[52726],{56210:(e,s,t)=>{t.r(s),t.d(s,{Badge:()=>g,Bullet:()=>r,Details:()=>h,SpecifiedBy:()=>u,assets:()=>i,contentTitle:()=>d,default:()=>j,frontMatter:()=>o,metadata:()=>l,toc:()=>x});var n=t(74848),a=t(28453),c=t(96540);const o={id:"account-closing-status",title:"AccountClosingStatus"},d=void 0,l={id:"objects/account-closing-status",title:"AccountClosingStatus",description:"Account Closing status information",source:"@site/docs/objects/account-closing-status.mdx",sourceDirName:"objects",slug:"/objects/account-closing-status",permalink:"/objects/account-closing-status",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/objects/account-closing-status.mdx",tags:[],version:"current",frontMatter:{id:"account-closing-status",title:"AccountClosingStatus"},sidebar:"schemaSidebar",previous:{title:"AccountClosedStatus",permalink:"/objects/account-closed-status"},next:{title:"AccountConnection",permalink:"/objects/account-connection"}},i={},r=()=>{const e={span:"span",...(0,a.R)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const s={a:"a",...(0,a.R)()};return(0,n.jsxs)(n.Fragment,{children:["Specification",(0,n.jsx)(s.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},g=e=>{const s={span:"span",...(0,a.R)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(s.span,{className:e.class,children:e.text})})},h=({dataOpen:e,dataClose:s,children:t,startOpen:o=!1})=>{const d={details:"details",summary:"summary",...(0,a.R)()},[l,i]=(0,c.useState)(o);return(0,n.jsxs)(d.details,{...l?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,n.jsx)(d.summary,{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"},children:l?e:s}),l&&t]})},x=[{value:"Fields",id:"fields",level:3},{value:'<code>AccountClosingStatus.<b>status</b></code><Bullet></Bullet><code>AccountStatus!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"accountclosingstatusstatusaccountstatus--",level:4},{value:'<code>AccountClosingStatus.<b>reason</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--deprecated badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"accountclosingstatusreasonstring---",level:4},{value:'<code>AccountClosingStatus.<b>reasonInfo</b></code><Bullet></Bullet><code>CloseAccountStatusReason!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"accountclosingstatusreasoninfocloseaccountstatusreason--",level:4},{value:'<code>AccountClosingStatus.<b>closingAt</b></code><Bullet></Bullet><code>DateTime!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"accountclosingstatusclosingatdatetime--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>AccountStatusInfo</code> <Badge class="badge badge--secondary"></Badge>',id:"accountstatusinfo-",level:4}];function b(e){const s={a:"a",admonition:"admonition",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.p,{children:"Account Closing status information"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-graphql",children:"type AccountClosingStatus implements AccountStatusInfo {\n  status: AccountStatus!\n  reason: String! @deprecated\n  reasonInfo: CloseAccountStatusReason!\n  closingAt: DateTime!\n}\n"})}),"\n",(0,n.jsx)(s.h3,{id:"fields",children:"Fields"}),"\n",(0,n.jsxs)(s.h4,{id:"accountclosingstatusstatusaccountstatus--",children:[(0,n.jsx)(s.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["AccountClosingStatus.",(0,n.jsx)("b",{children:"status"})]})}),(0,n.jsx)(r,{}),(0,n.jsx)(s.a,{href:"/enums/account-status",children:(0,n.jsx)(s.code,{children:"AccountStatus!"})})," ",(0,n.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(g,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,n.jsx)(s.p,{children:"Account status (always Closing for type AccountClosingStatus)"}),"\n",(0,n.jsxs)(s.h4,{id:"accountclosingstatusreasonstring---",children:[(0,n.jsx)(s.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["AccountClosingStatus.",(0,n.jsx)("b",{children:"reason"})]})}),(0,n.jsx)(r,{}),(0,n.jsx)(s.a,{href:"/scalars/string",children:(0,n.jsx)(s.code,{children:"String!"})})," ",(0,n.jsx)(g,{class:"badge badge--deprecated badge--secondary",text:"deprecated"})," ",(0,n.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsx)(s.admonition,{title:"DEPRECATED",type:"warning",children:(0,n.jsxs)(s.p,{children:["Use ",(0,n.jsx)(s.code,{children:"reasonInfo"})," instead."]})}),"\n",(0,n.jsx)(s.p,{children:"Reason why the account is suspended"}),"\n",(0,n.jsxs)(s.h4,{id:"accountclosingstatusreasoninfocloseaccountstatusreason--",children:[(0,n.jsx)(s.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["AccountClosingStatus.",(0,n.jsx)("b",{children:"reasonInfo"})]})}),(0,n.jsx)(r,{}),(0,n.jsx)(s.a,{href:"/unions/close-account-status-reason",children:(0,n.jsx)(s.code,{children:"CloseAccountStatusReason!"})})," ",(0,n.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(g,{class:"badge badge--secondary",text:"union"})]}),"\n",(0,n.jsx)(s.p,{children:"Reason why the account is currently in closing"}),"\n",(0,n.jsxs)(s.h4,{id:"accountclosingstatusclosingatdatetime--",children:[(0,n.jsx)(s.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["AccountClosingStatus.",(0,n.jsx)("b",{children:"closingAt"})]})}),(0,n.jsx)(r,{}),(0,n.jsx)(s.a,{href:"/scalars/date-time",children:(0,n.jsx)(s.code,{children:"DateTime!"})})," ",(0,n.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsx)(s.h3,{id:"interfaces",children:"Interfaces"}),"\n",(0,n.jsxs)(s.h4,{id:"accountstatusinfo-",children:[(0,n.jsx)(s.a,{href:"/interfaces/account-status-info",children:(0,n.jsx)(s.code,{children:"AccountStatusInfo"})})," ",(0,n.jsx)(g,{class:"badge badge--secondary",text:"interface"})]})]})}function j(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(b,{...e})}):b(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>o,x:()=>d});var n=t(96540);const a={},c=n.createContext(a);function o(e){const s=n.useContext(c);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),n.createElement(c.Provider,{value:s},e.children)}}}]);